/**
 * HỆ THỐNG KHẢO THÍ THÍCH ỨNG THÔNG MINH (COMPUTERIZED ADAPTIVE TESTING - CAT THEO MÔ HÌNH IRT 3PL)
 * ---------------------------------------------------------------------------------------------------
 * Áp dụng Lý thuyết Ứng đáp Câu hỏi 3 Tham số (3-Parameter Logistic Item Response Theory - 3PL IRT):
 *   P(X = 1 | θ, a, b, c) = c + (1 - c) / (1 + exp(-D * a * (θ - b)))
 * trong đó:
 *   - θ (Theta) ∈ [-3.0, +3.0]: Năng lực tiềm ẩn của học sinh (Latent Ability)
 *   - b (Difficulty) ∈ [-2.5, +2.5]: Độ khó chuẩn hóa của câu hỏi
 *   - a (Discrimination) ∈ [0.85, 1.95]: Độ phân biệt năng lực của câu hỏi
 *   - c (Guessing) ∈ [0.02, 0.25]: Xác suất đoán mò trúng đáp án
 *   - D = 1.702: Hằng số tỉ lệ logistic chuẩn hóa
 *
 * Thuật toán chọn câu hỏi tiếp theo:
 *   - Cực đại hóa Hàm thông tin Fisher I(θ) kết hợp cân bằng nội dung chủ đề (Content Balancing)
 *   - Ước lượng năng lực hội tụ Bayesian EAP / Newton-Raphson MAP sau từng câu trả lời.
 */

import { DifficultyLevel, QuestionItem } from '@/types/cms';

export interface IrtParameters {
  a: number; // Độ phân loại (Discrimination: 0.85 -> 1.95)
  b: number; // Độ khó (Difficulty: -2.4 -> +2.4)
  c: number; // Hệ số đoán mò (Pseudo-guessing: 0.02 -> 0.25)
}

export interface CalibratedCatQuestion extends QuestionItem {
  irt: IrtParameters;
  topic_code?: string | null;
  topic_title?: string | null;
  chapter_code?: string | null;
  chapter_title?: string | null;
  grade_number?: number;
  empiricalWrongCount?: number;
}

export interface CatResponseStep {
  stepNumber: number;
  question: CalibratedCatQuestion;
  userAnswer: any;
  isCorrect: boolean;
  scoreRatio: number; // 0 -> 1
  thetaBefore: number;
  thetaAfter: number;
  thetaDelta: number;
  seAfter: number;
  confidencePct: number;
  predictedScore10: number;
  fisherInfoAtStep: number;
  adaptationReason: string;
}

export interface CatAbilityTier {
  id: 'foundation' | 'developing' | 'proficient' | 'advanced' | 'master';
  label: string;
  shortLabel: string;
  description: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}

const LOGISTIC_D = 1.702;

/**
 * Hiệu chuẩn (Calibrate) bộ 3 tham số IRT (a, b, c) cho một câu hỏi từ ngân hàng đề
 * dựa trên cấp độ khó chuẩn Bộ GD&ĐT, thứ tự câu hỏi (order_index 1..25) và lịch sử sai.
 */
