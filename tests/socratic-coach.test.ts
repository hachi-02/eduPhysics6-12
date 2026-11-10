import { describe, it, expect } from 'vitest';
import { buildSocraticCoachSession } from '../lib/socratic-coach';
import { getSocraticCoachHubData, getSocraticSessionForQuestion } from '../lib/cms-service';
import { SocraticQuestionItem } from '../types/cms';

describe('Feature 5: Socratic AI Physics Coach (Local Pedagogical Engine)', () => {
  it('generates a 3-step Socratic scaffold for a Thermodynamics Gas Law question', () => {
    const thermoQuestion: SocraticQuestionItem = {
      id: 101,
      scope_type: 'topic',
      topic_id: 1,
      chapter_id: 1,
      order_index: 0,
      difficulty: 'thong_hieu',
      question_text: 'Một bình kín cứng chứa khí lí tưởng ở 27 °C và 1 atm. Đun nóng khí đến 127 °C. Tính áp suất trong bình.',
      options: ['1.33 atm', '4.7 atm', '2 atm', '0.75 atm'],
      correct_index: 0,
      explanation: 'Vì bình kín cứng nên thể tích V = const (đẳng tích). Áp dụng định luật Charles: p1/T1 = p2/T2. Với T1 = 300 K, T2 = 400 K => p2 = 1 * 400 / 300 = 1.33 atm.',
      grade_number: 12,
      chapter_code: 'G12-CH2',
      chapter_title: 'Khí lí tưởng',
      topic_code: 'G12-CH2-TP2',
      topic_title: 'Các định luật chất khí',
    };

    const session = buildSocraticCoachSession(thermoQuestion);
    expect(session.steps.length).toBe(3);

    // Step 1: Boundary condition
    expect(session.steps[0].level).toBe(1);
    expect(session.steps[0].prompt).toContain('quá trình biến đổi');
    expect(session.steps[0].options.some((o) => o.isCorrect)).toBe(true);

    // Step 2: Core physical law
    expect(session.steps[1].level).toBe(2);
    expect(session.steps[1].options.some((o) => o.text.includes('Charles') && o.isCorrect)).toBe(true);

    // Step 3: Calculation & Trap defense (Kelvin conversion)
    expect(session.steps[2].level).toBe(3);
    expect(session.steps[2].options.some((o) => o.text.includes('Kelvin') && o.isCorrect)).toBe(true);

    expect(session.finalResolution.length).toBeGreaterThan(20);
    expect(session.masteryTakeaway.length).toBeGreaterThan(15);
  });

  it('generates a 3-step Socratic scaffold for an Oscillations & Waves question', () => {
    const waveQuestion: SocraticQuestionItem = {
      id: 202,
      scope_type: 'topic',
      topic_id: 2,
      chapter_id: 2,
      order_index: 1,
      difficulty: 'thong_hieu',
      question_text: 'Một sóng cơ truyền trên mặt nước với tần số f = 50 Hz và bước sóng λ = 40 cm. Tính tốc độ truyền sóng v.',
      options: ['20 m/s', '2000 m/s', '0.8 m/s', '1.25 m/s'],
      correct_index: 0,
      explanation: 'Tốc độ truyền sóng: v = λ · f = 0.4 m · 50 Hz = 20 m/s. Chú ý đổi 40 cm = 0.4 m.',
      grade_number: 11,
      chapter_code: 'G11-CH2',
      chapter_title: 'Sóng',
      topic_code: 'G11-CH2-TP1',
      topic_title: 'Mô tả sóng',
    };

    const session = buildSocraticCoachSession(waveQuestion);
    expect(session.steps.length).toBe(3);
    expect(session.steps[1].options.some((o) => o.text.includes('v = λ · f') && o.isCorrect)).toBe(true);
    expect(session.steps[2].options.some((o) => o.text.includes('đơn vị mét (m)') && o.isCorrect)).toBe(true);
  });

  it('generates a 3-step Socratic scaffold for an Electricity Ohm law question', () => {
    const elecQuestion: SocraticQuestionItem = {
      id: 303,
      scope_type: 'topic',
      topic_id: 3,
      chapter_id: 3,
      order_index: 2,
      difficulty: 'thong_hieu',
      question_text: 'Đặt hiệu điện thế U = 12 V vào hai đầu đoạn mạch gồm R1 = 10 Ω mắc nối tiếp với R2 = 20 Ω. Tính cường độ dòng điện I.',
      options: ['0.4 A', '1.2 A', '3.6 A', '0.6 A'],
      correct_index: 0,
      explanation: 'Mắc nối tiếp nên Rtđ = R1 + R2 = 30 Ω. Cường độ dòng điện: I = U / Rtđ = 12 / 30 = 0.4 A.',
      grade_number: 9,
      chapter_code: 'G9-CH1',
      chapter_title: 'Điện học',
      topic_code: 'G9-CH1-TP2',
      topic_title: 'Đoạn mạch nối tiếp',
    };

    const session = buildSocraticCoachSession(elecQuestion);
    expect(session.steps.length).toBe(3);
    expect(session.steps[0].options.some((o) => o.text.includes('nối tiếp') && o.isCorrect)).toBe(true);
    expect(session.steps[1].options.some((o) => o.text.includes('I = U / R') && o.isCorrect)).toBe(true);
  });

  it('ensures every step in Socratic scaffold has exactly 1 correct option and helpful feedback', () => {
    const generalQuestion: SocraticQuestionItem = {
      id: 404,
      scope_type: 'topic',
      topic_id: 4,
      chapter_id: 4,
      order_index: 3,
      difficulty: 'thong_hieu',
      question_text: 'Một vật chuyển động thẳng biến đổi đều với gia tốc a = 2 m/s² từ trạng thái nghỉ. Tính quãng đường đi sau 4 giây.',
      options: ['16 m', '8 m', '32 m', '4 m'],
      correct_index: 0,
      explanation: 's = v0*t + 0.5*a*t² = 0 + 0.5 * 2 * 16 = 16 m.',
      grade_number: 10,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'G10-CH2-TP3',
      topic_title: 'Chuyển động biến đổi đều',
    };

    const session = buildSocraticCoachSession(generalQuestion);
    for (const step of session.steps) {
      const correctOpts = step.options.filter((o) => o.isCorrect);
      expect(correctOpts.length).toBe(1);
      expect(step.prompt.length).toBeGreaterThan(10);
      expect(step.hintIfStuck.length).toBeGreaterThan(10);
      for (const opt of step.options) {
        expect(opt.text.length).toBeGreaterThan(5);
        expect(opt.feedback.length).toBeGreaterThan(10);
      }
    }
  });

  it('loads real questions via getSocraticCoachHubData and builds valid sessions', () => {
    const data = getSocraticCoachHubData();
    expect(data.questions.length).toBeGreaterThan(0);
    expect(data.chapters.length).toBeGreaterThan(0);

    // Pick first 5 questions and verify Socratic scaffolds
    const sample = data.questions.slice(0, 5);
    for (const q of sample) {
      const session = buildSocraticCoachSession(q);
      expect(session.questionId).toBe(q.id);
      expect(session.steps.length).toBe(3);
    }
  });

  it('fetches a single Socratic session by ID via getSocraticSessionForQuestion', () => {
    const data = getSocraticCoachHubData();
    const firstQId = data.questions[0].id;

    const session = getSocraticSessionForQuestion(firstQId);
    expect(session).toBeDefined();
    expect(session?.questionId).toBe(firstQId);
    expect(session?.steps.length).toBe(3);
  });
});
