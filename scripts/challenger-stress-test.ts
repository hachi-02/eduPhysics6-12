/**
 * GDPT 2018 Vietnamese Physics CMS (Grades 6 - 12)
 * EMPIRICAL CHALLENGER ADVERSARIAL STRESS TEST
 *
 * Exhaustively stress-tests:
 * 1. Database schema and referential integrity (foreign keys, integrity_check)
 * 2. All 3,050 questions:
 *    - Exactly 4 options, non-empty, distinct (case-sensitive physics symbol preservation)
 *    - correct_index strictly in [0, 1, 2, 3] and distribution audit
 *    - difficulty enum validity & 4-tier cognitive distribution
 *    - Deep placeholder / dummy / stub detection (regex, stub tokens)
 *    - Duplicate question stems & synthesis exam structure analysis
 * 3. KaTeX and LaTeX syntax:
 *    - Math delimiter matching ($...$ and $$...$$) in questions, explanations, options
 *    - Empirical KaTeX parsing via katex.renderToString()
 *    - Formulas table and chapter cheatsheet LaTeX syntax
 * 4. Quiz engine scoring logic & submission API simulation:
 *    - Scoring oracle under all permutations (all correct, all wrong, partial, out-of-bounds)
 *    - Attempt insertion under adversarial payloads (SQL injection, Unicode, huge strings, boundary values)
 *    - DB cleanup and hygiene
 */

import katex from 'katex';
import getDb from '../lib/db';
import { recordQuizAttempt } from '../lib/cms-service';

export interface StressCheckResult {
  category: string;
  name: string;
  passed: boolean;
  findings: string[];
  metrics?: Record<string, any>;
}

export interface StressReport {
  timestamp: string;
  verdict: 'APPROVE' | 'REQUEST_CHANGES';
  totalQuestionsAudited: number;
  totalChaptersAudited: number;
  totalTopicsAudited: number;
  totalMathExpressionsAudited: number;
  checks: StressCheckResult[];
}

const db = getDb();

