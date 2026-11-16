import { NextRequest, NextResponse } from 'next/server';
import type { AiProviderId } from '@/lib/ai-settings';

interface SolveRequestBody {
  provider?: AiProviderId;
  apiKey?: string;
  model?: string;
  mode?: 'scan' | 'solve' | 'check_work' | 're_solve_text';
  enableThinking?: boolean;
  promptText?: string;
  file?: {
    mimeType: string;
    base64: string;
    name?: string;
  } | null;
}

export interface SolveResponsePayload {
  status: 'ok' | 'unclear';
  extractedProblem: string;
  missingOrUnclearNote: string;
  mistakeReview: string;
  solutionSteps: string;
  finalAnswer: string;
}

const SYSTEM_INSTRUCTION = `Bạn là gia sư Vật lí THCS & THPT (Lớp 6–12, chuẩn GDPT 2018 & hệ đơn vị SI).
Nhiệm vụ của bạn là đọc đề bài hoặc bài làm Vật lí từ ảnh, PDF hoặc văn bản học sinh gửi lên.

QUY TẮC BẮT BUỘC:
1. Nếu ảnh/PDF bị mờ, cắt mất chữ, thiếu hình vẽ hoặc thiếu dữ kiện quan trọng khiến KHÔNG THỂ giải chính xác:
   - TUYỆT ĐỐI KHÔNG TỰ BỊA SỐ LIỆU.
   - Đặt trạng thái là unclear và ghi rõ đoạn nào bị mờ/thiếu trong mục [UNCLEAR].
   - Vẫn chép lại những phần đọc được vào mục [PROBLEM] để học sinh tự sửa lại.
2. Nếu đọc đủ dữ kiện: đặt trạng thái là ok.
3. Quy tắc viết công thức & trình bày BẮT BUỘC:
   - Viết 100% bằng tiếng Việt chuẩn (TUYỆT ĐỐI KHÔNG xuất hiện ký tự tiếng Trung / Hán tự hay từ tiếng Anh chen ngang).
   - CHỈ bọc riêng biểu thức toán/ký hiệu Vật lí trong $...$ hoặc $$...$$ (ví dụ: $v = v_0 + at$, $p, V, R$). TUYỆT ĐỐI KHÔNG viết chữ tiếng Việt vào bên trong dấu $...$.
   - Trình bày thoáng, rõ ràng: mỗi câu bắt đầu bằng dòng "### Câu X:", các ý (Dữ kiện, Công thức, Tính toán, Giải thích, Đáp án) viết mỗi ý một dòng bắt đầu bằng "- **Tên mục:** ...". Giữa các câu cách nhau một dòng trống.
4. Trình bày kết quả theo ĐÚNG các thẻ sau (không viết JSON):
[STATUS]
ok hoặc unclear
[/STATUS]
[PROBLEM]
Chép lại chính xác đề bài (và phần bài làm nếu có) đã đọc được
[/PROBLEM]
[UNCLEAR]
Nếu mờ/thiếu thì ghi rõ chỗ nào; nếu đủ thì để trống
[/UNCLEAR]
[REVIEW]
CHỈ điền mục này khi học sinh gửi kèm BÀI LÀM ĐÃ GIẢI / ĐÁP ÁN KHOANH SẴN để nhận xét đúng/sai. Nếu đề trắng (chưa có bài làm của học sinh) thì BẮT BUỘC để trống hoàn toàn giữa 2 thẻ [REVIEW] và [/REVIEW].
[/REVIEW]
[SOLUTION]
Lời giải chi tiết từng bước (Tóm tắt dữ kiện -> Công thức -> Thế số SI -> Kết quả)
[/SOLUTION]
[ANSWER]
Đáp án cuối cùng ngắn gọn (kèm đơn vị SI)
[/ANSWER]`;

