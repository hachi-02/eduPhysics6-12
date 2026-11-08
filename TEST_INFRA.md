# E2E Test Infra: GDPT 2018 Vietnamese Physics CMS (Grades 6 - 12)

## Test Philosophy
- **Opaque-box, requirement-driven**: Tests derive directly from the requirements in `ORIGINAL_REQUEST.md` and database integrity constraints.
- **Methodology**: Systematic 4-tier testing (Category-Partition, Boundary Value Analysis, Pairwise Combinatorial, and Real-World Curriculum Scenarios).

## Feature Inventory & Test Coverage

| # | Feature | Requirement Source | Tier 1 (Coverage) | Tier 2 (Boundary) | Tier 3 (Cross-Feature) | Tier 4 (Scenario) |
|---|---|---|:---:|:---:|:---:|:---:|
| 1 | Simulation Engine & Keys | R3 (sim_key wiring) | ≥5 | ≥5 | ✓ | ✓ |
| 2 | Grade 8 Curriculum | R1 (GDPT 2018 Grade 8) | ≥5 | ≥5 | ✓ | ✓ |
| 3 | Grade 8 Questions | R2 (25 per topic & ch) | ≥5 | ≥5 | ✓ | ✓ |
| 4 | Grade 9 Curriculum | R1 (GDPT 2018 Grade 9) | ≥5 | ≥5 | ✓ | ✓ |
| 5 | Grade 9 Questions | R2 (25 per topic & ch) | ≥5 | ≥5 | ✓ | ✓ |
| 6 | Grade 10 Curriculum | R1 (GDPT 2018 Grade 10) | ≥5 | ≥5 | ✓ | ✓ |
| 7 | Grade 10 Questions | R2 (25 per topic & ch) | ≥5 | ≥5 | ✓ | ✓ |
| 8 | Grade 11 Curriculum | R1 (GDPT 2018 Grade 11) | ≥5 | ≥5 | ✓ | ✓ |
| 9 | Grade 11 Questions | R2 (25 per topic & ch) | ≥5 | ≥5 | ✓ | ✓ |
| 10 | Grade 12 Curriculum | R1 (GDPT 2018 Grade 12) | ≥5 | ≥5 | ✓ | ✓ |
| 11 | Grade 12 Questions | R2 (25 per topic & ch) | ≥5 | ≥5 | ✓ | ✓ |
| 12 | Database Seeding | R4 (is_primary_seeded = 1) | ≥5 | ≥5 | ✓ | ✓ |
| 13 | Production Build | R4 (Next.js compilation) | ≥5 | ≥5 | ✓ | ✓ |

## Test Architecture
- **Validation Script**: `scripts/verify-curriculum.ts` executed via `npx tsx scripts/verify-curriculum.ts`.
- **Pass/Fail Semantics**: Exit code 0 on 100% test pass; non-zero on any validation failure.
- **Coverage Checks**:
  1. Grade count = 7, all grades have `is_primary_seeded = 1`.
  2. Every chapter has non-empty `summary_markdown`, `key_takeaways` (length >= 3), and `formula_cheatsheet` (length >= 3).
  3. Every topic has `theory_sections` (length >= 2), `quantities` (length >= 2), `formulas` (length >= 1), `examples` (length >= 1), and `simulation` (valid `sim_key`).
  4. Every topic has exactly 25 multiple-choice questions with 4 options, valid `correct_index` (0-3), and cognitive distribution (nhan_biet, thong_hieu, van_dung, van_dung_cao).
  5. Every chapter has exactly 25 synthesis exam questions (`scope_type = 'chapter'`) with explanations.
  6. Every topic's `sim_key` is registered in `InteractivePhysicsLab.tsx`.
  7. Next.js production build (`npm run build`) completes with exit code 0.

## Real-World Application Scenarios (Tier 4)
| # | Scenario | Features Exercised | Target Tier |
|---|---|---|---|
| 1 | Student completes Grade 8 Hydrostatics & Buoyancy unit (Theory -> Formula -> Archimedes Simulation -> 25 Quiz Questions) | F1, F2, F3, F4 | Tier 4 |
| 2 | Student completes Grade 9 Ray Optics & Thin Lenses unit (Theory -> Lens Formula -> Ray Optics Simulation -> 25 Quiz Questions) | F1, F2, F6, F7 | Tier 4 |
| 3 | High school student reviews Grade 10 Kinematics & Projectiles (Theory -> Formulas -> Simulation -> 25 Quiz Questions) | F1, F2, F9, F10 | Tier 4 |
| 4 | High school student reviews Grade 11 Simple Harmonic Motion & Waves (Theory -> Formulas -> Oscilloscope Simulation -> 25 Quiz Questions) | F1, F2, F12, F13 | Tier 4 |
| 5 | High school senior prepares for National Graduation Exam with Grade 12 Thermal & Nuclear units | F1, F2, F15, F16, F17 | Tier 4 |
| 6 | Full chapter synthesis exams taken across all 22 new chapters | F5, F8, F11, F14, F17 | Tier 4 |
| 7 | Full database reseed from clean state and Next.js production build | F18, F19 | Tier 4 |
