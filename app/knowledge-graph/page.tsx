import React, { Suspense } from 'react';
import { getKnowledgeGraphRuntimeData } from '@/lib/cms-service';
import { KnowledgeGraphClient } from '@/components/KnowledgeGraphClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Đồ thị Tri thức & Truy vết Lỗ hổng Tiền đề (Lớp 6–12) | eduPhysics',
  description:
    'Hệ thống Đồ thị Tri thức có hướng không chu trình (DAG) xuyên suốt Vật lý lớp 6–12 và thuật toán Topological Backtracking truy vết nguyên nhân gốc rễ khi mất gốc kiến thức.',
};

export default function KnowledgeGraphPage() {
  const { topics, diagnosticQuestionsByCode } = getKnowledgeGraphRuntimeData();

  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1440px] px-4 py-12 text-center text-sm font-semibold text-slate-500">
          Đang khởi tạo Đồ thị Tri thức DAG xuyên lớp 6–12...
        </div>
      }
    >
      <KnowledgeGraphClient
        initialTopics={topics}
        diagnosticQuestionsByCode={diagnosticQuestionsByCode}
      />
    </Suspense>
  );
}
