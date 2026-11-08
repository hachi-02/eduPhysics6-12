import getDb from './db';
import { ensureDatabaseSeeded } from './seed';
import {
  ChapterItem,
  ExampleItem,
  FormulaItem,
  GradeItem,
  QuantityItem,
  QuestionItem,
  SimulationItem,
  TopicDetail,
  TopicSummaryItem,
} from '@/types/cms';

function safeJsonParse<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function getAllGradesWithStats(): GradeItem[] {
  ensureDatabaseSeeded(false);
  const db = getDb();

  const rows = db.query<any>(`
    SELECT
      g.*,
      (SELECT count(*) FROM chapters c WHERE c.grade_id = g.id) as chapter_count,
      (SELECT count(*) FROM topics t JOIN chapters c ON c.id = t.chapter_id WHERE c.grade_id = g.id) as topic_count,
      (SELECT count(*) FROM questions q JOIN chapters c ON c.id = q.chapter_id WHERE c.grade_id = g.id) as question_count
    FROM grades g
    ORDER BY g.grade_number ASC
  `);

  return rows.map((r) => ({
    id: r.id,
    grade_number: r.grade_number,
    title: r.title,
    subtitle: r.subtitle,
    description: r.description,
    level_group: r.level_group,
    is_primary_seeded: r.is_primary_seeded,
    chapter_count: Number(r.chapter_count || 0),
    topic_count: Number(r.topic_count || 0),
    question_count: Number(r.question_count || 0),
  }));
}

export function getGradeCurriculumBoard(gradeNumber: number): {
  grade: GradeItem;
  chapters: ChapterItem[];
} | null {
  ensureDatabaseSeeded(false);
  const db = getDb();

  const grade = db.get<GradeItem>('SELECT * FROM grades WHERE grade_number = ?', [gradeNumber]);
  if (!grade) return null;

  const rawChapters = db.query<any>(
    `SELECT
      c.*,
      (SELECT count(*) FROM questions q WHERE q.scope_type = 'chapter' AND q.chapter_id = c.id) as chapter_question_count,
      (SELECT MAX(score) FROM quiz_attempts a WHERE a.scope_type = 'chapter' AND a.scope_id = c.id) as best_exam_score
     FROM chapters c
     WHERE c.grade_id = ?
     ORDER BY c.order_index ASC`,
    [grade.id]
  );

  const chapters: ChapterItem[] = rawChapters.map((ch) => {
    const rawTopics = db.query<any>(
      `SELECT
        t.*,
        (SELECT count(*) FROM quantities q WHERE q.topic_id = t.id) as quantity_count,
        (SELECT count(*) FROM formulas f WHERE f.topic_id = t.id) as formula_count,
        (SELECT count(*) FROM examples e WHERE e.topic_id = t.id) as example_count,
        (SELECT count(*) FROM simulations s WHERE s.topic_id = t.id) as simulation_count,
        (SELECT count(*) FROM questions qu WHERE qu.scope_type = 'topic' AND qu.topic_id = t.id) as question_count,
        (SELECT MAX(score) FROM quiz_attempts a WHERE a.scope_type = 'topic' AND a.scope_id = t.id) as best_quiz_score
       FROM topics t
       WHERE t.chapter_id = ?
       ORDER BY t.order_index ASC`,
      [ch.id]
    );

    const topics: TopicSummaryItem[] = rawTopics.map((tp) => ({
      id: tp.id,
      chapter_id: tp.chapter_id,
      order_index: tp.order_index,
      code: tp.code,
      title: tp.title,
      textbook_tags: safeJsonParse<string[]>(tp.textbook_tags_json, []),
      overview: tp.overview,
      quantity_count: Number(tp.quantity_count || 0),
      formula_count: Number(tp.formula_count || 0),
      example_count: Number(tp.example_count || 0),
      simulation_count: Number(tp.simulation_count || 0),
      question_count: Number(tp.question_count || 0),
      best_quiz_score: tp.best_quiz_score !== null && tp.best_quiz_score !== undefined ? Number(tp.best_quiz_score) : null,
    }));

    return {
      id: ch.id,
      grade_id: ch.grade_id,
      grade_number: grade.grade_number,
      order_index: ch.order_index,
      code: ch.code,
      title: ch.title,
      description: ch.description,
      summary_markdown: ch.summary_markdown,
      key_takeaways: safeJsonParse<string[]>(ch.key_takeaways_json, []),
      formula_cheatsheet: safeJsonParse(ch.formula_cheatsheet_json, []),
      topics,
      chapter_question_count: Number(ch.chapter_question_count || 0),
      best_exam_score: ch.best_exam_score !== null && ch.best_exam_score !== undefined ? Number(ch.best_exam_score) : null,
    };
  });

  return { grade, chapters };
}

