import React, { useState } from 'react';
import { Unit, SubTopic } from '../types/curriculum';
import {
  BookOpen,
  FlaskConical,
  CheckCircle2,
  Sparkles,
  Table,
  Lightbulb,
  Award,
  Layers,
  Eye,
  EyeOff,
  Printer
} from 'lucide-react';

interface Props {
  unit: Unit;
  subTopic: SubTopic;
  globalAnswersRevealed?: boolean;
  onOpenSimulation: (simId: string) => void;
  onStartTFQuiz: () => void;
  onStartLGSQuiz: () => void;
  onStartBookActivities: () => void;
  onOpenQuizPdf?: () => void;
}

export const TopicSummaryView: React.FC<Props> = ({
  unit,
  subTopic,
  onOpenSimulation,
  onStartTFQuiz,
  onStartLGSQuiz,
  onStartBookActivities,
  onOpenQuizPdf
}) => {
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});

  const isSystemsUnit =
    unit.grade === 8 ||
    unit.id === 'g7-unit-3' ||
    unit.id === 'g6-unit-3' ||
    (unit.title && unit.title.toLowerCase().includes('sistem'));

  const toggleQuestionReveal = (id: string) => {
    setRevealedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isQuestionRevealed = (id: string) => {
    return !!revealedQuestions[id];
  };

  const renderFormattedText = (text: string) => {
    if (!text) return text;
    const regex = /(\((?:LGS|ÖS)\s*ÇIKTI\))/g;
    const parts = text.split(regex);
    if (parts.length === 1) return text;

    return parts.map((part, i) => {
      if (part.includes('LGS')) {
        return (
          <span
            key={i}
            className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md text-[11px] font-black tracking-wide bg-rose-600 text-white shadow-xs align-baseline whitespace-nowrap"
          >
            🎯 LGS ÇIKTI
          </span>
        );
      }
      if (part.includes('ÖS')) {
        return (
          <span
            key={i}
            className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md text-[11px] font-black tracking-wide bg-indigo-600 text-white shadow-xs align-baseline whitespace-nowrap"
          >
            📝 ÖS ÇIKTI
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      
      {/* Hero Subtopic Banner - Temel Dinî Bilgiler Teması (Image 2) */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-600 text-white shadow-xs">
              {unit.unitNumber}. Ünite • {subTopic.shortTitle}
            </span>
            {subTopic.pageRange && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                Ders Kitabı Sayfa: {subTopic.pageRange}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              {unit.grade === 8 ? 'LGS Fen Bilimleri' : 'Türkiye Yüzyılı Maarif Modeli'}
            </span>
            {isSystemsUnit && (
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-50 text-amber-800 border border-amber-300">
                ★ Doğru/Yanlış & LGS Muhakeme Soru Havuzu Aktif
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-fredoka mt-2">
            {subTopic.title}
          </h1>

          {/* Concepts Pill Row */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {subTopic.concepts.map((concept, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"
              >
                #{concept}
              </span>
            ))}
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap gap-2.5 mt-5 pt-4 border-t border-slate-100">
            {!isSystemsUnit && (
              <button
                onClick={onStartBookActivities}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <Layers className="w-4 h-4 text-emerald-200" />
                Kitap Etkinlikleri & Çözümleri ({subTopic.bookActivities?.length || 0})
              </button>
            )}

            {onOpenQuizPdf && (
              <button
                onClick={onOpenQuizPdf}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                Otomatik Soru & PDF Çıktı
              </button>
            )}

            {subTopic.simulationId && (
              <button
                onClick={() => subTopic.simulationId && onOpenSimulation(subTopic.simulationId)}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <FlaskConical className="w-4 h-4 text-emerald-600" />
                Laboratuvarı Aç
              </button>
            )}

            <button
              onClick={onStartTFQuiz}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Doğru / Yanlış & Soru Havuzu ({subTopic.trueFalseQuestions?.length || 0})
            </button>

            <button
              onClick={onStartLGSQuiz}
              className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              {isSystemsUnit ? 'LGS Genel Bakış Muhakeme & Soru Havuzu' : 'LGS Mantıksal Muhakeme & Soru Havuzu'} ({subTopic.lgsQuestions?.length || 0})
            </button>
          </div>
        </div>
      </div>

      {/* Structured Summary Sections */}
      <div className="space-y-6">
        {(subTopic.summarySections || []).map((sec, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs"
          >
            {/* Section Heading */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                {idx + 1}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-fredoka">
                {sec.heading}
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
              {(sec.paragraphs || []).map((p, pIdx) => (
                <p key={pIdx}>{renderFormattedText(p)}</p>
              ))}
            </div>

            {/* Key Points Bullet Cards */}
            {sec.keyPoints && sec.keyPoints.length > 0 && (
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  Önemli Maarif Kazanım Maddeleri & Sınav İpuçları
                </h3>
                <ul className="space-y-2">
                  {sec.keyPoints.map((pt, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span className="flex-1">{renderFormattedText(pt)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Exam Note / Sınav Uyarısı / Soru Mantığı if available */}
            {sec.examNote && (
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-300 text-xs sm:text-sm text-amber-950 font-medium leading-relaxed flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="flex-1 leading-relaxed">
                  {renderFormattedText(sec.examNote)}
                </div>
              </div>
            )}

            {/* Comparison Table if available */}
            {sec.table && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Table className="w-4 h-4 text-emerald-600" />
                  Kavram Karşılaştırma & Analiz Tablosu
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 border-b border-slate-200 text-slate-800">
                      <tr>
                        {sec.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3.5 font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3.5 leading-relaxed">
                              {renderFormattedText(String(cell))}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Scientist History Spotlight */}
            {sec.scientistBox && (
              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 shadow-xs">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 px-2 py-0.5 rounded-md bg-emerald-100">
                      Çağını Aşanlar
                    </span>
                    <span className="text-xs text-slate-500">{sec.scientistBox.role}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-fredoka mt-1">
                    {sec.scientistBox.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {sec.scientistBox.contribution}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Embedded Sınav Bilgi Notu & Öğrenilmesi Gereken Sorular Bölümü (5, 6, 7. Sınıflar İçin - Sistemler Hariç) */}
      {!isSystemsUnit && subTopic.bookActivities && subTopic.bookActivities.length > 0 && (
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-fredoka">
                  Ders Kitabı Öğrenme İstasyonları & Sınav Bilgi Notları
                </h3>
                <p className="text-xs text-slate-500">
                  Ders kitabında araştırılması gereken temel sorular ve LGS hap notları
                </p>
              </div>
            </div>

            <button
              onClick={onStartBookActivities}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              Tümünü Gör ({subTopic.bookActivities.length}) ➔
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subTopic.bookActivities.map((act: any) => {
              const isRev = isQuestionRevealed(act.id);
              return (
                <div
                  key={act.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-white text-emerald-800 border border-slate-200">
                      {act.typeLabel} (s. {act.pageNumber})
                    </span>
                    <span className="text-xs font-bold text-slate-700">
                      {act.title}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {act.prompt}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => toggleQuestionReveal(act.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                        isRev
                          ? 'bg-slate-200 text-slate-800'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700'
                      }`}
                    >
                      {isRev ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      {isRev ? 'Cevabı Gizle' : 'Cevap Kutucuğu (Aç)'}
                    </button>

                    {isRev && (
                      <div className="mt-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-slate-800 leading-relaxed animate-in fade-in duration-200">
                        <strong className="text-emerald-800 block mb-1 font-bold">
                          ✓ Model Çözüm:
                        </strong>
                        {act.interactiveAnswer}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Kavramlar Sözlüğü */}
      {subTopic.glossary && subTopic.glossary.length > 0 && (
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-bold text-slate-900 font-fredoka">
              {subTopic.shortTitle} Kavramlar Sözlüğü (Maarif Terimleri)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {subTopic.glossary.map((g, gIdx) => (
              <div
                key={gIdx}
                className="p-3.5 rounded-2xl bg-emerald-50/40 border border-emerald-200 text-xs space-y-1"
              >
                <div className="font-extrabold text-emerald-900">
                  {g.term}
                </div>
                <div className="text-slate-600 leading-relaxed">
                  {g.definition}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
