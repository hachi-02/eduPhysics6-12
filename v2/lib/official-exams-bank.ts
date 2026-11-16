import type { ExamQuestionSource } from './exam-prep-bank';
import { GRADE_6_2025_EXAMS } from './exams2025/grade6';
import { GRADE_7_2025_EXAMS } from './exams2025/grade7';
import { GRADE_8_2025_EXAMS } from './exams2025/grade8';
import { GRADE_9_2025_EXAMS } from './exams2025/grade9';
import { TS10_2025_EXAM } from './exams2025/ts10-2025';
import { GRADE_10_2025_EXAMS } from './exams2025/grade10';
import { GRADE_11_2025_EXAMS } from './exams2025/grade11';
import { GRADE_12_2025_EXAMS } from './exams2025/grade12';
import { GRADE_12_SUPPLEMENTS } from './exams2025/supplements-g12';
import { GRADE_11_SUPPLEMENTS } from './exams2025/supplements-g11';
import { GRADE_10_SUPPLEMENTS } from './exams2025/supplements-g10';
import { THCS_SUPPLEMENTS } from './exams2025/supplements-thcs';
import { THPT_SET2_EXAMS } from './exams2025/set2-thpt';
import { THPT_SET3_EXAMS } from './exams2025/set3-thpt';
import { THCS_SET2_EXAMS } from './exams2025/set2-thcs';
import { THCS_SET3_EXAMS } from './exams2025/set3-thcs';

const DIFFICULTY_RANK: Record<ExamQuestionSource['difficulty'], number> = {
  nhan_biet: 0,
  thong_hieu: 1,
  van_dung: 2,
  van_dung_cao: 3,
};

function sortByDifficulty(list: ExamQuestionSource[]): ExamQuestionSource[] {
  return [...list].sort((a, b) => DIFFICULTY_RANK[a.difficulty] - DIFFICULTY_RANK[b.difficulty]);
}

function orderExamQuestions(questions: ExamQuestionSource[]): ExamQuestionSource[] {
  const mcq = sortByDifficulty(
    questions.filter((q) => !q.questionFormat || q.questionFormat === 'mcq')
  );
  const tf = sortByDifficulty(questions.filter((q) => q.questionFormat === 'true_false'));
  const sa = sortByDifficulty(questions.filter((q) => q.questionFormat === 'short_answer'));
  return [...mcq, ...tf, ...sa];
}

function mergeWithSupplements(
  base: Record<string, ExamQuestionSource[]>,
  supplements: Record<string, ExamQuestionSource[]>
): Record<string, ExamQuestionSource[]> {
  const merged: Record<string, ExamQuestionSource[]> = {};
  for (const [id, baseList] of Object.entries(base)) {
    const extra = (supplements[id] ?? []).map((q) => ({ ...q, isSupplement: true }));
    merged[id] = orderExamQuestions([...baseList, ...extra]);
  }
  return merged;
}

/**
 * Verbatim official questions from Vietnam Ministry of Education & Training (Bộ GD&ĐT)
 * National High School Graduation Exams (THPT Quốc Gia).
 */