export function calibrateQuestionIrt(
  q: QuestionItem & {
    empiricalWrongCount?: number;
  }
): IrtParameters {
  const order = Math.max(1, Math.min(25, q.order_index || 1));
  const wrongBoost = Math.min(0.35, (q.empiricalWrongCount || 0) * 0.07);

  // 1. Tính tham số độ khó b ∈ [-2.3, +2.4]
  let b = 0;
  if (q.difficulty === 'nhan_biet') {
    // order 1..10 -> -1.95 .. -0.75
    const pos = Math.min(1, Math.max(0, (order - 1) / 9));
    b = -1.95 + pos * 1.2 + wrongBoost * 0.5;
  } else if (q.difficulty === 'thong_hieu') {
    // order 11..17 -> -0.55 .. +0.45
    const pos = Math.min(1, Math.max(0, (order - 11) / 6));
    b = -0.55 + pos * 1.0 + wrongBoost * 0.6;
  } else if (q.difficulty === 'van_dung') {
    // order 18..22 -> +0.60 .. +1.50
    const pos = Math.min(1, Math.max(0, (order - 18) / 4));
    b = 0.6 + pos * 0.9 + wrongBoost * 0.7;
  } else {
    // van_dung_cao: order 23..25 -> +1.65 .. +2.35
    const pos = Math.min(1, Math.max(0, (order - 23) / 2));
    b = 1.65 + pos * 0.7 + wrongBoost * 0.6;
  }

  // Tinh chỉnh nhỏ nhưng tất định theo ID câu hỏi để các câu cùng bậc không bị trùng khít b
  const deterministicJitter = (((q.id * 37) % 19) - 9) * 0.015;
  b = Number(Math.max(-2.4, Math.min(2.45, b + deterministicJitter)).toFixed(2));
  if (Object.is(b, -0)) b = 0;

  // 2. Tính tham số độ phân loại a ∈ [0.95, 1.85]
  let baseA = 1.15;
  if (q.difficulty === 'nhan_biet') baseA = 1.05 + ((order % 4) * 0.04);
  else if (q.difficulty === 'thong_hieu') baseA = 1.3 + ((order % 4) * 0.05);
  else if (q.difficulty === 'van_dung') baseA = 1.52 + ((order % 3) * 0.07);
  else baseA = 1.68 + ((order % 3) * 0.06);

  if (q.question_type === 'true_false') baseA += 0.12;
  if (q.question_type === 'short_answer') baseA += 0.15;
  const a = Number(Math.max(0.9, Math.min(1.95, baseA)).toFixed(2));

  // 3. Tính tham số đoán mò c ∈ [0.02, 0.25]
  let c = 0.25; // Mặc định trắc nghiệm 4 lựa chọn A, B, C, D (xác suất đoán trúng 1/4 = 0.25)
  if (q.question_type === 'true_false') {
    c = 0.06; // Đúng/Sai 4 ý độc lập (1/16 = 0.0625)
  } else if (q.question_type === 'short_answer') {
    c = 0.02; // Điền số ngắn hầu như không thể đoán mò
  }

  return { a, b, c };
}

/**
 * Chuẩn bị toàn bộ ngân hàng câu hỏi thành danh sách câu hỏi đã hiệu chuẩn IRT
 */
export function calibrateQuestionPool(
  questions: Array<
    QuestionItem & {
      topic_code?: string | null;
      topic_title?: string | null;
      chapter_code?: string | null;
      chapter_title?: string | null;
      grade_number?: number;
      empiricalWrongCount?: number;
    }
  >
): CalibratedCatQuestion[] {
  return questions.map((q) => ({
    ...q,
    irt: calibrateQuestionIrt(q),
  }));
}

/**
 * Tính xác suất trả lời đúng P(θ) theo mô hình IRT 3PL
 */
export function irtProbability3PL(theta: number, irt: IrtParameters): number {
  const { a, b, c } = irt;
  const exponent = -LOGISTIC_D * a * (theta - b);
  const clampedExp = Math.max(-20, Math.min(20, exponent));
  const logistic = 1 / (1 + Math.exp(clampedExp));
  return c + (1 - c) * logistic;
}

/**
 * Tính lượng thông tin Fisher I(θ) của một câu hỏi tại mức năng lực θ.
 * Câu hỏi cung cấp lượng thông tin lớn nhất khi độ khó b gần sát với năng lực θ hiện tại của học sinh.
 */
export function irtFisherInformation(theta: number, irt: IrtParameters): number {
  const { a, c } = irt;
  const p = irtProbability3PL(theta, irt);
  const q = 1 - p;
  if (p <= c + 1e-6 || q <= 1e-6) return 0.001;

  const ratio = (p - c) / (1 - c);
  const info = Math.pow(LOGISTIC_D * a, 2) * (q / p) * Math.pow(ratio, 2);
  return Number(info.toFixed(4));
}

/**
 * Quy đổi năng lực θ ∈ [-3.0, +3.0] sang Điểm dự báo thang 10 (0.0 -> 10.0)
 */
