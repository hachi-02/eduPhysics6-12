export type DifficultyLevel = 'nhan_biet' | 'thong_hieu' | 'van_dung' | 'van_dung_cao';

export interface TheorySection {
  heading: string;
  content: string;
  keyPoints?: string[];
  realWorldApplication?: string;
}

export interface FormulaVariable {
  symbol: string;
  name: string;
  unit: string;
}

export interface DerivedFormula {
  expression: string;
  description: string;
}

export interface GradeItem {
  id: number;
  grade_number: number;
  title: string;
  subtitle: string;
  description: string;
  level_group: 'THCS' | 'THPT';
  is_primary_seeded: number;
  chapter_count?: number;
  topic_count?: number;
  question_count?: number;
}

export interface ChapterItem {
  id: number;
  grade_id: number;
  grade_number?: number;
  order_index: number;
  code: string;
  title: string;
  description: string;
  summary_markdown: string;
  key_takeaways: string[];
  formula_cheatsheet: {
    name: string;
    latex: string;
    note: string;
  }[];
  topics?: TopicSummaryItem[];
  chapter_question_count?: number;
  best_exam_score?: number | null;
  completed_topics_count?: number;
  total_topics_count?: number;
  average_quiz_score?: number | null;
}

export interface GradeProgressStats {
  total_topics: number;
  completed_topics: number;
  average_score: number | null;
  total_chapters: number;
  completed_chapters: number;
  completion_rate: number;
}

export interface TopicSummaryItem {
  id: number;
  chapter_id: number;
  order_index: number;
  code: string;
  title: string;
  textbook_tags: string[];
  overview: string;
  quantity_count: number;
  formula_count: number;
  example_count: number;
  simulation_count: number;
  question_count: number;
  best_quiz_score?: number | null;
}

export interface QuantityItem {
  id: number;
  topic_id: number;
  order_index: number;
  name: string;
  symbol: string;
  si_unit: string;
  other_units: string;
  measuring_device: string;
  description: string;
}

export interface FormulaItem {
  id: number;
  topic_id: number;
  order_index: number;
  name: string;
  latex_expression: string;
  plain_expression: string;
  variables: FormulaVariable[];
  derived_formulas: DerivedFormula[];
  usage_note: string;
}

export interface ExampleItem {
  id: number;
  topic_id: number;
  order_index: number;
  title: string;
  difficulty: string;
  problem_statement: string;
  given_summary: string;
  solution_steps: string[];
  final_answer: string;
}

export interface SimulationItem {
  id: number;
  topic_id: number;
  sim_key: string;
  title: string;
  description: string;
  parameters: Record<string, any>;
  guide_steps: string[];
  physics_insight: string;
}

export type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer';

export interface TrueFalseStatement {
  id: string; // 'a' | 'b' | 'c' | 'd'
  text: string;
  is_correct: boolean;
  explanation?: string;
}

export interface ShortAnswerConfig {
  target_value: number | string;
  tolerance?: number; // relative (e.g. 0.02) or absolute
  unit?: string;
  acceptable_answers?: string[];
  hint?: string;
}

export interface QuestionItem {
  id: number;
  scope_type: 'topic' | 'chapter';
  topic_id: number | null;
  chapter_id: number;
  order_index: number;
  difficulty: DifficultyLevel;
  question_type?: QuestionType;
  question_text: string;
  options: string[];
  correct_index: number;
  explanation: string;
  tf_stem?: string;
  tf_statements?: TrueFalseStatement[];
  short_answer?: ShortAnswerConfig;
  is_exemplar?: boolean;
}

export interface TopicDetail extends TopicSummaryItem {
  chapter_title: string;
  chapter_code: string;
  grade_number: number;
  theory_sections: TheorySection[];
  summary_note: string;
  quantities: QuantityItem[];
  formulas: FormulaItem[];
  examples: ExampleItem[];
  simulations: SimulationItem[];
  questions: QuestionItem[];
}

