import {
  CognitiveTrapMeta,
  CognitiveTrapType,
  QuestionItem,
  TrapAnalysisResult,
  TrapMatrixStats,
} from '@/types/cms';

export type { CognitiveTrapType, CognitiveTrapMeta, TrapAnalysisResult, TrapMatrixStats };

/**
 * 6 Danh mục Bẫy Nhận Thức & Sai Lầm Tư Duy Kinh Điển trong Vật lý K6–K12
 */
export const COGNITIVE_TRAP_REGISTRY: Record<CognitiveTrapType, CognitiveTrapMeta> = {
  TRAP_UNIT: {
    id: 'TRAP_UNIT',
    name: 'Bẫy Quên Đổi Đơn Vị SI',
    shortDesc: 'Quên đổi cm → m, g → kg, phút → giây, km/h → m/s dẫn tới sai lệch 10, 100, 1000 lần.',
    icon: '📏',
    color: '#0284c7', // sky-600
    badgeCls: 'bg-sky-100 text-sky-800 border-sky-300',
    bgCls: 'bg-sky-50',
    borderCls: 'border-sky-200',
    examplesSummary: 'cm ↔ m (100×), g ↔ kg (1000×), phút ↔ giây (60×), km/h ↔ m/s (3.6×), cm³ ↔ m³ (10⁶×).',
    remedyTip: 'Luôn gạch chân đơn vị trong đề bài trước khi bấm máy tính và quy đổi tất cả về hệ SI chuẩn trước khi thay số vào công thức.',
  },
  TRAP_SIGN: {
    id: 'TRAP_SIGN',
    name: 'Bẫy Nhầm Dấu & Chiều Vector',
    shortDesc: 'Nhầm dấu công A, nhiệt lượng Q (Định luật I), dấu gia tốc a hoặc chiều vectơ lực ngược lại.',
    icon: '➕➖',
    color: '#e11d48', // rose-600
    badgeCls: 'bg-rose-100 text-rose-800 border-rose-300',
    bgCls: 'bg-rose-50',
    borderCls: 'border-rose-200',
    examplesSummary: 'Nhận công (A > 0) vs Sinh công (A < 0); Thu nhiệt (Q > 0) vs Tỏa nhiệt (Q < 0); Gia tốc âm a < 0.',
    remedyTip: 'Ghi nhớ quy ước: "Cái gì HỆ NHẬN VÀO là DƯƠNG (+), cái gì HỆ MẤT ĐI/SINH RA là ÂM (-)". Luôn chọn trục tọa độ trước khi chiếu vector.',
  },
  TRAP_INTUITION: {
    id: 'TRAP_INTUITION',
    name: 'Bẫy Trực Giác Cảm Tính Đời Thường',
    shortDesc: 'Phán đoán dựa trên cảm tính đời sống thay vì định luật vật lý thực nghiệm.',
    icon: '💡',
    color: '#d97706', // amber-600
    badgeCls: 'bg-amber-100 text-amber-900 border-amber-300',
    bgCls: 'bg-amber-50',
    borderCls: 'border-amber-200',
    examplesSummary: 'Nghĩ vật nặng rơi nhanh hơn trong chân không; nghĩ lực sinh ra vận tốc; nghĩ áo len tự phát ra nhiệt.',
    remedyTip: 'Vật lý phản trực giác rất nhiều. Hãy luôn tự hỏi: "Hiện tượng này tuân theo định luật bảo toàn nào hay nguyên lý nào của Newton/Galileo?"',
  },
  TRAP_FORMULA_CONFUSION: {
    id: 'TRAP_FORMULA_CONFUSION',
    name: 'Bẫy Lẫn Lộn Công Thức Tương Đồng',
    shortDesc: 'Nhầm lẫn giữa các công thức có cấu trúc gần giống nhau hoặc nhầm phép nhân/chia tỉ lệ.',
    icon: '🔀',
    color: '#7c3aed', // violet-600
    badgeCls: 'bg-violet-100 text-violet-800 border-violet-300',
    bgCls: 'bg-violet-50',
    borderCls: 'border-violet-200',
    examplesSummary: 'T = 2π√(l/g) vs 2π√(m/k); R_tđ nối tiếp vs song song; C_tđ tụ điện; v = λ·f vs λ/f.',
    remedyTip: 'Kiểm tra thứ nguyên đơn vị hai vế để kiểm tra công thức trước khi áp dụng. Nhớ con lắc đơn chiều dài l ở trên, con lắc lò xo khối lượng m ở trên.',
  },
  TRAP_CONDITION: {
    id: 'TRAP_CONDITION',
    name: 'Bẫy Vi Phạm Điều Kiện Định Luật',
    shortDesc: 'Áp dụng công thức vào bài toán khi các điều kiện tiên quyết của định luật bị vi phạm.',
    icon: '⚠️',
    color: '#059669', // emerald-600
    badgeCls: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    bgCls: 'bg-emerald-50',
    borderCls: 'border-emerald-200',
    examplesSummary: 'Dùng Boyle khi T thay đổi; dùng bảo toàn cơ năng khi có ma sát lớn; dùng Ohm cho đèn sợi đốt / diode.',
    remedyTip: 'Trước khi viết công thức, hãy tự hỏi: "Hệ này có kín không? Quá trình này có đẳng nhiệt không? Có ma sát hao phí không?".',
  },
  TRAP_KEYWORD: {
    id: 'TRAP_KEYWORD',
    name: 'Bẫy Bỏ Sót Từ Khóa Đề Bài',
    shortDesc: 'Bỏ sót từ khóa phủ định ("không đúng", "sai") hoặc nhầm "tăng thêm" với "tăng lên gấp".',
    icon: '🔍',
    color: '#4f46e5', // indigo-600
    badgeCls: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    bgCls: 'bg-indigo-50',
    borderCls: 'border-indigo-200',
    examplesSummary: 'Hỏi câu "KHÔNG ĐÚNG" lại chọn câu đúng; "tăng thêm 2 m" nhầm với "tăng lên 2 m".',
    remedyTip: 'Đọc kỹ câu hỏi, khoanh tròn các từ khóa quan trọng như "KHÔNG", "SAI", "TĂNG THÊM", "GIẢM ĐI", "ĐỘ BIẾN THIÊN" ngay lần đọc đầu tiên.',
  },
};

