import React from 'react';
import { cookies } from 'next/headers';
import {
  GRADE_COOKIE_NAME,
  isValidGradeNumber,
  type GradeSelection,
} from '@/lib/grade-context';
import {
  V2CalculatorStudioClient,
  type CalculatorStudioMode,
} from '@/components/v2/V2CalculatorStudioClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Trợ Lý Quy Đổi Đơn Vị SI & Giải Công Thức | eduPhysics 6–12',
  description:
    'Công cụ quy đổi đơn vị chuẩn SI kèm đạo hàm lũy thừa, rút ẩn công thức Vật lý 4 bước và bảng hằng số CODATA Lớp 6–12.',
};

export default function PhysicsCalculatorPage({
  searchParams,
}: {
  searchParams?: { tab?: string; grade?: string; formula?: string };
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

  let initialMode: CalculatorStudioMode = 'converter';
  const tab = searchParams?.tab;
  if (tab === 'solver' || tab === 'formula') {
    initialMode = 'solver';
  } else if (tab === 'constants' || tab === 'codata') {
    initialMode = 'constants';
  }

  const initialFormulaId =
    typeof searchParams?.formula === 'string' && searchParams.formula.trim()
      ? searchParams.formula.trim()
      : undefined;

  return (
    <V2CalculatorStudioClient
      initialGrade={initialGrade}
      hasExplicitGrade={hasExplicitGrade}
      initialMode={initialMode}
      initialFormulaId={initialFormulaId}
    />
  );
}
