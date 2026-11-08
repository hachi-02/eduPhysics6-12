# GDPT 2018 Vietnamese Physics CMS (Grades 6 - 12) — Test Suite Ready

**Test Suite Status**: READY FOR ORCHESTRATION & MILESTONE VERIFICATION  
**Author**: teamwork_test_writer  
**Date**: 2026-11-08  
**Working Directory**: `D:\physics_cms_6_12`  

---

## 1. Executive Summary

A comprehensive, production-grade 4-tier E2E verification test harness and Vitest test suite have been implemented to rigorously validate the physics curriculum across Grades 6 through 12, covering:
- **7 Grades**: Grades 6, 7, 8, 9, 10, 11, 12 with `is_primary_seeded = 1`.
- **30 Chapters**: 22 new chapters across Grades 8-12 + 8 existing chapters in Grades 6-7, each with non-empty summary markdown, bullet key takeaways (length >= 3), and formula cheatsheet (length >= 3).
- **92 Topics**: 65 new topics across Grades 8-12 + 27 existing topics in Grades 6-7, each with detailed overview, theory sections (length >= 2), physical quantities (length >= 2), LaTeX formulas (length >= 1), worked examples (length >= 1), and simulation metadata.
- **3,050 Multiple-Choice Questions**: Exactly 25 quiz questions per topic (`scope_type = 'topic'`) + exactly 25 synthesis exam questions per chapter (`scope_type = 'chapter'`) across all 4 Vietnamese cognitive levels (`nhan_biet`, `thong_hieu`, `van_dung`, `van_dung_cao`).
- **65 Domain Simulation Keys**: Dispatched and wired in `components/InteractivePhysicsLab.tsx` with zero dangling or unhandled keys.
- **End-to-End Student Workflows**: Full lifecycle simulation of students navigating chapters, studying theory, inspecting formulas, operating simulations, taking quizzes, submitting attempts, and completing chapter synthesis exams.

---

## 2. Test Execution Commands

### Primary Test Runner (Full 4-Tier Verification Harness)
```bash
# Run full 4-tier verification test suite across all Grades 6-12
npx tsx scripts/verify-curriculum.ts
```

### Companion Vitest Suite
```bash
# Run automated unit, boundary, and regression tests
npm test
# Or directly via vitest
npx vitest run
```

### Progressive Milestone-Specific Verification
Downstream milestone builder agents can run targeted verification commands to independently validate their milestone scope without failing on downstream dependencies:

| Milestone | Command | Target Scope |
|---|---|---|
| **M1** | `npx tsx scripts/verify-curriculum.ts --milestone=M1` | Simulation Engine & 65 `sim_key` dispatch wiring in `InteractivePhysicsLab.tsx` |
| **M2** | `npx tsx scripts/verify-curriculum.ts --milestone=M2` | Grade 8 Curriculum (4 chapters, 12 topics) & 400 Question Bank |
| **M3** | `npx tsx scripts/verify-curriculum.ts --milestone=M3` | Grade 9 Curriculum (4 chapters, 12 topics) & 400 Question Bank |
| **M4** | `npx tsx scripts/verify-curriculum.ts --milestone=M4` | Grade 10 Curriculum (6 chapters, 17 topics) & 575 Question Bank |
| **M5** | `npx tsx scripts/verify-curriculum.ts --milestone=M5` | Grade 11 Curriculum (4 chapters, 12 topics) & 400 Question Bank |
| **M6** | `npx tsx scripts/verify-curriculum.ts --milestone=M6` | Grade 12 Curriculum (4 chapters, 12 topics) & 400 Question Bank |
| **M7** | `npx tsx scripts/verify-curriculum.ts` | Complete system reseed, all 7 grades seeded, and full 4-tier E2E verification |

### CLI Options & Flags
- `--tier=1|2|3|4`: Run a specific verification tier only.
- `--grade=N`: Scope verification to a specific grade (e.g. `--grade=8`).
- `--milestone=M`: Scope verification to a milestone (M1 through M7).
- `--verbose`, `-v`: Print detailed per-check diagnostic output.
- `--json`: Output machine-readable JSON report for automated CI auditing.
- `--help`, `-h`: Display CLI help.

