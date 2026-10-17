import { allUnits } from '../data/unitsIndex';

export interface QuizAttemptRecord {
  total: number;
  correct: number;
  wrong: number;
  unanswered: number;
  scorePercent: number;
  completedAt: string;
}

export interface StudentProfile {
  id: string;
  number: string;
  name: string;
  gender: 'M' | 'F';
  classGroup: string; // '8-A' | '8-B' | '7-A' | '6-A' | '5-A'
  grade: number;
  lastActiveDate: string;
  totalTimeMinutes: number;
  // Subtopic IDs completed in interactive book or summary
  completedSubtopics: string[];
  // Subtopic True/False results
  trueFalseResults: Record<string, QuizAttemptRecord>;
  // LGS Question Pool results (subTopicId -> attempt)
  lgsResults: Record<string, QuizAttemptRecord>;
  // Unit End 20 Questions results (unitId -> attempt)
  unitEndExamResults: Record<string, QuizAttemptRecord>;
  // Experiments & simulations completed
  completedSimulations: string[];
  // Teacher notes
  teacherNotes?: string;
  // Starred by teacher
  isStarred?: boolean;
}

const STORAGE_KEY = 'maarif_student_progress_v2';
const CURRENT_ACTIVE_STUDENT_ID = 'current-session-user';

/**
 * Generate initial realistic benchmark students for classes 8-A, 8-B, 7-A, 6-A, 5-A
 */
