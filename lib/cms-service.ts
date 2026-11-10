import getDb from './db';
import { ensureDatabaseSeeded } from './seed';
import { pickRepresentativeTrapOption } from './cognitive-traps';
import {
  ChapterItem,
  CheatsheetChapterItem,
  CheatsheetGradeData,
  CheatsheetTopicItem,
  DailyActionRecommendation,
  DifficultyBreakdownItem,
  DifficultyLevel,
  ExampleItem,
  FormulaItem,
  GradeItem,
  GradeProgressSummary,
  MistakeQuestionItem,
  ProgressDashboardData,
  QuantityItem,
  QuestionItem,
  RecentAttemptItem,
  SimulationItem,
  TopicDetail,
  TopicMasteryStatus,
  TopicProgressItem,
  TopicSummaryItem,
  TrueFalseStatement,
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
  stats: import('@/types/cms').GradeProgressStats;
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

  let totalTopics = 0;
  let completedTopics = 0;
  let totalScoreSum = 0;
  let totalScoredItems = 0;
  let completedChapters = 0;

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

    let chCompletedTopics = 0;
    let chScoreSum = 0;

    const topics: TopicSummaryItem[] = rawTopics.map((tp) => {
      const bestScore = tp.best_quiz_score !== null && tp.best_quiz_score !== undefined ? Number(tp.best_quiz_score) : null;
      if (bestScore !== null) {
        chCompletedTopics++;
        chScoreSum += bestScore;
        completedTopics++;
        totalScoreSum += bestScore;
        totalScoredItems++;
      }
      totalTopics++;

      return {
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
        best_quiz_score: bestScore,
      };
    });

    const bestExam = ch.best_exam_score !== null && ch.best_exam_score !== undefined ? Number(ch.best_exam_score) : null;
    if (bestExam !== null) {
      completedChapters++;
      totalScoreSum += bestExam;
      totalScoredItems++;
    }

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
      best_exam_score: bestExam,
      completed_topics_count: chCompletedTopics,
      total_topics_count: topics.length,
      average_quiz_score: chCompletedTopics > 0 ? Number((chScoreSum / chCompletedTopics).toFixed(1)) : null,
    };
  });

  const stats = {
    total_topics: totalTopics,
    completed_topics: completedTopics,
    average_score: totalScoredItems > 0 ? Number((totalScoreSum / totalScoredItems).toFixed(1)) : null,
    total_chapters: chapters.length,
    completed_chapters: completedChapters,
    completion_rate: totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0,
  };

  return { grade, chapters, stats };
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
    tf_stem: q.tf_stem || undefined,
    tf_statements: q.tf_statements_json ? safeJsonParse<TrueFalseStatement[]>(q.tf_statements_json, []) : undefined,
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
    `SELECT id, student_name, score, total_questions, time_spent_sec, answers_json, created_at
     FROM quiz_attempts
     WHERE scope_type = 'topic' AND scope_id = ?
     ORDER BY id DESC LIMIT 10`,
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
    tf_stem: q.tf_stem || undefined,
    tf_statements: q.tf_statements_json ? safeJsonParse<TrueFalseStatement[]>(q.tf_statements_json, []) : undefined,
  }));

  const recentAttempts = db.query<any>(
    `SELECT id, student_name, score, total_questions, time_spent_sec, answers_json, created_at
     FROM quiz_attempts
     WHERE scope_type = 'chapter' AND scope_id = ?
     ORDER BY id DESC LIMIT 10`,
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
  answers: Record<string, any>;
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

  // Sync question_mistakes for Smart Mistake Notebook
  const scopeQuestions =
    input.scopeType === 'topic'
      ? db.query<{ id: number; correct_index: number }>(
          `SELECT id, correct_index FROM questions WHERE scope_type = 'topic' AND topic_id = ?`,
          [input.scopeId]
        )
      : db.query<{ id: number; correct_index: number }>(
          `SELECT id, correct_index FROM questions WHERE scope_type = 'chapter' AND chapter_id = ?`,
          [input.scopeId]
        );

  const answersMap = input.answers || {};
  for (const q of scopeQuestions) {
    const selectedOpt = answersMap[String(q.id)] ?? answersMap[q.id as any];
    if (selectedOpt === undefined || selectedOpt === null) {
      // Unanswered question counts as a mistake (last_wrong_option = -1)
      db.run(
        `INSERT INTO question_mistakes (question_id, last_wrong_option, wrong_count, mastered, updated_at)
         VALUES (?, -1, 1, 0, datetime('now'))
         ON CONFLICT(question_id) DO UPDATE SET
           last_wrong_option = -1,
           wrong_count = question_mistakes.wrong_count + 1,
           mastered = 0,
           updated_at = datetime('now')`,
        [q.id]
      );
    } else if (Number(selectedOpt) !== Number(q.correct_index)) {
      // Wrong option selected
      db.run(
        `INSERT INTO question_mistakes (question_id, last_wrong_option, wrong_count, mastered, updated_at)
         VALUES (?, ?, 1, 0, datetime('now'))
         ON CONFLICT(question_id) DO UPDATE SET
           last_wrong_option = excluded.last_wrong_option,
           wrong_count = question_mistakes.wrong_count + 1,
           mastered = 0,
           updated_at = datetime('now')`,
        [q.id, Number(selectedOpt)]
      );
    } else {
      // Answered correctly: if it was in mistakes, mark as mastered!
      db.run(
        `UPDATE question_mistakes SET mastered = 1, updated_at = datetime('now') WHERE question_id = ?`,
        [q.id]
      );
    }
  }

  return Number(res.lastInsertRowid);
}

