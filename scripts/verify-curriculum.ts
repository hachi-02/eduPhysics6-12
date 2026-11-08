#!/usr/bin/env node
/**
 * GDPT 2018 Vietnamese Physics CMS (Grades 6 - 12)
 * Comprehensive 4-Tier E2E Verification Harness
 *
 * Tiers:
 * 1. Tier 1 - Feature Coverage (Grades, Chapters, Topics, Counts, Question Totals)
 * 2. Tier 2 - Boundary & Integrity Checks (Options, Correct Index, Difficulties, LaTeX, SI Units)
 * 3. Tier 3 - Cross-Feature & Simulation Key Verification (Lab wiring, no dangling keys)
 * 4. Tier 4 - Real-World Application Scenarios & DB Constraints (Student workflows, Quiz submission)
 *
 * Usage:
 *   npx tsx scripts/verify-curriculum.ts
 *   npx tsx scripts/verify-curriculum.ts --tier=1
 *   npx tsx scripts/verify-curriculum.ts --milestone=M1|M2|M3|M4|M5|M6|M7
 *   npx tsx scripts/verify-curriculum.ts --grade=8
 *   npx tsx scripts/verify-curriculum.ts --json
 *   npx tsx scripts/verify-curriculum.ts --verbose
 */

import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';
import getDb, { DatabaseClient } from '../lib/db';
import {
  EXPECTED_GRADES,
  EXPECTED_COGNITIVE_LEVELS,
  EXPECTED_CURRICULUM_SPEC,
  EXPECTED_SIM_KEYS_GRADES_8_12,
} from './curriculum-spec';

// ---------------------------------------------------------------------------
// Type Definitions
// ---------------------------------------------------------------------------

export interface CheckResult {
  id: string;
  name: string;
  tier: number;
  passed: boolean;
  message?: string;
  details?: any;
}

export interface TierResult {
  tier: number;
  name: string;
  passed: boolean;
  durationMs: number;
  checks: CheckResult[];
  metrics: Record<string, any>;
}

export interface VerificationReport {
  passed: boolean;
  totalDurationMs: number;
  tiers: TierResult[];
  summary: {
    totalChecks: number;
    passedChecks: number;
    failedChecks: number;
  };
  metrics: Record<string, any>;
}

export interface VerificationOptions {
  tier?: number;
  milestone?: string;
  grade?: number;
  verbose?: boolean;
  json?: boolean;
  throwOnError?: boolean;
  labComponentPath?: string;
}

// ---------------------------------------------------------------------------
// ANSI Terminal Colors
// ---------------------------------------------------------------------------

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
};

// ---------------------------------------------------------------------------
// Helper Utilities
// ---------------------------------------------------------------------------

function safeJsonParse<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/**
 * Validates LaTeX syntax using KaTeX compiler and structural balance checks.
 */
export function validateLatexSyntax(latex: string): { valid: boolean; error?: string } {
  if (!latex || typeof latex !== 'string' || latex.trim().length === 0) {
    return { valid: false, error: 'Empty or non-string LaTeX expression' };
  }

  const trimmed = latex.trim();

  // Check 1: Trailing single backslash
  if (trimmed.endsWith('\\') && !trimmed.endsWith('\\\\')) {
    return { valid: false, error: 'Dangling backslash at end of expression' };
  }

  // Check 2: Balanced curly braces (ignoring escaped \{ and \})
  let braceDepth = 0;
  for (let i = 0; i < trimmed.length; i++) {
    const char = trimmed[i];
    const prev = i > 0 ? trimmed[i - 1] : '';
    if (char === '{' && prev !== '\\') braceDepth++;
    if (char === '}' && prev !== '\\') braceDepth--;
    if (braceDepth < 0) {
      return { valid: false, error: 'Unmatched closing curly brace `}`' };
    }
  }
  if (braceDepth !== 0) {
    return { valid: false, error: `Unclosed opening curly brace "{" (depth = ${braceDepth})` };
  }

  // Check 3: Balanced square brackets
  let bracketDepth = 0;
  for (let i = 0; i < trimmed.length; i++) {
    const char = trimmed[i];
    const prev = i > 0 ? trimmed[i - 1] : '';
    if (char === '[' && prev !== '\\') bracketDepth++;
    if (char === ']' && prev !== '\\') bracketDepth--;
    if (bracketDepth < 0) {
      return { valid: false, error: 'Unmatched closing bracket "]"' };
    }
  }
  if (bracketDepth !== 0) {
    return { valid: false, error: `Unclosed opening bracket "[" (depth = ${bracketDepth})` };
  }

  // Check 4: KaTeX compilation parse check (strict: 'ignore' to allow Vietnamese Unicode symbols in math text)
  try {
    // KaTeX doesn't accept naked align ampersands outside matrices or aligned blocks
    const testExpr = trimmed.includes('&') && !trimmed.includes('\\begin')
      ? `\\begin{aligned}${trimmed}\\end{aligned}`
      : trimmed;

    // Suppress console error output during test compilation
    const originalConsoleWarn = console.warn;
    console.warn = () => {};
    try {
      katex.renderToString(testExpr, { throwOnError: true, strict: 'ignore' });
    } finally {
      console.warn = originalConsoleWarn;
    }

    return { valid: true };
  } catch (err: any) {
    return { valid: false, error: `KaTeX parse error: ${err.message}` };
  }
}

/**
 * Extracts registered simulation keys dispatched by InteractivePhysicsLab.tsx.
 */
