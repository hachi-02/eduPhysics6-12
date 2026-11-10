import { SocraticQuestionItem, MistakeQuestionItem, SocraticCoachSession, SocraticScaffoldStep } from '@/types/cms';
import { detectCognitiveTrap, COGNITIVE_TRAP_REGISTRY } from './cognitive-traps';

export type QuestionInput = SocraticQuestionItem | MistakeQuestionItem;

/**
 * Phân tích miền kiến thức Vật lý dựa trên text và metadata của câu hỏi
 */
type PhysicsDomain =
  | 'THERMODYNAMICS'
  | 'KINEMATICS'
  | 'DYNAMICS'
  | 'ENERGY_WORK'
  | 'OSCILLATIONS_WAVES'
  | 'ELECTRICITY'
  | 'OPTICS'
  | 'NUCLEAR_QUANTUM'
  | 'GENERAL';

function detectPhysicsDomain(text: string, explanation: string, topicCode = '', chapterCode = ''): PhysicsDomain {
  const combined = `${text} ${explanation} ${topicCode} ${chapterCode}`.toLowerCase();

  if (
    combined.includes('khí lí tưởng') ||
    combined.includes('đẳng nhiệt') ||
    combined.includes('đẳng tích') ||
    combined.includes('đẳng áp') ||
    combined.includes('nhiệt lượng') ||
    combined.includes('nhiệt độ') ||
    combined.includes('nhiệt dung riêng') ||
    combined.includes('nóng chảy') ||
    combined.includes('hóa hơi') ||
    combined.includes('nội năng') ||
    combined.includes('định luật i') ||
    combined.includes('khối khí') ||
    combined.includes('áp suất') ||
    combined.includes('kelvin')
  ) {
    return 'THERMODYNAMICS';
  }

  if (
    combined.includes('dao động') ||
    combined.includes('con lắc') ||
    combined.includes('lò xo') ||
    combined.includes('sóng cơ') ||
    combined.includes('sóng âm') ||
    combined.includes('bước sóng') ||
    combined.includes('giao thoa') ||
    combined.includes('tần số góc') ||
    combined.includes('biên độ')
  ) {
    return 'OSCILLATIONS_WAVES';
  }

  if (
    combined.includes('cường độ dòng điện') ||
    combined.includes('hiệu điện thế') ||
    combined.includes('điện trở') ||
    combined.includes('mạch điện') ||
    combined.includes('định luật ôm') ||
    combined.includes('nối tiếp') ||
    combined.includes('song song') ||
    combined.includes('tụ điện') ||
    combined.includes('từ trường') ||
    combined.includes('cảm ứng từ') ||
    combined.includes('suất điện động') ||
    combined.includes('xoay chiều')
  ) {
    return 'ELECTRICITY';
  }

  if (
    combined.includes('công') ||
    combined.includes('công suất') ||
    combined.includes('động năng') ||
    combined.includes('thế năng') ||
    combined.includes('cơ năng') ||
    combined.includes('bảo toàn cơ năng') ||
    combined.includes('động lượng')
  ) {
    return 'ENERGY_WORK';
  }

  if (
    combined.includes('lực') ||
    combined.includes('gia tốc') ||
    combined.includes('newton') ||
    combined.includes('ma sát') ||
    combined.includes('trọng lực') ||
    combined.includes('máng nghiêng') ||
    combined.includes('khối lượng')
  ) {
    return 'DYNAMICS';
  }

  if (
    combined.includes('vận tốc') ||
    combined.includes('tốc độ') ||
    combined.includes('quãng đường') ||
    combined.includes('thời gian') ||
    combined.includes('chuyển động thẳng') ||
    combined.includes('rơi tự do') ||
    combined.includes('ném')
  ) {
    return 'KINEMATICS';
  }

  if (
    combined.includes('khúc xạ') ||
    combined.includes('phản xạ') ||
    combined.includes('thấu kính') ||
    combined.includes('chiết suất') ||
    combined.includes('tiêu cự') ||
    combined.includes('ảnh thật') ||
    combined.includes('ảnh ảo')
  ) {
    return 'OPTICS';
  }

  if (
    combined.includes('hạt nhân') ||
    combined.includes('phóng xạ') ||
    combined.includes('photon') ||
    combined.includes('quang điện') ||
    combined.includes('bán rã') ||
    combined.includes('năng lượng liên kết')
  ) {
    return 'NUCLEAR_QUANTUM';
  }

  return 'GENERAL';
}

