import getDb from './db';
import { ensureDefaultAdmin } from './auth';
import { GRADE_6_CHAPTERS_PART1, SeedChapterData } from './grade6-curriculum';
import { GRADE_6_CHAPTERS_PART2 } from './grade6-curriculum-part2';
import { buildTopic25Questions, SeedQuestionItem } from './grade6-questions';
import { buildChapter25ExamQuestions } from './grade6-questions-part3';
import { GRADE_7_CHAPTERS_PART1 } from './grade7-curriculum';
import { GRADE_7_CHAPTERS_PART2 } from './grade7-curriculum-part2';
import { buildGrade7Topic25Questions, buildGrade7Chapter25ExamQuestions } from './grade7-questions-part3';
import { GRADE_8_CHAPTERS } from './grade8-curriculum';
import { buildGrade8Topic25Questions, buildGrade8Chapter25ExamQuestions } from './grade8-questions';
import { GRADE_9_CHAPTERS } from './grade9-curriculum';
import { buildGrade9Topic25Questions, buildGrade9Chapter25ExamQuestions } from './grade9-questions';
import { GRADE_10_CHAPTERS } from './grade10-curriculum';
import { buildGrade10Topic25Questions, buildGrade10Chapter25ExamQuestions } from './grade10-questions';
import { GRADE_11_CHAPTERS } from './grade11-curriculum';
import { buildGrade11Topic25Questions, buildGrade11Chapter25ExamQuestions } from './grade11-questions';
import { GRADE_12_CHAPTERS } from './grade12-curriculum';
import { buildGrade12Topic25Questions, buildGrade12Chapter25ExamQuestions } from './grade12-questions';

