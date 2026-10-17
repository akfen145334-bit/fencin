import React, { useState, useMemo, useRef } from 'react';
import { Unit, SubTopic, LgsQuestion, TrueFalseQuestion } from '../types/curriculum';
import { balanceQuestionBankAnswers, sanitizeOptionText } from '../utils/questionQualityEngine';
import {
  Printer,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  Copy,
  Check,
  X,
  FileText,
  Sliders,
  Eye,
  BookOpen,
  GraduationCap,
  Layers,
  HelpCircle,
  Clock,
  Award,
  ShieldCheck
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  unit: Unit;
  subTopic: SubTopic;
}

export const AutomaticQuizPdfModal: React.FC<Props> = ({
  isOpen,
  onClose,
  unit,
  subTopic
}) => {
  // Test generation configuration
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [includeLgs, setIncludeLgs] = useState<boolean>(true);
  const [includeTf, setIncludeTf] = useState<boolean>(true);
  const [includeOpenEnded, setIncludeOpenEnded] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [schoolName, setSchoolName] = useState<string>('T.C. MİLLÎ EĞİTİM BAKANLIĞI ORTAOKULU');
  const [includeAnswerKey, setIncludeAnswerKey] = useState<boolean>(true);
  const [includeStudentInfo, setIncludeStudentInfo] = useState<boolean>(true);
  const [includeExplanations, setIncludeExplanations] = useState<boolean>(false);
  const [seed, setSeed] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  const printAreaRef = useRef<HTMLDivElement>(null);

  // Pool of questions for current subtopic and unit
  const lgsPool: LgsQuestion[] = useMemo(() => {
    const list: LgsQuestion[] = [];
    if (subTopic.lgsQuestions && subTopic.lgsQuestions.length > 0) {
      list.push(...subTopic.lgsQuestions);
    }
    // Also include from other subtopics of the same unit if needed to fulfill count
    unit.subTopics.forEach(s => {
      if (s.id !== subTopic.id && s.lgsQuestions) {
        list.push(...s.lgsQuestions);
      }
    });
    if (unit.unitEnd20Questions) {
      list.push(...unit.unitEnd20Questions);
    }
    return list;
  }, [subTopic, unit]);

  const tfPool: TrueFalseQuestion[] = useMemo(() => {
    const list: TrueFalseQuestion[] = [];
    if (subTopic.trueFalseQuestions && subTopic.trueFalseQuestions.length > 0) {
      list.push(...subTopic.trueFalseQuestions);
    }
    unit.subTopics.forEach(s => {
      if (s.id !== subTopic.id && s.trueFalseQuestions) {
        list.push(...s.trueFalseQuestions);
      }
    });
    return list;
  }, [subTopic, unit]);

  // Concept / open-ended questions from book activities
  const openEndedPool = useMemo(() => {
    const list: { question: string; answer: string; concept: string }[] = [];
    unit.subTopics.forEach(s => {
      s.concepts.forEach(c => {
        list.push({
          question: `Fen Bilimleri dersinde "${c}" kavramının tanımını ve günlük yaşamdaki önemini bir örnekle açıklayınız.`,
          answer: `${c} kavramı Türkiye Yüzyılı Maarif Modeli Fen Bilimleri müfredatında yer alan temel bir kavram olup, öğrencilerin bilimsel modelleme ve gözlem becerileriyle doğrudan ilişkilidir.`,
          concept: c
        });
      });
      if (s.bookActivities) {
        s.bookActivities.forEach(b => {
          if (b.prompt && b.interactiveAnswer) {
            list.push({
              question: `${b.title}: ${b.prompt}`,
              answer: b.interactiveAnswer,
              concept: s.shortTitle
            });
          }
        });
      }
    });
    return list;
  }, [unit]);

  // Generate test questions based on settings and seed
  const generatedExam = useMemo(() => {
    // Shuffle helper with deterministic seed influence
    const shuffle = <T,>(arr: T[]): T[] => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor((Math.sin(seed * 997 + i * 31) * 0.5 + 0.5) * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    const selectedQuestions: Array<{
      type: 'lgs' | 'tf' | 'open';
      id: number;
      questionPrompt: string;
      context?: string;
      visualData?: LgsQuestion['visualData'];
      options?: { key: string; text: string }[];
      correctAnswer: string;
      explanation?: string;
      concept?: string;
    }> = [];

    const shuffledLgs = shuffle(lgsPool);
    const shuffledTf = shuffle(tfPool);
    const shuffledOpen = shuffle(openEndedPool);

    let lgsIdx = 0;
    let tfIdx = 0;
    let openIdx = 0;

    const targetCount = questionCount;

    for (let i = 0; i < targetCount; i++) {
      // Pick based on allowed types
      const typesAvailable: ('lgs' | 'tf' | 'open')[] = [];
      if (includeLgs && lgsIdx < shuffledLgs.length) typesAvailable.push('lgs');
      if (includeTf && tfIdx < shuffledTf.length) typesAvailable.push('tf');
      if (includeOpenEnded && openIdx < shuffledOpen.length) typesAvailable.push('open');

      if (typesAvailable.length === 0) {
        // Fallback to whatever is available
        if (shuffledLgs.length > 0) typesAvailable.push('lgs');
        else if (shuffledTf.length > 0) typesAvailable.push('tf');
      }

      if (typesAvailable.length === 0) break;

      const pickType = typesAvailable[(i + seed) % typesAvailable.length];

      if (pickType === 'lgs' && lgsIdx < shuffledLgs.length) {
        const q = shuffledLgs[lgsIdx++];
        selectedQuestions.push({
          type: 'lgs',
          id: i + 1,
          questionPrompt: q.questionPrompt,
          context: q.context || q.scenario,
          visualData: q.visualData,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.detailedExplanation || q.explanation,
          concept: q.theme || q.skillTag
        });
      } else if (pickType === 'tf' && tfIdx < shuffledTf.length) {
        const q = shuffledTf[tfIdx++];
        selectedQuestions.push({
          type: 'tf',
          id: i + 1,
          questionPrompt: q.statement || q.text || '',
          context: 'Aşağıdaki ifadenin doğru (D) veya yanlış (Y) olduğunu belirleyiniz:',
          options: [
            { key: 'D', text: 'DOĞRU' },
            { key: 'Y', text: 'YANLIŞ' }
          ],
          correctAnswer: q.isCorrect ? 'D' : 'Y',
          explanation: q.explanation,
          concept: q.sourceContext || 'Doğru / Yanlış Analizi'
        });
      } else if (pickType === 'open' && openIdx < shuffledOpen.length) {
        const q = shuffledOpen[openIdx++];
        selectedQuestions.push({
          type: 'open',
          id: i + 1,
          questionPrompt: q.question,
          context: 'Açık Uçlu Soru: Cevabınızı ayrılan boşluğa gerekçesiyle yazınız.',
          correctAnswer: q.answer,
          explanation: q.answer,
          concept: q.concept
        });
      }
    }

    // MEB Ölçme ve Değerlendirme Kalite Standartları:
    // 1. Çoktan seçmeli (LGS) soruların doğru cevaplarını A, B, C, D seçeneklerine eşit olarak dağıt
    // 2. Parantez içi ipuçlarını kaldır ve çeldirici cümle uzunluklarını doğru cevapla dengele
    const lgsIndices: number[] = [];
    selectedQuestions.forEach((q, idx) => {
      if (q.type === 'lgs' && q.options && q.options.length === 4) {
        lgsIndices.push(idx);
      }
    });

    if (lgsIndices.length > 0) {
      const lgsToBalance = lgsIndices.map(idx => selectedQuestions[idx]);
      const balanced = balanceQuestionBankAnswers(lgsToBalance, seed);
      lgsIndices.forEach((origIdx, bIdx) => {
        selectedQuestions[origIdx] = {
          ...selectedQuestions[origIdx],
          options: balanced[bIdx].options,
          correctAnswer: balanced[bIdx].correctAnswer,
          explanation: balanced[bIdx].explanation
        };
      });
    }

    // 3. Doğru/Yanlış ve Açık Uçlu seçeneklerindeki parantez kalıntılarını temizle
    selectedQuestions.forEach(q => {
      if (q.options) {
        q.options = q.options.map(o => ({ ...o, text: sanitizeOptionText(o.text) }));
      }
    });

    return selectedQuestions;
  }, [seed, questionCount, includeLgs, includeTf, includeOpenEnded, lgsPool, tfPool, openEndedPool]);

  // Cevap anahtarı ve kalite istatistikleri
  const answerStats = useMemo(() => {
    const counts = { A: 0, B: 0, C: 0, D: 0, D_TF: 0, Y_TF: 0, totalLgs: 0, totalTf: 0 };
    generatedExam.forEach(q => {
      if (q.type === 'lgs') {
        counts.totalLgs++;
        if (q.correctAnswer === 'A') counts.A++;
        else if (q.correctAnswer === 'B') counts.B++;
        else if (q.correctAnswer === 'C') counts.C++;
        else if (q.correctAnswer === 'D') counts.D++;
      } else if (q.type === 'tf') {
        counts.totalTf++;
        if (q.correctAnswer === 'D') counts.D_TF++;
        else if (q.correctAnswer === 'Y') counts.Y_TF++;
      }
    });
    return counts;
  }, [generatedExam]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleRegenerate = () => {
    setSeed(prev => prev + 1);
  };

  const handleCopyClipboard = () => {
    let text = `${schoolName}\n`;
    text += `${unit.grade || 5}. SINIF FEN BİLİMLERİ - ${unit.unitNumber}. ÜNİTE (${unit.title})\n`;
    text += `BÖLÜM: ${subTopic.shortTitle} - ${subTopic.title}\n`;
    text += `Adı Soyadı: ........................................... Sınıfı/No: ................\n\n`;

    generatedExam.forEach((q, idx) => {
      text += `SORU ${idx + 1}:\n`;
      if (q.context) text += `[Bağlam]: ${q.context}\n`;
      text += `${q.questionPrompt}\n`;
      if (q.options) {
        q.options.forEach(o => {
          text += `  ${o.key}) ${o.text}\n`;
        });
      }
      text += '\n';
    });

    if (includeAnswerKey) {
      text += `\n--- CEVAP ANAHTARI ---\n`;
      generatedExam.forEach((q, idx) => {
        text += `${idx + 1}. Soru: ${q.correctAnswer}\n`;
      });
    }

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#F8FAF9] text-slate-900 rounded-3xl border border-slate-300 shadow-2xl max-w-5xl w-full max-h-[94vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Modal Header */}
        <div className="bg-white border-b border-slate-200 px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
              <Printer className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Otomatik Soru Üreteci
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  MEB & Maarif Uyumlu PDF Çıktı
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 font-fredoka">
                {subTopic.shortTitle} • Sınav Hazırlama & PDF Çıktı Alma
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>PDF / Yazdır</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Configuration Bar */}
        <div className="bg-white/90 border-b border-slate-200 px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            {/* Question count selector */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-600 px-2">Soru Sayısı:</span>
              {[5, 10, 15, 20].map(cnt => (
                <button
                  key={cnt}
                  onClick={() => setQuestionCount(cnt)}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    questionCount === cnt
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cnt}
                </button>
              ))}
            </div>

            {/* Question types */}
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-1.5 font-semibold text-slate-700 cursor-pointer bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100">
                <input
                  type="checkbox"
                  checked={includeLgs}
                  onChange={e => setIncludeLgs(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>LGS Çoktan Seçmeli</span>
              </label>

              <label className="flex items-center gap-1.5 font-semibold text-slate-700 cursor-pointer bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100">
                <input
                  type="checkbox"
                  checked={includeTf}
                  onChange={e => setIncludeTf(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>Doğru / Yanlış</span>
              </label>

              <label className="flex items-center gap-1.5 font-semibold text-slate-700 cursor-pointer bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100">
                <input
                  type="checkbox"
                  checked={includeOpenEnded}
                  onChange={e => setIncludeOpenEnded(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>Açık Uçlu Kavram</span>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRegenerate}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center gap-1.5 transition-colors border border-slate-200 cursor-pointer"
              title="Soruları Rastgele Yeniden Seç"
            >
              <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
              <span>Yeniden Karıştır</span>
            </button>

            <button
              onClick={handleCopyClipboard}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center gap-1.5 transition-colors border border-slate-200 cursor-pointer"
              title="Sınav Metnini Panoya Kopyala"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Kopyalandı!' : 'Kopyala'}</span>
            </button>
          </div>
        </div>

        {/* Options Row */}
        <div className="bg-slate-50 border-b border-slate-200 px-5 sm:px-8 py-2.5 flex flex-wrap items-center gap-4 text-xs shrink-0">
          <label className="flex items-center gap-1.5 font-medium text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={includeStudentInfo}
              onChange={e => setIncludeStudentInfo(e.target.checked)}
              className="rounded text-emerald-600"
            />
            <span>Öğrenci Bilgi Alanı (Adı Soyadı, No, Puan)</span>
          </label>

          <label className="flex items-center gap-1.5 font-medium text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={includeAnswerKey}
              onChange={e => setIncludeAnswerKey(e.target.checked)}
              className="rounded text-emerald-600"
            />
            <span>Cevap Anahtarını Ekle</span>
          </label>

          <label className="flex items-center gap-1.5 font-medium text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={includeExplanations}
              onChange={e => setIncludeExplanations(e.target.checked)}
              className="rounded text-emerald-600"
            />
            <span>Çözüm Adımlarını Göster (Öğretmen Nüshası)</span>
          </label>
        </div>

        {/* MEB Maarif Ölçme ve Değerlendirme Kalite Güvencesi */}
        <div className="bg-emerald-50/80 border-b border-emerald-200/80 px-5 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-emerald-600 text-white flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
            <span className="font-bold text-emerald-950">
              MEB Ölçme ve Değerlendirme Standartları Devrede:
            </span>
            <span className="text-emerald-800">
              Parantez içi ipuçları engellendi, çeldiriciler eşit uzunlukta dengelendi.
            </span>
          </div>

          {answerStats.totalLgs > 0 && (
            <div className="flex items-center gap-2 font-mono font-bold text-[11px] text-emerald-900 bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
              <span className="text-slate-500 font-sans font-semibold">Doğru Cevap Dağılımı:</span>
              <span className="text-emerald-700">A ({answerStats.A})</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700">B ({answerStats.B})</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700">C ({answerStats.C})</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700">D ({answerStats.D})</span>
              <span className="text-emerald-600 font-sans font-normal ml-1">(Eşit Dağılım)</span>
            </div>
          )}
        </div>

        {/* Printable & Scrollable Exam Sheet Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#F4F6F5]" id="printable-exam-area">
          <div
            ref={printAreaRef}
            className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-300 p-6 sm:p-10 shadow-lg text-slate-900 print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-full"
          >
            {/* School & Exam Header */}
            <div className="border-b-2 border-slate-900 pb-4 mb-6 text-center space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <span>TÜRKİYE YÜZYILI MAARİF MODELİ</span>
                <span>FEN BİLİMLERİ DERSİ</span>
              </div>
              <h1 className="text-base sm:text-xl font-black uppercase tracking-wider text-slate-900">
                {schoolName}
              </h1>
              <h2 className="text-sm sm:text-base font-bold text-emerald-800">
                {unit.grade || 5}. SINIF {unit.unitNumber}. ÜNİTE: {unit.title.toUpperCase()}
              </h2>
              <div className="inline-block bg-slate-100 border border-slate-300 px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                {subTopic.shortTitle} • {subTopic.title} Değerlendirme Testi
              </div>
            </div>

            {/* Student Info Box */}
            {includeStudentInfo && (
              <div className="border border-slate-400 rounded-xl p-3 mb-6 bg-slate-50/50 text-xs font-bold grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div>
                  <span className="text-slate-500">Adı ve Soyadı:</span>
                  <div className="border-b border-dotted border-slate-400 h-5" />
                </div>
                <div>
                  <span className="text-slate-500">Sınıfı / Şubesi & No:</span>
                  <div className="border-b border-dotted border-slate-400 h-5" />
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3">
                  <span className="text-slate-500">Aldığı Puan:</span>
                  <div className="w-16 h-8 border-2 border-slate-900 rounded-lg flex items-center justify-center font-mono font-black text-sm bg-white">
                    / 100
                  </div>
                </div>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-6">
              {generatedExam.map((q, idx) => (
                <div
                  key={idx}
                  className="pb-5 border-b border-slate-200 last:border-b-0 space-y-2.5 break-inside-avoid"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono font-black text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div className="space-y-2 flex-1">
                      {/* Context / Scenario Box */}
                      {q.context && (
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                          {q.context}
                        </div>
                      )}

                      {/* Visual Table if present */}
                      {q.visualData && q.visualData.type === 'table' && (
                        <div className="overflow-x-auto my-2 border border-slate-300 rounded-lg">
                          <table className="w-full text-xs text-left">
                            <thead className="bg-slate-100 border-b border-slate-300 font-bold">
                              <tr>
                                {q.visualData.tableHeaders?.map((th: string, i: number) => (
                                  <th key={i} className="p-2 border-r border-slate-200 last:border-r-0">
                                    {th}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {q.visualData.tableRows?.map((tr: any[], rIdx: number) => (
                                <tr key={rIdx} className="border-b border-slate-200 last:border-b-0">
                                  {tr.map((td: any, dIdx: number) => (
                                    <td key={dIdx} className="p-2 border-r border-slate-200 last:border-r-0 font-mono">
                                      {td}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Main Question Prompt */}
                      <p className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                        {q.questionPrompt}
                      </p>

                      {/* Options */}
                      {q.options && q.options.length > 0 && (
                        <div className={`grid gap-2 pt-1 ${q.options.length === 2 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
                          {q.options.map(opt => (
                            <div
                              key={opt.key}
                              className="flex items-start gap-2 text-xs text-slate-800 p-2 rounded-lg bg-slate-50/60 border border-slate-200"
                            >
                              <span className="font-black font-mono px-1.5 py-0.5 rounded bg-white border border-slate-300 shadow-xs">
                                {opt.key}
                              </span>
                              <span className="pt-0.5 font-medium leading-tight">
                                {opt.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Open ended answer lines */}
                      {q.type === 'open' && (
                        <div className="space-y-1.5 pt-2">
                          <div className="border-b border-slate-300 h-6" />
                          <div className="border-b border-slate-300 h-6" />
                          <div className="border-b border-slate-300 h-6" />
                        </div>
                      )}

                      {/* Optional Teacher Explanations */}
                      {includeExplanations && q.explanation && (
                        <div className="mt-2 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs leading-relaxed">
                          <strong className="font-bold">Öğretmen Çözüm Notu:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Answer Key Section */}
            {includeAnswerKey && (
              <div className="mt-10 pt-6 border-t-2 border-dashed border-slate-400 break-inside-avoid">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Cevap Anahtarı
                  </h3>
                  <span className="text-[11px] text-slate-500 font-semibold">
                    {subTopic.shortTitle} Sınavı
                  </span>
                </div>

                <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                  {generatedExam.map((q, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-300 rounded-lg p-1.5 text-center bg-slate-50"
                    >
                      <div className="text-[10px] text-slate-500 font-mono font-bold">
                        Soru {idx + 1}
                      </div>
                      <div className="text-xs sm:text-sm font-black text-emerald-700 font-mono mt-0.5">
                        {q.correctAnswer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-white border-t border-slate-200 px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <span className="text-slate-500 font-semibold">
            Hazırlanan: {generatedExam.length} soru • A4 Yazıcı / PDF standartlarına %100 uyumludur.
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors cursor-pointer"
            >
              Kapat
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black flex items-center gap-1.5 shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Yazdır / PDF Olarak Kaydet</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
