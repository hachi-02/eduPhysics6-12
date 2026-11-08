import { QuestionItem, TrueFalseStatement, ShortAnswerConfig, QuestionType } from '@/types/cms';

export interface ExamScoreResult {
  totalScore: number;
  maxScore: number;
  scaledScore10: number; // Điểm quy đổi thang 10
  part1Score: number;
  part1Max: number;
  part2Score: number;
  part2Max: number;
  part3Score: number;
  part3Max: number;
  questionScores: Record<number, number>;
  partStats: {
    part1Count: number;
    part2Count: number;
    part3Count: number;
  };
}

/**
 * Trích xuất giá trị số và đơn vị từ chuỗi (ví dụ: "12,5 m/s" -> { val: 12.5, unit: "m/s" })
 */
export function extractNumberAndUnit(text: string): { num: number; unit: string } | null {
  if (!text) return null;
  const cleaned = text.replace(/^[A-D][.:)]\s*/i, '').trim();
  const match = cleaned.match(/([-+]?\d+(?:[.,]\d+)?)\s*([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\/°Ωμ²³%]+)?/);
  if (!match) return null;
  const num = parseFloat(match[1].replace(',', '.'));
  if (isNaN(num)) return null;
  const unit = match[2]?.trim() || '';
  return { num, unit };
}

/**
 * Kiểm tra xem các phương án có phải là các giá trị số học thuần túy hay không
 * (Ví dụ: "20 cm³", "15 m/s", "2,5 N" -> true; còn "Quấn chặt 20 vòng quanh thân bút..." -> false)
 */
export function isPureNumericOptions(options: string[]): boolean {
  if (!options || options.length === 0) return false;
  let numericCount = 0;
  for (const opt of options) {
    const cleaned = opt.replace(/^[A-D][.:)]\s*/i, '').trim();
    // Khớp nếu chỉ là số kèm đơn vị tùy chọn: e.g. "20", "20 cm³", "1.5 m/s", "-10 J"
    if (/^[-+]?\d+(?:[.,]\d+)?(?:\s*[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\/°Ωμ²³%]+)?$/.test(cleaned)) {
      numericCount++;
    }
  }
  return numericCount >= 3;
}

/**
 * Kiểm tra câu trả lời ngắn của học sinh
 */
export function checkShortAnswer(
  userInput: string | number | undefined,
  config?: ShortAnswerConfig
): { isCorrect: boolean; difference?: number } {
  if (userInput === undefined || userInput === null) {
    return { isCorrect: false };
  }

  const rawInput = String(userInput).trim().toLowerCase().replace(',', '.');
  if (!rawInput) {
    return { isCorrect: false };
  }

  if (!config) {
    return { isCorrect: false };
  }

  // 1. Kiểm tra trong acceptable_answers nếu có
  if (config.acceptable_answers && config.acceptable_answers.length > 0) {
    const matchesList = config.acceptable_answers.some(
      (ans) => ans.trim().toLowerCase().replace(',', '.') === rawInput
    );
    if (matchesList) return { isCorrect: true };
  }

  // 2. So sánh số học với dung sai
  const userNum = parseFloat(rawInput);
  const targetNum = typeof config.target_value === 'number'
    ? config.target_value
    : parseFloat(String(config.target_value).replace(',', '.'));

  if (!isNaN(userNum) && !isNaN(targetNum)) {
    const diff = Math.abs(userNum - targetNum);
    const tolerance = config.tolerance !== undefined
      ? config.tolerance
      : Math.max(0.02 * Math.abs(targetNum), 0.05);

    return {
      isCorrect: diff <= tolerance,
      difference: diff,
    };
  }

  // 3. So sánh chuỗi ký tự chính xác
  const targetStr = String(config.target_value).trim().toLowerCase();
  return {
    isCorrect: rawInput === targetStr,
  };
}

/**
 * Tính điểm câu hỏi Đúng / Sai theo chuẩn Bộ GD&ĐT:
 * - Đúng 1 ý: 0.1 điểm
 * - Đúng 2 ý: 0.25 điểm
 * - Đúng 3 ý: 0.5 điểm
 * - Đúng 4 ý: 1.0 điểm
 */
