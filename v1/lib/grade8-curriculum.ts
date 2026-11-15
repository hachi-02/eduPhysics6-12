import { SeedChapterData } from './grade6-curriculum';

export const GRADE_8_CHAPTERS: SeedChapterData[] = [
  {
    order_index: 1,
    code: 'G8-CH1',
    title: 'Chương 1: Khối lượng riêng và Áp suất',
    description:
      'Tổng hợp chuẩn 3 bộ SGK GDPT 2018 (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều): Định nghĩa khối lượng riêng D = m/V, trọng lượng riêng d = 10D, áp lực và áp suất trên bề mặt p = F/S, áp suất chất lỏng p = d.h, bình thông nhau, máy nén thủy lực, áp suất khí quyển và lực đẩy Archimedes F_A = d.V quyết định điều kiện nổi, chìm của vật.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 1: Khối lượng riêng và Áp suất
1. **Khối lượng riêng ($D$) và Trọng lượng riêng ($d$):**
   - **Khối lượng riêng** là khối lượng của một đơn vị thể tích ($1\\,\\text{m}^3$) chất đó: $D = \\frac{m}{V}$ (Đơn vị SI: $\\text{kg/m}^3$).
   - Quy đổi: $1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$; $1\\,\\text{kg/m}^3 = 0,001\\,\\text{g/cm}^3$.
   - **Trọng lượng riêng** là trọng lượng của một đơn vị thể tích ($1\\,\\text{m}^3$) chất đó: $d = \\frac{P}{V} = 10D$ (Đơn vị: $\\text{N/m}^3$).
2. **Áp lực và Áp suất trên bề mặt:**
   - **Áp lực** ($F$) là lực ép có phương vuông góc với mặt bị ép.
   - **Áp suất** ($p$) là độ lớn của áp lực trên một đơn vị diện tích bị ép: $p = \\frac{F}{S}$ (Đơn vị: $\\text{N/m}^2$ hay $\\text{Pascal - Pa}$; $1\\,\\text{bar} = 10^5\\,\\text{Pa}$; $1\\,\\text{atm} \\approx 10^5\\,\\text{Pa}$).
   - **Cách tăng/giảm áp suất:** Tăng áp suất bằng cách tăng $F$ hoặc giảm $S$ (lưỡi dao mài sắc, đầu đinh nhọn); Giảm áp suất bằng cách giảm $F$ hoặc tăng $S$ (bánh xe xích của máy kéo, ván trượt tuyết).
3. **Áp suất chất lỏng và Áp suất khí quyển:**
   - Chất lỏng gây áp suất theo **mọi phương** lên đáy bình, thành bình và các vật chìm trong lòng nó.
   - Công thức áp suất chất lỏng ở độ sâu $h$: $p = d \\cdot h = \\rho \\cdot g \\cdot h$ (với $h$ là độ sâu tính từ mặt thoáng chất lỏng, đơn vị $\\text{m}$).
   - **Bình thông nhau:** Chứa cùng một chất lỏng đứng yên, mực mặt thoáng ở các nhánh luôn ở **cùng một độ cao**.
   - **Máy nén thủy lực:** $\\frac{F_2}{F_1} = \\frac{S_2}{S_1}$ (Được lợi bao nhiêu lần về lực thì thiệt bấy nhiêu lần về đường đi).
   - **Áp suất khí quyển ($p_0$):** Trái Đất được bao bọc bởi lớp khí quyển dày, gây ra áp suất lên mọi vật trên Trái Đất theo mọi hướng. Thí nghiệm Torricelli đo được $p_0 \\approx 76\\,\\text{cmHg} = 760\\,\\text{mmHg} \\approx 103360\\,\\text{Pa} \\approx 10^5\\,\\text{Pa}$.
4. **Lực đẩy Archimedes và Điều kiện chìm, nổi:**
   - Một vật nhúng vào trong lòng chất lỏng chịu một lực đẩy hướng **thẳng đứng từ dưới lên trên**, gọi là lực đẩy Archimedes: $F_A = d \\cdot V = \\rho \\cdot g \\cdot V$ (trong đó $d$ là trọng lượng riêng của chất lỏng, $V$ là thể tích phần chất lỏng bị vật chiếm chỗ).
   - **Điều kiện chìm, nổi của vật khi thả vào chất lỏng:**
     - $F_A < P$ (hay $d_{\\text{vật}} > d_{\\text{lỏng}}$): Vật **chìm xuống đáy**.
     - $F_A = P$ (hay $d_{\\text{vật}} = d_{\\text{lỏng}}$): Vật **lơ lửng** trong lòng chất lỏng.
     - $F_A > P$ (hay $d_{\\text{vật}} < d_{\\text{lỏng}}$): Vật **nổi lên mặt thoáng**, khi đứng yên trên mặt thoáng thì $F_A = P$ (với $V$ chỉ là phần vật ngập trong nước).`,
    key_takeaways: [
      'Công thức gốc: D = m / V (kg/m³); d = P / V = 10D (N/m³). Lưu ý quy đổi: 1 g/cm³ = 1000 kg/m³.',
      'Áp suất trên bề mặt: p = F / S (Pa hay N/m²). Muốn tăng áp suất thì tăng lực ép F hoặc giảm diện tích tiếp xúc S.',
      'Áp suất chất lỏng phụ thuộc độ sâu h tính từ mặt thoáng: p = d · h. Điểm càng sâu thì áp suất càng lớn, truyền đều theo mọi hướng.',
      'Lực đẩy Archimedes F_A = d_chất lỏng · V_chìm. Lực đẩy bằng đúng trọng lượng khối chất lỏng bị vật chiếm chỗ.',
      'Vật nổi trên mặt thoáng khi d_vật < d_chất lỏng; khi đã nổi cân bằng thì F_A đúng bằng trọng lượng P của toàn bộ vật.',
    ],
    formula_cheatsheet: [
      {
        name: 'Khối lượng riêng và Trọng lượng riêng',
        latex: 'D = \\frac{m}{V}; \\quad d = \\frac{P}{V} = 10 \\cdot D',
        note: 'm: khối lượng (kg); V: thể tích (m³); D: khối lượng riêng (kg/m³); d: trọng lượng riêng (N/m³).',
      },
      {
        name: 'Áp suất trên một bề mặt',
        latex: 'p = \\frac{F}{S} \\quad \\Rightarrow \\quad F = p \\cdot S; \\quad S = \\frac{F}{p}',
        note: 'F: áp lực vuông góc (N); S: diện tích bị ép (m²); p: áp suất (N/m² hay Pa).',
      },
      {
        name: 'Áp suất trong lòng chất lỏng',
        latex: 'p = d \\cdot h = \\rho \\cdot g \\cdot h',
        note: 'h: khoảng cách từ điểm khảo sát đến mặt thoáng chất lỏng (m); d: trọng lượng riêng (N/m³); p: áp suất tại độ sâu h (Pa).',
      },
      {
        name: 'Nguyên lý máy nén thủy lực',
        latex: '\\frac{F_2}{F_1} = \\frac{S_2}{S_1} = \\frac{s_1}{s_2}',
        note: 'F1, F2: lực tác dụng lên piston nhỏ và lớn (N); S1, S2: diện tích 2 piston (m²); s1, s2: quãng đường dịch chuyển (m).',
      },
      {
        name: 'Lực đẩy Archimedes',
        latex: 'F_A = d_{\\text{lỏng}} \\cdot V_{\\text{chìm}} = \\rho_{\\text{lỏng}} \\cdot g \\cdot V_{\\text{chìm}}',
        note: 'V_chìm: thể tích phần vật ngập trong chất lỏng (m³); d_lỏng: trọng lượng riêng của chất lỏng (N/m³).',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G8-CH1-TP1',
        title: 'Chủ đề 1.1: Khối lượng riêng và Trọng lượng riêng',
        textbook_tags: ['Kết nối tri thức Bài 13-14', 'Chân trời sáng tạo Bài 14-15', 'Cánh Diều Bài 13'],
        overview:
          'Nắm vững khái niệm khối lượng riêng D = m/V và trọng lượng riêng d = 10D, quy đổi đơn vị SI chuẩn (kg/m³, g/cm³, N/m³), và phương pháp thực nghiệm đo khối lượng riêng của chất rắn (dùng cân và ống đong/bình tràn) và chất lỏng.',
        summary_note:
          'Nhớ quy đổi: 1 g/cm³ = 1000 kg/m³; D_nước = 1000 kg/m³ = 1 g/cm³; d_nước = 10 000 N/m³; D_nhôm = 2700 kg/m³; D_sắt = 7800 kg/m³; D_chì = 11300 kg/m³.',
        theory_sections: [
          {
            heading: '1. Khái niệm Khối lượng riêng và Đơn vị đo',
            content:
              'Để biết một chất là nặng hay nhẹ hơn chất khác, người ta so sánh khối lượng của một đơn vị thể tích (1 m³ hoặc 1 cm³) của chất đó. Khối lượng riêng của một chất là khối lượng của một đơn vị thể tích chất đó. Ký hiệu là D. Đơn vị hợp pháp trong hệ SI là kilôgam trên mét khối (kg/m³). Ngoài ra người ta còn dùng gam trên centimét khối (g/cm³). Quy tắc đổi: 1 g/cm³ = 1000 kg/m³.',
            keyPoints: [
              'Công thức: D = m / V (D: khối lượng riêng, m: khối lượng, V: thể tích).',
              'Đơn vị SI chuẩn: kg/m³. Đơn vị thực hành: g/cm³ hoặc g/mL.',
              'Mỗi chất nguyên chất có một khối lượng riêng xác định, không phụ thuộc vào kích thước hay hình dạng của mẫu vật.',
            ],
            realWorldApplication:
              'Trong công nghiệp cơ khí và chế tạo máy bay, người ta ưu tiên dùng hợp kim nhôm, sợi carbon hoặc titan vì có khối lượng riêng nhỏ nhưng độ bền cao, giúp giảm tối đa trọng lượng phương tiện.',
          },
          {
            heading: '2. Trọng lượng riêng và Phương pháp đo thực nghiệm',
            content:
              'Trọng lượng riêng của một chất là trọng lượng của một đơn vị thể tích (1 m³) chất đó, ký hiệu là d, đơn vị là Niutơn trên mét khối (N/m³). Mối liên hệ giữa trọng lượng riêng và khối lượng riêng là d = 10D. Để đo khối lượng riêng của một vật rắn không thấm nước: (1) Dùng cân đo khối lượng m; (2) Dùng bình chia độ hoặc bình tràn đo thể tích V (V = V2 - V1); (3) Tính D = m/V.',
            keyPoints: [
              'Công thức: d = P / V = 10 · D (với P = 10 · m là trọng lượng của vật trên Trái Đất).',
              'Đơn vị của trọng lượng riêng là N/m³.',
              'Khi đo vật rắn có hình dạng bất kỳ chìm trong nước: Thể tích vật bằng thể tích lượng nước dâng lên trong bình chia độ.',
            ],
            realWorldApplication:
              'Để kiểm tra chất lượng vàng thật hay giả mạo (như giai thoại Archimedes phát hiện vương miện của nhà vua Hiero II), người thợ kim hoàn đo tỉ trọng và khối lượng riêng của mẫu vật so với khối lượng riêng chuẩn của vàng ròng (19300 kg/m³).',
          },
        ],
        quantities: [
          {
            name: 'Khối lượng riêng',
            symbol: 'D',
            si_unit: 'kg/m³',
            other_units: 'g/cm³, g/mL',
            measuring_device: 'Cân kết hợp ống đong / bình đo tỉ trọng (Picnometer)',
            description: 'Khối lượng của một đơn vị thể tích (1 m³) của một chất.',
          },
          {
            name: 'Trọng lượng riêng',
            symbol: 'd',
            si_unit: 'N/m³',
            other_units: 'kilonewton/m³',
            measuring_device: 'Lực kế kết hợp ống đong',
            description: 'Trọng lượng của một đơn vị thể tích (1 m³) của một chất, liên hệ qua d = 10D.',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính khối lượng riêng',
            latex_expression: 'D = \\frac{m}{V}',
            plain_expression: 'D = m / V',
            variables: [
              { symbol: 'D', name: 'Khối lượng riêng', unit: 'kg/m³' },
              { symbol: 'm', name: 'Khối lượng của vật', unit: 'kg' },
              { symbol: 'V', name: 'Thể tích của vật', unit: 'm³' },
            ],
            derived_formulas: [
              { expression: 'm = D \\cdot V', description: 'Tính khối lượng khi biết khối lượng riêng và thể tích' },
              { expression: 'V = \\frac{m}{D}', description: 'Tính thể tích khi biết khối lượng và khối lượng riêng' },
            ],
            usage_note: 'Bắt buộc quy đổi đồng nhất đơn vị: m theo kg và V theo m³ (1 m³ = 1000 dm³ = 1 000 000 cm³ = 1 000 000 mL).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Xác định khối lượng riêng của khối kim loại',
            difficulty: 'Cơ bản',
            problem_statement:
              'Một khối kim loại đồng chất có thể tích 50 cm³. Khi đặt lên cân điện tử, kim cân chỉ 390 g. Hãy tính khối lượng riêng của khối kim loại đó ra đơn vị g/cm³ và kg/m³. Cho biết đây là kim loại gì?',
            given_summary: 'V = 50 cm³; m = 390 g.',
            solution_steps: [
              'Bước 1: Tính khối lượng riêng D theo đơn vị g/cm³ bằng công thức: D = m / V = 390 / 50 = 7,8 g/cm³.',
              'Bước 2: Quy đổi từ g/cm³ sang đơn vị chuẩn SI kg/m³: D = 7,8 × 1000 = 7800 kg/m³.',
              'Bước 3: Tra bảng khối lượng riêng chuẩn: Kim loại có khối lượng riêng 7800 kg/m³ chính là sắt (hoặc thép).',
            ],
            final_answer: 'D = 7,8 g/cm³ = 7800 kg/m³; khối kim loại làm bằng sắt (thép).',
          },
        ],
        simulation: {
          sim_key: 'g8_density_lab',
          title: 'Phòng Thí Nghiệm Khối Lượng Riêng & Đo Tỉ Trọng Chất Rắn',
          description:
            'Thả các khối vật liệu khác nhau (gỗ, nhôm, sắt, vàng) vào bình chia độ chứa nước để quan sát thể tích dâng lên, đọc giá trị cân điện tử và tự động tính khối lượng riêng.',
          parameters: {
            materialOptions: ['wood', 'aluminum', 'iron', 'gold'],
            defaultMassG: 390,
            defaultVolumeCm3: 50,
          },
          guide_steps: [
            'Chọn vật liệu cần đo (nhôm, sắt, gỗ hoặc vàng).',
            'Kéo thanh trượt điều chỉnh thể tích mẫu vật để xem khối lượng m biến thiên tương ứng.',
            'Thả mẫu vật vào bình chia độ để quan sát mức nước dâng Delta_V và kiểm tra công thức D = m / V.',
          ],
          physics_insight:
            'Đồ thị khối lượng m theo thể tích V là đường thẳng đi qua gốc tọa độ; hệ số góc của đường thẳng chính là giá trị khối lượng riêng D của vật liệu.',
        },
      },
      {
        order_index: 2,
        code: 'G8-CH1-TP2',
        title: 'Chủ đề 1.2: Áp lực và Áp suất trên một bề mặt',
        textbook_tags: ['Kết nối tri thức Bài 15', 'Chân trời sáng tạo Bài 16', 'Cánh Diều Bài 14'],
        overview:
          'Khái niệm áp lực (lực ép vuông góc), công thức tính áp suất p = F/S, đơn vị Pascal (Pa), nguyên lý và các giải pháp tăng, giảm áp suất trong đời sống, cơ học và giao thông vận tải.',
        summary_note:
          'Ghi nhớ: p = F / S. Đơn vị: 1 Pa = 1 N/m². 1 cm² = 0,0001 m² = 10⁻⁴ m². Tăng áp suất: tăng F hoặc giảm S. Giảm áp suất: giảm F hoặc tăng S.',
        theory_sections: [
          {
            heading: '1. Áp lực và Tác dụng của Áp lực',
            content:
              'Áp lực là lực ép có phương vuông góc với mặt bị ép. Ví dụ: Người đứng trên sàn nhà thì trọng lượng của người chính là áp lực ép vuông góc lên mặt sàn; Lực của ngón tay ấn vuông góc vào đầu đinh là áp lực. Tác dụng của áp lực (độ lún sâu vào bề mặt) phụ thuộc vào hai yếu tố: độ lớn của áp lực F và diện tích tiếp xúc bị ép S. Cùng một áp lực F, diện tích bị ép càng nhỏ thì tác dụng lún càng mạnh.',
            keyPoints: [
              'Áp lực luôn có phương vuông góc với mặt tiếp xúc bị ép.',
              'Trọng lực của vật đặt trên mặt phẳng nằm ngang sinh ra áp lực có độ lớn đúng bằng trọng lượng của vật: F = P = 10 · m.',
            ],
            realWorldApplication:
              'Lưỡi kéo, lưỡi dao cạo hoặc mũi kim tiêm được mài rất mỏng, nhọn (diện tích S cực nhỏ) để chỉ cần một áp lực vừa phải đã tạo ra áp suất cực lớn, dễ dàng cắt hoặc đâm xuyên qua vật liệu.',
          },
          {
            heading: '2. Công thức tính Áp suất và Cách biến đổi Áp suất',
            content:
              'Áp suất là độ lớn của áp lực trên một đơn vị diện tích bị ép: p = F / S. Trong hệ SI: lực F đo bằng N, diện tích S đo bằng m², áp suất p có đơn vị là N/m², được đặt tên là Pascal (ký hiệu Pa). 1 Pa = 1 N/m². Để tăng áp suất: Tăng lực F hoặc giảm diện tích S. Để giảm áp suất: Giảm lực F hoặc tăng diện tích tiếp xúc S.',
            keyPoints: [
              'Công thức: p = F / S (Pa).',
              '1 bar = 10⁵ Pa; 1 atm ≈ 1,013 × 10⁵ Pa ≈ 10⁵ Pa.',
              'Xe tăng, máy xúc có trọng lượng hàng chục tấn nhưng di chuyển được trên đất bùn mềm nhờ sử dụng bánh xích có diện tích tiếp xúc S rất lớn, giúp giảm áp suất tác dụng xuống mặt đường.',
            ],
            realWorldApplication:
              'Khi đi trên tuyết hoặc bùn lầy, người ta đeo ván trượt tuyết to bản hoặc đặt các tấm ván rộng dưới chân để tăng diện tích tiếp xúc S, làm giảm áp suất xuống bề mặt, tránh bị lún sâu.',
          },
        ],
        quantities: [
          {
            name: 'Áp lực',
            symbol: 'F',
            si_unit: 'N',
            other_units: 'kN',
            measuring_device: 'Lực kế / Cảm biến lực',
            description: 'Lực ép có phương vuông góc với bề mặt bị ép.',
          },
          {
            name: 'Áp suất',
            symbol: 'p',
            si_unit: 'Pa',
            other_units: 'N/m², bar, atm, mmHg',
            measuring_device: 'Áp kế (Manometer / Barometer)',
            description: 'Độ lớn của áp lực tác dụng vuông góc lên một đơn vị diện tích bị ép.',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính áp suất bề mặt',
            latex_expression: 'p = \\frac{F}{S}',
            plain_expression: 'p = F / S',
            variables: [
              { symbol: 'p', name: 'Áp suất', unit: 'Pa (N/m²)' },
              { symbol: 'F', name: 'Áp lực vuông góc', unit: 'N' },
              { symbol: 'S', name: 'Diện tích tiếp xúc bị ép', unit: 'm²' },
            ],
            derived_formulas: [
              { expression: 'F = p \\cdot S', description: 'Tính áp lực khi biết áp suất và diện tích' },
              { expression: 'S = \\frac{F}{p}', description: 'Tính diện tích bị ép cần thiết' },
            ],
            usage_note: 'Phải đổi đơn vị diện tích sang m²: 1 cm² = 10⁻⁴ m²; 1 dm² = 10⁻² m²; 1 mm² = 10⁻⁶ m².',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: So sánh áp suất của người và xe bánh xích',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một người có khối lượng 60 kg đứng bằng cả hai chân trên sàn nhà, tổng diện tích tiếp xúc của hai bàn chân là 300 cm². Một xe tải có khối lượng 6 tấn có tổng diện tích tiếp xúc của các bánh xe là 2500 cm². Hãy tính và so sánh áp suất tác dụng lên mặt đất của người và xe tải (lấy g = 10 m/s²).',
            given_summary: 'Người: m1 = 60 kg, S1 = 300 cm² = 0,03 m²; Xe: m2 = 6 tấn = 6000 kg, S2 = 2500 cm² = 0,25 m².',
            solution_steps: [
              'Bước 1: Tính áp lực của người lên sàn: F1 = P1 = 10 · m1 = 10 × 60 = 600 N.',
              'Bước 2: Tính áp suất của người: p1 = F1 / S1 = 600 / 0,03 = 20 000 Pa = 20 kPa.',
              'Bước 3: Tính áp lực của xe tải lên sàn: F2 = P2 = 10 · m2 = 10 × 6000 = 60 000 N.',
              'Bước 4: Tính áp suất của xe tải: p2 = F2 / S2 = 60 000 / 0,25 = 240 000 Pa = 240 kPa.',
              'Bước 5: So sánh: Áp suất của xe tải gấp p2 / p1 = 240 / 20 = 12 lần áp suất của người.',
            ],
            final_answer: 'p_người = 20 000 Pa; p_xe = 240 000 Pa; xe tải gây áp suất gấp 12 lần người đứng.',
          },
        ],
        simulation: {
          sim_key: 'g8_pressure_surface_lab',
          title: 'Phòng Thí Nghiệm Áp Suất Bề Mặt & Biến Dạng Lún Khối Cát',
          description:
            'Thay đổi khối lượng vật nén F và diện tích đáy tiếp xúc S để quan sát trực quan độ lún sâu vào lớp đệm xốp hoặc cát, kiểm chứng định lượng tỉ số p = F/S.',
          parameters: {
            minForceN: 10,
            maxForceN: 500,
            defaultForceN: 100,
            minAreaCm2: 10,
            maxAreaCm2: 200,
            defaultAreaCm2: 50,
          },
          guide_steps: [
            'Điều chỉnh thanh trượt lực nén F (hoặc trọng lượng đặt lên bề mặt).',
            'Thay đổi diện tích mặt đáy tiếp xúc S từ nhọn (10 cm²) sang rộng (200 cm²).',
            'Quan sát độ lún của vật mẫu và vạch đo áp suất hiển thị theo thời gian thực.',
          ],
          physics_insight:
            'Độ lún của bề mặt tỉ lệ thuận với áp lực F và tỉ lệ nghịch với diện tích S; khi giảm diện tích S đi 4 lần thì áp suất tăng gấp 4 lần.',
        },
      },
      {
        order_index: 3,
        code: 'G8-CH1-TP3',
        title: 'Chủ đề 1.3: Áp suất chất lỏng, Áp suất khí quyển và Lực đẩy Archimedes',
        textbook_tags: ['Kết nối tri thức Bài 16-17', 'Chân trời sáng tạo Bài 16-17', 'Cánh Diều Bài 15-16'],
        overview:
          'Công thức áp suất chất lỏng p = d.h, bình thông nhau, máy nén thủy lực F2/F1 = S2/S1, thí nghiệm Torricelli đo áp suất khí quyển, lực đẩy Archimedes F_A = d.V và điều kiện nổi, lơ lửng, chìm của vật.',
        summary_note:
          'Nhớ: Áp suất chất lỏng p = d · h (h tính từ mặt thoáng xuống!). Lực đẩy Archimedes: F_A = d_lỏng · V_chìm. Vật chìm khi d_vật > d_lỏng, lơ lửng khi d_vật = d_lỏng, nổi khi d_vật < d_lỏng.',
        theory_sections: [
          {
            heading: '1. Áp suất Chất lỏng và Bình thông nhau',
            content:
              'Do có trọng lượng, chất lỏng gây áp suất theo mọi phương lên đáy bình, thành bình và các vật nằm trong lòng chất lỏng. Công thức tính áp suất chất lỏng tại độ sâu h là: p = d · h = rho · g · h (trong đó d là trọng lượng riêng chất lỏng N/m³, h là độ sâu tính từ mặt thoáng chất lỏng tới điểm xét mét). Trong bình thông nhau chứa cùng một chất lỏng đứng yên, các mặt thoáng ở các nhánh khác nhau luôn ở cùng một độ cao. Ứng dụng trong máy nén thủy lực: tác dụng lực F1 lên piston nhỏ có diện tích S1 thì tạo nên lực nâng F2 trên piston lớn diện tích S2 theo tỉ số: F2 / F1 = S2 / S1.',
            keyPoints: [
              'Áp suất chất lỏng chỉ phụ thuộc vào trọng lượng riêng chất lỏng d và độ sâu h, không phụ thuộc vào hình dạng bình chứa.',
              'Máy nâng thủy lực: F2 = F1 · (S2 / S1). Tiết diện piston lớn gấp bao nhiêu lần thì lực nâng tăng bấy nhiêu lần.',
            ],
            realWorldApplication:
              'Kích thủy lực nâng ô tô tại gara sửa chữa xe, hệ thống phanh dầu đĩa của xe máy và ô tô hoạt động dựa trên nguyên lý truyền áp suất nguyên vẹn của chất lỏng kín (Định luật Pascal).',
          },
          {
            heading: '2. Áp suất Khí quyển, Lực đẩy Archimedes và Điều kiện nổi',
            content:
              'Khí quyển bao quanh Trái Đất cũng có trọng lượng và gây ra áp suất lên mọi vật theo mọi phương, gọi là áp suất khí quyển p0 ≈ 10⁵ Pa (tương đương cột thủy ngân cao 76 cmHg). Khi một vật chìm trong chất lỏng, áp suất chất lỏng ở mặt dưới lớn hơn ở mặt trên, hợp lực của áp suất này tạo ra lực đẩy Archimedes hướng thẳng đứng từ dưới lên trên: F_A = d_lỏng · V_chìm. Điều kiện chìm/nổi: So sánh P của vật và F_A (hoặc d_vật và d_lỏng): d_vật > d_lỏng vật chìm; d_vật = d_lỏng vật lơ lửng; d_vật < d_lỏng vật nổi lên mặt thoáng cho tới khi F_A = P.',
            keyPoints: [
              'Lực đẩy Archimedes: F_A = d_chất lỏng · V_phần chìm (không phụ thuộc vào độ sâu hay hình dạng của vật).',
              'Khi vật nổi cân bằng trên mặt nước: Trọng lượng P của vật bằng đúng lực đẩy F_A = d_chất lỏng · V_ngập.',
              'Thí nghiệm Torricelli chứng minh khí quyển cân bằng với cột thủy ngân cao 760 mm ở mực nước biển.',
            ],
            realWorldApplication:
              'Tàu ngầm lặn xuống hoặc nổi lên bằng cách bơm nước vào hoặc xả nước ra khỏi các khoang chứa đáy tàu, làm thay đổi trọng lượng trung bình P của tàu so với lực đẩy Archimedes F_A.',
          },
        ],
        quantities: [
          {
            name: 'Độ sâu chất lỏng',
            symbol: 'h',
            si_unit: 'm',
            other_units: 'cm, dm',
            measuring_device: 'Thước đo độ sâu / Cảm biến áp suất thủy tĩnh',
            description: 'Khoảng cách thẳng đứng tính từ mặt thoáng chất lỏng đến điểm xét.',
          },
          {
            name: 'Lực đẩy Archimedes',
            symbol: 'F_A',
            si_unit: 'N',
            other_units: 'kN',
            measuring_device: 'Lực kế (đo hiệu trọng lượng ngoài không khí và trong chất lỏng)',
            description: 'Lực nâng hướng thẳng đứng lên trên do chất lưu tác dụng lên vật chiếm chỗ trong nó.',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính lực đẩy Archimedes',
            latex_expression: 'F_A = d \\cdot V = \\rho \\cdot g \\cdot V',
            plain_expression: 'F_A = d * V',
            variables: [
              { symbol: 'F_A', name: 'Lực đẩy Archimedes', unit: 'N' },
              { symbol: 'd', name: 'Trọng lượng riêng của chất lỏng', unit: 'N/m³' },
              { symbol: 'V', name: 'Thể tích phần chất lỏng bị chiếm chỗ', unit: 'm³' },
            ],
            derived_formulas: [
              { expression: 'V = \\frac{F_A}{d}', description: 'Thể tích phần vật chìm trong chất lỏng' },
              { expression: 'd = \\frac{F_A}{V}', description: 'Xác định trọng lượng riêng của chất lỏng' },
            ],
            usage_note: 'Lưu ý V chỉ tính phần thể tích ngập trong chất lỏng, và d phải là trọng lượng riêng của CHẤT LỎNG, không phải của vật!',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Tính lực đẩy Archimedes và độ nổi của khối gỗ',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một khối gỗ hình hộp chữ nhật có thể tích V = 0,002 m³ được thả vào một chậu nước. Biết trọng lượng riêng của gỗ là d_gỗ = 8000 N/m³ và của nước là d_nước = 10 000 N/m³. Hỏi: a) Khối gỗ chìm hay nổi? b) Tính thể tích phần gỗ chìm trong nước khi đã cân bằng?',
            given_summary: 'V = 0,002 m³; d_gỗ = 8000 N/m³; d_nước = 10 000 N/m³.',
            solution_steps: [
              'Bước 1: So sánh trọng lượng riêng: Vì d_gỗ (8000 N/m³) < d_nước (10 000 N/m³) nên khối gỗ sẽ nổi trên mặt nước.',
              'Bước 2: Tính trọng lượng của toàn bộ khối gỗ: P = d_gỗ · V = 8000 × 0,002 = 16 N.',
              'Bước 3: Khi khối gỗ nổi cân bằng trên mặt nước, lực đẩy Archimedes cân bằng với trọng lượng: F_A = P = 16 N.',
              'Bước 4: Tính thể tích phần gỗ chìm trong nước: F_A = d_nước · V_chìm => V_chìm = F_A / d_nước = 16 / 10 000 = 0,0016 m³ (tương đương 80% thể tích khối gỗ).',
            ],
            final_answer: 'Khối gỗ nổi; thể tích phần chìm trong nước là V_chìm = 0,0016 m³.',
          },
        ],
        simulation: {
          sim_key: 'g8_buoyancy_archimedes_lab',
          title: 'Mô Phỏng Áp Suất Thủy Tĩnh & Thí Nghiệm Lực Đẩy Archimedes',
          description:
            'Nhúng vật chìm ở các độ sâu khác nhau trong nước hoặc dầu để đo áp suất p = d.h, đo lực đẩy Archimedes F_A và kiểm chứng điều kiện chìm/nổi/lơ lửng.',
          parameters: {
            fluidDensityKgM3: 1000,
            gravity: 9.8,
            defaultObjectVolumeM3: 0.001,
            defaultObjectDensityKgM3: 800,
          },
          guide_steps: [
            'Thay đổi chất lỏng từ Nước tinh khiết (1000 kg/m³) sang Nước muối (1030 kg/m³) hoặc Dầu hỏa (800 kg/m³).',
            'Kéo vật mẫu xuống độ sâu h khác nhau để kiểm tra số chỉ của áp kế p = d · h.',
            'Thả tay để xem vật chìm xuống đáy, nổi lên mặt nước hay lơ lửng, so sánh P và F_A.',
          ],
          physics_insight:
            'Lực đẩy Archimedes không thay đổi khi vật đã ngập hoàn toàn ở các độ sâu khác nhau; nó chỉ phụ thuộc vào trọng lượng riêng của chất lỏng và thể tích phần vật chiếm chỗ.',
        },
      },
    ],
  },
  {
    order_index: 2,
    code: 'G8-CH2',
    title: 'Chương 2: Tác dụng làm quay của lực (Moment lực)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK GDPT 2018 (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều): Tác dụng làm quay của lực quanh một trục hoặc điểm tựa cố định, cánh tay đòn (d), định nghĩa và công thức tính Moment lực M = F.d, quy tắc cân bằng đòn bẩy F1.d1 = F2.d2, phân loại 3 loại đòn bẩy và ứng dụng trong các cơ cấu kỹ thuật máy nâng.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 2: Tác dụng làm quay của lực (Moment lực)
1. **Tác dụng làm quay của lực và Moment lực:**
   - Khi một lực tác dụng vào vật có **trục quay cố định** mà giá của lực không đi qua trục quay và không song song với trục quay thì lực sẽ làm vật quay.
   - **Cánh tay đòn ($d$):** Là khoảng cách **vuông góc** từ trục quay đến giá của lực (tuyệt đối không nhầm với khoảng cách từ trục quay đến điểm đặt lực!).
   - **Moment lực ($M$):** Là đại lượng đặc trưng cho tác dụng làm quay của lực, được đo bằng tích của độ lớn lực và cánh tay đòn: $M = F \\cdot d$ (Đơn vị: $\\text{N}\\cdot\\text{m}$).
   - Lực càng lớn và cánh tay đòn càng dài thì tác dụng làm quay càng mạnh.
2. **Đòn bẩy và Quy tắc cân bằng của Đòn bẩy:**
   - Đòn bẩy là một thanh cứng có thể quay quanh một điểm tựa cố định gọi là điểm tựa ($O$).
   - Các yếu tố: Điểm tựa $O$, điểm đặt lực tác dụng $O_1$ (cánh tay đòn $d_1$), điểm đặt lực cản của tải $O_2$ (cánh tay đòn $d_2$).
   - **Điều kiện cân bằng của đòn bẩy (Quy tắc Moment):** $F_1 \\cdot d_1 = F_2 \\cdot d_2 \\Leftrightarrow \\frac{F_1}{F_2} = \\frac{d_2}{d_1}$.
   - **Quy tắc vàng của cơ học:** Được lợi bao nhiêu lần về lực ($d_1 > d_2 \\Rightarrow F_1 < F_2$) thì thiệt bấy nhiêu lần về đường đi ($s_1 > s_2$).
3. **Phân loại 3 loại Đòn bẩy trong đời sống:**
   - **Đòn bẩy loại 1:** Điểm tựa $O$ nằm **ở giữa** lực tác dụng $F_1$ và lực cản $F_2$ (Ví dụ: bập bênh, kéo cắt kim loại, xà beng bẩy đá, kìm nhổ đinh). Lợi về lực nếu $d_1 > d_2$.
   - **Đòn bẩy loại 2:** Vật cản (tải trọng) nằm **ở giữa** điểm tựa $O$ và lực tác dụng $F_1$ (Ví dụ: xe cút kít, kẹp làm vỡ hạt dẻ, mở nắp chai bia). Luôn cho **lợi về lực** ($d_1 > d_2 \\Rightarrow F_1 < F_2$).
   - **Đòn bẩy loại 3:** Lực tác dụng $F_1$ nằm **ở giữa** điểm tựa $O$ và vật cản $F_2$ (Ví dụ: đũa ăn cơm, nhíp gắp, cần câu cá, chổi quét nhà, cánh tay người nâng tạ). Luôn **thiệt về lực nhưng lợi về đường đi và tốc độ**.
4. **Ứng dụng Moment và Đòn bẩy trong kỹ thuật:**
   - Các cơ cấu máy cẩu, cần trục tháp luôn có khối bê tông **đối trọng** ở phía sau để tạo moment cân bằng chống lật: $M_{\\text{đối trọng}} \\ge M_{\\text{tải cẩu}}$.
   - Cờ lê tay cầm dài giúp mở bu-lông gỉ sét dễ dàng nhờ tăng cánh tay đòn $d$.`,
    key_takeaways: [
      'Công thức Moment lực: M = F · d (N·m). Trong đó d là khoảng cách VUÔNG GÓC từ trục quay đến giá của lực.',
      'Nếu giá của lực đi qua trục quay hoặc song song với trục quay thì cánh tay đòn d = 0, lực KHÔNG có tác dụng làm quay.',
      'Cân bằng đòn bẩy: F1 · d1 = F2 · d2. Muốn nâng vật nặng với lực F1 nhỏ nhất thì cần chọn cánh tay đòn d1 dài gấp nhiều lần d2.',
      'Đòn bẩy loại 1: Điểm tựa ở giữa (kéo, bập bênh, xà beng). Đòn bẩy loại 2: Tải ở giữa (xe rùa, kẹp hạt). Đòn bẩy loại 3: Lực ở giữa (nhíp, cần câu).',
      'Được lợi bao nhiêu lần về lực thì thiệt hại bấy nhiêu lần về quãng đường di chuyển.',
    ],
    formula_cheatsheet: [
      {
        name: 'Công thức tính Moment lực',
        latex: 'M = F \\cdot d',
        note: 'F: độ lớn lực tác dụng (N); d: cánh tay đòn vuông góc từ trục quay đến giá của lực (m); M: moment lực (N·m).',
      },
      {
        name: 'Điều kiện cân bằng đòn bẩy',
        latex: 'F_1 \\cdot d_1 = F_2 \\cdot d_2 \\quad \\Leftrightarrow \\quad \\frac{F_1}{F_2} = \\frac{d_2}{d_1}',
        note: 'F1, F2: lực tác dụng và lực cản (N); d1, d2: cánh tay đòn tương ứng (m).',
      },
      {
        name: 'Quy tắc tổng quát các moment lực',
        latex: '\\sum M_{\\text{cùng chiều kim đồng hồ}} = \\sum M_{\\text{ngược chiều kim đồng hồ}}',
        note: 'Áp dụng cho mọi vật rắn có trục quay cố định khi đang ở trạng thái cân bằng.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G8-CH2-TP1',
        title: 'Chủ đề 2.1: Tác dụng làm quay của lực và Moment lực',
        textbook_tags: ['Kết nối tri thức Bài 18', 'Chân trời sáng tạo Bài 18', 'Cánh Diều Bài 18'],
        overview:
          'Khái niệm tác dụng làm quay quanh trục cố định, xác định đúng cánh tay đòn d (khoảng cách vuông góc từ trục quay tới giá của lực), định nghĩa và công thức tính Moment lực M = F.d (N.m).',
        summary_note:
          'Ghi nhớ: M = F · d. Đơn vị: N·m. Cánh tay đòn d là đường vuông góc hạ từ trục quay xuống đường thẳng chứa vector lực. Lực đi qua trục quay thì d = 0 và M = 0.',
        theory_sections: [
          {
            heading: '1. Tác dụng làm quay quanh một trục cố định',
            content:
              'Trong đời sống, ta gặp rất nhiều vật quay quanh một trục hoặc một điểm cố định: cánh cửa quay quanh bản lề, vô lăng xe ô tô, bánh lái tàu thuyền, cánh quạt gió. Khi ta đẩy cửa ở mép ngoài (xa bản lề), cửa quay rất dễ dàng; khi đẩy gần bản lề, cửa rất khó quay; nếu đẩy trực diện theo hướng đi thẳng vào bản lề thì cửa hoàn toàn không quay. Hiện tượng này chứng tỏ tác dụng làm quay phụ thuộc vào độ lớn của lực và khoảng cách từ trục quay đến giá của lực.',
            keyPoints: [
              'Lực làm quay vật khi giá của lực không cắt trục quay và không song song với trục quay.',
              'Nếu giá của lực cắt trục quay hoặc song song với trục quay thì moment bằng 0, không có tác dụng làm quay.',
            ],
            realWorldApplication:
              'Tay nắm cửa luôn được bố trí ở mép ngoài cùng của cánh cửa (xa trục bản lề nhất) để tối đa hóa cánh tay đòn d, giúp người mở cửa chỉ cần dùng một lực F rất nhỏ.',
          },
          {
            heading: '2. Cánh tay đòn và Công thức Moment lực',
            content:
              'Cánh tay đòn (ký hiệu d) là khoảng cách vuông góc từ trục quay đến giá (đường thẳng mang vector) của lực. Moment lực là đại lượng đặc trưng cho tác dụng làm quay của lực quanh một trục cố định, được đo bằng tích giữa độ lớn của lực và cánh tay đòn của nó: M = F · d. Trong hệ SI: F tính bằng N, d tính bằng m, moment lực M có đơn vị là Niutơn-mét (N·m).',
            keyPoints: [
              'Công thức: M = F · d (N·m).',
              'Moment lực tỉ lệ thuận với độ lớn lực F và cánh tay đòn d.',
              'Muốn tăng tác dụng làm quay, ta có thể tăng lực F hoặc tăng chiều dài cánh tay đòn d.',
            ],
            realWorldApplication:
              'Để tháo ốc bánh xe tải bị siết chặt, người thợ cơ khí thường lồng thêm một ống sắt dài vào cán của cờ lê (tăng cánh tay đòn d gấp 3-4 lần) để tạo moment xoay lớn mà không tốn nhiều sức.',
          },
        ],
        quantities: [
          {
            name: 'Cánh tay đòn của lực',
            symbol: 'd',
            si_unit: 'm',
            other_units: 'cm, mm',
            measuring_device: 'Thước cuộn / Thước kẹp định hình khoảng cách vuông góc',
            description: 'Khoảng cách vuông góc từ trục quay đến đường chứa vector lực.',
          },
          {
            name: 'Moment lực',
            symbol: 'M',
            si_unit: 'N·m',
            other_units: 'kN·m',
            measuring_device: 'Cờ lê lực điện tử (Torque wrench)',
            description: 'Đại lượng đo lường tác dụng làm quay của lực quanh một trục cố định.',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính Moment lực',
            latex_expression: 'M = F \\cdot d',
            plain_expression: 'M = F * d',
            variables: [
              { symbol: 'M', name: 'Moment lực', unit: 'N·m' },
              { symbol: 'F', name: 'Độ lớn của lực tác dụng', unit: 'N' },
              { symbol: 'd', name: 'Cánh tay đòn của lực', unit: 'm' },
            ],
            derived_formulas: [
              { expression: 'F = \\frac{M}{d}', description: 'Tính lực cần thiết khi biết moment và cánh tay đòn' },
              { expression: 'd = \\frac{M}{F}', description: 'Tính chiều dài cánh tay đòn cần thiết' },
            ],
            usage_note: 'Bắt buộc đổi đơn vị d sang mét (m). Chú ý kiểm tra góc tác dụng của lực vuông góc với cánh tay đòn.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Tính moment lực siết bu-lông',
            difficulty: 'Cơ bản',
            problem_statement:
              'Một người dùng cờ lê dài 25 cm để siết chặt ốc bu-lông bánh xe. Người đó tác dụng một lực F = 80 N có phương vuông góc với thân cờ lê tại đầu mút cán. Tính moment của lực tác dụng làm quay bu-lông.',
            given_summary: 'F = 80 N; d = 25 cm = 0,25 m.',
            solution_steps: [
              'Bước 1: Quy đổi độ dài cánh tay đòn sang đơn vị chuẩn mét: d = 25 cm = 0,25 m.',
              'Bước 2: Vì lực F vuông góc với thân cờ lê nên cánh tay đòn chính bằng chiều dài cán cờ lê: d = 0,25 m.',
              'Bước 3: Áp dụng công thức tính moment lực: M = F · d = 80 × 0,25 = 20 N·m.',
            ],
            final_answer: 'Moment lực siết bu-lông là M = 20 N·m.',
          },
        ],
        simulation: {
          sim_key: 'g8_torque_rotation_lab',
          title: 'Mô Phỏng Tác Dụng Làm Quay & Thước Đo Moment Cờ Lê',
          description:
            'Tác dụng lực ở các vị trí khác nhau trên tay đòn và đổi góc đặt lực để quan sát trực quan cánh tay đòn d hạ vuông góc, tính moment xoay M = F.d và gia tốc góc của đĩa quay.',
          parameters: {
            defaultArmLengthM: 0.3,
            defaultForceN: 50,
            forceAngleDeg: 90,
          },
          guide_steps: [
            'Kéo vị trí đặt lực từ sát trục quay (d nhỏ) ra xa mút cán (d lớn).',
            'Thay đổi góc tác dụng của lực từ 90 độ (vuông góc tối ưu) xuống 30 độ hoặc 0 độ (dọc trục).',
            'Quan sát giá trị cánh tay đòn hình chiếu vuông góc và giá trị Moment hiển thị trên đồng hồ số.',
          ],
          physics_insight:
            'Khi góc tác dụng alpha = 0 (kéo dọc trục), cánh tay đòn d = 0 và moment M = 0; moment đạt giá trị lớn nhất khi lực vuông góc tuyệt đối với tay đòn.',
        },
      },
      {
        order_index: 2,
        code: 'G8-CH2-TP2',
        title: 'Chủ đề 2.2: Đòn bẩy và Phân loại đòn bẩy trong đời sống',
        textbook_tags: ['Kết nối tri thức Bài 19', 'Chân trời sáng tạo Bài 19', 'Cánh Diều Bài 19'],
        overview:
          'Cấu tạo đòn bẩy (điểm tựa O, điểm tác dụng O1, O2), điều kiện cân bằng F1.d1 = F2.d2, quy tắc vàng cơ học, và nhận biết chính xác 3 loại đòn bẩy trong sinh hoạt và tự nhiên.',
        summary_note:
          'Cân bằng: F1 · d1 = F2 · d2. Loại 1: Điểm tựa ở giữa (kéo, bập bênh). Loại 2: Tải ở giữa (xe cút kít, kẹp hạt). Loại 3: Lực ở giữa (nhíp gắp, cánh tay người, cần câu).',
        theory_sections: [
          {
            heading: '1. Cấu tạo Đòn bẩy và Điều kiện Cân bằng',
            content:
              'Đòn bẩy là một thanh cứng có thể quay quanh một trục hoặc một điểm tựa cố định O. Khi sử dụng đòn bẩy: điểm tựa là O; lực tác dụng của người là F1 đặt tại điểm O1 có cánh tay đòn d1; lực cản của vật tải là F2 đặt tại điểm O2 có cánh tay đòn d2. Khi đòn bẩy ở trạng thái cân bằng nằm ngang, tích của lực và cánh tay đòn ở hai phía cân bằng nhau: F1 · d1 = F2 · d2. Nếu chọn d1 > d2 thì lực tác dụng F1 < F2 (ta được lợi về lực).',
            keyPoints: [
              'Điều kiện cân bằng đòn bẩy: F1 · d1 = F2 · d2 hay F1 / F2 = d2 / d1.',
              'Tỉ số lực tỉ lệ nghịch với tỉ số cánh tay đòn.',
              'Được lợi bao nhiêu lần về lực thì thiệt bấy nhiêu lần về quãng đường di chuyển.',
            ],
            realWorldApplication:
              'Dùng xà beng có tay cầm dài để bẩy hòn đá nặng hàng trăm kilôgam: nhờ chọn điểm tựa gần hòn đá (d2 nhỏ) và tay cầm xa điểm tựa (d1 lớn), ta chỉ cần ấn một lực nhỏ bằng trọng lượng cơ thể là bẩy được đá.',
          },
          {
            heading: '2. Phân loại 3 loại Đòn bẩy và Ví dụ Thực tế',
            content:
              'Dựa vào vị trí tương đối giữa điểm tựa O, lực tác dụng F1 và tải trọng F2, đòn bẩy được chia làm 3 loại: Đòn bẩy loại 1: Điểm tựa O nằm ở giữa (ví dụ: cái kéo, bập bênh, kìm, kẹp nhổ đinh); Đòn bẩy loại 2: Vật cản nằm ở giữa điểm tựa và lực tác dụng (ví dụ: xe rùa chở cát, kẹp tách hạt điều, dụng cụ mở nắp chai bia) - loại này luôn cho d1 > d2 nên luôn lợi về lực; Đòn bẩy loại 3: Lực tác dụng nằm ở giữa điểm tựa và tải (ví dụ: cái nhíp, đôi đũa ăn, chổi quét nhà, cần câu cá) - loại này luôn cho d1 < d2 nên thiệt về lực nhưng lợi về đường đi và tốc độ thao tác.',
            keyPoints: [
              'Loại 1: O ở giữa O1 và O2.',
              'Loại 2: O2 (tải) ở giữa O và O1 -> luôn lợi về lực (F1 < F2).',
              'Loại 3: O1 (lực) ở giữa O và O2 -> thiệt về lực nhưng lợi về chuyển động nhanh, chính xác.',
            ],
            realWorldApplication:
              'Cơ bắp tay trước (biceps) của con người bám vào xương cẳng tay ở vị trí nằm giữa khớp khuỷu tay (điểm tựa) và bàn tay cầm tạ: đây là đòn bẩy loại 3, giúp bàn tay có thể vung nhanh và cử động linh hoạt trong không gian.',
          },
        ],
        quantities: [
          {
            name: 'Lực tác dụng của người',
            symbol: 'F_1',
            si_unit: 'N',
            other_units: 'kN, kG',
            measuring_device: 'Lực kế',
            description: 'Lực do người hoặc động cơ sinh ra để vận hành đòn bẩy.',
          },
          {
            name: 'Lực cản (Tải trọng nâng)',
            symbol: 'F_2',
            si_unit: 'N',
            other_units: 'kN',
            measuring_device: 'Lực kế / Cân tải trọng',
            description: 'Trọng lượng của tải hoặc lực cản cần thắng được.',
          },
        ],
        formulas: [
          {
            name: 'Định luật cân bằng đòn bẩy',
            latex_expression: 'F_1 \\cdot d_1 = F_2 \\cdot d_2',
            plain_expression: 'F1 * d1 = F2 * d2',
            variables: [
              { symbol: 'F_1', name: 'Lực tác dụng', unit: 'N' },
              { symbol: 'd_1', name: 'Cánh tay đòn của lực tác dụng', unit: 'm' },
              { symbol: 'F_2', name: 'Tải trọng nâng (lực cản)', unit: 'N' },
              { symbol: 'd_2', name: 'Cánh tay đòn của tải trọng', unit: 'm' },
            ],
            derived_formulas: [
              { expression: 'F_1 = F_2 \\cdot \\frac{d_2}{d_1}', description: 'Tính lực nâng F1 cần thiết' },
              { expression: 'd_1 = d_2 \\cdot \\frac{F_2}{F_1}', description: 'Tính khoảng cách tay đòn d1 cần thiết' },
            ],
            usage_note: 'Hai khoảng cách d1 và d2 phải được đo bằng cùng một đơn vị chiều dài (m hoặc cm).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Dùng xà beng bẩy hòn đá nặng',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một người dùng đòn bẩy loại 1 dài 1,5 m để nâng một hòn đá có khối lượng 120 kg. Điểm tựa được đặt cách hòn đá 30 cm. Lấy g = 10 m/s². Bỏ qua khối lượng của thanh đòn bẩy. Hỏi người đó phải tác dụng một lực tối thiểu bằng bao nhiêu ở đầu thanh còn lại để nâng hòn đá lên?',
            given_summary: 'Chiều dài đòn L = 1,5 m = 150 cm; m = 120 kg => F2 = P = 1200 N; d2 = 30 cm.',
            solution_steps: [
              'Bước 1: Tính cánh tay đòn d1 của lực tác dụng: d1 = L - d2 = 150 - 30 = 120 cm = 1,2 m.',
              'Bước 2: Tính trọng lượng hòn đá (lực cản): F2 = P = 10 · m = 10 × 120 = 1200 N.',
              'Bước 3: Áp dụng điều kiện cân bằng đòn bẩy: F1 · d1 = F2 · d2 => F1 = F2 · (d2 / d1) = 1200 × (30 / 120) = 300 N.',
              'Bước 4: Nhận xét: Nhờ đòn bẩy, người đó chỉ cần dùng lực 300 N (tương đương nâng vật 30 kg) đã nâng được hòn đá 120 kg, lợi 4 lần về lực.',
            ],
            final_answer: 'Lực tác dụng tối thiểu của người là F1 = 300 N.',
          },
        ],
        simulation: {
          sim_key: 'g8_lever_balance_lab',
          title: 'Phòng Thí Nghiệm Đòn Bẩy & Cân Bằng Tải Trọng 3 Loại',
          description:
            'Chuyển đổi linh hoạt giữa 3 loại đòn bẩy, kéo thả quả nặng và dịch chuyển vị trí điểm tựa O để kiểm nghiệm phương trình cân bằng F1.d1 = F2.d2 và hiệu suất lực nâng.',
          parameters: {
            leverType: 1,
            defaultArm1M: 0.8,
            defaultArm2M: 0.2,
            loadWeightN: 200,
          },
          guide_steps: [
            'Chọn loại đòn bẩy (Loại 1, Loại 2 hoặc Loại 3).',
            'Thay đổi vị trí điểm tựa O để thay đổi tỉ số d1 / d2.',
            'Kéo thanh trượt lực F1 để xem đòn bẩy nghiêng sang trái, sang phải hay đạt trạng thái cân bằng thăng bằng.',
          ],
          physics_insight:
            'Muốn được lợi gấp n lần về lực thì cánh tay đòn tác dụng d1 phải dài gấp đúng n lần cánh tay đòn của tải d2, khi đó đầu mút tác dụng phải di chuyển quãng đường gấp n lần.',
        },
      },
      {
        order_index: 3,
        code: 'G8-CH2-TP3',
        title: 'Chủ đề 2.3: Ứng dụng của Moment lực và Đòn bẩy trong kỹ thuật',
        textbook_tags: ['Kết nối tri thức Bài 18-19', 'Chân trời sáng tạo Bài 19', 'Cánh Diều Bài 19'],
        overview:
          'Phân tích ứng dụng thực tiễn của moment và đòn bẩy trong máy móc hiện đại: cần cẩu tháp, xe nâng, cầu bập bênh, cân đòn, kẹp cơ khí, và tính toán điều kiện an toàn chống lật.',
        summary_note:
          'An toàn cần cẩu: Tổng moment giữ (đối trọng) phải luôn lớn hơn hoặc bằng tổng moment lật (tải nâng). M_đối trọng >= M_tải.',
        theory_sections: [
          {
            heading: '1. Nguyên lý Moment chống lật trong Cần cẩu Tháp',
            content:
              'Trong xây dựng nhà cao tầng, cần cẩu tháp có một tay cần vươn dài để cẩu tải trọng nặng P_tải ở khoảng cách d_tải tính từ trục thân tháp. Tải trọng này sinh ra một moment làm lật cần cẩu: M_lật = P_tải · d_tải. Để chống lật, phía đối diện có một tay cần ngắn hơn gắn các khối bê tông đối trọng có trọng lượng P_đt ở khoảng cách d_đt, sinh ra moment giữ: M_giữ = P_đt · d_đt. Để cần trục đứng vững an toàn, bắt buộc: M_giữ ≥ M_lật. Khi cẩu hàng càng ra xa (d_tải lớn), tải trọng tối đa được phép cẩu phải giảm xuống tương ứng.',
            keyPoints: [
              'Quy tắc an toàn chống lật: M_giữ ≥ k · M_lật (với k là hệ số an toàn kỹ thuật).',
              'Tầm với càng xa thì sức nâng an toàn của cần cẩu càng giảm.',
            ],
            realWorldApplication:
              'Các cần cẩu hiện đại đều trang bị cảm biến moment điện tử tự động ngắt động cơ nâng khi phát hiện tích số tải trọng × tầm với vượt quá giới hạn an toàn danh định.',
          },
          {
            heading: '2. Các Dụng cụ Đòn bẩy trong Cơ khí và Đời sống',
            content:
              'Trong đời sống và cơ khí: Kéo cắt kim loại có lưỡi ngắn (d2 nhỏ) và cán rất dài (d1 lớn) để tăng tối đa lực cắt kim loại; trong khi kéo cắt giấy có lưỡi dài (d2 lớn) và cán ngắn (d1 nhỏ) vì cắt giấy chỉ cần lực rất nhỏ nhưng cần đường cắt dài, nhanh. Kìm bấm đinh tán, kìm chết tăng lực kẹp nhờ cơ cấu liên hợp nhiều đòn bẩy nối tiếp. Cân đòn và cân đồng hồ áp dụng chính xác quy tắc cân bằng moment để xác định khối lượng vật mẫu.',
            keyPoints: [
              'Kéo cắt sắt: d1 > d2 (lợi về lực). Kéo cắt vải/giấy: d2 > d1 (lợi về đường cắt).',
              'Cân đòn truyền thống: Khối lượng vật m1 được xác định khi quả cân m2 di chuyển tới vị trí cân bằng: m1 · d1 = m2 · d2.',
            ],
            realWorldApplication:
              'Bàn đạp phanh ô tô liên kết với xi-lanh tổng qua một đòn bẩy loại 2, giúp nhân lực đạp của bàn chân lên gấp 4 đến 5 lần trước khi truyền vào hệ thống dầu thủy lực.',
          },
        ],
        quantities: [
          {
            name: 'Moment chống lật (Moment giữ)',
            symbol: 'M_giữ',
            si_unit: 'N·m',
            other_units: 'kN·m',
            measuring_device: 'Cảm biến moment tải trọng cần trục',
            description: 'Moment do trọng lượng khối đối trọng sinh ra quanh trục lật.',
          },
          {
            name: 'Khối lượng đối trọng',
            symbol: 'm_đt',
            si_unit: 'kg',
            other_units: 'tấn',
            measuring_device: 'Cân bàn công nghiệp',
            description: 'Khối lượng các khối bê tông hoặc gang đúc dùng làm đối trọng thăng bằng.',
          },
        ],
        formulas: [
          {
            name: 'Điều kiện cân bằng chống lật của cần cẩu',
            latex_expression: 'P_{\\text{đt}} \\cdot d_{\\text{đt}} \\ge P_{\\text{tải}} \\cdot d_{\\text{tải}}',
            plain_expression: 'P_dt * d_dt >= P_tai * d_tai',
            variables: [
              { symbol: 'P_{\\text{đt}}', name: 'Trọng lượng đối trọng', unit: 'N' },
              { symbol: 'd_{\\text{đt}}', name: 'Khoảng cách từ trụ tháp đến khối đối trọng', unit: 'm' },
              { symbol: 'P_{\\text{tải}}', name: 'Trọng lượng tải cẩu tối đa', unit: 'N' },
              { symbol: 'd_{\\text{tải}}', name: 'Tầm với cẩu hàng (tính từ tâm tháp)', unit: 'm' },
            ],
            derived_formulas: [
              { expression: 'P_{\\text{tải, max}} = \\frac{P_{\\text{đt}} \\cdot d_{\\text{đt}}}{d_{\\text{tải}}}', description: 'Tải trọng nâng an toàn cực đại ở tầm với d_tải' },
            ],
            usage_note: 'Khi tính toán an toàn thực tế, phải nhân thêm hệ số an toàn k = 1,2 - 1,5 cho kết cấu khung tháp.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Tính tải trọng an toàn của cần cẩu tháp',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một cần trục tháp xây dựng có tay đòn đối trọng dài 12 m treo một khối bê tông đối trọng nặng 6 tấn. Phía tay cần làm việc dài 30 m. Lấy g = 10 m/s². Bỏ qua trọng lượng của hệ giàn thép cần cẩu. Hỏi cần cẩu có thể cẩu một khối vật liệu nặng tối đa bao nhiêu tấn khi móc cẩu ở tầm với cực đại 30 m để cần cẩu không bị lật?',
            given_summary: 'd_đt = 12 m; m_đt = 6 tấn = 6000 kg => P_đt = 60 000 N; d_tải = 30 m.',
            solution_steps: [
              'Bước 1: Tính moment giữ do khối đối trọng tạo ra quanh tâm tháp: M_giữ = P_đt · d_đt = 60 000 × 12 = 720 000 N·m.',
              'Bước 2: Để cần cẩu thăng bằng ở trạng thái giới hạn: M_lật = M_giữ => P_tải · d_tải = 720 000 N·m.',
              'Bước 3: Tính trọng lượng tải cẩu tối đa ở cự ly 30 m: P_tải = 720 000 / 30 = 24 000 N.',
              'Bước 4: Tính khối lượng tải trọng tương ứng: m_tải = P_tải / 10 = 24 000 / 10 = 2400 kg = 2,4 tấn.',
            ],
            final_answer: 'Tải trọng cẩu an toàn tối đa ở tầm với 30 m là 2,4 tấn.',
          },
        ],
        simulation: {
          sim_key: 'g8_crane_mechanisms_lab',
          title: 'Mô Phỏng Cần Cẩu Tháp & Cân Bằng Moment Chống Lật',
          description:
            'Điều khiển xe con cẩu hàng di chuyển ra vào trên tay cần, thay đổi tải trọng và khối lượng đối trọng để theo dõi đồ thị moment cân bằng và cảnh báo lật tháp.',
          parameters: {
            armLengthM: 35,
            counterArmM: 12,
            counterWeightKg: 6000,
            loadWeightKg: 2000,
            loadPositionM: 20,
          },
          guide_steps: [
            'Dịch chuyển xe móc cẩu mang tải trọng từ chân tháp (d = 5 m) ra đầu mút cần (d = 35 m).',
            'Quan sát kim đo mô men lật tăng dần và xem cảnh báo quá tải khi M_lật > M_giữ.',
            'Điều chỉnh tăng đối trọng bê tông phía sau để khôi phục trạng thái thăng bằng ổn định.',
          ],
          physics_insight:
            'Tải trọng cẩu cho phép luôn tỉ lệ nghịch với tầm với cánh tay; muốn cẩu vật siêu nặng, bắt buộc phải móc cẩu ở cự ly sát chân tháp.',
        },
      },
    ],
  },
  {
    order_index: 3,
    code: 'G8-CH3',
    title: 'Chương 3: Điện học (Sự nhiễm điện & Mạch điện)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK GDPT 2018 (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều): Hiện tượng nhiễm điện do cọ xát, hai loại điện tích (dương và âm), tương tác tĩnh điện, dòng điện trong kim loại, nguồn điện, sơ đồ mạch điện, cường độ dòng điện (I), hiệu điện thế (U), quy tắc đo, đoạn mạch nối tiếp, song song và 5 tác dụng của dòng điện.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 3: Điện học (Sự nhiễm điện & Mạch điện)
1. **Sự nhiễm điện do cọ xát và Hai loại điện tích:**
   - Nhiều vật sau khi bị **cọ xát** có khả năng **hút các vật khác** (vụn giấy, sợi bông) hoặc phóng tia lửa điện, ta nói vật đó đã bị **nhiễm điện** (mang điện tích).
   - Có **hai loại điện tích**: Điện tích **dương ($+$)** (như thanh thủy tinh cọ xát vào lụa) và điện tích **âm ($-$)** (như thanh nhựa ebonit/thước nhựa cọ xát vào vải dạ).
   - **Quy tắc tương tác:** Các điện tích **cùng dấu thì đẩy nhau** ($+$ đẩy $+$; $-$ đẩy $-$); các điện tích **khác dấu thì hút nhau** ($+$ hút $-$).
   - **Giải thích sơ lược theo thuyết electron:** Nguyên tử gồm hạt nhân mang điện dương ở giữa và các electron mang điện âm quay xung quanh. Vật nhiễm điện âm là do **nhận thêm electron**; vật nhiễm điện dương là do **mất bớt electron**.
2. **Dòng điện, Nguồn điện và Mạch điện đơn giản:**
   - **Dòng điện** là dòng các hạt mang điện tích dịch chuyển có hướng.
   - **Dòng điện trong kim loại** là dòng các **electron tự do** dịch chuyển có hướng (từ cực âm qua dây dẫn về cực dương).
   - **Nguồn điện:** Có khả năng cung cấp dòng điện để các thiết bị điện hoạt động. Mỗi nguồn điện đều có **hai cực**: cực dương ($+$) và cực âm ($-$) (như pin con thỏ, pin cúc áo, ắc quy).
   - **Chiều dòng điện quy ước:** Chiều từ **cực dương** qua dây dẫn và các thiết bị điện tới **cực âm** của nguồn điện *(Ngược với chiều dịch chuyển của electron tự do trong dây dẫn kim loại!)*.
3. **Cường độ dòng điện ($I$) và Hiệu điện thế ($U$):**
   - **Cường độ dòng điện ($I$):** Đặc trưng cho mức độ mạnh hay yếu của dòng điện. Đo bằng **Ampe kế** (mắc **nối tiếp** vào mạch, chốt $+$ nối về phía cực dương nguồn). Đơn vị SI: **Ampe ($\\text{A}$)**; $1\\,\\text{A} = 1000\\,\\text{mA}$.
   - **Hiệu điện thế ($U$):** Cho biết khả năng sinh ra dòng điện của nguồn điện giữa hai cực. Đo bằng **Vôn kế** (mắc **song song** với hai điểm cần đo, chốt $+$ nối về phía thế cao). Đơn vị SI: **Vôn ($\\text{V}$)**; $1\\,\\text{kV} = 1000\\,\\text{V}$; $1\\,\\text{V} = 1000\\,\\text{mV}$.
4. **Quy tắc đoạn mạch Nối tiếp và Song song:**
   - **Đoạn mạch mắc nối tiếp ($Đ_1$ nối tiếp $Đ_2$):**
     - $I = I_1 = I_2$ (Dòng điện bằng nhau tại mọi điểm).
     - $U = U_1 + U_2$ (Hiệu điện thế tổng bằng tổng các hiệu điện thế thành phần).
   - **Đoạn mạch mắc song song ($Đ_1$ song song $Đ_2$):**
     - $U = U_1 = U_2$ (Hiệu điện thế hai đầu mỗi nhánh bằng nhau và bằng hiệu điện thế toàn mạch).
     - $I = I_1 + I_2$ (Cường độ dòng điện mạch chính bằng tổng cường độ dòng điện các mạch nhánh).
5. **Năm tác dụng chính của dòng điện:**
   - **Tác dụng nhiệt:** Dòng điện chạy qua mọi vật dẫn thông thường đều làm vật nóng lên (bàn là, bếp điện, lò xo nung, cầu chì).
   - **Tác dụng phát sáng:** Làm sáng bóng đèn sợi đốt, đèn huỳnh quang, đèn LED, bút thử điện.
   - **Tác dụng từ:** Dòng điện có khả năng làm quay kim nam châm, hút sắt vụn (nguyên lý nam châm điện, chuông điện, quạt điện).
   - **Tác dụng hóa học:** Hiện tượng mạ điện, điện phân dung dịch đồng sunfat $\\text{CuSO}_4$ để mạ đồng.
   - **Tác dụng sinh lý:** Dòng điện đi qua cơ thể người làm co giật cơ, tim ngừng đập, ngạt thở (nguy hiểm chết người, nhưng được dùng điều trị sốc tim, châm cứu điện y học).`,
    key_takeaways: [
      'Hai loại điện tích: Cùng loại thì ĐẨY nhau, khác loại thì HÚT nhau. Vật nhiễm điện âm nhận thêm electron; nhiễm điện dương mất bớt electron.',
      'Chiều dòng điện quy ước: Từ cực DƯƠNG qua dây dẫn đến cực ÂM (ngược chiều chuyển động của electron tự do trong kim loại).',
      'Ampe kế: Đo cường độ dòng điện (A), mắc NỐI TIẾP. Vôn kế: Đo hiệu điện thế (V), mắc SONG SONG.',
      'Mạch nối tiếp: I = I1 = I2 và U = U1 + U2. Mạch song song: U = U1 = U2 và I = I1 + I2.',
      'Dòng điện có 5 tác dụng: Nhiệt, Phát sáng, Từ, Hóa học và Sinh lý.',
    ],
    formula_cheatsheet: [
      {
        name: 'Cường độ dòng điện cơ bản',
        latex: 'I = \\frac{q}{t}',
        note: 'q: điện lượng dịch chuyển qua tiết diện thẳng (Culông - C); t: thời gian (s); I: cường độ dòng điện (A).',
      },
      {
        name: 'Đoạn mạch nối tiếp',
        latex: 'I = I_1 = I_2; \\quad U = U_1 + U_2',
        note: 'Dòng điện qua các bóng đèn nối tiếp là như nhau; tổng hiệu điện thế bằng tổng các điện áp thành phần.',
      },
      {
        name: 'Đoạn mạch song song',
        latex: 'U = U_1 = U_2; \\quad I = I_1 + I_2',
        note: 'Hiệu điện thế hai đầu mỗi nhánh song song bằng nhau; dòng mạch chính bằng tổng dòng các nhánh rẽ.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G8-CH3-TP1',
        title: 'Chủ đề 3.1: Hiện tượng nhiễm điện do cọ xát và Hai loại điện tích',
        textbook_tags: ['Kết nối tri thức Bài 20', 'Chân trời sáng tạo Bài 20', 'Cánh Diều Bài 20'],
        overview:
          'Khám phá hiện tượng nhiễm điện do cọ xát, quy tắc tương tác giữa hai loại điện tích (dương và âm), giải thích cơ chế chuyển dịch electron vi mô và các hiện tượng tĩnh điện trong khí quyển như sấm sét.',
        summary_note:
          'Ghi nhớ: Cùng dấu thì đẩy nhau, khác dấu thì hút nhau. Nguyên tử trung hòa về điện: tổng điện tích dương của hạt nhân bằng tổng điện tích âm của các electron.',
        theory_sections: [
          {
            heading: '1. Hiện tượng Nhiễm điện do Cọ xát',
            content:
              'Khi cọ xát một thước nhựa vào mảnh vải khô hoặc cọ xát thanh thủy tinh vào lụa rồi đưa lại gần các mẩu giấy vụn, ta thấy thước nhựa hoặc thanh thủy tinh hút các mẩu giấy. Ta nói các vật đó đã bị nhiễm điện hay mang điện tích. Trong đời sống vào mùa đông khô hanh, khi chải tóc bằng lược nhựa ta thấy sợi tóc bị lược hút dựng đứng lên, hoặc khi cởi áo len trong bóng tối có thể nghe tiếng lách tách nhỏ và thấy tia lửa điện li ti.',
            keyPoints: [
              'Vật bị nhiễm điện có khả năng hút các vật nhẹ khác hoặc phóng điện.',
              'Có thể làm một vật nhiễm điện bằng phương pháp cọ xát.',
            ],
            realWorldApplication:
              'Hiện tượng sét trong các cơn giông là sự phóng điện tĩnh điện khổng lồ giữa các đám mây tích điện trái dấu với nhau hoặc giữa đám mây tích điện với mặt đất. Người ta lắp cột thu lôi (kim sét) trên nóc nhà để dẫn luồng sét an toàn xuống lòng đất.',
          },
          {
            heading: '2. Hai loại Điện tích và Thuyết Electron sơ lược',
            content:
              'Có hai loại điện tích: điện tích dương (+) và điện tích âm (-). Hai vật nhiễm điện cùng loại thì đẩy nhau; hai vật nhiễm điện khác loại thì hút nhau. Nguyên tử bình thường trung hòa về điện gồm hạt nhân mang điện dương ở tâm và các electron mang điện âm chuyển động xung quanh. Electron có thể dịch chuyển từ nguyên tử này sang nguyên tử khác, từ vật này sang vật khác. Khi cọ xát, vật nào mất bớt electron sẽ nhiễm điện dương (+); vật nào nhận thêm electron sẽ nhiễm điện âm (-).',
            keyPoints: [
              'Quy tắc tương tác: Cùng dấu ĐẨY nhau, trái dấu HÚT nhau.',
              'Vật nhiễm điện dương: Thiếu hụt electron.',
              'Vật nhiễm điện âm: Thừa electron.',
            ],
            realWorldApplication:
              'Sơn tĩnh điện: Bột sơn được tích điện âm, còn chi tiết kim loại cần sơn được nối đất tích điện dương, lực hút tĩnh điện giúp hạt sơn bám đều tuyệt đối lên bề mặt, không bị bay lãng phí ra môi trường.',
          },
        ],
        quantities: [
          {
            name: 'Điện tích',
            symbol: 'q',
            si_unit: 'C (Culông)',
            other_units: 'μC, nC, pC',
            measuring_device: 'Điện nghiệm (Electrometer) / Tĩnh điện kế',
            description: 'Đại lượng đặc trưng cho lượng điện mà một vật hay hạt mang.',
          },
          {
            name: 'Điện tích nguyên tố của electron',
            symbol: 'e',
            si_unit: 'C',
            other_units: '-1,6 × 10⁻¹⁹ C',
            measuring_device: 'Thí nghiệm giọt dầu Millikan',
            description: 'Độ lớn điện tích nhỏ nhất tồn tại độc lập trong tự nhiên: e ≈ 1,6 × 10⁻¹⁹ C.',
          },
        ],
        formulas: [
          {
            name: 'Độ lớn điện tích theo số hạt electron',
            latex_expression: '|q| = N_e \\cdot e',
            plain_expression: '|q| = Ne * e',
            variables: [
              { symbol: 'q', name: 'Điện tích của vật', unit: 'C' },
              { symbol: 'N_e', name: 'Số hạt electron thừa hoặc thiếu', unit: 'hạt' },
              { symbol: 'e', name: 'Điện tích nguyên tố', unit: '1,6 × 10⁻¹⁹ C' },
            ],
            derived_formulas: [
              { expression: 'N_e = \\frac{|q|}{e}', description: 'Tính số hạt electron bị chuyển dịch' },
            ],
            usage_note: 'Nếu vật nhận thêm electron thì q mang dấu âm; nếu vật mất electron thì q mang dấu dương.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Tính số electron dịch chuyển khi cọ xát thanh nhựa',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Sau khi cọ xát một thanh nhựa vào mảnh vải dạ, thanh nhựa bị nhiễm điện âm và đo được điện tích là q = -3,2 × 10⁻¹¹ C. Cho biết độ lớn điện tích mỗi electron là e = 1,6 × 10⁻¹⁹ C. Hỏi thanh nhựa đã nhận thêm hay mất bớt bao nhiêu electron?',
            given_summary: 'q = -3,2 × 10⁻¹¹ C; e = 1,6 × 10⁻¹⁹ C.',
            solution_steps: [
              'Bước 1: Vì thanh nhựa nhiễm điện âm (q < 0) nên thanh nhựa đã nhận thêm electron từ mảnh vải dạ.',
              'Bước 2: Tính số electron thanh nhựa đã nhận thêm: N_e = |q| / e = (3,2 × 10⁻¹¹) / (1,6 × 10⁻¹⁹) = 2 × 10⁸ hạt = 200 triệu hạt electron.',
            ],
            final_answer: 'Thanh nhựa đã nhận thêm 2 × 10⁸ (200 triệu) electron.',
          },
        ],
        simulation: {
          sim_key: 'g8_electrostatics_lab',
          title: 'Mô Phỏng Tương Tác Tĩnh Điện & Quả Cầu Điện Nghiệm',
          description:
            'Cọ xát thanh thủy tinh hoặc thước nhựa, đưa lại gần các quả cầu bấc treo để quan sát tương tác lực đẩy/hút tĩnh điện và sự truyền electron giữa các vật.',
          parameters: {
            charge1MicroC: 2.5,
            charge2MicroC: -2.5,
            distanceCm: 15,
          },
          guide_steps: [
            'Chọn dấu điện tích của hai vật (cùng dương, cùng âm hoặc trái dấu).',
            'Kéo khoảng cách r giữa hai vật lại gần hoặc ra xa.',
            'Quan sát vector lực tương tác đẩy hoặc hút và số đọc lực trên thang đo cảm ứng.',
          ],
          physics_insight:
            'Hai điện tích cùng dấu luôn đẩy nhau theo đường nối tâm; hai điện tích trái dấu luôn hút nhau; khi khoảng cách giảm một nửa thì lực tĩnh điện tăng gấp 4 lần.',
        },
      },
      {
        order_index: 2,
        code: 'G8-CH3-TP2',
        title: 'Chủ đề 3.2: Dòng điện, Nguồn điện và Mạch điện đơn giản',
        textbook_tags: ['Kết nối tri thức Bài 21-22', 'Chân trời sáng tạo Bài 21-22', 'Cánh Diều Bài 21'],
        overview:
          'Bản chất dòng điện và dòng electron tự do trong kim loại, các loại nguồn điện (pin, ắc quy), quy ước chiều dòng điện, các ký hiệu quy chuẩn trên sơ đồ mạch điện và lắp ráp mạch điện đơn giản.',
        summary_note:
          'Quy ước chiều dòng điện: Từ cực DƯƠNG (+) qua dây dẫn và thiết bị điện về cực ÂM (-) của nguồn điện. Electron tự do chuyển động ngược chiều quy ước.',
        theory_sections: [
          {
            heading: '1. Dòng điện và Dòng điện trong Kim loại',
            content:
              'Dòng điện là dòng các điện tích dịch chuyển có hướng. Dòng điện chỉ tồn tại khi có các hạt mang điện tự do và có lực điện trường tác dụng làm chúng dịch chuyển có hướng. Trong kim loại, các electron lớp ngoài cùng dễ dàng bứt khỏi nguyên tử để trở thành các electron tự do chuyển động hỗn loạn. Khi nối kim loại với nguồn điện, các electron tự do mang điện âm bị cực âm của nguồn đẩy và bị cực dương của nguồn hút, tạo thành dòng electron tự do dịch chuyển có hướng từ cực âm về cực dương.',
            keyPoints: [
              'Dòng điện trong kim loại là dòng chuyển dời có hướng của các electron tự do.',
              'Chiều quy ước của dòng điện: Từ cực DƯƠNG (+) qua dây dẫn đến cực ÂM (-).',
              'Chiều dịch chuyển của electron tự do ngược lại: Từ cực ÂM (-) về cực DƯƠNG (+).',
            ],
            realWorldApplication:
              'Dây dẫn điện trong gia đình được làm bằng đồng hoặc nhôm vì các kim loại này có mật độ electron tự do rất lớn, cho phép dòng điện chạy qua dễ dàng với điện trở nhỏ, giảm thiểu phát nhiệt.',
          },
          {
            heading: '2. Nguồn điện, Sơ đồ Mạch điện và Mạch điện kín',
            content:
              'Nguồn điện có nhiệm vụ duy trì hiệu điện thế giữa hai cực để tạo ra dòng điện liên tục trong mạch. Mạch điện kín gồm có: Nguồn điện (pin, acquy), Dây dẫn điện, Khóa K (công tắc đóng/ngắt mạch), và Các thiết bị tiêu thụ điện (bóng đèn, chuông, quạt). Sơ đồ mạch điện sử dụng các ký hiệu quy ước: Nguồn điện vẽ bằng hai vạch song song (vạch dài mảnh là cực dương, vạch ngắn dày là cực âm); Công tắc K mở/đóng; Bóng đèn vẽ bằng hình tròn có dấu nhân bên trong.',
            keyPoints: [
              'Mạch điện phải là mạch kín thì mới có dòng điện chạy qua.',
              'Ngắn mạch (đoản mạch): Hiện tượng dây dẫn nối tắt trực tiếp hai cực của nguồn điện mà không qua điện trở tải, làm dòng điện tăng vọt gây cháy nổ nguy hiểm.',
            ],
            realWorldApplication:
              'Cầu chì và aptomat (CB - Circuit Breaker) được lắp ở đầu nguồn điện trong mỗi gia đình để tự động ngắt mạch ngay lập tức khi xảy ra sự cố chập điện (ngắn mạch), bảo vệ an toàn tính mạng và tài sản.',
          },
        ],
        quantities: [
          {
            name: 'Thời gian dòng điện chạy qua',
            symbol: 't',
            si_unit: 's (giây)',
            other_units: 'phút, giờ (h)',
            measuring_device: 'Đồng hồ bấm giây',
            description: 'Khoảng thời gian mạch điện đóng và duy trì dòng điện.',
          },
          {
            name: 'Hiệu điện thế danh định của nguồn',
            symbol: 'U_nguồn',
            si_unit: 'V (Vôn)',
            other_units: 'mV, kV',
            measuring_device: 'Vôn kế / Đồng hồ vạn năng DMM',
            description: 'Trị số điện áp định mức ghi trên vỏ pin (ví dụ pin tiểu AA là 1,5 V; ắc quy xe máy là 12 V).',
          },
        ],
        formulas: [
          {
            name: 'Liên hệ chiều dòng điện và chiều chuyển dịch electron',
            latex_expression: '\\vec{v}_{\\text{dòng điện}} = - \\vec{v}_{e}',
            plain_expression: 'v_dong_dien nguoc chieu v_electron',
            variables: [
              { symbol: '\\vec{v}_{\\text{dòng điện}}', name: 'Vector chiều quy ước dòng điện (+ sang -)', unit: 'hướng' },
              { symbol: '\\vec{v}_{e}', name: 'Vector vận tốc trôi của electron (- sang +)', unit: 'm/s' },
            ],
            derived_formulas: [
              { expression: 'I = \\frac{\\Delta q}{\\Delta t}', description: 'Cường độ dòng điện là tốc độ dịch chuyển của điện tích' },
            ],
            usage_note: 'Quy ước chiều dòng điện được các nhà khoa học đặt ra trước khi phát hiện ra hạt electron, nhưng vẫn được sử dụng nhất quán trên toàn thế giới.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Phân tích hoạt động của mạch điện đèn pin',
            difficulty: 'Cơ bản',
            problem_statement:
              'Một đèn pin cầm tay sử dụng 2 viên pin 1,5 V mắc nối tiếp nhau. Khi công tắc đóng, bóng đèn sáng. Hãy vẽ chiều dòng điện chạy trong mạch và cho biết chiều chuyển động của các electron tự do qua dây tóc bóng đèn.',
            given_summary: '2 pin 1,5 V nối tiếp => U = 3 V; mạch kín công tắc đóng.',
            solution_steps: [
              'Bước 1: Xác định cực của bộ nguồn: Cực dương ở đầu cúc lồi của viên pin trên cùng, cực âm ở đáy lò xo của viên pin dưới.',
              'Bước 2: Xác định chiều dòng điện quy ước: Khi công tắc đóng, dòng điện chạy ra từ cực dương của bộ pin, đi qua công tắc, qua dây tóc bóng đèn rồi quay về cực âm của bộ pin.',
              'Bước 3: Xác định chiều chuyển động của electron tự do: Các electron tự do mang điện tích âm nên bị cực âm đẩy, di chuyển qua dây tóc bóng đèn từ phía nối cực âm sang phía nối cực dương (ngược chiều dòng điện quy ước).',
            ],
            final_answer: 'Dòng điện đi từ cực dương qua bóng đèn về cực âm; electron đi ngược lại từ cực âm qua đèn về cực dương.',
          },
        ],
        simulation: {
          sim_key: 'g8_circuit_builder_lab',
          title: 'Phòng Thí Nghiệm Lắp Ráp Mạch Điện Kín & Đèn Chiếu Sáng',
          description:
            'Kéo thả các linh kiện pin, khóa K, bóng đèn, điện trở và dây nối vào bảng mạch để thiết lập mạch điện kín, đóng ngắt công tắc và xem chuyển động mô phỏng của electron.',
          parameters: {
            batteryVoltageV: 6,
            bulbPowerW: 3,
            switchClosed: true,
          },
          guide_steps: [
            'Kéo pin và bóng đèn nối với nhau bằng các đoạn dây dẫn.',
            'Bấm vào công tắc khóa K để chuyển đổi giữa trạng thái ĐÓNG mạch (đèn sáng) và HỞ mạch (đèn tắt).',
            'Bật tùy chọn Hiển thị Chiều Dòng Điện để quan sát hạt electron chuyển động màu vàng ngược chiều mũi tên dòng điện.',
          ],
          physics_insight:
            'Chỉ khi mạch tạo thành một vòng khép kín liên tục và có nguồn điện cung cấp năng lượng thì các electron tự do mới chuyển động có hướng thành dòng điện.',
        },
      },
      {
        order_index: 3,
        code: 'G8-CH3-TP3',
        title: 'Chủ đề 3.3: Cường độ dòng điện, Hiệu điện thế và Tác dụng của dòng điện',
        textbook_tags: ['Kết nối tri thức Bài 23-24', 'Chân trời sáng tạo Bài 23-24', 'Cánh Diều Bài 22-23'],
        overview:
          'Định nghĩa và đơn vị đo I (A) và U (V), quy tắc mắc ampe kế và vôn kế, tính chất dòng điện và điện áp trong mạch nối tiếp, mạch song song, cùng 5 tác dụng quan trọng của dòng điện trong đời sống.',
        summary_note:
          'Ampe kế: NỐI TIẾP. Vôn kế: SONG SONG. Mạch nối tiếp: I = I1 = I2, U = U1 + U2. Mạch song song: U = U1 = U2, I = I1 + I2. Năm tác dụng: Nhiệt, Sáng, Từ, Hóa, Sinh lý.',
        theory_sections: [
          {
            heading: '1. Cường độ Dòng điện và Hiệu điện thế',
            content:
              'Cường độ dòng điện (ký hiệu I) cho biết mức độ mạnh hay yếu của dòng điện. Đơn vị là Ampe (A), milivôn (mA) với 1 A = 1000 mA. Thiết bị đo là Ampe kế, mắc nối tiếp với thiết bị cần đo, dòng điện phải đi vào chốt dương (+) và đi ra chốt âm (-) của ampe kế. Hiệu điện thế (ký hiệu U) giữa hai cực của nguồn điện hoặc hai đầu thiết bị điện cho biết khả năng sinh ra dòng điện. Đơn vị là Vôn (V). Thiết bị đo là Vôn kế, mắc song song với hai điểm cần đo hiệu điện thế.',
            keyPoints: [
              'Ampe kế: Điện trở rất nhỏ, bắt buộc mắc NỐI TIẾP. Tuyệt đối không mắc trực tiếp hai chốt ampe kế vào hai cực nguồn điện (gây đoản mạch cháy đồng hồ!).',
              'Vôn kế: Điện trở rất lớn, bắt buộc mắc SONG SONG.',
            ],
            realWorldApplication:
              'Đồng hồ vạn năng hiện số (DMM - Digital Multimeter) là dụng cụ quen thuộc của thợ điện tử, cho phép chuyển thang đo linh hoạt để vừa đo cường độ dòng điện vừa đo điện áp một chiều (DC) và xoay chiều (AC).',
          },
          {
            heading: '2. Đoạn mạch Nối tiếp, Song song và Các tác dụng của Dòng điện',
            content:
              'Trong đoạn mạch nối tiếp: I = I1 = I2 (cường độ dòng điện bằng nhau tại mọi điểm); U = U1 + U2. Nếu một đèn bị đứt dây tóc, toàn bộ mạch sẽ bị hở và đèn còn lại tắt. Trong đoạn mạch song song: U = U1 = U2 (hiệu điện thế hai đầu mỗi nhánh bằng nhau); I = I1 + I2. Nếu một đèn tắt thì nhánh còn lại vẫn hoạt động độc lập bình thường. Dòng điện có 5 tác dụng: (1) Tác dụng nhiệt (bàn là, nồi cơm); (2) Tác dụng phát sáng (đèn LED, đèn sợi đốt); (3) Tác dụng từ (nam châm điện hút sắt); (4) Tác dụng hóa học (mạ kim loại); (5) Tác dụng sinh lý (châm cứu, sốc tim, điện giật).',
            keyPoints: [
              'Các thiết bị điện trong gia đình luôn được mắc SONG SONG để dùng chung hiệu điện thế chuẩn 220 V và bật/tắt độc lập.',
              'Mạch nối tiếp: U chia đều; Mạch song song: I phân nhánh.',
            ],
            realWorldApplication:
              'Mạng lưới điện sinh hoạt gia đình 220 V nối các ổ cắm, bóng đèn, quạt điện song song với nhau; nhờ đó khi tắt điều hòa thì tivi và tủ lạnh vẫn hoạt động bình thường.',
          },
        ],
        quantities: [
          {
            name: 'Cường độ dòng điện',
            symbol: 'I',
            si_unit: 'A (Ampe)',
            other_units: 'mA, kA, μA',
            measuring_device: 'Ampe kế (Ammeter)',
            description: 'Đại lượng đặc trưng cho độ mạnh yếu của dòng điện, lượng điện tích qua tiết diện dây trong 1 giây.',
          },
          {
            name: 'Hiệu điện thế (Điện áp)',
            symbol: 'U',
            si_unit: 'V (Vôn)',
            other_units: 'mV, kV',
            measuring_device: 'Vôn kế (Voltmeter)',
            description: 'Chênh lệch điện thế giữa hai điểm trong điện trường, tạo lực đẩy hạt mang điện dịch chuyển.',
          },
        ],
        formulas: [
          {
            name: 'Công thức quan hệ U và I trong mạch nối tiếp & song song',
            latex_expression: 'I_{\\text{mạch}} = I_1 = I_2 \\quad (\\text{nối tiếp}); \\quad U_{\\text{mạch}} = U_1 = U_2 \\quad (\\text{song song})',
            plain_expression: 'Noi tiep: I = I1 = I2, U = U1 + U2. Song song: U = U1 = U2, I = I1 + I2',
            variables: [
              { symbol: 'I', name: 'Cường độ dòng điện mạch chính', unit: 'A' },
              { symbol: 'U', name: 'Hiệu điện thế toàn mạch', unit: 'V' },
              { symbol: 'I_1, I_2', name: 'Dòng điện qua linh kiện 1 và 2', unit: 'A' },
              { symbol: 'U_1, U_2', name: 'Hiệu điện thế hai đầu linh kiện 1 và 2', unit: 'V' },
            ],
            derived_formulas: [
              { expression: 'U = U_1 + U_2', description: 'Hiệu điện thế toàn mạch trong đoạn mạch nối tiếp' },
              { expression: 'I = I_1 + I_2', description: 'Cường độ dòng mạch chính trong đoạn mạch song song' },
            ],
            usage_note: 'Áp dụng cho mọi đoạn mạch gồm hai hoặc nhiều thiết bị tiêu thụ điện ghép nối tiếp hoặc song song.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Tính dòng điện và điện áp trong mạch gồm 2 đèn',
            difficulty: 'Vận dụng',
            problem_statement:
              'Cho mạch điện gồm nguồn điện pin U = 9 V nối với hai bóng đèn Đ1 và Đ2. a) Nếu hai đèn mắc nối tiếp và đo được hiệu điện thế hai đầu đèn Đ1 là U1 = 3,5 V, hãy tính hiệu điện thế U2 hai đầu đèn Đ2. Biết dòng điện qua đèn Đ1 là 0,4 A, tính dòng điện mạch chính. b) Nếu hai đèn mắc song song vào nguồn 9 V đó và ampe kế đo dòng qua Đ1 là 0,6 A, dòng mạch chính là 1,4 A, tính hiệu điện thế hai đầu mỗi đèn và dòng điện qua đèn Đ2.',
            given_summary: 'U = 9 V. TH nối tiếp: U1 = 3,5 V, I1 = 0,4 A. TH song song: I1 = 0,6 A, I = 1,4 A.',
            solution_steps: [
              'Bước 1 (Trường hợp a - Mắc nối tiếp):',
              '  - Áp dụng tính chất mạch nối tiếp: U = U1 + U2 => U2 = U - U1 = 9 - 3,5 = 5,5 V.',
              '  - Dòng điện mạch nối tiếp bằng nhau tại mọi điểm: I = I1 = I2 = 0,4 A.',
              'Bước 2 (Trường hợp b - Mắc song song):',
              '  - Áp dụng tính chất mạch song song: U1 = U2 = U = 9 V (hai đầu mỗi đèn đều có điện áp bằng điện áp nguồn 9 V).',
              '  - Dòng điện mạch chính bằng tổng dòng nhánh: I = I1 + I2 => I2 = I - I1 = 1,4 - 0,6 = 0,8 A.',
            ],
            final_answer: 'a) Nối tiếp: U2 = 5,5 V và I = 0,4 A. b) Song song: U1 = U2 = 9 V và I2 = 0,8 A.',
          },
        ],
        simulation: {
          sim_key: 'g8_current_voltage_measure_lab',
          title: 'Phòng Thí Nghiệm Đo Cường Độ Dòng Điện & Hiệu Điện Thế',
          description:
            'Tự tay gắn Ampe kế (nối tiếp) và Vôn kế (song song) vào các nhánh của mạch điện 2 bóng đèn để đo đạc và kiểm chứng các định luật mạch nối tiếp và song song.',
          parameters: {
            circuitTopology: 'series',
            sourceVoltageV: 9,
            resistance1Ohm: 10,
            resistance2Ohm: 15,
          },
          guide_steps: [
            'Chuyển đổi kiểu mạch giữa Mắc Nối Tiếp và Mắc Song Song.',
            'Cầm đầu que đo vôn kế đặt vào hai đầu đèn 1 và đèn 2 để đọc giá trị điện áp U1, U2.',
            'Quan sát chỉ số ampe kế A1, A2 và kiểm tra hệ thức I = I1 + I2 hoặc U = U1 + U2.',
          ],
          physics_insight:
            'Trong mạch nối tiếp dòng điện là duy nhất chạy qua tuần tự từng tải; trong mạch song song hiệu điện thế đặt vào mỗi tải luôn bằng đúng hiệu điện thế của nguồn.',
        },
      },
    ],
  },
  {
    order_index: 4,
    code: 'G8-CH4',
    title: 'Chương 4: Nhiệt học (Năng lượng nhiệt & Truyền nhiệt)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK GDPT 2018 (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều): Năng lượng nhiệt và chuyển động nhiệt phân tử, nội năng và 2 cách làm biến đổi nội năng, ba hình thức truyền nhiệt (dẫn nhiệt, đối lưu, bức xạ nhiệt), sự nở vì nhiệt của chất rắn, lỏng, khí cùng các ứng dụng thực tế băng kép và khe co giãn công trình.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 4: Nhiệt học (Năng lượng nhiệt & Truyền nhiệt)
1. **Năng lượng nhiệt và Nội năng của vật:**
   - Các chất được cấu tạo từ các **phân tử, nguyên tử** chuyển động hỗn loạn không ngừng gọi là **chuyển động nhiệt**.
   - Nhiệt độ của vật càng cao thì các phân tử chuyển động **càng nhanh** và động năng phân tử càng lớn.
   - **Năng lượng nhiệt:** Là năng lượng mà vật có được do chuyển động nhiệt hỗn loạn của các phân tử cấu tạo nên vật.
   - **Nội năng ($U$):** Là tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật.
   - **Hai cách làm biến đổi nội năng:**
     1. **Thực hiện công:** Ví dụ cọ xát miếng đồng kim loại xuống sàn xi măng, nén khí trong xilanh (cơ năng chuyển hóa thành nội năng).
     2. **Truyền nhiệt:** Cho vật tiếp xúc với vật có nhiệt độ cao hơn (thả miếng đồng vào cốc nước sôi), không có sự chuyển hóa cơ năng thành nội năng, mà chỉ có sự truyền nội năng từ vật có nhiệt độ cao sang vật có nhiệt độ thấp hơn.
     - **Nhiệt lượng ($Q$):** Là phần nội năng mà vật nhận thêm được hay mất bớt đi trong quá trình truyền nhiệt (Đơn vị: $\\text{Joule - J}$ hay $\\text{calo - cal}$; $1\\,\\text{cal} \\approx 4,186\\,\\text{J}$).
2. **Ba hình thức truyền nhiệt trong tự nhiên:**
   - **Dẫn nhiệt:** Là sự truyền nhiệt năng từ hạt này sang hạt khác khi có tiếp xúc trực tiếp. Là hình thức truyền nhiệt chủ yếu của **chất rắn**. Kim loại dẫn nhiệt tốt nhất (bạc, đồng, nhôm, sắt); gỗ, len, xốp, không khí, nước dẫn nhiệt rất kém (chất cách nhiệt).
   - **Đối lưu:** Là sự truyền nhiệt bằng các **dòng chất lỏng hoặc chất khí** dịch chuyển (dòng nóng nhẹ nổi lên, dòng lạnh nặng chìm xuống). Là hình thức truyền nhiệt chủ yếu của **chất lưu (chất lỏng và chất khí)**. Không xảy ra trong chân không và chất rắn.
   - **Bức xạ nhiệt:** Là sự truyền nhiệt bằng các **tia nhiệt đi thẳng** (sóng điện từ hồng ngoại). Có thể truyền được qua môi trường trong suốt và **truyền được ngay cả trong chân không** (như năng lượng Mặt Trời truyền xuống Trái Đất qua vũ trụ chân không). Vật có bề mặt **sẫm màu, gồ ghề** hấp thụ và bức xạ nhiệt tốt hơn bề mặt **sáng màu, nhẵn bóng**.
3. **Sự nở vì nhiệt của các chất:**
   - **Chất rắn:** Nở ra khi nóng lên, co lại khi lạnh đi. Các chất rắn khác nhau nở vì nhiệt khác nhau (Nhôm nở nhiều hơn đồng, đồng nở nhiều hơn sắt thép).
   - **Chất lỏng:** Nở ra khi nóng lên, co lại khi lạnh đi. Các chất lỏng khác nhau nở vì nhiệt khác nhau. Nước nở dị thường: ở nhiệt độ từ $0^\\circ\\text{C}$ đến $4^\\circ\\text{C}$, nước co lại chứ không nở ra; ở $4^\\circ\\text{C}$ nước có khối lượng riêng lớn nhất ($1000\\,\\text{kg/m}^3$). Nhờ đó vào mùa đông ở xứ lạnh, lớp băng nhẹ nổi trên mặt còn đáy hồ luôn duy trì $4^\\circ\\text{C}$ giúp sinh vật thủy sinh sống sót.
   - **Chất khí:** Nở ra khi nóng lên, co lại khi lạnh đi. **Các chất khí khác nhau nở vì nhiệt GIỐNG NHAU**.
   - **So sánh độ nở:** Chất khí nở vì nhiệt **nhiều hơn** chất lỏng; chất lỏng nở vì nhiệt **nhiều hơn** chất rắn.
4. **Ứng dụng sự nở vì nhiệt:**
   - **Băng kép (Rơ-le nhiệt):** Gồm hai thanh kim loại có độ giãn nở khác nhau (nhôm và đồng, hoặc đồng và thép) tán chặt vào nhau. Khi bị đốt nóng hoặc làm lạnh, do dãn nở khác nhau nên băng kép **bị uốn cong về phía thanh nở ít hơn**. Dùng trong rơ-le nhiệt tự ngắt điện ở bàn là, nồi cơm, ấm đun nước.
   - **Khe co giãn:** Trên đường ray xe lửa, mặt cầu bê tông hoặc đường ống dẫn dầu dài luôn để lại các khe hở nhỏ (khe co giãn) để khi thời tiết nắng nóng, các thanh ray giãn nở tự do, không bị kích ép làm cong vênh phá hủy công trình.`,
    key_takeaways: [
      'Nhiệt độ càng cao thì các phân tử chuyển động càng nhanh. Hai cách làm thay đổi nội năng: Thực hiện công và Truyền nhiệt.',
      'Dẫn nhiệt: Chủ yếu ở chất rắn (kim loại dẫn tốt nhất). Đối lưu: Chủ yếu ở chất lỏng và chất khí. Bức xạ nhiệt: Truyền được cả trong chân không.',
      'Chất khí nở vì nhiệt nhiều nhất, chất rắn ít nhất. Các chất khí khác nhau nở vì nhiệt GIỐNG NHAU; các chất rắn khác nhau nở KHÁC NHAU.',
      'Băng kép khi bị nung nóng luôn cong về phía thanh kim loại dãn nở ÍT HƠN, dùng làm rơ-le nhiệt tự động ngắt mạch.',
      'Nước nở dị thường: có thể tích nhỏ nhất và khối lượng riêng lớn nhất ở 4°C.',
    ],
    formula_cheatsheet: [
      {
        name: 'Độ nở dài của vật rắn',
        latex: '\\Delta l = l_0 \\cdot \\alpha \\cdot \\Delta t',
        note: 'l0: chiều dài ban đầu (m); alpha: hệ số nở dài (1/K); Delta t: độ tăng nhiệt độ (°C hoặc K); Delta l: độ dài nở thêm (m).',
      },
      {
        name: 'Độ nở thể tích của chất lỏng / khí',
        latex: '\\Delta V = V_0 \\cdot \\beta \\cdot \\Delta t',
        note: 'V0: thể tích ban đầu (m³); beta: hệ số nở khối (1/K); Delta V: thể tích nở thêm (m³). Với chất rắn đẳng hướng beta ≈ 3.alpha.',
      },
      {
        name: 'Phương trình cân bằng nhiệt cơ bản',
        latex: 'Q_{\\text{tỏa}} = Q_{\\text{thu}}',
        note: 'Nhiệt lượng do vật nóng tỏa ra bằng đúng nhiệt lượng do vật lạnh thu vào trong hệ kín cô lập không trao đổi nhiệt với môi trường.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G8-CH4-TP1',
        title: 'Chủ đề 4.1: Năng lượng nhiệt và Nội năng của vật',
        textbook_tags: ['Kết nối tri thức Bài 25', 'Chân trời sáng tạo Bài 25', 'Cánh Diều Bài 24'],
        overview:
          'Mô hình hạt cấu tạo vật chất và chuyển động nhiệt vi mô, định nghĩa năng lượng nhiệt, nội năng của vật và phân biệt rạch ròi 2 cách làm biến đổi nội năng (thực hiện công và truyền nhiệt).',
        summary_note:
          'Ghi nhớ: Nhiệt độ đo mức độ chuyển động nhanh chậm của phân tử. Thực hiện công: có sự chuyển hóa cơ năng sang nội năng. Truyền nhiệt: chỉ có sự truyền nội năng giữa hai vật chênh lệch nhiệt độ.',
        theory_sections: [
          {
            heading: '1. Cấu tạo chất và Chuyển động nhiệt của Phân tử',
            content:
              'Mọi vật chất quanh ta đều được cấu tạo từ các hạt vô cùng nhỏ bé là nguyên tử và phân tử. Giữa các phân tử có khoảng cách và chúng chuyển động hỗn loạn không ngừng về mọi hướng gọi là chuyển động nhiệt. Khi nhiệt độ của vật càng cao, các phân tử chuyển động càng nhanh. Do chuyển động nên các phân tử có động năng; tổng động năng chuyển động nhiệt của toàn bộ các phân tử cấu tạo nên vật được gọi là năng lượng nhiệt của vật.',
            keyPoints: [
              'Nhiệt độ của vật càng cao thì các phân tử chuyển động càng nhanh và năng lượng nhiệt của vật càng lớn.',
              'Mọi vật thể ở nhiệt độ bất kỳ (trên độ không tuyệt đối -273,15°C) đều có năng lượng nhiệt vì các phân tử luôn chuyển động.',
            ],
            realWorldApplication:
              'Hiện tượng khuếch tán: Nhỏ một giọt mực vào cốc nước nóng thì mực tan nhanh hơn rất nhiều so với trong cốc nước đá, do các phân tử nước nóng chuyển động với vận tốc lớn hơn va đập làm giọt mực phân tán nhanh.',
          },
          {
            heading: '2. Khái niệm Nội năng và Hai cách làm biến đổi Nội năng',
            content:
              'Nội năng của một vật là tổng động năng của các phân tử cấu tạo nên vật do chuyển động nhiệt và thế năng tương tác giữa các phân tử ấy. Nội năng phụ thuộc vào nhiệt độ và thể tích của vật. Có hai cách làm thay đổi nội năng: (1) Thực hiện công: Ngoại lực tác dụng làm dịch chuyển vật hoặc nén giãn thể tích (ví dụ dùng tay chà xát đồng xu xuống bàn làm đồng xu nóng lên, bơm xe đạp làm ống bơm nóng lên); (2) Truyền nhiệt: Không có ngoại lực sinh công, nội năng tự truyền từ phần có nhiệt độ cao sang phần có nhiệt độ thấp hơn khi tiếp xúc (ví dụ thả thìa kim loại vào cốc nước nóng).',
            keyPoints: [
              'Nhiệt lượng Q là phần nội năng tăng thêm hoặc mất đi trong quá trình truyền nhiệt (không dùng từ "nhiệt lượng của vật").',
              'Đơn vị đo nhiệt lượng và nội năng là Joule (J) hoặc calo (1 cal ≈ 4,186 J).',
            ],
            realWorldApplication:
              'Thời tiền sử, con người phát minh ra cách tạo lửa bằng cách cọ xát mạnh hai thanh gỗ khô vào nhau: công cơ học của bàn tay chuyển hóa thành nội năng làm nhiệt độ điểm cọ xát tăng vọt đến nhiệt độ bốc cháy của mạt gỗ khô.',
          },
        ],
        quantities: [
          {
            name: 'Nhiệt độ Celsius',
            symbol: 't',
            si_unit: '°C (Độ bách phân)',
            other_units: 'K (Kelvin), °F (Fahrenheit)',
            measuring_device: 'Nhiệt kế thủy ngân / Nhiệt kế điện tử hồng ngoại',
            description: 'Đại lượng đo mức độ nóng lạnh của vật thể, phản ánh động năng trung bình của phân tử.',
          },
          {
            name: 'Nhiệt lượng trao đổi',
            symbol: 'Q',
            si_unit: 'J (Joule)',
            other_units: 'kJ, cal, kcal (1 cal ≈ 4,186 J)',
            measuring_device: 'Nhiệt lượng kế (Calorimeter)',
            description: 'Phần nội năng mà vật nhận thêm hoặc mất bớt đi trong quá trình truyền nhiệt.',
          },
        ],
        formulas: [
          {
            name: 'Quy đổi đơn vị năng lượng nhiệt giữa Calo và Joule',
            latex_expression: '1\\,\\text{cal} \\approx 4,186\\,\\text{J}; \\quad 1\\,\\text{kcal} = 1000\\,\\text{cal} \\approx 4186\\,\\text{J}',
            plain_expression: '1 cal = 4.186 J; 1 kcal = 4186 J',
            variables: [
              { symbol: 'Q_{\\text{cal}}', name: 'Năng lượng tính bằng calo', unit: 'cal' },
              { symbol: 'Q_{\\text{J}}', name: 'Năng lượng tính bằng Joule', unit: 'J' },
            ],
            derived_formulas: [
              { expression: 'Q_{\\text{J}} = Q_{\\text{cal}} \\times 4,186', description: 'Đổi từ đơn vị calo sang Joule' },
              { expression: 'Q_{\\text{cal}} = \\frac{Q_{\\text{J}}}{4,186}', description: 'Đổi từ đơn vị Joule sang calo' },
            ],
            usage_note: 'Calo thường dùng trong dinh dưỡng thực phẩm và hóa nhiệt, trong khi Joule là đơn vị chuẩn đo lường SI của vật lý.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Phân biệt thực hiện công và truyền nhiệt',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Trong các hiện tượng sau đây, hiện tượng nào làm biến đổi nội năng bằng cách thực hiện công, hiện tượng nào bằng cách truyền nhiệt? a) Đun nước trong ấm trên bếp gas đang cháy; b) Dùng búa đập liên tiếp nhiều nhát vào miếng chì làm miếng chì dẹp ra và nóng lên; c) Cọ xát hai bàn tay vào nhau vào mùa đông để tay ấm lên; d) Nhúng miếng sắt nung đỏ vào xô nước lạnh.',
            given_summary: '4 hiện tượng nhiệt học đời sống thường gặp.',
            solution_steps: [
              'Bước 1: Xét trường hợp a (Đun nước trên bếp gas): Nhiệt năng từ ngọn lửa bếp gas truyền sang ấm nước do chênh lệch nhiệt độ, không có lực cơ học tác dụng di chuyển thể tích => Đây là quá trình TRUYỀN NHIỆT.',
              'Bước 2: Xét trường hợp b (Dùng búa đập vào miếng chì): Lực tác dụng của nhát búa làm biến dạng miếng chì sinh công cơ học làm chì nóng lên => Đây là quá trình THỰC HIỆN CÔNG.',
              'Bước 3: Xét trường hợp c (Cọ xát hai bàn tay): Cơ bắp sinh công thắng lực ma sát trượt giữa hai lòng bàn tay, cơ năng chuyển hóa thành nội năng => Đây là quá trình THỰC HIỆN CÔNG.',
              'Bước 4: Xét trường hợp d (Nhúng sắt nung đỏ vào nước): Nhiệt độ miếng sắt cao hơn nhiều nhiệt độ nước nên nội năng truyền trực tiếp từ sắt sang nước => Đây là quá trình TRUYỀN NHIỆT.',
            ],
            final_answer: 'Thực hiện công: b và c; Truyền nhiệt: a và d.',
          },
        ],
        simulation: {
          sim_key: 'g8_thermal_motion_lab',
          title: 'Mô Phỏng Chuyển Động Nhiệt Phân Tử & Biến Đổi Nội Năng',
          description:
            'Tăng giảm nhiệt độ để quan sát trực tiếp tốc độ chuyển động hỗn loạn của các quả cầu phân tử, nén pit-tông để thực hiện công và kiểm tra nhiệt độ bình tăng vọt.',
          parameters: {
            particleCount: 50,
            temperatureKelvin: 300,
            pistonCompressionRatio: 1.0,
          },
          guide_steps: [
            'Tăng nhiệt độ từ 100 K lên 600 K để quan sát các hạt phân tử va đập với thành bình với tần số và tốc độ cao hơn.',
            'Kéo nén pittông xuống để sinh công nén thể tích khí, quan sát nhiệt kế và áp kế tăng vọt tương ứng.',
            'Bật tùy chọn Hiển thị Động năng để xem biểu đồ phân bố vận tốc hạt Maxwell.',
          ],
          physics_insight:
            'Nội năng tỉ lệ thuận với nhiệt độ tuyệt đối của hệ; khi thực hiện công nén khí, công cơ học bên ngoài chuyển hóa trực tiếp thành động năng vi mô của các phân tử.',
        },
      },
      {
        order_index: 2,
        code: 'G8-CH4-TP2',
        title: 'Chủ đề 4.2: Các hình thức truyền nhiệt (Dẫn nhiệt, Đối lưu, Bức xạ)',
        textbook_tags: ['Kết nối tri thức Bài 26', 'Chân trời sáng tạo Bài 26', 'Cánh Diều Bài 25'],
        overview:
          'Phân biệt cơ chế và điều kiện diễn ra của 3 hình thức truyền nhiệt: dẫn nhiệt (chất rắn), đối lưu (chất lưu lỏng, khí), bức xạ nhiệt (kể cả chân không), và ứng dụng trong phích giữ nhiệt, trang phục, nhà ở.',
        summary_note:
          'Chất rắn: Dẫn nhiệt (kim loại tốt nhất). Chất lỏng & khí: Đối lưu (dòng đối lưu). Chân không & không gian: Bức xạ nhiệt (tia nhiệt đi thẳng). Mặt sẫm màu hấp thụ bức xạ tốt nhất.',
        theory_sections: [
          {
            heading: '1. Dẫn nhiệt và Đối lưu',
            content:
              'Dẫn nhiệt là hình thức truyền nhiệt từ phần này sang phần khác của cùng một vật hoặc từ vật này sang vật khác khi có tiếp xúc trực tiếp. Kim loại dẫn nhiệt tốt nhất; chất lỏng và chất khí dẫn nhiệt kém; chân không hoàn toàn không dẫn nhiệt. Đối lưu là hình thức truyền nhiệt bằng các dòng chất lỏng hoặc chất khí chuyển động. Khi đun sôi một ấm nước, lớp nước ở đáy hấp thụ nhiệt nóng lên, nở ra, khối lượng riêng giảm nên nhẹ hơn và nổi lên trên; lớp nước lạnh ở trên nặng hơn chìm xuống đáy, tạo thành dòng đối lưu tuần hoàn khắp ấm nước.',
            keyPoints: [
              'Dẫn nhiệt là hình thức truyền nhiệt chủ yếu của chất rắn.',
              'Đối lưu là hình thức truyền nhiệt chủ yếu của chất lỏng và chất khí; trong chân không và chất rắn không thể có đối lưu.',
            ],
            realWorldApplication:
              'Máy điều hòa không khí làm mát luôn được lắp ở vị trí trên cao gần trần nhà để luồng không khí lạnh nặng chìm xuống dưới, tạo dòng đối lưu làm mát đều khắp cả căn phòng.',
          },
          {
            heading: '2. Bức xạ Nhiệt và Cấu tạo Phích Giữ Nhiệt',
            content:
              'Bức xạ nhiệt là hình thức truyền nhiệt bằng các tia nhiệt (bức xạ điện từ hồng ngoại) đi thẳng trong không gian. Bức xạ nhiệt có thể truyền qua môi trường trong suốt và truyền được ngay cả trong chân không. Mọi vật đều có khả năng phát xạ và hấp thụ bức xạ nhiệt; bề mặt càng sẫm màu (đen) và xù xì thì hấp thụ và bức xạ nhiệt càng mạnh; bề mặt sáng màu, nhẵn bóng thì phản xạ tia nhiệt tốt, hấp thụ kém. Cấu tạo phích nước (bình thủy): Ruột phích làm bằng thủy tinh 2 lớp ở giữa rút chân không (ngăn dẫn nhiệt và đối lưu), hai mặt thành đối diện được tráng bạc sáng bóng (phản xạ tia nhiệt để ngăn bức xạ nhiệt), miệng có nút bấc gỗ xốp (ngăn đối lưu và dẫn nhiệt ra ngoài).',
            keyPoints: [
              'Bức xạ nhiệt là hình thức truyền nhiệt duy nhất trong chân không.',
              'Mặt sẫm màu hấp thụ nhiệt tốt hơn mặt sáng màu.',
              'Phích nước kết hợp triệt tiêu cả 3 hình thức truyền nhiệt để giữ nước nóng cả ngày.',
            ],
            realWorldApplication:
              'Mùa hè nên mặc quần áo sáng màu (trắng, vàng nhạt) để phản xạ bớt bức xạ nhiệt từ Mặt Trời; các bồn chứa xăng dầu ngoài trời luôn sơn màu trắng hoặc bạc sáng bóng để hạn chế hấp thụ nhiệt gây nguy cơ cháy nổ.',
          },
        ],
        quantities: [
          {
            name: 'Hệ số dẫn nhiệt',
            symbol: 'k (hay λ)',
            si_unit: 'W/(m·K)',
            other_units: 'cal/(s·cm·°C)',
            measuring_device: 'Thiết bị đo độ dẫn nhiệt lưu lượng ổn định',
            description: 'Đặc trưng cho khả năng dẫn nhiệt của vật liệu (Đồng: ~385 W/mK; Không khí: ~0,026 W/mK).',
          },
          {
            name: 'Hệ số hấp thụ bức xạ nhiệt',
            symbol: 'α',
            si_unit: 'Không thứ nguyên (0 đến 1)',
            other_units: 'Phần trăm (%)',
            measuring_device: 'Phổ kế bức xạ hồng ngoại',
            description: 'Tỉ số giữa năng lượng bức xạ bị hấp thụ và tổng năng lượng bức xạ chiếu tới bề mặt.',
          },
        ],
        formulas: [
          {
            name: 'Định luật truyền nhiệt định tính',
            latex_expression: 'Q = Q_{\\text{dẫn}} + Q_{\\text{đối lưu}} + Q_{\\text{bức xạ}}',
            plain_expression: 'Q = Q_dan + Q_doi_luu + Q_buc_xa',
            variables: [
              { symbol: 'Q', name: 'Tổng nhiệt lượng truyền qua ranh giới', unit: 'J' },
              { symbol: 'Q_{\\text{dẫn}}', name: 'Nhiệt lượng truyền do dẫn nhiệt', unit: 'J' },
              { symbol: 'Q_{\\text{đối lưu}}', name: 'Nhiệt lượng truyền do dòng đối lưu', unit: 'J' },
              { symbol: 'Q_{\\text{bức xạ}}', name: 'Nhiệt lượng truyền do bức xạ nhiệt', unit: 'J' },
            ],
            derived_formulas: [
              { expression: 'Q_{\\text{chân không}} = Q_{\\text{bức xạ}}', description: 'Trong chân không chỉ còn duy nhất bức xạ nhiệt' },
            ],
            usage_note: 'Muốn cách nhiệt hoàn hảo (như phích nước hoặc bình giữ nhiệt chân không inox), phải tìm cách triệt tiêu đồng thời cả 3 thành phần truyền nhiệt.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Giải thích tại sao đáy xoong nồi làm bằng kim loại còn cán làm bằng nhựa',
            difficulty: 'Cơ bản',
            problem_statement:
              'Trong gian bếp gia đình, đáy của chảo rán, xoong nồi nấu canh luôn được chế tạo bằng đồng, nhôm hoặc inox dày, trong khi cán cầm của chúng thường được bọc bằng gỗ hoặc nhựa cách nhiệt chịu nhiệt. Hãy vận dụng kiến thức về các hình thức truyền nhiệt để giải thích lý do.',
            given_summary: 'Cấu tạo xoong chảo: đáy bằng kim loại (nhôm, đồng), cán cầm bằng nhựa chịu nhiệt hoặc gỗ.',
            solution_steps: [
              'Bước 1: Giải thích bộ phận đáy xoong nồi: Kim loại (nhôm, đồng, thép) là những vật liệu dẫn nhiệt rất tốt. Đáy nồi làm bằng kim loại giúp nhiệt lượng từ ngọn lửa bếp nhanh chóng dẫn truyền xuyên qua đáy vào bên trong, làm nóng thức ăn nhanh chóng, tiết kiệm gas và điện.',
              'Bước 2: Giải thích bộ phận cán cầm: Gỗ và nhựa là những chất dẫn nhiệt rất kém (chất cách nhiệt). Khi bọc nhựa hoặc gỗ vào cán cầm, nhiệt lượng từ thân nồi khó dẫn truyền đến tay người nội trợ, giúp cầm nắm nâng xoong chảo an toàn không bị bỏng tay.',
            ],
            final_answer: 'Đáy kim loại dẫn nhiệt tốt để nấu chín thức ăn; cán bọc nhựa/gỗ dẫn nhiệt kém để chống bỏng cho người dùng.',
          },
        ],
        simulation: {
          sim_key: 'g8_heat_transfer_modes_lab',
          title: 'Phòng Thí Nghiệm So Sánh 3 Hình Thức Truyền Nhiệt',
          description:
            'Đốt ngọn lửa dưới các thanh kim loại, bình nước và trong buồng hút chân không để kiểm tra tốc độ dẫn nhiệt, quan sát vệt khói dòng đối lưu và cảm biến bức xạ nhiệt.',
          parameters: {
            heatSourcePowerW: 500,
            hasConvectionFluid: true,
            isVacuumChamber: false,
            surfaceCoat: 'silver',
          },
          guide_steps: [
            'Chọn thanh dẫn nhiệt làm bằng Đồng, Nhôm, Sắt hoặc Thủy tinh để xem đinh gắn sáp rơi ở vị trí nào trước.',
            'Bật nguồn nhiệt trong bình nước có pha thuốc tím để quan sát các dòng đối lưu uốn lượn hình vòng tròn.',
            'Bật buồng chân không (rút hết không khí) để thấy dẫn nhiệt và đối lưu bị triệt tiêu hoàn toàn, chỉ còn tia bức xạ nhiệt chiếu tới cảm biến.',
          ],
          physics_insight:
            'Chân không là môi trường cách nhiệt dẫn nhiệt và đối lưu tuyệt vời nhất; chỉ có các tia bức xạ nhiệt mới vượt qua được khoảng chân không vũ trụ.',
        },
      },
      {
        order_index: 3,
        code: 'G8-CH4-TP3',
        title: 'Chủ đề 4.3: Sự nở vì nhiệt của các chất và Ứng dụng thực tế',
        textbook_tags: ['Kết nội tri thức Bài 27', 'Chân trời sáng tạo Bài 27', 'Cánh Diều Bài 26'],
        overview:
          'Quy luật dãn nở vì nhiệt của chất rắn, chất lỏng và chất khí, hiện tượng nở dị thường của nước ở 4°C, nguyên lý hoạt động của băng kép trong rơ-le nhiệt và thiết kế khe co giãn trong kỹ thuật xây dựng.',
        summary_note:
          'Khí nở nhiều nhất, rắn ít nhất. Các chất khí khác nhau nở GIỐNG NHAU. Băng kép nóng cong về phía thanh nở ít. Khe co giãn đường ray ngăn lực nén uốn cong đường ray khi trời nắng.',
        theory_sections: [
          {
            heading: '1. Đặc điểm Sự Nở vì Nhiệt của Ba Thể Chất',
            content:
              'Hầu hết các chất đều nở ra khi nóng lên và co lại khi lạnh đi: (1) Chất rắn: Các chất rắn khác nhau nở vì nhiệt khác nhau (nhôm > đồng > sắt). Khi dãn nở nếu bị ngăn cản, chất rắn có thể sinh ra những lực rất lớn đủ sức bẻ gãy đinh ốc hoặc uốn cong thanh ray thép; (2) Chất lỏng: Nở ra khi nóng lên, co lại khi lạnh đi. Các chất lỏng khác nhau nở khác nhau (cồn > dầu > nước). Hiện tượng nở dị thường của nước: Từ 0°C đến 4°C nước lại co lại; ở 4°C nước có thể tích nhỏ nhất và khối lượng riêng đạt cực đại 1000 kg/m³. Do đó vào mùa đông ở xứ lạnh, nước ở 4°C nặng nhất chìm xuống đáy hồ, lớp băng 0°C nhẹ nổi trên mặt cách nhiệt cho sinh vật sống; (3) Chất khí: Các chất khí khác nhau nở vì nhiệt GIỐNG NHAU. So sánh: Chất khí nở nhiều hơn chất lỏng; chất lỏng nở nhiều hơn chất rắn.',
            keyPoints: [
              'Độ nở vì nhiệt: Chất khí > Chất lỏng > Chất rắn.',
              'Các chất khí khác nhau nở giống nhau; các chất rắn, lỏng khác nhau nở khác nhau.',
              'Nước có khối lượng riêng lớn nhất ở 4°C.',
            ],
            realWorldApplication:
              'Không bao giờ được bơm căng hết mức bánh xe đạp vào mùa hè rồi để ngoài trời nắng gắt: không khí bên trong ruột xe nở vì nhiệt nhiều hơn vỏ xe cao su, áp suất tăng vọt sẽ làm nổ lốp xe.',
          },
          {
            heading: '2. Ứng dụng Băng kép và Khe co giãn Công trình',
            content:
              'Băng kép được cấu tạo từ hai thanh kim loại có độ dãn nở vì nhiệt khác nhau (ví dụ một thanh đồng và một thanh thép) được tán chặt chẽ vào nhau dọc theo chiều dài. Khi bị nung nóng, thanh đồng dãn nở dài nhiều hơn thanh thép, làm cho băng kép bị uốn cong về phía thanh thép (thanh nở ít hơn). Khi làm lạnh, thanh đồng co lại nhiều hơn thanh thép nên băng kép uốn cong về phía thanh đồng. Băng kép được ứng dụng làm công tắc đóng/ngắt tự động (rơ-le nhiệt) trong bàn là điện, ấm đun nước điện, nồi cơm điện: khi đạt nhiệt độ định mức, băng kép cong lên đẩy tiếp điểm hở ra ngắt dòng điện để chống cháy thiết bị. Khe co giãn trên cầu bê tông và đường ray xe lửa tạo khoảng trống cho dầm thép dãn nở tự do khi thời tiết nóng bức, tránh lực cản sinh ra làm nứt vỡ mố cầu hay trật bánh tàu hỏa.',
            keyPoints: [
              'Băng kép nóng lên: Cong về phía thanh kim loại dãn nở ÍT hơn.',
              'Băng kép lạnh đi: Cong về phía thanh kim loại co lại NHIỀU hơn (thanh dãn nở nhiều khi nóng).',
              'Khe co giãn triệt tiêu lực nén khổng lồ sinh ra khi vật rắn dãn nở trong môi trường bị kẹp chặt.',
            ],
            realWorldApplication:
              'Cầu dây văng hoặc cầu thép dài hàng kilômét luôn có các khớp nối răng lược bằng thép (khe co giãn) ở giữa các nhịp cầu, cho phép nhịp cầu co dãn hàng chục centimet giữa mùa đông và mùa hè mà không làm biến dạng mặt cầu.',
          },
        ],
        quantities: [
          {
            name: 'Độ nở dài',
            symbol: 'Δl',
            si_unit: 'm',
            other_units: 'mm, cm',
            measuring_device: 'Đồng hồ so đo chuyển vị (Dial indicator) / Thước quang học',
            description: 'Độ dài tăng thêm của thanh kim loại khi nhiệt độ tăng thêm một khoảng Δt.',
          },
          {
            name: 'Hệ số nở dài',
            symbol: 'α',
            si_unit: 'K⁻¹ (hay 1/°C)',
            other_units: '10⁻⁶ K⁻¹',
            measuring_device: 'Thiết bị đo độ dãn nở nhiệt vi phân dilatometer',
            description: 'Hệ số tỉ lệ đặc trưng cho từng loại vật liệu (Nhôm: 24×10⁻⁶ K⁻¹; Đồng: 17×10⁻⁶ K⁻¹; Thép: 12×10⁻⁶ K⁻¹).',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính độ nở dài của vật rắn',
            latex_expression: '\\Delta l = l_0 \\cdot \\alpha \\cdot \\Delta t',
            plain_expression: 'Delta_l = l0 * alpha * Delta_t',
            variables: [
              { symbol: '\\Delta l', name: 'Độ dãn dài nở thêm', unit: 'm' },
              { symbol: 'l_0', name: 'Chiều dài ban đầu của thanh kim loại', unit: 'm' },
              { symbol: '\\alpha', name: 'Hệ số nở dài của vật liệu', unit: 'K⁻¹ hay 1/°C' },
              { symbol: '\\Delta t', name: 'Độ biến thiên nhiệt độ (t2 - t1)', unit: '°C hay K' },
            ],
            derived_formulas: [
              { expression: 'l = l_0 + \\Delta l = l_0(1 + \\alpha \\cdot \\Delta t)', description: 'Chiều dài của thanh ở nhiệt độ t2' },
              { expression: '\\Delta t = \\frac{\\Delta l}{l_0 \\cdot \\alpha}', description: 'Độ tăng nhiệt độ tương ứng với độ nở' },
            ],
            usage_note: 'Độ nở dài tỉ lệ thuận với chiều dài ban đầu l0, hệ số nở dài alpha và độ tăng nhiệt độ Delta t.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Tính độ dãn nở dài của thanh ray đường sắt vào mùa hè',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một thanh đường ray xe lửa bằng thép có chiều dài ban đầu là l0 = 12,5 m khi lắp đặt ở nhiệt độ t1 = 20°C. Vào một ngày hè nắng gắt, nhiệt độ thanh ray tăng lên tới t2 = 55°C. Biết hệ số nở dài của thép làm ray là α = 12 × 10⁻⁶ K⁻¹. Hỏi: a) Thanh ray đã nở dài thêm một đoạn bằng bao nhiêu milimét? b) Để các thanh ray không bị kích ép làm cong khi nhiệt độ đạt 55°C thì khi lắp ráp ở 20°C người kỹ sư phải để khoảng cách tối thiểu giữa hai đầu thanh ray là bao nhiêu?',
            given_summary: 'l0 = 12,5 m; t1 = 20°C; t2 = 55°C => Delta t = 35°C; alpha = 12 × 10⁻⁶ K⁻¹.',
            solution_steps: [
              'Bước 1: Tính độ tăng nhiệt độ của thanh ray thép: Delta t = t2 - t1 = 55 - 20 = 35°C.',
              'Bước 2: Áp dụng công thức tính độ nở dài của vật rắn: Delta l = l0 · alpha · Delta t = 12,5 × (12 × 10⁻⁶) × 35 = 0,00525 m.',
              'Bước 3: Đổi độ nở dài sang đơn vị milimét (mm): Delta l = 0,00525 × 1000 = 5,25 mm.',
              'Bước 4: Xác định khoảng cách khe hở kỹ thuật: Khi thanh ray nở dài thêm 5,25 mm thì khoảng cách hở tối thiểu giữa 2 thanh ray liên tiếp lúc lắp đặt phải ít nhất bằng 5,25 mm để tránh bị nén ép làm cong ray.',
            ],
            final_answer: 'Thanh ray nở thêm Delta l = 5,25 mm; khe hở lắp đặt tối thiểu là 5,25 mm.',
          },
        ],
        simulation: {
          sim_key: 'g8_bimetallic_expansion_lab',
          title: 'Mô Phỏng Độ Nở Vì Nhiệt & Hoạt Động Rơ-le Băng Kép Bàn Là',
          description:
            'Đốt nóng băng kép ghép bởi hai kim loại tùy chọn (Nhôm - Thép hoặc Đồng - Sắt) để quan sát trực tiếp góc uốn cong và nguyên lý đóng ngắt tiếp điểm điện rơ-le nhiệt.',
          parameters: {
            metal1: 'brass',
            metal2: 'steel',
            temperatureC: 25,
            initialLengthMm: 100,
          },
          guide_steps: [
            'Chọn cặp kim loại ghép cho băng kép (ví dụ Đồng thau - Thép).',
            'Kéo thanh trượt nhiệt độ từ 20°C lên 150°C để xem băng kép bị uốn cong lên trên.',
            'Quan sát tiếp điểm rơ-le tách rời làm bóng đèn gia nhiệt tắt (ngắt điện bảo vệ).',
          ],
          physics_insight:
            'Vì thanh đồng nở dài nhiều hơn thanh thép trên cùng một chiều dài ban đầu, thanh đồng bị thanh thép kìm giữ uốn vòng cung, biến nhiệt năng thành chuyển động cơ học tự động ngắt điện.',
        },
      },
    ],
  },
];
