import React from 'react';
import { notFound } from 'next/navigation';
import { getChapterFullDetail } from '@/lib/cms-service';
import { ChapterWorkspaceClient } from '@/components/ChapterWorkspaceClient';

export const dynamic = 'force-dynamic';

export default function ChapterSummaryAndExamPage({
  params,
}: {
  params: { id: string };
}) {
  const chapterId = Number(params.id);
  if (!chapterId || Number.isNaN(chapterId)) {
    notFound();
  }

  const detail = getChapterFullDetail(chapterId);
  if (!detail) {
    notFound();
  }

  return (
    <ChapterWorkspaceClient
      chapter={detail.chapter}
      grade={detail.grade}
      topics={detail.topics}
      allQuantities={detail.allQuantities}
      examQuestions={detail.examQuestions}
    />
  );
}