export function generateDefaultStudents(): StudentProfile[] {
  const now = new Date().toISOString().split('T')[0];

  const class8A_Names = [
    { name: 'Ahmet Yılmaz', num: '101', g: 'M', comp: 85, lgsScore: 88, endScore: 90, tfScore: 92 },
    { name: 'Zeynep Kaya', num: '102', g: 'F', comp: 95, lgsScore: 96, endScore: 98, tfScore: 100 },
    { name: 'Mehmet Demir', num: '103', g: 'M', comp: 72, lgsScore: 75, endScore: 78, tfScore: 84 },
    { name: 'Elif Çelik', num: '104', g: 'F', comp: 90, lgsScore: 92, endScore: 95, tfScore: 96 },
    { name: 'Mustafa Şahin', num: '105', g: 'M', comp: 64, lgsScore: 68, endScore: 70, tfScore: 76 },
    { name: 'Fatma Yıldız', num: '106', g: 'F', comp: 88, lgsScore: 86, endScore: 90, tfScore: 92 },
    { name: 'Emir Koç', num: '107', g: 'M', comp: 80, lgsScore: 82, endScore: 85, tfScore: 88 },
    { name: 'Hiranur Aydın', num: '108', g: 'F', comp: 92, lgsScore: 94, endScore: 96, tfScore: 98 },
    { name: 'Yusuf Arslan', num: '109', g: 'M', comp: 58, lgsScore: 60, endScore: 62, tfScore: 68 }, // Destek gereken
    { name: 'Ecrin Doğan', num: '110', g: 'F', comp: 82, lgsScore: 84, endScore: 86, tfScore: 90 },
    { name: 'Ömer Faruk Kurt', num: '111', g: 'M', comp: 76, lgsScore: 78, endScore: 80, tfScore: 84 },
    { name: 'Defne Güler', num: '112', g: 'F', comp: 98, lgsScore: 98, endScore: 100, tfScore: 100 },
    { name: 'Kerem Polat', num: '113', g: 'M', comp: 48, lgsScore: 52, endScore: 55, tfScore: 60 }, // Destek gereken
    { name: 'Nehir Aktaş', num: '114', g: 'F', comp: 86, lgsScore: 88, endScore: 90, tfScore: 92 },
    { name: 'Eymen Bulut', num: '115', g: 'M', comp: 70, lgsScore: 72, endScore: 75, tfScore: 80 },
    { name: 'Asel Keskin', num: '116', g: 'F', comp: 89, lgsScore: 91, endScore: 92, tfScore: 94 },
    { name: 'Hamza Özdemir', num: '117', g: 'M', comp: 66, lgsScore: 68, endScore: 70, tfScore: 75 },
    { name: 'Azra Yavuz', num: '118', g: 'F', comp: 94, lgsScore: 95, endScore: 96, tfScore: 98 },
    { name: 'Alperen Çetin', num: '119', g: 'M', comp: 74, lgsScore: 76, endScore: 80, tfScore: 82 },
    { name: 'Meryem Bozkurt', num: '120', g: 'F', comp: 84, lgsScore: 85, endScore: 88, tfScore: 90 }
  ];

  const class8B_Names = [
    { name: 'Burak Eren', num: '201', g: 'M', comp: 78, lgsScore: 80, endScore: 82, tfScore: 86 },
    { name: 'İclal Su Yıldırım', num: '202', g: 'F', comp: 91, lgsScore: 92, endScore: 95, tfScore: 96 },
    { name: 'Can Berk Tunç', num: '203', g: 'M', comp: 84, lgsScore: 86, endScore: 88, tfScore: 90 },
    { name: 'Melis Vural', num: '204', g: 'F', comp: 52, lgsScore: 55, endScore: 58, tfScore: 65 }, // Destek gereken
    { name: 'Barış Öztürk', num: '205', g: 'M', comp: 86, lgsScore: 88, endScore: 90, tfScore: 92 },
    { name: 'Seda Korkmaz', num: '206', g: 'F', comp: 93, lgsScore: 94, endScore: 96, tfScore: 98 },
    { name: 'Mert Akın', num: '207', g: 'M', comp: 62, lgsScore: 65, endScore: 68, tfScore: 72 },
    { name: 'Ceren Taştan', num: '208', g: 'F', comp: 80, lgsScore: 82, endScore: 84, tfScore: 88 }
  ];

  const students: StudentProfile[] = [];

  // Grade 8 units
  const grade8Units = allUnits.filter(u => (u.grade || 5) === 8);
  const grade8SubtopicIds = grade8Units.flatMap(u => u.subTopics.map(s => s.id));

  // Helper to make mock results for 8-A
  class8A_Names.forEach((item, idx) => {
    const completedCount = Math.round((item.comp / 100) * grade8SubtopicIds.length);
    const completedSub = grade8SubtopicIds.slice(0, completedCount);

    const tfRes: Record<string, QuizAttemptRecord> = {};
    const lgsRes: Record<string, QuizAttemptRecord> = {};
    const endRes: Record<string, QuizAttemptRecord> = {};

    completedSub.forEach(subId => {
      tfRes[subId] = {
        total: 10,
        correct: Math.round((item.tfScore / 100) * 10),
        wrong: 10 - Math.round((item.tfScore / 100) * 10),
        unanswered: 0,
        scorePercent: item.tfScore,
        completedAt: now
      };
      lgsRes[subId] = {
        total: 15,
        correct: Math.round((item.lgsScore / 100) * 15),
        wrong: 15 - Math.round((item.lgsScore / 100) * 15),
        unanswered: 0,
        scorePercent: item.lgsScore,
        completedAt: now
      };
    });

    grade8Units.forEach(u => {
      if (completedSub.some(s => s.startsWith(u.id))) {
        endRes[u.id] = {
          total: 20,
          correct: Math.round((item.endScore / 100) * 20),
          wrong: 20 - Math.round((item.endScore / 100) * 20),
          unanswered: 0,
          scorePercent: item.endScore,
          completedAt: now
        };
      }
    });

    students.push({
      id: `std-8a-${idx + 1}`,
      number: item.num,
      name: item.name,
      gender: item.g as 'M' | 'F',
      classGroup: '8-A',
      grade: 8,
      lastActiveDate: now,
      totalTimeMinutes: Math.round(item.comp * 2.8),
      completedSubtopics: completedSub,
      trueFalseResults: tfRes,
      lgsResults: lgsRes,
      unitEndExamResults: endRes,
      completedSimulations: ['dna-replication', 'photosynthesis', 'ecosystem'].slice(0, Math.ceil(item.comp / 35)),
      teacherNotes: item.comp < 60 ? 'Besin piramidi ve fotosentez hız değişkenleri konularında bireysel etüt planlandı.' : undefined,
      isStarred: item.comp >= 95
    });
  });

  // 8-B students
  class8B_Names.forEach((item, idx) => {
    const completedCount = Math.round((item.comp / 100) * grade8SubtopicIds.length);
    const completedSub = grade8SubtopicIds.slice(0, completedCount);

    const tfRes: Record<string, QuizAttemptRecord> = {};
    const lgsRes: Record<string, QuizAttemptRecord> = {};
    const endRes: Record<string, QuizAttemptRecord> = {};

    completedSub.forEach(subId => {
      tfRes[subId] = {
        total: 10,
        correct: Math.round((item.tfScore / 100) * 10),
        wrong: 10 - Math.round((item.tfScore / 100) * 10),
        unanswered: 0,
        scorePercent: item.tfScore,
        completedAt: now
      };
      lgsRes[subId] = {
        total: 15,
        correct: Math.round((item.lgsScore / 100) * 15),
        wrong: 15 - Math.round((item.lgsScore / 100) * 15),
        unanswered: 0,
        scorePercent: item.lgsScore,
        completedAt: now
      };
    });

    students.push({
      id: `std-8b-${idx + 1}`,
      number: item.num,
      name: item.name,
      gender: item.g as 'M' | 'F',
      classGroup: '8-B',
      grade: 8,
      lastActiveDate: now,
      totalTimeMinutes: Math.round(item.comp * 2.5),
      completedSubtopics: completedSub,
      trueFalseResults: tfRes,
      lgsResults: lgsRes,
      unitEndExamResults: endRes,
      completedSimulations: ['dna-replication', 'photosynthesis'].slice(0, Math.ceil(item.comp / 40)),
      teacherNotes: item.comp < 60 ? 'Madde döngüleri ve azot bakterileri tekrar edilmeli.' : undefined,
      isStarred: item.comp >= 90
    });
  });

  // Current interactive user (Active Session Student)
  students.unshift({
    id: CURRENT_ACTIVE_STUDENT_ID,
    number: '999',
    name: 'Ben (Aktif Kullanıcı / Öğrenci)',
    gender: 'F',
    classGroup: '8-A',
    grade: 8,
    lastActiveDate: now,
    totalTimeMinutes: 145,
    completedSubtopics: ['g8-u6-sub1', 'g8-u6-sub2', 'g8-u1-sub1', 'g8-u2-sub1'],
    trueFalseResults: {
      'g8-u6-sub1': { total: 10, correct: 9, wrong: 1, unanswered: 0, scorePercent: 90, completedAt: now },
      'g8-u6-sub2': { total: 10, correct: 10, wrong: 0, unanswered: 0, scorePercent: 100, completedAt: now }
    },
    lgsResults: {
      'g8-u6-sub1': { total: 12, correct: 11, wrong: 1, unanswered: 0, scorePercent: 92, completedAt: now },
      'g8-u6-sub2': { total: 14, correct: 13, wrong: 1, unanswered: 0, scorePercent: 93, completedAt: now }
    },
    unitEndExamResults: {
      'g8-unit-6': { total: 20, correct: 18, wrong: 2, unanswered: 0, scorePercent: 90, completedAt: now }
    },
    completedSimulations: ['photosynthesis', 'ecosystem', 'dna-replication'],
    teacherNotes: 'Akıllı tahta üzerinden tüm modülleri aktif olarak takip ediyor.',
    isStarred: true
  });

  return students;
}