export function getTopicFullDetail(topicId: number): (TopicDetail & {
  prevTopicId: number | null;
  nextTopicId: number | null;
  recentAttempts: any[];
}) | null {
  ensureDatabaseSeeded(false);
  const db = getDb();

  const row = db.get<any>(
    `SELECT
      t.*,
      c.title as chapter_title,
      c.code as chapter_code,
      c.grade_id as grade_id,
      g.grade_number as grade_number
     FROM topics t
     JOIN chapters c ON c.id = t.chapter_id
     JOIN grades g ON g.id = c.grade_id
     WHERE t.id = ?`,
    [topicId]
  );

  if (!row) return null;

  const quantities: QuantityItem[] = db.query<QuantityItem>(
    'SELECT * FROM quantities WHERE topic_id = ? ORDER BY order_index ASC, id ASC',
    [topicId]
  );

  const rawFormulas = db.query<any>(
    'SELECT * FROM formulas WHERE topic_id = ? ORDER BY order_index ASC, id ASC',
    [topicId]
  );
  const formulas: FormulaItem[] = rawFormulas.map((f) => ({
    id: f.id,
    topic_id: f.topic_id,
    order_index: f.order_index,
    name: f.name,
    latex_expression: f.latex_expression,
    plain_expression: f.plain_expression,
    variables: safeJsonParse(f.variables_json, []),
    derived_formulas: safeJsonParse(f.derived_formulas_json, []),
    usage_note: f.usage_note,
  }));

  const rawExamples = db.query<any>(
    'SELECT * FROM examples WHERE topic_id = ? ORDER BY order_index ASC, id ASC',
    [topicId]
  );
  const examples: ExampleItem[] = rawExamples.map((e) => ({
    id: e.id,
    topic_id: e.topic_id,
    order_index: e.order_index,
    title: e.title,
    difficulty: e.difficulty,
    problem_statement: e.problem_statement,
    given_summary: e.given_summary,
    solution_steps: safeJsonParse(e.solution_steps_json, []),
    final_answer: e.final_answer,
  }));

  const rawSims = db.query<any>('SELECT * FROM simulations WHERE topic_id = ? ORDER BY id ASC', [topicId]);
  const simulations: SimulationItem[] = rawSims.map((s) => ({
    id: s.id,
    topic_id: s.topic_id,
    sim_key: s.sim_key,
    title: s.title,
    description: s.description,
    parameters: safeJsonParse(s.parameters_json, {}),
    guide_steps: safeJsonParse(s.guide_steps_json, []),
    physics_insight: s.physics_insight,
  }));

  const rawQuestions = db.query<any>(
    `SELECT * FROM questions WHERE scope_type = 'topic' AND topic_id = ? ORDER BY order_index ASC, id ASC`,
    [topicId]
  );
  const questions: QuestionItem[] = rawQuestions.map((q) => ({
    id: q.id,
    scope_type: 'topic',
    topic_id: q.topic_id,
    chapter_id: q.chapter_id,
    order_index: q.order_index,
    difficulty: q.difficulty,
    question_text: q.question_text,
    options: safeJsonParse<string[]>(q.options_json, ['', '', '', '']),
    correct_index: q.correct_index,
    explanation: q.explanation,
  }));

  const siblingTopics = db.query<{ id: number }>(
    `SELECT t.id FROM topics t
     JOIN chapters c ON c.id = t.chapter_id
     WHERE c.grade_id = ?
     ORDER BY c.order_index ASC, t.order_index ASC`,
    [row.grade_id]
  );
  const currentIdx = siblingTopics.findIndex((s) => s.id === topicId);
  const prevTopicId = currentIdx > 0 ? siblingTopics[currentIdx - 1].id : null;
  const nextTopicId =
    currentIdx >= 0 && currentIdx < siblingTopics.length - 1 ? siblingTopics[currentIdx + 1].id : null;

  const recentAttempts = db.query<any>(
    `SELECT id, student_name, score, total_questions, time_spent_sec, created_at
     FROM quiz_attempts
     WHERE scope_type = 'topic' AND scope_id = ?
     ORDER BY id DESC LIMIT 5`,
    [topicId]
  );

  return {
    id: row.id,
    chapter_id: row.chapter_id,
    order_index: row.order_index,
    code: row.code,
    title: row.title,
    textbook_tags: safeJsonParse<string[]>(row.textbook_tags_json, []),
    overview: row.overview,
    chapter_title: row.chapter_title,
    chapter_code: row.chapter_code,
    grade_number: row.grade_number,
    theory_sections: safeJsonParse(row.theory_sections_json, []),
    summary_note: row.summary_note,
    quantity_count: quantities.length,
    formula_count: formulas.length,
    example_count: examples.length,
    simulation_count: simulations.length,
    question_count: questions.length,
    quantities,
    formulas,
    examples,
    simulations,
    questions,
    prevTopicId,
    nextTopicId,
    recentAttempts,
  };
}

