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

export const App: React.FC = () => {
  const [isLandingPage, setIsLandingPage] = useState<boolean>(true);
  const [currentGrade, setCurrentGrade] = useState<number>(5);
  const [currentUnit, setCurrentUnit] = useState<Unit>(allUnits[0]);
  const [currentSubTopic, setCurrentSubTopic] = useState<SubTopic>(allUnits[0].subTopics[0]);
  const [activeView, setActiveView] = useState<AppView>('interactive-book');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

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

  const handleSelectGrade = (grade: number) => {
    setCurrentGrade(grade);
    // Seçilen sınıfa ait üniteleri bul ve ilk üniteyi aktif et
    const firstUnitForGrade = allUnits.find(u => (u.grade || 5) === grade);
    if (firstUnitForGrade) {
      setCurrentUnit(firstUnitForGrade);
      setCurrentSubTopic(firstUnitForGrade.subTopics[0]);
      const isSystems = grade === 8 || firstUnitForGrade.id === 'g7-unit-3' || firstUnitForGrade.id === 'g6-unit-3' || (firstUnitForGrade.title && firstUnitForGrade.title.toLowerCase().includes('sistem'));
      if (isSystems && activeView === 'interactive-book') {
        setActiveView('summary');
      } else if (activeView === 'unit-end-20' && (!firstUnitForGrade.unitEnd20Questions || firstUnitForGrade.unitEnd20Questions.length === 0)) {
        setActiveView(isSystems ? 'summary' : 'interactive-book');
      }
    }
    // Sınıf seçilince ana girişten ders ekranına geçiş
    setIsLandingPage(false);
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

      {/* Akıllı Tahta Alt Bilgi Alanı - Temel Dinî Bilgiler Teması */}
      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500 font-medium print:hidden">
        Türkiye Yüzyılı Maarif Modeli • %100 Maarif Uyumlu {currentGrade}. Sınıf Fen Bilimleri Akıllı Tahta Uygulaması
      </footer>
    </div>
  );
};

export default App;
