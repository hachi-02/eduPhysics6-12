import React from 'react';
import { notFound } from 'next/navigation';
import { getChapterFullDetail } from '@/lib/cms-service';
import { GradeContextSync } from '@/components/GradeContextSync';
import {
  V2ChapterStudioClient,
  type StudioMode,
} from '@/components/v2/V2ChapterStudioClient';

export const dynamic = 'force-dynamic';

export default function ChapterStudioPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { tab?: string };
}) {
  const chapterId = Number(params.id);
  if (!chapterId || Number.isNaN(chapterId)) {
    notFound();
  }

  const rawDetail = getChapterFullDetail(chapterId);
  if (!rawDetail) {
    notFound();
  }

  // Normalize null-prototype SQLite rows to strict plain objects for RSC serialization
  const detail = JSON.parse(JSON.stringify(rawDetail)) as NonNullable<typeof rawDetail>;

  let initialMode: StudioMode = 'overview';
  if (searchParams?.tab === 'exam') initialMode = 'exam';
  else if (searchParams?.tab === 'vault') initialMode = 'vault';
  else if (searchParams?.tab === 'history') initialMode = 'history';

  return (
    <>
      <GradeContextSync grade={detail.grade.grade_number} />
      <V2ChapterStudioClient
        chapter={detail.chapter}
        grade={detail.grade}
        topics={detail.topics}
        allQuantities={detail.allQuantities}
        allFormulas={detail.allFormulas}
        examQuestions={detail.examQuestions}
        recentAttempts={detail.recentAttempts}
        initialMode={initialMode}
      />
    </>
  );
}
