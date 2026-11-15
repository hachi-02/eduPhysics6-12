'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BarChart3 } from 'lucide-react';
import { saveActiveGrade, isValidGradeNumber } from '@/lib/grade-context';
import type { GradeItem } from '@/types/cms';

interface GradeTabsSwitcherProps {
  thcsGrades: GradeItem[];
  thptGrades: GradeItem[];
  selectedGradeNum: number;
}

export function GradeTabsSwitcher({
  thcsGrades,
  thptGrades,
  selectedGradeNum,
}: GradeTabsSwitcherProps) {
  const router = useRouter();
  const [activeGrade, setActiveGrade] = useState<number>(selectedGradeNum);

  useEffect(() => {
    setActiveGrade(selectedGradeNum);
  }, [selectedGradeNum]);

  useEffect(() => {
    const onGradeChange = (e: Event) => {
      const custom = e as CustomEvent<{ grade?: number }>;
      if (custom.detail?.grade && isValidGradeNumber(custom.detail.grade)) {
        setActiveGrade(custom.detail.grade);
      }
    };
    window.addEventListener('eduphysics-grade-change', onGradeChange);
    return () => window.removeEventListener('eduphysics-grade-change', onGradeChange);
  }, []);

  const handleSelectGrade = (gradeNumber: number) => {
    setActiveGrade(gradeNumber);
    saveActiveGrade(gradeNumber);
  };

  const getButtonActiveClass = (gradeNumber: number) => {
    switch (gradeNumber) {
      case 6:
        return 'bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-400 text-white scale-105 shadow-md shadow-sky-500/30';
      case 7:
        return 'bg-gradient-to-r from-emerald-600 via-amber-400 to-blue-600 text-white scale-105 shadow-md shadow-emerald-600/30';
      case 8:
        return 'bg-gradient-to-r from-purple-900 via-violet-700 to-orange-500 text-white scale-105 shadow-md shadow-orange-500/30';
      case 9:
        return 'bg-gradient-to-r from-slate-950 via-amber-700 to-amber-500 text-white scale-105 shadow-md shadow-amber-600/30';
      case 10:
        return 'bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 text-white scale-105 shadow-md shadow-red-600/30';
      case 11:
        return 'bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-400 text-white scale-105 shadow-md shadow-purple-600/30';
      case 12:
        return 'bg-gradient-to-r from-black via-red-700 to-orange-500 text-white scale-105 shadow-md shadow-red-700/30';
      default:
        return 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white scale-105';
    }
  };

  return (
    <div className="flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-5 lg:flex-row lg:items-center">
      <div className="flex max-w-full flex-wrap items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
        {/* THCS Group */}
        <div className="flex items-center gap-0.5 sm:gap-1 rounded-2xl border border-white/15 bg-slate-950/50 p-1 sm:p-1.5 backdrop-blur-md shrink-0">
          <span className="px-1.5 sm:px-2 text-[10px] font-extrabold uppercase tracking-wider text-cyan-200">
            THCS
          </span>
          {thcsGrades.map((g) => {
            const isSelected = g.grade_number === activeGrade;
            return (
              <Link
                key={g.grade_number}
                href={`/?grade=${g.grade_number}`}
                onClick={() => handleSelectGrade(g.grade_number)}
                className={`whitespace-nowrap rounded-xl px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-extrabold transition-all duration-200 ease-snap ${
                  isSelected
                    ? getButtonActiveClass(g.grade_number)
                    : 'text-indigo-100 hover:bg-white/15 hover:text-white'
                }`}
              >
                Lớp {g.grade_number}
              </Link>
            );
          })}
        </div>

        {/* THPT Group */}
        <div className="flex items-center gap-0.5 sm:gap-1 rounded-2xl border border-white/15 bg-slate-950/50 p-1 sm:p-1.5 backdrop-blur-md shrink-0">
          <span className="px-1.5 sm:px-2 text-[10px] font-extrabold uppercase tracking-wider text-cyan-300">
            THPT
          </span>
          {thptGrades.map((g) => {
            const isSelected = g.grade_number === activeGrade;
            return (
              <Link
                key={g.grade_number}
                href={`/?grade=${g.grade_number}`}
                onClick={() => handleSelectGrade(g.grade_number)}
                className={`whitespace-nowrap rounded-xl px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-extrabold transition-all duration-200 ease-snap ${
                  isSelected
                    ? getButtonActiveClass(g.grade_number)
                    : 'text-cyan-100 hover:bg-white/15 hover:text-white'
                }`}
              >
                Lớp {g.grade_number}
              </Link>
            );
          })}
        </div>
      </div>

      <Link
        href="/progress"
        className="inline-flex items-center gap-1.5 rounded-2xl border border-emerald-400/45 bg-emerald-950/60 px-3.5 py-2 text-xs font-extrabold text-emerald-200 backdrop-blur-md transition hover:bg-emerald-500/30 hover:text-white"
      >
        <BarChart3 className="h-4 w-4 text-emerald-300" />
        <span>Xem Bản đồ Tiến độ 92 chủ đề →</span>
      </Link>
    </div>
  );
}