export const ALL_TRAP_TYPES: CognitiveTrapType[] = [
  'TRAP_UNIT',
  'TRAP_SIGN',
  'TRAP_INTUITION',
  'TRAP_FORMULA_CONFUSION',
  'TRAP_CONDITION',
  'TRAP_KEYWORD',
];

/**
 * Trích xuất giá trị số từ chuỗi đáp án (hỗ trợ định dạng số phẩy VN hoặc chấm quốc tế)
 */
function extractNumber(str: string): number | null {
  if (!str) return null;
  const clean = str.replace(/\\text\{[^}]*\}/g, '').replace(/\s+/g, '');
  const match = clean.match(/[-+]?\d+(?:[.,]\d+)?/);
  if (!match) return null;
  return Number(match[0].replace(',', '.'));
}

/**
 * Thuật toán Phân loại Bẫy Nhận thức Tự động (Cognitive Trap Classifier)
 */
export function detectCognitiveTrap(
  question: Partial<QuestionItem> | { question_text: string; options: string[]; correct_index: number; explanation?: string },
  wrongOptionIndex?: number
): TrapAnalysisResult {
  const stem = (question.question_text || '').toLowerCase();
  const explanation = (question.explanation || '').toLowerCase();
  const options = question.options || [];
  const correctIdx = question.correct_index ?? 0;
  const correctText = options[correctIdx] || '';
  const wrongText = wrongOptionIndex !== undefined && options[wrongOptionIndex] ? options[wrongOptionIndex] : '';

  const correctNum = extractNumber(correctText);
  const wrongNum = extractNumber(wrongText);

  // 1. Kiểm tra Bẫy Từ Khóa & Phủ Định (TRAP_KEYWORD)
  if (
    stem.includes('không đúng') ||
    stem.includes('phát biểu sai') ||
    stem.includes('câu sai') ||
    stem.includes('chưa chính xác') ||
    stem.includes('tăng thêm') ||
    stem.includes('giảm đi một lượng')
  ) {
    return {
      trapType: 'TRAP_KEYWORD',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_KEYWORD.name,
      severity: 'Thường gặp',
      diagnosis: 'Học sinh rất dễ bị bẫy khi đề bài hỏi tìm câu "KHÔNG ĐÚNG" hoặc phân biệt giữa "tăng thêm x" và "tăng lên gấp x lần".',
      remedyTip: COGNITIVE_TRAP_REGISTRY.TRAP_KEYWORD.remedyTip,
      confidence: 0.92,
    };
  }

  // 2. Kiểm tra Bẫy Dấu & Chiều Vector (TRAP_SIGN)
  // Ví dụ: ΔU = A + Q, công nhận/sinh, thu/tỏa nhiệt, gia tốc ngược hướng
  const hasSignContext =
    stem.includes('nhiệt lượng') ||
    stem.includes('nội năng') ||
    stem.includes('thực hiện công') ||
    stem.includes('nhận công') ||
    stem.includes('chậm dần đều') ||
    stem.includes('ngược chiều') ||
    stem.includes('lực ma sát') ||
    stem.includes('lenz');

  if (correctNum !== null && wrongNum !== null && Math.abs(correctNum + wrongNum) < 1e-4 && Math.abs(correctNum) > 0) {
    // Giá trị đối nhau chính xác: -70 J vs 70 J
    return {
      trapType: 'TRAP_SIGN',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_SIGN.name,
      severity: 'Cao',
      diagnosis: `Phương án bạn chọn mang dấu ngược lại (${wrongNum}) so với đáp án đúng (${correctNum}). Bạn đã nhầm lẫn chiều quy ước của đại lượng.`,
      remedyTip: COGNITIVE_TRAP_REGISTRY.TRAP_SIGN.remedyTip,
      confidence: 0.95,
    };
  }

  if (hasSignContext && (wrongText.includes('giảm') || wrongText.includes('tăng') || wrongText.includes('-') || wrongText.includes('+'))) {
    return {
      trapType: 'TRAP_SIGN',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_SIGN.name,
      severity: 'Cao',
      diagnosis: 'Bạn đã nhầm dấu quy ước trong Nhiệt động lực học hoặc Động lực học (nhận công A > 0, sinh công A < 0, thu nhiệt Q > 0, tỏa nhiệt Q < 0).',
      remedyTip: COGNITIVE_TRAP_REGISTRY.TRAP_SIGN.remedyTip,
      confidence: 0.88,
    };
  }

  // 3. Kiểm tra Bẫy Đơn Vị SI (TRAP_UNIT)
  if (correctNum !== null && wrongNum !== null && correctNum !== 0 && wrongNum !== 0) {
    const ratio = Math.abs(wrongNum / correctNum);
    const unitFactors = [10, 100, 1000, 60, 3600, 3.6, 1e6, 0.1, 0.01, 0.001, 1 / 3.6, 1 / 60];
    const isUnitMismatch = unitFactors.some((factor) => Math.abs(ratio - factor) / factor < 0.03);

    if (isUnitMismatch) {
      let explanationDetail = `kết quả bị lệch xấp xỉ ${ratio >= 1 ? ratio.toFixed(1) : (1 / ratio).toFixed(1)} lần`;
      if (Math.abs(ratio - 1000) < 30 || Math.abs(ratio - 0.001) < 0.0001) {
        explanationDetail = 'quên đổi gram sang kilôgam (g → kg) hoặc mA sang A';
      } else if (Math.abs(ratio - 100) < 3 || Math.abs(ratio - 0.01) < 0.001) {
        explanationDetail = 'quên đổi centimét sang mét (cm → m)';
      } else if (Math.abs(ratio - 3.6) < 0.1 || Math.abs(ratio - 1 / 3.6) < 0.05) {
        explanationDetail = 'quên đổi km/h sang m/s (chia cho 3.6)';
      } else if (Math.abs(ratio - 60) < 2 || Math.abs(ratio - 3600) < 50) {
        explanationDetail = 'quên đổi phút hoặc giờ sang giây';
      }

      return {
        trapType: 'TRAP_UNIT',
        trapName: COGNITIVE_TRAP_REGISTRY.TRAP_UNIT.name,
        severity: 'Cao',
        diagnosis: `Phương án bạn chọn phản ánh lỗi bẫy đơn vị: ${explanationDetail}.`,
        remedyTip: COGNITIVE_TRAP_REGISTRY.TRAP_UNIT.remedyTip,
        confidence: 0.94,
      };
    }
  }

  // 4. Kiểm tra Bẫy Trực Giác Cảm Tính (TRAP_INTUITION)
  const isIntuitiveMisconception =
    stem.includes('rơi tự do') ||
    stem.includes('chân không') ||
    stem.includes('áo ấm') ||
    stem.includes('truyền nhiệt') ||
    stem.includes('quán tính') ||
    stem.includes('mất đi') ||
    stem.includes('ngừng tác dụng lực') ||
    stem.includes('cảm giác lạnh') ||
    explanation.includes('trực giác') ||
    explanation.includes('sai lầm phổ biến') ||
    explanation.includes('dễ lầm tưởng');

  if (isIntuitiveMisconception) {
    return {
      trapType: 'TRAP_INTUITION',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_INTUITION.name,
      severity: 'Thường gặp',
      diagnosis: 'Bạn đã đánh giá theo trực giác kinh nghiệm đời thường thay vì nguyên lý vật lý (ví dụ: nhầm lẫn lực duy trì vận tốc, hoặc nghĩ áo ấm sinh nhiệt).',
      remedyTip: COGNITIVE_TRAP_REGISTRY.TRAP_INTUITION.remedyTip,
      confidence: 0.85,
    };
  }

  // 5. Kiểm tra Bẫy Điều Kiện Tiên Quyết (TRAP_CONDITION)
  const hasConditionKeywords =
    stem.includes('đẳng nhiệt') ||
    stem.includes('đẳng áp') ||
    stem.includes('đẳng tích') ||
    stem.includes('khí lý tưởng') ||
    stem.includes('bảo toàn') ||
    stem.includes('bỏ qua ma sát') ||
    stem.includes('thấu kính mỏng') ||
    stem.includes('điều kiện');

  if (hasConditionKeywords) {
    return {
      trapType: 'TRAP_CONDITION',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_CONDITION.name,
      severity: 'Trung bình',
      diagnosis: 'Bạn đã áp dụng công thức vào một trường hợp mà điều kiện giới hạn của định luật bị vi phạm (ví dụ: nhiệt độ không đổi bị phá vỡ, hoặc có lực ma sát cản trở).',
      remedyTip: COGNITIVE_TRAP_REGISTRY.TRAP_CONDITION.remedyTip,
      confidence: 0.82,
    };
  }

  // 6. Mặc định là Bẫy Lẫn Lộn Công Thức Tương Đồng (TRAP_FORMULA_CONFUSION)
  return {
    trapType: 'TRAP_FORMULA_CONFUSION',
    trapName: COGNITIVE_TRAP_REGISTRY.TRAP_FORMULA_CONFUSION.name,
    severity: 'Trung bình',
    diagnosis: 'Bạn đã sử dụng nhầm công thức của một hiện tượng tương đồng (ví dụ: nhầm con lắc đơn với lò xo, hoặc nhầm lẫn giữa tỉ lệ thuận và tỉ lệ nghịch).',
    remedyTip: COGNITIVE_TRAP_REGISTRY.TRAP_FORMULA_CONFUSION.remedyTip,
    confidence: 0.78,
  };
}