const SCAN_SYSTEM_INSTRUCTION = `Bạn là trợ lý OCR chuyên đọc và số hóa đề bài / bài làm Vật lí THCS & THPT (Lớp 6–12, chuẩn GDPT 2018 & hệ đơn vị SI).
Nhiệm vụ DUY NHẤT của bạn ở bước này là CHÉP LẠI CHÍNH XÁC ĐỀ BÀI từ ảnh hoặc PDF để học sinh kiểm tra và chỉnh sửa số liệu trước khi giải.

QUY TẮC BẮT BUỘC:
1. KHÔNG GIẢI BÀI, KHÔNG ĐƯA ĐÁP ÁN ở bước này.
2. Viết 100% tiếng Việt chuẩn (không lẫn chữ Hán). Giữ nguyên đầy đủ số câu (Câu 1., Câu 2., ...), nội dung câu hỏi, số liệu, đơn vị và các phương án A, B, C, D (nếu là trắc nghiệm) trình bày rõ ràng từng dòng.
3. Công thức Vật lí & biểu thức toán bọc trong $...$ (inline) hoặc $$...$$ (block). TUYỆT ĐỐI KHÔNG viết chữ tiếng Việt vào bên trong dấu $...$.
4. Nếu có hình vẽ / đồ thị / sơ đồ mạch điện: mô tả ngắn gọn các giá trị, ký hiệu, chiều mũi tên đọc được ngay dưới câu đó dạng "[Hình vẽ: ...]".
5. Nếu chỗ nào bị mờ, mất chữ hoặc không đọc chắc chắn số liệu:
   - Đặt [STATUS] là unclear, ghi rõ chỗ mờ trong [UNCLEAR].
   - Đánh dấu "[CẦN KIỂM TRA: ...]" ngay tại vị trí nghi ngờ trong [PROBLEM] để học sinh tự sửa.
6. Trả về ĐÚNG các thẻ sau:
[STATUS]
ok hoặc unclear
[/STATUS]
[PROBLEM]
Toàn bộ đề bài đã đọc được với đầy đủ format, xuống dòng rõ ràng giữa các câu
[/PROBLEM]
[UNCLEAR]
Liệt kê các chỗ bị mờ/thiếu nếu có; nếu rõ hết thì để trống
[/UNCLEAR]`;

function extractTag(text: string, tag: string): string {
  const closedRe = new RegExp(`\\[${tag}\\]\\s*([\\s\\S]*?)\\s*\\[\\/${tag}\\]`, 'i');
  const closedMatch = text.match(closedRe);
  if (closedMatch) return closedMatch[1].trim();

  // Handle truncated response where closing tag wasn't reached
  const openRe = new RegExp(`\\[${tag}\\]\\s*([\\s\\S]*?)(?=\\n\\[(?:STATUS|PROBLEM|UNCLEAR|REVIEW|SOLUTION|ANSWER)\\]|$)`, 'i');
  const openMatch = text.match(openRe);
  return openMatch ? openMatch[1].trim() : '';
}

