import React from 'react';
import { cookies } from 'next/headers';
import { getAdaptiveTestCenterData } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import { AdaptiveTestCenterClient } from '@/components/AdaptiveTestCenterClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Phòng Khảo thí Thích ứng Thông minh (CAT • IRT 3PL) | eduPhysics',
  description:
    'Hệ thống kiểm tra thích ứng máy tính (Computerized Adaptive Testing) theo mô hình IRT 3 tham số, tự động điều chỉnh độ khó câu hỏi theo năng lực học sinh từ Lớp 6 đến Lớp 12.',
};

export default async function AdaptiveTestPage() {
  const { chapters, topics, questions } = getAdaptiveTestCenterData();
  const cookieStore = await cookies();
  const rawGrade = Number(cookieStore.get(GRADE_COOKIE_NAME)?.value);
  const initialGrade = isValidGradeNumber(rawGrade) ? rawGrade : 6;

  return (
    <AdaptiveTestCenterClient
      chapters={chapters}
      topics={topics}
      questions={questions}
      initialGrade={initialGrade}
    />
  );
}
