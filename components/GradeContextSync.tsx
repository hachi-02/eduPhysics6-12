'use client';

import { useEffect } from 'react';
import { saveActiveGrade } from '@/lib/grade-context';

export function GradeContextSync({ grade }: { grade: number }) {
  useEffect(() => {
    saveActiveGrade(grade);
  }, [grade]);

  return null;
}
