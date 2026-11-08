import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { updateMistakeStatus } from '@/lib/cms-service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, questionId, results } = body;

    // Support batch sync after completing a Mistake Review Quiz
    if (Array.isArray(results)) {
      for (const item of results) {
        if (item.correct) {
          updateMistakeStatus(Number(item.questionId), 'master');
        } else {
          updateMistakeStatus(Number(item.questionId), 'retry_wrong', Number(item.selectedOption ?? -1));
        }
      }
      revalidatePath('/', 'layout');
      revalidatePath('/mistakes', 'page');
      return NextResponse.json({ ok: true });
    }

    if (!questionId || !action) {
      return NextResponse.json({ error: 'Thiếu tham số' }, { status: 400 });
    }

    updateMistakeStatus(Number(questionId), action);
    revalidatePath('/', 'layout');
    revalidatePath('/mistakes', 'page');

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Lỗi cập nhật sổ tay câu sai' }, { status: 500 });
  }
}
