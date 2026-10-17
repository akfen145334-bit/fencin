import React, { useState, useRef, useEffect } from 'react';
import { Unit, SubTopic } from '../types/curriculum';
import {
  Pen,
  Clock,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  GraduationCap,
  Home,
  Award,
  Printer,
  Compass,
  Search,
  PanelLeft,
  Globe,
  ExternalLink,
  BarChart3
} from 'lucide-react';
import { getSpecificEbaLink } from '../utils/ebaLinks';

export type AppView = 
  | 'interactive-book'
  | 'summary'
  | 'true-false'
  | 'lgs'
  | 'simulation'
  | 'unit-end-20';

interface Props {
  units: Unit[];
  currentUnit: Unit;
  currentGrade: number;
  currentSubTopic: SubTopic;
  activeView: AppView;
  onSelectUnit: (unit: Unit) => void;
  onSelectSubTopic: (sub: SubTopic) => void;
  onChangeView: (view: AppView) => void;
  onSelectGrade?: (grade: number) => void;
  onGoToLanding?: () => void;
  isDrawingActive: boolean;
  onToggleDrawing: () => void;
  onToggleTimer: () => void;
  onOpenGradePicker: () => void;
  globalAnswersRevealed: boolean;
  onToggleGlobalAnswers: () => void;
  textSize: 'normal' | 'large' | 'huge';
  onChangeTextSize: (size: 'normal' | 'large' | 'huge') => void;
  onOpenQuizPdf?: () => void;
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
  onOpenProgressDashboard?: () => void;
  isProgressDashboardOpen?: boolean;
}

