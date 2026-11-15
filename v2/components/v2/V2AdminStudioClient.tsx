'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import {
  ArrowLeft,
  BookOpen,
  Calculator,
  CheckCircle2,
  Database,
  ExternalLink,
  HelpCircle,
  Layers,
  LogOut,
  Plus,
  Save,
  Settings2,
  Sparkles,
  Trash2,
  Upload,
} from 'lucide-react';
import type { ChapterItem, GradeItem, TopicDetail } from '@/types/cms';
import { KatexFormula } from '@/components/KatexRenderer';
import { RETURN_TO_CURRICULUM_KEY } from '@/lib/grade-context';

interface Props {
  adminName: string;
  allGrades: GradeItem[];
  selectedGrade: GradeItem;
  chapters: ChapterItem[];
  activeTopicDetail: TopicDetail | null;
}

export function V2AdminStudioClient({
  adminName,
  allGrades,
  selectedGrade,
  chapters,
  activeTopicDetail,
}: Props) {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);

  const [statusMsg, setStatusMsg] = useState('');
  const [editorTab, setEditorTab] = useState<
    'overview' | 'formulas' | 'examples' | 'questions'
  >('overview');

  // Create Chapter states
  const [newChCode, setNewChCode] = useState('');
  const [newChTitle, setNewChTitle] = useState('');
  const [newChDesc, setNewChDesc] = useState('');

  // Create Topic states
  const [targetChapterId, setTargetChapterId] = useState<number>(chapters[0]?.id || 0);
  const [newTpCode, setNewTpCode] = useState('');
  const [newTpTitle, setNewTpTitle] = useState('');
  const [newTpOverview, setNewTpOverview] = useState('');
  const [newTpHeading, setNewTpHeading] = useState('1. Kiến thức trọng tâm');
  const [newTpContent, setNewTpContent] = useState('');

  // Update active Topic states
  const [editTitle, setEditTitle] = useState(activeTopicDetail?.title || '');
  const [editOverview, setEditOverview] = useState(activeTopicDetail?.overview || '');
  const [editSummary, setEditSummary] = useState(activeTopicDetail?.summary_note || '');

  useEffect(() => {
    setTargetChapterId((prev) =>
      chapters.some((c) => c.id === prev) ? prev : chapters[0]?.id || 0
    );
  }, [chapters]);

  useEffect(() => {
    if (activeTopicDetail) {
      setEditTitle(activeTopicDetail.title || '');
      setEditOverview(activeTopicDetail.overview || '');
      setEditSummary(activeTopicDetail.summary_note || '');
    }
  }, [activeTopicDetail?.id, activeTopicDetail]);

  // Add Formula states
  const [fmName, setFmName] = useState('');
  const [fmLatex, setFmLatex] = useState('P = 10 \\cdot m');
  const [fmNote, setFmNote] = useState('');

  // Add Quantity states
  const [qtyName, setQtyName] = useState('');
  const [qtySymbol, setQtySymbol] = useState('F');
  const [qtySi, setQtySi] = useState('N (Newton)');
  const [qtyOther, setQtyOther] = useState('kN');
  const [qtyDevice, setQtyDevice] = useState('Lực kế');
  const [qtyDesc, setQtyDesc] = useState('');

  // Add Example states
  const [exTitle, setExTitle] = useState('');
  const [exDifficulty, setExDifficulty] = useState('Thông hiểu');
  const [exStatement, setExStatement] = useState('');
  const [exGiven, setExGiven] = useState('');
  const [exStep, setExStep] = useState('');
  const [exAnswer, setExAnswer] = useState('');

  // Add Question states
  const [qDifficulty, setQDifficulty] = useState('nhan_biet');
  const [qText, setQText] = useState('');
  const [qOptA, setQOptA] = useState('');
  const [qOptB, setQOptB] = useState('');
  const [qOptC, setQOptC] = useState('');
  const [qOptD, setQOptD] = useState('');
  const [qCorrectIdx, setQCorrectIdx] = useState(0);
  const [qExplanation, setQExplanation] = useState('');

  // Bulk JSON import
  const [bulkJson, setBulkJson] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.admin-stagger', {
        y: 12,
        opacity: 0,
        duration: 0.4,
        stagger: 0.04,
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

  const callCmsApi = async (action: string, payload: any, successMessage: string) => {
    setStatusMsg('Đang lưu vào SQLite...');
    try {
      const res = await fetch('/api/admin/cms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, payload }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatusMsg(`Lỗi: ${data.error || 'Không thể lưu'}`);
        return false;
      }
      setStatusMsg(successMessage);
      router.refresh();
      return true;
    } catch {
      setStatusMsg('Lỗi kết nối máy chủ CMS');
      return false;
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={rootRef}
        className="min-h-screen bg-[#03050d] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-100"
      >
        {/* Subtle Deep-Space Nebula Glows */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full bg-emerald-500/[0.06] blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 h-[480px] w-[480px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />
        </div>

        {/* Sticky Single-Row Obsidian Command Bar */}
        <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#03050d]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-2 px-4 py-2.5 lg:flex-nowrap">
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
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-300">
                  <Settings2 className="h-4 w-4" />
                </div>
                <div>
                  <h1 className="text-sm font-bold tracking-tight text-white">
                    CMS SQLite · {adminName}
                  </h1>
                  <p className="hidden text-[11px] text-slate-400 sm:block">
                    Đang quản trị Khối Lớp {selectedGrade.grade_number}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
              {statusMsg && (
                <span className="hidden items-center gap-1.5 rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200 md:inline-flex">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {statusMsg}
                </span>
              )}
              <Link
                href="/admin/login"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-white/20"
              >
                Tài khoản
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 rounded-xl border border-rose-400/35 bg-rose-500/15 px-3.5 py-1.5 text-xs font-bold text-rose-200 transition-colors hover:bg-rose-500/25"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Đăng xuất</span>
              </button>
            </div>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-[1600px] space-y-6 px-4 py-6">
          {/* Grade Switcher Bar */}
          <section className="admin-stagger flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Chọn Khối lớp quản trị (6–12):
            </span>
            <div className="flex flex-wrap gap-2">
              {allGrades.map((g) => {
                const active = g.grade_number === selectedGrade.grade_number;
                return (
                  <Link
                    key={g.grade_number}
                    href={`/admin?grade=${g.grade_number}`}
                    className={`rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      active
                        ? 'border-cyan-400/45 bg-cyan-500/20 text-cyan-100'
                        : 'border-white/[0.06] bg-white/5 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    Lớp {g.grade_number} ({g.chapter_count}ch · {g.topic_count} bài)
                  </Link>
                );
              })}
            </div>
          </section>

          {/* 12-Col CMS Split: Left 5 Col Tree + Creation | Right 7 Col Topic Detail Editor */}
          <section className="admin-stagger grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
            {/* LEFT 5 COLS */}
            <div className="space-y-5 lg:col-span-5">
              {/* Chapters & Topics Tree */}
              <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-5">
                <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-white">
                  <Layers className="h-4 w-4 text-cyan-300" />
                  <span>Cây Chương &amp; Chủ đề (Lớp {selectedGrade.grade_number})</span>
                </h2>

                <div className="max-h-[480px] space-y-3 overflow-y-auto pr-1">
                  {chapters.map((ch) => (
                    <div
                      key={ch.id}
                      className="space-y-2 rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-3.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="font-mono text-[11px] font-bold text-cyan-300">
                            {ch.code}
                          </span>
                          <div className="text-xs font-bold text-white">{ch.title}</div>
                          <div className="text-[11px] text-slate-400">
                            Đề tổng hợp: {ch.chapter_question_count || 0} câu
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Link
                            href={`/chapter/${ch.id}`}
                            className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-slate-300 hover:border-cyan-400/35 hover:text-cyan-200"
                            title="Mở trang Chương"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                          <button
                            type="button"
                            onClick={() =>
                              callCmsApi('delete_chapter', { id: ch.id }, 'Đã xóa chương')
                            }
                            className="rounded-lg border border-rose-400/25 bg-rose-500/10 p-1.5 text-rose-300 hover:bg-rose-500/20"
                            title="Xóa chương"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1.5 border-l-2 border-cyan-400/25 pl-2.5">
                        {ch.topics?.map((tp) => {
                          const isActive = activeTopicDetail?.id === tp.id;
                          return (
                            <div
                              key={tp.id}
                              className={`flex items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5 text-xs ${
                                isActive
                                  ? 'border-cyan-400/50 bg-cyan-500/20 font-semibold text-white'
                                  : 'border-white/[0.06] bg-white/5 text-slate-300 hover:border-white/15'
                              }`}
                            >
                              <Link
                                href={`/admin?grade=${selectedGrade.grade_number}&topicId=${tp.id}`}
                                className="flex-1 truncate"
                              >
                                {tp.code}: {tp.title} ({tp.question_count} câu)
                              </Link>
                              <button
                                type="button"
                                onClick={() =>
                                  callCmsApi('delete_topic', { id: tp.id }, 'Đã xóa chủ đề')
                                }
                                className="rounded p-1 text-rose-300 hover:bg-rose-500/20"
                                title="Xóa chủ đề"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Chapter Form */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const ok = await callCmsApi(
                    'create_chapter',
                    {
                      grade_id: selectedGrade.id,
                      order_index: chapters.length + 1,
                      code: newChCode,
                      title: newChTitle,
                      description: newChDesc,
                    },
                    'Đã thêm chương mới'
                  );
                  if (ok) {
                    setNewChCode('');
                    setNewChTitle('');
                    setNewChDesc('');
                  }
                }}
                className="space-y-3 rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-5"
              >
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                  <Plus className="h-3.5 w-3.5" />
                  <span>Thêm Chương mới (Lớp {selectedGrade.grade_number})</span>
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={newChCode}
                    onChange={(e) => setNewChCode(e.target.value)}
                    placeholder="Mã (VD: CH5)"
                    className="rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400/40 focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    value={newChTitle}
                    onChange={(e) => setNewChTitle(e.target.value)}
                    placeholder="Tên chương mới..."
                    className="col-span-2 rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400/40 focus:outline-none"
                    required
                  />
                </div>
                <input
                  type="text"
                  value={newChDesc}
                  onChange={(e) => setNewChDesc(e.target.value)}
                  placeholder="Mô tả tóm tắt chương..."
                  className="w-full rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-cyan-400/35 bg-cyan-500/15 py-2 text-xs font-bold text-cyan-100 hover:bg-cyan-500/25"
                >
                  <Plus className="h-3.5 w-3.5" /> Tạo Chương mới
                </button>
              </form>

              {/* Add Topic Form */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const ok = await callCmsApi(
                    'create_topic',
                    {
                      chapter_id: targetChapterId,
                      order_index: 1,
                      code: newTpCode,
                      title: newTpTitle,
                      overview: newTpOverview,
                      heading1: newTpHeading,
                      content1: newTpContent,
                    },
                    'Đã tạo bài học mới'
                  );
                  if (ok) {
                    setNewTpCode('');
                    setNewTpTitle('');
                    setNewTpOverview('');
                    setNewTpContent('');
                  }
                }}
                className="space-y-3 rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-5"
              >
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  <Plus className="h-3.5 w-3.5" />
                  <span>Thêm Bài học / Chủ đề mới</span>
                </h3>
                <select
                  value={targetChapterId}
                  onChange={(e) => setTargetChapterId(Number(e.target.value))}
                  className="w-full rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white focus:border-cyan-400/40 focus:outline-none"
                >
                  {chapters.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.code} — {c.title}
                    </option>
                  ))}
                </select>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={newTpCode}
                    onChange={(e) => setNewTpCode(e.target.value)}
                    placeholder="Mã bài"
                    className="rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400/40 focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    value={newTpTitle}
                    onChange={(e) => setNewTpTitle(e.target.value)}
                    placeholder="Tên bài học..."
                    className="col-span-2 rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400/40 focus:outline-none"
                    required
                  />
                </div>
                <input
                  type="text"
                  value={newTpOverview}
                  onChange={(e) => setNewTpOverview(e.target.value)}
                  placeholder="Tổng quan bài học..."
                  className="w-full rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400/40 focus:outline-none"
                />
                <input
                  type="text"
                  value={newTpHeading}
                  onChange={(e) => setNewTpHeading(e.target.value)}
                  placeholder="Tiêu đề mục lý thuyết 1"
                  className="w-full rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400/40 focus:outline-none"
                />
                <textarea
                  rows={2}
                  value={newTpContent}
                  onChange={(e) => setNewTpContent(e.target.value)}
                  placeholder="Nội dung kiến thức trọng tâm..."
                  className="w-full rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-emerald-400/35 bg-emerald-500/15 py-2 text-xs font-bold text-emerald-100 hover:bg-emerald-500/25"
                >
                  <Plus className="h-3.5 w-3.5" /> Thêm Chủ đề
                </button>
              </form>
            </div>

            {/* RIGHT 7 COLS: ACTIVE TOPIC EDITOR */}
            <div className="lg:col-span-7">
              {!activeTopicDetail ? (
                <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-10 text-center text-sm text-slate-400">
                  Chọn một Chủ đề ở danh sách bên trái để chỉnh sửa nội dung, công thức, đại lượng SI &amp; ngân hàng câu hỏi.
                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#070b1a]/90">
                  {/* Active Topic Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] p-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md border border-cyan-400/30 bg-cyan-500/15 px-2 py-0.5 font-mono text-[11px] font-bold text-cyan-200">
                          {activeTopicDetail.code}
                        </span>
                        <span className="text-xs text-slate-400">
                          {activeTopicDetail.chapter_code} · {activeTopicDetail.chapter_title}
                        </span>
                      </div>
                      <h2 className="mt-1.5 text-lg font-bold text-white">
                        {activeTopicDetail.title}
                      </h2>
                    </div>

                    <Link
                      href={`/topic/${activeTopicDetail.id}`}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-3 py-1.5 text-xs font-semibold text-cyan-200 hover:bg-cyan-500/25"
                    >
                      <span>Xem trang Bài học</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  {/* Editor Tab Switcher with layoutId */}
                  <div className="grid grid-cols-2 gap-1 border-b border-white/[0.06] bg-[#03050d]/60 p-1.5 sm:grid-cols-4">
                    {(
                      [
                        { id: 'overview', label: 'Lý thuyết', icon: BookOpen },
                        {
                          id: 'formulas',
                          label: `Công thức & SI (${activeTopicDetail.formulas.length}/${activeTopicDetail.quantities.length})`,
                          icon: Calculator,
                        },
                        {
                          id: 'examples',
                          label: `Ví dụ (${activeTopicDetail.examples.length})`,
                          icon: Sparkles,
                        },
                        {
                          id: 'questions',
                          label: `Câu hỏi (${activeTopicDetail.questions.length})`,
                          icon: HelpCircle,
                        },
                      ] as const
                    ).map((tab) => {
                      const active = editorTab === tab.id;
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setEditorTab(tab.id)}
                          className={`relative flex items-center justify-center gap-1.5 rounded-xl px-2.5 py-2 text-xs font-semibold transition-colors ${
                            active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {active && (
                            <motion.div
                              layoutId="admin-editor-tab"
                              transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                              className="absolute inset-0 rounded-xl border border-emerald-400/35 bg-emerald-500/15"
                            />
                          )}
                          <Icon className="relative z-10 h-3.5 w-3.5 text-emerald-300" />
                          <span className="relative z-10 truncate">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-5">
                    <AnimatePresence mode="wait">
                      {editorTab === 'overview' && (
                        <motion.form
                          key="overview"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          onSubmit={(e) => {
                            e.preventDefault();
                            callCmsApi(
                              'update_topic',
                              {
                                id: activeTopicDetail.id,
                                title: editTitle,
                                overview: editOverview,
                                summary_note: editSummary,
                                theory_sections: activeTopicDetail.theory_sections,
                              },
                              'Đã cập nhật thông tin bài học'
                            );
                          }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="mb-1 block text-xs font-semibold text-slate-300">
                              Tiêu đề bài học
                            </label>
                            <input
                              type="text"
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value)}
                              className="w-full rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white focus:border-cyan-400/40 focus:outline-none"
                              required
                            />
                          </div>
                          <div>
                            <label className="mb-1 block text-xs font-semibold text-slate-300">
                              Tổng quan &amp; Mục tiêu bài học
                            </label>
                            <textarea
                              rows={3}
                              value={editOverview}
                              onChange={(e) => setEditOverview(e.target.value)}
                              className="w-full rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white focus:border-cyan-400/40 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="mb-1 block text-xs font-semibold text-slate-300">
                              Ghi chú tổng kết (Summary Note)
                            </label>
                            <textarea
                              rows={3}
                              value={editSummary}
                              onChange={(e) => setEditSummary(e.target.value)}
                              className="w-full rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white focus:border-cyan-400/40 focus:outline-none"
                            />
                          </div>
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-4 py-2 text-xs font-bold text-emerald-100 hover:bg-emerald-500/30"
                          >
                            <Save className="h-3.5 w-3.5" /> Lưu thay đổi bài học
                          </button>
                        </motion.form>
                      )}

                      {editorTab === 'formulas' && (
                        <motion.div
                          key="formulas"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="space-y-6"
                        >
                          {/* Formulas List + Add */}
                          <div className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                              Công thức KaTeX ({activeTopicDetail.formulas.length})
                            </h3>
                            {activeTopicDetail.formulas.map((fm) => (
                              <div
                                key={fm.id}
                                className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-3"
                              >
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-white">{fm.name}</div>
                                  <div className="mt-1 overflow-x-auto text-cyan-200">
                                    <KatexFormula latex={fm.latex_expression} />
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() =>
                                    callCmsApi('delete_formula', { id: fm.id }, 'Đã xóa công thức')
                                  }
                                  className="shrink-0 rounded-lg border border-rose-400/25 bg-rose-500/10 p-1.5 text-rose-300 hover:bg-rose-500/20"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            ))}

                            <form
                              onSubmit={async (e) => {
                                e.preventDefault();
                                const ok = await callCmsApi(
                                  'add_formula',
                                  {
                                    topic_id: activeTopicDetail.id,
                                    name: fmName,
                                    latex_expression: fmLatex,
                                    usage_note: fmNote,
                                  },
                                  'Đã thêm công thức mới'
                                );
                                if (ok) {
                                  setFmName('');
                                  setFmNote('');
                                }
                              }}
                              className="space-y-2 rounded-xl border border-white/[0.06] bg-white/5 p-3.5"
                            >
                              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                <input
                                  type="text"
                                  value={fmName}
                                  onChange={(e) => setFmName(e.target.value)}
                                  placeholder="Tên công thức..."
                                  className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                                  required
                                />
                                <input
                                  type="text"
                                  value={fmLatex}
                                  onChange={(e) => setFmLatex(e.target.value)}
                                  placeholder="Biểu thức LaTeX..."
                                  className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 font-mono text-xs text-cyan-200"
                                  required
                                />
                              </div>
                              <input
                                type="text"
                                value={fmNote}
                                onChange={(e) => setFmNote(e.target.value)}
                                placeholder="Lưu ý sử dụng..."
                                className="w-full rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                              />
                              <button
                                type="submit"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/35 bg-cyan-500/15 px-3 py-1.5 text-xs font-bold text-cyan-100 hover:bg-cyan-500/25"
                              >
                                <Plus className="h-3.5 w-3.5" /> Thêm Công thức
                              </button>
                            </form>
                          </div>

                          {/* Quantities List + Add */}
                          <div className="space-y-3 border-t border-white/[0.06] pt-4">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                              Bảng Đại lượng SI ({activeTopicDetail.quantities.length})
                            </h3>
                            {activeTopicDetail.quantities.map((q) => (
                              <div
                                key={q.id}
                                className="flex items-center justify-between gap-2 rounded-xl border border-white/[0.06] bg-[#03050d]/80 px-3 py-2 text-xs"
                              >
                                <div>
                                  <strong className="text-white">{q.name}</strong> ({q.symbol}) ·{' '}
                                  <span className="text-emerald-300">{q.si_unit}</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() =>
                                    callCmsApi('delete_quantity', { id: q.id }, 'Đã xóa đại lượng')
                                  }
                                  className="rounded-lg border border-rose-400/25 bg-rose-500/10 p-1.5 text-rose-300 hover:bg-rose-500/20"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            ))}

                            <form
                              onSubmit={async (e) => {
                                e.preventDefault();
                                const ok = await callCmsApi(
                                  'add_quantity',
                                  {
                                    topic_id: activeTopicDetail.id,
                                    name: qtyName,
                                    symbol: qtySymbol,
                                    si_unit: qtySi,
                                    other_units: qtyOther,
                                    measuring_device: qtyDevice,
                                    description: qtyDesc,
                                  },
                                  'Đã thêm đại lượng SI'
                                );
                                if (ok) {
                                  setQtyName('');
                                  setQtyDesc('');
                                }
                              }}
                              className="space-y-2 rounded-xl border border-white/[0.06] bg-white/5 p-3.5"
                            >
                              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                                <input
                                  type="text"
                                  value={qtyName}
                                  onChange={(e) => setQtyName(e.target.value)}
                                  placeholder="Tên đại lượng..."
                                  className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                                  required
                                />
                                <input
                                  type="text"
                                  value={qtySymbol}
                                  onChange={(e) => setQtySymbol(e.target.value)}
                                  placeholder="Ký hiệu"
                                  className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 font-mono text-xs text-white"
                                  required
                                />
                                <input
                                  type="text"
                                  value={qtySi}
                                  onChange={(e) => setQtySi(e.target.value)}
                                  placeholder="Đơn vị SI"
                                  className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                                  required
                                />
                              </div>
                              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                                <input
                                  type="text"
                                  value={qtyOther}
                                  onChange={(e) => setQtyOther(e.target.value)}
                                  placeholder="Đơn vị khác"
                                  className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                                />
                                <input
                                  type="text"
                                  value={qtyDevice}
                                  onChange={(e) => setQtyDevice(e.target.value)}
                                  placeholder="Dụng cụ đo"
                                  className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                                />
                                <input
                                  type="text"
                                  value={qtyDesc}
                                  onChange={(e) => setQtyDesc(e.target.value)}
                                  placeholder="Mô tả..."
                                  className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                                />
                              </div>
                              <button
                                type="submit"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/35 bg-amber-500/15 px-3 py-1.5 text-xs font-bold text-amber-100 hover:bg-amber-500/25"
                              >
                                <Plus className="h-3.5 w-3.5" /> Thêm Đại lượng
                              </button>
                            </form>
                          </div>
                        </motion.div>
                      )}

                      {editorTab === 'examples' && (
                        <motion.div
                          key="examples"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="space-y-4"
                        >
                          {activeTopicDetail.examples.map((ex) => (
                            <div
                              key={ex.id}
                              className="flex items-start justify-between gap-3 rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-3.5 text-xs"
                            >
                              <div>
                                <div className="font-bold text-white">
                                  {ex.title} ({ex.difficulty})
                                </div>
                                <p className="mt-1 text-slate-300">{ex.problem_statement}</p>
                                <p className="mt-1 font-semibold text-emerald-300">
                                  Đáp số: {ex.final_answer}
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() =>
                                  callCmsApi('delete_example', { id: ex.id }, 'Đã xóa ví dụ')
                                }
                                className="rounded-lg border border-rose-400/25 bg-rose-500/10 p-1.5 text-rose-300 hover:bg-rose-500/20"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          ))}

                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();
                              const ok = await callCmsApi(
                                'add_example',
                                {
                                  topic_id: activeTopicDetail.id,
                                  title: exTitle,
                                  difficulty: exDifficulty,
                                  problem_statement: exStatement,
                                  given_summary: exGiven,
                                  solution_step: exStep,
                                  final_answer: exAnswer,
                                },
                                'Đã thêm ví dụ minh họa'
                              );
                              if (ok) {
                                setExTitle('');
                                setExStatement('');
                                setExGiven('');
                                setExStep('');
                                setExAnswer('');
                              }
                            }}
                            className="space-y-2.5 rounded-xl border border-white/[0.06] bg-white/5 p-4"
                          >
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              <input
                                type="text"
                                value={exTitle}
                                onChange={(e) => setExTitle(e.target.value)}
                                placeholder="Tiêu đề ví dụ..."
                                className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                                required
                              />
                              <select
                                value={exDifficulty}
                                onChange={(e) => setExDifficulty(e.target.value)}
                                className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                              >
                                <option value="Nhận biết">Nhận biết</option>
                                <option value="Thông hiểu">Thông hiểu</option>
                                <option value="Vận dụng">Vận dụng</option>
                                <option value="Vận dụng cao">Vận dụng cao</option>
                              </select>
                            </div>
                            <textarea
                              rows={2}
                              value={exStatement}
                              onChange={(e) => setExStatement(e.target.value)}
                              placeholder="Đề bài ví dụ..."
                              className="w-full rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                              required
                            />
                            <input
                              type="text"
                              value={exGiven}
                              onChange={(e) => setExGiven(e.target.value)}
                              placeholder="Tóm tắt dữ kiện..."
                              className="w-full rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                            />
                            <textarea
                              rows={2}
                              value={exStep}
                              onChange={(e) => setExStep(e.target.value)}
                              placeholder="Bước giải chi tiết..."
                              className="w-full rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                            />
                            <input
                              type="text"
                              value={exAnswer}
                              onChange={(e) => setExAnswer(e.target.value)}
                              placeholder="Đáp số cuối..."
                              className="w-full rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                            />
                            <button
                              type="submit"
                              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/35 bg-emerald-500/15 px-3 py-1.5 text-xs font-bold text-emerald-100 hover:bg-emerald-500/25"
                            >
                              <Plus className="h-3.5 w-3.5" /> Thêm Ví dụ
                            </button>
                          </form>
                        </motion.div>
                      )}

                      {editorTab === 'questions' && (
                        <motion.div
                          key="questions"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="space-y-5"
                        >
                          <div className="max-h-[280px] space-y-2 overflow-y-auto pr-1">
                            {activeTopicDetail.questions.map((q) => (
                              <div
                                key={q.id}
                                className="flex items-start justify-between gap-2 rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-3 text-xs"
                              >
                                <div className="min-w-0">
                                  <span className="font-mono text-[10px] text-cyan-300">
                                    #{q.order_index} · {q.difficulty}
                                  </span>
                                  <div className="mt-0.5 line-clamp-2 text-slate-200">
                                    {q.question_text}
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() =>
                                    callCmsApi('delete_question', { id: q.id }, 'Đã xóa câu hỏi')
                                  }
                                  className="shrink-0 rounded-lg border border-rose-400/25 bg-rose-500/10 p-1.5 text-rose-300 hover:bg-rose-500/20"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>

                          {/* Single Question Form */}
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();
                              const ok = await callCmsApi(
                                'add_question',
                                {
                                  scope_type: 'topic',
                                  topic_id: activeTopicDetail.id,
                                  chapter_id: activeTopicDetail.chapter_id,
                                  order_index: activeTopicDetail.questions.length + 1,
                                  difficulty: qDifficulty,
                                  question_text: qText,
                                  options: [qOptA, qOptB, qOptC, qOptD],
                                  correct_index: qCorrectIdx,
                                  explanation: qExplanation,
                                },
                                'Đã thêm câu hỏi mới'
                              );
                              if (ok) {
                                setQText('');
                                setQOptA('');
                                setQOptB('');
                                setQOptC('');
                                setQOptD('');
                                setQExplanation('');
                              }
                            }}
                            className="space-y-2.5 rounded-xl border border-white/[0.06] bg-white/5 p-4"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-cyan-300">
                                Thêm 1 Câu hỏi Trắc nghiệm
                              </span>
                              <select
                                value={qDifficulty}
                                onChange={(e) => setQDifficulty(e.target.value)}
                                className="rounded-lg border border-white/10 bg-[#03050d] px-2.5 py-1 text-xs text-white"
                              >
                                <option value="nhan_biet">Nhận biết</option>
                                <option value="thong_hieu">Thông hiểu</option>
                                <option value="van_dung">Vận dụng</option>
                                <option value="van_dung_cao">Vận dụng cao</option>
                              </select>
                            </div>
                            <textarea
                              rows={2}
                              value={qText}
                              onChange={(e) => setQText(e.target.value)}
                              placeholder="Nội dung câu hỏi..."
                              className="w-full rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                              required
                            />
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              <input
                                type="text"
                                value={qOptA}
                                onChange={(e) => setQOptA(e.target.value)}
                                placeholder="Đáp án A"
                                className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                                required
                              />
                              <input
                                type="text"
                                value={qOptB}
                                onChange={(e) => setQOptB(e.target.value)}
                                placeholder="Đáp án B"
                                className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                                required
                              />
                              <input
                                type="text"
                                value={qOptC}
                                onChange={(e) => setQOptC(e.target.value)}
                                placeholder="Đáp án C"
                                className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                                required
                              />
                              <input
                                type="text"
                                value={qOptD}
                                onChange={(e) => setQOptD(e.target.value)}
                                placeholder="Đáp án D"
                                className="rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                                required
                              />
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                              <select
                                value={qCorrectIdx}
                                onChange={(e) => setQCorrectIdx(Number(e.target.value))}
                                className="rounded-lg border border-white/10 bg-[#03050d] px-2.5 py-1.5 text-xs text-emerald-300"
                              >
                                <option value={0}>Đúng: A</option>
                                <option value={1}>Đúng: B</option>
                                <option value={2}>Đúng: C</option>
                                <option value={3}>Đúng: D</option>
                              </select>
                              <input
                                type="text"
                                value={qExplanation}
                                onChange={(e) => setQExplanation(e.target.value)}
                                placeholder="Giải thích đáp án..."
                                className="flex-1 rounded-lg border border-white/10 bg-[#03050d] px-3 py-1.5 text-xs text-white"
                              />
                            </div>
                            <button
                              type="submit"
                              className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/35 bg-cyan-500/15 px-3 py-1.5 text-xs font-bold text-cyan-100 hover:bg-cyan-500/25"
                            >
                              <Plus className="h-3.5 w-3.5" /> Lưu Câu hỏi
                            </button>
                          </form>

                          {/* Bulk JSON Import */}
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();
                              try {
                                const parsed = JSON.parse(bulkJson);
                                const ok = await callCmsApi(
                                  'bulk_import_questions',
                                  {
                                    scope_type: 'topic',
                                    topic_id: activeTopicDetail.id,
                                    chapter_id: activeTopicDetail.chapter_id,
                                    questions: parsed,
                                  },
                                  'Đã import câu hỏi JSON thành công'
                                );
                                if (ok) setBulkJson('');
                              } catch {
                                setStatusMsg('Lỗi cú pháp JSON câu hỏi');
                              }
                            }}
                            className="space-y-2 rounded-xl border border-white/[0.06] bg-white/5 p-4"
                          >
                            <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                              <Upload className="h-3.5 w-3.5" />
                              <span>Import hàng loạt bằng JSON Array</span>
                            </div>
                            <textarea
                              rows={3}
                              value={bulkJson}
                              onChange={(e) => setBulkJson(e.target.value)}
                              placeholder='[{"question_text":"...","options":["A","B","C","D"],"correct_index":0,"difficulty":"nhan_biet","explanation":"..."}]'
                              className="w-full rounded-lg border border-white/10 bg-[#03050d] px-3 py-2 font-mono text-[11px] text-slate-200"
                              required
                            />
                            <button
                              type="submit"
                              className="inline-flex items-center gap-1.5 rounded-lg border border-purple-400/35 bg-purple-500/15 px-3 py-1.5 text-xs font-bold text-purple-100 hover:bg-purple-500/25"
                            >
                              <Database className="h-3.5 w-3.5" /> Import JSON vào SQLite
                            </button>
                          </form>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </MotionConfig>
  );
}