/**
 * Xây dựng phiên làm việc với Gia sư Socrates (3 Nấc Thang Nhận Thức) cho câu hỏi bất kỳ
 */
export function buildSocraticCoachSession(question: QuestionInput): SocraticCoachSession {
  const text = question.question_text || '';
  const explanation = question.explanation || '';
  const topicTitle = question.topic_title || 'Chủ đề Vật lý';
  const topicCode = question.topic_code || '';
  const chapterTitle = question.chapter_title || 'Chương';
  const chapterCode = question.chapter_code || '';
  const gradeNumber = question.grade_number || 10;
  const options = question.options || [];
  const correctIndex = question.correct_index ?? 0;

  const domain = detectPhysicsDomain(text, explanation, topicCode, chapterCode);
  const trapResult = detectCognitiveTrap(question, options[1] ? 1 : 0);
  const trapMeta = COGNITIVE_TRAP_REGISTRY[trapResult.trapType];

  let steps: SocraticScaffoldStep[] = [];

  switch (domain) {
    case 'THERMODYNAMICS': {
      const isIsochoric = text.toLowerCase().includes('đẳng tích') || text.toLowerCase().includes('bình kín');
      const isIsobaric = text.toLowerCase().includes('đẳng áp') || text.toLowerCase().includes('pittông');
      const isFirstLaw = text.toLowerCase().includes('định luật i') || text.toLowerCase().includes('nội năng');

      steps = [
        {
          level: 1,
          title: 'Nấc 1: Nhận diện Hiện tượng & Điều kiện biên',
          subtitle: 'Xác định thông số trạng thái nào được giữ không đổi',
          prompt: isFirstLaw
            ? 'Quan sát đề bài: Hệ khí trong bài đang thực hiện quá trình trao đổi năng lượng như thế nào với môi trường?'
            : 'Đọc kỹ dữ kiện đề bài: Trong quá trình biến đổi trạng thái của khối khí, đại lượng vật lý nào được giữ cố định?',
          options: isFirstLaw
            ? [
                {
                  id: 's1_a',
                  text: 'Hệ vừa có thể nhận/sinh công (A), vừa có thể thu/tỏa nhiệt lượng (Q)',
                  isCorrect: true,
                  feedback: 'Chính xác! Đây là quá trình biến đổi năng lượng tổng quát theo Nguyên lý I NĐLH: ΔU = A + Q.',
                },
                {
                  id: 's1_b',
                  text: 'Nội năng của khối khí luôn luôn không đổi trong mọi điều kiện',
                  isCorrect: false,
                  feedback: 'Chưa đúng! Khi có sự trao đổi công hoặc truyền nhiệt thì nội năng ΔU sẽ biến thiên.',
                },
                {
                  id: 's1_c',
                  text: 'Nhiệt lượng luôn luôn tự động chuyển hóa 100% thành công cơ học',
                  isCorrect: false,
                  feedback: 'Sai rồi! Điều này vi phạm nguyên lý thứ II của nhiệt động lực học.',
                },
              ]
            : [
                {
                  id: 's1_a',
                  text: isIsochoric
                    ? 'Thể tích V không đổi (Bình kín cứng hoặc quá trình đẳng tích)'
                    : isIsobaric
                    ? 'Áp suất p không đổi (Pít-tông di chuyển tự do hoặc quá trình đẳng áp)'
                    : 'Nhiệt độ tuyệt đối T không đổi (Quá trình đẳng nhiệt)',
                  isCorrect: true,
                  feedback: 'Rất chính xác! Nhận diện đúng điều kiện biên là chìa khóa then chốt để chọn đúng định luật khí.',
                },
                {
                  id: 's1_b',
                  text: isIsochoric ? 'Nhiệt độ T luôn được giữ cố định' : 'Khối lượng khí liên tục bị thoát ra ngoài',
                  isCorrect: false,
                  feedback: 'Hãy đọc kỹ lại đề: Khối khí được chứa kín, không bị rò rỉ và có điều kiện ràng buộc về thể tích/áp suất.',
                },
                {
                  id: 's1_c',
                  text: 'Cả áp suất p, thể tích V và nhiệt độ T đều biến thiên độc lập không ràng buộc',
                  isCorrect: false,
                  feedback: 'Chưa chính xác! Trạng thái của một lượng khí xác định luôn bị ràng buộc bởi phương trình trạng thái.',
                },
              ],
          hintIfStuck: 'Tìm các từ khóa đặc trưng trong đề: "bình kín", "đẳng tích", "đẳng nhiệt", "áp suất không đổi".',
        },
        {
          level: 2,
          title: 'Nấc 2: Xác định Định luật & Nguyên lý cốt lõi',
          subtitle: 'Chọn phương trình liên hệ chính xác giữa các đại lượng',
          prompt: isFirstLaw
            ? 'Theo Định luật I Nhiệt động lực học, mối liên hệ giữa độ biến thiên nội năng (ΔU), công (A) và nhiệt lượng (Q) là gì?'
            : 'Với điều kiện đã xác định ở Nấc 1, ta áp dụng định luật chất khí nào sau đây?',
          options: isFirstLaw
            ? [
                {
                  id: 's2_a',
                  text: 'ΔU = A + Q (Độ biến thiên nội năng bằng tổng đại số công và nhiệt lượng)',
                  isCorrect: true,
                  feedback: 'Hoàn hảo! Đây là biểu thức tổng quát của Định luật I Nhiệt động lực học.',
                },
                {
                  id: 's2_b',
                  text: 'ΔU = A - Q',
                  isCorrect: false,
                  feedback: 'Coi chừng nhầm dấu! Dấu âm hay dương sẽ phụ thuộc vào quy ước hệ nhận hay truyền năng lượng.',
                },
                {
                  id: 's2_c',
                  text: 'ΔU = Q / A',
                  isCorrect: false,
                  feedback: 'Năng lượng là đại lượng có tính cộng nội tại, không thể chia cho nhau như vậy.',
                },
              ]
            : [
                {
                  id: 's2_a',
                  text: isIsochoric
                    ? 'Định luật Charles: p₁ / T₁ = p₂ / T₂ (Áp suất tỉ lệ thuận với nhiệt độ Kelvin)'
                    : isIsobaric
                    ? 'Định luật Gay-Lussac: V₁ / T₁ = V₂ / T₂'
                    : 'Định luật Boyle-Mariotte: p₁ · V₁ = p₂ · V₂ (Áp suất tỉ lệ nghịch với thể tích)',
                  isCorrect: true,
                  feedback: 'Chính xác! Công thức này cho phép ta lập tỉ số và tính ra ẩn số cần tìm.',
                },
                {
                  id: 's2_b',
                  text: isIsochoric ? 'Định luật Boyle: p₁ · V₁ = p₂ · V₂' : 'Định luật Charles: p₁ / T₁ = p₂ / T₂',
                  isCorrect: false,
                  feedback: 'Nhầm lẫn định luật rồi! Hãy xem lại đại lượng nào được giữ cố định ở Nấc 1.',
                },
                {
                  id: 's2_c',
                  text: 'Phương trình bảo toàn cơ năng: W = Wđ + Wt',
                  isCorrect: false,
                  feedback: 'Không phù hợp! Bài toán đang xét về nhiệt động lực học chất khí, không phải động lực học vật rắn.',
                },
              ],
          hintIfStuck: 'Đẳng nhiệt đi với Boyle (p·V = const). Đẳng tích đi với Charles (p/T = const).',
        },
        {
          level: 3,
          title: 'Nấc 3: Kỹ thuật Khóa Số & Hóa Giải Bẫy',
          subtitle: 'Kiểm tra đơn vị và quy ước dấu trước khi bấm máy tính',
          prompt: isFirstLaw
            ? 'Trước khi thế số tính toán, quy ước dấu của A và Q cần được xác định như thế nào để không sập bẫy?'
            : 'Lưu ý sống còn nào về đơn vị nhiệt độ bắt buộc phải thực hiện trước khi bấm máy tính?',
          options: isFirstLaw
            ? [
                {
                  id: 's3_a',
                  text: 'Hệ NHẬN công/nhiệt thì A > 0, Q > 0; Hệ SINH công hoặc TRUYỀN nhiệt thì A < 0, Q < 0',
                  isCorrect: true,
                  feedback: 'Rất tuyệt vời! Quy ước "Nhận là DƯƠNG, Mất đi là ÂM" giúp bạn triệt tiêu 100% bẫy dấu.',
                },
                {
                  id: 's3_b',
                  text: 'Cứ thấy số nào lớn hơn thì lấy dấu dương (+), số nhỏ hơn thì lấy dấu âm (-)',
                  isCorrect: false,
                  feedback: 'Sai lầm nguy hiểm! Dấu trong vật lý thể hiện chiều trao đổi năng lượng, không phải độ lớn số học.',
                },
                {
                  id: 's3_c',
                  text: 'Công A luôn luôn mang dấu âm, bất kể hệ nhận hay sinh công',
                  isCorrect: false,
                  feedback: 'Chưa đúng! Khi môi trường nén khí (khí nhận công) thì A mang dấu dương.',
                },
              ]
            : [
                {
                  id: 's3_a',
                  text: 'Phải đổi nhiệt độ Celsius sang Kelvin: T (K) = t (°C) + 273,15',
                  isCorrect: true,
                  feedback: 'Chính xác 100%! Rất nhiều học sinh để nguyên độ C tính tỉ số dẫn đến kết quả sai hoàn toàn.',
                },
                {
                  id: 's3_b',
                  text: 'Có thể giữ nguyên độ C (°C) vì tỉ số p₁/p₂ sẽ tự triệt tiêu đơn vị nhiệt độ',
                  isCorrect: false,
                  feedback: 'Bẫy kinh điển! Phép cộng nhiệt độ Kelvin T = t + 273 không phải là phép nhân tỉ lệ nên không thể triệt tiêu.',
                },
                {
                  id: 's3_c',
                  text: 'Phải đổi áp suất bắt buộc sang Pascal (Pa) kể cả khi hai vế đều có cùng đơn vị atm',
                  isCorrect: false,
                  feedback: 'Không bắt buộc! Nếu cả hai trạng thái đều dùng chung đơn vị áp suất (atm hoặc mmHg) thì tỉ số p₁/p₂ sẽ tự triệt tiêu đơn vị áp suất.',
                },
              ],
          hintIfStuck: 'Trong mọi phương trình chất khí, nhiệt độ T BẮT BUỘC phải tính theo thang Kelvin (K = °C + 273).',
        },
      ];
      break;
    }

    case 'OSCILLATIONS_WAVES': {
      steps = [
        {
          level: 1,
          title: 'Nấc 1: Nhận diện Đặc trưng Dao động / Sóng',
          subtitle: 'Phân tích bản chất vật lý của hệ dao động hoặc quá trình truyền sóng',
          prompt: 'Quan sát các thông số được cung cấp trong đề bài, đặc trưng cơ bản nào của dao động/sóng được xác định trực tiếp?',
          options: [
            {
              id: 's1_a',
              text: 'Biên độ A, tần số f (hoặc chu kỳ T), và pha ban đầu φ xác định trạng thái của hệ tại thời điểm t',
              isCorrect: true,
              feedback: 'Chính xác! Đây là bộ 3 tham số cơ bản mô tả toàn diện một dao động điều hòa.',
            },
            {
              id: 's1_b',
              text: 'Vận tốc và li độ luôn luôn biến thiên cùng pha với nhau',
              isCorrect: false,
              feedback: 'Sai rồi! Vận tốc luôn sớm pha hơn li độ một góc π/2 (vuông pha).',
            },
            {
              id: 's1_c',
              text: 'Chu kỳ dao động tỉ lệ nghịch với biên độ dao động',
              isCorrect: false,
              feedback: 'Không đúng! Dao động điều hòa có tính đẳng thời: chu kỳ T độc lập với biên độ A.',
            },
          ],
          hintIfStuck: 'Phương trình tổng quát: x = A·cos(ωt + φ). Chu kỳ T = 2π/ω.',
        },
        {
          level: 2,
          title: 'Nấc 2: Xác định Định luật & Công thức liên hệ',
          subtitle: 'Chọn công thức liên hệ chuẩn xác giữa chu kỳ, tần số và cấu tạo hệ',
          prompt: 'Công thức then chốt nào sau đây mô tả chính xác mối quan hệ giữa các đại lượng trong hệ?',
          options: [
            {
              id: 's2_a',
              text: 'Tần số góc ω = 2π·f = 2π / T; Với sóng cơ thì tốc độ truyền sóng v = λ · f = λ / T',
              isCorrect: true,
              feedback: 'Rất chuẩn! Công thức v = λ·f là cốt lõi của mọi bài toán truyền sóng.',
            },
            {
              id: 's2_b',
              text: 'Bước sóng λ = v · f',
              isCorrect: false,
              feedback: 'Nhầm lẫn phép tính! λ = v / f = v · T. Hãy kiểm tra lại đơn vị: [m] = [m/s] / [1/s].',
            },
            {
              id: 's2_c',
              text: 'Cơ năng của con lắc lò xo tỉ lệ bậc nhất với biên độ dao động A',
              isCorrect: false,
              feedback: 'Sai rồi! Cơ năng W = 0.5·k·A² tỉ lệ với BÌNH PHƯƠNG biên độ.',
            },
          ],
          hintIfStuck: 'Bước sóng λ là quãng đường sóng truyền đi trong đúng một chu kỳ: λ = v · T = v / f.',
        },
        {
          level: 3,
          title: 'Nấc 3: Kỹ thuật Khóa Số & Né Bẫy Đơn Vị',
          subtitle: 'Lưu ý các bẫy đổi đơn vị SI trước khi kết luận đáp số',
          prompt: 'Để không bị mất điểm oan ở bước bấm máy tính cuối cùng, thao tác chuẩn hóa nào sau đây là bắt buộc?',
          options: [
            {
              id: 's3_a',
              text: 'Quy đổi biên độ A, bước sóng λ hoặc độ dãn Δl về đơn vị mét (m), khối lượng về kilôgam (kg)',
              isCorrect: true,
              feedback: 'Chính xác! Các công thức năng lượng và chu kỳ bắt buộc phải thay bằng đơn vị chuẩn SI.',
            },
            {
              id: 's3_b',
              text: 'Cứ để nguyên cm và gam tính toán, kết quả năng lượng vẫn tự ra Jun (J)',
              isCorrect: false,
              feedback: 'Bẫy nghiêm trọng! 1 cm = 10⁻² m, khi bình phương lên sai số sẽ lên tới 10.000 lần!',
            },
            {
              id: 's3_c',
              text: 'Đổi máy tính sang chế độ Degree (Độ) thay vì Radian khi bấm các hàm lượng giác dao động',
              isCorrect: false,
              feedback: 'Coi chừng! Pha dao động (ωt + φ) tính bằng Radian, máy tính bắt buộc phải để chế độ R (Radian).',
            },
          ],
          hintIfStuck: 'Luôn kiểm tra màn hình máy tính đang ở chế độ R (Radian) và đổi cm sang mét trước khi tính năng lượng.',
        },
      ];
      break;
    }

    case 'ELECTRICITY': {
      steps = [
        {
          level: 1,
          title: 'Nấc 1: Nhận diện Sơ đồ Đoạn Mạch & Tính chất',
          subtitle: 'Phân tích cách ghép các phần tử trong mạch điện',
          prompt: 'Quan sát đề bài: Các phần tử điện trở hoặc thiết bị tiêu thụ điện được mắc với nhau theo cấu trúc nào?',
          options: [
            {
              id: 's1_a',
              text: 'Phân biệt rõ đoạn mạch mắc nối tiếp (I bằng nhau) hay mắc song song (U bằng nhau)',
              isCorrect: true,
              feedback: 'Rất chính xác! Nắm chắc đặc trưng dòng điện và hiệu điện thế giúp ta chọn phương trình chuẩn.',
            },
            {
              id: 's1_b',
              text: 'Dù mắc nối tiếp hay song song thì điện trở tương đương luôn bằng tổng các điện trở thành phần',
              isCorrect: false,
              feedback: 'Sai lầm! Mạch song song có 1/Rtđ = 1/R1 + 1/R2, điện trở tương đương luôn nhỏ hơn các điện trở nhánh.',
            },
            {
              id: 's1_c',
              text: 'Hiệu điện thế giữa hai đầu mỗi nhánh song song luôn tỉ lệ thuận với điện trở nhánh đó',
              isCorrect: false,
              feedback: 'Không đúng! Hai nhánh mắc song song có cùng một hiệu điện thế U.',
            },
          ],
          hintIfStuck: 'Mắc nối tiếp: I = I₁ = I₂; U = U₁ + U₂. Mắc song song: U = U₁ = U₂; I = I₁ + I₂.',
        },
        {
          level: 2,
          title: 'Nấc 2: Xác định Định luật Áp Dụng',
          subtitle: 'Lựa chọn định luật Ôm hoặc công thức công suất phù hợp',
          prompt: 'Định luật hoặc hệ thức nào sau đây được áp dụng trực tiếp để tìm đại lượng chưa biết?',
          options: [
            {
              id: 's2_a',
              text: 'Định luật Ôm I = U / R, kết hợp công thức công suất P = U·I = I²·R = U² / R',
              isCorrect: true,
              feedback: 'Hoàn hảo! Đây là bộ công thức nền tảng của toàn bộ chương Điện học.',
            },
            {
              id: 's2_b',
              text: 'Công thức tính công cơ học A = F·s·cosα',
              isCorrect: false,
              feedback: 'Không phù hợp! Bài toán đang xét về mạch điện, công của dòng điện tính bằng A = U·I·t.',
            },
            {
              id: 's2_c',
              text: 'Định luật Ôm I = U · R',
              isCorrect: false,
              feedback: 'Nhầm phép tính cơ bản! Cường độ dòng điện I = U / R (tỉ lệ thuận với U, tỉ lệ nghịch với R).',
            },
          ],
          hintIfStuck: 'Định luật Ôm: I = U / R. Công của dòng điện: A = U·I·t = P·t.',
        },
        {
          level: 3,
          title: 'Nấc 3: Kỹ thuật Khóa Số & Né Bẫy Đơn Vị Điện',
          subtitle: 'Quy đổi tiền tố mA, kΩ, kW·h sang hệ chuẩn SI',
          prompt: 'Trước khi nhập số vào máy tính, lưu ý về đơn vị nào sau đây cần đặc biệt cảnh giác?',
          options: [
            {
              id: 's3_a',
              text: 'Đổi mA sang Ampe (chia cho 1000), kΩ sang Ôm (nhân với 1000), phút/giờ sang giây (s)',
              isCorrect: true,
              feedback: 'Chính xác! Công tính theo Jun (J) bắt buộc thời gian t phải tính bằng giây (s).',
            },
            {
              id: 's3_b',
              text: 'Thời gian t trong công thức A = U·I·t cứ để nguyên số phút vì đề bài cho phút',
              isCorrect: false,
              feedback: 'Bẫy mất điểm oan! 1 phút = 60 giây. Nếu để nguyên phút, kết quả công sẽ bị hụt mất 60 lần.',
            },
            {
              id: 's3_c',
              text: '1 kW·h (số điện) tương đương với 1000 Jun',
              isCorrect: false,
              feedback: 'Sai lầm phổ biến! 1 kW·h = 1000 W · 3600 s = 3.600.000 J (3,6 MJ).',
            },
          ],
          hintIfStuck: '1 A = 1000 mA; 1 kΩ = 1000 Ω; 1 phút = 60 s; 1 kWh = 3.600.000 J.',
        },
      ];
      break;
    }

    default: {
      // General Physics Problem Scaffolding
      steps = [
        {
          level: 1,
          title: 'Nấc 1: Nhận diện Hiện tượng & Tóm tắt Dữ kiện',
          subtitle: 'Xác định hệ vật nghiên cứu và các giả thiết ràng buộc trong đề bài',
          prompt: 'Đọc kỹ đề bài: Đối tượng vật lý cần khảo sát là gì và điều kiện lý tưởng hóa nào được áp dụng?',
          options: [
            {
              id: 's1_a',
              text: 'Xác định rõ các đại lượng đã cho (kèm đơn vị) và đại lượng cần tìm kiếm theo yêu cầu đề bài',
              isCorrect: true,
              feedback: 'Rất chính xác! Tóm tắt đề bài và kiểm tra các đại lượng cho trước là bước đi đầu tiên của tư duy khoa học.',
            },
            {
              id: 's1_b',
              text: 'Bỏ qua phần đọc đề, nhìn nhanh 4 đáp án xem số nào đẹp nhất thì bấm thử công thức',
              isCorrect: false,
              feedback: 'Đây là thói quen phán đoán cảm tính rất dễ sập bẫy các phương án nhiễu tinh vi.',
            },
            {
              id: 's1_c',
              text: 'Mặc định rằng mọi bài toán vật lý đều không có ma sát và không có tổn hao năng lượng',
              isCorrect: false,
              feedback: 'Không đúng! Cần đọc kỹ xem đề có cho hệ số ma sát μ, lực cản không khí hoặc hiệu suất H hay không.',
            },
          ],
          hintIfStuck: 'Gạch chân các số liệu kèm đơn vị và từ khóa quan trọng trong đề bài.',
        },
        {
          level: 2,
          title: 'Nấc 2: Xác định Định luật & Công thức then chốt',
          subtitle: 'Tìm công thức có chứa đại lượng cần tìm liên kết với các số liệu đã biết',
          prompt: 'Quy luật vật lý hoặc công thức định lượng nào sau đây là cầu nối trực tiếp để giải quyết bài toán?',
          options: [
            {
              id: 's2_a',
              text: 'Lựa chọn công thức chuẩn của chương trình, trong đó chỉ còn lại duy nhất một đại lượng chưa biết',
              isCorrect: true,
              feedback: 'Chính xác! Khi phương trình chỉ còn 1 ẩn số, việc giải toán sẽ hoàn toàn tường minh.',
            },
            {
              id: 's2_b',
              text: 'Ghép đại các số liệu trong đề bài lại với nhau bằng phép nhân chia ngẫu nhiên',
              isCorrect: false,
              feedback: 'Toán học chỉ là công cụ, bản chất công thức phải phản ánh đúng quy luật bảo toàn hoặc quan hệ nhân quả vật lý.',
            },
            {
              id: 's2_c',
              text: 'Luôn luôn dùng định luật bảo toàn cơ năng cho mọi bài toán có lực tác dụng',
              isCorrect: false,
              feedback: 'Coi chừng! Cơ năng chỉ bảo toàn khi hệ chỉ chịu tác dụng của các lực thế (như trọng lực, lực đàn hồi).',
            },
          ],
          hintIfStuck: 'Xem lại phần kiến thức trọng tâm của chủ đề này trong Cẩm nang công thức.',
        },
        {
          level: 3,
          title: 'Nấc 3: Kỹ thuật Khóa Số & Kiểm tra Logic',
          subtitle: 'Thế số, kiểm tra thứ nguyên và loại trừ các bẫy thường gặp',
          prompt: 'Thao tác tư duy phản biện nào sau đây giúp bạn tự tin 100% trước khi chọn đáp án cuối cùng?',
          options: [
            {
              id: 's3_a',
              text: 'Kiểm tra tất cả các đơn vị đã quy về chuẩn SI chưa, xem kết quả có hợp lý với thực tế vật lý không',
              isCorrect: true,
              feedback: 'Xuất sắc! Một vận tốc người đi bộ không thể ra 1000 m/s, kiểm tra tính hợp lý là thói quen của học sinh giỏi.',
            },
            {
              id: 's3_b',
              text: 'Bấm máy tính ra số nào giống 1 trong 4 đáp án thì chọn ngay không cần kiểm tra lại',
              isCorrect: false,
              feedback: 'Các phương án nhiễu đều được các thầy cô cài cắm sẵn từ kết quả của những lỗi quên đổi đơn vị phổ biến.',
            },
            {
              id: 's3_c',
              text: 'Bỏ qua việc kiểm tra dấu của kết quả âm hay dương',
              isCorrect: false,
              feedback: 'Dấu trong vật lý thể hiện chiều chuyển động hoặc quy ước năng lượng, kiểm tra dấu là tối quan trọng.',
            },
          ],
          hintIfStuck: 'Luôn gạch chân đơn vị và kiểm tra tính hợp lý vật lý của kết quả thu được.',
        },
      ];
      break;
    }
  }

  // Final synthesis resolution
  const finalResolution = explanation
    ? explanation
    : `Áp dụng logic qua 3 nấc: Nhận diện đúng điều kiện biên $\\to$ Chọn đúng định luật bản chất $\\to$ Khóa số với đơn vị SI chuẩn. Phương án đúng là phương án ${String.fromCharCode(
        65 + correctIndex
      )}: "${options[correctIndex] || ''}".`;

  const masteryTakeaway =
    domain === 'THERMODYNAMICS'
      ? 'Chất khí: Nhớ quy tắc "Đẳng nhiệt - Boyle, Đẳng tích - Charles", và nhiệt độ T bắt buộc đổi sang thang Kelvin (K = °C + 273).'
      : domain === 'OSCILLATIONS_WAVES'
      ? 'Sóng & Dao động: Chú ý v = λ·f (quãng đường truyền sóng trong 1 chu kỳ là λ) và máy tính phải để chế độ Radian.'
      : domain === 'ELECTRICITY'
      ? 'Điện học: Nối tiếp chung dòng I, song song chung thế U. Nhớ đổi mA sang Ampe và phút sang giây.'
      : 'Vật lý là khoa học thực nghiệm: Luôn tư duy theo thứ tự Điều kiện biên → Định luật → Thứ nguyên & Đơn vị SI.';

  return {
    questionId: question.id,
    questionText: text,
    options,
    correctIndex,
    explanation: finalResolution,
    topicTitle,
    topicCode,
    chapterTitle,
    chapterCode,
    gradeNumber,
    steps,
    finalResolution,
    masteryTakeaway,
    trapWarning: `${trapMeta.icon} ${trapMeta.name}: ${trapResult.remedyTip}`,
  };
}
