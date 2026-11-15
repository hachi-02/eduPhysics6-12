import React from 'react';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getCognitiveTrapMatrixData } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import { CognitiveTrapMatrixClient } from '@/components/CognitiveTrapMatrixClient';

export const metadata: Metadata = {
  title: 'Ma Trận Bẫy Nhận Thức & Điểm Mù Tư Duy | eduPhysics 6–12',
  description:
    'Hệ thống chẩn đoán 6 loại bẫy nhận thức kinh điển trong môn Vật lý theo chuẩn GDPT 2025: Bẫy đổi đơn vị SI, bẫy dấu, bẫy trực giác, nhầm công thức.',
};

export const dynamic = 'force-dynamic';

export default async function CognitiveTrapsPage({
  searchParams,
}: {
  searchParams?: { grade?: string };
}) {
  const gradeFilter = searchParams?.grade ? Number(searchParams.grade) : undefined;
  const data = getCognitiveTrapMatrixData(gradeFilter);
  const cookieStore = await cookies();
  const rawGrade = Number(cookieStore.get(GRADE_COOKIE_NAME)?.value);
  const initialGrade = isValidGradeNumber(rawGrade) ? rawGrade : 6;

  return <CognitiveTrapMatrixClient mistakes={data.mistakes} initialGrade={initialGrade} />;
}