export interface MistakeQuestionItem extends QuestionItem {
  mistake_id: number;
  last_wrong_option: number;
  wrong_count: number;
  mastered: number;
  updated_at: string;
  grade_number: number;
  chapter_code: string;
  chapter_title: string;
  topic_code: string | null;
  topic_title: string | null;
}

export interface SearchResults {
  formulas: (FormulaItem & {
    topic_title: string;
    topic_code: string;
    chapter_title: string;
    chapter_id: number;
    grade_number: number;
  })[];
  quantities: (QuantityItem & {
    topic_title: string;
    topic_code: string;
    chapter_title: string;
    chapter_id: number;
    grade_number: number;
  })[];
  topics: {
    id: number;
    code: string;
    title: string;
    overview: string;
    chapter_id: number;
    chapter_title: string;
    grade_number: number;
  }[];
}

export interface CheatsheetTopicItem {
  id: number;
  code: string;
  title: string;
  formulas: FormulaItem[];
  quantities: QuantityItem[];
}

export interface CheatsheetChapterItem {
  id: number;
  grade_id: number;
  order_index: number;
  code: string;
  title: string;
  description: string;
  key_takeaways: string[];
  formula_cheatsheet: {
    name: string;
    latex: string;
    note: string;
  }[];
  topics: CheatsheetTopicItem[];
}

export interface CheatsheetGradeData {
  grade: GradeItem;
  chapters: CheatsheetChapterItem[];
  totalFormulas: number;
  totalQuantities: number;
}

// ============================================================================
// FEATURE 4: COGNITIVE TRAP & MISCONCEPTION TAXONOMY MATRIX
// ============================================================================
export type CognitiveTrapType =
  | 'TRAP_UNIT'
  | 'TRAP_SIGN'
  | 'TRAP_INTUITION'
  | 'TRAP_FORMULA_CONFUSION'
  | 'TRAP_CONDITION'
  | 'TRAP_KEYWORD';

export interface CognitiveTrapMeta {
  id: CognitiveTrapType;
  name: string;
  shortDesc: string;
  icon: string;
  color: string;
  badgeCls: string;
  bgCls: string;
  borderCls: string;
  examplesSummary: string;
  remedyTip: string;
}

export interface TrapAnalysisResult {
  trapType: CognitiveTrapType;
  trapName: string;
  severity: 'Cao' | 'Trung bình' | 'Thường gặp';
  diagnosis: string;
  remedyTip: string;
  confidence: number;
}

export interface TrapMatrixStats {
  trapCounts: Record<CognitiveTrapType, number>;
  trapPercentages: Record<CognitiveTrapType, number>;
  totalAnalyzed: number;
  dominantTrap: CognitiveTrapType | null;
  immunityScore: number; // 0 - 100
  radarValues: { axis: string; trapType: CognitiveTrapType; value: number }[];
}

// ============================================================================
// FEATURE 5: SOCRATIC AI PHYSICS COACH (LOCAL SCAFFOLDING ENGINE)
// ============================================================================
export interface SocraticStepOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface SocraticScaffoldStep {
  level: 1 | 2 | 3;
  title: string;
  subtitle: string;
  prompt: string;
  options: SocraticStepOption[];
  hintIfStuck: string;
}

export interface SocraticCoachSession {
  questionId: number;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topicTitle: string;
  topicCode: string;
  chapterTitle: string;
  chapterCode: string;
  gradeNumber: number;
  steps: SocraticScaffoldStep[];
  finalResolution: string;
  masteryTakeaway: string;
  trapWarning?: string;
}

export interface SocraticCoachStats {
  totalSolved: number;
  currentStreak: number;
  masteryPoints: number;
}

export interface SocraticQuestionItem extends QuestionItem {
  grade_number: number;
  chapter_code: string;
  chapter_title: string;
  topic_code: string | null;
  topic_title: string | null;
}