export function getMistakeNotebookData(gradeFilter?: number, showMastered = false): {
  mistakes: MistakeQuestionItem[];
  activeMistakeCount: number;
  masteredCount: number;
  countsByGrade: Record<number, number>;
} {
  ensureDatabaseSeeded(false);
  const db = getDb();

  const statusRows = db.query<{ mastered: number; c: number }>(
    `SELECT mastered, count(*) as c FROM question_mistakes GROUP BY mastered`
  );
  let activeMistakeCount = 0;
  let masteredCount = 0;
  for (const r of statusRows) {
    if (r.mastered === 0) activeMistakeCount = Number(r.c);
    else masteredCount = Number(r.c);
  }

  const gradeCountRows = db.query<{ grade_number: number; c: number }>(
    `SELECT g.grade_number, count(*) as c
     FROM question_mistakes m
     JOIN questions q ON q.id = m.question_id
     JOIN chapters c ON c.id = q.chapter_id
     JOIN grades g ON g.id = c.grade_id
     WHERE m.mastered = ?
     GROUP BY g.grade_number`,
    [showMastered ? 1 : 0]
  );
  const countsByGrade: Record<number, number> = {};
  for (const r of gradeCountRows) {
    countsByGrade[r.grade_number] = Number(r.c);
  }

  const params: any[] = [showMastered ? 1 : 0];
  let gradeClause = '';
  if (gradeFilter && gradeFilter >= 6 && gradeFilter <= 12) {
    gradeClause = 'AND g.grade_number = ?';
    params.push(gradeFilter);
  }

  const rawRows = db.query<any>(
    `SELECT
       m.id as mistake_id,
       m.last_wrong_option,
       m.wrong_count,
       m.mastered,
       m.updated_at,
       q.*,
       g.grade_number,
       c.code as chapter_code,
       c.title as chapter_title,
       t.code as topic_code,
       t.title as topic_title
     FROM question_mistakes m
     JOIN questions q ON q.id = m.question_id
     JOIN chapters c ON c.id = q.chapter_id
     JOIN grades g ON g.id = c.grade_id
     LEFT JOIN topics t ON t.id = q.topic_id
     WHERE m.mastered = ? ${gradeClause}
     ORDER BY m.wrong_count DESC, m.updated_at DESC`,
    params
  );

  const mistakes: MistakeQuestionItem[] = rawRows.map((r) => ({
    id: r.id,
    scope_type: r.scope_type,
    topic_id: r.topic_id,
    chapter_id: r.chapter_id,
    order_index: r.order_index,
    difficulty: r.difficulty,
    question_text: r.question_text,
    options: safeJsonParse<string[]>(r.options_json, ['', '', '', '']),
    correct_index: r.correct_index,
    explanation: r.explanation,
    tf_stem: r.tf_stem || undefined,
    tf_statements: r.tf_statements_json ? safeJsonParse<TrueFalseStatement[]>(r.tf_statements_json, []) : undefined,
    mistake_id: r.mistake_id,
    last_wrong_option: r.last_wrong_option,
    wrong_count: r.wrong_count,
    mastered: r.mastered,
    updated_at: r.updated_at,
    grade_number: r.grade_number,
    chapter_code: r.chapter_code,
    chapter_title: r.chapter_title,
    topic_code: r.topic_code || null,
    topic_title: r.topic_title || null,
  }));

  return {
    mistakes,
    activeMistakeCount,
    masteredCount,
    countsByGrade,
  };
}

export function getCognitiveTrapMatrixData(gradeFilter?: number): { mistakes: MistakeQuestionItem[] } {
  const notebookData = getMistakeNotebookData(gradeFilter, false);
  const mistakes = [...notebookData.mistakes];

  // If student hasn't accumulated enough mistakes yet, load curated representative trap questions from question bank
  if (mistakes.length < 12) {
    const db = getDb();
    const curatedQuestions = db.query<any>(`
      SELECT 
        0 as mistake_id,
        (q.correct_index + 1) % 4 as last_wrong_option,
        1 as wrong_count,
        0 as mastered,
        datetime('now') as updated_at,
        q.*,
        g.grade_number,
        c.code as chapter_code,
        c.title as chapter_title,
        t.code as topic_code,
        t.title as topic_title
      FROM questions q
      JOIN chapters c ON c.id = q.chapter_id
      JOIN grades g ON g.id = c.grade_id
      LEFT JOIN topics t ON t.id = q.topic_id
      WHERE (
        q.question_text LIKE '%không đúng%' OR
        q.question_text LIKE '%công%' OR
        q.question_text LIKE '%nhiệt lượng%' OR
        q.question_text LIKE '%km/h%' OR
        q.question_text LIKE '%cm%' OR
        q.question_text LIKE '%chu kỳ%' OR
        q.question_text LIKE '%rơi tự do%'
      )
      LIMIT 24
    `);

    const mappedCurated: MistakeQuestionItem[] = curatedQuestions.map((r) => ({
      id: r.id,
      scope_type: r.scope_type,
      topic_id: r.topic_id,
      chapter_id: r.chapter_id,
      order_index: r.order_index,
      difficulty: r.difficulty,
      question_text: r.question_text,
      options: safeJsonParse<string[]>(r.options_json, ['', '', '', '']),
      correct_index: r.correct_index,
      explanation: r.explanation,
      tf_stem: r.tf_stem || undefined,
      tf_statements: r.tf_statements_json ? safeJsonParse<TrueFalseStatement[]>(r.tf_statements_json, []) : undefined,
      mistake_id: r.mistake_id,
      last_wrong_option: r.last_wrong_option,
      wrong_count: r.wrong_count,
      mastered: r.mastered,
      updated_at: r.updated_at,
      grade_number: r.grade_number,
      chapter_code: r.chapter_code,
      chapter_title: r.chapter_title,
      topic_code: r.topic_code || null,
      topic_title: r.topic_title || null,
    }));

    const existingIds = new Set(mistakes.map((m) => m.id));
    for (const c of mappedCurated) {
      if (!existingIds.has(c.id)) {
        mistakes.push({
          ...c,
          last_wrong_option: pickRepresentativeTrapOption({
            question_text: c.question_text,
            options: c.options || [],
            correct_index: c.correct_index,
            explanation: c.explanation,
          }),
        });
      }
    }
  }

  return { mistakes };
}

