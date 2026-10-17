import React, { useState } from 'react';
import { allUnits } from './data/unitsIndex';
import { Unit, SubTopic } from './types/curriculum';
import { Header, AppView } from './components/Header';
import { InteractiveBookView } from './components/InteractiveBookView';
import { TopicSummaryView } from './components/TopicSummaryView';
import { TrueFalseQuiz } from './components/TrueFalseQuiz';
import { LgsQuestionBoard } from './components/LgsQuestionBoard';
import { UnitEnd20ExamView } from './components/UnitEnd20ExamView';
import { ExperimentLabView } from './components/ExperimentLabView';
import { SmartBoardDrawingOverlay } from './components/SmartBoardDrawingOverlay';
import { TimerWidget } from './components/TimerWidget';
import { StudentPickerModal } from './components/StudentPickerModal';
import { SimulationsModal } from './components/SimulationsModal';
import { GradeUnitSelectorModal } from './components/GradeUnitSelectorModal';
import { MaarifWelcomeLandingView } from './components/MaarifWelcomeLandingView';
import { AutomaticQuizPdfModal } from './components/AutomaticQuizPdfModal';
import { CurriculumSidebar } from './components/CurriculumSidebar';
import { QuickAccessEbaWidget } from './components/QuickAccessEbaWidget';
import { StudentProgressDashboard } from './components/StudentProgressDashboard';
import { CurriculumWeekNavigator } from './components/CurriculumWeekNavigator';
import { AnnualCurriculumModal } from './components/AnnualCurriculumModal';
import { getCurrentCalendarWeek, resolveWeeklyTopic } from './utils/annualScheduleUtils';