---

## 3. The 4-Tier Verification Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                   4-Tier E2E Verification Harness                      │
│                   `scripts/verify-curriculum.ts`                       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
┌───────────────────────┐       ┌───────────────────────┐       ┌───────────────────────┐
│ Tier 1: Coverage      │       │ Tier 2: Boundary      │       │ Tier 3: Sim Wiring    │
│ - 7 Grades seeded = 1 │       │ - Exactly 4 options   │       │ - AST scan Lab.tsx    │
│ - 22 G8-12 Chapters   │       │ - correct_index 0..3  │       │ - 65 sim_keys wired   │
│ - 65 G8-12 Topics     │       │ - 4 cognitive levels  │       │ - 0 dangling keys     │
│ - 25 Qs per topic/ch  │       │ - Non-empty exp (100%)│       │ - Guide steps >= 2    │
│ - Total Qs >= 3,025   │       │ - KaTeX valid syntax  │       │ - Physics insight     │
└───────────────────────┘       │ - Standard SI units   │       └───────────────────────┘
                                └───────────────────────┘
                                    │
                                    ▼
                        ┌───────────────────────┐
                        │ Tier 4: Scenarios     │
                        │ - SQLite integrity    │
                        │ - FK & Index checks   │
                        │ - Student workflows   │
                        │ - Quiz submission     │
                        │ - Attempt persistence │
                        └───────────────────────┘
