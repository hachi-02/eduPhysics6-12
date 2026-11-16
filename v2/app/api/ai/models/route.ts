import { NextRequest, NextResponse } from 'next/server';
import type { AiModelInfo, AiProviderId } from '@/lib/ai-settings';

interface GeminiModelRaw {
  name?: string;
  displayName?: string;
  description?: string;
  inputTokenLimit?: number;
  outputTokenLimit?: number;
  supportedGenerationMethods?: string[];
}

interface OpenRouterModelRaw {
  id?: string;
  name?: string;
  description?: string;
  context_length?: number;
  architecture?: {
    modality?: string;
    input_modalities?: string[];
  };
  pricing?: {
    prompt?: string;
    completion?: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      provider?: AiProviderId;
      apiKey?: string;
    };

    const provider = body.provider;
    const apiKey = typeof body.apiKey === 'string' ? body.apiKey.trim() : '';

    if (provider !== 'gemini' && provider !== 'openrouter') {
      return NextResponse.json(
        { ok: false, error: 'Nhà phát hành không hợp lệ (chỉ hỗ trợ gemini hoặc openrouter).' },
        { status: 400 }
      );
    }

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: 'Vui lòng nhập API Key trước khi kiểm tra kết nối.' },
        { status: 400 }
      );
    }

    if (provider === 'gemini') {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}&pageSize=100`,
        {
          method: 'GET',
          cache: 'no-store',
        }
      );

      const data = (await res.json().catch(() => ({}))) as {
        models?: GeminiModelRaw[];
        error?: { message?: string; status?: string };
      };

      if (!res.ok) {
        const msg =
          data.error?.message ||
          'API Key Gemini không hợp lệ hoặc chưa được kích hoạt.';
        return NextResponse.json({ ok: false, error: msg }, { status: res.status });
      }

      const rawModels = Array.isArray(data.models) ? data.models : [];
      const activeModels: AiModelInfo[] = rawModels
        .filter((m) => {
          const methods = m.supportedGenerationMethods ?? [];
          return methods.includes('generateContent') && Boolean(m.name);
        })
        .map((m) => {
          const cleanId = (m.name ?? '').replace(/^models\//, '');
          return {
            id: cleanId,
            name: m.displayName || cleanId,
            provider: 'gemini' as const,
            description: m.description,
            contextLength: m.inputTokenLimit,
            outputTokenLimit: m.outputTokenLimit,
            supportsVision: cleanId.includes('gemini'),
          };
        })
        .sort((a, b) => {
          const score = (id: string) => {
            if (id.includes('2.5-flash')) return 0;
            if (id.includes('2.5-pro')) return 1;
            if (id.includes('2.0-flash')) return 2;
            if (id.includes('1.5')) return 3;
            return 4;
          };
          return score(a.id) - score(b.id) || a.id.localeCompare(b.id);
        });

      return NextResponse.json({
        ok: true,
        provider: 'gemini',
        models: activeModels,
      });
    }

    // OpenRouter: verify auth key first, then list active models
    const authRes = await fetch('https://openrouter.ai/api/v1/auth/key', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      cache: 'no-store',
    });

    if (!authRes.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: 'API Key OpenRouter không hợp lệ hoặc đã bị thu hồi.',
        },
        { status: authRes.status }
      );
    }

    const modelsRes = await fetch('https://openrouter.ai/api/v1/models', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      cache: 'no-store',
    });

    if (!modelsRes.ok) {
      return NextResponse.json(
        { ok: false, error: 'Không thể tải danh sách model từ OpenRouter.' },
        { status: modelsRes.status }
      );
    }

    const modelsJson = (await modelsRes.json().catch(() => ({}))) as {
      data?: OpenRouterModelRaw[];
    };
    const rawList = Array.isArray(modelsJson.data) ? modelsJson.data : [];

    const activeModels: AiModelInfo[] = rawList
      .filter((m) => Boolean(m.id))
      .map((m) => {
        const isFree =
          m.pricing?.prompt === '0' && m.pricing?.completion === '0';
        const inputModalities = m.architecture?.input_modalities ?? [];
        const modalityStr = m.architecture?.modality ?? '';
        const supportsVision =
          inputModalities.includes('image') || modalityStr.includes('image');
        return {
          id: m.id!,
          name: m.name || m.id!,
          provider: 'openrouter' as const,
          description: m.description,
          contextLength: m.context_length,
          isFree,
          supportsVision,
        };
      })
      .sort((a, b) => {
        if (a.isFree !== b.isFree) return a.isFree ? -1 : 1;
        return a.id.localeCompare(b.id);
      });

    return NextResponse.json({
      ok: true,
      provider: 'openrouter',
      models: activeModels,
    });
  } catch (err) {
    console.error('[api/ai/models] error:', err);
    return NextResponse.json(
      { ok: false, error: 'Lỗi kết nối máy chủ khi kiểm tra API Key.' },
      { status: 500 }
    );
  }
}
