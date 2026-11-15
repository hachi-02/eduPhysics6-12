/**
 * Vitest Test Suite: GDPT 2018 Vietnamese Physics CMS (Grades 6 - 12)
 * Integrates with the 4-Tier Verification Harness in `scripts/verify-curriculum.ts`.
 */

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import getDb from '../lib/db';
import {
  validateLatexSyntax,
  extractRegisteredSimKeysFromLab,
  verifyTier1FeatureCoverage,
  verifyTier2BoundaryAndIntegrity,
  verifyTier3CrossFeatureSimKeys,
  verifyTier4RealWorldScenarios,
  runAllTiers,
} from '../scripts/verify-curriculum';
import {
  EXPECTED_GRADES,
  EXPECTED_SIM_KEYS_GRADES_8_12,
} from '../scripts/curriculum-spec';

describe('Tier 1: Database Schema & Feature Coverage Baseline', () => {
  const db = getDb();

  it('contains all 7 grades (6 to 12) in the grades table', () => {
    const grades = db.query<any>('SELECT grade_number, title, level_group FROM grades ORDER BY grade_number ASC');
    const gradeNumbers = grades.map((g) => g.grade_number);
    expect(gradeNumbers).toEqual(EXPECTED_GRADES);

    // Verify level groups: 6-9 are THCS, 10-12 are THPT
    for (const g of grades) {
      if (g.grade_number <= 9) {
        expect(g.level_group).toBe('THCS');
      } else {
        expect(g.level_group).toBe('THPT');
      }
    }
  });

  it('has primary seeded status on all grades 6 through 12', () => {
    const grades = db.query<any>('SELECT grade_number, is_primary_seeded FROM grades ORDER BY grade_number ASC');
    expect(grades.length).toBe(7);
    for (const g of grades) {
      expect(g.is_primary_seeded).toBe(1);
    }
  });

  it('verifies all 92 topics across all 7 grades have exactly 25 quiz questions each', () => {
    const topics = db.query<any>(
      `SELECT t.id, t.code, g.grade_number, count(q.id) as q_count
       FROM topics t
       JOIN chapters c ON c.id = t.chapter_id
       JOIN grades g ON g.id = c.grade_id
       LEFT JOIN questions q ON q.scope_type = 'topic' AND q.topic_id = t.id
       GROUP BY t.id`
    );
    expect(topics.length).toBe(92);
    for (const tp of topics) {
      expect(tp.q_count).toBe(25);
    }
  });

  it('verifies all 30 chapters across all 7 grades have exactly 25 synthesis exam questions each', () => {
    const chapters = db.query<any>(
      `SELECT c.id, c.code, g.grade_number, count(q.id) as q_count
       FROM chapters c
       JOIN grades g ON g.id = c.grade_id
       LEFT JOIN questions q ON q.scope_type = 'chapter' AND q.chapter_id = c.id
       GROUP BY c.id`
    );
    expect(chapters.length).toBe(30);
    for (const ch of chapters) {
      expect(ch.q_count).toBe(25);
    }
  });
});

describe('Tier 2: Boundary & Integrity Checks', () => {
  const db = getDb();

  describe('Adversarial LaTeX Syntax Validation', () => {
    it('accepts valid mathematical expressions', () => {
      expect(validateLatexSyntax('F = m \\cdot a').valid).toBe(true);
      expect(validateLatexSyntax('v = \\frac{s}{t}').valid).toBe(true);
      expect(validateLatexSyntax('p = \\rho g h').valid).toBe(true);
      expect(validateLatexSyntax('E = mc^2').valid).toBe(true);
      expect(validateLatexSyntax('W_đ = \\frac{1}{2}mv^2').valid).toBe(true);
    });

    it('rejects empty or whitespace-only expressions', () => {
      expect(validateLatexSyntax('').valid).toBe(false);
      expect(validateLatexSyntax('   ').valid).toBe(false);
    });

    it('rejects unclosed or unmatched curly braces', () => {
      expect(validateLatexSyntax('\\frac{a}{b').valid).toBe(false);
      expect(validateLatexSyntax('x = {a + b}}').valid).toBe(false);
    });

    it('rejects unclosed square brackets', () => {
      expect(validateLatexSyntax('\\sqrt[3{x}').valid).toBe(false);
    });

    it('rejects dangling backslashes at the end', () => {
      expect(validateLatexSyntax('F = m a\\').valid).toBe(false);
    });
  });

  describe('Question Bank Integrity across Existing Database', () => {
    it('passes Tier 2 Boundary checks on all seeded questions in DB', () => {
      const res = verifyTier2BoundaryAndIntegrity(db);
      expect(res.passed).toBe(true);
      expect(res.checks.every((c) => c.passed)).toBe(true);
    });

    it('validates every question has distinct options and valid correct_index', () => {
      const qs = db.query<any>('SELECT id, options_json, correct_index FROM questions');
      for (const q of qs) {
        const opts = JSON.parse(q.options_json);
        expect(opts).toHaveLength(4);
        const unique = new Set(opts.map((o: string) => o.trim()));
        expect(unique.size).toBe(4);
        expect(q.correct_index).toBeGreaterThanOrEqual(0);
        expect(q.correct_index).toBeLessThanOrEqual(3);
      }
    });

    it('validates 100% of questions contain explanations', () => {
      const emptyExp = db.query<any>(
        "SELECT id FROM questions WHERE explanation IS NULL OR length(trim(explanation)) < 10"
      );
      expect(emptyExp).toHaveLength(0);
    });
  });
});

