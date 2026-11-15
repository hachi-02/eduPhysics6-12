import React, { Suspense } from 'react';
import { cookies } from 'next/headers';
import { getCognitiveTrapMatrixData } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import { V2CognitiveTrapsStudioClient } from '@/components/v2/V2CognitiveTrapsStudioClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Ma Trận Bẫy Nhận Thức & Điểm Mù Tư Duy | eduPhysics 6–12',
  description:
    'Hệ thống chẩn đoán 6 loại bẫy nhận thức kinh điển trong môn Vật lý theo chuẩn GDPT 2025: Bẫy đổi đơn vị SI, bẫy dấu, bẫy trực giác, nhầm công thức.',
};

export default function CognitiveTrapsPage({
  searchParams,
}: {
  searchParams?: { grade?: string };
}) {
  const raw = getCognitiveTrapMatrixData(undefined);
  const mistakes = JSON.parse(JSON.stringify(raw.mistakes)) as typeof raw.mistakes;

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

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#03050d] text-sm text-slate-400">
          Đang tải Ma Trận Bẫy Nhận Thức 6–12...
        </div>
      }
    >
      <V2CognitiveTrapsStudioClient
        mistakes={mistakes}
        initialGrade={initialGrade}
        hasExplicitGrade={hasExplicitGrade}
      />
    </Suspense>
  );
}
