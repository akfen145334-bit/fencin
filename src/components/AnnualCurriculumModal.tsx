import React, { useState, useMemo } from 'react';
import { Unit } from '../types/curriculum';
import {
  X,
  Calendar,
  BookOpen,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Search,
  Filter,
  Printer,
  CalendarDays,
  Clock,
  Layers,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  academicWeeksCalendar,
  allGradeSchedules,
  WeeklyCurriculumItem
} from '../data/annualCurriculumSchedule';
import {
  getCurrentCalendarWeek,
  resolveWeeklyTopic
} from '../utils/annualScheduleUtils';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentGrade: number;
  onSelectGrade: (grade: number) => void;
  onSelectAndOpenWeek: (grade: number, weekNumber: number) => void;
  selectedWeek: number;
  units: Unit[];
}

export const AnnualCurriculumModal: React.FC<Props> = ({
  isOpen,
  onClose,
  currentGrade,
  onSelectGrade,
  onSelectAndOpenWeek,
  selectedWeek,
  units
}) => {
  const [activeGrade, setActiveGrade] = useState<number>(currentGrade);
  const [semesterFilter, setSemesterFilter] = useState<'all' | 'sem1' | 'sem2'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const currentCalendarWeek = getCurrentCalendarWeek();

  // Keep active grade synced when opened
  React.useEffect(() => {
    setActiveGrade(currentGrade);
  }, [currentGrade, isOpen]);

  const scheduleForGrade = allGradeSchedules[activeGrade] || allGradeSchedules[5];

  const filteredItems = useMemo(() => {
    return scheduleForGrade.filter(item => {
      // Semester filter
      if (semesterFilter === 'sem1' && item.weekNumber > 18) return false;
      if (semesterFilter === 'sem2' && item.weekNumber <= 18) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTopic = item.topicTitle.toLowerCase().includes(q);
        const matchesUnit = item.unitTitle.toLowerCase().includes(q);
        const matchesOutcomes = item.learningOutcomes.some(code => code.toLowerCase().includes(q));
        const matchesSpecial = item.specialDays?.toLowerCase().includes(q) || false;
        const matchesWeek = `hafta ${item.weekNumber}`.includes(q) || `${item.weekNumber}. hafta`.includes(q);
        return matchesTopic || matchesUnit || matchesOutcomes || matchesSpecial || matchesWeek;
      }

      return true;
    });
  }, [scheduleForGrade, semesterFilter, searchQuery]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-xs">
              <CalendarDays className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black font-fredoka tracking-tight text-white">
                  2026-2027 MEB Maarif Modeli Haftalık Müfredat Çerçeve Planı
                </h2>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-100 text-xs font-bold border border-emerald-400/30">
                  1-37. Hafta
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/90 font-medium mt-0.5">
                5, 6, 7 ve 8. Sınıf Fen Bilimleri dersi haftalık konu dağılımı ve takvim eşleştirmesi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-emerald-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Yıllık Planı Yazdır"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-emerald-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Kapat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Toolbar: Grade Switcher + Semester Filter + Search */}
        <div className="bg-slate-50 border-b border-slate-200 p-3 sm:p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shrink-0">
          
          {/* Grade Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-200/80 p-1 rounded-xl">
            {[5, 6, 7, 8].map(g => (
              <button
                key={g}
                onClick={() => {
                  setActiveGrade(g);
                  onSelectGrade(g);
                }}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  activeGrade === g
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-700 hover:text-emerald-800 hover:bg-white/60'
                }`}
              >
                {g}. Sınıf
              </button>
            ))}
          </div>

          {/* Filters & Search */}
          <div className="flex items-center flex-wrap gap-2">
            
            {/* Semester Tabs */}
            <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 text-xs font-semibold">
              <button
                onClick={() => setSemesterFilter('all')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  semesterFilter === 'all'
                    ? 'bg-slate-800 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Tüm Yıl (37 Hafta)
              </button>
              <button
                onClick={() => setSemesterFilter('sem1')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  semesterFilter === 'sem1'
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                1. Dönem (1-18)
              </button>
              <button
                onClick={() => setSemesterFilter('sem2')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  semesterFilter === 'sem2'
                    ? 'bg-teal-600 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                2. Dönem (19-37)
              </button>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[200px] flex-1 sm:flex-none">
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Konu, ünite veya kazanım ara..."
                className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick jump to current week button */}
            <button
              onClick={() => {
                onSelectAndOpenWeek(activeGrade, currentCalendarWeek);
                onClose();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-bold border border-emerald-300 transition-colors"
              title="Bugünkü takvim haftasının konusuna git"
            >
              <Clock className="w-3.5 h-3.5 text-emerald-700" />
              <span>Güncel Haftaya Git ({currentCalendarWeek}. Hafta)</span>
            </button>

          </div>

        </div>

        {/* Content Table / List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-2">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="font-bold text-sm">Arama kriterlerine uygun hafta bulunamadı.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSemesterFilter('all');
                }}
                className="mt-3 text-xs text-emerald-700 hover:underline font-bold"
              >
                Filtreleri Temizle
              </button>
            </div>
          ) : (
            filteredItems.map(item => {
              const isCurrentCalWeek = item.weekNumber === currentCalendarWeek;
              const isSelected = item.weekNumber === selectedWeek;
              const calendarInfo = academicWeeksCalendar.find(w => w.week === item.weekNumber);

              return (
                <div
                  key={item.weekNumber}
                  onClick={() => {
                    onSelectAndOpenWeek(activeGrade, item.weekNumber);
                    onClose();
                  }}
                  className={`group relative rounded-xl border p-3.5 sm:p-4 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                    isCurrentCalWeek
                      ? 'bg-emerald-50/70 border-emerald-400 shadow-sm ring-2 ring-emerald-400/50'
                      : isSelected
                      ? 'bg-teal-50/50 border-teal-300'
                      : 'bg-white hover:bg-slate-50/80 border-slate-200'
                  }`}
                >
                  {/* Left Column: Week Badge + Date */}
                  <div className="flex items-center gap-3 shrink-0 min-w-[200px]">
                    <div
                      className={`w-11 h-11 rounded-xl flex flex-col items-center justify-center font-bold text-xs shrink-0 transition-transform group-hover:scale-105 ${
                        isCurrentCalWeek
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      <span className="text-[10px] leading-tight font-medium">Hafta</span>
                      <span className="text-base font-black leading-tight">{item.weekNumber}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-900 text-sm">
                          {item.dateRange}
                        </span>
                        {isCurrentCalWeek && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider animate-pulse">
                            ★ GÜNCEL HAFTA
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500 font-medium">
                        {item.month} • {item.hoursPerWeek} Saat
                      </span>
                    </div>
                  </div>

                  {/* Middle Column: Unit & Topic */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                        Ünite {item.unitNumber}: {item.unitTitle}
                      </span>

                      {item.learningOutcomes?.map(code => (
                        <span
                          key={code}
                          className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[11px] font-bold"
                        >
                          {code}
                        </span>
                      ))}

                      {(item.specialDays || calendarInfo?.special) && (
                        <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold">
                          {item.specialDays || calendarInfo?.special}
                        </span>
                      )}

                      {calendarInfo?.range.includes('Tatil') && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">
                          Tatil Haftası
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                      {item.topicTitle}
                    </h4>

                    {item.outcomeDescriptions?.[0] && (
                      <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                        {item.outcomeDescriptions[0]}
                      </p>
                    )}
                  </div>

                  {/* Right Column: Action Button */}
                  <div className="shrink-0 flex items-center justify-end">
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        onSelectAndOpenWeek(activeGrade, item.weekNumber);
                        onClose();
                      }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isCurrentCalWeek
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700'
                      }`}
                    >
                      <span>Bu Haftayı Aç</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-3 sm:p-4 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-emerald-700">Toplam:</span>
            <span>37 Hafta Planı yüklü ve kullanıma hazır.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
