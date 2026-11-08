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

export interface QuestionItem {
  id: number;
  scope_type: 'topic' | 'chapter';
  topic_id: number | null;
  chapter_id: number;
  order_index: number;
  difficulty: DifficultyLevel;
  question_text: string;
  options: string[];
  correct_index: number;
  explanation: string;
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