export function thetaToScore10(theta: number): number {
  // Sử dụng hàm ánh xạ mượt có tâm tại θ = 0 tương ứng ~6.0 điểm
  // θ = -2.2 -> ~2.0đ, θ = -1.0 -> ~4.2đ, θ = 0.0 -> ~6.2đ, θ = +1.0 -> ~8.0đ, θ = +2.2 -> ~9.7đ
  const normalized = 1 / (1 + Math.exp(-0.92 * (theta + 0.22)));
  const score = Math.max(0.5, Math.min(10, normalized * 10.2 - 0.1));
  return Number(score.toFixed(1));
}

/**
 * Phân loại bậc năng lực học sinh từ chỉ số θ
 */
export function getAbilityTier(theta: number): CatAbilityTier {
  if (theta < -1.0) {
    return {
      id: 'foundation',
      label: 'Cần củng cố nền tảng (Nhận biết)',
      shortLabel: 'Cần củng cố',
      description: 'Bạn đang nắm một số khái niệm cơ bản nhưng dễ nhầm lẫn khi biến đổi công thức hoặc đổi đơn vị.',
      colorClass: 'text-rose-700',
      bgClass: 'bg-rose-50',
      borderClass: 'border-rose-200',
    };
  }
  if (theta < -0.1) {
    return {
      id: 'developing',
      label: 'Đạt mức Cơ bản (Nhận biết - Thông hiểu)',
      shortLabel: 'Mức Cơ bản',
      description: 'Bạn làm tốt các câu hỏi lý thuyết định tính và áp dụng công thức 1 bước trực tiếp.',
      colorClass: 'text-amber-700',
      bgClass: 'bg-amber-50',
      borderClass: 'border-amber-200',
    };
  }
  if (theta < 0.85) {
    return {
      id: 'proficient',
      label: 'Mức Khá vững (Thông hiểu - Vận dụng)',
      shortLabel: 'Khá vững',
      description: 'Bạn hiểu rõ bản chất hiện tượng Vật lý và giải quyết tốt các bài toán vận dụng tiêu chuẩn.',
      colorClass: 'text-brand-700',
      bgClass: 'bg-brand-50',
      borderClass: 'border-brand-200',
    };
  }
  if (theta < 1.65) {
    return {
      id: 'advanced',
      label: 'Mức Giỏi (Làm chủ Vận dụng)',
      shortLabel: 'Mức Giỏi',
      description: 'Tư duy phân tích hiện tượng và kỹ năng tính toán nhiều bước rất chắc chắn, sẵn sàng cho các câu phân loại.',
      colorClass: 'text-purple-700',
      bgClass: 'bg-purple-50',
      borderClass: 'border-purple-200',
    };
  }
  return {
    id: 'master',
    label: 'Xuất sắc • Chinh phục Vận dụng cao',
    shortLabel: 'Xuất sắc (VDC)',
    description: 'Bạn đạt ngưỡng năng lực đỉnh cao, xử lý nhạy bén các bài toán ghép nối hiện tượng và đồ thị phức tạp.',
    colorClass: 'text-emerald-700',
    bgClass: 'bg-emerald-50',
    borderClass: 'border-emerald-200',
  };
}

/**
 * Ước lượng năng lực θ bằng phương pháp Bayesian Expected A Posteriori (EAP) trên lưới tích phân rời rạc.
 * Phương pháp EAP cực kỳ ổn định ngay cả khi học sinh trả lời đúng hết hoặc sai hết ở những câu đầu!
 */
