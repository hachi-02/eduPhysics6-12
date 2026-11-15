import { describe, it, expect } from 'vitest';
import {
  calibrateQuestionPool,
  irtProbability3PL,
  irtFisherInformation,
  estimateAbilityEAP,
  selectNextCatQuestion,
  thetaToScore10,
  CatResponseStep,
} from '../lib/adaptive-cat';
import { QuestionItem } from '../types/cms';

function createMockQuestionPool(): QuestionItem[] {
  return Array.from({ length: 25 }, (_, i) => {
    const order = i + 1;
    const difficulty =
      order <= 10
        ? 'nhan_biet'
        : order <= 17
          ? 'thong_hieu'
          : order <= 22
            ? 'van_dung'
            : 'van_dung_cao';
    return {
      id: order,
      scope_type: 'topic',
      topic_id: (order % 3) + 1,
      chapter_id: 1,
      order_index: order,
      difficulty,
      question_text: `Câu hỏi thử nghiệm CAT số ${order}`,
      options: ['A', 'B', 'C', 'D'],
      correct_index: 0,
      explanation: `Giải thích câu ${order}`,
    };
  });
}

describe('Computerized Adaptive Testing (CAT) & IRT 3PL Engine', () => {
  it('calibrates monotonic difficulty b parameters across the 4 MOET difficulty levels', () => {
    const pool = calibrateQuestionPool(createMockQuestionPool());
    expect(pool.length).toBe(25);

    const nb = pool.filter((q) => q.difficulty === 'nhan_biet');
    const th = pool.filter((q) => q.difficulty === 'thong_hieu');
    const vd = pool.filter((q) => q.difficulty === 'van_dung');
    const vdc = pool.filter((q) => q.difficulty === 'van_dung_cao');

    const avgB = (arr: typeof pool) =>
      arr.reduce((s, x) => s + x.irt.b, 0) / arr.length;

    expect(avgB(nb)).toBeLessThan(avgB(th));
    expect(avgB(th)).toBeLessThan(avgB(vd));
    expect(avgB(vd)).toBeLessThan(avgB(vdc));
  });

  it('computes 3PL probability and maximizes Fisher Information near the item difficulty b', () => {
    const irt = { a: 1.5, b: 0.8, c: 0.25 };
    expect(irtProbability3PL(-3.0, irt)).toBeGreaterThanOrEqual(0.25);
    expect(irtProbability3PL(3.0, irt)).toBeGreaterThan(0.95);

    const infoNearB = irtFisherInformation(0.9, irt);
    const infoFarLow = irtFisherInformation(-2.5, irt);
    const infoFarHigh = irtFisherInformation(2.8, irt);

    expect(infoNearB).toBeGreaterThan(infoFarLow);
    expect(infoNearB).toBeGreaterThan(infoFarHigh);
  });

  it('increases student ability theta when answering correctly and steps up next question difficulty', () => {
    const pool = calibrateQuestionPool(createMockQuestionPool());
    const administered = new Set<number>();
    const history: CatResponseStep[] = [];

    // 1. Initial pick at theta = 0.0
    const firstPick = selectNextCatQuestion(pool, administered, 0.0, history);
    expect(firstPick.nextQuestion).not.toBeNull();
    const q1 = firstPick.nextQuestion!;
    administered.add(q1.id);

    // 2. Simulate student answering q1 CORRECTLY
    const est1 = estimateAbilityEAP([{ irt: q1.irt, isCorrect: true }]);
    expect(est1.theta).toBeGreaterThan(0.0);

    history.push({
      stepNumber: 1,
      question: q1,
      userAnswer: 0,
      isCorrect: true,
      scoreRatio: 1,
      thetaBefore: 0.0,
      thetaAfter: est1.theta,
      thetaDelta: est1.theta,
      seAfter: est1.standardError,
      confidencePct: est1.confidencePct,
      predictedScore10: thetaToScore10(est1.theta),
      fisherInfoAtStep: irtFisherInformation(0.0, q1.irt),
      adaptationReason: 'Correct',
    });

    // 3. Next question selected should be harder than q1 (b2 > b1)
    const secondPick = selectNextCatQuestion(pool, administered, est1.theta, history);
    expect(secondPick.nextQuestion).not.toBeNull();
    expect(secondPick.nextQuestion!.irt.b).toBeGreaterThan(q1.irt.b);
  });
});
