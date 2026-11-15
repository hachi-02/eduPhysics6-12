import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'eduPhysics 6–12 | Hệ Sinh Thái Học & Mô Phỏng Vật Lý Chuẩn GDPT 2018',
  description:
    'Nền tảng tự học Vật lí từ Lớp 6 đến Lớp 12: Mô phỏng 3D Không–Thời gian và Chương trình Vật lí chuẩn GDPT 2018.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="cosmic-theme relative flex min-h-screen flex-col bg-[#03050d] text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950">
        {/* Global Ambient Cosmic Nebula Depth (Non-interactive decorative depth) */}
        <div
          aria-hidden="true"
          className="no-print pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden"
        >
          <div className="animate-blob absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/[0.08] blur-[130px]" />
          <div
            className="animate-blob absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-sky-500/[0.06] blur-[130px]"
            style={{ animationDelay: '2.5s' }}
          />
          <div
            className="animate-blob absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-amber-500/[0.05] blur-[120px]"
            style={{ animationDelay: '5s' }}
          />
        </div>

        <main className="relative z-10 flex-1">{children}</main>
      </body>
    </html>
  );
}
