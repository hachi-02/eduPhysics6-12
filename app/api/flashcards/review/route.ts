import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import {
  recordFlashcardReview,
  resetFlashcardReviews,
  getFlashcardDeckData,
} from '@/lib/cms-service';
import { FlashcardRating } from '@/types/cms';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.action === 'reset') {
      const gradeNum = body.gradeNumber ? Number(body.gradeNumber) : undefined;
      resetFlashcardReviews(gradeNum);
      try {
        revalidatePath('/flashcards', 'page');
      } catch {}
      const deck = getFlashcardDeckData();
      return NextResponse.json({ ok: true, stats: deck.stats });
    }

    const cardKey = String(body.cardKey || '').trim();
    const rating = body.rating as FlashcardRating;
    const validRatings: FlashcardRating[] = ['unseen', 'forgot', 'hard', 'mastered'];

    if (!cardKey || !validRatings.includes(rating)) {
      return NextResponse.json({ error: 'Tham số thẻ không hợp lệ' }, { status: 400 });
    }

    const result = recordFlashcardReview(cardKey, rating);
    try {
      revalidatePath('/flashcards', 'page');
    } catch {}

    return NextResponse.json({
      ok: true,
      result,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Lỗi khi lưu trạng thái thẻ Flashcard' },
      { status: 500 }
    );
  }
}
