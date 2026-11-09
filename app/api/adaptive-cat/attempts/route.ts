import { NextResponse } from 'next/server';
import getDb from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const scopeType = searchParams.get('scopeType');
    const scopeId = searchParams.get('scopeId');

    const db = getDb();
    let attempts: any[] = [];

    if (scopeType && scopeId) {
      attempts = db.query<any>(
        `SELECT id, title, scope_type, scope_id, grade_number, total_questions, correct_count,
                final_theta, final_se, confidence_pct, predicted_score_10, ability_tier_label,
                time_spent_sec, history_json, created_at
         FROM adaptive_cat_attempts
         WHERE scope_type = ? AND scope_id = ?
         ORDER BY id DESC LIMIT 20`,
        [scopeType, Number(scopeId)]
      );
    } else {
      attempts = db.query<any>(
        `SELECT id, title, scope_type, scope_id, grade_number, total_questions, correct_count,
                final_theta, final_se, confidence_pct, predicted_score_10, ability_tier_label,
                time_spent_sec, history_json, created_at
         FROM adaptive_cat_attempts
         ORDER BY id DESC LIMIT 25`
      );
    }

    return NextResponse.json({ attempts });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      scopeType,
      scopeId,
      gradeNumber,
      totalQuestions,
      correctCount,
      finalTheta,
      finalSe,
      confidencePct,
      predictedScore10,
      abilityTierLabel,
      timeSpentSec,
      history,
    } = body;

    const db = getDb();
    const res = db.run(
      `INSERT INTO adaptive_cat_attempts (
        title, scope_type, scope_id, grade_number, total_questions, correct_count,
        final_theta, final_se, confidence_pct, predicted_score_10, ability_tier_label,
        time_spent_sec, history_json
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        String(title || 'Bài thi Thích ứng CAT'),
        String(scopeType || 'grade'),
        Number(scopeId || 1),
        gradeNumber ? Number(gradeNumber) : null,
        Number(totalQuestions || 0),
        Number(correctCount || 0),
        Number(finalTheta || 0),
        Number(finalSe || 1),
        Number(confidencePct || 50),
        Number(predictedScore10 || 5),
        String(abilityTierLabel || 'Khá vững'),
        Number(timeSpentSec || 0),
        JSON.stringify(history || []),
      ]
    );

    return NextResponse.json({
      ok: true,
      id: Number(res.lastInsertRowid),
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }
    const db = getDb();
    db.run(`DELETE FROM adaptive_cat_attempts WHERE id = ?`, [Number(id)]);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
