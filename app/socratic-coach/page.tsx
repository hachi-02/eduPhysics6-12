import React from 'react';
import { Metadata } from 'next';
import { getSocraticCoachHubData } from '@/lib/cms-service';
import { SocraticCoachClient } from '@/components/SocraticCoachClient';

export const metadata: Metadata = {
  title: 'Gia Sư Ảo Socrates (Phương Pháp Gợi Mở 3 Nấc) | eduPhysics 6–12',
  description:
    'Gia sư ảo hướng dẫn giải bài tập Vật lý K6–K12 theo phương pháp Socrates: chia nhỏ tư duy thành 3 nấc nhận thức, tuyệt đối không mớm đáp án.',
};

export const dynamic = 'force-dynamic';

export default function SocraticCoachPage({
  searchParams,
}: {
  searchParams?: { grade?: string; questionId?: string };
}) {
  const gradeFilter = searchParams?.grade ? Number(searchParams.grade) : undefined;
  const initialQuestionId = searchParams?.questionId ? Number(searchParams.questionId) : undefined;
  const data = getSocraticCoachHubData(gradeFilter);

  return (
    <SocraticCoachClient
      initialQuestions={data.questions}
      initialQuestionId={initialQuestionId}
    />
  );
}
