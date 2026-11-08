'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Lock, User, KeyRound, ArrowRight } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Đăng nhập thất bại');
      } else {
        router.push('/admin');
        router.refresh();
      }
    } catch {
      setError('Không thể kết nối máy chủ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lift">
        <div className="relative overflow-hidden bg-brand-gradient p-6 text-center text-white">
          <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-14 -left-8 h-36 w-36 rounded-full bg-accent-300/20 blur-3xl" />
          <div className="relative space-y-2">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">Đăng Nhập Quản Trị CMS Vật Lý</h1>
            <p className="text-xs leading-relaxed text-white/80">
              Quản lý Chương, Chủ đề, Lý thuyết, Công thức, Đại lượng, Mô phỏng & Ngân hàng 25 câu hỏi
              (Lớp 6–12)
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          {error && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-bold text-rose-700">
              {error}
            </div>
          )}

          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Tên đăng nhập Admin</label>
            <div className="relative">
              <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="edu-input pl-10 pr-3 py-2.5 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Mật khẩu</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="edu-input pl-10 pr-3 py-2.5 text-sm"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 rounded-xl border border-brand-200 bg-brand-50 p-3 text-xs text-brand-900">
            <div>
              <span className="font-bold">Tài khoản mặc định:</span> <code>admin</code> /{' '}
              <code>admin123</code>
            </div>
            <button
              type="button"
              onClick={() => {
                setUsername('admin');
                setPassword('admin123');
              }}
              className="inline-flex items-center gap-1 rounded-lg bg-brand-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-soft transition hover:bg-brand-700"
            >
              <KeyRound className="h-3 w-3" /> Điền nhanh
            </button>
          </div>

          <button type="submit" disabled={loading} className="edu-btn-primary w-full py-3 text-sm">
            <span>{loading ? 'Đang xác thực...' : 'Đăng nhập vào CMS'}</span>
            {!loading && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      </div>

      <p className="mt-4 text-center text-[11px] text-slate-400">
        eduPhysics 6–12 • Hệ thống quản trị nội dung Vật lí chuẩn GDPT 2018
      </p>
    </div>
  );
}
