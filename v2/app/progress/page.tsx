import React from 'react';
import { cookies } from 'next/headers';
import {
  GRADE_COOKIE_NAME,
  isValidGradeNumber,
  type GradeSelection,
} from '@/lib/grade-context';
import { getProgressDashboardData } from '@/lib/cms-service';
import { V2ProgressStudioClient } from '@/components/v2/V2ProgressStudioClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Tiến Độ & Hồ Sơ Năng Lực | eduPhysics 6–12',
  description:
    'Theo dõi tiến độ 92 chủ đề Vật lý 6–12, tháp năng lực 4 cấp độ chuẩn Bộ GD&ĐT và lộ trình học tập hàng ngày.',
};

export default function ProgressPage({
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

  const rawData = getProgressDashboardData();
  const data = JSON.parse(JSON.stringify(rawData)) as typeof rawData;

  return (
    <V2ProgressStudioClient
      initialData={data}
      initialGrade={initialGrade}
      hasExplicitGrade={hasExplicitGrade}
    />
  );
}
