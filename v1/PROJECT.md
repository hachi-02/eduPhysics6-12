# Project: GDPT 2018 Vietnamese Physics CMS (Grades 8 - 12)

## Architecture
The application is a Next.js (App Router) + SQLite (better-sqlite3) Physics Curriculum Management System (CMS) designed for Vietnamese student self-study. It synthesizes the three authorized GDPT 2018 textbook series (*Kết nối tri thức với cuộc sống*, *Chân trời sáng tạo*, *Cánh Diều*).

```
                      ┌──────────────────────────────────────────────┐
                      │              Web UI Layer (Next.js)          │
                      │  - Pages: / (Grades), /chapter/[id],         │
                      │           /topic/[id], /admin                │
                      │  - Components: InteractivePhysicsLab.tsx,    │
                      │    FormulaCheatSheet, QuizEngine, ExamModal  │
                      └──────────────────────┬───────────────────────┘
                                             │
                                             ▼
                      ┌──────────────────────────────────────────────┐
                      │             Domain Data & Logic Layer        │
                      │  - lib/cms-service.ts (queries, data access) │
                      │  - lib/seed.ts (seeding engine)              │
                      │  - lib/grade{6..12}-curriculum.ts            │
                      │  - lib/grade{6..12}-questions.ts             │
                      └──────────────────────┬───────────────────────┘
                                             │
                                             ▼
                      ┌──────────────────────────────────────────────┐
                      │              Database Layer (SQLite)         │
                      │  - physics_cms.db                            │
                      │  - Tables: grades, chapters, topics,         │
                      │    quantities, formulas, examples,           │
                      │    simulations, questions, quiz_attempts     │
                      └──────────────────────────────────────────────┘
```

- **Curriculum Representation**: Grades 8–12 are modeled with strongly typed `SeedChapterData` and `SeedTopicData` structures in `lib/grade{8..12}-curriculum*.ts`.
- **Question Bank Representation**: 25 topic quiz questions per topic (across 4 cognitive levels: `nhan_biet`, `thong_hieu`, `van_dung`, `van_dung_cao`) and 25 synthesis exam questions per chapter (`scope_type = 'chapter'`) in `lib/grade{8..12}-questions*.ts`.
- **Simulation Layer**: Vector-rendered (SVG + React state) domain simulation engines embedded in `components/InteractivePhysicsLab.tsx` and dynamically dispatched by `renderSimByKey(simKey, parameters)`.
- **Seeding & Persistence**: Atomic SQLite transaction in `lib/seed.ts` via `seedFullGradeCurriculum`, marking all grades 6 through 12 with `is_primary_seeded = 1`.

---

## Feature Inventory