export function calculateTrueFalseScore(
  statements: TrueFalseStatement[],
  userChoices: Record<string, boolean> = {}
): { score: number; correctCount: number } {
  let correctCount = 0;
  for (const st of statements) {
    const userVal = userChoices[st.id];
    if (userVal !== undefined && userVal === st.is_correct) {
      correctCount++;
    }
  }

  let score = 0;
  if (correctCount === 1) score = 0.1;
  else if (correctCount === 2) score = 0.25;
  else if (correctCount === 3) score = 0.5;
  else if (correctCount === 4) score = 1.0;

  return { score, correctCount };
}

/**
 * Tạo 4 mệnh đề Đúng / Sai ĐỘC LẬP thực sự (có cả ý Đúng và ý Sai tự nhiên)
 * Tránh việc chỉ có 1 ý Đúng và 3 ý Sai gây suy luận đoán mò.
 */
export function generateIndependentTrueFalseStatements(q: QuestionItem): TrueFalseStatement[] {
  const correctOpt = q.options[q.correct_index] || '';
  const distractors = q.options.filter((_, idx) => idx !== q.correct_index);
  const letterIds = ['a', 'b', 'c', 'd'];

  // Seed từ id để đảm bảo kết quả cố định cho từng câu hỏi
  const seed = ((q.id || 1) * 17 + (q.order_index || 1) * 31) % 4;

  const raw: { text: string; is_correct: boolean; explanation: string }[] = [];

  if (isPureNumericOptions(q.options)) {
    const parsed = extractNumberAndUnit(correctOpt);
    const targetNum = parsed ? parsed.num : 20;
    const unit = parsed ? parsed.unit : '';

    // Ý a: Khẳng định về giá trị tìm được
    const aIsCorrect = seed % 2 === 0;
    const aVal = aIsCorrect ? targetNum : Math.round((targetNum * 1.5) * 10) / 10;
    raw.push({
      text: `Kết quả tính toán đại lượng trong bài cho giá trị là ${aVal} ${unit}.`,
      is_correct: aIsCorrect,
      explanation: aIsCorrect
        ? `Đúng, kết quả tính chính xác là ${aVal} ${unit}.`
        : `Sai, kết quả tính đúng phải là ${targetNum} ${unit}.`,
    });

    // Ý b: Khẳng định về đơn vị đo lường hoặc thứ nguyên
    raw.push({
      text: unit
        ? `Đơn vị đo chuẩn của đại lượng tìm được trong bài là ${unit}.`
        : 'Đại lượng trong bài có thể đo bằng dụng cụ đo tiêu chuẩn.',
      is_correct: true,
      explanation: 'Đúng theo quy chuẩn thứ nguyên và đơn vị đo Vật lý.',
    });

    // Ý c: Khẳng định về một phương án nhiễu
    const distractorText = distractors[0] || '10';
    raw.push({
      text: `Nếu thực hiện phép tính với giá trị ${distractorText} thì sẽ thỏa mãn đề bài.`,
      is_correct: false,
      explanation: `Sai, đây là phương án nhiễu (kết quả chính xác là ${correctOpt}).`,
    });

    // Ý d: Khẳng định về quy luật vật lý hoặc biến thiên
    const dIsCorrect = seed === 0 || seed === 2;
    raw.push({
      text: dIsCorrect
        ? 'Hiện tượng được mô tả trong bài tuân theo định luật bảo toàn và nguyên lý cộng đại lượng.'
        : 'Nếu tăng gấp đôi các thông số ban đầu thì kết quả tìm được sẽ không thay đổi.',
      is_correct: dIsCorrect,
      explanation: dIsCorrect
        ? 'Đúng theo nguyên lý Vật lý.'
        : 'Sai, khi thông số ban đầu thay đổi thì kết quả tính toán sẽ biến thiên tương ứng.',
    });
  } else {
    // Với câu hỏi định tính / phương pháp:
    // Ý a: Khẳng định chính xác theo SGK (ĐÚNG)
    raw.push({
      text: `${correctOpt.replace(/\.$/, '')}.`,
      is_correct: true,
      explanation: 'Khẳng định chính xác theo SGK và bản chất Vật lý.',
    });

    // Ý b: Phương án nhiễu thứ nhất (SAI)
    const dist1 = distractors[0] || 'Hiện tượng diễn ra ngược lại với quy luật tự nhiên';
    raw.push({
      text: `${dist1.replace(/\.$/, '')}.`,
      is_correct: false,
      explanation: 'Khẳng định chưa chính xác hoặc không tối ưu.',
    });

    // Ý c: Khẳng định về ứng dụng / nguyên lý thực tế (ĐÚNG)
    raw.push({
      text: 'Phương pháp hoặc quy tắc nêu trên có thể áp dụng tương tự trong các phép đo lường và thực nghiệm đời sống.',
      is_correct: true,
      explanation: 'Đúng, đây là nguyên tắc khoa học được áp dụng rộng rãi.',
    });

    // Ý d: Phương án nhiễu thứ hai (SAI)
    const dist2 = distractors[1] || 'Kết quả của phép đo không phụ thuộc vào độ chính xác của dụng cụ';
    raw.push({
      text: `${dist2.replace(/\.$/, '')}.`,
      is_correct: false,
      explanation: 'Khẳng định sai hoặc không phù hợp với quy tắc thực nghiệm.',
    });
  }

  // Luôn có sự đan xen giữa Đúng và Sai (thường là 2 Đúng, 2 Sai)
  return raw.map((st, i) => ({
    id: letterIds[i] || `item_${i}`,
    text: st.text,
    is_correct: st.is_correct,
    explanation: st.explanation,
  }));
}