export function searchKnowledgeBase(term: string, gradeFilter?: number): import('@/types/cms').SearchResults {
  ensureDatabaseSeeded(false);
  const db = getDb();
  const clean = term.trim();
  if (!clean) {
    return { formulas: [], quantities: [], topics: [] };
  }

  const pattern = `%${clean}%`;
  const gradeClause = gradeFilter && gradeFilter >= 6 && gradeFilter <= 12 ? 'AND g.grade_number = ?' : '';
  const formulaParams = gradeClause ? [pattern, pattern, pattern, pattern, gradeFilter] : [pattern, pattern, pattern, pattern];
  const quantityParams = gradeClause ? [pattern, pattern, pattern, pattern, gradeFilter] : [pattern, pattern, pattern, pattern];
  const topicParams = gradeClause ? [pattern, pattern, pattern, gradeFilter] : [pattern, pattern, pattern];

  // Search formulas
  const rawFormulas = db.query<any>(
    `SELECT
       f.*,
       t.title as topic_title,
       t.code as topic_code,
       c.title as chapter_title,
       c.id as chapter_id,
       g.grade_number
     FROM formulas f
     JOIN topics t ON t.id = f.topic_id
     JOIN chapters c ON c.id = t.chapter_id
     JOIN grades g ON g.id = c.grade_id
     WHERE (f.name LIKE ? OR f.plain_expression LIKE ? OR f.latex_expression LIKE ? OR f.usage_note LIKE ?)
       ${gradeClause}
     ORDER BY g.grade_number ASC, f.id ASC
     LIMIT 20`,
    formulaParams
  );

  const formulas = rawFormulas.map((f) => ({
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
    chapter_title: f.chapter_title,
    chapter_id: f.chapter_id,
    grade_number: f.grade_number,
  }));

  // Search quantities
  const rawQuantities = db.query<any>(
    `SELECT
       q.*,
       t.title as topic_title,
       t.code as topic_code,
       c.title as chapter_title,
       c.id as chapter_id,
       g.grade_number
     FROM quantities q
     JOIN topics t ON t.id = q.topic_id
     JOIN chapters c ON c.id = t.chapter_id
     JOIN grades g ON g.id = c.grade_id
     WHERE (q.name LIKE ? OR q.symbol LIKE ? OR q.si_unit LIKE ? OR q.description LIKE ?)
       ${gradeClause}
     ORDER BY g.grade_number ASC, q.id ASC
     LIMIT 20`,
    quantityParams
  );

  const quantities = rawQuantities.map((q) => ({
    id: q.id,
    topic_id: q.topic_id,
    order_index: q.order_index,
    name: q.name,
    symbol: q.symbol,
    si_unit: q.si_unit,
    other_units: q.other_units,
    measuring_device: q.measuring_device,
    description: q.description,
    topic_title: q.topic_title,
    topic_code: q.topic_code,
    chapter_title: q.chapter_title,
    chapter_id: q.chapter_id,
    grade_number: q.grade_number,
  }));

  // Search topics
  const rawTopics = db.query<any>(
    `SELECT
       t.id,
       t.code,
       t.title,
       t.overview,
       c.id as chapter_id,
       c.title as chapter_title,
       g.grade_number
     FROM topics t
     JOIN chapters c ON c.id = t.chapter_id
     JOIN grades g ON g.id = c.grade_id
     WHERE (t.title LIKE ? OR t.overview LIKE ? OR t.code LIKE ?)
       ${gradeClause}
     ORDER BY g.grade_number ASC, t.id ASC
     LIMIT 20`,
    topicParams
  );

  const topics = rawTopics.map((t) => ({
    id: t.id,
    code: t.code,
    title: t.title,
    overview: t.overview,
    chapter_id: t.chapter_id,
    chapter_title: t.chapter_title,
    grade_number: t.grade_number,
  }));

  return { formulas, quantities, topics };
}

export function getActiveMistakeCount(): number {
  try {
    const db = getDb();
    const row = db.get<{ c: number }>(`SELECT count(*) as c FROM question_mistakes WHERE mastered = 0`);
    return Number(row?.c || 0);
  } catch {
    return 0;
  }
}

export function updateMistakeStatus(questionId: number, action: 'master' | 'retry_wrong' | 'delete', wrongOption = -1) {
  const db = getDb();
  if (action === 'delete') {
    db.run(`DELETE FROM question_mistakes WHERE question_id = ?`, [questionId]);
  } else if (action === 'master') {
    db.run(
      `UPDATE question_mistakes SET mastered = 1, updated_at = datetime('now') WHERE question_id = ?`,
      [questionId]
    );
  } else if (action === 'retry_wrong') {
    db.run(
      `INSERT INTO question_mistakes (question_id, last_wrong_option, wrong_count, mastered, updated_at)
       VALUES (?, ?, 1, 0, datetime('now'))
       ON CONFLICT(question_id) DO UPDATE SET
         mastered = 0,
         wrong_count = question_mistakes.wrong_count + 1,
         last_wrong_option = excluded.last_wrong_option,
         updated_at = datetime('now')`,
      [questionId, wrongOption]
    );
  }
}

export function getCheatsheetData(gradeNumber: number): CheatsheetGradeData | null {
  ensureDatabaseSeeded(false);
  const db = getDb();

  const grade = db.get<any>(`SELECT * FROM grades WHERE grade_number = ?`, [gradeNumber]);
  if (!grade) return null;

  const rawChapters = db.query<any>(
    `SELECT * FROM chapters WHERE grade_id = ? ORDER BY order_index ASC`,
    [grade.id]
  );
  let totalFormulas = 0;
  let totalQuantities = 0;

  const chapters: CheatsheetChapterItem[] = rawChapters.map((ch) => {
    const rawTopics = db.query<any>(
      `SELECT * FROM topics WHERE chapter_id = ? ORDER BY order_index ASC`,
      [ch.id]
    );

    const topics: CheatsheetTopicItem[] = rawTopics.map((tp) => {
      const rawFormulas = db.query<any>(
        `SELECT * FROM formulas WHERE topic_id = ? ORDER BY order_index ASC`,
        [tp.id]
      );
      const rawQuantities = db.query<any>(
        `SELECT * FROM quantities WHERE topic_id = ? ORDER BY order_index ASC`,
        [tp.id]
      );

      totalFormulas += rawFormulas.length;
      totalQuantities += rawQuantities.length;

      const formulas: FormulaItem[] = rawFormulas.map((f) => ({
        id: f.id,
        topic_id: f.topic_id,
        order_index: f.order_index,
        name: f.name,
        latex_expression: f.latex_expression,
        plain_expression: f.plain_expression,
        variables: safeJsonParse(f.variables_json, []),
        derived_formulas: safeJsonParse(f.derived_formulas_json, []),
        usage_note: f.usage_note || '',
      }));

      const quantities: QuantityItem[] = rawQuantities.map((q) => ({
        id: q.id,
        topic_id: q.topic_id,
        order_index: q.order_index,
        name: q.name,
        symbol: q.symbol,
        si_unit: q.si_unit,
        other_units: q.other_units || '',
        measuring_device: q.measuring_device || '',
        description: q.description || '',
      }));

      return {
        id: tp.id,
        code: tp.code,
        title: tp.title,
        formulas,
        quantities,
      };
    });

    return {
      id: ch.id,
      grade_id: ch.grade_id,
      order_index: ch.order_index,
      code: ch.code,
      title: ch.title,
      description: ch.description,
      key_takeaways: safeJsonParse<string[]>(ch.key_takeaways_json, []),
      formula_cheatsheet: safeJsonParse<any[]>(ch.formula_cheatsheet_json, []),
      topics,
    };
  });

  return {
    grade: {
      id: grade.id,
      grade_number: grade.grade_number,
      title: grade.title,
      subtitle: grade.subtitle,
      description: grade.description,
      level_group: grade.level_group,
      is_primary_seeded: grade.is_primary_seeded,
    },
    chapters,
    totalFormulas,
    totalQuantities,
  };
}

