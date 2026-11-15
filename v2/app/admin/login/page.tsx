'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MotionConfig, motion } from 'framer-motion';
import gsap from 'gsap';
import {
  ArrowLeft,
  ArrowRight,
  KeyRound,
  Lock,
  ShieldCheck,
  Sparkles,
  User,
} from 'lucide-react';
import { RETURN_TO_CURRICULUM_KEY } from '@/lib/grade-context';

export default function AdminLoginPage() {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.login-stagger', {
        y: 16,
        opacity: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const markReturnToCurriculum = () => {
    try {
      sessionStorage.setItem(RETURN_TO_CURRICULUM_KEY, '1');
    } catch {
      // ignore
    }
  };

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
    <MotionConfig reducedMotion="user">
      <div
        ref={rootRef}
        className="relative flex min-h-screen flex-col justify-between bg-[#03050d] text-slate-100 selection:bg-cyan-500/30"
      >
        {/* Subtle Deep-Space Nebula Glows */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />
          <div className="absolute bottom-0 right-1/3 h-[460px] w-[460px] rounded-full bg-purple-500/[0.06] blur-[140px]" />
        </div>

        {/* Sticky Obsidian Command Bar */}
        <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#03050d]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2.5 lg:flex-nowrap">
            <div className="flex shrink-0 items-center gap-2.5 whitespace-nowrap">
              <Link
                href="/#curriculum-app"
                scroll={false}
                onClick={markReturnToCurriculum}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-200"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Giáo trình</span>
              </Link>
              <span className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                <span>Cổng Quản Trị CMS SQLite</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
              <Sparkles className="h-3 w-3" />
              <span>eduPhysics 6–12</span>
            </div>
          </div>
        </header>

        {/* Centered Obsidian Login Card */}
        <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="login-stagger w-full max-w-md overflow-hidden rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 shadow-2xl backdrop-blur-xl"
          >
            <div className="border-b border-white/[0.06] bg-gradient-to-br from-cyan-500/15 via-[#070b1a] to-purple-500/15 p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/15 text-cyan-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h1 className="mt-4 text-xl font-bold tracking-tight text-white">
                Đăng Nhập Quản Trị CMS Vật Lý
              </h1>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                Quản lý Chương, Chủ đề, Lý thuyết, Công thức KaTeX, Đại lượng SI &amp; Ngân hàng câu hỏi Lớp 6–12
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-6">
              {error && (
                <div className="rounded-xl border border-rose-400/35 bg-rose-500/15 p-3 text-xs font-semibold text-rose-200">
                  {error}
                </div>
              )}

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Tên đăng nhập Admin
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#03050d] py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400/45 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Mật khẩu
                </label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#03050d] py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400/45 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-xs text-cyan-100">
                <div>
                  <span className="font-semibold">Tài khoản mặc định: </span>
                  <code className="font-mono text-cyan-200">admin</code> /{' '}
                  <code className="font-mono text-cyan-200">admin123</code>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setUsername('admin');
                    setPassword('admin123');
                  }}
                  className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-cyan-400/35 bg-cyan-500/20 px-2.5 py-1 text-[11px] font-bold text-cyan-100 transition-colors hover:bg-cyan-500/30"
                >
                  <KeyRound className="h-3 w-3" /> Điền nhanh
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/45 bg-cyan-500/20 px-4 py-3 text-sm font-bold text-cyan-100 transition-all hover:bg-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span>{loading ? 'Đang xác thực...' : 'Đăng nhập vào CMS'}</span>
                {!loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </motion.div>
        </main>

        <footer className="relative z-10 pb-6 text-center text-[11px] text-slate-500">
          eduPhysics 6–12 · Hệ thống quản trị nội dung Vật lí chuẩn GDPT 2018 &amp; 2025
        </footer>
      </div>
    </MotionConfig>
  );
}