export function getChapterFullDetail(chapterId: number): {
  chapter: ChapterItem;
  grade: GradeItem;
  topics: TopicSummaryItem[];
  allQuantities: (QuantityItem & { topic_title: string; topic_code: string })[];
  allFormulas: (FormulaItem & { topic_title: string; topic_code: string })[];
  examQuestions: QuestionItem[];
  recentAttempts: any[];
} | null {
  ensureDatabaseSeeded(false);
  const db = getDb();

  const chRow = db.get<any>('SELECT * FROM chapters WHERE id = ?', [chapterId]);
  if (!chRow) return null;

  const grade = db.get<GradeItem>('SELECT * FROM grades WHERE id = ?', [chRow.grade_id]);
  if (!grade) return null;

  const rawTopics = db.query<any>(
    `SELECT
      t.*,
      (SELECT count(*) FROM quantities q WHERE q.topic_id = t.id) as quantity_count,
      (SELECT count(*) FROM formulas f WHERE f.topic_id = t.id) as formula_count,
      (SELECT count(*) FROM examples e WHERE e.topic_id = t.id) as example_count,
      (SELECT count(*) FROM simulations s WHERE s.topic_id = t.id) as simulation_count,
      (SELECT count(*) FROM questions qu WHERE qu.scope_type = 'topic' AND qu.topic_id = t.id) as question_count,
      (SELECT MAX(score) FROM quiz_attempts a WHERE a.scope_type = 'topic' AND a.scope_id = t.id) as best_quiz_score
     FROM topics t
     WHERE t.chapter_id = ?
     ORDER BY t.order_index ASC`,
    [chapterId]
  );

  const topics: TopicSummaryItem[] = rawTopics.map((tp) => ({
    id: tp.id,
    chapter_id: tp.chapter_id,
    order_index: tp.order_index,
    code: tp.code,
    title: tp.title,
    textbook_tags: safeJsonParse<string[]>(tp.textbook_tags_json, []),
    overview: tp.overview,
    quantity_count: Number(tp.quantity_count || 0),
    formula_count: Number(tp.formula_count || 0),
    example_count: Number(tp.example_count || 0),
    simulation_count: Number(tp.simulation_count || 0),
    question_count: Number(tp.question_count || 0),
    best_quiz_score: tp.best_quiz_score !== null && tp.best_quiz_score !== undefined ? Number(tp.best_quiz_score) : null,
  }));

  const allQuantities = db.query<any>(
    `SELECT q.*, t.title as topic_title, t.code as topic_code
     FROM quantities q
     JOIN topics t ON t.id = q.topic_id
     WHERE t.chapter_id = ?
     ORDER BY t.order_index ASC, q.order_index ASC`,
    [chapterId]
  );

  const rawFormulas = db.query<any>(
    `SELECT f.*, t.title as topic_title, t.code as topic_code
     FROM formulas f
     JOIN topics t ON t.id = f.topic_id
     WHERE t.chapter_id = ?
     ORDER BY t.order_index ASC, f.order_index ASC`,
    [chapterId]
  );

  const allFormulas = rawFormulas.map((f) => ({
    id: f.id,
    topic_id: f.topic_id,
    order_index: f.order_index,
    name: f.name,
    latex_expression: f.latex_expression,
    plain_expression: f.plain_expression,
    variables: safeJsonParse(f.variables_json, []),
    derived_formulas: safeJsonParse(f.derived_formulas_json, []),
    usage_note: f.usage_note,
    topic_title: f.topic_title,
    topic_code: f.topic_code,
  }));

  const rawExamQuestions = db.query<any>(
    `SELECT * FROM questions
     WHERE scope_type = 'chapter' AND chapter_id = ?
     ORDER BY order_index ASC, id ASC`,
    [chapterId]
  );

  const examQuestions: QuestionItem[] = rawExamQuestions.map((q) => ({
    id: q.id,
    scope_type: 'chapter',
    topic_id: null,
    chapter_id: q.chapter_id,
    order_index: q.order_index,
    difficulty: q.difficulty,
    question_text: q.question_text,
    options: safeJsonParse<string[]>(q.options_json, ['', '', '', '']),
    correct_index: q.correct_index,
    explanation: q.explanation,
  }));

  const recentAttempts = db.query<any>(
    `SELECT id, student_name, score, total_questions, time_spent_sec, created_at
     FROM quiz_attempts
     WHERE scope_type = 'chapter' AND scope_id = ?
     ORDER BY id DESC LIMIT 5`,
    [chapterId]
  );

  const chapter: ChapterItem = {
    id: chRow.id,
    grade_id: chRow.grade_id,
    grade_number: grade.grade_number,
    order_index: chRow.order_index,
    code: chRow.code,
    title: chRow.title,
    description: chRow.description,
    summary_markdown: chRow.summary_markdown,
    key_takeaways: safeJsonParse<string[]>(chRow.key_takeaways_json, []),
    formula_cheatsheet: safeJsonParse(chRow.formula_cheatsheet_json, []),
    topics,
    chapter_question_count: examQuestions.length,
  };

  return {
    chapter,
    grade,
    topics,
    allQuantities,
    allFormulas,
    examQuestions,
    recentAttempts,
  };
}

export function recordQuizAttempt(input: {
  scopeType: 'topic' | 'chapter';
  scopeId: number;
  studentName?: string;
  score: number;
  totalQuestions: number;
  timeSpentSec: number;
  answers: Record<string, number>;
}) {
  const db = getDb();
  const res = db.run(
    `INSERT INTO quiz_attempts (scope_type, scope_id, student_name, score, total_questions, time_spent_sec, answers_json)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      input.scopeType,
      input.scopeId,
      (input.studentName || 'Học sinh').trim() || 'Học sinh',
      input.score,
      input.totalQuestions,
      input.timeSpentSec,
      JSON.stringify(input.answers || {}),
    ]
  );
  return Number(res.lastInsertRowid);
}
