import React, { Suspense } from 'react';
import { cookies } from 'next/headers';
import { getAdaptiveTestCenterData } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import { V2AdaptiveTestStudioClient } from '@/components/v2/V2AdaptiveTestStudioClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Phòng Khảo thí Thích ứng CAT · IRT 3PL | eduPhysics 6–12',
  description:
    'Hệ thống thi trắc nghiệm thích ứng theo Lý thuyết Ứng đáp Câu hỏi 3 tham số (IRT 3PL), ước lượng năng lực Theta và dự báo điểm chuẩn hóa.',
};

export default function AdaptiveTestPage({
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
          Đang khởi tạo Phòng Khảo thí Thích ứng CAT...
        </div>
      }
    >
      <V2AdaptiveTestStudioClient
        chapters={data.chapters}
        topics={data.topics}
        questions={data.questions}
        initialGrade={initialGrade}
      />
    </Suspense>
  );
}
