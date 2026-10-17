import React, { useState, useMemo, useEffect } from 'react';
import { Unit, SubTopic } from '../types/curriculum';
import {
  StudentProfile,
  getStoredStudents,
  saveStudents,
  calculateStudentMetrics,
  calculateClassSummary,
  generateDefaultStudents
} from '../utils/studentProgressTracker';
import {
  Users,
  Award,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Search,
  Filter,
  ArrowRight,
  BookOpen,
  Sparkles,
  Printer,
  RotateCcw,
  Plus,
  UserCheck,
  Star,
  GraduationCap,
  Clock,
  ChevronRight,
  X,
  FileText,
  BarChart3,
  Layers,
  FlaskConical,
  Check,
  Edit3
} from 'lucide-react';

interface Props {
  units: Unit[];
  currentGrade: number;
  onSelectUnit?: (unit: Unit) => void;
  onSelectSubTopic?: (subTopic: SubTopic, unit: Unit) => void;
  onClose?: () => void;
  onOpenQuizPdfModal?: () => void;
}

export const StudentProgressDashboard: React.FC<Props> = ({
  units,
  currentGrade,
  onSelectUnit,
  onSelectSubTopic,
  onClose,
  onOpenQuizPdfModal
}) => {
  const [students, setStudents] = useState<StudentProfile[]>(() => getStoredStudents());
  const [selectedClass, setSelectedClass] = useState<string>('8-A');
  const [selectedGrade, setSelectedGrade] = useState<number>(currentGrade || 8);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'high' | 'medium' | 'needs_support' | 'starred'>('all');
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);
  const [activeTab, setActiveTab] = useState<'class_summary' | 'unit_matrix' | 'roster'>('class_summary');
  const [teacherNoteInput, setTeacherNoteInput] = useState<string>('');
  const [isAddingStudent, setIsAddingStudent] = useState<boolean>(false);
  const [newStudentName, setNewStudentName] = useState<string>('');
  const [newStudentNumber, setNewStudentNumber] = useState<string>('');
  const [newStudentGender, setNewStudentGender] = useState<'M' | 'F'>('M');
  const [actionNotification, setActionNotification] = useState<string | null>(null);

  // Sync state whenever storage changes or refreshed
  const reloadData = () => {
    setStudents(getStoredStudents());
  };

  useEffect(() => {
    const handleStorage = () => reloadData();
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const showNotification = (msg: string) => {
    setActionNotification(msg);
    setTimeout(() => setActionNotification(null), 3500);
  };

  // Filter students by class and grade
  const classStudents = useMemo(() => {
    return students.filter(s => s.classGroup === selectedClass && s.grade === selectedGrade);
  }, [students, selectedClass, selectedGrade]);

  // Aggregated summary metrics
  const classSummary = useMemo(() => {
    return calculateClassSummary(students, selectedClass, selectedGrade);
  }, [students, selectedClass, selectedGrade]);

  // Filtered roster students for the table
  const filteredRoster = useMemo(() => {
    return classStudents.filter(s => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = s.name.toLowerCase().includes(q);
        const matchesNum = s.number.includes(q);
        if (!matchesName && !matchesNum) return false;
      }
      // Status filter
      if (statusFilter === 'starred' && !s.isStarred) return false;
      if (statusFilter !== 'all' && statusFilter !== 'starred') {
        const m = calculateStudentMetrics(s, selectedGrade);
        if (m.status !== statusFilter) return false;
      }
      return true;
    });
  }, [classStudents, searchQuery, statusFilter, selectedGrade]);

  // Grade units
  const gradeUnits = useMemo(() => {
    return units.filter(u => (u.grade || 5) === selectedGrade);
  }, [units, selectedGrade]);

  // Mark all students in current class as completed
  const handleMarkClassCompleted = () => {
    const allSubtopicIds = gradeUnits.flatMap(u => u.subTopics.map(s => s.id));
    const now = new Date().toISOString().split('T')[0];

    const updated = students.map(s => {
      if (s.classGroup === selectedClass && s.grade === selectedGrade) {
        const tfRes: any = { ...s.trueFalseResults };
        const lgsRes: any = { ...s.lgsResults };
        const endRes: any = { ...s.unitEndExamResults };

        allSubtopicIds.forEach(id => {
          tfRes[id] = { total: 10, correct: 10, wrong: 0, unanswered: 0, scorePercent: 100, completedAt: now };
          lgsRes[id] = { total: 15, correct: 14, wrong: 1, unanswered: 0, scorePercent: 93, completedAt: now };
        });

        gradeUnits.forEach(u => {
          endRes[u.id] = { total: 20, correct: 19, wrong: 1, unanswered: 0, scorePercent: 95, completedAt: now };
        });

        return {
          ...s,
          completedSubtopics: Array.from(new Set([...s.completedSubtopics, ...allSubtopicIds])),
          trueFalseResults: tfRes,
          lgsResults: lgsRes,
          unitEndExamResults: endRes,
          totalTimeMinutes: s.totalTimeMinutes + 45,
          lastActiveDate: now
        };
      }
      return s;
    });

    setStudents(updated);
    saveStudents(updated);
    showNotification(`${selectedClass} sınıfındaki tüm öğrencilerin ünite ve testleri başarıyla tamamlandı olarak işaretlendi.`);
  };

  // Reset to benchmark default students
  const handleResetToDefaults = () => {
    const defaults = generateDefaultStudents();
    setStudents(defaults);
    saveStudents(defaults);
    showNotification('Sınıf ilerleme ve başarı verileri varsayılan örnek verilere sıfırlandı.');
  };

  // Toggle star status of student
  const handleToggleStar = (studentId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = students.map(s => {
      if (s.id === studentId) {
        return { ...s, isStarred: !s.isStarred };
      }
      return s;
    });
    setStudents(updated);
    saveStudents(updated);
  };

  // Save teacher note for student
  const handleSaveTeacherNote = () => {
    if (!selectedStudent) return;
    const updated = students.map(s => {
      if (s.id === selectedStudent.id) {
        return { ...s, teacherNotes: teacherNoteInput.trim() || undefined };
      }
      return s;
    });
    setStudents(updated);
    saveStudents(updated);
    setSelectedStudent(prev => prev ? { ...prev, teacherNotes: teacherNoteInput.trim() || undefined } : null);
    showNotification(`${selectedStudent.name} için öğretmen değerlendirme notu kaydedildi.`);
  };

  // Add new student
  const handleAddNewStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim() || !newStudentNumber.trim()) return;

    const newStudent: StudentProfile = {
      id: `std-custom-${Date.now()}`,
      number: newStudentNumber.trim(),
      name: newStudentName.trim(),
      gender: newStudentGender,
      classGroup: selectedClass,
      grade: selectedGrade,
      lastActiveDate: new Date().toISOString().split('T')[0],
      totalTimeMinutes: 0,
      completedSubtopics: [],
      trueFalseResults: {},
      lgsResults: {},
      unitEndExamResults: {},
      completedSimulations: []
    };

    const updated = [...students, newStudent];
    setStudents(updated);
    saveStudents(updated);
    setIsAddingStudent(false);
    setNewStudentName('');
    setNewStudentNumber('');
    showNotification(`${newStudent.name} başarıyla ${selectedClass} sınıfına eklendi.`);
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      
      {/* Top Banner & Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 shrink-0">
              <BarChart3 className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Öğretmen Yönetim Ekranı
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                  {selectedGrade}. Sınıf • LGS Mantık Muhakeme & EBA Entegre
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Öğrenci & Sınıf İlerleme Takip Paneli
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Etkileşimli ünite tamamlama oranları, D/Y test başarıları, ÖDM LGS soru havuzu netleri ve 20 soruluk ünite sınavı karne takibi.
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs flex items-center gap-2 transition-all shadow-xs cursor-pointer"
              title="Sınıf Raporunu Yazdır / PDF Al"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Raporu Yazdır</span>
            </button>

            <button
              onClick={handleMarkClassCompleted}
              className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
              title="Tüm sınıf öğrencilerini tamamlandı olarak işaretle"
            >
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Sınıfa Tamamlandı Ver</span>
            </button>

            <button
              onClick={() => setIsAddingStudent(true)}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Yeni Öğrenci Ekle</span>
            </button>

            <button
              onClick={handleResetToDefaults}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-colors cursor-pointer"
              title="Örnek Verileri Sıfırla"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {onClose && (
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-500 border border-slate-200 transition-colors cursor-pointer"
                title="Paneli Kapat ve Derse Dön"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Action Notification Toast */}
        {actionNotification && (
          <div className="mt-4 px-4 py-2.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{actionNotification}</span>
          </div>
        )}

        {/* Class and Grade Selectors */}
        <div className="pt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Class Selectors */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
              <Users className="w-3.5 h-3.5" /> Sınıf:
            </span>
            {['8-A', '8-B', '7-A', '6-A', '5-A'].map(cls => {
              const isSelected = selectedClass === cls;
              const count = students.filter(s => s.classGroup === cls).length;
              return (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span>{cls}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Navigation Views within Dashboard */}
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-bold w-full md:w-auto">
            <button
              onClick={() => setActiveTab('class_summary')}
              className={`flex-1 md:flex-none px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'class_summary'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Genel Bakış Metrikleri
            </button>
            <button
              onClick={() => setActiveTab('unit_matrix')}
              className={`flex-1 md:flex-none px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'unit_matrix'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Ünite İlerleme Matrisi
            </button>
            <button
              onClick={() => setActiveTab('roster')}
              className={`flex-1 md:flex-none px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'roster'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3. Öğrenci Not Çizelgesi ({classStudents.length})
            </button>
          </div>
        </div>
      </div>

      {/* VIEW TAB 1: CLASS SUMMARY METRICS (AT A GLANCE) */}
      {activeTab === 'class_summary' && (
        <div className="space-y-6">
          {/* Top 4 KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* 1. Overall Curriculum Completion */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">Müfredat Tamamlama</span>
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">
                    %{classSummary.avgCompletionRate}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Sınıf Ortalaması
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-500"
                    style={{ width: `${classSummary.avgCompletionRate}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-500 font-medium pt-1">
                  {selectedClass} sınıfı için {gradeUnits.length} ünitedeki etkileşimli modüllerin tamamlanma oranı.
                </p>
              </div>
            </div>

            {/* 2. LGS Muhakeme Net Score */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">LGS Muhakeme Başarısı</span>
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">
                    %{classSummary.avgLgsScore}
                  </span>
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                    ÖDM & MEB Havuzu
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500"
                    style={{ width: `${classSummary.avgLgsScore}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-500 font-medium pt-1">
                  Bursa, Kahramanmaraş, Sivas ve Yalova ÖDM beceri temelli soru testlerindeki başarı oranı.
                </p>
              </div>
            </div>

            {/* 3. Unit End 20 Exam Average */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">Ünite Sonu Sınav Ort.</span>
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">
                    {classSummary.avgUnitEndScore}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    / 100 Puan
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${classSummary.avgUnitEndScore}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-500 font-medium pt-1">
                  Her ünitenin sonunda yer alan 20 soruluk kapsamlı ünite sonu değerlendirme ortalaması.
                </p>
              </div>
            </div>

            {/* 4. Student Success Distribution */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">Öğrenci Dağılımı</span>
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-emerald-700 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    İleri (%85+): {classSummary.distribution.high}
                  </span>
                  <span className="text-blue-700 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    Orta: {classSummary.distribution.medium}
                  </span>
                  <span className="text-rose-700 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    Destek: {classSummary.distribution.low}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-emerald-500"
                    style={{ width: `${classStudents.length ? (classSummary.distribution.high / classStudents.length) * 100 : 0}%` }}
                  />
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${classStudents.length ? (classSummary.distribution.medium / classStudents.length) * 100 : 0}%` }}
                  />
                  <div
                    className="h-full bg-rose-500"
                    style={{ width: `${classStudents.length ? (classSummary.distribution.low / classStudents.length) * 100 : 0}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-500 font-medium pt-1">
                  Toplam {classStudents.length} öğrencinin karne notu başarı seviyelerine göre kümelenmesi.
                </p>
              </div>
            </div>
          </div>

          {/* Teacher Action Alert: Weak Concepts Banner */}
          <div className="bg-amber-50/80 border border-amber-300 rounded-3xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-amber-950">
                    Öğretmen Aksiyon Çağrısı: En Çok Yanlış Yapılan ve Destek Gereken Kazanımlar
                  </h3>
                  <p className="text-xs text-amber-800">
                    Sınıf genelinde ÖDM beceri temelli ve ünite sınavlarında en düşük doğru oranına sahip kazanımlar:
                  </p>
                </div>
              </div>

              {onOpenQuizPdfModal && (
                <button
                  onClick={onOpenQuizPdfModal}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Bu Konular İçin Telafi Testi Yazdır</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {classSummary.challengingConcepts.map((item, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-2xl border border-amber-200 shadow-xs flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block">
                      {item.unitName}
                    </span>
                    <h4 className="text-xs font-bold text-slate-800 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Hata Oranı:</span>
                    <span className="font-mono font-black text-rose-600">%{item.errorRate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Roster Highlights (Top 3 and Students needing attention) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Top Students */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <h3 className="text-sm font-black text-slate-900">
                    Sınıf Yıldızları (En Yüksek İlerleme & Başarı)
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setStatusFilter('high');
                    setActiveTab('roster');
                  }}
                  className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                >
                  Tümünü Gör <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2.5">
                {classStudents
                  .map(s => ({ s, m: calculateStudentMetrics(s, selectedGrade) }))
                  .sort((a, b) => b.m.weightedScore - a.m.weightedScore)
                  .slice(0, 4)
                  .map(({ s, m }) => (
                    <div
                      key={s.id}
                      onClick={() => {
                        setSelectedStudent(s);
                        setTeacherNoteInput(s.teacherNotes || '');
                      }}
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-100 hover:border-emerald-200 transition-all flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-mono font-black text-xs flex items-center justify-center">
                          {s.number}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{s.name}</div>
                          <div className="text-[10px] text-slate-500">
                            {s.completedSubtopics.length} Alt Konu Tamamlandı
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono font-black text-emerald-700">
                          {m.weightedScore} Puan
                        </div>
                        <div className="text-[10px] font-bold text-slate-500">
                          LGS: %{m.avgLgsScore}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Students Needing Support */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-500" />
                  <h3 className="text-sm font-black text-slate-900">
                    Bireysel Destek & Etüt Bekleyen Öğrenciler
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setStatusFilter('needs_support');
                    setActiveTab('roster');
                  }}
                  className="text-xs font-bold text-rose-700 hover:underline flex items-center gap-1"
                >
                  Tümünü Gör <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2.5">
                {classStudents
                  .map(s => ({ s, m: calculateStudentMetrics(s, selectedGrade) }))
                  .filter(({ m }) => m.status === 'needs_support')
                  .slice(0, 4)
                  .map(({ s, m }) => (
                    <div
                      key={s.id}
                      onClick={() => {
                        setSelectedStudent(s);
                        setTeacherNoteInput(s.teacherNotes || '');
                      }}
                      className="p-3 rounded-2xl bg-rose-50/50 hover:bg-rose-50 border border-rose-100 hover:border-rose-300 transition-all flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-rose-100 text-rose-800 font-mono font-black text-xs flex items-center justify-center">
                          {s.number}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{s.name}</div>
                          <div className="text-[10px] text-rose-600 font-medium">
                            {s.teacherNotes ? s.teacherNotes.slice(0, 32) + '...' : 'Etüt gerektiriyor'}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono font-black text-rose-700">
                          {m.weightedScore} Puan
                        </div>
                        <div className="text-[10px] font-bold text-slate-500">
                          Tamamlama: %{m.completionRate}
                        </div>
                      </div>
                    </div>
                  ))}

                {classStudents.filter(s => calculateStudentMetrics(s, selectedGrade).status === 'needs_support').length === 0 && (
                  <div className="p-6 text-center text-xs font-bold text-emerald-700 bg-emerald-50 rounded-2xl border border-emerald-200">
                    🎉 Tebrikler! {selectedClass} sınıfında kritik destek seviyesinde öğrenci bulunmuyor.
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* VIEW TAB 2: INTERACTIVE UNITS & SUBTOPICS COMPLETION MATRIX */}
      {activeTab === 'unit_matrix' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-black text-slate-900">
                {selectedGrade}. Sınıf Etkileşimli Ünite ve Kazanım Matrisi
              </h2>
              <p className="text-xs text-slate-500">
                Her ünitenin alt konularına göre sınıfın tamamlama oranı, doğru-yanlış performansı ve LGS soru havuzu çözüm durumu.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
              Toplam {gradeUnits.length} Ünite
            </span>
          </div>

          <div className="space-y-6">
            {gradeUnits.map(unit => {
              // Calculate completion metrics for this specific unit across the class
              const subIds = unit.subTopics.map(s => s.id);
              let totalCompletions = 0;
              let totalPossible = classStudents.length * subIds.length;

              classStudents.forEach(s => {
                subIds.forEach(id => {
                  if (s.completedSubtopics.includes(id)) {
                    totalCompletions++;
                  }
                });
              });

              const unitCompletionPercent = totalPossible > 0 ? Math.round((totalCompletions / totalPossible) * 100) : 0;

              return (
                <div key={unit.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  {/* Unit Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-mono font-black text-sm flex items-center justify-center shadow-xs">
                        {unit.unitNumber}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {unit.unitNumber}. Ünite: {unit.title}
                        </h3>
                        <div className="text-xs text-slate-500">
                          {unit.subTopics.length} Alt Bölüm • {unit.unitEnd20Questions?.length || 20} Soruluk Ünite Sınavı
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs font-mono font-black text-emerald-800">
                          %{unitCompletionPercent} Tamamlandı
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium">
                          Sınıf Katılımı
                        </div>
                      </div>

                      {onSelectUnit && (
                        <button
                          onClick={() => onSelectUnit(unit)}
                          className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border border-slate-300 font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                        >
                          <span>Üniteye Git</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                      style={{ width: `${unitCompletionPercent}%` }}
                    />
                  </div>

                  {/* Subtopics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {unit.subTopics.map((sub, sIdx) => {
                      const completedCount = classStudents.filter(s => s.completedSubtopics.includes(sub.id)).length;
                      const subPercent = classStudents.length > 0 ? Math.round((completedCount / classStudents.length) * 100) : 0;
                      const lgsCount = sub.lgsQuestions?.length || 0;

                      return (
                        <div
                          key={sub.id}
                          className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between gap-2.5"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-bold text-slate-400 font-mono">
                                Bölüm {sIdx + 1}
                              </span>
                              <h4 className="text-xs font-bold text-slate-900 leading-snug">
                                {sub.title}
                              </h4>
                            </div>
                            <span className="text-[11px] font-mono font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 shrink-0">
                              %{subPercent}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-2">
                            <span className="flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-amber-500" />
                              {lgsCount} LGS Muhakeme Sorusu
                            </span>
                            {onSelectSubTopic && (
                              <button
                                onClick={() => onSelectSubTopic(sub, unit)}
                                className="font-bold text-emerald-700 hover:underline flex items-center gap-0.5"
                              >
                                İncele <ChevronRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW TAB 3: STUDENT ROSTER & GRADEBOOK */}
      {activeTab === 'roster' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          
          {/* Roster Controls: Search & Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Öğrenci adı veya numarası ile ara..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Durum:
              </span>
              {[
                { id: 'all', label: 'Tümü' },
                { id: 'high', label: '🌟 İleri (%85+)' },
                { id: 'medium', label: '🔷 Orta Düzey' },
                { id: 'needs_support', label: '⚠️ Destek Gereken' },
                { id: 'starred', label: '⭐ Yıldızlılar' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setStatusFilter(f.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    statusFilter === f.id
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 w-12 text-center">⭐</th>
                  <th className="py-3.5 px-4 w-20">No</th>
                  <th className="py-3.5 px-4">Öğrenci Adı Soyadı</th>
                  <th className="py-3.5 px-4 text-center">Müfredat Tamamlama</th>
                  <th className="py-3.5 px-4 text-center">D/Y Başarısı</th>
                  <th className="py-3.5 px-4 text-center">LGS Muhakeme</th>
                  <th className="py-3.5 px-4 text-center">20 Soru Sınavı</th>
                  <th className="py-3.5 px-4 text-center">Ağırlıklı Not</th>
                  <th className="py-3.5 px-4 text-center">Durum</th>
                  <th className="py-3.5 px-4 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredRoster.map(s => {
                  const m = calculateStudentMetrics(s, selectedGrade);
                  return (
                    <tr
                      key={s.id}
                      onClick={() => {
                        setSelectedStudent(s);
                        setTeacherNoteInput(s.teacherNotes || '');
                      }}
                      className="hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                      {/* Star Button */}
                      <td className="py-3.5 px-4 text-center" onClick={e => handleToggleStar(s.id, e)}>
                        <Star
                          className={`w-4 h-4 mx-auto cursor-pointer transition-colors ${
                            s.isStarred ? 'text-amber-500 fill-amber-500' : 'text-slate-300 hover:text-amber-400'
                          }`}
                        />
                      </td>

                      {/* Number */}
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-600">
                        {s.number}
                      </td>

                      {/* Name & Avatar */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2.5">
                          <span className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 ${
                            s.gender === 'F' ? 'bg-pink-100 text-pink-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {s.name.slice(0, 2).toUpperCase()}
                          </span>
                          <div>
                            <div className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                              {s.name}
                            </div>
                            <div className="text-[11px] text-slate-400">
                              Son Giriş: {s.lastActiveDate} • {s.totalTimeMinutes} dk çalışma
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Completion bar */}
                      <td className="py-3.5 px-4 text-center">
                        <div className="inline-flex flex-col items-center gap-1 w-24">
                          <span className="font-mono font-black text-xs text-slate-800">
                            %{m.completionRate}
                          </span>
                          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-600 rounded-full"
                              style={{ width: `${m.completionRate}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* True/False Score */}
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-700">
                        {m.avgTfScore > 0 ? `%${m.avgTfScore}` : '—'}
                      </td>

                      {/* LGS Reasoning Score */}
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-indigo-700">
                        {m.avgLgsScore > 0 ? `%${m.avgLgsScore}` : '—'}
                      </td>

                      {/* Unit End Exam */}
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-amber-700">
                        {m.avgEndScore > 0 ? `${m.avgEndScore}p` : '—'}
                      </td>

                      {/* Weighted Grade */}
                      <td className="py-3.5 px-4 text-center">
                        <span className="font-mono font-black text-sm text-slate-900 bg-slate-100 px-2.5 py-1 rounded-xl">
                          {m.weightedScore}
                        </span>
                      </td>

                      {/* Status Badge */}
                      <td className="py-3.5 px-4 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          m.status === 'high'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : m.status === 'medium'
                            ? 'bg-blue-100 text-blue-800 border border-blue-200'
                            : 'bg-rose-100 text-rose-800 border border-rose-200'
                        }`}>
                          {m.status === 'high' ? 'İleri Seviye' : m.status === 'medium' ? 'Orta Düzey' : 'Destek Gerekli'}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => {
                            setSelectedStudent(s);
                            setTeacherNoteInput(s.teacherNotes || '');
                          }}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                        >
                          Karnesi ▾
                        </button>
                      </td>
                    </tr>
                  );
                })}

                {filteredRoster.length === 0 && (
                  <tr>
                    <td colSpan={10} className="py-8 text-center text-slate-400 font-bold">
                      Arama kriterlerine uygun öğrenci bulunamadı.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* INDIVIDUAL STUDENT PROGRESS MODAL (ÖĞRENCİ GELİŞİM VE KARNE DETAYI) */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <span className={`w-12 h-12 rounded-2xl font-black text-sm flex items-center justify-center ${
                  selectedStudent.gender === 'F' ? 'bg-pink-100 text-pink-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {selectedStudent.name.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-900">
                      {selectedStudent.name}
                    </h3>
                    <span className="font-mono font-bold text-xs px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600">
                      No: {selectedStudent.number}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-800">
                      {selectedStudent.classGroup}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Bireysel Başarı Karnesi & Etkileşimli Ünite Takip Raporu
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedStudent(null)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Student KPI Row */}
            {(() => {
              const m = calculateStudentMetrics(selectedStudent, selectedGrade);
              return (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <div className="text-[11px] font-bold text-emerald-800">Müfredat Tamamlama</div>
                    <div className="text-2xl font-black text-emerald-950 font-mono mt-0.5">
                      %{m.completionRate}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200">
                    <div className="text-[11px] font-bold text-indigo-800">LGS Muhakeme Skoru</div>
                    <div className="text-2xl font-black text-indigo-950 font-mono mt-0.5">
                      %{m.avgLgsScore}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                    <div className="text-[11px] font-bold text-amber-800">20 Soru Sınavı</div>
                    <div className="text-2xl font-black text-amber-950 font-mono mt-0.5">
                      {m.avgEndScore}p
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-300">
                    <div className="text-[11px] font-bold text-slate-700">Genel Ağırlıklı Not</div>
                    <div className="text-2xl font-black text-slate-900 font-mono mt-0.5">
                      {m.weightedScore}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Unit Breakdown Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                {selectedGrade}. Sınıf Ünite ve Alt Bölüm İlerlemeleri
              </h4>
              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {gradeUnits.map(unit => {
                  const subCompleted = unit.subTopics.filter(s => selectedStudent.completedSubtopics.includes(s.id)).length;
                  const allDone = subCompleted === unit.subTopics.length;

                  return (
                    <div key={unit.id} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          allDone ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                        }`}>
                          <Check className="w-3 h-3" />
                        </span>
                        <div>
                          <span className="font-bold text-slate-900">{unit.unitNumber}. Ünite: {unit.title}</span>
                          <span className="text-slate-500 ml-1.5">({subCompleted}/{unit.subTopics.length} Bölüm)</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {selectedStudent.unitEndExamResults[unit.id] ? (
                          <span className="font-mono font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                            Sınav: {selectedStudent.unitEndExamResults[unit.id].scorePercent}p
                          </span>
                        ) : (
                          <span className="text-slate-400 font-mono">Sınav Henüz Çözülmedi</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Teacher Note & Assessment Field */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5 text-emerald-600" />
                Öğretmen Değerlendirmesi ve Özel Çalışma Notu:
              </label>
              <textarea
                value={teacherNoteInput}
                onChange={e => setTeacherNoteInput(e.target.value)}
                placeholder="Öğrencinin güçlü yanları, telafi edilmesi gereken kazanımlar veya etüt planı hakkında not giriniz..."
                rows={3}
                className="w-full p-3 rounded-2xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50"
              />
              <div className="flex justify-end gap-2 pt-1">
                <button
                  onClick={handleSaveTeacherNote}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Öğretmen Notunu Kaydet
                </button>
              </div>
            </div>

            {/* Bottom Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Sistem: MEB Maarif Modeli Öğrenci Portfolyo Takip Altyapısı
              </span>
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD NEW STUDENT MODAL */}
      {isAddingStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900">
                  {selectedClass} Sınıfına Yeni Öğrenci Ekle
                </h3>
              </div>
              <button onClick={() => setIsAddingStudent(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddNewStudent} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Öğrenci Okul Numarası:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Örn: 245"
                  value={newStudentNumber}
                  onChange={e => setNewStudentNumber(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Öğrenci Adı Soyadı:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Deniz Yılmaz"
                  value={newStudentName}
                  onChange={e => setNewStudentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Cinsiyet:
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={newStudentGender === 'M'}
                      onChange={() => setNewStudentGender('M')}
                    />
                    <span>Erkek</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={newStudentGender === 'F'}
                      onChange={() => setNewStudentGender('F')}
                    />
                    <span>Kız</span>
                  </label>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingStudent(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                >
                  Öğrenciyi Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
