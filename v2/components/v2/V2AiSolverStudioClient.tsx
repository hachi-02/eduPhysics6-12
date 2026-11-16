'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  FileText,
  History,
  Image as ImageIcon,
  Loader2,
  Maximize2,
  Minimize2,
  RefreshCw,
  RotateCw,
  ScanSearch,
  Settings,
  Sparkles,
  Trash2,
  Upload,
} from 'lucide-react';
import { RichPhysicsText } from '@/components/KatexRenderer';
import {
  DEFAULT_AI_SETTINGS,
  loadAiSettings,
  saveAiSettings,
  type AiSettingsState,
} from '@/lib/ai-settings';
import type { SolveResponsePayload } from '@/app/api/ai/solve/route';

interface UploadedFileState {
  name: string;
  mimeType: string;
  base64: string;
  previewUrl: string | null;
}

interface AiSolveHistoryItem {
  id: string;
  createdAt: string;
  provider: 'gemini' | 'openrouter';
  model: string;
  mode: 'solve' | 'check_work' | 're_solve_text';
  title: string;
  result: SolveResponsePayload;
}

const HISTORY_STORAGE_KEY = 'eduphysics_v2_ai_solver_history_v1';

function renderBoldAndPhysics(line: string) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={idx} className="font-semibold text-white">
          <RichPhysicsText text={part.slice(2, -2)} />
        </strong>
      );
    }
    return <RichPhysicsText key={idx} text={part} />;
  });
}

function FormattedPhysicsMarkdown({ text }: { text: string }) {
  // Normalize inline markdown markers onto separate lines so output never clumps into one wall of text
  const normalized = text
    .replace(/\r\n/g, '\n')
    .replace(/\s+---\s+/g, '\n---\n')
    .replace(/\s+(#{1,4}\s+)/g, '\n$1')
    .replace(/\s+([*-]\s+(?:\*\*[^*]+\*\*:|Dữ kiện:|Công thức:|Tính toán:|Giải thích:|Đáp án:|Phân tích[^:]*:|Câu\s+\d+[^:]*:))/g, '\n$1');

  const lines = normalized.split('\n');

  return (
    <div className="space-y-2.5 text-sm leading-relaxed text-slate-200">
      {lines.map((rawLine, idx) => {
        const line = rawLine.trim();
        if (!line) return null;

        if (/^-{3,}$/.test(line)) {
          return <hr key={idx} className="my-3 border-white/10" />;
        }

        const headingMatch = line.match(/^#{1,4}\s+(.*)$/);
        if (headingMatch) {
          return (
            <div
              key={idx}
              className="mt-4 first:mt-0 rounded-xl border border-amber-400/25 bg-amber-500/10 px-3.5 py-2 text-sm font-bold text-amber-200"
            >
              {renderBoldAndPhysics(headingMatch[1])}
            </div>
          );
        }

        // Question header like "Câu 1. ..." or "Bài 2: ..."
        const questionMatch = line.match(/^((?:Câu|Bài)\s+\d+[\.:]\s*)(.*)$/i);
        if (questionMatch) {
          return (
            <div
              key={idx}
              className="mt-4 first:mt-0 rounded-xl border border-amber-400/20 bg-amber-500/[0.08] px-3.5 py-2.5 text-sm text-slate-100"
            >
              <span className="mr-1.5 font-bold text-amber-300">{questionMatch[1]}</span>
              {renderBoldAndPhysics(questionMatch[2])}
            </div>
          );
        }

        // Diagram / check note badge
        if (/^\[Hình vẽ:/i.test(line)) {
          return (
            <div
              key={idx}
              className="rounded-xl border border-cyan-400/25 bg-cyan-500/10 px-3.5 py-2 text-xs text-cyan-200"
            >
              {renderBoldAndPhysics(line)}
            </div>
          );
        }
        if (/^\[CẦN KIỂM TRA:/i.test(line)) {
          return (
            <div
              key={idx}
              className="rounded-xl border border-amber-400/35 bg-amber-500/15 px-3.5 py-2 text-xs font-medium text-amber-200"
            >
              {renderBoldAndPhysics(line)}
            </div>
          );
        }

        // Sub-options a) b) c) d) or A. B. C. D.
        const optionMatch = line.match(/^([a-d]\)|[A-D]\.)\s+(.*)$/);
        if (optionMatch) {
          return (
            <div key={idx} className="flex items-start gap-2.5 pl-3">
              <span className="shrink-0 rounded-md border border-white/10 bg-white/[0.05] px-1.5 py-0.5 text-xs font-bold text-cyan-200">
                {optionMatch[1]}
              </span>
              <div className="min-w-0 flex-1 pt-0.5">{renderBoldAndPhysics(optionMatch[2])}</div>
            </div>
          );
        }

        const bulletMatch = line.match(/^(?:[-*•]|\d+\.)\s+(.*)$/);
        if (bulletMatch) {
          const isLead = line.match(/^(\d+\.)\s+/);
          return (
            <div key={idx} className="flex items-start gap-2.5 pl-2">
              <span className="mt-1 shrink-0 text-xs font-bold text-cyan-300">
                {isLead ? isLead[1] : '•'}
              </span>
              <div className="min-w-0 flex-1">{renderBoldAndPhysics(bulletMatch[1])}</div>
            </div>
          );
        }

        return <p key={idx}>{renderBoldAndPhysics(line)}</p>;
      })}
    </div>
  );
}

async function processImageFile(
  dataUrl: string,
  rotateDeg = 0
): Promise<{ base64: string; previewUrl: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => {
      const maxDim = 2048;
      let w = img.width;
      let h = img.height;
      if (w > maxDim || h > maxDim) {
        const ratio = Math.min(maxDim / w, maxDim / h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
      }

      const canvas = document.createElement('canvas');
      const swap = rotateDeg % 180 !== 0;
      canvas.width = swap ? h : w;
      canvas.height = swap ? w : h;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas context unavailable'));
        return;
      }

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotateDeg * Math.PI) / 180);
      ctx.drawImage(img, -w / 2, -h / 2, w, h);

      const outUrl = canvas.toDataURL('image/jpeg', 0.92);
      const base64 = outUrl.split(',')[1] ?? '';
      resolve({ base64, previewUrl: outUrl, mimeType: 'image/jpeg' });
    };
    img.onerror = () => reject(new Error('Không thể đọc file ảnh.'));
    img.src = dataUrl;
  });
}