export function getKnowledgeGraphRuntimeData(): {
  topics: import('./knowledge-graph').TopicRuntimeInput[];
  diagnosticQuestionsByCode: Record<string, QuestionItem[]>;
} {
  ensureDatabaseSeeded(false);
  const db = getDb();

  const rows = db.query<any>(`
    SELECT
      t.id,
      t.code,
      t.title,
      t.order_index,
      c.id AS chapter_id,
      c.code AS chapter_code,
      c.title AS chapter_title,
      c.order_index AS chapter_order,
      g.grade_number,
      COALESCE(SUM(CASE WHEN qm.mastered = 0 THEN 1 ELSE 0 END), 0) AS active_mistake_count,
      COALESCE(SUM(CASE WHEN qm.mastered = 1 THEN 1 ELSE 0 END), 0) AS mastered_mistake_count,
      COALESCE(SUM(CASE WHEN qm.mastered = 0 THEN qm.wrong_count ELSE 0 END), 0) AS total_wrong_count,
      (
        SELECT COUNT(*)
        FROM quiz_attempts qa
        WHERE qa.scope_type = 'topic' AND qa.scope_id = t.id
      ) AS attempt_count,
      (
        SELECT MAX(CAST(qa.score AS REAL) * 100.0 / CASE WHEN qa.total_questions > 0 THEN qa.total_questions ELSE 25 END)
        FROM quiz_attempts qa
        WHERE qa.scope_type = 'topic' AND qa.scope_id = t.id
      ) AS best_score_pct,
      (
        SELECT AVG(CAST(qa.score AS REAL) * 100.0 / CASE WHEN qa.total_questions > 0 THEN qa.total_questions ELSE 25 END)
        FROM quiz_attempts qa
        WHERE qa.scope_type = 'topic' AND qa.scope_id = t.id
      ) AS avg_score_pct
    FROM topics t
    JOIN chapters c ON c.id = t.chapter_id
    JOIN grades g ON g.id = c.grade_id
    LEFT JOIN questions q ON q.scope_type = 'topic' AND q.topic_id = t.id
    LEFT JOIN question_mistakes qm ON qm.question_id = q.id
    GROUP BY t.id
    ORDER BY g.grade_number ASC, c.order_index ASC, t.order_index ASC
  `);

  const topics: import('./knowledge-graph').TopicRuntimeInput[] = rows.map((r) => ({
    id: r.id,
    code: r.code,
    title: r.title,
    grade_number: r.grade_number,
    chapter_id: r.chapter_id,
    chapter_code: r.chapter_code,
    chapter_title: r.chapter_title,
    order_index: r.chapter_order * 100 + r.order_index,
    activeMistakeCount: Number(r.active_mistake_count || 0),
    masteredMistakeCount: Number(r.mastered_mistake_count || 0),
    totalWrongCount: Number(r.total_wrong_count || 0),
    attemptCount: Number(r.attempt_count || 0),
    bestScorePct: r.best_score_pct !== null && r.best_score_pct !== undefined ? Math.round(Number(r.best_score_pct)) : null,
    avgScorePct: r.avg_score_pct !== null && r.avg_score_pct !== undefined ? Math.round(Number(r.avg_score_pct)) : null,
  }));

  // Pick 3 representative diagnostic questions per topic (order_index 1, 11, 19)
  const diagRows = db.query<any>(`
    SELECT q.id, q.scope_type, q.topic_id, q.chapter_id, q.order_index, q.difficulty,
           q.question_text, q.options_json, q.correct_index, q.explanation,
           t.code AS topic_code
    FROM questions q
    JOIN topics t ON t.id = q.topic_id
    WHERE q.scope_type = 'topic' AND q.order_index IN (2, 11, 19)
    ORDER BY q.topic_id ASC, q.order_index ASC
  `);

  const diagnosticQuestionsByCode: Record<string, QuestionItem[]> = {};
  for (const q of diagRows) {
    if (!diagnosticQuestionsByCode[q.topic_code]) {
      diagnosticQuestionsByCode[q.topic_code] = [];
    }
    diagnosticQuestionsByCode[q.topic_code].push({
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
    });
  }

  return {
    topics,
    diagnosticQuestionsByCode,
  };
}

export function getAdaptiveTestCenterData() {
  ensureDatabaseSeeded(false);
  const db = getDb();

  const chapters = db.query<{
    id: number;
    code: string;
    title: string;
    grade_number: number;
    order_index: number;
  }>(`
    SELECT c.id, c.code, c.title, g.grade_number, c.order_index
    FROM chapters c
    JOIN grades g ON g.id = c.grade_id
    ORDER BY g.grade_number ASC, c.order_index ASC
  `);

  const topics = db.query<{
    id: number;
    code: string;
    title: string;
    chapter_id: number;
    grade_number: number;
  }>(`
    SELECT t.id, t.code, t.title, t.chapter_id, g.grade_number
    FROM topics t
    JOIN chapters c ON c.id = t.chapter_id
    JOIN grades g ON g.id = c.grade_id
    ORDER BY g.grade_number ASC, c.order_index ASC, t.order_index ASC
  `);

  const questionRows = db.query<any>(`
    SELECT
      q.id,
      q.scope_type,
      q.topic_id,
      q.chapter_id,
      q.order_index,
      q.difficulty,
      q.question_text,
      q.options_json,
      q.correct_index,
      q.explanation,
      t.code AS topic_code,
      t.title AS topic_title,
      c.code AS chapter_code,
      c.title AS chapter_title,
      g.grade_number,
      COALESCE(qm.wrong_count, 0) AS empirical_wrong_count
    FROM questions q
    JOIN chapters c ON c.id = q.chapter_id
    JOIN grades g ON g.id = c.grade_id
    LEFT JOIN topics t ON t.id = q.topic_id
    LEFT JOIN question_mistakes qm ON qm.question_id = q.id
    ORDER BY g.grade_number ASC, c.order_index ASC, q.order_index ASC
  `);

  const questions = questionRows.map((q) => ({
    id: q.id,
    scope_type: q.scope_type as 'topic' | 'chapter',
    topic_id: q.topic_id,
    chapter_id: q.chapter_id,
    order_index: q.order_index,
    difficulty: q.difficulty,
    question_text: q.question_text,
    options: safeJsonParse<string[]>(q.options_json, ['', '', '', '']),
    correct_index: q.correct_index,
    explanation: q.explanation,
    topic_code: q.topic_code || null,
    topic_title: q.topic_title || null,
    chapter_code: q.chapter_code,
    chapter_title: q.chapter_title,
    grade_number: q.grade_number,
    empiricalWrongCount: Number(q.empirical_wrong_count || 0),
  }));

  return {
    chapters,
    topics,
    questions,
  };
}

