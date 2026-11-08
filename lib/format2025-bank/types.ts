/**
 * Ngân hàng câu Đúng/Sai (Phần II – Cấu trúc đề Bộ GD&ĐT 2025) được SOẠN THỦ CÔNG.
 *
 * Khóa (key) của mỗi mục: `${grade}|${scope}|${code}|${order_index}`
 *   - grade: số lớp (6..12)
 *   - scope: 'topic' | 'chapter'
 *   - code: mã chủ đề (VD: 'C1-B1') hoặc mã chương (VD: 'CH1')
 *   - order_index: thứ tự câu hỏi gốc trong chủ đề/chương
 *
 * Mỗi mục gồm một tình huống dẫn (stem) và 4 mệnh đề a, b, c, d ĐỘC LẬP với nhau:
 * biết một ý đúng/sai không suy ra được các ý còn lại.
 */
export interface TfBankStatement {
  text: string;
  is_correct: boolean;
  explanation: string;
}

export interface TfBankEntry {
  /** Tình huống/ngữ cảnh dẫn, KHÔNG kết thúc bằng câu hỏi trắc nghiệm */
  stem: string;
  statements: [TfBankStatement, TfBankStatement, TfBankStatement, TfBankStatement];
}

export type TfBank = Record<string, TfBankEntry>;

export function makeTfBankKey(
  grade: number,
  scope: 'topic' | 'chapter',
  code: string,
  orderIndex: number
): string {
  return `${grade}|${scope}|${code}|${orderIndex}`;
}
