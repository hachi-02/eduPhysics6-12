import { SeedChapterData } from './grade6-curriculum';

export const GRADE_9_CHAPTERS: SeedChapterData[] = [
  {
    order_index: 1,
    code: 'G9-CH1',
    title: 'Chương 1: Năng lượng cơ học (Công & Công suất)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Khoa học tự nhiên 9: Công cơ học A = F·s, điều kiện sinh công, công suất P = A/t đặc trưng cho tốc độ sinh công, động năng Wđ = ½mv², thế năng trọng trường Wt = mgh và định luật bảo toàn cơ năng trong trọng trường.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 1: Năng lượng cơ học (Công & Công suất)
1. **Công cơ học ($A$):**
   - Chỉ có công cơ học khi có **lực tác dụng vào vật** và làm vật **chuyển dời** theo phương không vuông góc với phương của lực.
   - **Công thức tính công:** $A = F \\cdot s$ (khi lực $\\vec{F}$ cùng hướng chuyển dời).
   - Nếu lực hợp với hướng chuyển dời góc $\\alpha$: $A = F \\cdot s \\cdot \\cos\\alpha$.
     - $\\alpha = 0^\\circ$: $A = F \\cdot s > 0$ (Công phát động cực đại).
     - $0^\\circ \\le \\alpha < 90^\\circ$: $A > 0$ (Công phát động).
     - $\\alpha = 90^\\circ$: $A = 0$ (Lực vuông góc với hướng chuyển dời thì **không sinh công**; ví dụ trọng lực và phản lực khi vật trượt ngang).
     - $90^\\circ < \\alpha \\le 180^\\circ$: $A < 0$ (Công cản; ví dụ lực ma sát trượt).
   - **Đơn vị:** Joule ($\\text{J}$), $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m}$; $1\\,\\text{kJ} = 1000\\,\\text{J}$.
2. **Công suất ($\\mathcal{P}$):**
   - **Công suất** là đại lượng đặc trưng cho **tốc độ sinh công** (mức độ nhanh hay chậm của việc thực hiện công), được xác định bằng công sinh ra trong một đơn vị thời gian.
   - **Công thức:** $\\mathcal{P} = \\frac{A}{t} = F \\cdot v$ (khi chuyển động thẳng đều với vận tốc $v$).
   - **Đơn vị:** Oát ($\\text{W}$), $1\\,\\text{W} = 1\\,\\text{J/s}$; $1\\,\\text{kW} = 1000\\,\\text{W}$; $1\\,\\text{MW} = 10^6\\,\\text{W}$; Mã lực ($1\\,\\text{HP} \\approx 746\\,\\text{W}$; $1\\,\\text{CV} \\approx 736\\,\\text{W}$).
3. **Động năng, Thế năng và Cơ năng:**
   - **Động năng ($W_đ$):** Năng lượng do vật chuyển động mà có: $W_đ = \\frac{1}{2}m v^2$. Động năng phụ thuộc vào khối lượng $m$ và bình phương vận tốc $v$.
   - **Thế năng trọng trường ($W_t$):** Năng lượng vật có được do tương tác hấp dẫn giữa Trái Đất và vật: $W_t = m g h$ (với $h$ là độ cao so với mốc thế năng chọn trước).
   - **Cơ năng ($W$):** Tổng động năng và thế năng của vật: $W = W_đ + W_t = \\frac{1}{2}m v^2 + m g h$.
   - **Định luật bảo toàn cơ năng:** Khi một vật chuyển động chỉ dưới tác dụng của trọng lực (bỏ qua sức cản không khí và ma sát), cơ năng của vật là một đại lượng bảo toàn:
     $$W = W_đ + W_t = \\text{hằng số} \\quad \\Longleftrightarrow \\quad \\frac{1}{2}m v_1^2 + m g h_1 = \\frac{1}{2}m v_2^2 + m g h_2$$
   - Khi vật rơi: thế năng giảm dần chuyển hóa thành động năng tăng dần. Khi vật ném lên: động năng giảm dần chuyển hóa thành thế năng tăng dần.`,
    key_takeaways: [
      'Điều kiện cần và đủ để có công cơ học: Phải có lực tác dụng và điểm đặt của lực dịch chuyển theo phương không vuông góc với lực.',
      'Công suất P = A / t = F · v đặc trưng cho tốc độ thực hiện công, không phụ thuộc vào độ lớn của tổng công A mà phụ thuộc vào thời gian hoàn thành công đó.',
      'Động năng W_đ = ½mv² tỉ lệ thuận với khối lượng m và tỉ lệ với BÌNH PHƯƠNG vận tốc v² (khi tốc độ tăng gấp đôi thì động năng tăng gấp 4 lần).',
      'Định luật bảo toàn cơ năng: Trong trọng trường không có ma sát, W = W_đ + W_t = const; tại vị trí cao nhất thế năng cực đại, tại vị trí thấp nhất động năng cực đại.',
      'Khi có lực ma sát cản trở, cơ năng không bảo toàn mà một phần chuyển hóa thành nhiệt năng: A_cản = W₂ - W₁ < 0.',
    ],
    formula_cheatsheet: [
      {
        name: 'Công cơ học khi lực cùng hướng chuyển dời',
        latex: 'A = F \\cdot s',
        note: 'A: công (J); F: lực tác dụng (N); s: quãng đường dịch chuyển theo hướng của lực (m).',
      },
      {
        name: 'Công cơ học tổng quát (với góc xiên α)',
        latex: 'A = F \\cdot s \\cdot \\cos\\alpha',
        note: 'α là góc hợp bởi vectơ lực F và vectơ vận tốc v (hướng chuyển dời).',
      },
      {
        name: 'Công suất và tốc độ sinh công',
        latex: '\\mathcal{P} = \\frac{A}{t} = F \\cdot v',
        note: 'P: công suất (W); t: thời gian sinh công (s); v: tốc độ tức thời hoặc tốc độ đều (m/s).',
      },
      {
        name: 'Động năng của vật',
        latex: 'W_đ = \\frac{1}{2} m v^2',
        note: 'm: khối lượng (kg); v: tốc độ của vật (m/s); W_đ: động năng (J).',
      },
      {
        name: 'Thế năng trọng trường',
        latex: 'W_t = m g h',
        note: 'm: khối lượng (kg); g ≈ 9,8 m/s² (hoặc 10 m/s²); h: độ cao so với mốc thế năng (m).',
      },
      {
        name: 'Định luật bảo toàn cơ năng',
        latex: 'W = W_đ + W_t = \\frac{1}{2}m v^2 + m g h = \\text{const}',
        note: 'Áp dụng khi chỉ có trọng lực sinh công, bỏ qua ma sát và lực cản không khí.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G9-CH1-TP1',
        title: 'Chủ đề 1.1: Công cơ học và Điều kiện sinh công',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Nắm vững bản chất của công cơ học, nhận biết chính xác trường hợp nào có lực tác dụng sinh công, trường hợp nào lực không sinh công hoặc sinh công cản, và thành thạo công thức A = F·s.',
        summary_note:
          'Ghi nhớ: Nếu vật không dịch chuyển (s = 0) hoặc lực vuông góc với phương dịch chuyển (α = 90°), công của lực bằng 0 (A = 0). Lực ma sát ngược chiều dịch chuyển sinh công âm (A < 0).',
        theory_sections: [
          {
            heading: '1. Khái niệm công cơ học và Điều kiện có công',
            content:
              'Trong đời sống, từ "công" được dùng rất rộng rãi (lao động chân tay, tư duy trí óc). Tuy nhiên trong Vật lý học, thuật ngữ "công cơ học" (gọi tắt là công) chỉ dùng trong trường hợp có lực tác dụng vào một vật và làm cho vật đó chuyển dời một khoảng. Nếu có lực tác dụng nhưng vật đứng yên (ví dụ: người đẩy bức tường kiên cố, lực kế giữ vật nặng treo yên), thì lực đó hoàn toàn KHÔNG sinh công cơ học.',
            keyPoints: [
              'Hai điều kiện bắt buộc đồng thời để có công cơ học: (1) Phải có lực tác dụng vào vật; (2) Điểm đặt của lực phải dịch chuyển theo phương không vuông góc với lực.',
              'Nếu lực F tác dụng mà quãng đường dịch chuyển s = 0 thì công A = 0.',
              'Nếu lực vuông góc với hướng dịch chuyển (như trọng lực khi vật lăn trên mặt phẳng ngang) thì lực đó không sinh công.',
            ],
            realWorldApplication:
              'Khi người công nhân khuân vác một bao xi măng nặng bước đi đều trên mặt sàn bằng phẳng nằm ngang, lực nâng hướng thẳng đứng vuông góc với hướng chuyển dời nằm ngang nên lực nâng không sinh công cho chuyển động tịnh tiến ngang của bao xi măng.',
          },
          {
            heading: '2. Công thức tính công cơ học và Dấu của công',
            content:
              'Khi lực F tác dụng cùng hướng với phương chuyển dịch của vật trên quãng đường s, công A được tính bằng tích của độ lớn lực F và quãng đường s: A = F · s. Khi lực hợp với phương dịch chuyển một góc α, công được tính theo hệ thức: A = F · s · cosα. Khi 0° ≤ α < 90°, cosα > 0 nên A > 0 gọi là công phát động (giúp vật tăng tốc hoặc duy trì chuyển động). Khi α = 90°, cos90° = 0 nên A = 0. Khi 90° < α ≤ 180°, cosα < 0 nên A < 0 gọi là công cản (làm giảm vận tốc của vật).',
            keyPoints: [
              'Công thức cơ bản: A = F · s (với F tính bằng N, s tính bằng m, A tính bằng J).',
              '1 Joule (J) là công thực hiện khi lực 1 N làm dịch chuyển vật quãng đường 1 m theo hướng của lực.',
              'Công phát động: A > 0 (lực kéo cùng chiều hoặc chếch về phía chuyển động).',
              'Công cản: A < 0 (lực cản, lực ma sát ngược chiều chuyển động).',
            ],
          },
        ],
        quantities: [
          {
            name: 'Công cơ học',
            symbol: 'A',
            si_unit: 'J (Joule)',
            other_units: 'kJ, cal, kcal, kWh',
            measuring_device: 'Tính toán qua cảm biến lực và thước đo',
            description: 'Đại lượng vô hướng đo lượng năng lượng chuyển hóa khi lực làm vật dịch chuyển.',
          },
          {
            name: 'Lực tác dụng',
            symbol: 'F',
            si_unit: 'N (Newton)',
            other_units: 'kN, dyn',
            measuring_device: 'Lực kế (Dynamometer)',
            description: 'Đại lượng vectơ đặc trưng cho tác dụng của vật này lên vật khác gây biến dạng hoặc gia tốc.',
          },
          {
            name: 'Quãng đường chuyển dời',
            symbol: 's',
            si_unit: 'm (mét)',
            other_units: 'km, cm, mm',
            measuring_device: 'Thước cuộn, cổng quang điện và máy đo laser',
            description: 'Độ dài quãng đường điểm đặt của lực dịch chuyển trong thời gian lực tác dụng.',
          },
        ],
        formulas: [
          {
            name: 'Công cơ học',
            latex_expression: 'A = F \\cdot s',
            plain_expression: 'A = F * s',
            variables: [
              { symbol: 'A', name: 'Công cơ học', unit: 'J' },
              { symbol: 'F', name: 'Lực tác dụng', unit: 'N' },
              { symbol: 's', name: 'Quãng đường dịch chuyển', unit: 'm' },
            ],
            derived_formulas: [
              { expression: 'F = \\frac{A}{s}', description: 'Tính lực tác dụng khi biết công và quãng đường' },
              { expression: 's = \\frac{A}{F}', description: 'Tính quãng đường dịch chuyển khi biết công và lực' },
            ],
            usage_note: 'Chỉ áp dụng khi hướng của lực trùng với hướng chuyển dời của vật.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ tính công của lực kéo và công của trọng lực',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một con ngựa kéo một cỗ xe có khối lượng tổng cộng m = 500 kg chuyển động thẳng đều trên đoạn đường nằm ngang dài s = 200 m với lực kéo F = 300 N theo phương ngang. Lấy gia tốc trọng trường g = 9,8 m/s². Tính công của lực kéo của con ngựa và công của trọng lực tác dụng lên cỗ xe trên đoạn đường đó.',
            given_summary: 'm = 500 kg; s = 200 m; F = 300 N (theo phương ngang); g = 9,8 m/s².',
            solution_steps: [
              'Bước 1: Tính công của lực kéo của con ngựa: Do lực kéo F cùng hướng với độ dịch chuyển nằm ngang của xe, ta có: A_kéo = F · s = 300 · 200 = 60 000 J = 60 kJ.',
              'Bước 2: Xét công của trọng lực P: Trọng lực P có phương thẳng đứng hướng xuống, vuông góc với phương dịch chuyển nằm ngang của xe (góc α = 90°).',
              'Do đó trọng lực không thực hiện công trên quãng đường này: A_P = 0 J.',
            ],
            final_answer: 'Công của lực kéo A_kéo = 60 kJ; Công của trọng lực A_P = 0 J.',
          },
        ],
        simulation: {
          sim_key: 'g9_work_force_displacement_lab',
          title: 'Thí nghiệm Đo công cơ học và Điều kiện sinh công',
          description:
            'Kéo khối trượt trên mặt phẳng với các góc kéo và lực kéo tùy chỉnh, phân tích công phát động, công cản của ma sát và kiểm chứng công bằng 0 khi lực vuông góc.',
          parameters: { mass: 10, force: 50, distance: 10, angle: 0, friction_coeff: 0.1 },
          guide_steps: [
            'Thay đổi lực kéo F và quãng đường s để quan sát công phát động A = F·s tính toán theo thời gian thực.',
            'Kéo thanh trượt góc nghiêng α lên 90° để chứng minh công của lực triệt tiêu bằng 0.',
            'Bật hệ số ma sát để quan sát công cản của ma sát làm giảm năng lượng cơ học.',
          ],
          physics_insight:
            'Công cơ học chỉ được sinh ra khi điểm đặt của lực có thành phần dịch chuyển dọc theo phương của lực; lực vuông góc không thể truyền hoặc rút năng lượng từ chuyển động.',
        },
      },
      {
        order_index: 2,
        code: 'G9-CH1-TP2',
        title: 'Chủ đề 1.2: Công suất và Tốc độ sinh công',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu rõ khái niệm công suất là thước đo tốc độ sinh công, nắm vững các đơn vị đo công suất và áp dụng công thức P = A/t cũng như P = F·v để giải các bài toán thực tế về máy móc và động cơ.',
        summary_note:
          'Ghi nhớ: 1 W = 1 J/s; 1 kW = 1000 W; 1 MW = 1 000 000 W; 1 HP ≈ 746 W. Công suất không cho biết máy làm được nhiều công hay ít công, mà cho biết máy sinh công NHANH hay CHẬM trong 1 giây.',
        theory_sections: [
          {
            heading: '1. Khái niệm công suất và Ý nghĩa vật lý',
            content:
              'Để so sánh xem người nào hoặc máy nào làm việc nhanh hơn (khỏe hơn), ta không thể chỉ dựa vào lượng công thực hiện được mà phải biết lượng công đó được thực hiện trong khoảng thời gian bao lâu. Công suất là đại lượng đặc trưng cho tốc độ sinh công của người hoặc thiết bị, được xác định bằng thương số giữa công A thực hiện được và khoảng thời gian t để thực hiện công đó: P = A / t.',
            keyPoints: [
              'Công suất P = A / t cho biết công sinh ra trong 1 đơn vị thời gian (1 giây).',
              'Cùng sinh một công A, máy nào mất ít thời gian t hơn thì công suất P lớn hơn.',
              'Trong cùng một thời gian t, máy nào sinh được công A lớn hơn thì công suất P lớn hơn.',
            ],
            realWorldApplication:
              'Động cơ xe máy 150cc có công suất cực đại khoảng 12 kW (16 mã lực), trong khi đầu máy xe lửa có công suất hàng nghìn kW giúp kéo được đoàn tàu hàng chục toa nặng hàng trăm tấn vượt dốc.',
          },
          {
            heading: '2. Đơn vị công suất và Hệ thức liên hệ P = F · v',
            content:
              'Trong hệ SI, đơn vị của công suất là Oát (Watt, ký hiệu W), đặt theo tên nhà phát minh James Watt: 1 W = 1 J/s. Các bội số thường dùng: kilôoát (1 kW = 1000 W), mêgaoát (1 MW = 1 000 000 W). Ngoài ra còn dùng đơn vị Mã lực (Horsepower, ký hiệu HP): 1 HP ≈ 746 W. Khi một phương tiện chuyển động thẳng đều với vận tốc v dưới tác dụng của lực kéo đều F, công suất tức thời của động cơ là: P = A / t = (F · s) / t = F · v.',
            keyPoints: [
              'Hệ thức P = F · v: Khi công suất động cơ không đổi, muốn tăng lực kéo F (khi lên dốc hoặc chở nặng) thì xe phải giảm vận tốc v (về số thấp 1, 2).',
              'Khi xe chạy trên đường bằng phẳng cần tốc độ cao v thì lực kéo F nhỏ (vào số cao 4, 5).',
            ],
          },
        ],
        quantities: [
          {
            name: 'Công suất',
            symbol: 'P',
            si_unit: 'W (Watt)',
            other_units: 'kW, MW, HP, CV',
            measuring_device: 'Oát kế (Wattmeter) hoặc tính qua lực kế và tốc kế',
            description: 'Tốc độ thực hiện công của người hoặc máy móc trong một đơn vị thời gian.',
          },
          {
            name: 'Thời gian',
            symbol: 't',
            si_unit: 's (giây)',
            other_units: 'phút, giờ (h)',
            measuring_device: 'Đồng hồ bấm giây điện tử',
            description: 'Khoảng thời gian diễn ra quá trình sinh công.',
          },
        ],
        formulas: [
          {
            name: 'Công suất sinh công',
            latex_expression: '\\mathcal{P} = \\frac{A}{t}',
            plain_expression: 'P = A / t',
            variables: [
              { symbol: 'P', name: 'Công suất', unit: 'W' },
              { symbol: 'A', name: 'Công cơ học', unit: 'J' },
              { symbol: 't', name: 'Thời gian', unit: 's' },
            ],
            derived_formulas: [
              { expression: 'A = \\mathcal{P} \\cdot t', description: 'Tính công thực hiện khi biết công suất và thời gian' },
              { expression: 't = \\frac{A}{\\mathcal{P}}', description: 'Tính thời gian cần thiết để thực hiện công A' },
              { expression: '\\mathcal{P} = F \\cdot v', description: 'Công suất khi vật chuyển động đều với vận tốc v dưới lực F' },
            ],
            usage_note: 'Đảm bảo đổi thời gian ra giây (s) trước khi tính toán để công suất có đơn vị là Watt (W).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ tính công suất của cần cẩu nâng hàng',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một cần cẩu xây dựng dùng động cơ điện nâng một khối bê tông nặng m = 1200 kg lên cao h = 15 m trong thời gian t = 30 giây với tốc độ đều. Lấy g = 10 m/s². Bỏ qua ma sát. Tính công của lực nâng của cần cẩu và công suất của động cơ cần cẩu.',
            given_summary: 'm = 1200 kg; h = 15 m; t = 30 s; g = 10 m/s².',
            solution_steps: [
              'Bước 1: Tính lực nâng tối thiểu để kéo vật lên đều: F = P = m · g = 1200 · 10 = 12 000 N.',
              'Bước 2: Tính công của lực nâng: A = F · h = 12 000 · 15 = 180 000 J = 180 kJ.',
              'Bước 3: Tính công suất của động cơ cần cẩu: P = A / t = 180 000 / 30 = 6000 W = 6 kW.',
            ],
            final_answer: 'Công nâng A = 180 kJ; Công suất động cơ P = 6 kW.',
          },
        ],
        simulation: {
          sim_key: 'g9_power_speed_lab',
          title: 'Thí nghiệm Đo công suất và Tốc độ sinh công',
          description:
            'Khảo sát tốc độ nâng vật và mối quan hệ giữa công suất P, lực kéo F và tốc độ v = s/t của các động cơ công nghiệp.',
          parameters: { force: 200, velocity: 5, power_limit: 1500 },
          guide_steps: [
            'Điều chỉnh thanh trượt lực kéo F và thời gian nâng t để ghi nhận biến thiên công suất P = A/t.',
            'Quan sát đồ thị P - v để thấy khi giữ công suất không đổi, muốn tăng lực kéo bắt buộc phải giảm vận tốc.',
          ],
          physics_insight:
            'Động cơ có công suất cố định chỉ có thể tạo ra lực kéo lớn khi vận tốc nhỏ; đây là nguyên lý cơ sở của hộp số xe máy và ô tô khi leo dốc.',
        },
      },
      {
        order_index: 3,
        code: 'G9-CH1-TP3',
        title: 'Chủ đề 1.3: Động năng, Thế năng và Bảo toàn cơ năng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Nắm vững bản chất của động năng Wđ = ½mv², thế năng trọng trường Wt = mgh, hiểu sâu sắc sự chuyển hóa qua lại giữa động năng và thế năng, và áp dụng định luật bảo toàn cơ năng trong trọng trường.',
        summary_note:
          'Ghi nhớ: Cơ năng W = W_đ + W_t. Trong trọng trường bỏ qua ma sát: W = const. Ở điểm cao nhất: v = 0 ⇒ W = W_t(max); ở mặt đất (mốc thế năng): h = 0 ⇒ W = W_đ(max) = ½mv²(max).',
        theory_sections: [
          {
            heading: '1. Động năng và Thế năng trọng trường',
            content:
              'Động năng (W_đ) là dạng năng lượng mà vật có được do chuyển động: W_đ = ½mv². Vật có khối lượng càng lớn và chuyển động càng nhanh thì động năng càng lớn. Thế năng trọng trường (W_t) là dạng năng lượng tương tác giữa Trái Đất và vật, phụ thuộc vào vị trí của vật trong trọng trường: W_t = mgh (với h là độ cao so với mốc thế năng chọn trước, thường là mặt đất). Khi chọn mốc thế năng khác nhau thì giá trị thế năng của vật tại cùng một vị trí sẽ khác nhau.',
            keyPoints: [
              'Động năng: W_đ = ½mv² (tỉ lệ với m và tỉ lệ với v²; vận tốc tăng gấp 3 thì động năng tăng gấp 9).',
              'Thế năng: W_t = mgh (tỉ lệ bậc nhất với khối lượng m và độ cao h).',
              'Mốc thế năng có thể chọn tùy ý tùy bài toán, nhưng cần giữ cố định mốc trong suốt quá trình khảo sát.',
            ],
            realWorldApplication:
              'Tàu lượn siêu tốc ở công viên giải trí được kéo lên đỉnh dốc cao nhất để nạp đầy thế năng, sau đó thả tự do lao dốc biến toàn bộ thế năng thành động năng với vận tốc kinh hoàng ở chân dốc.',
          },
          {
            heading: '2. Sự chuyển hóa và Định luật bảo toàn cơ năng',
            content:
              'Tổng động năng và thế năng của vật được gọi là cơ năng: W = W_đ + W_t. Trong quá trình chuyển động của vật trong trọng trường, động năng và thế năng có thể chuyển hóa qua lại cho nhau: khi vật rơi, độ cao h giảm làm thế năng giảm, bù lại vận tốc v tăng làm động năng tăng. Ngược lại khi vật chuyển động lên cao, động năng giảm dần và chuyển hóa thành thế năng. Nếu bỏ qua mọi ma sát và lực cản, tổng cơ năng của vật luôn không đổi (được bảo toàn): W = W_đ + W_t = const.',
            keyPoints: [
              'Vị trí ném lên cực đại: Toàn bộ động năng chuyển hết thành thế năng cực đại.',
              'Vị trí chạm đất: Toàn bộ thế năng chuyển hết thành động năng cực đại.',
              'Nếu có ma sát (như vật trượt trên dốc nhám): Cơ năng giảm đi đúng bằng công của lực ma sát cản trở: A_ms = W_sau - W_đầu < 0.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Động năng',
            symbol: 'W_đ',
            si_unit: 'J (Joule)',
            other_units: 'kJ',
            measuring_device: 'Tính toán qua khối lượng và tốc kế / cảm biến quang',
            description: 'Dạng năng lượng của vật có được do chuyển động cơ học.',
          },
          {
            name: 'Thế năng trọng trường',
            symbol: 'W_t',
            si_unit: 'J (Joule)',
            other_units: 'kJ',
            measuring_device: 'Thước đo độ cao so với mốc thế năng',
            description: 'Dạng năng lượng do vị trí tương đối giữa vật và Trái Đất.',
          },
          {
            name: 'Cơ năng',
            symbol: 'W',
            si_unit: 'J (Joule)',
            other_units: 'kJ',
            measuring_device: 'Tổng hợp động năng và thế năng',
            description: 'Tổng động năng và thế năng của vật trong trường lực.',
          },
        ],
        formulas: [
          {
            name: 'Cơ năng trong trọng trường',
            latex_expression: 'W = W_đ + W_t = \\frac{1}{2}m v^2 + m g h',
            plain_expression: 'W = 0.5 * m * v^2 + m * g * h',
            variables: [
              { symbol: 'W', name: 'Cơ năng', unit: 'J' },
              { symbol: 'm', name: 'Khối lượng', unit: 'kg' },
              { symbol: 'v', name: 'Vận tốc', unit: 'm/s' },
              { symbol: 'g', name: 'Gia tốc trọng trường', unit: 'm/s²' },
              { symbol: 'h', name: 'Độ cao so với mốc thế năng', unit: 'm' },
            ],
            derived_formulas: [
              { expression: 'v = \\sqrt{2gh}', description: 'Vận tốc rơi tự do chạm đất từ độ cao h không vận tốc đầu' },
              { expression: 'h_{max} = \\frac{v_0^2}{2g}', description: 'Độ cao cực đại khi ném thẳng đứng lên từ mặt đất với vận tốc v₀' },
            ],
            usage_note: 'Bắt buộc phải quy ước rõ mốc thế năng (thường chọn mốc tại mặt đất h = 0).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ bảo toàn cơ năng của vật rơi tự do',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một vật nhỏ có khối lượng m = 0,2 kg được thả rơi tự do không vận tốc đầu từ độ cao h = 20 m so với mặt đất. Lấy g = 10 m/s². Bỏ qua sức cản không khí. Chọn mốc thế năng tại mặt đất. a) Tính cơ năng của vật; b) Tính vận tốc của vật khi chạm đất; c) Ở độ cao nào thì động năng của vật bằng 3 lần thế năng?',
            given_summary: 'm = 0,2 kg; h = 20 m; v₀ = 0; g = 10 m/s²; chọn mốc thế năng tại mặt đất.',
            solution_steps: [
              'Bước 1: Tính cơ năng của vật tại vị trí thả rơi (vị trí A cao 20 m): W_A = W_đA + W_tA = 0 + m·g·h = 0,2 · 10 · 20 = 40 J.',
              'Bước 2: Tính vận tốc chạm đất (vị trí B): Khi chạm đất h_B = 0 nên W_tB = 0 ⇒ W_B = W_đB = ½·m·v_B². Áp dụng định luật bảo toàn cơ năng: W_B = W_A ⇒ ½ · 0,2 · v_B² = 40 ⇒ 0,1 · v_B² = 40 ⇒ v_B² = 400 ⇒ v_B = 20 m/s.',
              'Bước 3: Tìm độ cao tại vị trí C có W_đC = 3·W_tC: Cơ năng tại C: W_C = W_đC + W_tC = 3·W_tC + W_tC = 4·W_tC. Do cơ năng bảo toàn: 4·W_tC = W_A ⇒ 4 · (m·g·h_C) = 40 ⇒ 4 · (0,2 · 10 · h_C) = 40 ⇒ 8 · h_C = 40 ⇒ h_C = 5 m.',
            ],
            final_answer: 'a) Cơ năng W = 40 J; b) Vận tốc chạm đất v = 20 m/s; c) Độ cao h_C = 5 m.',
          },
        ],
        simulation: {
          sim_key: 'g9_rollercoaster_energy_lab',
          title: 'Mô phỏng Bảo toàn cơ năng trên đường ray lượn (Rollercoaster)',
          description:
            'Thả toa xe trượt trên đường ray uốn khúc, theo dõi biểu đồ cột năng lượng động năng Wđ và thế năng Wt chuyển hóa nhịp nhàng.',
          parameters: { mass: 2, height: 20, gravity: 9.8, friction: 0 },
          guide_steps: [
            'Thả toa xe từ đỉnh dốc và quan sát thanh năng lượng: khi thế năng giảm thì động năng tăng tương ứng.',
            'Đặt điểm mốc ở đáy vòng cung để kiểm chứng động năng đạt giá trị cực đại khi độ cao bằng 0.',
            'Tăng lực ma sát để thấy tổng cơ năng suy giảm dần biến thành nhiệt năng tỏa ra môi trường.',
          ],
          physics_insight:
            'Trong hệ cô lập không có lực cản, cơ năng tổng cộng được bảo toàn nguyên vẹn; thế năng và động năng chỉ đổi chỗ liên tục cho nhau.',
        },
      },
    ],
  },
  {
    order_index: 2,
    code: 'G9-CH2',
    title: 'Chương 2: Ánh sáng (Quang hình học THCS)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK KHTN 9: Khúc xạ ánh sáng, định luật Snell n₁·sin(i) = n₂·sin(r), phản xạ toàn phần và góc tới hạn i_gh, thấu kính hội tụ - thấu kính phân kỳ, công thức thấu kính mỏng 1/f = 1/d + 1/d\', độ phóng đại k = -d\'/d, kính lúp và các tật của mắt.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 2: Ánh sáng (Quang hình học THCS)
1. **Hiện tượng khúc xạ ánh sáng:**
   - **Khúc xạ** là hiện tượng tia sáng bị gãy khúc tại mặt phân cách khi truyền xiên góc từ môi trường trong suốt này sang môi trường trong suốt khác.
   - **Tia tới** và **Tia khúc xạ** cùng nằm trong mặt phẳng tới (tạo bởi tia tới và pháp tuyến tại điểm tới).
   - Khi tia sáng truyền từ **không khí vào nước (hoặc thủy tinh)**: $n_1 < n_2 \\Rightarrow r < i$ (góc khúc xạ nhỏ hơn góc tới).
   - Khi tia sáng truyền từ **nước (hoặc thủy tinh) ra không khí**: $n_1 > n_2 \\Rightarrow r > i$ (góc khúc xạ lớn hơn góc tới).
   - **Định luật Snell tổng quát:** $n_1 \\sin i = n_2 \\sin r$.
2. **Hiện tượng phản xạ toàn phần:**
   - Khi ánh sáng truyền từ môi trường **chiết quang hơn** sang môi trường **kém chiết quang hơn** ($n_1 > n_2$), nếu góc tới $i$ lớn hơn góc giới hạn phản xạ toàn phần $i_{\\text{gh}}$ thì tia sáng không bị khúc xạ ra ngoài nữa mà bị **phản xạ $100\\%$ trở lại môi trường ban đầu**.
   - **Công thức góc giới hạn:** $\\sin i_{\\text{gh}} = \\frac{n_2}{n_1}$.
   - **Ứng dụng:** Sợi cáp quang truyền dẫn internet tốc độ cao, ống nội soi y tế, lăng kính phản xạ toàn phần trong ống nhòm.
3. **Thấu kính mỏng (Hội tụ và Phân kỳ):**
   - **Thấu kính hội tụ (TKHT):** Rìa mỏng. Chùm tia tới song song trục chính cho chùm tia ló hội tụ tại tiêu điểm $F'$.
     - Ba tia sáng đặc biệt: (1) Tia qua quang tâm $O$ truyền thẳng; (2) Tia song song trục chính cho tia ló đi qua tiêu điểm chính $F'$; (3) Tia đi qua tiêu điểm $F$ cho tia ló song song trục chính.
     - Tạo ảnh: $d > 2f$ (ảnh thật, ngược chiều, nhỏ hơn vật); $f < d < 2f$ (ảnh thật, ngược chiều, lớn hơn vật); $d < f$ (ảnh ảo, cùng chiều, **lớn hơn vật**).
   - **Thấu kính phân kỳ (TKPK):** Rìa dày. Chùm tia tới song song cho chùm tia ló phân kì có đường kéo dài đi qua tiêu điểm ảo $F'$.
     - Tạo ảnh: Vật thật luôn cho **ảnh ảo, cùng chiều, nhỏ hơn vật**, nằm trong khoảng tiêu cự.
   - **Công thức thấu kính:** $\\frac{1}{f} = \\frac{1}{d} + \\frac{1}{d'}$; Độ phóng đại: $k = -\\frac{d'}{d}$, $|k| = \\frac{h'}{h}$. (Quy ước: ảnh thật $d' > 0$, ảnh ảo $d' < 0$; TKHT $f > 0$, TKPK $f < 0$).
4. **Mắt và Kính lúp:**
   - **Kính lúp:** Là một thấu kính hội tụ có tiêu cự ngắn ($f < 25\\,\\text{cm}$) dùng để quan sát các vật nhỏ. Số bội giác: $G = \\frac{25}{f(\\text{cm})}$.
   - **Mắt bình thường:** Điểm cực cận $C_c$ cách mắt khoảng $25\\,\\text{cm}$, điểm cực viễn $C_v$ ở vô cực.
   - **Mắt cận thị:** Điểm $C_v$ ở gần mắt, không nhìn rõ vật ở xa. **Khắc phục:** Đeo thấu kính phân kỳ có tiêu cự $f_k = -OC_v$.
   - **Mắt lão thị:** Điểm $C_c$ rời xa mắt, không nhìn rõ vật ở gần. **Khắc phục:** Đeo thấu kính hội tụ.`,
    key_takeaways: [
      'Khúc xạ: Khi ánh sáng đi từ môi trường kém chiết quang sang chiết quang hơn thì r < i; ngược lại khi từ chiết quang sang kém chiết quang thì r > i.',
      'Điều kiện phản xạ toàn phần: (1) Truyền từ môi trường chiết quang hơn sang kém chiết quang (n₁ > n₂); (2) Góc tới i ≥ i_gh với sin(i_gh) = n₂ / n₁.',
      'Thấu kính phân kỳ luôn cho ảnh ẢO, CÙNG CHIỀU, NHỎ HƠN VẬT; Thấu kính hội tụ có thể cho ảnh thật ngược chiều hoặc ảnh ảo lớn hơn vật (khi d < f).',
      'Công thức gốc 1/f = 1/d + 1/d\' giải quyết toàn bộ bài toán vị trí vật và ảnh; d\' > 0 là ảnh thật, d\' < 0 là ảnh ảo.',
      'Mắt cận thị nhìn gần tốt, nhìn xa kém ⇒ đeo kính phân kỳ; Mắt lão nhìn xa tốt, nhìn gần mờ ⇒ đeo kính hội tụ.',
    ],
    formula_cheatsheet: [
      {
        name: 'Định luật khúc xạ ánh sáng (Snell)',
        latex: 'n_1 \\sin i = n_2 \\sin r',
        note: 'n₁, n₂: chiết suất môi trường 1 và 2; i: góc tới; r: góc khúc xạ.',
      },
      {
        name: 'Góc tới hạn phản xạ toàn phần',
        latex: '\\sin i_{\\text{gh}} = \\frac{n_2}{n_1} \\quad (n_1 > n_2)',
        note: 'Với nước ra không khí (n₁ = 4/3, n₂ = 1): i_gh ≈ 48,6°.',
      },
      {
        name: 'Công thức vị trí thấu kính mỏng',
        latex: '\\frac{1}{f} = \\frac{1}{d} + \\frac{1}{d\'} \\quad \\Longleftrightarrow \\quad d\' = \\frac{d \\cdot f}{d - f}',
        note: 'f: tiêu cự (TKHT f > 0, TKPK f < 0); d: khoảng cách vật; d\': khoảng cách ảnh (thật d\' > 0, ảo d\' < 0).',
      },
      {
        name: 'Độ phóng đại ảnh của thấu kính',
        latex: 'k = -\\frac{d\'}{d}; \\quad |k| = \\frac{A\'B\'}{AB} = \\frac{h\'}{h}',
        note: 'k > 0: ảnh cùng chiều (ảnh ảo); k < 0: ảnh ngược chiều (ảnh thật).',
      },
      {
        name: 'Số bội giác của kính lúp ngắm chừng ở vô cực',
        latex: 'G = \\frac{25}{f(\\text{cm})}',
        note: 'f tính bằng centimet (cm). Kính lúp ghi 5X nghĩa là G = 5 ⇒ f = 5 cm.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G9-CH2-TP1',
        title: 'Chủ đề 2.1: Hiện tượng khúc xạ ánh sáng và Phản xạ toàn phần',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khám phá hiện tượng khúc xạ ánh sáng khi truyền qua mặt phân cách hai môi trường, nắm vững định luật khúc xạ và làm chủ hiện tượng phản xạ toàn phần ứng dụng trong cáp quang.',
        summary_note:
          'Ghi nhớ: Tia sáng truyền vuông góc với mặt phân cách (i = 0°) thì truyền thẳng không bị khúc xạ. Phản xạ toàn phần chỉ xảy ra khi truyền từ môi trường chiết quang sang kém chiết quang (n₁ > n₂) và i ≥ i_gh.',
        theory_sections: [
          {
            heading: '1. Hiện tượng khúc xạ ánh sáng và Định luật khúc xạ',
            content:
              'Khi cắm một chiếc đũa hoặc ống hút vào cốc nước trong suốt, ta nhìn thấy chiếc đũa như bị gãy khúc tại mặt nước. Đó là do ánh sáng từ chiếc đũa truyền qua mặt phân cách giữa nước và không khí bị đổi hướng đột ngột, hiện tượng này gọi là khúc xạ ánh sáng. Mặt phẳng tới chứa tia tới và pháp tuyến tại điểm tới; tia khúc xạ nằm trong mặt phẳng tới và ở phía bên kia pháp tuyến so với tia tới.',
            keyPoints: [
              'Khi ánh sáng truyền từ không khí vào nước (hoặc thủy tinh): góc khúc xạ r nhỏ hơn góc tới i (r < i).',
              'Khi ánh sáng truyền từ nước ra không khí: góc khúc xạ r lớn hơn góc tới i (r > i).',
              'Định luật Snell: Tỉ số giữa sin góc tới và sin góc khúc xạ là một hằng số đối với hai môi trường xác định: sin(i) / sin(r) = n₂ / n₁.',
            ],
            realWorldApplication:
              'Khi nhìn một con cá đang bơi dưới đáy hồ nước trong, ta có cảm giác con cá ở rất gần mặt nước (ảnh ảo của con cá bị nâng lên do khúc xạ ánh sáng); người câu cá chuyên nghiệp phải ngắm đâm xiên xuống dưới vị trí nhìn thấy.',
          },
          {
            heading: '2. Hiện tượng phản xạ toàn phần và Ứng dụng',
            content:
              'Khi chiếu tia sáng từ môi trường chiết quang hơn sang môi trường kém chiết quang hơn (ví dụ từ khối bán trụ thủy tinh ra không khí) và tăng dần góc tới i, góc khúc xạ r tăng nhanh hơn và đạt 90° tại góc tới hạn i_gh: sin(i_gh) = n₂ / n₁. Khi góc tới i > i_gh, tia khúc xạ biến mất hoàn toàn và toàn bộ chùm sáng bị phản xạ ngược trở lại môi trường ban đầu, tuân theo đúng định luật phản xạ ánh sáng.',
            keyPoints: [
              'Hai điều kiện bắt buộc để có phản xạ toàn phần: (1) Ánh sáng phải truyền từ môi trường chiết quang hơn sang môi trường kém chiết quang hơn (n₁ > n₂); (2) Góc tới i phải lớn hơn hoặc bằng góc giới hạn: i ≥ i_gh.',
              'Góc giới hạn: sin(i_gh) = n₂ / n₁ (với nước n₁ = 4/3 ra không khí n₂ = 1, ta có sin(i_gh) = 3/4 = 0,75 ⇒ i_gh ≈ 48°35\').',
            ],
            realWorldApplication:
              'Sợi quang học viễn thông (cáp quang Internet) gồm lõi thủy tinh tinh khiết có chiết suất cao bọc ngoài bởi lớp vỏ có chiết suất thấp hơn; tín hiệu ánh sáng phản xạ toàn phần liên tục bên trong lõi hàng nghìn kilômét mà gần như không suy hao.',
          },
        ],
        quantities: [
          {
            name: 'Góc tới',
            symbol: 'i',
            si_unit: 'rad (radian)',
            other_units: '° (độ)',
            measuring_device: 'Đĩa đo góc quang học Hartl',
            description: 'Góc hợp bởi tia sáng tới và đường pháp tuyến tại điểm tới.',
          },
          {
            name: 'Góc khúc xạ',
            symbol: 'r',
            si_unit: 'rad (radian)',
            other_units: '° (độ)',
            measuring_device: 'Đĩa đo góc quang học Hartl',
            description: 'Góc hợp bởi tia sáng khúc xạ và đường pháp tuyến tại điểm tới.',
          },
          {
            name: 'Chiết suất tỉ đối',
            symbol: 'n₂₁',
            si_unit: 'Không thứ nguyên',
            other_units: 'Hệ số tỉ đối',
            measuring_device: 'Khúc xạ kế Abbe',
            description: 'Tỉ số chiết suất n₂ / n₁ quyết định mức độ bẻ cong tia sáng.',
          },
        ],
        formulas: [
          {
            name: 'Định luật khúc xạ ánh sáng (Snell)',
            latex_expression: 'n_1 \\sin i = n_2 \\sin r',
            plain_expression: 'n1 * sin(i) = n2 * sin(r)',
            variables: [
              { symbol: 'n₁', name: 'Chiết suất môi trường chứa tia tới', unit: '-' },
              { symbol: 'i', name: 'Góc tới', unit: '°' },
              { symbol: 'n₂', name: 'Chiết suất môi trường chứa tia khúc xạ', unit: '-' },
              { symbol: 'r', name: 'Góc khúc xạ', unit: '°' },
            ],
            derived_formulas: [
              { expression: '\\sin r = \\frac{n_1 \\sin i}{n_2}', description: 'Tính góc khúc xạ r' },
              { expression: '\\sin i_{\\text{gh}} = \\frac{n_2}{n_1}', description: 'Góc giới hạn phản xạ toàn phần khi n₁ > n₂' },
            ],
            usage_note: 'Khi tính toán góc cần đảm bảo máy tính cầm tay ở chế độ Degree (D) nếu góc cho bằng độ.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ tính góc khúc xạ và kiểm tra phản xạ toàn phần',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Chiếu một tia sáng từ nước (chiết suất n₁ = 4/3) ra ngoài không khí (chiết suất n₂ = 1). a) Tính góc tới hạn phản xạ toàn phần i_gh; b) Khi góc tới i = 30°, tính góc khúc xạ r trong không khí; c) Nếu tăng góc tới lên i = 60° thì có tia khúc xạ ra ngoài không khí không, giải thích?',
            given_summary: 'n₁ = 4/3; n₂ = 1.',
            solution_steps: [
              'Bước 1: Tính góc giới hạn phản xạ toàn phần: sin(i_gh) = n₂ / n₁ = 1 / (4/3) = 3/4 = 0,75 ⇒ i_gh = arcsin(0,75) ≈ 48,59° (khoảng 48°35\').',
              'Bước 2: Với i = 30° < i_gh: Tia sáng bị khúc xạ ra không khí. Theo định luật Snell: n₁ · sin(i) = n₂ · sin(r) ⇒ (4/3) · sin(30°) = 1 · sin(r) ⇒ (4/3) · 0,5 = sin(r) ⇒ sin(r) = 2/3 ≈ 0,6667 ⇒ r ≈ 41,81° (khoảng 41°49\').',
              'Bước 3: Với i = 60°: Vì tia sáng truyền từ nước ra không khí (n₁ > n₂) và góc tới i = 60° > i_gh (48,59°), nên thỏa mãn cả hai điều kiện của hiện tượng phản xạ toàn phần. Toàn bộ tia sáng bị phản xạ trở lại trong nước, KHÔNG có tia khúc xạ ló ra không khí.',
            ],
            final_answer: 'a) i_gh ≈ 48,6°; b) r ≈ 41,8°; c) Không có tia khúc xạ vì đã xảy ra phản xạ toàn phần.',
          },
        ],
        simulation: {
          sim_key: 'g9_refraction_tir_lab',
          title: 'Thí nghiệm Khúc xạ ánh sáng và Phản xạ toàn phần',
          description:
            'Tương tác nguồn sáng laser chiếu qua mặt phân cách giữa hai chất lỏng/chất rắn trong suốt, tự do điều chỉnh góc tới và chiết suất.',
          parameters: { n1: 1.33, n2: 1.0, incident_angle: 45 },
          guide_steps: [
            'Kéo góc tới i tăng dần từ 0° đến 90° để quan sát góc khúc xạ r tăng nhanh hơn góc tới khi n₁ > n₂.',
            'Quan sát tại đúng góc tới hạn i_gh, tia khúc xạ đi là là sát mặt phân cách (r = 90°).',
            'Tăng góc tới vượt qua i_gh để chứng kiến tia khúc xạ tắt ngấm và tia phản xạ sáng rực rỡ (phản xạ toàn phần).',
          ],
          physics_insight:
            'Hiện tượng phản xạ toàn phần xảy ra khi vận tốc ánh sáng ở môi trường 2 lớn hơn môi trường 1 và góc tới vượt qua ngưỡng tới hạn, đóng vai trò nền tảng cho mạng lưới internet cáp quang toàn cầu.',
        },
      },
      {
        order_index: 2,
        code: 'G9-CH2-TP2',
        title: 'Chủ đề 2.2: Thấu kính hội tụ, Thấu kính phân kỳ và Sự tạo ảnh',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khảo sát chi tiết đường đi của các tia sáng đặc biệt qua thấu kính hội tụ và phân kỳ, thành thạo dựng ảnh, xác định tính chất ảnh thật/ảo và giải định lượng bằng công thức thấu kính 1/f = 1/d + 1/d\'.',
        summary_note:
          'Ghi nhớ quy ước dấu: TKHT f > 0; TKPK f < 0. Vật thật d > 0. Ảnh thật d\' > 0 (ngược chiều vật); Ảnh ảo d\' < 0 (cùng chiều vật). Độ phóng đại k = -d\'/d.',
        theory_sections: [
          {
            heading: '1. Đặc điểm quang học và Các tia sáng đặc biệt qua thấu kính',
            content:
              'Thấu kính mỏng là một khối môi trường trong suốt đồng chất giới hạn bởi hai mặt cầu hoặc một mặt cầu và một mặt phẳng. Thấu kính hội tụ có phần rìa mỏng hơn phần giữa; thấu kính phân kỳ có phần rìa dày hơn phần giữa. Đường thẳng vuông góc với mặt thấu kính tại tâm đối xứng gọi là trục chính, giao điểm với thấu kính là quang tâm O. Mỗi thấu kính có hai tiêu điểm chính đối xứng nhau qua quang tâm: tiêu điểm vật F và tiêu điểm ảnh F\' (với OF = OF\' = f gọi là tiêu cự).',
            keyPoints: [
              'Tia qua quang tâm O luôn truyền thẳng mà không đổi hướng.',
              'Tia tới song song với trục chính: cho tia ló đi qua (hoặc có đường kéo dài đi qua) tiêu điểm ảnh F\'.',
              'Tia tới đi qua (hoặc hướng tới) tiêu điểm vật F: cho tia ló song song với trục chính.',
            ],
            realWorldApplication:
              'Hệ thống ống kính máy ảnh kỹ thuật số và kính thiên văn khúc xạ kết hợp nhiều thấu kính hội tụ và phân kỳ ghép sát nhau để khử các quang sai và cho bức ảnh sắc nét hoàn hảo.',
          },
          {
            heading: '2. Sự tạo ảnh và Công thức thấu kính mỏng',
            content:
              'Thấu kính hội tụ cho ảnh thật ngược chiều với vật khi đặt vật ngoài khoảng tiêu cự (d > f) và cho ảnh ảo cùng chiều lớn hơn vật khi đặt vật trong khoảng tiêu cự (d < f). Thấu kính phân kỳ luôn cho ảnh ảo cùng chiều và nhỏ hơn vật với mọi vị trí đặt vật. Mối liên hệ giữa tiêu cự f, khoảng cách vật d và khoảng cách ảnh d\' tuân theo công thức thấu kính: 1/f = 1/d + 1/d\' ⇒ d\' = (d · f) / (d - f). Độ phóng đại đại số của ảnh là k = -d\' / d; nếu k < 0 là ảnh thật ngược chiều, nếu k > 0 là ảnh ảo cùng chiều.',
            keyPoints: [
              'Vật ở d = 2f qua TKHT: cho ảnh thật ở đúng d\' = 2f, ngược chiều và bằng đúng kích thước vật (|k| = 1).',
              'Vật ở đúng tiêu điểm d = f qua TKHT: chùm tia ló song song, ảnh ở vô cực.',
              'TKPK luôn cho ảnh ảo nằm trong khoảng tiêu cự (d\' < 0 và |d\'| < |f|).',
            ],
          },
        ],
        quantities: [
          {
            name: 'Tiêu cự thấu kính',
            symbol: 'f',
            si_unit: 'm (mét)',
            other_units: 'cm, mm',
            measuring_device: 'Băng quang học và phương pháp Bessel',
            description: 'Khoảng cách từ quang tâm O đến tiêu điểm chính F (f > 0 với TKHT, f < 0 với TKPK).',
          },
          {
            name: 'Khoảng cách vật',
            symbol: 'd',
            si_unit: 'm (mét)',
            other_units: 'cm, mm',
            measuring_device: 'Thước đo trên giá quang học',
            description: 'Khoảng cách từ vật sáng đến quang tâm của thấu kính.',
          },
          {
            name: 'Khoảng cách ảnh',
            symbol: 'd\'',
            si_unit: 'm (mét)',
            other_units: 'cm, mm',
            measuring_device: 'Thước đo trên giá quang học',
            description: 'Khoảng cách từ màn hứng ảnh (ảnh thật) hoặc vị trí ảnh ảo đến quang tâm.',
          },
        ],
        formulas: [
          {
            name: 'Công thức thấu kính mỏng',
            latex_expression: '\\frac{1}{f} = \\frac{1}{d} + \\frac{1}{d\'}',
            plain_expression: '1/f = 1/d + 1/d_prime',
            variables: [
              { symbol: 'f', name: 'Tiêu cự thấu kính', unit: 'm' },
              { symbol: 'd', name: 'Khoảng cách từ vật đến thấu kính', unit: 'm' },
              { symbol: 'd\'', name: 'Khoảng cách từ ảnh đến thấu kính', unit: 'm' },
            ],
            derived_formulas: [
              { expression: 'd\' = \\frac{d \\cdot f}{d - f}', description: 'Tính vị trí ảnh d\'' },
              { expression: 'd = \\frac{d\' \\cdot f}{d\' - f}', description: 'Tính vị trí đặt vật d' },
              { expression: 'f = \\frac{d \\cdot d\'}{d + d\'}', description: 'Tính tiêu cự f từ d và d\'' },
              { expression: 'k = -\\frac{d\'}{d} = \\frac{f}{f - d}', description: 'Hệ số phóng đại ảnh k' },
            ],
            usage_note: 'Lưu ý dấu: f > 0 (TKHT), f < 0 (TKPK); d\' > 0 (ảnh thật), d\' < 0 (ảnh ảo).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ tính vị trí, tính chất và kích thước ảnh qua TKHT',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một vật sáng nhỏ AB có chiều cao h = 2 cm đặt vuông góc với trục chính của một thấu kính hội tụ có tiêu cự f = 15 cm. Điểm A nằm trên trục chính và cách thấu kính d = 30 cm. a) Xác định vị trí, tính chất của ảnh A\'B\'; b) Tính chiều cao h\' của ảnh A\'B\'.',
            given_summary: 'TKHT f = 15 cm; h = 2 cm; d = 30 cm.',
            solution_steps: [
              'Bước 1: Áp dụng công thức thấu kính để tính vị trí ảnh d\': 1/f = 1/d + 1/d\' ⇒ d\' = (d · f) / (d - f) = (30 · 15) / (30 - 15) = 450 / 15 = 30 cm.',
              'Bước 2: Nhận xét tính chất của ảnh: Do d\' = +30 cm > 0 nên ảnh A\'B\' là ẢNH THẬT, ngược chiều với vật AB và cách thấu kính 30 cm ở phía sau thấu kính.',
              'Bước 3: Tính chiều cao của ảnh bằng độ phóng đại: |k| = |d\' / d| = |30 / 30| = 1. Chiều cao của ảnh là: h\' = |k| · h = 1 · 2 = 2 cm.',
            ],
            final_answer: 'Ảnh A\'B\' là ảnh thật, cách thấu kính 30 cm, ngược chiều vật và cao h\' = 2 cm.',
          },
        ],
        simulation: {
          sim_key: 'g9_thin_lens_lab',
          title: 'Phòng thí nghiệm Quang hình học - Thấu kính mỏng',
          description:
            'Tương tác quang học trực quan với thấu kính hội tụ và phân kỳ: di chuyển ngọn nến, theo dõi đường truyền tia sáng đặc biệt và quan sát ảnh trên màn.',
          parameters: { focal_length: 15, object_distance: 30, object_height: 5, lens_type: 'converging' },
          guide_steps: [
            'Kéo vật lại gần quang tâm từ d > 2f đến d < f để chứng kiến sự chuyển biến từ ảnh thật thu nhỏ sang ảnh ảo phóng đại.',
            'Chuyển đổi sang thấu kính phân kỳ để thấy ảnh luôn là ảnh ảo nằm gọn trong tiêu cự.',
            'Quan sát số liệu vị trí d, d\' và hệ số phóng đại k tự động cập nhật.',
          ],
          physics_insight:
            'Sự giao nhau của các tia sáng thực tế tạo nên ảnh thật hứng được trên màn; sự giao nhau của đường kéo dài các tia loe rộng tạo nên ảnh ảo nhìn thấy bằng mắt.',
        },
      },
      {
        order_index: 3,
        code: 'G9-CH2-TP3',
        title: 'Chủ đề 2.3: Kính lúp, Cấu tạo mắt và Các tật của mắt',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Tìm hiểu cấu tạo quang học tương đương của mắt, cơ chế điều tiết thể thủy tinh, nguyên lý kính lúp và phương pháp khắc phục hai tật khúc xạ phổ biến nhất: cận thị và lão thị.',
        summary_note:
          'Ghi nhớ: Kính lúp có G = 25 / f(cm). Mắt cận thị không nhìn rõ vật ở xa ⇒ khắc phục bằng đeo thấu kính phân kỳ. Mắt lão thị không nhìn rõ vật ở gần ⇒ khắc phục bằng đeo thấu kính hội tụ.',
        theory_sections: [
          {
            heading: '1. Kính lúp và Số bội giác',
            content:
              'Kính lúp là một thấu kính hội tụ có tiêu cự ngắn (thường từ vài cm đến vài chục cm), dùng để quan sát các vật nhỏ. Khi dùng kính lúp, ta phải đặt vật trong khoảng tiêu cự của kính (d < f) để kính cho một ảnh ảo cùng chiều và lớn hơn vật nhiều lần. Mắt đặt sau kính lúp để nhìn thấy ảnh ảo phóng đại này. Số bội giác của kính lúp (ký hiệu G) là đại lượng cho biết ảnh ảo trên màng lưới mà mắt thu được khi nhìn qua kính lúp lớn gấp bao nhiêu lần so với khi nhìn trực tiếp vật đặt ở điểm cực cận của mắt: G = 25 / f(cm).',
            keyPoints: [
              'Vật bắt buộc phải đặt trong khoảng tiêu cự (d < f) để tạo ảnh ảo phóng đại.',
              'Số ghi trên vành kính lúp như 2,5X; 5X; 10X là số bội giác G của kính lúp.',
              'Tiêu cự càng ngắn (f càng nhỏ) thì số bội giác G càng lớn, ảnh phóng đại càng to.',
            ],
            realWorldApplication:
              'Thợ sửa đồng hồ cơ khí tinh xảo đeo một chiếc kính lúp nhỏ trước mắt để nhìn rõ các bánh răng siêu nhỏ chỉ vài phần mười milimét.',
          },
          {
            heading: '2. Mắt và Các tật khúc xạ của mắt',
            content:
              'Về phương diện quang học, mắt hoạt động giống như một chiếc máy ảnh: thể thủy tinh đóng vai trò như một thấu kính hội tụ có thể thay đổi tiêu cự nhờ cơ vòng điều tiết; màng lưới (võng mạc) ở đáy mắt đóng vai trò như màn hứng ảnh. Để nhìn rõ một vật, ảnh thật của vật phải rơi đúng trên màng lưới. Điểm gần nhất mắt nhìn rõ gọi là điểm cực cận (Cc); điểm xa nhất mắt nhìn rõ khi không điều tiết gọi là điểm cực viễn (Cv). Mắt bình thường có Cv ở vô cực và Cc cách mắt khoảng 25 cm.',
            keyPoints: [
              'Mắt cận thị: Thể thủy tinh quá phồng hoặc trục nhãn cầu dài ⇒ chùm sáng hội tụ ở TRƯỚC màng lưới. Điểm Cv ở gần mắt. Khắc phục: Đeo thấu kính phân kỳ thích hợp để kéo ảnh lùi ra sau rơi trúng màng lưới (tiêu cự kính cận f_k = -OC_v).',
              'Mắt lão thị: Cơ vòng mắt bị lão hóa ở người lớn tuổi làm giảm khả năng phồng thể thủy tinh ⇒ điểm Cc dời xa mắt, nhìn gần bị mờ. Khắc phục: Đeo thấu kính hội tụ để giúp mắt nhìn rõ vật ở gần.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Số bội giác',
            symbol: 'G',
            si_unit: 'Không thứ nguyên',
            other_units: 'X (ví dụ 5X)',
            measuring_device: 'Ghi trực tiếp trên vành kính lúp',
            description: 'Tỉ số góc trông ảnh qua kính lúp so với góc trông vật trực tiếp ở cực cận.',
          },
          {
            name: 'Khoảng cực cận',
            symbol: 'OC_c',
            si_unit: 'm (mét)',
            other_units: 'cm',
            measuring_device: 'Thước đo thị lực',
            description: 'Khoảng cách từ mắt đến điểm gần nhất mà mắt có thể nhìn rõ khi điều tiết tối đa.',
          },
          {
            name: 'Khoảng cực viễn',
            symbol: 'OC_v',
            si_unit: 'm (mét)',
            other_units: 'cm',
            measuring_device: 'Bảng đo thị lực quốc tế',
            description: 'Khoảng cách từ mắt đến điểm xa nhất mà mắt có thể nhìn rõ khi hoàn toàn không điều tiết.',
          },
        ],
        formulas: [
          {
            name: 'Số bội giác của kính lúp',
            latex_expression: 'G = \\frac{25}{f(\\text{cm})}',
            plain_expression: 'G = 25 / f_cm',
            variables: [
              { symbol: 'G', name: 'Số bội giác', unit: '-' },
              { symbol: 'f', name: 'Tiêu cự của kính lúp', unit: 'cm' },
            ],
            derived_formulas: [
              { expression: 'f(\\text{cm}) = \\frac{25}{G}', description: 'Tính tiêu cự kính lúp từ số bội giác G' },
              { expression: 'f_k = -OC_v', description: 'Tiêu cự thấu kính phân kỳ cần đeo để sửa tật cận thị' },
            ],
            usage_note: 'Đảm bảo tiêu cự f được đổi sang đơn vị centimet (cm) khi ráp vào công thức G = 25 / f.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ tính tiêu cự kính lúp và kính sửa cận thị',
            difficulty: 'Thông hiểu',
            problem_statement:
              'a) Một kính lúp trên vành có ghi 5X. Tính tiêu cự của kính lúp này theo đơn vị cm. b) Bạn Nam bị cận thị, khi không đeo kính điểm xa nhất mà Nam nhìn rõ (điểm cực viễn Cv) cách mắt 50 cm. Hỏi để nhìn rõ các vật ở vô cực mà không cần điều tiết mắt, Nam phải đeo kính cận là thấu kính gì và có tiêu cự bằng bao nhiêu (kính đeo sát mắt)?',
            given_summary: 'a) G = 5; b) Mắt cận thị có OC_v = 50 cm = 0,5 m.',
            solution_steps: [
              'Bước 1: Tính tiêu cự kính lúp: Từ G = 25 / f(cm) ⇒ f = 25 / G = 25 / 5 = 5 cm.',
              'Bước 2: Xác định loại kính và tiêu cự kính cận cho Nam: Kính cận là THẤU KÍNH PHÂN KỲ.',
              'Để nhìn rõ vật ở vô cực mà không phải điều tiết, thấu kính phân kỳ phải tạo ảnh ảo của vật ở vô cực tại đúng điểm cực viễn Cv của mắt Nam: d = ∞ ⇒ d\' = -OC_v = -50 cm.',
              'Theo công thức thấu kính: 1/f_k = 1/d + 1/d\' = 0 + 1/(-50) ⇒ f_k = -50 cm = -0,5 m.',
            ],
            final_answer: 'a) Tiêu cự kính lúp f = 5 cm; b) Kính cận là thấu kính phân kỳ có tiêu cự f_k = -50 cm.',
          },
        ],
        simulation: {
          sim_key: 'g9_eye_magnifier_lab',
          title: 'Mô phỏng Kính lúp và Cơ chế điều tiết của mắt',
          description:
            'Mô phỏng cơ chế hội tụ của thể thủy tinh lên võng mạc, thử nghiệm các tật cận thị/lão thị và đặt thấu kính điều chỉnh thị lực.',
          parameters: { eye_condition: 'myopia', glass_focal: -50, object_distance: 100 },
          guide_steps: [
            'Chọn chế độ "Mắt cận thị" để thấy chùm sáng hội tụ ở phía trước màng lưới làm hình ảnh bị mờ nhòe.',
            'Lắp thấu kính phân kỳ bổ trợ vào trước mắt và chỉnh tiêu cự cho đến khi điểm hội tụ rơi chính xác trên màng lưới.',
            'Chuyển sang chế độ "Kính lúp" để quan sát vật đặt trong khoảng tiêu cự tạo ảnh ảo phóng đại góc trông cho mắt.',
          ],
          physics_insight:
            'Thấu kính phân kỳ làm phân kì nhẹ chùm tia sáng trước khi đi vào mắt cận, giúp điểm hội tụ của thể thủy tinh bị đẩy lùi về đúng vị trí võng mạc.',
        },
      },
    ],
  },
  {
    order_index: 3,
    code: 'G9-CH3',
    title: 'Chương 3: Điện học chuyên sâu (Định luật Ohm & Năng lượng điện)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK KHTN 9: Định luật Ohm cho đoạn mạch I = U/R, sự phụ thuộc của điện trở vào chiều dài, tiết diện và vật liệu R = ρ·l/S, đoạn mạch nối tiếp và song song, công suất điện P = U·I, điện năng tiêu thụ A = P·t và Định luật Joule - Lenz Q = I²Rt.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 3: Điện học chuyên sâu (Định luật Ohm & Năng lượng điện)
1. **Định luật Ohm cho đoạn mạch:**
   - **Nội dung:** Cường độ dòng điện chạy qua một dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây.
   - **Hệ thức:** $I = \\frac{U}{R} \\Longleftrightarrow U = I \\cdot R \\Longleftrightarrow R = \\frac{U}{I}$.
   - **Đồ thị $U - I$:** Là một đường thẳng đi qua gốc tọa độ $(0, 0)$. Hệ số góc của đường thẳng đặc trưng cho điện trở của dây dẫn (đường càng dốc thì điện trở $R$ càng lớn).
2. **Điện trở của dây dẫn:**
   - Điện trở $R$ của dây dẫn đồng chất tỉ lệ thuận với chiều dài $l$, tỉ lệ nghịch với tiết diện $S$ và phụ thuộc vào vật liệu làm dây dẫn (điện trở suất $\\rho$):
     $$R = \\rho \\frac{l}{S}$$
   - **Đơn vị:** $l\\,(\\text{m})$; $S\\,(\\text{m}^2)$; $\\rho\\,(\\Omega\\cdot\\text{m})$; $R\\,(\\Omega)$.
   - **Quy đổi tiết diện:** $1\\,\\text{mm}^2 = 10^{-6}\\,\\text{m}^2$. Tiết diện dây tròn: $S = \\pi \\frac{d^2}{4} = \\pi r^2$.
3. **Đoạn mạch nối tiếp và Đoạn mạch song song:**
   - **Mạch nối tiếp:**
     - $I = I_1 = I_2 = \\dots = I_n$
     - $U = U_1 + U_2 + \\dots + U_n$
     - $R_{\\text{tđ}} = R_1 + R_2 + \\dots + R_n$ ($R_{\\text{tđ}}$ luôn lớn hơn mọi điện trở thành phần)
     - Hệ thức phân thế: $\\frac{U_1}{U_2} = \\frac{R_1}{R_2}$.
   - **Mạch song song:**
     - $U = U_1 = U_2 = \\dots = U_n$
     - $I = I_1 + I_2 + \\dots + I_n$
     - $\\frac{1}{R_{\\text{tđ}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots + \\frac{1}{R_n} \\quad \\Longrightarrow \\quad R_{\\text{tđ}} = \\frac{R_1 R_2}{R_1 + R_2}$ ($R_{\\text{tđ}}$ luôn nhỏ hơn mọi điện trở thành phần)
     - Hệ thức phân dòng: $\\frac{I_1}{I_2} = \\frac{R_2}{R_1}$.
4. **Công suất điện và Điện năng tiêu thụ:**
   - **Công suất điện:** $\\mathcal{P} = U \\cdot I = I^2 R = \\frac{U^2}{R}$ (đo bằng Oát, $\\text{W}$).
   - **Điện năng tiêu thụ:** $A = \\mathcal{P} \\cdot t = U I t = I^2 R t = \\frac{U^2}{R} t$.
   - **Đơn vị điện năng:** Joule ($\\text{J}$) hoặc kilôoát giờ ($\\text{kWh}$). Quy đổi: $1\\,\\text{kWh} = 1000\\,\\text{W} \\times 3600\\,\\text{s} = 3,6 \\times 10^6\\,\\text{J} = 3,6\\,\\text{MJ}$.
   - **Công tơ điện:** Số đếm của công tơ điện trong gia đình cho biết số kilôoát giờ ($\\text{kWh}$, gọi dân gian là "số điện") đã tiêu thụ.
5. **Định luật Joule - Lenz (Tác dụng nhiệt của dòng điện):**
   - **Nội dung:** Nhiệt lượng tỏa ra trên một vật dẫn có dòng điện chạy qua tỉ lệ thuận với bình phương cường độ dòng điện, tỉ lệ thuận với điện trở của vật dẫn và thời gian dòng điện chạy qua.
   - **Hệ thức:** $Q = I^2 R t$ (với $I\\,(\\text{A})$, $R\\,(\\Omega)$, $t\\,(\\text{s}) \\Rightarrow Q\\,(\\text{J})$).
   - Nếu nhiệt lượng tính bằng calo: $Q = 0,24 \\cdot I^2 R t\\,(\\text{cal})$.`,
    key_takeaways: [
      'Định luật Ohm I = U / R là nền tảng cốt lõi: Với điện trở cố định, hiệu điện thế tăng bao nhiêu lần thì cường độ dòng điện tăng bấy nhiêu lần.',
      'Công thức R = ρ·l/S: Dây càng dài điện trở càng lớn; dây càng to (tiết diện lớn) điện trở càng nhỏ; vật liệu có điện trở suất ρ nhỏ (như bạc, đồng) dẫn điện càng tốt.',
      'Đoạn mạch nối tiếp có dòng điện bằng nhau tại mọi điểm (I bằng nhau); Đoạn mạch song song có hiệu điện thế bằng nhau ở hai đầu các nhánh (U bằng nhau).',
      'Công suất điện P = U·I = I²R = U²/R cho biết tốc độ tiêu thụ năng lượng điện; trên thiết bị ghi 220V - 100W nghĩa là khi dùng đúng 220V thì công suất tiêu thụ là 100W.',
      'Định luật Joule - Lenz Q = I²Rt: Nhiệt lượng tỏa ra phụ thuộc vào BÌNH PHƯƠNG dòng điện (dòng điện tăng gấp 2 thì nhiệt lượng tăng gấp 4 lần).',
    ],
    formula_cheatsheet: [
      {
        name: 'Định luật Ohm cho đoạn mạch',
        latex: 'I = \\frac{U}{R} \\quad \\Longleftrightarrow \\quad U = I \\cdot R; \\quad R = \\frac{U}{I}',
        note: 'I: cường độ dòng điện (A); U: hiệu điện thế (V); R: điện trở (Ω).',
      },
      {
        name: 'Điện trở dây dẫn',
        latex: 'R = \\rho \\frac{l}{S} \\quad (S = \\pi \\frac{d^2}{4})',
        note: 'ρ: điện trở suất (Ω·m); l: chiều dài (m); S: tiết diện (m²); d: đường kính tiết diện (m).',
      },
      {
        name: 'Điện trở tương đương mắc nối tiếp',
        latex: 'R_{\\text{nt}} = R_1 + R_2; \\quad \\frac{U_1}{U_2} = \\frac{R_1}{R_2}',
        note: 'Dòng điện I bằng nhau tại mọi điểm: I = I₁ = I₂.',
      },
      {
        name: 'Điện trở tương đương mắc song song',
        latex: 'R_{\\text{ss}} = \\frac{R_1 R_2}{R_1 + R_2}; \\quad \\frac{I_1}{I_2} = \\frac{R_2}{R_1}',
        note: 'Hiệu điện thế U bằng nhau: U = U₁ = U₂.',
      },
      {
        name: 'Công suất điện',
        latex: '\\mathcal{P} = U \\cdot I = I^2 R = \\frac{U^2}{R}',
        note: 'P: công suất điện (W); 1 kW = 1000 W.',
      },
      {
        name: 'Điện năng tiêu thụ và Định luật Joule - Lenz',
        latex: 'A = \\mathcal{P} \\cdot t = U I t; \\quad Q = I^2 R t',
        note: '1 kWh = 3,6 × 10⁶ J. Đoạn mạch thuần điện trở thì toàn bộ điện năng A biến thành nhiệt lượng Q.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G9-CH3-TP1',
        title: 'Chủ đề 3.1: Định luật Ohm cho đoạn mạch và Điện trở dây dẫn',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khảo sát định luật Ohm - định luật nền tảng của toàn bộ ngành điện kỹ thuật, phân tích đồ thị quan hệ U - I và tính toán điện trở dây dẫn dựa trên chiều dài, tiết diện và điện trở suất.',
        summary_note:
          'Ghi nhớ: 1 kΩ = 1000 Ω; 1 MΩ = 1 000 000 Ω. Đổi tiết diện: 1 mm² = 10⁻⁶ m². Điện trở suất ρ đặc trưng cho vật liệu làm dây dẫn (đồng: 1,7 × 10⁻⁸ Ω·m).',
        theory_sections: [
          {
            heading: '1. Định luật Ohm cho đoạn mạch',
            content:
              'Trong một mạch điện, khi ta thay đổi hiệu điện thế U giữa hai đầu dây dẫn thì cường độ dòng điện I chạy qua dây dẫn cũng thay đổi tỉ lệ thuận với U: thương số U / I là một đại lượng không đổi đối với mỗi dây dẫn xác định, đại lượng này được gọi là Điện trở của dây dẫn (ký hiệu R). Điện trở đặc trưng cho mức độ cản trở dòng điện của dây dẫn. Định luật Ohm phát biểu: Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây: I = U / R.',
            keyPoints: [
              'Công thức định luật Ohm: I = U / R (với I tính bằng A, U tính bằng V, R tính bằng Ω).',
              'Đồ thị biểu diễn sự phụ thuộc của I vào U là một đường thẳng đi qua gốc tọa độ O (0, 0).',
              'Dây dẫn nào có điện trở R càng lớn thì dòng điện I đi qua càng nhỏ khi cùng đặt dưới hiệu điện thế U.',
            ],
            realWorldApplication:
              'Để bảo vệ các bóng đèn LED nhạy cảm (chỉ chịu được điện áp 3 V và dòng điện 20 mA), kỹ sư luôn mắc nối tiếp một điện trở hạn dòng để giảm dòng điện qua LED theo đúng định luật Ohm.',
          },
          {
            heading: '2. Sự phụ thuộc của điện trở vào kích thước và vật liệu dây',
            content:
              'Thực nghiệm chứng minh điện trở của các dây dẫn làm cùng một vật liệu có tiết diện như nhau thì tỉ lệ thuận với chiều dài l: R ~ l. Các dây dẫn cùng vật liệu và cùng chiều dài thì tỉ lệ nghịch với tiết diện S: R ~ 1 / S. Điện trở của dây dẫn còn phụ thuộc vào bản chất vật liệu làm dây, đặc trưng bởi điện trở suất ρ (đo bằng Ω·m). Công thức tính điện trở: R = ρ · (l / S). Biến trở là điện trở có thể thay đổi trị số được (bằng con chạy hoặc tay xoay thay đổi chiều dài phần dây có dòng điện chạy qua).',
            keyPoints: [
              'Công thức: R = ρ · l / S (l tính bằng m, S tính bằng m², ρ tính bằng Ω·m).',
              'Dây dẫn càng dài thì điện trở càng lớn; dây có tiết diện càng to thì điện trở càng nhỏ.',
              'Điện trở suất ρ càng nhỏ thì vật liệu dẫn điện càng tốt (Bạc < Đồng < Nhôm).',
              'Biến trở dùng để điều chỉnh cường độ dòng điện trong mạch (như chiết áp chỉnh độ sáng đèn, âm lượng loa).',
            ],
          },
        ],
        quantities: [
          {
            name: 'Điện trở',
            symbol: 'R',
            si_unit: 'Ω (Ohm)',
            other_units: 'kΩ, MΩ',
            measuring_device: 'Ôm kế (Ohmmeter) hoặc đồng hồ vạn năng DMM',
            description: 'Đại lượng đặc trưng cho mức độ cản trở dòng điện của vật dẫn.',
          },
          {
            name: 'Điện trở suất',
            symbol: 'ρ',
            si_unit: 'Ω·m (Ohm mét)',
            other_units: 'Ω·mm²/m',
            measuring_device: 'Bảng tra cứu tiêu chuẩn vật liệu',
            description: 'Điện trở của một đoạn dây dẫn hình trụ dài 1 m có tiết diện 1 m² làm bằng vật liệu đó.',
          },
          {
            name: 'Hiệu điện thế',
            symbol: 'U',
            si_unit: 'V (Volt)',
            other_units: 'mV, kV',
            measuring_device: 'Vôn kế (Voltmeter) mắc song song',
            description: 'Độ chênh lệch điện thế giữa hai điểm trong điện trường tạo ra dòng điện.',
          },
        ],
        formulas: [
          {
            name: 'Định luật Ohm cho đoạn mạch',
            latex_expression: 'I = \\frac{U}{R}',
            plain_expression: 'I = U / R',
            variables: [
              { symbol: 'I', name: 'Cường độ dòng điện', unit: 'A' },
              { symbol: 'U', name: 'Hiệu điện thế', unit: 'V' },
              { symbol: 'R', name: 'Điện trở', unit: 'Ω' },
            ],
            derived_formulas: [
              { expression: 'U = I \\cdot R', description: 'Tính hiệu điện thế hai đầu điện trở' },
              { expression: 'R = \\frac{U}{I}', description: 'Tính giá trị điện trở' },
              { expression: 'R = \\rho \\frac{l}{S}', description: 'Tính điện trở theo chiều dài, tiết diện và vật liệu' },
            ],
            usage_note: 'Khi tính toán R = ρ·l/S bắt buộc phải đổi tiết diện từ mm² sang m² bằng cách nhân với 10⁻⁶.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ tính điện trở của cuộn dây và dòng điện theo định luật Ohm',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một cuộn dây dẫn bằng đồng có chiều dài l = 200 m và tiết diện tròn có đường kính d = 0,8 mm. Biết điện trở suất của đồng là ρ = 1,7 × 10⁻⁸ Ω·m. Lấy π ≈ 3,14. a) Tính điện trở của cuộn dây đồng; b) Khi đặt vào hai đầu cuộn dây này một hiệu điện thế U = 13,6 V, tính cường độ dòng điện chạy qua cuộn dây.',
            given_summary: 'l = 200 m; d = 0,8 mm = 0,8 × 10⁻³ m; ρ = 1,7 × 10⁻⁸ Ω·m; U = 13,6 V.',
            solution_steps: [
              'Bước 1: Tính tiết diện của dây đồng: S = π · d² / 4 = 3,14 · (0,8 × 10⁻³)² / 4 = 3,14 · 0,64 × 10⁻⁶ / 4 ≈ 0,5024 × 10⁻⁶ m².',
              'Bước 2: Tính điện trở của cuộn dây đồng: R = ρ · (l / S) = (1,7 × 10⁻⁸ · 200) / (0,5024 × 10⁻⁶) = 340 × 10⁻⁸ / (0,5024 × 10⁻⁶) ≈ 6,77 Ω.',
              'Bước 3: Áp dụng định luật Ohm để tính cường độ dòng điện: I = U / R = 13,6 / 6,77 ≈ 2,01 A.',
            ],
            final_answer: 'a) Điện trở R ≈ 6,77 Ω; b) Cường độ dòng điện I ≈ 2,01 A.',
          },
        ],
        simulation: {
          sim_key: 'g9_ohms_resistor_lab',
          title: 'Thí nghiệm Khảo sát Định luật Ohm và Điện trở dây dẫn',
          description:
            'Thay đổi điện áp U, chiều dài dây l, tiết diện S và vật liệu dây dẫn để khảo sát trực quan định luật Ohm và đồ thị đặc tuyến V - A.',
          parameters: { voltage: 12, length: 10, cross_section: 0.5, resistivity: 1.7e-8 },
          guide_steps: [
            'Điều chỉnh thanh trượt hiệu điện thế U và quan sát kim ampe kế chỉ dòng điện I tăng tỉ lệ thuận.',
            'Kéo dài thanh kim loại để thấy điện trở tăng tuyến tính theo chiều dài.',
            'Tăng tiết diện dây dẫn S để chứng minh điện trở suy giảm và dòng điện tăng vọt.',
          ],
          physics_insight:
            'Điện trở phản ánh sự va chạm cản trở của các ion mạng tinh thể kim loại lên dòng dịch chuyển của các electron tự do dưới tác dụng của điện trường.',
        },
      },
      {
        order_index: 2,
        code: 'G9-CH3-TP2',
        title: 'Chủ đề 3.2: Đoạn mạch nối tiếp và Đoạn mạch song song',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Nắm vững tính chất dòng điện và hiệu điện thế trong mạch nối tiếp và song song, thành thạo công thức tính điện trở tương đương và giải mạch điện hỗn hợp cơ bản.',
        summary_note:
          'Ghi nhớ: Nối tiếp: R_tđ = R₁ + R₂ (I bằng nhau, U phân chia theo tỉ lệ thuận với điện trở). Song song: R_tđ = (R₁·R₂) / (R₁ + R₂) (U bằng nhau, I phân chia theo tỉ lệ nghịch với điện trở).',
        theory_sections: [
          {
            heading: '1. Đoạn mạch mắc nối tiếp',
            content:
              'Đoạn mạch nối tiếp gồm các thiết bị điện được mắc liên tiếp nhau thành một chuỗi duy nhất, không có điểm rẽ nhánh. Trong đoạn mạch nối tiếp: Cường độ dòng điện là như nhau tại mọi vị trí: I = I₁ = I₂ = ... = I_n. Hiệu điện thế giữa hai đầu đoạn mạch bằng tổng các hiệu điện thế thành phần: U = U₁ + U₂ + ... + U_n. Điện trở tương đương của đoạn mạch bằng tổng các điện trở thành phần: R_tđ = R₁ + R₂ + ... + R_n. Do đó điện trở tương đương của đoạn mạch nối tiếp luôn lớn hơn từng điện trở thành phần.',
            keyPoints: [
              'Dòng điện I bằng nhau tại mọi điểm trong mạch nối tiếp.',
              'Hiệu điện thế phân chia tỉ lệ thuận với điện trở: U₁ / U₂ = R₁ / R₂ (điện trở nào lớn hơn thì gánh hiệu điện thế lớn hơn).',
              'Nếu một thiết bị trong mạch nối tiếp bị đứt hỏng thì toàn bộ mạch bị ngắt, tất cả thiết bị khác đều ngừng hoạt động.',
            ],
            realWorldApplication:
              'Cầu chì và công tắc điện luôn được mắc nối tiếp với thiết bị điện cần bảo vệ để khi có sự cố, cầu chì đứt sẽ ngắt toàn bộ dòng điện qua thiết bị.',
          },
          {
            heading: '2. Đoạn mạch mắc song song',
            content:
              'Đoạn mạch song song gồm các nhánh rẽ có hai điểm chung (điểm nối chung hai đầu). Trong đoạn mạch song song: Hiệu điện thế giữa hai đầu mỗi nhánh bằng nhau và bằng hiệu điện thế toàn mạch: U = U₁ = U₂ = ... = U_n. Cường độ dòng điện mạch chính bằng tổng cường độ dòng điện các mạch rẽ: I = I₁ + I₂ + ... + I_n. Nghịch đảo điện trở tương đương bằng tổng nghịch đảo các điện trở thành phần: 1 / R_tđ = 1 / R₁ + 1 / R₂ ⇒ Với 2 điện trở: R_tđ = (R₁ · R₂) / (R₁ + R₂). Điện trở tương đương song song luôn nhỏ hơn mọi điện trở thành phần.',
            keyPoints: [
              'Hiệu điện thế U bằng nhau ở hai đầu các nhánh song song.',
              'Dòng điện phân chia tỉ lệ nghịch với điện trở: I₁ / I₂ = R₂ / R₁ (nhánh nào có điện trở nhỏ hơn thì dòng điện chạy qua lớn hơn).',
              'Các thiết bị trong gia đình luôn được mắc song song để chúng hoạt động độc lập với nhau ở cùng điện áp chuẩn 220 V.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Điện trở tương đương',
            symbol: 'R_tđ',
            si_unit: 'Ω (Ohm)',
            other_units: 'kΩ',
            measuring_device: 'Tính toán giải mạch hoặc đo bằng cầu đo Wheatstone',
            description: 'Điện trở đơn lẻ có thể thay thế toàn bộ mạch điện mà không làm thay đổi U và I của mạch chính.',
          },
          {
            name: 'Cường độ dòng điện mạch rẽ',
            symbol: 'I₁, I₂',
            si_unit: 'A (Ampe)',
            other_units: 'mA',
            measuring_device: 'Ampe kế mắc nối tiếp trong từng nhánh',
            description: 'Dòng điện chạy qua từng linh kiện thành phần.',
          },
        ],
        formulas: [
          {
            name: 'Điện trở tương đương đoạn mạch song song',
            latex_expression: 'R_{\\text{ss}} = \\frac{R_1 R_2}{R_1 + R_2}',
            plain_expression: 'R_ss = (R1 * R2) / (R1 + R2)',
            variables: [
              { symbol: 'R_ss', name: 'Điện trở tương đương song song', unit: 'Ω' },
              { symbol: 'R₁', name: 'Điện trở nhánh 1', unit: 'Ω' },
              { symbol: 'R₂', name: 'Điện trở nhánh 2', unit: 'Ω' },
            ],
            derived_formulas: [
              { expression: 'R_{\\text{nt}} = R_1 + R_2', description: 'Điện trở tương đương nối tiếp' },
              { expression: 'I_1 = I \\frac{R_2}{R_1 + R_2}', description: 'Công thức phân dòng điện qua nhánh R₁' },
              { expression: 'U_1 = U \\frac{R_1}{R_1 + R_2}', description: 'Công thức phân thế trên điện trở R₁ trong mạch nối tiếp' },
            ],
            usage_note: 'Công thức tích trên tổng chỉ áp dụng trực tiếp cho 2 điện trở song song; với 3 điện trở phải dùng 1/R_tđ = 1/R₁ + 1/R₂ + 1/R₃.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ tính toán đoạn mạch hỗn hợp',
            difficulty: 'Vận dụng',
            problem_statement:
              'Cho mạch điện gồm điện trở R₁ = 12 Ω mắc nối tiếp với đoạn mạch song song gồm R₂ = 20 Ω và R₃ = 30 Ω. Đặt vào hai đầu toàn mạch hiệu điện thế U = 48 V. a) Tính điện trở tương đương của toàn mạch; b) Tính cường độ dòng điện mạch chính I; c) Tính cường độ dòng điện I₂ qua R₂ và I₃ qua R₃.',
            given_summary: 'R₁ = 12 Ω; R₂ = 20 Ω; R₃ = 30 Ω; U = 48 V; sơ đồ: R₁ nt (R₂ // R₃).',
            solution_steps: [
              'Bước 1: Tính điện trở tương đương của cụm song song (R₂ // R₃): R₂₃ = (R₂ · R₃) / (R₂ + R₃) = (20 · 30) / (20 + 30) = 600 / 50 = 12 Ω.',
              'Bước 2: Tính điện trở tương đương của toàn mạch: R_tđ = R₁ + R₂₃ = 12 + 12 = 24 Ω.',
              'Bước 3: Tính cường độ dòng điện mạch chính: I = U / R_tđ = 48 / 24 = 2 A. Suy ra I₁ = I = 2 A.',
              'Bước 4: Tính hiệu điện thế hai đầu đoạn song song: U₂₃ = I · R₂₃ = 2 · 12 = 24 V. Do R₂ // R₃ nên U₂ = U₃ = U₂₃ = 24 V.',
              'Bước 5: Tính dòng điện qua từng nhánh: I₂ = U₂ / R₂ = 24 / 20 = 1,2 A; I₃ = U₃ / R₃ = 24 / 30 = 0,8 A. (Kiểm tra lại: I₂ + I₃ = 1,2 + 0,8 = 2,0 A = I, hoàn toàn chính xác).',
            ],
            final_answer: 'a) R_tđ = 24 Ω; b) I = 2 A; c) I₂ = 1,2 A và I₃ = 0,8 A.',
          },
        ],
        simulation: {
          sim_key: 'g9_circuit_series_parallel_lab',
          title: 'Thí nghiệm Lắp ráp mạch điện Nối tiếp và Song song',
          description:
            'Thiết kế các mạng lưới điện trở nối tiếp, song song và hỗn hợp; đo dòng điện và điện áp bằng ampe kế và vôn kế ảo.',
          parameters: { r1: 10, r2: 20, r3: 30, circuit_type: 'mixed', voltage: 24 },
          guide_steps: [
            'Chuyển đổi giữa chế độ mạch nối tiếp và song song để so sánh dòng điện mạch chính.',
            'Lắp ampe kế vào các nhánh rẽ để kiểm chứng định luật dòng điện tại nút mạch I = I₁ + I₂.',
            'Gỡ thử một điện trở ra khỏi mạch song song để thấy các nhánh còn lại vẫn hoạt động bình thường.',
          ],
          physics_insight:
            'Đoạn mạch song song cung cấp các đường dẫn dòng điện độc lập, giảm tổng trở của hệ thống và duy trì điện áp định mức trên từng thiết bị.',
        },
      },
      {
        order_index: 3,
        code: 'G9-CH3-TP3',
        title: 'Chủ đề 3.3: Công suất điện, Điện năng tiêu thụ và Định luật Joule - Lenz',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Làm chủ các công thức tính công suất điện P = U·I = I²R, điện năng tiêu thụ A = P·t, định luật tỏa nhiệt Joule - Lenz Q = I²Rt và tính toán chi phí tiền điện sinh hoạt thực tế.',
        summary_note:
          'Ghi nhớ: 1 kWh = 3 600 000 J (3,6 MJ). Công thức P = U·I đúng cho mọi đoạn mạch; P = I²R = U²/R đúng cho đoạn mạch thuần điện trở. Định luật Joule - Lenz: Q = I²Rt.',
        theory_sections: [
          {
            heading: '1. Công suất điện và Điện năng tiêu thụ',
            content:
              'Công suất điện của một đoạn mạch là thước đo tốc độ tiêu thụ điện năng của đoạn mạch đó, được xác định bằng tích của hiệu điện thế giữa hai đầu đoạn mạch và cường độ dòng điện chạy qua đoạn mạch đó: P = U · I. Với đoạn mạch chỉ chứa điện trở R: P = U · I = I² · R = U² / R. Số vôn và số oát ghi trên mỗi dụng cụ điện (ví dụ bóng đèn 220 V - 75 W) là hiệu điện thế định mức và công suất định mức của dụng cụ đó (chỉ đạt được khi mắc đúng hiệu điện thế định mức). Điện năng tiêu thụ A của đoạn mạch là công của dòng điện: A = P · t = U · I · t.',
            keyPoints: [
              'Công suất: P = U · I = I²R = U² / R (đơn vị W hoặc kW).',
              'Điện năng: A = P · t (nếu P tính bằng W, t tính bằng s thì A tính bằng J; nếu P tính bằng kW, t tính bằng giờ thì A tính bằng kWh).',
              'Quy tắc đổi đơn vị năng lượng điện: 1 kWh = 1 kW × 1 h = 1000 W × 3600 s = 3 600 000 J = 3,6 MJ.',
            ],
            realWorldApplication:
              'Bóng đèn LED 9 W phát ra độ sáng tương đương bóng đèn dây tóc 60 W cũ, giúp tiết kiệm hơn 80% điện năng tiêu thụ chiếu sáng cho gia đình.',
          },
          {
            heading: '2. Định luật Joule - Lenz về tác dụng nhiệt của dòng điện',
            content:
              'Khi dòng điện chạy qua một vật dẫn có điện trở (dây mayso bếp điện, bàn là, ấm nước), điện năng bị chuyển hóa hoàn toàn hoặc một phần thành nhiệt năng làm vật dẫn nóng lên. Hai nhà bác học James Joule (Anh) và Emil Lenz (Nga) độc lập tìm ra định luật: Nhiệt lượng tỏa ra trên một vật dẫn có dòng điện chạy qua tỉ lệ thuận với bình phương cường độ dòng điện, tỉ lệ thuận với điện trở của vật dẫn và thời gian dòng điện chạy qua: Q = I² · R · t.',
            keyPoints: [
              'Hệ thức định luật Joule - Lenz: Q = I² · R · t (với I tính bằng A, R tính bằng Ω, t tính bằng s thì Q tính bằng J).',
              'Trong các thiết bị biến đổi hoàn toàn điện năng thành nhiệt năng (ấm đun, nồi cơm, bàn là): Toàn bộ điện năng tiêu thụ chuyển thành nhiệt lượng: A = Q = I²Rt.',
              'Hiệu suất đun nước: H = (Q_có ích / Q_toàn phần) × 100% = [m · c · (t₂ - t₁)] / (P · t) × 100%.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Công suất điện',
            symbol: 'P',
            si_unit: 'W (Watt)',
            other_units: 'kW, MW',
            measuring_device: 'Oát kế hoặc công tơ điện đo công suất tức thời',
            description: 'Tốc độ tiêu thụ điện năng của mạch điện trong một đơn vị thời gian.',
          },
          {
            name: 'Điện năng tiêu thụ',
            symbol: 'A',
            si_unit: 'J (Joule)',
            other_units: 'kWh (số điện)',
            measuring_device: 'Công tơ điện gia đình',
            description: 'Lượng năng lượng điện mà mạch điện hoặc thiết bị đã tiêu thụ.',
          },
          {
            name: 'Nhiệt lượng tỏa ra',
            symbol: 'Q',
            si_unit: 'J (Joule)',
            other_units: 'cal, kcal',
            measuring_device: 'Nhiệt lượng kế điện trở',
            description: 'Lượng nhiệt năng giải phóng trên điện trở do dòng điện sinh ra.',
          },
        ],
        formulas: [
          {
            name: 'Định luật Joule - Lenz',
            latex_expression: 'Q = I^2 R t',
            plain_expression: 'Q = I^2 * R * t',
            variables: [
              { symbol: 'Q', name: 'Nhiệt lượng tỏa ra', unit: 'J' },
              { symbol: 'I', name: 'Cường độ dòng điện', unit: 'A' },
              { symbol: 'R', name: 'Điện trở', unit: 'Ω' },
              { symbol: 't', name: 'Thời gian dòng điện chạy qua', unit: 's' },
            ],
            derived_formulas: [
              { expression: 'Q = \\frac{U^2}{R} t', description: 'Nhiệt lượng khi biết hiệu điện thế U và điện trở R' },
              { expression: 'A = \\mathcal{P} \\cdot t = U I t', description: 'Điện năng tiêu thụ tổng quát' },
              { expression: 'H = \\frac{m c \\Delta t}{\\mathcal{P} \\cdot t} \\times 100\\%', description: 'Hiệu suất nhiệt của ấm đun điện' },
            ],
            usage_note: 'Khi tính toán chi phí điện năng A = P·t, nên đổi P sang kW và t sang giờ để được đơn vị kWh.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ tính thời gian đun nước và tiền điện của ấm đun',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một ấm điện có ghi 220 V - 1000 W được sử dụng với hiệu điện thế định mức 220 V để đun sôi V = 2 lít nước từ nhiệt độ ban đầu t₁ = 20 °C đến sôi ở t₂ = 100 °C. Biết khối lượng riêng của nước là D = 1000 kg/m³, nhiệt dung riêng của nước là c = 4200 J/(kg·K) và hiệu suất nhiệt của ấm là H = 80%. a) Tính nhiệt lượng có ích cần cung cấp để đun sôi nước; b) Tính thời gian cần thiết để đun sôi ấm nước; c) Nếu mỗi ngày đun sôi 2 ấm nước như vậy, tính số tiền điện phải trả trong 30 ngày (cho giá điện bậc 1 là 2000 đồng/kWh).',
            given_summary: 'U = 220 V; P = 1000 W; V = 2 lít ⇒ m = 2 kg; t₁ = 20 °C; t₂ = 100 °C; c = 4200 J/(kg·K); H = 80% = 0,8; giá điện = 2000 đ/kWh.',
            solution_steps: [
              'Bước 1: Tính nhiệt lượng có ích để làm nóng nước từ 20 °C lên 100 °C: Q_ích = m · c · (t₂ - t₁) = 2 · 4200 · (100 - 20) = 8400 · 80 = 672 000 J.',
              'Bước 2: Tính nhiệt lượng toàn phần (điện năng tiêu thụ A) mà ấm cần cung cấp: Từ H = Q_ích / A ⇒ A = Q_ích / H = 672 000 / 0,8 = 840 000 J.',
              'Bước 3: Tính thời gian đun sôi nước: Từ A = P · t ⇒ t = A / P = 840 000 / 1000 = 840 giây = 14 phút.',
              'Bước 4: Tính điện năng tiêu thụ trong 30 ngày: Mỗi ngày đun 2 ấm nên điện năng tiêu thụ 1 ngày: A_1ngày = 2 · 840 000 J = 1 680 000 J. Điện năng tiêu thụ trong 30 ngày: A_30ngày = 30 · 1 680 000 J = 50 400 000 J. Đổi sang kWh: A = 50 400 000 / 3 600 000 = 14 kWh.',
              'Bước 5: Tính tiền điện: Tiền điện = 14 kWh · 2000 đồng/kWh = 28 000 đồng.',
            ],
            final_answer: 'a) Q_ích = 672 kJ; b) Thời gian t = 14 phút (840 s); c) Tiền điện = 28 000 đồng.',
          },
        ],
        simulation: {
          sim_key: 'g9_joule_heating_lab',
          title: 'Thí nghiệm Khảo sát Tác dụng nhiệt và Định luật Joule - Lenz',
          description:
            'Đo nhiệt lượng tỏa ra trên dây mayso điện trở ngâm trong nhiệt lượng kế nước, quan sát đường gia nhiệt của nước theo I², R và t.',
          parameters: { current: 2.0, resistance: 10, time_seconds: 120, water_mass: 0.2 },
          guide_steps: [
            'Tăng dòng điện I lên gấp đôi và quan sát nhiệt độ nước tăng nhanh gấp 4 lần theo định luật tỉ lệ I².',
            'Kéo dài thời gian đun t để xác nhận quan hệ tỉ lệ bậc nhất giữa nhiệt lượng Q và thời gian.',
            'Kiểm tra định luật bảo toàn năng lượng giữa điện năng A tiêu thụ và nhiệt lượng Q nước hấp thụ.',
          ],
          physics_insight:
            'Hiệu ứng đốt nóng Joule sinh ra do động năng của các electron tự do va chạm liên tục với các nút mạng ion kim loại, chuyển hóa điện năng thành chuyển động nhiệt của phân tử.',
        },
      },
    ],
  },
  {
    order_index: 4,
    code: 'G9-CH4',
    title: 'Chương 4: Điện từ học (Cảm ứng điện từ & Dòng xoay chiều)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK KHTN 9: Hiện tượng cảm ứng điện từ và dòng điện cảm ứng, máy phát điện xoay chiều 1 pha (roto, stato), tác dụng và giá trị hiệu dụng của dòng điện xoay chiều, máy biến áp lý tưởng U₁/U₂ = N₁/N₂ và bài toán giảm hao phí truyền tải điện năng đi xa P_hp = R·P²/U².',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 4: Điện từ học (Cảm ứng điện từ & Dòng xoay chiều)
1. **Hiện tượng cảm ứng điện từ:**
   - **Điều kiện xuất hiện dòng điện cảm ứng:** Dòng điện cảm ứng xuất hiện trong cuộn dây dẫn kín khi và chỉ khi **số đường sức từ xuyên qua tiết diện cuộn dây đó biến thiên** (tăng lên hoặc giảm đi) theo thời gian.
   - **Các cách tạo ra dòng điện cảm ứng:**
     - Đưa nam châm lại gần hoặc ra xa cuộn dây kín.
     - Cho cuộn dây quay tròn trong từ trường của nam châm.
     - Đóng hoặc ngắt mạch điện của nam châm điện đặt gần cuộn dây kín.
   - **Định luật Lenz:** Dòng điện cảm ứng có chiều sao cho từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông sinh ra nó (chống lại nguyên nhân sinh ra nó).
2. **Dòng điện xoay chiều (AC):**
   - **Khái niệm:** Dòng điện xoay chiều là dòng điện có **chiều luân phiên đổi ngược** và cường độ biến thiên tuần hoàn theo thời gian.
   - **Tần số dòng điện ($f$):** Số chu kỳ đổi chiều hoàn chỉnh trong 1 giây (đơn vị Hertz, $\\text{Hz}$). Mạng điện dân dụng Việt Nam có tần số chuẩn $f = 50\\,\\text{Hz}$ (nghĩa là trong 1 giây dòng điện đổi chiều 100 lần, chu kỳ $T = 1/f = 0,02\\,\\text{s}$).
   - **Máy phát điện xoay chiều:** Gồm hai bộ phận chính:
     - **Nam châm:** Tạo ra từ trường.
     - **Cuộn dây:** Nơi xuất hiện dòng điện cảm ứng.
     - Một bộ phận đứng yên gọi là **Stato**, bộ phận quay tròn gọi là **Roto**.
   - **Các tác dụng của dòng xoay chiều:** Tác dụng nhiệt, tác dụng quang, tác dụng từ (lực từ đổi chiều liên tục theo chu kỳ), tác dụng sinh lý.
   - **Giá trị hiệu dụng:** $U = \\frac{U_0}{\\sqrt{2}} \\approx 0,707\\,U_0$; $I = \\frac{I_0}{\\sqrt{2}}$. Vôn kế và ampe kế xoay chiều luôn đo giá trị hiệu dụng của dòng điện.
3. **Máy biến áp (Máy biến thế):**
   - **Cấu tạo:** Gồm hai cuộn dây dẫn có số vòng khác nhau ($N_1$ vòng cuộn sơ cấp, $N_2$ vòng cuộn thứ cấp) quấn trên cùng một lõi thép kỹ thuật điện khép kín gồm nhiều lá thép mỏng ghép cách điện.
   - **Nguyên tắc hoạt động:** Dựa trên hiện tượng cảm ứng điện từ. Dòng xoay chiều ở cuộn sơ cấp tạo ra từ trường biến thiên trong lõi thép, từ trường này xuyên qua cuộn thứ cấp sinh ra dòng điện xoay chiều ở cuộn thứ cấp. (Máy biến áp **hoàn toàn không hoạt động với dòng điện một chiều DC không đổi**!).
   - **Hệ thức máy biến áp lý tưởng:**
     $$\\frac{U_1}{U_2} = \\frac{N_1}{N_2}$$
     - $N_2 > N_1 \\Rightarrow U_2 > U_1$: Máy tăng áp (dùng ở đầu nhà máy điện).
     - $N_2 < N_1 \\Rightarrow U_2 < U_1$: Máy hạ áp (dùng ở trạm biến áp hạ xuống 220 V cho khu dân cư).
4. **Truyền tải điện năng đi xa và Giảm công suất hao phí:**
   - Khi truyền tải điện năng từ nhà máy đến nơi tiêu thụ qua đường dây dẫn có điện trở $R$, một phần điện năng bị hao phí do tỏa nhiệt Joule - Lenz trên đường dây.
   - **Công thức công suất hao phí:**
     $$\\mathcal{P}_{hp} = I^2 R = R \\frac{\\mathcal{P}^2}{U^2}$$
   - **Biện pháp tối ưu nhất để giảm hao phí:** Muốn giảm công suất hao phí tỏa nhiệt trên đường dây, phương án kinh tế và hiệu quả nhất là **TĂNG HIỆU ĐIỆN THẾ $U$** ở hai đầu đường dây truyền tải bằng máy tăng áp. Vì $\\mathcal{P}_{hp}$ tỉ lệ nghịch với $U^2$, nên nếu tăng $U$ lên 10 lần thì hao phí $\\mathcal{P}_{hp}$ giảm đi $10^2 = 100$ lần!`,
    key_takeaways: [
      'Điều kiện xuất hiện dòng điện cảm ứng: Số đường sức từ xuyên qua tiết diện cuộn dây kín phải BIẾN THIÊN (tăng hoặc giảm); nếu số đường sức từ không đổi thì không có dòng điện.',
      'Dòng điện xoay chiều có chiều luân phiên đổi ngược; lưới điện 50 Hz có chu kỳ T = 0,02 s, trong 1 giây đổi chiều đúng 100 lần.',
      'Máy biến áp chỉ hoạt động với dòng điện xoay chiều AC, tuyệt đối không biến đổi được điện áp của dòng điện một chiều DC (pin, ắc quy).',
      'Hệ thức máy biến áp U₁ / U₂ = N₁ / N₂: Muốn tăng áp gấp bao nhiêu lần thì tăng số vòng dây cuộn thứ cấp bấy nhiêu lần.',
      'Công suất hao phí P_hp = R·P² / U²: Tăng hiệu điện thế truyền tải U lên k lần giúp giảm hao phí đường dây đi k² lần.',
    ],
    formula_cheatsheet: [
      {
        name: 'Hệ thức máy biến áp lý tưởng',
        latex: '\\frac{U_1}{U_2} = \\frac{N_1}{N_2} = \\frac{I_2}{I_1}',
        note: 'U₁, U₂: hiệu điện thế cuộn sơ cấp và thứ cấp (V); N₁, N₂: số vòng dây tương ứng.',
      },
      {
        name: 'Công suất hao phí tỏa nhiệt trên đường dây truyền tải',
        latex: '\\mathcal{P}_{hp} = R \\frac{\\mathcal{P}^2}{U^2}',
        note: 'R: tổng điện trở đường dây (Ω); P: công suất điện cần truyền đi (W); U: hiệu điện thế truyền tải (V).',
      },
      {
        name: 'Giá trị hiệu dụng của dòng điện xoay chiều',
        latex: 'U = \\frac{U_0}{\\sqrt{2}}; \\quad I = \\frac{I_0}{\\sqrt{2}}',
        note: 'U₀, I₀: giá trị biên độ cực đại; U, I: giá trị hiệu dụng đo bằng vôn kế/ampe kế xoay chiều.',
      },
      {
        name: 'Tần số quay của máy phát điện',
        latex: 'f = n \\cdot p',
        note: 'n: tốc độ quay của roto (vòng/s); p: số cặp cực từ của nam châm; f: tần số dòng điện (Hz).',
      },
      {
        name: 'Hiệu suất truyền tải điện năng',
        latex: 'H = \\frac{\\mathcal{P} - \\mathcal{P}_{hp}}{\\mathcal{P}} \\times 100\\%',
        note: 'Tỉ lệ phần trăm công suất điện hữu ích đưa tới nơi tiêu thụ.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G9-CH4-TP1',
        title: 'Chủ đề 4.1: Hiện tượng cảm ứng điện từ và Dòng điện cảm ứng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khám phá phát minh vĩ đại của Michael Faraday về hiện tượng cảm ứng điện từ, xác định chính xác điều kiện làm xuất hiện dòng điện cảm ứng và nắm vững định luật Lenz về chiều dòng điện.',
        summary_note:
          'Ghi nhớ: Dòng điện cảm ứng chỉ sinh ra khi số đường sức từ qua tiết diện cuộn dây BIẾN THIÊN. Khi nam châm đứng yên trong cuộn dây, số đường sức từ không đổi nên dòng cảm ứng bằng 0.',
        theory_sections: [
          {
            heading: '1. Điều kiện xuất hiện dòng điện cảm ứng',
            content:
              'Năm 1831, Michael Faraday phát hiện ra rằng: khi đưa một cực của thanh nam châm lại gần một đầu cuộn dây dẫn kín, trong cuộn dây xuất hiện một dòng điện làm kim điện kế bị lệch; khi dừng nam châm lại thì kim điện kế trở về số 0; khi rút nam châm ra xa cuộn dây, kim điện kế lại bị lệch nhưng theo chiều ngược lại. Hiện tượng xuất hiện dòng điện trong cuộn dây dẫn kín khi số đường sức từ xuyên qua tiết diện cuộn dây đó biến thiên được gọi là Hiện tượng cảm ứng điện từ; dòng điện đó gọi là Dòng điện cảm ứng.',
            keyPoints: [
              'Điều kiện: Số đường sức từ xuyên qua tiết diện S của cuộn dây kín phải biến thiên (tăng lên hoặc giảm đi) theo thời gian.',
              'Nếu nam châm và cuộn dây đứng yên tương đối với nhau thì dù từ trường có mạnh đến đâu cũng KHÔNG có dòng điện cảm ứng.',
              'Tốc độ dịch chuyển nam châm càng nhanh thì từ thông biến thiên càng nhanh, dòng điện cảm ứng sinh ra có cường độ càng lớn.',
            ],
            realWorldApplication:
              'Bếp từ gia đình sử dụng cuộn dây phát ra từ trường biến thiên tần số cao xuyên qua đáy nồi bằng inox/sắt từ, sinh ra dòng điện cảm ứng Foucault cực mạnh làm đáy nồi tự nóng lên nấu chín thức ăn.',
          },
          {
            heading: '2. Chiều dòng điện cảm ứng và Định luật Lenz',
            content:
              'Chiều của dòng điện cảm ứng tuân theo Định luật Lenz: Dòng điện cảm ứng xuất hiện trong mạch kín có chiều sao cho từ trường do chính nó sinh ra có tác dụng chống lại sự biến thiên của từ thông ban đầu sinh ra nó. Cụ thể: Khi số đường sức từ ban đầu đang tăng lên (ví dụ cực Bắc nam châm tiến lại gần cuộn dây), cuộn dây sẽ sinh ra dòng điện cảm ứng tạo ra một cực Bắc ở đầu đối diện để ĐẨY nam châm lại (chống lại sự tiến lại gần). Khi nam châm lùi ra xa (từ thông giảm), cuộn dây sinh ra cực Nam để HÚT nam châm lại (chống lại sự rời xa).',
            keyPoints: [
              'Quy tắc ghi nhớ: "Tiến thì đẩy, lùi thì hút" (chống lại chuyển động tương đối của nam châm).',
              'Sử dụng quy tắc nắm bàn tay phải để xác định chiều dòng điện cảm ứng chạy qua các vòng dây khi đã biết tên cực từ sinh ra ở hai đầu cuộn dây.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Từ thông',
            symbol: 'Φ',
            si_unit: 'Wb (Weber)',
            other_units: 'T·m²',
            measuring_device: 'Từ thông kế (Fluxmeter)',
            description: 'Đại lượng đo số đường sức từ xuyên vuông góc qua một diện tích mạch kín.',
          },
          {
            name: 'Suất điện động cảm ứng',
            symbol: 'e_c',
            si_unit: 'V (Volt)',
            other_units: 'mV, μV',
            measuring_device: 'Dao động ký điện tử hoặc vôn kế nhạy',
            description: 'Suất điện động sinh ra trong mạch kín do sự biến thiên của từ thông theo thời gian.',
          },
        ],
        formulas: [
          {
            name: 'Định luật cảm ứng Faraday',
            latex_expression: 'e_c = -\\frac{\\Delta \\Phi}{\\Delta t}',
            plain_expression: 'e_c = - delta_Phi / delta_t',
            variables: [
              { symbol: 'e_c', name: 'Suất điện động cảm ứng', unit: 'V' },
              { symbol: 'ΔΦ', name: 'Độ biến thiên từ thông', unit: 'Wb' },
              { symbol: 'Δt', name: 'Khoảng thời gian biến thiên', unit: 's' },
            ],
            derived_formulas: [
              { expression: 'I_c = \\frac{e_c}{R}', description: 'Cường độ dòng điện cảm ứng trong cuộn dây có điện trở R' },
            ],
            usage_note: 'Dấu trừ trong công thức thể hiện định luật Lenz về chiều chống lại sự biến thiên từ thông.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ xác định chiều dòng điện cảm ứng và lực từ tương tác',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Cho một thanh nam châm thẳng và một cuộn dây dẫn kín được nối với một điện kế nhạy G. Cực Bắc (N) của nam châm đang hướng về phía đầu A của cuộn dây. Hãy giải thích hiện tượng và xác định chiều của dòng điện cảm ứng khi: a) Đẩy nhanh thanh nam châm tiến lại gần đầu A của cuộn dây; b) Giữ nam châm đứng yên hoàn toàn trong lòng cuộn dây; c) Kéo thanh nam châm lùi ra xa cuộn dây.',
            given_summary: 'Cực Bắc (N) nam châm hướng vào đầu A của cuộn dây kín.',
            solution_steps: [
              'Bước 1: Khi đẩy cực Bắc (N) tiến lại gần đầu A: Số đường sức từ xuyên qua cuộn dây tăng lên. Trong cuộn dây xuất hiện dòng điện cảm ứng. Theo định luật Lenz, đầu A của cuộn dây trở thành cực Bắc (N) để tác dụng lực đẩy cản trở chuyển động tiến lại của nam châm.',
              'Bước 2: Khi giữ nam châm đứng yên trong cuộn dây: Số đường sức từ qua cuộn dây không biến đổi (ΔΦ = 0). Dòng điện cảm ứng tắt hẳn, kim điện kế chỉ số 0.',
              'Bước 3: Khi kéo nam châm ra xa đầu A: Số đường sức từ qua cuộn dây giảm đi. Trong cuộn dây xuất hiện dòng điện cảm ứng có chiều ngược lại, làm đầu A trở thành cực Nam (S) để tác dụng lực hút giữ thanh nam châm lại.',
            ],
            final_answer: 'a) Có dòng cảm ứng, đầu A là cực Bắc (N) đẩy nam châm; b) Không có dòng điện (I = 0); c) Có dòng cảm ứng đổi chiều ngược lại, đầu A là cực Nam (S) hút nam châm.',
          },
        ],
        simulation: {
          sim_key: 'g9_induction_faraday_lab',
          title: 'Thí nghiệm Cảm ứng điện từ Faraday',
          description:
            'Di chuyển nam châm thanh vào/ra khỏi cuộn dây có số vòng dây N tùy chỉnh và quan sát sự lệch kim điện kế nhạy.',
          parameters: { magnet_speed: 1.5, turns: 200, magnet_pole: 'N', coil_resistance: 5 },
          guide_steps: [
            'Đẩy nam châm tiến vào cuộn dây với tốc độ khác nhau để thấy tốc độ càng cao kim điện kế lệch càng mạnh.',
            'Đổi từ cực Bắc sang cực Nam và quan sát kim điện kế đổi hướng lệch sang chiều đối diện.',
            'Tăng số vòng dây của cuộn dây lên gấp đôi để chứng minh độ lớn dòng cảm ứng tăng tỉ lệ thuận.',
          ],
          physics_insight:
            'Cảm ứng điện từ là cơ chế biến đổi trực tiếp cơ năng (công di chuyển nam châm) thành điện năng, làm nền tảng cho mọi nhà máy phát điện trên thế giới.',
        },
      },
      {
        order_index: 2,
        code: 'G9-CH4-TP2',
        title: 'Chủ đề 4.2: Dòng điện xoay chiều và Máy phát điện xoay chiều',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Tìm hiểu nguyên tắc hoạt động của máy phát điện xoay chiều 1 pha (roto và stato), đặc trưng sóng hình sin của dòng AC và ý nghĩa của các giá trị hiệu dụng U, I.',
        summary_note:
          'Ghi nhớ: Tần số mạng điện Việt Nam là 50 Hz ⇒ T = 0,02 s (trong 1 s đổi chiều 100 lần). Giá trị hiệu dụng: U = U₀ / √2 ≈ 0,707 U₀. Thiết bị đo AC luôn đo giá trị hiệu dụng.',
        theory_sections: [
          {
            heading: '1. Khái niệm dòng điện xoay chiều và Tác dụng',
            content:
              'Khác với dòng điện một chiều DC phát ra từ pin hay ắc quy luôn có chiều và cường độ không đổi, dòng điện xoay chiều (AC) có chiều luân phiên đổi ngược và cường độ biến thiên hình sin theo thời gian. Dòng điện xoay chiều có 4 tác dụng chính: (1) Tác dụng nhiệt: dòng điện chạy qua dây dẫn làm tỏa nhiệt như dòng một chiều; (2) Tác dụng quang: làm phát sáng bóng đèn sợi đốt, đèn neon, đèn huỳnh quang; (3) Tác dụng từ: hút sắt thép nhưng từ cực của nam châm điện xoay chiều đổi chiều liên tục theo tần số dòng điện; (4) Tác dụng sinh lý: gây co giật cơ và nguy hiểm nếu chạm vào nguồn điện cao thế.',
            keyPoints: [
              'Dòng điện xoay chiều đổi chiều liên tục theo chu kỳ.',
              'Tác dụng từ của dòng điện xoay chiều đổi cực 100 lần trong 1 giây với dòng 50 Hz.',
              'Tác dụng nhiệt không phụ thuộc vào chiều dòng điện (chiều nào dòng điện chạy qua điện trở cũng làm các ion dao động sinh nhiệt).',
            ],
            realWorldApplication:
              'Đèn huỳnh quang nối vào lưới điện 50 Hz thực chất nhấp nháy 100 lần mỗi giây, nhưng do hiện tượng lưu ảnh trên màng lưới của mắt người (khoảng 1/10 giây) nên ta thấy ánh sáng liên tục không chớp giật.',
          },
          {
            heading: '2. Máy phát điện xoay chiều và Giá trị hiệu dụng',
            content:
              'Máy phát điện xoay chiều hoạt động dựa trên hiện tượng cảm ứng điện từ, gồm 2 bộ phận cơ bản: nam châm và cuộn dây dẫn. Có 2 cách tạo ra dòng điện: Cách 1: Khung dây quay trong từ trường của nam châm đứng yên; Cách 2: Nam châm quay trong lòng cuộn dây đứng yên. Bộ phận đứng yên gọi là stato, bộ phận quay tròn gọi là roto. Để đặc trưng cho khả năng sinh công và tỏa nhiệt của dòng xoay chiều tương đương với dòng một chiều, người ta đưa ra khái niệm Giá trị hiệu dụng: U = U₀ / √2 và I = I₀ / √2. Khi nói điện áp sinh hoạt gia đình là 220 V, con số 220 V chính là điện áp hiệu dụng (điện áp đỉnh cực đại là U₀ = 220 · √2 ≈ 311 V).',
            keyPoints: [
              'Tần số của máy phát điện: f = n · p (với n là tốc độ quay tính bằng vòng/s, p là số cặp cực từ).',
              'Nếu tốc độ quay n tính bằng vòng/phút thì f = (n · p) / 60.',
              'Vôn kế và ampe kế xoay chiều có ký hiệu AC (hoặc dấu sóng ~) luôn chỉ giá trị HIỆU DỤNG.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Điện áp hiệu dụng',
            symbol: 'U',
            si_unit: 'V (Volt)',
            other_units: 'kV, mV',
            measuring_device: 'Vôn kế xoay chiều AC',
            description: 'Giá trị tương đương với điện áp một chiều về tác dụng nhiệt sinh ra trên cùng điện trở.',
          },
          {
            name: 'Tần số dòng điện',
            symbol: 'f',
            si_unit: 'Hz (Hertz)',
            other_units: 'kHz, MHz',
            measuring_device: 'Tần số kế điện tử',
            description: 'Số chu kỳ biến thiên hoàn chỉnh của dòng điện xoay chiều trong một giây.',
          },
        ],
        formulas: [
          {
            name: 'Tần số dòng điện máy phát xoay chiều',
            latex_expression: 'f = \\frac{n \\cdot p}{60}',
            plain_expression: 'f = (n * p) / 60',
            variables: [
              { symbol: 'f', name: 'Tần số dòng điện', unit: 'Hz' },
              { symbol: 'n', name: 'Tốc độ quay của roto', unit: 'vòng/phút' },
              { symbol: 'p', name: 'Số cặp cực từ', unit: 'cặp' },
            ],
            derived_formulas: [
              { expression: 'n = \\frac{60 \\cdot f}{p}', description: 'Tính tốc độ quay của roto theo vòng/phút' },
              { expression: 'U = \\frac{U_0}{\\sqrt{2}}', description: 'Hiệu điện thế hiệu dụng từ hiệu điện thế cực đại' },
            ],
            usage_note: 'Nếu n tính bằng vòng/giây thì công thức rút gọn là f = n · p.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ tính tốc độ quay của máy phát điện và giá trị hiệu dụng',
            difficulty: 'Vận dụng',
            problem_statement:
              'a) Một máy phát điện xoay chiều trong nhà máy thủy điện có roto gồm p = 5 cặp cực. Roto phải quay với tốc độ bằng bao nhiêu vòng/phút để tạo ra dòng điện xoay chiều hòa vào lưới điện quốc gia có tần số f = 50 Hz? b) Đặt một điện áp xoay chiều có giá trị cực đại U₀ = 311 V vào hai đầu một bóng đèn sợi đốt ghi 220 V - 100 W. Hỏi bóng đèn sáng như thế nào?',
            given_summary: 'a) p = 5; f = 50 Hz; b) U₀ = 311 V; bóng đèn 220 V - 100 W.',
            solution_steps: [
              'Bước 1: Tính tốc độ quay của roto: Từ công thức f = (n · p) / 60 ⇒ n = (60 · f) / p = (60 · 50) / 5 = 3000 / 5 = 600 vòng/phút.',
              'Bước 2: Tính giá trị hiệu dụng của điện áp đặt vào bóng đèn: U = U₀ / √2 = 311 / 1,414 ≈ 220 V.',
              'Bước 3: Nhận xét độ sáng của đèn: Vì điện áp hiệu dụng thực tế U = 220 V bằng đúng điện áp định mức ghi trên bóng đèn (220 V), nên bóng đèn hoạt động bình thường và đạt đúng công suất định mức 100 W.',
            ],
            final_answer: 'a) Roto phải quay với tốc độ n = 600 vòng/phút; b) Đèn sáng bình thường vì điện áp hiệu dụng bằng đúng 220 V.',
          },
        ],
        simulation: {
          sim_key: 'g9_ac_generator_lab',
          title: 'Mô phỏng Máy phát điện xoay chiều một pha',
          description:
            'Quay cuộn dây trong từ trường nam châm vĩnh cửu, theo dõi đường đồ thị sóng hình sin điện áp xoay chiều theo thời gian thực.',
          parameters: { rpm: 600, magnetic_field: 0.5, turns: 100, area: 0.02 },
          guide_steps: [
            'Điều chỉnh tốc độ quay RPM của roto để quan sát tần số sóng hình sin co giãn trên màn hình hiển thị.',
            'Bật chổi quét và cổ góp để quan sát sự chuyển giao dòng điện ra tải tiêu thụ ngoài.',
            'Quan sát góc quay tương ứng với các thời điểm điện áp bằng 0 và đạt cực đại.',
          ],
          physics_insight:
            'Chuyển động quay đều biến đổi diện tích hiệu dụng đón nhận đường sức từ theo hàm cosin, tạo ra suất điện động biến thiên điều hòa theo thời gian.',
        },
      },
      {
        order_index: 3,
        code: 'G9-CH4-TP3',
        title: 'Chủ đề 4.3: Máy biến áp và Truyền tải điện năng đi xa',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Khám phá cấu tạo và hệ thức máy biến áp U₁/U₂ = N₁/N₂, hiểu sâu sắc bài toán hao phí đường dây truyền tải điện năng P_hp = R·P²/U² và lý do tại sao phải dùng đường dây siêu cao thế 500 kV.',
        summary_note:
          'Ghi nhớ: Máy biến áp chỉ hoạt động với dòng xoay chiều AC. Hệ thức: U₁ / U₂ = N₁ / N₂. Tăng áp khi N₂ > N₁; hạ áp khi N₂ < N₁. Công suất hao phí: P_hp = R·P² / U² (tỉ lệ nghịch với U²).',
        theory_sections: [
          {
            heading: '1. Cấu tạo và Hoạt động của Máy biến áp',
            content:
              'Máy biến áp (máy biến thế) là thiết bị dùng để biến đổi hiệu điện thế của dòng điện xoay chiều mà không làm thay đổi tần số của nó. Máy biến áp gồm hai cuộn dây có số vòng khác nhau: cuộn sơ cấp (N₁ vòng) nối với nguồn điện vào, cuộn thứ cấp (N₂ vòng) nối với tải tiêu thụ lấy điện ra. Hai cuộn dây được quấn trên cùng một lõi thép kỹ thuật điện (ghép bởi các lá thép silic cách điện để triệt tiêu dòng Foucault). Khi đặt điện áp xoay chiều U₁ vào cuộn sơ cấp, từ trường biến thiên trong lõi thép gây ra hiện tượng cảm ứng điện từ sinh ra điện áp xoay chiều U₂ ở cuộn thứ cấp. Tỉ số điện áp bằng đúng tỉ số vòng dây: U₁ / U₂ = N₁ / N₂.',
            keyPoints: [
              'Hệ thức máy biến áp: U₁ / U₂ = N₁ / N₂ = I₂ / I₁ (với máy biến áp lý tưởng bỏ qua hao phí).',
              'Nếu N₂ > N₁ thì U₂ > U₁: Máy tăng áp.',
              'Nếu N₂ < N₁ thì U₂ < U₁: Máy hạ áp.',
              'Máy biến áp KHÔNG THỂ hoạt động với dòng điện một chiều DC (vì dòng một chiều tạo ra từ trường không đổi, từ thông không biến thiên nên không sinh ra cảm ứng điện từ ở cuộn thứ cấp).',
            ],
            realWorldApplication:
              'Củ sạc điện thoại di động là một máy hạ áp điện tử biến đổi điện áp xoay chiều 220 V từ ổ cắm thành điện áp thấp 5 V an toàn để nạp pin cho điện thoại.',
          },
          {
            heading: '2. Truyền tải điện năng đi xa và Giải pháp giảm hao phí',
            content:
              'Đường dây tải điện từ các nhà máy điện (thủy điện Sơn La, Hòa Bình) đến các thành phố dài hàng trăm kilômét có tổng điện trở R khá lớn. Khi truyền tải công suất điện P dưới hiệu điện thế U, cường độ dòng điện trên dây là I = P / U. Công suất hao phí do tỏa nhiệt Joule - Lenz trên đường dây là: P_hp = I² · R = R · (P² / U²). Để giảm công suất hao phí, nếu giảm điện trở R bằng cách tăng tiết diện dây thì dây sẽ quá to nặng, cột điện phải xây đồ sộ vô cùng tốn kém. Giải pháp tối ưu và duy nhất khả thi là TĂNG HIỆU ĐIỆN THẾ U trước khi truyền tải: tăng U lên 10 lần thì hao phí P_hp giảm đi 100 lần!',
            keyPoints: [
              'Công thức hao phí cốt lõi: P_hp = R · (P² / U²).',
              'Tại nhà máy điện: Dùng máy TĂNG ÁP nâng điện áp lên 110 kV, 220 kV, 500 kV để truyền đi xa.',
              'Tại nơi tiêu thụ (thành phố, nhà máy, khu dân cư): Dùng các trạm máy HẠ ÁP hạ dần điện áp xuống 22 kV, rồi xuống 380 V / 220 V để đưa vào sử dụng an toàn.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Số vòng dây cuộn sơ cấp và thứ cấp',
            symbol: 'N₁, N₂',
            si_unit: 'Vòng',
            other_units: 'turns',
            measuring_device: 'Đếm số vòng khi quấn máy',
            description: 'Số vòng dây quấn trên lõi thép xác định tỉ số biến đổi điện áp của máy biến áp.',
          },
          {
            name: 'Công suất hao phí',
            symbol: 'P_hp',
            si_unit: 'W (Watt)',
            other_units: 'kW, MW',
            measuring_device: 'Tính toán qua điện trở dây và công suất truyền tải',
            description: 'Phần công suất điện bị biến thành nhiệt lượng tỏa ra vô ích vào môi trường trên đường dây.',
          },
        ],
        formulas: [
          {
            name: 'Công suất hao phí truyền tải điện',
            latex_expression: '\\mathcal{P}_{hp} = R \\frac{\\mathcal{P}^2}{U^2}',
            plain_expression: 'P_hp = R * (P^2) / (U^2)',
            variables: [
              { symbol: 'P_hp', name: 'Công suất hao phí', unit: 'W' },
              { symbol: 'R', name: 'Tổng điện trở đường dây truyền tải', unit: 'Ω' },
              { symbol: 'P', name: 'Công suất điện cần truyền đi', unit: 'W' },
              { symbol: 'U', name: 'Hiệu điện thế truyền tải', unit: 'V' },
            ],
            derived_formulas: [
              { expression: '\\frac{U_1}{U_2} = \\frac{N_1}{N_2}', description: 'Hệ thức biến đổi điện áp máy biến áp' },
              { expression: 'H = 1 - \\frac{\\mathcal{P}_{hp}}{\\mathcal{P}} = \\frac{\\mathcal{P}_{ích}}{\\mathcal{P}}', description: 'Hiệu suất truyền tải điện' },
            ],
            usage_note: 'Chú ý: Khi đổi kV sang V bắt buộc phải nhân với 1000 trước khi bình phương (ví dụ 500 kV = 500 000 V).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ tính toán máy biến áp và hao phí đường dây truyền tải',
            difficulty: 'Vận dụng cao',
            problem_statement:
              'Người ta cần truyền tải một công suất điện P = 2 MW (2 000 000 W) từ nhà máy điện đến một khu công nghiệp cách xa qua đường dây tải điện có tổng điện trở R = 20 Ω. a) Nếu dùng hiệu điện thế U₁ = 10 kV (10 000 V), hãy tính công suất hao phí P_hp1 do tỏa nhiệt trên đường dây và hiệu suất truyền tải H₁; b) Để giảm công suất hao phí xuống 100 lần, người ta dùng một máy biến áp để tăng hiệu điện thế lên U₂. Hỏi U₂ bằng bao nhiêu? Nếu cuộn sơ cấp của máy biến áp có N₁ = 1000 vòng thì cuộn thứ cấp phải có bao nhiêu vòng N₂?',
            given_summary: 'P = 2 × 10⁶ W; R = 20 Ω; U₁ = 10 000 V; giảm hao phí 100 lần; N₁ = 1000 vòng.',
            solution_steps: [
              'Bước 1: Tính công suất hao phí ở điện áp U₁ = 10 000 V: P_hp1 = R · (P² / U₁²) = 20 · (2 000 000)² / (10 000)² = 20 · (4 × 10¹²) / (10⁸) = 20 · 40 000 = 800 000 W = 800 kW.',
              'Bước 2: Tính hiệu suất truyền tải H₁: H₁ = (P - P_hp1) / P = (2000 - 800) / 2000 = 1200 / 2000 = 60%. (Hao phí tới 40% công suất nhà máy phát ra, cực kỳ lãng phí!).',
              'Bước 3: Xác định hiệu điện thế U₂ để hao phí giảm 100 lần: Do P_hp tỉ lệ nghịch với U², muốn hao phí giảm 100 lần thì hiệu điện thế phải tăng: U₂ / U₁ = √100 = 10 ⇒ U₂ = 10 · U₁ = 10 · 10 kV = 100 kV (100 000 V). Khi đó hao phí chỉ còn P_hp2 = 800 kW / 100 = 8 kW (hiệu suất đạt tới 99,6%).',
              'Bước 4: Tính số vòng dây cuộn thứ cấp N₂: Áp dụng hệ thức máy biến áp: U₁ / U₂ = N₁ / N₂ ⇒ N₂ = N₁ · (U₂ / U₁) = 1000 · (100 000 / 10 000) = 1000 · 10 = 10 000 vòng.',
            ],
            final_answer: 'a) P_hp1 = 800 kW, H₁ = 60%; b) U₂ = 100 kV, số vòng dây cuộn thứ cấp N₂ = 10 000 vòng.',
          },
        ],
        simulation: {
          sim_key: 'g9_transformer_grid_lab',
          title: 'Mô phỏng Máy biến áp và Mạng lưới truyền tải điện năng',
          description:
            'Tùy chỉnh số vòng cuộn sơ cấp/thứ cấp, tăng áp trên đường dây truyền tải và quan sát mức sụt giảm ngoạn mục của hao phí nhiệt năng.',
          parameters: { p_source: 500000, line_resistance: 50, u_input: 500, n1: 200, n2: 4000 },
          guide_steps: [
            'Thay đổi số vòng dây N₂ của cuộn thứ cấp để quan sát điện áp đầu ra U₂ tăng tỉ lệ thuận theo hệ thức U₁/U₂ = N₁/N₂.',
            'Tăng điện áp đường dây truyền tải và theo dõi công tơ hao phí P_hp tụt dốc theo quy luật 1/U².',
            'So sánh năng lượng hữu ích tại trạm phụ tải cuối đường dây giữa hai trường hợp truyền tải điện áp thấp và siêu cao thế.',
          ],
          physics_insight:
            'Công suất hao phí tỉ lệ nghịch với bình phương hiệu điện thế; việc nâng điện áp truyền tải lên hàng trăm kilôvôn là lời giải khoa học duy nhất khả thi cho bài toán truyền tải điện năng quy mô lục địa.',
        },
      },
    ],
  },
];
