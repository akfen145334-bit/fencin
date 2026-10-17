import React from 'react';
import { Unit } from '../types/curriculum';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  ArrowRight,
  Layers,
  GraduationCap,
  Info,
  CalendarDays,
  Clock
} from 'lucide-react';
import {
  getCurrentCalendarWeek,
  getCalendarWeekInfo,
  resolveWeeklyTopic
} from '../utils/annualScheduleUtils';
import {
  academicWeeksCalendar,
  allGradeSchedules
} from '../data/annualCurriculumSchedule';

interface Props {
  currentGrade: number;
  selectedWeek: number;
  onSelectWeek: (weekNumber: number) => void;
  onSelectGrade?: (grade: number) => void;
  onOpenTopic: (grade: number, weekNumber: number) => void;
  onOpenAnnualScheduleModal: () => void;
  units: Unit[];
  compact?: boolean;
}

export const CurriculumWeekNavigator: React.FC<Props> = ({
  currentGrade,
  selectedWeek,
  onSelectWeek,
  onSelectGrade,
  onOpenTopic,
  onOpenAnnualScheduleModal,
  units,
  compact = false
}) => {
  const currentCalendarWeek = getCurrentCalendarWeek();
  const calendarInfo = getCalendarWeekInfo(selectedWeek);
  const resolved = resolveWeeklyTopic(currentGrade, selectedWeek, units);
  const scheduleItem = resolved?.scheduleItem;
  const isCurrentWeek = selectedWeek === currentCalendarWeek;

  const handlePrevWeek = () => {
    if (selectedWeek > 1) {
      const prevWeek = selectedWeek - 1;
      onSelectWeek(prevWeek);
      onOpenTopic(currentGrade, prevWeek);
    }
  };

  const handleNextWeek = () => {
    if (selectedWeek < 37) {
      const nextWeek = selectedWeek + 1;
      onSelectWeek(nextWeek);
      onOpenTopic(currentGrade, nextWeek);
    }
  };

  const handleJumpToCurrentWeek = () => {
    onSelectWeek(currentCalendarWeek);
    onOpenTopic(currentGrade, currentCalendarWeek);
  };

  const handleWeekChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const weekNum = parseInt(e.target.value, 10);
    if (!isNaN(weekNum)) {
      onSelectWeek(weekNum);
      onOpenTopic(currentGrade, weekNum);
    }
  };

  return (
    <div className="bg-white border-b border-emerald-100 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5">
        
        {/* Main Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          
          {/* Left section: Grade Selector + Previous/Next Week Controls */}
          <div className="flex items-center flex-wrap gap-2">
            
            {/* Grade Switcher Tabs */}
            {onSelectGrade && (
              <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                {[5, 6, 7, 8].map(g => (
                  <button
                    key={g}
                    onClick={() => {
                      onSelectGrade(g);
                      onOpenTopic(g, selectedWeek);
                    }}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                      currentGrade === g
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-200'
                    }`}
                  >
                    {g}. Sınıf
                  </button>
                ))}
              </div>
            )}

            {/* Previous Week Button (Önceki Hafta) */}
            <button
              onClick={handlePrevWeek}
              disabled={selectedWeek <= 1}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                selectedWeek <= 1
                  ? 'bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed'
                  : 'bg-white hover:bg-emerald-50 text-emerald-800 border-emerald-300 hover:border-emerald-400 active:scale-95 shadow-xs'
              }`}
              title={selectedWeek > 1 ? `${selectedWeek - 1}. Haftaya Git` : 'İlk Haftadasınız'}
            >
              <ChevronLeft className="w-4 h-4 text-emerald-700" />
              <span className="hidden sm:inline">Önceki Hafta</span>
              <span className="sm:hidden">Önceki</span>
            </button>

            {/* Week Selector Dropdown */}
            <div className="relative inline-flex items-center">
              <select
                value={selectedWeek}
                onChange={handleWeekChange}
                className="appearance-none pl-8 pr-7 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-lg text-xs sm:text-sm font-bold text-slate-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {academicWeeksCalendar.map(w => {
                  const isCur = w.week === currentCalendarWeek;
                  const itemForG = allGradeSchedules[currentGrade]?.find(i => i.weekNumber === w.week);
                  return (
                    <option key={w.week} value={w.week}>
                      {w.week}. Hafta ({w.range}) {isCur ? '★ GÜNCEL' : ''} - {itemForG?.topicTitle ? itemForG.topicTitle.slice(0, 28) + '...' : ''}
                    </option>
                  );
                })}
              </select>
              <Calendar className="w-3.5 h-3.5 text-emerald-700 absolute left-2.5 pointer-events-none" />
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 absolute right-2 pointer-events-none rotate-90" />
            </div>

            {/* Next Week Button (Sonraki Hafta) */}
            <button
              onClick={handleNextWeek}
              disabled={selectedWeek >= 37}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                selectedWeek >= 37
                  ? 'bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed'
                  : 'bg-white hover:bg-emerald-50 text-emerald-800 border-emerald-300 hover:border-emerald-400 active:scale-95 shadow-xs'
              }`}
              title={selectedWeek < 37 ? `${selectedWeek + 1}. Haftaya Git` : 'Son Haftadasınız'}
            >
              <span className="hidden sm:inline">Sonraki Hafta</span>
              <span className="sm:hidden">Sonraki</span>
              <ChevronRight className="w-4 h-4 text-emerald-700" />
            </button>

            {/* Current Week Status Badge / Jump button */}
            {isCurrentWeek ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold animate-pulse">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                GÜNCEL TAKVİM HAFTASI
              </span>
            ) : (
              <button
                onClick={handleJumpToCurrentWeek}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 text-xs font-bold transition-colors active:scale-95 shadow-xs"
                title="Bugünkü takvim haftasına dön"
              >
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Güncel Haftaya Git ({currentCalendarWeek}. Hafta)</span>
              </button>
            )}
          </div>

          {/* Right section: Week's Topic Summary & Quick Action */}
          <div className="flex items-center flex-wrap gap-2 lg:justify-end">
            
            {/* Topic Info Pill */}
            {scheduleItem && (
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-xs">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-500">
                  {currentGrade}. Sınıf • Ünite {scheduleItem.unitNumber}:
                </span>
                <span className="font-bold text-slate-900 truncate max-w-[200px] sm:max-w-[280px]">
                  {scheduleItem.topicTitle}
                </span>

                {scheduleItem.learningOutcomes?.[0] && (
                  <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[10px] font-bold">
                    {scheduleItem.learningOutcomes[0]}
                  </span>
                )}

                {(scheduleItem.specialDays || calendarInfo.special) && (
                  <span className="hidden md:inline-block px-1.5 py-0.5 rounded bg-red-50 text-red-700 border border-red-200 text-[10px] font-bold">
                    {scheduleItem.specialDays || calendarInfo.special}
                  </span>
                )}
              </div>
            )}

            {/* Direct Open Topic Button */}
            <button
              onClick={() => onOpenTopic(currentGrade, selectedWeek)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition-all active:scale-95 hover:shadow-sm"
              title="Bu haftanın konusunu ve materyallerini ekranda aç"
            >
              <span>Konuyu Aç</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Full 37-Week Annual Plan Modal Button */}
            <button
              onClick={onOpenAnnualScheduleModal}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-bold border border-slate-200 transition-colors"
              title="MEB 37 Haftalık Yıllık Plan Çerçevesi Tablosunu Aç"
            >
              <CalendarDays className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Tüm Yıllık Plan (37 Hafta)</span>
              <span className="sm:hidden">Plan</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