export function V2AiSolverStudioClient() {
  const [settings, setSettings] = useState<AiSettingsState>(DEFAULT_AI_SETTINGS);
  const [hydrated, setHydrated] = useState(false);

  const [mode, setMode] = useState<'solve' | 'check_work'>('solve');
  const [promptText, setPromptText] = useState('');
  const [uploadedFile, setUploadedFile] = useState<UploadedFileState | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState<'scan' | 'solve' | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [result, setResult] = useState<SolveResponsePayload | null>(null);
  const [editableProblem, setEditableProblem] = useState('');
  const [expandProblemBox, setExpandProblemBox] = useState(false);
  const [problemTab, setProblemTab] = useState<'edit' | 'preview'>('edit');
  const [includeImageOnSolve, setIncludeImageOnSolve] = useState(true);
  const [hasScannedProblem, setHasScannedProblem] = useState(false);
  const [history, setHistory] = useState<AiSolveHistoryItem[]>([]);
  const [activeHistoryId, setActiveHistoryId] = useState<string | null>(null);

  useEffect(() => {
    setSettings(loadAiSettings());
    try {
      const raw = window.localStorage.getItem(HISTORY_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setHistory(parsed as AiSolveHistoryItem[]);
      }
    } catch {
      // Ignore malformed localStorage history
    }
    setHydrated(true);
  }, []);

  const persistHistory = (items: AiSolveHistoryItem[]) => {
    setHistory(items);
    try {
      window.localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage quota errors
    }
  };

  const handleSelectHistory = (item: AiSolveHistoryItem) => {
    setResult(item.result);
    setEditableProblem(item.result.extractedProblem || '');
    setHasScannedProblem(Boolean(item.result.extractedProblem));
    setActiveHistoryId(item.id);
    setErrorMsg(null);
  };

  const handleDeleteHistory = (id: string) => {
    persistHistory(history.filter((item) => item.id !== id));
    if (activeHistoryId === id) setActiveHistoryId(null);
  };

  const handleClearHistory = () => {
    persistHistory([]);
    setActiveHistoryId(null);
  };

  const activeProvider = settings.activeProvider;
  const activeConfig = settings[activeProvider];
  const hasApiKey = Boolean(activeConfig.apiKey.trim());

  const handleFile = async (file: File) => {
    setErrorMsg(null);
    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('File vượt quá 10MB. Vui lòng chọn ảnh hoặc PDF nhẹ hơn.');
      return;
    }

    const isPdf = file.type === 'application/pdf';
    const isImage = file.type.startsWith('image/');
    if (!isPdf && !isImage) {
      setErrorMsg('Chỉ hỗ trợ ảnh (PNG, JPG, WebP) hoặc file PDF.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = String(reader.result ?? '');
      if (isPdf) {
        const base64 = dataUrl.split(',')[1] ?? '';
        setUploadedFile({
          name: file.name,
          mimeType: 'application/pdf',
          base64,
          previewUrl: null,
        });
      } else {
        try {
          const processed = await processImageFile(dataUrl, 0);
          setUploadedFile({
            name: file.name,
            mimeType: processed.mimeType,
            base64: processed.base64,
            previewUrl: processed.previewUrl,
          });
        } catch {
          setErrorMsg('Không thể xử lý ảnh này. Vui lòng thử ảnh khác.');
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRotateImage = async () => {
    if (!uploadedFile?.previewUrl) return;
    try {
      const rotated = await processImageFile(uploadedFile.previewUrl, 90);
      setUploadedFile((prev) =>
        prev
          ? {
              ...prev,
              mimeType: rotated.mimeType,
              base64: rotated.base64,
              previewUrl: rotated.previewUrl,
            }
          : null
      );
    } catch {
      setErrorMsg('Không thể xoay ảnh.');
    }
  };

  const runSolve = async (solveMode: 'scan' | 'solve' | 'check_work' | 're_solve_text') => {
    setErrorMsg(null);
    if (!hasApiKey) {
      setErrorMsg('Bạn chưa gắn API Key. Vui lòng vào Cài đặt AI để cấu hình trước.');
      return;
    }

    const isScan = solveMode === 'scan';
    const isTextResolve = solveMode === 're_solve_text';

    if (isScan && !uploadedFile && !promptText.trim()) {
      setErrorMsg('Vui lòng tải lên ảnh/PDF hoặc nhập nội dung đề bài trước khi quét.');
      return;
    }
    if (isTextResolve && !editableProblem.trim()) {
      setErrorMsg('Ô đề bài đang trống, vui lòng nhập nội dung đề bài trước khi giải.');
      return;
    }
    if (!isScan && !isTextResolve && !uploadedFile && !promptText.trim() && !editableProblem.trim()) {
      setErrorMsg('Vui lòng tải lên ảnh/PDF hoặc nhập nội dung đề bài.');
      return;
    }

    const effectivePrompt = isScan
      ? promptText
      : isTextResolve
        ? editableProblem
        : editableProblem.trim() || promptText;

    const effectiveFile = isScan
      ? uploadedFile
      : includeImageOnSolve && uploadedFile
        ? uploadedFile
        : null;

    setLoading(true);
    setLoadingStep(isScan ? 'scan' : 'solve');
    try {
      const res = await fetch('/api/ai/solve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          provider: activeProvider,
          apiKey: activeConfig.apiKey,
          model: activeConfig.selectedModel,
          mode: solveMode,
          enableThinking: settings.enableThinking,
          promptText: effectivePrompt,
          file: effectiveFile
            ? {
                mimeType: effectiveFile.mimeType,
                base64: effectiveFile.base64,
                name: effectiveFile.name,
              }
            : null,
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        result?: SolveResponsePayload;
        error?: string;
      };

      if (!res.ok || !data.ok || !data.result) {
        setErrorMsg(data.error || 'Không thể xử lý yêu cầu lúc này.');
        return;
      }

      if (isScan) {
        setResult(data.result);
        setEditableProblem(data.result.extractedProblem || promptText);
        setHasScannedProblem(true);
        setProblemTab('preview');
        return;
      }

      setResult(data.result);
      const nextProblemText =
        data.result.extractedProblem || effectivePrompt;
      if (data.result.extractedProblem) {
        setEditableProblem(data.result.extractedProblem);
      }

      const rawTitle = (
        nextProblemText ||
        uploadedFile?.name ||
        data.result.solutionSteps ||
        'Bài giải Vật lí'
      )
        .replace(/\s+/g, ' ')
        .trim();
      const newEntry: AiSolveHistoryItem = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        createdAt: new Date().toISOString(),
        provider: activeProvider,
        model: activeConfig.selectedModel,
        mode: solveMode,
        title: rawTitle.length > 90 ? `${rawTitle.slice(0, 90)}...` : rawTitle,
        result: {
          ...data.result,
          extractedProblem: data.result.extractedProblem || nextProblemText,
        },
      };
      setActiveHistoryId(newEntry.id);
      persistHistory([newEntry, ...history].slice(0, 20));
    } catch {
      setErrorMsg('Lỗi kết nối tới máy chủ khi gửi bài.');
    } finally {
      setLoading(false);
      setLoadingStep(null);
    }
  };

  return (
    <div className="min-h-screen px-4 pb-24 pt-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Về Trang chủ
          </Link>

          <Link
            href="/ai-settings"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-500/12 px-3.5 py-2 text-xs font-semibold text-amber-200 transition hover:bg-amber-500/20"
          >
            <Settings className="h-3.5 w-3.5" />
            {hydrated && hasApiKey
              ? `${activeProvider === 'gemini' ? 'Gemini' : 'OpenRouter'} · ${activeConfig.selectedModel}`
              : 'Cài đặt API Key & Model'}
          </Link>
        </div>

        {/* Header */}
        <div className="rounded-3xl border border-white/12 bg-[#080d20]/85 p-6 shadow-2xl sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
            <ScanSearch className="h-3.5 w-3.5" />
            AI Quét &amp; Giải Bài Tập Vật Lí
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Gửi Ảnh Đề / Bài Làm Để AI Giải &amp; Chấm Chi Tiết
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm text-slate-300">
            Tải ảnh chụp đề bài, bài làm viết tay hoặc file PDF. Nếu ảnh bị mờ hoặc AI đọc nhầm số liệu, bạn có thể sửa lại trực tiếp văn bản đề bài và bấm giải lại ngay.
          </p>

          {hydrated && !hasApiKey && (
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-400/35 bg-amber-500/12 px-4 py-3 text-xs text-amber-100">
              <span>
                Bạn chưa gắn API Key trong mục Cài đặt AI. Hãy gắn API Key Gemini hoặc OpenRouter để bắt đầu sử dụng.
              </span>
              <Link
                href="/ai-settings"
                className="rounded-xl bg-amber-400 px-3.5 py-1.5 font-bold text-slate-950 transition hover:brightness-110"
              >
                Mở Cài đặt AI →
              </Link>
            </div>
          )}
        </div>

        {/* Input / Upload card */}
        <div className="rounded-3xl border border-white/12 bg-[#080d20]/85 p-6 space-y-5">
          {/* Mode selector + Thinking toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setMode('solve')}
                className={`rounded-xl border px-4 py-2 text-xs font-semibold transition ${
                  mode === 'solve'
                    ? 'border-amber-400/55 bg-amber-500/20 text-amber-200'
                    : 'border-white/10 bg-white/[0.03] text-slate-300 hover:text-white'
                }`}
              >
                Giải bài tập từ đề bài
              </button>
              <button
                type="button"
                onClick={() => setMode('check_work')}
                className={`rounded-xl border px-4 py-2 text-xs font-semibold transition ${
                  mode === 'check_work'
                    ? 'border-cyan-400/55 bg-cyan-500/20 text-cyan-200'
                    : 'border-white/10 bg-white/[0.03] text-slate-300 hover:text-white'
                }`}
              >
                Chấm &amp; chỉ lỗi sai bài em đã làm
              </button>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={settings.enableThinking}
              onClick={() => {
                setSettings((prev) => {
                  const next = { ...prev, enableThinking: !prev.enableThinking };
                  saveAiSettings(next);
                  return next;
                });
              }}
              className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition ${
                settings.enableThinking
                  ? 'border-violet-400/50 bg-violet-500/20 text-violet-200'
                  : 'border-white/10 bg-white/[0.03] text-slate-300 hover:text-white'
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  settings.enableThinking ? 'bg-violet-300 shadow-[0_0_8px_rgba(196,181,253,0.9)]' : 'bg-slate-500'
                }`}
              />
              <span>Thinking (Suy nghĩ sâu): {settings.enableThinking ? 'Bật' : 'Tắt'}</span>
            </button>
          </div>

          {/* Dropzone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              const f = e.dataTransfer.files?.[0];
              if (f) void handleFile(f);
            }}
            className={`rounded-2xl border-2 border-dashed p-6 text-center transition ${
              dragOver
                ? 'border-amber-400 bg-amber-500/10'
                : 'border-white/15 bg-white/[0.02] hover:border-white/25'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,application/pdf"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void handleFile(f);
              }}
            />

            {!uploadedFile ? (
              <div className="space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-amber-300">
                  <Upload className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Kéo thả ảnh hoặc file PDF vào đây
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Hỗ trợ PNG, JPG, WebP (tối đa 10MB) và PDF (khuyên dùng Gemini để đọc PDF trực tiếp)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/[0.12]"
                >
                  <ImageIcon className="h-4 w-4 text-amber-300" />
                  Chọn file từ máy
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {uploadedFile.previewUrl ? (
                  <img
                    src={uploadedFile.previewUrl}
                    alt="Xem trước đề bài"
                    className="mx-auto max-h-72 rounded-xl border border-white/15 object-contain"
                  />
                ) : (
                  <div className="mx-auto inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-xs font-semibold text-cyan-200">
                    <FileText className="h-4 w-4" />
                    {uploadedFile.name} (PDF)
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-center gap-2">
                  {uploadedFile.previewUrl && (
                    <button
                      type="button"
                      onClick={() => void handleRotateImage()}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/[0.1]"
                    >
                      <RotateCw className="h-3.5 w-3.5" />
                      Xoay 90°
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/[0.1]"
                  >
                    Đổi file khác
                  </button>
                  <button
                    type="button"
                    onClick={() => setUploadedFile(null)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-rose-400/30 bg-rose-500/10 px-3 py-1.5 text-xs font-medium text-rose-200 transition hover:bg-rose-500/20"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Xóa file
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Supplemental text / direct prompt */}
          <div className="space-y-1.5">
            <label
              htmlFor="solver-notes"
              className="block text-xs font-semibold text-slate-300"
            >
              Ghi chú bổ sung hoặc nhập đề bài trực tiếp (tùy chọn)
            </label>
            <textarea
              id="solver-notes"
              rows={3}
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Ví dụ: Ảnh hơi mờ chỗ g = 10 m/s², hoặc dán thẳng đề bài vào đây nếu không gửi ảnh..."
              className="w-full rounded-xl border border-white/12 bg-[#050814] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-amber-400/50 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={loading}
              onClick={() => void runSolve('scan')}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 px-6 py-3 text-xs font-bold text-slate-950 shadow-[0_0_24px_rgba(245,158,11,0.3)] transition hover:brightness-110 disabled:opacity-60"
            >
              {loading && loadingStep === 'scan' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Đang quét &amp; trích xuất đề bài...
                </>
              ) : (
                <>
                  <ScanSearch className="h-4 w-4" />
                  Bước 1: Quét đề bài để kiểm tra số liệu
                </>
              )}
            </button>

            {promptText.trim() && !uploadedFile && (
              <button
                type="button"
                disabled={loading}
                onClick={() => {
                  setEditableProblem(promptText);
                  setHasScannedProblem(true);
                  setProblemTab('edit');
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-500/12 px-4 py-3 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
              >
                Đưa đề xuống Bước 2 →
              </button>
            )}
          </div>

          {errorMsg && (
            <div className="flex items-start gap-2.5 rounded-2xl border border-rose-400/35 bg-rose-500/12 px-4 py-3 text-xs text-rose-200">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Step 2: Review & Edit extracted problem, then click Solve */}
        {(hasScannedProblem || result) && (
          <div className="space-y-5">
            {result?.status === 'unclear' && (
              <div className="flex items-start gap-3 rounded-2xl border border-amber-400/45 bg-amber-500/12 px-5 py-4 text-xs text-amber-100">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                <div className="space-y-1">
                  <p className="font-bold text-amber-200">
                    Ảnh hơi mờ hoặc thiếu dữ kiện — vui lòng kiểm tra lại số liệu trước khi giải
                  </p>
                  <p className="leading-relaxed">
                    {result.missingOrUnclearNote ||
                      'Bạn hãy kiểm tra và sửa lại những chỗ nghi ngờ trong khung đề bài bên dưới rồi mới bấm "Bước 2: Bắt đầu Giải bài".'}
                  </p>
                </div>
              </div>
            )}

            {/* Editable extracted problem box */}
            <div className="rounded-3xl border border-cyan-400/30 bg-[#080d20]/90 p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                    Bước 2 · Kiểm tra &amp; Chỉnh sửa
                  </span>
                  <h2 className="mt-1.5 text-sm font-bold text-white">
                    Đề bài AI quét được (sửa số liệu sai nếu có rồi bấm Giải)
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex rounded-xl border border-white/10 bg-white/[0.03] p-0.5 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setProblemTab('preview')}
                      className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                        problemTab === 'preview'
                          ? 'bg-cyan-500/20 text-cyan-200'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Xem trước đẹp
                    </button>
                    <button
                      type="button"
                      onClick={() => setProblemTab('edit')}
                      className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                        problemTab === 'edit'
                          ? 'bg-cyan-500/20 text-cyan-200'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Sửa số liệu
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandProblemBox((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/[0.1]"
                  >
                    {expandProblemBox ? (
                      <>
                        <Minimize2 className="h-3.5 w-3.5" />
                        Thu nhỏ
                      </>
                    ) : (
                      <>
                        <Maximize2 className="h-3.5 w-3.5" />
                        Phóng to
                      </>
                    )}
                  </button>
                </div>
              </div>

              {problemTab === 'edit' ? (
                <textarea
                  rows={expandProblemBox ? 16 : 8}
                  value={editableProblem}
                  onChange={(e) => setEditableProblem(e.target.value)}
                  placeholder="Nội dung đề bài..."
                  className="w-full rounded-xl border border-white/12 bg-[#050814] px-3.5 py-2.5 text-xs leading-relaxed text-slate-100 focus:border-cyan-400/50 focus:outline-none"
                />
              ) : (
                <div
                  className={`${
                    expandProblemBox ? 'max-h-[680px]' : 'max-h-[360px]'
                  } overflow-y-auto rounded-xl border border-white/12 bg-[#050814] p-4`}
                >
                  <FormattedPhysicsMarkdown text={editableProblem || 'Chưa có nội dung đề bài.'} />
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                {uploadedFile?.previewUrl ? (
                  <label className="inline-flex cursor-pointer items-center gap-2 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={includeImageOnSolve}
                      onChange={(e) => setIncludeImageOnSolve(e.target.checked)}
                      className="accent-cyan-400"
                    />
                    Kèm ảnh gốc khi giải (để AI xem thêm hình vẽ / đồ thị nếu có)
                  </label>
                ) : (
                  <span />
                )}

                <button
                  type="button"
                  disabled={loading}
                  onClick={() => void runSolve(mode === 'check_work' ? 'check_work' : 're_solve_text')}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-[0_0_24px_rgba(45,212,191,0.28)] transition hover:brightness-110 disabled:opacity-60"
                >
                  {loading && loadingStep === 'solve' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      AI đang giải theo đề đã kiểm tra...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      {mode === 'check_work'
                        ? 'Bước 2: Bắt đầu Chấm Bài'
                        : 'Bước 2: Bắt đầu Giải Bài'}
                    </>
                  )}
                </button>
              </div>
            </div>

            {result?.mistakeReview && (
              <div className="rounded-3xl border border-cyan-400/30 bg-cyan-500/[0.07] p-6 space-y-2">
                <h2 className="text-sm font-bold text-cyan-200">
                  Nhận xét bài làm &amp; Chỉ lỗi sai
                </h2>
                <FormattedPhysicsMarkdown text={result.mistakeReview} />
              </div>
            )}

            {result?.solutionSteps && (
              <div className="rounded-3xl border border-white/12 bg-[#080d20]/85 p-6 space-y-3">
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  <h2 className="text-sm font-bold text-white">Lời giải chi tiết</h2>
                </div>
                <FormattedPhysicsMarkdown text={result.solutionSteps} />

                {result.finalAnswer && (
                  <div className="mt-4 rounded-2xl border border-emerald-400/35 bg-emerald-500/12 px-4 py-3 text-sm font-semibold text-emerald-100">
                    <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Đáp án tổng hợp
                    </p>
                    <FormattedPhysicsMarkdown text={result.finalAnswer} />
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Saved solution history */}
        <div className="rounded-3xl border border-white/12 bg-[#080d20]/85 p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/15 text-amber-300">
                <History className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-sm font-bold text-white">
                  Lịch sử bài giải đã lưu ({history.length})
                </h2>
                <p className="text-[11px] text-slate-400">
                  Tự động lưu tối đa 20 bài gần nhất trên trình duyệt để xem lại bất cứ lúc nào
                </p>
              </div>
            </div>

            {history.length > 0 && (
              <button
                type="button"
                onClick={handleClearHistory}
                className="inline-flex items-center gap-1.5 rounded-xl border border-rose-400/25 bg-rose-500/10 px-3 py-1.5 text-xs font-medium text-rose-200 transition hover:bg-rose-500/20"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Xóa tất cả
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-4 py-6 text-center text-xs text-slate-400">
              Chưa có bài giải nào được lưu. Khi bạn bấm giải bài, kết quả sẽ tự động lưu vào đây.
            </p>
          ) : (
            <div className="grid max-h-[340px] grid-cols-1 gap-2 overflow-y-auto pr-1">
              {history.map((item) => {
                const isActive = activeHistoryId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition ${
                      isActive
                        ? 'border-amber-400/50 bg-amber-500/12'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleSelectHistory(item)}
                      className="min-w-0 flex-1 text-left"
                    >
                      <p className="truncate text-xs font-semibold text-white">
                        {item.title}
                      </p>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                        <span className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium text-slate-300">
                          {item.provider === 'gemini' ? 'Gemini' : 'OpenRouter'} · {item.model}
                        </span>
                        <span>
                          {item.mode === 'check_work'
                            ? 'Chấm bài'
                            : item.mode === 're_solve_text'
                              ? 'Giải lại'
                              : 'Giải bài'}
                        </span>
                        <span>
                          · {new Date(item.createdAt).toLocaleString('vi-VN')}
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDeleteHistory(item.id)}
                      aria-label="Xóa bài giải này"
                      className="shrink-0 rounded-lg border border-white/10 bg-white/[0.04] p-1.5 text-slate-400 transition hover:border-rose-400/35 hover:bg-rose-500/15 hover:text-rose-200"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