```

### Tier 1: Feature Coverage
1. `T1.1_GRADES_TABLE`: Asserts that `grades` table contains 7 grades (6, 7, 8, 9, 10, 11, 12) with accurate `level_group` (`THCS` for 6-9, `THPT` for 10-12).
2. `T1.2_PRIMARY_SEEDED`: Asserts that all target grades have `is_primary_seeded = 1`.
3. `T1.3_CHAPTERS_COUNT`: Asserts exact chapter counts (G8: 4, G9: 4, G10: 6, G11: 4, G12: 4, Total: 22).
4. `T1.4_CHAPTERS_METADATA`: Asserts non-empty summary markdown (>= 20 chars), key takeaways array (>= 3 items), and formula cheatsheet (>= 3 items for G8-12).
5. `T1.5_TOPICS_COUNT`: Asserts exact topic counts (G8: 12, G9: 12, G10: 17, G11: 12, G12: 12, Total: 65).
6. `T1.6_TOPICS_DEEP_CONTENT`: Asserts overview (>= 20 chars), theory sections (>= 2), quantities (>= 2 for G8-12), formulas (>= 1), worked examples (>= 1), and simulation row with valid `sim_key`.
7. `T1.7_TOPIC_QUIZ_25_QUESTIONS`: Asserts that every topic has exactly 25 multiple-choice questions (`scope_type = 'topic'`).
8. `T1.8_CHAPTER_EXAM_25_QUESTIONS`: Asserts that every chapter has exactly 25 synthesis exam questions (`scope_type = 'chapter'`).
9. `T1.9_TOTAL_QUESTIONS_COUNT`: Asserts that total questions in database >= 3,025 (target: 3,050).

### Tier 2: Boundary & Integrity Checks
1. `T2.1_OPTIONS_JSON_INTEGRITY`: Asserts that `options_json` parses to an array of length exactly 4 with non-empty strings.
2. `T2.2_OPTIONS_DISTINCT_CHOICES`: Asserts that all 4 choices per question are distinct (no duplicate choices).
3. `T2.3_CORRECT_INDEX_BOUNDS`: Asserts that `correct_index` is strictly an integer in `{0, 1, 2, 3}`.
4. `T2.4_DIFFICULTY_ENUM_VALIDITY`: Asserts that `difficulty` is one of `'nhan_biet'`, `'thong_hieu'`, `'van_dung'`, `'van_dung_cao'`.
5. `T2.5_COGNITIVE_TAXONOMY_DISTRIBUTION`: Asserts that all 4 cognitive levels are represented in every topic quiz.
6. `T2.6_EXPLANATION_COMPLETENESS`: Asserts that 100% of questions have substantive pedagogical explanations (length >= 10 chars).
7. `T2.7_FORMULA_LATEX_SYNTAX`: Validates all `latex_expression` strings in `formulas` table using structural checks (balanced braces `{}`, brackets `[]`, no dangling `\`) and the KaTeX compiler (`katex.renderToString(expr, { throwOnError: true, strict: 'ignore' })`).
8. `T2.8_CHEATSHEET_LATEX_SYNTAX`: Validates all chapter formula cheatsheet LaTeX expressions using KaTeX.
9. `T2.9_QUANTITIES_SI_UNITS`: Asserts that all physical quantities define non-empty `name`, standard `symbol`, and recognized `si_unit`.

### Tier 3: Cross-Feature & Simulation Key Verification
1. `T3.1_LAB_COMPONENT_FILE`: Verifies that `components/InteractivePhysicsLab.tsx` exists and is readable.
2. `T3.2_SIM_KEY_REGISTRATION`: Scans `InteractivePhysicsLab.tsx` via regex and AST parsers to ensure that every `sim_key` referenced in the SQLite `simulations` table is registered and handled. Zero dangling or unhandled keys permitted.
3. `T3.3_EXPECTED_SIM_KEYS_WIRED`: Verifies that all 65 expected simulation keys for Grades 8 through 12 are wired in `InteractivePhysicsLab.tsx`.
4. `T3.4_SIMULATION_METADATA_QUALITY`: Verifies that each simulation row in SQLite contains valid `parameters_json`, guide steps (>= 2), and physics insight.

### Tier 4: Real-World Scenarios & Database Integrity
1. `T4.1_SQLITE_HEALTH`: Validates SQLite `PRAGMA integrity_check` returns `'ok'` and `PRAGMA foreign_keys` is active (`1`).
2. `T4.2_INDEXES_EXIST`: Verifies performance indexes (`idx_chapters_grade`, `idx_topics_chapter`, `idx_questions_topic`, `idx_questions_chapter`).
3. `T4.3` - `T4.8` Real-World Student Scenarios:
   - Simulates end-to-end student navigation across Grades 6 through 12.
   - Scenario flow: Load grade board -> Load chapter -> Load topic -> Inspect quantities & LaTeX formulas -> Load interactive simulation -> Retrieve 25 quiz questions -> Simulate student quiz submission with calculated score -> Insert attempt into `quiz_attempts` table -> Verify attempt persistence -> Retrieve 25 chapter synthesis exam questions -> Simulate exam submission -> Clean up test attempts.
   - Guarantees 0 dangling records and validates transaction consistency.

---

## 4. Current Test Suite Verification Results

### Baseline Execution (Existing Grades 6 & 7)
- **Grade 6 (`--grade=6`)**: 24/24 checks passed (**100% PASS** in 46ms).
- **Grade 7 (`--grade=7`)**: 24/24 checks passed (**100% PASS** in 45ms).
- **Milestone M1 (`--milestone=M1`)**: 4/4 checks passed (**100% PASS** in 16ms, confirming all 65 simulation keys are already wired in `InteractivePhysicsLab.tsx`).
- **Vitest Suite (`npm test`)**: 21/21 tests passed (**100% PASS** in 748ms).

### Full Suite Target Execution (`npx tsx scripts/verify-curriculum.ts`)
- **Total Checks**: 30
- **Passed Checks**: 20 (All baseline checks, all Tier 2 question integrity checks, and all Tier 3 simulation wiring checks pass).
- **Pending Checks (10)**: Accurately reports unseeded status of Grades 8-12 (`is_primary_seeded = 0`, 0 topics, 0 questions), waiting for M2-M7 builders to populate data.
- **Integrity**: Non-facade test harness; will automatically flip to green upon completion of milestones M2 through M7.

---

## 5. Artifact Index

- `scripts/verify-curriculum.ts` — The 4-tier E2E verification test harness and CLI runner.
- `scripts/curriculum-spec.ts` — Authoritative GDPT 2018 curriculum specification constants and expected metadata.
- `tests/curriculum.test.ts` — Vitest automated test suite covering schema, LaTeX validation, boundary checks, and workflows.
- `TEST_READY.md` — This publication document.