function seedFullGradeCurriculum(
  db: ReturnType<typeof getDb>,
  gradeInfo: {
    grade_number: number;
    title: string;
    subtitle: string;
    description: string;
    level_group: 'THCS' | 'THPT';
  },
  chapters: SeedChapterData[],
  getTopicQuestions: (topicCode: string) => SeedQuestionItem[],
  getChapterQuestions: (chapterCode: string) => SeedQuestionItem[]
) {
  const gRes = db.run(
    `INSERT OR IGNORE INTO grades (grade_number, title, subtitle, description, level_group, is_primary_seeded)
     VALUES (?, ?, ?, ?, ?, 1)`,
    [gradeInfo.grade_number, gradeInfo.title, gradeInfo.subtitle, gradeInfo.description, gradeInfo.level_group]
  );

  // Also ensure if the row existed earlier with is_primary_seeded=0, update it
  db.run(
    `UPDATE grades SET title = ?, subtitle = ?, description = ?, level_group = ?, is_primary_seeded = 1 WHERE grade_number = ?`,
    [gradeInfo.title, gradeInfo.subtitle, gradeInfo.description, gradeInfo.level_group, gradeInfo.grade_number]
  );

  const gradeRow = db.get<{ id: number }>('SELECT id FROM grades WHERE grade_number = ?', [gradeInfo.grade_number]);
  const gradeId = gradeRow ? gradeRow.id : Number(gRes.lastInsertRowid);

  for (const ch of chapters) {
    const chRes = db.run(
      `INSERT INTO chapters (grade_id, order_index, code, title, description, summary_markdown, key_takeaways_json, formula_cheatsheet_json)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        gradeId,
        ch.order_index,
        ch.code,
        ch.title,
        ch.description,
        ch.summary_markdown,
        JSON.stringify(ch.key_takeaways),
        JSON.stringify(ch.formula_cheatsheet),
      ]
    );
    const chapterId = Number(chRes.lastInsertRowid);

    // Seed 25 Chapter Exam synthesis questions
    const chapterQuestions = getChapterQuestions(ch.code);
    for (const q of chapterQuestions) {
      db.run(
        `INSERT INTO questions (scope_type, topic_id, chapter_id, order_index, difficulty, question_text, options_json, correct_index, explanation)
         VALUES ('chapter', NULL, ?, ?, ?, ?, ?, ?, ?)`,
        [
          chapterId,
          q.order_index,
          q.difficulty,
          q.question_text,
          JSON.stringify(q.options),
          q.correct_index,
          q.explanation,
        ]
      );
    }

    // Seed Topics inside Chapter
    for (const tp of ch.topics) {
      const tpRes = db.run(
        `INSERT INTO topics (chapter_id, order_index, code, title, textbook_tags_json, overview, theory_sections_json, summary_note)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          chapterId,
          tp.order_index,
          tp.code,
          tp.title,
          JSON.stringify(tp.textbook_tags),
          tp.overview,
          JSON.stringify(tp.theory_sections),
          tp.summary_note,
        ]
      );
      const topicId = Number(tpRes.lastInsertRowid);

      // Quantities
      tp.quantities.forEach((qty, idx) => {
        db.run(
          `INSERT INTO quantities (topic_id, order_index, name, symbol, si_unit, other_units, measuring_device, description)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [topicId, idx + 1, qty.name, qty.symbol, qty.si_unit, qty.other_units, qty.measuring_device, qty.description]
        );
      });

      // Formulas
      tp.formulas.forEach((fm, idx) => {
        db.run(
          `INSERT INTO formulas (topic_id, order_index, name, latex_expression, plain_expression, variables_json, derived_formulas_json, usage_note)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            topicId,
            idx + 1,
            fm.name,
            fm.latex_expression,
            fm.plain_expression,
            JSON.stringify(fm.variables),
            JSON.stringify(fm.derived_formulas),
            fm.usage_note,
          ]
        );
      });

      // Examples
      tp.examples.forEach((ex, idx) => {
        db.run(
          `INSERT INTO examples (topic_id, order_index, title, difficulty, problem_statement, given_summary, solution_steps_json, final_answer)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            topicId,
            idx + 1,
            ex.title,
            ex.difficulty,
            ex.problem_statement,
            ex.given_summary,
            JSON.stringify(ex.solution_steps),
            ex.final_answer,
          ]
        );
      });

      // Simulation
      if (tp.simulation) {
        db.run(
          `INSERT INTO simulations (topic_id, sim_key, title, description, parameters_json, guide_steps_json, physics_insight)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            topicId,
            tp.simulation.sim_key,
            tp.simulation.title,
            tp.simulation.description,
            JSON.stringify(tp.simulation.parameters),
            JSON.stringify(tp.simulation.guide_steps),
            tp.simulation.physics_insight,
          ]
        );
      }

      // 25 Topic Quiz Questions
      const topicQuestions = getTopicQuestions(tp.code);
      for (const q of topicQuestions) {
        db.run(
          `INSERT INTO questions (scope_type, topic_id, chapter_id, order_index, difficulty, question_text, options_json, correct_index, explanation)
           VALUES ('topic', ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            topicId,
            chapterId,
            q.order_index,
            q.difficulty,
            q.question_text,
            JSON.stringify(q.options),
            q.correct_index,
            q.explanation,
          ]
        );
      }
    }
  }
}

export function ensureDatabaseSeeded(forceReseed = false) {
  const db = getDb();
  ensureDefaultAdmin();

  const existingGrades = db.get<{ count: number }>('SELECT count(*) as count FROM grades');
  const unseededGrades = db.get<{ count: number }>('SELECT count(*) as count FROM grades WHERE is_primary_seeded = 0');
  const existingQuestions = db.get<{ count: number }>('SELECT count(*) as count FROM questions');

  // Grades 6-12 total >= 3,025 questions. Skip only if all 7 grades are fully seeded.
  if (
    !forceReseed &&
    existingGrades &&
    existingGrades.count >= 7 &&
    (!unseededGrades || unseededGrades.count === 0) &&
    existingQuestions &&
    existingQuestions.count >= 3000
  ) {
    return;
  }

  db.exec('BEGIN TRANSACTION;');
  try {
    db.exec(`
      DELETE FROM quiz_attempts;
      DELETE FROM questions;
      DELETE FROM simulations;
      DELETE FROM examples;
      DELETE FROM formulas;
      DELETE FROM quantities;
      DELETE FROM topics;
      DELETE FROM chapters;
      DELETE FROM grades;
    `);

    // 1. Seed Full Grade 6 (4 Chapters, 15 Topics, 475 Questions)
    seedFullGradeCurriculum(
      db,
      {
        grade_number: 6,
        title: 'Vật Lý Lớp 6 (KHTN 6)',
        subtitle: 'Các phép đo • Lực và Chuyển động • Năng lượng • Trái Đất và Bầu trời',
        description:
          'Tổng hợp đầy đủ 3 bộ sách giáo khoa (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều) gồm 4 Chương, 15 Chủ đề chuyên sâu, bảng đại lượng, công thức, ví dụ, thí nghiệm tương tác và 475 câu hỏi trắc nghiệm (25 câu/bài & 25 câu/chương).',
        level_group: 'THCS',
      },
      [...GRADE_6_CHAPTERS_PART1, ...GRADE_6_CHAPTERS_PART2],
      buildTopic25Questions,
      buildChapter25ExamQuestions
    );

    // 2. Seed Full Grade 7 (4 Chapters, 12 Topics, 400 Questions)
    seedFullGradeCurriculum(
      db,
      {
        grade_number: 7,
        title: 'Vật Lý Lớp 7 (KHTN 7)',
        subtitle: 'Tốc độ & Chuyển động • Âm thanh • Ánh sáng • Từ trường',
        description:
          'Tổng hợp đầy đủ 3 bộ sách giáo khoa (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều) gồm 4 Chương, 12 Chủ đề chuyên sâu, bảng đại lượng, công thức, ví dụ giải mẫu, 4 phòng thí nghiệm tương tác và 400 câu hỏi trắc nghiệm (25 câu/bài & 25 câu/chương).',
        level_group: 'THCS',
      },
      [...GRADE_7_CHAPTERS_PART1, ...GRADE_7_CHAPTERS_PART2],
      buildGrade7Topic25Questions,
      buildGrade7Chapter25ExamQuestions
    );

    // 3. Seed Full Grade 8 (4 Chapters, 12 Topics, 400 Questions)
    seedFullGradeCurriculum(
      db,
      {
        grade_number: 8,
        title: 'Vật Lý Lớp 8 (KHTN 8)',
        subtitle: 'Khối lượng riêng & Áp suất • Tác dụng làm quay • Điện • Nhiệt',
        description:
          'Tổng hợp đầy đủ 3 bộ sách giáo khoa (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều) gồm 4 Chương, 12 Chủ đề chuyên sâu, bảng đại lượng, công thức, ví dụ giải mẫu, thí nghiệm tương tác và 400 câu hỏi trắc nghiệm (25 câu/bài & 25 câu/chương).',
        level_group: 'THCS',
      },
      GRADE_8_CHAPTERS,
      buildGrade8Topic25Questions,
      buildGrade8Chapter25ExamQuestions
    );

    // 4. Seed Full Grade 9 (4 Chapters, 12 Topics, 400 Questions)
    seedFullGradeCurriculum(
      db,
      {
        grade_number: 9,
        title: 'Vật Lý Lớp 9 (KHTN 9)',
        subtitle: 'Cơ năng • Quang hình học • Định luật Ohm & Công suất • Cảm ứng điện từ',
        description:
          'Tổng hợp đầy đủ 3 bộ sách giáo khoa (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều) gồm 4 Chương, 12 Chủ đề chuyên sâu, bảng đại lượng, công thức, ví dụ giải mẫu, thí nghiệm tương tác và 400 câu hỏi trắc nghiệm (25 câu/bài & 25 câu/chương).',
        level_group: 'THCS',
      },
      GRADE_9_CHAPTERS,
      buildGrade9Topic25Questions,
      buildGrade9Chapter25ExamQuestions
    );

    // 5. Seed Full Grade 10 (6 Chapters, 17 Topics, 575 Questions)
    seedFullGradeCurriculum(
      db,
      {
        grade_number: 10,
        title: 'Vật Lý Lớp 10 (THPT)',
        subtitle: 'Sai số • Động học • Động lực học Newton • Năng lượng • Động lượng • Chuyển động tròn',
        description:
          'Tổng hợp đầy đủ 3 bộ sách giáo khoa (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều) gồm 6 Chương, 17 Chủ đề chuyên sâu, bảng đại lượng, công thức, ví dụ giải mẫu, thí nghiệm tương tác và 575 câu hỏi trắc nghiệm (25 câu/bài & 25 câu/chương).',
        level_group: 'THPT',
      },
      GRADE_10_CHAPTERS,
      buildGrade10Topic25Questions,
      buildGrade10Chapter25ExamQuestions
    );

    // 6. Seed Full Grade 11 (4 Chapters, 12 Topics, 400 Questions)
    seedFullGradeCurriculum(
      db,
      {
        grade_number: 11,
        title: 'Vật Lý Lớp 11 (THPT)',
        subtitle: 'Dao động điều hòa • Sóng cơ & Sóng điện từ • Điện trường • Dòng điện không đổi',
        description:
          'Tổng hợp đầy đủ 3 bộ sách giáo khoa (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều) gồm 4 Chương, 12 Chủ đề chuyên sâu, bảng đại lượng, công thức, ví dụ giải mẫu, thí nghiệm tương tác và 400 câu hỏi trắc nghiệm (25 câu/bài & 25 câu/chương).',
        level_group: 'THPT',
      },
      GRADE_11_CHAPTERS,
      buildGrade11Topic25Questions,
      buildGrade11Chapter25ExamQuestions
    );

    // 7. Seed Full Grade 12 (4 Chapters, 12 Topics, 400 Questions)
    seedFullGradeCurriculum(
      db,
      {
        grade_number: 12,
        title: 'Vật Lý Lớp 12 (THPT)',
        subtitle: 'Vật lý Nhiệt • Khí lý tưởng • Từ trường & Cảm ứng điện từ • Vật lý Hạt nhân',
        description:
          'Tổng hợp đầy đủ 3 bộ sách giáo khoa (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều) gồm 4 Chương, 12 Chủ đề chuyên sâu, bảng đại lượng, công thức, ví dụ giải mẫu, thí nghiệm tương tác và 400 câu hỏi trắc nghiệm (25 câu/bài & 25 câu/chương).',
        level_group: 'THPT',
      },
      GRADE_12_CHAPTERS,
      buildGrade12Topic25Questions,
      buildGrade12Chapter25ExamQuestions
    );

    db.exec('COMMIT;');
  } catch (err) {
    db.exec('ROLLBACK;');
    throw err;
  }
}

// Allow running directly via `npm run seed`
if (require.main === module) {
  console.log('Đang khởi tạo cơ sở dữ liệu SQLite và nạp dữ liệu Vật Lý Lớp 6-12...');
  ensureDatabaseSeeded(true);
  const db = getDb();
  const stats = {
    grades: db.get<{ c: number }>('SELECT count(*) as c FROM grades')?.c,
    chapters: db.get<{ c: number }>('SELECT count(*) as c FROM chapters')?.c,
    topics: db.get<{ c: number }>('SELECT count(*) as c FROM topics')?.c,
    quantities: db.get<{ c: number }>('SELECT count(*) as c FROM quantities')?.c,
    formulas: db.get<{ c: number }>('SELECT count(*) as c FROM formulas')?.c,
    examples: db.get<{ c: number }>('SELECT count(*) as c FROM examples')?.c,
    simulations: db.get<{ c: number }>('SELECT count(*) as c FROM simulations')?.c,
    questions: db.get<{ c: number }>('SELECT count(*) as c FROM questions')?.c,
  };
  console.log('Hoàn tất nạp dữ liệu:', stats);
}
