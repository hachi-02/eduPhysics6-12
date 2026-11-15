import { NextResponse } from 'next/server';
import { loginAdmin, SESSION_COOKIE_NAME } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    if (!username || !password) {
      return NextResponse.json({ error: 'Vui lòng nhập tài khoản và mật khẩu' }, { status: 400 });
    }

    const result = loginAdmin(username, password);
    if (!result) {
      return NextResponse.json({ error: 'Sai tên đăng nhập hoặc mật khẩu Admin' }, { status: 401 });
    }

    const response = NextResponse.json({
      ok: true,
      displayName: result.displayName,
    });

    response.cookies.set(SESSION_COOKIE_NAME, result.token, {
      httpOnly: true,
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
      sameSite: 'lax',
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Lỗi đăng nhập' }, { status: 500 });
  }
}