function parseAiResponse(rawText: string): SolveResponsePayload {
  const trimmed = rawText.trim();

  if (/\[(STATUS|PROBLEM|SOLUTION|ANSWER)\]/i.test(trimmed)) {
    const statusRaw = extractTag(trimmed, 'STATUS').toLowerCase();
    return {
      status: statusRaw.includes('unclear') ? 'unclear' : 'ok',
      extractedProblem: extractTag(trimmed, 'PROBLEM'),
      missingOrUnclearNote: extractTag(trimmed, 'UNCLEAR'),
      mistakeReview: extractTag(trimmed, 'REVIEW'),
      solutionSteps: extractTag(trimmed, 'SOLUTION'),
      finalAnswer: extractTag(trimmed, 'ANSWER'),
    };
  }

  // Fallback if model still returned JSON
  const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = (fenceMatch ? fenceMatch[1] : trimmed).trim();
  try {
    const parsed = JSON.parse(candidate) as Partial<SolveResponsePayload>;
    return {
      status: parsed.status === 'unclear' ? 'unclear' : 'ok',
      extractedProblem: String(parsed.extractedProblem ?? ''),
      missingOrUnclearNote: String(parsed.missingOrUnclearNote ?? ''),
      mistakeReview: String(parsed.mistakeReview ?? ''),
      solutionSteps: String(parsed.solutionSteps ?? ''),
      finalAnswer: String(parsed.finalAnswer ?? ''),
    };
  } catch {
    return {
      status: 'ok',
      extractedProblem: '',
      missingOrUnclearNote: '',
      mistakeReview: '',
      solutionSteps: rawText,
      finalAnswer: '',
    };
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SolveRequestBody;
    const provider = body.provider;
    const apiKey = typeof body.apiKey === 'string' ? body.apiKey.trim() : '';
    const model = typeof body.model === 'string' ? body.model.trim() : '';
    const mode = body.mode ?? 'solve';
    const enableThinking = Boolean(body.enableThinking);
    const promptText = typeof body.promptText === 'string' ? body.promptText.trim() : '';
    const file = body.file ?? null;

    if (provider !== 'gemini' && provider !== 'openrouter') {
      return NextResponse.json(
        { ok: false, error: 'Nhà phát hành AI không hợp lệ.' },
        { status: 400 }
      );
    }

    if (!apiKey || !model) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Chưa cấu hình API Key hoặc Model. Vui lòng vào Cài đặt AI để thiết lập.',
        },
        { status: 400 }
      );
    }

    if (!file && !promptText) {
      return NextResponse.json(
        { ok: false, error: 'Vui lòng tải lên ảnh/PDF hoặc nhập nội dung đề bài.' },
        { status: 400 }
      );
    }

    const activeSystemPrompt =
      mode === 'scan' ? SCAN_SYSTEM_INSTRUCTION : SYSTEM_INSTRUCTION;

    const modeInstruction =
      mode === 'scan'
        ? 'Hãy quét và chép lại nguyên văn đầy đủ đề bài (và phần bài làm nếu có) từ ảnh/PDF để học sinh kiểm tra số liệu trước khi giải. KHÔNG giải bài ở bước này.'
        : mode === 'check_work'
          ? 'Học sinh gửi kèm BÀI LÀM ĐÃ GIẢI SẴN. Hãy kiểm tra từng bước theo đúng số liệu trong văn bản đề bài bên dưới, chỉ rõ chỗ đúng/sai trong [REVIEW] rồi đưa ra lời giải chuẩn.'
          : mode === 're_solve_text'
            ? 'Học sinh đã kiểm tra và chỉnh sửa lại văn bản đề bài bên dưới. Hãy giải chi tiết theo ĐÚNG số liệu trong văn bản đề bài này (ảnh đính kèm nếu có chỉ dùng để xem hình vẽ/đồ thị).'
            : 'Hãy đọc kỹ đề bài và giải chi tiết từng bước theo đúng số liệu bên dưới.';

    const userPrompt = [
      modeInstruction,
      promptText ? `Nội dung / Ghi chú từ học sinh:\n${promptText}` : '',
    ]
      .filter(Boolean)
      .join('\n\n');

    if (provider === 'gemini') {
      const parts: Array<Record<string, unknown>> = [{ text: userPrompt }];
      if (file?.base64 && file?.mimeType) {
        parts.push({
          inline_data: {
            mime_type: file.mimeType,
            data: file.base64,
          },
        });
      }

      const isGemini25 = model.includes('2.5');
      const isGemini25Pro = model.includes('2.5-pro');
      const generationConfig: Record<string, unknown> = {
        temperature: 0.2,
        maxOutputTokens: 8192,
      };
      if (isGemini25) {
        generationConfig.thinkingConfig = {
          thinkingBudget: enableThinking ? 4096 : isGemini25Pro ? 1024 : 0,
        };
      }

      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: activeSystemPrompt }],
            },
            contents: [{ role: 'user', parts }],
            generationConfig,
          }),
        }
      );

      const geminiJson = (await geminiRes.json().catch(() => ({}))) as {
        candidates?: Array<{
          content?: { parts?: Array<{ text?: string }> };
        }>;
        error?: { message?: string };
      };

      if (!geminiRes.ok) {
        return NextResponse.json(
          {
            ok: false,
            error:
              geminiJson.error?.message ||
              'Lỗi khi gọi Gemini API. Kiểm tra lại API Key hoặc Model.',
          },
          { status: geminiRes.status }
        );
      }

      const rawText =
        geminiJson.candidates?.[0]?.content?.parts
          ?.map((p) => p.text ?? '')
          .join('\n') ?? '';

      if (!rawText) {
        return NextResponse.json(
          { ok: false, error: 'Gemini không trả về nội dung lời giải.' },
          { status: 502 }
        );
      }

      const parsed = parseAiResponse(rawText);
      if (mode === 'scan') {
        if (!parsed.extractedProblem && parsed.solutionSteps) {
          parsed.extractedProblem = parsed.solutionSteps;
        }
        parsed.solutionSteps = '';
        parsed.mistakeReview = '';
        parsed.finalAnswer = '';
      } else if (mode === 'solve' || mode === 're_solve_text') {
        parsed.mistakeReview = '';
      }
      return NextResponse.json({
        ok: true,
        result: parsed,
      });
    }

    // OpenRouter (OpenAI-compatible chat completions)
    if (file?.mimeType === 'application/pdf') {
      return NextResponse.json(
        {
          ok: false,
          error:
            'OpenRouter không hỗ trợ đọc file PDF trực tiếp ở tất cả model. Vui lòng chuyển sang nhà phát hành Google Gemini để đọc PDF, hoặc chụp ảnh trang đề bài.',
        },
        { status: 400 }
      );
    }

    const contentParts: Array<Record<string, unknown>> = [
      { type: 'text', text: userPrompt },
    ];
    if (file?.base64 && file?.mimeType) {
      contentParts.push({
        type: 'image_url',
        image_url: {
          url: `data:${file.mimeType};base64,${file.base64}`,
        },
      });
    }

    const callOpenRouter = async (includeReasoning: boolean, maxTokens: number) => {
      const payload: Record<string, unknown> = {
        model,
        temperature: 0.2,
        max_tokens: maxTokens,
        messages: [
          { role: 'system', content: activeSystemPrompt },
          { role: 'user', content: contentParts },
        ],
      };
      if (includeReasoning) {
        payload.reasoning = enableThinking
          ? { effort: 'medium' }
          : { enabled: false };
      }

      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
          'HTTP-Referer': 'http://localhost:3006',
          'X-Title': 'eduPhysics 6-12',
        },
        body: JSON.stringify(payload),
      });

      const json = (await res.json().catch(() => ({}))) as {
        choices?: Array<{
          finish_reason?: string | null;
          error?: { message?: string };
          message?: {
            content?: string | Array<{ type?: string; text?: string }> | null;
            refusal?: string | null;
            reasoning?: string | null;
          };
        }>;
        error?: {
          message?: string;
          metadata?: { raw?: string; provider_name?: string };
        };
      };

      return { res, json };
    };

    let { res: orRes, json: orJson } = await callOpenRouter(true, 8192);

    // Retry once without reasoning / with 4096 max_tokens if upstream provider rejected those params
    if (!orRes.ok && (orJson.error?.message ?? '').includes('Provider returned error')) {
      ({ res: orRes, json: orJson } = await callOpenRouter(false, 4096));
    }

    if (!orRes.ok) {
      const rawErr = orJson.error?.message ?? '';
      const metaRaw = orJson.error?.metadata?.raw ?? '';
      const providerName = orJson.error?.metadata?.provider_name ?? '';
      const combined = `${rawErr} ${metaRaw}`.toLowerCase();

      const msg = combined.includes('support image input')
        ? `Model OpenRouter "${model}" chỉ hỗ trợ văn bản (không đọc được ảnh). Vui lòng vào Cài đặt AI, bật lọc "Chỉ lọc đọc được Ảnh (Vision)" để chọn model có nhãn Vision / Ảnh (hoặc dùng Google Gemini).`
        : metaRaw
          ? `Lỗi từ nhà cung cấp OpenRouter${providerName ? ` (${providerName})` : ''}: ${metaRaw}`
          : rawErr ||
            'Lỗi khi gọi OpenRouter. Lưu ý: nếu bạn gửi ảnh, hãy chọn model có hỗ trợ Vision.';
      return NextResponse.json({ ok: false, error: msg }, { status: orRes.status });
    }

    const firstChoice = orJson.choices?.[0];
    if (firstChoice?.error?.message) {
      return NextResponse.json(
        { ok: false, error: `OpenRouter báo lỗi: ${firstChoice.error.message}` },
        { status: 502 }
      );
    }

    const rawContent = firstChoice?.message?.content;
    const rawText =
      typeof rawContent === 'string'
        ? rawContent
        : Array.isArray(rawContent)
          ? rawContent.map((p) => p.text ?? '').join('\n')
          : '';

    if (!rawText.trim()) {
      const finishReason = firstChoice?.finish_reason;
      const refusal = firstChoice?.message?.refusal;
      let detail = 'OpenRouter không trả về nội dung lời giải.';
      if (refusal) {
        detail = `Model từ chối trả lời: ${refusal}`;
      } else if (finishReason === 'length') {
        detail = `Model "${model}" đã dùng hết giới hạn token (finish_reason: length) trong lúc suy nghĩ trước khi kịp xuất lời giải. Hãy thử chọn model nhanh hơn (như google/gemini-2.5-flash hoặc qwen vision).`;
      } else if (finishReason) {
        detail = `OpenRouter không trả về nội dung (finish_reason: ${finishReason}). Thử chọn model Vision khác hoặc dùng Google Gemini.`;
      }
      return NextResponse.json({ ok: false, error: detail }, { status: 502 });
    }

    const parsed = parseAiResponse(rawText);
    if (mode === 'scan') {
      if (!parsed.extractedProblem && parsed.solutionSteps) {
        parsed.extractedProblem = parsed.solutionSteps;
      }
      parsed.solutionSteps = '';
      parsed.mistakeReview = '';
      parsed.finalAnswer = '';
    } else if (mode === 'solve' || mode === 're_solve_text') {
      parsed.mistakeReview = '';
    }
    return NextResponse.json({
      ok: true,
      result: parsed,
    });
  } catch (err) {
    console.error('[api/ai/solve] error:', err);
    return NextResponse.json(
      { ok: false, error: 'Lỗi máy chủ khi xử lý yêu cầu giải bài.' },
      { status: 500 }
    );
  }
}
