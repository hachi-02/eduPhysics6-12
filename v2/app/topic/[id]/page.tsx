import React from 'react';
import { notFound } from 'next/navigation';
import { getChapterFullDetail, getTopicFullDetail } from '@/lib/cms-service';
import { GradeContextSync } from '@/components/GradeContextSync';
import {
  V2TopicStudioClient,
  type TopicStudioMode,
} from '@/components/v2/V2TopicStudioClient';

export const dynamic = 'force-dynamic';

export default function TopicStudioPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { tab?: string };
}) {
  const topicId = Number(params.id);
  if (!topicId || Number.isNaN(topicId)) {
    notFound();
  }

  const rawTopic = getTopicFullDetail(topicId);
  if (!rawTopic) {
    notFound();
  }

  const rawChapterDetail = getChapterFullDetail(rawTopic.chapter_id);
  if (!rawChapterDetail) {
    notFound();
  }

  // Normalize SQLite null-prototype objects into strict plain objects for RSC serialization
  const topic = JSON.parse(JSON.stringify(rawTopic)) as NonNullable<typeof rawTopic>;
  const chapterDetail = JSON.parse(JSON.stringify(rawChapterDetail)) as NonNullable<
    typeof rawChapterDetail
  >;

  let initialMode: TopicStudioMode = 'concept';
  const tab = searchParams?.tab;
  if (tab === 'vault' || tab === 'formulas') initialMode = 'vault';
  else if (tab === 'lab' || tab === 'simulation') initialMode = 'lab';
  else if (tab === 'examples') initialMode = 'examples';
  else if (tab === 'exam' || tab === 'quiz') initialMode = 'exam';

  return (
    <>
      <GradeContextSync grade={topic.grade_number} />
      <V2TopicStudioClient
        topic={topic}
        grade={chapterDetail.grade}
        chapter={chapterDetail.chapter}
        chapterTopics={chapterDetail.topics}
        initialMode={initialMode}
      />
    </>
  );
}
