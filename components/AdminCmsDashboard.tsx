'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChapterItem, GradeItem, TopicDetail } from '@/types/cms';
import { KatexFormula } from './KatexRenderer';
import {
  Plus,
  Trash2,
  LogOut,
  Layers,
  BookOpen,
  Calculator,
  Database,
  HelpCircle,
  Upload,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

interface AdminCmsDashboardProps {
  adminName: string;
  allGrades: GradeItem[];
  selectedGrade: GradeItem;
  chapters: ChapterItem[];
  activeTopicDetail: TopicDetail | null;
}

export function AdminCmsDashboard({
  adminName,
  allGrades,
  selectedGrade,
  chapters,
  activeTopicDetail,
}: AdminCmsDashboardProps) {
  const router = useRouter();
  const [statusMsg, setStatusMsg] = useState('');

  // Form states for creating Chapter
  const [newChCode, setNewChCode] = useState('');
  const [newChTitle, setNewChTitle] = useState('');
  const [newChDesc, setNewChDesc] = useState('');

  // Form states for creating Topic
  const [targetChapterId, setTargetChapterId] = useState<number>(chapters[0]?.id || 0);
  const [newTpCode, setNewTpCode] = useState('');
  const [newTpTitle, setNewTpTitle] = useState('');
  const [newTpOverview, setNewTpOverview] = useState('');
  const [newTpHeading, setNewTpHeading] = useState('1. Kiến thức trọng tâm');
  const [newTpContent, setNewTpContent] = useState('');

  // Form states for adding Formula to active topic
  const [fmName, setFmName] = useState('');
  const [fmLatex, setFmLatex] = useState('P = 10 \\cdot m');
  const [fmNote, setFmNote] = useState('');

  // Form states for adding Quantity to active topic
  const [qtyName, setQtyName] = useState('');
  const [qtySymbol, setQtySymbol] = useState('F');
  const [qtySi, setQtySi] = useState('N (Newton)');
  const [qtyOther, setQtyOther] = useState('kN');
  const [qtyDevice, setQtyDevice] = useState('Lực kế');

  // Form states for adding Question
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

  const callCmsApi = async (action: string, payload: any, successMessage: string) => {
    setStatusMsg('Đang lưu vào SQLite...');
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
    setStatusMsg(`✔ ${successMessage}`);
    router.refresh();
    return true;
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Admin Bar */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Hệ thống Quản trị Nội dung Vật Lý (CMS SQLite)
          </div>
          <h1 className="text-2xl font-extrabold mt-0.5">
            Xin chào, {adminName} • Đang quản lý Khối Lớp {selectedGrade.grade_number}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {statusMsg && (
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              {statusMsg}
            </span>
          )}
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 transition"
          >
            <LogOut className="w-4 h-4" /> Đăng xuất
          </button>
        </div>
      </div>

      {/* Grade Switcher in CMS */}
      <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-bold uppercase text-slate-500">
          Chọn Khối lớp để quản trị (6–12):
        </span>
        <div className="flex flex-wrap gap-2">
          {allGrades.map((g) => (
            <Link
              key={g.grade_number}
              href={`/admin?grade=${g.grade_number}`}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                g.grade_number === selectedGrade.grade_number
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Lớp {g.grade_number} ({g.chapter_count} chương • {g.topic_count} bài)
            </Link>
          ))}
        </div>
      </div>

      {/* Grid: Left = Chapters & Topics Tree + Add Forms; Right = Active Topic Detail Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN (5 cols): Chapters & Topics Management */}
        <div className="lg:col-span-5 space-y-6">
          {/* Existing Chapters & Topics List */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600" />
                Cây Chương & Chủ đề (Lớp {selectedGrade.grade_number})
              </h2>
            </div>

            <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
              {chapters.map((ch) => (
                <div key={ch.id} className="rounded-xl border border-slate-200 p-3.5 bg-slate-50/70 space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold text-indigo-600">{ch.code}</span>
                      <div className="text-sm font-bold text-slate-900">{ch.title}</div>
                      <div className="text-[11px] text-slate-500">
                        Đề tổng hợp chương: {ch.chapter_question_count || 0} câu
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Link
                        href={`/chapter/${ch.id}`}
                        className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-indigo-600"
                        title="Xem trang Chương"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => callCmsApi('delete_chapter', { id: ch.id }, 'Đã xóa chương')}
                        className="p-1.5 rounded-lg bg-white border border-rose-200 text-rose-600 hover:bg-rose-50"
                        title="Xóa chương"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Topics in chapter */}
                  <div className="space-y-1.5 pl-2 border-l-2 border-indigo-200">
                    {ch.topics?.map((tp) => {
                      const isActive = activeTopicDetail?.id === tp.id;
                      return (
                        <div
                          key={tp.id}
                          className={`p-2 rounded-lg text-xs flex items-center justify-between gap-2 ${
                            isActive
                              ? 'bg-indigo-600 text-white font-bold'
                              : 'bg-white border border-slate-200 text-slate-800 hover:border-indigo-300'
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
                            onClick={() => callCmsApi('delete_topic', { id: tp.id }, 'Đã xóa chủ đề')}
                            className={`p-1 rounded ${isActive ? 'hover:bg-indigo-500 text-white' : 'text-rose-600 hover:bg-rose-50'}`}
                            title="Xóa chủ đề"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add New Chapter Form */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <Plus className="w-4 h-4 text-indigo-600" /> Thêm Chương Mới vào Lớp {selectedGrade.grade_number}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Mã (VD: CH5)"
                value={newChCode}
                onChange={(e) => setNewChCode(e.target.value)}
                className="border border-slate-300 rounded-xl px-3 py-2 text-xs"
              />
              <input
                type="text"
                placeholder="Tên Chương mới..."
                value={newChTitle}
                onChange={(e) => setNewChTitle(e.target.value)}
                className="col-span-2 border border-slate-300 rounded-xl px-3 py-2 text-xs"
              />
            </div>
            <textarea
              placeholder="Mô tả tóm tắt chương..."
              value={newChDesc}
              onChange={(e) => setNewChDesc(e.target.value)}
              rows={2}
              className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs"
            />
            <button
              type="button"
              onClick={async () => {
                if (!newChTitle.trim()) return;
                await callCmsApi(
                  'create_chapter',
                  {
                    grade_id: selectedGrade.id,
                    order_index: chapters.length + 1,
                    code: newChCode || `CH${chapters.length + 1}`,
                    title: newChTitle,
                    description: newChDesc,
                  },
                  'Đã tạo Chương mới'
                );
                setNewChCode('');
                setNewChTitle('');
                setNewChDesc('');
              }}
              className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold"
            >
              + Lưu Chương Mới
            </button>
          </div>

          {/* Add New Topic Form */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-600" /> Thêm Chủ Đề (Bài Học) Mới
            </h3>
            <select
              value={targetChapterId}
              onChange={(e) => setTargetChapterId(Number(e.target.value))}
              className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs bg-white"
            >
              {chapters.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.code} - {c.title}
                </option>
              ))}
            </select>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Mã (C1-B4)"
                value={newTpCode}
                onChange={(e) => setNewTpCode(e.target.value)}
                className="border border-slate-300 rounded-xl px-3 py-2 text-xs"
              />
              <input
                type="text"
                placeholder="Tiêu đề Chủ đề / Bài học..."
                value={newTpTitle}
                onChange={(e) => setNewTpTitle(e.target.value)}
                className="col-span-2 border border-slate-300 rounded-xl px-3 py-2 text-xs"
              />
            </div>
            <input
              type="text"
              placeholder="Mô tả tổng quan bài học..."
              value={newTpOverview}
              onChange={(e) => setNewTpOverview(e.target.value)}
              className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs"
            />
            <input
              type="text"
              placeholder="Tiêu đề mục lý thuyết 1..."
              value={newTpHeading}
              onChange={(e) => setNewTpHeading(e.target.value)}
              className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs"
            />
            <textarea
              placeholder="Nội dung lý thuyết chi tiết..."
              value={newTpContent}
              onChange={(e) => setNewTpContent(e.target.value)}
              rows={3}
              className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs"
            />
            <button
              type="button"
              onClick={async () => {
                if (!newTpTitle.trim() || !targetChapterId) return;
                await callCmsApi(
                  'create_topic',
                  {
                    chapter_id: targetChapterId,
                    order_index: 10,
                    code: newTpCode || 'B-NEW',
                    title: newTpTitle,
                    overview: newTpOverview,
                    heading1: newTpHeading,
                    content1: newTpContent,
                  },
                  'Đã thêm Chủ đề mới'
                );
                setNewTpCode('');
                setNewTpTitle('');
                setNewTpOverview('');
                setNewTpContent('');
              }}
              className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
            >
              + Tạo Chủ Đề Mới
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN (7 cols): Active Topic Editor (Formulas, Quantities, 25 Questions) */}
        <div className="lg:col-span-7 space-y-6">
          {activeTopicDetail ? (
            <>
              {/* Active Topic Banner */}
              <div className="rounded-2xl bg-indigo-950 text-white p-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-indigo-300">
                    Đang biên tập Chủ đề: {activeTopicDetail.code}
                  </span>
                  <h2 className="text-lg font-extrabold">{activeTopicDetail.title}</h2>
                </div>
                <Link
                  href={`/topic/${activeTopicDetail.id}`}
                  className="px-3.5 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Xem giao diện Học sinh
                </Link>
              </div>

              {/* Add Formula with Live KaTeX Preview & Add Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Formula Manager */}
                <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-3">
                  <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                    <Calculator className="w-4 h-4 text-violet-600" /> Công thức ({activeTopicDetail.formulas.length})
                  </h3>
                  <div className="space-y-1.5 max-h-36 overflow-y-auto">
                    {activeTopicDetail.formulas.map((fm) => (
                      <div key={fm.id} className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                        <div className="truncate pr-2">
                          <span className="font-bold">{fm.name}: </span>
                          <KatexFormula latex={fm.latex_expression} />
                        </div>
                        <button
                          type="button"
                          onClick={() => callCmsApi('delete_formula', { id: fm.id }, 'Đã xóa công thức')}
                          className="text-rose-600 hover:bg-rose-50 p-1 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <input
                    type="text"
                    placeholder="Tên công thức (VD: Trọng lượng vật)"
                    value={fmName}
                    onChange={(e) => setFmName(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3 py-1.5 text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Biểu thức LaTeX (VD: P = 10 \cdot m)"
                    value={fmLatex}
                    onChange={(e) => setFmLatex(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-mono"
                  />
                  <div className="p-2 rounded-xl bg-violet-50 border border-violet-200 text-center text-sm">
                    <span className="text-[10px] text-violet-600 block">Xem trước KaTeX:</span>
                    <KatexFormula latex={fmLatex} />
                  </div>
                  <input
                    type="text"
                    placeholder="Ghi chú sử dụng..."
                    value={fmNote}
                    onChange={(e) => setFmNote(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3 py-1.5 text-xs"
                  />
                  <button
                    type="button"
                    onClick={async () => {
                      if (!fmName.trim() || !fmLatex.trim()) return;
                      await callCmsApi(
                        'add_formula',
                        {
                          topic_id: activeTopicDetail.id,
                          name: fmName,
                          latex_expression: fmLatex,
                          plain_expression: fmLatex,
                          usage_note: fmNote,
                        },
                        'Đã thêm Công thức mới'
                      );
                      setFmName('');
                      setFmNote('');
                    }}
                    className="w-full py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold"
                  >
                    + Thêm Công Thức
                  </button>
                </div>

                {/* Quantity Manager */}
                <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-3">
                  <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                    <Database className="w-4 h-4 text-amber-600" /> Đại lượng Vật lý ({activeTopicDetail.quantities.length})
                  </h3>
                  <div className="space-y-1.5 max-h-36 overflow-y-auto">
                    {activeTopicDetail.quantities.map((q) => (
                      <div key={q.id} className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                        <div>
                          <strong>{q.name}</strong> ({q.symbol}) — SI: <span className="text-emerald-700 font-semibold">{q.si_unit}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => callCmsApi('delete_quantity', { id: q.id }, 'Đã xóa đại lượng')}
                          className="text-rose-600 hover:bg-rose-50 p-1 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Tên đại lượng..."
                      value={qtyName}
                      onChange={(e) => setQtyName(e.target.value)}
                      className="border border-slate-300 rounded-xl px-3 py-1.5 text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Ký hiệu (VD: P, m, V)"
                      value={qtySymbol}
                      onChange={(e) => setQtySymbol(e.target.value)}
                      className="border border-slate-300 rounded-xl px-3 py-1.5 text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Đơn vị SI (VD: N, kg)"
                      value={qtySi}
                      onChange={(e) => setQtySi(e.target.value)}
                      className="border border-slate-300 rounded-xl px-3 py-1.5 text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Đơn vị khác..."
                      value={qtyOther}
                      onChange={(e) => setQtyOther(e.target.value)}
                      className="border border-slate-300 rounded-xl px-3 py-1.5 text-xs"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Dụng cụ đo (VD: Lực kế, Cân)..."
                    value={qtyDevice}
                    onChange={(e) => setQtyDevice(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3 py-1.5 text-xs"
                  />
                  <button
                    type="button"
                    onClick={async () => {
                      if (!qtyName.trim()) return;
                      await callCmsApi(
                        'add_quantity',
                        {
                          topic_id: activeTopicDetail.id,
                          name: qtyName,
                          symbol: qtySymbol,
                          si_unit: qtySi,
                          other_units: qtyOther,
                          measuring_device: qtyDevice,
                          description: `${qtyName} đo bằng ${qtyDevice}`,
                        },
                        'Đã thêm Đại lượng mới'
                      );
                      setQtyName('');
                    }}
                    className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold"
                  >
                    + Thêm Đại Lượng
                  </button>
                </div>
              </div>

              {/* 25-Question Quiz Manager & Bulk JSON Import */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-emerald-600" />
                    Ngân Hàng Câu Hỏi Quiz Của Bài ({activeTopicDetail.questions.length} câu)
                  </h3>
                  <span className="text-xs font-semibold text-slate-500">
                    Chuẩn 25 câu/bài • Hỗ trợ thêm lẻ hoặc Import JSON hàng loạt
                  </span>
                </div>

                {/* Existing questions list */}
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {activeTopicDetail.questions.map((q) => (
                    <div
                      key={q.id}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3 text-xs"
                    >
                      <div className="space-y-1">
                        <div>
                          <span className="font-bold text-indigo-700">Câu {q.order_index} ({q.difficulty}): </span>
                          <span className="font-semibold text-slate-900">{q.question_text}</span>
                        </div>
                        <div className="text-slate-600">
                          Đáp án đúng: <strong className="text-emerald-700">{['A', 'B', 'C', 'D'][q.correct_index]}. {q.options[q.correct_index]}</strong>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => callCmsApi('delete_question', { id: q.id }, 'Đã xóa câu hỏi')}
                        className="p-1.5 rounded-lg bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add Single Question Form */}
                <div className="pt-3 border-t border-slate-200 space-y-2.5">
                  <div className="text-xs font-bold uppercase text-slate-600">Thêm câu hỏi trắc nghiệm mới:</div>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      value={qDifficulty}
                      onChange={(e) => setQDifficulty(e.target.value)}
                      className="border border-slate-300 rounded-xl px-3 py-2 text-xs bg-white"
                    >
                      <option value="nhan_biet">Nhận biết</option>
                      <option value="thong_hieu">Thông hiểu</option>
                      <option value="van_dung">Vận dụng</option>
                      <option value="van_dung_cao">Vận dụng cao</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Nội dung câu hỏi..."
                      value={qText}
                      onChange={(e) => setQText(e.target.value)}
                      className="col-span-2 border border-slate-300 rounded-xl px-3 py-2 text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Đáp án A..." value={qOptA} onChange={(e) => setQOptA(e.target.value)} className="border border-slate-300 rounded-xl px-3 py-1.5 text-xs" />
                    <input type="text" placeholder="Đáp án B..." value={qOptB} onChange={(e) => setQOptB(e.target.value)} className="border border-slate-300 rounded-xl px-3 py-1.5 text-xs" />
                    <input type="text" placeholder="Đáp án C..." value={qOptC} onChange={(e) => setQOptC(e.target.value)} className="border border-slate-300 rounded-xl px-3 py-1.5 text-xs" />
                    <input type="text" placeholder="Đáp án D..." value={qOptD} onChange={(e) => setQOptD(e.target.value)} className="border border-slate-300 rounded-xl px-3 py-1.5 text-xs" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      value={qCorrectIdx}
                      onChange={(e) => setQCorrectIdx(Number(e.target.value))}
                      className="border border-slate-300 rounded-xl px-3 py-1.5 text-xs bg-white font-bold text-emerald-700"
                    >
                      <option value={0}>Đáp án đúng: A</option>
                      <option value={1}>Đáp án đúng: B</option>
                      <option value={2}>Đáp án đúng: C</option>
                      <option value={3}>Đáp án đúng: D</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Lời giải chi tiết..."
                      value={qExplanation}
                      onChange={(e) => setQExplanation(e.target.value)}
                      className="col-span-2 border border-slate-300 rounded-xl px-3 py-1.5 text-xs"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={async () => {
                      if (!qText.trim()) return;
                      await callCmsApi(
                        'add_question',
                        {
                          scope_type: 'topic',
                          topic_id: activeTopicDetail.id,
                          chapter_id: activeTopicDetail.chapter_id,
                          order_index: activeTopicDetail.questions.length + 1,
                          difficulty: qDifficulty,
                          question_text: qText,
                          options: [qOptA || 'A', qOptB || 'B', qOptC || 'C', qOptD || 'D'],
                          correct_index: qCorrectIdx,
                          explanation: qExplanation,
                        },
                        'Đã thêm Câu hỏi mới vào bài'
                      );
                      setQText('');
                      setQOptA('');
                      setQOptB('');
                      setQOptC('');
                      setQOptD('');
                      setQExplanation('');
                    }}
                    className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold"
                  >
                    + Thêm Câu Hỏi Vào Bài Học Này
                  </button>
                </div>

                {/* Bulk JSON Import */}
                <div className="pt-3 border-t border-slate-200 space-y-2">
                  <div className="text-xs font-bold uppercase text-slate-600 flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 text-indigo-600" />
                    Import nhanh hàng loạt câu hỏi (JSON Array):
                  </div>
                  <textarea
                    rows={3}
                    placeholder='[{"difficulty":"nhan_biet","question_text":"Đơn vị của lực là gì?","options":["N","kg","m","s"],"correct_index":0,"explanation":"Newton (N)"}]'
                    value={bulkJson}
                    onChange={(e) => setBulkJson(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono"
                  />
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        const parsed = JSON.parse(bulkJson);
                        await callCmsApi(
                          'bulk_import_questions',
                          {
                            scope_type: 'topic',
                            topic_id: activeTopicDetail.id,
                            chapter_id: activeTopicDetail.chapter_id,
                            questions: parsed,
                          },
                          `Đã import ${parsed.length} câu hỏi thành công`
                        );
                        setBulkJson('');
                      } catch {
                        setStatusMsg('Lỗi: JSON không đúng định dạng mảng');
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold"
                  >
                    Import JSON vào Chủ đề này
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="rounded-2xl bg-white border border-slate-200 p-8 text-center space-y-2">
              <div className="text-base font-bold text-slate-800">
                Chọn một Chủ đề ở cột bên trái (hoặc tạo Chủ đề mới) để biên tập Công thức, Đại lượng và 25 Câu hỏi Quiz
              </div>
              <p className="text-xs text-slate-500">
                Khối Lớp 6 đã có sẵn 15 chủ đề đầy đủ. Nếu bạn đang chọn Khối 7–12, hãy bấm &quot;+ Tạo Chủ Đề Mới&quot; ở khung bên trái để bắt đầu thêm nội dung.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
