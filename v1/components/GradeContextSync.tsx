'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getSavedActiveGrade, saveActiveGrade } from '@/lib/grade-context';

export function GradeContextSync({
  grade,
  isExplicit = true,
}: {
  grade: number;
  isExplicit?: boolean;
}) {
  const router = useRouter();

  useEffect(() => {
    if (isExplicit) {
      saveActiveGrade(grade);
      return;
    }

    // When visiting `/` without `?grade=...`, do NOT overwrite a previously saved grade!
    // Instead, restore the saved grade immediately if the server/cache rendered a different grade.
    const saved = getSavedActiveGrade(grade);
    if (saved !== grade) {
      router.replace(`/?grade=${saved}`);
    } else {
      saveActiveGrade(saved);
    }
  }, [grade, isExplicit, router]);

  return null;
}
