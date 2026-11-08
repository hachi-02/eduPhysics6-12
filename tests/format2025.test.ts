import { describe, it, expect } from 'vitest';
import {
  extractNumberAndUnit,
  checkShortAnswer,
  calculateTrueFalseScore,
  adaptToFormat2025,
  calculateExamScore,
  isPureNumericOptions,
  generateIndependentTrueFalseStatements,
  classifyQuestionFormat,
} from '../lib/format2025-adapter';
import { QuestionItem } from '../types/cms';

describe('Format 2025 Adapter & Scoring Engine', () => {
  it('correctly extracts numbers and units from various formats', () => {
    expect(extractNumberAndUnit('12.5 m/s')).toEqual({ num: 12.5, unit: 'm/s' });
    expect(extractNumberAndUnit('A. 25,4 N')).toEqual({ num: 25.4, unit: 'N' });
    expect(extractNumberAndUnit('-10 J')).toEqual({ num: -10, unit: 'J' });
    expect(extractNumberAndUnit('100%')).toEqual({ num: 100, unit: '%' });
    expect(extractNumberAndUnit('không có số')).toBeNull();
  });

  it('validates short answers with tolerance and units', () => {
    const config = { target_value: 20, tolerance: 0.5, unit: 'm/s' };
    expect(checkShortAnswer('20', config).isCorrect).toBe(true);
    expect(checkShortAnswer('20.3', config).isCorrect).toBe(true);
    expect(checkShortAnswer('21.0', config).isCorrect).toBe(false);
    expect(checkShortAnswer(undefined, config).isCorrect).toBe(false);
  });

  it('applies the official MOET 2025 True/False progressive scoring rubric', () => {
    const statements = [
      { id: 'a', text: 'St A', is_correct: true },
      { id: 'b', text: 'St B', is_correct: false },
      { id: 'c', text: 'St C', is_correct: true },
      { id: 'd', text: 'St D', is_correct: false },
    ];

    // 0 correct
    expect(calculateTrueFalseScore(statements, { a: false, b: true, c: false, d: true })).toEqual({
      score: 0,
      correctCount: 0,
    });

    // 1 correct -> 0.1 pt
    expect(calculateTrueFalseScore(statements, { a: true, b: true, c: false, d: true })).toEqual({
      score: 0.1,
      correctCount: 1,
    });

    // 2 correct -> 0.25 pt
    expect(calculateTrueFalseScore(statements, { a: true, b: false, c: false, d: true })).toEqual({
      score: 0.25,
      correctCount: 2,
    });

    // 3 correct -> 0.5 pt
    expect(calculateTrueFalseScore(statements, { a: true, b: false, c: true, d: true })).toEqual({
      score: 0.5,
      correctCount: 3,
    });

    // 4 correct -> 1.0 pt
    expect(calculateTrueFalseScore(statements, { a: true, b: false, c: true, d: false })).toEqual({
      score: 1.0,
      correctCount: 4,
    });
  });

  it('adapts a standard 25-question array into 3 sections (MC, TF, ShortAnswer)', () => {
    const mockQuestions: QuestionItem[] = Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      scope_type: 'topic',
      topic_id: 1,
      chapter_id: 1,
      order_index: i + 1,
      difficulty: i < 10 ? 'nhan_biet' : i < 18 ? 'thong_hieu' : 'van_dung',
      question_text: `Câu hỏi kiểm tra ${i + 1}`,
      options: ['10 m/s', '20 m/s', '30 m/s', '40 m/s'],
      correct_index: 0,
      explanation: 'Lời giải chi tiết',
    }));

    const adapted = adaptToFormat2025(mockQuestions);
    expect(adapted.length).toBe(25);

    const part1 = adapted.filter((q) => q.question_type === 'multiple_choice');
    const part2 = adapted.filter((q) => q.question_type === 'true_false');
    const part3 = adapted.filter((q) => q.question_type === 'short_answer');

    expect(part1.length).toBe(15);
    expect(part2.length).toBe(4);
    expect(part3.length).toBe(6);

    // Verify part2 items have 4 statements each
    for (const q of part2) {
      expect(q.tf_statements).toBeDefined();
      expect(q.tf_statements?.length).toBe(4);
    }

    // Verify part3 items have short_answer configuration
    for (const q of part3) {
      expect(q.short_answer).toBeDefined();
      expect(q.short_answer?.target_value).toBeDefined();
    }
  });

  it('computes complete exam score across all 3 sections', () => {
    const questions: QuestionItem[] = [
      {
        id: 1,
        scope_type: 'topic',
        topic_id: 1,
        chapter_id: 1,
        order_index: 1,
        difficulty: 'nhan_biet',
        question_type: 'multiple_choice',
        question_text: 'Q1',
        options: ['A', 'B', 'C', 'D'],
        correct_index: 0,
        explanation: '',
      },
      {
        id: 2,
        scope_type: 'topic',
        topic_id: 1,
        chapter_id: 1,
        order_index: 2,
        difficulty: 'thong_hieu',
        question_type: 'true_false',
        question_text: 'Q2',
        options: [],
        correct_index: 0,
        explanation: '',
        tf_statements: [
          { id: 'a', text: 'A', is_correct: true },
          { id: 'b', text: 'B', is_correct: false },
          { id: 'c', text: 'C', is_correct: true },
          { id: 'd', text: 'D', is_correct: false },
        ],
      },
      {
        id: 3,
        scope_type: 'topic',
        topic_id: 1,
        chapter_id: 1,
        order_index: 3,
        difficulty: 'van_dung',
        question_type: 'short_answer',
        question_text: 'Q3',
        options: [],
        correct_index: 0,
        explanation: '',
        short_answer: { target_value: 15, tolerance: 0.1, unit: 'm/s' },
      },
    ];

    const answers = {
      1: 0, // MC correct -> 1.0 pt
      2: { a: true, b: false, c: false, d: false }, // TF: 3 correct -> 0.5 pt
      3: '15.0', // Short answer correct -> 1.0 pt
    };

    const res = calculateExamScore(questions, answers);
    expect(res.part1Score).toBe(1);
    expect(res.part2Score).toBe(0.5);
    expect(res.part3Score).toBe(1);
    expect(res.totalScore).toBe(2.5);
    expect(res.maxScore).toBe(3);
  });

  it('differentiates pure numeric options from qualitative questions with numbers', () => {
    // Pure numeric options -> true
    expect(isPureNumericOptions(['60 cm³', '20 cm³', '30 cm³', '15 cm³'])).toBe(true);
    expect(isPureNumericOptions(['10 m/s', '20 m/s', '30 m/s', '40 m/s'])).toBe(true);

    // Qualitative options containing numbers in text -> false
    const qualitativeOpts = [
      'Đặt trực tiếp sợi dây lên vạch thước để ước lượng bằng mắt',
      'Gập đôi sợi dây lại để đo',
      'Quấn chặt 20 vòng dây đồng sát nhau quanh thân bút chì rồi đo',
      'Đo chiều dài sợi dây rồi chia cho 100',
    ];
    expect(isPureNumericOptions(qualitativeOpts)).toBe(false);

    // Ensure qualitative question is not classified as short_answer
    const qualitativeQ: QuestionItem = {
      id: 2,
      scope_type: 'topic',
      topic_id: 1,
      chapter_id: 1,
      order_index: 2,
      difficulty: 'van_dung',
      question_text: 'Muốn đo đường kính của một sợi dây đồng...',
      options: qualitativeOpts,
      correct_index: 2,
      explanation: 'Giải thích',
    };
    expect(classifyQuestionFormat(qualitativeQ)).not.toBe('short_answer');
  });

  it('generates independent True/False statements with natural True/False distribution', () => {
    const q: QuestionItem = {
      id: 10,
      scope_type: 'topic',
      topic_id: 1,
      chapter_id: 1,
      order_index: 1,
      difficulty: 'thong_hieu',
      question_text: 'Một vật chuyển động thẳng đều...',
      options: [
        'Vận tốc không đổi theo thời gian',
        'Gia tốc luôn khác 0',
        'Quãng đường tỉ lệ nghịch với thời gian',
        'Vận tốc tăng dần đều',
      ],
      correct_index: 0,
      explanation: 'Trong chuyển động thẳng đều thì v không đổi',
    };

    const statements = generateIndependentTrueFalseStatements(q);
    expect(statements.length).toBe(4);
    expect(statements.map((s) => s.id)).toEqual(['a', 'b', 'c', 'd']);

    const trueCount = statements.filter((s) => s.is_correct).length;
    const falseCount = statements.filter((s) => !s.is_correct).length;

    // Must NOT be trivially 1 True and 3 False
    // It should have independent propositions with an authentic mix (e.g. 2 True, 2 False)
    expect(trueCount).toBeGreaterThan(1);
    expect(falseCount).toBeGreaterThan(0);
  });
});
