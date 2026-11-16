export type AiProviderId = 'gemini' | 'openrouter';

export interface AiModelInfo {
  id: string;
  name: string;
  provider: AiProviderId;
  description?: string;
  contextLength?: number;
  outputTokenLimit?: number;
  isFree?: boolean;
  supportsVision?: boolean;
}

export interface ProviderConfig {
  apiKey: string;
  selectedModel: string;
  models: AiModelInfo[];
  connected: boolean;
  lastTestedAt: string | null;
}

export interface AiSettingsState {
  activeProvider: AiProviderId;
  enableThinking: boolean;
  gemini: ProviderConfig;
  openrouter: ProviderConfig;
}

export const AI_SETTINGS_STORAGE_KEY = 'eduphysics_v2_ai_settings_v1';

export const DEFAULT_AI_SETTINGS: AiSettingsState = {
  activeProvider: 'gemini',
  enableThinking: false,
  gemini: {
    apiKey: '',
    selectedModel: 'gemini-2.5-flash',
    models: [],
    connected: false,
    lastTestedAt: null,
  },
  openrouter: {
    apiKey: '',
    selectedModel: 'google/gemini-2.5-flash',
    models: [],
    connected: false,
    lastTestedAt: null,
  },
};

export function loadAiSettings(): AiSettingsState {
  if (typeof window === 'undefined') return DEFAULT_AI_SETTINGS;
  try {
    const raw = window.localStorage.getItem(AI_SETTINGS_STORAGE_KEY);
    if (!raw) return DEFAULT_AI_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<AiSettingsState>;
    return {
      activeProvider:
        parsed.activeProvider === 'openrouter' ? 'openrouter' : 'gemini',
      enableThinking: Boolean(parsed.enableThinking),
      gemini: {
        ...DEFAULT_AI_SETTINGS.gemini,
        ...(parsed.gemini ?? {}),
        models: Array.isArray(parsed.gemini?.models) ? parsed.gemini!.models : [],
      },
      openrouter: {
        ...DEFAULT_AI_SETTINGS.openrouter,
        ...(parsed.openrouter ?? {}),
        models: Array.isArray(parsed.openrouter?.models)
          ? parsed.openrouter!.models
          : [],
      },
    };
  } catch {
    return DEFAULT_AI_SETTINGS;
  }
}

export function saveAiSettings(settings: AiSettingsState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(AI_SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // Ignore storage quota errors
  }
}