export function getProblemSandboxData(requestedQuestionId?: number) {
  ensureDatabaseSeeded(false);
  const db = getDb();

  const chapters = db.query<{
    id: number;
    code: string;
    title: string;
    grade_number: number;
    order_index: number;
  }>(`
    SELECT c.id, c.code, c.title, g.grade_number, c.order_index
    FROM chapters c
    JOIN grades g ON g.id = c.grade_id
    ORDER BY g.grade_number ASC, c.order_index ASC
  `);

  const topics = db.query<{
    id: number;
    code: string;
    title: string;
    chapter_id: number;
    chapter_code: string;
    chapter_title: string;
    grade_number: number;
  }>(`
    SELECT t.id, t.code, t.title, t.chapter_id, c.code AS chapter_code, c.title AS chapter_title, g.grade_number
    FROM topics t
    JOIN chapters c ON c.id = t.chapter_id
    JOIN grades g ON g.id = c.grade_id
    ORDER BY g.grade_number ASC, c.order_index ASC, t.order_index ASC
  `);

  const rawSims = db.query<any>(`SELECT * FROM simulations ORDER BY id ASC`);
  const simulationByTopicId: Record<number, SimulationItem> = {};
  for (const s of rawSims) {
    if (!simulationByTopicId[s.topic_id]) {
      simulationByTopicId[s.topic_id] = {
        id: s.id,
        topic_id: s.topic_id,
        sim_key: s.sim_key,
        title: s.title,
        description: s.description,
        parameters: safeJsonParse<Record<string, any>>(s.parameters_json, {}),
        guide_steps: safeJsonParse<string[]>(s.guide_steps_json, []),
        physics_insight: s.physics_insight || '',
      };
    }
  }

  const rawFormulas = db.query<any>(`SELECT * FROM formulas ORDER BY topic_id ASC, order_index ASC`);
  const formulasByTopicId: Record<number, FormulaItem[]> = {};
  for (const f of rawFormulas) {
    if (!formulasByTopicId[f.topic_id]) {
      formulasByTopicId[f.topic_id] = [];
    }
    formulasByTopicId[f.topic_id].push({
      id: f.id,
      topic_id: f.topic_id,
      order_index: f.order_index,
      name: f.name,
      latex_expression: f.latex_expression,
      plain_expression: f.plain_expression,
      variables: safeJsonParse(f.variables_json, []),
      derived_formulas: safeJsonParse(f.derived_formulas_json, []),
      usage_note: f.usage_note || '',
    });
  }

  // Pick up to 8 best problem/calculation questions per topic (plus requestedQuestionId if any)
  const rawQuestions = db.query<any>(`
    SELECT
      q.id,
      q.scope_type,
      q.topic_id,
      q.chapter_id,
      q.order_index,
      q.difficulty,
      q.question_text,
      q.options_json,
      q.correct_index,
      q.explanation
    FROM questions q
    WHERE q.scope_type = 'topic'
       OR (q.id = ?)
    ORDER BY
      CASE q.difficulty
        WHEN 'van_dung' THEN 1
        WHEN 'thong_hieu' THEN 2
        WHEN 'van_dung_cao' THEN 3
        ELSE 4
      END ASC,
      q.order_index ASC
  `, [requestedQuestionId || -1]);

  const questionsByTopicId: Record<number, QuestionItem[]> = {};
  let initialQuestion: (QuestionItem & { resolvedTopicId: number }) | null = null;

  // 1. Query all Exemplar Problems for topics from `examples` table
  const rawExamples = db.query<any>(`
    SELECT e.id, e.topic_id, e.order_index, e.title, e.difficulty, e.problem_statement, e.given_summary, e.solution_steps_json, e.final_answer, t.chapter_id
    FROM examples e
    JOIN topics t ON t.id = e.topic_id
    ORDER BY e.topic_id ASC, e.order_index ASC
  `);

  const exemplarByTopicId: Record<number, any> = {};
  for (const ex of rawExamples) {
    if (!exemplarByTopicId[ex.topic_id]) {
      exemplarByTopicId[ex.topic_id] = ex;
    }
  }

  // Pre-populate each topic's questions list with its 1:1 Exemplar Problem at index 0!
  for (const t of topics) {
    const ex = exemplarByTopicId[t.id];
    if (ex) {
      const exSteps = safeJsonParse<string[]>(ex.solution_steps_json, []);
      const exOptions = [
        ex.final_answer,
        `Phương án B: Kết quả sai lệch so với dữ kiện thí nghiệm`,
        `Phương án C: Tăng gấp 2 lần so với giá trị tính toán`,
        `Phương án D: Không thể xác định được từ các số liệu trên`,
      ];

      const exemplarItem: QuestionItem = {
        id: t.id * 10000 + ex.id,
        scope_type: 'topic',
        topic_id: t.id,
        chapter_id: t.chapter_id,
        order_index: 0,
        difficulty: ex.difficulty === 'Vận dụng cao' ? 'van_dung_cao' : ex.difficulty === 'Vận dụng' ? 'van_dung' : 'thong_hieu',
        question_text: ex.problem_statement,
        options: exOptions,
        correct_index: 0,
        explanation: `${ex.given_summary ? `**Tóm tắt:** ${ex.given_summary}\n\n` : ''}**Các bước giải chi tiết:**\n${exSteps.map((s: string) => `${s}`).join('\n\n')}\n\n**Đáp số:** ${ex.final_answer}`,
        is_exemplar: true,
      };

      questionsByTopicId[t.id] = [exemplarItem];

      if (!initialQuestion && (!requestedQuestionId || requestedQuestionId === exemplarItem.id)) {
        initialQuestion = { ...exemplarItem, resolvedTopicId: t.id };
      }
    }
  }

  // Map chapter_id -> first topic_id in case a chapter-level question is passed via ?questionId=
  const firstTopicByChapter: Record<number, number> = {};
  for (const t of topics) {
    if (!firstTopicByChapter[t.chapter_id]) {
      firstTopicByChapter[t.chapter_id] = t.id;
    }
  }

  for (const q of rawQuestions) {
    const mapped: QuestionItem = {
      id: q.id,
      scope_type: q.scope_type,
      topic_id: q.topic_id,
      chapter_id: q.chapter_id,
      order_index: q.order_index,
      difficulty: q.difficulty,
      question_text: q.question_text,
      options: safeJsonParse<string[]>(q.options_json, ['', '', '', '']),
      correct_index: q.correct_index,
      explanation: q.explanation,
      is_exemplar: false,
    };

    const resolvedTopicId = q.topic_id || firstTopicByChapter[q.chapter_id] || topics[0]?.id || 1;
    if (requestedQuestionId && q.id === requestedQuestionId) {
      initialQuestion = { ...mapped, resolvedTopicId };
    }

    if (!questionsByTopicId[resolvedTopicId]) {
      questionsByTopicId[resolvedTopicId] = [];
    }

    const list = questionsByTopicId[resolvedTopicId];
    if (list.length < 9 || (requestedQuestionId && q.id === requestedQuestionId)) {
      if (!list.some((item) => item.id === mapped.id)) {
        list.push(mapped);
      }
    }
  }

  return {
    chapters,
    topics,
    simulationByTopicId,
    formulasByTopicId,
    questionsByTopicId,
    initialQuestion,
  };
}

// ============================================================================
// LEARNING PROGRESS & MASTERY ANALYTICS DASHBOARD (/progress)
// ============================================================================