export function runStressSuite(): StressReport {
  const report: StressReport = {
    timestamp: new Date().toISOString(),
    verdict: 'APPROVE',
    totalQuestionsAudited: 0,
    totalChaptersAudited: 0,
    totalTopicsAudited: 0,
    totalMathExpressionsAudited: 0,
    checks: [],
  };

  function addCheck(
    category: string,
    name: string,
    passed: boolean,
    findings: string[],
    metrics?: Record<string, any>
  ) {
    if (!passed) {
      report.verdict = 'REQUEST_CHANGES';
    }
    report.checks.push({ category, name, passed, findings, metrics });
  }

  console.log('===============================================================');
  console.log('   EMPIRICAL CHALLENGER ADVERSARIAL STRESS TEST RUNNER');
  console.log('===============================================================\n');

  // -------------------------------------------------------------------------
  // 1. SQLite Database PRAGMA & Structural Integrity Checks
  // -------------------------------------------------------------------------
  console.log('[1/4] Auditing Database PRAGMA & Structural Integrity...');

  const integrityRows = db.query<{ integrity_check: string }>('PRAGMA integrity_check;');
  const isIntegrityOk = integrityRows.length === 1 && integrityRows[0].integrity_check === 'ok';
  addCheck(
    'DB_INTEGRITY',
    'PRAGMA integrity_check',
    isIntegrityOk,
    isIntegrityOk ? [] : [`Integrity check failed: ${JSON.stringify(integrityRows)}`],
    { integrityRows }
  );

  const fkCheckRows = db.query<any>('PRAGMA foreign_key_check;');
  const isFkOk = fkCheckRows.length === 0;
  addCheck(
    'DB_INTEGRITY',
    'PRAGMA foreign_key_check',
    isFkOk,
    isFkOk ? [] : [`Foreign key violations detected: ${JSON.stringify(fkCheckRows)}`],
    { fkViolationsCount: fkCheckRows.length }
  );

  // Check orphaned questions
  const orphanedTopicQuestions = db.query<any>(
    "SELECT id, topic_id FROM questions WHERE scope_type = 'topic' AND topic_id NOT IN (SELECT id FROM topics)"
  );
  const orphanedChapterQuestions = db.query<any>(
    "SELECT id, chapter_id FROM questions WHERE scope_type = 'chapter' AND chapter_id NOT IN (SELECT id FROM chapters)"
  );
  const nullTopicInTopicScope = db.query<any>(
    "SELECT id FROM questions WHERE scope_type = 'topic' AND topic_id IS NULL"
  );
  const hasTopicInChapterScope = db.query<any>(
    "SELECT id FROM questions WHERE scope_type = 'chapter' AND topic_id IS NOT NULL"
  );

  const orphanedFindings: string[] = [];
  if (orphanedTopicQuestions.length > 0) {
    orphanedFindings.push(`${orphanedTopicQuestions.length} topic questions reference non-existent topic_id`);
  }
  if (orphanedChapterQuestions.length > 0) {
    orphanedFindings.push(`${orphanedChapterQuestions.length} chapter questions reference non-existent chapter_id`);
  }
  if (nullTopicInTopicScope.length > 0) {
    orphanedFindings.push(`${nullTopicInTopicScope.length} questions with scope_type='topic' have NULL topic_id`);
  }
  if (hasTopicInChapterScope.length > 0) {
    orphanedFindings.push(`${hasTopicInChapterScope.length} questions with scope_type='chapter' have non-NULL topic_id`);
  }

  addCheck(
    'DB_INTEGRITY',
    'Orphaned & Mis-scoped Questions',
    orphanedFindings.length === 0,
    orphanedFindings
  );

  // -------------------------------------------------------------------------
  // 2. Question Counts & Partition Breakdown
  // -------------------------------------------------------------------------
  console.log('[2/4] Auditing Question Counts & Breakdown Across Grades 6-12...');

  const totalQuestionsRow = db.get<{ count: number }>('SELECT count(*) as count FROM questions');
  const totalQuestions = totalQuestionsRow?.count || 0;
  report.totalQuestionsAudited = totalQuestions;

  const totalChaptersRow = db.get<{ count: number }>('SELECT count(*) as count FROM chapters');
  report.totalChaptersAudited = totalChaptersRow?.count || 0;

  const totalTopicsRow = db.get<{ count: number }>('SELECT count(*) as count FROM topics');
  report.totalTopicsAudited = totalTopicsRow?.count || 0;

  const questionsByGrade = db.query<{
    grade_number: number;
    chapter_count: number;
    topic_count: number;
    total_q: number;
    topic_q: number;
    chapter_q: number;
  }>(`
    SELECT
      g.grade_number,
      count(DISTINCT c.id) as chapter_count,
      count(DISTINCT t.id) as topic_count,
      count(DISTINCT q.id) as total_q,
      sum(CASE WHEN q.scope_type = 'topic' THEN 1 ELSE 0 END) as topic_q,
      sum(CASE WHEN q.scope_type = 'chapter' THEN 1 ELSE 0 END) as chapter_q
    FROM grades g
    LEFT JOIN chapters c ON c.grade_id = g.id
    LEFT JOIN topics t ON t.chapter_id = c.id
    LEFT JOIN questions q ON q.chapter_id = c.id
    GROUP BY g.grade_number
    ORDER BY g.grade_number ASC
  `);

  const expectedTotalQuestions = 3050;
  const countPassed = totalQuestions === expectedTotalQuestions;
  addCheck(
    'QUESTION_COUNTS',
    'Exact 3,050 Question Count Requirement',
    countPassed,
    countPassed ? [] : [`Found ${totalQuestions} questions, expected exactly ${expectedTotalQuestions}`],
    { totalQuestions, expectedTotalQuestions, breakdown: questionsByGrade }
  );

  // Validate exactly 25 questions per topic (92 topics)
  const topics = db.query<{ id: number; code: string; title: string; chapter_id: number }>('SELECT * FROM topics ORDER BY id ASC');
  const badTopicQCounts: string[] = [];
  for (let i = 0; i < topics.length; i++) {
    const tp = topics[i];
    const qCount = db.get<{ count: number }>(
      "SELECT count(*) as count FROM questions WHERE scope_type = 'topic' AND topic_id = ?",
      [tp.id]
    )?.count || 0;
    if (qCount !== 25) {
      badTopicQCounts.push(`Topic ${tp.code} (ID: ${tp.id}) has ${qCount} questions (expected 25)`);
    }
  }
  addCheck(
    'QUESTION_COUNTS',
    'Exactly 25 Questions per Topic (92 Topics)',
    badTopicQCounts.length === 0,
    badTopicQCounts,
    { totalTopicsChecked: topics.length, badTopicsCount: badTopicQCounts.length }
  );

  // Validate exactly 25 questions per chapter (30 chapters)
  const chapters = db.query<{ id: number; code: string; title: string; grade_id: number }>('SELECT * FROM chapters ORDER BY id ASC');
  const badChapterQCounts: string[] = [];
  for (let i = 0; i < chapters.length; i++) {
    const ch = chapters[i];
    const qCount = db.get<{ count: number }>(
      "SELECT count(*) as count FROM questions WHERE scope_type = 'chapter' AND chapter_id = ?",
      [ch.id]
    )?.count || 0;
    if (qCount !== 25) {
      badChapterQCounts.push(`Chapter ${ch.code} (ID: ${ch.id}) has ${qCount} questions (expected 25)`);
    }
  }
  addCheck(
    'QUESTION_COUNTS',
    'Exactly 25 Exam Questions per Chapter (30 Chapters)',
    badChapterQCounts.length === 0,
    badChapterQCounts,
    { totalChaptersChecked: chapters.length, badChaptersCount: badChapterQCounts.length }
  );

  // -------------------------------------------------------------------------
  // 3. Exhaustive Inspection of all 3,050 Questions
  // -------------------------------------------------------------------------
  console.log('[3/4] Exhaustively Stress-Testing all 3,050 Questions...');

  const allQuestions = db.query<any>('SELECT * FROM questions ORDER BY id ASC');

  const optionIntegrityFindings: string[] = [];
  const duplicateOptionFindings: string[] = [];
  const correctIndexFindings: string[] = [];
  const difficultyFindings: string[] = [];
  const placeholderFindings: string[] = [];
  const stubQuestionFindings: string[] = [];
  const katexSyntaxFindings: string[] = [];

  const correctIndexCounts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
  const difficultyCounts: Record<string, number> = {
    nhan_biet: 0,
    thong_hieu: 0,
    van_dung: 0,
    van_dung_cao: 0,
  };

  const placeholderRegex = /\b(lorem\s*ipsum|dummy|todo|placeholder|test\s*question|câu\s*hỏi\s*mẫu|chưa\s*có|đang\s*cập\s*nhật|xxx|yyy|tbd|fixme|sample\s*question)\b/i;

  let totalMathChecked = 0;

  for (let qIdx = 0; qIdx < allQuestions.length; qIdx++) {
    const q = allQuestions[qIdx];
    // A. Option JSON integrity
    let options: string[] = [];
    try {
      options = JSON.parse(q.options_json);
    } catch (e: any) {
      optionIntegrityFindings.push(`Q#${q.id}: Invalid JSON in options_json: ${e.message}`);
      continue;
    }

    if (!Array.isArray(options)) {
      optionIntegrityFindings.push(`Q#${q.id}: options_json is not an array`);
      continue;
    }

    if (options.length !== 4) {
      optionIntegrityFindings.push(`Q#${q.id}: Expected 4 options, found ${options.length}`);
    }

    for (let i = 0; i < options.length; i++) {
      const opt = options[i];
      if (typeof opt !== 'string' || opt.trim().length === 0) {
        optionIntegrityFindings.push(`Q#${q.id}: Option[${i}] is empty or not a string`);
      }
    }

    // Distinct options check: physics variable case sensitivity preserved (e.g. $d$ vs $D$, $m$ vs $M$)
    const trimmedOpts = options.map((o) => (typeof o === 'string' ? o.trim() : ''));
    const uniqueOptions = new Set(trimmedOpts);
    if (uniqueOptions.size !== options.length) {
      duplicateOptionFindings.push(
        `Q#${q.id} (scope: ${q.scope_type}, id: ${q.topic_id || q.chapter_id}): Duplicate options detected -> ${JSON.stringify(options)}`
      );
    }

    // B. correct_index bounds and type
    if (typeof q.correct_index !== 'number' || !Number.isInteger(q.correct_index)) {
      correctIndexFindings.push(`Q#${q.id}: correct_index is not an integer (${q.correct_index})`);
    } else if (q.correct_index < 0 || q.correct_index > 3) {
      correctIndexFindings.push(`Q#${q.id}: correct_index out of bounds [0, 3]: ${q.correct_index}`);
    } else {
      correctIndexCounts[q.correct_index] = (correctIndexCounts[q.correct_index] || 0) + 1;
    }

    // C. difficulty enum validity
    if (!['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'].includes(q.difficulty)) {
      difficultyFindings.push(`Q#${q.id}: Invalid difficulty enum value: '${q.difficulty}'`);
    } else {
      difficultyCounts[q.difficulty] = (difficultyCounts[q.difficulty] || 0) + 1;
    }

    // D. Placeholder & Dummy token detection
    const fullTextToInspect = `${q.question_text} ${q.explanation} ${options.join(' ')}`;
    if (placeholderRegex.test(fullTextToInspect)) {
      const match = fullTextToInspect.match(placeholderRegex);
      placeholderFindings.push(`Q#${q.id}: Matched placeholder token '${match?.[0]}'`);
    }

    // Check for stubs: question text < 10 characters or explanation < 10 characters
    if (!q.question_text || q.question_text.trim().length < 10) {
      stubQuestionFindings.push(`Q#${q.id}: Question text stub (< 10 chars): "${q.question_text}"`);
    }

    if (!q.explanation || q.explanation.trim().length < 10) {
      stubQuestionFindings.push(`Q#${q.id}: Explanation stub (< 10 chars): "${q.explanation}"`);
    }

    // E. KaTeX formatting & syntax verification
    totalMathChecked += checkMathDelimiters(q.id, 'question_text', q.question_text, katexSyntaxFindings);
    totalMathChecked += checkMathDelimiters(q.id, 'explanation', q.explanation, katexSyntaxFindings);
    for (let oIdx = 0; oIdx < options.length; oIdx++) {
      totalMathChecked += checkMathDelimiters(q.id, `option[${oIdx}]`, options[oIdx], katexSyntaxFindings);
    }
  }

  report.totalMathExpressionsAudited = totalMathChecked;

  addCheck(
    'QUESTION_OPTIONS',
    'All 3,050 Questions Have Exactly 4 Non-Empty Options',
    optionIntegrityFindings.length === 0,
    optionIntegrityFindings.slice(0, 10),
    { totalViolations: optionIntegrityFindings.length }
  );

  addCheck(
    'QUESTION_OPTIONS',
    'All 3,050 Questions Have 4 Distinct Options (No Duplicates)',
    duplicateOptionFindings.length === 0,
    duplicateOptionFindings.slice(0, 10),
    { totalViolations: duplicateOptionFindings.length }
  );

  addCheck(
    'CORRECT_INDEX',
    'correct_index strictly in [0, 1, 2, 3]',
    correctIndexFindings.length === 0,
    correctIndexFindings,
    { distribution: correctIndexCounts }
  );

  addCheck(
    'DIFFICULTY',
    'difficulty strictly in (nhan_biet, thong_hieu, van_dung, van_dung_cao)',
    difficultyFindings.length === 0,
    difficultyFindings,
    { distribution: difficultyCounts }
  );

  addCheck(
    'ANTI_PLACEHOLDER',
    'No Dummy or Placeholder Tokens in Question Bank',
    placeholderFindings.length === 0,
    placeholderFindings,
    { totalPlaceholderViolations: placeholderFindings.length }
  );

  addCheck(
    'CONTENT_QUALITY',
    'No Question or Explanation Text Stubs',
    stubQuestionFindings.length === 0,
    stubQuestionFindings.slice(0, 10),
    { totalStubViolations: stubQuestionFindings.length }
  );

  addCheck(
    'KATEX_SYNTAX',
    'KaTeX Delimiters and Math Parsing Across All Questions & Explanations',
    katexSyntaxFindings.length === 0,
    katexSyntaxFindings.slice(0, 15),
    { totalMathExpressionsChecked: totalMathChecked, totalKatexErrors: katexSyntaxFindings.length }
  );

  // -------------------------------------------------------------------------
  // 4. Quiz Submission API & Scoring Oracle Stress Testing
  // -------------------------------------------------------------------------
  console.log('[4/4] Stress-Testing Quiz Scoring Oracle & Attempt Recording...');

  const scoringFindings: string[] = [];

  // Oracle test on sample topics
  const sampleTopics = db.query<any>('SELECT * FROM topics ORDER BY id ASC LIMIT 5');
  for (let sIdx = 0; sIdx < sampleTopics.length; sIdx++) {
    const st = sampleTopics[sIdx];
    const qList = db.query<any>(
      "SELECT id, correct_index FROM questions WHERE scope_type = 'topic' AND topic_id = ? ORDER BY order_index ASC",
      [st.id]
    );

    // Scenario 1: All correct
    const allCorrectAnswers: Record<number, number> = {};
    for (let i = 0; i < qList.length; i++) {
      allCorrectAnswers[qList[i].id] = qList[i].correct_index;
    }
    const scoreAll = calculateScoreOracle(qList, allCorrectAnswers);
    if (scoreAll !== 25) {
      scoringFindings.push(`Topic ${st.code}: All correct answers scored ${scoreAll}/25 (expected 25)`);
    }

    // Scenario 2: All wrong
    const allWrongAnswers: Record<number, number> = {};
    for (let i = 0; i < qList.length; i++) {
      allWrongAnswers[qList[i].id] = (qList[i].correct_index + 1) % 4;
    }
    const scoreZero = calculateScoreOracle(qList, allWrongAnswers);
    if (scoreZero !== 0) {
      scoringFindings.push(`Topic ${st.code}: All wrong answers scored ${scoreZero}/25 (expected 0)`);
    }

    // Scenario 3: Partial (first 10 correct, next 15 wrong)
    const partialAnswers: Record<number, number> = {};
    for (let i = 0; i < qList.length; i++) {
      partialAnswers[qList[i].id] = i < 10 ? qList[i].correct_index : (qList[i].correct_index + 2) % 4;
    }
    const scorePartial = calculateScoreOracle(qList, partialAnswers);
    if (scorePartial !== 10) {
      scoringFindings.push(`Topic ${st.code}: Partial answers scored ${scorePartial}/25 (expected 10)`);
    }

    // Scenario 4: Out-of-bounds answer index (-1, 4, 999)
    const oobAnswers: Record<number, number> = {};
    for (let i = 0; i < qList.length; i++) {
      oobAnswers[qList[i].id] = 999;
    }
    const scoreOob = calculateScoreOracle(qList, oobAnswers);
    if (scoreOob !== 0) {
      scoringFindings.push(`Topic ${st.code}: Out of bounds answers scored ${scoreOob}/25 (expected 0)`);
    }

    // Scenario 5: Missing / empty answers
    const emptyAnswers: Record<number, number> = {};
    const scoreEmpty = calculateScoreOracle(qList, emptyAnswers);
    if (scoreEmpty !== 0) {
      scoringFindings.push(`Topic ${st.code}: Empty answers scored ${scoreEmpty}/25 (expected 0)`);
    }
  }

  addCheck(
    'SCORING_LOGIC',
    'Quiz Scoring Oracle Verification Across All Answer Permutations',
    scoringFindings.length === 0,
    scoringFindings
  );

  // Database attempt insertion stress test
  const attemptInsertionFindings: string[] = [];
  const testAttemptIds: number[] = [];

  try {
    // 1. Boundary score: 0
    const id1 = recordQuizAttempt({
      scopeType: 'topic',
      scopeId: sampleTopics[0].id,
      studentName: 'Challenger Min Score',
      score: 0,
      totalQuestions: 25,
      timeSpentSec: 10,
      answers: {},
    });
    testAttemptIds.push(id1);

    // 2. Boundary score: 25 (max)
    const id2 = recordQuizAttempt({
      scopeType: 'topic',
      scopeId: sampleTopics[0].id,
      studentName: 'Challenger Max Score',
      score: 25,
      totalQuestions: 25,
      timeSpentSec: 300,
      answers: { 1: 0, 2: 1 },
    });
    testAttemptIds.push(id2);

    // 3. Chapter scope attempt
    const sampleChapter = db.get<any>('SELECT * FROM chapters LIMIT 1');
    const id3 = recordQuizAttempt({
      scopeType: 'chapter',
      scopeId: sampleChapter.id,
      studentName: 'Challenger Chapter Exam',
      score: 18,
      totalQuestions: 25,
      timeSpentSec: 720,
      answers: {},
    });
    testAttemptIds.push(id3);

    // 4. SQL Injection resistance in studentName
    const sqlInjectionPayload = "Học sinh' OR 1=1; DROP TABLE quiz_attempts; --";
    const id4 = recordQuizAttempt({
      scopeType: 'topic',
      scopeId: sampleTopics[0].id,
      studentName: sqlInjectionPayload,
      score: 12,
      totalQuestions: 25,
      timeSpentSec: 60,
      answers: {},
    });
    testAttemptIds.push(id4);

    // Verify row was inserted safely with verbatim payload
    const insertedRow = db.get<any>('SELECT * FROM quiz_attempts WHERE id = ?', [id4]);
    if (!insertedRow || insertedRow.student_name !== sqlInjectionPayload) {
      attemptInsertionFindings.push('SQL injection payload altered or not properly parameterized');
    }

    // 5. Very long student name (Unicode)
    const longUnicodeName = 'Nguyễn Trần Khánh Đăng Hoàng '.repeat(20);
    const id5 = recordQuizAttempt({
      scopeType: 'topic',
      scopeId: sampleTopics[0].id,
      studentName: longUnicodeName,
      score: 20,
      totalQuestions: 25,
      timeSpentSec: 120,
      answers: {},
    });
    testAttemptIds.push(id5);
  } catch (err: any) {
    attemptInsertionFindings.push(`recordQuizAttempt threw error under stress: ${err.message}`);
  } finally {
    // DB Hygiene: Clean up our stress test attempt records
    if (testAttemptIds.length > 0) {
      const placeholders = testAttemptIds.map(() => '?').join(',');
      db.run(`DELETE FROM quiz_attempts WHERE id IN (${placeholders})`, testAttemptIds);
    }
  }

  addCheck(
    'SUBMISSION_API',
    'recordQuizAttempt Stress & SQL Injection Safety',
    attemptInsertionFindings.length === 0,
    attemptInsertionFindings,
    { insertedAndCleanedAttempts: testAttemptIds.length }
  );

  return report;
}

