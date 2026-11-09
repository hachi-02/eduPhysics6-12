import React from 'react';
import { Metadata } from 'next';
import { getCognitiveTrapMatrixData } from '@/lib/cms-service';
import { CognitiveTrapMatrixClient } from '@/components/CognitiveTrapMatrixClient';

export const metadata: Metadata = {
  title: 'Ma Trận Bẫy Nhận Thức & Điểm Mù Tư Duy | eduPhysics 6–12',
  description:
    'Hệ thống chẩn đoán 6 loại bẫy nhận thức kinh điển trong môn Vật lý theo chuẩn GDPT 2025: Bẫy đổi đơn vị SI, bẫy dấu, bẫy trực giác, nhầm công thức.',
};

export const dynamic = 'force-dynamic';

export default function CognitiveTrapsPage({
  searchParams,
}: {
  searchParams?: { grade?: string };
}) {
  const gradeFilter = searchParams?.grade ? Number(searchParams.grade) : undefined;
  const data = getCognitiveTrapMatrixData(gradeFilter);

  return <CognitiveTrapMatrixClient mistakes={data.mistakes} />;
}
