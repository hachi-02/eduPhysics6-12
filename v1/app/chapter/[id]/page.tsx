import React from 'react';
import { notFound } from 'next/navigation';
import { getChapterFullDetail } from '@/lib/cms-service';
import { GradeContextSync } from '@/components/GradeContextSync';
import { ChapterWorkspaceClient } from '@/components/ChapterWorkspaceClient';

export const dynamic = 'force-dynamic';

export default function ChapterSummaryAndExamPage({
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

  const detail = getChapterFullDetail(chapterId);
  if (!detail) {
    notFound();
  }

  const initialTab =
    searchParams?.tab === 'exam' ? 'exam' : searchParams?.tab === 'summary' ? 'summary' : undefined;

  return (
    <>
      <GradeContextSync grade={detail.grade.grade_number} />
      <ChapterWorkspaceClient
        chapter={detail.chapter}
        grade={detail.grade}
        topics={detail.topics}
        allQuantities={detail.allQuantities}
        examQuestions={detail.examQuestions}
        initialTab={initialTab}
      />
    </>
  );
}
