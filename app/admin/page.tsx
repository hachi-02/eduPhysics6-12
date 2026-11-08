import React from 'react';
import { redirect } from 'next/navigation';
import { getAdminFromCookie } from '@/lib/auth';
import {
  getAllGradesWithStats,
  getGradeCurriculumBoard,
  getTopicFullDetail,
} from '@/lib/cms-service';
import { AdminCmsDashboard } from '@/components/AdminCmsDashboard';

export const dynamic = 'force-dynamic';

export default function AdminPage({
  searchParams,
}: {
  searchParams?: { grade?: string; topicId?: string };
}) {
  const admin = getAdminFromCookie();
  if (!admin) {
    redirect('/admin/login');
  }

  const allGrades = getAllGradesWithStats();
  const gradeNum = Number(searchParams?.grade || 6);
  const board = getGradeCurriculumBoard(gradeNum) || getGradeCurriculumBoard(6)!;

  let activeTopicId = Number(searchParams?.topicId || 0);
  if (!activeTopicId) {
    const firstTopic = board.chapters.find((c) => c.topics && c.topics.length > 0)?.topics?.[0];
    if (firstTopic) {
      activeTopicId = firstTopic.id;
    }
  }

  const activeTopicDetail = activeTopicId ? getTopicFullDetail(activeTopicId) : null;

  return (
    <AdminCmsDashboard
      adminName={admin.display_name}
      allGrades={allGrades}
      selectedGrade={board.grade}
      chapters={board.chapters}
      activeTopicDetail={activeTopicDetail}
    />
  );
}
