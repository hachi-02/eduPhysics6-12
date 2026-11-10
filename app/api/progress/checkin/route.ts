import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
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

    try {
      revalidatePath('/', 'layout');
      revalidatePath('/topic/[id]', 'page');
      revalidatePath('/progress', 'page');
    } catch {
      // Safe fallback in unit test environments outside Next.js request context
    }

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
