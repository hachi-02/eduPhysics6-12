'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Eye,
  EyeOff,
  KeyRound,
  Loader2,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  Trash2,
  XCircle,
} from 'lucide-react';
import {
  DEFAULT_AI_SETTINGS,
  loadAiSettings,
  saveAiSettings,
  type AiModelInfo,
  type AiProviderId,
  type AiSettingsState,
} from '@/lib/ai-settings';

const PROVIDER_META: Record<
  AiProviderId,
  {
    name: string;
    subtitle: string;
    placeholder: string;
    keyUrl: string;
    keyUrlLabel: string;
    accentBadge: string;
  }
> = {
  gemini: {
    name: 'Google Gemini',
    subtitle: 'Google AI Studio · Hỗ trợ đọc trực tiếp Ảnh & PDF',
    placeholder: 'AIzaSy...',
    keyUrl: 'https://aistudio.google.com/apikey',
    keyUrlLabel: 'Lấy key tại Google AI Studio',
    accentBadge: 'border-sky-400/35 bg-sky-500/15 text-sky-200',
  },
  openrouter: {
    name: 'OpenRouter',
    subtitle: 'Cổng đa model (Gemini, GPT, Claude, DeepSeek, Llama...)',
    placeholder: 'sk-or-v1-...',
    keyUrl: 'https://openrouter.ai/keys',
    keyUrlLabel: 'Lấy key tại OpenRouter',
    accentBadge: 'border-amber-400/35 bg-amber-500/15 text-amber-200',
  },
};

