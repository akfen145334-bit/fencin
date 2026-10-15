import React, { useState, useEffect } from 'react';
import { Unit } from '../types/curriculum';
import { sanitizeOptionText } from '../utils/questionQualityEngine';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Play,
  Pause,
  AlertCircle,
  Printer
} from 'lucide-react';

interface Props {
  unit: Unit;
  globalAnswersRevealed?: boolean;
  onGoToSummary?: () => void;
  onOpenQuizPdf?: () => void;
}

export const UnitEnd20ExamView: React.FC<Props> = ({
  unit,
  globalAnswersRevealed = false,
  onGoToSummary,
  onOpenQuizPdf
}) => {
  const exam20Questions = unit.unitEnd20Questions || [];

  // State Management
  const [examStatus, setExamStatus] = useState<'intro' | 'active' | 'completed'>('intro');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(40 * 60); // 40 minutes for 20 questions
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  // Timer Effect
  useEffect(() => {
    if (examStatus !== 'active' || isTimerPaused) return;

    const interval = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setExamStatus('completed');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [examStatus, isTimerPaused]);

  if (!exam20Questions || exam20Questions.length === 0) {
    return (
      <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-4 max-w-2xl mx-auto shadow-xs">
        <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
        <h3 className="text-xl font-bold text-slate-900">Bu ünite için 20 soruluk deneme sınavı henüz eklenmedi.</h3>
        <p className="text-sm text-slate-500">
          Lütfen diğer üniteleri kontrol ediniz.
        </p>
      </div>
    );
  }

  const currentQ = exam20Questions[currentIdx];
  const selectedAnswer = userAnswers[currentQ.id];

  // Helper Calculations
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = exam20Questions.filter(
    q => userAnswers[q.id] !== undefined && userAnswers[q.id] === q.correctAnswer
  ).length;
  const wrongCount = answeredCount - correctCount;
  const emptyCount = exam20Questions.length - answeredCount;
  const netScore = Math.max(0, +(correctCount - wrongCount / 3).toFixed(2));
  const totalScore = Math.round((correctCount / exam20Questions.length) * 100);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setExamStatus('active');
    setTimeLeftSeconds(40 * 60);
    setUserAnswers({});
    setCurrentIdx(0);
    setIsTimerPaused(false);
    setReviewMode(false);
  };

  const handleSelectOption = (qId: number, optionKey: string) => {
    if (reviewMode) return;
    setUserAnswers(prev => ({
      ...prev,
      [qId]: optionKey
    }));
  };

  const handleFinishExam = () => {
    setExamStatus('completed');
  };

  // =========================================================================
  // 1. INTRO SCREEN (Temel Dinî Bilgiler Aesthetic)
  // =========================================================================
  if (examStatus === 'intro') {
    return (
      <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto pb-20">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-emerald-600 mx-auto flex items-center justify-center text-white shadow-md shadow-emerald-700/20">
            <Award className="w-10 h-10 text-white" />
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
              MEB MAARİF MODELİ • 20 SORULUK DENEME SINAVI
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-fredoka mt-3">
              {unit.title} — Ünite Sonu Değerlendirme Denemesi
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              Bu sınav, <strong>{unit.grade || 5}. Sınıf {unit.unitNumber}. Ünite</strong> alt başlıklarındaki tüm kazanımları dengeli dağılımla ölçen 20 adet özgün bağlam temelli LGS mantık muhakeme sorusundan oluşmaktadır.
            </p>
          </div>

          {/* Exam Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500 font-bold">Soru Sayısı</div>
              <div className="text-xl font-black text-slate-900 font-mono">20 Soru</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500 font-bold">Önerilen Süre</div>
              <div className="text-xl font-black text-emerald-700 font-mono">40 Dakika</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500 font-bold">Cevap Dağılımı</div>
              <div className="text-xl font-black text-emerald-700 font-mono">Dengeli (%25)</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500 font-bold">Soru Formatı</div>
              <div className="text-xl font-black text-slate-900">Bağlam Temelli</div>
            </div>
          </div>

          {/* Principles Check List */}
          <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 text-left max-w-2xl mx-auto space-y-2 text-xs text-slate-800">
            <div className="font-extrabold text-emerald-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Sınav İlkeleri & Kuralları:
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Soruların tamamı gerçek yaşam problemi, gazete haberi veya deney kurgusu içerir.</li>
              <li>Cevap anahtarı A, B, C, D şıkları arasında eşit dağıtılmıştır.</li>
              <li>Doğru şık ile çeldirici şıklar eşit uzunluktadır; uzunluktan tahmin yapılamaz.</li>
              <li>Sınav bitiminde detaylı karne ve her sorunun adım adım çözümü gösterilir.</li>
            </ul>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleStartExam}
              className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base sm:text-lg shadow-md shadow-emerald-700/20 flex items-center gap-2.5 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>20 Soruluk Deneme Sınavına Başla</span>
            </button>

            {onOpenQuizPdf && (
              <button
                onClick={onOpenQuizPdf}
                className="px-6 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Printer className="w-5 h-5" />
                <span>PDF Olarak Çıktı Al</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. COMPLETED / SCOREBOARD SCREEN
  // =========================================================================
  if (examStatus === 'completed' && !reviewMode) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto pb-20">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-emerald-600 mx-auto flex items-center justify-center text-white shadow-md shadow-emerald-700/20">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
              SINAV TAMAMLANDI • SONUÇ KARNESİ
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-fredoka mt-3">
              {totalScore >= 70 ? 'Tebrikler! Harika Bir Performans!' : 'Çalışmaya Devam! Başarı Yakında!'}
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              {unit.title} — 20 Soruluk Maarif Değerlendirme Sınavı
            </p>
          </div>

          {/* Scorecards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500 font-bold">Puan</div>
              <div className="text-3xl font-black text-slate-900 font-mono">{totalScore}</div>
              <div className="text-[10px] text-slate-500">/ 100 Tam Puan</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-emerald-700 font-bold">Doğru</div>
              <div className="text-3xl font-black text-emerald-700 font-mono">{correctCount}</div>
              <div className="text-[10px] text-slate-500">Soru</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-rose-600 font-bold">Yanlış</div>
              <div className="text-3xl font-black text-rose-600 font-mono">{wrongCount}</div>
              <div className="text-[10px] text-slate-500">Soru</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500 font-bold">Boş</div>
              <div className="text-3xl font-black text-slate-700 font-mono">{emptyCount}</div>
              <div className="text-[10px] text-slate-500">Soru</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
              <div className="text-xs text-emerald-800 font-bold">LGS Neti</div>
              <div className="text-3xl font-black text-emerald-800 font-mono">{netScore}</div>
              <div className="text-[10px] text-slate-500">Net</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => {
                setReviewMode(true);
                setCurrentIdx(0);
              }}
              className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>Soruları ve Çözümleri İncele</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {onOpenQuizPdf && (
              <button
                onClick={onOpenQuizPdf}
                className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-sm flex items-center gap-2 cursor-pointer transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>PDF Çıktı Al</span>
              </button>
            )}

            <button
              onClick={handleStartExam}
              className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm border border-slate-300 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Sınavı Yeniden Başlat</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 3. ACTIVE EXAM OR REVIEW SCREEN (Not sticky, naturally scrollable)
  // =========================================================================
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = isAnswered && selectedAnswer === currentQ.correctAnswer;
  const showFeedback = reviewMode || globalAnswersRevealed;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      
      {/* Top Floating Control Bar - RELATIVE, so screen doesn't get blocked when scrolling */}
      <div className="rounded-3xl bg-white border border-slate-200 p-4 sm:p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center font-black text-white text-base shadow-xs">
            {currentIdx + 1}
          </span>
          <div>
            <div className="text-xs font-bold text-emerald-800">
              {currentQ.contextTitle || `${unit.unitNumber}. Ünite`}
            </div>
            <div className="text-sm font-black text-slate-900 font-fredoka">
              Soru {currentIdx + 1} / 20
            </div>
          </div>
        </div>

        {/* Timer Bar */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl border font-mono text-sm font-bold ${
            timeLeftSeconds < 300
              ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
              : 'bg-slate-50 border-slate-200 text-slate-800'
          }`}>
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>Kalan Süre: {formatTime(timeLeftSeconds)}</span>
          </div>

          <button
            onClick={() => setIsTimerPaused(!isTimerPaused)}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 cursor-pointer transition-colors"
            title={isTimerPaused ? 'Devam Et' : 'Duraklat'}
          >
            {isTimerPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4" />}
          </button>

          {!reviewMode && (
            <button
              onClick={handleFinishExam}
              className="px-4 py-2 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
            >
              Sınavı Bitir
            </button>
          )}

          {reviewMode && (
            <button
              onClick={() => setReviewMode(false)}
              className="px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 cursor-pointer transition-colors"
            >
              Karneye Dön
            </button>
          )}
        </div>
      </div>

      {/* 20 Question Navigator Palette (1 to 20 Grid) */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-3 px-1 text-xs">
          <span className="font-bold text-slate-500">SORU GEÇİŞ PALETİ (20 SORU)</span>
          <span className="text-slate-700 font-semibold">
            Cevaplanan: <strong className="text-emerald-700">{answeredCount} / 20</strong>
          </span>
        </div>

        <div className="grid grid-cols-10 sm:grid-cols-20 gap-1.5">
          {exam20Questions.map((q, idx) => {
            const hasAnswer = userAnswers[q.id] !== undefined;
            const isCurrent = idx === currentIdx;
            const isQCorrect = userAnswers[q.id] === q.correctAnswer;

            let btnBg = 'bg-slate-50 text-slate-600 border-slate-200';
            if (showFeedback && hasAnswer) {
              btnBg = isQCorrect ? 'bg-emerald-600 text-white border-emerald-500 font-bold' : 'bg-rose-600 text-white border-rose-500 font-bold';
            } else if (hasAnswer) {
              btnBg = 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(idx)}
                className={`h-9 rounded-xl font-mono text-xs font-bold transition-all border flex items-center justify-center cursor-pointer ${btnBg} ${
                  isCurrent ? 'ring-2 ring-emerald-500 scale-110 z-10 shadow-xs' : 'hover:border-slate-300'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* QUESTION CARD */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        
        {/* Context / Scenario Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
              Bağlam Temelli Problem #{currentIdx + 1}
            </span>
            <span className="text-xs text-slate-500 font-bold">
              {currentQ.contextTitle}
            </span>
          </div>

          {showFeedback && isAnswered && (
            <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
              isCorrect ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'
            }`}>
              {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
              <span>{isCorrect ? 'DOĞRU CEVAP' : 'YANLIŞ CEVAP'}</span>
            </div>
          )}
        </div>

        {/* Question Scenario & Prompt */}
        {currentQ.scenario && (
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm leading-relaxed">
            {currentQ.scenario}
          </div>
        )}

        <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed whitespace-pre-line bg-emerald-50/40 p-5 rounded-2xl border border-emerald-200">
          {currentQ.questionPrompt}
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map(opt => {
            const isOptSelected = selectedAnswer === opt.key;
            const isOptCorrect = opt.key === currentQ.correctAnswer;

            let optionStyle = 'bg-white border-slate-300 hover:border-emerald-300 text-slate-800';

            if (showFeedback) {
              if (isOptCorrect) {
                optionStyle = 'bg-emerald-50 border-2 border-emerald-600 text-emerald-950 ring-2 ring-emerald-400/30';
              } else if (isOptSelected && !isOptCorrect) {
                optionStyle = 'bg-rose-50 border-2 border-rose-600 text-rose-950 ring-2 ring-rose-400/30';
              }
            } else if (isOptSelected) {
              optionStyle = 'bg-emerald-50 border-2 border-emerald-600 text-emerald-950 shadow-xs';
            }

            return (
              <button
                key={opt.key}
                onClick={() => handleSelectOption(currentQ.id, opt.key)}
                className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-4 cursor-pointer ${optionStyle}`}
              >
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-sm font-black shrink-0 ${
                  showFeedback && isOptCorrect
                    ? 'bg-emerald-600 text-white'
                    : showFeedback && isOptSelected && !isOptCorrect
                    ? 'bg-rose-600 text-white'
                    : isOptSelected
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {opt.key}
                </span>

                <div className="flex-1 text-sm sm:text-base font-medium leading-relaxed pt-0.5">
                  {sanitizeOptionText(opt.text)}
                </div>

                {showFeedback && isOptCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                )}
                {showFeedback && isOptSelected && !isOptCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation in Review Mode */}
        {showFeedback && currentQ.explanation && (
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-sm text-slate-800 space-y-2 animate-in fade-in">
            <div className="font-extrabold text-emerald-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Adım Adım Pedagojik Çözüm & Kazanım Açıklaması:
            </div>
            <p className="leading-relaxed text-slate-800 whitespace-pre-line">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Navigation Buttons: Previous / Next */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
            disabled={currentIdx === 0}
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer border border-slate-200"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Önceki Soru</span>
          </button>

          <span className="text-xs font-mono text-slate-500 font-bold">
            {currentIdx + 1} / 20
          </span>

          <button
            onClick={() => setCurrentIdx(prev => Math.min(19, prev + 1))}
            disabled={currentIdx === 19}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer shadow-xs"
          >
            <span>Sonraki Soru</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