/**
 * Phân loại định dạng của câu hỏi theo chuẩn format 2025:
 * - 'short_answer': Chỉ dành cho BÀI TOÁN TÍNH TOÁN CÓ SỐ LIỆU THUẦN TÚY (VD: 20 cm³, 15 m/s)
 * - 'true_false': Câu hỏi nhận định, bản chất hiện tượng (Thông hiểu / Vận dụng)
 * - 'multiple_choice': Câu hỏi nhận biết, khái niệm đơn thuần
 */
export function classifyQuestionFormat(q: QuestionItem): QuestionType {
  if (q.question_type) return q.question_type;

  // CHỈ phân loại là Điền số nếu các phương án là SỐ HỌC THUẦN TÚY (tránh nhầm các câu phương pháp đo có số)
  if (isPureNumericOptions(q.options) && (q.difficulty === 'van_dung' || q.difficulty === 'van_dung_cao')) {
    return 'short_answer';
  }

  if (q.difficulty === 'thong_hieu' || q.difficulty === 'van_dung') {
    return 'true_false';
  }

  return 'multiple_choice';
}

/**
 * Chuẩn bị đầy đủ cấu hình Format 2025 (tf_statements hoặc short_answer) cho 1 câu hỏi
 */
export function prepareQuestionFor2025(q: QuestionItem): QuestionItem {
  const type = classifyQuestionFormat(q);
  const correctOpt = q.options[q.correct_index] || '';

  if (type === 'true_false') {
    const tf_statements = generateIndependentTrueFalseStatements(q);
    return {
      ...q,
      question_type: 'true_false',
      tf_statements,
    };
  }

  if (type === 'short_answer') {
    const parsed = extractNumberAndUnit(correctOpt);
    const short_answer: ShortAnswerConfig = parsed
      ? {
          target_value: parsed.num,
          tolerance: Math.max(0.02 * Math.abs(parsed.num), 0.05),
          unit: parsed.unit,
          acceptable_answers: [String(parsed.num), String(parsed.num).replace('.', ','), correctOpt.trim()],
          hint: parsed.unit ? `Đơn vị: ${parsed.unit}` : undefined,
        }
      : {
          target_value: correctOpt.trim(),
          acceptable_answers: [correctOpt.trim(), correctOpt.trim().toLowerCase()],
        };

    return {
      ...q,
      question_type: 'short_answer',
      short_answer,
    };
  }

  return {
    ...q,
    question_type: 'multiple_choice',
  };
}

/**
 * Chuyển đổi bộ câu hỏi truyền thống thành bộ đề chuẩn cấu trúc Bộ GD&ĐT 2025
 */
