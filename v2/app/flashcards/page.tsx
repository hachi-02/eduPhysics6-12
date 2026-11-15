import React from 'react';
import { cookies } from 'next/headers';
import {
  GRADE_COOKIE_NAME,
  isValidGradeNumber,
  type GradeSelection,
} from '@/lib/grade-context';
import { getFlashcardDeckData } from '@/lib/cms-service';
import { V2FlashcardsStudioClient } from '@/components/v2/V2FlashcardsStudioClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Flashcard Lật Thẻ Công Thức & Đơn Vị SI | eduPhysics 6–12',
  description:
    'Ôn tập chủ động (Active Recall & Spaced Repetition) toàn bộ công thức Vật lý và đơn vị chuẩn hệ SI Lớp 6–12.',
};

export default function FlashcardsPage({
  searchParams,
}: {
  searchParams?: { grade?: string };
}) {
  const cookieGrade = cookies().get(GRADE_COOKIE_NAME)?.value;
  const gradeParam = searchParams?.grade;

  let initialGrade: GradeSelection = 'all';
  let hasExplicitGrade = false;

  if (gradeParam === 'all') {
    initialGrade = 'all';
    hasExplicitGrade = true;
  } else if (isValidGradeNumber(gradeParam)) {
    initialGrade = Number(gradeParam);
    hasExplicitGrade = true;
  } else if (isValidGradeNumber(cookieGrade)) {
    initialGrade = Number(cookieGrade);
  }

  const rawData = getFlashcardDeckData();
  const data = JSON.parse(JSON.stringify(rawData)) as typeof rawData;

  return (
    <V2FlashcardsStudioClient
      initialData={data}
      initialGrade={initialGrade}
      hasExplicitGrade={hasExplicitGrade}
    />
  );
}
