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
    shortDesc: 'Quên đổi cm → m, g → kg, phút → giây, km/h → m/s, °C → K dẫn tới sai lệch hệ số hoặc mốc đo.',
    icon: '📏',
    color: '#0284c7', // sky-600
    badgeCls: 'bg-sky-100 text-sky-800 border-sky-300',
    bgCls: 'bg-sky-50',
    borderCls: 'border-sky-200',
    examplesSummary: 'cm ↔ m (100×), g ↔ kg (1000×), °C ↔ K (+273,15), km/h ↔ m/s (3,6×), L ↔ m³ (1000×).',
    remedyTip:
      'Luôn gạch chân đơn vị trong đề bài trước khi tính toán và quy đổi tất cả về hệ SI chuẩn (m, kg, s, K, A, T) trước khi thay số.',
  },
  TRAP_SIGN: {
    id: 'TRAP_SIGN',
    name: 'Bẫy Nhầm Dấu & Chiều Vector',
    shortDesc: 'Nhầm dấu công A, nhiệt lượng Q (Định luật I), chiều lực từ/dòng điện hoặc xu hướng tăng/giảm ngược chiều.',
    icon: '➕➖',
    color: '#e11d48', // rose-600
    badgeCls: 'bg-rose-100 text-rose-800 border-rose-300',
    bgCls: 'bg-rose-50',
    borderCls: 'border-rose-200',
    examplesSummary: 'Nhận công (A > 0) vs Sinh công (A < 0); Thu nhiệt (Q > 0) vs Tỏa nhiệt (Q < 0); Quy tắc bàn tay trái/phải.',
    remedyTip:
      'Ghi nhớ quy ước: "Hệ NHẬN VÀO mang dấu DƯƠNG (+), hệ TỎA RA / SINH CÔNG mang dấu ÂM (-)". Với lực và từ trường, luôn xác định chiều vector trước khi tính độ lớn.',
  },
  TRAP_INTUITION: {
    id: 'TRAP_INTUITION',
    name: 'Bẫy Trực Giác Cảm Tính Đời Thường',
    shortDesc: 'Phán đoán cảm tính theo thói quen quan sát vĩ mô thay vì bản chất vi mô hoặc nguyên lý thực nghiệm.',
    icon: '💡',
    color: '#d97706', // amber-600
    badgeCls: 'bg-amber-100 text-amber-900 border-amber-300',
    bgCls: 'bg-amber-50',
    borderCls: 'border-amber-200',
    examplesSummary: 'Tưởng phân tử phình to khi vật nóng lên; nghĩ vật nặng rơi nhanh hơn; nhìn xiên vạch thước / mép nước.',
    remedyTip:
      'Vật lý thường phản trực giác đời thường. Hãy tách biệt hiện tượng bề mặt vĩ mô với bản chất hạt vi mô và tuân thủ nghiêm ngặt quy tắc đo lường chuẩn.',
  },
  TRAP_FORMULA_CONFUSION: {
    id: 'TRAP_FORMULA_CONFUSION',
    name: 'Bẫy Lẫn Lộn Công Thức Tương Đồng',
    shortDesc: 'Nhầm lẫn giữa các công thức có cấu trúc gần giống nhau, nhầm hàm sin/cos hoặc nhầm tỉ lệ thuận/nghịch.',
    icon: '🔀',
    color: '#7c3aed', // violet-600
    badgeCls: 'bg-violet-100 text-violet-800 border-violet-300',
    bgCls: 'bg-violet-50',
    borderCls: 'border-violet-200',
    examplesSummary: 'F = I·L·B·sinθ vs cosθ; B = 2·10⁻⁷·I/r vs r/I; T = 2πm/(qB); tỉ lệ thuận vs tỉ lệ nghịch.',
    remedyTip:
      'Kiểm tra thứ nguyên đơn vị hai vế và xét giới hạn vật lý (khi đại lượng ở mẫu số tăng lên vô cùng thì kết quả phải tiến về 0) để không viết ngược tử số và mẫu số.',
  },
  TRAP_CONDITION: {
    id: 'TRAP_CONDITION',
    name: 'Bẫy Vi Phạm Điều Kiện Định Luật',
    shortDesc: 'Áp dụng công thức hoặc tính chất khi điều kiện biên, trạng thái vật chất hoặc góc giới hạn không thỏa mãn.',
    icon: '⚠️',
    color: '#059669', // emerald-600
    badgeCls: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    bgCls: 'bg-emerald-50',
    borderCls: 'border-emerald-200',
    examplesSummary: 'Dây dẫn song song từ trường (θ = 0° → F = 0); điều kiện cân bằng nhiệt; giới hạn đo của dụng cụ.',
    remedyTip:
      'Trước khi kết luận hoặc bấm máy, hãy kiểm tra điều kiện biên của bài toán: Góc hợp bởi hai vector bằng 0° hay 90°? Hệ đang ở trạng thái rắn, lỏng hay khí? Quá trình có đẳng nhiệt không?',
  },
  TRAP_KEYWORD: {
    id: 'TRAP_KEYWORD',
    name: 'Bẫy Bỏ Sót Từ Khóa Đề Bài',
    shortDesc: 'Bỏ sót từ khóa phủ định ("không đúng", "không phải") hoặc nhầm từ khóa định nghĩa ("trung bình" vs "tổng", "GHĐ" vs "ĐCNN").',
    icon: '🔍',
    color: '#4f46e5', // indigo-600
    badgeCls: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    bgCls: 'bg-indigo-50',
    borderCls: 'border-indigo-200',
    examplesSummary: 'Hỏi "KHÔNG ĐÚNG" lại chọn câu đúng; nhầm "động năng trung bình" với "tổng số phân tử"; nhầm GHĐ với ĐCNN.',
    remedyTip:
      'Đọc kỹ từng từ khóa định tính/định lượng trong câu hỏi ("KHÔNG", "SAI", "TRUNG BÌNH", "LỚN NHẤT", "LIÊN TIẾP") và đối chiếu trực tiếp với định nghĩa chuẩn.',
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

const SUPERSCRIPT_MAP: Record<string, string> = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
  '⁻': '-',
  '⁺': '+',
};

