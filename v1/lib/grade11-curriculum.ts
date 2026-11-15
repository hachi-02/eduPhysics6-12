import { SeedChapterData } from './grade6-curriculum';

export const GRADE_11_CHAPTERS: SeedChapterData[] = [
  // =========================================================================
  // CHAPTER 1: DAO ĐỘNG ĐIỀU HÒA
  // =========================================================================
  {
    order_index: 1,
    code: 'G11-CH1',
    title: 'Chương 1: Dao động điều hòa',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Vật lí 11 GDPT 2018 (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều): Bản chất dao động cơ học, phương trình li độ x = A cos(ωt + φ), vận tốc v, gia tốc a; con lắc lò xo và con lắc đơn; sự biến thiên và bảo toàn cơ năng; dao động tắt dần, dao động cưỡng bức và hiện tượng cộng hưởng cơ học trong đời sống và kỹ thuật.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 1: Dao động điều hòa
1. **Phương trình dao động điều hòa và các đại lượng đặc trưng:**
   - Li độ: $x = A \\cos(\\omega t + \\varphi)$. Trong đó $A$ là biên độ ($A > 0$), $\\omega$ là tần số góc ($\\text{rad/s}$), $(\\omega t + \\varphi)$ là pha dao động tại thời điểm $t$, $\\varphi$ là pha ban đầu tại $t = 0$.
   - Chu kì $T = \\frac{2\\pi}{\\omega} = \\frac{1}{f}$ (s); Tần số $f = \\frac{1}{T} = \\frac{\\omega}{2\\pi}$ (Hz).
   - Vận tốc: $v = x' = -\\omega A \\sin(\\omega t + \\varphi) = \\omega A \\cos(\\omega t + \\varphi + \\frac{\\pi}{2})$. Vận tốc sớm pha $\\frac{\\pi}{2}$ so với li độ; độ lớn cực đại $v_{\\max} = \\omega A$ khi qua VTCB ($x = 0$), bằng 0 ở hai biên ($x = \\pm A$).
   - Gia tốc: $a = v' = x'' = -\\omega^2 A \\cos(\\omega t + \\varphi) = -\\omega^2 x = \\omega^2 A \\cos(\\omega t + \\varphi + \\pi)$. Gia tốc ngược pha (sớm pha $\\pi$) so với li độ; độ lớn cực đại $a_{\\max} = \\omega^2 A$ ở hai biên, bằng 0 ở VTCB.
   - Hệ thức độc lập với thời gian: $A^2 = x^2 + \\frac{v^2}{\\omega^2} = \\frac{a^2}{\\omega^4} + \\frac{v^2}{\\omega^2}$.

2. **Con lắc lò xo và con lắc đơn:**
   - Con lắc lò xo: Tần số góc $\\omega = \\sqrt{\\frac{k}{m}}$, chu kì $T = 2\\pi\\sqrt{\\frac{m}{k}}$, tần số $f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$. Lực kéo về $F = -kx = ma$.
   - Con lắc đơn (góc lệch bé $\\alpha_0 \\le 10^\\circ$): Tần số góc $\\omega = \\sqrt{\\frac{g}{l}}$, chu kì $T = 2\\pi\\sqrt{\\frac{l}{g}}$, tần số $f = \\frac{1}{2\\pi}\\sqrt{\\frac{g}{l}}$. Li độ cong $s = s_0 \\cos(\\omega t + \\varphi)$ với $s_0 = l\\alpha_0$.

3. **Năng lượng trong dao động điều hòa:**
   - Động năng: $W_đ = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\omega^2 A^2 \\sin^2(\\omega t + \\varphi)$.
   - Thế năng: $W_t = \\frac{1}{2}kx^2 = \\frac{1}{2}m\\omega^2 x^2 = \\frac{1}{2}m\\omega^2 A^2 \\cos^2(\\omega t + \\varphi)$.
   - Cơ năng bảo toàn: $W = W_đ + W_t = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2 = \\text{hằng số}$.
   - Tần số biến thiên của $W_đ$ và $W_t$: chu kì $T' = \\frac{T}{2}$, tần số $f' = 2f$, tần số góc $\\omega' = 2\\omega$.

4. **Dao động tắt dần, dao động cưỡng bức và cộng hưởng:**
   - Dao động tắt dần: Biên độ và cơ năng giảm dần theo thời gian do ma sát và lực cản của môi trường. Ứng dụng: bộ giảm xóc xe máy, ô tô.
   - Dao động duy trì: Cung cấp năng lượng bù đắp đúng phần tiêu hao sau mỗi chu kì mà không làm thay đổi chu kì dao động riêng (ví dụ đồng hồ quả lắc).
   - Dao động cưỡng bức: Dao động dưới tác dụng của ngoại lực tuần hoàn $F = F_0 \\cos(\\Omega t)$. Tần số bằng tần số ngoại lực $\\Omega$.
   - Hiện tượng cộng hưởng: Xảy ra khi tần số ngoại lực xấp xỉ tần số riêng của hệ ($\\Omega \\approx \\omega_0$). Biên độ dao động cưỡng bức đạt cực đại. Ma sát càng nhỏ thì đỉnh cộng hưởng càng nhọn.`,
    key_takeaways: [
      'Phương trình li độ x = A·cos(ωt + φ), vận tốc sớm pha π/2 so với li độ, gia tốc ngược pha với li độ (a = -ω²x).',
      'Hệ thức độc lập thời gian quan trọng: A² = x² + v²/ω²; v_max = ωA; a_max = ω²A.',
      'Chu kì con lắc lò xo T = 2π√(m/k) chỉ phụ thuộc m và k, không phụ thuộc biên độ A.',
      'Chu kì con lắc đơn T = 2π√(l/g) chỉ phụ thuộc chiều dài l và gia tốc trọng trường g tại nơi treo con lắc.',
      'Cơ năng dao động điều hòa tỉ lệ thuận với bình phương biên độ (W = 1/2 kA² = 1/2 mω²A²); động năng và thế năng biến thiên tuần hoàn với tần số góc ω\' = 2ω.',
      'Hiện tượng cộng hưởng xảy ra khi tần số góc của ngoại lực cưỡng bức bằng tần số góc riêng của hệ (Ω = ω₀), làm biên độ dao động vọt lên cực đại.',
    ],
    formula_cheatsheet: [
      {
        name: 'Phương trình dao động và hệ thức độc lập',
        latex: 'x = A \\cos(\\omega t + \\varphi); \\quad v = -\\omega A \\sin(\\omega t + \\varphi); \\quad a = -\\omega^2 x; \\quad A^2 = x^2 + \\frac{v^2}{\\omega^2}',
        note: 'x (m, cm), v (m/s, cm/s), a (m/s²), ω (rad/s), A (m, cm).',
      },
      {
        name: 'Chu kì con lắc lò xo và con lắc đơn',
        latex: 'T_{\\text{lx}} = 2\\pi\\sqrt{\\frac{m}{k}}; \\quad T_{\\text{đơn}} = 2\\pi\\sqrt{\\frac{l}{g}}',
        note: 'm (kg), k (N/m), l (m), g (m/s²). Biên độ góc con lắc đơn α₀ ≤ 10° (rad).',
      },
      {
        name: 'Cơ năng bảo toàn trong dao động điều hòa',
        latex: 'W = W_đ + W_t = \\frac{1}{2}m v^2 + \\frac{1}{2}k x^2 = \\frac{1}{2}k A^2 = \\frac{1}{2}m\\omega^2 A^2',
        note: 'Cơ năng W (J) không đổi theo thời gian nếu bỏ qua ma sát. W_đ và W_t biến thiên với chu kì T/2.',
      },
      {
        name: 'Điều kiện cộng hưởng cơ học',
        latex: 'f_{\\text{cưỡng bức}} = f_0 \\quad \\Longleftrightarrow \\quad \\Omega = \\omega_0',
        note: 'Biên độ cộng hưởng phụ thuộc vào độ chênh lệch |Ω - ω₀| và hệ số ma sát cản trở.',
      },
    ],
    topics: [
      // TOPIC 1.1
      {
        order_index: 1,
        code: 'G11-CH1-TP1',
        title: 'Chủ đề 1.1: Dao động điều hòa và các đại lượng đặc trưng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khám phá bản chất dao động điều hòa, định nghĩa li độ, biên độ, chu kì, tần số, tần số góc và pha ban đầu. Phân tích mối quan hệ lệch pha giữa li độ, vận tốc và gia tốc cùng việc ứng dụng hệ thức độc lập thời gian để giải các bài toán động học dao động.',
        summary_note:
          'Quy tắc vàng: Vận tốc v sớm pha π/2 so với li độ x; gia tốc a ngược pha với li độ x (a = -ω²x). Đồ thị v - x là elip, a - x là đoạn thẳng qua gốc tọa độ.',
        theory_sections: [
          {
            heading: '1. Khái niệm dao động điều hòa và phương trình li độ',
            content:
              'Dao động cơ là chuyển động qua lại quanh một vị trí cân bằng xác định. Dao động điều hòa là dao động mà li độ của vật là một hàm côsin (hoặc sin) của thời gian theo phương trình chuẩn x = A·cos(ωt + φ). Trong đó: A là biên độ dao động (A > 0), đặc trưng cho độ lệch cực đại của vật khỏi vị trí cân bằng; (ωt + φ) là pha dao động tại thời điểm t (đơn vị rad), cho biết trạng thái và chiều chuyển động của vật; φ là pha ban đầu tại thời điểm t = 0 (-π < φ ≤ π).',
            keyPoints: [
              'Biên độ A luôn mang giá trị dương, quỹ đạo chuyển động là đoạn thẳng có chiều dài L = 2A.',
              'Pha dao động (ωt + φ) xác định đồng thời tọa độ và chiều chuyển động của chất điểm.',
              'Chu kì T = 2π/ω (s) là khoảng thời gian vật thực hiện trọn vẹn một dao động toàn phần; Tần số f = 1/T (Hz) là số dao động vật thực hiện được trong một giây.',
            ],
            realWorldApplication:
              'Pít-tông chuyển động tịnh tiến trong xi-lanh động cơ đốt trong ô tô, xe máy tạo ra dao động tuần hoàn được biến đổi thành chuyển động quay của trục khuỷu.',
          },
          {
            heading: '2. Vận tốc và gia tốc trong dao động điều hòa',
            content:
              'Vận tốc là đạo hàm bậc nhất của li độ theo thời gian: v = x\' = -ωA·sin(ωt + φ) = ωA·cos(ωt + φ + π/2). Vận tốc sớm pha π/2 so với li độ. Độ lớn cực đại v_max = ωA khi vật đi qua vị trí cân bằng theo chiều dương hoặc chiều âm; v = 0 khi vật ở hai vị trí biên. Gia tốc là đạo hàm bậc nhất của vận tốc (bậc hai của li độ): a = v\' = -ω²A·cos(ωt + φ) = -ω²x. Gia tốc luôn hướng về vị trí cân bằng, ngược pha với li độ và có độ lớn tỉ lệ thuận với khoảng cách từ vật đến vị trí cân bằng.',
            keyPoints: [
              'Vận tốc vuông pha với li độ: (x/A)² + (v/v_max)² = 1 (quỹ đạo pha v - x là hình elip).',
              'Gia tốc ngược pha với li độ: a = -ω²x (đồ thị a theo x là một đoạn thẳng có hệ số góc âm đi qua gốc O).',
              'Hệ thức độc lập thời gian: A² = x² + v²/ω² = a²/ω⁴ + v²/ω².',
            ],
            realWorldApplication:
              'Các cảm biến gia tốc MEMS trong điện thoại thông minh ứng dụng đo gia tốc dao động quán tính để tự động xoay màn hình và đếm bước chân.',
          },
        ],
        quantities: [
          {
            name: 'Biên độ dao động',
            symbol: 'A',
            si_unit: 'm',
            other_units: 'cm, mm',
            measuring_device: 'Thước đo tọa độ, cảm biến vị trí laser',
            description: 'Độ lệch cực đại của vật dao động so với vị trí cân bằng.',
          },
          {
            name: 'Tần số góc',
            symbol: 'ω',
            si_unit: 'rad/s',
            other_units: 'độ/s',
            measuring_device: 'Máy hiện sóng, bộ đếm tần số',
            description: 'Tốc độ biến thiên pha của dao động điều hòa (ω = 2π/T = 2πf).',
          },
          {
            name: 'Vận tốc cực đại',
            symbol: 'v_max',
            si_unit: 'm/s',
            other_units: 'cm/s',
            measuring_device: 'Đồng hồ quang điện đo vận tốc tức thời',
            description: 'Tốc độ lớn nhất của vật khi đi qua vị trí cân bằng (v_max = ωA).',
          },
        ],
        formulas: [
          {
            name: 'Hệ thức độc lập thời gian giữa li độ và vận tốc',
            latex_expression: 'A^2 = x^2 + \\frac{v^2}{\\omega^2}',
            plain_expression: 'A^2 = x^2 + (v / omega)^2',
            variables: [
              { symbol: 'A', name: 'Biên độ dao động', unit: 'm hoặc cm' },
              { symbol: 'x', name: 'Li độ dao động tức thời', unit: 'm hoặc cm' },
              { symbol: 'v', name: 'Vận tốc tức thời', unit: 'm/s hoặc cm/s' },
              { symbol: 'ω', name: 'Tần số góc', unit: 'rad/s' },
            ],
            derived_formulas: [
              { expression: '|v| = \\omega \\sqrt{A^2 - x^2}', description: 'Tính tốc độ khi biết li độ x' },
              { expression: '|x| = \\sqrt{A^2 - \\frac{v^2}{\\omega^2}}', description: 'Tính độ lớn li độ khi biết vận tốc v' },
              { expression: '\\omega = \\sqrt{\\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}}', description: 'Tính ω từ hai cặp giá trị (x₁, v₁) và (x₂, v₂)' },
            ],
            usage_note: 'Đảm bảo li độ x và biên độ A cùng đơn vị (cm hoặc m), tương ứng với vận tốc v (cm/s hoặc m/s).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Xác định các đại lượng đặc trưng từ phương trình dao động',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một chất điểm dao động điều hòa theo phương trình x = 6·cos(10πt - π/3) (cm). Hãy xác định: a) Biên độ, tần số góc, chu kì và tần số của dao động. b) Tốc độ cực đại và gia tốc cực đại của chất điểm. c) Tốc độ của chất điểm khi nó đi qua vị trí có li độ x = 3 cm.',
            given_summary: 'x = 6·cos(10πt - π/3) (cm) => A = 6 cm, ω = 10π rad/s, φ = -π/3 rad.',
            solution_steps: [
              'Bước 1: Từ phương trình dao động, ta có biên độ A = 6 cm, tần số góc ω = 10π rad/s.',
              'Bước 2: Chu kì dao động T = 2π / ω = 2π / (10π) = 0,2 s. Tần số dao động f = 1 / T = 1 / 0,2 = 5 Hz.',
              'Bước 3: Tốc độ cực đại v_max = ωA = 10π · 6 = 60π cm/s ≈ 188,5 cm/s = 1,885 m/s.',
              'Bước 4: Gia tốc cực đại a_max = ω²A = (10π)² · 6 = 600π² cm/s² ≈ 59,2 m/s² (lấy π² ≈ 10 thì a_max ≈ 60 m/s²).',
              'Bước 5: Áp dụng hệ thức độc lập A² = x² + v²/ω² => |v| = ω√(A² - x²) = 10π · √(6² - 3²) = 10π · √27 = 30π√3 cm/s ≈ 163,2 cm/s.',
            ],
            final_answer: 'a) A = 6 cm; T = 0,2 s; f = 5 Hz. b) v_max = 60π cm/s; a_max = 600π² cm/s². c) |v| = 30π√3 cm/s.',
          },
        ],
        simulation: {
          sim_key: 'g11_shm_kinematics_lab',
          title: 'Phòng thí nghiệm Động học Dao động Điều hòa',
          description:
            'Khảo sát đồ thị li độ x(t), vận tốc v(t) và gia tốc a(t) theo thời gian; quan sát trực quan mối quan hệ lệch pha và chuyển động tròn đều quy chiếu.',
          parameters: {
            amplitude_cm: 5,
            frequency_hz: 2,
            initial_phase_rad: 0,
          },
          guide_steps: [
            'Điều chỉnh thanh trượt Biên độ A và Tần số f để quan sát chu kì dao động thay đổi tương ứng.',
            'Bật hiển thị vector vận tốc và gia tốc trên vòng tròn lượng giác quy chiếu.',
            'Quan sát tại VTCB: li độ x = 0 thì tốc độ v đạt cực đại và gia tốc a = 0.',
          ],
          physics_insight:
            'Gia tốc luôn hướng về vị trí cân bằng và sớm pha π/2 so với vận tốc, trong khi vận tốc sớm pha π/2 so với li độ.',
        },
      },

      // TOPIC 1.2
      {
        order_index: 2,
        code: 'G11-CH1-TP2',
        title: 'Chủ đề 1.2: Con lắc lò xo, con lắc đơn và năng lượng dao động',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Tìm hiểu cấu tạo, phương trình vi phân và công thức chu kì của con lắc lò xo và con lắc đơn. Khảo sát sự biến đổi tuần hoàn qua lại giữa động năng và thế năng, định luật bảo toàn cơ năng và đồ thị năng lượng theo thời gian và li độ.',
        summary_note:
          'Cơ năng tỉ lệ với bình phương biên độ: W = 1/2 kA² = 1/2 mω²A². Động năng và thế năng biến thiên tuần hoàn với tần số góc gấp đôi: ω\' = 2ω, chu kì T\' = T/2.',
        theory_sections: [
          {
            heading: '1. Con lắc lò xo và con lắc đơn',
            content:
              'Con lắc lò xo gồm một vật nhỏ khối lượng m gắn vào lò xo có độ cứng k. Lực kéo về F = -kx. Phương trình dao động có tần số góc ω = √(k/m), chu kì T = 2π√(m/k). Chu kì chỉ phụ thuộc vào khối lượng m và độ cứng k, không phụ thuộc vào biên độ A. Con lắc đơn gồm vật nặng m treo ở đầu sợi dây nhẹ không dãn chiều dài l. Với góc lệch bé (α₀ ≤ 10° ≈ 0,17 rad), con lắc đơn dao động điều hòa với chu kì T = 2π√(l/g), phụ thuộc vào chiều dài l và gia tốc trọng trường g tại nơi treo con lắc.',
            keyPoints: [
              'Con lắc lò xo: T = 2π√(m/k). Nếu tăng khối lượng m lên 4 lần thì chu kì T tăng 2 lần.',
              'Con lắc đơn: T = 2π√(l/g). Nếu tăng chiều dài l lên 4 lần thì chu kì T tăng 2 lần.',
              'Ở góc lệch lớn (α₀ > 10°), dao động của con lắc đơn là dao động tuần hoàn nhưng không phải là dao động điều hòa.',
            ],
            realWorldApplication:
              'Đồng hồ quả lắc truyền thống sử dụng con lắc đơn có chiều dài khoảng 0,994 m để có chu kì dao động đúng 2 giây (chu kì nửa giây mỗi nhịp tích tắc).',
          },
          {
            heading: '2. Năng lượng trong dao động điều hòa',
            content:
              'Động năng của vật là W_đ = 1/2 mv² = 1/2 mω²A²·sin²(ωt + φ). Thế năng đàn hồi của lò xo là W_t = 1/2 kx² = 1/2 kA²·cos²(ωt + φ). Cơ năng là tổng động năng và thế năng: W = W_đ + W_t = 1/2 kA² = 1/2 mω²A² = const. Trong quá trình dao động, có sự chuyển hóa liên tục: khi vật từ biên về VTCB, thế năng giảm dần chuyển hóa thành động năng; khi vật từ VTCB ra biên, động năng giảm dần chuyển hóa thành thế năng. Tại vị trí có li độ x = ±A/√2, động năng bằng thế năng (W_đ = W_t = W/2).',
            keyPoints: [
              'Cơ năng W luôn bảo toàn khi bỏ qua ma sát và lực cản.',
              'Khi x = ±A/√2 thì W_đ = W_t. Khi x = ±A/2 thì W_t = W/4 và W_đ = 3W/4.',
              'Động năng và thế năng biến thiên với chu kì T\' = T/2 và tần số f\' = 2f.',
            ],
            realWorldApplication:
              'Hệ thống thu hồi năng lượng động năng (KERS) trong xe đua F1 và xe điện ứng dụng nguyên lý tích trữ thế năng/điện năng từ năng lượng hãm dao động.',
          },
        ],
        quantities: [
          {
            name: 'Độ cứng lò xo',
            symbol: 'k',
            si_unit: 'N/m',
            other_units: 'N/cm',
            measuring_device: 'Lực kế phối hợp thước đo độ dãn',
            description: 'Khả năng chống biến dạng đàn hồi của lò xo (k = F/|Δl|).',
          },
          {
            name: 'Cơ năng dao động',
            symbol: 'W',
            si_unit: 'J',
            other_units: 'mJ, cal',
            measuring_device: 'Thiết bị tích phân năng lượng đo lường số',
            description: 'Tổng động năng và thế năng của hệ dao động (W = 1/2 kA²).',
          },
          {
            name: 'Chiều dài con lắc đơn',
            symbol: 'l',
            si_unit: 'm',
            other_units: 'cm',
            measuring_device: 'Thước cuộn chính xác cao',
            description: 'Khoảng cách từ điểm treo cố định đến khối tâm của quả nặng.',
          },
        ],
        formulas: [
          {
            name: 'Công thức chu kì con lắc lò xo và con lắc đơn',
            latex_expression: 'T_{\\text{lx}} = 2\\pi\\sqrt{\\frac{m}{k}}; \\quad T_{\\text{đơn}} = 2\\pi\\sqrt{\\frac{l}{g}}',
            plain_expression: 'T_lx = 2*pi*sqrt(m/k); T_don = 2*pi*sqrt(l/g)',
            variables: [
              { symbol: 'm', name: 'Khối lượng vật nặng', unit: 'kg' },
              { symbol: 'k', name: 'Độ cứng của lò xo', unit: 'N/m' },
              { symbol: 'l', name: 'Chiều dài con lắc đơn', unit: 'm' },
              { symbol: 'g', name: 'Gia tốc trọng trường', unit: 'm/s²' },
            ],
            derived_formulas: [
              { expression: 'k = m \\omega^2 = \\frac{4\\pi^2 m}{T^2}', description: 'Xác định độ cứng lò xo từ chu kì đo được' },
              { expression: 'g = \\frac{4\\pi^2 l}{T^2}', description: 'Đo gia tốc trọng trường g bằng con lắc đơn' },
              { expression: 'W = \\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2', description: 'Cơ năng toàn phần của hệ dao động' },
            ],
            usage_note: 'Khối lượng m phải đổi ra kg, chiều dài l đổi ra m, độ cứng k theo N/m để tính chu kì ra giây (s).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính chu kì và năng lượng của con lắc lò xo treo thẳng đứng',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một con lắc lò xo gồm vật nặng m = 200 g gắn vào lò xo có độ cứng k = 50 N/m. Kéo vật xuống dưới vị trí cân bằng một đoạn 4 cm rồi buông nhẹ cho dao động điều hòa. Lấy π² ≈ 10, g = 10 m/s². a) Tính chu kì và tần số dao động của con lắc. b) Tính cơ năng dao động của con lắc. c) Tìm tốc độ của vật khi động năng bằng 3 lần thế năng.',
            given_summary: 'm = 200 g = 0,2 kg; k = 50 N/m; buông nhẹ từ x = 4 cm => A = 4 cm = 0,04 m.',
            solution_steps: [
              'Bước 1: Tần số góc ω = √(k/m) = √(50 / 0,2) = √250 = 5√10 = 5π rad/s (vì lấy π² ≈ 10 => √10 ≈ π).',
              'Bước 2: Chu kì dao động T = 2π / ω = 2π / (5π) = 0,4 s. Tần số f = 1 / T = 2,5 Hz.',
              'Bước 3: Cơ năng của con lắc: W = 1/2 k A² = 0,5 · 50 · (0,04)² = 25 · 0,0016 = 0,04 J = 40 mJ.',
              'Bước 4: Khi động năng bằng 3 lần thế năng: W_đ = 3 W_t => W = W_đ + W_t = 4 W_t => 1/2 k A² = 4 · (1/2 k x²) => x² = A² / 4 => x = ±A / 2 = ±2 cm.',
              'Bước 5: Áp dụng định luật bảo toàn cơ năng: W_đ = 3/4 W => 1/2 m v² = 3/4 W => v² = (3W) / (2m) = (3 · 0,04) / (2 · 0,2) = 0,12 / 0,4 = 0,3 => |v| = √0,3 m/s ≈ 0,548 m/s = 54,8 cm/s.',
            ],
            final_answer: 'a) T = 0,4 s; f = 2,5 Hz. b) W = 0,04 J (40 mJ). c) |v| ≈ 54,8 cm/s.',
          },
        ],
        simulation: {
          sim_key: 'g11_pendulum_spring_energy_lab',
          title: 'Mô phỏng Năng lượng Con lắc Lò xo và Con lắc Đơn',
          description:
            'Thí nghiệm trực quan chuyển hóa qua lại giữa thế năng Wt và động năng Wđ; kiểm chứng sự bảo toàn cơ năng W và quan sát chu kì phụ thuộc m, k, l.',
          parameters: {
            spring_constant_k: 50,
            mass_kg: 0.2,
            pendulum_length_m: 1,
            gravity: 9.8,
          },
          guide_steps: [
            'Thay đổi khối lượng m và độ cứng k để đối chiếu chu kì đo được với công thức T = 2π√(m/k).',
            'Bật biểu đồ cột năng lượng để thấy Wđ và Wt hoán đổi liên tục trong khi tổng W không đổi.',
            'Chuyển sang chế độ con lắc đơn để kiểm nghiệm chu kì T chỉ phụ thuộc chiều dài l.',
          ],
          physics_insight:
            'Tại vị trí cân bằng, thế năng đạt cực tiểu và động năng đạt cực đại. Ở vị trí biên, động năng bằng không và thế năng đạt cực đại.',
        },
      },

      // TOPIC 1.3
      {
        order_index: 3,
        code: 'G11-CH1-TP3',
        title: 'Chủ đề 1.3: Dao động tắt dần, dao động cưỡng bức và hiện tượng cộng hưởng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Tìm hiểu nguyên nhân cơ chế của dao động tắt dần, phương pháp duy trì dao động; đặc điểm của dao động cưỡng bức dưới tác dụng của ngoại lực tuần hoàn và hiện tượng cộng hưởng cơ học cùng các ứng dụng thực tiễn trong kỹ thuật xây dựng và giảm chấn.',
        summary_note:
          'Cộng hưởng xảy ra khi tần số ngoại lực bằng tần số riêng của hệ (f = f₀). Ma sát càng nhỏ thì biên độ cực đại tại đỉnh cộng hưởng càng lớn.',
        theory_sections: [
          {
            heading: '1. Dao động tắt dần và dao động duy trì',
            content:
              'Dao động tắt dần là dao động có biên độ và cơ năng giảm dần theo thời gian. Nguyên nhân là do lực ma sát và lực cản của môi trường chuyển hóa một phần cơ năng thành nội năng (nhiệt). Lực cản môi trường càng lớn thì dao động tắt dần càng nhanh (trong không khí tắt chậm hơn nhiều so với trong nước hay dầu). Để dao động không bị tắt dần, người ta sử dụng dao động duy trì: bù đắp cơ năng bị tiêu hao sau mỗi chu kì bằng một cơ cấu cung cấp năng lượng thích hợp theo đúng nhịp của hệ dao động (như dây cót đồng hồ).',
            keyPoints: [
              'Dao động tắt dần có biên độ giảm dần theo thời gian, không có chu kì cố định theo nghĩa hàm tuần hoàn sin/cos.',
              'Lực cản môi trường càng lớn, dao động tắt càng nhanh.',
              'Dao động duy trì giữ nguyên chu kì và tần số riêng của hệ.',
            ],
            realWorldApplication:
              'Bộ giảm xóc (phuộc nhún) của xe máy và ô tô sử dụng pít-tông di chuyển trong xi-lanh chứa dầu nhớt để triệt tiêu nhanh dao động khi xe đi qua gờ giảm tốc.',
          },
          {
            heading: '2. Dao động cưỡng bức và hiện tượng cộng hưởng cơ học',
            content:
              'Dao động cưỡng bức là dao động xảy ra dưới tác dụng của một ngoại lực biến thiên tuần hoàn F = F₀·cos(Ωt + φ_f). Sau giai đoạn chuyển tiếp, dao động cưỡng bức có tần số bằng tần số Ω của ngoại lực cưỡng bức. Biên độ của dao động cưỡng bức phụ thuộc vào: biên độ F₀ của ngoại lực, lực cản của môi trường, và đặc biệt là độ chênh lệch giữa tần số ngoại lực Ω và tần số dao động riêng ω₀ của hệ. Khi Ω ≈ ω₀, biên độ dao động cưỡng bức đạt giá trị cực đại, hiện tượng này gọi là hiện tượng cộng hưởng cơ học.',
            keyPoints: [
              'Tần số dao động cưỡng bức luôn bằng tần số của ngoại lực: f_cb = f_ngoại lực.',
              'Điều kiện cộng hưởng: f_ngoại lực = f₀ (hoặc Ω = ω₀).',
              'Nếu ma sát nhỏ: đỉnh cộng hưởng cao và nhọn; nếu ma sát lớn: đỉnh cộng hưởng thấp và tù.',
            ],
            realWorldApplication:
              'Hiện tượng cộng hưởng làm sập cầu treo Tacoma Narrows (Mỹ) năm 1940 do tần số xoáy gió trùng với tần số dao động riêng của thân cầu; các tòa nhà chọc trời hiện đại đều lắp quả cầu giảm chấn khối lượng (TMD) như tháp Taipei 101 để chống bão và động đất.',
          },
        ],
        quantities: [
          {
            name: 'Tần số riêng của hệ',
            symbol: 'f₀',
            si_unit: 'Hz',
            other_units: 's⁻¹',
            measuring_device: 'Máy phân tích tần số dao động tự do',
            description: 'Tần số dao động khi hệ dao động tự do không có ma sát và ngoại lực.',
          },
          {
            name: 'Tần số của ngoại lực cưỡng bức',
            symbol: 'f',
            si_unit: 'Hz',
            other_units: 'rad/s (Ω)',
            measuring_device: 'Máy phát sóng cơ điện tử',
            description: 'Tần số biến thiên điều hòa của lực kích thích tuần hoàn tác dụng lên hệ.',
          },
          {
            name: 'Biên độ cộng hưởng',
            symbol: 'A_res',
            si_unit: 'm',
            other_units: 'cm, mm',
            measuring_device: 'Cảm biến dịch chuyển LVDT',
            description: 'Biên độ dao động cực đại đạt được khi tần số ngoại lực trùng với tần số riêng.',
          },
        ],
        formulas: [
          {
            name: 'Điều kiện xảy ra cộng hưởng cơ học',
            latex_expression: 'f_{\\text{ngoại lực}} = f_0 \\quad \\Longleftrightarrow \\quad \\Omega = \\omega_0',
            plain_expression: 'f_ngoailuc = f_0 <=> Omega = omega_0',
            variables: [
              { symbol: 'f_ngoại lực', name: 'Tần số ngoại lực kích thích tuần hoàn', unit: 'Hz' },
              { symbol: 'f₀', name: 'Tần số dao động riêng của hệ', unit: 'Hz' },
              { symbol: 'Ω', name: 'Tần số góc ngoại lực', unit: 'rad/s' },
              { symbol: 'ω₀', name: 'Tần số góc riêng của hệ', unit: 'rad/s' },
            ],
            derived_formulas: [
              { expression: 'v_{\\text{cộng hưởng}} = \\frac{L}{T_0} = L \\cdot f_0', description: 'Tốc độ xe chạy gây cộng hưởng mạnh khi đi qua các rãnh cách đều khoảng L' },
            ],
            usage_note: 'Khi cộng hưởng, biên độ dao động tỉ lệ nghịch với hệ số cản của môi trường.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Xác định tốc độ chuyển động nguy hiểm gây cộng hưởng cho xe',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một chiếc xe chở người có khung xe gắn trên các bánh qua hệ thống nhún lò xo. Tần số dao động tự do của khung xe là f₀ = 1,5 Hz. Mặt đường bê tông có các rãnh co giãn cách đều nhau từng đoạn L = 12 m. Hỏi xe chạy với tốc độ bằng bao nhiêu thì khung xe sẽ bị rung lắc mạnh nhất (xảy ra cộng hưởng)?',
            given_summary: 'f₀ = 1,5 Hz; rãnh cách đều L = 12 m. Khung xe rung lắc mạnh nhất khi f_kích thích = f₀.',
            solution_steps: [
              'Bước 1: Khi xe chạy với tốc độ v, thời gian giữa hai lần liên tiếp bánh xe vấp vào rãnh đường là chu kì của ngoại lực kích thích: T = L / v.',
              'Bước 2: Tần số của ngoại lực kích thích tác dụng lên khung xe là: f = 1 / T = v / L.',
              'Bước 3: Khung xe rung lắc mạnh nhất khi xảy ra hiện tượng cộng hưởng, tức là tần số kích thích bằng tần số riêng của khung xe: f = f₀ => v / L = f₀.',
              'Bước 4: Suy ra tốc độ gây cộng hưởng: v = L · f₀ = 12 m · 1,5 s⁻¹ = 18 m/s.',
              'Bước 5: Đổi sang đơn vị km/h: v = 18 · 3,6 = 64,8 km/h.',
            ],
            final_answer: 'Tốc độ khiến xe rung lắc mạnh nhất là v = 18 m/s (64,8 km/h).',
          },
        ],
        simulation: {
          sim_key: 'g11_resonance_damping_lab',
          title: 'Phòng thí nghiệm Dao động Tắt dần và Cộng hưởng Cơ',
          description:
            'Khảo sát đường cong cộng hưởng biên độ A theo tần số ngoại lực Ω, quan sát độ nhọn của đỉnh cộng hưởng thay đổi theo hệ số cản b.',
          parameters: {
            natural_frequency_hz: 2,
            driving_frequency_hz: 1.5,
            damping_coefficient: 0.1,
          },
          guide_steps: [
            'Quét tần số ngoại lực f từ 0,5 Hz đến 3,5 Hz và theo dõi biên độ dao động tương ứng trên đồ thị.',
            'Ghi nhận giá trị cực đại của biên độ khi f đúng bằng tần số riêng f₀ = 2,0 Hz.',
            'Tăng hệ số ma sát cản b để quan sát đỉnh cộng hưởng bị hạ thấp và tù dần.',
          ],
          physics_insight:
            'Cộng hưởng có thể có lợi (hộp đàn ghi-ta, lò vi sóng) hoặc có hại (làm nứt gãy công trình, cầu treo khi gặp gió bão hoặc bước duyệt binh).',
        },
      },
    ],
  },

  // =========================================================================
  // CHAPTER 2: SÓNG CƠ VÀ SÓNG ĐIỆN TỪ
  // =========================================================================
  {
    order_index: 2,
    code: 'G11-CH2',
    title: 'Chương 2: Sóng cơ và Sóng điện từ',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Vật lí 11 GDPT 2018 (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều): Bản chất sóng cơ học, sóng ngang và sóng dọc; phương trình truyền sóng và độ lệch pha; hiện tượng giao thoa sóng cơ và điều kiện cực đại, cực tiểu; sóng dừng trên dây đàn; bản chất sóng điện từ, tốc độ ánh sáng c và toàn bộ thang sóng điện từ ứng dụng trong đời sống.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 2: Sóng cơ và Sóng điện từ
1. **Sóng cơ và các đặc trưng truyền sóng:**
   - Sóng cơ là dao động cơ lan truyền trong một môi trường vật chất theo thời gian. Lưu ý: Sóng cơ **không truyền được trong chân không**; vật chất chỉ dao động tại chỗ quanh VTCB chứ không bị trôi theo sóng.
   - Sóng ngang: Các phần tử dao động vuông góc với phương truyền sóng (truyền trong chất rắn và bề mặt chất lỏng).
   - Sóng dọc: Các phần tử dao động dọc theo phương truyền sóng (truyền được trong cả chất rắn, lỏng và khí).
   - Bước sóng $\\lambda = v \\cdot T = \\frac{v}{f}$: Là quãng đường sóng truyền đi được trong một chu kì, cũng là khoảng cách ngắn nhất giữa hai điểm trên cùng một phương truyền sóng dao động cùng pha.
   - Phương trình sóng tại điểm $M$ cách nguồn $O$ khoảng $x$: $u_M = A \\cos(\\omega t - \\frac{2\\pi x}{\\lambda})$.
   - Độ lệch pha giữa hai điểm cách nhau khoảng $d$ trên cùng một phương truyền sóng: $\\Delta\\varphi = \\frac{2\\pi d}{\\lambda}$.

2. **Giao thoa sóng cơ:**
   - Hiện tượng hai sóng kết hợp (cùng tần số và có hiệu số pha không đổi theo thời gian) gặp nhau, tạo nên các gợn sóng cực đại và cực tiểu cố định trong không gian.
   - Vị trí cực đại giao thoa: Hiệu đường đi $d_2 - d_1 = k\\lambda$ ($k \\in \\mathbb{Z}$). Biên độ cực đại $A_{\\max} = 2A$.
   - Vị trí cực tiểu giao thoa: Hiệu đường đi $d_2 - d_1 = (k + 0,5)\\lambda$ ($k \\in \\mathbb{Z}$). Biên độ cực tiểu $A_{\\min} = 0$.
   - Khoảng cách giữa hai cực đại liên tiếp trên đoạn thẳng nối hai nguồn là $\\frac{\\lambda}{2}$.

3. **Sóng dừng:**
   - Sóng dừng hình thành do sự giao thoa giữa sóng tới và sóng phản xạ trên cùng một phương truyền.
   - Các điểm đứng yên gọi là **nút sóng**; các điểm dao động với biên độ cực đại gọi là **bụng sóng**. Khoảng cách giữa 2 nút liên tiếp hoặc 2 bụng liên tiếp bằng $\\frac{\\lambda}{2}$; khoảng cách từ nút đến bụng kề nó là $\\frac{\\lambda}{4}$.
   - Điều kiện sóng dừng trên dây hai đầu cố định: $L = k \\frac{\\lambda}{2}$ ($k$ là số bó sóng, số bụng sóng $= k$, số nút sóng $= k + 1$).
   - Điều kiện sóng dừng trên dây một đầu cố định, một đầu tự do: $L = (2k + 1) \\frac{\\lambda}{4}$ ($k$ là số bó sóng nguyên, số bụng $=$ số nút $= k + 1$).

4. **Sóng điện từ và Thang sóng điện từ:**
   - Sóng điện từ là điện từ trường lan truyền trong không gian. Truyền được trong chân không với tốc độ $c \\approx 3 \\times 10^8\\,\\text{m/s}$.
   - Sóng điện từ là sóng ngang: Vector cường độ điện trường $\\vec{E}$ và cảm ứng từ $\\vec{B}$ luôn vuông góc với nhau và vuông góc với phương truyền sóng $\\vec{v}$, dao động cùng pha.
   - Thang sóng điện từ theo thứ tự bước sóng giảm dần (tần số tăng dần, năng lượng photon tăng dần):
     Sóng vô tuyến (km đến mm) $\\rightarrow$ Tia hồng ngoại ($760\\,\\text{nm} - 1\\,\\text{mm}$) $\\rightarrow$ Ánh sáng nhìn thấy ($380\\,\\text{nm} - 760\\,\\text{nm}$) $\\rightarrow$ Tia tử ngoại ($10\\,\\text{nm} - 380\\,\\text{nm}$) $\\rightarrow$ Tia X ($10^{-11}\\,\\text{m} - 10^{-8}\\,\\text{m}$) $\\rightarrow$ Tia gamma ($< 10^{-11}\\,\\text{m}$).`,
    key_takeaways: [
      'Bước sóng λ = v·T = v/f là quãng đường sóng truyền trong một chu kì; năng lượng sóng tỉ lệ với bình phương biên độ và tần số.',
      'Độ lệch pha giữa 2 điểm trên cùng một tia sóng cách nhau d là Δφ = 2πd/λ; cùng pha khi d = kλ, ngược pha khi d = (k + 0,5)λ.',
      'Giao thoa hai nguồn cùng pha: cực đại khi d₂ - d₁ = kλ; cực tiểu khi d₂ - d₁ = (k + 0,5)λ.',
      'Sóng dừng: khoảng cách giữa 2 nút liên tiếp bằng λ/2; dây 2 đầu cố định có L = k·λ/2; dây 1 đầu tự do có L = (2k + 1)·λ/4.',
      'Sóng điện từ là sóng ngang, truyền được trong chân không với tốc độ c = 3·10⁸ m/s, mang theo năng lượng.',
      'Thứ tự bước sóng giảm dần trên thang sóng điện từ: Vô tuyến > Hồng ngoại > Ánh sáng khả kiến > Tử ngoại > Tia X > Tia Gamma.',
    ],
    formula_cheatsheet: [
      {
        name: 'Công thức bước sóng và độ lệch pha',
        latex: '\\lambda = v \\cdot T = \\frac{v}{f}; \\quad \\Delta\\varphi = \\frac{2\\pi d}{\\lambda}',
        note: 'λ (m), v (m/s), T (s), f (Hz), d (m). Cùng pha: d = kλ; Ngược pha: d = (k + 0,5)λ.',
      },
      {
        name: 'Điều kiện cực đại và cực tiểu giao thoa sóng',
        latex: 'd_2 - d_1 = k\\lambda \\; (\\text{Cực đại}); \\quad d_2 - d_1 = \\left(k + \\frac{1}{2}\\right)\\lambda \\; (\\text{Cực tiểu})',
        note: 'Áp dụng cho 2 nguồn dao động cùng pha; k ∈ ℤ.',
      },
      {
        name: 'Điều kiện xảy ra sóng dừng trên sợi dây',
        latex: 'L = k\\frac{\\lambda}{2} \\; (\\text{2 đầu cố định}); \\quad L = (2k + 1)\\frac{\\lambda}{4} \\; (\\text{1 đầu cố định, 1 đầu tự do})',
        note: 'k là số bó sóng; bề rộng bụng sóng bằng 4A_nguồn.',
      },
      {
        name: 'Bước sóng của sóng điện từ',
        latex: '\\lambda = \\frac{c}{f} = c \\cdot T',
        note: 'c ≈ 3 × 10⁸ m/s trong chân không; f (Hz), λ (m).',
      },
    ],
    topics: [
      // TOPIC 2.1
      {
        order_index: 1,
        code: 'G11-CH2-TP1',
        title: 'Chủ đề 2.1: Sóng cơ, sự truyền sóng và phương trình sóng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khám phá bản chất vật lý của sóng cơ học, phân biệt sóng ngang và sóng dọc, định nghĩa các đặc trưng cơ bản: chu kì, tần số, tốc độ truyền sóng, bước sóng. Thiết lập và vận dụng phương trình sóng để tính toán li độ và độ lệch pha giữa các điểm trên môi trường truyền sóng.',
        summary_note:
          'Nhớ kĩ: Tốc độ truyền sóng v phụ thuộc vào tính chất đàn hồi và mật độ của môi trường, còn tần số f do nguồn quyết định và không đổi khi truyền qua các môi trường khác nhau.',
        theory_sections: [
          {
            heading: '1. Khái niệm sóng cơ và phân loại sóng',
            content:
              'Sóng cơ là dao động cơ lan truyền trong một môi trường đàn hồi (rắn, lỏng, khí). Khi sóng truyền qua, các phần tử môi trường chỉ dao động tại chỗ quanh vị trí cân bằng xác định, không bị dời chuyển theo phương truyền sóng; chỉ có pha dao động và năng lượng sóng được lan truyền đi xa. Sóng cơ được chia thành hai loại: Sóng ngang là sóng trong đó phương dao động của các phần tử môi trường vuông góc với phương truyền sóng (truyền được trong chất rắn và trên bề mặt chất lỏng); Sóng dọc là sóng trong đó phương dao động của các phần tử trùng với phương truyền sóng (truyền được trong cả chất rắn, chất lỏng và chất khí). Sóng cơ hoàn toàn không truyền được trong chân không.',
            keyPoints: [
              'Sóng cơ truyền dao động, pha dao động và năng lượng, không truyền phần tử vật chất.',
              'Sóng ngang: phương dao động vuông góc phương truyền sóng (chỉ truyền trong rắn và bề mặt lỏng).',
              'Sóng dọc: phương dao động trùng phương truyền sóng (truyền trong rắn, lỏng, khí).',
            ],
            realWorldApplication:
              'Trong động đất, sóng dọc (sóng sơ cấp P) lan truyền nhanh nhất tới trạm địa chấn trước, sau đó sóng ngang (sóng thứ cấp S) đến sau và gây rung lắc phá hủy công trình mạnh hơn.',
          },
          {
            heading: '2. Các đặc trưng vật lí của sóng và phương trình truyền sóng',
            content:
              'Các đại lượng đặc trưng của sóng cơ bao gồm: Biên độ sóng A (độ lệch cực đại của phần tử môi trường); Chu kì T và tần số f của sóng (bằng chu kì và tần số của nguồn); Tốc độ truyền sóng v (tốc độ lan truyền pha dao động); Bước sóng λ (quãng đường sóng truyền đi trong một chu kì: λ = v·T = v/f). Phương trình sóng tại nguồn O có dạng u_O = A·cos(ωt + φ). Sóng truyền từ O đến điểm M cách O khoảng x theo phương truyền sóng với tốc độ v sau khoảng thời gian t\' = x/v. Phương trình sóng tại M là u_M = A·cos(ω(t - x/v) + φ) = A·cos(ωt - 2πx/λ + φ). Hai điểm cách nhau khoảng cách d trên cùng một phương truyền sóng có độ lệch pha Δφ = 2πd/λ.',
            keyPoints: [
              'Hai điểm cùng pha: d = kλ; Hai điểm ngược pha: d = (k + 0,5)λ; Hai điểm vuông pha: d = (k + 0,5)λ/2.',
              'Phương trình sóng tuần hoàn theo thời gian với chu kì T và tuần hoàn theo không gian với chu kì λ.',
              'Năng lượng sóng tỉ lệ với bình phương biên độ sóng và bình phương tần số: W ~ A²f².',
            ],
            realWorldApplication:
              'Kỹ thuật siêu âm trong y tế sử dụng sóng cơ có tần số cao trên 20 kHz để quét phản xạ tái tạo hình ảnh các cơ quan nội tạng và thai nhi.',
          },
        ],
        quantities: [
          {
            name: 'Bước sóng',
            symbol: 'λ',
            si_unit: 'm',
            other_units: 'cm, mm',
            measuring_device: 'Thước đo gợn sóng quang học',
            description: 'Khoảng cách giữa hai điểm gần nhau nhất trên cùng phương truyền sóng dao động cùng pha.',
          },
          {
            name: 'Tốc độ truyền sóng',
            symbol: 'v',
            si_unit: 'm/s',
            other_units: 'km/h',
            measuring_device: 'Hệ thống cảm biến thời gian truyền sóng',
            description: 'Tốc độ lan truyền trạng thái dao động trong môi trường (v = λ / T = λ · f).',
          },
          {
            name: 'Độ lệch pha',
            symbol: 'Δφ',
            si_unit: 'rad',
            other_units: 'độ (°)',
            measuring_device: 'Máy hiện sóng 2 kênh đo lệch pha',
            description: 'Hiệu số pha dao động giữa hai điểm bất kì trong không gian truyền sóng.',
          },
        ],
        formulas: [
          {
            name: 'Công thức liên hệ bước sóng, tốc độ và phương trình sóng',
            latex_expression: '\\lambda = v \\cdot T = \\frac{v}{f}; \\quad u_M = A \\cos\\left(\\omega t - \\frac{2\\pi x}{\\lambda}\\right)',
            plain_expression: 'lambda = v * T = v / f; u_M = A * cos(omega * t - 2*pi*x / lambda)',
            variables: [
              { symbol: 'λ', name: 'Bước sóng', unit: 'm' },
              { symbol: 'v', name: 'Tốc độ truyền sóng', unit: 'm/s' },
              { symbol: 'f', name: 'Tần số sóng', unit: 'Hz' },
              { symbol: 'x', name: 'Khoảng cách từ nguồn đến điểm M', unit: 'm' },
            ],
            derived_formulas: [
              { expression: '\\Delta\\varphi = \\frac{2\\pi d}{\\lambda}', description: 'Độ lệch pha giữa hai điểm cách nhau khoảng d trên một phương truyền sóng' },
              { expression: 'v = \\lambda \\cdot f', description: 'Tính tốc độ truyền sóng từ bước sóng và tần số' },
            ],
            usage_note: 'Khoảng cách d và bước sóng λ phải sử dụng cùng một đơn vị đo độ dài.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính bước sóng và độ lệch pha giữa hai điểm trên một phương truyền sóng',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một sóng cơ truyền dọc theo trục Ox từ nguồn O với tần số f = 50 Hz và tốc độ truyền sóng v = 4 m/s. Biên độ sóng A = 2 cm không đổi. a) Tính bước sóng của sóng này. b) Viết phương trình sóng tại điểm M cách O một đoạn x = 20 cm, biết phương trình sóng tại O là u_O = 2·cos(100πt) (cm). c) Tính độ lệch pha giữa hai điểm M và N trên trục Ox cách nhau 6 cm.',
            given_summary: 'f = 50 Hz; v = 4 m/s = 400 cm/s; u_O = 2·cos(100πt) (cm); x = 20 cm; d = 6 cm.',
            solution_steps: [
              'Bước 1: Bước sóng λ = v / f = 4 / 50 = 0,08 m = 8 cm.',
              'Bước 2: Phương trình sóng tại M cách O khoảng x = 20 cm là: u_M = 2·cos(100πt - 2πx / λ) = 2·cos(100πt - 2π · 20 / 8) = 2·cos(100πt - 5π) (cm).',
              'Bước 3: Độ lệch pha giữa hai điểm M và N cách nhau d = 6 cm trên cùng phương truyền sóng: Δφ = 2πd / λ = 2π · 6 / 8 = 1,5π rad = 3π/2 rad.',
              'Bước 4: Nhận xét: Vì Δφ = 1,5π nên dao động tại hai điểm M và N vuông pha với nhau.',
            ],
            final_answer: 'a) λ = 8 cm (0,08 m). b) u_M = 2·cos(100πt - 5π) (cm). c) Δφ = 1,5π rad (vuông pha).',
          },
        ],
        simulation: {
          sim_key: 'g11_mechanical_waves_lab',
          title: 'Mô phỏng Lan truyền Sóng Cơ và Đồ thị Sóng',
          description:
            'Quan sát trực quan sóng ngang hình sin lan truyền trên sợi dây đàn hồi, điều chỉnh tần số f, biên độ A và tốc độ v, đo bước sóng λ trực tiếp trên thước đo.',
          parameters: {
            frequency_hz: 2,
            amplitude_cm: 3,
            wave_speed_m_s: 4,
          },
          guide_steps: [
            'Bật mô phỏng chuyển động chậm (Slow Motion) để theo dõi các phần tử dao động theo phương thẳng đứng.',
            'Dùng thanh đo khoảng cách giữa hai đỉnh sóng liên tiếp để xác định bước sóng λ.',
            'Tăng tần số sóng lên 2 lần để quan sát bước sóng λ bị giảm đi một nửa.',
          ],
          physics_insight:
            'Hình ảnh chụp sóng tại một thời điểm t cho thấy đồ thị hàm sin theo không gian x với chu kì là bước sóng λ.',
        },
      },

      // TOPIC 2.2
      {
        order_index: 2,
        code: 'G11-CH2-TP2',
        title: 'Chủ đề 2.2: Giao thoa sóng và hiện tượng sóng dừng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khảo sát hiện tượng giao thoa của hai nguồn sóng kết hợp, xác lập vị trí các vân cực đại và cực tiểu giao thoa. Khám phá hiện tượng sóng dừng do sự giao thoa giữa sóng tới và sóng phản xạ, xác định vị trí các nút và bụng sóng cùng điều kiện tạo sóng dừng trên sợi dây.',
        summary_note:
          'Giao thoa 2 nguồn cùng pha: cực đại khi d₂ - d₁ = kλ; cực tiểu khi d₂ - d₁ = (k + 0,5)λ. Sóng dừng: khoảng cách 2 nút liên tiếp bằng λ/2, hai bụng liên tiếp bằng λ/2, nút đến bụng kề bằng λ/4.',
        theory_sections: [
          {
            heading: '1. Hiện tượng giao thoa sóng cơ',
            content:
              'Giao thoa sóng là hiện tượng hai sóng kết hợp khi gặp nhau tạo ra những điểm dao động với biên độ cực đại xen kẽ với những điểm dao động với biên độ cực tiểu hoặc triệt tiêu. Điều kiện để có hiện tượng giao thoa là hai nguồn sóng phải là hai nguồn kết hợp: cùng tần số và có hiệu số pha không đổi theo thời gian. Xét hai nguồn cùng pha S₁ và S₂ cách nhau một khoảng. Tại điểm M cách hai nguồn khoảng d₁ và d₂: Điểm M dao động cực đại khi hiệu đường đi d₂ - d₁ = kλ (k = 0, ±1, ±2...); Điểm M dao động cực tiểu khi hiệu đường đi d₂ - d₁ = (k + 0,5)λ. Quỹ tích các điểm cực đại và cực tiểu là các đường hyperbol nhận hai nguồn làm tiêu điểm.',
            keyPoints: [
              'Điều kiện giao thoa: hai nguồn cùng tần số và hiệu số pha không đổi theo thời gian.',
              'Cực đại giao thoa: d₂ - d₁ = kλ, biên độ sóng tổng hợp bằng 2A (với k = 0 là vân trung tâm).',
              'Cực tiểu giao thoa: d₂ - d₁ = (k + 0,5)λ, biên độ sóng triệt tiêu bằng 0.',
              'Khoảng cách giữa hai cực đại liên tiếp trên đường thẳng nối hai nguồn bằng λ/2.',
            ],
            realWorldApplication:
              'Tai nghe chống ồn chủ động (Active Noise Cancelling - ANC) thu nhận sóng âm ồn bên ngoài rồi phát ra sóng âm ngược pha để giao thoa triệt tiêu tiếng ồn.',
          },
          {
            heading: '2. Hiện tượng sóng dừng trên sợi dây đàn hồi',
            content:
              'Khi có sóng truyền trên một sợi dây gặp vật cản cố định, sóng phản xạ bị đổi pha π (ngược pha) so với sóng tới tại điểm phản xạ; nếu vật cản tự do, sóng phản xạ cùng pha với sóng tới. Sự giao thoa giữa sóng tới và sóng phản xạ trên cùng một sợi dây tạo thành hiện tượng sóng dừng. Sóng dừng có các điểm luôn đứng yên gọi là nút sóng, và các điểm luôn dao động với biên độ cực đại gọi là bụng sóng. Khoảng cách giữa hai nút liên tiếp hoặc hai bụng liên tiếp bằng λ/2; khoảng cách giữa một nút và một bụng kề nhau bằng λ/4. Điều kiện sóng dừng trên dây hai đầu cố định: L = k·λ/2 (k là số bó sóng hay số bụng sóng, số nút là k + 1). Điều kiện sóng dừng trên dây một đầu cố định một đầu tự do: L = (2k + 1)·λ/4 (k là số bó sóng nguyên, số bụng = số nút = k + 1).',
            keyPoints: [
              'Hai đầu cố định: L = k·(λ/2) => f = k·(v / 2L) (âm cơ bản khi k = 1, các họa âm bậc k).',
              'Một đầu cố định một đầu tự do: L = (2k + 1)·(λ/4) => f = (2k + 1)·(v / 4L) (chỉ có các họa âm bậc lẻ).',
              'Mọi điểm trong cùng một bó sóng luôn dao động cùng pha; hai điểm thuộc hai bó sóng liền kề luôn dao động ngược pha.',
            ],
            realWorldApplication:
              'Dây đàn ghi-ta, vĩ cầm là ví dụ điển hình của sóng dừng hai đầu cố định tạo ra âm sắc đặc trưng gồm âm cơ bản và các họa âm.',
          },
        ],
        quantities: [
          {
            name: 'Số bó sóng dừng',
            symbol: 'k',
            si_unit: 'không thứ nguyên',
            other_units: 'bó',
            measuring_device: 'Đếm trực quan qua đèn nhấp nháy stroboscope',
            description: 'Số đoạn nửa bước sóng hình thành trên dây giữa các nút sóng liên tiếp.',
          },
          {
            name: 'Khoảng cách giữa hai nguồn kết hợp',
            symbol: 'S₁S₂',
            si_unit: 'm',
            other_units: 'cm',
            measuring_device: 'Thước cặp cơ khí hoặc thước lá chia vạch',
            description: 'Khoảng cách cố định giữa hai mũi nhọn rung trên mặt nước.',
          },
          {
            name: 'Chiều dài sợi dây tạo sóng dừng',
            symbol: 'L',
            si_unit: 'm',
            other_units: 'cm',
            measuring_device: 'Thước cuộn kỹ thuật',
            description: 'Chiều dài phần tự do của dây căng giữa hai điểm mút cố định hoặc tự do.',
          },
        ],
        formulas: [
          {
            name: 'Điều kiện cực đại giao thoa và sóng dừng hai đầu cố định',
            latex_expression: 'd_2 - d_1 = k\\lambda; \\quad L = k\\frac{\\lambda}{2} = k\\frac{v}{2f}',
            plain_expression: 'd2 - d1 = k * lambda; L = k * lambda / 2 = k * v / (2*f)',
            variables: [
              { symbol: 'd₂ - d₁', name: 'Hiệu khoảng cách từ điểm khảo sát đến 2 nguồn', unit: 'm hoặc cm' },
              { symbol: 'λ', name: 'Bước sóng', unit: 'm hoặc cm' },
              { symbol: 'L', name: 'Chiều dài sợi dây', unit: 'm' },
              { symbol: 'k', name: 'Số nguyên (số bó sóng / bậc cực đại)', unit: 'nguyên (1, 2, 3...)' },
              { symbol: 'v', name: 'Tốc độ truyền sóng trên dây', unit: 'm/s' },
              { symbol: 'f', name: 'Tần số dao động', unit: 'Hz' },
            ],
            derived_formulas: [
              { expression: 'N_{\\text{cực đại}} = 2 \\left\\lfloor \\frac{S_1S_2}{\\lambda} \\right\\rfloor + 1', description: 'Số vân cực đại giao thoa giữa hai nguồn cùng pha' },
              { expression: 'f_k = k \\cdot f_1', description: 'Tần số của họa âm bậc k trên dây 2 đầu cố định với f₁ là âm cơ bản' },
            ],
            usage_note: 'Khi tính số cực đại trên đoạn S₁S₂, giải bất phương trình -S₁S₂ < kλ < S₁S₂.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Đếm số cực đại giao thoa và tính tần số sóng dừng trên dây',
            difficulty: 'Vận dụng',
            problem_statement:
              'a) Trong thí nghiệm giao thoa sóng nước với hai nguồn kết hợp cùng pha S₁ và S₂ cách nhau 15 cm, tần số sóng f = 20 Hz, tốc độ truyền sóng v = 60 cm/s. Tính số điểm cực đại và cực tiểu giao thoa trên đoạn thẳng S₁S₂.\nb) Một sợi dây đàn hồi dài L = 1,2 m hai đầu cố định. Biết tốc độ truyền sóng trên dây là v = 24 m/s. Tìm tần số nhỏ nhất để có sóng dừng trên dây và số nút, số bụng sóng khi tần số là 60 Hz.',
            given_summary: 'a) S₁S₂ = 15 cm; f = 20 Hz; v = 60 cm/s. b) L = 1,2 m; v = 24 m/s; hai đầu cố định.',
            solution_steps: [
              'Bước 1: Tính bước sóng giao thoa: λ = v / f = 60 / 20 = 3 cm.',
              'Bước 2: Tìm số cực đại trên đoạn S₁S₂: giải bất phương trình -S₁S₂ < kλ < S₁S₂ => -15 < 3k < 15 => -5 < k < 5. Vì k nguyên nên k ∈ {-4, -3, -2, -1, 0, 1, 2, 3, 4} => Có 9 điểm cực đại giao thoa.',
              'Bước 3: Tìm số cực tiểu trên đoạn S₁S₂: -S₁S₂ < (k + 0,5)λ < S₁S₂ => -15 < 3(k + 0,5) < 15 => -5 < k + 0,5 < 5 => -5,5 < k < 4,5. Vì k nguyên nên k ∈ {-5, -4, -3, -2, -1, 0, 1, 2, 3, 4} => Có 10 điểm cực tiểu giao thoa.',
              'Bước 4: Với sóng dừng trên dây hai đầu cố định: L = k·(v / 2f) => f = k·(v / 2L). Tần số nhỏ nhất để có sóng dừng ứng với k = 1: f_min = 1 · 24 / (2 · 1,2) = 10 Hz (âm cơ bản).',
              'Bước 5: Khi f = 60 Hz: số bó sóng k = f / f_min = 60 / 10 = 6 bó. Do đó số bụng sóng = k = 6 bụng; số nút sóng = k + 1 = 7 nút (tính cả hai đầu cố định).',
            ],
            final_answer: 'a) 9 điểm cực đại, 10 điểm cực tiểu. b) f_min = 10 Hz; khi f = 60 Hz: 6 bụng sóng, 7 nút sóng.',
          },
        ],
        simulation: {
          sim_key: 'g11_interference_standing_wave_lab',
          title: 'Phòng thí nghiệm Giao thoa Sóng và Sóng dừng',
          description:
            'Quan sát trực quan giao thoa 2 nguồn nước kết hợp tạo các gợn hyperbol cực đại/cực tiểu và mô phỏng sóng dừng trên sợi dây với các nút và bụng dao động.',
          parameters: {
            source_distance_cm: 15,
            wave_frequency_hz: 20,
            standing_wave_harmonics: 3,
          },
          guide_steps: [
            'Chuyển sang chế độ Giao thoa 2 nguồn, thay đổi khoảng cách S₁S₂ để thấy số lượng vân cực đại thay đổi.',
            'Chuyển sang chế độ Sóng dừng trên dây, thay đổi họa âm k = 1, 2, 3, 4 để quan sát các bó sóng hình thành rõ nét.',
            'Xác minh khoảng cách giữa hai nút liên tiếp đúng bằng nửa bước sóng λ/2.',
          ],
          physics_insight:
            'Hiện tượng giao thoa là bằng chứng thực nghiệm quan trọng nhất khẳng định bản chất sóng của quá trình lan truyền dao động.',
        },
      },

      // TOPIC 2.3
      {
        order_index: 3,
        code: 'G11-CH2-TP3',
        title: 'Chủ đề 2.3: Sóng điện từ và thang sóng điện từ',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khám phá bản chất điện từ trường của Maxwell, các đặc tính lan truyền của sóng điện từ trong chân không và môi trường. Khảo sát toàn diện Thang sóng điện từ: từ sóng vô tuyến, tia hồng ngoại, ánh sáng nhìn thấy, tia tử ngoại, tia X đến tia gamma cùng các ứng dụng công nghệ vượt bậc trong thông tin liên lạc và y tế hiện đại.',
        summary_note:
          'Sóng điện từ là sóng ngang, truyền được trong chân không với tốc độ c ≈ 3·10⁸ m/s. Thứ tự bước sóng giảm dần: Vô tuyến > Hồng ngoại > Ánh sáng nhìn thấy (đỏ đến tím) > Tử ngoại > Tia X > Tia Gamma.',
        theory_sections: [
          {
            heading: '1. Bản chất và đặc điểm của sóng điện từ',
            content:
              'Theo thuyết điện từ của Maxwell: một từ trường biến thiên theo thời gian sinh ra một điện trường xoáy (điện trường có đường sức khép kín); ngược lại, một điện trường biến thiên theo thời gian sinh ra một từ trường xoáy. Hai trường biến thiên này liên hệ mật thiết, tạo thành một trường thống nhất gọi là điện từ trường. Điện từ trường lan truyền trong không gian dưới dạng sóng gọi là sóng điện từ. Sóng điện từ truyền được trong mọi môi trường vật chất và truyền được cả trong chân không với tốc độ c = 299 792 458 m/s ≈ 3 × 10⁸ m/s. Sóng điện từ là sóng ngang: tại mọi điểm, vector cường độ điện trường E và vector cảm ứng từ B luôn vuông góc với nhau và vuông góc với phương truyền sóng, đồng thời dao động cùng pha.',
            keyPoints: [
              'Điện từ trường thống nhất: điện trường biến thiên sinh ra từ trường, từ trường biến thiên sinh ra điện trường xoáy.',
              'Sóng điện từ là sóng ngang, mang năng lượng tỉ lệ với lũy thừa bậc 4 của tần số (W ~ f⁴).',
              'Tốc độ sóng điện từ trong chân không là hằng số phổ quát c ≈ 3 × 10⁸ m/s; trong môi trường chiết suất n, v = c/n.',
            ],
            realWorldApplication:
              'Mạng thông tin không dây (Wi-Fi, 4G, 5G), định vị vệ tinh GPS và trạm phát thanh truyền hình hoạt động hoàn toàn dựa trên sự truyền sóng điện từ trong khí quyển và vũ trụ.',
          },
          {
            heading: '2. Thang sóng điện từ và ứng dụng công nghệ',
            content:
              'Toàn bộ các bức xạ điện từ được sắp xếp liên tục theo bước sóng λ giảm dần (hoặc tần số f tăng dần) tạo thành Thang sóng điện từ: 1. Sóng vô tuyến (λ từ vài km đến 1 mm): chia thành sóng dài, trung, ngắn, cực ngắn dùng trong truyền hình, phát thanh và viễn thông vi ba. 2. Tia hồng ngoại (λ từ 760 nm đến 1 mm): bức xạ nhiệt do mọi vật có nhiệt độ cao hơn 0 K phát ra; tác dụng nhiệt nổi bật; dùng trong sấy khô, điều khiển từ xa, camera chụp đêm tầm nhiệt. 3. Ánh sáng nhìn thấy (λ từ 380 nm tím đến 760 nm đỏ): vùng sóng điện từ mắt người cảm nhận được giúp ta nhận biết thế giới xung quanh. 4. Tia tử ngoại (λ từ 10 nm đến 380 nm): do các vật nóng trên 2000°C phát ra (Mặt Trời, hồ quang điện); có tác dụng sinh học, diệt khuẩn, kích thích phát quang, chữa bệnh còi xương. 5. Tia X (λ từ 10⁻¹¹ m đến 10⁻⁸ m): phát ra từ ống tia X (ống Coolidge); khả năng đâm xuyên mạnh; dùng trong chụp chiếu X-quang y tế, kiểm tra hành lý an ninh sân bay. 6. Tia gamma (λ < 10⁻¹¹ m): phát ra từ các phản ứng hạt nhân và phân rã phóng xạ; mang năng lượng cực lớn; dùng điều trị khối u trong xạ trị dao gamma (Gamma Knife).',
            keyPoints: [
              'Bước sóng càng ngắn (tần số càng cao) thì năng lượng photon càng lớn, khả năng đâm xuyên càng mạnh, tác dụng ion hóa và sinh học càng cao.',
              'Bước sóng càng dài thì tính chất sóng (giao thoa, nhiễu xạ) thể hiện càng rõ nét.',
              'Ánh sáng nhìn thấy chỉ chiếm một dải rất hẹp trong toàn bộ thang sóng điện từ.',
            ],
            realWorldApplication:
              'Kính viễn vọng không gian James Webb chụp vũ trụ bằng dải sóng hồng ngoại để xuyên qua các đám mây bụi khí liên sao, quan sát các thiên hà sơ khai hình thành sau Big Bang.',
          },
        ],
        quantities: [
          {
            name: 'Tốc độ ánh sáng trong chân không',
            symbol: 'c',
            si_unit: 'm/s',
            other_units: 'km/s (300.000 km/s)',
            measuring_device: 'Giao thoa kế laser chính xác tuyệt đối',
            description: 'Tốc độ giới hạn phổ quát của sóng điện từ trong chân không (c ≈ 3 × 10⁸ m/s).',
          },
          {
            name: 'Tần số sóng điện từ',
            symbol: 'f',
            si_unit: 'Hz',
            other_units: 'kHz, MHz, GHz, THz',
            measuring_device: 'Máy phân tích phổ tần số sóng (Spectrum Analyzer)',
            description: 'Số dao động điện từ toàn phần thực hiện được trong một giây.',
          },
        ],
        formulas: [
          {
            name: 'Hệ thức liên hệ bước sóng và tần số sóng điện từ trong chân không',
            latex_expression: 'c = \\lambda \\cdot f \\quad \\Longleftrightarrow \\quad \\lambda = \\frac{c}{f} = c \\cdot T',
            plain_expression: 'c = lambda * f <=> lambda = c / f',
            variables: [
              { symbol: 'c', name: 'Tốc độ ánh sáng trong chân không', unit: 'm/s (3 × 10⁸ m/s)' },
              { symbol: 'λ', name: 'Bước sóng điện từ', unit: 'm' },
              { symbol: 'f', name: 'Tần số sóng điện từ', unit: 'Hz' },
            ],
            derived_formulas: [
              { expression: '\\lambda_m = \\frac{\\lambda}{n} = \\frac{c}{n \\cdot f}', description: 'Bước sóng của sóng điện từ trong môi trường có chiết suất n' },
            ],
            usage_note: 'Khi truyền từ chân không vào môi trường vật chất chiết suất n, tần số f không đổi nhưng tốc độ giảm v = c/n và bước sóng giảm λ_m = λ/n.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính bước sóng và phân loại vùng sóng trên thang sóng điện từ',
            difficulty: 'Thông hiểu',
            problem_statement:
              'a) Đài Tiếng nói Việt Nam (VOV) phát sóng trên kênh FM với tần số f₁ = 100 MHz. Tính bước sóng của sóng phát thanh này trong không khí và cho biết nó thuộc loại sóng nào.\nb) Một máy chụp X-quang tại bệnh viện phát ra chùm tia X có bước sóng λ₂ = 0,2 nm. Tính tần số của tia X này và so sánh với tần số của ánh sáng vàng (λ_vàng = 589 nm).',
            given_summary: 'c = 3 × 10⁸ m/s; f₁ = 100 MHz = 10⁸ Hz; λ₂ = 0,2 nm = 0,2 × 10⁻⁹ m; λ_vàng = 589 nm = 589 × 10⁻⁹ m.',
            solution_steps: [
              'Bước 1: Tính bước sóng sóng FM của đài VOV: λ₁ = c / f₁ = (3 × 10⁸) / (100 × 10⁶) = 3 m.',
              'Bước 2: Phân loại: Sóng có bước sóng 3 m (nằm trong khoảng từ 1 m đến 10 m) thuộc loại sóng cực ngắn (VHF) của sóng vô tuyến.',
              'Bước 3: Tính tần số của tia X: f₂ = c / λ₂ = (3 × 10⁸) / (0,2 × 10⁻⁹) = 1,5 × 10¹⁸ Hz = 1,5 triệu THz.',
              'Bước 4: Tính tần số của ánh sáng vàng: f_vàng = c / λ_vàng = (3 × 10⁸) / (589 × 10⁻⁹) ≈ 5,09 × 10¹⁴ Hz.',
              'Bước 5: So sánh tần số: f₂ / f_vàng = (1,5 × 10¹⁸) / (5,09 × 10¹⁴) ≈ 2947 lần. Tần số tia X lớn hơn gần 3000 lần tần số ánh sáng nhìn thấy, giải thích vì sao tia X có năng lượng photon cực lớn và khả năng đâm xuyên sâu qua cơ thể.',
            ],
            final_answer: 'a) λ₁ = 3 m (sóng cực ngắn vô tuyến). b) f₂ = 1,5 × 10¹⁸ Hz (gấp gần 3000 lần tần số ánh sáng vàng).',
          },
        ],
        simulation: {
          sim_key: 'g11_em_spectrum_lab',
          title: 'Khám phá Tương tác Thang Sóng Điện Từ',
          description:
            'Tương tác trực quan trên thanh trượt liên tục của thang sóng điện từ từ Radio tới Tia Gamma; xem bước sóng, tần số tương ứng và ứng dụng đời sống.',
          parameters: {
            log_wavelength_m: -6,
            display_mode: 'scientific',
          },
          guide_steps: [
            'Kéo thanh trượt qua các dải sóng: Vô tuyến, Hồng ngoại, Khả kiến, Tử ngoại, Tia X, Tia Gamma.',
            'Quan sát biểu diễn động của vector dao động điện trường E và từ trường B vuông góc nhau.',
            'Nhấn vào từng dải sóng để mở bảng mô tả chi tiết nguồn phát và ứng dụng thực tiễn.',
          ],
          physics_insight:
            'Bản chất của tất cả các bức xạ trong thang sóng điện từ đều giống nhau (là điện từ trường lan truyền), sự khác nhau về tính chất là do sự khác biệt về bước sóng và năng lượng photon.',
        },
      },
    ],
  },

  // =========================================================================
  // CHAPTER 3: ĐIỆN TRƯỜNG
  // =========================================================================
  {
    order_index: 3,
    code: 'G11-CH3',
    title: 'Chương 3: Điện trường',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Vật lí 11 GDPT 2018 (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều): Tương tác tĩnh điện và định luật Coulomb; khái niệm điện trường, vector cường độ điện trường E và đường sức điện; công của lực điện, điện thế V và hiệu điện thế U; cấu tạo, điện dung và năng lượng tích trữ trong tụ điện.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 3: Điện trường
1. **Lực tương tác tĩnh điện - Định luật Coulomb:**
   - Lực tương tác giữa hai điện tích điểm đứng yên trong chân không tỉ lệ thuận với tích độ lớn của hai điện tích và tỉ lệ nghịch với bình phương khoảng cách giữa chúng:
     $$F = k \\frac{|q_1 q_2|}{r^2} \\quad \\text{với } k = \\frac{1}{4\\pi\\varepsilon_0} \\approx 9 \\times 10^9\\,\\text{N}\\cdot\\text{m}^2/\\text{C}^2.$$
   - Trong môi trường điện môi đồng tính có hằng số điện môi $\\varepsilon$: $F = k \\frac{|q_1 q_2|}{\\varepsilon r^2}$ (lực tương tác giảm $\\varepsilon$ lần so với chân không).
   - Hai điện tích cùng dấu thì đẩy nhau; khác dấu thì hút nhau. Lực tương tác có phương trùng với đường thẳng nối hai điện tích.

2. **Điện trường và Cường độ điện trường:**
   - Điện trường là dạng vật chất tồn tại xung quanh điện tích và truyền tương tác tĩnh điện.
   - Vector cường độ điện trường: $\\vec{E} = \\frac{\\vec{F}}{q}$. Hướng ra xa điện tích dương ($Q > 0$) và hướng về phía điện tích âm ($Q < 0$). Đơn vị là Vôn trên mét ($\\text{V/m}$).
   - Độ lớn cường độ điện trường do điện tích điểm $Q$ gây ra tại điểm cách nó khoảng $r$: $E = k \\frac{|Q|}{\\varepsilon r^2}$.
   - Nguyên lý chồng chất điện trường: $\\vec{E} = \\vec{E}_1 + \\vec{E}_2 + \\dots + \\vec{E}_n$.
   - Đường sức điện: là đường mà tiếp tuyến tại mỗi điểm trùng với phương của vector cường độ điện trường tại điểm đó. Đường sức xuất phát từ điện tích dương (hoặc vô cực) và kết thúc ở điện tích âm (hoặc vô cực), không bao giờ cắt nhau.
   - Điện trường đều: Có vector cường độ điện trường $\\vec{E}$ tại mọi điểm bằng nhau về phương, chiều và độ lớn; các đường sức là các đường thẳng song song cách đều nhau (ví dụ: giữa hai bản kim loại tích điện trái dấu đặt song song).

3. **Công lực điện, Điện thế và Hiệu điện thế:**
   - Công của lực điện tác dụng lên điện tích $q$ di chuyển từ điểm $M$ đến $N$ trong điện trường đều: $A_{MN} = q E d = q U_{MN}$ (với $d$ là độ dài đại số hình chiếu đường đi lên phương đường sức điện).
   - Đặc điểm cốt lõi: Công của lực điện **không phụ thuộc vào hình dạng đường đi**, chỉ phụ thuộc vào vị trí điểm đầu và điểm cuối $\\rightarrow$ Điện trường tĩnh là một **trường lực thế**.
   - Thế năng tĩnh điện: $W_M = q V_M$. Hiệu điện thế: $U_{MN} = V_M - V_N = \\frac{A_{MN}}{q}$.
   - Mối liên hệ giữa cường độ điện trường và hiệu điện thế: $E = \\frac{U}{d}$ ($\\text{V/m}$).

4. **Tụ điện, Điện dung và Năng lượng điện trường:**
   - Tụ điện là một hệ hai vật dẫn đặt gần nhau và ngăn cách nhau bằng một lớp điện môi, có tác dụng tích và phóng điện tích.
   - Điện dung của tụ điện: $C = \\frac{Q}{U}$ (Fara, kí hiệu F). Phụ thuộc vào hình dạng, kích thước, khoảng cách hai bản tụ và chất điện môi giữa hai bản; **không phụ thuộc** vào $Q$ và $U$.
   - Tụ điện phẳng: $C = \\frac{\\varepsilon S}{4\\pi k d} = \\frac{\\varepsilon \\varepsilon_0 S}{d}$.
   - Ghép tụ điện:
     - Song song: $C = C_1 + C_2 + \\dots; \\quad U = U_1 = U_2 = \\dots; \\quad Q = Q_1 + Q_2 + \\dots$
     - Nối tiếp: $\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\dots; \\quad U = U_1 + U_2 + \\dots; \\quad Q = Q_1 = Q_2 = \\dots$
   - Năng lượng điện trường tích trữ trong tụ điện: $W = \\frac{1}{2} C U^2 = \\frac{1}{2} Q U = \\frac{Q^2}{2C}$ (J).`,
    key_takeaways: [
      'Định luật Coulomb: Lực tương tác tĩnh điện F = k·|q₁q₂| / (ε·r²); tỉ lệ nghịch với bình phương khoảng cách r.',
      'Vector cường độ điện trường E = F/q; do điện tích điểm Q gây ra có độ lớn E = k·|Q| / (ε·r²).',
      'Công của lực điện trường không phụ thuộc hình dạng đường đi: A_MN = q·E·d = q·U_MN; điện trường là trường thế.',
      'Mối liên hệ giữa hiệu điện thế và cường độ điện trường đều: E = U / d (V/m).',
      'Điện dung tụ điện C = Q/U (F); ghép song song C_ss = C₁ + C₂; ghép nối tiếp 1/C_nt = 1/C₁ + 1/C₂.',
      'Năng lượng điện trường tích trữ trong tụ điện: W = 1/2 C·U² = 1/2 Q·U = Q² / (2C).',
    ],
    formula_cheatsheet: [
      {
        name: 'Định luật Coulomb và Cường độ điện trường',
        latex: 'F = k \\frac{|q_1 q_2|}{\\varepsilon r^2}; \\quad E = k \\frac{|Q|}{\\varepsilon r^2} = \\frac{F}{|q|}',
        note: 'k = 9 × 10⁹ N·m²/C²; q₁, q₂ (C); r (m); E (V/m hay N/C).',
      },
      {
        name: 'Công lực điện và Hiệu điện thế',
        latex: 'A_{MN} = q E d = q U_{MN}; \\quad U_{MN} = V_M - V_N = \\frac{A_{MN}}{q}; \\quad E = \\frac{U}{d}',
        note: 'A (J), q (C), U (V), d (m là hình chiếu lên phương đường sức).',
      },
      {
        name: 'Điện dung và Ghép tụ điện',
        latex: 'C = \\frac{Q}{U}; \\quad C_{\\text{ss}} = C_1 + C_2; \\quad \\frac{1}{C_{\\text{nt}}} = \\frac{1}{C_1} + \\frac{1}{C_2}',
        note: 'C (F); 1 µF = 10⁻⁶ F; 1 nF = 10⁻⁹ F; 1 pF = 10⁻¹² F.',
      },
      {
        name: 'Năng lượng điện trường của tụ điện',
        latex: 'W = \\frac{1}{2} C U^2 = \\frac{1}{2} Q U = \\frac{Q^2}{2C}',
        note: 'W (J), C (F), U (V), Q (C).',
      },
    ],
    topics: [
      // TOPIC 3.1
      {
        order_index: 1,
        code: 'G11-CH3-TP1',
        title: 'Chủ đề 3.1: Lực tương tác Coulomb và cường độ điện trường',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khám phá định luật cơ bản của tĩnh điện học Coulomb, phân tích lực tương tác giữa các điện tích điểm trong chân không và môi trường điện môi. Định nghĩa điện trường, vector cường độ điện trường E, quy tắc chồng chất điện trường và trực quan hóa đường sức điện.',
        summary_note:
          'Lực Coulomb tỉ lệ nghịch với bình phương khoảng cách r. Điện trường do điện tích dương hướng ra xa, do điện tích âm hướng vào trong.',
        theory_sections: [
          {
            heading: '1. Định luật Coulomb về tương tác tĩnh điện',
            content:
              'Có hai loại điện tích: điện tích dương (+) và điện tích âm (-). Điện tích nguyên tố có độ lớn e = 1,6 × 10⁻¹⁹ C. Theo định luật Coulomb: Lực tương tác giữa hai điện tích điểm q₁ và q₂ đứng yên trong chân không có phương trùng với đường thẳng nối hai điện tích, có độ lớn tỉ lệ thuận với tích độ lớn của hai điện tích và tỉ lệ nghịch với bình phương khoảng cách giữa chúng: F = k·|q₁q₂| / r², trong đó k = 9 × 10⁹ N·m²/C². Khi đặt trong môi trường điện môi đồng tính có hằng số điện môi ε (chân không ε = 1, không khí ε ≈ 1, nước cất ε = 81), lực tương tác giảm đi ε lần: F = k·|q₁q₂| / (ε·r²). Hai điện tích cùng dấu thì đẩy nhau, hai điện tích trái dấu thì hút nhau.',
            keyPoints: [
              'Lực tương tác tuân theo định luật III Newton: F₁₂ = -F₂₁ (cùng độ lớn, ngược chiều).',
              'Khoảng cách r tăng 2 lần thì lực F giảm 4 lần.',
              'Hằng số điện môi ε là đại lượng không thứ nguyên, cho biết lực tương tác điện trong môi trường giảm bao nhiêu lần so với chân không (ε ≥ 1).',
            ],
            realWorldApplication:
              'Máy lọc bụi tĩnh điện trong các nhà máy nhiệt điện sử dụng lực hút Coulomb để tích điện các hạt bụi mịn và hút chúng vào các bản cực kim loại, ngăn ngừa ô nhiễm không khí.',
          },
          {
            heading: '2. Điện trường và Vector cường độ điện trường',
            content:
              'Điện trường là môi trường vật chất đặc biệt bao quanh các điện tích, có tính chất tác dụng lực tĩnh điện lên mọi điện tích khác đặt trong nó. Cường độ điện trường tại một điểm là đại lượng đặc trưng cho tác dụng lực của điện trường tại điểm đó: E = F / q (vector E = vector F / q). Chiều của vector E cùng chiều với lực điện F tác dụng lên điện tích thử dương (q > 0) và ngược chiều với lực điện tác dụng lên điện tích thử âm (q < 0). Độ lớn cường độ điện trường do một điện tích điểm Q gây ra tại điểm cách nó khoảng r trong môi trường điện môi ε là E = k·|Q| / (ε·r²). Nguyên lý chồng chất điện trường: Vector cường độ điện trường tổng hợp tại một điểm do nhiều điện tích gây ra bằng tổng vector cường độ điện trường do từng điện tích riêng rẽ gây ra: E_tổng = E₁ + E₂ + ... + E_n.',
            keyPoints: [
              'Đơn vị của cường độ điện trường là Vôn trên mét (V/m) hoặc Newton trên Coulomb (N/C).',
              'Vector E do điện tích dương gây ra luôn hướng ra xa nó; do điện tích âm gây ra luôn hướng về phía nó.',
              'Đường sức điện không cắt nhau; nơi nào điện trường mạnh thì các đường sức vẽ mau (dày đặc), nơi nào điện trường yếu thì vẽ thưa.',
            ],
            realWorldApplication:
              'Cột thu lôi (cột chống sét) có đầu nhọn kim loại tập trung điện trường rất mạnh ở mũi nhọn để phóng điện ion hóa êm dịu dần dần với đám mây dông, dẫn dòng sét xuống đất an toàn.',
          },
        ],
        quantities: [
          {
            name: 'Cường độ điện trường',
            symbol: 'E',
            si_unit: 'V/m',
            other_units: 'N/C',
            measuring_device: 'Đầu dò điện trường tĩnh (Electric Field Meter)',
            description: 'Đại lượng vector đặc trưng cho khả năng tác dụng lực của điện trường tại một điểm (E = F/|q|).',
          },
          {
            name: 'Điện tích điểm',
            symbol: 'q, Q',
            si_unit: 'C',
            other_units: 'µC (10⁻⁶ C), nC (10⁻⁹ C), pC (10⁻¹² C)',
            measuring_device: 'Điện nghiệm kim loại, tĩnh điện kế số',
            description: 'Lượng điện tích của vật có kích thước rất nhỏ so với khoảng cách khảo sát.',
          },
          {
            name: 'Lực tương tác tĩnh điện Coulomb',
            symbol: 'F',
            si_unit: 'N',
            other_units: 'mN',
            measuring_device: 'Cân xoắn Coulomb, cảm biến lực vi mô',
            description: 'Lực hút hoặc đẩy tĩnh điện giữa hai điện tích điểm.',
          },
        ],
        formulas: [
          {
            name: 'Định luật Coulomb và Cường độ điện trường của điện tích điểm',
            latex_expression: 'F = k \\frac{|q_1 q_2|}{\\varepsilon r^2}; \\quad E = k \\frac{|Q|}{\\varepsilon r^2}',
            plain_expression: 'F = k * |q1 * q2| / (epsilon * r^2); E = k * |Q| / (epsilon * r^2)',
            variables: [
              { symbol: 'k', name: 'Hằng số tĩnh điện', unit: '9 × 10⁹ N·m²/C²' },
              { symbol: 'q₁, q₂, Q', name: 'Độ lớn điện tích', unit: 'C' },
              { symbol: 'r', name: 'Khoảng cách giữa các điện tích', unit: 'm' },
              { symbol: 'ε', name: 'Hằng số điện môi của môi trường', unit: 'không thứ nguyên' },
            ],
            derived_formulas: [
              { expression: '\\vec{F} = q \\vec{E}', description: 'Lực điện tác dụng lên điện tích q đặt trong điện trường E' },
              { expression: '\\vec{E}_{\\text{tổng}} = \\vec{E}_1 + \\vec{E}_2', description: 'Nguyên lý chồng chất điện trường' },
            ],
            usage_note: 'Khoảng cách r bắt buộc phải đổi ra mét (m); điện tích phải đổi ra Coulomb (C).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính lực tương tác Coulomb và cường độ điện trường tổng hợp',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Hai điện tích điểm q₁ = +4 µC và q₂ = -4 µC đặt tại hai điểm A và B cách nhau 10 cm trong không khí (ε = 1). Lấy k = 9 × 10⁹ N·m²/C². a) Tính lực hút tĩnh điện giữa hai điện tích này. b) Xác định độ lớn và hướng của vector cường độ điện trường tại trung điểm M của đoạn thẳng AB.',
            given_summary: 'q₁ = +4 × 10⁻⁶ C; q₂ = -4 × 10⁻⁶ C; r = AB = 10 cm = 0,1 m; M là trung điểm AB => r_M = 0,05 m.',
            solution_steps: [
              'Bước 1: Lực hút Coulomb giữa hai điện tích: F = k·|q₁q₂| / r² = 9 × 10⁹ · |(4 × 10⁻⁶) · (-4 × 10⁻⁶)| / (0,1)² = 9 × 10⁹ · (16 × 10⁻¹²) / 0,01 = 144 / 0,01 = 14,4 N.',
              'Bước 2: Xác định điện trường do q₁ gây ra tại M: M cách A khoảng r₁ = 0,05 m. Vì q₁ > 0 nên vector E₁ hướng từ A sang B (ra xa q₁). Độ lớn: E₁ = k·|q₁| / r₁² = 9 × 10⁹ · (4 × 10⁻⁶) / (0,05)² = 36000 / 0,0025 = 14,4 × 10⁶ V/m.',
              'Bước 3: Xác định điện trường do q₂ gây ra tại M: M cách B khoảng r₂ = 0,05 m. Vì q₂ < 0 nên vector E₂ hướng từ A sang B (hướng về q₂). Độ lớn: E₂ = k·|q₂| / r₂² = 9 × 10⁹ · (4 × 10⁻⁶) / (0,05)² = 14,4 × 10⁶ V/m.',
              'Bước 4: Vì hai vector E₁ và E₂ cùng phương cùng chiều (đều hướng từ A sang B), nên cường độ điện trường tổng hợp tại M có: Chiều hướng từ A sang B; Độ lớn: E_M = E₁ + E₂ = 14,4 × 10⁶ + 14,4 × 10⁶ = 28,8 × 10⁶ V/m = 2,88 × 10⁷ V/m.',
            ],
            final_answer: 'a) F = 14,4 N. b) E_M = 2,88 × 10⁷ V/m, hướng từ A sang B.',
          },
        ],
        simulation: {
          sim_key: 'g11_coulomb_efield_lab',
          title: 'Phòng thí nghiệm Tương tác Coulomb và Lưới Điện Trường',
          description:
            'Đặt các điện tích điểm tự do trên mặt phẳng 2D, quan sát các vector lực Coulomb đẩy/hút theo thời gian thực và mô phỏng các đường sức điện trường.',
          parameters: {
            charge1_microcoulomb: 4,
            charge2_microcoulomb: -4,
            distance_cm: 10,
          },
          guide_steps: [
            'Thay đổi giá trị và dấu của điện tích q₁ và q₂ để quan sát hướng lực đổi từ hút sang đẩy.',
            'Kéo điện tích lại gần để kiểm nghiệm lực tương tác tăng phi tuyến theo tỉ lệ 1/r².',
            'Bật lưới vector cường độ điện trường để thấy trường tổng hợp tại mọi điểm trong không gian.',
          ],
          physics_insight:
            'Đường sức điện trường không bao giờ là những đường cong khép kín (khác với từ trường), chúng bắt đầu từ điện tích dương và kết thúc ở điện tích âm.',
        },
      },

      // TOPIC 3.2
      {
        order_index: 2,
        code: 'G11-CH3-TP2',
        title: 'Chủ đề 3.2: Công của lực điện, điện thế và hiệu điện thế',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khám phá tính chất thế của trường tĩnh điện qua công thức công A = q·E·d không phụ thuộc hình dạng đường đi. Định nghĩa thế năng tĩnh điện W = q·V, điện thế V, hiệu điện thế U = V_M - V_N và xác lập hệ thức liên hệ kinh điển giữa cường độ điện trường đều và hiệu điện thế: E = U/d.',
        summary_note:
          'Công của lực điện trường tĩnh KHÔNG phụ thuộc dạng đường đi, chỉ phụ thuộc vị trí điểm đầu và điểm cuối. Hệ thức liên hệ: U = E·d <=> E = U/d.',
        theory_sections: [
          {
            heading: '1. Công của lực điện trong điện trường đều và thế năng tĩnh điện',
            content:
              'Khi một điện tích q di chuyển từ điểm M đến điểm N trong một điện trường đều có cường độ E, lực điện F = qE tác dụng lên điện tích không đổi. Công của lực điện thực hiện được tính theo công thức: A_MN = q·E·d, trong đó d = s·cosα là độ dài đại số hình chiếu của đoạn thẳng MN lên phương của một đường sức điện (d > 0 nếu hình chiếu cùng chiều đường sức, d < 0 nếu ngược chiều). Kết quả này đúng cho mọi đường cong bất kì nối M và N: Công của lực điện trường tác dụng lên điện tích khi di chuyển không phụ thuộc vào hình dạng đường đi mà chỉ phụ thuộc vào vị trí của điểm đầu M và điểm cuối N. Do đó, điện trường tĩnh là một trường lực thế. Thế năng của điện tích q tại điểm M đặc trưng cho khả năng sinh công của điện trường: W_M = A_M∞ = q·V_M.',
            keyPoints: [
              'Trường tĩnh điện là trường thế, công dọc theo một đường cong kín luôn bằng 0: ∮ qE·ds = 0.',
              'Độ giảm thế năng tĩnh điện bằng công của lực điện: A_MN = W_M - W_N.',
              'Nếu điện tích q dương chuyển động cùng chiều đường sức thì lực điện sinh công dương (A > 0), thế năng giảm.',
            ],
            realWorldApplication:
              'Ống phóng tia điện tử (CRT) trong máy hiện sóng và các máy gia tốc hạt tuyến tính sử dụng điện trường đều giữa các bản lái để gia tốc hạt mang điện sinh công tăng tốc độ electron.',
          },
          {
            heading: '2. Điện thế, Hiệu điện thế và Mối liên hệ E = U/d',
            content:
              'Điện thế tại một điểm M trong điện trường là đại lượng đặc trưng cho điện trường về phương diện tạo ra thế năng khi đặt tại đó một điện tích q: V_M = W_M / q = A_M∞ / q (đơn vị Vôn, V). Hiệu điện thế giữa hai điểm M và N là hiệu số giữa điện thế tại M và điện thế tại N: U_MN = V_M - V_N = A_MN / q. Hiệu điện thế đặc trưng cho khả năng sinh công của điện trường trong sự di chuyển của điện tích giữa hai điểm đó. Trong điện trường đều, mối liên hệ giữa cường độ điện trường E và hiệu điện thế U giữa hai điểm cách nhau khoảng hình chiếu d dọc theo đường sức là: E = U / d (V/m). Mặt đẳng thế là mặt tập hợp tất cả các điểm có cùng điện thế; vector cường độ điện trường luôn vuông góc với mặt đẳng thế.',
            keyPoints: [
              'Hiệu điện thế U_MN đo bằng Vôn (1 V = 1 J/C).',
              'Cường độ điện trường hướng theo chiều giảm của điện thế (từ nơi có điện thế cao sang nơi có điện thế thấp).',
              'Khi điện tích di chuyển trên mặt đẳng thế thì công của lực điện bằng 0 vì hiệu điện thế U = 0.',
            ],
            realWorldApplication:
              'Máy khử rung tim (Defibrillator) phóng một xung hiệu điện thế cao hàng nghìn Vôn qua ngực bệnh nhân trong vài mili-giây để kích thích cơ tim co bóp nhịp nhàng trở lại.',
          },
        ],
        quantities: [
          {
            name: 'Hiệu điện thế',
            symbol: 'U',
            si_unit: 'V',
            other_units: 'mV, kV',
            measuring_device: 'Vôn kế tĩnh điện, đồng hồ vạn năng DMM',
            description: 'Độ chênh lệch điện thế giữa hai điểm trong điện trường (U_MN = V_M - V_N = A_MN/q).',
          },
          {
            name: 'Điện thế',
            symbol: 'V',
            si_unit: 'V',
            other_units: 'kV',
            measuring_device: 'Đầu dò điện thế so với mốc đất',
            description: 'Tỉ số giữa thế năng của điện tích tại một điểm và độ lớn của điện tích đó.',
          },
          {
            name: 'Công của lực điện',
            symbol: 'A',
            si_unit: 'J',
            other_units: 'eV (1 eV = 1,6 × 10⁻¹⁹ J)',
            measuring_device: 'Tính toán gián tiếp từ điện tích và hiệu điện thế',
            description: 'Năng lượng chuyển hóa khi điện tích di chuyển trong điện trường.',
          },
        ],
        formulas: [
          {
            name: 'Công lực điện và Liên hệ giữa Cường độ điện trường và Hiệu điện thế',
            latex_expression: 'A_{MN} = q U_{MN} = q E d; \\quad E = \\frac{U}{d}',
            plain_expression: 'A_MN = q * U_MN = q * E * d; E = U / d',
            variables: [
              { symbol: 'A_MN', name: 'Công của lực điện trường từ M đến N', unit: 'J' },
              { symbol: 'q', name: 'Điện tích di chuyển', unit: 'C' },
              { symbol: 'U_MN', name: 'Hiệu điện thế giữa hai điểm M và N', unit: 'V' },
              { symbol: 'E', name: 'Cường độ điện trường đều', unit: 'V/m' },
              { symbol: 'd', name: 'Độ dài đại số hình chiếu đường đi lên phương đường sức', unit: 'm' },
            ],
            derived_formulas: [
              { expression: 'v = \\sqrt{\\frac{2 q U}{m}}', description: 'Vận tốc hạt mang điện tích q khối lượng m tăng tốc từ trạng thái nghỉ qua hiệu điện thế U' },
            ],
            usage_note: 'Khoảng cách d phải đo theo phương song song với đường sức điện (d = s·cosα).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính công lực điện và tốc độ electron được gia tốc',
            difficulty: 'Vận dụng',
            problem_statement:
              'Hai bản kim loại phẳng rộng đặt song song tích điện trái dấu, cách nhau một khoảng d = 2 cm trong chân không. Hiệu điện thế giữa bản dương và bản âm là U = 200 V. Một electron (khối lượng m_e = 9,1 × 10⁻³¹ kg, điện tích q = -e = -1,6 × 10⁻¹⁹ C) bay không vận tốc đầu từ bản âm sang bản dương. a) Tính cường độ điện trường giữa hai bản kim loại. b) Tính công của lực điện trường tác dụng lên electron khi đến bản dương. c) Tính vận tốc của electron ngay trước khi chạm vào bản dương.',
            given_summary: 'd = 2 cm = 0,02 m; U = 200 V; m_e = 9,1 × 10⁻³¹ kg; q = -1,6 × 10⁻¹⁹ C; v₀ = 0.',
            solution_steps: [
              'Bước 1: Cường độ điện trường đều giữa hai bản: E = U / d = 200 / 0,02 = 10000 V/m = 10⁴ V/m.',
              'Bước 2: Vector đường sức điện hướng từ bản dương sang bản âm. Khi electron bay từ bản âm sang bản dương, chiều chuyển động ngược chiều đường sức nên hình chiếu đường đi d_e = -0,02 m. Công của lực điện trường: A = q E d_e = (-1,6 × 10⁻¹⁹) · 10⁴ · (-0,02) = +3,2 × 10⁻¹⁷ J (hoặc tính nhanh A = |q|·U = 1,6 × 10⁻¹⁹ · 200 = 3,2 × 10⁻¹⁷ J = 200 eV).',
              'Bước 3: Lực điện sinh công dương tăng tốc cho electron. Áp dụng định lý biến thiên động năng: W_đ2 - W_đ1 = A => 1/2 m_e v² - 0 = A.',
              'Bước 4: Vận tốc của electron: v = √(2A / m_e) = √(2 · 3,2 × 10⁻¹⁷ / (9,1 × 10⁻³¹)) = √(6,4 × 10⁻¹⁷ / (9,1 × 10⁻³¹)) = √(7,033 × 10¹³) ≈ 8,39 × 10⁶ m/s.',
            ],
            final_answer: 'a) E = 10⁴ V/m. b) A = 3,2 × 10⁻¹⁷ J (200 eV). c) v ≈ 8,39 × 10⁶ m/s.',
          },
        ],
        simulation: {
          sim_key: 'g11_potential_equipotential_lab',
          title: 'Mô phỏng Điện thế và Bề mặt Đẳng thế 2D',
          description:
            'Thí nghiệm trực quan khảo sát bề mặt đẳng thế, kiểm tra hệ thức liên hệ E = U/d giữa hai bản cực song song và theo dõi quỹ đạo electron bay qua điện trường.',
          parameters: {
            plate_voltage_v: 200,
            plate_gap_cm: 2,
            test_charge_type: 'electron',
          },
          guide_steps: [
            'Thay đổi điện áp U giữa 2 bản kim loại và đo sự phân bố điện thế V theo khoảng cách d.',
            'Quan sát các đường đẳng thế luôn vuông góc với các đường sức điện trường.',
            'Bắn một hạt electron với các vận tốc ban đầu khác nhau để quan sát quỹ đạo parabol tương tự ném ngang.',
          ],
          physics_insight:
            'Hạt mang điện tích dương tự do luôn có xu hướng chuyển động từ nơi có điện thế cao về nơi có điện thế thấp, còn hạt tích điện âm thì ngược lại.',
        },
      },

      // TOPIC 3.3
      {
        order_index: 3,
        code: 'G11-CH3-TP3',
        title: 'Chủ đề 3.3: Tụ điện, điện dung và năng lượng điện trường',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Tìm hiểu cấu tạo và nguyên lý tích phóng điện của tụ điện; định nghĩa điện dung C = Q/U và công thức tính điện dung tụ phẳng. Phân tích các quy tắc ghép tụ điện nối tiếp và song song, cùng công thức năng lượng điện trường tích trữ W = 1/2 CU² ứng dụng rộng rãi trong các mạch điện tử.',
        summary_note:
          'Điện dung C chỉ phụ thuộc cấu tạo tụ điện (C = εS / 4πkd), KHÔNG phụ thuộc Q và U. Ghép song song: C = C₁ + C₂; Ghép nối tiếp: 1/C = 1/C₁ + 1/C₂.',
        theory_sections: [
          {
            heading: '1. Tụ điện và Điện dung của tụ điện',
            content:
              'Tụ điện là một hệ gồm hai vật dẫn đặt gần nhau và ngăn cách nhau bằng một lớp cách điện (điện môi). Tác dụng chính của tụ điện là tích tụ điện tích và năng lượng điện trường để phóng ra khi cần thiết. Điện dung của tụ điện là đại lượng đặc trưng cho khả năng tích điện của tụ ở một hiệu điện thế nhất định: C = Q / U, trong đó Q là độ lớn điện tích trên mỗi bản tụ (C), U là hiệu điện thế giữa hai bản (V). Đơn vị của điện dung là Fara (F). Vì 1 F rất lớn nên thường dùng các ước số: 1 µF = 10⁻⁶ F; 1 nF = 10⁻⁹ F; 1 pF = 10⁻¹² F. Với tụ điện phẳng gồm hai bản kim loại phẳng diện tích S đặt song song cách nhau khoảng cách d với lớp điện môi có hằng số ε: C = ε·S / (4πk·d) = ε·ε₀·S / d (với ε₀ ≈ 8,85 × 10⁻¹² F/m).',
            keyPoints: [
              'Điện dung C là đại lượng không đổi của tụ điện, không đổi khi thay đổi Q hoặc U.',
              'Tăng diện tích đối diện S thì C tăng; tăng khoảng cách hai bản d thì C giảm.',
              'Nếu đưa thêm chất điện môi ε > 1 vào giữa hai bản tụ thì điện dung C tăng lên ε lần.',
            ],
            realWorldApplication:
              'Màn hình cảm ứng điện dung (Capacitive Touchscreen) trên điện thoại thông minh hoạt động bằng cách nhận biết sự thay đổi điện dung vi mô khi đầu ngón tay chạm vào bề mặt kính.',
          },
          {
            heading: '2. Các cách ghép tụ điện và Năng lượng tích trữ trong tụ điện',
            content:
              'Trong mạch điện tử, các tụ điện thường được ghép với nhau theo hai cách cơ bản: Ghép song song: Hai đầu của tất cả các tụ nối chung vào hai điểm. Điện dung tương đương C_ss = C₁ + C₂ + ... + C_n; Hiệu điện thế bằng nhau U = U₁ = U₂; Điện tích tổng Q = Q₁ + Q₂. Ghép nối tiếp: Các tụ nối đuôi nhau thành một chuỗi. Điện dung tương đương nghịch đảo: 1/C_nt = 1/C₁ + 1/C₂ + ...; Điện tích trên các tụ bằng nhau Q = Q₁ = Q₂; Hiệu điện thế tổng U = U₁ + U₂. Khi tụ điện tích điện, công của nguồn điện được chuyển hóa thành năng lượng điện trường dự trữ trong khoảng không gian giữa hai bản tụ: W = 1/2 C·U² = 1/2 Q·U = Q² / (2C). Mật độ năng lượng điện trường trong không gian có cường độ E là w = 1/2 ε·ε₀·E² (J/m³).',
            keyPoints: [
              'Ghép song song để tăng điện dung của bộ tụ (C_ss luôn lớn hơn từng tụ thành phần).',
              'Ghép nối tiếp để tăng khả năng chịu hiệu điện thế của bộ tụ (C_nt luôn nhỏ hơn từng tụ thành phần).',
              'Năng lượng phóng ra từ tụ điện có thể tạo ra dòng điện có cường độ cực lớn trong thời gian cực ngắn.',
            ],
            realWorldApplication:
              'Đèn flash máy ảnh chụp hình sử dụng tụ điện tích năng lượng từ pin đến điện áp khoảng 300 V rồi phóng toàn bộ năng lượng qua bóng đèn xenon chỉ trong một phần nghìn giây.',
          },
        ],
        quantities: [
          {
            name: 'Điện dung của tụ điện',
            symbol: 'C',
            si_unit: 'F (Fara)',
            other_units: 'µF (10⁻⁶ F), nF (10⁻⁹ F), pF (10⁻¹² F)',
            measuring_device: 'Đồng hồ đo LCR chuyên dụng',
            description: 'Đại lượng đo khả năng tích trữ điện tích của tụ điện trên một đơn vị hiệu điện thế.',
          },
          {
            name: 'Năng lượng điện trường tích trữ',
            symbol: 'W',
            si_unit: 'J',
            other_units: 'mJ, µJ',
            measuring_device: 'Tính toán từ C và U hoặc qua nhiệt lượng kế',
            description: 'Năng lượng nằm trong điện trường giữa hai bản tụ (W = 1/2 CU²).',
          },
        ],
        formulas: [
          {
            name: 'Điện dung, Ghép tụ và Năng lượng tụ điện',
            latex_expression: 'C = \\frac{Q}{U}; \\quad C_{\\text{ss}} = C_1 + C_2; \\quad \\frac{1}{C_{\\text{nt}}} = \\frac{1}{C_1} + \\frac{1}{C_2}; \\quad W = \\frac{1}{2} C U^2',
            plain_expression: 'C = Q / U; C_ss = C1 + C2; 1/C_nt = 1/C1 + 1/C2; W = 0.5 * C * U^2',
            variables: [
              { symbol: 'C', name: 'Điện dung', unit: 'F' },
              { symbol: 'Q', name: 'Điện tích tích trên tụ', unit: 'C' },
              { symbol: 'U', name: 'Hiệu điện thế giữa hai bản', unit: 'V' },
              { symbol: 'W', name: 'Năng lượng điện trường', unit: 'J' },
            ],
            derived_formulas: [
              { expression: 'C = \\frac{\\varepsilon S}{4\\pi k d}', description: 'Điện dung của tụ điện phẳng' },
              { expression: 'W = \\frac{Q^2}{2C} = \\frac{1}{2}QU', description: 'Các dạng biểu diễn tương đương của năng lượng điện trường' },
            ],
            usage_note: 'Phải đổi đơn vị điện dung sang Fara trước khi tính năng lượng ra Joules.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính điện dung tương đương của bộ tụ và năng lượng tích trữ',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Cho hai tụ điện C₁ = 2 µF và C₂ = 3 µF. a) Tính điện dung tương đương của bộ tụ khi hai tụ này mắc song song và mắc nối tiếp. b) Mắc bộ tụ song song vào nguồn điện có hiệu điện thế không đổi U = 12 V. Tính điện tích và năng lượng điện trường tích trữ của mỗi tụ và của cả bộ tụ.',
            given_summary: 'C₁ = 2 µF = 2 × 10⁻⁶ F; C₂ = 3 µF = 3 × 10⁻⁶ F; U = 12 V.',
            solution_steps: [
              'Bước 1: Khi mắc song song: C_ss = C₁ + C₂ = 2 µF + 3 µF = 5 µF.',
              'Bước 2: Khi mắc nối tiếp: 1 / C_nt = 1 / C₁ + 1 / C₂ = 1/2 + 1/3 = 5/6 => C_nt = 6/5 = 1,2 µF.',
              'Bước 3: Khi mắc song song vào nguồn U = 12 V: U₁ = U₂ = U = 12 V.',
              'Bước 4: Điện tích trên mỗi tụ: Q₁ = C₁ · U₁ = (2 × 10⁻⁶) · 12 = 24 × 10⁻⁶ C = 24 µC; Q₂ = C₂ · U₂ = (3 × 10⁻⁶) · 12 = 36 × 10⁻⁶ C = 36 µC. Điện tích cả bộ Q = Q₁ + Q₂ = 60 µC.',
              'Bước 5: Năng lượng điện trường của mỗi tụ: W₁ = 1/2 C₁ U₁² = 0,5 · (2 × 10⁻⁶) · 12² = 144 × 10⁻⁶ J = 144 µJ; W₂ = 1/2 C₂ U₂² = 0,5 · (3 × 10⁻⁶) · 12² = 216 × 10⁻⁶ J = 216 µJ.',
              'Bước 6: Năng lượng toàn phần của bộ tụ: W = W₁ + W₂ = 144 + 216 = 360 µJ = 0,36 mJ (hoặc tính W = 1/2 C_ss U² = 0,5 · 5 × 10⁻⁶ · 144 = 360 µJ).',
            ],
            final_answer: 'a) C_ss = 5 µF; C_nt = 1,2 µF. b) Q₁ = 24 µC; Q₂ = 36 µC; W₁ = 144 µJ; W₂ = 216 µJ; W_bộ = 360 µJ.',
          },
        ],
        simulation: {
          sim_key: 'g11_capacitor_dielectric_lab',
          title: 'Phòng thí nghiệm Tụ điện Phẳng và Tấm Điện Môi',
          description:
            'Thay đổi diện tích bản tụ S, khoảng cách d và chèn các tấm điện môi (giấy, thủy tinh, gốm) để đo trực tiếp sự biến thiên của điện dung C và năng lượng W.',
          parameters: {
            plate_area_cm2: 100,
            plate_separation_mm: 5,
            dielectric_constant: 1,
            applied_voltage_v: 12,
          },
          guide_steps: [
            'Thay đổi khoảng cách d giữa hai bản tụ và theo dõi giá trị điện dung C hiển thị trên đồng hồ.',
            'Chèn tấm điện môi có hằng số ε = 5 vào giữa hai bản và quan sát điện tích Q tăng vọt.',
            'Ngắt tụ khỏi nguồn pin rồi kéo giãn hai bản để chứng minh hiệu điện thế U tăng theo d.',
          ],
          physics_insight:
            'Năng lượng của tụ điện được tích trữ thực chất trong chính điện trường của chất điện môi nằm giữa hai bản cực.',
        },
      },
    ],
  },

  // =========================================================================
  // CHAPTER 4: DÒNG ĐIỆN, MẠCH ĐIỆN VÀ NGUỒN ĐIỆN
  // =========================================================================
  {
    order_index: 4,
    code: 'G11-CH4',
    title: 'Chương 4: Dòng điện, Mạch điện và Nguồn điện',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Vật lí 11 GDPT 2018 (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều): Bản chất dòng điện không đổi, mô hình hạt mang điện và tốc độ trôi; nguồn điện, suất điện động và điện trở trong; định luật Ohm toàn mạch, hiệu điện thế mạch ngoài; năng lượng, công suất nguồn điện, định lý cực đại công suất và các mạch cảm biến điện trở thực tiễn.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 4: Dòng điện, Mạch điện và Nguồn điện
1. **Dòng điện không đổi và Tốc độ trôi vi mô:**
   - Dòng điện là dòng chuyển dời có hướng của các hạt mang điện. Quy ước chiều dòng điện là chiều chuyển động của các hạt điện tích dương (ngược chiều chuyển động của electron tự do trong kim loại).
   - Cường độ dòng điện: $I = \\frac{\\Delta q}{\\Delta t}$. Với dòng điện không đổi: $I = \\frac{q}{t}$ (A).
   - Mô hình dẫn điện kim loại: $I = n \\cdot |e| \\cdot v \\cdot S$, trong đó $n$ là mật độ electron tự do ($\\text{m}^{-3}$), $e = 1,6 \\times 10^{-19}\\,\\text{C}$, $v$ là tốc độ trôi trung bình ($\\text{m/s}$), $S$ là tiết diện ngang của dây dẫn ($\\text{m}^2$).
   - Mật độ dòng điện: $j = \\frac{I}{S} = n \\cdot |e| \\cdot v$ ($\\text{A/m}^2$).

2. **Nguồn điện, Suất điện động và Định luật Ohm toàn mạch:**
   - Nguồn điện duy trì hiệu điện thế ổn định giữa hai cực nhờ **lực lạ** (lực có bản chất phi tĩnh điện: hóa học, nhiệt điện, quang điện) thực hiện công tách và dịch chuyển điện tích dương từ cực âm về cực dương bên trong nguồn.
   - Suất điện động của nguồn điện: $\\mathcal{E} = \\frac{A_{\\text{lạ}}}{q}$ (Vôn, V).
   - Điện trở trong của nguồn điện là $r$ ($\\Omega$).
   - Định luật Ohm cho toàn mạch kín:
     $$I = \\frac{\\mathcal{E}}{R_N + r},$$
     trong đó $R_N$ là tổng điện trở tương đương của mạch ngoài.
   - Hiệu điện thế mạch ngoài (đo giữa hai cực nguồn): $U_N = \\mathcal{E} - I \\cdot r = I \\cdot R_N$.
   - Hiện tượng đoản mạch (ngắn mạch): Khi $R_N \\to 0$, dòng điện đạt giá trị cực đại $I_{\\text{đm}} = \\frac{\\mathcal{E}}{r}$, có thể làm cháy nguồn và nguy hiểm hỏa hoạn.

3. **Năng lượng, Công suất nguồn điện và Mạch cảm biến:**
   - Công và công suất của nguồn điện: $A_{\\text{ng}} = \\mathcal{E} \\cdot I \\cdot t$; $\\mathcal{P}_{\\text{ng}} = \\mathcal{E} \\cdot I$ (W).
   - Công suất tiêu thụ của mạch ngoài: $\\mathcal{P}_N = U_N \\cdot I = I^2 R_N = \\frac{\\mathcal{E}^2 R_N}{(R_N + r)^2}$.
   - Định lý cực đại công suất: Công suất tiêu thụ mạch ngoài đạt giá trị cực đại khi $R_N = r$:
     $$\\mathcal{P}_{N,\\max} = \\frac{\\mathcal{E}^2}{4r}.$$
   - Hiệu suất của nguồn điện: $H = \\frac{\\mathcal{P}_N}{\\mathcal{P}_{\\text{ng}}} = \\frac{U_N}{\\mathcal{E}} = \\frac{R_N}{R_N + r} \\times 100\\%$.
   - Mạch phân áp (Voltage Divider) và cảm biến:
     - Quang điện trở (LDR): Khi có ánh sáng chiếu vào, điện trở $R$ giảm mạnh $\\rightarrow$ Thay đổi điện áp ngõ ra để đóng/ngắt đèn chiếu sáng tự động.
     - Nhiệt điện trở (Thermistor NTC/PTC): Điện trở biến thiên theo nhiệt độ $\\rightarrow$ Ứng dụng đo nhiệt độ, rơ-le ngắt quá nhiệt trong ấm siêu tốc và tủ lạnh.`,
    key_takeaways: [
      'Công thức tốc độ trôi electron: I = n·|e|·v·S; giải thích tốc độ trôi rất nhỏ (vài mm/s) nhưng đèn sáng tức thì do sóng điện từ lan truyền với tốc độ ánh sáng.',
      'Suất điện động của nguồn: E = A_lạ / q; đặc trưng cho khả năng thực hiện công của lực lạ bên trong nguồn điện.',
      'Định luật Ohm cho toàn mạch: I = E / (R_N + r); Hiệu điện thế hai cực nguồn U_N = E - I·r.',
      'Hiện tượng đoản mạch xảy ra khi R_N = 0, cường độ dòng điện cực đại I = E/r có thể gây cháy nổ.',
      'Công suất mạch ngoài đạt cực đại P_max = E² / (4r) khi điện trở mạch ngoài bằng điện trở trong nguồn (R_N = r).',
      'Mạch phân áp kết hợp điện trở nhiệt (NTC/PTC) và quang trở (LDR) là nền tảng của các cảm biến tự động hóa hiện đại.',
    ],
    formula_cheatsheet: [
      {
        name: 'Mô hình tốc độ trôi và Cường độ dòng điện',
        latex: 'I = \\frac{q}{t} = n |e| v S; \\quad j = \\frac{I}{S} = n |e| v',
        note: 'I (A), n (hạt/m³), e = 1,6 × 10⁻¹⁹ C, v (m/s), S (m²), j (A/m²).',
      },
      {
        name: 'Định luật Ohm cho toàn mạch',
        latex: 'I = \\frac{\\mathcal{E}}{R_N + r}; \\quad U_N = \\mathcal{E} - I r = I R_N',
        note: 'E (V), r (Ω), R_N (Ω), I (A), U_N (V).',
      },
      {
        name: 'Công suất mạch ngoài và Định lý cực đại công suất',
        latex: '\\mathcal{P}_N = I^2 R_N = \\frac{\\mathcal{E}^2 R_N}{(R_N + r)^2}; \\quad \\mathcal{P}_{N,\\max} = \\frac{\\mathcal{E}^2}{4r} \\; (\\text{khi } R_N = r)',
        note: 'Áp dụng bất đẳng thức Cauchy cho (R_N + r).',
      },
      {
        name: 'Hiệu suất của nguồn điện',
        latex: 'H = \\frac{\\mathcal{P}_N}{\\mathcal{P}_{\\text{ng}}} = \\frac{U_N}{\\mathcal{E}} = \\frac{R_N}{R_N + r} \\times 100\\%',
        note: 'Hiệu suất càng cao khi điện trở trong r càng nhỏ so với R_N.',
      },
    ],
    topics: [
      // TOPIC 4.1
      {
        order_index: 1,
        code: 'G11-CH4-TP1',
        title: 'Chủ đề 4.1: Dòng điện không đổi và tốc độ trôi của hạt mang điện',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khám phá định nghĩa dòng điện không đổi, bản chất dòng electron tự do trong kim loại và thiết lập mô hình vi mô về hạt dẫn. Khảo sát công thức tính tốc độ trôi của electron v = I / (n·|e|·S) và làm rõ nghịch lý: tại sao tốc độ trôi rất nhỏ (cỡ mm/s) nhưng dòng điện lại xuất hiện gần như tức thời khi bật công tắc.',
        summary_note:
          'Tốc độ trôi v của electron trong kim loại rất chậm (vài mm/s), nhưng tín hiệu điện trường lan truyền với tốc độ ánh sáng c ≈ 300.000 km/s nên bóng đèn sáng ngay lập tức.',
        theory_sections: [
          {
            heading: '1. Dòng điện không đổi và Cường độ dòng điện',
            content:
              'Dòng điện là dòng các điện tích dịch chuyển có hướng. Dòng điện không đổi là dòng điện có chiều và cường độ không thay đổi theo thời gian. Cường độ dòng điện không đổi được xác định bằng thương số giữa điện lượng q dịch chuyển qua tiết diện thẳng của vật dẫn trong khoảng thời gian t và khoảng thời gian đó: I = q / t. Đơn vị cơ bản của cường độ dòng điện trong hệ SI là Ampe (A), được định nghĩa chính thức thông qua điện tích nguyên tố e = 1,602 176 634 × 10⁻¹⁹ C. Chiều quy ước của dòng điện là chiều chuyển dịch của các hạt mang điện tích dương, ngược với chiều chuyển dịch có hướng của các electron tự do trong dây kim loại.',
            keyPoints: [
              '1 Ampe tương ứng với điện lượng 1 Coulomb dịch chuyển qua tiết diện dây dẫn trong 1 giây (1 A = 1 C/s).',
              'Tác dụng của dòng điện: tác dụng nhiệt, tác dụng phát sáng, tác dụng từ, tác dụng hóa học và tác dụng sinh lý.',
              'Ampe kế có điện trở rất nhỏ, mắc nối tiếp vào đoạn mạch cần đo cường độ dòng điện.',
            ],
            realWorldApplication:
              'Bộ sạc nhanh điện thoại thông minh cung cấp dòng điện không đổi từ 2 A đến 5 A ở giai đoạn đầu để nạp năng lượng nhanh cho pin lithium-ion.',
          },
          {
            heading: '2. Bản chất dòng điện trong kim loại và Tốc độ trôi',
            content:
              'Trong kim loại, các nguyên tử bị mất electron hóa trị trở thành các ion dương nằm ở các nút mạng tinh thể dao động nhiệt xung quanh vị trí cân bằng. Các electron hóa trị bứt ra tạo thành khí electron tự do chuyển động nhiệt hỗn loạn không ngừng. Khi không có điện trường ngoài, chuyển động nhiệt hỗn loạn không tạo ra dòng điện vì số electron chuyển động qua một tiết diện theo hai chiều ngược nhau là như nhau. Khi đặt một hiệu điện thế vào hai đầu dây kim loại, một điện trường được thiết lập trong dây. Dưới tác dụng của lực điện F = -eE, các electron tự do vừa chuyển động nhiệt hỗn loạn, vừa chuyển động có hướng ngược chiều điện trường với một tốc độ trôi trung bình v. Cường độ dòng điện qua dây dẫn tiết diện S có mật độ electron n là: I = n·|e|·v·S. Tốc độ trôi trung bình rất nhỏ, thường chỉ khoảng từ 0,1 mm/s đến vài mm/s.',
            keyPoints: [
              'Tốc độ trôi v = I / (n·|e|·S) tỉ lệ thuận với cường độ dòng điện I và tỉ lệ nghịch với tiết diện dây S.',
              'Mật độ hạt dẫn n trong kim loại rất lớn (cỡ 10²⁸ đến 10²⁹ m⁻³), do đó dù v rất bé vẫn tạo ra dòng điện lớn.',
              'Khi đóng công tắc, điện trường lan truyền dọc theo dây dẫn với tốc độ ánh sáng c ≈ 3 × 10⁸ m/s, khiến tất cả các electron trong toàn bộ mạch đồng loạt trôi ngay lập tức.',
            ],
            realWorldApplication:
              'Đường dây siêu dẫn trong máy chụp cộng hưởng từ hạt nhân (MRI) duy trì dòng điện vĩnh cửu không suy giảm vì các cặp electron Cooper chuyển động không bị cản trở bởi dao động nhiệt của nút mạng.',
          },
        ],
        quantities: [
          {
            name: 'Cường độ dòng điện',
            symbol: 'I',
            si_unit: 'A (Ampe)',
            other_units: 'mA (10⁻³ A), µA (10⁻⁶ A), kA (10³ A)',
            measuring_device: 'Ampe kế kim, Ampe kìm cảm ứng dòng, đồng hồ DMM',
            description: 'Đại lượng đo lượng điện tích chạy qua tiết diện dây trong một đơn vị thời gian (I = q/t).',
          },
          {
            name: 'Tốc độ trôi của electron',
            symbol: 'v',
            si_unit: 'm/s',
            other_units: 'mm/s, cm/s',
            measuring_device: 'Tính toán gián tiếp từ mô hình vi mô và dòng I',
            description: 'Vận tốc chuyển dịch có hướng trung bình của các electron tự do dưới tác dụng của điện trường.',
          },
          {
            name: 'Mật độ hạt dẫn tự do',
            symbol: 'n',
            si_unit: 'm⁻³',
            other_units: 'cm⁻³',
            measuring_device: 'Đo lường qua hiệu ứng Hall (Hall Effect)',
            description: 'Số lượng hạt mang điện tự do có trong một đơn vị thể tích của vật liệu dẫn.',
          },
        ],
        formulas: [
          {
            name: 'Cường độ dòng điện và Công thức tốc độ trôi hạt dẫn',
            latex_expression: 'I = \\frac{q}{t} = n |e| v S \\quad \\Longleftrightarrow \\quad v = \\frac{I}{n |e| S}',
            plain_expression: 'I = q / t = n * |e| * v * S <=> v = I / (n * |e| * S)',
            variables: [
              { symbol: 'I', name: 'Cường độ dòng điện', unit: 'A' },
              { symbol: 'n', name: 'Mật độ hạt electron tự do', unit: 'm⁻³' },
              { symbol: 'e', name: 'Điện tích nguyên tố', unit: '1,6 × 10⁻¹⁹ C' },
              { symbol: 'v', name: 'Tốc độ trôi trung bình', unit: 'm/s' },
              { symbol: 'S', name: 'Tiết diện dây dẫn', unit: 'm²' },
            ],
            derived_formulas: [
              { expression: 'j = \\frac{I}{S} = n |e| v', description: 'Mật độ dòng điện trên một đơn vị diện tích (A/m²)' },
              { expression: 'q = I \\cdot t = N_e \\cdot |e|', description: 'Số lượng electron Ne đi qua tiết diện trong thời gian t' },
            ],
            usage_note: 'Tiết diện dây dẫn S phải tính bằng m² (1 mm² = 10⁻⁶ m²).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính tốc độ trôi của electron trong dây đồng',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một dây dẫn bằng đồng có tiết diện tròn đường kính d = 1,6 mm mang dòng điện không đổi I = 5 A. Biết mật độ electron tự do trong đồng là n = 8,5 × 10²⁸ m⁻³ và điện tích nguyên tố |e| = 1,6 × 10⁻¹⁹ C. a) Tính mật độ dòng điện trong dây đồng. b) Tính tốc độ trôi trung bình của các electron tự do trong dây dẫn.',
            given_summary: 'd = 1,6 mm = 1,6 × 10⁻³ m => bán kính r = 0,8 × 10⁻³ m; I = 5 A; n = 8,5 × 10²⁸ m⁻³; |e| = 1,6 × 10⁻¹⁹ C.',
            solution_steps: [
              'Bước 1: Tính tiết diện ngang của dây đồng: S = π r² = π · (0,8 × 10⁻³)² ≈ 3,1416 · 0,64 × 10⁻⁶ ≈ 2,01 × 10⁻⁶ m² (≈ 2,01 mm²).',
              'Bước 2: Mật độ dòng điện trong dây: j = I / S = 5 / (2,01 × 10⁻⁶) ≈ 2,49 × 10⁶ A/m² ≈ 2,49 A/mm².',
              'Bước 3: Áp dụng công thức tốc độ trôi: v = I / (n · |e| · S) = j / (n · |e|).',
              'Bước 4: Thay số: v = (2,49 × 10⁶) / (8,5 × 10²⁸ · 1,6 × 10⁻¹⁹) = (2,49 × 10⁶) / (13,6 × 10⁹) = (2,49 / 13,6) × 10⁻³ ≈ 0,183 × 10⁻³ m/s = 0,183 mm/s.',
              'Bước 5: Nhận xét: Tốc độ trôi v ≈ 0,183 mm/s là rất chậm (mỗi giây electron chỉ dịch chuyển chưa đầy 0,2 mm). Điều này minh chứng rõ nét sự đối lập giữa tốc độ trôi vi mô cực kì chậm chạp của hạt electron và tốc độ lan truyền vĩ mô cực nhanh của điện trường.',
            ],
            final_answer: 'a) j ≈ 2,49 × 10⁶ A/m² (2,49 A/mm²). b) v ≈ 0,183 mm/s.',
          },
        ],
        simulation: {
          sim_key: 'g11_drift_velocity_lab',
          title: 'Mô phỏng Chuyển động Nhiệt và Tốc độ Trôi Electron',
          description:
            'Quan sát vi mô các hạt electron chuyển động hỗn loạn va chạm với các ion mạng tinh thể và trôi dần có hướng dưới tác dụng của điện trường E.',
          parameters: {
            current_ampere: 5,
            wire_gauge_mm2: 2,
            temperature_kelvin: 300,
          },
          guide_steps: [
            'Bật điện trường E = 0 để quan sát chuyển động nhiệt thuần túy hỗn loạn của các electron.',
            'Tăng điện áp để tạo điện trường E > 0 và quan sát sự dịch chuyển trôi dần ngược chiều vector E.',
            'Tăng dòng điện I để thấy tốc độ trôi v tăng tương ứng trên thanh đo tốc độ vi mô.',
          ],
          physics_insight:
            'Nhiệt độ càng cao thì các ion mạng tinh thể dao động nhiệt càng mạnh, làm tăng số lần va chạm của electron và làm tăng điện trở suất của kim loại.',
        },
      },

      // TOPIC 4.2
      {
        order_index: 2,
        code: 'G11-CH4-TP2',
        title: 'Chủ đề 4.2: Nguồn điện, suất điện động và định luật Ohm toàn mạch',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khám phá cơ chế lực lạ bên trong nguồn điện, định nghĩa suất điện động E và điện trở trong r. Thiết lập Định luật Ohm toàn mạch kín I = E / (R_N + r), khảo sát đặc tuyến V - I của nguồn điện, hiệu điện thế mạch ngoài U = E - Ir và hiện tượng đoản mạch nguy hiểm.',
        summary_note:
          'Định luật Ohm toàn mạch: I = E / (R_N + r). Hiệu điện thế hai cực nguồn U_N = E - Ir. Khi hở mạch (I = 0) thì U_N = E; khi đoản mạch (R_N = 0) thì I_max = E/r.',
        theory_sections: [
          {
            heading: '1. Nguồn điện và Suất điện động',
            content:
              'Để duy trì dòng điện trong mạch kín, cần có một thiết bị duy trì hiệu điện thế ổn định giữa hai đầu mạch gọi là nguồn điện. Bên trong nguồn điện, các lực tĩnh điện luôn có xu hướng kéo các hạt điện tích dương về cực âm và electron về cực dương làm triệt tiêu hiệu điện thế. Do đó, cần có các lực có bản chất khác lực tĩnh điện gọi là lực lạ (như phản ứng hóa học trong pin, acquy) thực hiện công tách các điện tích và dịch chuyển điện tích dương từ cực âm về cực dương ngược chiều điện trường. Suất điện động E của nguồn điện là đại lượng đặc trưng cho khả năng thực hiện công của nguồn điện và được đo bằng thương số giữa công A_lạ của lực lạ thực hiện khi dịch chuyển một điện tích dương q ngược chiều điện trường bên trong nguồn và độ lớn của điện tích q đó: E = A_lạ / q. Đơn vị của suất điện động là Vôn (V). Nguồn điện cũng có điện trở của các chất cấu tạo nên nó gọi là điện trở trong r (Ω).',
            keyPoints: [
              'Lực lạ bên trong nguồn dịch chuyển điện tích ngược chiều lực tĩnh điện, duy trì sự chênh lệch điện thế.',
              'Suất điện động E bằng hiệu điện thế giữa hai cực của nguồn điện khi mạch ngoài để hở (I = 0).',
              'Pin và acquy hóa học là nguồn điện biến đổi hóa năng thành điện năng; pin Mặt Trời biến đổi quang năng thành điện năng.',
            ],
            realWorldApplication:
              'Acquy xe máy có suất điện động 12 V và điện trở trong rất nhỏ (cỡ 0,02 Ω) cho phép cung cấp dòng điện khởi động (đề xe) lên tới 50 - 100 A trong vài giây.',
          },
          {
            heading: '2. Định luật Ohm cho toàn mạch kín và Hiện tượng đoản mạch',
            content:
              'Xét một mạch điện kín gồm nguồn điện có suất điện động E, điện trở trong r và mạch ngoài có điện trở tương đương R_N. Theo định luật bảo toàn và chuyển hóa năng lượng, công của nguồn điện sinh ra trong thời gian t bằng tổng nhiệt lượng tỏa ra trên mạch ngoài và bên trong nguồn (theo định luật Joule - Lenz): A_ng = Q_toàn mạch <=> E·I·t = I²R_N·t + I²r·t. Rút gọn, ta có Định luật Ohm cho toàn mạch: Cường độ dòng điện chạy trong mạch điện kín tỉ lệ thuận với suất điện động của nguồn điện và tỉ lệ nghịch với điện trở toàn phần của mạch đó: I = E / (R_N + r). Hiệu điện thế giữa hai cực của nguồn điện (hiệu điện thế mạch ngoài) là U_N = I·R_N = E - I·r. Khi điện trở mạch ngoài rất nhỏ (R_N ≈ 0), ví dụ khi hai cực nguồn bị nối tắt trực tiếp bằng dây dẫn đồng, cường độ dòng điện trong mạch tăng vọt lên giá trị rất lớn: I_đm = E / r. Hiện tượng này gọi là hiện tượng đoản mạch (ngắn mạch), làm tỏa nhiệt cực lớn gây cháy nổ và hỏng nguồn điện.',
            keyPoints: [
              'Điện trở toàn phần của mạch là R_tp = R_N + r.',
              'Khi mạch ngoài hở (R_N -> vô cùng, I = 0): U_N = E (vôn kế đo hai cực nguồn hở chỉ đúng giá trị E).',
              'Khi đoản mạch (R_N = 0): I = E / r (cực đại). Để chống đoản mạch, người ta luôn lắp cầu chì hoặc aptomat (CB) ngắt mạch tự động.',
            ],
            realWorldApplication:
              'Aptomat chống đoản mạch tự động ngắt điện khi dòng điện trong gia đình vượt ngưỡng an toàn do chập dây, bảo vệ tính mạng con người và ngăn ngừa hỏa hoạn nhà xưởng.',
          },
        ],
        quantities: [
          {
            name: 'Suất điện động của nguồn',
            symbol: 'E (hoặc ℰ)',
            si_unit: 'V (Vôn)',
            other_units: 'mV, kV',
            measuring_device: 'Vôn kế điện tử đo hai cực khi hở mạch',
            description: 'Công của lực lạ thực hiện dịch chuyển một đơn vị điện tích dương bên trong nguồn (E = A_lạ/q).',
          },
          {
            name: 'Điện trở trong của nguồn',
            symbol: 'r',
            si_unit: 'Ω (Ohm)',
            other_units: 'mΩ',
            measuring_device: 'Đo qua phương pháp vôn-ampe kế phối hợp biến trở',
            description: 'Điện trở cản trở dòng điện của chính các bộ phận bên trong nguồn điện.',
          },
          {
            name: 'Hiệu điện thế mạch ngoài',
            symbol: 'U_N',
            si_unit: 'V',
            other_units: 'mV',
            measuring_device: 'Vôn kế mắc song song với mạch ngoài',
            description: 'Hiệu điện thế đo giữa hai cực dương và âm của nguồn điện khi có tải (U_N = E - Ir).',
          },
        ],
        formulas: [
          {
            name: 'Định luật Ohm cho toàn mạch kín và Hiệu điện thế mạch ngoài',
            latex_expression: 'I = \\frac{\\mathcal{E}}{R_N + r}; \\quad U_N = \\mathcal{E} - I r = I R_N',
            plain_expression: 'I = E / (R_N + r); U_N = E - I * r = I * R_N',
            variables: [
              { symbol: 'E', name: 'Suất điện động của nguồn', unit: 'V' },
              { symbol: 'r', name: 'Điện trở trong của nguồn', unit: 'Ω' },
              { symbol: 'R_N', name: 'Điện trở tương đương của mạch ngoài', unit: 'Ω' },
              { symbol: 'I', name: 'Cường độ dòng điện trong mạch chính', unit: 'A' },
              { symbol: 'U_N', name: 'Hiệu điện thế mạch ngoài', unit: 'V' },
            ],
            derived_formulas: [
              { expression: 'r = \\frac{\\mathcal{E} - U_N}{I}', description: 'Xác định điện trở trong r từ số đo E, U_N và I' },
              { expression: 'I_{\\text{đm}} = \\frac{\\mathcal{E}}{r}', description: 'Dòng điện cực đại khi xảy ra hiện tượng đoản mạch (R_N = 0)' },
            ],
            usage_note: 'Khi mạch ngoài gồm nhiều điện trở ghép, cần tính R_N tương đương trước khi áp dụng định luật Ohm toàn mạch.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính dòng điện toàn mạch, hiệu điện thế mạch ngoài và khảo sát đoản mạch',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một nguồn điện có suất điện động E = 12 V và điện trở trong r = 1 Ω được mắc với mạch ngoài gồm hai điện trở R₁ = 5 Ω và R₂ = 10 Ω mắc song song. a) Tính điện trở tương đương của mạch ngoài. b) Tính cường độ dòng điện trong mạch chính và cường độ dòng điện qua mỗi điện trở R₁, R₂. c) Tính hiệu điện thế giữa hai cực của nguồn điện. d) Nếu vô tình nối đoản mạch hai cực của nguồn điện bằng dây dẫn có điện trở không đáng kể thì cường độ dòng điện chạy qua nguồn bằng bao nhiêu?',
            given_summary: 'E = 12 V; r = 1 Ω; R₁ = 5 Ω // R₂ = 10 Ω.',
            solution_steps: [
              'Bước 1: Tính điện trở tương đương mạch ngoài R_N: 1/R_N = 1/R₁ + 1/R₂ = 1/5 + 1/10 = 3/10 => R_N = 10/3 Ω ≈ 3,33 Ω.',
              'Bước 2: Cường độ dòng điện trong mạch chính: I = E / (R_N + r) = 12 / (10/3 + 1) = 12 / (13/3) = 36 / 13 A ≈ 2,77 A.',
              'Bước 3: Hiệu điện thế hai cực nguồn (cũng là hiệu điện thế mạch ngoài): U_N = I · R_N = (36/13) · (10/3) = 120 / 13 V ≈ 9,23 V (hoặc tính U_N = E - Ir = 12 - 2,77 · 1 = 9,23 V).',
              'Bước 4: Cường độ dòng điện qua mỗi nhánh: I₁ = U_N / R₁ = (120/13) / 5 = 24 / 13 A ≈ 1,85 A; I₂ = U_N / R₂ = (120/13) / 10 = 12 / 13 A ≈ 0,92 A (thỏa mãn I₁ + I₂ = I).',
              'Bước 5: Khi nối đoản mạch hai cực nguồn (R_N = 0): I_đm = E / r = 12 / 1 = 12 A. Dòng điện tăng gấp hơn 4 lần dòng hoạt động bình thường, sẽ nhanh chóng làm nóng hỏng nguồn điện.',
            ],
            final_answer: 'a) R_N ≈ 3,33 Ω. b) I ≈ 2,77 A; I₁ ≈ 1,85 A; I₂ ≈ 0,92 A. c) U_N ≈ 9,23 V. d) I_đm = 12 A.',
          },
        ],
        simulation: {
          sim_key: 'g11_circuit_emf_resistor_lab',
          title: 'Phòng thí nghiệm Mạch Toàn Phần và Đặc Tuyến Nguồn',
          description:
            'Lắp ráp mạch kín gồm nguồn điện (E, r) và biến trở R_N; theo dõi đồng hồ đo I và U_N, dựng đồ thị đặc tuyến vôn - ampe U(I) và kiểm chứng định luật Ohm.',
          parameters: {
            emf_volt: 12,
            internal_r_ohm: 1,
            load_resistance_ohm: 5,
          },
          guide_steps: [
            'Thay đổi giá trị biến trở tải R_N từ 0 Ω đến 50 Ω và quan sát chỉ số Ampe kế và Vôn kế.',
            'Kéo R_N về 0 Ω để chứng kiến cảnh báo dòng đoản mạch cực đại I = E/r.',
            'Quan sát đồ thị đường thẳng U = E - Ir cắt trục tung tại điểm E và cắt trục hoành tại I_đm.',
          ],
          physics_insight:
            'Độ dốc của đường đặc tuyến U theo I biểu diễn độ lớn điện trở trong r của nguồn điện; nguồn càng tốt thì r càng nhỏ và U ít bị sụt giảm khi có tải.',
        },
      },

      // TOPIC 4.3
      {
        order_index: 3,
        code: 'G11-CH4-TP3',
        title: 'Chủ đề 4.3: Năng lượng, công suất nguồn điện và mạch cảm biến',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khảo sát năng lượng và công suất toàn phần của nguồn điện, công suất tiêu thụ mạch ngoài và hiệu suất nguồn. Chứng minh định lý cực đại công suất mạch ngoài khi R_N = r. Tìm hiểu nguyên lý mạch cầu phân áp và ứng dụng các linh kiện cảm biến điện trở (quang trở LDR, nhiệt trở NTC/PTC) trong mạch điều khiển tự động.',
        summary_note:
          'Công suất mạch ngoài P_N = I²·R_N đạt cực đại P_max = E² / (4r) khi R_N = r (phối hợp trở kháng). Hiệu suất nguồn: H = U_N / E = R_N / (R_N + r).',
        theory_sections: [
          {
            heading: '1. Năng lượng, Công suất nguồn điện và Hiệu suất',
            content:
              'Trong mạch điện kín, nguồn điện chuyển hóa các dạng năng lượng khác (hóa năng, cơ năng, quang năng) thành điện năng. Công toàn phần của nguồn điện sinh ra trong thời gian t là: A_ng = E·q = E·I·t. Công suất toàn phần của nguồn điện là: P_ng = A_ng / t = E·I. Mạch ngoài tiêu thụ điện năng với công suất: P_N = U_N·I = I²·R_N. Công suất hao phí tỏa nhiệt bên trong nguồn là: P_r = I²·r. Theo định luật bảo toàn năng lượng: P_ng = P_N + P_r. Hiệu suất của nguồn điện được định nghĩa bằng tỉ số giữa công suất có ích mạch ngoài và công suất toàn phần: H = P_N / P_ng = (U_N·I) / (E·I) = U_N / E = R_N / (R_N + r). Hiệu suất nguồn càng cao khi điện trở trong r càng nhỏ so với điện trở tải R_N.',
            keyPoints: [
              'Công suất toàn phần nguồn: P_ng = E·I; Công suất tiêu thụ mạch ngoài: P_N = I²R_N = U_N·I.',
              'Hiệu suất nguồn: H = U_N / E = R_N / (R_N + r) (luôn nhỏ hơn 100% vì r > 0).',
              'Khi mạch ngoài ngắn mạch (R_N = 0), hiệu suất H = 0, toàn bộ công suất nguồn bị biến thành nhiệt phá hủy nguồn.',
            ],
            realWorldApplication:
              'Trong xe điện Tesla và hệ thống lưu trữ pin mặt trời gia đình, việc tối ưu hóa nội trở r của các cell pin lithium giúp nâng hiệu suất nạp xả lên trên 95% và hạn chế sinh nhiệt.',
          },
          {
            heading: '2. Định lý cực đại công suất và Mạch cảm biến điện trở',
            content:
              'Công suất tiêu thụ mạch ngoài là hàm theo điện trở R_N: P_N = I²·R_N = [E / (R_N + r)]² · R_N = E² / [√R_N + r/√R_N]². Áp dụng bất đẳng thức Cauchy cho mẫu số: (√R_N + r/√R_N)² ≥ 4r, dấu đẳng thức xảy ra khi và chỉ khi √R_N = r/√R_N <=> R_N = r. Khi đó, công suất tiêu thụ mạch ngoài đạt giá trị cực đại: P_N,max = E² / (4r). Hiện tượng này gọi là phối hợp trở kháng (Impedance Matching). Khi đạt công suất cực đại, hiệu suất nguồn điện đúng bằng H = r / (r + r) = 50%. Trong kỹ thuật điều khiển tự động, người ta thường ứng dụng mạch phân áp kết hợp các cảm biến điện trở: 1. Quang điện trở (LDR): điện trở giảm mạnh từ hàng MΩ trong bóng tối xuống còn vài trăm Ω khi được chiếu sáng; 2. Nhiệt điện trở (Thermistor NTC): điện trở giảm khi nhiệt độ tăng. Khi đại lượng môi trường (nhiệt độ, ánh sáng) thay đổi, điện trở cảm biến biến thiên làm thay đổi điện áp phân áp U_out cung cấp tín hiệu điều khiển cho vi điều khiển hoặc rơ-le.',
            keyPoints: [
              'Công suất mạch ngoài cực đại khi R_N = r, đạt P_max = E² / (4r); lúc này hiệu suất H = 50%.',
              'Nếu R_N < r, tăng R_N làm P_N tăng; nếu R_N > r, tăng R_N làm P_N giảm.',
              'Mạch phân áp gồm R₁ nối tiếp R₂: điện áp lấy ra trên R₂ là U_out = U_in · R₂ / (R₁ + R₂).',
            ],
            realWorldApplication:
              'Hệ thống đèn đường thông minh tự động bật khi trời chập tối nhờ cảm biến quang trở LDR kết hợp transistor công tắc mạch phân áp.',
          },
        ],
        quantities: [
          {
            name: 'Công suất tiêu thụ mạch ngoài',
            symbol: 'P_N',
            si_unit: 'W (Watt)',
            other_units: 'mW, kW',
            measuring_device: 'Oát kế điện tử (Wattmeter), đo gián tiếp qua V và A',
            description: 'Tốc độ tiêu thụ điện năng có ích trên tải mạch ngoài (P_N = I²·R_N).',
          },
          {
            name: 'Hiệu suất nguồn điện',
            symbol: 'H',
            si_unit: '% (phần trăm)',
            other_units: 'tỉ số thập phân',
            measuring_device: 'Tính toán từ tỉ số U_N / E',
            description: 'Tỉ số giữa công suất có ích mạch ngoài và công suất toàn phần của nguồn.',
          },
          {
            name: 'Điện trở cảm biến',
            symbol: 'R_s (R_LDR, R_NTC)',
            si_unit: 'Ω',
            other_units: 'kΩ, MΩ',
            measuring_device: 'Ohm kế, cầu đo Wheatstone',
            description: 'Điện trở biến thiên theo tác nhân môi trường (ánh sáng, nhiệt độ).',
          },
        ],
        formulas: [
          {
            name: 'Công suất mạch ngoài, Cực đại công suất và Hiệu suất nguồn',
            latex_expression: '\\mathcal{P}_N = \\frac{\\mathcal{E}^2 R_N}{(R_N + r)^2}; \\quad \\mathcal{P}_{N,\\max} = \\frac{\\mathcal{E}^2}{4r} \\; (\\text{khi } R_N = r); \\quad H = \\frac{R_N}{R_N + r}',
            plain_expression: 'P_N = E^2 * R_N / (R_N + r)^2; P_max = E^2 / (4*r) khi R_N = r; H = R_N / (R_N + r)',
            variables: [
              { symbol: 'E', name: 'Suất điện động của nguồn', unit: 'V' },
              { symbol: 'r', name: 'Điện trở trong của nguồn', unit: 'Ω' },
              { symbol: 'R_N', name: 'Điện trở tải mạch ngoài', unit: 'Ω' },
              { symbol: 'P_N', name: 'Công suất tiêu thụ mạch ngoài', unit: 'W' },
              { symbol: 'H', name: 'Hiệu suất của nguồn', unit: '%' },
            ],
            derived_formulas: [
              { expression: 'U_{\\text{out}} = U_{\\text{in}} \\frac{R_2}{R_1 + R_2}', description: 'Công thức điện áp ra của mạch phân áp' },
            ],
            usage_note: 'Công suất cực đại xảy ra khi R_N = r, lúc này hiệu suất chỉ đạt 50% (50% năng lượng bị hao phí dưới dạng nhiệt trong nguồn).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tìm điện trở để công suất mạch ngoài cực đại và phân tích mạch cảm biến quang trở',
            difficulty: 'Vận dụng cao',
            problem_statement:
              'Một nguồn điện có suất điện động E = 24 V, điện trở trong r = 4 Ω mắc với biến trở R_N thành mạch kín.\na) Điều chỉnh biến trở R_N đến giá trị bằng bao nhiêu để công suất tiêu thụ trên biến trở đạt cực đại? Tính giá trị cực đại đó và hiệu suất của nguồn điện khi đó.\nb) Giả sử biến trở R_N được thay bằng mạch phân áp gồm một điện trở cố định R₁ = 6 kΩ nối tiếp với một quang trở LDR (R_LDR). Bỏ qua điện trở trong nguồn (r ≈ 0). Khi trời sáng, R_LDR = 2 kΩ; khi trời tối, R_LDR = 18 kΩ. Tính điện áp U_out lấy ra trên hai đầu quang trở LDR khi trời sáng và khi trời tối.',
            given_summary: 'a) E = 24 V, r = 4 Ω. b) E = 24 V, R₁ = 6 kΩ; R_LDR(sáng) = 2 kΩ; R_LDR(tối) = 18 kΩ.',
            solution_steps: [
              'Bước 1: Công suất tiêu thụ trên biến trở R_N: P_N = E²·R_N / (R_N + r)². Theo định lý cực đại công suất, P_N đạt cực đại khi R_N = r = 4 Ω.',
              'Bước 2: Giá trị công suất cực đại: P_N,max = E² / (4r) = 24² / (4 · 4) = 576 / 16 = 36 W.',
              'Bước 3: Hiệu suất của nguồn khi công suất cực đại: H = R_N / (R_N + r) = 4 / (4 + 4) = 4/8 = 0,5 = 50%.',
              'Bước 4: Xét mạch phân áp cảm biến quang trở với nguồn U = 24 V: Điện áp lấy ra trên hai đầu LDR là U_out = U · R_LDR / (R₁ + R_LDR).',
              'Bước 5: Khi trời sáng (R_LDR = 2 kΩ): U_out(sáng) = 24 · 2 / (6 + 2) = 48 / 8 = 6 V.',
              'Bước 6: Khi trời tối (R_LDR = 18 kΩ): U_out(tối) = 24 · 18 / (6 + 18) = 432 / 24 = 18 V.',
              'Bước 7: Kết luận: Sự thay đổi điện áp từ 6 V (khi sáng) lên 18 V (khi tối) là một tín hiệu chênh lệch rất lớn (ΔU = 12 V), dễ dàng kích hoạt mạch rơ-le hoặc cổng logic bật đèn chiếu sáng khi trời tối.',
            ],
            final_answer: 'a) R_N = 4 Ω; P_max = 36 W; H = 50%. b) U_out(sáng) = 6 V; U_out(tối) = 18 V.',
          },
        ],
        simulation: {
          sim_key: 'g11_sensor_power_transfer_lab',
          title: 'Mô phỏng Phối hợp Trở kháng và Mạch Cảm biến Thông minh',
          description:
            'Khảo sát đồ thị công suất mạch ngoài P theo tải R_N, xác minh đỉnh cực đại tại R_N = r và tương tác với mạch phân áp quang trở LDR.',
          parameters: {
            emf_volt: 24,
            internal_r_ohm: 4,
            ambient_light_lux: 500,
          },
          guide_steps: [
            'Kéo thanh trượt điện trở tải R_N từ 1 Ω đến 20 Ω để quan sát điểm cực trị của công suất tại đúng R_N = 4 Ω.',
            'Theo dõi thanh hiệu suất H tăng đơn điệu từ 0% lên gần 100% khi R_N tăng.',
            'Kéo thanh trượt cường độ sáng môi trường để thấy điện trở quang trở LDR thay đổi và kích hoạt đèn bật sáng khi trời tối.',
          ],
          physics_insight:
            'Trong truyền thanh và truyền dữ liệu, phối hợp trở kháng giữa loa/anten và nguồn phát là điều kiện tiên quyết để chuyển giao công suất cực đại mà không bị phản xạ tín hiệu.',
        },
      },
    ],
  },
];