describe('Tier 3: Simulation Engine & Lab Wiring', () => {
  const db = getDb();

  it('InteractivePhysicsLab.tsx exists and wires all 65 expected simulation keys', () => {
    const labPath = path.join(process.cwd(), 'components', 'InteractivePhysicsLab.tsx');
    expect(fs.existsSync(labPath)).toBe(true);

    const source = fs.readFileSync(labPath, 'utf8');
    const registeredKeys = extractRegisteredSimKeysFromLab(source);

    // Verify all 65 simulation keys from Grades 8-12
    const missingKeys = EXPECTED_SIM_KEYS_GRADES_8_12.filter((k) => !registeredKeys.has(k));
    expect(missingKeys).toEqual([]);
  });

  it('passes Tier 3 cross-feature verification on existing simulations in DB', () => {
    const res = verifyTier3CrossFeatureSimKeys(db);
    expect(res.passed).toBe(true);
  });
});

describe('Tier 4: Real-World Scenarios & Production Workflows', () => {
  const db = getDb();

  it('verifies SQLite integrity_check is ok and foreign keys are on', () => {
    const integrity = db.get<{ integrity_check: string }>('PRAGMA integrity_check');
    expect(integrity?.integrity_check).toBe('ok');

    const fk = db.get<{ foreign_keys: number }>('PRAGMA foreign_keys');
    expect(fk?.foreign_keys).toBe(1);
  });

  it('verifies performance indexes exist on relational tables', () => {
    const indexes = db.query<any>(
      "SELECT name FROM sqlite_master WHERE type = 'index' AND name LIKE 'idx_%'"
    );
    const names = new Set(indexes.map((i) => i.name));
    expect(names.has('idx_chapters_grade')).toBe(true);
    expect(names.has('idx_topics_chapter')).toBe(true);
    expect(names.has('idx_questions_topic')).toBe(true);
    expect(names.has('idx_questions_chapter')).toBe(true);
  });

  it('executes Grade 6 student complete workflow scenario without errors', () => {
    const res = verifyTier4RealWorldScenarios(db, { grade: 6 });
    expect(res.passed).toBe(true);
    const baselineCheck = res.checks.find((c) => c.id === 'T4.3_SCENARIO_BASELINE');
    expect(baselineCheck?.passed).toBe(true);
  });

  it('executes Grade 7 student complete workflow scenario without errors', () => {
    const res = verifyTier4RealWorldScenarios(db, { grade: 7 });
    expect(res.passed).toBe(true);
    const baselineCheck = res.checks.find((c) => c.id === 'T4.3_SCENARIO_BASELINE');
    expect(baselineCheck?.passed).toBe(true);
  });
});

describe('Progressive Verification Harness Capabilities', () => {
  it('runs progressive verification on Grade 6 with 100% pass', () => {
    const report = runAllTiers({ grade: 6 });
    expect(report.passed).toBe(true);
    expect(report.summary.failedChecks).toBe(0);
    expect(report.summary.passedChecks).toBe(24);
  });

  it('runs progressive verification on Grade 7 with 100% pass', () => {
    const report = runAllTiers({ grade: 7 });
    expect(report.passed).toBe(true);
    expect(report.summary.failedChecks).toBe(0);
    expect(report.summary.passedChecks).toBe(24);
  });

  it('runs Milestone M1 simulation wiring verification with 100% pass', () => {
    const report = runAllTiers({ milestone: 'M1' });
    expect(report.passed).toBe(true);
    expect(report.summary.failedChecks).toBe(0);
  });

  it('runs progressive verification on Grade 8 with 100% pass', () => {
    const report = runAllTiers({ grade: 8 });
    expect(report.passed).toBe(true);
    expect(report.summary.failedChecks).toBe(0);
  });

  it('runs progressive verification on Grade 9 with 100% pass', () => {
    const report = runAllTiers({ grade: 9 });
    expect(report.passed).toBe(true);
    expect(report.summary.failedChecks).toBe(0);
  });

  it('runs progressive verification on Grade 10 with 100% pass', () => {
    const report = runAllTiers({ grade: 10 });
    expect(report.passed).toBe(true);
    expect(report.summary.failedChecks).toBe(0);
  });

  it('runs progressive verification on Grade 11 with 100% pass', () => {
    const report = runAllTiers({ grade: 11 });
    expect(report.passed).toBe(true);
    expect(report.summary.failedChecks).toBe(0);
  });

  it('runs progressive verification on Grade 12 with 100% pass', () => {
    const report = runAllTiers({ grade: 12 });
    expect(report.passed).toBe(true);
    expect(report.summary.failedChecks).toBe(0);
  });

  it('runs full Milestone M7 system verification with 100% pass across all 30 checks', () => {
    const report = runAllTiers();
    expect(report.passed).toBe(true);
    expect(report.summary.failedChecks).toBe(0);
    expect(report.summary.passedChecks).toBe(30);
  });
});
