import React, { Suspense } from 'react';
import { cookies } from 'next/headers';
import { getKnowledgeGraphRuntimeData } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import { V2KnowledgeGraphStudioClient } from '@/components/v2/V2KnowledgeGraphStudioClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Bản đồ Tri thức DAG & Truy vết Lỗ hổng 6–12 | eduPhysics',
  description:
    'Đồ thị phụ thuộc kiến thức Vật lý Lớp 6–12 sử dụng thuật toán Topological Backtracking truy vết lỗ hổng tiền đề.',
};

export default function KnowledgeGraphPage({
  searchParams,
}: {
  searchParams?: { grade?: string; topic?: string };
}) {
  const raw = getKnowledgeGraphRuntimeData();
  const data = JSON.parse(JSON.stringify(raw)) as typeof raw;

  const cookieGradeRaw = cookies().get(GRADE_COOKIE_NAME)?.value;
  const gradeParam = searchParams?.grade;
  const initialGrade = isValidGradeNumber(gradeParam)
    ? Number(gradeParam)
    : isValidGradeNumber(cookieGradeRaw)
      ? Number(cookieGradeRaw)
      : null;

  const initialTopicCode = searchParams?.topic ? String(searchParams.topic) : null;

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#03050d] text-sm text-slate-400">
          Đang tải Bản đồ Tri thức DAG 6–12...
        </div>
      }
    >
      <V2KnowledgeGraphStudioClient
        topics={data.topics}
        diagnosticQuestionsByCode={data.diagnosticQuestionsByCode}
        initialGrade={initialGrade}
        initialTopicCode={initialTopicCode}
      />
    </Suspense>
  );
}