| # | Feature | Description | Milestone | Source |
|---|---|---|---|---|
| 1 | Simulation Engine Core | Modular domain simulation engines with SVG & React state in `InteractivePhysicsLab.tsx` supporting `renderSimByKey(simKey, parameters)` | M1 | Survey 3 §3.1 |
| 2 | Simulation Key Wire-up | Wire all 65 sim_key identifiers across Grades 8-12 into `renderSimByKey` with topic parameter handling | M1 | Survey 2 §7, Survey 3 §3.1 |
| 3 | Grade 8 Curriculum Data | 4 chapters, 12 topics: Fluid mechanics, Torques/Levers, Intro Electricity, Thermal energy with SI units, LaTeX formulas, examples | M2 | Survey 2 §5 (Grade 8) |
| 4 | Grade 8 Topic Question Bank | 12 topics × 25 distinct multiple-choice questions (300 questions) categorized across 4 cognitive levels with explanations | M2 | Survey 2 §6A, Survey 1 §1.5 |
| 5 | Grade 8 Chapter Exam Bank | 4 chapters × 25 synthesis exam questions (100 questions) with `scope_type = 'chapter'` and explanations | M2 | Survey 2 §6B |
| 6 | Grade 9 Curriculum Data | 4 chapters, 12 topics: Mechanical energy, Geometric optics, Ohm's law & power, Electromagnetism & AC with SI units, LaTeX, examples | M3 | Survey 2 §5 (Grade 9) |
| 7 | Grade 9 Topic Question Bank | 12 topics × 25 distinct multiple-choice questions (300 questions) categorized across 4 cognitive levels with explanations | M3 | Survey 2 §6A |
| 8 | Grade 9 Chapter Exam Bank | 4 chapters × 25 synthesis exam questions (100 questions) with `scope_type = 'chapter'` and explanations | M3 | Survey 2 §6B |
| 9 | Grade 10 Curriculum Data | 6 chapters, 17 topics: Measurement errors, Kinematics, Dynamics, Work/Energy, Momentum/Collisions, Circular motion & Elasticity | M4 | Survey 2 §5 (Grade 10) |
| 10 | Grade 10 Topic Question Bank | 17 topics × 25 distinct multiple-choice questions (425 questions) categorized across 4 cognitive levels with explanations | M4 | Survey 2 §6A |
| 11 | Grade 10 Chapter Exam Bank | 6 chapters × 25 synthesis exam questions (150 questions) with `scope_type = 'chapter'` and explanations | M4 | Survey 2 §6B |
| 12 | Grade 11 Curriculum Data | 4 chapters, 12 topics: Harmonic oscillations, Mechanical & EM waves, Electric fields & capacitors, DC circuits & sources | M5 | Survey 2 §5 (Grade 11) |
| 13 | Grade 11 Topic Question Bank | 12 topics × 25 distinct multiple-choice questions (300 questions) categorized across 4 cognitive levels with explanations | M5 | Survey 2 §6A |
| 14 | Grade 11 Chapter Exam Bank | 4 chapters × 25 synthesis exam questions (100 questions) with `scope_type = 'chapter'` and explanations | M5 | Survey 2 §6B |
| 15 | Grade 12 Curriculum Data | 4 chapters, 12 topics: Thermal physics, Ideal gases, Magnetic field & induction, Nuclear physics & radioactivity | M6 | Survey 2 §5 (Grade 12) |
| 16 | Grade 12 Topic Question Bank | 12 topics × 25 distinct multiple-choice questions (300 questions) categorized across 4 cognitive levels with explanations | M6 | Survey 2 §6A |
| 17 | Grade 12 Chapter Exam Bank | 4 chapters × 25 synthesis exam questions (100 questions) with `scope_type = 'chapter'` and explanations | M6 | Survey 2 §6B |
| 18 | Database Seeding Integration | Integrate Grades 8-12 curriculum & question builders into `lib/seed.ts`, update seeding guard, set `is_primary_seeded = 1` for all grades 6-12 | M7 | Survey 3 §3.2 |
| 19 | Build & Seeding Verification | Validate that `npm run seed` populates >= 3,050 questions and `npm run build` completes with exit code 0 | M7 | Survey 1 §5, Survey 3 §6 |

---

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| M1 | Interactive Simulations Engine | Implement domain simulation engines in `components/InteractivePhysicsLab.tsx`, update `renderSimByKey` with parameters, wire all 65 sim_keys | none | PLANNED |
| M2 | Grade 8 Curriculum & Question Bank | Create `lib/grade8-curriculum.ts`, `lib/grade8-questions.ts`, `lib/grade8-questions-part2.ts` (4 chapters, 12 topics, 400 questions) | M1 | PLANNED |
| M3 | Grade 9 Curriculum & Question Bank | Create `lib/grade9-curriculum.ts`, `lib/grade9-questions.ts`, `lib/grade9-questions-part2.ts` (4 chapters, 12 topics, 400 questions) | M1 | PLANNED |
| M4 | Grade 10 Curriculum & Question Bank | Create `lib/grade10-curriculum.ts`, `part2.ts`, `lib/grade10-questions.ts`, `part2.ts`, `part3.ts` (6 chapters, 17 topics, 575 questions) | M1 | PLANNED |
| M5 | Grade 11 Curriculum & Question Bank | Create `lib/grade11-curriculum.ts`, `lib/grade11-questions.ts`, `lib/grade11-questions-part2.ts` (4 chapters, 12 topics, 400 questions) | M1 | PLANNED |
| M6 | Grade 12 Curriculum & Question Bank | Create `lib/grade12-curriculum.ts`, `lib/grade12-questions.ts`, `lib/grade12-questions-part2.ts` (4 chapters, 12 topics, 400 questions) | M1 | PLANNED |
| M7 | Database Seeding & System Integration | Update `lib/seed.ts`, seed SQLite database (`is_primary_seeded = 1` for all 7 grades), run automated test verification, pass `npm run build` | M2, M3, M4, M5, M6 | PLANNED |

---

## Interface Contracts