function normalizeSuperscripts(input: string): string {
  return input.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+/g, (match) => {
    const converted = match
      .split('')
      .map((ch) => SUPERSCRIPT_MAP[ch] ?? ch)
      .join('');
    return `^${converted}`;
  });
}

/**
 * Trích xuất giá trị số đầu tiên từ chuỗi đáp án (hỗ trợ số thập phân dấu phẩy VN, dấu chấm hàng nghìn và lũy thừa 10^n)
 */
export function extractNumber(str: string): number | null {
  if (!str) return null;
  const norm = normalizeSuperscripts(str)
    .replace(/\\text\{[^}]*\}/g, '')
    .replace(/\\cdot|\\times|[·×]/g, '*');

  // Hỗ trợ dạng a * 10^b hoặc 10^b
  const sciMatch = norm.match(/([-+]?\d+(?:[.,]\d+)?)\s*\*\s*10\^([-+]?\d+)/);
  if (sciMatch) {
    const mantissa = Number(sciMatch[1].replace(',', '.'));
    const exp = Number(sciMatch[2]);
    if (!Number.isNaN(mantissa) && !Number.isNaN(exp)) {
      return mantissa * Math.pow(10, exp);
    }
  }

  const purePowMatch = norm.match(/(?:^|[^\d])10\^([-+]?\d+)/);
  if (purePowMatch && !norm.match(/^\s*[-+]?\d+[.,]\d+/)) {
    const exp = Number(purePowMatch[1]);
    if (!Number.isNaN(exp)) {
      return Math.pow(10, exp);
    }
  }

  // Xử lý dấu chấm phân cách hàng nghìn kiểu VN (ví dụ: 80.000 -> 80000)
  const clean = norm.replace(/(\d)\.(\d{3})(?!\d)/g, '$1$2').replace(/\s+/g, '');
  const match = clean.match(/[-+]?\d+(?:[.,]\d+)?/);
  if (!match) return null;
  const val = Number(match[0].replace(',', '.'));
  return Number.isNaN(val) ? null : val;
}

/**
 * Làm sạch chuỗi để hiển thị tự nhiên trong câu chẩn đoán
 */
function cleanDisplay(text: string): string {
  if (!text) return '';
  return text.trim().replace(/\s+/g, ' ');
}

/**
 * Chọn phương án nhiễu (distractor) mang tính "bẫy tư duy" điển hình nhất cho một câu hỏi
 * khi học sinh bỏ trống (last_wrong_option = -1) hoặc câu hỏi mẫu chưa có lịch sử chọn sai.
 */
