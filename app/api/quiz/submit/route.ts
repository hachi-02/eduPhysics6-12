import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { recordQuizAttempt } from '@/lib/cms-service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { scopeType, scopeId, studentName, score, totalQuestions, timeSpentSec, answers } = body;

    if (!scopeType || (scopeType !== 'topic' && scopeType !== 'chapter') || !scopeId) {
      return NextResponse.json({ error: 'Tham số không hợp lệ' }, { status: 400 });
    }

    const attemptId = recordQuizAttempt({
      scopeType,
      scopeId: Number(scopeId),
      studentName: studentName || 'Học sinh',
      score: Number(score || 0),
      totalQuestions: Number(totalQuestions || 25),
      timeSpentSec: Number(timeSpentSec || 0),
      answers: answers || {},
    });

    // Invalidate Next.js server & router caches so the Dashboard & Chapter/Topic pages show the new score immediately
    revalidatePath('/', 'layout');
    revalidatePath('/topic/[id]', 'page');
    revalidatePath('/chapter/[id]', 'page');

    return NextResponse.json({ ok: true, attemptId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Lỗi lưu kết quả' }, { status: 500 });
  }
}