### Curriculum Contract: `SeedChapterData` & `SeedTopicData`
Exported from `lib/grade6-curriculum.ts` and consumed by `lib/seed.ts`:
```typescript
export interface SeedTopicData {
  order_index: number;
  code: string;               // e.g. "G8-C1-B1"
  title: string;
  textbook_tags: string[];    // ["Kết nối tri thức", "Chân trời sáng tạo", "Cánh Diều"]
  overview: string;
  summary_note: string;
  theory_sections: {
    heading: string;
    content: string;
    keyPoints: string[];
    realWorldApplication?: string;
  }[];
  quantities: {
    name: string;
    symbol: string;
    si_unit: string;
    other_units: string;
    measuring_device: string;
    description: string;
  }[];
  formulas: {
    name: string;
    latex_expression: string;
    plain_expression: string;
    variables: { symbol: string; name: string; unit: string }[];
    derived_formulas: { expression: string; description: string }[];
    usage_note: string;
  }[];
  examples: {
    title: string;
    difficulty: string;       // "Cơ bản" | "Thông hiểu" | "Vận dụng" | "Vận dụng cao"
    problem_statement: string;
    given_summary: string;
    solution_steps: string[];
    final_answer: string;
  }[];
  simulation: {
    sim_key: string;
    title: string;
    description: string;
    parameters: Record<string, any>;
    guide_steps: string[];
    physics_insight: string;
  };
}

export interface SeedChapterData {
  order_index: number;
  code: string;               // e.g. "G8-CH1"
  title: string;
  description: string;
  summary_markdown: string;
  key_takeaways: string[];
  formula_cheatsheet: { name: string; latex: string; note: string }[];
  topics: SeedTopicData[];
}
```

### Question Contract: `SeedQuestionItem`
Exported from `lib/grade6-questions.ts` and consumed by `lib/seed.ts`:
```typescript
export type DifficultyLevel = 'nhan_biet' | 'thong_hieu' | 'van_dung' | 'van_dung_cao';

export interface SeedQuestionItem {
  order_index: number;        // 1 to 25
  difficulty: DifficultyLevel;
  question_text: string;      // KaTeX math in $...$
  options: [string, string, string, string] | string[]; // Exactly 4 options
  correct_index: number;      // 0, 1, 2, or 3
  explanation: string;
}
```
- Builder functions:
  `buildGradeNTopic25Questions(topicCode: string): SeedQuestionItem[]` (exactly 25 items: 8–10 nhan_biet, 7–8 thong_hieu, 5–6 van_dung, 3–4 van_dung_cao).
  `buildGradeNChapter25ExamQuestions(chapterCode: string): SeedQuestionItem[]` (exactly 25 items).

### Simulation Dispatch Contract: `renderSimByKey`
In `components/InteractivePhysicsLab.tsx`:
```typescript
function renderSimByKey(simKey: string, parameters: Record<string, any> = {}): React.ReactNode;
```
- Receives `simKey` and optional `parameters` dictionary.
- Must handle all 65 sim_keys defined across Grades 8–12.
- SVG vector graphics with React hooks for user interactivity (sliders, toggles, readouts).

### Seeding Engine Contract: `seedFullGradeCurriculum`
In `lib/seed.ts`:
```typescript
function seedFullGradeCurriculum(
  db: DatabaseConnection,
  gradeInfo: { grade_number: number; title: string; subtitle: string; description: string; level_group: 'THCS' | 'THPT' },
  chapters: SeedChapterData[],
  getTopicQuestions: (topicCode: string) => SeedQuestionItem[],
  getChapterQuestions: (chapterCode: string) => SeedQuestionItem[]
): void;
```
- Sets `is_primary_seeded = 1`.
- Populates `chapters`, `topics`, `quantities`, `formulas`, `examples`, `simulations`, and `questions` atomically.

---

## Code Layout & Write Boundaries

| Path | Exclusive Owner Milestone | Description |
|---|---|---|
| `components/InteractivePhysicsLab.tsx` | M1 | Interactive simulations engines and dispatch wiring |
| `lib/grade8-curriculum.ts`, `lib/grade8-questions*.ts` | M2 | Grade 8 curriculum content and 400 questions |
| `lib/grade9-curriculum.ts`, `lib/grade9-questions*.ts` | M3 | Grade 9 curriculum content and 400 questions |
| `lib/grade10-curriculum*.ts`, `lib/grade10-questions*.ts` | M4 | Grade 10 curriculum content and 575 questions |
| `lib/grade11-curriculum.ts`, `lib/grade11-questions*.ts` | M5 | Grade 11 curriculum content and 400 questions |
| `lib/grade12-curriculum.ts`, `lib/grade12-questions*.ts` | M6 | Grade 12 curriculum content and 400 questions |
| `lib/seed.ts` | M7 | Database seeding driver and thresholds |
| `scripts/verify-curriculum.ts` | E2E Testing / M7 | Test validation script for database and question banks |
