import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { BookOpen, Settings, AlertCircle } from 'lucide-react';
import { getAdminFromCookie } from '@/lib/auth';
import { getActiveMistakeCount } from '@/lib/cms-service';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';

export const metadata: Metadata = {
  title: 'Vật Lý 6–12 | Tự học Vật lý chuẩn SGK',
  description:
    'Nền tảng tự học Vật lý từ Lớp 6 đến Lớp 12: Lý thuyết, Công thức, Đại lượng, Mô phỏng và Trắc nghiệm 25 câu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = getAdminFromCookie();
  const activeMistakeCount = getActiveMistakeCount();

  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
        {/* Minimalist Distraction-Free Header */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                VL
              </div>
              <span className="font-bold text-base text-slate-900 tracking-tight">
                Vật Lý Tự Học <span className="text-indigo-600">6–12</span>
              </span>
            </Link>

            <div className="flex-1 max-w-xs mx-3 hidden sm:block">
              <GlobalSearchModal />
            </div>

            <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <div className="sm:hidden">
                <GlobalSearchModal />
              </div>

              <Link
                href="/"
                className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5 transition"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>Chương trình học</span>
              </Link>

              <Link
                href="/mistakes"
                className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-rose-700 hover:bg-rose-50/70 flex items-center gap-1.5 transition"
              >
                <AlertCircle className="w-4 h-4 text-rose-500" />
                <span>Sổ tay câu sai</span>
                {activeMistakeCount > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-700 font-bold text-[11px]">
                    {activeMistakeCount}
                  </span>
                )}
              </Link>

              <Link
                href={admin ? '/admin' : '/admin/login'}
                className="px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5 transition"
              >
                <Settings className="w-4 h-4" />
                <span>{admin ? 'CMS' : 'Quản trị'}</span>
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
