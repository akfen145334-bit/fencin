import React, { useState, useMemo } from 'react';
import { SubTopic, Unit, LgsQuestion } from '../types/curriculum';
import { sanitizeOptionText } from '../utils/questionQualityEngine';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Eye,
  EyeOff,
  Table as TableIcon,
  FlaskConical,
  Lightbulb,
  Printer,
  ShieldCheck,
  Shuffle,
  Layers,
  HelpCircle,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface Props {
  unit?: Unit;
  subTopic: SubTopic;
  onBackToTF: () => void;
  onBackToSummary: () => void;
  onOpenQuizPdf?: () => void;
}

export const LgsQuestionBoard: React.FC<Props> = ({
  unit,
  subTopic,
  onBackToTF,
  onBackToSummary,
  onOpenQuizPdf
}) => {
  const [poolSource, setPoolSource] = useState<'subtopic' | 'unit_pool'>('subtopic');
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'unanswered'>('all');
  const [selectedThemeFilter, setSelectedThemeFilter] = useState<string>('all');
  const [isPoolDrawerOpen, setIsPoolDrawerOpen] = useState(false);
  const [isReasoningActivityOpen, setIsReasoningActivityOpen] = useState(false);
  const [similarMatchNote, setSimilarMatchNote] = useState<string | null>(null);

  // Subtopic questions
  const subTopicQuestions = useMemo(() => subTopic.lgsQuestions || [], [subTopic]);

  // Full Unit Pool (Subtopics LGS questions + Unit End 20 Questions)
  const unitPoolQuestions = useMemo(() => {
    if (!unit) return subTopicQuestions;
    const pool: LgsQuestion[] = [];
    const seenIds = new Set<number>();

    // 1. All subtopics' questions
    (unit.subTopics || []).forEach(s => {
      (s.lgsQuestions || []).forEach(q => {
        if (!seenIds.has(q.id)) {
          seenIds.add(q.id);
          pool.push(q);
        }
      });
    });

    // 2. Unit end 20 questions
    (unit.unitEnd20Questions || []).forEach(q => {
      if (!seenIds.has(q.id)) {
        seenIds.add(q.id);
        pool.push(q);
      }
    });

    return pool.length > 0 ? pool : subTopicQuestions;
  }, [unit, subTopicQuestions]);

  const rawQuestions = poolSource === 'unit_pool' ? unitPoolQuestions : subTopicQuestions;

  // Available themes in current question set
  const availableThemes = useMemo(() => {
    const set = new Set<string>();
    rawQuestions.forEach(q => {
      if (q.theme) set.add(q.theme);
      else if (q.skillTag) set.add(q.skillTag);
    });
    return Array.from(set);
  }, [rawQuestions]);

  // Filtered questions based on status and theme
  const questions = useMemo(() => {
    return rawQuestions.filter(q => {
      const ans = userAnswers[q.id];
      if (filterMode === 'wrong' && (ans === undefined || ans === q.correctAnswer)) {
        return false;
      }
      if (filterMode === 'unanswered' && ans !== undefined) {
        return false;
      }
      if (selectedThemeFilter !== 'all') {
        const matchesTheme = q.theme === selectedThemeFilter || q.skillTag === selectedThemeFilter;
        if (!matchesTheme) return false;
      }
      return true;
    });
  }, [rawQuestions, filterMode, selectedThemeFilter, userAnswers]);

  const safeIdx = Math.min(activeQuestionIdx, Math.max(0, questions.length - 1));
  const currentQ = questions[safeIdx] || questions[0];

  const handleSelectOption = (key: string) => {
    if (!currentQ) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: key
    }));
    setShowExplanation(prev => ({
      ...prev,
      [currentQ.id]: true
    }));
  };

  const toggleExplanation = (qId: number) => {
    setShowExplanation(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowExplanation({});
    setActiveQuestionIdx(0);
    setSimilarMatchNote(null);
  };

  // Benzer Havuz Sorusu Getir (Search pool for questions with matching theme/cognitiveLevel/skillTag)
  const handleFetchSimilarQuestion = () => {
    if (!currentQ || rawQuestions.length <= 1) return;

    const currentTheme = currentQ.theme;
    const currentCognitive = currentQ.cognitiveLevel;
    const currentSkill = currentQ.skillTag;

    // First try: Matching theme or skillTag
    let candidates = rawQuestions.filter(q => q.id !== currentQ.id && (
      (currentTheme && q.theme && q.theme.toLowerCase().includes(currentTheme.toLowerCase().split(' ')[0])) ||
      (currentSkill && q.skillTag === currentSkill) ||
      (currentCognitive && q.cognitiveLevel === currentCognitive)
    ));

    let matchReason = '';
    if (candidates.length > 0) {
      matchReason = currentTheme ? `Eşleşen Tema: ${currentTheme}` : `Bilişsel Düzey: ${currentCognitive}`;
    } else {
      // Fallback: Pick an unattempted question in the pool
      candidates = rawQuestions.filter(q => q.id !== currentQ.id && userAnswers[q.id] === undefined);
      if (candidates.length > 0) {
        matchReason = 'Havuzdan çözülmemiş yeni soru';
      } else {
        candidates = rawQuestions.filter(q => q.id !== currentQ.id);
        matchReason = 'Havuzdan benzer soru';
      }
    }

    if (candidates.length > 0) {
      const chosen = candidates[Math.floor(Math.random() * candidates.length)];
      // If we are currently in filtered questions, make sure theme filter doesn't hide it
      if (selectedThemeFilter !== 'all') {
        setSelectedThemeFilter('all');
      }
      if (filterMode !== 'all') {
        setFilterMode('all');
      }
      
      const newIdx = rawQuestions.findIndex(q => q.id === chosen.id);
      if (newIdx >= 0) {
        setActiveQuestionIdx(newIdx);
        setSimilarMatchNote(`🔄 Benzer Havuz Sorusu Getirildi: ${matchReason} (Soru #${newIdx + 1})`);
      }
    }
  };

  if (!rawQuestions || rawQuestions.length === 0) {
    return (
      <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-4">
        <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
        <h3 className="text-xl font-bold text-slate-900">Bu bölüm için LGS mantık muhakeme soruları henüz eklenmedi.</h3>
        <button
          onClick={onBackToSummary}
          className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-bold"
        >
          Konu Özetine Dön
        </button>
      </div>
    );
  }

  // Stats across current active questions set
  const answeredCount = Object.keys(userAnswers).filter(id => rawQuestions.some(q => q.id === Number(id))).length;
  const correctCount = rawQuestions.filter(
    q => userAnswers[q.id] !== undefined && userAnswers[q.id] === q.correctAnswer
  ).length;
  const wrongCount = answeredCount - correctCount;

  const currentAnswer = currentQ ? userAnswers[currentQ.id] : undefined;
  const isCurrentAnswered = currentAnswer !== undefined;
  const isCurrentCorrect = currentQ && currentAnswer === currentQ.correctAnswer;

  const contextText = currentQ ? (currentQ.context || currentQ.scenario) : '';
  const solutionText = currentQ ? (currentQ.detailedExplanation || currentQ.explanation) : '';

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      
      {/* Top Smartboard Control Bar */}
      <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
              {subTopic.shortTitle}
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              {rawQuestions.length} Soru • Havuzda Toplam: {unitPoolQuestions.length} LGS Sorusu
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-200">
              <ShieldCheck className="w-3 h-3 text-emerald-600" /> MEB Ölçme Standardı: Şıklar Eşit Dağıtıldı
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-fredoka mt-1">
            LGS Genel Bakış & Mantıksal Muhakeme Soru Havuzu
          </h2>
        </div>

        {/* Live Scorecard and Filters */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Scorecard */}
          <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-2xl border border-slate-200 text-xs font-bold">
            <div className="flex items-center gap-1 text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
              <span>{correctCount} Doğru</span>
            </div>
            <div className="w-px h-4 bg-slate-200 mx-1" />
            <div className="flex items-center gap-1 text-rose-600">
              <XCircle className="w-4 h-4" />
              <span>{wrongCount} Yanlış</span>
            </div>
            <div className="w-px h-4 bg-slate-200 mx-1" />
            <span className="text-slate-500 font-mono">
              {rawQuestions.length - answeredCount} Boş
            </span>
          </div>

          {/* Soru Havuzu Source Selector */}
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => {
                setPoolSource('subtopic');
                setActiveQuestionIdx(0);
                setSimilarMatchNote(null);
              }}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                poolSource === 'subtopic'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Alt Başlık ({subTopicQuestions.length})
            </button>
            <button
              onClick={() => {
                setPoolSource('unit_pool');
                setActiveQuestionIdx(0);
                setSimilarMatchNote(null);
              }}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                poolSource === 'unit_pool'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Tüm Ünite Havuzu ({unitPoolQuestions.length})
            </button>
          </div>

          {/* Havuzdan Benzer Soru Getir */}
          <button
            onClick={handleFetchSimilarQuestion}
            className="px-3.5 py-2 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            title="Havuzdan eşleşen benzer veya yeni bir soru getir"
          >
            <Shuffle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Havuzdan Benzer Soru Çek</span>
          </button>

          {/* Soru Havuzu Gezgini Aç */}
          <button
            onClick={() => setIsPoolDrawerOpen(prev => !prev)}
            className={`px-3 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isPoolDrawerOpen
                ? 'bg-emerald-600 text-white border-emerald-700'
                : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
            }`}
            title="Havuzdaki tüm soruları listele ve seç"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-500" />
            <span className="hidden sm:inline">Havuz Gezgini</span>
          </button>

          {onOpenQuizPdf && (
            <button
              onClick={onOpenQuizPdf}
              className="px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              title="PDF Olarak Çıktı Al"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF Çıktı</span>
            </button>
          )}

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
            title="Tümünü Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Benzer Soru Bildirim Bannerı */}
      {similarMatchNote && (
        <div className="px-4 py-2.5 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-between text-xs font-bold text-emerald-900 animate-in fade-in duration-200 shadow-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{similarMatchNote}</span>
          </div>
          <button
            onClick={() => setSimilarMatchNote(null)}
            className="text-emerald-700 hover:text-emerald-950 font-bold ml-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Soru Gezgini Grid & Filtreler */}
      <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-2">
        <div className="flex flex-wrap items-center justify-between text-xs font-bold text-slate-500 px-1 gap-2">
          <div className="flex items-center gap-2">
            <span>Soru Gezgini (1 - {questions.length})</span>
            <span className="text-emerald-700 font-bold">
              • Aktif Soru: #{safeIdx + 1}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Status Filtreleri */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  filterMode === 'all' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tümü ({rawQuestions.length})
              </button>
              <button
                onClick={() => setFilterMode('wrong')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  filterMode === 'wrong' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Yanlışlar ({wrongCount})
              </button>
              <button
                onClick={() => setFilterMode('unanswered')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  filterMode === 'unanswered' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Boşlar ({rawQuestions.length - answeredCount})
              </button>
            </div>

            {/* Tema Filtresi Dropdown */}
            {availableThemes.length > 0 && (
              <select
                value={selectedThemeFilter}
                onChange={e => setSelectedThemeFilter(e.target.value)}
                className="text-[11px] font-bold bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-slate-700 outline-none"
              >
                <option value="all">Tüm Temalar ({availableThemes.length})</option>
                {availableThemes.map((t, idx) => (
                  <option key={idx} value={t}>{t}</option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* Buton Grid */}
        <div className="grid grid-cols-10 sm:grid-cols-20 gap-1.5 max-h-28 overflow-y-auto p-1">
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isAnswered = ans !== undefined && ans !== null;
            const isCorrect = ans === q.correctAnswer;
            const isActive = safeIdx === idx;

            return (
              <button
                key={q.id}
                onClick={() => setActiveQuestionIdx(idx)}
                className={`h-9 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                  isActive
                    ? 'ring-2 ring-emerald-500 scale-105 z-10 shadow-xs bg-emerald-600 text-white'
                    : ''
                } ${
                  !isAnswered
                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    : isCorrect
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-rose-100 text-rose-900 border border-rose-300'
                }`}
                title={q.theme || q.contextTitle || `Soru ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Soru Havuzu Gezgini Drawer / Expandable List */}
      {isPoolDrawerOpen && (
        <div className="p-5 rounded-3xl bg-slate-50 border border-slate-300 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-900">
                Havuzdaki Tüm Sorular ({rawQuestions.length} Soru)
              </h3>
            </div>
            <button
              onClick={() => setIsPoolDrawerOpen(false)}
              className="text-xs font-bold text-slate-500 hover:text-slate-800"
            >
              Kapat ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-80 overflow-y-auto p-1">
            {rawQuestions.map((q, qIdx) => {
              const ans = userAnswers[q.id];
              const isAnswered = ans !== undefined;
              const isCorrect = ans === q.correctAnswer;
              const isSelected = currentQ?.id === q.id;

              return (
                <div
                  key={q.id}
                  onClick={() => {
                    const idx = questions.findIndex(item => item.id === q.id);
                    if (idx >= 0) {
                      setActiveQuestionIdx(idx);
                    } else {
                      setSelectedThemeFilter('all');
                      setFilterMode('all');
                      const directIdx = rawQuestions.findIndex(item => item.id === q.id);
                      if (directIdx >= 0) setActiveQuestionIdx(directIdx);
                    }
                    setIsPoolDrawerOpen(false);
                  }}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left space-y-1.5 ${
                    isSelected
                      ? 'bg-emerald-50 border-2 border-emerald-600 shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 text-[11px]">
                    <span className="font-mono font-bold text-slate-700">
                      Soru #{qIdx + 1}
                    </span>
                    {isAnswered && (
                      <span className={`px-2 py-0.5 rounded-full font-bold ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? '✓ Doğru' : '✕ Yanlış'}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                    {q.contextTitle || q.theme || 'LGS Mantık Muhakeme Sorusu'}
                  </h4>
                  <p className="text-[11px] text-slate-600 line-clamp-2">
                    {q.questionPrompt}
                  </p>
                  {(q.theme || q.cognitiveLevel) && (
                    <div className="pt-1 flex items-center gap-1.5 flex-wrap">
                      {q.theme && (
                        <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold">
                          #{q.theme}
                        </span>
                      )}
                      {q.cognitiveLevel && (
                        <span className="text-[10px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md font-semibold">
                          {q.cognitiveLevel}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MAIN QUESTION DISPLAY CARD */}
      {currentQ && (
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          
          {/* Question Header & Skill Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-mono font-black text-sm flex items-center justify-center">
                #{safeIdx + 1}
              </span>
              <span className="text-sm font-bold text-slate-900">
                {currentQ.contextTitle || 'LGS Mantıksal Muhakeme Sorusu'}
              </span>
              {currentQ.cognitiveLevel && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {currentQ.cognitiveLevel}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Akıl Yürütme Etkinliği Butonu */}
              <button
                onClick={() => setIsReasoningActivityOpen(prev => !prev)}
                className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Soruya ait adım adım akıl yürütme etkinliğini aç/kapat"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>Akıl Yürütme Etkinliği</span>
                {isReasoningActivityOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>

              {(currentQ.skillTag || currentQ.theme) && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  {currentQ.skillTag || currentQ.theme}
                </span>
              )}
            </div>
          </div>

          {/* Akıl Yürütme Etkinliği Kartı (Sınıf & Akıllı Tahta Rehberi) */}
          {isReasoningActivityOpen && (
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-300 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-900">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Etkinlik: 3 Adımda LGS Mantıksal Muhakeme Analizi</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white border border-amber-200 space-y-1">
                  <span className="font-black text-amber-800 block">1. Verileri Analiz Et:</span>
                  <p className="text-slate-700 leading-relaxed">
                    Sorudaki deney şartlarını, bağımsız değişkeni ve tabloda/grafikte verilen sayısal değerleri işaretleyiniz.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-amber-200 space-y-1">
                  <span className="font-black text-emerald-800 block">2. Fen İlkesini Belirle:</span>
                  <p className="text-slate-700 leading-relaxed">
                    Kavramla ilgili temel kuralı (ör. ters/doğru orantı, kütlenin korunumu, basınç ilkeleri) tespit ediniz.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-amber-200 space-y-1">
                  <span className="font-black text-blue-800 block">3. Çeldiricileri Ele:</span>
                  <p className="text-slate-700 leading-relaxed">
                    Kesinlik bildiren veya zıt çıkarım yapan seçenekleri eleyerek tek doğru cevaba ulaşınız.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 1. Context / Scenario (Bağlam & Deney Durumu) */}
          {contextText && (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
              {contextText}
            </div>
          )}

          {/* 2. Visual Data: Table, Diagram, Steps or Comparison */}
          {currentQ.visualData && (
            <div className="my-3 space-y-2">
              {/* Table Type */}
              {currentQ.visualData.type === 'table' && (
                <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-xs">
                  {currentQ.visualData.title && (
                    <div className="p-2.5 bg-slate-100 border-b border-slate-300 flex items-center gap-2 text-xs font-bold text-slate-800">
                      <TableIcon className="w-4 h-4 text-emerald-600" />
                      {currentQ.visualData.title}
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-800">
                        <tr>
                          {currentQ.visualData.tableHeaders?.map((th, thIdx) => (
                            <th key={thIdx} className="p-3 font-bold border-r border-slate-200 last:border-r-0">
                              {th}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
                        {currentQ.visualData.tableRows?.map((tr, trIdx) => (
                          <tr key={trIdx} className="hover:bg-slate-50">
                            {tr.map((td, tdIdx) => (
                              <td key={tdIdx} className="p-3 border-r border-slate-100 last:border-r-0">
                                {td}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Diagram or Apparatus Notes */}
              {(currentQ.visualData.type === 'diagram' || currentQ.visualData.diagramNotes) && (
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black text-emerald-800">
                    <FlaskConical className="w-4 h-4 text-emerald-600" />
                    <span>{currentQ.visualData.title || 'Deney Düzeneği ve Görsel Şema Açıklaması'}:</span>
                  </div>
                  {currentQ.visualData.diagramNotes && (
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                      {currentQ.visualData.diagramNotes.map((note, nIdx) => (
                        <li key={nIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 3. Main Question Prompt (Soru Kökü) */}
          <div className="pt-2">
            <p className="text-base sm:text-lg font-black text-slate-900 leading-relaxed">
              {currentQ.questionPrompt}
            </p>
          </div>

          {/* 4. Large Interactive Options (A, B, C, D) for Smartboard Touch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
            {currentQ.options.map(opt => {
              const isSelected = currentAnswer === opt.key;
              const isCorrectOption = opt.key === currentQ.correctAnswer;

              let buttonStyle = 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800';
              let badgeStyle = 'bg-slate-100 text-slate-700';

              if (isCurrentAnswered) {
                if (isSelected && isCurrentCorrect) {
                  buttonStyle = 'bg-emerald-50 border-2 border-emerald-600 text-emerald-950';
                  badgeStyle = 'bg-emerald-600 text-white font-black';
                } else if (isSelected && !isCurrentCorrect) {
                  buttonStyle = 'bg-rose-50 border-2 border-rose-600 text-rose-950';
                  badgeStyle = 'bg-rose-600 text-white font-black';
                } else if (!isSelected && isCorrectOption) {
                  buttonStyle = 'bg-emerald-50/50 border-2 border-emerald-400 border-dashed text-emerald-900';
                  badgeStyle = 'bg-emerald-100 text-emerald-800 font-bold';
                } else {
                  buttonStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  badgeStyle = 'bg-slate-200 text-slate-500';
                }
              }

              return (
                <button
                  key={opt.key}
                  onClick={() => handleSelectOption(opt.key)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex items-start gap-3.5 active:scale-98 shadow-xs cursor-pointer ${buttonStyle}`}
                >
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-black text-sm shrink-0 transition-colors ${badgeStyle}`}>
                    {opt.key}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold leading-relaxed pt-1">
                    {sanitizeOptionText(opt.text)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 5. Detailed Pedagogical Maarif Solution Box */}
          {isCurrentAnswered && showExplanation[currentQ.id] && solutionText && (
            <div
              className={`p-5 sm:p-6 rounded-2xl border-2 animate-in zoom-in-95 duration-200 ${
                isCurrentCorrect
                  ? 'bg-emerald-50 border-emerald-300'
                  : 'bg-amber-50 border-amber-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 font-black text-sm sm:text-base">
                  {isCurrentCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-900">Harika! Doğru Seçenek: {currentQ.correctAnswer}</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600" />
                      <span className="text-rose-900">
                        Yanlış Seçenek! Doğru Cevap: <span className="underline font-mono">{currentQ.correctAnswer}</span>
                      </span>
                    </>
                  )}
                </div>

                <button
                  onClick={() => toggleExplanation(currentQ.id)}
                  className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer font-bold"
                >
                  <EyeOff className="w-3.5 h-3.5" /> Gizle
                </button>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-800">
                <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                  <Lightbulb className="w-4 h-4 text-emerald-600" />
                  LGS Maarif Çözüm & Mantık Muhakeme Analizi:
                </div>
                <p className="whitespace-pre-line">{solutionText}</p>
              </div>
            </div>
          )}

          {/* Toggle Explanation Button if closed */}
          {isCurrentAnswered && !showExplanation[currentQ.id] && (
            <div className="flex justify-end">
              <button
                onClick={() => toggleExplanation(currentQ.id)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
              >
                <Eye className="w-4 h-4" /> Çözüm Açıklamasını Göster
              </button>
            </div>
          )}

          {/* Stepper Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setActiveQuestionIdx(prev => Math.max(0, prev - 1))}
              disabled={safeIdx === 0}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Önceki Soru
            </button>

            <span className="text-xs text-slate-500 font-mono font-bold">
              {safeIdx + 1} / {questions.length} Soru
            </span>

            <button
              onClick={() => setActiveQuestionIdx(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={safeIdx === questions.length - 1}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
            >
              Sonraki Soru <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Global Bottom Navigation */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onBackToTF}
          className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold flex items-center gap-2 border border-slate-200 shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Doğru/Yanlış Sorularına Dön
        </button>

        <button
          onClick={onBackToSummary}
          className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
        >
          Konu Özetine Dön
        </button>
      </div>
    </div>
  );
};