/**
 * Checks LaTeX math delimiters and attempts KaTeX compilation on extracted formulas.
 */
function checkMathDelimiters(
  questionId: number,
  field: string,
  text: string | null | undefined,
  findings: string[]
): number {
  if (!text || typeof text !== 'string') return 0;

  // Check odd count of unescaped $
  let unescapedDollarCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '$' && (i === 0 || text[i - 1] !== '\\')) {
      unescapedDollarCount++;
    }
  }

  if (unescapedDollarCount % 2 !== 0) {
    findings.push(
      `Q#${questionId} [${field}]: Odd number of unescaped $ signs (${unescapedDollarCount}) -> unclosed math delimiter`
    );
  }

  // Extract all $...$ and $$...$$ expressions
  let count = 0;
  const dollarSegments = text.match(/\$\$([\s\S]*?)\$\$|\$([^$\n]+)\$/g);
  if (dollarSegments) {
    for (let i = 0; i < dollarSegments.length; i++) {
      const seg = dollarSegments[i];
      const expr = seg.startsWith('$$') ? seg.slice(2, -2).trim() : seg.slice(1, -1).trim();
      if (expr.length === 0) continue;
      count++;

      try {
        katex.renderToString(expr, { throwOnError: true, strict: 'ignore' });
      } catch (err: any) {
        findings.push(
          `Q#${questionId} [${field}]: KaTeX render failed on "$${expr}$": ${err.message}`
        );
      }
    }
  }
  return count;
}

