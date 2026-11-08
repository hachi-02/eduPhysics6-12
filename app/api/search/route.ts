import { NextResponse } from 'next/server';
import { searchKnowledgeBase } from '@/lib/cms-service';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q') || '';
    if (!q.trim()) {
      return NextResponse.json({ formulas: [], quantities: [], topics: [] });
    }

    const results = searchKnowledgeBase(q);
    return NextResponse.json(results);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Lỗi tìm kiếm' }, { status: 500 });
  }
}
