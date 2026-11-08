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
  // Bỏ bớt ký hiệu đáp án đầu dòng như A., B., C., D.
  const cleaned = text.replace(/^[A-D][.:)]\s*/i, '').trim();
  const match = cleaned.match(/([-+]?\d+(?:[.,]\d+)?)\s*([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\/°Ωμ²³%]+)?/);
  if (!match) return null;
  const num = parseFloat(match[1].replace(',', '.'));
  if (isNaN(num)) return null;
  const unit = match[2]?.trim() || '';
  return { num, unit };
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
      : Math.max(0.02 * Math.abs(targetNum), 0.05); // Dung sai 2% hoặc 0.05

    return {
      isCorrect: diff <= tolerance,
      difference: diff,
    };
  }

  // 3. So sánh chuỗi ký tự chính xác (cho câu trả lời lý thuyết ngắn)
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
 * Fisher-Yates shuffle
 */
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Chuyển đổi bộ câu hỏi truyền thống thành bộ đề chuẩn cấu trúc Bộ GD&ĐT 2025:
 * - Phần I: Trắc nghiệm 4 lựa chọn (câu 1..15)
 * - Phần II: Trắc nghiệm Đúng / Sai (câu 16..19, 4 câu × 4 ý a,b,c,d)
 * - Phần III: Trắc nghiệm Trả lời ngắn / Điền số (câu 20..25, 6 câu)
 */
export function adaptToFormat2025(questions: QuestionItem[]): QuestionItem[] {
  if (!questions || questions.length === 0) return [];

  // Nếu câu hỏi đã có sẵn question_type thì giữ nguyên
  const hasPredefinedTypes = questions.some((q) => q.question_type && q.question_type !== 'multiple_choice');
  if (hasPredefinedTypes) {
    return questions;
  }

  const total = questions.length;
  // Xác định số lượng cho từng phần tùy theo tổng số câu
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

  // Phân bổ câu hỏi:
  // Phần 1: Ưu tiên câu Nhận biết & Thông hiểu
  // Phần 2: Ưu tiên câu Thông hiểu & Vận dụng
  // Phần 3: Ưu tiên câu Vận dụng & Vận dụng cao (bài toán tính toán)
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

  // 1. Xử lý Phần I: Multiple choice
  const part1: QuestionItem[] = part1Raw.map((q, idx) => ({
    ...q,
    order_index: idx + 1,
    question_type: 'multiple_choice' as QuestionType,
  }));

  // 2. Xử lý Phần II: True / False (4 ý a, b, c, d)
  const letterIds = ['a', 'b', 'c', 'd'];
  const part2: QuestionItem[] = part2Raw.map((q, idx) => {
    const correctOpt = q.options[q.correct_index] || '';
    const distractors = q.options.filter((_, oIdx) => oIdx !== q.correct_index);

    // Tạo 4 nhận định: 1 nhận định đúng và 3 nhận định sai (dựa vào options)
    const rawStatements: { text: string; is_correct: boolean; explanation?: string }[] = [
      { text: correctOpt, is_correct: true, explanation: 'Nhận định chính xác theo lý thuyết/công thức.' },
      ...distractors.map((dist) => ({
        text: dist,
        is_correct: false,
        explanation: 'Nhận định sai hoặc chưa đầy đủ.',
      })),
    ];

    // Xáo trộn 4 ý để 'Đúng' không luôn ở ý a
    const shuffledSts = shuffle(rawStatements);
    const tf_statements: TrueFalseStatement[] = shuffledSts.map((st, sIdx) => ({
      id: letterIds[sIdx] || `item_${sIdx}`,
      text: st.text,
      is_correct: st.is_correct,
      explanation: st.explanation,
    }));

    return {
      ...q,
      order_index: part1Count + idx + 1,
      question_type: 'true_false' as QuestionType,
      tf_statements,
    };
  });

  // 3. Xử lý Phần III: Short answer (Điền số)
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
      // Trường hợp không trích được số, dùng từ khóa đáp án đúng
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
 * Phân loại định dạng của câu hỏi theo chuẩn format 2025:
 * - 'short_answer': Bài toán tính toán có số liệu (thường là Vận dụng / Vận dụng cao)
 * - 'true_false': Câu hỏi nhận định, bản chất hiện tượng (Thông hiểu / Vận dụng)
 * - 'multiple_choice': Câu hỏi nhận biết, khái niệm đơn thuần
 */
export function classifyQuestionFormat(q: QuestionItem): QuestionType {
  if (q.question_type) return q.question_type;
  const correctOpt = q.options[q.correct_index] || '';
  const parsed = extractNumberAndUnit(correctOpt);
  if (parsed && (q.difficulty === 'van_dung' || q.difficulty === 'van_dung_cao')) {
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
    const distractors = q.options.filter((_, idx) => idx !== q.correct_index);
    const rawStatements = [
      { text: correctOpt, is_correct: true, explanation: 'Nhận định chính xác.' },
      ...distractors.map((d) => ({ text: d, is_correct: false, explanation: 'Nhận định chưa chính xác.' })),
    ];
    const letterIds = ['a', 'b', 'c', 'd'];
    const tf_statements: TrueFalseStatement[] = rawStatements.map((st, idx) => ({
      id: letterIds[idx] || `item_${idx}`,
      text: st.text,
      is_correct: st.is_correct,
      explanation: st.explanation,
    }));
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
