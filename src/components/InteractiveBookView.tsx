import React, { useState, useMemo } from 'react';
import { SubTopic, Unit, InteractiveBookItem } from '../types/curriculum';
import { getCompleteInteractiveBookFlow } from '../data/maarifInteractiveBookData';
import {
  BookOpen,
  HelpCircle,
  Sparkles,
  QrCode,
  FlaskConical,
  Award,
  Layers,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  GitBranch,
  ShieldCheck,
  Compass,
  ArrowRight,
  ClipboardCheck,
  CheckCheck,
  Printer,
  Info
} from 'lucide-react';

interface Props {
  unit: Unit;
  subTopic: SubTopic;
  globalAnswersRevealed: boolean;
  onGoToSummary: () => void;
  onGoToLgs: () => void;
  onOpenQuizPdf?: () => void;
}

export const InteractiveBookView: React.FC<Props> = ({
  unit,
  subTopic,
  globalAnswersRevealed,
  onGoToSummary,
  onGoToLgs,
  onOpenQuizPdf
}) => {
  const items: InteractiveBookItem[] = useMemo(() => {
    return getCompleteInteractiveBookFlow(unit, subTopic);
  }, [unit, subTopic]);
  
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [openEvalAnswers, setOpenEvalAnswers] = useState<Record<string, boolean>>({});
  const [localAllRevealed, setLocalAllRevealed] = useState<boolean>(false);

  const isItemOpen = (id: string) => {
    if (localAllRevealed) return true;
    if (openItems[id] !== undefined) return openItems[id];
    return globalAnswersRevealed;
  };

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !isItemOpen(id)
    }));
  };

  const isEvalOpen = (key: string) => {
    if (localAllRevealed) return true;
    if (openEvalAnswers[key] !== undefined) return openEvalAnswers[key];
    return globalAnswersRevealed;
  };

  const toggleEval = (key: string) => {
    setOpenEvalAnswers(prev => ({
      ...prev,
      [key]: !isEvalOpen(key)
    }));
  };

  const toggleAllLocal = () => {
    setLocalAllRevealed(prev => !prev);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      
      {/* Top Banner: Temel Dinî Bilgiler Aesthetic Header Card (White background, Emerald brand) */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            {/* Tag Pills matching Image 2 */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-600 text-white flex items-center gap-1.5 shadow-sm">
                <CheckCheck className="w-4 h-4 text-emerald-200" /> {unit.unitNumber}. ÜNİTE
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono">
                {subTopic.shortTitle}
              </span>
              {subTopic.pageRange ? (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  Ders Kitabı (Sayfa {subTopic.pageRange})
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                  LGS Etkileşimli İstasyonları
                </span>
              )}
              {subTopic.concepts.map((concept, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"
                >
                  #{concept}
                </span>
              ))}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-fredoka mt-2">
              {subTopic.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-3xl leading-relaxed">
              {unit.grade === 8
                ? 'LGS Fen Bilimleri hazırlık, merak, ön değerlendirme, deney, bilgi ve pekiştirme istasyonları sırasıyla listelenmiş; her soru altına tıklanabilir model çözüm kutucuğu yerleştirilmiştir.'
                : 'Ders kitabındaki tüm hazırlık, merak, ön değerlendirme, etkinlik, köprü, bilgi ve pekiştirme istasyonları sayfa sayfa sırasıyla dizilmiş; her soru altına tıklanabilir cevap kutucuğu yerleştirilmiştir.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {/* Tüm Cevapları Aç/Kapat */}
            <button
              onClick={toggleAllLocal}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                localAllRevealed
                  ? 'bg-emerald-700 text-white shadow-sm ring-2 ring-emerald-400'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              {localAllRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-emerald-600" />}
              {localAllRevealed ? 'Cevapları Kapat' : 'Tüm Cevapları Aç'}
            </button>

            {/* Otomatik Soru ve PDF Çıktı Butonu */}
            {onOpenQuizPdf && (
              <button
                onClick={onOpenQuizPdf}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                title="Yazdırılabilir Test & PDF Oluştur"
              >
                <Printer className="w-4 h-4" />
                <span>PDF Çıktı Al</span>
              </button>
            )}

            <button
              onClick={onGoToSummary}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Konu Özeti</span>
            </button>

            <button
              onClick={onGoToLgs}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>20 LGS Sorusu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Page-by-Page Items Feed */}
      <div className="space-y-6">
        {items.map((item, idx) => {
          const isOpen = isItemOpen(item.id);

          const isQrStation = item.type === 'karekod';
          const isInfoBox = item.type === 'bilgi_kutusu';
          const isPerfStation = item.type === 'performans_istasyonu';
          const isEtkinlikStation = item.type === 'etkinlik_istasyonu';

          return (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all hover:border-emerald-300"
            >
              {/* Item Top Bar */}
              <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl font-mono font-black text-xs sm:text-sm flex items-center justify-center bg-emerald-600 text-white shadow-xs">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                        {item.badge || 'İstasyon'}
                      </span>
                      <span className="text-xs font-bold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                        📖 {item.pageNumber}
                      </span>
                    </div>
                    <h2 className="text-base sm:text-xl font-extrabold text-slate-900 font-fredoka mt-0.5">
                      {item.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-xl hidden sm:inline-flex items-center gap-1">
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> Maarif Modeli %100 Uyumlu
                  </span>
                </div>
              </div>

              {/* Item Body */}
              <div className="p-6 sm:p-8 space-y-5">
                
                {/* Standalone Karekod Station View */}
                {isQrStation && (
                  <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white p-2 shrink-0 flex items-center justify-center shadow-md border border-purple-200">
                      <QrCode className="w-full h-full text-purple-900" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-600 text-white">
                          EBA KAREKODU
                        </span>
                        <span className="text-xs font-bold text-purple-800">
                          {item.pageNumber} Sırasına Göre
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {item.qrInfo?.title || item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.qrInfo?.description || (Array.isArray(item.content) ? item.content.join(' ') : item.content)}
                      </p>
                      <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-purple-800">
                        <Info className="w-3.5 h-3.5" />
                        <span>Karekodun Amacı: MEB ders kitabındaki sırasıyla EBA dijital içeriğine ve değerlendirme formuna ulaşımı sağlar.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bilgi Kutusu Styling */}
                {isInfoBox && (
                  <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300 text-slate-900 space-y-2">
                    <div className="flex items-center gap-2 text-amber-800 font-black text-sm">
                      <Lightbulb className="w-5 h-5 text-amber-600" />
                      <span>📌 BİLGİ KUTUSU ({item.pageNumber})</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium whitespace-pre-line bg-white p-4 rounded-xl border border-amber-200">
                      {Array.isArray(item.content) ? item.content.join('\n\n') : item.content}
                    </div>
                  </div>
                )}

                {/* Prompt or Question if not solely a Qr station */}
                {!isQrStation && item.prompt && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm sm:text-base font-semibold leading-relaxed">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block mb-1">
                      ❓ Kitaptaki Soru / Görev / Yönerge:
                    </span>
                    <div className="whitespace-pre-line">
                      {item.prompt}
                    </div>
                  </div>
                )}

                {/* General Content text */}
                {!isQrStation && !isInfoBox && item.content && (
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-slate-200 whitespace-pre-line font-normal">
                    {Array.isArray(item.content) ? item.content.join('\n\n') : item.content}
                  </div>
                )}

                {/* Materials & Steps if experiment / performance */}
                {item.materials && (
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 block mb-2">
                      🧪 Gerekli Malzemeler:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.materials.map((mat, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-3 py-1 rounded-xl text-xs bg-white text-slate-700 border border-emerald-200 font-medium shadow-xs"
                        >
                          • {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.steps && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-800 block mb-1">
                      📋 Yapım Aşamaları (Madde Madde):
                    </span>
                    {item.steps.map((step, sIdx) => (
                      <p key={sIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-2 border-l-2 border-emerald-500">
                        {step}
                      </p>
                    ))}
                  </div>
                )}

                {/* Evaluation Questions List with individual toggle answer boxes */}
                {item.evaluationQuestions && item.evaluationQuestions.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                        <ClipboardCheck className="w-4 h-4 text-emerald-600" /> Kitaptaki Sorular ve Tıklanabilir Cevap Kutucukları:
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                        (Cevap kutucuğuna basılınca soru altında açılır)
                      </span>
                    </div>

                    {item.evaluationQuestions.map((eq, qIdx) => {
                      const evalKey = `${item.id}-q-${qIdx}`;
                      const isEvalRevealed = isEvalOpen(evalKey);

                      return (
                        <div
                          key={qIdx}
                          className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3 transition-all hover:border-emerald-300 shadow-xs"
                        >
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed flex-1">
                              {eq.question}
                            </p>
                            <button
                              onClick={() => toggleEval(evalKey)}
                              className={`px-4 py-2 rounded-xl text-xs font-black shrink-0 flex items-center gap-2 transition-all active:scale-95 cursor-pointer ${
                                isEvalRevealed
                                  ? 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
                                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                              }`}
                            >
                              {isEvalRevealed ? (
                                <>
                                  <EyeOff className="w-3.5 h-3.5" /> Cevabı Gizle
                                </>
                              ) : (
                                <>
                                  <Eye className="w-3.5 h-3.5 text-white" /> Cevap Kutucuğu (Tıkla Aç)
                                </>
                              )}
                            </button>
                          </div>

                          {isEvalRevealed && (
                            <div className="p-3.5 rounded-xl bg-emerald-50/80 border-2 border-emerald-400 text-xs sm:text-sm text-slate-900 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                              <strong className="text-emerald-800 block mb-1 flex items-center gap-1.5 font-black">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bilimsel Çözüm & Model Cevap:
                              </strong>
                              {eq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Main Interactive Answer for the Item */}
                {item.interactiveAnswer && (
                  <div className="pt-2">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 cursor-pointer ${
                        isOpen
                          ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                      }`}
                    >
                      {isOpen ? (
                        <>
                          <EyeOff className="w-4 h-4" /> Açıklamayı / Cevabı Gizle
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 text-white" /> Cevap Kutucuğu (Tıkla Aç)
                        </>
                      )}
                    </button>

                    {isOpen && (
                      <div className="mt-3 p-4 rounded-2xl bg-emerald-50/80 border-2 border-emerald-400 text-xs sm:text-sm text-slate-900 leading-relaxed animate-in zoom-in-95 duration-200">
                        <strong className="text-emerald-800 block mb-1 flex items-center gap-1.5 font-black">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> MEB Model Çözümü & Açıklaması:
                        </strong>
                        {item.interactiveAnswer}
                      </div>
                    )}
                  </div>
                )}

                {/* Sonucunda Ulaşılan Bilgi Kutusu */}
                {item.resultInfoBox && (
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs sm:text-sm text-slate-900 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-black text-emerald-800">
                      <Lightbulb className="w-4 h-4 text-emerald-600" />
                      <span>Etkinlik Sonucunda Ne Öğrendik? (Bilimsel Çözüm ve Nedenleri):</span>
                    </div>
                    <p className="leading-relaxed text-slate-700 font-normal">
                      {item.resultInfoBox}
                    </p>
                  </div>
                )}

                {/* Karekod Bölümü (İçerik içinde) */}
                {!isQrStation && item.qrInfo && (
                  <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white p-1.5 shrink-0 flex items-center justify-center shadow-sm border border-purple-200">
                      <QrCode className="w-full h-full text-purple-900" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-purple-600 text-white">
                          EBA KAREKOD İÇERİĞİ
                        </span>
                        <span className="text-xs font-bold text-purple-900">
                          {item.qrInfo.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.qrInfo.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Pekiştirme İstasyonu */}
                {item.reinforcementData && (
                  <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-black text-purple-900">
                      <GitBranch className="w-4 h-4 text-purple-600" />
                      <span>Pekiştirme İstasyonu Çözüm Analizi (Doğru Yola Giden Adımlar):</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-mono bg-white p-3 rounded-xl border border-purple-200 whitespace-pre-line">
                      {item.reinforcementData.solution}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={onGoToSummary}
          className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-200 shadow-xs cursor-pointer"
        >
          Konu Özeti ve Kavramlar Sözlüğü <ArrowRight className="w-4 h-4 text-emerald-600" />
        </button>

        <button
          onClick={onGoToLgs}
          className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          LGS Mantıksal Muhakeme (Soru Havuzu) <ArrowRight className="w-4 h-4 text-amber-300" />
        </button>
      </div>
    </div>
  );
};
