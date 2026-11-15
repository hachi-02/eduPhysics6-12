import { SeedChapterData } from './grade6-curriculum';

export const GRADE_7_CHAPTERS_PART1: SeedChapterData[] = [
  {
    order_index: 1,
    code: 'G7-CH1',
    title: 'Chương 1: Tốc độ và Chuyển động',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Lớp 7: Khái niệm tốc độ chuyển động, công thức v = s/t, quy đổi đơn vị m/s và km/h, cách vẽ và đọc đồ thị quãng đường - thời gian (s - t), phương pháp đo tốc độ trong phòng thí nghiệm và quy tắc giữ khoảng cách an toàn giao thông.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 1: Tốc độ và Chuyển động
1. **Ý nghĩa và công thức tính Tốc độ ($v$):**
   - **Tốc độ** là đại lượng cho biết mức độ **nhanh hay chậm** của chuyển động, được xác định bằng độ dài quãng đường đi được trong một đơn vị thời gian.
   - **Công thức:** $v = \\frac{s}{t} \\Rightarrow s = v \\cdot t \\Rightarrow t = \\frac{s}{v}$.
   - **Tốc độ trung bình trên nhiều chặng đường:** $v_{\\text{tb}} = \\frac{s_1 + s_2 + \\dots}{t_1 + t_2 + \\dots}$ *(Lưu ý: Tuyệt đối không lấy trung bình cộng $\\frac{v_1 + v_2}{2}$ trừ khi thời gian đi các đoạn bằng nhau!)*.
2. **Đơn vị tốc độ và quy tắc đổi đơn vị:**
   - Đơn vị chuẩn trong hệ SI là **mét trên giây ($\\text{m/s}$)**; đơn vị thông dụng trong giao thông là **kilômét trên giờ ($\\text{km/h}$)**.
   - **Quy tắc đổi nhanh:** $1\\,\\text{m/s} = 3,6\\,\\text{km/h}$. Do đó:
     - Đổi từ $\\text{m/s} \\rightarrow \\text{km/h}$: **Nhân với $3,6$**.
     - Đổi từ $\\text{km/h} \\rightarrow \\text{m/s}$: **Chia cho $3,6$**.
3. **Đồ thị quãng đường – thời gian ($s - t$):**
   - Trục hoành ($Ot$) biểu diễn thời gian $t$; trục tung ($Os$) biểu diễn quãng đường $s$.
   - Đường biểu diễn là **đoạn thẳng nằm nghiêng đi lên**: Vật chuyển động với **tốc độ không đổi** (đường càng dốc thì tốc độ $v$ càng lớn).
   - Đường biểu diễn là **đoạn thẳng nằm ngang (song song với trục thời gian $Ot$)**: Quãng đường không tăng thêm $\\rightarrow$ **Vật đang đứng yên ($v = 0$)**.
4. **Đo tốc độ và An toàn giao thông:**
   - Trong phòng thí nghiệm: Dùng **đồng hồ bấm giây** hoặc **cổng quang điện** kết hợp đồng hồ đo thời gian hiện số. Trong giao thông: Dùng **tốc kế** (trên xe) và **súng bắn tốc độ**.
   - **Quy tắc "3 giây"** trên đường cao tốc: Khoảng cách an toàn tối thiểu (m) $\\approx v(\\text{m/s}) \\times 3(\\text{s})$.`,
    key_takeaways: [
      'Công thức gốc: v = s / t; s = v · t; t = s / v.',
      'Quy đổi đơn vị: 1 m/s = 3,6 km/h (Ví dụ: 10 m/s = 36 km/h; 15 m/s = 54 km/h; 20 m/s = 72 km/h).',
      'Khi tính tốc độ trung bình trên cả quãng đường gồm nhiều đoạn, luôn dùng v_tb = Tổng quãng đường / Tổng thời gian.',
      'Trên đồ thị s - t: Đoạn thẳng nằm ngang song song trục Ot biểu thị vật ĐỨNG YÊN; đoạn thẳng càng dốc đứng thì tốc độ càng LỚN.',
      'Khi trời mưa, đường trơn hoặc sương mù, lực ma sát giảm và tầm nhìn hạn chế nên bắt buộc phải giảm tốc độ và tăng khoảng cách an toàn.',
    ],
    formula_cheatsheet: [
      {
        name: 'Công thức tính tốc độ chuyển động',
        latex: 'v = \\frac{s}{t} \\quad \\Rightarrow \\quad s = v \\cdot t; \\quad t = \\frac{s}{v}',
        note: 's: quãng đường (m hoặc km); t: thời gian (s hoặc h); v: tốc độ (m/s hoặc km/h).',
      },
      {
        name: 'Tốc độ trung bình trên nhiều đoạn đường',
        latex: 'v_{\\text{tb}} = \\frac{s_1 + s_2}{t_1 + t_2}',
        note: 'Tính cả thời gian nghỉ (nếu đề yêu cầu tính trên toàn bộ lộ trình).',
      },
      {
        name: 'Quy đổi giữa m/s và km/h',
        latex: 'v(\\text{km/h}) = 3,6 \\cdot v(\\text{m/s}); \\quad v(\\text{m/s}) = \\frac{v(\\text{km/h})}{3,6}',
        note: 'Vì 1 km = 1000 m và 1 h = 3600 s nên 1 km/h = 1000/3600 = 1/3,6 m/s.',
      },
      {
        name: 'Khoảng cách an toàn theo quy tắc 3 giây',
        latex: 'd_{\\text{an toàn}} = v(\\text{m/s}) \\times 3\\,\\text{s}',
        note: 'Phải đổi tốc độ của xe từ km/h sang m/s trước khi nhân với 3 giây.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G7-C1-B1',
        title: 'Chủ đề 1.1: Tốc độ chuyển động',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu hai cách so sánh sự nhanh chậm của các chuyển động, nắm vững định nghĩa và công thức tính tốc độ v = s/t, tốc độ trung bình và thành thạo quy đổi đơn vị giữa m/s và km/h.',
        summary_note:
          'Ghi nhớ: 1 m/s = 3,6 km/h. Các cặp số đẹp hay gặp: 5 m/s = 18 km/h; 10 m/s = 36 km/h; 12,5 m/s = 45 km/h; 15 m/s = 54 km/h; 20 m/s = 72 km/h; 25 m/s = 90 km/h; 30 m/s = 108 km/h.',
        theory_sections: [
          {
            heading: '1. Hai cách xác định sự nhanh, chậm của chuyển động',
            content:
              'Trong thực tế và thể thao, để biết vật nào chuyển động nhanh hơn, ta có 2 cách so sánh: Cách 1: Trong cùng một quãng đường (như chạy 100 m), vật nào mất ít thời gian hơn thì chuyển động nhanh hơn; Cách 2: Trong cùng một khoảng thời gian, vật nào đi được quãng đường dài hơn thì chuyển động nhanh hơn.',
            keyPoints: [
              'Quãng đường đi được trong 1 đơn vị thời gian (1 giây hoặc 1 giờ) đặc trưng cho độ nhanh chậm của chuyển động và được gọi là Tốc độ.',
              'Tốc độ (ký hiệu: v) cho biết mỗi giây (hoặc mỗi giờ) vật đi được bao nhiêu mét (hoặc kilômét).',
            ],
          },
          {
            heading: '2. Công thức tính tốc độ và Tốc độ trung bình',
            content:
              'Gọi s là quãng đường đi được và t là thời gian để đi hết quãng đường đó, tốc độ chuyển động được tính bằng thương số giữa quãng đường và thời gian: v = s / t. Nếu vật chuyển động với tốc độ thay đổi trên nhiều đoạn đường s₁, s₂... trong các khoảng thời gian t₁, t₂... thì tốc độ trung bình trên cả quãng đường là v_tb = (s₁ + s₂) / (t₁ + t₂).',
            keyPoints: [
              'Muốn tìm quãng đường: s = v · t.',
              'Muốn tìm thời gian: t = s / v.',
              'Khi tính tốc độ trung bình: Phải lấy TỔNG quãng đường chia cho TỔNG thời gian, không được lấy trung bình cộng hai tốc độ!',
            ],
            realWorldApplication:
              'Đồng hồ tốc kế (Speedometer) trước mặt người lái xe máy, ô tô cho biết tốc độ tức thời của xe tại thời điểm đang nhìn (theo đơn vị km/h).',
          },
          {
            heading: '3. Đơn vị đo tốc độ và cách đổi đơn vị',
            content:
              'Đơn vị của tốc độ phụ thuộc vào đơn vị độ dài và đơn vị thời gian. Trong hệ đo lường quốc tế SI, đơn vị chuẩn của tốc độ là mét trên giây (m/s). Trong đời sống và giao thông, đơn vị thường dùng là kilômét trên giờ (km/h).',
            keyPoints: [
              'Vì 1 km = 1000 m và 1 h = 3600 s nên 1 m/s = (1/1000 km) / (1/3600 h) = 3,6 km/h.',
              'Từ m/s đổi sang km/h: Nhân với 3,6.',
              'Từ km/h đổi sang m/s: Chia cho 3,6.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Tốc độ chuyển động',
            symbol: 'v',
            si_unit: 'm/s (mét trên giây)',
            other_units: 'km/h (1 m/s = 3,6 km/h), cm/s, km/s',
            measuring_device: 'Tốc kế (trên xe), súng bắn tốc độ, cổng quang điện + đồng hồ hiện số',
            description: 'Đại lượng đặc trưng cho sự nhanh hay chậm của chuyển động.',
          },
          {
            name: 'Quãng đường đi được',
            symbol: 's',
            si_unit: 'm (mét)',
            other_units: 'km (1 km = 1000 m), cm, mm',
            measuring_device: 'Thước dây, đồng hồ đo quãng đường (công-tơ-mét trên xe)',
            description: 'Độ dài quỹ đạo mà vật đã đi qua trong khoảng thời gian t.',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính tốc độ chuyển động',
            latex_expression: 'v = \\frac{s}{t}',
            plain_expression: 'v = s / t',
            variables: [
              { symbol: 'v', name: 'Tốc độ chuyển động', unit: 'm/s hoặc km/h' },
              { symbol: 's', name: 'Quãng đường vật đi được', unit: 'm hoặc km' },
              { symbol: 't', name: 'Thời gian đi hết quãng đường đó', unit: 's hoặc h' },
            ],
            derived_formulas: [
              { expression: 's = v \\cdot t', description: 'Tính quãng đường khi biết tốc độ và thời gian' },
              { expression: 't = \\frac{s}{v}', description: 'Tính thời gian đi hết quãng đường' },
            ],
            usage_note: 'Các đại lượng phải đồng bộ hệ đơn vị: (m, s, m/s) hoặc (km, h, km/h). Nếu thời gian cho bằng phút, phải đổi sang giờ hoặc giây trước khi tính!',
          },
          {
            name: 'Công thức tính tốc độ trung bình trên nhiều đoạn đường',
            latex_expression: 'v_{\\text{tb}} = \\frac{s_1 + s_2}{t_1 + t_2}',
            plain_expression: 'v_tb = (s1 + s2) / (t1 + t2)',
            variables: [
              { symbol: 's_1, s_2', name: 'Quãng đường đi trên đoạn thứ 1 và đoạn thứ 2', unit: 'km hoặc m' },
              { symbol: 't_1, t_2', name: 'Thời gian đi trên đoạn 1 và đoạn 2', unit: 'h hoặc s' },
            ],
            derived_formulas: [],
            usage_note: 'CẢNH BÁO: Không dùng (v₁ + v₂)/2 khi thời gian đi hai đoạn khác nhau!',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: So sánh độ nhanh chậm khi hai vật có đơn vị tốc độ khác nhau',
            difficulty: 'Cơ bản',
            problem_statement:
              'Bạn An đạp xe đi học trên đoạn đường dài 3,6 km hết 15 phút. Bạn Bình chạy bộ với tốc độ 4,5 m/s. Hỏi bạn nào chuyển động nhanh hơn?',
            given_summary: 'An: s1 = 3,6 km, t1 = 15 phút = 0,25 h. Bình: v2 = 4,5 m/s.',
            solution_steps: [
              'Bước 1: Tính tốc độ đạp xe của bạn An theo đơn vị km/h: Đổi t1 = 15 phút = 15/60 = 0,25 giờ ⇒ v1 = s1 / t1 = 3,6 / 0,25 = 14,4 km/h.',
              'Bước 2: Đổi tốc độ của bạn Bình từ m/s sang km/h để cùng đơn vị so sánh: v2 = 4,5 × 3,6 = 16,2 km/h.',
              'Bước 3: Vì 16,2 km/h > 14,4 km/h (hoặc đổi v1 = 4 m/s < 4,5 m/s) nên bạn Bình chuyển động nhanh hơn bạn An.',
            ],
            final_answer: 'v_An = 14,4 km/h (4 m/s); v_Bình = 16,2 km/h (4,5 m/s) ⇒ Bình nhanh hơn.',
          },
          {
            title: 'Ví dụ 2: Bài toán tính tốc độ trung bình trên hai đoạn đường (lên dốc và xuống dốc)',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một người đi xe đạp lên một con dốc dài 450 m hết 1 phút 30 giây, sau đó trượt xuống con dốc tiếp theo dài 600 m với tốc độ 10 m/s. Hãy tính tốc độ trung bình của người đó trên cả hai đoạn đường dốc theo đơn vị m/s và km/h.',
            given_summary: 's1 = 450 m, t1 = 1 phút 30 giây = 90 s; s2 = 600 m, v2 = 10 m/s.',
            solution_steps: [
              'Bước 1: Tính thời gian người đó đi hết đoạn dốc thứ hai: t2 = s2 / v2 = 600 / 10 = 60 s.',
              'Bước 2: Tổng quãng đường đi được: s = s1 + s2 = 450 + 600 = 1050 m. Tổng thời gian: t = t1 + t2 = 90 + 60 = 150 s.',
              'Bước 3: Tốc độ trung bình trên cả hai đoạn dốc: v_tb = s / t = 1050 / 150 = 7 m/s = 7 × 3,6 = 25,2 km/h.',
            ],
            final_answer: 'v_tb = 7 m/s = 25,2 km/h.',
          },
        ],
        simulation: {
          sim_key: 'speed_graph_lab',
          title: 'Mô phỏng Chuyển Động, Quy Đổi m/s ↔ km/h & Đồ Thị Quãng Đường - Thời Gian',
          description:
            'Điều chỉnh tốc độ xe (m/s hoặc km/h) và thời gian chạy để quan sát trực quan quãng đường đi được, độ dốc của đồ thị s - t và khoảng cách an toàn 3 giây.',
          parameters: {
            defaultSpeedMs: 15,
            defaultTimeSec: 10,
          },
          guide_steps: [
            'Kéo thanh trượt tốc độ v (m/s) để thấy giá trị tương ứng theo km/h (v_km/h = 3,6 × v_m/s).',
            'Quan sát độ dốc của đường biểu diễn s - t tăng lên khi tốc độ tăng.',
          ],
          physics_insight:
            'Tốc độ chính là hệ số góc (độ dốc) của đường thẳng trên đồ thị quãng đường – thời gian: v = Δs / Δt.',
        },
      },
      {
        order_index: 2,
        code: 'G7-C1-B2',
        title: 'Chủ đề 1.2: Đồ thị quãng đường – thời gian (s – t)',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Biết cách lập bảng ghi số liệu quãng đường - thời gian, vẽ đồ thị s - t trên hệ trục tọa độ vuông góc và đọc từ đồ thị ra trạng thái chuyển động (đứng yên, đi nhanh, đi chậm), quãng đường và tốc độ tại mọi thời điểm.',
        summary_note:
          '3 quy tắc đọc nhanh đồ thị s - t: (1) Đoạn thẳng đi lên → Vật đang chuyển động đều; (2) Đoạn thẳng nằm ngang song song trục Ot → Vật đang ĐỨNG YÊN (nghỉ); (3) Đường nào dốc hơn (gần trục Os hơn) → Tốc độ lớn hơn!',
        theory_sections: [
          {
            heading: '1. Cấu tạo của đồ thị quãng đường – thời gian (s – t)',
            content:
              'Đồ thị quãng đường – thời gian mô tả trực quan mối liên hệ giữa quãng đường đi được s và thời gian t trong quá trình chuyển động của vật. Hệ trục tọa độ gồm: Trục nằm ngang (trục hoành Ot) biểu diễn thời gian t theo một tỉ xích thích hợp; Trục thẳng đứng (trục tung Os) biểu diễn độ dài quãng đường s; Gốc tọa độ O (t = 0, s = 0) biểu diễn thời điểm và vị trí xuất phát.',
            keyPoints: [
              'Mỗi cặp số liệu (t, s) xác định một điểm trên mặt phẳng tọa độ.',
              'Nối các điểm biểu diễn liên tiếp ta được đường biểu diễn quãng đường - thời gian.',
            ],
          },
          {
            heading: '2. Ý nghĩa hình dạng của đường biểu diễn trên đồ thị s – t',
            content:
              'Nhìn vào hình dạng và độ dốc của đồ thị s – t, ta biết ngay đặc điểm chuyển động của vật trong từng giai đoạn mà không cần tính toán phức tạp:',
            keyPoints: [
              '(1) Đường biểu diễn là một đường thẳng nằm nghiêng đi lên: Quãng đường s tỉ lệ thuận với thời gian t → Vật chuyển động với TỐC ĐỘ KHÔNG ĐỔI.',
              '(2) Đường biểu diễn là một đoạn thẳng NẰM NGANG (song song với trục thời gian Ot): Thời gian t vẫn trôi nhưng quãng đường s giữ nguyên không đổi → Vật đang ĐỨNG YÊN (dừng lại nghỉ, v = 0).',
              '(3) So sánh hai chuyển động trên cùng một hệ trục s – t: Đường biểu diễn nào có độ dốc lớn hơn (hợp với trục Ot góc lớn hơn) thì vật đó có tốc độ lớn hơn.',
            ],
            realWorldApplication:
              'Trong điều hành chạy tàu đường sắt, biểu đồ chạy tàu (đồ thị quãng đường - thời gian của các đoàn tàu) giúp kỹ sư biết chính xác thời điểm và nhà ga nào hai đoàn tàu tránh nhau an toàn.',
          },
          {
            heading: '3. Cách tìm tốc độ, quãng đường và thời gian từ đồ thị',
            content:
              'Từ một điểm M bất kỳ trên đồ thị: Kẻ đường vuông góc xuống trục Ot ta đọc được thời điểm t; Kẻ đường vuông góc sang trục Os ta đọc được quãng đường s. Tốc độ trong một giai đoạn đoạn thẳng từ điểm A(t₁, s₁) đến điểm B(t₂, s₂) được tính bằng: v = (s₂ - s₁) / (t₂ - t₁).',
            keyPoints: [
              'Khi tính tốc độ trên giai đoạn thứ 2 (từ A đến B), phải lấy hiệu quãng đường Δs = s₂ - s₁ chia cho hiệu thời gian Δt = t₂ - t₁.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Độ biến thiên quãng đường trong một giai đoạn',
            symbol: '\\Delta s = s_2 - s_1',
            si_unit: 'm (mét)',
            other_units: 'km',
            measuring_device: 'Đọc từ trục tung Os của đồ thị',
            description: 'Quãng đường đi thêm được từ thời điểm t₁ đến thời điểm t₂.',
          },
          {
            name: 'Khoảng thời gian của một giai đoạn',
            symbol: '\\Delta t = t_2 - t_1',
            si_unit: 's (giây)',
            other_units: 'h (giờ), min (phút)',
            measuring_device: 'Đọc từ trục hoành Ot của đồ thị',
            description: 'Thời gian vật đi từ vị trí s₁ đến vị trí s₂.',
          },
        ],
        formulas: [
          {
            name: 'Tính tốc độ trong một giai đoạn trên đồ thị s – t',
            latex_expression: 'v = \\frac{\\Delta s}{\\Delta t} = \\frac{s_2 - s_1}{t_2 - t_1}',
            plain_expression: 'v = (s2 - s1) / (t2 - t1)',
            variables: [
              { symbol: 's_1, s_2', name: 'Tọa độ quãng đường ở đầu và cuối đoạn thẳng trên đồ thị', unit: 'km hoặc m' },
              { symbol: 't_1, t_2', name: 'Thời điểm ở đầu và cuối đoạn thẳng trên đồ thị', unit: 'h hoặc s' },
            ],
            derived_formulas: [
              { expression: 'v = 0 \\quad (\\text{khi } s_2 = s_1)', description: 'Đoạn đồ thị nằm ngang: vật đứng yên' },
            ],
            usage_note: 'Với đoạn thẳng đi qua gốc tọa độ O(0, 0) thì v = s / t.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Đọc đồ thị chuyển động gồm 3 giai đoạn (Đi - Nghỉ - Đi tiếp)',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Đồ thị quãng đường - thời gian của một người đi xe đạp gồm 3 đoạn thẳng nối tiếp: Đoạn OA từ t = 0 đến t₁ = 2 h, quãng đường tăng từ 0 lên 30 km; Đoạn AB từ t₁ = 2 h đến t₂ = 3 h là đoạn nằm ngang ở mức 30 km; Đoạn BC từ t₂ = 3 h đến t₃ = 5 h, quãng đường tăng từ 30 km lên 70 km. Hãy tính tốc độ trên mỗi đoạn và tốc độ trung bình trên cả lộ trình 5 giờ.',
            given_summary: 'O(0h; 0km) → A(2h; 30km) → B(3h; 30km) → C(5h; 70km).',
            solution_steps: [
              'Bước 1 (Đoạn OA): v_OA = (30 - 0) / (2 - 0) = 30 / 2 = 15 km/h.',
              'Bước 2 (Đoạn AB nằm ngang): Quãng đường không đổi (s = 30 km) từ giờ thứ 2 đến giờ thứ 3 → Người đó dừng lại nghỉ 1 giờ (v_AB = 0 km/h).',
              'Bước 3 (Đoạn BC): v_BC = (70 - 30) / (5 - 3) = 40 / 2 = 20 km/h.',
              'Bước 4 (Tốc độ trung bình cả lộ trình 5 h): v_tb = Tổng s / Tổng t = 70 / 5 = 14 km/h.',
            ],
            final_answer: 'v_OA = 15 km/h; Đoạn AB dừng nghỉ (v = 0); v_BC = 20 km/h; v_tb = 14 km/h.',
          },
        ],
        simulation: {
          sim_key: 'speed_graph_lab',
          title: 'Mô phỏng Đồ Thị Quãng Đường - Thời Gian (s - t) & Độ Dốc Tốc Độ',
          description:
            'Thay đổi tốc độ v để quan sát trực tiếp độ dốc của đường thẳng s - t và đọc giá trị quãng đường s ứng với từng thời điểm t.',
          parameters: {
            defaultSpeedMs: 12,
            defaultTimeSec: 10,
          },
          guide_steps: [
            'Tăng tốc độ v lên 20 m/s, 25 m/s để thấy đường biểu diễn s - t dốc đứng lên.',
            'Đưa tốc độ về 0 để thấy đường biểu diễn nằm ngang (vật đứng yên).',
          ],
          physics_insight:
            'Trên đồ thị s - t, góc nghiêng của đường thẳng so với trục thời gian Ot phản ánh trực tiếp độ lớn của tốc độ.',
        },
      },
      {
        order_index: 3,
        code: 'G7-C1-B3',
        title: 'Chủ đề 1.3: Đo tốc độ & Tốc độ và an toàn giao thông',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu nguyên lý đo tốc độ bằng đồng hồ bấm giây, cổng quang điện trong phòng thí nghiệm và thiết bị bắn tốc độ của cảnh sát giao thông; vận dụng quy tắc "3 giây" để tính khoảng cách an toàn tối thiểu giữa các xe.',
        summary_note:
          'Muốn đo tốc độ v = s/t cần đo quãng đường s (bằng thước) và thời gian t (bằng đồng hồ bấm giây hoặc cổng quang điện). Quy tắc "3 giây" trên đường cao tốc: Khoảng cách an toàn d (m) = v (m/s) × 3 (s)!',
        theory_sections: [
          {
            heading: '1. Đo tốc độ trong phòng thí nghiệm',
            content:
              'Để đo tốc độ của một vật chuyển động trong phòng thí nghiệm, ta đo độ dài quãng đường s giữa hai vạch mốc A, B bằng thước và đo thời gian t vật đi từ A đến B, sau đó tính v = s/t. Có hai dụng cụ đo thời gian phổ biến: (1) Dùng đồng hồ bấm giây (bấm bằng tay khi vật qua vạch A và vạch B); (2) Dùng hai cổng quang điện nối với đồng hồ đo thời gian hiện số (tự động bật/tắt đồng hồ với độ chính xác tới 0,001 s khi tấm chắn sáng trên xe đi qua chùm tia hồng ngoại của cổng quang).',
            keyPoints: [
              'Đo bằng cổng quang điện chính xác hơn rất nhiều so với đồng hồ bấm giây vì loại bỏ hoàn toàn sai số phản xạ bấm tay của con người.',
            ],
          },
          {
            heading: '2. Thiết bị "bắn tốc độ" trong giao thông',
            content:
              'Thiết bị bắn tốc độ (Speed gun / Camera giám sát tốc độ) được cảnh sát giao thông sử dụng để kiểm tra xem các phương tiện có vượt quá tốc độ tối đa cho phép hay không. Máy phát ra sóng điện từ hoặc tia laser hướng về xe đang chạy, thu nhận tín hiệu phản xạ ở các thời điểm khác nhau để tự động tính ngay ra tốc độ v = Δs / Δt và chụp ảnh biển số xe vi phạm.',
            keyPoints: [
              'Giúp phát hiện vi phạm tốc độ nhanh chóng, chính xác nhằm giảm thiểu tai nạn giao thông.',
            ],
          },
          {
            heading: '3. Ảnh hưởng của tốc độ và Quy tắc giữ khoảng cách an toàn ("Quy tắc 3 giây")',
            content:
              'Khi xe chạy với tốc độ càng cao thì động năng càng lớn và quãng đường phanh dừng xe càng dài, nên nếu xảy ra va chạm sẽ gây hậu quả vô cùng nghiêm trọng. Để kịp thời xử lý khi xe phía trước phanh gấp, người lái xe phải tuân thủ khoảng cách an toàn tối thiểu theo tốc độ (quy định của Bộ Giao thông Vận tải) hoặc tính nhẩm theo "Quy tắc 3 giây": Khoảng cách an toàn (m) bằng quãng đường xe đi được trong 3 giây.',
            keyPoints: [
              'Công thức quy tắc 3 giây: d_an_toàn (m) = v (m/s) × 3 (s).',
              'Bảng quy định khoảng cách an toàn trên đường khô ráo: Tốc độ 60 km/h → tối thiểu 35 m; Từ trên 60 đến 80 km/h → tối thiểu 55 m; Từ trên 80 đến 100 km/h → tối thiểu 70 m; Từ trên 100 đến 120 km/h → tối thiểu 100 m.',
              'Khi trời mưa, có sương mù, mặt đường trơn trượt: Phải giảm tốc độ và giữ khoảng cách LỚN HƠN số ghi trên biển báo!',
            ],
            realWorldApplication:
              'Trên các tuyến cao tốc Việt Nam, các biển báo mốc 0m - 50m - 100m bên lề đường giúp tài xế tự ước lượng khoảng cách an toàn với xe chạy ngay phía trước.',
          },
        ],
        quantities: [
          {
            name: 'Khoảng cách an toàn tối thiểu',
            symbol: 'd_{\\text{an toàn}}',
            si_unit: 'm (mét)',
            other_units: 'km',
            measuring_device: 'Cọc tiêu mốc khoảng cách (0m - 50m - 100m), cảm biến radar trên ô tô',
            description: 'Khoảng cách ngắn nhất phải duy trì với xe chạy liền trước để kịp phanh dừng không gây va chạm.',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính khoảng cách an toàn theo "Quy tắc 3 giây"',
            latex_expression: 'd_{\\text{an toàn}} = v(\\text{m/s}) \\times 3 = \\frac{v(\\text{km/h})}{3,6} \\times 3',
            plain_expression: 'd_an_toàn = v(m/s) * 3 = (v(km/h) / 3,6) * 3',
            variables: [
              { symbol: 'd_{\\text{an toàn}}', name: 'Khoảng cách an toàn tối thiểu theo quy tắc 3 giây', unit: 'm (mét)' },
              { symbol: 'v(\\text{m/s})', name: 'Tốc độ của xe tính theo mét trên giây', unit: 'm/s' },
              { symbol: 'v(\\text{km/h})', name: 'Tốc độ của xe đọc trên tốc kế', unit: 'km/h' },
            ],
            derived_formulas: [],
            usage_note: 'Bắt buộc phải đổi tốc độ từ km/h sang m/s (chia cho 3,6) trước khi nhân với 3 giây!',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính tốc độ xe lăn qua hai cổng quang điện',
            difficulty: 'Cơ bản',
            problem_statement:
              'Trong thí nghiệm đo tốc độ bằng cổng quang điện, khoảng cách giữa hai cổng quang điện A và B là 60 cm. Khi cho xe lăn chạy qua hai cổng quang điện, đồng hồ đo thời gian hiện số chỉ 0,75 s. Tính tốc độ của xe lăn ra đơn vị m/s.',
            given_summary: 's = 60 cm = 0,6 m; t = 0,75 s.',
            solution_steps: [
              'Bước 1: Đổi khoảng cách giữa hai cổng quang điện sang đơn vị mét: s = 60 cm = 0,6 m.',
              'Bước 2: Áp dụng công thức v = s / t = 0,6 / 0,75 = 0,8 m/s.',
            ],
            final_answer: 'v = 0,8 m/s (hay 80 cm/s).',
          },
          {
            title: 'Ví dụ 2: Tính khoảng cách an toàn trên đường cao tốc theo quy tắc 3 giây',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một ô tô đang chạy trên đường cao tốc với tốc độ 90 km/h. Áp dụng quy tắc "3 giây", hãy tính khoảng cách an toàn tối thiểu mà tài xế phải giữ với xe chạy ngay phía trước.',
            given_summary: 'v = 90 km/h; t_phản_ứng = 3 s.',
            solution_steps: [
              'Bước 1: Đổi tốc độ của ô tô từ km/h sang m/s: v = 90 / 3,6 = 25 m/s.',
              'Bước 2: Khoảng cách an toàn tối thiểu theo quy tắc 3 giây là: d = v × 3 = 25 × 3 = 75 m.',
            ],
            final_answer: 'd = 75 m.',
          },
        ],
        simulation: {
          sim_key: 'speed_graph_lab',
          title: 'Mô phỏng Cổng Quang Điện & Tính Khoảng Cách An Toàn 3 Giây',
          description:
            'Thay đổi tốc độ xe để kiểm tra đồng thời tốc độ m/s, km/h và khoảng cách an toàn tối thiểu cần giữ theo quy tắc 3 giây.',
          parameters: {
            defaultSpeedMs: 25,
            defaultTimeSec: 3,
          },
          guide_steps: [
            'Đặt tốc độ ở 20 m/s (72 km/h) và thời gian t = 3 s để thấy khoảng cách an toàn 3 giây là 60 m.',
            'Đặt tốc độ ở 25 m/s (90 km/h) và t = 3 s để thấy khoảng cách an toàn tăng lên 75 m.',
          ],
          physics_insight:
            'Thời gian từ lúc mắt tài xế phát hiện nguy hiểm, não xử lý, chuyển chân sang bàn đạp phanh cho tới khi xe hãm lại cần tối thiểu khoảng 2 - 3 giây.',
        },
      },
    ],
  },
  {
    order_index: 2,
    code: 'G7-CH2',
    title: 'Chương 2: Âm thanh',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Lớp 7: Nguồn âm và bản chất sóng âm, môi trường truyền âm (rắn, lỏng, khí), mối liên hệ giữa Biên độ - Độ to (dB) và Tần số - Độ cao (Hz), hiện tượng phản xạ âm - tiếng vang và các biện pháp chống ô nhiễm tiếng ồn.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 2: Âm thanh
1. **Nguồn âm và Sự truyền sóng âm:**
   - Mọi vật phát ra âm thanh (**nguồn âm**) đều đang **dao động** (chuyển động qua lại quanh vị trí cân bằng).
   - **Sóng âm** là sự lan truyền dao động của nguồn âm trong môi trường vật chất.
   - Sóng âm truyền được trong các môi trường **Rắn, Lỏng, Khí**, nhưng **KHÔNG truyền được trong Chân không**.
   - So sánh tốc độ truyền âm: **$v_{\\text{rắn}} > v_{\\text{lỏng}} > v_{\\text{khí}}$** *(Ví dụ ở $20^\\circ\\text{C}$: trong không khí $\\approx 340\\,\\text{m/s}$, trong nước $\\approx 1500\\,\\text{m/s}$, trong thép $\\approx 6100\\,\\text{m/s}$)*.
2. **Độ to và Độ cao của âm:**
   - **Biên độ dao động ($A$) $\\rightarrow$ Độ to của âm:** Biên độ dao động là độ lệch lớn nhất của vật dao động so với vị trí cân bằng. Nguồn âm dao động với **biên độ càng lớn** thì âm phát ra **càng to**. Độ to của âm được đo bằng đơn vị **đêxiben ($\\text{dB}$)**.
   - **Tần số dao động ($f$) $\\rightarrow$ Độ cao của âm:** Tần số là **số dao động thực hiện được trong 1 giây**: $f = \\frac{N}{t}$ (đơn vị chuẩn SI là **Hertz - $\\text{Hz}$**). Nguồn âm dao động càng nhanh (**tần số $f$ càng lớn**) thì âm phát ra **càng cao (càng bổng)**; tần số càng nhỏ thì âm **càng thấp (càng trầm)**.
   - Tai người bình thường nghe được âm có tần số từ **$20\\,\\text{Hz}$ đến $20.000\\,\\text{Hz}$** (*Hạ âm*: $f < 20\\,\\text{Hz}$; *Siêu âm*: $f > 20.000\\,\\text{Hz}$).
3. **Phản xạ âm, Tiếng vang và Chống ô nhiễm tiếng ồn:**
   - **Vật phản xạ âm tốt:** Vật cứng, có bề mặt nhẵn (tường gạch, mặt đá hoa, tấm kim loại, mặt gương).
   - **Vật phản xạ âm kém (hấp thụ âm tốt):** Vật mềm, xốp, có bề mặt gồ ghề (rèm nhung, mút xốp, thảm len, tường sần sùi).
   - **Tiếng vang:** Là âm phản xạ nghe được cách biệt với âm truyền trực tiếp ít nhất **$\\frac{1}{15}\\,\\text{giây}$** (khoảng cách từ nguồn âm đến mặt chắn trong không khí tối thiểu $d \\ge 11,33\\,\\text{m}$). Công thức tính khoảng cách từ thời gian thu âm phản xạ: $d = \\frac{v \\cdot t}{2}$.`,
    key_takeaways: [
      'Nguồn âm luôn dao động. Sóng âm KHÔNG truyền được trong chân không; tốc độ truyền âm: v_rắn > v_lỏng > v_khí.',
      'Biên độ dao động (A) quyết định ĐỘ TO của âm (đơn vị dB). Tần số dao động (f = N/t) quyết định ĐỘ CAO (bổng/trầm) của âm (đơn vị Hz).',
      'Tai người nghe được âm từ 20 Hz đến 20.000 Hz (dưới 20 Hz là hạ âm, trên 20.000 Hz là siêu âm).',
      'Bài toán tiếng vang / tàu đo độ sâu đáy biển bằng siêu âm (Sonar): Sóng âm đi cả lượt đi lẫn lượt về (quãng đường 2d) nên khoảng cách d = (v · t) / 2!',
      'Ba nhóm biện pháp chống ô nhiễm tiếng ồn: (1) Tác động vào nguồn âm; (2) Phân tán âm trên đường truyền (trồng cây xanh); (3) Ngăn chặn đường truyền âm (kính 2 lớp, tường cách âm, nút bịt tai).',
    ],
    formula_cheatsheet: [
      {
        name: 'Tần số dao động của nguồn âm',
        latex: 'f = \\frac{N}{t} \\quad (\\text{Hz})',
        note: 'N: số dao động toàn phần; t: thời gian thực hiện N dao động (tính bằng giây - s).',
      },
      {
        name: 'Khoảng cách tới vật chắn từ âm phản xạ / Sonar đo đáy biển',
        latex: 'd = \\frac{s_{\\text{đi về}}}{2} = \\frac{v \\cdot t}{2}',
        note: 'v: tốc độ truyền âm trong môi trường; t: thời gian từ lúc phát âm đến lúc thu được âm phản xạ.',
      },
      {
        name: 'Điều kiện tối thiểu để nghe thấy Tiếng vang trong không khí',
        latex: 't \\ge \\frac{1}{15}\\,\\text{s} \\quad \\Leftrightarrow \\quad d_{\\min} = \\frac{340 \\cdot \\frac{1}{15}}{2} \\approx 11,33\\,\\text{m}',
        note: 'Nếu đứng gần tường dưới 11,33 m, âm phản xạ dội về quá nhanh hòa lẫn với âm trực tiếp làm âm nghe to hơn chứ không tách thành tiếng vang.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G7-C2-B1',
        title: 'Chủ đề 2.1: Mô tả sóng âm và sự truyền sóng âm',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu đặc điểm chung của mọi nguồn âm là sự dao động, bản chất sóng âm là các lớp không khí nén - dãn lan truyền, các môi trường truyền được âm và so sánh tốc độ truyền âm trong chất rắn, chất lỏng, chất khí.',
        summary_note:
          'Mọi nguồn âm đều DAO ĐỘNG. Sóng âm truyền được trong Rắn, Lỏng, Khí nhưng KHÔNG truyền được trong Chân không. Tốc độ truyền âm: v_rắn > v_lỏng > v_khí.',
        theory_sections: [
          {
            heading: '1. Nguồn âm và Dao động',
            content:
              'Các vật phát ra âm thanh được gọi là nguồn âm (ví dụ: dây đàn guitar khi gảy, mặt trống khi gõ, âm thoa khi gõ, dây thanh quản ở cổ họng khi ta nói). Khi phát ra âm, các nguồn âm đều dao động (tức là chuyển động qua lại rất nhanh quanh vị trí cân bằng). Khi vật ngừng dao động thì âm thanh cũng lập tức tắt.',
            keyPoints: [
              'Khi gảy dây đàn: Dây đàn rung động mờ đi và phát ra tiếng đàn; nếu lấy tay giữ chặt dây đàn cho ngừng dao động thì tiếng đàn tắt ngay.',
              'Khi thổi sáo: Bộ phận dao động phát ra âm chính là cột không khí bên trong ống sáo.',
            ],
          },
          {
            heading: '2. Bản chất sóng âm và Môi trường truyền âm',
            content:
              'Khi nguồn âm dao động, nó làm cho lớp không khí (hoặc các hạt vật chất) tiếp xúc với nó bị nén lại rồi dãn ra liên tiếp. Sự dao động nén – dãn này truyền từ lớp vật chất này sang lớp vật chất bên cạnh tạo thành Sóng âm. Vì cần có các hạt vật chất để truyền dao động nên sóng âm truyền được qua chất rắn, chất lỏng, chất khí nhưng hoàn toàn KHÔNG truyền được trong chân không.',
            keyPoints: [
              'Thí nghiệm chuông điện đặt trong bình thủy tinh hút hết không khí (chân không): Ta vẫn nhìn thấy búa gõ vào chuông nhưng không nghe thấy tiếng chuông kêu.',
              'Ngoài khoảng không vũ trụ là chân không nên các nhà du hành vũ trụ không thể nói chuyện trực tiếp với nhau mà phải dùng sóng vô tuyến (bộ đàm).',
            ],
            realWorldApplication:
              'Ngày xưa, để phát hiện đoàn kỵ binh ở rất xa đang phi ngựa tới, các trinh sát thường áp tai xuống mặt đất vì mặt đất (chất rắn) truyền âm nhanh hơn và tốt hơn nhiều so với không khí!',
          },
          {
            heading: '3. Tốc độ truyền âm trong các môi trường',
            content:
              'Tốc độ truyền âm phụ thuộc vào bản chất và nhiệt độ của môi trường. Nói chung, tốc độ truyền âm trong chất rắn lớn hơn trong chất lỏng, và trong chất lỏng lớn hơn trong chất khí: v_rắn > v_lỏng > v_khí.',
            keyPoints: [
              'Ở 20°C: Tốc độ truyền âm trong không khí ≈ 340 m/s; trong nước ≈ 1500 m/s; trong sắt/thép ≈ 5100 - 6100 m/s.',
              'Ánh sáng truyền trong không khí (c ≈ 300.000.000 m/s) nhanh gấp gần 1 triệu lần âm thanh (340 m/s) — đó là lý do ta luôn nhìn thấy tia chớp trước rồi vài giây sau mới nghe thấy tiếng sấm!',
            ],
          },
        ],
        quantities: [
          {
            name: 'Tốc độ truyền âm',
            symbol: 'v',
            si_unit: 'm/s (mét trên giây)',
            other_units: 'km/s',
            measuring_device: 'Cảm biến thu âm (Micro) kết hợp máy hiện sóng (Oscilloscope)',
            description: 'Quãng đường sóng âm lan truyền được trong 1 giây (v_rắn > v_lỏng > v_khí).',
          },
        ],
        formulas: [
          {
            name: 'Tính khoảng cách tới nơi xảy ra sét (Chớp và Sấm)',
            latex_expression: 's = v_{\\text{âm}} \\cdot t \\approx 340 \\cdot t',
            plain_expression: 's = 340 * t',
            variables: [
              { symbol: 's', name: 'Khoảng cách từ người quan sát đến nơi tia sét đánh', unit: 'm (mét)' },
              { symbol: 'v_{\\text{âm}}', name: 'Tốc độ truyền âm trong không khí (≈ 340 m/s)', unit: 'm/s' },
              { symbol: 't', name: 'Khoảng thời gian từ lúc nhìn thấy tia chớp đến lúc nghe thấy tiếng sấm', unit: 's (giây)' },
            ],
            derived_formulas: [
              { expression: 't = \\frac{s}{v_{\\text{âm}}}', description: 'Thời gian âm thanh truyền đi quãng đường s (không phản xạ)' },
            ],
            usage_note: 'Ánh sáng tia chớp truyền tới mắt gần như tức thời, nên thời gian trễ t chính là thời gian âm thanh tiếng sấm đi quãng đường s.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính khoảng cách tới nơi sét đánh dựa vào thời gian trễ giữa chớp và sấm',
            difficulty: 'Cơ bản',
            problem_statement:
              'Trong một cơn dông, bạn Minh nhìn thấy tia chớp lóe sáng trên bầu trời và đúng 5 giây sau mới nghe thấy tiếng sấm nổ. Biết tốc độ truyền âm trong không khí là 340 m/s. Hỏi nơi xảy ra tia sét cách chỗ bạn Minh đứng bao nhiêu mét (và đổi ra km)?',
            given_summary: 't = 5 s; v_âm = 340 m/s.',
            solution_steps: [
              'Bước 1: Vì tốc độ ánh sáng cực lớn (300.000 km/s) nên ta nhìn thấy tia chớp gần như ngay lúc sét đánh.',
              'Bước 2: Khoảng cách từ chỗ sét đánh đến chỗ bạn Minh là quãng đường âm thanh truyền đi trong 5 giây: s = v × t = 340 × 5 = 1700 m = 1,7 km.',
            ],
            final_answer: '1700 m (1,7 km).',
          },
          {
            title: 'Ví dụ 2: So sánh thời gian âm truyền trong đường ray thép và trong không khí',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một người dùng búa gõ mạnh một nhát vào đường ray xe lửa bằng thép. Một người thứ hai đứng cách đó 1020 m áp sát một tai vào đường ray thép thì nghe thấy hai tiếng gõ cách nhau một khoảng thời gian Δt. Biết tốc độ truyền âm trong không khí là 340 m/s và trong thép là 5100 m/s. Hãy giải thích tại sao lại nghe thấy 2 tiếng gõ và tính khoảng thời gian Δt giữa hai tiếng gõ đó.',
            given_summary: 's = 1020 m; v_khí = 340 m/s; v_thép = 5100 m/s.',
            solution_steps: [
              'Bước 1: Tiếng gõ thứ nhất truyền qua đường ray thép (nhanh hơn), tiếng gõ thứ hai truyền qua không khí (chậm hơn).',
              'Bước 2: Thời gian âm truyền trong thép là: t_thép = s / v_thép = 1020 / 5100 = 0,2 s.',
              'Bước 3: Thời gian âm truyền trong không khí là: t_khí = s / v_khí = 1020 / 340 = 3,0 s.',
              'Bước 4: Khoảng thời gian giữa hai lần nghe thấy tiếng gõ là: Δt = t_khí - t_thép = 3,0 - 0,2 = 2,8 s.',
            ],
            final_answer: 'Nghe thấy tiếng qua thép sau 0,2 s và qua không khí sau 3,0 s ⇒ Cách nhau Δt = 2,8 s.',
          },
        ],
        simulation: {
          sim_key: 'sound_wave_echo_lab',
          title: 'Mô phỏng Sóng Âm (Tần Số & Biên Độ) & Đo Khoảng Cách Bằng Tiếng Vang / Sonar',
          description:
            'Điều chỉnh tần số f (Hz), biên độ dao động A và môi trường truyền âm (Không khí, Nước biển, Thép) để quan sát hình dạng sóng âm trên màn hình dao động ký và thời gian dội âm phản xạ.',
          parameters: {
            defaultFreqHz: 440,
            defaultAmp: 70,
            defaultDistanceM: 340,
          },
          guide_steps: [
            'Thay đổi môi trường truyền âm từ Không khí (340 m/s) sang Nước biển (1500 m/s) và Thép (5100 m/s) để so sánh thời gian truyền âm.',
            'Tăng tần số f (Hz) và biên độ A để quan sát sóng âm mau hơn (âm cao) và cao hơn (âm to).',
          ],
          physics_insight:
            'Các phân tử trong chất rắn liên kết rất chặt chẽ và gần nhau hơn nhiều so với chất khí, nên dao động sóng âm truyền qua chất rắn nhanh gấp hơn 15 lần trong không khí.',
        },
      },
      {
        order_index: 2,
        code: 'G7-C2-B2',
        title: 'Chủ đề 2.2: Độ to và Độ cao của âm (Biên độ & Tần số)',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Phân biệt rạch ròi hai đặc trưng quan trọng nhất của âm: Độ to của âm phụ thuộc vào Biên độ dao động (đo bằng dB) và Độ cao (bổng/trầm) của âm phụ thuộc vào Tần số dao động f = N/t (đo bằng Hz); biết dải tần số nghe được của tai người, hạ âm và siêu âm.',
        summary_note:
          'Tránh nhầm lẫn kinh điển: BIÊN ĐỘ lớn → Âm TO (nhỏ → Âm NHỎ); TẦN SỐ lớn (dao động nhanh) → Âm CAO / BỔNG (tần số nhỏ → Âm THẤP / TRẦM). Công thức tần số: f = N / t (Hz, với t tính bằng giây).',
        theory_sections: [
          {
            heading: '1. Biên độ dao động và Độ to của âm',
            content:
              'Biên độ dao động (ký hiệu A) là độ lệch lớn nhất của vật dao động so với vị trí cân bằng của nó. Khi ta gảy dây đàn mạnh hoặc gõ trống mạnh, dây đàn và mặt trống lệch khỏi vị trí cân bằng nhiều hơn (biên độ dao động lớn hơn) và phát ra âm TO hơn. Độ to của âm được đo bằng đơn vị đêxiben (dB).',
            keyPoints: [
              'Biên độ dao động càng lớn → Âm phát ra càng TO.',
              'Biên độ dao động càng nhỏ → Âm phát ra càng NHỎ.',
              'Trên màn hình máy hiện sóng (dao động ký): Đồ thị sóng âm có đỉnh sóng càng cao thì biên độ càng lớn (âm càng to).',
            ],
          },
          {
            heading: '2. Tần số dao động và Độ cao (Bổng - Trầm) của âm',
            content:
              'Số dao động mà vật thực hiện được trong 1 giây gọi là Tần số dao động (ký hiệu là f, đơn vị chuẩn SI là Hertz - Hz). Công thức: f = N / t (với N là số dao động thực hiện trong t giây). Độ cao của âm hoàn toàn phụ thuộc vào tần số dao động của nguồn âm:',
            keyPoints: [
              'Vật dao động càng nhanh → Tần số f càng LỚN → Âm phát ra càng CAO (càng BỔNG).',
              'Vật dao động càng chậm → Tần số f càng NHỎ → Âm phát ra càng THẤP (càng TRẦM).',
              'Giọng nữ thường cao (thanh/bổng) hơn giọng nam vì dây thanh quản của nữ dao động với tần số lớn hơn của nam.',
              'Trên màn hình dao động ký: Trong cùng một khoảng thời gian, đồ thị sóng âm có các đỉnh sóng càng mau (dày đặc) thì tần số càng lớn (âm càng bổng).',
            ],
            realWorldApplication:
              'Khi lên dây đàn guitar, người nghệ sĩ vặn khóa đàn làm dây đàn căng hơn để tăng tần số dao động, giúp nốt nhạc phát ra cao hơn đúng chuẩn (ví dụ nốt La chuẩn có tần số f = 440 Hz).',
          },
          {
            heading: '3. Ngưỡng nghe của tai người, Hạ âm và Siêu âm',
            content:
              'Tai người bình thường chỉ nghe được các âm có tần số nằm trong khoảng từ 20 Hz đến 20.000 Hz (20 kHz):',
            keyPoints: [
              'Hạ âm (f < 20 Hz): Âm có tần số nhỏ hơn 20 Hz, tai người không nghe thấy nhưng voi, chim bồ câu có thể nghe được để liên lạc từ xa hoặc cảm nhận động đất.',
              'Siêu âm (f > 20.000 Hz): Âm có tần số lớn hơn 20.000 Hz, tai người không nghe thấy nhưng dơi, cá heo, chó có thể phát và thu siêu âm.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Tần số dao động',
            symbol: 'f',
            si_unit: 'Hz (Hertz)',
            other_units: 'kHz (1 kHz = 1000 Hz)',
            measuring_device: 'Máy đo tần số, máy hiện sóng (Oscilloscope)',
            description: 'Số dao động thực hiện được trong 1 giây. Quyết định độ cao (bổng/trầm) của âm.',
          },
          {
            name: 'Mức cường độ âm (Độ to của âm)',
            symbol: 'L',
            si_unit: 'dB (đêxiben)',
            other_units: 'B (Ben, 1 B = 10 dB)',
            measuring_device: 'Máy đo độ ồn (Sound level meter)',
            description: 'Đánh giá độ to của âm thanh (Thì thầm ~20 dB; Nói chuyện ~60 dB; Ngưỡng đau tai ~130 dB).',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính Tần số dao động của nguồn âm',
            latex_expression: 'f = \\frac{N}{t}',
            plain_expression: 'f = N / t',
            variables: [
              { symbol: 'f', name: 'Tần số dao động', unit: 'Hz (Hertz)' },
              { symbol: 'N', name: 'Tổng số dao động vật thực hiện được', unit: 'Dao động' },
              { symbol: 't', name: 'Thời gian thực hiện N dao động', unit: 's (giây)' },
            ],
            derived_formulas: [
              { expression: 'N = f \\cdot t', description: 'Tính tổng số dao động thực hiện trong t giây' },
              { expression: 't = \\frac{N}{f}', description: 'Tính thời gian để thực hiện N dao động' },
            ],
            usage_note: 'Bắt buộc phải đổi thời gian t ra đơn vị GIÂY (s) trước khi chia! (Ví dụ: 1 phút = 60 giây).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính tần số vỗ cánh của côn trùng và so sánh độ cao của âm',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Khi bay, cánh của con ong mật đập 19.800 lần trong 1 phút, còn cánh của con muỗi đập 12.000 lần trong 20 giây. Hãy tính tần số dao động của cánh ong và cánh muỗi, từ đó cho biết con nào phát ra âm thanh cao (bổng) hơn?',
            given_summary: 'Ong: N1 = 19.800 dao động, t1 = 1 phút = 60 s. Muỗi: N2 = 12.000 dao động, t2 = 20 s.',
            solution_steps: [
              'Bước 1: Tần số dao động của cánh ong là: f1 = N1 / t1 = 19.800 / 60 = 330 Hz.',
              'Bước 2: Tần số dao động của cánh muỗi là: f2 = N2 / t2 = 12.000 / 20 = 600 Hz.',
              'Bước 3: Vì f2 = 600 Hz > f1 = 330 Hz nên cánh muỗi dao động nhanh hơn và phát ra âm thanh cao (vo ve bổng) hơn tiếng ong kêu.',
            ],
            final_answer: 'f_ong = 330 Hz; f_muỗi = 600 Hz ⇒ Âm do muỗi phát ra cao hơn.',
          },
          {
            title: 'Ví dụ 2: Nhận biết âm nghe được, hạ âm và siêu âm',
            difficulty: 'Vận dụng',
            problem_statement:
              'Bốn vật dao động trong không khí: Vật A thực hiện 450 dao động trong 30 giây; Vật B thực hiện 3000 dao động trong 5 giây; Vật C dao động với tần số 25 kHz; Vật D thực hiện 10.000 dao động trong 2 giây. Tai người bình thường có thể nghe được âm phát ra từ những vật nào?',
            given_summary: 'Tai người nghe được từ 20 Hz đến 20.000 Hz.',
            solution_steps: [
              'Bước 1: Tính tần số của từng vật: f_A = 450 / 30 = 15 Hz (< 20 Hz: Hạ âm, không nghe được).',
              'Bước 2: f_B = 3000 / 5 = 600 Hz (nằm trong khoảng 20 Hz - 20.000 Hz: Nghe được).',
              'Bước 3: f_C = 25 kHz = 25.000 Hz (> 20.000 Hz: Siêu âm, không nghe được).',
              'Bước 4: f_D = 10.000 / 2 = 5000 Hz (nằm trong khoảng 20 Hz - 20.000 Hz: Nghe được).',
            ],
            final_answer: 'Tai người nghe được âm từ vật B (600 Hz) và vật D (5000 Hz).',
          },
        ],
        simulation: {
          sim_key: 'sound_wave_echo_lab',
          title: 'Mô phỏng Máy Hiện Sóng Âm (Tần Số f → Độ Cao & Biên Độ A → Độ To)',
          description:
            'Kéo thanh trượt Tần số f (Hz) và Biên độ A để quan sát trực tiếp sự thay đổi hình dạng sóng âm trên màn hình dao động ký.',
          parameters: {
            defaultFreqHz: 600,
            defaultAmp: 80,
            defaultDistanceM: 170,
          },
          guide_steps: [
            'Kéo thanh Tần số f từ thấp (100 Hz - Âm trầm) lên cao (1000 Hz - Âm bổng) để thấy các đỉnh sóng dày mau lên.',
            'Kéo thanh Biên độ A để thấy chiều cao đỉnh sóng tăng/giảm tương ứng với Độ to (dB).',
          ],
          physics_insight:
            'Tần số f (Hz) chỉ phụ thuộc vào tốc độ dao động của nguồn âm, còn biên độ A phụ thuộc vào năng lượng kích thích mạnh hay nhẹ.',
        },
      },
      {
        order_index: 3,
        code: 'G7-C2-B3',
        title: 'Chủ đề 2.3: Phản xạ âm, Tiếng vang và Chống ô nhiễm tiếng ồn',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu hiện tượng phản xạ âm khi gặp mặt chắn, phân biệt vật phản xạ âm tốt và vật phản xạ âm kém, giải bài toán tính khoảng cách bằng tiếng vang / tàu Sonar d = (v·t)/2 và nắm vững 3 nhóm biện pháp chống ô nhiễm tiếng ồn.',
        summary_note:
          'Công thức vàng cho mọi bài toán Tiếng vang & Sonar đo độ sâu biển: d = (v · t) / 2 (Phải chia 2 vì sóng âm đi từ nguồn tới vật chắn rồi phản xạ quay về chỗ cũ, tức đi quãng đường 2d!). Điều kiện có tiếng vang trong không khí: t ≥ 1/15 s (khoảng cách d ≥ 11,33 m).',
        theory_sections: [
          {
            heading: '1. Hiện tượng phản xạ âm và Tiếng vang',
            content:
              'Sóng âm khi đang lan truyền mà gặp một mặt chắn thì sẽ bị dội ngược trở lại gọi là hiện tượng phản xạ âm (âm dội lại gọi là âm phản xạ). Tai người chỉ phân biệt được hai âm tách rời nhau nếu âm phản xạ truyền đến tai chậm hơn âm trực tiếp ít nhất là 1/15 giây. Khi đó âm phản xạ nghe được tách biệt hẳn với âm phát ra gọi là Tiếng vang.',
            keyPoints: [
              'Trong không khí (v ≈ 340 m/s), để có tiếng vang thì khoảng cách tối thiểu từ người nói đến bức tường chắn là: d_min = (340 × 1/15) / 2 ≈ 11,33 m.',
              'Trong phòng nhỏ (d < 11,33 m), âm phản xạ từ tường dội lại gần như cùng lúc với âm trực tiếp nên ta không nghe thấy tiếng vang mà nghe thấy tiếng nói của mình TO HƠN so với khi nói ngoài cánh đồng trống!',
            ],
            realWorldApplication:
              'Tàu biển dùng thiết bị Sonar phát chùm siêu âm thẳng xuống đáy biển và đo thời gian t thu tín hiệu phản xạ để tính độ sâu đáy biển: h = (v · t) / 2. Loài dơi cũng phát siêu âm để săn mồi và tránh chướng ngại vật trong đêm tối.',
          },
          {
            heading: '2. Vật phản xạ âm tốt và Vật phản xạ âm kém',
            content:
              '(1) Các vật cứng, có bề mặt phẳng và nhẵn (như tường bê tông, mặt gương, tấm kim loại, gạch men, mặt đá hoa) thì phản xạ âm tốt (hấp thụ âm kém). (2) Các vật mềm, xốp, có bề mặt gồ ghề, lỗ chỗ (như rèm nhung, thảm len, mút xốp, cao su xốp, tường sần sùi) thì phản xạ âm kém (hấp thụ âm tốt).',
            keyPoints: [
              'Trong phòng thu âm, rạp chiếu phim, nhà hát: Tường thường làm sần sùi, ốp gỗ xốp và treo rèm nhung dày để hấp thụ âm phản xạ, làm giảm tiếng vang giúp âm thanh trong trẻo rõ nét.',
            ],
          },
          {
            heading: '3. Ô nhiễm tiếng ồn và Biện pháp giảm tiếng ồn',
            content:
              'Khi tiếng ồn to (thường trên 70 - 80 dB) và kéo dài gây ảnh hưởng xấu đến sức khỏe, giấc ngủ và sự tập trung của con người thì gọi là ô nhiễm tiếng ồn. Có 3 hướng chính để chống ô nhiễm tiếng ồn:',
            keyPoints: [
              '(1) Tác động vào nguồn âm: Cấm bóp còi gần bệnh viện/trường học, lắp ống xả giảm thanh cho xe máy, vặn nhỏ tivi/loa.',
              '(2) Phân tán âm trên đường truyền: Trồng nhiều cây xanh xung quanh trường học, bệnh viện, khu dân cư để tán lá cây làm phản xạ âm đi nhiều hướng khác nhau.',
              '(3) Ngăn chặn âm truyền tới tai: Làm tường cách âm, lắp cửa kính 2 lớp, đóng kín cửa hoặc đeo nút bịt tai / tai nghe chống ồn.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Khoảng cách từ nguồn âm đến mặt phản xạ (hoặc độ sâu đáy biển)',
            symbol: 'd, h',
            si_unit: 'm (mét)',
            other_units: 'km',
            measuring_device: 'Máy đo sâu hồi âm (Sonar), cảm biến siêu âm',
            description: 'Khoảng cách một chiều từ nguồn phát âm đến vật chắn phản xạ âm.',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính khoảng cách từ thời gian thu âm phản xạ (Tiếng vang / Sonar)',
            latex_expression: 'd = \\frac{v \\cdot t}{2}',
            plain_expression: 'd = (v * t) / 2',
            variables: [
              { symbol: 'd', name: 'Khoảng cách từ nguồn âm đến mặt chắn (hoặc độ sâu đáy biển)', unit: 'm (mét)' },
              { symbol: 'v', name: 'Tốc độ truyền âm trong môi trường (không khí ≈ 340 m/s; nước biển ≈ 1500 m/s)', unit: 'm/s' },
              { symbol: 't', name: 'Tổng thời gian từ lúc phát âm đến lúc nhận được âm phản xạ', unit: 's (giây)' },
            ],
            derived_formulas: [
              { expression: 't = \\frac{2 \\cdot d}{v}', description: 'Tính thời gian từ lúc phát âm đến lúc nghe thấy tiếng vang' },
              { expression: 'v = \\frac{2 \\cdot d}{t}', description: 'Xác định tốc độ truyền âm dựa vào thí nghiệm phản xạ âm' },
            ],
            usage_note: 'CẢNH BÁO QUAN TRỌNG: Quãng đường sóng âm đi cả lượt đi và lượt về là s = 2d, nên tính khoảng cách d bắt buộc phải CHIA CHO 2!',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tàu biển dùng siêu âm (Sonar) đo độ sâu của đáy biển',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một tàu khảo sát phát một tín hiệu siêu âm thẳng đứng xuống đáy biển và thu được tín hiệu phản xạ trở lại sau 1,6 giây. Biết tốc độ truyền siêu âm trong nước biển là 1500 m/s. Hãy tính độ sâu của đáy biển tại vị trí đó.',
            given_summary: 't = 1,6 s; v_nước = 1500 m/s.',
            solution_steps: [
              'Bước 1: Trong thời gian t = 1,6 s, sóng siêu âm đã đi từ tàu xuống đáy biển rồi phản xạ ngược từ đáy biển lên tàu (quãng đường gấp đôi độ sâu h).',
              'Bước 2: Áp dụng công thức độ sâu: h = (v × t) / 2 = (1500 × 1,6) / 2 = 2400 / 2 = 1200 m.',
            ],
            final_answer: 'h = 1200 m.',
          },
          {
            title: 'Ví dụ 2: Kiểm tra điều kiện nghe thấy tiếng vang trong hang động',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một người đứng trước một vách đá cách đó 68 m và hét to một tiếng. Biết tốc độ truyền âm trong không khí là 340 m/s. Hỏi sau bao lâu người đó nghe được âm phản xạ từ vách đá dội lại và người đó có nghe thấy tiếng vang hay không? Vì sao?',
            given_summary: 'd = 68 m; v = 340 m/s.',
            solution_steps: [
              'Bước 1: Tổng quãng đường âm thanh truyền từ người tới vách đá rồi dội ngược về tai người đó là: s = 2 × d = 2 × 68 = 136 m.',
              'Bước 2: Thời gian từ lúc hét đến lúc nghe thấy âm phản xạ là: t = s / v = 136 / 340 = 0,4 giây.',
              'Bước 3: Vì t = 0,4 s ≥ 1/15 s (0,067 s) nên người đó NGHE RÕ TIẾNG VANG.',
            ],
            final_answer: 't = 0,4 s; Có nghe thấy tiếng vang vì 0,4 s > 1/15 s (68 m > 11,33 m).',
          },
        ],
        simulation: {
          sim_key: 'sound_wave_echo_lab',
          title: 'Mô phỏng Phản Xạ Âm, Tiếng Vang & Tàu Đo Độ Sâu Đáy Biển (Sonar)',
          description:
            'Thay đổi khoảng cách tới vách núi hoặc độ sâu đáy biển để kiểm tra thời gian thu âm phản xạ t = 2d/v và điều kiện tạo tiếng vang.',
          parameters: {
            defaultFreqHz: 500,
            defaultAmp: 75,
            defaultDistanceM: 85,
          },
          guide_steps: [
            'Kéo khoảng cách d < 11,3 m trong không khí để thấy thời gian phản xạ t < 1/15 s (Không có tiếng vang, chỉ làm âm to hơn).',
            'Kéo khoảng cách d > 12 m hoặc chuyển sang môi trường Nước biển (1500 m/s) để tính độ sâu đáy biển theo công thức d = v·t / 2.',
          ],
          physics_insight:
            'Mọi phép đo khoảng cách bằng sóng phản xạ (Sonar siêu âm, Radar sóng điện từ, Lidar laser) đều dựa trên nguyên lý quãng đường khứ hồi 2d = v·t.',
        },
      },
    ],
  },
];
