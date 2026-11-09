import React from 'react';
import { getProblemSandboxData } from '@/lib/cms-service';
import { ProblemSandboxClient } from '@/components/ProblemSandboxClient';

export const dynamic = 'force-dynamic';

export default function ProblemSandboxPage({
  searchParams,
}: {
  searchParams?: { topicId?: string; questionId?: string };
}) {
  const requestedQuestionId = searchParams?.questionId
    ? Number(searchParams.questionId)
    : undefined;
  const requestedTopicId = searchParams?.topicId
    ? Number(searchParams.topicId)
    : undefined;

  const data = getProblemSandboxData(requestedQuestionId);

  const initialTopicId =
    data.initialQuestion?.resolvedTopicId || requestedTopicId || null;
  const initialQuestionId = data.initialQuestion?.id || requestedQuestionId || null;

  return (
    <ProblemSandboxClient
      chapters={data.chapters}
      topics={data.topics}
      simulationByTopicId={data.simulationByTopicId}
      formulasByTopicId={data.formulasByTopicId}
      questionsByTopicId={data.questionsByTopicId}
      initialTopicId={initialTopicId}
      initialQuestionId={initialQuestionId}
    />
  );
}