export const App: React.FC = () => {
  const currentCalendarWeek = getCurrentCalendarWeek();
  const [selectedAcademicWeek, setSelectedAcademicWeek] = useState<number>(currentCalendarWeek);
  const [isAnnualScheduleModalOpen, setIsAnnualScheduleModalOpen] = useState<boolean>(false);
  const [isLandingPage, setIsLandingPage] = useState<boolean>(true);
  const [currentGrade, setCurrentGrade] = useState<number>(5);

  // Initialize with current calendar week's topic
  const initialResolved = resolveWeeklyTopic(5, currentCalendarWeek, allUnits);
  const [currentUnit, setCurrentUnit] = useState<Unit>(initialResolved ? initialResolved.unit : allUnits[0]);
  const [currentSubTopic, setCurrentSubTopic] = useState<SubTopic>(initialResolved ? initialResolved.subTopic : allUnits[0].subTopics[0]);
  const [activeView, setActiveView] = useState<AppView>('interactive-book');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isProgressDashboardOpen, setIsProgressDashboardOpen] = useState<boolean>(false);

  // Smartboard Interactive Tool States
  const [isDrawingActive, setIsDrawingActive] = useState(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isStudentPickerOpen, setIsStudentPickerOpen] = useState(false);
  const [isSimulationsOpen, setIsSimulationsOpen] = useState(false);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const [isQuizPdfModalOpen, setIsQuizPdfModalOpen] = useState(false);
  const [activeSimId, setActiveSimId] = useState<string>('moon-phases');
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'huge'>('normal');

  // Global "Cevapları Aç" Toggle
  const [globalAnswersRevealed, setGlobalAnswersRevealed] = useState(false);

  const handleOpenSimulation = (simId?: string) => {
    if (simId) setActiveSimId(simId);
    setIsSimulationsOpen(true);
  };

  const handleSelectUnit = (unit: Unit) => {
    setCurrentUnit(unit);
    setCurrentSubTopic(unit.subTopics[0]);
    if (unit.grade) {
      setCurrentGrade(unit.grade);
      const isSystems = unit.grade === 8 || unit.id === 'g7-unit-3' || unit.id === 'g6-unit-3' || (unit.title && unit.title.toLowerCase().includes('sistem'));
      if (isSystems && activeView === 'interactive-book') {
        setActiveView('summary');
      }
    }
  };

  const handleOpenWeekTopic = (grade: number, weekNumber: number) => {
    setSelectedAcademicWeek(weekNumber);
    setCurrentGrade(grade);
    const resolved = resolveWeeklyTopic(grade, weekNumber, allUnits);
    if (resolved) {
      setCurrentUnit(resolved.unit);
      setCurrentSubTopic(resolved.subTopic);
      const isSystems = grade === 8 || resolved.unit.id === 'g7-unit-3' || resolved.unit.id === 'g6-unit-3' || (resolved.unit.title && resolved.unit.title.toLowerCase().includes('sistem'));
      if (isSystems && activeView === 'interactive-book') {
        setActiveView('summary');
      } else if (activeView === 'unit-end-20' && (!resolved.unit.unitEnd20Questions || resolved.unit.unitEnd20Questions.length === 0)) {
        setActiveView(isSystems ? 'summary' : 'interactive-book');
      }
    }
    setIsLandingPage(false);
  };

  const handleSelectGrade = (grade: number) => {
    // Automatically open the current calendar week's topic for this grade level!
    handleOpenWeekTopic(grade, selectedAcademicWeek);
  };

  const getTextSizeClass = () => {
    switch (textSize) {
      case 'large':
        return 'text-lg';
      case 'huge':
        return 'text-xl';
      default:
        return 'text-base';
    }
  };

  return (
    <div className={`min-h-screen bg-[#F8FAF9] text-slate-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950 ${getTextSizeClass()}`}>
      
      {/* DURUM 1: ANA GİRİŞ SAYFASI (YÜZDE 100 MAARİF UYUMLU FEN BİLİMLERİ SİTESİNE HOŞ GELDİNİZ. SINIF SEVİYESİNİ SEÇİNİZ) */}
      {isLandingPage ? (
        <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-6 sm:py-8">
          <MaarifWelcomeLandingView
            currentGrade={currentGrade}
            onSelectGrade={handleSelectGrade}
            onOpenProgressDashboard={() => setIsProgressDashboardOpen(true)}
            onOpenWeekTopic={handleOpenWeekTopic}
            onOpenAnnualScheduleModal={() => setIsAnnualScheduleModalOpen(true)}
          />
        </main>
      ) : (
        /* DURUM 2: DERS VE AKILLI TAHTA EKRANI (Doğal sayfa kaydırması, sabit takılı kalmayan ekran) */
        <>
          <Header
            units={allUnits.filter(u => (u.grade || 5) === currentGrade)}
            currentUnit={currentUnit}
            currentGrade={currentGrade}
            currentSubTopic={currentSubTopic}
            activeView={activeView}
            onSelectUnit={handleSelectUnit}
            onSelectSubTopic={sub => setCurrentSubTopic(sub)}
            onChangeView={view => setActiveView(view)}
            onSelectGrade={handleSelectGrade}
            onGoToLanding={() => setIsLandingPage(true)}
            isDrawingActive={isDrawingActive}
            onToggleDrawing={() => setIsDrawingActive(!isDrawingActive)}
            onToggleTimer={() => setIsTimerOpen(!isTimerOpen)}
            onOpenGradePicker={() => setIsGradeModalOpen(true)}
            globalAnswersRevealed={globalAnswersRevealed}
            onToggleGlobalAnswers={() => setGlobalAnswersRevealed(!globalAnswersRevealed)}
            textSize={textSize}
            onChangeTextSize={setTextSize}
            onOpenQuizPdf={() => setIsQuizPdfModalOpen(true)}
            onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
            isSidebarOpen={isSidebarOpen}
            onOpenProgressDashboard={() => setIsProgressDashboardOpen(true)}
            isProgressDashboardOpen={isProgressDashboardOpen}
          />

          {/* HAFTALIK MÜFREDAT TAKVİMİ NAVİGASYON ŞERİDİ (5, 6, 7, 8. Sınıflar, Önceki/Sonraki Hafta Tuşları) */}
          <CurriculumWeekNavigator
            currentGrade={currentGrade}
            selectedWeek={selectedAcademicWeek}
            onSelectWeek={week => setSelectedAcademicWeek(week)}
            onSelectGrade={handleSelectGrade}
            onOpenTopic={handleOpenWeekTopic}
            onOpenAnnualScheduleModal={() => setIsAnnualScheduleModalOpen(true)}
            units={allUnits}
          />

          {/* Temel Dinî Bilgiler Layout: Yanda Konu ve Alt Konular (Sadece seçilen sınıfa ait) + İçerik Alanı */}
          <div className="flex-1 flex max-w-7xl w-full mx-auto items-stretch">
            {/* Yan Menü (CurriculumSidebar) */}
            <CurriculumSidebar
              units={allUnits}
              currentGrade={currentGrade}
              currentUnit={currentUnit}
              currentSubTopic={currentSubTopic}
              onSelectUnit={handleSelectUnit}
              onSelectSubTopic={(sub, unit) => {
                setCurrentUnit(unit);
                setCurrentSubTopic(sub);
              }}
              onSelectGrade={handleSelectGrade}
              isOpen={isSidebarOpen}
              onToggleOpen={() => setIsSidebarOpen(prev => !prev)}
              onOpenProgressDashboard={() => setIsProgressDashboardOpen(true)}
            />

            {/* Main Content Area - Tamamen aşağı kaydırılabilir akıcı sayfa */}
            <main className="flex-1 min-w-0 px-3 sm:px-6 py-6 sm:py-8">
              {/* Tab 1: Etkileşimli Kitap (Sayfa Sayfa Kitap Akışı) */}
              {activeView === 'interactive-book' && (
                <InteractiveBookView
                  unit={currentUnit}
                  subTopic={currentSubTopic}
                  globalAnswersRevealed={globalAnswersRevealed}
                  onGoToSummary={() => setActiveView('summary')}
                  onGoToLgs={() => setActiveView('lgs')}
                  onOpenQuizPdf={() => setIsQuizPdfModalOpen(true)}
                />
              )}

              {/* Tab 2: Konu Özeti & Sözlük (Maarif) */}
              {activeView === 'summary' && (
                <TopicSummaryView
                  unit={currentUnit}
                  subTopic={currentSubTopic}
                  globalAnswersRevealed={globalAnswersRevealed}
                  onOpenSimulation={handleOpenSimulation}
                  onStartBookActivities={() => setActiveView('interactive-book')}
                  onStartTFQuiz={() => setActiveView('true-false')}
                  onStartLGSQuiz={() => setActiveView('lgs')}
                  onOpenQuizPdf={() => setIsQuizPdfModalOpen(true)}
                />
              )}

              {/* Tab 3: Doğru / Yanlış (10 Soru) */}
              {activeView === 'true-false' && (
                <TrueFalseQuiz
                  unit={currentUnit}
                  subTopic={currentSubTopic}
                  onBackToSummary={() => setActiveView('summary')}
                  onGoToLgs={() => setActiveView('lgs')}
                  onOpenQuizPdf={() => setIsQuizPdfModalOpen(true)}
                />
              )}

              {/* Tab 4: LGS Mantıksal Muhakeme (Soru Havuzu) */}
              {activeView === 'lgs' && (
                <LgsQuestionBoard
                  unit={currentUnit}
                  subTopic={currentSubTopic}
                  onBackToTF={() => setActiveView('true-false')}
                  onBackToSummary={() => setActiveView('summary')}
                  onOpenQuizPdf={() => setIsQuizPdfModalOpen(true)}
                />
              )}

              {/* Tab 5: Deney İstasyonu (Laboratuvar - Geniş Ekran Deney ve Etkinlikler) */}
              {activeView === 'simulation' && (
                <ExperimentLabView
                  unit={currentUnit}
                  currentSubTopic={currentSubTopic}
                  onSelectSubTopic={sub => setCurrentSubTopic(sub)}
                />
              )}

              {/* Tab 6: Ünite Sonu Sınavı (20 Soru) */}
              {activeView === 'unit-end-20' && (
                <UnitEnd20ExamView
                  unit={currentUnit}
                  globalAnswersRevealed={globalAnswersRevealed}
                  onGoToSummary={() => setActiveView('summary')}
                  onOpenQuizPdf={() => setIsQuizPdfModalOpen(true)}
                />
              )}
            </main>
          </div>
        </>
      )}

      {/* Otomatik Soru Hazırlama ve PDF Çıktı Alma Sistemi Modal */}
      <AutomaticQuizPdfModal
        isOpen={isQuizPdfModalOpen}
        onClose={() => setIsQuizPdfModalOpen(false)}
        unit={currentUnit}
        subTopic={currentSubTopic}
      />

      {/* Grade and Unit Selection Modal (Tıklandığında Açılan Sınıf/Ünite Seçici) */}
      <GradeUnitSelectorModal
        isOpen={isGradeModalOpen}
        currentUnit={currentUnit}
        currentGrade={currentGrade}
        allUnits={allUnits}
        onSelectUnit={handleSelectUnit}
        onSelectGrade={g => handleSelectGrade(g)}
        onClose={() => setIsGradeModalOpen(false)}
      />

      {/* Floating Smartboard Interactive Drawing Overlay */}
      <SmartBoardDrawingOverlay
        isActive={isDrawingActive}
        onClose={() => setIsDrawingActive(false)}
      />

      {/* Floating Timer Widget */}
      <TimerWidget
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
      />

      {/* Random Student Picker Modal (Çark) */}
      <StudentPickerModal
        isOpen={isStudentPickerOpen}
        onClose={() => setIsStudentPickerOpen(false)}
      />

      {/* Interactive Experiments & Simulations Modal */}
      <SimulationsModal
        isOpen={isSimulationsOpen}
        activeSimId={activeSimId}
        onClose={() => setIsSimulationsOpen(false)}
      />

      {/* Hızlı EBA Erişimi (Quick Access EBA) Floating Buton ve Menü */}
      <QuickAccessEbaWidget
        currentGrade={currentGrade}
        currentUnit={currentUnit}
        currentSubTopic={currentSubTopic}
      />

      {/* Öğrenci & Sınıf İlerleme Takip Paneli (Student Progress Dashboard) Modal */}
      {isProgressDashboardOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs overflow-y-auto p-3 sm:p-6 flex items-start justify-center">
          <div className="max-w-7xl w-full my-4">
            <StudentProgressDashboard
              units={allUnits}
              currentGrade={currentGrade}
              onSelectUnit={unit => {
                handleSelectUnit(unit);
                setIsProgressDashboardOpen(false);
                setIsLandingPage(false);
              }}
              onSelectSubTopic={(sub, unit) => {
                setCurrentUnit(unit);
                setCurrentSubTopic(sub);
                setIsProgressDashboardOpen(false);
                setIsLandingPage(false);
              }}
              onClose={() => setIsProgressDashboardOpen(false)}
              onOpenQuizPdfModal={() => {
                setIsProgressDashboardOpen(false);
                setIsQuizPdfModalOpen(true);
              }}
            />
          </div>
        </div>
      )}

      {/* 2026-2027 MEB Maarif Modeli Yıllık Müfredat Çerçeve Planı (37 Hafta) Modal */}
      <AnnualCurriculumModal
        isOpen={isAnnualScheduleModalOpen}
        onClose={() => setIsAnnualScheduleModalOpen(false)}
        currentGrade={currentGrade}
        onSelectGrade={setCurrentGrade}
        onSelectAndOpenWeek={handleOpenWeekTopic}
        selectedWeek={selectedAcademicWeek}
        units={allUnits}
      />

      {/* Akıllı Tahta Alt Bilgi Alanı - Temel Dinî Bilgiler Teması */}
      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500 font-medium print:hidden">
        Türkiye Yüzyılı Maarif Modeli • %100 Maarif Uyumlu {currentGrade}. Sınıf Fen Bilimleri Akıllı Tahta Uygulaması
      </footer>
    </div>
  );
};

export default App;
