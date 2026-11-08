import React from 'react';
import { getMistakeNotebookData } from '@/lib/cms-service';
import { MistakeNotebookClient } from '@/components/MistakeNotebookClient';

export const dynamic = 'force-dynamic';

export default function MistakeNotebookPage({
  searchParams,
}: {
  searchParams?: { grade?: string; mastered?: string };
}) {
  const gradeNum = searchParams?.grade ? Number(searchParams.grade) : undefined;
  const validGrade = gradeNum && gradeNum >= 6 && gradeNum <= 12 ? gradeNum : undefined;
  const showMastered = searchParams?.mastered === '1';

  const data = getMistakeNotebookData(validGrade, showMastered);

  return (
    <MistakeNotebookClient
      mistakes={data.mistakes}
      activeMistakeCount={data.activeMistakeCount}
      masteredCount={data.masteredCount}
      countsByGrade={data.countsByGrade}
      selectedGrade={validGrade}
      showMastered={showMastered}
    />
  );
}