export function V2AiSettingsStudioClient() {
  const [settings, setSettings] = useState<AiSettingsState>(DEFAULT_AI_SETTINGS);
  const [hydrated, setHydrated] = useState(false);

  const [editingProvider, setEditingProvider] = useState<AiProviderId>('gemini');
  const [showKey, setShowKey] = useState(false);
  const [testingProvider, setTestingProvider] = useState<AiProviderId | null>(null);
  const [statusBanner, setStatusBanner] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const [modelTab, setModelTab] = useState<'both' | AiProviderId>('both');
  const [modelSearch, setModelSearch] = useState('');
  const [onlyFreeOpenRouter, setOnlyFreeOpenRouter] = useState(false);
  const [onlyVisionModels, setOnlyVisionModels] = useState(false);

  useEffect(() => {
    const loaded = loadAiSettings();
    setSettings(loaded);
    setEditingProvider(loaded.activeProvider);
    setHydrated(true);
  }, []);

  const updateSettings = (updater: (prev: AiSettingsState) => AiSettingsState) => {
    setSettings((prev) => {
      const next = updater(prev);
      saveAiSettings(next);
      return next;
    });
  };

  const currentProviderConfig = settings[editingProvider];

  const handleTestAndFetchModels = async (providerToTest: AiProviderId) => {
    const apiKey = settings[providerToTest].apiKey.trim();
    if (!apiKey) {
      setStatusBanner({
        type: 'error',
        message: `Vui lòng nhập API Key cho ${PROVIDER_META[providerToTest].name} trước khi kiểm tra.`,
      });
      return;
    }

    setTestingProvider(providerToTest);
    setStatusBanner(null);

    try {
      const res = await fetch('/api/ai/models', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider: providerToTest, apiKey }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        models?: AiModelInfo[];
        error?: string;
      };

      if (!res.ok || !data.ok || !Array.isArray(data.models)) {
        updateSettings((prev) => ({
          ...prev,
          [providerToTest]: {
            ...prev[providerToTest],
            connected: false,
          },
        }));
        setStatusBanner({
          type: 'error',
          message:
            data.error ||
            `Kết nối tới ${PROVIDER_META[providerToTest].name} thất bại.`,
        });
        return;
      }

      const fetchedModels = data.models;
      const nowIso = new Date().toISOString();

      updateSettings((prev) => {
        const prevSelected = prev[providerToTest].selectedModel;
        const stillExists = fetchedModels.some((m) => m.id === prevSelected);
        const nextSelected = stillExists
          ? prevSelected
          : fetchedModels[0]?.id ?? prevSelected;

        return {
          ...prev,
          activeProvider: providerToTest,
          [providerToTest]: {
            ...prev[providerToTest],
            apiKey,
            models: fetchedModels,
            selectedModel: nextSelected,
            connected: true,
            lastTestedAt: nowIso,
          },
        };
      });

      setStatusBanner({
        type: 'success',
        message: `Kết nối thành công tới ${PROVIDER_META[providerToTest].name}! Đã tải ${fetchedModels.length} model đang hoạt động.`,
      });
    } catch {
      setStatusBanner({
        type: 'error',
        message: 'Không thể kết nối tới máy chủ để kiểm tra API Key.',
      });
    } finally {
      setTestingProvider(null);
    }
  };

  const handleSelectModel = (provider: AiProviderId, modelId: string) => {
    updateSettings((prev) => ({
      ...prev,
      activeProvider: provider,
      [provider]: {
        ...prev[provider],
        selectedModel: modelId,
      },
    }));
  };

  const handleClearProvider = (provider: AiProviderId) => {
    updateSettings((prev) => ({
      ...prev,
      [provider]: {
        ...DEFAULT_AI_SETTINGS[provider],
      },
    }));
    setStatusBanner(null);
  };

  const displayedModels = useMemo(() => {
    const q = modelSearch.trim().toLowerCase();
    const list: AiModelInfo[] = [];

    if (modelTab === 'both' || modelTab === 'gemini') {
      list.push(...settings.gemini.models);
    }
    if (modelTab === 'both' || modelTab === 'openrouter') {
      list.push(...settings.openrouter.models);
    }

    return list.filter((m) => {
      if (onlyFreeOpenRouter && m.provider === 'openrouter' && !m.isFree) {
        return false;
      }
      if (onlyVisionModels && !m.supportsVision) {
        return false;
      }
      if (!q) return true;
      return (
        m.id.toLowerCase().includes(q) ||
        m.name.toLowerCase().includes(q) ||
        (m.description ?? '').toLowerCase().includes(q)
      );
    });
  }, [settings.gemini.models, settings.openrouter.models, modelTab, modelSearch, onlyFreeOpenRouter, onlyVisionModels]);

  const anyConnected = settings.gemini.connected || settings.openrouter.connected;

  return (
    <div className="min-h-screen px-4 pb-24 pt-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Về Trang chủ
            </Link>
            <Link
              href="/ai-solver"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-500/12 px-3.5 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Mở AI Giải Bài Tập →
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-500/10 px-3 py-1 text-[11px] font-medium text-amber-200">
            <Settings className="h-3.5 w-3.5" />
            Cấu hình lưu cục bộ trên trình duyệt (localStorage)
          </div>
        </div>

        {/* Hero title */}
        <div className="rounded-3xl border border-white/12 bg-[#080d20]/85 p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-sky-300">
                <Sparkles className="h-3.5 w-3.5" />
                AI Provider & Model Settings
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Cài đặt API Key &amp; Chọn Model AI
              </h1>
              <p className="max-w-2xl text-sm text-slate-300">
                Chọn nhà phát hành <span className="font-semibold text-white">Google Gemini</span> hoặc{' '}
                <span className="font-semibold text-white">OpenRouter</span>, gắn API Key để kiểm tra kết nối
                và xem danh sách toàn bộ model đang hoạt động của cả 2 bên.
              </p>
            </div>

            {hydrated && (
              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs">
                <p className="text-[11px] uppercase tracking-wider text-slate-400">
                  Đang kích hoạt mặc định
                </p>
                <p className="mt-1 font-semibold text-amber-300">
                  {PROVIDER_META[settings.activeProvider].name}
                </p>
                <p className="mt-0.5 max-w-[220px] truncate font-mono text-[11px] text-slate-300">
                  {settings[settings.activeProvider].selectedModel || 'Chưa chọn model'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Provider cards (2 providers side-by-side) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {(['gemini', 'openrouter'] as AiProviderId[]).map((pid) => {
            const meta = PROVIDER_META[pid];
            const cfg = settings[pid];
            const isEditing = editingProvider === pid;
            const isActive = settings.activeProvider === pid;

            return (
              <button
                key={pid}
                type="button"
                onClick={() => {
                  setEditingProvider(pid);
                  setStatusBanner(null);
                }}
                className={`group rounded-2xl border p-5 text-left transition ${
                  isEditing
                    ? 'border-amber-400/55 bg-[#0d1530]/95 shadow-[0_0_30px_-10px_rgba(245,158,11,0.35)]'
                    : 'border-white/10 bg-[#080d20]/80 hover:border-white/25 hover:bg-[#0b1228]/90'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-white">{meta.name}</span>
                      {isActive && (
                        <span className="rounded-full border border-amber-400/40 bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold text-amber-200">
                          Mặc định
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{meta.subtitle}</p>
                  </div>

                  {cfg.connected ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-200">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Đã kết nối
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-400">
                      Chưa kết nối
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-[11px]">
                  <span className="truncate font-mono text-slate-300">
                    Model: <span className="text-white">{cfg.selectedModel || '—'}</span>
                  </span>
                  <span className="text-slate-400">
                    {cfg.models.length > 0
                      ? `${cfg.models.length} model hoạt động`
                      : 'Chưa tải model'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Configuration form for selected provider */}
        <div className="rounded-3xl border border-white/12 bg-[#080d20]/85 p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-xl border ${PROVIDER_META[editingProvider].accentBadge}`}
              >
                <KeyRound className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-base font-bold text-white">
                  Cấu hình {PROVIDER_META[editingProvider].name}
                </h2>
                <a
                  href={PROVIDER_META[editingProvider].keyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-sky-300 underline decoration-sky-400/40 underline-offset-2 hover:text-sky-200"
                >
                  {PROVIDER_META[editingProvider].keyUrlLabel} ↗
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {settings.activeProvider !== editingProvider && (
                <button
                  type="button"
                  onClick={() =>
                    updateSettings((prev) => ({
                      ...prev,
                      activeProvider: editingProvider,
                    }))
                  }
                  className="rounded-xl border border-amber-400/35 bg-amber-500/15 px-3 py-1.5 text-xs font-semibold text-amber-200 transition hover:bg-amber-500/25"
                >
                  Đặt làm mặc định
                </button>
              )}
              {currentProviderConfig.apiKey && (
                <button
                  type="button"
                  onClick={() => handleClearProvider(editingProvider)}
                  className="inline-flex items-center gap-1 rounded-xl border border-rose-400/25 bg-rose-500/10 px-3 py-1.5 text-xs font-medium text-rose-200 transition hover:bg-rose-500/20"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Xóa Key
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* API Key input */}
            <div className="lg:col-span-7 space-y-1.5">
              <label
                htmlFor="ai-api-key-input"
                className="block text-xs font-semibold text-slate-300"
              >
                API Key ({PROVIDER_META[editingProvider].name})
              </label>
              <div className="relative flex items-center">
                <input
                  id="ai-api-key-input"
                  type={showKey ? 'text' : 'password'}
                  value={currentProviderConfig.apiKey}
                  onChange={(e) => {
                    const val = e.target.value;
                    updateSettings((prev) => ({
                      ...prev,
                      [editingProvider]: {
                        ...prev[editingProvider],
                        apiKey: val,
                      },
                    }));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      void handleTestAndFetchModels(editingProvider);
                    }
                  }}
                  placeholder={PROVIDER_META[editingProvider].placeholder}
                  className="w-full rounded-xl border border-white/15 bg-[#050814] py-2.5 pl-3.5 pr-10 font-mono text-xs text-white placeholder:text-slate-500 focus:border-amber-400/60 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowKey((s) => !s)}
                  aria-label={showKey ? 'Ẩn API Key' : 'Hiện API Key'}
                  className="absolute right-2.5 rounded-lg p-1 text-slate-400 transition hover:text-white"
                >
                  {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Custom / Selected Model input */}
            <div className="lg:col-span-5 space-y-1.5">
              <label
                htmlFor="ai-model-input"
                className="block text-xs font-semibold text-slate-300"
              >
                Model đang gắn
              </label>
              <input
                id="ai-model-input"
                type="text"
                value={currentProviderConfig.selectedModel}
                onChange={(e) => {
                  const val = e.target.value;
                  updateSettings((prev) => ({
                    ...prev,
                    [editingProvider]: {
                      ...prev[editingProvider],
                      selectedModel: val,
                    },
                  }));
                }}
                placeholder="vd: gemini-2.5-flash"
                className="w-full rounded-xl border border-white/15 bg-[#050814] px-3.5 py-2.5 font-mono text-xs text-white placeholder:text-slate-500 focus:border-amber-400/60 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={testingProvider !== null}
              onClick={() => void handleTestAndFetchModels(editingProvider)}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-[0_0_24px_rgba(245,158,11,0.3)] transition hover:brightness-110 disabled:opacity-60"
            >
              {testingProvider === editingProvider ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Đang kiểm tra kết nối...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4" />
                  Kiểm tra kết nối &amp; Tải danh sách Model
                </>
              )}
            </button>

            {currentProviderConfig.lastTestedAt && (
              <span className="text-[11px] text-slate-400">
                Kiểm tra lần cuối:{' '}
                {new Date(currentProviderConfig.lastTestedAt).toLocaleString('vi-VN')}
              </span>
            )}
          </div>

          {/* Connection status banner */}
          {statusBanner && (
            <div
              role="status"
              className={`flex items-start gap-2.5 rounded-2xl border px-4 py-3 text-xs ${
                statusBanner.type === 'success'
                  ? 'border-emerald-400/35 bg-emerald-500/12 text-emerald-200'
                  : 'border-rose-400/35 bg-rose-500/12 text-rose-200'
              }`}
            >
              {statusBanner.type === 'success' ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
              ) : (
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
              )}
              <span className="leading-relaxed">{statusBanner.message}</span>
            </div>
          )}
        </div>

        {/* Active Models List (for both Gemini & OpenRouter) */}
        <div className="rounded-3xl border border-white/12 bg-[#080d20]/85 p-6 space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/15 text-cyan-200">
                <Cpu className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-base font-bold text-white">
                  Danh sách Model đang hoạt động (Gemini &amp; OpenRouter)
                </h2>
                <p className="text-xs text-slate-400">
                  Gemini: {settings.gemini.models.length} model · OpenRouter:{' '}
                  {settings.openrouter.models.length} model
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {(['both', 'gemini', 'openrouter'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setModelTab(tab)}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${
                    modelTab === tab
                      ? 'border-amber-400/50 bg-amber-500/20 text-amber-200'
                      : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === 'both'
                    ? 'Cả 2 nhà phát hành'
                    : PROVIDER_META[tab].name}
                </button>
              ))}
            </div>
          </div>

          {!anyConnected ? (
            <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-10 text-center">
              <p className="text-sm font-medium text-slate-300">
                Chưa có nhà phát hành nào được kết nối.
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Hãy nhập API Key cho <span className="text-white">Google Gemini</span> hoặc{' '}
                <span className="text-white">OpenRouter</span> ở phía trên và bấm{' '}
                <span className="text-amber-300">Kiểm tra kết nối &amp; Tải danh sách Model</span>.
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[220px]">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={modelSearch}
                    onChange={(e) => setModelSearch(e.target.value)}
                    placeholder="Tìm nhanh tên hoặc ID model (vd: flash, pro, claude, gpt, free)..."
                    className="w-full rounded-xl border border-white/12 bg-[#050814] py-2 pl-9 pr-3 text-xs text-white placeholder:text-slate-500 focus:border-amber-400/50 focus:outline-none"
                  />
                </div>

                {settings.openrouter.models.length > 0 && (
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={onlyFreeOpenRouter}
                      onChange={(e) => setOnlyFreeOpenRouter(e.target.checked)}
                      className="accent-amber-400"
                    />
                    Chỉ lọc OpenRouter Free
                  </label>
                )}
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-500/[0.06] px-3 py-2 text-xs text-cyan-200">
                  <input
                    type="checkbox"
                    checked={onlyVisionModels}
                    onChange={(e) => setOnlyVisionModels(e.target.checked)}
                    className="accent-cyan-400"
                  />
                  Chỉ lọc đọc được Ảnh (Vision)
                </label>
              </div>

              <div className="grid max-h-[440px] grid-cols-1 gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2">
                {displayedModels.map((model) => {
                  const isSelected =
                    settings.activeProvider === model.provider &&
                    settings[model.provider].selectedModel === model.id;
                  const isProviderSelected =
                    settings[model.provider].selectedModel === model.id;

                  return (
                    <button
                      key={`${model.provider}:${model.id}`}
                      type="button"
                      onClick={() => handleSelectModel(model.provider, model.id)}
                      className={`flex flex-col justify-between rounded-2xl border p-3.5 text-left transition ${
                        isSelected
                          ? 'border-amber-400/60 bg-amber-500/12'
                          : isProviderSelected
                            ? 'border-sky-400/40 bg-sky-500/10'
                            : 'border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span
                              className={`rounded-md border px-1.5 py-0.5 text-[10px] font-semibold ${PROVIDER_META[model.provider].accentBadge}`}
                            >
                              {model.provider === 'gemini' ? 'Gemini' : 'OpenRouter'}
                            </span>
                            {model.isFree && (
                              <span className="rounded-md border border-emerald-400/35 bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-200">
                                Free
                              </span>
                            )}
                            {model.supportsVision ? (
                              <span className="rounded-md border border-cyan-400/35 bg-cyan-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-cyan-200">
                                Vision / Ảnh
                              </span>
                            ) : (
                              <span className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium text-slate-400">
                                Chỉ chữ
                              </span>
                            )}
                          </div>
                          <p className="mt-1.5 truncate text-xs font-bold text-white">
                            {model.name}
                          </p>
                          <p className="truncate font-mono text-[11px] text-slate-400">
                            {model.id}
                          </p>
                        </div>

                        {isSelected ? (
                          <span className="shrink-0 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-slate-950">
                            Đang dùng
                          </span>
                        ) : isProviderSelected ? (
                          <span className="shrink-0 rounded-full border border-sky-400/40 bg-sky-500/15 px-2 py-0.5 text-[10px] font-semibold text-sky-200">
                            Đã gắn
                          </span>
                        ) : null}
                      </div>

                      {model.contextLength ? (
                        <p className="mt-2 text-[10px] text-slate-400">
                          Context: {model.contextLength.toLocaleString('en-US')} tokens
                        </p>
                      ) : null}
                    </button>
                  );
                })}
              </div>

              {displayedModels.length === 0 && (
                <p className="py-6 text-center text-xs text-slate-400">
                  Không tìm thấy model phù hợp với từ khóa &ldquo;{modelSearch}&rdquo;.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
