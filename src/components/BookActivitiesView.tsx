import React, { useState } from 'react';
import { SubTopic, Unit, BookActivity } from '../types/curriculum';
import {
  Eye,
  EyeOff,
  BookOpen,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  FlaskConical,
  Award,
  Layers,
  Lightbulb,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface Props {
  unit: Unit;
  subTopic: SubTopic;
  globalAnswersRevealed: boolean;
  onGoToTF: () => void;
  onGoToLgs: () => void;
  onGoToSummary: () => void;
}

export const BookActivitiesView: React.FC<Props> = ({
  unit,
  subTopic,
  globalAnswersRevealed,
  onGoToTF,
  onGoToLgs,
  onGoToSummary
}) => {
  const activities: BookActivity[] = subTopic.bookActivities || [];
  const [localRevealed, setLocalRevealed] = useState<Record<string, boolean>>({});
  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({});

  const isRevealed = (actId: string) => {
    if (localRevealed[actId] !== undefined) return localRevealed[actId];
    return globalAnswersRevealed;
  };

  const toggleReveal = (actId: string) => {
    setLocalRevealed(prev => ({
      ...prev,
      [actId]: !isRevealed(actId)
    }));
  };

  const getStationBadge = (type: string) => {
    switch (type) {
      case 'ogrenelim_arastiralim':
        return {
          bg: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
          icon: <HelpCircle className="w-4 h-4 text-sky-400" />,
          label: 'Öğrenelim, Araştıralım'
        };
      case 'etkinlik':
      case 'deney':
        return {
          bg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          icon: <FlaskConical className="w-4 h-4 text-emerald-400" />,
          label: 'Etkinlik / Deney İstasyonu'
        };
      case 'bilgi_istasyonu':
        return {
          bg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
          icon: <Lightbulb className="w-4 h-4 text-amber-400" />,
          label: 'Bilgi İstasyonu'
        };
      case 'sira_sizde':
        return {
          bg: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
          icon: <Layers className="w-4 h-4 text-purple-400" />,
          label: 'Sıra Sizde İstasyonu'
        };
      case 'cagini_asanlar':
        return {
          bg: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
          icon: <Award className="w-4 h-4 text-rose-400" />,
          label: 'Çağını Aşanlar'
        };
      default:
        return {
          bg: 'bg-slate-800 text-slate-300 border-slate-700',
          icon: <BookOpen className="w-4 h-4 text-amber-400" />,
          label: 'Kitap Etkinliği'
        };
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Top Banner */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {unit.unitNumber}. Ünite • {subTopic.shortTitle}
            </span>
            {subTopic.pageRange && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
                Kitap Sayfa: {subTopic.pageRange}
              </span>
            )}
          </div>

          <h1 className="text-xl sm:text-3xl font-black text-white font-fredoka">
            Ders Kitabı İstasyonları, Etkinlikleri ve Çözümleri
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Ders kitabındaki tüm soru, etkinlik ve deneyler sırasıyla listelenmiştir. "Cevabı Gör" butonuyla akıllı tahtada model çözümleri açabilirsiniz.
          </p>
        </div>

        {/* Global summary badge */}
        <div className="flex items-center gap-2 bg-slate-950 px-4 py-2.5 rounded-2xl border border-slate-800 text-xs font-bold text-slate-300">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>{activities.length} İstasyon / Etkinlik</span>
        </div>
      </div>

      {/* Activities Feed (Strictly in Textbook Sequence) */}
      <div className="space-y-6">
        {activities.map((act, index) => {
          const badge = getStationBadge(act.type);
          const revealed = isRevealed(act.id);

          return (
            <div
              key={act.id}
              className="rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all hover:border-slate-600"
            >
              {/* Header: Station number, Type badge, Page number */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono font-black text-sm flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className={`px-3 py-1 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${badge.bg}`}>
                    {badge.icon}
                    {act.typeLabel || badge.label}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                    📖 {act.pageNumber}
                  </span>
                </div>
              </div>

              {/* Station Title */}
              <h2 className="text-lg sm:text-2xl font-black text-white font-fredoka mt-4">
                {act.title}
              </h2>

              {/* Materials & Steps (if experiment) */}
              {act.materials && act.materials.length > 0 && (
                <div className="mt-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 block mb-2">
                    🧪 Gerekli Deney Malzemeleri:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {act.materials.map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2.5 py-1 rounded-xl text-xs bg-slate-800 text-slate-300 border border-slate-700 font-medium"
                      >
                        • {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {act.steps && act.steps.length > 0 && (
                <div className="mt-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400 block mb-1">
                    📋 Deney / Etkinlik Uygulama Adımları:
                  </span>
                  {act.steps.map((st, sIdx) => (
                    <p key={sIdx} className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {st}
                    </p>
                  ))}
                </div>
              )}

              {/* Main Question / Task Prompt */}
              <div className="mt-4 p-5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-sm sm:text-base leading-relaxed font-semibold">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1.5">
                  ❓ Kitaptaki Soru / Görev:
                </span>
                {act.prompt}
              </div>

              {/* Optional Interactive Student Scratchpad for Smartboard */}
              <div className="mt-4">
                <input
                  type="text"
                  value={studentNotes[act.id] || ''}
                  onChange={e => setStudentNotes({ ...studentNotes, [act.id]: e.target.value })}
                  placeholder="Öğrenci cevabı veya akıllı tahta notu yazın..."
                  className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/80"
                />
              </div>

              {/* Interactive Reveal Toggle Button */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <button
                  onClick={() => toggleReveal(act.id)}
                  className={`px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95 ${
                    revealed
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/20'
                  }`}
                >
                  {revealed ? (
                    <>
                      <EyeOff className="w-4 h-4" /> Cevabı Gizle
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" /> Cevabı Gör (Çözümü Aç)
                    </>
                  )}
                </button>

                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  {revealed ? 'Cevap akıllı tahtada gösteriliyor' : 'Öğrenciler düşündükten sonra açınız'}
                </span>
              </div>

              {/* Revealed Pedagogical Answer Card */}
              {revealed && (
                <div className="mt-5 space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200">
                    <div className="flex items-center gap-2 font-black text-sm sm:text-base text-emerald-300 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      MEB Ders Kitabı Model Cevabı & Bilimsel Çözüm:
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-emerald-900/50">
                      {act.interactiveAnswer}
                    </div>
                  </div>

                  {/* Exam Note Box (LGS Hap Not) */}
                  {act.examNote && (
                    <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 text-amber-200 text-xs sm:text-sm flex items-start gap-2.5">
                      <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div className="whitespace-pre-line leading-relaxed">
                        {act.examNote}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800">
        <button
          onClick={onGoToSummary}
          className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Konu Özetine Dön
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onGoToTF}
            className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-black flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
          >
            Doğru / Yanlış (10 Soru) <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onGoToLgs}
            className="px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-black flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
          >
            LGS Soruları (20 Soru) <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