/**
 * Load students from localStorage or generate defaults
 */
export function getStoredStudents(): StudentProfile[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to read student progress from localStorage:', e);
  }
  const defaults = generateDefaultStudents();
  saveStudents(defaults);
  return defaults;
}

/**
 * Save students to localStorage
 */
export function saveStudents(students: StudentProfile[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  } catch (e) {
    console.error('Failed to save student progress to localStorage:', e);
  }
}

/**
 * Record a subtopic completion for current user or given student
 */
export function recordSubtopicCompleted(subTopicId: string, studentId: string = CURRENT_ACTIVE_STUDENT_ID): void {
  const students = getStoredStudents();
  const target = students.find(s => s.id === studentId);
  if (target) {
    if (!target.completedSubtopics.includes(subTopicId)) {
      target.completedSubtopics.push(subTopicId);
      target.totalTimeMinutes += 12;
      target.lastActiveDate = new Date().toISOString().split('T')[0];
      saveStudents(students);
    }
  }
}

/**
 * Record a quiz attempt for current user
 */
export function recordQuizAttempt(
  quizType: 'tf' | 'lgs' | 'unitEnd',
  topicOrUnitId: string,
  record: { total: number; correct: number; wrong: number; unanswered: number },
  studentId: string = CURRENT_ACTIVE_STUDENT_ID
): void {
  const students = getStoredStudents();
  const target = students.find(s => s.id === studentId);
  if (!target) return;

  const now = new Date().toISOString().split('T')[0];
  const scorePercent = record.total > 0 ? Math.round((record.correct / record.total) * 100) : 0;
  const fullRecord: QuizAttemptRecord = {
    ...record,
    scorePercent,
    completedAt: now
  };

  if (quizType === 'tf') {
    target.trueFalseResults[topicOrUnitId] = fullRecord;
    if (!target.completedSubtopics.includes(topicOrUnitId)) {
      target.completedSubtopics.push(topicOrUnitId);
    }
  } else if (quizType === 'lgs') {
    target.lgsResults[topicOrUnitId] = fullRecord;
    if (!target.completedSubtopics.includes(topicOrUnitId)) {
      target.completedSubtopics.push(topicOrUnitId);
    }
  } else if (quizType === 'unitEnd') {
    target.unitEndExamResults[topicOrUnitId] = fullRecord;
  }

  target.lastActiveDate = now;
  target.totalTimeMinutes += 15;
  saveStudents(students);
}