export function adaptToFormat2025(questions: QuestionItem[]): QuestionItem[] {
  if (!questions || questions.length === 0) return [];

  const hasPredefinedTypes = questions.some((q) => q.question_type && q.question_type !== 'multiple_choice');
  if (hasPredefinedTypes) {
    return questions;
  }

  const total = questions.length;
  let part2Count = 4;
  let part3Count = 6;
  if (total <= 10) {
    part2Count = 2;
    part3Count = 2;
  } else if (total <= 15) {
    part2Count = 3;
    part3Count = 3;
  }

  const part1Count = Math.max(1, total - part2Count - part3Count);

  const sorted = [...questions].sort((a, b) => {
    const order: Record<string, number> = {
      nhan_biet: 1,
      thong_hieu: 2,
      van_dung: 3,
      van_dung_cao: 4,
    };
    return (order[a.difficulty] || 1) - (order[b.difficulty] || 1);
  });

  const part1Raw = sorted.slice(0, part1Count);
  const part2Raw = sorted.slice(part1Count, part1Count + part2Count);
  const part3Raw = sorted.slice(part1Count + part2Count);

  // 1. Phần I: Multiple choice
  const part1: QuestionItem[] = part1Raw.map((q, idx) => ({
    ...q,
    order_index: idx + 1,
    question_type: 'multiple_choice' as QuestionType,
  }));

  // 2. Phần II: True / False với các mệnh đề độc lập
  const part2: QuestionItem[] = part2Raw.map((q, idx) => ({
    ...q,
    order_index: part1Count + idx + 1,
    question_type: 'true_false' as QuestionType,
    tf_statements: generateIndependentTrueFalseStatements(q),
  }));

  // 3. Phần III: Short answer (Điền số)
  const part3: QuestionItem[] = part3Raw.map((q, idx) => {
    const correctOpt = q.options[q.correct_index] || '';
    const parsed = extractNumberAndUnit(correctOpt);

    let short_answer: ShortAnswerConfig;
    if (parsed) {
      short_answer = {
        target_value: parsed.num,
        tolerance: Math.max(0.02 * Math.abs(parsed.num), 0.05),
        unit: parsed.unit,
        acceptable_answers: [
          String(parsed.num),
          String(parsed.num).replace('.', ','),
          correctOpt.trim(),
        ],
        hint: parsed.unit ? `Đơn vị: ${parsed.unit}` : undefined,
      };
    } else {
      short_answer = {
        target_value: correctOpt.trim(),
        acceptable_answers: [correctOpt.trim(), correctOpt.trim().toLowerCase()],
      };
    }

    return {
      ...q,
      order_index: part1Count + part2Count + idx + 1,
      question_type: 'short_answer' as QuestionType,
      short_answer,
    };
  });

  return [...part1, ...part2, ...part3];
}

/**
 * Tính toán toàn bộ điểm số của đề thi theo cấu trúc Bộ GD&ĐT 2025
 */
export function calculateExamScore(
  questions: QuestionItem[],
  answers: Record<string | number, any>
): ExamScoreResult {
  let part1Score = 0;
  let part1Max = 0;
  let part2Score = 0;
  let part2Max = 0;
  let part3Score = 0;
  let part3Max = 0;
  const questionScores: Record<number, number> = {};

  for (const q of questions) {
    const type = q.question_type || 'multiple_choice';
    const userAns = answers[q.id] ?? answers[String(q.id)];

    if (type === 'multiple_choice') {
      part1Max += 1;
      if (userAns !== undefined && Number(userAns) === q.correct_index) {
        part1Score += 1;
        questionScores[q.id] = 1;
      } else {
        questionScores[q.id] = 0;
      }
    } else if (type === 'true_false') {
      part2Max += 1.0;
      if (q.tf_statements && q.tf_statements.length > 0) {
        const { score } = calculateTrueFalseScore(q.tf_statements, userAns || {});
        part2Score += score;
        questionScores[q.id] = score;
      } else {
        questionScores[q.id] = 0;
      }
    } else if (type === 'short_answer') {
      part3Max += 1.0;
      const { isCorrect } = checkShortAnswer(userAns, q.short_answer);
      if (isCorrect) {
        part3Score += 1.0;
        questionScores[q.id] = 1.0;
      } else {
        questionScores[q.id] = 0;
      }
    }
  }

  const totalScore = Math.round((part1Score + part2Score + part3Score) * 100) / 100;
  const maxScore = Math.round((part1Max + part2Max + part3Max) * 100) / 100;
  const scaledScore10 = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) / 10 : 0;

  return {
    totalScore,
    maxScore,
    scaledScore10,
    part1Score,
    part1Max,
    part2Score,
    part2Max,
    part3Score,
    part3Max,
    questionScores,
    partStats: {
      part1Count: part1Max,
      part2Count: Math.round(part2Max),
      part3Count: Math.round(part3Max),
    },
  };
}