/**
 * Tính toán Thống kê Tổng hợp cho Ma Trận Bẫy Nhận Thức & Biểu đồ Radar
 */
export function calculateTrapMatrixStats(
  mistakes: Array<{
    question_text: string;
    options: string[];
    correct_index: number;
    last_wrong_option?: number;
    explanation?: string;
  }>
): TrapMatrixStats {
  const trapCounts: Record<CognitiveTrapType, number> = {
    TRAP_UNIT: 0,
    TRAP_SIGN: 0,
    TRAP_INTUITION: 0,
    TRAP_FORMULA_CONFUSION: 0,
    TRAP_CONDITION: 0,
    TRAP_KEYWORD: 0,
  };

  for (const m of mistakes) {
    const analysis = detectCognitiveTrap(m, m.last_wrong_option);
    trapCounts[analysis.trapType] = (trapCounts[analysis.trapType] || 0) + 1;
  }

  const totalAnalyzed = mistakes.length;

  const trapPercentages: Record<CognitiveTrapType, number> = {
    TRAP_UNIT: totalAnalyzed > 0 ? Number(((trapCounts.TRAP_UNIT / totalAnalyzed) * 100).toFixed(1)) : 0,
    TRAP_SIGN: totalAnalyzed > 0 ? Number(((trapCounts.TRAP_SIGN / totalAnalyzed) * 100).toFixed(1)) : 0,
    TRAP_INTUITION: totalAnalyzed > 0 ? Number(((trapCounts.TRAP_INTUITION / totalAnalyzed) * 100).toFixed(1)) : 0,
    TRAP_FORMULA_CONFUSION: totalAnalyzed > 0 ? Number(((trapCounts.TRAP_FORMULA_CONFUSION / totalAnalyzed) * 100).toFixed(1)) : 0,
    TRAP_CONDITION: totalAnalyzed > 0 ? Number(((trapCounts.TRAP_CONDITION / totalAnalyzed) * 100).toFixed(1)) : 0,
    TRAP_KEYWORD: totalAnalyzed > 0 ? Number(((trapCounts.TRAP_KEYWORD / totalAnalyzed) * 100).toFixed(1)) : 0,
  };

  let maxTrap: CognitiveTrapType | null = null;
  let maxCount = 0;
  for (const trap of ALL_TRAP_TYPES) {
    if (trapCounts[trap] > maxCount) {
      maxCount = trapCounts[trap];
      maxTrap = trap;
    }
  }

  // Điểm Miễn nhiễm bẫy: Càng ít lỗi sai, điểm càng cao (thang 100)
  // 0 câu sai: 100đ; mỗi câu sai trừ một số điểm thích hợp
  const immunityScore = Math.max(20, Math.min(100, Math.round(100 - totalAnalyzed * 3.5)));

  // Chuẩn hóa giá trị cho 6 trục của Biểu đồ Radar (tối thiểu 15 để hình đa giác đẹp mắt)
  const maxAxisVal = Math.max(...Object.values(trapCounts), 1);
  const radarValues = ALL_TRAP_TYPES.map((type) => {
    const rawVal = trapCounts[type];
    // Normalized 0 - 100 for radar rendering
    const normalized = totalAnalyzed === 0 ? 20 : Math.round(15 + (rawVal / maxAxisVal) * 85);
    return {
      axis: COGNITIVE_TRAP_REGISTRY[type].name,
      trapType: type,
      value: normalized,
    };
  });

  return {
    trapCounts,
    trapPercentages,
    totalAnalyzed,
    dominantTrap: maxTrap,
    immunityScore,
    radarValues,
  };
}
