import React from 'react';
import { cookies } from 'next/headers';
import {
  getActiveMistakeCount,
  getAllGradesWithStats,
  getGradeCurriculumBoard,
} from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber, type GradeSelection } from '@/lib/grade-context';
import { V2HomeDemoClient } from '@/components/v2/V2HomeDemoClient';
import type { ChapterItem, GradeItem, GradeProgressStats } from '@/types/cms';

export const dynamic = 'force-dynamic';

export default function HomePageV2({
  searchParams,
}: {
  searchParams?: { grade?: string };
}) {
  const allGrades = getAllGradesWithStats();
  const cookieGrade = cookies().get(GRADE_COOKIE_NAME)?.value;
  const paramGrade = searchParams?.grade;

  const hasValidGrade = (num: number) => allGrades.some((g) => g.grade_number === num);

  let initialGrade: GradeSelection = 'all';
  let hasInitialSavedGrade = false;

  if (paramGrade === 'all') {
    initialGrade = 'all';
    hasInitialSavedGrade = true;
  } else if (paramGrade && isValidGradeNumber(Number(paramGrade)) && hasValidGrade(Number(paramGrade))) {
    initialGrade = Number(paramGrade);
    hasInitialSavedGrade = true;
  } else if (cookieGrade === 'all') {
    initialGrade = 'all';
    hasInitialSavedGrade = true;
  } else if (cookieGrade && isValidGradeNumber(Number(cookieGrade)) && hasValidGrade(Number(cookieGrade))) {
    initialGrade = Number(cookieGrade);
    hasInitialSavedGrade = true;
  }

  const boardsByGrade: Record<
    number,
    { grade: GradeItem; chapters: ChapterItem[]; stats: GradeProgressStats }
  > = {};

  for (const g of allGrades) {
    const board = getGradeCurriculumBoard(g.grade_number);
    if (board) {
      // Strip heavy markdown/cheatsheet arrays unused on homepage to shrink RSC payload (>90%)
      boardsByGrade[g.grade_number] = {
        grade: board.grade,
        stats: board.stats,
        chapters: board.chapters.map((ch) => ({
          ...ch,
          summary_markdown: '',
          key_takeaways: [],
          formula_cheatsheet: [],
        })),
      };
    }
  }

  const activeMistakeCount = getActiveMistakeCount();

  const plainGrades = JSON.parse(JSON.stringify(allGrades)) as GradeItem[];
  const plainBoards = JSON.parse(JSON.stringify(boardsByGrade)) as typeof boardsByGrade;

  return (
    <V2HomeDemoClient
      allGrades={plainGrades}
      boardsByGrade={plainBoards}
      initialGrade={initialGrade}
      hasInitialSavedGrade={hasInitialSavedGrade}
      activeMistakeCount={activeMistakeCount}
    />
  );
}
