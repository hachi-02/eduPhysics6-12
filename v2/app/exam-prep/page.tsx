import React, { Suspense } from 'react';
import { cookies } from 'next/headers';
import { getAdaptiveTestCenterData } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import { V2ExamPrepStudioClient } from '@/components/v2/V2ExamPrepStudioClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Kho Đề Thi Các Năm (2021–2025) | eduPhysics 6–12',
  description:
    'Ôn thi với bộ đề kiểm tra Giữa kỳ, Cuối kỳ, Tuyển sinh 10 và Tốt nghiệp THPT Vật Lý qua các năm từ Lớp 6 đến Lớp 12.',
};

export default function ExamPrepPage({
  searchParams,
}: {
  searchParams?: { grade?: string };
}) {
  const raw = getAdaptiveTestCenterData();
  const data = JSON.parse(JSON.stringify(raw)) as typeof raw;

  const cookieGradeRaw = cookies().get(GRADE_COOKIE_NAME)?.value;
  const gradeParam = searchParams?.grade;
  const initialGrade = isValidGradeNumber(gradeParam)
    ? Number(gradeParam)
    : isValidGradeNumber(cookieGradeRaw)
      ? Number(cookieGradeRaw)
      : null;

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#03050d] text-sm text-slate-400">
          Đang tải Kho Đề Thi Các Năm...
        </div>
      }
    >
      <V2ExamPrepStudioClient
        chapters={data.chapters}
        questions={data.questions}
        initialGrade={initialGrade}
      />
    </Suspense>
  );
}
