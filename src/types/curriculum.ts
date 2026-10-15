export interface QuestionOption {
  key: string;
  text: string;
}

export interface LgsQuestion {
  id: number;
  subTopicId?: string;
  theme?: string;
  cognitiveLevel?: string;
  contextTitle?: string;
  scenario?: string;
  questionPrompt: string;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: string;
  skillTag?: string;
  graphicData?: any;
  experimentSetup?: any;
  type?: 'lgs' | string;
}

export interface TrueFalseQuestion {
  id: number;
  statement: string;
  isCorrect: boolean;
  explanation: string;
  subTopicId?: string;
}

export interface EvaluationQuestion {
  question: string;
  answer: string;
}

export interface InteractiveBookItem {
  id: string;
  pageNumber: string;
  type: string;
  title: string;
  badge?: string;
  prompt?: string;
  content?: string | string[];
  interactiveAnswer?: string;
  evaluationQuestions?: EvaluationQuestion[];
  resultInfoBox?: string;
  tableData?: any;
  materials?: string[];
  steps?: string[];
  qrInfo?: any;
}

export interface BookActivity {
  id: string;
  type: string;
  typeLabel?: string;
  pageNumber: string;
  title: string;
  prompt?: string;
  interactiveAnswer?: string;
  examNote?: string;
  materials?: string[];
  steps?: string[];
}

export interface UnitEndQuestion {
  id: number;
  pageNumber?: string;
  type?: string;
  title?: string;
  questionPrompt: string;
  options: QuestionOption[];
  correctAnswer: string;
  detailedExplanation?: string;
  explanation?: string;
  skillTag?: string;
}

export interface SummarySection {
  heading: string;
  paragraphs?: string[];
  keyPoints?: string[];
  examNote?: string;
  table?: {
    headers: string[];
    rows: (string | number)[][];
  };
}

export interface SubTopic {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  pageRange?: string;
  concepts: string[];
  simulationId?: string;
  summarySections?: SummarySection[];
  trueFalseQuestions?: TrueFalseQuestion[];
  lgsQuestions?: LgsQuestion[];
  ebaUrl?: string;
}

export interface ColorTheme {
  primary: string;
  border: string;
  bg: string;
  accent: string;
  text: string;
}

export interface Unit {
  id: string;
  unitNumber: number;
  bookNumber?: number;
  grade: number;
  subject: string;
  title: string;
  unitEndPageRange?: string;
  colorTheme: ColorTheme;
  subTopics: SubTopic[];
  unitEnd20Questions?: LgsQuestion[];
  unitEndQuestions?: UnitEndQuestion[];
}
