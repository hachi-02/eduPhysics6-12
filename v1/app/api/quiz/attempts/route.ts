import { NextResponse } from 'next/server';
import getDb from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const scopeType = searchParams.get('scopeType');
    const scopeId = searchParams.get('scopeId');

    if (!scopeType || !scopeId) {
      return NextResponse.json({ attempts: [] });
    }

    const db = getDb();
    const attempts = db.query<any>(
      `SELECT id, student_name, score, total_questions, time_spent_sec, answers_json, created_at
       FROM quiz_attempts
       WHERE scope_type = ? AND scope_id = ?
       ORDER BY id DESC LIMIT 10`,
      [scopeType, Number(scopeId)]
    );

    return NextResponse.json({ attempts });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