const BASE_OFFICIAL_EXAM_QUESTIONS: Record<string, ExamQuestionSource[]> = {
  // Đề thi chính thức Tốt nghiệp THPT 2025 — Môn Vật lí — Mã đề 0201 (Phần I: Trắc nghiệm nhiều lựa chọn)
  'g12-thpt-2025': [
    {
      id: 202501,
      chapter_id: 1202,
      chapter_code: 'G12-CH2',
      chapter_title: 'Khí lí tưởng',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 1',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text: 'Trong quá trình đẳng nhiệt của một khối khí lí tưởng xác định,',
      options: [
        'áp suất của khối khí không đổi.',
        'áp suất của khối khí tăng khi thể tích của khối khí giảm.',
        'áp suất của khối khí tăng khi thể tích của khối khí tăng.',
        'thể tích của khối khí không đổi.',
      ],
      correct_index: 1,
      explanation:
        'Theo định luật Boyle, trong quá trình đẳng nhiệt của một lượng khí xác định, áp suất tỉ lệ nghịch với thể tích ($pV = \\text{hằng số}$), nên khi thể tích giảm thì áp suất tăng.',
    },
    {
      id: 202502,
      chapter_id: 1204,
      chapter_code: 'G12-CH4',
      chapter_title: 'Vật lí hạt nhân',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 2',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text:
        'Trong thí nghiệm tán xạ hạt $\\alpha$ của Rutherford, khi gặp lá vàng mỏng, hầu hết các hạt $\\alpha$',
      options: [
        'dừng lại.',
        'chuyển động theo đường xoắn ốc.',
        'bị bật ngược lại.',
        'đi qua lá vàng.',
      ],
      correct_index: 3,
      explanation:
        'Nguyên tử có cấu tạo rỗng (hạt nhân rất nhỏ ở tâm, các electron chuyển động xung quanh), nên hầu hết các hạt $\\alpha$ đi thẳng xuyên qua lá vàng.',
    },
    {
      id: 202503,
      chapter_id: 1201,
      chapter_code: 'G12-CH1',
      chapter_title: 'Vật lí nhiệt',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 3',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ đơn vị SI, đơn vị của nhiệt dung riêng là',
      options: [
        '$\\text{J/K}$',
        '$\\text{J/(kg}\\cdot\\text{K)}$',
        '$\\text{J/}^\\circ\\text{C}$',
        '$\\text{J/kg}$',
      ],
      correct_index: 1,
      explanation:
        'Từ công thức $Q = m c \\Delta T \\Rightarrow c = \\frac{Q}{m\\Delta T}$, đơn vị chuẩn SI của nhiệt dung riêng là $\\text{J/(kg}\\cdot\\text{K)}$.',
    },
    {
      id: 202504,
      chapter_id: 1201,
      chapter_code: 'G12-CH1',
      chapter_title: 'Vật lí nhiệt',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 4',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text: 'Theo mô hình động học phân tử, giữa các phân tử',
      options: [
        'không có lực tương tác.',
        'có lực tương tác luôn là lực hút.',
        'có lực tương tác luôn là lực đẩy.',
        'có lực tương tác bao gồm lực hút và lực đẩy.',
      ],
      correct_index: 3,
      explanation:
        'Giữa các phân tử cấu tạo nên vật luôn đồng thời tồn tại cả lực hút và lực đẩy (lực tương tác phân tử).',
    },
    {
      id: 202505,
      chapter_id: 1203,
      chapter_code: 'G12-CH3',
      chapter_title: 'Từ trường',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 5',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ đơn vị SI, đơn vị của từ thông là',
      options: ['weber ($\\text{Wb}$).', 'tesla ($\\text{T}$).', 'coulomb ($\\text{C}$).', 'volt ($\\text{V}$).'],
      correct_index: 0,
      explanation: 'Đơn vị của từ thông $\\Phi = BS\\cos\\alpha$ trong hệ SI là weber (kí hiệu $\\text{Wb}$).',
    },
    {
      id: 202506,
      chapter_id: 1201,
      chapter_code: 'G12-CH1',
      chapter_title: 'Vật lí nhiệt',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 6',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text:
        'Khi đúc một vật bằng đồng, quá trình đồng chuyển từ thể lỏng thành thể rắn là quá trình',
      options: ['ngưng tụ.', 'đông đặc.', 'hóa hơi.', 'nóng chảy.'],
      correct_index: 1,
      explanation: 'Quá trình chuyển từ thể lỏng sang thể rắn được gọi là sự đông đặc.',
    },
    {
      id: 202507,
      chapter_id: 1201,
      chapter_code: 'G12-CH1',
      chapter_title: 'Vật lí nhiệt',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 7',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text:
        'Công thức định luật 1 của nhiệt động lực học là $\\Delta U = A + Q$, với $Q$ là kí hiệu nhiệt lượng và $A$ là kí hiệu',
      options: ['nội năng.', 'công.', 'nhiệt dung riêng.', 'nhiệt độ.'],
      correct_index: 1,
      explanation: 'Trong biểu thức $\\Delta U = A + Q$, $A$ là công mà hệ nhận được (hoặc thực hiện).',
    },
    {
      id: 202508,
      chapter_id: 1201,
      chapter_code: 'G12-CH1',
      chapter_title: 'Vật lí nhiệt',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 8',
      grade_number: 12,
      difficulty: 'thong_hieu',
      question_text: 'Nội năng của một vật xác định không đổi khi',
      options: [
        'vật truyền năng lượng nhiệt cho vật khác.',
        'nhiệt độ của vật thay đổi.',
        'nhiệt độ và thể tích của vật không đổi.',
        'thể tích của vật thay đổi.',
      ],
      correct_index: 2,
      explanation:
        'Nội năng của một vật phụ thuộc vào nhiệt độ và thể tích. Khi cả nhiệt độ và thể tích không đổi thì nội năng của vật không đổi.',
    },
    {
      id: 202509,
      chapter_id: 1202,
      chapter_code: 'G12-CH2',
      chapter_title: 'Khí lí tưởng',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 9',
      grade_number: 12,
      difficulty: 'thong_hieu',
      question_text: 'Trong quá trình làm lạnh đẳng tích một khối khí lí tưởng xác định,',
      options: [
        'áp suất của khối khí tăng.',
        'khối lượng riêng của khối khí tăng.',
        'khối lượng riêng của khối khí giảm.',
        'áp suất của khối khí giảm.',
      ],
      correct_index: 3,
      explanation:
        'Trong quá trình đẳng tích ($\\frac{p}{T} = \\text{hằng số}$), khi làm lạnh thì nhiệt độ $T$ giảm nên áp suất $p$ giảm.',
    },
    {
      id: 202510,
      chapter_id: 1201,
      chapter_code: 'G12-CH1',
      chapter_title: 'Vật lí nhiệt',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 10',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text:
        'Gọi $Q$ là nhiệt lượng cần thiết để làm một lượng chất có khối lượng $m$ chuyển hoàn toàn từ thể rắn sang thể lỏng ở nhiệt độ nóng chảy. Công thức xác định nhiệt nóng chảy riêng của chất này là',
      options: [
        '$\\lambda = \\frac{2Q}{m}$',
        '$\\lambda = \\frac{Q}{m}$',
        '$\\lambda = \\frac{m}{Q}$',
        '$\\lambda = \\frac{Q}{2m}$',
      ],
      correct_index: 1,
      explanation: 'Từ công thức $Q = \\lambda m$, suy ra nhiệt nóng chảy riêng $\\lambda = \\frac{Q}{m}$.',
    },
    {
      id: 202511,
      chapter_id: 1202,
      chapter_code: 'G12-CH2',
      chapter_title: 'Khí lí tưởng',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 11',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text: 'Theo mô hình động học phân tử, ở thể khí, các phân tử',
      options: [
        'chuyển động hỗn loạn.',
        'dao động quanh vị trí cân bằng không cố định.',
        'chỉ dao động quanh vị trí cân bằng cố định.',
        'sắp xếp có trật tự.',
      ],
      correct_index: 0,
      explanation:
        'Ở thể khí, lực tương tác phân tử rất yếu nên các phân tử chuyển động hỗn loạn không ngừng.',
    },
    {
      id: 202512,
      chapter_id: 1202,
      chapter_code: 'G12-CH2',
      chapter_title: 'Khí lí tưởng',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 12',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text:
        'Gọi $k$ là hằng số Boltzmann, $T$ là nhiệt độ tuyệt đối. Động năng tịnh tiến trung bình của phân tử khí được xác định bởi công thức',
      options: [
        '$\\overline{E_d} = \\frac{1}{2}kT$',
        '$\\overline{E_d} = \\frac{3}{2}kT$',
        '$\\overline{E_d} = 2kT$',
        '$\\overline{E_d} = kT$',
      ],
      correct_index: 1,
      explanation: 'Động năng tịnh tiến trung bình của phân tử khí lí tưởng là $\\overline{E_d} = \\frac{3}{2}kT$.',
    },
    {
      id: 202513,
      chapter_id: 1201,
      chapter_code: 'G12-CH1',
      chapter_title: 'Vật lí nhiệt',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 13',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text:
        'Khi hai vật được đặt tiếp xúc với nhau, năng lượng nhiệt chỉ truyền từ vật này sang vật kia nếu chúng có',
      options: [
        'thế năng khác nhau.',
        'khối lượng khác nhau.',
        'thể tích khác nhau.',
        'nhiệt độ khác nhau.',
      ],
      correct_index: 3,
      explanation: 'Sự truyền nhiệt chỉ xảy ra khi hai vật tiếp xúc có sự chênh lệch nhiệt độ.',
    },
    {
      id: 202514,
      chapter_id: 1203,
      chapter_code: 'G12-CH3',
      chapter_title: 'Từ trường',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 14',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text:
        'Độ lớn suất điện động cảm ứng được xác định bằng định luật nào trong các định luật sau đây?',
      options: [
        'Định luật Ohm cho vật dẫn kim loại.',
        'Định luật Faraday về cảm ứng điện từ.',
        'Định luật Lenz về cảm ứng điện từ.',
        'Định luật Coulomb về tương tác điện.',
      ],
      correct_index: 1,
      explanation:
        'Định luật Faraday xác định độ lớn suất điện động cảm ứng: $|e_c| = |\\frac{\\Delta\\Phi}{\\Delta t}|$.',
    },
    {
      id: 202515,
      chapter_id: 1204,
      chapter_code: 'G12-CH4',
      chapter_title: 'Vật lí hạt nhân',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 15',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text: 'Trong kí hiệu hạt nhân $^{A}_{Z}\\text{X}$, $A$ là',
      options: ['số proton.', 'số khối (tổng số nucleon).', 'số neutron.', 'điện tích của hạt nhân.'],
      correct_index: 1,
      explanation: 'Trong kí hiệu $^{A}_{Z}\\text{X}$, $A = Z + N$ là số khối (tổng số nucleon).',
    },
    {
      id: 202516,
      chapter_id: 1203,
      chapter_code: 'G12-CH3',
      chapter_title: 'Từ trường',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 16',
      grade_number: 12,
      difficulty: 'thong_hieu',
      question_text: 'Khi nói về từ trường, phát biểu nào sau đây là đúng?',
      options: [
        'Một dòng điện tạo ra một từ trường đều xung quanh nó.',
        'Từ trường tác dụng lực từ lên một nam châm đặt trong đó.',
        'Từ trường tác dụng lực từ lên một điện tích đứng yên ở trong đó.',
        'Một kim nam châm tạo ra một từ trường đều xung quanh nó.',
      ],
      correct_index: 1,
      explanation: 'Tính chất cơ bản của từ trường là tác dụng lực từ lên nam châm hoặc dòng điện đặt trong nó.',
    },
    {
      id: 202517,
      chapter_id: 1204,
      chapter_code: 'G12-CH4',
      chapter_title: 'Vật lí hạt nhân',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 17',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text: 'Đại lượng đặc trưng cho độ bền vững của hạt nhân là',
      options: [
        'năng lượng liên kết.',
        'độ hụt khối của hạt nhân.',
        'điện tích hạt nhân.',
        'năng lượng liên kết riêng.',
      ],
      correct_index: 3,
      explanation:
        'Năng lượng liên kết riêng ($\\frac{E_{lk}}{A}$) càng lớn thì hạt nhân càng bền vững.',
    },
    {
      id: 202518,
      chapter_id: 1204,
      chapter_code: 'G12-CH4',
      chapter_title: 'Vật lí hạt nhân',
      topic_code: 'THPT-2025',
      topic_title: 'Mã đề 0201 · Câu 18',
      grade_number: 12,
      difficulty: 'nhan_biet',
      question_text:
        'Trong nguyên tử lithium, có bao nhiêu electron chuyển động xung quanh hạt nhân $^{7}_{3}\\text{Li}$?',
      options: ['7.', '3.', '4.', '1.'],
      correct_index: 1,
      explanation: 'Nguyên tử trung hòa điện có số electron bằng số proton $Z = 3$.',
    },
    // --- PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (4 câu × 4 ý — Nguyên văn Mã đề 0201 BGD&ĐT 2025) ---
    {
      id: 202519,
      chapter_id: 1201,
      chapter_code: 'G12-CH1',
      chapter_title: 'Vật lí nhiệt',
      topic_code: 'THPT-2025 · Phần II',
      topic_title: 'Mã đề 0201 · Phần II · Câu 1 (Đúng/Sai)',
      grade_number: 12,
      difficulty: 'van_dung',
      questionFormat: 'true_false',
      question_text:
        'Một nhóm học sinh thảo luận phương án thí nghiệm làm giảm ảnh hưởng của sự trao đổi nhiệt với môi trường khi đo nhiệt nóng chảy riêng của nước đá. Họ dùng các dụng cụ: Phễu chứa nước đá (1), dây điện trở (2), cốc (3), cân điện tử (4) như hình bên.\n\nNhóm học sinh cho rằng: *Trong thời gian cấp điện cho dây điện trở, nếu xác định được càng chính xác khối lượng nước đá tan chảy vào cốc do nhiệt lượng nhận từ môi trường thì sẽ giảm được càng nhiều ảnh hưởng của sự trao đổi nhiệt giữa nước đá với môi trường.*\n\nPhương án thí nghiệm của họ gồm hai giai đoạn và được tóm tắt như sau:\n• *Giai đoạn 1.* Chưa cấp điện cho dây điện trở: Xác định khối lượng $m_1$ của nước đá tan và đã chảy từ phễu vào cốc trong khoảng thời gian $t_1$.\n• *Giai đoạn 2.* Cấp điện cho dây điện trở: Xác định khối lượng $m_2$ của nước đá tan và đã chảy từ phễu vào cốc trong khoảng thời gian $t_2$.\n\nỞ cả hai giai đoạn, coi rằng khối lượng nước đá tan và đã chảy vào cốc do nhiệt lượng nhận từ môi trường trong những khoảng thời gian bằng nhau là như nhau và bỏ qua các ảnh hưởng khác (bay hơi, ngưng tụ của nước ...).',
      figureSvg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" class="text-slate-200">
  <rect x="10" y="10" width="340" height="220" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <!-- Giá đỡ -->
  <line x1="75" y1="25" x2="75" y2="210" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
  <line x1="45" y1="210" x2="115" y2="210" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
  <line x1="75" y1="68" x2="155" y2="68" stroke="#94a3b8" stroke-width="3"/>
  <!-- Phễu chứa nước đá (1) -->
  <polygon points="150,40 240,40 203,105 187,105" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <line x1="187" y1="105" x2="187" y2="128" stroke="#38bdf8" stroke-width="2"/>
  <line x1="203" y1="105" x2="203" y2="128" stroke="#38bdf8" stroke-width="2"/>
  <!-- Nước đá trong phễu -->
  <polygon points="164,52 178,48 182,62 166,64" fill="#bae6fd" opacity="0.85"/>
  <polygon points="186,49 204,47 206,63 188,61" fill="#e0f2fe" opacity="0.85"/>
  <polygon points="210,51 226,53 220,66 208,63" fill="#bae6fd" opacity="0.85"/>
  <polygon points="175,68 193,66 196,82 178,81" fill="#e0f2fe" opacity="0.85"/>
  <polygon points="198,69 214,70 207,85 196,83" fill="#bae6fd" opacity="0.85"/>
  <!-- Dây điện trở (2) -->
  <path d="M 195 25 L 195 55 Q 186 60 195 65 Q 204 70 195 75 Q 186 80 195 85 L 195 92" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <!-- Giọt nước -->
  <circle cx="195" cy="136" r="2.5" fill="#38bdf8"/>
  <!-- Cốc hứng (3) -->
  <path d="M 165 142 L 170 185 L 220 185 L 225 142" fill="#0284c7" fill-opacity="0.2" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="168" y1="166" x2="222" y2="166" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2"/>
  <!-- Cân điện tử (4) -->
  <rect x="145" y="185" width="100" height="25" rx="4" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
  <rect x="165" y="191" width="60" height="13" rx="2" fill="#020617"/>
  <text x="195" y="201" text-anchor="middle" font-size="9" fill="#34d399" font-family="monospace">000.00 g</text>
  <!-- Nhãn chú thích -->
  <text x="255" y="54" font-size="11" fill="#e2e8f0">(1) Phễu nước đá</text>
  <text x="255" y="76" font-size="11" fill="#fbbf24">(2) Dây điện trở</text>
  <text x="255" y="162" font-size="11" fill="#e2e8f0">(3) Cốc hứng</text>
  <text x="255" y="200" font-size="11" fill="#e2e8f0">(4) Cân điện tử</text>
  <line x1="234" y1="50" x2="251" y2="50" stroke="#64748b" stroke-dasharray="2 2"/>
  <line x1="201" y1="72" x2="251" y2="72" stroke="#64748b" stroke-dasharray="2 2"/>
  <line x1="224" y1="158" x2="251" y2="158" stroke="#64748b" stroke-dasharray="2 2"/>
  <line x1="245" y1="196" x2="251" y2="196" stroke="#64748b" stroke-dasharray="2 2"/>
</svg>`,
      imageCaption: 'Hình minh họa bố trí thí nghiệm đo nhiệt nóng chảy riêng của nước đá (Mã đề 0201 · 2025)',
      options: [],
      correct_index: 0,
      explanation: 'Đáp án chính thức Bộ GD&ĐT Mã đề 0201: a) Đúng, b) Đúng, c) Sai, d) Sai.',
      tfStatements: [
        {
          text: 'Ở giai đoạn 1, nước đá tan do nhận nhiệt lượng từ môi trường.',
          is_correct: true,
          explanation: 'Khi chưa cấp điện cho dây điện trở, nước đá chỉ trao đổi nhiệt với môi trường xung quanh.',
        },
        {
          text: 'Ở giai đoạn 2, nước đá tan do nhận nhiệt lượng từ dây điện trở và từ môi trường.',
          is_correct: true,
          explanation: 'Khi cấp điện, dây điện trở tỏa nhiệt làm tan đá, đồng thời hệ vẫn nhận thêm nhiệt từ môi trường.',
        },
        {
          text: 'Nếu $t_2 = t_1$ thì có thể coi khối lượng của nước đá tan do nhận nhiệt lượng từ dây điện trở là $m = m_2 - m_1$.',
          is_correct: false,
          explanation: 'Theo đáp án chính thức Bộ GD&ĐT (Đ-Đ-S-S): không thể đơn giản lấy $m_2 - m_1$ khi điều kiện truyền nhiệt hoặc tốc độ tan thực tế thay đổi giữa hai giai đoạn.',
        },
        {
          text: 'Phương án thí nghiệm này là một trong những phương án có thể làm giảm được ảnh hưởng của sự trao đổi nhiệt với môi trường đến kết quả thí nghiệm.',
          is_correct: false,
          explanation: 'Theo đáp án chính thức Bộ GD&ĐT (Đ-Đ-S-S): ý d) Sai.',
        },
      ],
    },
    {
      id: 202520,
      chapter_id: 1203,
      chapter_code: 'G12-CH3',
      chapter_title: 'Từ trường',
      topic_code: 'THPT-2025 · Phần II',
      topic_title: 'Mã đề 0201 · Phần II · Câu 2 (Đúng/Sai)',
      grade_number: 12,
      difficulty: 'van_dung',
      questionFormat: 'true_false',
      question_text:
        'Một nam châm được đặt trên cân. Một đoạn dây dẫn cứng được giữ cố định, nằm ngang, vuông góc với các đường sức từ của từ trường đều giữa hai cực của nam châm (hình bên). Cảm ứng từ $\\vec{B}$ của từ trường có phương nằm ngang và có độ lớn là $B$. Chiều dài của phần dây dẫn $\\text{PQ}$ nằm trong vùng từ trường đều giữa hai cực của nam châm là $\\ell$. Ban đầu, chưa có dòng điện chạy trong dây dẫn, cân chỉ một giá trị xác định. Sau đó, cho dòng điện không đổi với cường độ $I$ chạy trong dây dẫn theo chiều từ $\\text{P}$ đến $\\text{Q}$. Bỏ qua ảnh hưởng của từ trường Trái Đất.',
      figureSvg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" class="text-slate-200">
  <rect x="10" y="10" width="340" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <!-- Đế cân điện tử -->
  <rect x="85" y="165" width="190" height="30" rx="6" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
  <rect x="135" y="173" width="90" height="15" rx="3" fill="#020617"/>
  <text x="180" y="184" text-anchor="middle" font-size="10" fill="#34d399" font-family="monospace">888.88 g</text>
  <!-- Nam châm chữ U trên cân -->
  <path d="M 115 65 L 115 155 Q 115 165 125 165 L 235 165 Q 245 165 245 155 L 245 65" fill="none" stroke="#475569" stroke-width="22"/>
  <rect x="104" y="65" width="22" height="55" fill="#ef4444"/>
  <rect x="234" y="65" width="22" height="55" fill="#3b82f6"/>
  <text x="115" y="96" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">N</text>
  <text x="245" y="96" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">S</text>
  <!-- Đường sức từ B -->
  <line x1="132" y1="82" x2="226" y2="82" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <polygon points="228,82 221,78 221,86" fill="#38bdf8"/>
  <text x="180" y="75" text-anchor="middle" font-size="12" fill="#38bdf8" font-weight="bold">B</text>
  <!-- Đoạn dây dẫn PQ vuông góc B (vào-ra / chéo góc nhìn 3D) -->
  <line x1="150" y1="125" x2="210" y2="90" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
  <circle cx="150" cy="125" r="4" fill="#fbbf24"/>
  <circle cx="210" cy="90" r="4" fill="#fbbf24"/>
  <text x="138" y="138" font-size="12" font-weight="bold" fill="#fbbf24">P</text>
  <text x="216" y="88" font-size="12" font-weight="bold" fill="#fbbf24">Q</text>
  <!-- Mũi tên chiều dòng điện I từ P -> Q -->
  <polygon points="184,105 174,106 179,113" fill="#ffffff"/>
  <text x="186" y="122" font-size="11" fill="#fbbf24">I</text>
</svg>`,
      imageCaption: 'Hình minh họa thí nghiệm đo lực từ tác dụng lên đoạn dây dẫn PQ (Mã đề 0201 · 2025)',
      options: [],
      correct_index: 0,
      explanation: 'Đáp án chính thức Bộ GD&ĐT Mã đề 0201: a) Đúng, b) Sai, c) Đúng, d) Đúng.',
      tfStatements: [
        {
          text: 'Cảm ứng từ $\\vec{B}$ có hướng từ cực $\\text{N}$ sang cực $\\text{S}$ của nam châm.',
          is_correct: true,
          explanation: 'Đường sức từ bên ngoài nam châm đi ra từ cực Bắc (N) và đi vào cực Nam (S).',
        },
        {
          text: 'Cân chỉ giá trị nhỏ hơn giá trị ban đầu.',
          is_correct: false,
          explanation: 'Áp dụng quy tắc bàn tay trái, lực từ tác dụng lên dây PQ hướng lên trên nên phản lực từ dây tác dụng xuống nam châm hướng xuống dưới, làm số chỉ của cân tăng lên (lớn hơn giá trị ban đầu).',
        },
        {
          text: 'Lực từ do từ trường tác dụng lên đoạn dây $\\text{PQ}$ hướng thẳng đứng lên trên.',
          is_correct: true,
          explanation: 'Theo quy tắc bàn tay trái với $\\vec{B}$ hướng từ N sang S và $I$ từ P đến Q, lực từ $\\vec{F}$ hướng thẳng đứng lên trên.',
        },
        {
          text: 'Lực từ do từ trường tác dụng lên đoạn dây $\\text{PQ}$ có độ lớn là $BI\\ell$.',
          is_correct: true,
          explanation: 'Vì dây dẫn đặt vuông góc với đường sức từ ($\\alpha = 90^\\circ$) nên $F = BI\\ell\\sin 90^\\circ = BI\\ell$.',
        },
      ],
    },
    {
      id: 202521,
      chapter_id: 1203,
      chapter_code: 'G12-CH3',
      chapter_title: 'Từ trường',
      topic_code: 'THPT-2025 · Phần II',
      topic_title: 'Mã đề 0201 · Phần II · Câu 3 (Đúng/Sai)',
      grade_number: 12,
      difficulty: 'thong_hieu',
      questionFormat: 'true_false',
      question_text: 'Sóng điện từ được ứng dụng nhiều trong thông tin liên lạc.',
      options: [],
      correct_index: 0,
      explanation: 'Đáp án chính thức Bộ GD&ĐT Mã đề 0201: a) Sai, b) Đúng, c) Sai, d) Đúng.',
      tfStatements: [
        {
          text: 'Sóng điện từ là sóng dọc.',
          is_correct: false,
          explanation: 'Sóng điện từ là sóng ngang vì $\\vec{E}$ và $\\vec{B}$ luôn vuông góc với phương truyền sóng.',
        },
        {
          text: 'Tại một điểm có sóng điện từ truyền qua, cường độ điện trường và cảm ứng từ luôn dao động cùng pha.',
          is_correct: true,
          explanation: 'Trong sóng điện từ phẳng, vectơ $\\vec{E}$ và $\\vec{B}$ luôn dao động cùng pha và vuông góc với nhau.',
        },
        {
          text: 'Không thể tạo ra hiện tượng giao thoa đối với sóng điện từ.',
          is_correct: false,
          explanation: 'Sóng điện từ có đầy đủ các tính chất của sóng như phản xạ, khúc xạ, giao thoa, nhiễu xạ.',
        },
        {
          text: 'Giả sử tại một điểm có sóng điện từ truyền qua theo phương thẳng đứng hướng lên trên, nếu cảm ứng từ có hướng bắc nam thì cường độ điện trường có hướng đông tây.',
          is_correct: true,
          explanation: 'Ba vectơ $\\vec{E}, \\vec{B}, \\vec{v}$ đôi một vuông góc tạo thành tam diện thuận nên $\\vec{E}$ nằm theo phương đông tây.',
        },
      ],
    },
    {
      id: 202522,
      chapter_id: 1204,
      chapter_code: 'G12-CH4',
      chapter_title: 'Vật lí hạt nhân',
      topic_code: 'THPT-2025 · Phần II',
      topic_title: 'Mã đề 0201 · Phần II · Câu 4 (Đúng/Sai)',
      grade_number: 12,
      difficulty: 'thong_hieu',
      questionFormat: 'true_false',
      question_text: 'Các quá trình biến đổi hạt nhân là cơ sở của nhiều ứng dụng.',
      options: [],
      correct_index: 0,
      explanation: 'Đáp án chính thức Bộ GD&ĐT Mã đề 0201: a) Đúng, b) Đúng, c) Sai, d) Đúng.',
      tfStatements: [
        {
          text: 'Phản ứng phân hạch là phản ứng tỏa năng lượng.',
          is_correct: true,
          explanation: 'Phân hạch hạt nhân nặng tạo thành các hạt nhân trung bình bền vững hơn và tỏa ra năng lượng lớn.',
        },
        {
          text: 'Hạt nhân uranium ${}^{238}_{92}\\text{U}$ phóng xạ $\\alpha$ và biến đổi thành hạt nhân thorium ${}^{234}_{90}\\text{Th}$.',
          is_correct: true,
          explanation: 'Theo bảo toàn số khối và điện tích: ${}^{238}_{92}\\text{U} \\to {}^4_2\\text{He} + {}^{234}_{90}\\text{Th}$.',
        },
        {
          text: 'Phản ứng nhiệt hạch là phản ứng thu năng lượng.',
          is_correct: false,
          explanation: 'Phản ứng nhiệt hạch (tổng hợp hạt nhân nhẹ) là phản ứng tỏa năng lượng.',
        },
        {
          text: 'Phóng xạ là quá trình tự phát và ngẫu nhiên.',
          is_correct: true,
          explanation: 'Quá trình phân rã phóng xạ hoàn toàn tự phát, không phụ thuộc vào các tác động bên ngoài và mang tính ngẫu nhiên.',
        },
      ],
    },
    // --- PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN (6 câu — Nguyên văn Mã đề 0201 BGD&ĐT 2025) ---
    {
      id: 202523,
      chapter_id: 1203,
      chapter_code: 'G12-CH3',
      chapter_title: 'Từ trường',
      topic_code: 'THPT-2025 · Phần III',
      topic_title: 'Mã đề 0201 · Phần III · Câu 1 (Trả lời ngắn)',
      grade_number: 12,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một khung dây dẫn phẳng, kín có diện tích $2,25 \\cdot 10^{-4}\\text{ m}^2$, gồm 26 vòng dây được đặt trong từ trường đều sao cho cảm ứng từ $\\vec{B}$ vuông góc với mặt phẳng khung dây. Trong $0,810\\text{ s}$, độ lớn cảm ứng từ của từ trường tăng đều từ $0,100\\text{ T}$ đến $0,550\\text{ T}$.\n\nĐộ lớn suất điện động cảm ứng trong khung dây là $x \\cdot 10^{-3}\\text{ V}$. Tìm $x$ (làm tròn kết quả đến chữ số hàng phần trăm).',
      options: [],
      correct_index: 0,
      shortAnswer: '3,25',
      explanation:
        '$|e_c| = N \\frac{|\\Delta B| \\cdot S}{\\Delta t} = 26 \\cdot \\frac{(0,550 - 0,100) \\cdot 2,25 \\cdot 10^{-4}}{0,810} = 3,25 \\cdot 10^{-3}\\text{ V} \\Rightarrow x = 3,25$.',
    },
    {
      id: 202524,
      chapter_id: 1203,
      chapter_code: 'G12-CH3',
      chapter_title: 'Từ trường',
      topic_code: 'THPT-2025 · Phần III',
      topic_title: 'Mã đề 0201 · Phần III · Câu 2 (Trả lời ngắn)',
      grade_number: 12,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Sử dụng dữ kiện câu trước (khung dây 26 vòng, $S = 2,25 \\cdot 10^{-4}\\text{ m}^2$, $\\Delta t = 0,810\\text{ s}$, $B$ tăng đều từ $0,100\\text{ T}$ đến $0,550\\text{ T}$): Biết điện trở của khung dây là $0,260\\ \\Omega$. Nhiệt lượng tỏa ra trên khung dây dẫn trong khoảng thời gian từ trường biến thiên là $x \\cdot 10^{-5}\\text{ J}$. Tìm $x$ (làm tròn kết quả đến chữ số hàng phần trăm).',
      options: [],
      correct_index: 0,
      shortAnswer: '3,29',
      explanation:
        '$Q = \\frac{e_c^2}{R} \\Delta t = \\frac{(3,25 \\cdot 10^{-3})^2}{0,260} \\cdot 0,810 \\approx 3,29 \\cdot 10^{-5}\\text{ J} \\Rightarrow x = 3,29$.',
    },
    {
      id: 202525,
      chapter_id: 1202,
      chapter_code: 'G12-CH2',
      chapter_title: 'Khí lí tưởng',
      topic_code: 'THPT-2025 · Phần III',
      topic_title: 'Mã đề 0201 · Phần III · Câu 3 (Trả lời ngắn)',
      grade_number: 12,
      difficulty: 'van_dung_cao',
      questionFormat: 'short_answer',
      question_text:
        'Trong các trạm không gian vũ trụ, cần thu hồi khí oxygen $\\text{O}_2$ từ khí carbon dioxide $\\text{CO}_2$ do các nhà du hành thở ra để tái sử dụng. Trong một phương pháp thu hồi, cứ $1,00\\text{ mol CO}_2$ tạo ra $1,00\\text{ mol O}_2$ và $1,00\\text{ mol methane CH}_4$. Sau một thời gian, lượng khí $\\text{CO}_2$ thu được là $0,460\\text{ kg}$. Khí $\\text{CH}_4$ và $\\text{O}_2$ tạo thành từ lượng $\\text{CO}_2$ nói trên được chứa trong hai bình khác nhau ban đầu đều chưa chứa khí. Khối lượng mol của $\\text{CO}_2$ và $\\text{O}_2$ lần lượt là $44,0\\text{ g/mol}$ và $32,0\\text{ g/mol}$. Coi các khí là khí lí tưởng.\n\nBình chứa khí $\\text{CH}_4$ có thể tích 135 lít và được duy trì ở nhiệt độ $-43^\\circ\\text{C}$. Áp suất của khí $\\text{CH}_4$ trong bình là $x \\cdot 10^5\\text{ Pa}$. Tìm $x$ (làm tròn kết quả đến chữ số hàng phần trăm).',
      options: [],
      correct_index: 0,
      shortAnswer: '1,48',
      explanation:
        '$n_{\\text{CH}_4} = n_{\\text{CO}_2} = \\frac{460}{44,0} = \\frac{115}{11}\\text{ mol}$; $T = -43 + 273 = 230\\text{ K}$; $V = 0,135\\text{ m}^3$. Áp suất $p = \\frac{nRT}{V} = \\frac{(115/11) \\cdot 8,31 \\cdot 230}{0,135} \\approx 1,48 \\cdot 10^5\\text{ Pa}$.',
    },
    {
      id: 202526,
      chapter_id: 1202,
      chapter_code: 'G12-CH2',
      chapter_title: 'Khí lí tưởng',
      topic_code: 'THPT-2025 · Phần III',
      topic_title: 'Mã đề 0201 · Phần III · Câu 4 (Trả lời ngắn)',
      grade_number: 12,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Sử dụng dữ kiện câu trước ($n_{\\text{O}_2} = n_{\\text{CO}_2} = \\frac{460}{44,0}\\text{ mol}$, $M_{\\text{O}_2} = 32,0\\text{ g/mol}$): Khi một lượng khí $\\text{O}_2$ được rút ra để sử dụng thì áp suất khí trong bình chứa khí $\\text{O}_2$ bằng $54\\%$ áp suất khí khi chưa rút, nhiệt độ của bình khí không đổi. Khối lượng $\\text{O}_2$ đã được rút ra khỏi bình là bao nhiêu kilôgam (làm tròn kết quả đến chữ số hàng phần trăm)?',
      options: [],
      correct_index: 0,
      shortAnswer: '0,15',
      explanation:
        'Vì $V, T$ không đổi nên $m \\propto p$. Phần khí rút ra chiếm $100\\% - 54\\% = 46\\%$ lượng $\\text{O}_2$ ban đầu: $\\Delta m = 0,46 \\cdot \\frac{460}{44,0} \\cdot 32,0 \\cdot 10^{-3} \\approx 0,15\\text{ kg}$.',
    },
    {
      id: 202527,
      chapter_id: 1204,
      chapter_code: 'G12-CH4',
      chapter_title: 'Vật lí hạt nhân',
      topic_code: 'THPT-2025 · Phần III',
      topic_title: 'Mã đề 0201 · Phần III · Câu 5 (Trả lời ngắn)',
      grade_number: 12,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Trước đây, để thuận tiện cho việc xem giờ, các nhà sản xuất đồng hồ đã sơn mặt số và kim của đồng hồ bằng một lớp dạ quang chứa đồng vị phóng xạ radium ${}^{226}_{88}\\text{Ra}$ có chu kì bán rã là 1600 năm. Ban đầu, lớp dạ quang này chứa $8,5\\ \\mu\\text{g}\\ {}^{226}_{88}\\text{Ra}$. Lấy số ngày trong một năm là 365. Khối lượng mol của ${}^{226}_{88}\\text{Ra}$ là $226\\text{ g/mol}$.\n\nĐộ phóng xạ ban đầu của lượng ${}^{226}_{88}\\text{Ra}$ được sơn trên đồng hồ là bao nhiêu megabecơren ($\\text{MBq}$, làm tròn kết quả đến chữ số hàng phần trăm)?',
      options: [],
      correct_index: 0,
      shortAnswer: '0,31',
      explanation:
        '$T = 1600 \\cdot 365 \\cdot 86400\\text{ s}$; $H_0 = \\frac{\\ln 2}{T} \\cdot \\frac{m_0}{M} N_A = \\frac{0,693}{1600 \\cdot 365 \\cdot 86400} \\cdot \\frac{8,5 \\cdot 10^{-6}}{226} \\cdot 6,02 \\cdot 10^{23} \\approx 0,31\\text{ MBq}$.',
    },
    {
      id: 202528,
      chapter_id: 1204,
      chapter_code: 'G12-CH4',
      chapter_title: 'Vật lí hạt nhân',
      topic_code: 'THPT-2025 · Phần III',
      topic_title: 'Mã đề 0201 · Phần III · Câu 6 (Trả lời ngắn)',
      grade_number: 12,
      difficulty: 'thong_hieu',
      questionFormat: 'short_answer',
      question_text:
        'Sử dụng dữ kiện câu trước (đồng vị phóng xạ ${}^{226}_{88}\\text{Ra}$ có chu kì bán rã $T = 1600\\text{ năm}$): Sau bao nhiêu năm thì độ phóng xạ của lượng ${}^{226}_{88}\\text{Ra}$ còn lại bằng $3,125\\%$ so với độ phóng xạ ban đầu (làm tròn kết quả đến chữ số hàng đơn vị)?',
      options: [],
      correct_index: 0,
      shortAnswer: '8000',
      explanation:
        '$\\frac{H}{H_0} = 2^{-t/T} = 3,125\\% = \\frac{1}{32} = 2^{-5} \\Rightarrow t = 5T = 5 \\cdot 1600 = 8000\\text{ năm}$.',
    },
  ],
  ...GRADE_12_2025_EXAMS,
  ...GRADE_11_2025_EXAMS,
  ...GRADE_10_2025_EXAMS,
  ...TS10_2025_EXAM,
  ...GRADE_9_2025_EXAMS,
  ...GRADE_8_2025_EXAMS,
  ...GRADE_7_2025_EXAMS,
  ...GRADE_6_2025_EXAMS,
  ...THPT_SET2_EXAMS,
  ...THPT_SET3_EXAMS,
  ...THCS_SET2_EXAMS,
  ...THCS_SET3_EXAMS,
};

const ALL_SUPPLEMENTS: Record<string, ExamQuestionSource[]> = {
  ...GRADE_12_SUPPLEMENTS,
  ...GRADE_11_SUPPLEMENTS,
  ...GRADE_10_SUPPLEMENTS,
  ...THCS_SUPPLEMENTS,
};

export const OFFICIAL_EXAM_QUESTIONS: Record<string, ExamQuestionSource[]> = mergeWithSupplements(
  BASE_OFFICIAL_EXAM_QUESTIONS,
  ALL_SUPPLEMENTS
);