export function pickRepresentativeTrapOption(question: {
  question_text: string;
  options: string[];
  correct_index: number;
  explanation?: string;
}): number {
  const options = question.options || [];
  if (options.length <= 1) return 0;
  const correctIdx =
    question.correct_index >= 0 && question.correct_index < options.length ? question.correct_index : 0;
  const correctText = (options[correctIdx] || '').toLowerCase();
  const stem = (question.question_text || '').toLowerCase();
  const correctNum = extractNumber(options[correctIdx] || '');

  const unitFactors = [10, 100, 1000, 1e4, 1e6, 60, 3600, 3.6, 0.1, 0.01, 0.001, 1e-4, 1e-6, 1 / 3.6, 1 / 60];

  let bestIdx = (correctIdx + 1) % options.length;
  let bestScore = -1;

  for (let i = 0; i < options.length; i++) {
    if (i === correctIdx) continue;
    const optRaw = options[i] || '';
    const opt = optRaw.toLowerCase();
    const optNum = extractNumber(optRaw);
    let score = 10;

    // 1. Bẫy ngược dấu hoàn toàn (-A vs +A)
    if (correctNum !== null && optNum !== null && Math.abs(correctNum + optNum) < 1e-4 && Math.abs(correctNum) > 0) {
      score += 100;
    }

    // 2. Bẫy cộng/trừ 273 trong đổi nhiệt độ Kelvin <-> Celsius
    if (
      correctNum !== null &&
      optNum !== null &&
      (Math.abs(Math.abs(optNum - correctNum) - 273) < 2 ||
        Math.abs(Math.abs(optNum - correctNum) - 546.3) < 2)
    ) {
      score += 95;
    }

    // 3. Bẫy lệch hệ số đổi đơn vị SI (10x, 100x, 1000x, 3.6x, 60x)
    if (correctNum !== null && optNum !== null && correctNum !== 0 && optNum !== 0) {
      const ratio = Math.abs(optNum / correctNum);
      if (unitFactors.some((f) => Math.abs(ratio - f) / f < 0.03)) {
        score += 90;
      }
    }

    // 4. Bẫy cặp đối lập trực tiếp với đáp án đúng (tăng/giảm, song song/vuông góc, sin/cos, bàn tay phải/trái)
    const oppositePairs: [string, string][] = [
      ['tăng', 'giảm'],
      ['song song', 'vuông góc'],
      ['cùng chiều', 'ngược chiều'],
      ['hút nhau', 'đẩy nhau'],
      ['bàn tay trái', 'bàn tay phải'],
      ['sin', 'cos'],
      ['lên trên', 'xuống dưới'],
      ['lớn nhất', 'nhỏ nhất'],
      ['động năng', 'thế năng'],
      ['thẳng đều', 'tròn đều'],
    ];
    for (const [a, b] of oppositePairs) {
      if ((correctText.includes(a) && opt.includes(b)) || (correctText.includes(b) && opt.includes(a))) {
        score += 80;
      }
    }

    // 5. Bẫy trực giác cảm tính hoặc từ khóa nhiễu phổ biến
    const trapDistractorKeywords = [
      'nở to',
      'tổng số phân tử',
      'tự sinh',
      'đứng yên',
      'cắt nhau',
      'mép trên',
      'nhìn xiên',
      'celsius',
      'lít (l)',
      'gam (g)',
      'xen-ti-mét',
      'nặng hơn',
      'tăng gấp đôi',
      'không đổi',
    ];
    for (const kw of trapDistractorKeywords) {
      if (opt.includes(kw)) {
        score += 75;
      }
    }

    // 6. Nếu đề hỏi đơn vị SI, ưu tiên phương án đơn vị thông dụng đời sống dễ nhầm (°C, L, g, cm, h)
    if (stem.includes('hệ si') || stem.includes('quốc tế')) {
      if (opt.includes('°c') || opt.includes('celsius') || opt.includes('lít') || opt.includes('gam (g)') || opt.includes('cm')) {
        score += 85;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestIdx = i;
    }
  }

  return bestIdx;
}

/**
 * Ghép nối lời giải gốc từ Database vào chẩn đoán sao cho mạch lạc, không lặp ý
 */
function appendDatabaseExplanation(diagnosisCore: string, explanationRaw?: string): string {
  const cleanExp = cleanDisplay(explanationRaw || '');
  if (!cleanExp) return diagnosisCore;

  // Nếu câu chẩn đoán đã chứa nguyên văn lời giải thì không nối lặp lại
  if (diagnosisCore.toLowerCase().includes(cleanExp.toLowerCase().slice(0, 40))) {
    return diagnosisCore;
  }
  return `${diagnosisCore} Bản chất vật lý: ${cleanExp}`;
}

/**
 * Sinh "Bí kíp né bẫy" cá nhân hóa cho từng câu hỏi dựa trên nội dung đề bài, cặp phương án Sai/Đúng và loại bẫy
 */
function buildQuestionSpecificRemedy(
  trapType: CognitiveTrapType,
  stem: string,
  correctText: string,
  wrongText: string,
  explanation: string
): string {
  const combined = `${stem} ${correctText.toLowerCase()} ${wrongText.toLowerCase()} ${explanation}`;

  // 1. Nhóm câu hỏi Nhiệt học & Mô hình động học phân tử
  if (
    combined.includes('phân tử') &&
    (combined.includes('nở to') || combined.includes('nhiệt độ') || combined.includes('chuyển động nhiệt'))
  ) {
    if (wrongText.toLowerCase().includes('nở to') || wrongText.toLowerCase().includes('khối lượng')) {
      return 'Ghi nhớ nguyên tắc vi mô: Khi vật nóng lên, bản thân kích thước và khối lượng từng hạt phân tử KHÔNG đổi — chỉ có tốc độ chuyển động nhiệt và khoảng cách trung bình giữa các phân tử tăng lên.';
    }
    if (correctText.toLowerCase().includes('trung bình') || wrongText.toLowerCase().includes('tổng số')) {
      return 'Phân biệt rõ từ khóa: "Nhiệt độ" chỉ đo động năng tịnh tiến TRUNG BÌNH của các phân tử (không phụ thuộc số lượng hạt), còn "Nội năng" mới phụ thuộc vào tổng số phân tử.';
    }
    return 'Ghi nhớ: Chuyển động hỗn loạn không ngừng của các phân tử gọi là chuyển động nhiệt; nhiệt độ càng cao thì chuyển động nhiệt càng nhanh.';
  }

  // 2. Nhóm quy đổi thang nhiệt độ (Kelvin - Celsius - Fahrenheit)
  if (
    combined.includes('kelvin') ||
    combined.includes('celsius') ||
    combined.includes('fahrenheit') ||
    combined.includes('273') ||
    combined.includes('°f') ||
    combined.includes('°c') ||
    combined.includes('độ không tuyệt đối')
  ) {
    if (combined.includes('fahrenheit') || combined.includes('°f')) {
      return 'Công thức đổi Celsius ↔ Fahrenheit: t(°F) = 1,8·t(°C) + 32, suy ra t(°C) = [t(°F) - 32] / 1,8. Đặc biệt tại -40° thì hai thang đo có cùng số chỉ (-40 °C = -40 °F).';
    }
    return 'Quy tắc đổi nhiệt độ tuyệt đối: T(K) = t(°C) + 273,15 (từ °C sang K thì CỘNG 273,15; từ K về °C thì TRỪ 273,15). Nhớ mốc 0 K = -273,15 °C và 0 °C = 273,15 K.';
  }

  // 3. Nhóm Dụng cụ đo, GHĐ, ĐCNN, Bình chia độ, Bình tràn (KHTN Lớp 6)
  if (
    combined.includes('ghđ') ||
    combined.includes('đcnn') ||
    combined.includes('giới hạn đo') ||
    combined.includes('độ chia nhỏ nhất') ||
    combined.includes('bình chia độ') ||
    combined.includes('bình tràn') ||
    combined.includes('mặt khum') ||
    combined.includes('vạch chia') ||
    combined.includes('thước')
  ) {
    if (combined.includes('mặt khum') || combined.includes('nhìn')) {
      return 'Quy tắc đọc dụng cụ đo chuẩn: Đặt mắt nhìn theo hướng VUÔNG GÓC với cạnh thước tại đầu vật; với chất lỏng trong bình chia độ, đặt mắt nhìn ngang đúng ĐÁY MẶT KHUM lõm.';
    }
    if (combined.includes('ghđ') || combined.includes('đcnn') || combined.includes('giới hạn đo') || combined.includes('độ chia nhỏ nhất')) {
      return 'Phân biệt nhanh: GHĐ là giá trị LỚN NHẤT ghi trên thước/bình; ĐCNN là hiệu 2 vạch số lớn trừ nhau rồi chia cho SỐ KHOẢNG CHIA giữa 2 vạch đó. Kết quả đo phải chia hết cho ĐCNN.';
    }
    if (combined.includes('bình chia độ') || combined.includes('bình tràn') || combined.includes('dâng lên')) {
      return 'Khi đo thể tích vật rắn không thấm nước bằng bình chia độ: V_vật = V_sau - V_trước (nhớ lấy mức nước lúc sau trừ mức nước ban đầu, hoặc chia cho số viên bi nếu thả nhiều viên).';
    }
    return 'Mẹo đo độ dài thực nghiệm: Nếu đặt đầu vật ở vạch x₀ (khác vạch 0) và đầu kia ở vạch x₁ thì chiều dài thực của vật là L = x₁ - x₀.';
  }

  // 4. Nhóm Từ trường, Lực từ Ampère, Lorentz, Đường sức từ (Lớp 12)
  if (
    combined.includes('lực từ') ||
    combined.includes('cảm ứng từ') ||
    combined.includes('đường sức từ') ||
    combined.includes('ampère') ||
    combined.includes('ống dây') ||
    combined.includes('lorentz') ||
    combined.includes('nam châm')
  ) {
    if (combined.includes('song song') || combined.includes('vuông góc') || combined.includes('sin')) {
      return 'Ghi nhớ công thức lực từ F = I·L·B·sinθ (với θ là góc giữa dây dẫn và đường sức từ B): Khi dây SONG SONG với B (θ = 0° hoặc 180°) thì sinθ = 0 ⇒ F = 0; khi dây VUÔNG GÓC với B (θ = 90°) thì F_max = I·L·B.';
    }
    if (combined.includes('bàn tay trái') || combined.includes('bàn tay phải')) {
      return 'Tránh nhầm 2 quy tắc bàn tay: Dùng QUY TẮC BÀN TAY TRÁI để tìm chiều LỰC TỪ (đặt bàn tay hứng đường sức từ, chiều từ cổ tay đến ngón tay theo dòng điện I, ngón cái chỉ chiều lực F); dùng BÀN TAY PHẢI để tìm chiều đường sức từ.';
    }
    if (combined.includes('hai dây dẫn') || combined.includes('cùng chiều') || combined.includes('ngược chiều')) {
      return 'Mẹo nhớ tương tác 2 dòng điện thẳng song song: "CÙNG chiều thì HÚT nhau, NGƯỢC chiều thì ĐẨY nhau". Điểm có cảm ứng từ tổng hợp B = 0 luôn nằm gần dòng điện có cường độ nhỏ hơn.';
    }
    return 'Trước khi thay số vào công thức từ trường (B = 2·10⁻⁷·I/r cho dây thẳng, B = 4π·10⁻⁷·(N/l)·I cho ống dây), nhớ đổi chiều dài L và khoảng cách r từ cm sang mét (m)!';
  }

  // 5. Nhóm Định luật I Nhiệt động lực học & Công/Nhiệt
  if (combined.includes('nhận công') || combined.includes('thực hiện công') || combined.includes('nội năng')) {
    return 'Quy ước dấu Định luật I (ΔU = A + Q): Hệ NHẬN (nhận công A > 0, thu nhiệt Q > 0); Hệ CHO/TRUYỀN RA (thực hiện công A < 0, tỏa nhiệt Q < 0). Viết rõ dấu (+) và (-) trước khi cộng!';
  }

  // 6. Nhóm Đơn vị chuẩn SI & Đổi đơn vị
  if (trapType === 'TRAP_UNIT') {
    return `Kiểm tra kỹ đơn vị trước khi khoanh đáp án: đối chiếu giữa "${wrongText}" và "${correctText}" xem đã quy đổi về đơn vị chuẩn SI (m, kg, s, K, m³, A, T) hay chưa.`;
  }

  // 7. Nhóm Câu hỏi phủ định (KHÔNG ĐÚNG / SAI)
  if (trapType === 'TRAP_KEYWORD') {
    return `Với dạng câu hỏi dễ nhầm từ khóa, hãy gạch chân cụm từ quyết định trong đề bài và so sánh trực tiếp điểm khác biệt giữa "${correctText}" với "${wrongText}".`;
  }

  return COGNITIVE_TRAP_REGISTRY[trapType].remedyTip;
}

/**
 * Thuật toán Phân loại Bẫy Nhận thức Đa Tín Hiệu & Sinh Chẩn Đoán Cá Nhân Hóa (Cognitive Trap Classifier)
 */
export function detectCognitiveTrap(
  question:
    | Partial<QuestionItem>
    | { question_text: string; options: string[]; correct_index: number; explanation?: string },
  wrongOptionIndex?: number
): TrapAnalysisResult {
  const stemRaw = cleanDisplay(question.question_text || '');
  const stem = stemRaw.toLowerCase();
  const explanationRaw = cleanDisplay(question.explanation || '');
  const explanation = explanationRaw.toLowerCase();
  const options = question.options || [];
  const correctIdx =
    question.correct_index !== undefined && question.correct_index >= 0 && question.correct_index < options.length
      ? question.correct_index
      : 0;

  // Nếu học sinh để trống (wrongOptionIndex = -1 / undefined) hoặc trùng đáp án đúng, tự động chọn phương án bẫy điển hình nhất
  const effectiveWrongIdx =
    wrongOptionIndex !== undefined &&
    wrongOptionIndex >= 0 &&
    wrongOptionIndex < options.length &&
    wrongOptionIndex !== correctIdx
      ? wrongOptionIndex
      : pickRepresentativeTrapOption({
          question_text: stemRaw,
          options,
          correct_index: correctIdx,
          explanation: explanationRaw,
        });

  const correctTextRaw = cleanDisplay(options[correctIdx] || '');
  const wrongTextRaw = cleanDisplay(options[effectiveWrongIdx] || '');
  const correctText = correctTextRaw.toLowerCase();
  const wrongText = wrongTextRaw.toLowerCase();

  const correctNum = extractNumber(correctTextRaw);
  const wrongNum = extractNumber(wrongTextRaw);

  // ============================================================================
  // 1. KIỂM TRA BẪY TỪ KHÓA PHỦ ĐỊNH & ĐỊNH NGHĨA CỐT LÕI (TRAP_KEYWORD)
  // ============================================================================
  const hasNegationKeyword =
    stem.includes('không đúng') ||
    stem.includes('không phải') ||
    stem.includes('không dùng') ||
    stem.includes('phát biểu sai') ||
    stem.includes('câu sai') ||
    stem.includes('chưa chính xác') ||
    stem.includes('ngoại trừ');

  if (hasNegationKeyword) {
    const core = `Đề bài yêu cầu tìm phương án phủ định ("KHÔNG ĐÚNG" / "KHÔNG PHẢI"), nhưng bạn đã sập bẫy đọc lướt nên chọn nhầm mệnh đề đúng "${wrongTextRaw}" thay vì đáp án cần tìm là "${correctTextRaw}".`;
    return {
      trapType: 'TRAP_KEYWORD',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_KEYWORD.name,
      severity: 'Thường gặp',
      diagnosis: appendDatabaseExplanation(core, explanationRaw),
      remedyTip: buildQuestionSpecificRemedy('TRAP_KEYWORD', stem, correctTextRaw, wrongTextRaw, explanation),
      confidence: 0.95,
    };
  }

  const hasDeltaVsRatioKeyword =
    stem.includes('tăng thêm') ||
    stem.includes('giảm đi một lượng') ||
    (correctText.includes('trung bình') && (wrongText.includes('tổng') || wrongText.includes('từng phân tử'))) ||
    ((stem.includes('giới hạn đo') || stem.includes('ghđ')) &&
      (wrongText.includes('hai vạch chia') || wrongText.includes('nhỏ nhất') || wrongText.includes('tổng chiều dài') || wrongText.includes('đcnn'))) ||
    ((stem.includes('độ chia nhỏ nhất') || stem.includes('đcnn')) &&
      (wrongText.includes('lớn nhất') || wrongText.includes('đang có') || wrongText.includes('số lượng vạch'))) ||
    (stem.includes('đại lượng đo') && correctText.includes('trung bình')) ||
    (stem.includes('cho biết điều gì') &&
      ((correctText.includes('nóng, lạnh') && wrongText.includes('thể tích')) ||
        (correctText.includes('lượng chất') && wrongText.includes('kích thước'))));

  if (hasDeltaVsRatioKeyword) {
    let specificMsg = `Bạn đã chọn nhầm "${wrongTextRaw}" thay vì đáp án đúng "${correctTextRaw}" do bỏ sót từ khóa định nghĩa cốt lõi trong câu hỏi.`;
    if (correctText.includes('trung bình') && wrongText.includes('tổng')) {
      specificMsg = `Bạn đã nhầm lẫn khái niệm khi chọn "${wrongTextRaw}" thay vì "${correctTextRaw}". Bạn đã bỏ sót từ khóa định lượng quan trọng: đại lượng được hỏi đặc trưng cho giá trị TRUNG BÌNH của mỗi phân tử chứ không phải tổng số lượng hạt có trong vật.`;
    } else if (stem.includes('giới hạn đo') || stem.includes('độ chia nhỏ nhất')) {
      specificMsg = `Bạn đã nhầm lẫn định nghĩa giữa Giới hạn đo (GHĐ) và Độ chia nhỏ nhất (ĐCNN) khi chọn "${wrongTextRaw}" thay vì "${correctTextRaw}".`;
    } else if (stem.includes('tăng thêm') || stem.includes('giảm đi một lượng')) {
      specificMsg = `Bạn đã bị bẫy từ khóa khi không phân biệt giữa "tăng thêm một lượng Δx" (phép cộng) và "tăng lên gấp x lần" (phép nhân), dẫn tới chọn "${wrongTextRaw}" thay vì "${correctTextRaw}".`;
    }

    return {
      trapType: 'TRAP_KEYWORD',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_KEYWORD.name,
      severity: 'Thường gặp',
      diagnosis: appendDatabaseExplanation(specificMsg, explanationRaw),
      remedyTip: buildQuestionSpecificRemedy('TRAP_KEYWORD', stem, correctTextRaw, wrongTextRaw, explanation),
      confidence: 0.92,
    };
  }

  // ============================================================================
  // 2. KIỂM TRA BẪY NHẦM DẤU & CHIỀU VECTOR / QUY TẮC BÀN TAY (TRAP_SIGN)
  // ============================================================================
  if (correctNum !== null && wrongNum !== null && Math.abs(correctNum + wrongNum) < 1e-4 && Math.abs(correctNum) > 0) {
    const core = `Phương án bạn chọn ("${wrongTextRaw}") mang dấu ngược lại hoàn toàn so với đáp án đúng ("${correctTextRaw}"). Bạn đã nhầm lẫn dấu quy ước hoặc chiều dương của trục tọa độ.`;
    return {
      trapType: 'TRAP_SIGN',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_SIGN.name,
      severity: 'Cao',
      diagnosis: appendDatabaseExplanation(core, explanationRaw),
      remedyTip: buildQuestionSpecificRemedy('TRAP_SIGN', stem, correctTextRaw, wrongTextRaw, explanation),
      confidence: 0.96,
    };
  }

  const hasThermodynamicSignContext =
    stem.includes('nhiệt lượng') ||
    stem.includes('nội năng') ||
    stem.includes('thực hiện công') ||
    stem.includes('nhận công') ||
    stem.includes('chậm dần đều') ||
    stem.includes('lenz');

  if (
    hasThermodynamicSignContext &&
    (wrongText.includes('giảm') || wrongText.includes('tăng') || wrongText.includes('-') || wrongText.includes('+'))
  ) {
    const core = `Khi chọn "${wrongTextRaw}" thay vì "${correctTextRaw}", bạn đã nhầm dấu quy ước của quá trình trao đổi công và nhiệt (nhận công A > 0, sinh công A < 0, thu nhiệt Q > 0, tỏa nhiệt Q < 0).`;
    return {
      trapType: 'TRAP_SIGN',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_SIGN.name,
      severity: 'Cao',
      diagnosis: appendDatabaseExplanation(core, explanationRaw),
      remedyTip: buildQuestionSpecificRemedy('TRAP_SIGN', stem, correctTextRaw, wrongTextRaw, explanation),
      confidence: 0.9,
    };
  }

  // Kiểm tra cặp phương án ngược chiều vector, quy tắc bàn tay trái/phải, hút/đẩy
  const isVectorOrHandRuleInversion =
    (correctText.includes('bàn tay trái') && wrongText.includes('bàn tay phải')) ||
    (correctText.includes('bàn tay phải') && wrongText.includes('bàn tay trái')) ||
    (correctText.includes('hút nhau') && wrongText.includes('đẩy nhau')) ||
    (correctText.includes('đẩy nhau') && wrongText.includes('hút nhau')) ||
    (correctText.includes('lên trên') && wrongText.includes('xuống dưới')) ||
    (correctText.includes('xuống dưới') && wrongText.includes('lên trên')) ||
    (correctText.includes('phía nam') && wrongText.includes('phía bắc')) ||
    (correctText.includes('phía bắc') && wrongText.includes('phía nam')) ||
    (correctText.includes('trong khoảng giữa hai dây') && wrongText.includes('ngoài khoảng hai dây'));

  if (isVectorOrHandRuleInversion) {
    const core = `Bạn đã xác định ngược chiều vector hoặc áp dụng nhầm quy tắc bàn tay khi chọn "${wrongTextRaw}" thay vì đáp án đúng "${correctTextRaw}".`;
    return {
      trapType: 'TRAP_SIGN',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_SIGN.name,
      severity: 'Cao',
      diagnosis: appendDatabaseExplanation(core, explanationRaw),
      remedyTip: buildQuestionSpecificRemedy('TRAP_SIGN', stem, correctTextRaw, wrongTextRaw, explanation),
      confidence: 0.91,
    };
  }

  // ============================================================================
  // 3. KIỂM TRA BẪY QUÊN ĐỔI ĐƠN VỊ SI & THANG NHIỆT ĐỘ (TRAP_UNIT)
  // ============================================================================
  if (correctNum !== null && wrongNum !== null && correctNum !== 0 && wrongNum !== 0) {
    const ratio = Math.abs(wrongNum / correctNum);
    const unitFactors = [10, 100, 1000, 1e4, 1e6, 60, 3600, 3.6, 0.1, 0.01, 0.001, 1e-4, 1e-6, 1 / 3.6, 1 / 60];
    const isUnitMismatch = unitFactors.some((factor) => Math.abs(ratio - factor) / factor < 0.03);

    if (isUnitMismatch) {
      let explanationDetail = `kết quả bị lệch hệ số ${ratio >= 1 ? Number(ratio.toFixed(2)) : Number((1 / ratio).toFixed(2))} lần`;
      if (Math.abs(ratio - 1000) < 30 || Math.abs(ratio - 0.001) < 0.0001) {
        if (stem.includes(' g ') || stem.includes('gam') || stem.includes('mg') || stem.includes('tấn')) {
          explanationDetail = 'quên đổi gram sang kilôgam (g → kg) hoặc mg → g (lệch 1000 lần)';
        } else if (stem.includes('m³') || stem.includes('lít') || stem.includes('ml')) {
          explanationDetail = 'nhầm hệ số quy đổi thể tích giữa m³, lít (dm³) và mL (cm³) (lệch 1000 lần)';
        } else {
          explanationDetail = 'quên đổi đơn vị ước số/bội số 10³ (như g → kg, mm → m hoặc mA → A)';
        }
      } else if (Math.abs(ratio - 100) < 3 || Math.abs(ratio - 0.01) < 0.001) {
        explanationDetail = 'quên đổi centimét sang mét (cm → m, lệch 100 lần)';
      } else if (Math.abs(ratio - 10) < 0.3 || Math.abs(ratio - 0.1) < 0.01) {
        explanationDetail = 'dịch nhầm 1 hàng dấu phẩy thập phân khi đổi đơn vị (cm ↔ mm hoặc dm ↔ m)';
      } else if (Math.abs(ratio - 3.6) < 0.1 || Math.abs(ratio - 1 / 3.6) < 0.05) {
        explanationDetail = 'quên đổi km/h sang m/s (chia cho 3,6)';
      } else if (Math.abs(ratio - 60) < 2 || Math.abs(ratio - 3600) < 50) {
        explanationDetail = 'quên đổi phút hoặc giờ sang giây (s)';
      }

      const core = `Phương án bạn chọn ("${wrongTextRaw}") thay vì đáp án đúng ("${correctTextRaw}") phản ánh lỗi bẫy đơn vị: ${explanationDetail}.`;
      return {
        trapType: 'TRAP_UNIT',
        trapName: COGNITIVE_TRAP_REGISTRY.TRAP_UNIT.name,
        severity: 'Cao',
        diagnosis: appendDatabaseExplanation(core, explanationRaw),
        remedyTip: buildQuestionSpecificRemedy('TRAP_UNIT', stem, correctTextRaw, wrongTextRaw, explanation),
        confidence: 0.94,
      };
    }
  }

  // Kiểm tra bẫy đổi thang nhiệt độ (Kelvin - Celsius - Fahrenheit) hoặc hỏi đơn vị chuẩn SI
  const hasTempUnitSymbol = (s: string) =>
    s.includes('°c') || s.includes('°f') || s.includes('kelvin') || s.includes('(k)') || /\b\d+(?:[.,]\d+)?\s*k\b/i.test(s);

  const isTemperatureScaleQuestion =
    stem.includes('thang nhiệt độ') ||
    stem.includes('thang celsius') ||
    stem.includes('thang kelvin') ||
    stem.includes('fahrenheit') ||
    stem.includes('°f') ||
    stem.includes('độ không tuyệt đối') ||
    (stem.includes('nhiệt độ') && hasTempUnitSymbol(correctText) && hasTempUnitSymbol(wrongText));

  const isTemperatureScaleOrSIUnitQuestion =
    isTemperatureScaleQuestion ||
    stem.includes('hệ si') ||
    stem.includes('đo lường quốc tế') ||
    stem.includes('đổi đơn vị') ||
    stem.includes('quy đổi nào sau đây') ||
    stem.includes('micrômét');

  if (isTemperatureScaleOrSIUnitQuestion) {
    let specificUnitMsg = `Bạn đã chọn nhầm "${wrongTextRaw}" thay vì đáp án đúng "${correctTextRaw}" do nhầm lẫn quy tắc quy đổi đơn vị hoặc đơn vị cơ bản trong hệ SI.`;
    if (isTemperatureScaleQuestion) {
      specificUnitMsg = `Bạn đã chọn "${wrongTextRaw}" thay vì "${correctTextRaw}" do nhầm lẫn công thức chuyển đổi mốc nhiệt độ giữa thang Kelvin (K), Celsius (°C) hoặc Fahrenheit (°F).`;
    } else if (stem.includes('hệ si') || stem.includes('quốc tế')) {
      specificUnitMsg = `Bạn đã chọn đơn vị thông dụng đời thường ("${wrongTextRaw}") thay vì đơn vị cơ bản chuẩn trong hệ đo lường quốc tế SI là "${correctTextRaw}".`;
    }

    return {
      trapType: 'TRAP_UNIT',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_UNIT.name,
      severity: 'Cao',
      diagnosis: appendDatabaseExplanation(specificUnitMsg, explanationRaw),
      remedyTip: buildQuestionSpecificRemedy('TRAP_UNIT', stem, correctTextRaw, wrongTextRaw, explanation),
      confidence: 0.91,
    };
  }

  // ============================================================================
  // 4. KIỂM TRA BẪY TRỰC GIÁC CẢM TÍNH & SAI LẦM QUAN SÁT (TRAP_INTUITION)
  // ============================================================================
  const isIntuitiveMisconception =
    stem.includes('rơi tự do') ||
    stem.includes('chân không') ||
    stem.includes('áo ấm') ||
    stem.includes('truyền nhiệt') ||
    stem.includes('quán tính') ||
    stem.includes('mất đi') ||
    stem.includes('ngừng tác dụng lực') ||
    stem.includes('cảm giác lạnh') ||
    wrongText.includes('nở to') ||
    wrongText.includes('tròn đều') ||
    wrongText.includes('đứng yên') ||
    wrongText.includes('nặng hơn') ||
    wrongText.includes('chỉ duy nhất lực hút') ||
    wrongText.includes('chỉ duy nhất lực đẩy') ||
    wrongText.includes('không có khoảng cách') ||
    stem.includes('mặt khum') ||
    stem.includes('sai số thị sai') ||
    stem.includes('vạch 2 cm') ||
    stem.includes('chưa được hiệu chỉnh') ||
    stem.includes('cát khô') ||
    stem.includes('sợi dây đồng rất mảnh') ||
    stem.includes('mực tím') ||
    stem.includes('nén một khối chất lỏng') ||
    stem.includes('sắt non') ||
    explanation.includes('trực giác') ||
    explanation.includes('sai lầm phổ biến') ||
    explanation.includes('dễ lầm tưởng');

  if (isIntuitiveMisconception) {
    let intuitionCore = `Bạn đã đánh giá theo trực giác cảm tính đời thường khi chọn "${wrongTextRaw}" thay vì đáp án đúng theo bản chất vật lý là "${correctTextRaw}".`;
    if (wrongText.includes('nở to')) {
      intuitionCore = `Bạn đã sập bẫy trực giác vĩ mô khi chọn "${wrongTextRaw}" thay vì "${correctTextRaw}". Thấy vật rắn/lỏng nở ra khi nóng lên, học sinh rất dễ lầm tưởng từng hạt phân tử tự phình to ra, trong khi thực tế kích thước phân tử không đổi mà chỉ có tốc độ chuyển động nhiệt và khoảng cách giữa chúng tăng lên.`;
    } else if (stem.includes('mặt khum') || stem.includes('thị sai') || stem.includes('vạch 2 cm') || stem.includes('hiệu chỉnh')) {
      intuitionCore = `Bạn đã mắc bẫy thói quen quan sát thực nghiệm khi chọn "${wrongTextRaw}" thay vì "${correctTextRaw}" (đọc xiên góc gây sai số thị sai, đọc mép trên mặt nước hoặc quên trừ vạch xuất phát / sai số điểm 0).`;
    } else if (stem.includes('cát khô')) {
      intuitionCore = `Bạn đã cộng cơ học thể tích theo trực giác khi chọn "${wrongTextRaw}" thay vì "${correctTextRaw}", quên mất rằng giữa các hạt cát khô có các khe hở không khí để nước thấm lấp vào.`;
    }

    return {
      trapType: 'TRAP_INTUITION',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_INTUITION.name,
      severity: 'Thường gặp',
      diagnosis: appendDatabaseExplanation(intuitionCore, explanationRaw),
      remedyTip: buildQuestionSpecificRemedy('TRAP_INTUITION', stem, correctTextRaw, wrongTextRaw, explanation),
      confidence: 0.89,
    };
  }

  // ============================================================================
  // 5. KIỂM TRA BẪY VI PHẠM ĐIỀU KIỆN ĐỊNH LUẬT & GIỚI HẠN BIÊN (TRAP_CONDITION)
  // ============================================================================
  const hasConditionKeywords =
    stem.includes('đẳng nhiệt') ||
    stem.includes('đẳng áp') ||
    stem.includes('đẳng tích') ||
    stem.includes('khí lý tưởng') ||
    stem.includes('bảo toàn') ||
    stem.includes('bỏ qua ma sát') ||
    stem.includes('thấu kính mỏng') ||
    stem.includes('điều kiện') ||
    stem.includes('bằng 0 khi') ||
    stem.includes('đạt cực đại') ||
    stem.includes('song song với các đường sức') ||
    stem.includes('gập đôi lại') ||
    stem.includes('tiếp xúc nhiệt') ||
    stem.includes('rắn kết tinh') ||
    stem.includes('thể nào sau đây') ||
    stem.includes('phù hợp nhất') ||
    stem.includes('không bỏ lọt');

  if (hasConditionKeywords) {
    let condCore = `Bạn đã chọn "${wrongTextRaw}" thay vì "${correctTextRaw}" do bỏ qua điều kiện áp dụng hoặc trạng thái giới hạn của hiện tượng vật lý trong đề bài.`;
    if (stem.includes('bằng 0 khi') || stem.includes('đạt cực đại') || stem.includes('song song')) {
      condCore = `Bạn đã chọn "${wrongTextRaw}" thay vì "${correctTextRaw}" do nhầm lẫn điều kiện góc hợp bởi dòng điện/hạt mang điện với đường sức từ để lực từ triệt tiêu (F = 0 khi song song, θ = 0°) hay đạt cực đại (F_max khi vuông góc, θ = 90°).`;
    } else if (stem.includes('gập đôi lại')) {
      condCore = `Bạn đã chọn "${wrongTextRaw}" thay vì "${correctTextRaw}" vì quên xét điều kiện hai nửa dây gập đôi có dòng điện chạy ngược chiều nhau nên lực từ tác dụng lên hai nhánh tự triệt tiêu nhau.`;
    } else if (stem.includes('tiếp xúc nhiệt')) {
      condCore = `Bạn đã chọn "${wrongTextRaw}" thay vì "${correctTextRaw}" do nhầm điều kiện cân bằng nhiệt (hai vật phải có cùng nhiệt độ chứ không nhất thiết cùng nội năng hay khối lượng).`;
    }

    return {
      trapType: 'TRAP_CONDITION',
      trapName: COGNITIVE_TRAP_REGISTRY.TRAP_CONDITION.name,
      severity: 'Trung bình',
      diagnosis: appendDatabaseExplanation(condCore, explanationRaw),
      remedyTip: buildQuestionSpecificRemedy('TRAP_CONDITION', stem, correctTextRaw, wrongTextRaw, explanation),
      confidence: 0.87,
    };
  }

  // ============================================================================
  // 6. BẪY LẪN LỘN CÔNG THỨC & TÍNH TOÁN TỈ LỆ (TRAP_FORMULA_CONFUSION)
  // ============================================================================
  let formulaCore = `Bạn đã chọn phương án "${wrongTextRaw}" thay vì đáp án đúng "${correctTextRaw}" do nhầm lẫn biểu thức công thức hoặc bước biến đổi đại số của bài toán.`;
  if (correctText.includes('sin') && wrongText.includes('cos')) {
    formulaCore = `Bạn đã chọn nhầm công thức chứa hàm "${wrongTextRaw}" thay vì "${correctTextRaw}". Trong công thức độ lớn lực từ Ampère/Lorentz, góc θ giữa dây dẫn và từ trường luôn đi với hàm sinθ chứ không phải cosθ.`;
  } else if (correctNum !== null && wrongNum !== null) {
    formulaCore = `Kết quả bạn chọn ("${wrongTextRaw}") bị lệch so với đáp án đúng ("${correctTextRaw}") do áp dụng nhầm công thức tính toán hoặc thay nhầm hệ số tỉ lệ trong bài toán.`;
  }

  return {
    trapType: 'TRAP_FORMULA_CONFUSION',
    trapName: COGNITIVE_TRAP_REGISTRY.TRAP_FORMULA_CONFUSION.name,
    severity: 'Trung bình',
    diagnosis: appendDatabaseExplanation(formulaCore, explanationRaw),
    remedyTip: buildQuestionSpecificRemedy('TRAP_FORMULA_CONFUSION', stem, correctTextRaw, wrongTextRaw, explanation),
    confidence: 0.83,
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
    TRAP_FORMULA_CONFUSION:
      totalAnalyzed > 0 ? Number(((trapCounts.TRAP_FORMULA_CONFUSION / totalAnalyzed) * 100).toFixed(1)) : 0,
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
  const immunityScore = Math.max(20, Math.min(100, Math.round(100 - totalAnalyzed * 3.5)));

  // Chuẩn hóa giá trị cho 6 trục của Biểu đồ Radar (tối thiểu 15 để hình đa giác đẹp mắt)
  const maxAxisVal = Math.max(...Object.values(trapCounts), 1);
  const radarValues = ALL_TRAP_TYPES.map((type) => {
    const rawVal = trapCounts[type];
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
