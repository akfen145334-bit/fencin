import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, X, Plus, Minus, Bell, Clock } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const TimerWidget: React.FC<Props> = ({ isOpen, onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState(120); // default 2 min
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
      setIsFinished(true);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const addTime = (secs: number) => {
    setSecondsLeft(prev => Math.max(0, prev + secs));
    setIsFinished(false);
  };

  const resetTimer = (secs = 120) => {
    setIsRunning(false);
    setSecondsLeft(secs);
    setIsFinished(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 bg-white border border-slate-300 shadow-xl rounded-2xl p-4 w-72 text-slate-900 animate-in slide-in-from-bottom-5 duration-200">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
            Ders Süreölçeri
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-800 p-1 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Digits Display */}
      <div className="py-4 text-center">
        <div className={`text-4xl font-black font-mono tracking-widest ${
          isFinished ? 'text-rose-600 animate-bounce' : 'text-slate-900'
        }`}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        {isFinished && (
          <div className="text-xs font-bold text-rose-600 flex items-center justify-center gap-1 mt-1">
            <Bell className="w-3.5 h-3.5 animate-spin" /> Süre Doldu!
          </div>
        )}
      </div>

      {/* Quick Add/Subtract */}
      <div className="grid grid-cols-4 gap-1.5 mb-3 text-xs font-bold">
        <button
          onClick={() => addTime(-30)}
          className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
          title="-30 Saniye"
        >
          -30s
        </button>
        <button
          onClick={() => addTime(30)}
          className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
          title="+30 Saniye"
        >
          +30s
        </button>
        <button
          onClick={() => addTime(60)}
          className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
          title="+1 Dakika"
        >
          +1dk
        </button>
        <button
          onClick={() => addTime(300)}
          className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
          title="+5 Dakika"
        >
          +5dk
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer ${
            isRunning
              ? 'bg-amber-500 hover:bg-amber-600 text-white'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white'
          }`}
        >
          {isRunning ? (
            <>
              <Pause className="w-4 h-4 fill-current" /> Duraklat
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" /> Başlat
            </>
          )}
        </button>

        <button
          onClick={() => resetTimer(120)}
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition-colors cursor-pointer"
          title="2 Dakikaya Sıfırla"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
