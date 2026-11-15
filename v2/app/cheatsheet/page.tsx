import React from 'react';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { getAllGradesWithStats, getCheatsheetData } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import type { CheatsheetGradeData } from '@/types/cms';
import { V2CheatsheetStudioClient } from '@/components/v2/V2CheatsheetStudioClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Cẩm nang Công thức & Đơn vị SI Khổ A4 | eduPhysics 6–12',
  description:
    'Tổng hợp công thức trọng tâm, bảng đại lượng chuẩn SI và tài liệu ôn thi in khổ A4 từ Lớp 6 đến Lớp 12.',
};

export default function CheatsheetPage({
  searchParams,
}: {
  searchParams?: { grade?: string; chapterId?: string };
}) {
  const gradesRaw = getAllGradesWithStats();
  const grades = JSON.parse(JSON.stringify(gradesRaw)) as typeof gradesRaw;

  const cookieGradeRaw = cookies().get(GRADE_COOKIE_NAME)?.value;
  const gradeParam = searchParams?.grade;
  const hasExplicitGrade = isValidGradeNumber(gradeParam);
  const requestedGrade = hasExplicitGrade
    ? Number(gradeParam)
    : isValidGradeNumber(cookieGradeRaw)
      ? Number(cookieGradeRaw)
      : 6;

  const validGrade = grades.find((g) => g.grade_number === requestedGrade) || grades[0];
  if (!validGrade) {
    notFound();
  }

  const cheatsheetsByGrade: Record<number, CheatsheetGradeData> = {};
  for (const g of grades) {
    const raw = getCheatsheetData(g.grade_number);
    if (raw) {
      cheatsheetsByGrade[g.grade_number] = JSON.parse(JSON.stringify(raw)) as CheatsheetGradeData;
    }
  }

  if (!cheatsheetsByGrade[validGrade.grade_number]) {
    notFound();
  }

  const chapterId = searchParams?.chapterId ? parseInt(searchParams.chapterId, 10) : undefined;

  return (
    <V2CheatsheetStudioClient
      cheatsheetsByGrade={cheatsheetsByGrade}
      allGrades={grades}
      initialGrade={validGrade.grade_number}
      hasExplicitGrade={hasExplicitGrade}
      initialChapterId={Number.isFinite(chapterId) ? chapterId : undefined}
    />
  );
}
