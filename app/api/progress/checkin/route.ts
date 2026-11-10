import { NextRequest, NextResponse } from 'next/server';
import { toggleTopicStudyCheckin, getProgressDashboardData } from '@/lib/cms-service';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const topicId = Number(body.topicId);
    if (!topicId || Number.isNaN(topicId)) {
      return NextResponse.json({ error: 'Thiếu topicId hợp lệ' }, { status: 400 });
    }

    const completed = typeof body.completed === 'boolean' ? body.completed : undefined;
    const result = toggleTopicStudyCheckin(topicId, completed);
    const dashboard = getProgressDashboardData();

    return NextResponse.json({
      ok: true,
      result,
      dashboard,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Lỗi khi cập nhật trạng thái bài học' },
      { status: 500 }
    );
  }
}
