import { SeedChapterData } from './grade6-curriculum';

export const GRADE_10_CHAPTERS_PART2: SeedChapterData[] = [
  {
    order_index: 4,
    code: 'G10-CH4',
    title: 'Chương 4: Năng lượng, Công và Công suất',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Vật lí 10 GDPT 2018 (Kết nối tri thức Bài 21-24, Chân trời sáng tạo Bài 14-17, Cánh Diều Bài 8-9): Khái niệm công cơ học tổng quát A = F·s·cos(α), công phát động, công cản, công triệt tiêu; công suất P = A/t = F·v·cos(α) và hiệu suất H; động năng, thế năng trọng trường, định lý động năng và định luật bảo toàn cơ năng trong trọng trường có xét đến công của lực ma sát làm tiêu tán năng lượng.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 4: Năng lượng, Công và Công suất
1. **Công cơ học ($A$):**
   - Khi lực $\\vec{F}$ không đổi tác dụng lên một vật làm vật dịch chuyển một quãng đường $s$ theo hướng hợp với $\\vec{F}$ một góc $\\alpha$:
     $$A = F \\cdot s \\cdot \\cos\\alpha$$
   - **Phân loại theo góc $\\alpha$:**
     - $0^\\circ \\le \\alpha < 90^\\circ$: $\\cos\\alpha > 0 \\Rightarrow A > 0$ (Công phát động).
     - $\\alpha = 90^\\circ$: $\\cos\\alpha = 0 \\Rightarrow A = 0$ (Lực không sinh công, ví dụ lực hướng tâm hoặc phản lực $\\vec{N}$ trên mặt ngang).
     - $90^\\circ < \\alpha \\le 180^\\circ$: $\\cos\\alpha < 0 \\Rightarrow A < 0$ (Công cản, ví dụ lực ma sát trượt có $\\alpha = 180^\\circ \\Rightarrow A = -F_{\\text{ms}} \\cdot s$).
   - Đơn vị công: Joule (Jun), $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m}$.
2. **Công suất ($\\mathcal{P}$) và Hiệu suất ($H$):**
   - Công suất đặc trưng cho tốc độ thực hiện công:
     $$\\mathcal{P} = \\frac{A}{t} = F \\cdot v \\cdot \\cos\\alpha$$
     Đơn vị: Watt (Oát), $1\\,\\text{W} = 1\\,\\text{J/s}$. Đơn vị mở rộng: $1\\,\\text{kW} = 1000\\,\\text{W}$, mã lực $1\\,\\text{HP} \\approx 746\\,\\text{W}$.
   - Hiệu suất:
     $$H = \\frac{A_{\\text{ích}}}{A_{\\text{tp}}} \\times 100\\% = \\frac{\\mathcal{P}_{\\text{ích}}}{\\mathcal{P}_{\\text{tp}}} \\times 100\\%$$
     Năng lượng hao phí: $A_{\\text{hp}} = A_{\\text{tp}} - A_{\\text{ích}}$.
3. **Động năng ($W_đ$) và Định lý động năng:**
   - Động năng là dạng năng lượng mà vật có được do đang chuyển động:
     $$W_đ = \\frac{1}{2}m v^2$$
   - Định lý động năng: Độ biến thiên động năng của một vật bằng tổng đại số công của tất cả các ngoại lực tác dụng lên vật:
     $$W_{đ2} - W_{đ1} = \\frac{1}{2}m v_2^2 - \\frac{1}{2}m v_1^2 = \\sum A$$
4. **Thế năng trọng trường ($W_t$) và Cơ năng ($W$):**
   - Thế năng trọng trường là năng lượng tương tác giữa Trái Đất và vật:
     $$W_t = m g z$$
     ($z$ là độ cao của vật so với mốc thế năng chọn trước).
   - Cơ năng của vật chuyển động trong trọng trường:
     $$W = W_đ + W_t = \\frac{1}{2}m v^2 + m g z$$
   - **Định luật bảo toàn cơ năng:** Khi một vật chuyển động trong trọng trường chỉ chịu tác dụng của trọng lực (bỏ qua ma sát và sức cản), cơ năng của vật là một đại lượng bảo toàn:
     $$W = \\text{const} \\iff \\frac{1}{2}m v_1^2 + m g z_1 = \\frac{1}{2}m v_2^2 + m g z_2$$
   - **Biến thiên cơ năng khi có lực không thế (ma sát, lực cản):**
     $$W_2 - W_1 = A_{\\text{cản}} = -F_{\\text{ms}} \\cdot s$$`,
    key_takeaways: [
      'Công thức tổng quát A = F · s · cos(α). Lực vuông góc phương chuyển dịch không sinh công (cos 90° = 0).',
      'Định lý động năng W_đ2 - W_đ1 = Σ A áp dụng cho mọi chuyển động biến đổi kể cả khi có lực ma sát.',
      'Cơ năng bảo toàn chỉ khi hệ kín và chỉ chịu tác dụng của lực thế (trọng lực, lực đàn hồi). Khi có ma sát, cơ năng giảm một lượng bằng độ lớn công lực ma sát.',
    ],
    formula_cheatsheet: [
      {
        name: 'Công cơ học tổng quát',
        latex: 'A = F \\cdot s \\cdot \\cos\\alpha',
        note: 'F: độ lớn lực (N); s: quãng đường dịch chuyển (m); α: góc giữa vectơ lực và vectơ độ dịch chuyển; A: công (J).',
      },
      {
        name: 'Công suất tức thời và trung bình',
        latex: '\\mathcal{P} = \\frac{A}{t} = F \\cdot v \\cdot \\cos\\alpha',
        note: 'P: công suất (W); v: vận tốc chuyển động (m/s).',
      },
      {
        name: 'Định lý động năng',
        latex: '\\Delta W_đ = W_{đ2} - W_{đ1} = \\frac{1}{2}m v_2^2 - \\frac{1}{2}m v_1^2 = \\sum A',
        note: 'Áp dụng cho mọi quỹ đạo thẳng hay cong.',
      },
      {
        name: 'Bảo toàn và biến thiên cơ năng',
        latex: 'W = W_đ + W_t = \\frac{1}{2}m v^2 + m g z; \\quad W_2 - W_1 = A_{ms}',
        note: 'z tính từ gốc mốc thế năng W_t = 0.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G10-CH4-TP1',
        title: 'Chủ đề 4.1: Công cơ học, Công suất và Hiệu suất',
        textbook_tags: ['KNTT Bài 21-22', 'CTST Bài 14-15', 'CD Bài 8'],
        overview:
          'Nắm vững bản chất của công cơ học, góc định hướng lực và phương chuyển dời, xác định công phát động, công cản và công bằng không. Định nghĩa công suất, mối liên hệ giữa lực kéo và vận tốc của động cơ cơ giới, cùng công thức tính hiệu suất và năng lượng hao phí trong thực tiễn kỹ thuật.',
        summary_note:
          'Ghi nhớ: A = F·s·cos(α). Khi xe lên dốc cần lực kéo lớn thì phải về số thấp (giảm vận tốc v) để duy trì công suất động cơ không vượt quá định mức: P = F·v.',
        theory_sections: [
          {
            heading: '1. Định nghĩa và tính chất của Công cơ học',
            content:
              'Trong vật lí học, một lực sinh công cơ học khi nó tác dụng lên một vật và điểm đặt của lực di chuyển một đoạn đường s theo phương không vuông góc với giá của lực. Giá trị đại số của công là A = F·s·cos(α). Nếu lực tác dụng làm tăng vận tốc của vật thì công mang dấu dương (công phát động); nếu cản trở chuyển động làm giảm vận tốc thì công mang dấu âm (công cản). Nếu lực vuông góc với độ dịch chuyển (α = 90°) như lực nâng của sàn nhà hoặc lực từ Lorentz, lực đó không thực hiện công cơ học.',
            keyPoints: [
              'Công là đại lượng vô hướng nhưng có thể dương, âm hoặc bằng 0 tùy thuộc vào góc α.',
              'Đơn vị của công trong hệ SI là Joule (J): 1 J = 1 N · 1 m.',
              'Lực vuông góc với hướng chuyển động không sinh công.',
            ],
            realWorldApplication:
              'Người công nhân đẩy thùng hàng trên mặt sàn nằm ngang: trọng lực và phản lực mặt sàn có α = 90° nên không sinh công, lực đẩy sinh công phát động (α = 0°), lực ma sát sinh công cản (α = 180°).',
          },
          {
            heading: '2. Công suất và Hiệu suất của máy móc cơ giới',
            content:
              'Công suất P = A/t biểu thị tốc độ sinh công của máy móc. Khi vật chuyển động thẳng đều với vận tốc v dưới tác dụng của lực kéo F cùng hướng chuyển động, công suất tức thời được tính theo công thức P = F·v. Do công suất động cơ ô tô, xe máy bị giới hạn bởi công suất cực đại P_max, nên khi xe tải chở nặng leo dốc (cần lực kéo F rất lớn), tài xế phải cài số thấp (vận tốc v nhỏ) để đáp ứng F = P / v.',
            keyPoints: [
              'Công suất P = A / t = F · v · cos(α). Đơn vị chuẩn là Watt (W).',
              'Hiệu suất H = (P_ích / P_tp) × 100% luôn nhỏ hơn 100% trong thực tế do có ma sát và tỏa nhiệt.',
            ],
            realWorldApplication:
              'Hộp số nhiều cấp của xe máy và ô tô giúp thay đổi tỉ số truyền để hoán đổi linh hoạt giữa lực kéo F và tốc độ v phù hợp với địa hình leo đèo dốc hay chạy đường trường phẳng.',
          },
        ],
        quantities: [
          {
            name: 'Công cơ học',
            symbol: 'A',
            si_unit: 'Joule (J)',
            other_units: 'kJ, MJ, Wh, kWh',
            measuring_device: 'Công tơ điện, lực kế và thước đo gián tiếp',
            description: 'Đại lượng đo phần năng lượng được chuyển hóa qua tương tác lực trên quãng đường dịch chuyển.',
          },
          {
            name: 'Công suất',
            symbol: 'P (hoặc \\mathcal{P})',
            si_unit: 'Watt (W)',
            other_units: 'kW, MW, HP (mã lực)',
            measuring_device: 'Oát kế (Wattmeter), máy đo công suất mô-men xoắn',
            description: 'Tốc độ thực hiện công của lực trong một đơn vị thời gian.',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính công cơ học',
            latex_expression: 'A = F \\cdot s \\cdot \\cos\\alpha',
            plain_expression: 'A = F * s * cos(alpha)',
            variables: [
              { symbol: 'A', name: 'Công cơ học', unit: 'J' },
              { symbol: 'F', name: 'Độ lớn lực tác dụng', unit: 'N' },
              { symbol: 's', name: 'Quãng đường dịch chuyển', unit: 'm' },
              { symbol: '\\alpha', name: 'Góc hợp bởi vectơ lực và vectơ vận tốc', unit: 'rad hoặc độ' },
            ],
            derived_formulas: [
              { expression: '\\mathcal{P} = F \\cdot v \\cdot \\cos\\alpha', description: 'Công suất tức thời khi vật có vận tốc v' },
              { expression: 'H = \\frac{A_{\\text{ích}}}{A_{\\text{tp}}} = \\frac{\\mathcal{P}_{\\text{ích}}}{\\mathcal{P}_{\\text{tp}}}', description: 'Hiệu suất máy móc' },
            ],
            usage_note: 'Lưu ý kiểm tra đơn vị của góc α (độ hay rad) khi bấm máy tính lượng giác cos.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Kéo hòm gỗ có ma sát và tính công suất kéo',
            difficulty: 'thong_hieu',
            problem_statement:
              'Một con ngựa kéo một cỗ xe có khối lượng 500 kg chuyển động thẳng đều trên đường nằm ngang với vận tốc 7,2 km/h. Sợi dây kéo nghiêng một góc 30° so với phương ngang và lực căng của dây là 400 N. Bỏ qua sức cản không khí. Tính công của lực kéo con ngựa thực hiện trong 10 phút và công suất của con ngựa.',
            given_summary: 'm = 500 kg, v = 7,2 km/h = 2 m/s, alpha = 30°, F = 400 N, t = 10 min = 600 s.',
            solution_steps: [
              'Bước 1: Quãng đường cỗ xe đi được trong thời gian t = 600 s: s = v · t = 2 · 600 = 1200 m.',
              'Bước 2: Tính công của lực kéo ngựa tác dụng: A = F · s · cos(30°) = 400 · 1200 · cos(30°) = 480000 · (\\sqrt{3} / 2) ≈ 415692 J ≈ 415,7 kJ.',
              'Bước 3: Tính công suất của lực kéo: P = A / t = 415692 / 600 ≈ 692,8 W (hoặc P = F · v · cos(30°) = 400 · 2 · (\\sqrt{3}/2) = 692,8 W).',
            ],
            final_answer: 'Công A ≈ 415,7 kJ; Công suất P ≈ 692,8 W.',
          },
        ],
        simulation: {
          sim_key: 'g10_work_power_efficiency_lab',
          title: 'Phòng thí nghiệm ảo: Công, Công suất và Hiệu suất cơ học',
          description:
            'Kéo vật chuyển động trên mặt sàn có ma sát bằng dây xiên góc tùy chỉnh; theo dõi thời gian thực biểu đồ công phát động, công cản của ma sát, công suất tiêu thụ và hiệu suất tổng thể.',
          parameters: { mass: 20, force: 100, angleDeg: 30, frictionCoeff: 0.15, distance: 10 },
          guide_steps: [
            'Thay đổi góc xiên dây kéo từ 0° đến 60° và quan sát thành phần lực sinh công F·cos(α).',
            'Tăng hệ số ma sát μ và quan sát phần công hao phí biến thành nhiệt năng.',
            'Theo dõi công suất tức thời khi xe tăng tốc từ trạng thái đứng yên đến tốc độ ổn định.',
          ],
          physics_insight:
            'Góc kéo tối ưu để tiêu tốn lực kéo nhỏ nhất trên mặt sàn có ma sát là góc có tan(α) = μ. Tại góc đó, công hao phí do ma sát và công phát động đạt tỉ lệ tối ưu.',
        },
      },
      {
        order_index: 2,
        code: 'G10-CH4-TP2',
        title: 'Chủ đề 4.2: Động năng, Thế năng và Định lý động năng',
        textbook_tags: ['KNTT Bài 23', 'CTST Bài 16', 'CD Bài 9'],
        overview:
          'Khảo sát dạng năng lượng chuyển động (động năng) và năng lượng tương tác trọng trường (thế năng). Thiết lập định lý động năng làm công cụ vạn năng giải bài toán chuyển động biến đổi khi không cần biết gia tốc, và tìm hiểu tính tương đối của thế năng phụ thuộc vào việc chọn mốc thế năng.',
        summary_note:
          'Ghi nhớ: Định lý động năng: W_đ2 - W_đ1 = Σ A_ngoại_lực. Nếu tổng công dương thì động năng tăng (vật đi nhanh lên), nếu tổng công âm thì động năng giảm (vật đi chậm lại).',
        theory_sections: [
          {
            heading: '1. Động năng và Định lý biến thiên động năng',
            content:
              'Mọi vật khối lượng m chuyển động với vận tốc v đều mang động năng W_đ = (1/2)m·v^2. Động năng là đại lượng vô hướng luôn không âm. Khi có các ngoại lực tác dụng làm vận tốc thay đổi từ v_1 đến v_2, độ biến thiên động năng bằng tổng công của tất cả ngoại lực: (1/2)m·v_2^2 - (1/2)m·v_1^2 = Σ A. Đây là định lý tổng quát áp dụng cho mọi loại lực (kể cả lực ma sát biến đổi, lực kéo phức tạp).',
            keyPoints: [
              'Động năng phụ thuộc tỉ lệ bậc hai với vận tốc: khi vận tốc tăng gấp đôi, động năng tăng gấp 4 lần.',
              'Định lý động năng giúp tìm vận tốc hoặc quãng đường hãm phanh trực tiếp mà không cần giải phương trình động lực học vi phân.',
            ],
            realWorldApplication:
              'Khoảng cách phanh an toàn của ô tô: vì A_cản = -F_hãm · s = 0 - (1/2)m·v^2 nên quãng đường phanh tỉ lệ với bình phương vận tốc (v gấp đôi thì vết phanh dài gấp 4 lần).',
          },
          {
            heading: '2. Thế năng trọng trường và Công của trọng lực',
            content:
              'Thế năng trọng trường W_t = m·g·z là dạng năng lượng tương tác tĩnh điện giữa Trái Đất và vật ở độ cao z so với mốc thế năng. Đặc điểm cốt lõi: Trọng lực là lực thế, công của trọng lực khi vật di chuyển từ vị trí 1 đến vị trí 2 chỉ phụ thuộc vào độ cao ban đầu và độ cao cuối, hoàn toàn không phụ thuộc vào hình dạng đường đi: A_P = m·g·(z_1 - z_2) = W_t1 - W_t2.',
            keyPoints: [
              'Công của trọng lực bằng độ giảm thế năng: A_P = W_t1 - W_t2.',
              'Mốc thế năng có thể chọn tùy ý (mặt đất, sàn nhà, đỉnh dốc); giá trị thế năng có tính tương đối nhưng hiệu thế năng luôn là đại lượng bất biến.',
            ],
            realWorldApplication:
              'Nhà máy thủy điện tích nước ở hồ đập trên núi cao để khai thác hiệu thế năng m·g·h chuyển thành điện năng khi nước chảy xuống tuabin.',
          },
        ],
        quantities: [
          {
            name: 'Động năng',
            symbol: 'W_đ (hoặc E_k)',
            si_unit: 'Joule (J)',
            other_units: 'kJ, eV, cal',
            measuring_device: 'Xác định gián tiếp qua cân khối lượng và cảm biến vận tốc',
            description: 'Năng lượng mà vật có được do đang chuyển động với vận tốc v.',
          },
          {
            name: 'Thế năng trọng trường',
            symbol: 'W_t (hoặc E_p)',
            si_unit: 'Joule (J)',
            other_units: 'kJ',
            measuring_device: 'Xác định qua độ cao kế và khối lượng',
            description: 'Năng lượng dự trữ do tương tác hấp dẫn giữa vật và Trái Đất.',
          },
        ],
        formulas: [
          {
            name: 'Định lý động năng',
            latex_expression: '\\Delta W_đ = \\frac{1}{2}m v_2^2 - \\frac{1}{2}m v_1^2 = \\sum A',
            plain_expression: '0.5 * m * v2^2 - 0.5 * m * v1^2 = sum_A',
            variables: [
              { symbol: 'm', name: 'Khối lượng vật', unit: 'kg' },
              { symbol: 'v_1', name: 'Vận tốc tại thời điểm ban đầu', unit: 'm/s' },
              { symbol: 'v_2', name: 'Vận tốc tại thời điểm sau', unit: 'm/s' },
              { symbol: '\\sum A', name: 'Tổng công của các ngoại lực tác dụng', unit: 'J' },
            ],
            derived_formulas: [
              { expression: 'W_t = m \\cdot g \\cdot z', description: 'Thế năng trọng trường ở độ cao z' },
              { expression: 'A_P = m g (z_1 - z_2) = W_{t1} - W_{t2}', description: 'Công của trọng lực bằng độ giảm thế năng' },
            ],
            usage_note: 'Khi vật chuyển động chậm dần đến dừng lại (v_2 = 0), công cản có độ lớn bằng chính động năng ban đầu.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Tính quãng đường trượt bằng định lý động năng',
            difficulty: 'van_dung',
            problem_statement:
              'Một ô tô khối lượng 1,2 tấn đang chạy trên đường nằm ngang với vận tốc 54 km/h thì người lái xe hãm phanh khẩn cấp. Lực hãm của bánh xe với mặt đường có độ lớn 6000 N. Bỏ qua lực cản không khí. Dùng định lý động năng, tính quãng đường xe trượt thêm cho đến khi dừng hẳn.',
            given_summary: 'm = 1,2 tấn = 1200 kg, v_1 = 54 km/h = 15 m/s, v_2 = 0, F_hãm = 6000 N.',
            solution_steps: [
              'Bước 1: Tính động năng ban đầu của xe: W_đ1 = (1/2)m·v_1^2 = 0,5 · 1200 · 15^2 = 135000 J = 135 kJ.',
              'Bước 2: Khi xe dừng lại, động năng cuối W_đ2 = 0.',
              'Bước 3: Lực hãm ngược chiều chuyển động (α = 180°) nên công của lực hãm là: A_hãm = -F_hãm · s = -6000 · s.',
              'Bước 4: Áp dụng định lý động năng: W_đ2 - W_đ1 = A_hãm ⇔ 0 - 135000 = -6000 · s ⇒ s = 135000 / 6000 = 22,5 m.',
            ],
            final_answer: 'Quãng đường xe trượt dừng lại là 22,5 m.',
          },
        ],
        simulation: {
          sim_key: 'g10_kinetic_potential_theorem_lab',
          title: 'Mô phỏng định lý động năng và chuyển đổi thế năng',
          description:
            'Thả trượt xe thí nghiệm từ độ cao khác nhau trên máng nghiêng có ma sát điều chỉnh; quan sát thanh hiển thị biến thiên động năng, thế năng và công cơ học tại từng vị trí.',
          parameters: { initialHeight: 5, initialSpeed: 0, frictionCoeff: 0.1, slopeAngle: 30 },
          guide_steps: [
            'Chọn mốc thế năng tại chân dốc hoặc vị trí tùy biến và quan sát giá trị W_t biến đổi.',
            'Tắt ma sát và xác nhận tốc độ tại chân dốc đúng bằng v = sqrt(2gh).',
            'Bật ma sát và kiểm tra định lý động năng: W_đ cuối = W_t đầu - A_ms.',
          ],
          physics_insight:
            'Công của lực thế biến đổi thế năng, còn công của lực không thế (như ma sát) biến đổi trực tiếp cơ năng toàn phần của hệ vật thành nhiệt năng tiêu tán.',
        },
      },
      {
        order_index: 3,
        code: 'G10-CH4-TP3',
        title: 'Chủ đề 4.3: Định luật bảo toàn cơ năng và Biến thiên cơ năng',
        textbook_tags: ['KNTT Bài 24', 'CTST Bài 17', 'CD Bài 9'],
        overview:
          'Khảo sát sự chuyển hóa liên tục và nhịp nhàng giữa động năng và thế năng trong các hệ dao động như con lắc đơn, con lắc lò xo và tàu lượn siêu tốc. Nắm vững điều kiện áp dụng định luật bảo toàn cơ năng và phương pháp tính toán độ biến thiên cơ năng khi xuất hiện lực ma sát hoặc lực cản môi trường.',
        summary_note:
          'Ghi nhớ: Hệ chỉ có lực thế → Cơ năng W = W_đ + W_t = hằng số. Có lực cản/ma sát → Cơ năng giảm: W_sau - W_đầu = A_cản (A_cản < 0).',
        theory_sections: [
          {
            heading: '1. Định luật bảo toàn cơ năng trong trọng trường',
            content:
              'Khi một vật chỉ chịu tác dụng của trọng lực (hoặc lực đàn hồi lý tưởng), cơ năng của vật là đại lượng bảo toàn: W = W_đ + W_t = const. Ở vị trí cao nhất (nơi vật dừng lại đổi chiều), động năng bằng 0 và thế năng đạt cực đại W = W_t,max = m·g·h_max. Ở vị trí thấp nhất (mốc thế năng), thế năng bằng 0 và động năng đạt giá trị cực đại W = W_đ,max = (1/2)m·v_max^2. Trong suốt quá trình chuyển động, động năng giảm bao nhiêu thì thế năng tăng bấy nhiêu và ngược lại.',
            keyPoints: [
              'Điều kiện bảo toàn: Chỉ có lực thế (trọng lực, lực đàn hồi) sinh công; không có ma sát, lực cản hoặc biến dạng dẻo.',
              'Tại mọi điểm bất kỳ: (1/2)m·v_1^2 + m·g·z_1 = (1/2)m·v_2^2 + m·g·z_2.',
            ],
            realWorldApplication:
              'Đường trượt tàu lượn siêu tốc (Roller coaster): đồi lượn thứ nhất luôn phải cao nhất để tích đủ thế năng ban đầu cho tàu lượn vượt qua các khúc lộn vòng tiếp theo.',
          },
          {
            heading: '2. Biến thiên cơ năng khi có lực ma sát và lực cản',
            content:
              'Trong thực tế luôn tồn tại lực cản của không khí hoặc ma sát giữa các bề mặt tiếp xúc. Do lực ma sát sinh công âm cản trở chuyển động (A_ms = -F_ms · s), cơ năng của hệ không còn bảo toàn mà bị hao hụt một lượng chính bằng độ lớn của công lực cản: W_cuối - W_đầu = A_cản. Phần cơ năng hao hụt này không mất đi mà đã chuyển hóa thành nội năng (làm nóng các mặt tiếp xúc và không khí xung quanh) theo đúng định luật bảo toàn năng lượng toàn phần.',
            keyPoints: [
              'ΔW = W_2 - W_1 = A_ms < 0.',
              'Nhiệt lượng tỏa ra do ma sát: Q_tỏa = |A_ms| = W_đầu - W_cuối.',
            ],
            realWorldApplication:
              'Tàu vũ trụ khi tái nhập bầu khí quyển Trái Đất: cơ năng khổng lồ biến thành nhiệt lượng ma sát làm nóng tấm chắn nhiệt lên hàng nghìn độ C.',
          },
        ],
        quantities: [
          {
            name: 'Cơ năng',
            symbol: 'W (hoặc E)',
            si_unit: 'Joule (J)',
            other_units: 'kJ, cal',
            measuring_device: 'Tính toán gián tiếp từ động năng và thế năng',
            description: 'Tổng động năng và thế năng của vật tại một trạng thái cơ học xác định.',
          },
          {
            name: 'Nhiệt lượng ma sát tỏa ra',
            symbol: 'Q (hoặc |A_ms|)',
            si_unit: 'Joule (J)',
            other_units: 'kJ, kcal',
            measuring_device: 'Nhiệt lượng kế',
            description: 'Phần năng lượng chuyển hóa từ cơ năng thành nhiệt do tác dụng của lực ma sát.',
          },
        ],
        formulas: [
          {
            name: 'Định luật bảo toàn cơ năng',
            latex_expression: 'W = W_đ + W_t = \\frac{1}{2}m v^2 + m g z = \\text{const}',
            plain_expression: '0.5 * m * v^2 + m * g * z = const',
            variables: [
              { symbol: 'W', name: 'Cơ năng toàn phần', unit: 'J' },
              { symbol: 'm', name: 'Khối lượng vật', unit: 'kg' },
              { symbol: 'v', name: 'Vận tốc của vật', unit: 'm/s' },
              { symbol: 'z', name: 'Tọa độ độ cao so với mốc thế năng', unit: 'm' },
            ],
            derived_formulas: [
              { expression: 'v_{\\max} = \\sqrt{2 g h_{\\max}}', description: 'Vận tốc cực đại tại vị trí mốc thế năng (khi thả từ độ cao h)' },
              { expression: 'W_2 - W_1 = A_{\\text{ms}} = -F_{\\text{ms}} \\cdot s', description: 'Biến thiên cơ năng khi có lực ma sát' },
            ],
            usage_note: 'Công thức v = sqrt(2gh) áp dụng cho mọi quỹ đạo cong lượn trơn nhẵn không ma sát, không phụ thuộc hình dạng dốc.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Con lắc đơn dao động và tính vận tốc tại vị trí cân bằng',
            difficulty: 'van_dung',
            problem_statement:
              'Một con lắc đơn gồm quả cầu nhỏ nặng 200 g treo vào đầu sợi dây nhẹ không dãn dài l = 1 m. Kéo con lắc lệch góc α_0 = 60° so với phương thẳng đứng rồi buông nhẹ (v_0 = 0). Lấy g = 9,8 m/s^2 và bỏ qua lực cản không khí. Chọn mốc thế năng tại vị trí cân bằng. Tính vận tốc của quả cầu và lực căng của sợi dây khi quả cầu đi qua vị trí cân bằng.',
            given_summary: 'm = 200 g = 0,2 kg, l = 1 m, alpha_0 = 60°, v_0 = 0, g = 9,8 m/s^2.',
            solution_steps: [
              'Bước 1: Độ cao ban đầu của quả cầu so với vị trí cân bằng: h_0 = l · (1 - cos α_0) = 1 · (1 - cos 60°) = 1 · (1 - 0,5) = 0,5 m.',
              'Bước 2: Cơ năng tại vị trí thả A: W_A = W_tA = m·g·h_0 = 0,2 · 9,8 · 0,5 = 0,98 J.',
              'Bước 3: Tại vị trí cân bằng O (z = 0), thế năng W_tO = 0. Áp dụng bảo toàn cơ năng: W_O = W_A ⇔ (1/2)m·v_max^2 = m·g·h_0 ⇒ v_max = \\sqrt{2 g h_0} = \\sqrt{2 · 9,8 · 0,5} = \\sqrt{9,8} ≈ 3,13 m/s.',
              'Bước 4: Tại vị trí cân bằng, hợp lực gồm lực căng T hướng lên và trọng lực P hướng xuống đóng vai trò lực hướng tâm: T - mg = m·v^2 / l ⇒ T = mg + m·v^2 / l = 0,2 · 9,8 + 0,2 · 9,8 / 1 = 1,96 + 1,96 = 3,92 N.',
            ],
            final_answer: 'Vận tốc tại vị trí cân bằng v ≈ 3,13 m/s; Lực căng dây T = 3,92 N.',
          },
        ],
        simulation: {
          sim_key: 'g10_conservation_energy_lab',
          title: 'Mô phỏng bảo toàn cơ năng: Tàu lượn và Con lắc dao động',
          description:
            'Chạy mô phỏng tàu lượn trượt trên cung tròn hoặc con lắc dây; theo dõi thời gian thực biểu đồ tròn và cột phân phối giữa Động năng (xanh lá), Thế năng (xanh dương) và Nhiệt năng tổn hao do ma sát (đỏ).',
          parameters: { pendulumLength: 1.5, releaseAngleDeg: 45, airDragCoeff: 0.02, gravity: 9.8 },
          guide_steps: [
            'Thả con lắc với lực cản bằng 0 để quan sát cơ năng toàn phần là đường thẳng nằm ngang bảo toàn tuyệt đối.',
            'Tăng dần hệ số lực cản không khí và theo dõi biên độ góc giảm dần (dao động tắt dần) khi cơ năng chuyển thành nhiệt.',
            'Bật hiển thị vectơ vận tốc và lực căng dây để phân tích điểm có gia tốc hướng tâm lớn nhất.',
          ],
          physics_insight:
            'Tại vị trí cân bằng, lực căng dây T = mg(3 - 2·cos α_0) luôn lớn hơn trọng lực P do phải cung cấp thêm lực hướng tâm để uốn cong quỹ đạo tròn.',
        },
      },
    ],
  },
  {
    order_index: 5,
    code: 'G10-CH5',
    title: 'Chương 5: Động lượng và Va chạm',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Vật lí 10 GDPT 2018 (Kết nối tri thức Bài 25-26, Chân trời sáng tạo Bài 18-19, Cánh Diều Bài 10): Khái niệm vectơ động lượng p = m·v và xung lượng của lực F·Δt = Δp; định luật bảo toàn động lượng trong hệ kín; nguyên tắc hoạt động của chuyển động bằng phản lực và động cơ tên lửa; phân loại và khảo sát chi tiết va chạm đàn hồi (bảo toàn cả động lượng và cơ năng) và va chạm mềm (tổn hao động năng lớn nhất).',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 5: Động lượng và Va chạm
1. **Động lượng ($\\vec{p}$) và Xung lượng của lực:**
   - **Vectơ động lượng** của một vật là đại lượng vectơ cùng hướng với vận tốc $\\vec{v}$:
     $$\\vec{p} = m \\vec{v}$$
     Đơn vị: $\\text{kg}\\cdot\\text{m/s}$ (tương đương với $\\text{N}\\cdot\\text{s}$).
   - **Xung lượng của lực và độ biến thiên động lượng:** Khi lực $\\vec{F}$ tác dụng lên vật trong khoảng thời gian $\\Delta t$:
     $$\\vec{F} \\cdot \\Delta t = \\Delta\\vec{p} = \\vec{p}_2 - \\vec{p}_1 = m\\vec{v}_2 - m\\vec{v}_1$$
     Dạng tổng quát của Định luật II Newton: $\\vec{F} = \\frac{\\Delta\\vec{p}}{\\Delta t}$.
2. **Định luật bảo toàn động lượng:**
   - **Hệ kín (hệ cô lập):** Là hệ chỉ có các nội lực tương tác giữa các vật trong hệ với nhau, các ngoại lực triệt tiêu hoặc rất nhỏ so với nội lực (như trong hiện tượng nổ, va chạm mạnh, súng bắn).
   - **Nội dung:** Tổng vectơ động lượng của một hệ kín là một đại lượng bảo toàn:
     $$\\sum \\vec{p}_{\\text{trước}} = \\sum \\vec{p}_{\\text{sau}} \\iff m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = m_1 \\vec{v}_1' + m_2 \\vec{v}_2'$$
3. **Chuyển động bằng phản lực:**
   - Khi một phần của hệ phóng ra theo một hướng với vận tốc $\\vec{v}$ thì phần còn lại bị đẩy lùi theo hướng ngược lại với vận tốc $\\vec{V}$:
     $$M \\vec{V} + m \\vec{v} = \\vec{0} \\implies \\vec{V} = -\\frac{m}{M}\\vec{v}$$
   - Ứng dụng: Tên lửa vũ trụ phụt khí phản lực, súng giật lùi khi bắn đạn, chuyển động của mực nang, bạch tuộc trong đại dương.
4. **Phân loại va chạm:**
   - **Va chạm đàn hồi:** Động lượng và Động năng toàn phần của hệ đều được bảo toàn:
     $$\\sum \\vec{p} = \\text{const}; \\quad \\sum W_đ = \\text{const}$$
   - **Va chạm mềm (va chạm không đàn hồi hoàn toàn):** Sau va chạm, hai vật dính liền vào nhau và chuyển động cùng vận tốc $\\vec{V}$:
     $$\\vec{V} = \\frac{m_1 \\vec{v}_1 + m_2 \\vec{v}_2}{m_1 + m_2}$$
     Động năng của hệ giảm; phần động năng hao hụt chuyển thành nhiệt làm biến dạng và nóng vật: $\\Delta W_đ = W_{đ1} - W_{đ2} > 0$.`,
    key_takeaways: [
      'Động lượng p = m·v là đại lượng vectơ. Mối liên hệ xung lượng: F · Δt = Δp; thời gian va chạm càng ngắn thì lực tương tác càng khủng khiếp.',
      'Định luật bảo toàn động lượng áp dụng cho hệ kín, kể cả khi cơ năng không bảo toàn (như va chạm mềm hay nổ bom).',
      'Sau va chạm mềm, hai vật dính làm một và cơ năng luôn giảm; trong va chạm đàn hồi thì cả động lượng và cơ năng đều bảo toàn.',
    ],
    formula_cheatsheet: [
      {
        name: 'Vectơ động lượng và Xung lượng lực',
        latex: '\\vec{p} = m \\vec{v}; \\quad \\vec{F} \\Delta t = \\Delta\\vec{p} = m\\vec{v}_2 - m\\vec{v}_1',
        note: 'Đơn vị: kg·m/s hoặc N·s.',
      },
      {
        name: 'Định luật bảo toàn động lượng',
        latex: '\\sum \\vec{p}_{\\text{trước}} = \\sum \\vec{p}_{\\text{sau}}',
        note: 'Phải chiếu phương trình vectơ lên hệ trục tọa độ đã chọn.',
      },
      {
        name: 'Vận tốc sau va chạm mềm',
        latex: '\\vec{V} = \\frac{m_1 \\vec{v}_1 + m_2 \\vec{v}_2}{m_1 + m_2}',
        note: 'Hai vật dính liền làm một sau va chạm.',
      },
      {
        name: 'Vận tốc va chạm đàn hồi trực diện 1D',
        latex: 'v_1\' = \\frac{(m_1 - m_2)v_1 + 2m_2 v_2}{m_1 + m_2}; \\quad v_2\' = \\frac{(m_2 - m_1)v_2 + 2m_1 v_1}{m_1 + m_2}',
        note: 'Khi m_1 = m_2 thì hai vật trao đổi vận tốc cho nhau: v_1\' = v_2 và v_2\' = v_1.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G10-CH5-TP1',
        title: 'Chủ đề 5.1: Động lượng và Xung lượng của lực',
        textbook_tags: ['KNTT Bài 25', 'CTST Bài 18', 'CD Bài 10'],
        overview:
          'Tìm hiểu khái niệm động lượng của một vật chuyển động, tính chất vectơ và ý nghĩa của xung lượng của lực F·Δt = Δp. Giải thích tại sao thời gian tương tác ngắn tạo ra lực va đập cực lớn, từ đó giải thích các biện pháp an toàn giao thông như túi khí, đệm mũ bảo hiểm và vùng co rụm đầu xe ô tô.',
        summary_note:
          'Ghi nhớ: F = Δp / Δt. Kéo dài thời gian tương tác Δt sẽ làm giảm đáng kể lực va chạm F, giúp bảo vệ tính mạng con người trong các tai nạn giao thông.',
        theory_sections: [
          {
            heading: '1. Vectơ Động lượng và Xung lượng của lực',
            content:
              'Động lượng p = m·v là thước đo khả năng truyền chuyển động của một vật khi tương tác với các vật khác. Một đoàn tàu nặng hàng ngàn tấn dù chuyển động chậm vẫn có động lượng khổng lồ và rất khó hãm phanh; ngược lại, một viên đạn súng trường khối lượng nhỏ chỉ vài chục gam nhưng bay với vận tốc 800 m/s cũng có động lượng rất lớn và sức xuyên phá ghê gớm. Xung lượng của lực F·Δt biểu thị tác dụng tích lũy của lực trong khoảng thời gian Δt, làm thay đổi động lượng của vật: F·Δt = Δp.',
            keyPoints: [
              'Động lượng p = m·v cùng hướng với vectơ vận tốc v.',
              'Độ biến thiên động lượng Δp = p_2 - p_1 = m·(v_2 - v_1). Phép trừ phải thực hiện theo quy tắc vectơ.',
              'F = Δp / Δt: Lực tương tác tỉ lệ nghịch với thời gian va chạm Δt.',
            ],
            realWorldApplication:
              'Vận động viên nhảy cao nhảy tiếp đất trên đệm mút dày để tăng thời gian giảm tốc Δt từ 0,02 s lên 0,5 s, giúp giảm lực ép tác dụng lên xương khớp xuống hơn 20 lần.',
          },
          {
            heading: '2. Các ứng dụng an toàn giảm chấn trong đời sống',
            content:
              'Trong công nghệ chế tạo ô tô hiện đại, phần đầu và đuôi xe được thiết kế có các "vùng co rụm" (crumple zones) dễ bị bẹp gập khi xảy ra đâm va. Khi xe gặp tai nạn, vùng co rụm này biến dạng dẻo để kéo dài thời gian dừng lại Δt từ vài mili-giây lên hàng trăm mili-giây. Kết hợp với dây đai an toàn co dãn nhẹ và túi khí bung ra, gia tốc hãm và lực tác dụng lên ngực và đầu tài xế được giảm xuống mức cơ thể chịu đựng được.',
            keyPoints: [
              'Túi khí ô tô phồng căng kịp thời tạo lớp đệm mềm ngăn người lái đập trực tiếp vào vô lăng.',
              'Găng tay boxing dày làm tăng thời gian cú đấm tiếp xúc, hạn chế chấn thương sọ não cho võ sĩ.',
            ],
            realWorldApplication:
              'Bao bì chống sốc có các bóng khí nilon giúp bảo vệ các thiết bị điện tử tinh xảo khi bị rơi rớt trong quá trình vận chuyển bưu chính.',
          },
        ],
        quantities: [
          {
            name: 'Vectơ động lượng',
            symbol: '\\vec{p}',
            si_unit: 'Kilôgam mét trên giây (kg·m/s)',
            other_units: 'Newton giây (N·s)',
            measuring_device: 'Tính toán gián tiếp từ khối lượng và cảm biến đo vận tốc quang học',
            description: 'Đại lượng vectơ đặc trưng cho chuyển động về mặt động lực học và khả năng truyền tương tác.',
          },
          {
            name: 'Xung lượng của lực',
            symbol: '\\vec{F} \\cdot \\Delta t',
            si_unit: 'Newton giây (N·s)',
            other_units: 'kg·m/s',
            measuring_device: 'Cảm biến lực va chạm (Load Cell / Piezoelectric sensor)',
            description: 'Tích của lực tác dụng và khoảng thời gian lực tác dụng lên vật.',
          },
        ],
        formulas: [
          {
            name: 'Công thức xung lượng và độ biến thiên động lượng',
            latex_expression: '\\vec{F} \\cdot \\Delta t = \\Delta\\vec{p} = m \\vec{v}_2 - m \\vec{v}_1',
            plain_expression: 'F * delta_t = delta_p = m * v2 - m * v1',
            variables: [
              { symbol: 'F', name: 'Lực trung bình tác dụng trong khoảng thời gian va chạm', unit: 'N' },
              { symbol: '\\Delta t', name: 'Thời gian tương tác va chạm', unit: 's' },
              { symbol: '\\vec{p}_1, \\vec{p}_2', name: 'Động lượng trước và sau va chạm', unit: 'kg·m/s' },
              { symbol: 'm', name: 'Khối lượng của vật', unit: 'kg' },
            ],
            derived_formulas: [
              { expression: '\\vec{F} = \\frac{\\Delta\\vec{p}}{\\Delta t}', description: 'Định luật II Newton dạng tổng quát' },
            ],
            usage_note: 'Lưu ý dấu của vận tốc khi vật bị bật ngược trở lại: nếu chọn chiều dương là chiều tới thì vận tốc dội lại mang dấu âm.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Quả bóng đập vào tường và tính lực cản trung bình của tường',
            difficulty: 'thong_hieu',
            problem_statement:
              'Một quả bóng tennis khối lượng m = 60 g bay theo phương ngang với vận tốc v_1 = 25 m/s đập vuông góc vào một bức tường phẳng rồi bật ngược trở lại theo phương cũ với vận tốc v_2 = 20 m/s. Biết thời gian bóng tiếp xúc và biến dạng trên mặt tường là Δt = 0,05 s. Tính độ biến thiên động lượng của quả bóng và độ lớn lực trung bình mà bức tường tác dụng lên quả bóng.',
            given_summary: 'm = 60 g = 0,06 kg, v_1 = 25 m/s, v_2 = -20 m/s (chọn chiều dương là chiều bay tới), delta_t = 0,05 s.',
            solution_steps: [
              'Bước 1: Chọn chiều dương là chiều chuyển động ban đầu của quả bóng hướng vào tường. Khi đó v_1 = +25 m/s, v_2 = -20 m/s.',
              'Bước 2: Độ biến thiên động lượng của bóng: Δp = m·v_2 - m·v_1 = 0,06 · (-20) - 0,06 · 25 = -1,2 - 1,5 = -2,7 kg·m/s. Độ lớn |Δp| = 2,7 kg·m/s (dấu âm thể hiện hướng bật ngược ra khỏi tường).',
              'Bước 3: Độ lớn lực trung bình tường tác dụng lên quả bóng: F = |Δp| / Δt = 2,7 / 0,05 = 54 N.',
            ],
            final_answer: 'Độ biến thiên động lượng Δp = -2,7 kg·m/s; Lực trung bình của tường F = 54 N.',
          },
        ],
        simulation: {
          sim_key: 'g10_impulse_momentum_lab',
          title: 'Mô phỏng Xung lượng lực và Va chạm với tường đàn hồi',
          description:
            'Bắn các viên bi cao su hoặc đất sét vào tường với độ cứng đệm tường điều chỉnh; đo lực tức thời F(t) bằng đồ thị hình chuông và diện tích tích phân xung lượng F·Δt.',
          parameters: { ballMass: 0.1, initialSpeed: 20, contactTimeMs: 40, restitution: 0.8 },
          guide_steps: [
            'Thay đổi vật liệu tường từ bê tông cứng sang đệm cao su mềm để quan sát thời gian tiếp xúc Δt dãn dài.',
            'Quan sát đỉnh lực va chạm F_max giảm rõ rệt khi thời gian tiếp xúc tăng, trong khi tổng diện tích tích phân F·Δt không đổi.',
            'Chuyển sang chế độ va chạm không đàn hồi (bi đất dính vào tường) và so sánh Δp với va chạm đàn hồi.',
          ],
          physics_insight:
            'Khi vật bật ngược trở lại, Δp = m·v_2 - (-m·v_1) = m(v_1 + v_2) lớn gấp gần 2 lần so với khi vật bị giữ lại dính chặt vào tường, dẫn đến xung lượng lớn gấp đôi.',
        },
      },
      {
        order_index: 2,
        code: 'G10-CH5-TP2',
        title: 'Chủ đề 5.2: Định luật bảo toàn động lượng và Chuyển động phản lực',
        textbook_tags: ['KNTT Bài 26', 'CTST Bài 19', 'CD Bài 10'],
        overview:
          'Xây dựng định luật bảo toàn động lượng cho hệ kín gồm nhiều vật tương tác. Ứng dụng giải bài toán súng giật khi bắn đạn và nguyên tắc hoạt động của động cơ phản lực tên lửa đa tầng thám hiểm không gian vũ trụ.',
        summary_note:
          'Ghi nhớ: Hệ kín ban đầu đứng yên (p_hệ = 0): M·V + m·v = 0 ⇒ V = -(m/M)·v. Dấu trừ khẳng định phần còn lại luôn chuyển động ngược hướng với phần khí hoặc viên đạn phụt ra.',
        theory_sections: [
          {
            heading: '1. Khái niệm Hệ kín và Định luật bảo toàn động lượng',
            content:
              'Một hệ vật được coi là hệ kín (cô lập) khi không có ngoại lực tác dụng, hoặc các ngoại lực cân bằng nhau triệt tiêu. Ngay cả khi có ngoại lực (như trọng lực) nhưng trong một khoảng thời gian cực ngắn (như khi nổ súng hay va đập), nội lực tương tác giữa các vật cực lớn so với ngoại lực thì hệ vẫn được coi gần đúng là hệ kín theo phương chuyển động. Khi đó, tổng vectơ động lượng trước và sau biến cố luôn bằng nhau: Σ p_trước = Σ p_sau.',
            keyPoints: [
              'Định luật bảo toàn động lượng là một trong những định luật bảo toàn nền tảng nhất của vũ trụ, đúng từ hạt cơ bản hạ nguyên tử đến thiên hà vũ trụ.',
              'Nếu hình chiếu của ngoại lực lên một phương bằng 0 thì động lượng của hệ bảo toàn theo phương đó.',
            ],
            realWorldApplication:
              'Pháo thủ khi bắn súng đại bác phải thiết kế hệ thống xi-lanh giảm giật thủy lực để hấp thụ động lượng giật lùi M·V của nòng pháo mà không làm lật bệ pháo.',
          },
          {
            heading: '2. Nguyên lý chuyển động bằng phản lực và Tên lửa vũ trụ',
            content:
              'Tên lửa bay vào không gian không cần tựa vào không khí. Ở buồng đốt tên lửa, nhiên liệu cháy tạo ra lượng khí áp suất cao phụt ra phía sau với vận tốc khí v cực lớn (hàng km/s). Theo định luật bảo toàn động lượng, thân tên lửa khối lượng M sẽ thu được vận tốc tiến về phía trước V = -(m_khí / M) · v_khí. Để đạt được vận tốc vũ trụ cấp 1 (khoảng 7,9 km/s để đưa vệ tinh vào quỹ đạo quanh Trái Đất), các kĩ sư chế tạo tên lửa nhiều tầng: sau khi cháy hết nhiên liệu, vỏ tầng rỗng được tách bỏ để giảm M, giúp các tầng tiếp theo tăng tốc vượt bậc.',
            keyPoints: [
              'Chuyển động bằng phản lực hoạt động tối ưu nhất trong chân không vũ trụ vì không chịu sức cản không khí.',
              'Công thức Tsiolkovsky mô tả vận tốc cực đại của tên lửa phụ thuộc vào tỉ số khối lượng nhiên liệu và khối lượng kết cấu.',
            ],
            realWorldApplication:
              'Tên lửa Saturn V đưa con người lên Mặt Trăng và tên lửa Falcon 9 của SpaceX đều áp dụng nguyên lý phản lực nhiều tầng và hạ cánh ngược bằng động cơ phản lực.',
          },
        ],
        quantities: [
          {
            name: 'Tổng động lượng hệ vật',
            symbol: '\\sum \\vec{p}',
            si_unit: 'kg·m/s',
            other_units: 'N·s',
            measuring_device: 'Tính toán tổng vectơ',
            description: 'Tổng vectơ động lượng của tất cả các phần tử cấu thành nên hệ vật lý kín.',
          },
          {
            name: 'Vận tốc phản lực giật lùi',
            symbol: '\\vec{V}',
            si_unit: 'm/s',
            other_units: 'km/h',
            measuring_device: 'Đồng hồ tốc độ GPS hoặc cảm biến gia tốc quán tính (IMU)',
            description: 'Vận tốc thu được của vật thể chính khi phụt ra một khối lượng chất lưu phụ trợ.',
          },
        ],
        formulas: [
          {
            name: 'Định luật bảo toàn động lượng hệ kín',
            latex_expression: 'm_1 \\vec{v}_1 + m_2 \\vec{v}_2 = m_1 \\vec{v}_1\' + m_2 \\vec{v}_2\'',
            plain_expression: 'm1 * v1 + m2 * v2 = m1 * v1_prime + m2 * v2_prime',
            variables: [
              { symbol: 'm_1, m_2', name: 'Khối lượng các vật trong hệ', unit: 'kg' },
              { symbol: '\\vec{v}_1, \\vec{v}_2', name: 'Vận tốc các vật trước tương tác', unit: 'm/s' },
              { symbol: '\\vec{v}_1\', \\vec{v}_2\'', name: 'Vận tốc các vật sau tương tác', unit: 'm/s' },
            ],
            derived_formulas: [
              { expression: '\\vec{V} = -\\frac{m}{M}\\vec{v}', description: 'Vận tốc phản lực khi hệ ban đầu đứng yên' },
            ],
            usage_note: 'Bắt buộc chọn trục tọa độ chiếu để chuyển phương trình vectơ sang phương trình đại số với dấu cộng trừ tương ứng.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Súng trường bắn đạn giật lùi',
            difficulty: 'thong_hieu',
            problem_statement:
              'Một khẩu súng trường có khối lượng M = 4 kg bắn một viên đạn có khối lượng m = 20 g. Vận tốc đầu nòng của viên đạn khi rời khỏi súng là v = 600 m/s theo phương ngang. Bỏ qua ma sát giữa súng và bệ tỳ người bắn tại thời điểm bắn. Hãy tính vận tốc giật lùi của súng.',
            given_summary: 'M = 4 kg, m = 20 g = 0,02 kg, v = 600 m/s, ban đầu hệ đứng yên (p_đầu = 0).',
            solution_steps: [
              'Bước 1: Hệ gồm súng và viên đạn trước khi bắn đứng yên, nên tổng động lượng ban đầu của hệ bằng 0: p_trước = 0.',
              'Bước 2: Trong thời gian thuốc nổ cháy nổ súng rất ngắn (vài mili-giây), nội lực của khí thuốc nổ cực lớn nên hệ súng-đạn là hệ kín theo phương ngang.',
              'Bước 3: Áp dụng định luật bảo toàn động lượng: p_sau = p_trước ⇔ M·V + m·v = 0.',
              'Bước 4: Suy ra vận tốc giật lùi của súng: V = - (m · v) / M = - (0,02 · 600) / 4 = - 12 / 4 = -3 m/s. Dấu trừ cho biết súng bị giật lùi ngược chiều với hướng bay của viên đạn.',
            ],
            final_answer: 'Vận tốc giật lùi của súng có độ lớn là 3 m/s (hướng ngược chiều viên đạn).',
          },
        ],
        simulation: {
          sim_key: 'g10_rocket_propulsion_lab',
          title: 'Mô phỏng Chuyển động phản lực và Phóng tên lửa',
          description:
            'Phóng tên lửa trong không gian không trọng lực hoặc khí quyển; điều chỉnh tốc độ tiêu hao nhiên liệu dm/dt và vận tốc phụt khí v_khí; theo dõi vận tốc tên lửa tăng theo hàm logarit.',
          parameters: { dryMass: 1000, fuelMass: 4000, exhaustSpeed: 2500, burnRateKgPerS: 50 },
          guide_steps: [
            'Nhấn Phóng tên lửa và theo dõi đồng hồ đo gia tốc a = (v_khí · burnRate) / m(t) tăng dần khi khối lượng m(t) giảm.',
            'Thử nghiệm tách tầng tên lửa rỗng và ghi nhận bước nhảy vọt về gia tốc của tầng thứ hai.',
            'So sánh kết quả vận tốc cực đại với công thức Tsiolkovsky v = v_khí · ln(m_đầu / m_cuối).',
          ],
          physics_insight:
            'Gia tốc tên lửa tăng dần trong suốt hành trình đốt nhiên liệu vì lực đẩy phản lực F = v_khí · (dm/dt) không đổi nhưng khối lượng tên lửa liên tục giảm đi.',
        },
      },
      {
        order_index: 3,
        code: 'G10-CH5-TP3',
        title: 'Chủ đề 5.3: Các loại va chạm (Va chạm đàn hồi và Va chạm mềm)',
        textbook_tags: ['KNTT Bài 26', 'CTST Bài 19', 'CD Bài 10'],
        overview:
          'Phân tích chi tiết hai mô hình va chạm giới hạn trong cơ học cổ điển: va chạm đàn hồi hoàn toàn (bảo toàn cả động lượng và động năng) và va chạm mềm hoàn toàn (bảo toàn động lượng, tổn hao động năng tối đa). Nắm vững hệ quả trao đổi vận tốc khi hai vật cùng khối lượng va chạm đàn hồi và ứng dụng con lắc thử đạn đo vận tốc đạn bắn.',
        summary_note:
          'Ghi nhớ: Va chạm mềm: V = (m1·v1 + m2·v2)/(m1 + m2). Động năng hao hụt: ΔW = W_đ,trước - W_đ,sau > 0 luôn chuyển hóa thành nhiệt và công làm biến dạng dẻo.',
        theory_sections: [
          {
            heading: '1. Khảo sát Va chạm mềm (Va chạm không đàn hồi)',
            content:
              'Va chạm mềm là va chạm mà sau tương tác, hai vật biến dạng dính chặt vào nhau và chuyển động chung với cùng một vận tốc V. Vì không có ngoại lực triệt tiêu động lượng hệ theo phương ngang, động lượng vẫn bảo toàn: m_1·v_1 + m_2·v_2 = (m_1 + m_2)·V ⇒ V = (m_1·v_1 + m_2·v_2) / (m_1 + m_2). Tuy nhiên, cơ năng của hệ không bảo toàn: một phần lớn động năng ban đầu đã bị tiêu hao làm đứt gãy liên kết vật liệu, biến dạng vĩnh viễn và tỏa nhiệt ra môi trường.',
            keyPoints: [
              'Sau va chạm mềm hai vật có cùng vận tốc.',
              'Độ giảm cơ năng ΔW_đ = W_đ,trước - W_đ,sau = (1/2)·[m_1·m_2 / (m_1 + m_2)]·(v_1 - v_2)^2 > 0.',
            ],
            realWorldApplication:
              'Con lắc thử đạn (Ballistic pendulum): bắn viên đạn bay nhanh vào khối gỗ treo trên dây, đạn găm dính vào gỗ rồi khối gỗ lắc lên độ cao h; đo h sẽ tính ngược ra vận tốc cực lớn ban đầu của viên đạn.',
          },
          {
            heading: '2. Khảo sát Va chạm đàn hồi trực diện',
            content:
              'Va chạm đàn hồi là va chạm lý tưởng trong đó các vật bị biến dạng đàn hồi tạm thời khi chạm nhau rồi phục hồi nguyên vẹn hình dạng ban đầu, đẩy nhau ra xa. Trong va chạm đàn hồi, cả động lượng và động năng toàn phần của hệ đều được bảo toàn: m_1·v_1 + m_2·v_2 = m_1·v_1\' + m_2·v_2\' và (1/2)m_1·v_1^2 + (1/2)m_2·v_2^2 = (1/2)m_1·v_1\'^2 + (1/2)m_2·v_2\'^2. Khi hai vật có cùng khối lượng (m_1 = m_2) va chạm đàn hồi trực diện, chúng sẽ hoán đổi vận tốc hoàn toàn cho nhau: v_1\' = v_2 và v_2\' = v_1.',
            keyPoints: [
              'Vận tốc tương đối sau va chạm đảo ngược: v_2\' - v_1\' = -(v_2 - v_1).',
              'Đồ chơi con lắc Newton gồm 5 quả cầu kim loại treo cạnh nhau minh chứng sống động cho sự bảo toàn động lượng và động năng qua các va chạm liên tiếp.',
            ],
            realWorldApplication:
              'Trong trò chơi bida (Bi-a), khi viên bi cái đập trực diện vào viên bi mục tiêu đang đứng yên có cùng khối lượng, bi cái dừng lại hẳn (v_1\' = 0) và truyền toàn bộ vận tốc cho bi mục tiêu bay đi.',
          },
        ],
        quantities: [
          {
            name: 'Vận tốc chung sau va chạm mềm',
            symbol: 'V',
            si_unit: 'm/s',
            other_units: 'km/h',
            measuring_device: 'Cổng quang điện đôi hoặc camera quay tốc độ cao',
            description: 'Vận tốc hợp nhất của hai vật sau khi dính liền vào nhau.',
          },
          {
            name: 'Tổn hao động năng',
            symbol: '\\Delta W_đ',
            si_unit: 'Joule (J)',
            other_units: 'kJ, cal',
            measuring_device: 'Tính toán chênh lệch năng lượng',
            description: 'Lượng cơ năng biến thành nội năng làm biến dạng và nóng hệ vật.',
          },
        ],
        formulas: [
          {
            name: 'Công thức va chạm mềm một chiều',
            latex_expression: 'V = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}',
            plain_expression: 'V = (m1 * v1 + m2 * v2) / (m1 + m2)',
            variables: [
              { symbol: 'm_1, m_2', name: 'Khối lượng hai vật va chạm', unit: 'kg' },
              { symbol: 'v_1, v_2', name: 'Vận tốc ban đầu của hai vật', unit: 'm/s' },
              { symbol: 'V', name: 'Vận tốc chung của khối kết hợp sau va chạm', unit: 'm/s' },
            ],
            derived_formulas: [
              { expression: 'v_1\' = \\frac{(m_1 - m_2)v_1 + 2m_2 v_2}{m_1 + m_2}', description: 'Vận tốc vật 1 sau va chạm đàn hồi trực diện' },
              { expression: 'v_2\' = \\frac{(m_2 - m_1)v_2 + 2m_1 v_1}{m_1 + m_2}', description: 'Vận tốc vật 2 sau va chạm đàn hồi trực diện' },
            ],
            usage_note: 'Khi vật 2 ban đầu đứng yên (v_2 = 0) và m_1 = m_2 trong va chạm đàn hồi thì v_1\' = 0 và v_2\' = v_1.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Va chạm mềm giữa hai toa xe và tính hao phí năng lượng',
            difficulty: 'van_dung',
            problem_statement:
              'Toa xe thứ nhất khối lượng m_1 = 3 tấn đang chạy trên đường ray thẳng nằm ngang với vận tốc v_1 = 4 m/s đến va chạm mềm vào toa xe thứ hai khối lượng m_2 = 2 tấn đang đứng yên (v_2 = 0). Sau va chạm hai toa xe móc nối vào nhau và cùng chuyển động với vận tốc V. Bỏ qua ma sát với đường ray. Tính vận tốc V và phần động năng bị biến thành nhiệt trong cú va chạm.',
            given_summary: 'm_1 = 3000 kg, v_1 = 4 m/s, m_2 = 2000 kg, v_2 = 0.',
            solution_steps: [
              'Bước 1: Áp dụng định luật bảo toàn động lượng cho hệ hai toa xe: m_1·v_1 + m_2·v_2 = (m_1 + m_2)·V ⇒ V = (m_1 · v_1) / (m_1 + m_2) = (3000 · 4) / (3000 + 2000) = 12000 / 5000 = 2,4 m/s.',
              'Bước 2: Tính động năng toàn phần của hệ trước va chạm: W_đ1 = (1/2)m_1·v_1^2 = 0,5 · 3000 · 4^2 = 24000 J = 24 kJ.',
              'Bước 3: Tính động năng toàn phần của hệ sau va chạm: W_đ2 = (1/2)(m_1 + m_2)·V^2 = 0,5 · 5000 · 2,4^2 = 2500 · 5,76 = 14400 J = 14,4 kJ.',
              'Bước 4: Năng lượng hao phí biến thành nhiệt và biến dạng móc nối: ΔW = W_đ1 - W_đ2 = 24 - 14,4 = 9,6 kJ.',
            ],
            final_answer: 'Vận tốc sau va chạm V = 2,4 m/s; Động năng hao phí là 9,6 kJ.',
          },
        ],
        simulation: {
          sim_key: 'g10_collision_types_lab',
          title: 'Phòng thí nghiệm va chạm: Đàn hồi và Va chạm mềm',
          description:
            'Thả hai xe trượt va chạm trên đệm khí thẳng; điều chỉnh khối lượng hai xe m_1, m_2, vận tốc ban đầu và hệ số phục hồi e từ 0 (va chạm mềm dính chặt) đến 1 (va chạm đàn hồi hoàn toàn).',
          parameters: { mass1: 2, mass2: 1, velocity1: 5, velocity2: -2, elasticityCoeff: 1.0 },
          guide_steps: [
            'Đặt e = 1 (đàn hồi), m_1 = m_2 và cho xe 1 đâm vào xe 2 đang đứng yên để quan sát sự hoán đổi vận tốc.',
            'Đặt e = 0 (va chạm mềm) và quan sát thanh năng lượng hiển thị phần cơ năng hao hụt chuyển thành nhiệt.',
            'Cho xe nặng đâm xe rất nhẹ (m_1 >> m_2) và ghi nhận xe nhẹ bị bắn đi với vận tốc v_2\' xấp xỉ 2·v_1.',
          ],
          physics_insight:
            'Trong va chạm đàn hồi giữa vật rất nặng m_1 đang bay và vật rất nhẹ m_2 đứng yên, vật nhẹ sẽ văng đi với tốc độ gấp đôi tốc độ của vật nặng (v_2\' ≈ 2v_1).',
        },
      },
    ],
  },
  {
    order_index: 6,
    code: 'G10-CH6',
    title: 'Chương 6: Chuyển động tròn đều & Biến dạng vật rắn',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Vật lí 10 GDPT 2018 (Kết nối tri thức Bài 27-30, Chân trời sáng tạo Bài 20-22, Cánh Diều Bài 11-12): Khảo sát động học chuyển động tròn đều, chu kì T, tần số f, tốc độ góc ω, tốc độ dài v = ω·r và gia tốc hướng tâm a_ht = v^2/r; động lực học lực hướng tâm F_ht = m·a_ht và các ứng dụng thiết kế đường cua nghiêng góc tan(θ) = v^2/(gr); các dạng biến dạng cơ kéo, nén, giới hạn đàn hồi và Định luật Hooke F_đh = k·|Δl| cho lò xo xoắn.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 6: Chuyển động tròn đều & Biến dạng vật rắn
1. **Động học chuyển động tròn đều:**
   - Chuyển động tròn đều là chuyển động có quỹ đạo là đường tròn và tốc độ dài không đổi theo thời gian.
   - **Tốc độ góc ($\\omega$):** Góc quét được trong một đơn vị thời gian:
     $$\\omega = \\frac{\\Delta\\theta}{\\Delta t} = \\frac{2\\pi}{T} = 2\\pi f$$
     Đơn vị: Radian trên giây ($\\text{rad/s}$).
   - **Mối liên hệ giữa tốc độ dài ($v$) và tốc độ góc ($\\omega$):**
     $$v = \\omega \\cdot r$$
   - **Gia tốc hướng tâm ($a_{\\text{ht}}$):** Vectơ gia tốc luôn vuông góc với vận tốc và hướng vào tâm quỹ đạo:
     $$a_{\\text{ht}} = \\frac{v^2}{r} = \\omega^2 \\cdot r$$
2. **Lực hướng tâm ($F_{\\text{ht}}$):**
   - Lực (hoặc hợp lực của các lực) tác dụng lên vật chuyển động tròn đều gây ra gia tốc hướng tâm gọi là lực hướng tâm:
     $$F_{\\text{ht}} = m a_{\\text{ht}} = m \\frac{v^2}{r} = m \\omega^2 r$$
   - **Bản chất vật lí:** Lực hướng tâm không phải là loại lực mới trong tự nhiên, mà do các lực quen thuộc đóng vai trò (lực hấp dẫn giữ vệ tinh quay quanh Trái Đất, lực căng dây giữ hòn đá quay tròn, lực ma sát nghỉ giữ ô tô không trượt khi qua khúc cua).
   - **Đường cua nghiêng trong giao thông:** Để xe không phụ thuộc vào ma sát khi qua khúc cua tròn bán kính $r$ ở vận tốc $v$, mặt đường được đắp nghiêng một góc $\\theta$:
     $$\\tan\\theta = \\frac{v^2}{g \\cdot r}$$
3. **Biến dạng cơ của vật rắn & Định luật Hooke:**
   - **Biến dạng đàn hồi:** Là biến dạng mà vật tự lấy lại được hình dạng và kích thước ban đầu sau khi ngừng tác dụng ngoại lực (xảy ra khi lực nằm trong giới hạn đàn hồi).
   - **Độ biến dạng:** $\\Delta l = l - l_0$ (dãn khi $\\Delta l > 0$, nén khi $\\Delta l < 0$).
   - **Định luật Hooke (Húc):** Trong giới hạn đàn hồi, độ lớn lực đàn hồi của lò xo tỉ lệ thuận với độ biến dạng của lò xo:
     $$F_{\\text{đh}} = k \\cdot |\\Delta l|$$
     Trong đó $k$ là độ cứng (hệ số đàn hồi) của lò xo (đơn vị: $\\text{N/m}$).
   - **Ghép lò xo:**
     - Nối tiếp: $\\frac{1}{k_{\\text{nt}}} = \\frac{1}{k_1} + \\frac{1}{k_2} \\implies k_{\\text{nt}} < k_1, k_2$.
     - Song song: $k_{\\text{ss}} = k_1 + k_2 \\implies k_{\\text{ss}} > k_1, k_2$.`,
    key_takeaways: [
      'Trong chuyển động tròn đều, tốc độ dài không đổi nhưng hướng vectơ vận tốc luôn thay đổi, do đó luôn có gia tốc hướng tâm a_ht = v^2/r = ω^2·r.',
      'Lực hướng tâm là hợp lực giữ cho vật chuyển động theo quỹ đạo tròn. Ở đường cua nghiêng không ma sát: tan(θ) = v^2 / (gr).',
      'Định luật Hooke F_đh = k·|Δl| chỉ nghiệm đúng trong giới hạn đàn hồi của vật liệu.',
    ],
    formula_cheatsheet: [
      {
        name: 'Tốc độ góc, Chu kì và Tần số',
        latex: '\\omega = \\frac{2\\pi}{T} = 2\\pi f; \\quad v = \\omega \\cdot r',
        note: 'ω (rad/s); T (s); f (Hz); v (m/s); r: bán kính quỹ đạo (m).',
      },
      {
        name: 'Gia tốc hướng tâm và Lực hướng tâm',
        latex: 'a_{\\text{ht}} = \\frac{v^2}{r} = \\omega^2 r; \\quad F_{\\text{ht}} = m \\frac{v^2}{r} = m \\omega^2 r',
        note: 'Vectơ gia tốc hướng tâm luôn có gốc tại vật và hướng về tâm quỹ đạo tròn.',
      },
      {
        name: 'Góc nghiêng đường cua an toàn',
        latex: '\\tan\\theta = \\frac{v^2}{g \\cdot r}',
        note: 'Áp dụng cho đường đua F1, đường sắt trên cao và đường cao tốc.',
      },
      {
        name: 'Định luật Hooke cho lò xo đàn hồi',
        latex: 'F_{\\text{đh}} = k \\cdot |\\Delta l| = k \\cdot |l - l_0|',
        note: 'k: độ cứng của lò xo (N/m); Δl: độ dãn hoặc nén của lò xo (m).',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G10-CH6-TP1',
        title: 'Chủ đề 6.1: Động học chuyển động tròn đều',
        textbook_tags: ['KNTT Bài 27', 'CTST Bài 20', 'CD Bài 11'],
        overview:
          'Khảo sát các đại lượng đặc trưng của chuyển động tròn đều: cung quét rad, chu kì quay T, tần số f, tốc độ góc ω và mối liên hệ với tốc độ dài v = ω·r. Phân tích vectơ gia tốc hướng tâm a_ht đặc trưng cho sự thay đổi về phương hướng của vectơ vận tốc.',
        summary_note:
          'Ghi nhớ: 1 vòng = 2π rad = 360°. Kim giây quay 1 vòng hết 60 s (T = 60 s); kim phút T = 3600 s; kim giờ T = 43200 s (12 giờ).',
        theory_sections: [
          {
            heading: '1. Tọa độ góc, Tốc độ góc và Tốc độ dài',
            content:
              'Khi chất điểm chuyển động tròn đều trên đường tròn bán kính r, bán kính nối tâm với chất điểm quét được góc Δθ (tính bằng radian) trong khoảng thời gian Δt. Tốc độ góc ω = Δθ / Δt là đại lượng không đổi theo thời gian. Chu kì T là thời gian vật quay trọn 1 vòng (T = 2π/ω), còn tần số f = 1/T là số vòng quay được trong 1 giây (đơn vị Hertz, Hz hoặc vòng/phút rpm). Độ dài cung tròn đi được là s = r·Δθ, từ đó suy ra tốc độ dài chuyển động là v = s / Δt = ω·r.',
            keyPoints: [
              'Tất cả các điểm trên một vật rắn quay đều quanh một trục cố định đều có cùng tốc độ góc ω, nhưng điểm càng xa trục (r lớn) thì tốc độ dài v càng lớn.',
              'Công thức đổi đơn vị: 1 rpm = 2π / 60 rad/s ≈ 0,105 rad/s.',
            ],
            realWorldApplication:
              'Đĩa líp và đĩa xích xe đạp: líp và xích có cùng tốc độ dài của răng cưa, do đó bánh líp nhỏ hơn sẽ có tốc độ góc lớn hơn giúp bánh xe quay nhanh hơn.',
          },
          {
            heading: '2. Gia tốc hướng tâm trong chuyển động tròn đều',
            content:
              'Mặc dù tốc độ dài v có độ lớn không đổi, nhưng phương của vectơ vận tốc liên tục xoay hướng dọc theo tiếp tuyến của đường tròn. Sự thay đổi liên tục về hướng này sinh ra một gia tốc có phương trùng với bán kính và chiều luôn hướng về tâm đường tròn, gọi là gia tốc hướng tâm a_ht = v^2 / r = ω^2·r. Độ lớn gia tốc hướng tâm tỉ lệ thuận với bình phương tốc độ và tỉ lệ nghịch với bán kính cong r.',
            keyPoints: [
              'Vectơ gia tốc hướng tâm luôn vuông góc với vectơ vận tốc tức thời tại mọi điểm.',
              'Tại các khúc cua hẹp (bán kính r nhỏ) hoặc khi chạy tốc độ cao (v lớn), gia tốc hướng tâm tăng vọt.',
            ],
            realWorldApplication:
              'Máy ly tâm y tế quay với tốc độ hàng chục nghìn vòng/phút tạo ra gia tốc hướng tâm gấp hàng trăm nghìn lần trọng lực g, giúp phân tách nhanh hồng cầu và huyết tương trong mẫu máu xét nghiệm.',
          },
        ],
        quantities: [
          {
            name: 'Tốc độ góc',
            symbol: '\\omega',
            si_unit: 'Radian trên giây (rad/s)',
            other_units: 'độ/s, rpm (vòng/phút)',
            measuring_device: 'Tốc kế quang (Tachometer), cảm biến encoder trục quay',
            description: 'Đại lượng đo góc quay quét được của bán kính trong một đơn vị thời gian.',
          },
          {
            name: 'Gia tốc hướng tâm',
            symbol: 'a_{\\text{ht}}',
            si_unit: 'Mét trên giây bình phương (m/s²)',
            other_units: 'g (bội số gia tốc trọng trường)',
            measuring_device: 'Cảm biến gia tốc 3 trục (MEMS Accelerometer)',
            description: 'Gia tốc đặc trưng cho sự thay đổi về phương chiều của vectơ vận tốc trong chuyển động tròn.',
          },
        ],
        formulas: [
          {
            name: 'Hệ thức động học chuyển động tròn đều',
            latex_expression: '\\omega = \\frac{2\\pi}{T} = 2\\pi f; \\quad v = \\omega \\cdot r; \\quad a_{\\text{ht}} = \\frac{v^2}{r} = \\omega^2 r',
            plain_expression: 'omega = 2*pi/T = 2*pi*f; v = omega * r; a_ht = v^2 / r = omega^2 * r',
            variables: [
              { symbol: '\\omega', name: 'Tốc độ góc', unit: 'rad/s' },
              { symbol: 'T', name: 'Chu kì chuyển động tròn', unit: 's' },
              { symbol: 'f', name: 'Tần số chuyển động tròn', unit: 'Hz' },
              { symbol: 'v', name: 'Tốc độ dài tiếp tuyến', unit: 'm/s' },
              { symbol: 'r', name: 'Bán kính quỹ đạo tròn', unit: 'm' },
              { symbol: 'a_{\\text{ht}}', name: 'Gia tốc hướng tâm', unit: 'm/s²' },
            ],
            derived_formulas: [
              { expression: 'a_{\\text{ht}} = \\frac{4\\pi^2}{T^2}r', description: 'Gia tốc hướng tâm biểu diễn qua chu kì T' },
            ],
            usage_note: 'Bán kính r phải đổi sang đơn vị mét (m) trước khi tính vận tốc v hoặc gia tốc a_ht.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Tính tốc độ góc và gia tốc hướng tâm của kim đồng hồ',
            difficulty: 'thong_hieu',
            problem_statement:
              'Một chiếc đồng hồ treo tường có kim phút dài 10 cm và kim giờ dài 6 cm. Coi các kim quay tròn đều quanh trục tâm. Hãy tính tốc độ góc của mỗi kim và so sánh gia tốc hướng tâm tại đầu mút kim phút với đầu mút kim giờ.',
            given_summary: 'Kim phút: r_p = 10 cm = 0,1 m, T_p = 3600 s; Kim giờ: r_h = 6 cm = 0,06 m, T_h = 43200 s.',
            solution_steps: [
              'Bước 1: Tính tốc độ góc của kim phút: ω_p = 2π / T_p = 2π / 3600 = π / 1800 ≈ 1,745 × 10^-3 rad/s.',
              'Bước 2: Tính tốc độ góc của kim giờ: ω_h = 2π / T_h = 2π / 43200 = π / 21600 ≈ 1,454 × 10^-4 rad/s (nhận thấy ω_p = 12 · ω_h).',
              'Bước 3: Gia tốc hướng tâm tại đầu mút kim phút: a_p = ω_p^2 · r_p = (π / 1800)^2 · 0,1 ≈ 3,05 × 10^-7 m/s².',
              'Bước 4: Gia tốc hướng tâm tại đầu mút kim giờ: a_h = ω_h^2 · r_h = (π / 21600)^2 · 0,06 ≈ 1,27 × 10^-9 m/s².',
              'Bước 5: Tỉ số gia tốc: a_p / a_h = (ω_p / ω_h)^2 · (r_p / r_h) = 12^2 · (10 / 6) = 144 · (5/3) = 240 lần.',
            ],
            final_answer: 'ω_p ≈ 1,75·10^-3 rad/s; ω_h ≈ 1,45·10^-4 rad/s; Gia tốc đầu kim phút gấp 240 lần kim giờ.',
          },
        ],
        simulation: {
          sim_key: 'g10_circular_motion_lab',
          title: 'Mô phỏng Động học chuyển động tròn đều',
          description:
            'Chất điểm quay trên đĩa tròn với bán kính và tốc độ góc tùy chỉnh; hiển thị thời gian thực vectơ vận tốc tiếp tuyến v (màu đỏ) và vectơ gia tốc hướng tâm a_ht (màu xanh lá).',
          parameters: { radius: 2.0, angularVelocity: 1.5, showVectors: true, tracePeriod: true },
          guide_steps: [
            'Thay đổi bán kính r từ tâm ra ngoài mép và nhận xét độ dài của vectơ vận tốc v tăng tuyến tính.',
            'Tăng gấp đôi tốc độ góc ω và quan sát vectơ gia tốc hướng tâm dài gấp 4 lần.',
            'Tắt lực giữ (tương tự như đứt dây) và quan sát chất điểm văng ra theo phương tiếp tuyến.',
          ],
          physics_insight:
            'Khi lực hướng tâm đột ngột mất đi (như đứt dây quay), chất điểm bay đi theo phương tiếp tuyến với quỹ đạo tròn tại điểm đó theo quán tính (Định luật I Newton).',
        },
      },
      {
        order_index: 2,
        code: 'G10-CH6-TP2',
        title: 'Chủ đề 6.2: Lực hướng tâm và Ứng dụng thực tiễn',
        textbook_tags: ['KNTT Bài 28', 'CTST Bài 21', 'CD Bài 11'],
        overview:
          'Nắm vững bản chất động lực học của lực hướng tâm F_ht = m·v^2/r. Phân tích các trường hợp thực tiễn lực hướng tâm: lực ma sát nghỉ khi ô tô ôm cua trên đường phẳng, thiết kế mặt đường nghiêng triệt tiêu ma sát và bài toán con lắc nón.',
        summary_note:
          'Ghi nhớ: Đường cua phẳng: F_ht = F_msn ≤ μ_n · mg ⇒ v ≤ sqrt(μ_n · g · r). Đường cua nghiêng góc θ: tan(θ) = v^2 / (gr).',
        theory_sections: [
          {
            heading: '1. Bản chất của Lực hướng tâm',
            content:
              'Lực hướng tâm không phải là một lực mới có nguồn gốc riêng, mà chỉ là tên gọi theo tác dụng động học của hợp lực tác dụng lên vật khi vật chuyển động tròn đều. Lực này đóng vai trò bẻ cong quỹ đạo thẳng quán tính thành đường cong khép kín. Nếu hợp lực tác dụng lên vật không đủ lớn để cung cấp gia tốc hướng tâm cần thiết (F_hợp < m·v^2/r), vật sẽ trượt dạt ra xa tâm (hiện tượng trượt ly tâm).',
            keyPoints: [
              'F_ht = m·v^2/r = m·ω^2·r.',
              'Khi đi xe máy qua khúc cua trơn ướt (μ_n nhỏ), lực ma sát nghỉ cực đại không đủ cung cấp lực hướng tâm sẽ làm bánh xe bị trượt văng ngã.',
            ],
            realWorldApplication:
              'Vệ tinh nhân tạo bay quanh Trái Đất: Trọng lực hấp dẫn của Trái Đất đóng vai trò lực hướng tâm duy nhất giữ vệ tinh bay ổn định trên quỹ đạo tròn.',
          },
          {
            heading: '2. Ứng dụng thiết kế đường cong nghiêng trong giao thông',
            content:
              'Trên các đoạn đường cao tốc, đường ray xe lửa và đường đua xe thể thao, ở những khúc cua gấp người ta luôn đắp mép ngoài của mặt đường cao hơn mép trong một góc nghiêng θ. Khi xe đi vào khúc cua nghiêng, phản lực pháp tuyến N của mặt đường bị nghiêng theo phương thẳng đứng. Thành phần nằm ngang N_x = N·sin(θ) kết hợp với trọng lực P tạo ra hợp lực hướng thẳng vào tâm khúc cua đóng vai trò lực hướng tâm. Tại một vận tốc thiết kế v xác định, chiếc xe có thể ôm cua an toàn mà hoàn toàn không cần dựa vào lực ma sát của lốp xe: tan(θ) = v^2 / (g·r).',
            keyPoints: [
              'Góc nghiêng tối ưu: tan(θ) = v^2 / (g · r). Không phụ thuộc vào khối lượng m của phương tiện.',
              'Vận động viên đạp xe lòng chảo hoặc chạy xe máy trong "chuồng xiếc hình cầu" nghiêng người để hợp lực hướng vào tâm đường tròn.',
            ],
            realWorldApplication:
              'Đường đua công thức 1 (F1) tại khúc cua nổi tiếng Turn 3 Zandvoort (Hà Lan) có góc nghiêng lên tới 18° cho phép các tay đua ôm cua ở tốc độ trên 250 km/h.',
          },
        ],
        quantities: [
          {
            name: 'Lực hướng tâm',
            symbol: 'F_{\\text{ht}}',
            si_unit: 'Newton (N)',
            other_units: 'kN',
            measuring_device: 'Lực kế hoặc cảm biến tải trọng (Load Cell)',
            description: 'Hợp lực của các lực tác dụng lên vật gây ra gia tốc hướng tâm duy trì chuyển động tròn.',
          },
          {
            name: 'Góc nghiêng mặt đường',
            symbol: '\\theta',
            si_unit: 'Radian (rad)',
            other_units: 'Độ (°)',
            measuring_device: 'Thước đo góc nghiêng điện tử (Inclinometer)',
            description: 'Góc tạo bởi mặt đường nâng nghiêng so với mặt phẳng ngang.',
          },
        ],
        formulas: [
          {
            name: 'Công thức Lực hướng tâm và Góc nghiêng đường cong',
            latex_expression: 'F_{\\text{ht}} = m \\frac{v^2}{r}; \\quad \\tan\\theta = \\frac{v^2}{g \\cdot r}',
            plain_expression: 'F_ht = m * v^2 / r; tan(theta) = v^2 / (g * r)',
            variables: [
              { symbol: 'F_{\\text{ht}}', name: 'Lực hướng tâm', unit: 'N' },
              { symbol: 'm', name: 'Khối lượng phương tiện', unit: 'kg' },
              { symbol: 'v', name: 'Vận tốc chuyển động qua khúc cua', unit: 'm/s' },
              { symbol: 'r', name: 'Bán kính cong của khúc cua', unit: 'm' },
              { symbol: '\\theta', name: 'Góc nghiêng của mặt đường so với phương ngang', unit: 'độ' },
              { symbol: 'g', name: 'Gia tốc trọng trường', unit: 'm/s²' },
            ],
            derived_formulas: [
              { expression: 'v_{\\max} = \\sqrt{\\mu_n g r}', description: 'Vận tốc an toàn tối đa trên đường cua phẳng có ma sát nghỉ' },
              { expression: 'v = \\sqrt{g r \\tan\\theta}', description: 'Vận tốc thiết kế tối ưu trên đường cua nghiêng' },
            ],
            usage_note: 'Phải đổi tốc độ từ km/h sang m/s (chia 3,6) trước khi áp dụng công thức tính bán kính hoặc góc nghiêng.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Thiết kế góc nghiêng đường cua trên cao tốc',
            difficulty: 'van_dung',
            problem_statement:
              'Một đoạn đường cong trên cao tốc có bán kính cong r = 250 m. Người ta muốn thiết kế mặt đường nghiêng để một chiếc ô tô chạy với vận tốc 90 km/h có thể vượt qua khúc cua này an toàn ngay cả khi trời mưa mặt đường đóng băng trơn trượt (coi hệ số ma sát bằng 0). Lấy g = 9,8 m/s^2. Hãy tính góc nghiêng θ của mặt đường so với phương ngang.',
            given_summary: 'r = 250 m, v = 90 km/h = 25 m/s, g = 9,8 m/s^2, ma sát = 0.',
            solution_steps: [
              'Bước 1: Đổi vận tốc xe sang đơn vị chuẩn: v = 90 / 3,6 = 25 m/s.',
              'Bước 2: Phân tích lực tác dụng lên xe gồm: Trọng lực P thẳng đứng hướng xuống và Phản lực pháp tuyến N vuông góc với mặt đường nghiêng.',
              'Bước 3: Để xe không trượt khi không có ma sát, hợp lực của P và N phải nằm ngang hướng vào tâm khúc cua: N·sin(θ) = F_ht = m·v^2 / r và N·cos(θ) = P = m·g.',
              'Bước 4: Lập tỉ số: tan(θ) = (m·v^2 / r) / (m·g) = v^2 / (g·r) = 25^2 / (9,8 · 250) = 625 / 2450 ≈ 0,2551.',
              'Bước 5: Suy ra góc nghiêng θ = arctan(0,2551) ≈ 14,3°.',
            ],
            final_answer: 'Góc nghiêng cần thiết của mặt đường là θ ≈ 14,3°.',
          },
        ],
        simulation: {
          sim_key: 'g10_centripetal_banked_lab',
          title: 'Phòng thí nghiệm đường cua nghiêng và Lực hướng tâm',
          description:
            'Điều khiển xe chạy qua khúc cua tròn; tùy chỉnh tốc độ xe v, bán kính cong r, góc nghiêng mặt đường θ và hệ số ma sát lốp xe μ; quan sát giới hạn trượt ly tâm và lật xe.',
          parameters: { carSpeedKmH: 72, curveRadiusM: 150, bankAngleDeg: 10, frictionCoeff: 0.3 },
          guide_steps: [
            'Đặt góc nghiêng θ = 0° (đường cua phẳng) và tăng dần tốc độ xe đến khi xe bị trượt văng ra lề đường.',
            'Tăng góc nghiêng mặt đường θ lên góc tối ưu và quan sát xe ôm cua thăng bằng tuyệt đối mà không cần ma sát.',
            'Quan sát biểu đồ phân tích lực vectơ N, P và F_ms trên tiết diện ngang của xe.',
          ],
          physics_insight:
            'Khi tốc độ xe lớn hơn tốc độ thiết kế v > sqrt(gr·tan θ), lực ma sát lốp xe phải hướng xuống phía trong khúc cua để giữ xe không bị văng trượt lên dốc lề ngoài.',
        },
      },
      {
        order_index: 3,
        code: 'G10-CH6-TP3',
        title: 'Chủ đề 6.3: Biến dạng cơ của vật rắn và Định luật Hooke',
        textbook_tags: ['KNTT Bài 29-30', 'CTST Bài 22', 'CD Bài 12'],
        overview:
          'Khảo sát các dạng biến dạng cơ học của vật rắn (kéo, nén, uốn, xoắn). Giới hạn đàn hồi và Định luật Hooke mô tả mối quan hệ tỉ lệ thuận giữa lực đàn hồi và độ biến dạng. Tìm hiểu cấu tạo lực kế, hệ số đàn hồi k của lò xo, quy tắc ghép lò xo nối tiếp/song song và các ứng dụng giảm xóc trong kỹ thuật.',
        summary_note:
          'Ghi nhớ: Định luật Hooke: F_đh = k·|Δl|. Treo thẳng đứng: mg = k·Δl_0 ⇒ Δl_0 = mg/k. Ghép nối tiếp: 1/k_nt = 1/k_1 + 1/k_2; Ghép song song: k_ss = k_1 + k_2.',
        theory_sections: [
          {
            heading: '1. Các loại biến dạng cơ và Giới hạn đàn hồi',
            content:
              'Dưới tác dụng của ngoại lực, vật rắn bị thay đổi kích thước và hình dạng (gọi là biến dạng cơ). Hai dạng biến dạng cơ bản là biến dạng kéo (chiều dài dãn ra, tiết diện ngang co lại) và biến dạng nén (chiều dài co ngắn lại, tiết diện phình to). Nếu sau khi thôi tác dụng lực, vật tự động lấy lại kích thước và hình dáng ban đầu thì đó là biến dạng đàn hồi. Nếu lực tác dụng vượt quá một ngưỡng tới hạn gọi là "giới hạn đàn hồi", vật sẽ bị biến dạng dẻo (không hồi phục hoàn toàn) hoặc bị nứt gãy cơ học.',
            keyPoints: [
              'Biến dạng kéo: Δl = l - l_0 > 0. Biến dạng nén: Δl = l - l_0 < 0.',
              'Trong kĩ thuật xây dựng và cơ khí, các thanh dầm thép và cột trụ bê tông cốt thép luôn được tính toán tải trọng làm việc thấp hơn nhiều so với giới hạn đàn hồi để bảo đảm an toàn kết cấu.',
            ],
            realWorldApplication:
              'Cầu treo dây võng: các bó cáp thép chịu biến dạng kéo cực lớn nhưng luôn nằm trong vùng đàn hồi để treo đỡ toàn bộ mặt cầu và tải trọng xe cộ qua lại.',
          },
          {
            heading: '2. Định luật Hooke và Đặc tính đàn hồi của Lò xo',
            content:
              'Nhà bác học Robert Hooke phát hiện ra rằng trong giới hạn đàn hồi, độ lớn lực đàn hồi của lò xo tỉ lệ thuận với độ biến dạng: F_đh = k·|Δl|. Hệ số tỉ lệ k gọi là độ cứng hay hệ số đàn hồi của lò xo (đơn vị: N/m), phụ thuộc vào bản chất vật liệu làm lò xo, bán kính vòng xoắn và đường kính sợi thép. Khi treo một quả cân khối lượng m vào lò xo treo thẳng đứng, tại vị trí cân bằng lò xo dãn một đoạn Δl_0 sao cho lực đàn hồi cân bằng với trọng lực: k·Δl_0 = m·g ⇒ Δl_0 = m·g / k.',
            keyPoints: [
              'Lực đàn hồi luôn ngược chiều với chiều biến dạng: kéo dãn thì lực đàn hồi kéo co lại, nén lại thì lực đàn hồi đẩy dãn ra.',
              'Lò xo bị cắt đôi: mỗi nửa lò xo có độ cứng tăng gấp 2 lần: k\' = 2k.',
              'Quy tắc ghép lò xo: Ghép nối tiếp làm giảm độ cứng toàn phần; Ghép song song làm tăng độ cứng toàn phần.',
            ],
            realWorldApplication:
              'Hệ thống giảm xóc (phuộc nhún) của xe máy và ô tô gồm lò xo thép kết hợp với ống xi-lanh giảm chấn dầu giúp hấp thụ các xung động gập ghềnh khi xe đi qua ổ gà.',
          },
        ],
        quantities: [
          {
            name: 'Độ cứng lò xo (Hệ số đàn hồi)',
            symbol: 'k',
            si_unit: 'Newton trên mét (N/m)',
            other_units: 'N/cm, kN/m',
            measuring_device: 'Xác định từ tỉ số lực kế và thước đo milimét',
            description: 'Đại lượng đặc trưng cho khả năng chống lại sự biến dạng đàn hồi của lò xo.',
          },
          {
            name: 'Độ biến dạng của lò xo',
            symbol: '\\Delta l',
            si_unit: 'Mét (m)',
            other_units: 'cm, mm',
            measuring_device: 'Thước kẹp cặp, thước kẻ chia vạch',
            description: 'Độ dãn hoặc độ co ngắn lại của lò xo so với chiều dài tự nhiên ban đầu.',
          },
        ],
        formulas: [
          {
            name: 'Định luật Hooke cho lò xo đàn hồi',
            latex_expression: 'F_{\\text{đh}} = k \\cdot |\\Delta l| = k \\cdot |l - l_0|',
            plain_expression: 'F_dh = k * |delta_l| = k * |l - l0|',
            variables: [
              { symbol: 'F_{\\text{đh}}', name: 'Độ lớn lực đàn hồi', unit: 'N' },
              { symbol: 'k', name: 'Độ cứng của lò xo', unit: 'N/m' },
              { symbol: 'l_0', name: 'Chiều dài tự nhiên khi chưa biến dạng', unit: 'm' },
              { symbol: 'l', name: 'Chiều dài sau khi bị biến dạng', unit: 'm' },
              { symbol: '\\Delta l', name: 'Độ biến dạng của lò xo', unit: 'm' },
            ],
            derived_formulas: [
              { expression: '\\Delta l_0 = \\frac{m g}{k}', description: 'Độ dãn của lò xo khi treo thẳng đứng vật m ở trạng thái cân bằng' },
              { expression: '\\frac{1}{k_{\\text{nt}}} = \\frac{1}{k_1} + \\frac{1}{k_2}', description: 'Độ cứng tương đương khi ghép nối tiếp hai lò xo' },
              { expression: 'k_{\\text{ss}} = k_1 + k_2', description: 'Độ cứng tương đương khi ghép song song hai lò xo' },
            ],
            usage_note: 'Độ biến dạng Δl phải luôn đổi ra đơn vị mét (m) trước khi tính toán với độ cứng k theo đơn vị N/m.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Tính độ cứng lò xo và độ dãn khi treo thêm quả cân',
            difficulty: 'thong_hieu',
            problem_statement:
              'Một lò xo nhẹ có chiều dài tự nhiên l_0 = 20 cm được treo thẳng đứng vào một điểm cố định. Khi treo vào đầu dưới quả cân m_1 = 100 g thì lò xo dài l_1 = 22 cm. Lấy g = 10 m/s^2. Tính độ cứng k của lò xo. Nếu treo thêm một quả cân m_2 = 150 g vào lò xo thì chiều dài tổng cộng của lò xo lúc này là bao nhiêu?',
            given_summary: 'l_0 = 20 cm = 0,2 m, m_1 = 100 g = 0,1 kg, l_1 = 22 cm = 0,22 m, g = 10 m/s^2, m_2 = 150 g = 0,15 kg.',
            solution_steps: [
              'Bước 1: Tính độ dãn của lò xo khi treo m_1: Δl_1 = l_1 - l_0 = 22 - 20 = 2 cm = 0,02 m.',
              'Bước 2: Trọng lượng của vật m_1: P_1 = m_1 · g = 0,1 · 10 = 1 N. Tại vị trí cân bằng, F_đh1 = P_1 ⇔ k · Δl_1 = P_1 ⇒ k = P_1 / Δl_1 = 1 / 0,02 = 50 N/m.',
              'Bước 3: Khi treo thêm vật m_2, tổng khối lượng treo vào lò xo là: m = m_1 + m_2 = 0,1 + 0,15 = 0,25 kg.',
              'Bước 4: Tổng trọng lượng: P = m · g = 0,25 · 10 = 2,5 N. Độ dãn tổng cộng của lò xo: Δl = P / k = 2,5 / 50 = 0,05 m = 5 cm.',
              'Bước 5: Chiều dài toàn bộ của lò xo khi đó: l = l_0 + Δl = 20 + 5 = 25 cm.',
            ],
            final_answer: 'Độ cứng của lò xo k = 50 N/m; Chiều dài lúc sau là 25 cm.',
          },
        ],
        simulation: {
          sim_key: 'g10_hookes_law_lab',
          title: 'Phòng thí nghiệm Lò xo đàn hồi và Định luật Hooke',
          description:
            'Treo các quả cân khối lượng khác nhau vào các lò xo có độ cứng k tùy chỉnh; vẽ đồ thị F_đh theo độ dãn Δl và xác định giới hạn đàn hồi.',
          parameters: { springConstant: 50, initialLengthM: 0.2, hangingMassKg: 0.2, damping: 0.05 },
          guide_steps: [
            'Treo lần lượt các quả cân 50 g, 100 g, 200 g và quan sát độ dãn Δl tăng tỉ lệ bậc nhất.',
            'Bật hiển thị đồ thị F - Δl và xác nhận hệ số góc dốc chính bằng độ cứng k của lò xo.',
            'Kéo dãn quá mức giới hạn đàn hồi và quan sát lò xo bị biến dạng dẻo vĩnh viễn (không co về l_0).',
          ],
          physics_insight:
            'Thế năng đàn hồi tích trữ trong lò xo bằng diện tích tam giác dưới đồ thị F - Δl: W_đh = (1/2)k·(Δl)^2.',
        },
      },
    ],
  },
];
