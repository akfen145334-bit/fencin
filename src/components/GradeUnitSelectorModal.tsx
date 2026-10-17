import React, { useState } from 'react';
import { Unit } from '../types/curriculum';
import { availableGrades } from '../data/unitsIndex';
import { X, Layers, Sparkles, Check, ChevronRight } from 'lucide-react';

interface Props {
  isOpen: boolean;
  currentUnit: Unit;
  currentGrade: number;
  allUnits: Unit[];
  onSelectUnit: (unit: Unit) => void;
  onSelectGrade: (grade: number) => void;
  onClose: () => void;
}

export const GradeUnitSelectorModal: React.FC<Props> = ({
  isOpen,
  currentUnit,
  currentGrade,
  allUnits,
  onSelectUnit,
  onSelectGrade,
  onClose
}) => {
  const [activeGradeTab, setActiveGradeTab] = useState<number>(currentGrade);

  if (!isOpen) return null;

  const currentGradeObj = availableGrades.find(g => g.grade === activeGradeTab) || availableGrades[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
              {activeGradeTab}
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-fredoka flex items-center gap-2">
                Sınıf ve Ünite Seçimi
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Maarif Modeli
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Ders kitabındaki üniteler ve alt bölümler arasında hızlı geçiş
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grade Tabs (5, 6, 7, 8) */}
        <div className="flex items-center gap-2 p-4 bg-slate-50 border-b border-slate-200">
          {availableGrades.map(g => (
            <button
              key={g.grade}
              onClick={() => {
                setActiveGradeTab(g.grade);
                onSelectGrade(g.grade);
              }}
              className={`flex-1 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeGradeTab === g.grade
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span>{g.label}</span>
              {(g.grade === 5 || g.grade === 6 || g.grade === 7) && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white">
                  1. ve 2. Kitap
                </span>
              )}
              {g.grade === 8 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white">
                  LGS
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content / Units List */}
        <div className="p-6 overflow-y-auto max-h-[60vh] space-y-3 bg-white">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
            <span>{currentGradeObj.label} Fen Bilimleri Üniteleri</span>
            <span className="text-emerald-700">{(currentGradeObj as any).description || ''}</span>
          </div>

          {/* Units for Active Grade */}
          {(() => {
            const gradeUnits = allUnits.filter(u => (u.grade || 5) === activeGradeTab);
            if (gradeUnits.length === 0) {
              return (
                <div className="p-6 text-center text-sm text-slate-500">
                  Bu sınıf seviyesi için üniteler hazırlanıyor.
                </div>
              );
            }

            return gradeUnits.map(unit => {
              const isSelected = unit.id === currentUnit.id;

              return (
                <button
                  key={unit.id}
                  onClick={() => {
                    onSelectUnit(unit);
                    onClose();
                  }}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50 border-2 border-emerald-500 text-slate-900 shadow-sm ring-1 ring-emerald-400/30'
                      : 'bg-slate-50 hover:bg-emerald-50/50 border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                      isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {unit.unitNumber}
                    </span>

                    <div>
                      <div className="font-bold text-sm text-slate-900">
                        {unit.unitNumber}. Ünite: {unit.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {unit.subTopics.length} Alt Bölüm • Sayfa Sayfa İstasyonlar
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isSelected && (
                      <span className="text-xs font-bold text-emerald-800 flex items-center gap-1 bg-emerald-100 px-2 py-0.5 rounded-lg border border-emerald-300">
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> Seçili
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </button>
              );
            });
          })()}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Seçmek için üniteye tıklayınız.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold transition-colors cursor-pointer"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