export function estimateAbilityEAP(
  history: Array<{ irt: IrtParameters; isCorrect: boolean; scoreRatio?: number }>,
  priorMean = 0.0,
  priorSd = 1.15
): {
  theta: number;
  standardError: number;
  confidencePct: number;
} {
  if (history.length === 0) {
    return {
      theta: priorMean,
      standardError: priorSd,
      confidencePct: 25,
    };
  }

  // Lưới tích phân 61 điểm từ -3.0 đến +3.0 (bước 0.1)
  const gridPoints: number[] = [];
  for (let t = -3.0; t <= 3.0001; t += 0.1) {
    gridPoints.push(Number(t.toFixed(2)));
  }

  const logWeights: number[] = gridPoints.map((theta) => {
    // Prior N(priorMean, priorSd^2)
    let logL = -0.5 * Math.pow((theta - priorMean) / priorSd, 2);

    for (const item of history) {
      const p = Math.max(1e-6, Math.min(1 - 1e-6, irtProbability3PL(theta, item.irt)));
      const weight =
        item.scoreRatio !== undefined ? item.scoreRatio : item.isCorrect ? 1.0 : 0.0;
      logL += weight * Math.log(p) + (1 - weight) * Math.log(1 - p);
    }
    return logL;
  });

  // Tránh tràn số dưới (underflow) bằng log-sum-exp trick
  const maxLog = Math.max(...logWeights);
  const weights = logWeights.map((lw) => Math.exp(lw - maxLog));
  const sumW = weights.reduce((acc, w) => acc + w, 0);

  let posteriorMean = 0;
  for (let i = 0; i < gridPoints.length; i++) {
    posteriorMean += (gridPoints[i] * weights[i]) / sumW;
  }

  let posteriorVar = 0;
  for (let i = 0; i < gridPoints.length; i++) {
    posteriorVar += (Math.pow(gridPoints[i] - posteriorMean, 2) * weights[i]) / sumW;
  }

  const se = Math.max(0.18, Math.min(priorSd, Math.sqrt(posteriorVar)));
  // Quy đổi sai số chuẩn SE sang % độ tin cậy (SE từ 1.15 -> 0.22 tương ứng 25% -> 96%)
  const rawConf = Math.round(100 - ((se - 0.18) / (priorSd - 0.18)) * 72);
  const stepBonus = Math.min(12, history.length * 1.2);
  const confidencePct = Math.max(25, Math.min(98, Math.round(rawConf + stepBonus)));

  return {
    theta: Number(Math.max(-2.8, Math.min(2.8, posteriorMean)).toFixed(2)),
    standardError: Number(se.toFixed(2)),
    confidencePct,
  };
}

/**
 * Xác định nhãn cấp độ khó mục tiêu dựa trên năng lực θ hiện tại
 */
export function getTargetDifficultyForTheta(theta: number): DifficultyLevel {
  if (theta < -0.65) return 'nhan_biet';
  if (theta < 0.35) return 'thong_hieu';
  if (theta < 1.35) return 'van_dung';
  return 'van_dung_cao';
}

const DIFF_VN: Record<DifficultyLevel, string> = {
  nhan_biet: 'Nhận biết',
  thong_hieu: 'Thông hiểu',
  van_dung: 'Vận dụng',
  van_dung_cao: 'Vận dụng cao',
};

/**
 * THUẬT TOÁN BỐC CÂU HỎI THÍCH ỨNG TIẾP THEO (MAXIMUM FISHER INFORMATION + CONTENT BALANCING)
 * --------------------------------------------------------------------------------------------
 * Chọn câu hỏi chưa làm có:
 * 1. Lượng thông tin Fisher I(θ) cao nhất tại mức năng lực θ hiện tại của học sinh.
 * 2. Ưu tiên nhảy bậc độ khó hợp lý (làm đúng câu trước -> bốc câu có b cao hơn; làm sai -> bốc câu có b thấp hơn).
 * 3. Cân bằng chủ đề (Content Balancing): Tránh lặp lại quá nhiều câu ở cùng 1 chủ đề nếu kho câu hỏi có nhiều chủ đề.
 */
