import React, { useState, useMemo } from 'react';
import { SubTopic, Unit, TrueFalseQuestion } from '../types/curriculum';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Printer,
  Sparkles,
  Shuffle,
  Flame,
  Layers,
  Award
} from 'lucide-react';

interface Props {
  unit: Unit;
  subTopic: SubTopic;
  onBackToSummary: () => void;
  onGoToLgs: () => void;
  onOpenQuizPdf?: () => void;
}

export const TrueFalseQuiz: React.FC<Props> = ({
  unit,
  subTopic,
  onBackToSummary,
  onGoToLgs,
  onOpenQuizPdf
}) => {
  const [poolSource, setPoolSource] = useState<'subtopic' | 'unit_pool'>('subtopic');
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, boolean>>({});
  const [viewMode, setViewMode] = useState<'single' | 'list' | 'activity'>('single');
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'unanswered'>('all');
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [similarMatchNote, setSimilarMatchNote] = useState<string | null>(null);

  // Subtopic questions vs Full Unit Pool questions
  const subTopicQuestions = useMemo(() => subTopic.trueFalseQuestions || [], [subTopic]);
  
  const unitPoolQuestions = useMemo(() => {
    if (!unit?.subTopics) return subTopicQuestions;
    const pool: TrueFalseQuestion[] = [];
    unit.subTopics.forEach(s => {
      (s.trueFalseQuestions || []).forEach(q => {
        pool.push(q);
      });
    });
    return pool.length > 0 ? pool : subTopicQuestions;
  }, [unit, subTopicQuestions]);

  const rawQuestions = poolSource === 'unit_pool' ? unitPoolQuestions : subTopicQuestions;

  // Filtered questions based on status
  const questions = useMemo(() => {
    if (filterMode === 'wrong') {
      return rawQuestions.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== q.isCorrect);
    }
    if (filterMode === 'unanswered') {
      return rawQuestions.filter(q => userAnswers[q.id] === undefined);
    }
    return rawQuestions;
  }, [rawQuestions, filterMode, userAnswers]);

  const safeIdx = Math.min(activeQuestionIdx, Math.max(0, questions.length - 1));
  const currentQ = questions[safeIdx] || questions[0];

  const handleAnswer = (qId: number, answer: boolean) => {
    setUserAnswers(prev => ({
      ...prev,
      [qId]: answer
    }));

    const targetQ = rawQuestions.find(q => q.id === qId);
    if (targetQ) {
      if (answer === targetQ.isCorrect) {
        setStreak(prev => {
          const next = prev + 1;
          setBestStreak(b => Math.max(b, next));
          return next;
        });
      } else {
        setStreak(0);
      }
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setActiveQuestionIdx(0);
    setStreak(0);
    setSimilarMatchNote(null);
  };

  // Benzer Havuz Sorusu Çek
  const handleFetchSimilarQuestion = () => {
    if (rawQuestions.length <= 1) return;
    // Find unattempted question or another question
    const unattempted = rawQuestions.map((q, idx) => ({ q, idx })).filter(item => userAnswers[item.q.id] === undefined && item.idx !== safeIdx);
    let targetIndex = -1;
    if (unattempted.length > 0) {
      const chosen = unattempted[Math.floor(Math.random() * unattempted.length)];
      targetIndex = chosen.idx;
      setSimilarMatchNote(`Havuzdan yeni soru çekildi (#${chosen.idx + 1})`);
    } else {
      // Pick random
      const otherIndices = rawQuestions.map((_, i) => i).filter(i => i !== safeIdx);
      targetIndex = otherIndices[Math.floor(Math.random() * otherIndices.length)];
      setSimilarMatchNote(`Havuzdan rastgele soru getirildi (#${targetIndex + 1})`);
    }

    if (targetIndex >= 0) {
      setActiveQuestionIdx(targetIndex);
    }
  };

  if (!rawQuestions || rawQuestions.length === 0) {
    return (
      <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-4">
        <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
        <h3 className="text-xl font-bold text-slate-900">Bu bölüm için Doğru/Yanlış soruları henüz eklenmedi.</h3>
        <button
          onClick={onBackToSummary}
          className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-bold"
        >
          Konu Özetine Dön
        </button>
      </div>
    );
  }

  // Stats across current active set
  const answeredCount = Object.keys(userAnswers).filter(id => rawQuestions.some(q => q.id === Number(id))).length;
  const correctCount = rawQuestions.filter(
    q => userAnswers[q.id] !== undefined && userAnswers[q.id] === q.isCorrect
  ).length;
  const wrongCount = answeredCount - correctCount;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      
      {/* Top Header Card */}
      <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
              {subTopic.shortTitle}
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              {rawQuestions.length} D/Y Sorusu • Havuz: {unitPoolQuestions.length} Soru
            </span>
            {streak > 1 && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 animate-pulse">
                <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                {streak} Seri Doğru!
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-fredoka mt-1">
            Doğru / Yanlış & Soru Havuzu
          </h2>
        </div>

        {/* Live Scorecard and Action Bar */}
        <div className="flex items-center gap-2.5 flex-wrap">
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
          </div>

          {/* Soru Havuzu Toggle: Subtopic vs Unit Pool */}
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
              Ünite Havuzu ({unitPoolQuestions.length})
            </button>
          </div>

          {/* Benzer Havuz Sorusu Getir */}
          <button
            onClick={handleFetchSimilarQuestion}
            className="px-3.5 py-2 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            title="Havuzdan benzer/yeni soru çek"
          >
            <Shuffle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Havuzdan Benzer Soru Çek</span>
          </button>

          {/* View Modes */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold border border-slate-200">
            <button
              onClick={() => setViewMode('single')}
              className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'single' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tekli
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Liste
            </button>
            <button
              onClick={() => setViewMode('activity')}
              className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'activity' ? 'bg-amber-500 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-3 h-3" />
              Seri Etkinlik
            </button>
          </div>

          {onOpenQuizPdf && (
            <button
              onClick={onOpenQuizPdf}
              className="px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              title="PDF Çıktısı Al"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF</span>
            </button>
          )}

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
            title="Tümünü Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Soru Havuzu Bilgi Şeridi */}
      {similarMatchNote && (
        <div className="px-4 py-2.5 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-between text-xs font-bold text-emerald-900 animate-in fade-in duration-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{similarMatchNote}</span>
          </div>
          <button
            onClick={() => setSimilarMatchNote(null)}
            className="text-emerald-700 hover:text-emerald-900 font-semibold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Soru Gezgini Grid */}
      <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2 px-1">
          <div className="flex items-center gap-2">
            <span>Soru Havuzu Gezgini (1 - {questions.length})</span>
            <span className="text-emerald-700 font-bold">
              • Aktif: #{safeIdx + 1}
            </span>
          </div>

          {/* Durum Filtresi */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                filterMode === 'all' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Tümü ({rawQuestions.length})
            </button>
            <button
              onClick={() => setFilterMode('wrong')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                filterMode === 'wrong' ? 'bg-rose-100 text-rose-800' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Yanlışlar ({wrongCount})
            </button>
            <button
              onClick={() => setFilterMode('unanswered')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                filterMode === 'unanswered' ? 'bg-amber-100 text-amber-800' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Boşlar ({rawQuestions.length - answeredCount})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-15 lg:grid-cols-20 gap-1.5 max-h-32 overflow-y-auto p-1">
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isAnswered = ans !== undefined;
            const isCorrect = ans === q.isCorrect;
            const isActive = safeIdx === idx;

            return (
              <button
                key={q.id}
                onClick={() => setActiveQuestionIdx(idx)}
                className={`h-9 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                  isActive
                    ? 'ring-2 ring-emerald-500 scale-105 z-10 shadow-sm bg-emerald-600 text-white'
                    : ''
                } ${
                  !isAnswered
                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    : isCorrect
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-rose-100 text-rose-900 border border-rose-300'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* MOD 1: TEKLİ GÖRÜNÜM MODU (Büyük Dokunmatik Ekran Kartı) */}
      {viewMode === 'single' && currentQ && (
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-mono font-black text-sm flex items-center justify-center">
                #{safeIdx + 1}
              </span>
              <span className="text-xs font-bold text-slate-500">
                {poolSource === 'unit_pool' ? 'Ünite Soru Havuzu' : subTopic.shortTitle}
              </span>
            </div>

            <button
              onClick={handleFetchSimilarQuestion}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Havuzdan Benzer Soru Getir</span>
            </button>
          </div>

          {/* Soru Metni */}
          <div className="py-2">
            <p className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed">
              {currentQ.statement || currentQ.text}
            </p>
          </div>

          {/* DOĞRU / YANLIŞ BUTONLARI (Akıllı Tahta İri Butonlar) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* DOĞRU Butonu */}
            <button
              onClick={() => handleAnswer(currentQ.id, true)}
              className={`p-5 rounded-2xl border-2 flex items-center justify-center gap-3 text-lg font-black transition-all active:scale-95 cursor-pointer shadow-xs ${
                userAnswers[currentQ.id] === true
                  ? currentQ.isCorrect
                    ? 'bg-emerald-600 border-emerald-700 text-white ring-2 ring-emerald-400'
                    : 'bg-rose-600 border-rose-700 text-white ring-2 ring-rose-400'
                  : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800'
              }`}
            >
              <Check className="w-6 h-6 stroke-[3]" />
              <span>DOĞRU</span>
            </button>

            {/* YANLIŞ Butonu */}
            <button
              onClick={() => handleAnswer(currentQ.id, false)}
              className={`p-5 rounded-2xl border-2 flex items-center justify-center gap-3 text-lg font-black transition-all active:scale-95 cursor-pointer shadow-xs ${
                userAnswers[currentQ.id] === false
                  ? !currentQ.isCorrect
                    ? 'bg-emerald-600 border-emerald-700 text-white ring-2 ring-emerald-400'
                    : 'bg-rose-600 border-rose-700 text-white ring-2 ring-rose-400'
                  : 'bg-rose-50 hover:bg-rose-100 border-rose-300 text-rose-800'
              }`}
            >
              <X className="w-6 h-6 stroke-[3]" />
              <span>YANLIŞ</span>
            </button>
          </div>

          {/* Çözüm ve Açıklama Kutusu */}
          {userAnswers[currentQ.id] !== undefined && (
            <div className={`p-5 rounded-2xl border-2 animate-in fade-in duration-200 ${
              userAnswers[currentQ.id] === currentQ.isCorrect
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : 'bg-amber-50 border-amber-300 text-amber-950'
            }`}>
              <div className="flex items-center gap-2 font-black text-sm mb-1.5">
                {userAnswers[currentQ.id] === currentQ.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>TEBRİKLER! DOĞRU CEVAP</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>DİKKAT! YANITINIZ HATALI</span>
                  </>
                )}
                <span className="text-xs font-mono ml-auto">
                  İfadenin Doğrusu: <strong>{currentQ.isCorrect ? 'DOĞRU' : 'YANLIŞ'}</strong>
                </span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-800">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Önceki / Sonraki Butonları */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setActiveQuestionIdx(prev => Math.max(0, prev - 1))}
              disabled={safeIdx === 0}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 font-bold text-xs flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" /> Önceki Soru
            </button>

            <span className="text-xs font-mono font-bold text-slate-500">
              {safeIdx + 1} / {questions.length} Soru
            </span>

            <button
              onClick={() => setActiveQuestionIdx(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={safeIdx === questions.length - 1}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 font-bold text-xs flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
            >
              Sonraki Soru <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* MOD 2: SERİ ETKİNLİK MODU (Smartboard Hızlı Yarışma / Pekiştirme) */}
      {viewMode === 'activity' && currentQ && (
        <div className="rounded-3xl bg-linear-to-br from-amber-500 to-emerald-600 p-1 shadow-lg">
          <div className="bg-white rounded-[22px] p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-black text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-600" />
                  Hızlı D/Y Seri Etkinliği
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Soru: {safeIdx + 1} / {questions.length}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <span>En Yüksek Seri: <strong>{bestStreak}</strong></span>
              </div>
            </div>

            <div className="py-4 text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">
                İfadeyi İnceleyin ve Karar Verin:
              </span>
              <p className="text-lg sm:text-2xl font-bold text-slate-900 leading-relaxed font-fredoka">
                "{currentQ.statement || currentQ.text}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-2">
              <button
                onClick={() => {
                  handleAnswer(currentQ.id, true);
                  if (safeIdx < questions.length - 1) {
                    setTimeout(() => setActiveQuestionIdx(prev => prev + 1), 700);
                  }
                }}
                className={`py-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md ${
                  userAnswers[currentQ.id] === true
                    ? currentQ.isCorrect
                      ? 'bg-emerald-600 border-emerald-700 text-white'
                      : 'bg-rose-600 border-rose-700 text-white'
                    : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-400 text-emerald-900 font-black text-xl'
                }`}
              >
                <Check className="w-8 h-8 stroke-[3]" />
                <span>DOĞRU</span>
              </button>

              <button
                onClick={() => {
                  handleAnswer(currentQ.id, false);
                  if (safeIdx < questions.length - 1) {
                    setTimeout(() => setActiveQuestionIdx(prev => prev + 1), 700);
                  }
                }}
                className={`py-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md ${
                  userAnswers[currentQ.id] === false
                    ? !currentQ.isCorrect
                      ? 'bg-emerald-600 border-emerald-700 text-white'
                      : 'bg-rose-600 border-rose-700 text-white'
                    : 'bg-rose-50 hover:bg-rose-100 border-rose-400 text-rose-900 font-black text-xl'
                }`}
              >
                <X className="w-8 h-8 stroke-[3]" />
                <span>YANLIŞ</span>
              </button>
            </div>

            {userAnswers[currentQ.id] !== undefined && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 text-center max-w-xl mx-auto">
                <strong className={userAnswers[currentQ.id] === currentQ.isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                  {userAnswers[currentQ.id] === currentQ.isCorrect ? 'Tebrikler! ' : 'Hatalı! '}
                </strong>
                {currentQ.explanation}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MOD 3: LİSTE MODU */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isAnswered = ans !== undefined;

            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                      {q.statement || q.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleAnswer(q.id, true)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        ans === true
                          ? q.isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                          : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300'
                      }`}
                    >
                      D
                    </button>
                    <button
                      onClick={() => handleAnswer(q.id, false)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        ans === false
                          ? !q.isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                          : 'bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-300'
                      }`}
                    >
                      Y
                    </button>
                  </div>
                </div>

                {isAnswered && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                    <strong className="text-emerald-800 mr-1">
                      {q.isCorrect ? 'Doğru:' : 'Yanlış:'}
                    </strong>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Alt Yönlendirme */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          onClick={onBackToSummary}
          className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          Konu Özetine Dön
        </button>

        <button
          onClick={onGoToLgs}
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          LGS Genel Bakış Muhakeme (Soru Havuzu) ➔
        </button>
      </div>
    </div>
  );
};