/**
 * Calculate completion metrics for a single student across all units of a given grade
 */
export function calculateStudentMetrics(student: StudentProfile, grade: number = 8) {
  const gradeUnits = allUnits.filter(u => (u.grade || 5) === grade);
  const totalSubtopics = gradeUnits.reduce((sum, u) => sum + (u.subTopics?.length || 0), 0);

  const completedInGrade = student.completedSubtopics.filter(subId => {
    return gradeUnits.some(u => u.subTopics.some(s => s.id === subId));
  }).length;

  const completionRate = totalSubtopics > 0
    ? Math.round((completedInGrade / totalSubtopics) * 100)
    : 0;

  // LGS Scores
  const lgsScores = Object.values(student.lgsResults).map(r => r.scorePercent);
  const avgLgsScore = lgsScores.length > 0
    ? Math.round(lgsScores.reduce((a, b) => a + b, 0) / lgsScores.length)
    : 0;

  // True/False Scores
  const tfScores = Object.values(student.trueFalseResults).map(r => r.scorePercent);
  const avgTfScore = tfScores.length > 0
    ? Math.round(tfScores.reduce((a, b) => a + b, 0) / tfScores.length)
    : 0;

  // Unit End Exam Scores
  const endScores = Object.values(student.unitEndExamResults).map(r => r.scorePercent);
  const avgEndScore = endScores.length > 0
    ? Math.round(endScores.reduce((a, b) => a + b, 0) / endScores.length)
    : 0;

  // Overall General Grade
  const weightedScore = Math.round(
    (completionRate * 0.3) +
    (avgLgsScore * 0.35) +
    (avgEndScore * 0.25) +
    (avgTfScore * 0.1)
  );

  return {
    totalSubtopics,
    completedInGrade,
    completionRate,
    avgLgsScore,
    avgTfScore,
    avgEndScore,
    weightedScore,
    status: weightedScore >= 85 ? 'high' : weightedScore >= 60 ? 'medium' : 'needs_support'
  };
}

/**
 * Calculate aggregated class summary metrics for teachers
 */
export function calculateClassSummary(students: StudentProfile[], classGroup: string = '8-A', grade: number = 8) {
  const filtered = students.filter(s => s.classGroup === classGroup && s.grade === grade);
  if (filtered.length === 0) {
    return {
      totalStudents: 0,
      avgCompletionRate: 0,
      avgLgsScore: 0,
      avgTfScore: 0,
      avgUnitEndScore: 0,
      distribution: { high: 0, medium: 0, low: 0 },
      starStudentsCount: 0,
      supportNeededCount: 0,
      challengingConcepts: [
        { title: 'Besin Piramidinde Biyolojik Birikim (Zehir)', errorRate: 38, unitName: '6. Ünite' },
        { title: 'Fotosentez Hızı ve Işık Dalga Boyu', errorRate: 34, unitName: '6. Ünite' },
        { title: 'Azot Döngüsünde Baklagiller ve Bakteriler', errorRate: 29, unitName: '6. Ünite' }
      ]
    };
  }

  const metrics = filtered.map(s => calculateStudentMetrics(s, grade));

  const totalComp = metrics.reduce((sum, m) => sum + m.completionRate, 0);
  const totalLgs = metrics.reduce((sum, m) => sum + m.avgLgsScore, 0);
  const totalTf = metrics.reduce((sum, m) => sum + m.avgTfScore, 0);
  const totalEnd = metrics.reduce((sum, m) => sum + m.avgEndScore, 0);

  const high = metrics.filter(m => m.status === 'high').length;
  const medium = metrics.filter(m => m.status === 'medium').length;
  const low = metrics.filter(m => m.status === 'needs_support').length;

  return {
    totalStudents: filtered.length,
    avgCompletionRate: Math.round(totalComp / filtered.length),
    avgLgsScore: Math.round(totalLgs / filtered.length),
    avgTfScore: Math.round(totalTf / filtered.length),
    avgUnitEndScore: Math.round(totalEnd / filtered.length),
    distribution: { high, medium, low },
    starStudentsCount: high,
    supportNeededCount: low,
    challengingConcepts: [
      { title: 'Besin Piramidinde Biyolojik Birikim (Zehir)', errorRate: 38, unitName: '6. Ünite' },
      { title: 'Fotosentez Hızı ve Işık Dalga Boyu', errorRate: 34, unitName: '6. Ünite' },
      { title: 'Azot Döngüsünde Baklagiller ve Bakteriler', errorRate: 29, unitName: '6. Ünite' },
      { title: 'Sıfır Atık Hiyerarşisi (Önleme/Azaltma)', errorRate: 25, unitName: '6. Ünite' }
    ]
  };
}