function ensureProgressTable(): void {
  const db = getDb();
  db.exec(`
    CREATE TABLE IF NOT EXISTS topic_study_checkins (
      topic_id INTEGER PRIMARY KEY,
      completed INTEGER NOT NULL DEFAULT 1,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
    );
  `);
}

export function toggleTopicStudyCheckin(topicId: number, completed?: boolean): { topicId: number; completed: boolean } {
  ensureDatabaseSeeded(false);
  ensureProgressTable();
  const db = getDb();

  const existing = db.get<{ completed: number }>(
    `SELECT completed FROM topic_study_checkins WHERE topic_id = ?`,
    [topicId]
  );

  const nextCompleted = completed !== undefined ? completed : !(existing && existing.completed === 1);

  db.run(
    `INSERT INTO topic_study_checkins (topic_id, completed, updated_at)
     VALUES (?, ?, datetime('now'))
     ON CONFLICT(topic_id) DO UPDATE SET
       completed = excluded.completed,
       updated_at = datetime('now')`,
    [topicId, nextCompleted ? 1 : 0]
  );

  return { topicId, completed: nextCompleted };
}

export function getProgressDashboardData(): ProgressDashboardData {
  ensureDatabaseSeeded(false);
  ensureProgressTable();
  const db = getDb();

  // 1. Load all topics with chapter, grade, formula count, and question count
  const rawTopics = db.query<any>(`
    SELECT
      t.id as topic_id,
      t.code,
      t.title,
      t.order_index,
      c.id as chapter_id,
      c.code as chapter_code,
      c.title as chapter_title,
      c.order_index as chapter_order,
      g.grade_number,
      g.title as grade_title,
      (SELECT count(*) FROM formulas f WHERE f.topic_id = t.id) as formula_count,
      (SELECT count(*) FROM questions q WHERE q.topic_id = t.id) as question_count
    FROM topics t
    JOIN chapters c ON c.id = t.chapter_id
    JOIN grades g ON g.id = c.grade_id
    ORDER BY g.grade_number ASC, c.order_index ASC, t.order_index ASC
  `);

  // 2. Load manual check-ins
  const checkinRows = db.query<{ topic_id: number; completed: number; updated_at: string }>(
    `SELECT topic_id, completed, updated_at FROM topic_study_checkins`
  );
  const checkinMap = new Map<number, { completed: boolean; updated_at: string }>();
  for (const r of checkinRows) {
    checkinMap.set(Number(r.topic_id), {
      completed: Number(r.completed) === 1,
      updated_at: r.updated_at,
    });
  }

  // 3. Load all questions for difficulty & topic mapping
  const allQuestions = db.query<{
    id: number;
    topic_id: number | null;
    chapter_id: number;
    difficulty: DifficultyLevel;
    correct_index: number;
  }>(`SELECT id, topic_id, chapter_id, difficulty, correct_index FROM questions`);

  const questionMap = new Map<
    number,
    { topic_id: number | null; chapter_id: number; difficulty: DifficultyLevel; correct_index: number }
  >();
  const bankCountByDifficulty: Record<DifficultyLevel, number> = {
    nhan_biet: 0,
    thong_hieu: 0,
    van_dung: 0,
    van_dung_cao: 0,
  };

  for (const q of allQuestions) {
    questionMap.set(Number(q.id), q);
    if (bankCountByDifficulty[q.difficulty] !== undefined) {
      bankCountByDifficulty[q.difficulty] += 1;
    }
  }

  // 4. Load question_mistakes
  const mistakeRows = db.query<{
    question_id: number;
    last_wrong_option: number;
    wrong_count: number;
    mastered: number;
    updated_at: string;
  }>(`SELECT question_id, last_wrong_option, wrong_count, mastered, updated_at FROM question_mistakes`);

  const activeMistakesByTopic = new Map<number, number>();
  const masteredMistakesByTopic = new Map<number, number>();
  const lastMistakeDateByTopic = new Map<number, string>();

  // Map chapter -> first topic in case a chapter-scoped question has topic_id = null
  const firstTopicByChapter = new Map<number, number>();
  for (const t of rawTopics) {
    if (!firstTopicByChapter.has(Number(t.chapter_id))) {
      firstTopicByChapter.set(Number(t.chapter_id), Number(t.topic_id));
    }
  }

  let totalActiveMistakes = 0;
  let totalMasteredMistakes = 0;

  const diffAnswered: Record<DifficultyLevel, number> = {
    nhan_biet: 0,
    thong_hieu: 0,
    van_dung: 0,
    van_dung_cao: 0,
  };
  const diffCorrect: Record<DifficultyLevel, number> = {
    nhan_biet: 0,
    thong_hieu: 0,
    van_dung: 0,
    van_dung_cao: 0,
  };

  for (const m of mistakeRows) {
    const qMeta = questionMap.get(Number(m.question_id));
    if (!qMeta) continue;
    const tId = qMeta.topic_id ? Number(qMeta.topic_id) : firstTopicByChapter.get(Number(qMeta.chapter_id));
    if (m.mastered === 1) {
      totalMasteredMistakes += 1;
      if (tId) {
        masteredMistakesByTopic.set(tId, (masteredMistakesByTopic.get(tId) || 0) + 1);
      }
      diffAnswered[qMeta.difficulty] += 1;
      diffCorrect[qMeta.difficulty] += 1;
    } else {
      totalActiveMistakes += 1;
      if (tId) {
        activeMistakesByTopic.set(tId, (activeMistakesByTopic.get(tId) || 0) + 1);
      }
      diffAnswered[qMeta.difficulty] += 1;
    }
    if (tId) {
      const prevDate = lastMistakeDateByTopic.get(tId);
      if (!prevDate || m.updated_at > prevDate) {
        lastMistakeDateByTopic.set(tId, m.updated_at);
      }
    }
  }

  // 5. Load quiz_attempts
  const attemptRows = db.query<{
    id: number;
    scope_type: 'topic' | 'chapter';
    scope_id: number;
    score: number;
    total_questions: number;
    time_spent_sec: number;
    answers_json: string;
    created_at: string;
  }>(`SELECT id, scope_type, scope_id, score, total_questions, time_spent_sec, answers_json, created_at FROM quiz_attempts ORDER BY created_at DESC, id DESC`);

  const topicAttemptStats = new Map<
    number,
    { count: number; bestPct: number; lastScore10: number; lastAt: string }
  >();

  // Lookup maps for topic & chapter titles
  const topicMetaMap = new Map<number, { code: string; title: string; grade_number: number }>();
  const chapterMetaMap = new Map<number, { code: string; title: string; grade_number: number; topicIds: number[] }>();

  for (const t of rawTopics) {
    const tId = Number(t.topic_id);
    const cId = Number(t.chapter_id);
    topicMetaMap.set(tId, { code: t.code, title: t.title, grade_number: Number(t.grade_number) });
    if (!chapterMetaMap.has(cId)) {
      chapterMetaMap.set(cId, {
        code: t.chapter_code,
        title: t.chapter_title,
        grade_number: Number(t.grade_number),
        topicIds: [],
      });
    }
    chapterMetaMap.get(cId)!.topicIds.push(tId);
  }

  const recentAttempts: RecentAttemptItem[] = [];
  let sumScore10 = 0;
  let totalTimeSpentSec = 0;
  let totalQuestionsInAttempts = 0;

  for (const att of attemptRows) {
    const totalQ = Math.max(1, Number(att.total_questions));
    const score = Number(att.score);
    const pct = Math.round((score / totalQ) * 100);
    const score10 = Number(((score / totalQ) * 10).toFixed(1));
    const timeSec = Math.max(0, Number(att.time_spent_sec || 0));

    sumScore10 += score10;
    totalTimeSpentSec += timeSec;
    totalQuestionsInAttempts += totalQ;

    // Parse answers_json to enrich per-difficulty and per-topic stats
    const answers = safeJsonParse<Record<string, number>>(att.answers_json, {});
    for (const [qIdStr, chosenOpt] of Object.entries(answers)) {
      const qMeta = questionMap.get(Number(qIdStr));
      if (!qMeta) continue;
      diffAnswered[qMeta.difficulty] += 1;
      if (Number(chosenOpt) === Number(qMeta.correct_index)) {
        diffCorrect[qMeta.difficulty] += 1;
      }
    }

    if (att.scope_type === 'topic') {
      const tId = Number(att.scope_id);
      const existing = topicAttemptStats.get(tId);
      if (!existing) {
        topicAttemptStats.set(tId, {
          count: 1,
          bestPct: pct,
          lastScore10: score10,
          lastAt: att.created_at,
        });
      } else {
        existing.count += 1;
        existing.bestPct = Math.max(existing.bestPct, pct);
      }

      const meta = topicMetaMap.get(tId);
      if (meta && recentAttempts.length < 15) {
        recentAttempts.push({
          id: Number(att.id),
          scope_type: 'topic',
          scope_id: tId,
          scope_code: meta.code,
          scope_title: meta.title,
          grade_number: meta.grade_number,
          score,
          total_questions: totalQ,
          score_10: score10,
          time_spent_sec: timeSec,
          avg_sec_per_question: timeSec > 0 ? Math.round(timeSec / totalQ) : 25,
          created_at: att.created_at,
        });
      }
    } else if (att.scope_type === 'chapter') {
      const cId = Number(att.scope_id);
      const cMeta = chapterMetaMap.get(cId);
      if (cMeta) {
        if (recentAttempts.length < 15) {
          recentAttempts.push({
            id: Number(att.id),
            scope_type: 'chapter',
            scope_id: cId,
            scope_code: cMeta.code,
            scope_title: `Tổng hợp ${cMeta.title}`,
            grade_number: cMeta.grade_number,
            score,
            total_questions: totalQ,
            score_10: score10,
            time_spent_sec: timeSec,
            avg_sec_per_question: timeSec > 0 ? Math.round(timeSec / totalQ) : 25,
            created_at: att.created_at,
          });
        }
      }
    }
  }

  // 6. Build TopicProgressItem list for all 92 topics
  const topics: TopicProgressItem[] = rawTopics.map((r) => {
    const tId = Number(r.topic_id);
    const checkin = checkinMap.get(tId);
    const attStat = topicAttemptStats.get(tId);
    const activeMistakes = activeMistakesByTopic.get(tId) || 0;
    const masteredMistakes = masteredMistakesByTopic.get(tId) || 0;
    const manualCompleted = checkin ? checkin.completed : false;
    const attemptCount = attStat ? attStat.count : 0;
    const bestScorePct = attStat ? attStat.bestPct : null;
    const lastScore10 = attStat ? attStat.lastScore10 : null;
    const lastStudiedAt =
      attStat?.lastAt || checkin?.updated_at || lastMistakeDateByTopic.get(tId) || null;

    let status: TopicMasteryStatus = 'not_started';
    if (
      manualCompleted ||
      (bestScorePct !== null && bestScorePct >= 80 && activeMistakes === 0) ||
      (masteredMistakes > 0 && activeMistakes === 0)
    ) {
      status = 'mastered';
    } else if (activeMistakes >= 2 || (bestScorePct !== null && bestScorePct < 50)) {
      status = 'needs_review';
    } else if (attemptCount > 0 || activeMistakes > 0 || masteredMistakes > 0) {
      status = 'in_progress';
    }

    return {
      topic_id: tId,
      code: r.code,
      title: r.title,
      order_index: Number(r.order_index),
      chapter_id: Number(r.chapter_id),
      chapter_code: r.chapter_code,
      chapter_title: r.chapter_title,
      grade_number: Number(r.grade_number),
      status,
      manual_completed: manualCompleted,
      attempt_count: attemptCount,
      best_score_pct: bestScorePct,
      last_score_10: lastScore10,
      active_mistakes: activeMistakes,
      mastered_mistakes: masteredMistakes,
      formula_count: Number(r.formula_count),
      question_count: Number(r.question_count),
      last_studied_at: lastStudiedAt,
    };
  });

  // 7. Build GradeProgressSummary (Grades 6..12)
  const gradeMap = new Map<number, GradeProgressSummary>();
  for (const r of rawTopics) {
    const gNum = Number(r.grade_number);
    if (!gradeMap.has(gNum)) {
      gradeMap.set(gNum, {
        grade_number: gNum,
        title: r.grade_title || `Vật lý Lớp ${gNum}`,
        total_topics: 0,
        mastered_topics: 0,
        in_progress_topics: 0,
        needs_review_topics: 0,
        not_started_topics: 0,
        completion_pct: 0,
      });
    }
  }

  for (const t of topics) {
    const g = gradeMap.get(t.grade_number)!;
    g.total_topics += 1;
    if (t.status === 'mastered') g.mastered_topics += 1;
    else if (t.status === 'in_progress') g.in_progress_topics += 1;
    else if (t.status === 'needs_review') g.needs_review_topics += 1;
    else g.not_started_topics += 1;
  }

  const gradeSummaries = Array.from(gradeMap.values()).map((g) => ({
    ...g,
    completion_pct:
      g.total_topics > 0
        ? Math.round(((g.mastered_topics + g.in_progress_topics * 0.5) / g.total_topics) * 100)
        : 0,
  }));

  // 8. Build 4-Tier Difficulty Breakdown (Bloom's Taxonomy)
  const diffConfigs: { key: DifficultyLevel; label: string; targetRangeLabel: string }[] = [
    { key: 'nhan_biet', label: 'Mức 1: Nhận biết (Định nghĩa & Đơn vị)', targetRangeLabel: 'Mục tiêu: ≥ 90%' },
    { key: 'thong_hieu', label: 'Mức 2: Thông hiểu (Bản chất & Giải thích)', targetRangeLabel: 'Mục tiêu: ≥ 80%' },
    { key: 'van_dung', label: 'Mức 3: Vận dụng (Tính toán & Công thức)', targetRangeLabel: 'Mục tiêu: ≥ 70%' },
    { key: 'van_dung_cao', label: 'Mức 4: Vận dụng cao (Bài toán tổng hợp)', targetRangeLabel: 'Mục tiêu: ≥ 55%' },
  ];

  const difficultyBreakdown: DifficultyBreakdownItem[] = diffConfigs.map((cfg) => {
    const answered = diffAnswered[cfg.key];
    const correct = diffCorrect[cfg.key];
    const accuracyPct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    return {
      difficulty: cfg.key,
      label: cfg.label,
      targetRangeLabel: cfg.targetRangeLabel,
      total_questions_in_bank: bankCountByDifficulty[cfg.key],
      answered_count: answered,
      correct_count: correct,
      accuracy_pct: accuracyPct,
    };
  });

  // 9. Build 3 Smart Daily Action Recommendations ("Hôm nay học gì?")
  const recommendations: DailyActionRecommendation[] = [];

  // Recommendation 1: Urgent Gap Fix (Topic with most active mistakes or needs_review)
  const urgentTopic = [...topics]
    .filter((t) => t.active_mistakes > 0 || t.status === 'needs_review')
    .sort((a, b) => b.active_mistakes - a.active_mistakes)[0];

  if (urgentTopic) {
    recommendations.push({
      type: 'urgent_fix',
      badge: '🔥 Ưu tiên số 1 • Vá lỗ hổng ngay',
      title: `${urgentTopic.code}: ${urgentTopic.title}`,
      reason: `Chủ đề này đang có ${urgentTopic.active_mistakes} câu sai cần khắc phục. Ôn lại lý thuyết và công thức để gỡ điểm mù ngay!`,
      href: `/topic/${urgentTopic.topic_id}`,
      ctaLabel: 'Ôn lại bài này ngay →',
      grade_number: urgentTopic.grade_number,
      topic_code: urgentTopic.code,
    });
  } else {
    const firstTopic = topics[0];
    if (firstTopic) {
      recommendations.push({
        type: 'urgent_fix',
        badge: '🔥 Nhiệm vụ trọng tâm',
        title: `${firstTopic.code}: ${firstTopic.title}`,
        reason: 'Bạn không có bài nào bị báo động đỏ! Hãy kiểm tra nhanh kiến thức nền tảng của chủ đề này.',
        href: `/topic/${firstTopic.topic_id}`,
        ctaLabel: 'Vào bài học →',
        grade_number: firstTopic.grade_number,
        topic_code: firstTopic.code,
      });
    }
  }

  // Recommendation 2: Spaced Review (Topic in_progress or mastered to reinforce)
  const reviewTopic =
    topics.find((t) => t.status === 'in_progress' && t.topic_id !== urgentTopic?.topic_id) ||
    topics.find((t) => t.status === 'mastered' && t.topic_id !== urgentTopic?.topic_id) ||
    topics[Math.min(1, topics.length - 1)];

  if (reviewTopic) {
    recommendations.push({
      type: 'spaced_review',
      badge: '🔄 Nhiệm vụ số 2 • Ôn tập chống quên',
      title: `${reviewTopic.code}: ${reviewTopic.title}`,
      reason:
        reviewTopic.active_mistakes > 0
          ? `Còn ${reviewTopic.active_mistakes} câu hỏi cần củng cố để chuyển sang trạng thái Đã tinh thông.`
          : `Luyện lại 5 phút các câu hỏi trắc nghiệm và mô phỏng 2D của bài này để ghi nhớ dài hạn.`,
      href: `/topic/${reviewTopic.topic_id}`,
      ctaLabel: 'Luyện tập củng cố →',
      grade_number: reviewTopic.grade_number,
      topic_code: reviewTopic.code,
    });
  }

  // Recommendation 3: Unlock Next New Topic
  const lastTouchedIdx = topics.reduce(
    (acc, t, idx) => (t.status !== 'not_started' ? idx : acc),
    -1
  );
  const nextNewTopic =
    topics.slice(lastTouchedIdx + 1).find((t) => t.status === 'not_started') ||
    topics.find((t) => t.status === 'not_started') ||
    topics[topics.length - 1];

  if (nextNewTopic) {
    recommendations.push({
      type: 'next_new',
      badge: '🚀 Nhiệm vụ số 3 • Mở khóa bài mới',
      title: `${nextNewTopic.code}: ${nextNewTopic.title}`,
      reason: `Chủ đề tiếp theo trong lộ trình Lớp ${nextNewTopic.grade_number} (${nextNewTopic.formula_count} công thức • ${nextNewTopic.question_count} câu hỏi).`,
      href: `/topic/${nextNewTopic.topic_id}`,
      ctaLabel: 'Học bài mới →',
      grade_number: nextNewTopic.grade_number,
      topic_code: nextNewTopic.code,
    });
  }

  // 10. Overall KPI summary
  const totalTopics = topics.length;
  const completedTopics = topics.filter((t) => t.status === 'mastered').length;
  const inProgressTopics = topics.filter((t) => t.status === 'in_progress').length;
  const needsReviewTopics = topics.filter((t) => t.status === 'needs_review').length;
  const notStartedTopics = topics.filter((t) => t.status === 'not_started').length;
  const completionPct =
    totalTopics > 0
      ? Math.round(((completedTopics + inProgressTopics * 0.5) / totalTopics) * 100)
      : 0;

  const totalAttempts = attemptRows.length;
  const averageScore10 =
    totalAttempts > 0 ? Number((sumScore10 / totalAttempts).toFixed(1)) : 0;
  const avgSecPerQuestion =
    totalQuestionsInAttempts > 0 && totalTimeSpentSec > 0
      ? Math.round(totalTimeSpentSec / totalQuestionsInAttempts)
      : 28;

  const totalMistakePool = totalActiveMistakes + totalMasteredMistakes;
  const mistakeResolutionPct =
    totalMistakePool > 0
      ? Math.round((totalMasteredMistakes / totalMistakePool) * 100)
      : 100;

  return {
    overall: {
      totalTopics,
      completedTopics,
      inProgressTopics,
      needsReviewTopics,
      notStartedTopics,
      completionPct,
      averageScore10,
      avgSecPerQuestion,
      totalAttempts,
      activeMistakes: totalActiveMistakes,
      masteredMistakes: totalMasteredMistakes,
      mistakeResolutionPct,
    },
    gradeSummaries,
    difficultyBreakdown,
    recentAttempts,
    recommendations,
    topics,
  };
}