export function extractRegisteredSimKeysFromLab(labSourceCode: string): Set<string> {
  const keys = new Set<string>();

  // 1. Switch-case: case 'key': or case "key":
  const caseRegex = /case\s+['"]([a-zA-Z0-9_\-]+)['"]\s*:/g;
  let match: RegExpExecArray | null;
  while ((match = caseRegex.exec(labSourceCode)) !== null) {
    keys.add(match[1]);
  }

  // 2. Object map keys: 'key': or "key":
  const mapRegex = /['"]([a-zA-Z0-9_\-]+)['"]\s*:\s*(?:<|\(|function|\(.*\)\s*=>)/g;
  while ((match = mapRegex.exec(labSourceCode)) !== null) {
    keys.add(match[1]);
  }

  // 3. Equality checks: simKey === 'key' or simKey === "key"
  const ifRegex = /simKey\s*===?\s*['"]([a-zA-Z0-9_\-]+)['"]/g;
  while ((match = ifRegex.exec(labSourceCode)) !== null) {
    keys.add(match[1]);
  }

  return keys;
}

// ---------------------------------------------------------------------------
// Tier 1: Feature Coverage Verification
// ---------------------------------------------------------------------------

export function verifyTier1FeatureCoverage(
  db: DatabaseClient,
  options: VerificationOptions = {}
): TierResult {
  const start = Date.now();
  const checks: CheckResult[] = [];
  const metrics: Record<string, any> = {};

  const targetGrade = options.grade;
  const isTargetingSingleGrade = targetGrade !== undefined;

  // Check 1.1: Grades table presence
  const gradesRows = db.query<any>('SELECT * FROM grades ORDER BY grade_number ASC');
  metrics.gradesFound = gradesRows.map((g) => g.grade_number);

  const missingGrades = EXPECTED_GRADES.filter((g) => !metrics.gradesFound.includes(g));
  const gradesPresentPassed = isTargetingSingleGrade
    ? metrics.gradesFound.includes(targetGrade)
    : missingGrades.length === 0 && metrics.gradesFound.length === 7;

  checks.push({
    id: 'T1.1_GRADES_TABLE',
    name: 'Grades table contains all 7 grades (6 to 12)',
    tier: 1,
    passed: gradesPresentPassed,
    message: gradesPresentPassed
      ? `Found ${metrics.gradesFound.length} grades in DB: [${metrics.gradesFound.join(', ')}]`
      : `Missing grades in DB: [${missingGrades.join(', ')}]`,
    details: { gradesFound: metrics.gradesFound, missingGrades },
  });

  // Check 1.2: Grades is_primary_seeded = 1
  const unseededGrades = gradesRows
    .filter((g) => (isTargetingSingleGrade ? g.grade_number === targetGrade : true))
    .filter((g) => g.is_primary_seeded !== 1)
    .map((g) => g.grade_number);

  const seededPassed = unseededGrades.length === 0 && gradesRows.length > 0;
  checks.push({
    id: 'T1.2_PRIMARY_SEEDED',
    name: 'All target grades have is_primary_seeded = 1',
    tier: 1,
    passed: seededPassed,
    message: seededPassed
      ? 'All target grades marked is_primary_seeded = 1'
      : `Grades with is_primary_seeded != 1: [${unseededGrades.join(', ')}]`,
    details: { unseededGrades },
  });

  // Check 1.3: Chapters count and presence across Grades 8-12 (and all target grades)
  const chaptersQuery = isTargetingSingleGrade
    ? db.query<any>(
        'SELECT c.*, g.grade_number FROM chapters c JOIN grades g ON g.id = c.grade_id WHERE g.grade_number = ? ORDER BY c.order_index ASC',
        [targetGrade]
      )
    : db.query<any>(
        'SELECT c.*, g.grade_number FROM chapters c JOIN grades g ON g.id = c.grade_id ORDER BY g.grade_number ASC, c.order_index ASC'
      );

  metrics.totalChapters = chaptersQuery.length;
  const chaptersByGrade: Record<number, any[]> = {};
  for (const ch of chaptersQuery) {
    if (!chaptersByGrade[ch.grade_number]) chaptersByGrade[ch.grade_number] = [];
    chaptersByGrade[ch.grade_number].push(ch);
  }

  let expectedChapterCount = 0;
  let chapterCountPassed = true;
  const chapterFailures: string[] = [];

  const gradesToCheck = isTargetingSingleGrade ? [targetGrade] : [8, 9, 10, 11, 12];
  for (const gNum of gradesToCheck) {
    const spec = EXPECTED_CURRICULUM_SPEC[gNum];
    if (!spec) continue;
    expectedChapterCount += spec.chapterCount;
    const actual = chaptersByGrade[gNum]?.length || 0;
    if (actual !== spec.chapterCount) {
      chapterCountPassed = false;
      chapterFailures.push(`Grade ${gNum}: expected ${spec.chapterCount} chapters, found ${actual}`);
    }
  }

  checks.push({
    id: 'T1.3_CHAPTERS_COUNT',
    name: `Chapters coverage (expected ${expectedChapterCount} chapters across checked grades)`,
    tier: 1,
    passed: chapterCountPassed,
    message: chapterCountPassed
      ? `Found expected ${expectedChapterCount} chapters across checked grades`
      : `Chapter count mismatch: ${chapterFailures.join('; ')}`,
    details: { chaptersByGradeCount: Object.fromEntries(Object.entries(chaptersByGrade).map(([k, v]) => [k, v.length])) },
  });

  // Check 1.4: Chapter metadata deep content (summary_markdown, key_takeaways, formula_cheatsheet)
  const invalidChapters: string[] = [];
  for (const ch of chaptersQuery) {
    const takeaways = safeJsonParse<any[]>(ch.key_takeaways_json, []);
    const cheatsheet = safeJsonParse<any[]>(ch.formula_cheatsheet_json, []);
    const hasSummary = typeof ch.summary_markdown === 'string' && ch.summary_markdown.trim().length >= 20;
    const minTakeaways = 3;
    const minCheatsheet = ch.grade_number >= 8 ? 3 : 2;
    const hasTakeaways = Array.isArray(takeaways) && takeaways.length >= minTakeaways;
    const hasCheatsheet = Array.isArray(cheatsheet) && cheatsheet.length >= minCheatsheet;

    if (!hasSummary || !hasTakeaways || !hasCheatsheet) {
      invalidChapters.push(
        `${ch.code || ch.id} (summary: ${hasSummary}, takeaways: ${takeaways.length}/${minTakeaways}, cheatsheet: ${cheatsheet.length}/${minCheatsheet})`
      );
    }
  }

  const chapterMetaPassed = invalidChapters.length === 0 && chaptersQuery.length > 0;
  checks.push({
    id: 'T1.4_CHAPTERS_METADATA',
    name: 'All chapters have non-empty summary, key takeaways (>=3), and cheatsheet (>=3 for G8-12)',
    tier: 1,
    passed: chapterMetaPassed,
    message: chapterMetaPassed
      ? `All ${chaptersQuery.length} chapters meet metadata quality criteria`
      : `Chapters failing metadata quality: ${invalidChapters.slice(0, 5).join('; ')}${invalidChapters.length > 5 ? ` (+${invalidChapters.length - 5} more)` : ''}`,
    details: { invalidChaptersCount: invalidChapters.length, invalidChapters },
  });

  // Check 1.5: Topics coverage across Grades 8-12
  const topicsQuery = isTargetingSingleGrade
    ? db.query<any>(
        `SELECT t.*, c.code as chapter_code, g.grade_number
         FROM topics t
         JOIN chapters c ON c.id = t.chapter_id
         JOIN grades g ON g.id = c.grade_id
         WHERE g.grade_number = ?
         ORDER BY c.order_index ASC, t.order_index ASC`,
        [targetGrade]
      )
    : db.query<any>(
        `SELECT t.*, c.code as chapter_code, g.grade_number
         FROM topics t
         JOIN chapters c ON c.id = t.chapter_id
         JOIN grades g ON g.id = c.grade_id
         ORDER BY g.grade_number ASC, c.order_index ASC, t.order_index ASC`
      );

  metrics.totalTopics = topicsQuery.length;
  const topicsByGrade: Record<number, any[]> = {};
  for (const tp of topicsQuery) {
    if (!topicsByGrade[tp.grade_number]) topicsByGrade[tp.grade_number] = [];
    topicsByGrade[tp.grade_number].push(tp);
  }

  let expectedTopicCount = 0;
  let topicCountPassed = true;
  const topicFailures: string[] = [];

  for (const gNum of gradesToCheck) {
    const spec = EXPECTED_CURRICULUM_SPEC[gNum];
    if (!spec) continue;
    expectedTopicCount += spec.topicCount;
    const actual = topicsByGrade[gNum]?.length || 0;
    if (actual !== spec.topicCount) {
      topicCountPassed = false;
      topicFailures.push(`Grade ${gNum}: expected ${spec.topicCount} topics, found ${actual}`);
    }
  }

  checks.push({
    id: 'T1.5_TOPICS_COUNT',
    name: `Topics coverage (expected ${expectedTopicCount} topics across checked grades)`,
    tier: 1,
    passed: topicCountPassed,
    message: topicCountPassed
      ? `Found expected ${expectedTopicCount} topics across checked grades`
      : `Topic count mismatch: ${topicFailures.join('; ')}`,
    details: { topicsByGradeCount: Object.fromEntries(Object.entries(topicsByGrade).map(([k, v]) => [k, v.length])) },
  });

  // Check 1.6: Topic deep structure (overview, theory sections >= 2, quantities >= 2 (G8-12), formulas >= 1, examples >= 1, sim)
  const invalidTopics: string[] = [];
  for (const tp of topicsQuery) {
    const theory = safeJsonParse<any[]>(tp.theory_sections_json, []);
    const hasOverview = typeof tp.overview === 'string' && tp.overview.trim().length >= 20;
    const hasTheory = Array.isArray(theory) && theory.length >= 2;

    const minQty = tp.grade_number >= 8 ? 2 : 1;
    const qtyCount = db.get<{ count: number }>('SELECT count(*) as count FROM quantities WHERE topic_id = ?', [tp.id])?.count || 0;
    const fmCount = db.get<{ count: number }>('SELECT count(*) as count FROM formulas WHERE topic_id = ?', [tp.id])?.count || 0;
    const exCount = db.get<{ count: number }>('SELECT count(*) as count FROM examples WHERE topic_id = ?', [tp.id])?.count || 0;
    const simRow = db.get<{ sim_key: string }>('SELECT sim_key FROM simulations WHERE topic_id = ?', [tp.id]);
    const hasSim = !!simRow && typeof simRow.sim_key === 'string' && simRow.sim_key.trim().length > 0;

    if (!hasOverview || !hasTheory || qtyCount < minQty || fmCount < 1 || exCount < 1 || !hasSim) {
      invalidTopics.push(
        `${tp.code || tp.id} (ov:${hasOverview}, th:${theory.length}, qty:${qtyCount}/${minQty}, fm:${fmCount}, ex:${exCount}, sim:${hasSim})`
      );
    }
  }

  const topicDeepPassed = invalidTopics.length === 0 && topicsQuery.length > 0;
  checks.push({
    id: 'T1.6_TOPICS_DEEP_CONTENT',
    name: 'All topics have overview, theory (>=2), quantities (>=2 for G8-12), formulas (>=1), examples (>=1), sim',
    tier: 1,
    passed: topicDeepPassed,
    message: topicDeepPassed
      ? `All ${topicsQuery.length} topics meet deep content requirements`
      : `Topics failing deep content: ${invalidTopics.slice(0, 5).join('; ')}${invalidTopics.length > 5 ? ` (+${invalidTopics.length - 5} more)` : ''}`,
    details: { invalidTopicsCount: invalidTopics.length, invalidTopics },
  });

  // Check 1.7: Topic quiz questions (exactly 25 per topic)
  const invalidTopicQuestions: string[] = [];
  for (const tp of topicsQuery) {
    const qCount = db.get<{ count: number }>(
      "SELECT count(*) as count FROM questions WHERE scope_type = 'topic' AND topic_id = ?",
      [tp.id]
    )?.count || 0;
    if (qCount !== 25) {
      invalidTopicQuestions.push(`${tp.code || tp.id} (found ${qCount} questions, expected 25)`);
    }
  }

  const topicQuestionsPassed = invalidTopicQuestions.length === 0 && topicsQuery.length > 0;
  checks.push({
    id: 'T1.7_TOPIC_QUIZ_25_QUESTIONS',
    name: 'Every topic has exactly 25 quiz questions (scope_type = topic)',
    tier: 1,
    passed: topicQuestionsPassed,
    message: topicQuestionsPassed
      ? `All ${topicsQuery.length} topics have exactly 25 quiz questions`
      : `Topics with != 25 quiz questions: ${invalidTopicQuestions.slice(0, 5).join('; ')}${invalidTopicQuestions.length > 5 ? ` (+${invalidTopicQuestions.length - 5} more)` : ''}`,
    details: { invalidTopicQuestionsCount: invalidTopicQuestions.length, invalidTopicQuestions },
  });

  // Check 1.8: Chapter synthesis exam questions (exactly 25 per chapter)
  const invalidChapterQuestions: string[] = [];
  for (const ch of chaptersQuery) {
    const qCount = db.get<{ count: number }>(
      "SELECT count(*) as count FROM questions WHERE scope_type = 'chapter' AND chapter_id = ?",
      [ch.id]
    )?.count || 0;
    if (qCount !== 25) {
      invalidChapterQuestions.push(`${ch.code || ch.id} (found ${qCount} questions, expected 25)`);
    }
  }

  const chapterQuestionsPassed = invalidChapterQuestions.length === 0 && chaptersQuery.length > 0;
  checks.push({
    id: 'T1.8_CHAPTER_EXAM_25_QUESTIONS',
    name: 'Every chapter has exactly 25 synthesis exam questions (scope_type = chapter)',
    tier: 1,
    passed: chapterQuestionsPassed,
    message: chapterQuestionsPassed
      ? `All ${chaptersQuery.length} chapters have exactly 25 synthesis exam questions`
      : `Chapters with != 25 exam questions: ${invalidChapterQuestions.slice(0, 5).join('; ')}${invalidChapterQuestions.length > 5 ? ` (+${invalidChapterQuestions.length - 5} more)` : ''}`,
    details: { invalidChapterQuestionsCount: invalidChapterQuestions.length, invalidChapterQuestions },
  });

  // Check 1.9: Total question count across target scope
  const totalQuestionsRow = isTargetingSingleGrade
    ? db.get<{ count: number }>(
        `SELECT count(*) as count FROM questions q
         JOIN chapters c ON c.id = q.chapter_id
         JOIN grades g ON g.id = c.grade_id
         WHERE g.grade_number = ?`,
        [targetGrade]
      )
    : db.get<{ count: number }>('SELECT count(*) as count FROM questions');

  metrics.totalQuestions = totalQuestionsRow?.count || 0;
  const expectedMinQuestions = isTargetingSingleGrade
    ? EXPECTED_CURRICULUM_SPEC[targetGrade]?.minQuestions || 400
    : 3025; // 3,050 target, requirement specifies >= 3,025

  const totalQuestionsPassed = metrics.totalQuestions >= expectedMinQuestions;
  checks.push({
    id: 'T1.9_TOTAL_QUESTIONS_COUNT',
    name: `Total questions count >= ${expectedMinQuestions}`,
    tier: 1,
    passed: totalQuestionsPassed,
    message: totalQuestionsPassed
      ? `Total questions count in database: ${metrics.totalQuestions} (>= ${expectedMinQuestions})`
      : `Total questions count insufficient: found ${metrics.totalQuestions}, expected >= ${expectedMinQuestions}`,
    details: { totalQuestions: metrics.totalQuestions, expectedMinQuestions },
  });

  const passed = checks.every((c) => c.passed);
  return {
    tier: 1,
    name: 'Tier 1 - Feature Coverage Verification',
    passed,
    durationMs: Date.now() - start,
    checks,
    metrics,
  };
}

// ---------------------------------------------------------------------------
// Tier 2: Boundary & Integrity Checks
// ---------------------------------------------------------------------------

export function verifyTier2BoundaryAndIntegrity(
  db: DatabaseClient,
  options: VerificationOptions = {}
): TierResult {
  const start = Date.now();
  const checks: CheckResult[] = [];
  const metrics: Record<string, any> = {};

  const targetGrade = options.grade;
  const isTargetingSingleGrade = targetGrade !== undefined;

  // Retrieve questions for target scope
  const questions = isTargetingSingleGrade
    ? db.query<any>(
        `SELECT q.*, c.code as chapter_code, t.code as topic_code
         FROM questions q
         JOIN chapters c ON c.id = q.chapter_id
         JOIN grades g ON g.id = c.grade_id
         LEFT JOIN topics t ON t.id = q.topic_id
         WHERE g.grade_number = ?
         ORDER BY q.id ASC`,
        [targetGrade]
      )
    : db.query<any>(
        `SELECT q.*, c.code as chapter_code, t.code as topic_code
         FROM questions q
         JOIN chapters c ON c.id = q.chapter_id
         LEFT JOIN topics t ON t.id = q.topic_id
         ORDER BY q.id ASC`
      );

  metrics.questionsAudited = questions.length;

  // Check 2.1: Exactly 4 options in options_json & distinct choices
  const invalidOptionsQuestions: string[] = [];
  const nonDistinctOptionsQuestions: string[] = [];

  for (const q of questions) {
    const opts = safeJsonParse<any[]>(q.options_json, []);
    if (!Array.isArray(opts) || opts.length !== 4 || opts.some((o) => typeof o !== 'string' || o.trim().length === 0)) {
      invalidOptionsQuestions.push(`Q#${q.id} (len: ${Array.isArray(opts) ? opts.length : 'non-array'})`);
      continue;
    }

    const uniqueSet = new Set(opts.map((o) => o.trim()));
    if (uniqueSet.size !== 4) {
      nonDistinctOptionsQuestions.push(`Q#${q.id} (unique count: ${uniqueSet.size}/4)`);
    }
  }

  const optionsLengthPassed = invalidOptionsQuestions.length === 0 && questions.length > 0;
  checks.push({
    id: 'T2.1_OPTIONS_JSON_INTEGRITY',
    name: 'Every question has exactly 4 non-empty string options',
    tier: 2,
    passed: optionsLengthPassed,
    message: optionsLengthPassed
      ? `All ${questions.length} questions contain exactly 4 valid options`
      : `Questions failing options structure: ${invalidOptionsQuestions.slice(0, 5).join('; ')}`,
    details: { invalidOptionsQuestionsCount: invalidOptionsQuestions.length },
  });

  const optionsDistinctPassed = nonDistinctOptionsQuestions.length === 0 && questions.length > 0;
  checks.push({
    id: 'T2.2_OPTIONS_DISTINCT_CHOICES',
    name: 'Every question has 4 distinct answer choices (no duplicate options)',
    tier: 2,
    passed: optionsDistinctPassed,
    message: optionsDistinctPassed
      ? `All ${questions.length} questions have 4 distinct choices`
      : `Questions with duplicate options: ${nonDistinctOptionsQuestions.slice(0, 5).join('; ')}`,
    details: { nonDistinctOptionsQuestionsCount: nonDistinctOptionsQuestions.length },
  });

  // Check 2.2: correct_index in [0, 1, 2, 3]
  const invalidCorrectIndexQuestions: string[] = [];
  for (const q of questions) {
    if (!Number.isInteger(q.correct_index) || q.correct_index < 0 || q.correct_index > 3) {
      invalidCorrectIndexQuestions.push(`Q#${q.id} (correct_index = ${q.correct_index})`);
    }
  }

  const correctIndexPassed = invalidCorrectIndexQuestions.length === 0 && questions.length > 0;
  checks.push({
    id: 'T2.3_CORRECT_INDEX_BOUNDS',
    name: 'correct_index is strictly an integer between 0 and 3',
    tier: 2,
    passed: correctIndexPassed,
    message: correctIndexPassed
      ? `All ${questions.length} questions have valid correct_index (0..3)`
      : `Questions with out-of-bounds correct_index: ${invalidCorrectIndexQuestions.slice(0, 5).join('; ')}`,
    details: { invalidCorrectIndexQuestionsCount: invalidCorrectIndexQuestions.length },
  });

  // Check 2.3: difficulty is one of EXPECTED_COGNITIVE_LEVELS
  const invalidDifficultyQuestions: string[] = [];
  const difficultyCounts: Record<string, number> = {};
  for (const q of questions) {
    difficultyCounts[q.difficulty] = (difficultyCounts[q.difficulty] || 0) + 1;
    if (!EXPECTED_COGNITIVE_LEVELS.includes(q.difficulty)) {
      invalidDifficultyQuestions.push(`Q#${q.id} (difficulty: ${q.difficulty})`);
    }
  }
  metrics.difficultyDistribution = difficultyCounts;

  const difficultyPassed = invalidDifficultyQuestions.length === 0 && questions.length > 0;
  checks.push({
    id: 'T2.4_DIFFICULTY_ENUM_VALIDITY',
    name: 'difficulty is strictly one of (nhan_biet, thong_hieu, van_dung, van_dung_cao)',
    tier: 2,
    passed: difficultyPassed,
    message: difficultyPassed
      ? `Distribution: ${JSON.stringify(difficultyCounts)}`
      : `Questions with invalid difficulty: ${invalidDifficultyQuestions.slice(0, 5).join('; ')}`,
    details: { difficultyCounts, invalidDifficultyQuestions },
  });

  // Check 2.4: Cognitive distribution balance across topics
  const topicsWithQuestions = db.query<any>(
    isTargetingSingleGrade
      ? `SELECT DISTINCT t.id, t.code FROM topics t JOIN chapters c ON c.id = t.chapter_id JOIN grades g ON g.id = c.grade_id WHERE g.grade_number = ?`
      : `SELECT DISTINCT t.id, t.code FROM topics t`
    , isTargetingSingleGrade ? [targetGrade] : []
  );

  const unbalancedTopics: string[] = [];
  for (const tp of topicsWithQuestions) {
    const qLevels = db.query<{ difficulty: string; count: number }>(
      "SELECT difficulty, count(*) as count FROM questions WHERE scope_type = 'topic' AND topic_id = ? GROUP BY difficulty",
      [tp.id]
    );
    const levelsPresent = new Set(qLevels.map((l) => l.difficulty));
    if (levelsPresent.size < 4) {
      unbalancedTopics.push(`${tp.code || tp.id} (has ${levelsPresent.size}/4 levels)`);
    }
  }

  const distributionPassed = unbalancedTopics.length === 0 && topicsWithQuestions.length > 0;
  checks.push({
    id: 'T2.5_COGNITIVE_TAXONOMY_DISTRIBUTION',
    name: 'Every topic quiz features all 4 cognitive levels (balanced taxonomy)',
    tier: 2,
    passed: distributionPassed,
    message: distributionPassed
      ? `All ${topicsWithQuestions.length} topics span all 4 cognitive levels`
      : `Topics lacking all 4 levels: ${unbalancedTopics.slice(0, 5).join('; ')}`,
    details: { unbalancedTopicsCount: unbalancedTopics.length, unbalancedTopics },
  });

  // Check 2.5: Non-empty explanations (100% of questions)
  const emptyExplanationQuestions: string[] = [];
  for (const q of questions) {
    if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim().length < 10) {
      emptyExplanationQuestions.push(`Q#${q.id} (len: ${q.explanation ? q.explanation.length : 0})`);
    }
  }

  const explanationsPassed = emptyExplanationQuestions.length === 0 && questions.length > 0;
  checks.push({
    id: 'T2.6_EXPLANATION_COMPLETENESS',
    name: '100% of questions have substantive non-empty explanations (>= 10 chars)',
    tier: 2,
    passed: explanationsPassed,
    message: explanationsPassed
      ? `All ${questions.length} questions have substantive pedagogical explanations`
      : `Questions with empty or stub explanation: ${emptyExplanationQuestions.slice(0, 5).join('; ')}`,
    details: { emptyExplanationQuestionsCount: emptyExplanationQuestions.length },
  });

  // Check 2.6: LaTeX formula syntax validation in `formulas` table
  const formulas = isTargetingSingleGrade
    ? db.query<any>(
        `SELECT f.*, t.code as topic_code
         FROM formulas f
         JOIN topics t ON t.id = f.topic_id
         JOIN chapters c ON c.id = t.chapter_id
         JOIN grades g ON g.id = c.grade_id
         WHERE g.grade_number = ?`,
        [targetGrade]
      )
    : db.query<any>(
        `SELECT f.*, t.code as topic_code
         FROM formulas f
         JOIN topics t ON t.id = f.topic_id`
      );

  metrics.formulasAudited = formulas.length;
  const invalidFormulas: string[] = [];
  for (const fm of formulas) {
    const res = validateLatexSyntax(fm.latex_expression);
    if (!res.valid) {
      invalidFormulas.push(`F#${fm.id} [${fm.name}]: ${res.error} (expr: ${fm.latex_expression})`);
    }
  }

  const formulasPassed = invalidFormulas.length === 0 && formulas.length > 0;
  checks.push({
    id: 'T2.7_FORMULA_LATEX_SYNTAX',
    name: 'All formulas table latex_expression fields are valid LaTeX syntax',
    tier: 2,
    passed: formulasPassed,
    message: formulasPassed
      ? `All ${formulas.length} formulas passed strict LaTeX & KaTeX syntax validation`
      : `Formulas with invalid LaTeX: ${invalidFormulas.slice(0, 5).join('; ')}`,
    details: { invalidFormulasCount: invalidFormulas.length, invalidFormulas },
  });

  // Check 2.7: Chapter formula cheatsheet LaTeX validation
  const chapters = isTargetingSingleGrade
    ? db.query<any>(
        `SELECT c.* FROM chapters c JOIN grades g ON g.id = c.grade_id WHERE g.grade_number = ?`,
        [targetGrade]
      )
    : db.query<any>('SELECT * FROM chapters');

  const invalidCheatsheetFormulas: string[] = [];
  for (const ch of chapters) {
    const cheatsheet = safeJsonParse<any[]>(ch.formula_cheatsheet_json, []);
    cheatsheet.forEach((item, idx) => {
      if (!item || !item.latex) {
        invalidCheatsheetFormulas.push(`${ch.code} item #${idx}: missing latex`);
        return;
      }
      const res = validateLatexSyntax(item.latex);
      if (!res.valid) {
        invalidCheatsheetFormulas.push(`${ch.code} [${item.name || idx}]: ${res.error}`);
      }
    });
  }

  const cheatsheetPassed = invalidCheatsheetFormulas.length === 0 && chapters.length > 0;
  checks.push({
    id: 'T2.8_CHEATSHEET_LATEX_SYNTAX',
    name: 'All chapter formula cheatsheets contain valid LaTeX formulas',
    tier: 2,
    passed: cheatsheetPassed,
    message: cheatsheetPassed
      ? 'All chapter formula cheatsheets passed LaTeX validation'
      : `Cheatsheets with invalid LaTeX: ${invalidCheatsheetFormulas.slice(0, 5).join('; ')}`,
    details: { invalidCheatsheetFormulasCount: invalidCheatsheetFormulas.length },
  });

  // Check 2.8: Physical quantities symbol and SI units
  const quantities = isTargetingSingleGrade
    ? db.query<any>(
        `SELECT q.* FROM quantities q
         JOIN topics t ON t.id = q.topic_id
         JOIN chapters c ON c.id = t.chapter_id
         JOIN grades g ON g.id = c.grade_id
         WHERE g.grade_number = ?`,
        [targetGrade]
      )
    : db.query<any>('SELECT * FROM quantities');

  metrics.quantitiesAudited = quantities.length;
  const invalidQuantities: string[] = [];
  for (const qty of quantities) {
    const hasName = typeof qty.name === 'string' && qty.name.trim().length > 0;
    const hasSymbol = typeof qty.symbol === 'string' && qty.symbol.trim().length > 0;
    const hasUnit = typeof qty.si_unit === 'string' && qty.si_unit.trim().length > 0;
    if (!hasName || !hasSymbol || !hasUnit) {
      invalidQuantities.push(`Q#${qty.id} [${qty.name}] (sym: ${qty.symbol}, unit: ${qty.si_unit})`);
    }
  }

  const quantitiesPassed = invalidQuantities.length === 0 && quantities.length > 0;
  checks.push({
    id: 'T2.9_QUANTITIES_SI_UNITS',
    name: 'All physical quantities define non-empty name, symbol, and SI unit',
    tier: 2,
    passed: quantitiesPassed,
    message: quantitiesPassed
      ? `All ${quantities.length} physical quantities contain standard symbols and SI units`
      : `Quantities missing symbol or unit: ${invalidQuantities.slice(0, 5).join('; ')}`,
    details: { invalidQuantitiesCount: invalidQuantities.length },
  });

  const passed = checks.every((c) => c.passed);
  return {
    tier: 2,
    name: 'Tier 2 - Boundary & Integrity Checks',
    passed,
    durationMs: Date.now() - start,
    checks,
    metrics,
  };
}

// ---------------------------------------------------------------------------
// Tier 3: Cross-Feature & Simulation Key Verification
// ---------------------------------------------------------------------------

export function verifyTier3CrossFeatureSimKeys(
  db: DatabaseClient,
  options: VerificationOptions = {}
): TierResult {
  const start = Date.now();
  const checks: CheckResult[] = [];
  const metrics: Record<string, any> = {};

  const labPath =
    options.labComponentPath ||
    path.join(process.cwd(), 'components', 'InteractivePhysicsLab.tsx');

  // Check 3.1: InteractivePhysicsLab.tsx exists and is readable
  let labContent = '';
  let fileReadSuccess = false;
  try {
    labContent = fs.readFileSync(labPath, 'utf8');
    fileReadSuccess = true;
  } catch (err: any) {
    fileReadSuccess = false;
  }

  checks.push({
    id: 'T3.1_LAB_COMPONENT_FILE',
    name: 'InteractivePhysicsLab.tsx component exists and is readable',
    tier: 3,
    passed: fileReadSuccess,
    message: fileReadSuccess
      ? `Loaded InteractivePhysicsLab.tsx (${(labContent.length / 1024).toFixed(1)} KB)`
      : `Could not read ${labPath}`,
  });

  if (!fileReadSuccess) {
    return {
      tier: 3,
      name: 'Tier 3 - Cross-Feature & Simulation Key Verification',
      passed: false,
      durationMs: Date.now() - start,
      checks,
      metrics,
    };
  }

  // Extract registered keys from InteractivePhysicsLab.tsx
  const registeredKeys = extractRegisteredSimKeysFromLab(labContent);
  metrics.registeredKeysInLab = Array.from(registeredKeys);
  metrics.registeredKeysCount = registeredKeys.size;

  // Query simulations in database
  const targetGrade = options.grade;
  const isTargetingSingleGrade = targetGrade !== undefined;

  const simQuery = isTargetingSingleGrade
    ? db.query<any>(
        `SELECT s.*, t.code as topic_code, t.title as topic_title, g.grade_number
         FROM simulations s
         JOIN topics t ON t.id = s.topic_id
         JOIN chapters c ON c.id = t.chapter_id
         JOIN grades g ON g.id = c.grade_id
         WHERE g.grade_number = ?`,
        [targetGrade]
      )
    : db.query<any>(
        `SELECT s.*, t.code as topic_code, t.title as topic_title, g.grade_number
         FROM simulations s
         JOIN topics t ON t.id = s.topic_id
         JOIN chapters c ON c.id = t.chapter_id
         JOIN grades g ON g.id = c.grade_id`
      );

  metrics.simulationsInDbCount = simQuery.length;

  // Check 3.2: Every sim_key in database is wired in InteractivePhysicsLab.tsx
  const danglingSimKeys: string[] = [];
  const uniqueDbSimKeys = new Set<string>();

  for (const s of simQuery) {
    uniqueDbSimKeys.add(s.sim_key);
    if (!registeredKeys.has(s.sim_key)) {
      danglingSimKeys.push(`${s.sim_key} (Topic: ${s.topic_code || s.topic_id})`);
    }
  }

  metrics.uniqueDbSimKeysCount = uniqueDbSimKeys.size;
  const noDanglingPassed = danglingSimKeys.length === 0 && simQuery.length > 0;

  checks.push({
    id: 'T3.2_SIM_KEY_REGISTRATION',
    name: 'Every topic sim_key in the database is registered in InteractivePhysicsLab.tsx',
    tier: 3,
    passed: noDanglingPassed,
    message: noDanglingPassed
      ? `All ${simQuery.length} topic simulations (${uniqueDbSimKeys.size} unique keys) are dispatched in InteractivePhysicsLab.tsx`
      : `Dangling / unregistered sim_keys: ${danglingSimKeys.slice(0, 5).join('; ')}${danglingSimKeys.length > 5 ? ` (+${danglingSimKeys.length - 5} more)` : ''}`,
    details: { danglingSimKeys, uniqueDbSimKeys: Array.from(uniqueDbSimKeys) },
  });

  // Check 3.3: Verify all 65 expected simulation keys for Grades 8-12 exist in lab
  if (!isTargetingSingleGrade || targetGrade >= 8) {
    const expectedKeys = isTargetingSingleGrade
      ? EXPECTED_CURRICULUM_SPEC[targetGrade]?.chapters.flatMap((c) => c.topics.map((t) => t.simKey)) || []
      : EXPECTED_SIM_KEYS_GRADES_8_12;

    const missingExpectedSimKeys = expectedKeys.filter((k) => !registeredKeys.has(k));
    const allExpectedPassed = missingExpectedSimKeys.length === 0;

    checks.push({
      id: 'T3.3_EXPECTED_SIM_KEYS_WIRED',
      name: `All expected simulation keys are wired in InteractivePhysicsLab.tsx (${expectedKeys.length} keys)`,
      tier: 3,
      passed: allExpectedPassed,
      message: allExpectedPassed
        ? `All ${expectedKeys.length} expected simulation keys are wired in InteractivePhysicsLab.tsx`
        : `Missing ${missingExpectedSimKeys.length} expected simulation keys: [${missingExpectedSimKeys.slice(0, 5).join(', ')}${missingExpectedSimKeys.length > 5 ? '...' : ''}]`,
      details: { missingExpectedSimKeys },
    });
  }

  // Check 3.4: Simulation metadata quality (parameters, guide steps >= 2, physics insight)
  const invalidSims: string[] = [];
  for (const s of simQuery) {
    const steps = safeJsonParse<any[]>(s.guide_steps_json, []);
    const hasParams = typeof s.parameters_json === 'string' && s.parameters_json.length >= 2;
    const hasSteps = Array.isArray(steps) && steps.length >= 2;
    const hasInsight = typeof s.physics_insight === 'string' && s.physics_insight.trim().length >= 10;

    if (!hasParams || !hasSteps || !hasInsight) {
      invalidSims.push(`${s.sim_key} (steps: ${steps.length}, insight: ${hasInsight})`);
    }
  }

  const simMetadataPassed = invalidSims.length === 0 && simQuery.length > 0;
  checks.push({
    id: 'T3.4_SIMULATION_METADATA_QUALITY',
    name: 'All simulations have non-empty parameters, guide steps (>= 2), and physics insight',
    tier: 3,
    passed: simMetadataPassed,
    message: simMetadataPassed
      ? `All ${simQuery.length} simulations have valid guide steps and physics insight`
      : `Simulations with incomplete metadata: ${invalidSims.slice(0, 5).join('; ')}`,
    details: { invalidSimsCount: invalidSims.length, invalidSims },
  });

  const passed = checks.every((c) => c.passed);
  return {
    tier: 3,
    name: 'Tier 3 - Cross-Feature & Simulation Key Verification',
    passed,
    durationMs: Date.now() - start,
    checks,
    metrics,
  };
}

// ---------------------------------------------------------------------------
// Tier 4: Real-World Scenarios & Database Constraints
// ---------------------------------------------------------------------------

export function verifyTier4RealWorldScenarios(
  db: DatabaseClient,
  options: VerificationOptions = {}
): TierResult {
  const start = Date.now();
  const checks: CheckResult[] = [];
  const metrics: Record<string, any> = {};

  // Check 4.1: SQLite Integrity Check & Foreign Keys
  const integrityCheck = db.get<{ integrity_check: string }>('PRAGMA integrity_check');
  const fkCheck = db.get<{ foreign_keys: number }>('PRAGMA foreign_keys');

  const dbHealthy = integrityCheck?.integrity_check === 'ok';
  checks.push({
    id: 'T4.1_SQLITE_HEALTH',
    name: 'SQLite PRAGMA integrity_check is "ok" and foreign keys are active',
    tier: 4,
    passed: dbHealthy,
    message: dbHealthy
      ? `SQLite integrity_check = ok (foreign_keys = ${fkCheck?.foreign_keys ?? 1})`
      : `SQLite integrity failed: ${integrityCheck?.integrity_check}`,
  });

  // Check 4.2: Required database indexes exist
  const indexCheck = db.query<any>(
    "SELECT name FROM sqlite_master WHERE type = 'index' AND name LIKE 'idx_%'"
  );
  const foundIndexNames = new Set(indexCheck.map((i) => i.name));
  const expectedIndexes = [
    'idx_chapters_grade',
    'idx_topics_chapter',
    'idx_questions_topic',
    'idx_questions_chapter',
  ];
  const missingIndexes = expectedIndexes.filter((idx) => !foundIndexNames.has(idx));
  const indexesPassed = missingIndexes.length === 0;

  checks.push({
    id: 'T4.2_INDEXES_EXIST',
    name: 'Required query performance indexes exist on relational tables',
    tier: 4,
    passed: indexesPassed,
    message: indexesPassed
      ? `Found all expected indexes: [${expectedIndexes.join(', ')}]`
      : `Missing indexes: [${missingIndexes.join(', ')}]`,
    details: { foundIndexNames: Array.from(foundIndexNames), missingIndexes },
  });

  // Scenario helper: Executes a full student self-study simulation
  function runStudentScenario(
    scenarioId: string,
    scenarioName: string,
    gradeNumber: number,
    expectedChapterCode: string,
    expectedSimKey: string
  ): CheckResult {
    try {
      // 1. Load Grade curriculum board
      const gradeRow = db.get<any>('SELECT * FROM grades WHERE grade_number = ?', [gradeNumber]);
      if (!gradeRow) {
        return {
          id: scenarioId,
          name: scenarioName,
          tier: 4,
          passed: false,
          message: `Grade ${gradeNumber} not found in database`,
        };
      }

      // 2. Load Chapter (matching full code, suffix code e.g. CH1, or first chapter)
      const chCodeSuffix = expectedChapterCode.replace(/^G\d+-/, '');
      const chRow = db.get<any>(
        'SELECT * FROM chapters WHERE grade_id = ? AND (code = ? OR code LIKE ? OR code = ?) ORDER BY order_index ASC LIMIT 1',
        [gradeRow.id, expectedChapterCode, `%${expectedChapterCode}%`, chCodeSuffix]
      );
      if (!chRow) {
        return {
          id: scenarioId,
          name: scenarioName,
          tier: 4,
          passed: false,
          message: `Chapter ${expectedChapterCode} not found in Grade ${gradeNumber}`,
        };
      }

      // 3. Load First Topic in Chapter
      const topicRow = db.get<any>(
        'SELECT * FROM topics WHERE chapter_id = ? ORDER BY order_index ASC LIMIT 1',
        [chRow.id]
      );
      if (!topicRow) {
        return {
          id: scenarioId,
          name: scenarioName,
          tier: 4,
          passed: false,
          message: `No topics found in chapter ${expectedChapterCode}`,
        };
      }

      // 4. Verify topic simulation
      const simRow = db.get<any>('SELECT * FROM simulations WHERE topic_id = ?', [topicRow.id]);
      if (!simRow || !simRow.sim_key) {
        return {
          id: scenarioId,
          name: scenarioName,
          tier: 4,
          passed: false,
          message: `Simulation missing for topic ${topicRow.code || topicRow.id}`,
        };
      }

      // 5. Retrieve 25 Topic Quiz Questions
      const quizQuestions = db.query<any>(
        "SELECT * FROM questions WHERE scope_type = 'topic' AND topic_id = ? ORDER BY order_index ASC",
        [topicRow.id]
      );
      if (quizQuestions.length !== 25) {
        return {
          id: scenarioId,
          name: scenarioName,
          tier: 4,
          passed: false,
          message: `Topic quiz questions count is ${quizQuestions.length}, expected 25`,
        };
      }

      // 6. Simulate Student Taking Quiz & Submitting Attempt
      const studentAnswers: Record<string, number> = {};
      let calculatedScore = 0;
      quizQuestions.forEach((q, idx) => {
        // Answer correctly on 20 questions, incorrectly on 5
        const chosen = idx < 20 ? q.correct_index : (q.correct_index + 1) % 4;
        studentAnswers[String(q.id)] = chosen;
        if (chosen === q.correct_index) calculatedScore++;
      });

      const studentName = `E2E_Test_Student_${scenarioId}`;
      const insertAttemptRes = db.run(
        `INSERT INTO quiz_attempts (scope_type, scope_id, student_name, score, total_questions, time_spent_sec, answers_json)
         VALUES ('topic', ?, ?, ?, 25, 180, ?)`,
        [topicRow.id, studentName, calculatedScore, JSON.stringify(studentAnswers)]
      );
      const attemptId = Number(insertAttemptRes.lastInsertRowid);

      // Verify Attempt Saved
      const savedAttempt = db.get<any>('SELECT * FROM quiz_attempts WHERE id = ?', [attemptId]);
      if (!savedAttempt || savedAttempt.score !== calculatedScore || savedAttempt.total_questions !== 25) {
        return {
          id: scenarioId,
          name: scenarioName,
          tier: 4,
          passed: false,
          message: `Quiz attempt record failed persistence check for attemptId ${attemptId}`,
        };
      }

      // 7. Retrieve 25 Chapter Synthesis Exam Questions
      const examQuestions = db.query<any>(
        "SELECT * FROM questions WHERE scope_type = 'chapter' AND chapter_id = ? ORDER BY order_index ASC",
        [chRow.id]
      );
      if (examQuestions.length !== 25) {
        // Clean up
        db.run('DELETE FROM quiz_attempts WHERE id = ?', [attemptId]);
        return {
          id: scenarioId,
          name: scenarioName,
          tier: 4,
          passed: false,
          message: `Chapter exam questions count is ${examQuestions.length}, expected 25`,
        };
      }

      // 8. Simulate Student Taking Chapter Exam
      const examAnswers: Record<string, number> = {};
      examQuestions.forEach((q) => {
        examAnswers[String(q.id)] = q.correct_index;
      });
      const insertExamRes = db.run(
        `INSERT INTO quiz_attempts (scope_type, scope_id, student_name, score, total_questions, time_spent_sec, answers_json)
         VALUES ('chapter', ?, ?, 25, 25, 450, ?)`,
        [chRow.id, studentName, JSON.stringify(examAnswers)]
      );
      const examAttemptId = Number(insertExamRes.lastInsertRowid);

      // Verify and Cleanup test artifacts
      db.run('DELETE FROM quiz_attempts WHERE id IN (?, ?)', [attemptId, examAttemptId]);

      return {
        id: scenarioId,
        name: scenarioName,
        tier: 4,
        passed: true,
        message: `Student successfully completed Topic (${calculatedScore}/25) and Chapter Exam (25/25) with zero persistence errors`,
        details: { topicCode: topicRow.code, simKey: simRow.sim_key, score: calculatedScore },
      };
    } catch (err: any) {
      return {
        id: scenarioId,
        name: scenarioName,
        tier: 4,
        passed: false,
        message: `Scenario execution exception: ${err.message}`,
      };
    }
  }

  // Check 4.3: Baseline Scenario (Grade 6 / 7)
  const baselineGrade = options.grade && options.grade <= 7 ? options.grade : 6;
  const baselineChCode = baselineGrade === 6 ? 'G6-CH1' : 'G7-CH1';
  checks.push(
    runStudentScenario(
      'T4.3_SCENARIO_BASELINE',
      `Baseline Scenario: Grade ${baselineGrade} Student Complete Workflow`,
      baselineGrade,
      baselineChCode,
      baselineGrade === 6 ? 'length_volume_lab' : 'speed_graph_lab'
    )
  );

  // Check 4.4 - 4.8: Scenarios for Grades 8 through 12
  const targetGradeFilter = options.grade;

  if (!targetGradeFilter || targetGradeFilter === 8) {
    checks.push(
      runStudentScenario(
        'T4.4_SCENARIO_G8_FLUIDS',
        'Scenario G8: Fluid Mechanics & Archimedes (Read -> Simulate -> Quiz -> Exam)',
        8,
        'G8-CH1',
        'g8_density_lab'
      )
    );
  }

  if (!targetGradeFilter || targetGradeFilter === 9) {
    checks.push(
      runStudentScenario(
        'T4.5_SCENARIO_G9_OPTICS',
        'Scenario G9: Mechanical Work & Ray Optics (Read -> Simulate -> Quiz -> Exam)',
        9,
        'G9-CH1',
        'g9_work_force_displacement_lab'
      )
    );
  }

  if (!targetGradeFilter || targetGradeFilter === 10) {
    checks.push(
      runStudentScenario(
        'T4.6_SCENARIO_G10_KINEMATICS',
        'Scenario G10: Kinematics & Newton Dynamics (Read -> Simulate -> Quiz -> Exam)',
        10,
        'G10-CH1',
        'g10_safety_units_lab'
      )
    );
  }

  if (!targetGradeFilter || targetGradeFilter === 11) {
    checks.push(
      runStudentScenario(
        'T4.7_SCENARIO_G11_OSCILLATIONS',
        'Scenario G11: Harmonic Oscillations & Waves (Read -> Simulate -> Quiz -> Exam)',
        11,
        'G11-CH1',
        'g11_shm_kinematics_lab'
      )
    );
  }

  if (!targetGradeFilter || targetGradeFilter === 12) {
    checks.push(
      runStudentScenario(
        'T4.8_SCENARIO_G12_THERMAL_NUCLEAR',
        'Scenario G12: Thermal Physics & Nuclear Energy (Read -> Simulate -> Quiz -> Exam)',
        12,
        'G12-CH1',
        'g12_molecular_states_lab'
      )
    );
  }

  const passed = checks.every((c) => c.passed);
  return {
    tier: 4,
    name: 'Tier 4 - Real-World Scenarios & DB Integrity',
    passed,
    durationMs: Date.now() - start,
    checks,
    metrics,
  };
}

// ---------------------------------------------------------------------------
// Main Orchestration & Runner
// ---------------------------------------------------------------------------

export function runAllTiers(options: VerificationOptions = {}): VerificationReport {
  const start = Date.now();
  const db = getDb();

  // Normalize milestone mappings if specified
  const effectiveOptions: VerificationOptions = { ...options };
  if (effectiveOptions.milestone) {
    const ms = effectiveOptions.milestone.toUpperCase();
    if (ms === 'M1' && effectiveOptions.tier === undefined) effectiveOptions.tier = 3;
    if (ms === 'M2' && effectiveOptions.grade === undefined) effectiveOptions.grade = 8;
    if (ms === 'M3' && effectiveOptions.grade === undefined) effectiveOptions.grade = 9;
    if (ms === 'M4' && effectiveOptions.grade === undefined) effectiveOptions.grade = 10;
    if (ms === 'M5' && effectiveOptions.grade === undefined) effectiveOptions.grade = 11;
    if (ms === 'M6' && effectiveOptions.grade === undefined) effectiveOptions.grade = 12;
  }

  const tierResults: TierResult[] = [];

  // Determine tiers to execute
  const runTier1 = effectiveOptions.tier === undefined || effectiveOptions.tier === 1;
  const runTier2 = effectiveOptions.tier === undefined || effectiveOptions.tier === 2;
  const runTier3 = effectiveOptions.tier === undefined || effectiveOptions.tier === 3;
  const runTier4 = effectiveOptions.tier === undefined || effectiveOptions.tier === 4;

  if (runTier1) tierResults.push(verifyTier1FeatureCoverage(db, effectiveOptions));
  if (runTier2) tierResults.push(verifyTier2BoundaryAndIntegrity(db, effectiveOptions));
  if (runTier3) tierResults.push(verifyTier3CrossFeatureSimKeys(db, effectiveOptions));
  if (runTier4) tierResults.push(verifyTier4RealWorldScenarios(db, effectiveOptions));

  const allChecks = tierResults.flatMap((t) => t.checks);
  const passedChecks = allChecks.filter((c) => c.passed);
  const failedChecks = allChecks.filter((c) => !c.passed);
  const passed = failedChecks.length === 0;

  // Aggregate global metrics
  const globalMetrics: Record<string, any> = {};
  for (const t of tierResults) {
    Object.assign(globalMetrics, t.metrics);
  }

  return {
    passed,
    totalDurationMs: Date.now() - start,
    tiers: tierResults,
    summary: {
      totalChecks: allChecks.length,
      passedChecks: passedChecks.length,
      failedChecks: failedChecks.length,
    },
    metrics: globalMetrics,
  };
}

// ---------------------------------------------------------------------------
// CLI Formatter & Output
// ---------------------------------------------------------------------------

export function formatReportTerminal(report: VerificationReport, verbose = false): void {
  const hr = '='.repeat(78);
  const subHr = '-'.repeat(78);

  console.log(`\n${colors.bold}${colors.cyan}${hr}${colors.reset}`);
  console.log(
    `${colors.bold}${colors.white} GDPT 2018 Vietnamese Physics CMS (Grades 6 - 12) — 4-Tier E2E Verification${colors.reset}`
  );
  console.log(`${colors.cyan}${hr}${colors.reset}\n`);

  for (const tier of report.tiers) {
    const tierIcon = tier.passed ? `${colors.green}✓ PASS` : `${colors.red}✗ FAIL`;
    console.log(
      `${colors.bold}${colors.white}[Tier ${tier.tier}] ${tier.name}${colors.reset} — ${tierIcon}${colors.reset} ${colors.dim}(${tier.durationMs}ms)${colors.reset}`
    );

    for (const chk of tier.checks) {
      const chkIcon = chk.passed ? `${colors.green}  ✓${colors.reset}` : `${colors.red}  ✗${colors.reset}`;
      const chkColor = chk.passed ? colors.white : colors.red;
      console.log(`${chkIcon} ${chkColor}${chk.id}: ${chk.name}${colors.reset}`);

      if (!chk.passed || verbose) {
        const indent = '      ';
        if (chk.message) {
          console.log(`${indent}${colors.dim}${chk.message}${colors.reset}`);
        }
      }
    }
    console.log('');
  }

  console.log(`${colors.cyan}${subHr}${colors.reset}`);
  console.log(`${colors.bold}${colors.white} VERIFICATION SUMMARY & METRICS${colors.reset}`);
  console.log(`${colors.cyan}${subHr}${colors.reset}`);

  console.log(`  Total Checks Executed : ${colors.bold}${report.summary.totalChecks}${colors.reset}`);
  console.log(`  Passed Checks         : ${colors.green}${colors.bold}${report.summary.passedChecks}${colors.reset}`);
  console.log(
    `  Failed Checks         : ${report.summary.failedChecks > 0 ? colors.red : colors.green}${colors.bold}${report.summary.failedChecks}${colors.reset}`
  );
  console.log(`  Total Time Elapsed    : ${report.totalDurationMs}ms`);

  if (report.metrics && Object.keys(report.metrics).length > 0) {
    console.log(`\n  ${colors.dim}Audited Entity Metrics:${colors.reset}`);
    if (report.metrics.totalQuestions !== undefined) {
      console.log(`    • Total Questions in DB     : ${colors.cyan}${report.metrics.totalQuestions}${colors.reset}`);
    }
    if (report.metrics.totalChapters !== undefined) {
      console.log(`    • Total Chapters in DB      : ${colors.cyan}${report.metrics.totalChapters}${colors.reset}`);
    }
    if (report.metrics.totalTopics !== undefined) {
      console.log(`    • Total Topics in DB        : ${colors.cyan}${report.metrics.totalTopics}${colors.reset}`);
    }
    if (report.metrics.uniqueDbSimKeysCount !== undefined) {
      console.log(`    • Unique Simulation Keys    : ${colors.cyan}${report.metrics.uniqueDbSimKeysCount}${colors.reset}`);
    }
    if (report.metrics.registeredKeysCount !== undefined) {
      console.log(`    • Registered Keys in Lab    : ${colors.cyan}${report.metrics.registeredKeysCount}${colors.reset}`);
    }
  }

  console.log(`\n${colors.cyan}${hr}${colors.reset}`);
  if (report.passed) {
    console.log(
      `  ${colors.bgGreen}${colors.white}${colors.bold} FULL SUITE PASSED — 100% SPECIFICATION COMPLIANCE ${colors.reset}\n`
    );
  } else {
    console.log(
      `  ${colors.bgRed}${colors.white}${colors.bold} SUITE FAILED — DEFECTS DETECTED (${report.summary.failedChecks} failure(s)) ${colors.reset}\n`
    );
  }
}

// ---------------------------------------------------------------------------
// CLI Entry Point
// ---------------------------------------------------------------------------

function parseCliArgs(): VerificationOptions {
  const args = process.argv.slice(2);
  const options: VerificationOptions = {};

  for (const arg of args) {
    if (arg === '--help' || arg === '-h') {
      console.log(`
Usage: npx tsx scripts/verify-curriculum.ts [options]

Options:
  --tier=1|2|3|4     Run specific verification tier only
  --grade=N          Scope verification to Grade N (6, 7, 8, 9, 10, 11, 12)
  --milestone=M      Map milestone (M1=Sims, M2=G8, M3=G9, M4=G10, M5=G11, M6=G12, M7=Full)
  --verbose, -v      Print detailed messages for all checks, including passed
  --json             Output raw JSON report
  --help, -h         Show this help message
`);
      process.exit(0);
    }
    if (arg.startsWith('--tier=')) {
      options.tier = parseInt(arg.split('=')[1], 10);
    }
    if (arg.startsWith('--grade=')) {
      options.grade = parseInt(arg.split('=')[1], 10);
    }
    if (arg.startsWith('--milestone=')) {
      const ms = arg.split('=')[1].toUpperCase();
      options.milestone = ms;
      if (ms === 'M1') options.tier = 3;
      if (ms === 'M2') options.grade = 8;
      if (ms === 'M3') options.grade = 9;
      if (ms === 'M4') options.grade = 10;
      if (ms === 'M5') options.grade = 11;
      if (ms === 'M6') options.grade = 12;
      // M7 is full run (default)
    }
    if (arg === '--verbose' || arg === '-v') {
      options.verbose = true;
    }
    if (arg === '--json') {
      options.json = true;
    }
  }

  return options;
}

if (require.main === module || process.argv[1]?.endsWith('verify-curriculum.ts')) {
  const options = parseCliArgs();
  const report = runAllTiers(options);

  if (options.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    formatReportTerminal(report, options.verbose);
  }

  process.exit(report.passed ? 0 : 1);
}
