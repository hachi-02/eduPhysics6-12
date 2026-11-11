import React from 'react';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { getAllGradesWithStats, getCheatsheetData } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import CheatsheetViewer from '@/components/CheatsheetViewer';

interface CheatsheetPageProps {
  searchParams: {
    grade?: string;
    chapterId?: string;
  };
}

export const dynamic = 'force-dynamic';

export default function CheatsheetPage({ searchParams }: CheatsheetPageProps) {
  const grades = getAllGradesWithStats();
  const cookieGradeRaw = cookies().get(GRADE_COOKIE_NAME)?.value;
  const fallbackGrade = isValidGradeNumber(cookieGradeRaw) ? Number(cookieGradeRaw) : 6;
  const gradeNumber = searchParams.grade ? parseInt(searchParams.grade, 10) : fallbackGrade;
  const chapterId = searchParams.chapterId ? parseInt(searchParams.chapterId, 10) : undefined;

  const validGrade = grades.find((g) => g.grade_number === gradeNumber) || grades[0];
  if (!validGrade) {
    notFound();
  }

  const cheatsheetData = getCheatsheetData(validGrade.grade_number);
  if (!cheatsheetData) {
    notFound();
  }

  return (
    <CheatsheetViewer
      data={cheatsheetData}
      allGrades={grades}
      selectedGrade={validGrade.grade_number}
      initialChapterId={chapterId}
    />
  );
}
