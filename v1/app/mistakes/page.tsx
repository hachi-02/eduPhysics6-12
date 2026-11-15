import React from 'react';
import { cookies } from 'next/headers';
import { getMistakeNotebookData } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import { MistakeNotebookClient } from '@/components/MistakeNotebookClient';

export const dynamic = 'force-dynamic';

export default function MistakeNotebookPage({
  searchParams,
}: {
  searchParams?: { grade?: string; mastered?: string };
}) {
  const cookieGradeRaw = cookies().get(GRADE_COOKIE_NAME)?.value;
  const cookieGrade = isValidGradeNumber(cookieGradeRaw) ? Number(cookieGradeRaw) : undefined;

  let validGrade: number | undefined;
  if (searchParams?.grade === 'all') {
    validGrade = undefined;
  } else if (searchParams?.grade) {
    const gradeNum = Number(searchParams.grade);
    validGrade = gradeNum >= 6 && gradeNum <= 12 ? gradeNum : cookieGrade;
  } else {
    validGrade = cookieGrade;
  }
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
