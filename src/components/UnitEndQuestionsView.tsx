import React, { useState } from 'react';
import { UnitEndQuestion, Unit } from '../types/curriculum';
import {
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  RotateCcw,
  Sparkles,
  HelpCircle,
  BookOpen,
  ArrowLeft
} from 'lucide-react';

interface Props {
  unit: Unit;
  globalAnswersRevealed: boolean;
  onGoToSummary: () => void;
}

export const UnitEndQuestionsView: React.FC<Props> = ({
  unit,
  globalAnswersRevealed,
  onGoToSummary
}) => {
  const questions: UnitEndQuestion[] = unit.unitEndQuestions || [];
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [openEndedRevealed, setOpenEndedRevealed] = useState<Record<number, boolean>>({});

  const handleSelectOption = (qId: number, key: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [qId]: key
    }));
  };

  const isRevealed = (qId: number) => {
    if (openEndedRevealed[qId] !== undefined) return openEndedRevealed[qId];
    return globalAnswersRevealed;
  };

  const toggleReveal = (qId: number) => {
    setOpenEndedRevealed(prev => ({
      ...prev,
      [qId]: !isRevealed(qId)
    }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setOpenEndedRevealed({});
  };

  const mcqQuestions = questions.filter(q => q.type === 'multiple_choice');
  const answeredMcq = mcqQuestions.filter(q => userAnswers[q.id] !== undefined);
  const correctCount = mcqQuestions.filter(q => userAnswers[q.id] === q.correctAnswer).length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Top Banner */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {unit.unitNumber}. Ünite Sonu Değerlendirmesi
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
              Ders Kitabı {unit.unitEndPageRange || 'Değerlendirme'}
            </span>
          </div>

          <h1 className="text-xl sm:text-3xl font-black text-white font-fredoka">
            Ünite Sonu Örnek Sorular ve Beceri Temelli Değerlendirme
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Ders kitabının ünite sonu ölçme ve değerlendirme bölümündeki soruları etkileşimli olarak çözebilirsiniz.
          </p>
        </div>

        {/* Live Scorecard */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-950 px-4 py-2.5 rounded-2xl border border-slate-800 text-xs font-bold">
            <div className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>{correctCount} / {mcqQuestions.length} Doğru</span>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Soruları Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Questions Feed */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const isMcq = q.type === 'multiple_choice';
          const selectedOption = userAnswers[q.id];
          const isAnswered = selectedOption !== undefined;
          const isCorrect = selectedOption === q.correctAnswer;
          const revealed = isRevealed(q.id);

          return (
            <div
              key={q.id}
              className="rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-xl space-y-4"
            >
              {/* Question header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono font-black text-sm flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {q.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                    📖 {q.pageNumber}
                  </span>
                  {q.skillTag && (
                    <span className="text-xs font-bold text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded-xl border border-purple-500/30">
                      {q.skillTag}
                    </span>
                  )}
                </div>
              </div>

              {/* Prompt */}
              <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {q.questionPrompt}
              </p>

              {/* Multiple Choice Options */}
              {isMcq && q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {q.options.map(opt => {
                    const isSelected = selectedOption === opt.key;
                    const isCorrectChoice = opt.key === q.correctAnswer;

                    let btnClass = 'bg-slate-800/80 hover:bg-slate-700 border-slate-700 text-slate-200';
                    let badgeClass = 'bg-slate-700 text-slate-300';

                    if (isAnswered) {
                      if (isSelected && isCorrect) {
                        btnClass = 'bg-emerald-950/70 border-emerald-400 text-white ring-2 ring-emerald-500/40';
                        badgeClass = 'bg-emerald-500 text-slate-950 font-black';
                      } else if (isSelected && !isCorrect) {
                        btnClass = 'bg-rose-950/70 border-rose-400 text-white ring-2 ring-rose-500/40';
                        badgeClass = 'bg-rose-500 text-white font-black';
                      } else if (isCorrectChoice) {
                        btnClass = 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200 border-dashed';
                        badgeClass = 'bg-emerald-500/30 text-emerald-300 border border-emerald-400 font-black';
                      } else {
                        btnClass = 'bg-slate-950/40 border-slate-800 text-slate-500 opacity-60';
                        badgeClass = 'bg-slate-800 text-slate-500';
                      }
                    }

                    return (
                      <button
                        key={opt.key}
                        onClick={() => handleSelectOption(q.id, opt.key)}
                        className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 active:scale-98 ${btnClass}`}
                      >
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono font-black text-xs shrink-0 ${badgeClass}`}>
                          {opt.key}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold leading-relaxed pt-0.5">
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Multiple Choice Explanation Box */}
              {isMcq && isAnswered && (
                <div
                  className={`mt-4 p-5 rounded-2xl border animate-in zoom-in-95 duration-200 ${
                    isCorrect
                      ? 'bg-emerald-950/40 border-emerald-500/40'
                      : 'bg-rose-950/40 border-rose-500/40'
                  }`}
                >
                  <div className="flex items-center gap-2 font-black text-sm mb-2">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-300">Tebrikler, Doğru Cevap: {q.correctAnswer}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-400" />
                        <span className="text-rose-300">
                          Yanlış Seçenek! Doğru Cevap: {q.correctAnswer}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <strong className="text-amber-300 block mb-1">📖 Çözüm Açıklaması:</strong>
                    {q.detailedExplanation}
                  </p>
                </div>
              )}

              {/* Open-ended Question with Interactive Reveal */}
              {!isMcq && (
                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => toggleReveal(q.id)}
                    className={`px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 ${
                      revealed
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600'
                        : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/20'
                    }`}
                  >
                    {revealed ? (
                      <>
                        <EyeOff className="w-4 h-4" /> Açık Uçlu Cevabı Gizle
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" /> Açık Uçlu Model Çözümü Gör
                      </>
                    )}
                  </button>

                  {revealed && (
                    <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/40 space-y-3 animate-in zoom-in-95 duration-200">
                      <div className="flex items-center gap-2 text-sm font-black text-purple-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                        MEB Model Çözümü:
                      </div>
                      <div className="text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-purple-900/50">
                        {q.correctAnswer}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        <strong className="text-amber-300">Kazanım Dayanağı:</strong> {q.detailedExplanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
        <button
          onClick={onGoToSummary}
          className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Konu Özetine Dön
        </button>
      </div>
    </div>
  );
};