export function selectNextCatQuestion(
  pool: CalibratedCatQuestion[],
  administeredIds: Set<number>,
  currentTheta: number,
  history: CatResponseStep[]
): {
  nextQuestion: CalibratedCatQuestion | null;
  selectionReason: string;
} {
  const candidates = pool.filter((q) => !administeredIds.has(q.id));
  if (candidates.length === 0) {
    return { nextQuestion: null, selectionReason: 'Đã hoàn thành toàn bộ câu hỏi trong kho.' };
  }

  // Đếm số câu đã hỏi theo từng topic_id để cân bằng nội dung
  const topicCounts = new Map<number, number>();
  for (const step of history) {
    const tid = step.question.topic_id || 0;
    topicCounts.set(tid, (topicCounts.get(tid) || 0) + 1);
  }

  const lastStep = history.length > 0 ? history[history.length - 1] : null;
  const targetDiff = getTargetDifficultyForTheta(currentTheta);

  let bestCandidate = candidates[0];
  let bestCompositeScore = -Infinity;

  for (const cand of candidates) {
    // 1. Điểm thông tin Fisher tại currentTheta
    const fisher = irtFisherInformation(currentTheta, cand.irt);

    // 2. Độ khớp khoảng cách |b - currentTheta|
    const distPenalty = Math.abs(cand.irt.b - currentTheta) * 0.45;

    // 3. Thưởng định hướng thích ứng (Step-up nếu câu trước đúng, Step-down nếu câu trước sai)
    let directionalBonus = 0;
    if (lastStep) {
      const prevB = lastStep.question.irt.b;
      if (lastStep.isCorrect && cand.irt.b > prevB) {
        // Ưu tiên câu khó hơn câu trước một khoảng vừa phải (+0.2 đến +1.1)
        const stepUp = cand.irt.b - prevB;
        directionalBonus = stepUp <= 1.25 ? 0.55 : 0.25;
      } else if (!lastStep.isCorrect && cand.irt.b < prevB) {
        // Ưu tiên câu dễ hơn câu trước để củng cố và tìm ngưỡng thực
        const stepDown = prevB - cand.irt.b;
        directionalBonus = stepDown <= 1.25 ? 0.55 : 0.25;
      }
    } else {
      // Câu đầu tiên (Anchor item): ưu tiên mức Thông hiểu / trung bình (b gần 0.0)
      if (cand.difficulty === 'thong_hieu') directionalBonus = 0.6;
    }

    // 4. Thưởng cân bằng chủ đề (ưu tiên chủ đề ít xuất hiện hơn và có gắn mã chủ đề cụ thể)
    const tid = cand.topic_id || 0;
    const usedCount = topicCounts.get(tid) || 0;
    const contentBalanceBonus =
      Math.max(0, 0.35 - usedCount * 0.14) + (cand.topic_code ? 0.18 : 0);

    const composite = fisher - distPenalty + directionalBonus + contentBalanceBonus;
    if (composite > bestCompositeScore) {
      bestCompositeScore = composite;
      bestCandidate = cand;
    }
  }

  // Tạo giải thích sư phạm vì sao hệ thống chọn câu hỏi này
  let selectionReason = '';
  if (!lastStep) {
    selectionReason = `Khởi động bài thi ở mức Trung bình (${DIFF_VN[bestCandidate.difficulty]}, độ khó b = ${bestCandidate.irt.b >= 0 ? '+' : ''}${bestCandidate.irt.b}) để định vị năng lực ban đầu.`;
  } else if (lastStep.isCorrect) {
    const deltaStr = `+${Math.abs(lastStep.thetaDelta).toFixed(2)}`;
    selectionReason = `Câu trước ĐÚNG (Năng lực tăng ${deltaStr} lên θ = ${currentTheta >= 0 ? '+' : ''}${currentTheta}) → Hệ thống nâng thử thách lên mức ${DIFF_VN[bestCandidate.difficulty]} (b = ${bestCandidate.irt.b >= 0 ? '+' : ''}${bestCandidate.irt.b}, độ phân loại a = ${bestCandidate.irt.a}).`;
  } else {
    const deltaStr = `-${Math.abs(lastStep.thetaDelta).toFixed(2)}`;
    selectionReason = `Câu trước SAI (Năng lực điều chỉnh ${deltaStr} về θ = ${currentTheta >= 0 ? '+' : ''}${currentTheta}) → Hệ thống điều chỉnh về mức ${DIFF_VN[bestCandidate.difficulty]} (b = ${bestCandidate.irt.b >= 0 ? '+' : ''}${bestCandidate.irt.b}) để kiểm tra độ vững nền tảng.`;
  }

  return {
    nextQuestion: bestCandidate,
    selectionReason,
  };
}
