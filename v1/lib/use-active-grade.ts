'use client';

import { useState, useEffect } from 'react';
import {
  GRADE_STORAGE_KEY,
  getSavedActiveGrade,
  isValidGradeNumber,
} from '@/lib/grade-context';

/**
 * React hook returning the active grade (6–12), initialized from SSR cookie
 * and kept in sync with localStorage + `eduphysics-grade-change` events.
 */
export function useActiveGrade(initialGrade: number = 6): number {
  const [activeGrade, setActiveGrade] = useState<number>(
    isValidGradeNumber(initialGrade) ? initialGrade : 6
  );

  useEffect(() => {
    const saved = getSavedActiveGrade(initialGrade);
    if (isValidGradeNumber(saved)) {
      setActiveGrade(saved);
    }

    const handleGradeChange = (e: Event) => {
      const custom = e as CustomEvent<{ grade?: number }>;
      const next = custom?.detail?.grade;
      if (isValidGradeNumber(next)) {
        setActiveGrade(next);
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === GRADE_STORAGE_KEY && e.newValue) {
        const next = Number(e.newValue);
        if (isValidGradeNumber(next)) {
          setActiveGrade(next);
        }
      }
    };

    window.addEventListener('eduphysics-grade-change', handleGradeChange);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('eduphysics-grade-change', handleGradeChange);
      window.removeEventListener('storage', handleStorage);
    };
  }, [initialGrade]);

  return activeGrade;
}
