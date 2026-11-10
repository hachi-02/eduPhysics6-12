import { describe, it, expect } from 'vitest';
import {
  ALL_TRAP_TYPES,
  COGNITIVE_TRAP_REGISTRY,
  detectCognitiveTrap,
  calculateTrapMatrixStats,
} from '../lib/cognitive-traps';
import { getCognitiveTrapMatrixData } from '../lib/cms-service';

describe('Feature 4: Cognitive Trap Matrix & Misconception Taxonomy', () => {
  it('defines all 6 cognitive trap categories with full metadata', () => {
    expect(ALL_TRAP_TYPES.length).toBe(6);
    for (const trap of ALL_TRAP_TYPES) {
      const meta = COGNITIVE_TRAP_REGISTRY[trap];
      expect(meta).toBeDefined();
      expect(meta.name.length).toBeGreaterThan(0);
      expect(meta.icon.length).toBeGreaterThan(0);
      expect(meta.remedyTip.length).toBeGreaterThan(10);
      expect(meta.examplesSummary.length).toBeGreaterThan(5);
    }
  });

  it('detects TRAP_UNIT for factor-of-1000 mass or factor-of-100 distance errors', () => {
    const unitQuestion = {
      question_text: 'Một vật có khối lượng m = 500 g chuyển động với gia tốc a = 2 m/s². Tính lực F tác dụng.',
      options: ['1 N', '1000 N', '0.5 N', '250 N'],
      correct_index: 0,
      explanation: 'F = m · a = 0.5 kg · 2 m/s² = 1 N. Chú ý đổi 500 g = 0.5 kg!',
    };

    // User picked 1000 N (forgot to convert 500 g to 0.5 kg, calculated 500 * 2 = 1000 N)
    const result = detectCognitiveTrap(unitQuestion, 1);
    expect(result.trapType).toBe('TRAP_UNIT');
    expect(result.confidence).toBeGreaterThan(0.8);
    expect(result.diagnosis).toContain('gram sang kilôgam');
  });

  it('detects TRAP_SIGN for opposing sign in First Law of Thermodynamics or vector motion', () => {
    const signQuestion = {
      question_text: 'Một khối khí trong xi lanh nhận công 600 J và truyền ra môi trường nhiệt lượng 670 J. Tính độ biến thiên nội năng ΔU.',
      options: ['-70 J', '70 J', '1270 J', '-1270 J'],
      correct_index: 0,
      explanation: 'ΔU = A + Q = 600 + (-670) = -70 J. Khí nhận công nên A > 0, truyền nhiệt nên Q < 0.',
    };

    // User picked 70 J (inverted sign error)
    const result = detectCognitiveTrap(signQuestion, 1);
    expect(result.trapType).toBe('TRAP_SIGN');
    expect(result.confidence).toBeGreaterThan(0.85);
    expect(result.diagnosis).toContain('dấu');
  });

  it('detects TRAP_KEYWORD for negation stems asking for incorrect statements', () => {
    const keywordQuestion = {
      question_text: 'Phát biểu nào sau đây là KHÔNG ĐÚNG khi nói về sóng âm?',
      options: [
        'Sóng âm truyền được trong chân không',
        'Sóng âm là sóng cơ học',
        'Tốc độ truyền âm trong chất rắn thường lớn hơn trong chất lỏng',
        'Âm nghe được có tần số từ 16 Hz đến 20000 Hz',
      ],
      correct_index: 0,
      explanation: 'Sóng âm không truyền được trong chân không vì không có hạt vật chất để truyền dao động.',
    };

    const result = detectCognitiveTrap(keywordQuestion, 1);
    expect(result.trapType).toBe('TRAP_KEYWORD');
    expect(result.diagnosis).toContain('KHÔNG ĐÚNG');
  });

  it('detects TRAP_INTUITION for everyday misconceptions', () => {
    const intuitionQuestion = {
      question_text: 'Trong ống Newton hút hết không khí (chân không), thả đồng thời một hòn bi sắt và một sợi lông vũ từ cùng độ cao thì vật nào chạm đáy trước?',
      options: [
        'Cả hai chạm đáy cùng một lúc',
        'Hòn bi sắt chạm đáy trước vì nặng hơn',
        'Sợi lông vũ chạm đáy trước',
        'Không thể xác định được',
      ],
      correct_index: 0,
      explanation: 'Trong chân không, cả hai vật đều rơi tự do với cùng gia tốc g nên chạm đáy cùng lúc. Trực giác nghĩ vật nặng rơi nhanh hơn là do sức cản không khí trong đời sống.',
    };

    const result = detectCognitiveTrap(intuitionQuestion, 1);
    expect(result.trapType).toBe('TRAP_INTUITION');
    expect(result.diagnosis).toContain('trực giác');
  });

  it('detects TRAP_CONDITION for isothermal / boundary condition violations', () => {
    const conditionQuestion = {
      question_text: 'Định luật Boyle (p1.V1 = p2.V2) được áp dụng trong điều kiện nào sau đây của khối khí lý tưởng?',
      options: [
        'Nhiệt độ của khối khí được giữ không đổi (Đẳng nhiệt)',
        'Áp suất của khối khí được giữ không đổi',
        'Thể tích của khối khí được giữ không đổi',
        'Bất kỳ điều kiện nhiệt độ nào',
      ],
      correct_index: 0,
      explanation: 'Định luật Boyle chỉ nghiệm đúng cho quá trình đẳng nhiệt.',
    };

    const result = detectCognitiveTrap(conditionQuestion, 3);
    expect(result.trapType).toBe('TRAP_CONDITION');
    expect(result.diagnosis).toContain('điều kiện');
  });

  it('calculates aggregate trap stats, dominant trap and 6-axis radar values', () => {
    const sampleMistakes = [
      {
        question_text: 'Một vật có khối lượng m = 500 g chuyển động với a = 2 m/s². Tính lực F.',
        options: ['1 N', '1000 N', '0.5 N', '250 N'],
        correct_index: 0,
        last_wrong_option: 1,
      },
      {
        question_text: 'Một khối khí nhận công 600 J và truyền nhiệt 670 J. Tính ΔU.',
        options: ['-70 J', '70 J', '1270 J', '-1270 J'],
        correct_index: 0,
        last_wrong_option: 1,
      },
      {
        question_text: 'Một vật nhận công 100 J, tỏa nhiệt 50 J. Tính ΔU.',
        options: ['50 J', '-50 J', '150 J', '-150 J'],
        correct_index: 0,
        last_wrong_option: 1,
      },
      {
        question_text: 'Phát biểu nào là không đúng về con lắc đơn?',
        options: ['A', 'B', 'C', 'D'],
        correct_index: 0,
        last_wrong_option: 1,
      },
    ];

    const stats = calculateTrapMatrixStats(sampleMistakes);
    expect(stats.totalAnalyzed).toBe(4);
    expect(stats.dominantTrap).toBe('TRAP_SIGN'); // 2 sign errors
    expect(stats.trapCounts.TRAP_SIGN).toBe(2);
    expect(stats.trapCounts.TRAP_UNIT).toBe(1);
    expect(stats.trapCounts.TRAP_KEYWORD).toBe(1);
    expect(stats.radarValues.length).toBe(6);
    expect(stats.immunityScore).toBeGreaterThanOrEqual(20);
    expect(stats.immunityScore).toBeLessThanOrEqual(100);
  });

  it('loads getCognitiveTrapMatrixData from cms service without errors', () => {
    const data = getCognitiveTrapMatrixData();
    expect(data).toBeDefined();
    expect(Array.isArray(data.mistakes)).toBe(true);
    expect(data.mistakes.length).toBeGreaterThan(0);
    expect(data.mistakes[0].question_text).toBeDefined();
    expect(data.mistakes[0].options.length).toBe(4);
  });

  it('supports chapter-level filtering and correctly calculates chapter-specific trap stats', () => {
    const data = getCognitiveTrapMatrixData();
    const chapterIds = Array.from(new Set(data.mistakes.map((m) => m.chapter_id).filter(Boolean)));
    expect(chapterIds.length).toBeGreaterThan(0);

    const firstChapterId = chapterIds[0];
    const chapterMistakes = data.mistakes.filter((m) => m.chapter_id === firstChapterId);
    const chapterStats = calculateTrapMatrixStats(chapterMistakes);

    expect(chapterStats.totalAnalyzed).toBe(chapterMistakes.length);
    expect(chapterStats.radarValues.length).toBe(6);
    expect(chapterStats.immunityScore).toBeGreaterThanOrEqual(20);
    expect(chapterStats.immunityScore).toBeLessThanOrEqual(100);
  });
});
