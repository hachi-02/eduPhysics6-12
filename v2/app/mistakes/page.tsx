import React, { Suspense } from 'react';
import { cookies } from 'next/headers';
import { getMistakeNotebookData } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import { V2MistakesStudioClient } from '@/components/v2/V2MistakesStudioClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Sổ Tay Lỗi Sai & Khắc Phục Điểm Mù | eduPhysics 6–12',
  description:
    'Quản lý câu hỏi làm sai theo Chương và Bài học, phân loại bẫy tư duy và luyện tập lại chuẩn cấu trúc Bộ GD&ĐT 2025.',
};

export default function MistakesPage({
  searchParams,
}: {
  searchParams?: { grade?: string; mastered?: string };
}) {
  const activeRaw = getMistakeNotebookData(undefined, false);
  const masteredRaw = getMistakeNotebookData(undefined, true);

  const activeMistakes = JSON.parse(JSON.stringify(activeRaw.mistakes)) as typeof activeRaw.mistakes;
  const masteredMistakes = JSON.parse(
    JSON.stringify(masteredRaw.mistakes)
  ) as typeof masteredRaw.mistakes;

  const gradeParam = searchParams?.grade;
  const hasExplicitGrade = gradeParam === 'all' || isValidGradeNumber(gradeParam);

  let initialGrade: number | 'all' = 'all';
  if (gradeParam === 'all') {
    initialGrade = 'all';
  } else if (isValidGradeNumber(gradeParam)) {
    initialGrade = Number(gradeParam);
  } else {
    const cookieGradeRaw = cookies().get(GRADE_COOKIE_NAME)?.value;
    if (isValidGradeNumber(cookieGradeRaw)) {
      initialGrade = Number(cookieGradeRaw);
    }
  }

  const initialShowMastered = searchParams?.mastered === '1';

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#03050d] text-sm text-slate-400">
          Đang mở Sổ Tay Lỗi Sai 6–12...
        </div>
      }
    >
      <V2MistakesStudioClient
        activeMistakes={activeMistakes}
        masteredMistakes={masteredMistakes}
        initialGrade={initialGrade}
        initialShowMastered={initialShowMastered}
        hasExplicitGrade={hasExplicitGrade}
      />
    </Suspense>
  );
}