export const Header: React.FC<Props> = ({
  units,
  currentUnit,
  currentGrade,
  currentSubTopic,
  activeView,
  onSelectUnit,
  onSelectSubTopic,
  onChangeView,
  onSelectGrade,
  onGoToLanding,
  isDrawingActive,
  onToggleDrawing,
  onToggleTimer,
  onOpenGradePicker,
  globalAnswersRevealed,
  onToggleGlobalAnswers,
  textSize,
  onChangeTextSize,
  onOpenQuizPdf,
  onToggleSidebar,
  isSidebarOpen,
  onOpenProgressDashboard,
  isProgressDashboardOpen
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [unitDropdownOpen, setUnitDropdownOpen] = useState(false);
  const [gradeDropdownOpen, setGradeDropdownOpen] = useState(false);
  const [isSubTopicsOpen, setIsSubTopicsOpen] = useState(true);

  const gradeDropdownRef = useRef<HTMLDivElement>(null);
  const unitDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (gradeDropdownRef.current && !gradeDropdownRef.current.contains(e.target as Node)) {
        setGradeDropdownOpen(false);
      }
      if (unitDropdownRef.current && !unitDropdownRef.current.contains(e.target as Node)) {
        setUnitDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const currentSubIdx = currentUnit.subTopics.findIndex(s => s.id === currentSubTopic.id);
  const currentSubNum = `${currentUnit.unitNumber}.${currentSubIdx >= 0 ? currentSubIdx + 1 : 1}`;

  const gradesList = [
    { grade: 5, label: '5. Sınıf Fen Bilimleri', desc: 'Türkiye Yüzyılı Maarif Modeli - 1. ve 2. Ders Kitabı (7 Ünite)', badge: '1. ve 2. Kitap' },
    { grade: 6, label: '6. Sınıf Fen Bilimleri', desc: 'Türkiye Yüzyılı Maarif Modeli - 1. ve 2. Ders Kitabı (7 Ünite)', badge: '1. ve 2. Kitap' },
    { grade: 7, label: '7. Sınıf Fen Bilimleri', desc: 'Türkiye Yüzyılı Maarif Modeli - 1. ve 2. Ders Kitabı (7 Ünite)', badge: '1. ve 2. Kitap' },
    { grade: 8, label: '8. Sınıf Fen Bilimleri', desc: 'LGS Hazırlık: Mevsimler, DNA, Basınç, Madde, Enerji', badge: 'LGS Odaklı' }
  ];

  return (
    /* NOT STICKY: Natural document flow so the smartboard can scroll down smoothly without any frozen header */
    <header className="relative bg-white border-b border-slate-200 shadow-xs z-30 transition-all">
      {/* LINE 1: Temel Dinî Bilgiler Aesthetic Brand Navbar */}
      <div className="border-b border-slate-200 px-3 sm:px-6 py-2.5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left Brand & Grade Info */}
          <div className="flex items-center gap-3">
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isSidebarOpen
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                }`}
                title={isSidebarOpen ? 'Yan Menüyü Kapat' : 'Yan Menüyü Aç'}
              >
                <PanelLeft className="w-4 h-4 text-emerald-600" />
                <span className="hidden lg:inline">{isSidebarOpen ? 'Menü' : 'Konular'}</span>
              </button>
            )}

            {/* Din Keşif Atölyesi tarzı Emerald Logo */}
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black shadow-md shadow-emerald-700/20 shrink-0">
              <BookOpen className="w-5 h-5 text-white" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  MEB Maarif Modeli
                </span>
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                  Fen Keşif Atölyesi
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-slate-900 leading-tight font-fredoka flex items-center gap-2">
                <span>Fen Bilimleri</span>
                <span className="text-emerald-700 font-extrabold text-sm sm:text-base">
                  | {currentGrade}. Sınıf
                </span>
              </h1>
            </div>

            {/* Sınıf Değiştirici Dropdown */}
            <div className="relative ml-2" ref={gradeDropdownRef}>
              <button
                onClick={() => {
                  setGradeDropdownOpen(!gradeDropdownOpen);
                  setUnitDropdownOpen(false);
                }}
                className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-black text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                title="Sınıf Seviyesini Değiştir"
              >
                <GraduationCap className="w-4 h-4 text-emerald-700" />
                <span>{currentGrade}. Sınıf</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${gradeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {gradeDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-white border border-slate-300 rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[11px] font-bold text-slate-500 px-3 py-1.5 border-b border-slate-100">
                    Sınıf Seviyesini Seçiniz:
                  </div>
                  <div className="flex flex-col gap-1 pt-1.5">
                    {gradesList.map(item => {
                      const isCurrent = currentGrade === item.grade;
                      return (
                        <button
                          key={item.grade}
                          onClick={() => {
                            if (onSelectGrade) onSelectGrade(item.grade);
                            setGradeDropdownOpen(false);
                          }}
                          className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer ${
                            isCurrent
                              ? 'bg-emerald-600 text-white font-black shadow-sm'
                              : 'hover:bg-emerald-50 text-slate-700 hover:text-emerald-900'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center ${
                              isCurrent ? 'bg-white text-emerald-700' : 'bg-emerald-100 text-emerald-800'
                            }`}>
                              {item.grade}
                            </span>
                            <div className="text-xs font-bold leading-tight">
                              <div>{item.label}</div>
                              <div className={`text-[10px] font-normal ${isCurrent ? 'text-emerald-100' : 'text-slate-500'}`}>
                                {item.badge}
                              </div>
                            </div>
                          </div>
                          {isCurrent && <span className="text-[10px] font-black">✓ Aktif</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Ünite Seçici Dropdown */}
            <div className="relative" ref={unitDropdownRef}>
              <button
                onClick={() => {
                  setUnitDropdownOpen(!unitDropdownOpen);
                  setGradeDropdownOpen(false);
                }}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs max-w-[220px] sm:max-w-none truncate"
                title="Ünite Değiştir"
              >
                <Layers className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{currentUnit.unitNumber}. Ünite: {currentUnit.title}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 shrink-0 transition-transform ${unitDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {unitDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-80 sm:w-96 max-h-96 overflow-y-auto bg-white border border-slate-300 rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[11px] font-bold text-slate-500 px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                    <span>{currentGrade}. Sınıf Fen Bilimleri Üniteleri:</span>
                    <span className="text-[10px] text-emerald-700 font-mono font-bold">
                      {units.filter(u => (u.grade || 5) === currentGrade).length} Ünite
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 pt-1.5">
                    {units
                      .filter(u => (u.grade || 5) === currentGrade)
                      .map(u => {
                        const isCurrent = u.id === currentUnit.id;
                        return (
                          <button
                            key={u.id}
                            onClick={() => {
                              onSelectUnit(u);
                              setUnitDropdownOpen(false);
                            }}
                            className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer ${
                              isCurrent
                                ? 'bg-emerald-600 text-white font-black shadow-sm'
                                : 'hover:bg-emerald-50 text-slate-700 hover:text-emerald-900'
                            }`}
                          >
                            <div className="text-xs font-bold leading-tight">
                              <span className="font-mono">{u.unitNumber}. Ünite:</span> {u.title}
                            </div>
                            <span className={`text-[10px] px-2 py-0.5 rounded-md font-mono shrink-0 ml-2 ${
                              isCurrent ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {u.subTopics.length} Bölüm
                            </span>
                          </button>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Akıllı Tahta Araçları & Ana Giriş */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Yazı Boyutu */}
            <div className="flex items-center bg-slate-100 border border-slate-200 p-0.5 rounded-xl text-xs font-bold">
              <button
                onClick={() => onChangeTextSize('normal')}
                className={`px-2 py-1 rounded-lg transition-all ${
                  textSize === 'normal' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Normal Yazı Boyutu"
              >
                A
              </button>
              <button
                onClick={() => onChangeTextSize('large')}
                className={`px-2 py-1 rounded-lg transition-all ${
                  textSize === 'large' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Büyük Boyut (A+)"
              >
                A+
              </button>
              <button
                onClick={() => onChangeTextSize('huge')}
                className={`px-2 py-1 rounded-lg transition-all ${
                  textSize === 'huge' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Akıllı Tahta Boyutu (A++)"
              >
                A++
              </button>
            </div>

            {/* Tahta Kalemi */}
            <button
              onClick={onToggleDrawing}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                isDrawingActive
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-500/40'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`}
              title="Akıllı Tahta Çizim Kalemi"
            >
              <Pen className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">Kalem</span>
            </button>

            {/* Sayaç */}
            <button
              onClick={onToggleTimer}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
              title="Ders Sayacı"
            >
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden sm:inline">Sayaç</span>
            </button>

            {/* Tüm Cevapları Aç / Kapat */}
            <button
              onClick={onToggleGlobalAnswers}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                globalAnswersRevealed
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`}
              title="Tüm Cevapları Göster/Gizle"
            >
              {globalAnswersRevealed ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-white" />
                  <span className="hidden sm:inline">Cevapları Kapat</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden sm:inline">Cevapları Aç</span>
                </>
              )}
            </button>

            {/* Öğrenci & Sınıf İlerleme Paneli */}
            {onOpenProgressDashboard && (
              <button
                onClick={onOpenProgressDashboard}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                  isProgressDashboardOpen
                    ? 'bg-indigo-600 text-white ring-2 ring-indigo-400'
                    : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200'
                }`}
                title="Öğrenci & Sınıf İlerleme ve Başarı Paneli"
              >
                <BarChart3 className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden md:inline">İlerleme Paneli</span>
              </button>
            )}

            {/* Tam Ekran */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs cursor-pointer"
              title={isFullscreen ? 'Tam Ekrandan Çık' : 'Tam Ekran Modu'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Ana Giriş Butonu */}
            {onGoToLanding && (
              <button
                onClick={onGoToLanding}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-slate-200"
                title="Giriş Sayfasına Dön"
              >
                <Home className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Giriş</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* LINE 2: ALT BÖLÜMLER (EXACTLY AS IN RESIM 1) */}
      <div className="bg-[#F8FAF9] border-t border-slate-200 px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto">
          
          {/* Alt Bölümler Header Line */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800 shrink-0">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>ALT BÖLÜMLER:</span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs text-slate-600">Aktif Bölüm:</span>
                <span className="text-xs font-bold text-slate-900 font-mono bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
                  {currentSubNum} {currentSubTopic.title}
                </span>
                <a
                  href={getSpecificEbaLink(currentGrade, currentUnit, currentSubTopic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-black transition-all shadow-xs"
                  title="Bu alt konunun özel EBA içeriğini yeni sekmede aç"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>EBA'da Aç</span>
                  <ExternalLink className="w-3 h-3 text-orange-100" />
                </a>
              </div>
            </div>

            <button
              onClick={() => setIsSubTopicsOpen(!isSubTopicsOpen)}
              className="px-3 py-1 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors border border-slate-200 shadow-xs cursor-pointer"
            >
              <span>{isSubTopicsOpen ? 'Bölümleri Gizle' : 'Tüm Bölümleri Aç (Alt Alta)'}</span>
              {isSubTopicsOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Subtopics List (matches Resim 1 exactly) */}
          {isSubTopicsOpen && (
            <div className="flex flex-col gap-2 pt-1 pb-1">
              {currentUnit.subTopics.map((sub, idx) => {
                const isActive = currentSubTopic.id === sub.id;
                const subNum = `${currentUnit.unitNumber}.${idx + 1}`;

                return (
                  <div
                    key={sub.id}
                    className={`rounded-2xl transition-all border ${
                      isActive
                        ? 'bg-white border-2 border-emerald-500 shadow-md p-3 sm:p-4 ring-1 ring-emerald-500/20'
                        : 'bg-white/70 hover:bg-white border-slate-200 hover:border-emerald-300 p-2.5 sm:p-3'
                    }`}
                  >
                    {/* SubTopic Header Bar */}
                    <div
                      onClick={() => onSelectSubTopic(sub)}
                      className="cursor-pointer flex flex-wrap items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className={`px-2.5 py-1 rounded-xl font-mono text-xs font-black ${
                          isActive
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {subNum}
                        </span>
                        <h2 className={`text-sm sm:text-base font-extrabold tracking-tight ${
                          isActive ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                        }`}>
                          {sub.title}
                        </h2>
                        {sub.pageRange && (
                          <span className="text-xs text-slate-500 font-normal">
                            (Ders Kitabı s. {sub.pageRange})
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {sub.pageRange ? (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                            Sayfa {sub.pageRange}
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                            {sub.badge || 'LGS Bölümü'}
                          </span>
                        )}
                        {isActive ? (
                          <span className="text-[11px] font-black text-emerald-800 flex items-center gap-1 bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-300">
                            ✓ Seçili Bölüm
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold text-slate-500 hover:text-emerald-700">
                            Seçmek İçin Tıkla ▾
                          </span>
                        )}
                      </div>
                    </div>

                    {/* SEÇİLEN BÖLÜM TIKLANINCA: Altında Etkinlik ve Test Butonları (RESİM 1) */}
                    {isActive && (() => {
                      const isSystemsOrGrade8 = currentGrade === 8 || currentUnit.id === 'g7-unit-3' || currentUnit.id === 'g6-unit-3' || (currentUnit.title && currentUnit.title.toLowerCase().includes('sistem'));
                      return (
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <div className="text-[11px] font-bold text-emerald-800 mb-2 flex items-center gap-1.5">
                          <span>Bölüm Etkinlikleri & Testleri:</span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-2">
                          {/* 1. Etkileşimli Kitap (Sayfa Sayfa - 5, 6, 7. sınıflar için, 8. sınıf ve Sistemler hariç) */}
                          {!isSystemsOrGrade8 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onChangeView('interactive-book');
                              }}
                              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                                activeView === 'interactive-book'
                                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                                  : 'bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200'
                              }`}
                            >
                              <Layers className="w-3.5 h-3.5" />
                              <span>1. Etkileşimli Kitap (Sayfa Sayfa)</span>
                            </button>
                          )}

                          {/* 2. Konu Özeti & Sözlük */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onChangeView('summary');
                            }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                              activeView === 'summary'
                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                                : 'bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200'
                            }`}
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>{isSystemsOrGrade8 ? '1.' : '2.'} Konu Özeti & Sözlük</span>
                          </button>

                          {/* 3. Doğru / Yanlış (Soru Havuzu) */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onChangeView('true-false');
                            }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                              activeView === 'true-false'
                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                                : 'bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{isSystemsOrGrade8 ? '2.' : '3.'} Doğru / Yanlış (Soru Havuzu)</span>
                          </button>

                          {/* 4. LGS Genel Bakış Muhakeme (Soru Havuzu) */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onChangeView('lgs');
                            }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                              activeView === 'lgs'
                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                                : 'bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200'
                            }`}
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                            <span>{isSystemsOrGrade8 ? '3.' : '4.'} LGS Genel Bakış Muhakeme (Soru Havuzu)</span>
                          </button>

                          {/* 5. Deney İstasyonu (Laboratuvar) */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onChangeView('simulation');
                            }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                              activeView === 'simulation'
                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                                : 'bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200'
                            }`}
                          >
                            <FlaskConical className="w-3.5 h-3.5 text-teal-600" />
                            <span>5. Deney İstasyonu (Laboratuvar)</span>
                          </button>

                          {/* 6. Ünite Sonu Sınavı (20 Soru) */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onChangeView('unit-end-20');
                            }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                              activeView === 'unit-end-20'
                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                                : 'bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200'
                            }`}
                          >
                            <Award className="w-3.5 h-3.5 text-amber-600" />
                            <span>6. Ünite Sonu Sınavı (20 Soru)</span>
                          </button>

                          {/* YENİ TALEP: Otomatik Soru Hazırlama & PDF Çıktı Alma Sistemi */}
                          {onOpenQuizPdf && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenQuizPdf();
                              }}
                              className="px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer bg-amber-500 hover:bg-amber-600 text-white shadow-sm hover:shadow-md"
                              title="Bu bölüm için otomatik yazdırılabilir sınav hazırla ve PDF çıktısı al"
                            >
                              <Printer className="w-3.5 h-3.5" />
                              <span>Otomatik Soru & PDF Çıktı</span>
                            </button>
                          )}
                        </div>
                      </div>
                      );
                    })()}
                  </div>
                );
              })}
            </div>
          )}

          {/* Bölümler Gizliyse Sadece Aktif Bölüm Butonları */}
          {!isSubTopicsOpen && (
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-lg font-mono text-xs font-black bg-emerald-600 text-white">
                  {currentSubNum}
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  {currentSubTopic.title}
                </span>
                {currentSubTopic.pageRange && (
                  <span className="text-xs text-slate-500">
                    (s. {currentSubTopic.pageRange})
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {!(currentGrade === 8 || currentUnit.id === 'g7-unit-3' || currentUnit.id === 'g6-unit-3' || (currentUnit.title && currentUnit.title.toLowerCase().includes('sistem'))) && (
                  <button
                    onClick={() => onChangeView('interactive-book')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeView === 'interactive-book'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Etkileşimli Kitap</span>
                  </button>
                )}
                <button
                  onClick={() => onChangeView('summary')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeView === 'summary'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Konu Özeti</span>
                </button>
                <button
                  onClick={() => onChangeView('true-false')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeView === 'true-false'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Doğru / Yanlış (Soru Havuzu)</span>
                </button>
                <button
                  onClick={() => onChangeView('lgs')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeView === 'lgs'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>LGS Genel Bakış Muhakeme</span>
                </button>
                <button
                  onClick={() => onChangeView('simulation')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeView === 'simulation'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <FlaskConical className="w-3.5 h-3.5 text-teal-600" />
                  <span>Deney</span>
                </button>
                <button
                  onClick={() => onChangeView('unit-end-20')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeView === 'unit-end-20'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Sınav (20)</span>
                </button>

                {onOpenQuizPdf && (
                  <button
                    onClick={onOpenQuizPdf}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-1 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>PDF Çıktı</span>
                  </button>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
};
