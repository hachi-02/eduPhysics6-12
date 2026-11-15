import React from 'react';
import { notFound } from 'next/navigation';
import { getTopicFullDetail } from '@/lib/cms-service';
import { GradeContextSync } from '@/components/GradeContextSync';
import { TopicWorkspaceClient } from '@/components/TopicWorkspaceClient';

export const dynamic = 'force-dynamic';

export default function TopicDetailPage({ params }: { params: { id: string } }) {
  const topicId = Number(params.id);
  if (!topicId || Number.isNaN(topicId)) {
    notFound();
  }

  const topic = getTopicFullDetail(topicId);
  if (!topic) {
    notFound();
  }

  return (
    <>
      <GradeContextSync grade={topic.grade_number} />
      <TopicWorkspaceClient topic={topic} />
    </>
  );
}
