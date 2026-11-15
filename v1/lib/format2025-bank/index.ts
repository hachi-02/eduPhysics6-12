import type { TfBank, TfBankEntry } from './types';
import { GRADE_6_TF_BANK } from './grade6';
import { GRADE_7_TF_BANK } from './grade7';
import { GRADE_8_TF_BANK } from './grade8';
import { GRADE_9_TF_BANK } from './grade9';
import { GRADE_10_TF_BANK } from './grade10';
import { GRADE_11_TF_BANK } from './grade11';
import { GRADE_12_TF_BANK } from './grade12';

export * from './types';

/** Toàn bộ ngân hàng câu Đúng/Sai đã soạn, gộp từ các lớp 6–12 */
export const TF_BANK: TfBank = {
  ...GRADE_6_TF_BANK,
  ...GRADE_7_TF_BANK,
  ...GRADE_8_TF_BANK,
  ...GRADE_9_TF_BANK,
  ...GRADE_10_TF_BANK,
  ...GRADE_11_TF_BANK,
  ...GRADE_12_TF_BANK,
};

export function getTfBankEntry(key: string): TfBankEntry | undefined {
  return TF_BANK[key];
}

/**
 * Tìm câu Đúng/Sai trong ngân hàng đã soạn dựa trên thông tin câu hỏi
 */
export function findTfBankEntryForQuestion(
  q: { question_text: string; order_index?: number; grade_number?: number; topic_code?: string | null; chapter_code?: string | null; scope_type?: string }
): TfBankEntry | undefined {
  // 1. Tìm bằng key nếu có thông tin lớp và mã phạm vi
  if (q.grade_number && q.order_index) {
    const scope = q.scope_type || (q.topic_code ? 'topic' : 'chapter');
    const code = scope === 'topic' ? q.topic_code : q.chapter_code;
    if (code) {
      const directKey = `${q.grade_number}|${scope}|${code}|${q.order_index}`;
      if (TF_BANK[directKey]) return TF_BANK[directKey];
    }
  }

  // 2. Tìm theo độ khớp đoạn văn bản của đề bài
  const cleanQ = (q.question_text || '').trim().toLowerCase();
  if (cleanQ) {
    // 2. Tìm theo độ khớp đoạn văn bản của đề bài
    for (const [key, entry] of Object.entries(TF_BANK)) {
      const cleanStem = entry.stem.trim().toLowerCase();
      if (cleanStem === cleanQ) return entry;
      const qPrefix = cleanQ.slice(0, 35);
      const stemPrefix = cleanStem.slice(0, 35);
      if (qPrefix.length >= 20 && (cleanStem.includes(qPrefix) || cleanQ.includes(stemPrefix))) {
        return entry;
      }
    }

    // 3. Khớp theo tập từ khóa đặc trưng khoa học
    const extractWords = (t: string) =>
      t
        .toLowerCase()
        .replace(/[^a-z0-9\u00C0-\u024F\u1E00-\u1EFF\s]/g, ' ')
        .split(/\s+/)
        .filter((w) => w.length >= 3);
    const qWords = new Set(extractWords(cleanQ));
    if (qWords.size >= 4) {
      let bestScore = 0;
      let bestEntry: TfBankEntry | undefined;
      for (const entry of Object.values(TF_BANK)) {
        const stemWords = extractWords(entry.stem);
        let matchCount = 0;
        for (const w of stemWords) {
          if (qWords.has(w)) matchCount++;
        }
        const score = matchCount / Math.max(1, Math.min(qWords.size, stemWords.length));
        if (matchCount >= 4 && score >= 0.4 && score > bestScore) {
          bestScore = score;
          bestEntry = entry;
        }
      }
      if (bestEntry) return bestEntry;
    }
  }

  return undefined;
}
