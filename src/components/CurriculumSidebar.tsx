import React, { useState, useMemo } from 'react';
import { Unit, SubTopic } from '../types/curriculum';
import {
  BookOpen,
  Search,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Layers,
  PanelLeftClose,
  PanelLeft,
  Globe,
  ExternalLink,
  BarChart3
} from 'lucide-react';
import { getSpecificEbaLink } from '../utils/ebaLinks';
import { getCurrentCalendarWeek } from '../utils/annualScheduleUtils';
import { allGradeSchedules } from '../data/annualCurriculumSchedule';

interface Props {
  units: Unit[];
  currentGrade: number;
  currentUnit: Unit;
  currentSubTopic: SubTopic;
  onSelectUnit: (unit: Unit) => void;
  onSelectSubTopic: (sub: SubTopic, unit: Unit) => void;
  onSelectGrade: (grade: number) => void;
  isOpen: boolean;
  onToggleOpen: () => void;
  onOpenProgressDashboard?: () => void;
}

export const CurriculumSidebar: React.FC<Props> = ({
  units,
  currentGrade,
  currentUnit,
  currentSubTopic,
  onSelectUnit,
  onSelectSubTopic,
  onSelectGrade,
  isOpen,
  onToggleOpen,
  onOpenProgressDashboard
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedUnitIds, setExpandedUnitIds] = useState<Record<string, boolean>>({
    [currentUnit.id]: true
  });

  // CRITICAL: Strictly filter units so ONLY the selected grade's units appear on the side!
  const gradeUnits = useMemo(() => {
    return units.filter(u => (u.grade || 5) === currentGrade);
  }, [units, currentGrade]);

  // Current academic week subtopic for grade
  const currentCalWeek = getCurrentCalendarWeek();
  const currentWeekSubTopicId = useMemo(() => {
    const item = allGradeSchedules[currentGrade]?.find(i => i.weekNumber === currentCalWeek);
    return item?.subTopicId;
  }, [currentGrade, currentCalWeek]);

  // Keep active unit expanded automatically
  React.useEffect(() => {
    setExpandedUnitIds(prev => ({
      ...prev,
      [currentUnit.id]: true
    }));
  }, [currentUnit.id]);

  const toggleUnitExpand = (unitId: string) => {
    setExpandedUnitIds(prev => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };

  // Filter units and subtopics by search query within the CURRENT grade only
  const filteredUnits = useMemo(() => {
    if (!searchQuery.trim()) return gradeUnits;
    const q = searchQuery.toLowerCase().trim();

    return gradeUnits
      .map(unit => {
        const matchesUnit = unit.title.toLowerCase().includes(q) || unit.unitNumber.toString() === q;
        const matchingSubTopics = unit.subTopics.filter(
          sub =>
            sub.title.toLowerCase().includes(q) ||
            sub.shortTitle.toLowerCase().includes(q) ||
            sub.concepts.some(c => c.toLowerCase().includes(q))
        );

        if (matchesUnit) {
          return unit;
        }

        if (matchingSubTopics.length > 0) {
          return {
            ...unit,
            subTopics: matchingSubTopics
          };
        }

        return null;
      })
      .filter((u): u is Unit => u !== null);
  }, [gradeUnits, searchQuery]);

  // Calculate curriculum progress within the current grade
  const totalSubtopicsInGrade = useMemo(() => {
    return gradeUnits.reduce((acc, u) => acc + u.subTopics.length, 0);
  }, [gradeUnits]);

  // Active subtopic index for display
  const currentSubTopicOverallIndex = useMemo(() => {
    let count = 0;
    for (const u of gradeUnits) {
      for (const s of u.subTopics) {
        count++;
        if (s.id === currentSubTopic.id) {
          return count;
        }
      }
    }
    return 1;
  }, [gradeUnits, currentSubTopic]);

  const progressPercentage = totalSubtopicsInGrade > 0
    ? Math.round((currentSubTopicOverallIndex / totalSubtopicsInGrade) * 100)
    : 0;

  if (!isOpen) {
    return (
      <div className="hidden lg:block shrink-0">
        <button
          onClick={onToggleOpen}
          className="fixed left-2 top-24 z-30 p-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 shadow-md transition-all flex items-center gap-2 cursor-pointer font-bold text-xs"
          title="Konu ve Alt Konular Menüsünü Aç"
        >
          <PanelLeft className="w-5 h-5 text-emerald-600" />
          <span className="hidden xl:inline">{currentGrade}. Sınıf Konuları</span>
        </button>
      </div>
    );
  }

  return (
    <aside className="w-80 shrink-0 bg-white border-r border-slate-200 flex flex-col h-full min-h-[calc(100vh-80px)] text-slate-900 shadow-xs">
      
      {/* Top Sidebar Header with Grade Selector */}
      <div className="p-4 border-b border-slate-200 bg-white space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800">
                MEB Fen Bilimleri
              </span>
              <h2 className="text-sm font-extrabold text-slate-900 leading-tight">
                {currentGrade}. Sınıf Müfredatı
              </h2>
            </div>
          </div>

          <button
            onClick={onToggleOpen}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Yan Menüyü Daralt"
          >
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Sınıf Değiştirici Butonları */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          {[5, 6, 7, 8].map(g => (
            <button
              key={g}
              onClick={() => onSelectGrade(g)}
              className={`flex-1 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                currentGrade === g
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
              title={`${g}. Sınıfa Geç`}
            >
              {g}. Sınıf
            </button>
          ))}
        </div>

        {/* Search Input (Temel Dinî Bilgiler tarzı) */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={`${currentGrade}. sınıf konu, kavram ara...`}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
          />
        </div>

        {/* Müfredat İlerlemesi (Image 2'deki gibi) */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-700 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              Müfredat İlerlemesi
            </span>
            <span className="font-mono font-bold text-emerald-800 text-[11px]">
              {currentSubTopicOverallIndex}/{totalSubtopicsInGrade} (%{progressPercentage})
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-emerald-600 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Topics and Subtopics List (Only for selected grade!) */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredUnits.length === 0 ? (
          <div className="p-4 text-center text-xs text-slate-500">
            Aramanıza uygun konu bulunamadı.
          </div>
        ) : (
          filteredUnits.map(unit => {
            const isUnitActive = unit.id === currentUnit.id;
            const isExpanded = expandedUnitIds[unit.id] ?? isUnitActive;

            return (
              <div
                key={unit.id}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs transition-all"
              >
                {/* Unit Header Button */}
                <button
                  onClick={() => {
                    onSelectUnit(unit);
                    toggleUnitExpand(unit.id);
                  }}
                  className={`w-full p-3 text-left flex items-start gap-2.5 transition-all cursor-pointer ${
                    isUnitActive
                      ? 'bg-emerald-50/70 border-b border-emerald-100'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono font-black text-xs shrink-0 mt-0.5 ${
                    isUnitActive ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {unit.unitNumber}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-900 leading-snug truncate">
                      {unit.unitNumber}. ÜNİTE: {unit.title}
                    </div>
                    <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <span>{unit.grade !== 8 && unit.bookNumber ? `${unit.bookNumber}. Kitap • ` : ''}</span>
                      <span>{unit.subTopics.length} Alt Konu</span>
                    </div>
                  </div>

                  <span className="text-slate-400 p-0.5">
                    {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {/* SubTopics List (Image 2'deki gibi aktif olan yeşil dolu buton) */}
                {isExpanded && (
                  <div className="p-1.5 bg-slate-50/50 space-y-1">
                    {unit.subTopics.map((sub, sIdx) => {
                      const isSubActive = currentSubTopic.id === sub.id && isUnitActive;
                      const subNumber = `${unit.unitNumber}.${sIdx + 1}`;

                      return (
                        <button
                          key={sub.id}
                          onClick={() => onSelectSubTopic(sub, unit)}
                          className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-2 cursor-pointer ${
                            isSubActive
                              ? 'bg-emerald-600 text-white font-bold shadow-xs'
                              : 'hover:bg-emerald-50/80 text-slate-700 hover:text-emerald-950 font-medium'
                          }`}
                        >
                          <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded shrink-0 ${
                            isSubActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                          }`}>
                            {subNumber}
                          </span>

                          <div className="flex-1 min-w-0">
                            <div className="text-xs leading-snug flex items-center justify-between gap-1">
                              <span className="truncate">{sub.title}</span>
                              {sub.id === currentWeekSubTopicId && (
                                <span className="shrink-0 px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow-2xs">
                                  BU HAFTA
                                </span>
                              )}
                            </div>
                            {sub.concepts && sub.concepts.length > 0 && (
                              <div className={`text-[10px] truncate mt-0.5 ${
                                isSubActive ? 'text-emerald-100' : 'text-slate-500'
                              }`}>
                                {sub.concepts.slice(0, 3).join(' • ')}
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Sidebar Footer Info */}
      <div className="p-3 border-t border-slate-200 bg-white text-[11px] text-slate-500 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-semibold">{currentGrade}. Sınıf • {gradeUnits.length} Ünite</span>
          <span className="text-emerald-700 font-bold">%100 MEB Maarif</span>
        </div>
        {onOpenProgressDashboard && (
          <button
            onClick={onOpenProgressDashboard}
            className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 font-bold transition-all text-[11px] cursor-pointer"
            title="Öğrenci ve Sınıf İlerleme Takip Panelini Aç"
          >
            <span className="flex items-center gap-1.5 truncate">
              <BarChart3 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span>Sınıf İlerleme & Başarı Paneli</span>
            </span>
            <span className="text-[10px] bg-indigo-200 text-indigo-900 px-1.5 py-0.2 rounded font-mono">
              Takip
            </span>
          </button>
        )}
        <a
          href={getSpecificEbaLink(currentGrade, currentUnit, currentSubTopic)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-900 border border-orange-200 font-bold transition-all text-[11px] group"
          title="Aktif alt konunun MEB EBA sayfasını yeni sekmede aç"
        >
          <span className="flex items-center gap-1.5 truncate">
            <Globe className="w-3.5 h-3.5 text-orange-600 shrink-0" />
            <span className="truncate">EBA: {currentSubTopic?.title || 'Aktif Konu'}</span>
          </span>
          <ExternalLink className="w-3 h-3 text-orange-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </aside>
  );
};