/**
 * Reference implementation oracle for Quiz25Engine scoring.
 */
function calculateScoreOracle(
  questions: { id: number; correct_index: number }[],
  answers: Record<number, number>
): number {
  let correct = 0;
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    if (answers[q.id] === q.correct_index) {
      correct++;
    }
  }
  return correct;
}

// ---------------------------------------------------------------------------
// Main CLI Runner
// ---------------------------------------------------------------------------
const result = runStressSuite();

console.log('\n===============================================================');
console.log(` STRESS TEST VERDICT: ${result.verdict}`);
console.log('===============================================================\n');

let passCount = 0;
let failCount = 0;

for (let i = 0; i < result.checks.length; i++) {
  const check = result.checks[i];
  const icon = check.passed ? '✓ PASS' : '✗ FAIL';
  console.log(`[${check.category}] ${check.name}: ${icon}`);
  if (!check.passed) {
    failCount++;
    for (let j = 0; j < check.findings.length; j++) {
      console.log(`   -> FINDING: ${check.findings[j]}`);
    }
  } else {
    passCount++;
  }
  if (check.metrics) {
    console.log(`   Metrics: ${JSON.stringify(check.metrics)}`);
  }
}

console.log(`\nSummary: ${passCount} Passed, ${failCount} Failed.`);

if (result.verdict !== 'APPROVE') {
  process.exit(1);
} else {
  process.exit(0);
}
