import { NextResponse } from 'next/server';
import { getAdminFromCookie } from '@/lib/auth';
import getDb from '@/lib/db';

export async function POST(request: Request) {
  const admin = getAdminFromCookie();
  if (!admin) {
    return NextResponse.json({ error: 'Chưa đăng nhập quyền Quản trị viên (Admin)' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { action, payload } = body;
    const db = getDb();

    switch (action) {
      case 'create_chapter': {
        const { grade_id, order_index, code, title, description, summary_markdown } = payload;
        const res = db.run(
          `INSERT INTO chapters (grade_id, order_index, code, title, description, summary_markdown, key_takeaways_json, formula_cheatsheet_json)
           VALUES (?, ?, ?, ?, ?, ?, '[]', '[]')`,
          [
            Number(grade_id),
            Number(order_index || 1),
            code || 'CH-NEW',
            title,
            description || '',
            summary_markdown || '',
          ]
        );
        return NextResponse.json({ ok: true, id: Number(res.lastInsertRowid) });
      }

      case 'update_chapter': {
        const { id, title, description, summary_markdown } = payload;
        db.run(
          `UPDATE chapters SET title = ?, description = ?, summary_markdown = ? WHERE id = ?`,
          [title, description || '', summary_markdown || '', Number(id)]
        );
        return NextResponse.json({ ok: true });
      }

      case 'delete_chapter': {
        db.run('DELETE FROM chapters WHERE id = ?', [Number(payload.id)]);
        return NextResponse.json({ ok: true });
      }

      case 'create_topic': {
        const { chapter_id, order_index, code, title, overview, summary_note, heading1, content1 } = payload;
        const theory = heading1
          ? [{ heading: heading1, content: content1 || '', keyPoints: [] }]
          : [];
        const res = db.run(
          `INSERT INTO topics (chapter_id, order_index, code, title, textbook_tags_json, overview, theory_sections_json, summary_note)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            Number(chapter_id),
            Number(order_index || 1),
            code || 'B-NEW',
            title,
            JSON.stringify(['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều']),
            overview || '',
            JSON.stringify(theory),
            summary_note || '',
          ]
        );
        return NextResponse.json({ ok: true, id: Number(res.lastInsertRowid) });
      }

      case 'update_topic': {
        const { id, title, overview, summary_note, theory_sections } = payload;
        db.run(
          `UPDATE topics SET title = ?, overview = ?, summary_note = ?, theory_sections_json = ? WHERE id = ?`,
          [
            title,
            overview || '',
            summary_note || '',
            JSON.stringify(theory_sections || []),
            Number(id),
          ]
        );
        return NextResponse.json({ ok: true });
      }

      case 'delete_topic': {
        db.run('DELETE FROM topics WHERE id = ?', [Number(payload.id)]);
        return NextResponse.json({ ok: true });
      }

      case 'add_formula': {
        const { topic_id, name, latex_expression, plain_expression, usage_note } = payload;
        const res = db.run(
          `INSERT INTO formulas (topic_id, order_index, name, latex_expression, plain_expression, variables_json, derived_formulas_json, usage_note)
           VALUES (?, 1, ?, ?, ?, '[]', '[]', ?)`,
          [Number(topic_id), name, latex_expression, plain_expression || latex_expression, usage_note || '']
        );
        return NextResponse.json({ ok: true, id: Number(res.lastInsertRowid) });
      }

      case 'delete_formula': {
        db.run('DELETE FROM formulas WHERE id = ?', [Number(payload.id)]);
        return NextResponse.json({ ok: true });
      }

      case 'add_quantity': {
        const { topic_id, name, symbol, si_unit, other_units, measuring_device, description } = payload;
        const res = db.run(
          `INSERT INTO quantities (topic_id, order_index, name, symbol, si_unit, other_units, measuring_device, description)
           VALUES (?, 1, ?, ?, ?, ?, ?, ?)`,
          [
            Number(topic_id),
            name,
            symbol,
            si_unit,
            other_units || '',
            measuring_device || '',
            description || '',
          ]
        );
        return NextResponse.json({ ok: true, id: Number(res.lastInsertRowid) });
      }

      case 'delete_quantity': {
        db.run('DELETE FROM quantities WHERE id = ?', [Number(payload.id)]);
        return NextResponse.json({ ok: true });
      }

      case 'add_example': {
        const { topic_id, title, difficulty, problem_statement, given_summary, solution_step, final_answer } = payload;
        const res = db.run(
          `INSERT INTO examples (topic_id, order_index, title, difficulty, problem_statement, given_summary, solution_steps_json, final_answer)
           VALUES (?, 1, ?, ?, ?, ?, ?, ?)`,
          [
            Number(topic_id),
            title,
            difficulty || 'Thông hiểu',
            problem_statement,
            given_summary || '',
            JSON.stringify(solution_step ? [solution_step] : []),
            final_answer || '',
          ]
        );
        return NextResponse.json({ ok: true, id: Number(res.lastInsertRowid) });
      }

      case 'delete_example': {
        db.run('DELETE FROM examples WHERE id = ?', [Number(payload.id)]);
        return NextResponse.json({ ok: true });
      }

      case 'add_question': {
        const {
          scope_type,
          topic_id,
          chapter_id,
          order_index,
          difficulty,
          question_text,
          options,
          correct_index,
          explanation,
        } = payload;
        const res = db.run(
          `INSERT INTO questions (scope_type, topic_id, chapter_id, order_index, difficulty, question_text, options_json, correct_index, explanation)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            scope_type || 'topic',
            scope_type === 'topic' ? Number(topic_id) : null,
            Number(chapter_id),
            Number(order_index || 26),
            difficulty || 'nhan_biet',
            question_text,
            JSON.stringify(options || ['A', 'B', 'C', 'D']),
            Number(correct_index || 0),
            explanation || '',
          ]
        );
        return NextResponse.json({ ok: true, id: Number(res.lastInsertRowid) });
      }

      case 'delete_question': {
        db.run('DELETE FROM questions WHERE id = ?', [Number(payload.id)]);
        return NextResponse.json({ ok: true });
      }

      case 'bulk_import_questions': {
        const { scope_type, topic_id, chapter_id, questions } = payload;
        if (!Array.isArray(questions)) {
          return NextResponse.json({ error: 'Danh sách câu hỏi phải là mảng JSON' }, { status: 400 });
        }
        db.exec('BEGIN TRANSACTION;');
        try {
          questions.forEach((q: any, idx: number) => {
            db.run(
              `INSERT INTO questions (scope_type, topic_id, chapter_id, order_index, difficulty, question_text, options_json, correct_index, explanation)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              [
                scope_type || 'topic',
                scope_type === 'topic' ? Number(topic_id) : null,
                Number(chapter_id),
                Number(q.order_index || idx + 1),
                q.difficulty || 'nhan_biet',
                q.question_text,
                JSON.stringify(q.options || ['', '', '', '']),
                Number(q.correct_index || 0),
                q.explanation || '',
              ]
            );
          });
          db.exec('COMMIT;');
        } catch (e) {
          db.exec('ROLLBACK;');
          throw e;
        }
        return NextResponse.json({ ok: true, importedCount: questions.length });
      }

      default:
        return NextResponse.json({ error: `Action không hỗ trợ: ${action}` }, { status: 400 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Lỗi xử lý CMS' }, { status: 500 });
  }
}
