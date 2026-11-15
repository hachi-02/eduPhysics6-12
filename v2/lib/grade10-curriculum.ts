import { SeedChapterData } from './grade6-curriculum';
import { GRADE_10_CHAPTERS_PART2 } from './grade10-curriculum-part2';

export const GRADE_10_CHAPTERS_PART1: SeedChapterData[] = [
  {
    order_index: 1,
    code: 'G10-CH1',
    title: 'Chương 1: Mở đầu & Sai số phép đo Vật lí',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Vật lí 10 GDPT 2018 (Kết nối tri thức Bài 1-3, Chân trời sáng tạo Bài 1-3, Cánh Diều Bài 1): Đối tượng, mục tiêu và phương pháp nghiên cứu thực nghiệm và lí thuyết trong Vật lí học; quy tắc an toàn khi làm việc trong phòng thí nghiệm; các phép đo trực tiếp và gián tiếp; cách tính sai số ngẫu nhiên, sai số dụng cụ, sai số tuyệt đối, sai số tỉ đối và quy tắc viết kết quả đo chuẩn quốc tế A = A_tb ± ΔA.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 1: Mở đầu & Sai số phép đo Vật lí
1. **Đối tượng, Phương pháp nghiên cứu và Quy tắc an toàn:**
   - **Đối tượng nghiên cứu của Vật lí:** Các dạng vận động của vật chất (chất và trường) và năng lượng.
   - **Hai phương pháp nghiên cứu chính:**
     - *Phương pháp thực nghiệm:* Đặt câu hỏi $\\rightarrow$ Quan sát $\\rightarrow$ Đề xuất giả thuyết $\\rightarrow$ Thiết kế và làm thí nghiệm $\\rightarrow$ Rút ra kết luận / quy luật.
     - *Phương pháp lí thuyết:* Sử dụng ngôn ngữ toán học và mô hình lí thuyết để suy diễn logic, dự đoán các hiện tượng mới trước khi kiểm chứng thực nghiệm.
   - **Quy tắc an toàn trong phòng thí nghiệm:** Tuân thủ biển báo cảnh báo nguy hiểm điện áp cao, hóa chất độc hại, nguồn phóng xạ, tia laser; không cắm tải vượt định mức; ngắt nguồn điện trước khi tháo lắp mạch.
2. **Phép đo đại lượng vật lí và Hệ đơn vị SI:**
   - Phép đo là việc so sánh đại lượng vật lí cần đo với đại lượng cùng loại được quy ước làm đơn vị.
   - **7 đơn vị cơ bản trong hệ SI:** Chiều dài ($\\text{m}$), Khối lượng ($\\text{kg}$), Thời gian ($\\text{s}$), Cường độ dòng điện ($\\text{A}$), Nhiệt độ nhiệt động học ($\\text{K}$), Lượng chất ($\\text{mol}$), Cường độ sáng ($\\text{cd}$).
   - **Phép đo trực tiếp:** So sánh trực tiếp giá trị qua dụng cụ đo (dùng thước đo chiều dài, cân đo khối lượng, đồng hồ đo thời gian).
   - **Phép đo gián tiếp:** Xác định giá trị thông qua công thức toán học từ các đại lượng đo trực tiếp (ví dụ: đo khối lượng riêng $D = m / V$, đo tốc độ $v = s / t$).
3. **Cách xác định sai số và Viết kết quả đo:**
   - Giá trị trung bình của $n$ lần đo:
     $$\\overline{A} = \\frac{A_1 + A_2 + \\dots + A_n}{n}$$
   - Sai số ngẫu nhiên tuyệt đối trung bình:
     $$\\overline{\\Delta A} = \\frac{|\\overline{A} - A_1| + |\\overline{A} - A_2| + \\dots + |\\overline{A} - A_n|}{n}$$
   - Sai số tuyệt đối toàn phần:
     $$\\Delta A = \\overline{\\Delta A} + \\Delta A_{\\text{dc}}$$
     ($\\Delta A_{\\text{dc}}$ là sai số dụng cụ, thông thường lấy bằng nửa độ chia nhỏ nhất hoặc bằng 1 độ chia nhỏ nhất theo quy định dụng cụ).
   - Sai số tỉ đối (phần trăm):
     $$\\delta A = \\frac{\\Delta A}{\\overline{A}} \\times 100\\%$$
   - **Quy tắc lan truyền sai số:**
     - Phép cộng/trừ: $F = X \\pm Y \\implies \\Delta F = \\Delta X + \\Delta Y$.
     - Phép nhân/chia: $F = X \\cdot Y$ hoặc $F = \\frac{X}{Y} \\implies \\delta F = \\delta X + \\delta Y$.
     - Phép lũy thừa: $F = X^n \\implies \\delta F = n \\cdot \\delta X$.
   - **Cách ghi kết quả phép đo:**
     $$A = \\overline{A} \\pm \\Delta A$$
     (Sai số tuyệt đối $\\Delta A$ thường chỉ lấy đến 1 hoặc 2 chữ số có nghĩa; giá trị trung bình $\\overline{A}$ được làm tròn đến bậc thập phân tương ứng với $\\Delta A$).`,
    key_takeaways: [
      'Vật lí là khoa học thực nghiệm: Mọi giả thuyết hay mô hình lí thuyết đều phải được kiểm chứng bằng thực nghiệm chính xác.',
      'Công thức tổng quát tính sai số: ΔA = ΔA_tb + ΔA_dc; sai số tỉ đối δA = (ΔA / A_tb) · 100%.',
      'Quy tắc lan truyền sai số: Sai số của tích hoặc thương bằng tổng các sai số tỉ đối; sai số của lũy thừa bằng bậc lũy thừa nhân sai số tỉ đối.',
    ],
    formula_cheatsheet: [
      {
        name: 'Giá trị trung bình và Sai số tuyệt đối',
        latex: '\\overline{A} = \\frac{\\sum_{i=1}^n A_i}{n}; \\quad \\Delta A = \\overline{\\Delta A} + \\Delta A_{\\text{dc}}',
        note: 'A_i: kết quả lần đo thứ i; ΔA_dc: sai số dụng cụ đo.',
      },
      {
        name: 'Sai số tỉ đối (phần trăm)',
        latex: '\\delta A = \\frac{\\Delta A}{\\overline{A}} \\times 100\\%',
        note: 'Sai số tỉ đối càng nhỏ thì phép đo càng có độ chính xác cao.',
      },
      {
        name: 'Lan truyền sai số của tích, thương và lũy thừa',
        latex: 'F = \\frac{X^a \\cdot Y^b}{Z^c} \\implies \\delta F = a \\cdot \\delta X + b \\cdot \\delta Y + c \\cdot \\delta Z',
        note: 'Áp dụng tính sai số đo gián tiếp như khối lượng riêng, gia tốc rơi tự do.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G10-CH1-TP1',
        title: 'Chủ đề 1.1: Đối tượng, Phương pháp nghiên cứu và Quy tắc an toàn',
        textbook_tags: ['KNTT Bài 1-2', 'CTST Bài 1-2', 'CD Bài 1'],
        overview:
          'Tìm hiểu đối tượng, phạm vi nghiên cứu của Vật lí học, vai trò của Vật lí đối với sự phát triển của công nghệ và đời sống. Nhận thức sâu sắc hai phương pháp nghiên cứu thực nghiệm và lí thuyết. Nắm vững hệ thống biển báo an toàn và các nguyên tắc bảo hộ lao động trong phòng thực hành Vật lí.',
        summary_note:
          'Ghi nhớ: Quy trình nghiên cứu thực nghiệm: Quan sát → Giả thuyết → Thí nghiệm kiểm chứng → Kết luận. Luôn đọc kĩ thông số kĩ thuật và hướng dẫn trước khi sử dụng thiết bị điện/quang học.',
        theory_sections: [
          {
            heading: '1. Đối tượng và Phương pháp nghiên cứu Vật lí học',
            content:
              'Vật lí học là ngành khoa học tự nhiên nghiên cứu các dạng vận động của vật chất và năng lượng, từ thang vi mô (hạt sơ cấp, nguyên tử, phân tử) đến thang vĩ mô (vật thể hàng ngày, hành tinh, thiên hà). Phương pháp thực nghiệm là nền tảng: nhà vật lí tiến hành các thí nghiệm trong điều kiện có kiểm soát để thu thập số liệu khách quan, kiểm chứng các giả thuyết. Phương pháp lí thuyết vận dụng các công cụ toán học để xây dựng mô hình trừu tượng, từ đó giải thích các hiện tượng và tiên đoán những phát minh mới.',
            keyPoints: [
              'Vật lí học thúc đẩy các cuộc cách mạng công nghiệp: từ động cơ hơi nước, điện từ học, công nghệ bán dẫn đến máy tính lượng tử.',
              'Mô hình hóa (chất điểm, vật rắn tuyệt đối, khí lý tưởng) là phương pháp tư duy trừu tượng đặc trưng của Vật lí.',
            ],
            realWorldApplication:
              'Nhờ mô hình hạt ánh sáng (photon) của Einstein và cơ học lượng tử, con người đã chế tạo ra pin mặt trời, tia laser và các vi mạch bán dẫn máy tính hiện đại.',
          },
          {
            heading: '2. Quy tắc an toàn trong phòng thí nghiệm Vật lí',
            content:
              'Làm việc trong phòng thí nghiệm đòi hỏi kỉ luật cao để ngăn ngừa tai nạn điện giật, cháy nổ hoặc bỏng nhiệt. Học sinh phải nhận diện chính xác các biển báo an toàn (tam giác vàng cảnh báo nguy hiểm, hình tròn viền đỏ cấm đoán, hình vuông xanh dương chỉ dẫn bắt buộc). Khi sử dụng điện, tuyệt đối không chạm tay ướt vào ổ cắm, cắm đúng cực nguồn điện một chiều (DC), kiểm tra thang đo đồng hồ vạn năng trước khi đo để tránh làm cháy cầu chì.',
            keyPoints: [
              'Không cắm điện khi chưa được giáo viên hướng dẫn kiểm tra sơ đồ mạch.',
              'Tắt công tắc nguồn điện ngay lập tức khi phát hiện mùi khét hoặc khói bốc lên.',
            ],
            realWorldApplication:
              'Việc trang bị aptomat chống giật ELCB và nối đất an toàn cho các thiết bị thí nghiệm giúp triệt tiêu nguy cơ điện giật nguy hiểm cho học sinh.',
          },
        ],
        quantities: [
          {
            name: 'Thời gian',
            symbol: 't',
            si_unit: 'Giây (s)',
            other_units: 'ms, phút (min), giờ (h)',
            measuring_device: 'Đồng hồ bấm giây điện tử, cổng quang điện và đồng hồ đo thời gian hiện số',
            description: 'Đại lượng đo khoảng cách thời gian giữa hai sự kiện biến cố vật lí.',
          },
          {
            name: 'Chiều dài',
            symbol: 'l (hoặc d, s)',
            si_unit: 'Mét (m)',
            other_units: 'mm, cm, km, inch',
            measuring_device: 'Thước cuộn, thước kẻ, thước kẹp cặp (panme)',
            description: 'Khoảng cách không gian giữa hai điểm trong hệ tọa độ khảo sát.',
          },
        ],
        formulas: [
          {
            name: 'Phân tích thứ nguyên cơ bản',
            latex_expression: '[v] = L \\cdot T^{-1}; \\quad [a] = L \\cdot T^{-2}; \\quad [F] = M \\cdot L \\cdot T^{-2}',
            plain_expression: '[v] = L/T; [a] = L/T^2; [F] = M*L/T^2',
            variables: [
              { symbol: 'L', name: 'Thứ nguyên chiều dài (Length)', unit: 'm' },
              { symbol: 'M', name: 'Thứ nguyên khối lượng (Mass)', unit: 'kg' },
              { symbol: 'T', name: 'Thứ nguyên thời gian (Time)', unit: 's' },
            ],
            derived_formulas: [
              { expression: '[A] = [W] = M \\cdot L^2 \\cdot T^{-2}', description: 'Thứ nguyên của công và năng lượng (Joule)' },
              { expression: '[P] = M \\cdot L^2 \\cdot T^{-3}', description: 'Thứ nguyên của công suất (Watt)' },
            ],
            usage_note: 'Hai vế của bất kì phương trình vật lí đúng đắn nào đều phải có cùng thứ nguyên (tính đồng nhất về thứ nguyên).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Kiểm tra tính đúng đắn của công thức bằng phương pháp thứ nguyên',
            difficulty: 'thong_hieu',
            problem_statement:
              'Một học sinh đề xuất công thức tính quãng đường s đi được của một vật rơi tự do không vận tốc đầu sau thời gian t là s = 2 · g · t. Hãy sử dụng phân tích thứ nguyên để chứng minh công thức này không thể đúng về mặt vật lí.',
            given_summary: 'Công thức đề xuất: s = 2 · g · t. Biết s có thứ nguyên chiều dài [s] = L, g có thứ nguyên gia tốc [g] = L·T^-2, t có thứ nguyên thời gian [t] = T.',
            solution_steps: [
              'Bước 1: Xác định thứ nguyên của vế trái: [VT] = [s] = L (chiều dài, đơn vị mét).',
              'Bước 2: Xác định thứ nguyên của vế phải (hằng số số học 2 là số không thứ nguyên): [VP] = [g] · [t] = (L · T^-2) · T = L · T^-1 = L / T (thứ nguyên của vận tốc, đơn vị m/s).',
              'Bước 3: So sánh hai vế: [VT] = L ≠ [VP] = L · T^-1. Hai vế không đồng nhất về thứ nguyên.',
              'Bước 4: Kết luận: Công thức s = 2gt là sai về mặt vật lí (công thức đúng là s = (1/2)g·t^2 có thứ nguyên [g·t^2] = (L·T^-2)·T^2 = L).',
            ],
            final_answer: 'Công thức sai vì vế trái mang thứ nguyên độ dài L còn vế phải mang thứ nguyên vận tốc L/T.',
          },
        ],
        simulation: {
          sim_key: 'g10_safety_units_lab',
          title: 'Phòng thực hành ảo: An toàn và Chuẩn đo lường SI',
          description:
            'Lắp ráp các module thí nghiệm; kiểm tra quy tắc an toàn điện và nhận diện biển báo; thực hành phân tích thứ nguyên và chuyển đổi hệ đơn vị đo lường quốc tế SI.',
          parameters: { currentMa: 50, voltageV: 12, fuseRatingA: 1.0, isGrounded: true },
          guide_steps: [
            'Chọn các linh kiện trong kho và kéo thả vào bảng mạch thí nghiệm.',
            'Cố tình tăng điện áp vượt ngưỡng cho phép để quan sát cầu chì tự ngắt bảo vệ an toàn.',
            'Kiểm tra tính đồng nhất thứ nguyên của các đại lượng lực, công suất và động năng.',
          ],
          physics_insight:
            'Phân tích thứ nguyên là công cụ kiểm tra sơ bộ cực mạnh giúp phát hiện ngay lập tức các sai sót nhầm lẫn trong quá trình biến đổi đại số công thức vật lí.',
        },
      },
      {
        order_index: 2,
        code: 'G10-CH1-TP2',
        title: 'Chủ đề 1.2: Phép đo đại lượng vật lí và Cách xác định sai số',
        textbook_tags: ['KNTT Bài 3', 'CTST Bài 3', 'CD Bài 1'],
        overview:
          'Khảo sát bản chất của sai số ngẫu nhiên và sai số hệ thống trong phép đo vật lí. Rèn luyện kĩ năng tính giá trị trung bình, sai số tuyệt đối toàn phần ΔA = ΔA_tb + ΔA_dc, sai số tỉ đối δA và quy tắc viết kết quả đo đúng chữ số có nghĩa theo chuẩn quốc tế.',
        summary_note:
          'Ghi nhớ: Kết quả đo: A = A_tb ± ΔA. Phép nhân/chia: δF = δX + δY. Sai số tuyệt đối ΔA làm tròn đến 1 hoặc 2 chữ số có nghĩa; A_tb làm tròn đến cùng hàng thập phân với ΔA.',
        theory_sections: [
          {
            heading: '1. Phân loại Sai số trong đo lường Vật lí',
            content:
              'Mọi phép đo trong thực tế đều có sai số do giới hạn của giác quan con người, độ chính xác của dụng cụ đo hoặc ảnh hưởng biến động từ môi trường. Sai số được phân làm hai loại chính: (1) Sai số hệ thống (Systematic error): là sai số có tính quy luật lặp lại do dụng cụ đo bị lệch điểm 0 (chưa hiệu chỉnh kim về 0) hoặc chia độ sai; có thể loại trừ bằng cách hiệu chỉnh kĩ càng; (2) Sai số ngẫu nhiên (Random error): là sai số không có nguyên nhân rõ ràng do biến động nhiệt độ, gió nhẹ hoặc phản xạ bấm đồng hồ không đều của người đo; có thể làm giảm bằng cách đo lặp lại nhiều lần rồi lấy giá trị trung bình.',
            keyPoints: [
              'Sai số dụng cụ ΔA_dc thông thường lấy bằng một nửa độ chia nhỏ nhất (ĐCNN) hoặc 1 ĐCNN.',
              'Đo càng nhiều lần thì sai số ngẫu nhiên trung bình càng nhỏ lại.',
            ],
            realWorldApplication:
              'Trong giải điền kinh Olympic, người ta dùng súng bắn kết nối cảm biến điện tử kích hoạt camera photo-finish tự động để triệt tiêu hoàn toàn sai số ngẫu nhiên do phản xạ tay người bấm đồng hồ cơ.',
          },
          {
            heading: '2. Quy tắc lan truyền sai số và Ghi kết quả đo',
            content:
              'Đối với phép đo gián tiếp một đại lượng F = f(X, Y, Z), sai số tỉ đối của đại lượng F được tính bằng tổng sai số tỉ đối của các biến số độc lập nhân với số mũ tương ứng: nếu F = X^a · Y^b / Z^c thì δF = a·δX + b·δY + c·δZ. Từ sai số tỉ đối, tính ngược lại sai số tuyệt đối: ΔF = δF · F_tb. Khi biểu diễn kết quả cuối cùng F = F_tb ± ΔF, sai số tuyệt đối ΔF được làm tròn đến 1 chữ số có nghĩa (hoặc 2 chữ số nếu chữ số đầu là 1 hoặc 2); giá trị trung bình F_tb được làm tròn đến hàng chữ số cùng bậc với ΔF.',
            keyPoints: [
              'Chữ số có nghĩa bao gồm tất cả các chữ số khác 0 và các chữ số 0 nằm giữa hoặc ở bên phải dấu phẩy thập phân.',
              'Ví dụ: 0,00450 có 3 chữ số có nghĩa (4, 5, 0).',
            ],
            realWorldApplication:
              'Kĩ sư chế tạo gia công cơ khí chính xác đòi hỏi dung sai kích thước trục bạc đạn đến cấp micromét (μm) để đảm bảo độ khít và tuổi thọ động cơ.',
          },
        ],
        quantities: [
          {
            name: 'Sai số tuyệt đối',
            symbol: '\\Delta A',
            si_unit: 'Cùng đơn vị với đại lượng đo A',
            other_units: 'Tùy theo đại lượng đo',
            measuring_device: 'Tính toán từ sai số ngẫu nhiên và sai số dụng cụ',
            description: 'Khoảng không chắc chắn xung quanh giá trị trung bình của phép đo.',
          },
          {
            name: 'Sai số tỉ đối',
            symbol: '\\delta A',
            si_unit: 'Phần trăm (%)',
            other_units: 'Không thứ nguyên (số thập phân vô thứ nguyên)',
            measuring_device: 'Tính theo tỉ số (ΔA / A_tb) · 100%',
            description: 'Tỉ số giữa sai số tuyệt đối và giá trị trung bình, phản ánh mức độ chính xác của phép đo.',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính sai số phép đo',
            latex_expression: '\\overline{A} = \\frac{\\sum A_i}{n}; \\quad \\Delta A = \\overline{\\Delta A} + \\Delta A_{\\text{dc}}; \\quad \\delta A = \\frac{\\Delta A}{\\overline{A}} \\times 100\\%',
            plain_expression: 'A_tb = sum(A_i)/n; delta_A = delta_A_tb + delta_A_dc; delta_rel = (delta_A / A_tb) * 100',
            variables: [
              { symbol: '\\overline{A}', name: 'Giá trị trung bình của n lần đo', unit: 'Đơn vị của A' },
              { symbol: '\\Delta A', name: 'Sai số tuyệt đối của phép đo', unit: 'Đơn vị của A' },
              { symbol: '\\delta A', name: 'Sai số tỉ đối của phép đo', unit: '%' },
              { symbol: '\\Delta A_{\\text{dc}}', name: 'Sai số của dụng cụ đo', unit: 'Đơn vị của A' },
            ],
            derived_formulas: [
              { expression: '\\delta(A \\cdot B) = \\delta A + \\delta B', description: 'Sai số tỉ đối của một tích' },
              { expression: '\\delta(A / B) = \\delta A + \\delta B', description: 'Sai số tỉ đối của một thương' },
              { expression: '\\delta(A^n) = n \\cdot \\delta A', description: 'Sai số tỉ đối của lũy thừa bậc n' },
            ],
            usage_note: 'Khi tính sai số tuyệt đối của một tổng hiệu: Δ(A ± B) = ΔA + ΔB (cộng các sai số tuyệt đối).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Tính sai số đo thể tích của một khối trụ kim loại',
            difficulty: 'van_dung',
            problem_statement:
              'Dùng thước kẹp đo đường kính d và chiều cao h của một khối trụ kim loại 5 lần, thu được các giá trị trung bình và sai số: d = (20,00 ± 0,05) mm và h = (50,00 ± 0,10) mm. Biết thể tích hình trụ tính theo công thức V = π · d^2 · h / 4. Hãy tính giá trị trung bình của thể tích V, sai số tỉ đối δV và viết kết quả đo thể tích V.',
            given_summary: 'd = 20,00 ± 0,05 mm ⇒ d_tb = 20,00 mm, Δd = 0,05 mm; h = 50,00 ± 0,10 mm ⇒ h_tb = 50,00 mm, Δh = 0,10 mm.',
            solution_steps: [
              'Bước 1: Tính giá trị trung bình của thể tích: V_tb = π · (d_tb)^2 · h_tb / 4 = 3,1416 · 20,00^2 · 50,00 / 4 = 3,1416 · 400 · 50 / 4 = 15708 mm^3 ≈ 15,71 cm^3.',
              'Bước 2: Tính sai số tỉ đối của đường kính và chiều cao: δd = (Δd / d_tb) · 100% = (0,05 / 20,00) · 100% = 0,25%; δh = (Δh / h_tb) · 100% = (0,10 / 50,00) · 100% = 0,20%.',
              'Bước 3: Vì V tỉ lệ với d^2 và h (hằng số π/4 không có sai số), sai số tỉ đối của V là: δV = 2 · δd + δh = 2 · 0,25% + 0,20% = 0,70%.',
              'Bước 4: Tính sai số tuyệt đối của thể tích: ΔV = δV · V_tb = 0,0070 · 15708 ≈ 110 mm^3 = 0,11 cm^3.',
              'Bước 5: Viết kết quả đo: V = (15,71 ± 0,11) cm^3 (hoặc V = (15710 ± 110) mm^3).',
            ],
            final_answer: 'V_tb = 15,71 cm^3; δV = 0,70%; Kết quả: V = (15,71 ± 0,11) cm^3.',
          },
        ],
        simulation: {
          sim_key: 'g10_measurement_error_lab',
          title: 'Mô phỏng Thước kẹp Panme và Xử lý sai số thống kê',
          description:
            'Thực hành đo đường kính viên bi hoặc độ dày tấm kính bằng thước kẹp cơ và thước vi panme; thu thập 10 lần đo với nhiễu ngẫu nhiên mô phỏng; tự động tính giá trị trung bình, độ lệch chuẩn và sai số tỉ đối.',
          parameters: { trueDiameterMm: 25.42, vernierPrecisionMm: 0.02, numTrials: 5, randomNoiseMm: 0.03 },
          guide_steps: [
            'Dùng chuột trượt hàm kẹp của thước kẹp vào sát mép vật thể và đọc vạch khớp trên du xích.',
            'Bấm "Ghi nhận số liệu" lặp lại 5 lần đo và theo dõi bảng phân phối sai số chuẩn Gaussian.',
            'Quan sát sai số tuyệt đối ΔA giảm dần khi số lần đo n tăng từ 3 lên 10 lần.',
          ],
          physics_insight:
            'Theo luật số lớn trong xác suất thống kê, sai số ngẫu nhiên trung bình giảm tỉ lệ nghịch với căn bậc hai của số lần đo (1 / sqrt(n)).',
        },
      },
    ],
  },
  {
    order_index: 2,
    code: 'G10-CH2',
    title: 'Chương 2: Động học (Mô tả chuyển động)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Vật lí 10 GDPT 2018 (Kết nối tri thức Bài 4-11, Chân trời sáng tạo Bài 4-9, Cánh Diều Bài 2-4): Phân biệt quãng đường s và vectơ độ dịch chuyển d; vận tốc trung bình và tốc độ trung bình; đồ thị độ dịch chuyển - thời gian (d - t); gia tốc a và các phương trình chuyển động thẳng biến đổi đều; chuyển động rơi tự do g ≈ 9,8 m/s² và chuyển động ném ngang, ném xiên trong trường trọng lực.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 2: Động học (Mô tả chuyển động)
1. **Độ dịch chuyển ($\\vec{d}$), Quãng đường ($s$) và Vận tốc:**
   - **Vectơ độ dịch chuyển:** Là vectơ nối điểm đầu và điểm cuối của chuyển động, cho biết độ dài và hướng thay đổi vị trí của vật.
   - **Tốc độ trung bình:** $v_{\\text{tb}} = \\frac{s}{\\Delta t}$ (đại lượng vô hướng, luôn dương).
   - **Vận tốc trung bình:** $\\vec{v}_{\\text{tb}} = \\frac{\\vec{d}}{\\Delta t}$ (đại lượng vectơ, có thể dương, âm hoặc bằng 0 tùy theo hướng độ dịch chuyển).
   - **Đồ thị $d - t$:** Độ dốc (hệ số góc) của đồ thị độ dịch chuyển - thời gian biểu thị vận tốc của vật ($v = \\frac{\\Delta d}{\\Delta t}$). Đường nằm ngang biểu thị vật đứng yên.
   - **Công thức cộng vận tốc:** $\\vec{v}_{13} = \\vec{v}_{12} + \\vec{v}_{23}$ (thuyền trên sông: $\\vec{v}_{\\text{thuyền/bờ}} = \\vec{v}_{\\text{thuyền/nước}} + \\vec{v}_{\\text{nước/bờ}}$).
2. **Gia tốc ($\\vec{a}$) và Chuyển động thẳng biến đổi đều:**
   - **Gia tốc:** Đặc trưng cho tốc độ thay đổi của vận tốc theo thời gian:
     $$\\vec{a} = \\frac{\\Delta\\vec{v}}{\\Delta t} = \\frac{\\vec{v} - \\vec{v}_0}{t}$$
   - **Chuyển động thẳng biến đổi đều ($a = \\text{const}$):**
     - Nhanh dần đều: $\\vec{a}$ cùng hướng $\\vec{v} \\implies a \\cdot v > 0$.
     - Chậm dần đều: $\\vec{a}$ ngược hướng $\\vec{v} \\implies a \\cdot v < 0$.
   - **Bộ phương trình cốt lõi:**
     - Vận tốc: $v = v_0 + a t$.
     - Độ dịch chuyển: $d = v_0 t + \\frac{1}{2}a t^2$.
     - Hệ thức độc lập thời gian: $v^2 - v_0^2 = 2 a d$.
   - **Đồ thị $v - t$:** Độ dốc biểu thị gia tốc $a$; diện tích hình phẳng giới hạn bởi đồ thị $v - t$ và trục thời gian chính bằng độ dịch chuyển $d$.
3. **Sự rơi tự do và Chuyển động ném:**
   - **Rơi tự do:** Là sự rơi của vật chỉ chịu tác dụng của trọng lực trong chân không (hoặc lực cản không khí không đáng kể). Là chuyển động thẳng nhanh dần đều theo phương thẳng đứng với $v_0 = 0$ và gia tốc $g \\approx 9,8\\,\\text{m/s}^2$:
     $$v = g t; \\quad h = \\frac{1}{2}g t^2; \\quad v = \\sqrt{2 g h}; \\quad t = \\sqrt{\\frac{2h}{g}}$$
   - **Chuyển động ném ngang:** Phân tích thành 2 chuyển động độc lập:
     - Trục nằm ngang $Ox$: Chuyển động thẳng đều: $v_x = v_0, x = v_0 t$.
     - Trục thẳng đứng $Oy$: Chuyển động rơi tự do: $v_y = g t, y = \\frac{1}{2}g t^2$.
     - Phương trình quỹ đạo parabol: $y = \\frac{g}{2 v_0^2} x^2$.
     - Thời gian bay: $t = \\sqrt{\\frac{2h}{g}}$. Tầm xa: $L = x_{\\max} = v_0 \\sqrt{\\frac{2h}{g}}$.`,
    key_takeaways: [
      'Độ dịch chuyển là vectơ nối từ vị trí đầu đến vị trí cuối; quãng đường là độ dài thực tế toàn bộ đường đi (s ≥ |d|).',
      'Hệ thức độc lập thời gian v² - v₀² = 2ad là công cụ giải nhanh không cần tìm biến thời gian t.',
      'Chuyển động ném ngang có thời gian chạm đất hoàn toàn bằng thời gian rơi tự do từ cùng một độ cao h: t = sqrt(2h/g).',
    ],
    formula_cheatsheet: [
      {
        name: 'Vận tốc trung bình và Tốc độ trung bình',
        latex: '\\vec{v}_{\\text{tb}} = \\frac{\\vec{d}}{\\Delta t}; \\quad v_{\\text{tb}} = \\frac{s}{\\Delta t}',
        note: 'd là độ dịch chuyển (m); s là quãng đường (m).',
      },
      {
        name: 'Các phương trình chuyển động thẳng biến đổi đều',
        latex: 'v = v_0 + a t; \\quad d = v_0 t + \\frac{1}{2}a t^2; \\quad v^2 - v_0^2 = 2 a d',
        note: 'a và v cùng dấu khi nhanh dần đều, trái dấu khi chậm dần đều.',
      },
      {
        name: 'Thời gian rơi và Tầm bay xa ném ngang',
        latex: 't = \\sqrt{\\frac{2h}{g}}; \\quad L = v_0 \\cdot t = v_0 \\sqrt{\\frac{2h}{g}}',
        note: 'v_0: vận tốc ném ban đầu theo phương ngang (m/s); h: độ cao ném (m).',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G10-CH2-TP1',
        title: 'Chủ đề 2.1: Độ dịch chuyển, Vận tốc và Đồ thị d - t',
        textbook_tags: ['KNTT Bài 4-5, 7', 'CTST Bài 4-5', 'CD Bài 2'],
        overview:
          'Phân biệt bản chất vectơ giữa độ dịch chuyển và đại lượng vô hướng quãng đường. Hiểu rõ sự khác nhau giữa tốc độ và vận tốc. Nắm vững phương pháp vẽ và đọc đồ thị độ dịch chuyển - thời gian (d - t) để xác định vận tốc, chiều chuyển động và vị trí gặp nhau của các vật chuyển động thẳng.',
        summary_note:
          'Ghi nhớ: Đi một vòng tròn rồi quay về vị trí ban đầu: Quãng đường s = 2πr > 0, nhưng độ dịch chuyển d = 0, vận tốc trung bình v_tb = 0. Độ dốc đồ thị d-t chính là vận tốc v.',
        theory_sections: [
          {
            heading: '1. Phân biệt Quãng đường và Độ dịch chuyển',
            content:
              'Quãng đường s là tổng độ dài thực tế của toàn bộ quỹ đạo mà vật đã vạch ra trong suốt quá trình chuyển động. Quãng đường là đại lượng vô hướng luôn không âm (s ≥ 0). Ngược lại, vectơ độ dịch chuyển d là vectơ nối từ điểm xuất phát đến điểm kết thúc, đặc trưng cho sự thay đổi vị trí trong không gian của chất điểm. Độ lớn của độ dịch chuyển chỉ bằng quãng đường khi và chỉ khi vật chuyển động thẳng một chiều không đổi hướng.',
            keyPoints: [
              'Vật chuyển động có đổi chiều: Quãng đường luôn tăng liên tục, trong khi độ lớn độ dịch chuyển có thể giảm về 0.',
              'Tốc độ trung bình = Quãng đường / Thời gian; Vận tốc trung bình = Độ dịch chuyển / Thời gian.',
            ],
            realWorldApplication:
              'Hệ thống định vị GPS trên điện thoại: quãng đường đo theo đường bộ ngoằn ngoèo thực tế tài xế phải lái xe, còn độ dịch chuyển là khoảng cách đường chim bay thẳng từ điểm đi tới điểm đến.',
          },
          {
            heading: '2. Đồ thị độ dịch chuyển - thời gian (d - t) và Cộng vận tốc',
            content:
              'Trên mặt phẳng tọa độ (d, t), chuyển động thẳng đều được biểu diễn bằng đường thẳng xiên có độ dốc k = Δd / Δt = v. Đường dốc đi lên ứng với chuyển động cùng chiều dương (v > 0); đường dốc đi xuống ứng với chuyển động ngược chiều dương (v < 0); đường nằm ngang song song trục Ot ứng với trạng thái đứng yên (v = 0). Khi vật chuyển động trong một hệ quy chiếu chuyển động (như chiếc thuyền bơi trên dòng nước chảy xiết), vận tốc tuyệt đối đối với bờ bằng tổng vectơ của vận tốc tương đối đối với nước và vận tốc kéo theo của dòng nước: v_13 = v_12 + v_23.',
            keyPoints: [
              'Thuyền xuôi dòng: v_xuôi = v_thuyền + v_nước; Thuyền ngược dòng: v_ngược = v_thuyền - v_nước.',
              'Giao điểm của hai đồ thị d - t biểu thị thời điểm và vị trí hai vật gặp nhau.',
            ],
            realWorldApplication:
              'Máy bay chở khách khi bay xuôi theo luồng gió phản lực tầng bình lưu (Jet Stream) có thể rút ngắn hơn 1 giờ bay xuyên đại dương nhờ được cộng thêm vận tốc gió.',
          },
        ],
        quantities: [
          {
            name: 'Độ dịch chuyển',
            symbol: '\\vec{d}',
            si_unit: 'Mét (m)',
            other_units: 'km, cm',
            measuring_device: 'Xác định từ tọa độ GPS hoặc thước đo vị trí',
            description: 'Vectơ nối vị trí ban đầu đến vị trí cuối cùng của vật trong không gian.',
          },
          {
            name: 'Vận tốc trung bình',
            symbol: '\\vec{v}_{\\text{tb}}',
            si_unit: 'Mét trên giây (m/s)',
            other_units: 'km/h',
            measuring_device: 'Đồng hồ tốc kế, súng bắn tốc độ laser',
            description: 'Thương số giữa vectơ độ dịch chuyển và khoảng thời gian thực hiện độ dịch chuyển đó.',
          },
        ],
        formulas: [
          {
            name: 'Độ dịch chuyển và Vận tốc',
            latex_expression: '\\vec{d} = \\vec{x}_2 - \\vec{x}_1; \\quad \\vec{v}_{\\text{tb}} = \\frac{\\vec{d}}{\\Delta t}; \\quad \\vec{v}_{13} = \\vec{v}_{12} + \\vec{v}_{23}',
            plain_expression: 'd = x2 - x1; v_tb = d / delta_t; v13 = v12 + v23',
            variables: [
              { symbol: '\\vec{d}', name: 'Vectơ độ dịch chuyển', unit: 'm' },
              { symbol: '\\vec{v}_{\\text{tb}}', name: 'Vận tốc trung bình', unit: 'm/s' },
              { symbol: '\\vec{v}_{13}', name: 'Vận tốc tuyệt đối (vật đối với hệ quy chiếu đứng yên)', unit: 'm/s' },
              { symbol: '\\vec{v}_{12}', name: 'Vận tốc tương đối (vật đối với hệ quy chiếu chuyển động)', unit: 'm/s' },
              { symbol: '\\vec{v}_{23}', name: 'Vận tốc kéo theo (hệ chuyển động đối với hệ đứng yên)', unit: 'm/s' },
            ],
            derived_formulas: [
              { expression: 'v_{\\text{xuôi}} = v_1 + v_2', description: 'Vận tốc khi thuyền chuyển động xuôi dòng' },
              { expression: 'v_{\\text{ngược}} = v_1 - v_2', description: 'Vận tốc khi thuyền chuyển động ngược dòng' },
            ],
            usage_note: 'Khi hai vectơ vận tốc vuông góc nhau (thuyền bơi vuông góc bờ sông): v_13 = sqrt(v_12^2 + v_23^2).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: So sánh quãng đường và độ dịch chuyển của người bơi trong hồ',
            difficulty: 'thong_hieu',
            problem_statement:
              'Một vận động viên bơi lội bơi xuôi dọc theo chiều dài một bể bơi dài 50 m hết thời gian 25 s, sau đó lập tức quay đầu bơi ngược trở lại 30 m trong thời gian 20 s rồi dừng lại. Chọn chiều dương là chiều bơi ban đầu từ bờ xuất phát. Hãy tính: (a) Tổng quãng đường bơi được và tốc độ trung bình của người đó; (b) Độ dịch chuyển và vận tốc trung bình của người đó trong toàn bộ hành trình.',
            given_summary: 'Bể dài 50 m. Chặng 1: s_1 = 50 m, t_1 = 25 s. Chặng 2: s_2 = 30 m ngược chiều, t_2 = 20 s.',
            solution_steps: [
              'Bước 1: Tính tổng quãng đường s = s_1 + s_2 = 50 + 30 = 80 m.',
              'Bước 2: Tính tổng thời gian bơi t = t_1 + t_2 = 25 + 20 = 45 s. Tốc độ trung bình: v_tb = s / t = 80 / 45 ≈ 1,78 m/s.',
              'Bước 3: Tọa độ ban đầu x_0 = 0. Tọa độ sau chặng 1 là x_1 = +50 m. Khi bơi ngược lại 30 m, tọa độ cuối là x_2 = 50 - 30 = +20 m.',
              'Bước 4: Độ dịch chuyển d = x_2 - x_0 = +20 m (hướng về phía trước cách bờ xuất phát 20 m).',
              'Bước 5: Vận tốc trung bình: v_tb = d / t = +20 / 45 ≈ +0,44 m/s.',
            ],
            final_answer: 'Quãng đường s = 80 m, Tốc độ v_tb ≈ 1,78 m/s; Độ dịch chuyển d = +20 m, Vận tốc v_tb ≈ +0,44 m/s.',
          },
        ],
        simulation: {
          sim_key: 'g10_displacement_velocity_lab',
          title: 'Phòng thí nghiệm Độ dịch chuyển và Thuyền qua sông',
          description:
            'Mô phỏng chuyển động của người đi bộ trên đường thẳng hoặc chiếc thuyền vượt qua dòng sông có dòng nước chảy xiết; vẽ đồ thị thời gian thực d - t và tổng hợp vectơ vận tốc bè trôi.',
          parameters: { boatSpeed: 4, riverSpeed: 3, riverWidthM: 100, headingAngleDeg: 90 },
          guide_steps: [
            'Chỉnh góc mũi thuyền sang 90° (vuông góc bờ) và quan sát thuyền bị dạt xuôi dòng bởi vận tốc kéo theo của nước.',
            'Tìm góc bẻ lái ngược dòng để thuyền cập đúng bờ đối diện thẳng hàng với điểm xuất phát.',
            'Chuyển sang chế độ vẽ đồ thị d - t để quan sát sự thay đổi độ dốc tương ứng với vận tốc.',
          ],
          physics_insight:
            'Để thuyền sang sông theo đường ngắn nhất (vuông góc bờ), thuyền phải hướng chếch ngược dòng một góc α sao cho sin(α) = v_nước / v_thuyền.',
        },
      },
      {
        order_index: 2,
        code: 'G10-CH2-TP2',
        title: 'Chủ đề 2.2: Gia tốc và Chuyển động thẳng biến đổi đều',
        textbook_tags: ['KNTT Bài 8-9', 'CTST Bài 6-7', 'CD Bài 3'],
        overview:
          'Định nghĩa gia tốc a = Δv / Δt là đại lượng đặc trưng cho tốc độ biến thiên vận tốc. Phân tích chi tiết chuyển động thẳng nhanh dần đều (a·v > 0) và chậm dần đều (a·v < 0). Nắm vững hệ phương trình v = v_0 + at, d = v_0t + (1/2)at^2, hệ thức độc lập v^2 - v_0^2 = 2ad và ý nghĩa hình học của diện tích đồ thị v - t.',
        summary_note:
          'Ghi nhớ: Nhanh dần đều: a và v cùng dấu; Chậm dần đều: a và v trái dấu. Phương trình không thời gian: v² - v₀² = 2ad (dừng lại thì v = 0).',
        theory_sections: [
          {
            heading: '1. Định nghĩa Gia tốc và Phân loại chuyển động',
            content:
              'Gia tốc là đại lượng vectơ đặc trưng cho sự biến đổi nhanh hay chậm của vận tốc theo thời gian: a = (v - v_0) / Δt. Trong chuyển động thẳng biến đổi đều, gia tốc là hằng số không đổi cả về độ lớn và hướng. Nếu vectơ gia tốc cùng hướng với vectơ vận tốc (a và v cùng dấu), độ lớn vận tốc tăng dần theo thời gian (chuyển động thẳng nhanh dần đều). Nếu vectơ gia tốc ngược hướng với vectơ vận tốc (a và v trái dấu), độ lớn vận tốc giảm dần theo thời gian (chuyển động thẳng chậm dần đều).',
            keyPoints: [
              'Đơn vị của gia tốc trong hệ SI là mét trên giây bình phương (m/s²).',
              'Khi hãm phanh chậm dần đều, nếu chọn chiều dương là chiều chuyển động (v > 0) thì bắt buộc gia tốc a phải mang giá trị âm (a < 0).',
            ],
            realWorldApplication:
              'Các dòng xe thể thao cao cấp thường quảng cáo khả năng tăng tốc từ 0 lên 100 km/h trong 3,0 giây, tương ứng với gia tốc trung bình a ≈ 9,26 m/s² (gần bằng gia tốc trọng trường g).',
          },
          {
            heading: '2. Bộ phương trình Động học và Đồ thị vận tốc - thời gian (v - t)',
            content:
              'Ba phương trình nền tảng của chuyển động thẳng biến đổi đều gồm: (1) Phương trình vận tốc v = v_0 + a·t; (2) Phương trình độ dịch chuyển d = v_0·t + (1/2)a·t^2; (3) Hệ thức độc lập thời gian v^2 - v_0^2 = 2·a·d. Trên hệ trục tọa độ (v, t), đồ thị là một đoạn thẳng có độ dốc chính bằng gia tốc a = tan(α). Đặc biệt, diện tích của hình thang (hoặc tam giác) giới hạn bởi đồ thị v - t và trục thời gian Ot chính là độ dịch chuyển d mà vật đã đi được.',
            keyPoints: [
              'Độ dịch chuyển = Diện tích hình thang dưới đường biểu diễn v - t: d = (v_0 + v) · t / 2.',
              'Hệ thức độc lập thời gian v^2 - v_0^2 = 2ad cực kì hữu ích trong các bài toán phanh gấp hoặc va chạm không cho biết thời gian t.',
            ],
            realWorldApplication:
              'Cơ quan điều tra tai nạn giao thông sử dụng công thức v^2 = 2ad kết hợp đo chiều dài vết trượt lốp cao su trên mặt đường để xác định chính xác tốc độ xe chạy trước khi phanh.',
          },
        ],
        quantities: [
          {
            name: 'Gia tốc',
            symbol: 'a',
            si_unit: 'Mét trên giây bình phương (m/s²)',
            other_units: 'cm/s², g (≈ 9,8 m/s²)',
            measuring_device: 'Cảm biến gia tốc kế (Accelerometer), cổng quang điện đo gia tốc',
            description: 'Đại lượng đo tốc độ thay đổi vận tốc của chất điểm theo thời gian.',
          },
          {
            name: 'Vận tốc tức thời',
            symbol: 'v',
            si_unit: 'Mét trên giây (m/s)',
            other_units: 'km/h, nút (knot)',
            measuring_device: 'Tốc kế điện tử, cảm biến Hall đo vòng quay bánh xe',
            description: 'Vận tốc của vật tại một thời điểm hoặc một vị trí xác định trên quỹ đạo.',
          },
        ],
        formulas: [
          {
            name: 'Bộ công thức chuyển động thẳng biến đổi đều',
            latex_expression: 'v = v_0 + a t; \\quad d = v_0 t + \\frac{1}{2}a t^2; \\quad v^2 - v_0^2 = 2 a d',
            plain_expression: 'v = v0 + a*t; d = v0*t + 0.5*a*t^2; v^2 - v0^2 = 2*a*d',
            variables: [
              { symbol: 'v_0', name: 'Vận tốc ban đầu tại t = 0', unit: 'm/s' },
              { symbol: 'v', name: 'Vận tốc tức thời tại thời điểm t', unit: 'm/s' },
              { symbol: 'a', name: 'Gia tốc không đổi', unit: 'm/s²' },
              { symbol: 't', name: 'Thời gian chuyển động', unit: 's' },
              { symbol: 'd', name: 'Độ dịch chuyển của vật', unit: 'm' },
            ],
            derived_formulas: [
              { expression: 'd = \\frac{v_0 + v}{2} \\cdot t', description: 'Độ dịch chuyển tính theo diện tích hình thang đồ thị v - t' },
              { expression: 's_{\\text{dừng}} = \\frac{v_0^2}{2|a|}', description: 'Quãng đường đi được từ lúc phanh đến khi dừng hẳn (v = 0)' },
            ],
            usage_note: 'Khi vật chuyển động thẳng không đổi chiều thì quãng đường s bằng độ dịch chuyển d.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Ô tô hãm phanh chuyển động chậm dần đều',
            difficulty: 'van_dung',
            problem_statement:
              'Một chiếc ô tô đang chuyển động thẳng đều với vận tốc 72 km/h thì người lái xe phát hiện một chướng ngại vật ở phía trước cách xe 60 m. Người đó lập tức đạp phanh hãm xe chuyển động chậm dần đều với độ lớn gia tốc là 4 m/s^2. Hãy xác định: (a) Thời gian từ lúc đạp phanh cho đến khi ô tô dừng lại hẳn; (b) Quãng đường ô tô trượt thêm từ lúc phanh đến khi dừng lại và nhận xét xe có va chạm vào chướng ngại vật hay không.',
            given_summary: 'v_0 = 72 km/h = 20 m/s; v = 0 (khi dừng hẳn); a = -4 m/s^2 (chậm dần đều, chọn chiều dương là chiều xe chạy). Khoảng cách chướng ngại vật s_cn = 60 m.',
            solution_steps: [
              'Bước 1: Đổi đơn vị vận tốc sang m/s: v_0 = 72 / 3,6 = 20 m/s.',
              'Bước 2: Vì xe chuyển động chậm dần đều nên vectơ gia tốc ngược chiều vận tốc: a = -4 m/s^2.',
              'Bước 3: Thời gian hãm phanh đến khi dừng lại (v = 0): v = v_0 + at ⇔ 0 = 20 + (-4)·t ⇒ t = 20 / 4 = 5 s.',
              'Bước 4: Quãng đường xe trượt thêm áp dụng hệ thức độc lập: v^2 - v_0^2 = 2ad ⇔ 0^2 - 20^2 = 2 · (-4) · d ⇒ d = -400 / (-8) = 50 m.',
              'Bước 5: So sánh với khoảng cách chướng ngại vật: d = 50 m < 60 m. Do đó ô tô dừng lại an toàn cách chướng ngại vật 10 m, không xảy ra tai nạn.',
            ],
            final_answer: 'Thời gian dừng t = 5 s; Quãng đường trượt d = 50 m; Xe dừng cách chướng ngại vật 10 m (an toàn).',
          },
        ],
        simulation: {
          sim_key: 'g10_accelerated_motion_lab',
          title: 'Phòng thí nghiệm Gia tốc và Đồ thị Chuyển động biến đổi',
          description:
            'Khảo sát xe trượt chuyển động trên đệm khí thẳng; cài đặt vận tốc ban đầu v_0 và gia tốc a (dương hoặc âm); theo dõi song song thời gian thực 3 đồ thị: tọa độ d(t), vận tốc v(t) và gia tốc a(t).',
          parameters: { initialVelocityMs: 10, accelerationMs2: -2, trackLengthM: 100, recordIntervalS: 0.1 },
          guide_steps: [
            'Đặt gia tốc a = 2 m/s² và v_0 = 0 để quan sát đồ thị d(t) là một nhánh parabol cong lên.',
            'Đặt gia tốc a = -2 m/s² và v_0 = 10 m/s để quan sát xe đi chậm dần, dừng lại tại t = 5 s rồi đổi chiều chuyển động.',
            'Tô màu vùng diện tích dưới đồ thị v - t và đối chiếu với giá trị độ dịch chuyển d được tính toán.',
          ],
          physics_insight:
            'Đạo hàm của độ dịch chuyển theo thời gian là vận tốc (độ dốc của d - t), và đạo hàm của vận tốc theo thời gian là gia tốc (độ dốc của v - t).',
        },
      },
      {
        order_index: 3,
        code: 'G10-CH2-TP3',
        title: 'Chủ đề 2.3: Sự rơi tự do và Chuyển động ném',
        textbook_tags: ['KNTT Bài 10-11', 'CTST Bài 8-9', 'CD Bài 4'],
        overview:
          'Khảo sát sự rơi tự do trong chân không dưới tác dụng của trọng lực với gia tốc g không đổi. Phương pháp độc lập chuyển động phân tích chuyển động ném ngang và ném xiên: tách thành chuyển động thẳng đều theo phương ngang Ox và rơi tự do theo phương thẳng đứng Oy, thiết lập phương trình quỹ đạo parabol, thời gian bay và tầm bay xa L.',
        summary_note:
          'Ghi nhớ: Ném ngang: Thời gian bay t = sqrt(2h/g) chỉ phụ thuộc độ cao h, KHÔNG phụ thuộc vận tốc ném v_0! Tầm xa L = v_0 · sqrt(2h/g). Quỹ đạo là nhánh parabol y = (g / 2v_0²) · x².',
        theory_sections: [
          {
            heading: '1. Bản chất Vật lí của Sự rơi tự do',
            content:
              'Thí nghiệm nổi tiếng của Galileo Galilei tại tháp nghiêng Pisa và ống hút chân không của Newton đã bác bỏ quan niệm sai lầm hàng ngàn năm của Aristotle (cho rằng vật nặng rơi nhanh hơn vật nhẹ). Trong chân không, mọi vật bất kể khối lượng hay hình dáng đều rơi nhanh như nhau với cùng một gia tốc rơi tự do g (ở gần bề mặt Trái Đất, g ≈ 9,8 m/s² ≈ 10 m/s²). Chuyển động rơi tự do là chuyển động thẳng nhanh dần đều theo phương thẳng đứng, chiều từ trên xuống dưới với vận tốc đầu v_0 = 0.',
            keyPoints: [
              'Vận tốc chạm đất: v = sqrt(2gh). Thời gian rơi: t = sqrt(2h/g).',
              'Quãng đường rơi trong giây thứ n: Δs_n = s_n - s_(n-1) = g·(n - 0,5). Dãy quãng đường rơi trong các giây liên tiếp tỉ lệ với các số lẻ: 1 : 3 : 5 : 7 : 9...',
            ],
            realWorldApplication:
              'Các nhà du hành vũ trụ của tàu Apollo 15 đã thực hiện thả đồng thời một chiếc lông chim ưng và một chiếc búa địa chất trên Mặt Trăng: cả hai đã chạm bề mặt Mặt Trăng hoàn toàn cùng một lúc.',
          },
          {
            heading: '2. Chuyển động ném ngang và Chuyển động ném xiên',
            content:
              'Chuyển động ném là chuyển động phẳng của một vật trong trường trọng lực sau khi được truyền vận tốc ban đầu v_0. Theo nguyên lý độc lập chuyển động, ta chọn hệ trục tọa độ Oxy (gốc O tại vị trí ném): theo phương Ox nằm ngang không có lực tác dụng nên gia tốc a_x = 0 (vật chuyển động thẳng đều với v_x = v_0, x = v_0·t); theo phương Oy thẳng đứng hướng xuống chỉ có trọng lực nên gia tốc a_y = g (vật rơi tự do với v_y = g·t, y = (1/2)g·t^2). Khử thời gian t, ta thu được phương trình quỹ đạo parabol y = (g / 2v_0^2)·x^2.',
            keyPoints: [
              'Thời gian chạm đất của vật ném ngang từ độ cao h đúng bằng thời gian thả rơi tự do vật đó từ cùng độ cao: t = sqrt(2h/g).',
              'Vận tốc tại thời điểm chạm đất: v = sqrt(v_x^2 + v_y^2) = sqrt(v_0^2 + 2gh).',
              'Chuyển động ném xiên góc α từ mặt đất: Tầm xa L = (v_0^2 · sin 2α) / g; đạt cực đại khi góc ném α = 45°.',
            ],
            realWorldApplication:
              'Máy bay cứu trợ thả dù hàng hóa tiếp tế cho vùng lũ lụt phải tính toán tọa độ cắt dù từ xa để kiện hàng bay theo quỹ đạo parabol rơi chính xác vào tâm bãi tiếp nhận.',
          },
        ],
        quantities: [
          {
            name: 'Gia tốc rơi tự do',
            symbol: 'g',
            si_unit: 'Mét trên giây bình phương (m/s²)',
            other_units: 'N/kg',
            measuring_device: 'Bộ thí nghiệm rơi tự do cổng quang điện, con lắc đơn đo g',
            description: 'Gia tốc do lực hấp dẫn của Trái Đất gây ra cho mọi vật rơi tự do gần mặt đất.',
          },
          {
            name: 'Tầm bay xa',
            symbol: 'L (hoặc x_{\\max})',
            si_unit: 'Mét (m)',
            other_units: 'km',
            measuring_device: 'Thước dây đo cự ly thực địa, radar dẫn đường',
            description: 'Khoảng cách nằm ngang tối đa vật bay được trước khi chạm đất.',
          },
        ],
        formulas: [
          {
            name: 'Công thức rơi tự do và Ném ngang',
            latex_expression: 'h = \\frac{1}{2}g t^2; \\quad v = \\sqrt{2 g h}; \\quad t_{\\text{rơi}} = \\sqrt{\\frac{2h}{g}}; \\quad L = v_0 \\sqrt{\\frac{2h}{g}}',
            plain_expression: 'h = 0.5*g*t^2; v = sqrt(2*g*h); t = sqrt(2*h/g); L = v0 * sqrt(2*h/g)',
            variables: [
              { symbol: 'h', name: 'Độ cao ban đầu của vật so với mặt đất', unit: 'm' },
              { symbol: 'g', name: 'Gia tốc rơi tự do (thường lấy 9,8 hoặc 10)', unit: 'm/s²' },
              { symbol: 't', name: 'Thời gian rơi cho đến khi chạm đất', unit: 's' },
              { symbol: 'v_0', name: 'Vận tốc ném ngang ban đầu', unit: 'm/s' },
              { symbol: 'L', name: 'Tầm bay xa theo phương ngang', unit: 'm' },
            ],
            derived_formulas: [
              { expression: 'y = \\frac{g}{2 v_0^2} x^2', description: 'Phương trình quỹ đạo chuyển động ném ngang' },
              { expression: 'v = \\sqrt{v_0^2 + (g t)^2}', description: 'Vận tốc toàn phần tại thời điểm t' },
              { expression: 'L_{\\max} = \\frac{v_0^2}{g}', description: 'Tầm bay xa cực đại của chuyển động ném xiên (khi góc ném α = 45°)' },
            ],
            usage_note: 'Bỏ qua sức cản không khí; nếu đề bài cho g = 9,8 m/s² thì tính theo 9,8, không tự ý làm tròn lên 10.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Ném ngang hòn đá từ vách đá dựng đứng xuống biển',
            difficulty: 'van_dung',
            problem_statement:
              'Từ đỉnh một vách đá cao h = 45 m nhô ra biển, một người ném một hòn đá theo phương nằm ngang với vận tốc ban đầu v_0 = 15 m/s. Lấy g = 10 m/s^2 và bỏ qua sức cản của không khí. Hãy xác định: (a) Thời gian hòn đá bay trên không trung cho đến khi chạm mặt nước; (b) Khoảng cách từ chân vách đá đến điểm hòn đá rơi xuống nước (tầm xa L); (c) Vận tốc của hòn đá ngay trước khi chạm mặt nước.',
            given_summary: 'h = 45 m, v_0 = 15 m/s, g = 10 m/s^2.',
            solution_steps: [
              'Bước 1: Tính thời gian rơi: Chuyển động theo phương thẳng đứng là rơi tự do, h = (1/2)g·t^2 ⇒ t = \\sqrt{2h / g} = \\sqrt{2 · 45 / 10} = \\sqrt{9} = 3 s.',
              'Bước 2: Tính tầm bay xa theo phương ngang: L = v_0 · t = 15 · 3 = 45 m.',
              'Bước 3: Vận tốc theo phương ngang không đổi: v_x = v_0 = 15 m/s.',
              'Bước 4: Vận tốc theo phương thẳng đứng khi chạm nước: v_y = g · t = 10 · 3 = 30 m/s.',
              'Bước 5: Vận tốc toàn phần khi chạm nước: v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{15^2 + 30^2} = \\sqrt{225 + 900} = \\sqrt{1125} ≈ 33,54 m/s.',
            ],
            final_answer: 'Thời gian rơi t = 3 s; Tầm bay xa L = 45 m; Vận tốc chạm nước v ≈ 33,54 m/s.',
          },
        ],
        simulation: {
          sim_key: 'g10_projectile_motion_lab',
          title: 'Phòng thí nghiệm Quỹ đạo Chuyển động ném',
          description:
            'Bắn đạn pháo hoặc ném vật thể từ độ cao tùy biến; điều chỉnh góc bắn α từ 0° (ném ngang) đến 90° (thẳng đứng), vận tốc ban đầu v_0 và lực cản không khí; hiển thị quỹ đạo parabol, tầm xa L và độ cao cực đại H.',
          parameters: { initialHeightM: 20, launchSpeedMs: 25, launchAngleDeg: 45, airResistance: false },
          guide_steps: [
            'Đặt độ cao h = 0 và thay đổi góc ném từ 15° đến 75° để kiểm chứng tầm xa đạt cực đại tại đúng α = 45°.',
            'Cố định độ cao ném ngang (α = 0°) và tăng gấp đôi vận tốc v_0 để thấy thời gian rơi t không hề thay đổi.',
            'Bật lực cản không khí để quan sát quỹ đạo bị biến dạng méo lệch so với đường parabol lý thuyết.',
          ],
          physics_insight:
            'Hai góc ném có tổng bằng 90° (ví dụ 30° và 60°) sẽ cho cùng một tầm bay xa L trên mặt phẳng ngang khi không có sức cản không khí.',
        },
      },
    ],
  },
  {
    order_index: 3,
    code: 'G10-CH3',
    title: 'Chương 3: Động lực học Newton (Ba định luật Newton & Các lực cơ học)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Vật lí 10 GDPT 2018 (Kết nối tri thức Bài 12-19, Chân trời sáng tạo Bài 10-13, Cánh Diều Bài 5-7): Tổng hợp và phân tích lực bằng quy tắc hình bình hành; Ba định luật chuyển động Newton (quán tính, F = ma, tương tác trực đối); các lực cơ học thường gặp: trọng lực, lực căng dây, lực ma sát trượt F_mst = μ_t·N, lực ma sát nghỉ, lực cản của chất lưu và phương pháp động lực học giải bài toán chuyển động trên mặt phẳng ngang và mặt phẳng nghiêng.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 3: Động lực học Newton
1. **Tổng hợp và Phân tích lực:**
   - **Lực:** Là đại lượng vectơ đặc trưng cho tác dụng của vật này lên vật khác, kết quả làm thay đổi vận tốc hoặc gây biến dạng vật.
   - **Quy tắc hình bình hành lực:** Vectơ hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$. Độ lớn:
     $$F^2 = F_1^2 + F_2^2 + 2 F_1 F_2 \\cos\\alpha$$
     Đặc biệt:
     - Hai lực cùng chiều ($\\alpha = 0^\\circ$): $F_{\\max} = F_1 + F_2$.
     - Hai lực ngược chiều ($\\alpha = 180^\\circ$): $F_{\\min} = |F_1 - F_2|$.
     - Hai lực vuông góc ($\\alpha = 90^\\circ$): $F = \\sqrt{F_1^2 + F_2^2}$.
     - Bất đẳng thức hợp lực: $|F_1 - F_2| \\le F \\le F_1 + F_2$.
   - **Phân tích lực:** Là phép thay thế một lực bằng hai hay nhiều lực thành phần có tác dụng giống hệt như lực đó (thường chiếu lên hai trục vuông góc $Ox, Oy$).
2. **Ba định luật Newton về chuyển động:**
   - **Định luật I (Định luật Quán tính):** Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng không, thì vật đang đứng yên sẽ tiếp tục đứng yên, đang chuyển động sẽ tiếp tục chuyển động thẳng đều. Quán tính là tính chất bảo toàn vận tốc của vật; khối lượng là số đo mức quán tính của vật.
   - **Định luật II:** Gia tốc của một vật tỉ lệ thuận với hợp lực tác dụng lên vật và tỉ lệ nghịch với khối lượng của vật:
     $$\\vec{a} = \\frac{\\sum\\vec{F}}{m} \\iff \\sum\\vec{F} = m \\vec{a}$$
   - **Định luật III:** Trong mọi trường hợp, khi vật $A$ tác dụng lên vật $B$ một lực thì vật $B$ cũng tác dụng trở lại vật $A$ một lực. Hai lực này là hai lực trực đối (cùng giá, cùng độ lớn, ngược chiều và đặt vào hai vật khác nhau):
     $$\\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}$$
     *(Lưu ý: Cặp lực - phản lực không bao giờ tự triệt tiêu nhau vì chúng đặt vào hai vật khác nhau!)*.
3. **Các lực cơ học trong tự nhiên:**
   - **Trọng lực ($\\vec{P}$):** Lực hấp dẫn của Trái Đất tác dụng lên vật, phương thẳng đứng, chiều hướng về tâm Trái Đất, điểm đặt tại trọng tâm:
     $$\\vec{P} = m \\vec{g} \\implies P = m g$$
   - **Lực căng dây ($\\vec{T}$):** Xuất hiện trên sợi dây khi bị kéo căng, điểm đặt tại điểm tiếp xúc, phương dọc theo sợi dây, chiều hướng vào trong dây.
   - **Lực ma sát trượt ($F_{\\text{mst}}$):** Xuất hiện ở mặt tiếp xúc khi vật trượt trên một bề mặt, ngược chiều chuyển động trượt tương đối:
     $$F_{\\text{mst}} = \\mu_t N$$
     ($\\mu_t$ là hệ số ma sát trượt, không có đơn vị; $N$ là áp lực vuông góc lên mặt tiếp xúc).
   - **Lực cản của chất lưu:** Tỉ lệ thuận với diện tích cản và bình phương tốc độ $v^2$; khi lực cản cân bằng với trọng lực, vật rơi đạt vận tốc giới hạn không đổi (Terminal velocity).`,
    key_takeaways: [
      'Hợp lực F của hai lực F_1, F_2 luôn nằm trong đoạn [|F_1 - F_2|, F_1 + F_2]. Không bao giờ vượt quá F_1 + F_2.',
      'Khối lượng là đại lượng vô hướng đặc trưng cho mức quán tính của vật: vật có khối lượng càng lớn thì càng khó thay đổi vận tốc.',
      'Lực và phản lực xuất hiện đồng thời, cùng bản chất, ngược chiều nhưng KHÔNG cân bằng vì đặt vào hai vật khác nhau.',
    ],
    formula_cheatsheet: [
      {
        name: 'Quy tắc hình bình hành tổng hợp lực',
        latex: 'F = \\sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \\cos\\alpha}',
        note: 'α là góc hợp giữa hai vectơ lực thành phần.',
      },
      {
        name: 'Định luật II Newton',
        latex: '\\sum \\vec{F} = m \\vec{a} \\iff \\vec{a} = \\frac{\\sum \\vec{F}}{m}',
        note: 'Phải phân tích đầy đủ tất cả ngoại lực tác dụng lên vật.',
      },
      {
        name: 'Định luật III Newton',
        latex: '\\vec{F}_{12} = -\\vec{F}_{21} \\implies |\\vec{F}_{12}| = |\\vec{F}_{21}|',
        note: 'Cặp lực và phản lực đặt vào hai vật khác nhau.',
      },
      {
        name: 'Lực ma sát trượt',
        latex: 'F_{\\text{mst}} = \\mu_t \\cdot N',
        note: 'Trên mặt phẳng ngang: N = P = mg; Trên mặt phẳng nghiêng góc α: N = mg·cos α.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G10-CH3-TP1',
        title: 'Chủ đề 3.1: Tổng hợp và Phân tích lực',
        textbook_tags: ['KNTT Bài 12-13', 'CTST Bài 10', 'CD Bài 5'],
        overview:
          'Khảo sát các quy tắc hình học vectơ để tổng hợp hai lực đồng quy theo quy tắc hình bình hành và quy tắc tam giác lực. Nắm vững điều kiện cân bằng của một chất điểm dưới tác dụng của nhiều lực. Thực hành phân tích lực thành hai thành phần vuông góc để giải bài toán cơ học trên mặt phẳng nghiêng.',
        summary_note:
          'Ghi nhớ: |F1 - F2| ≤ F_hợp ≤ F1 + F2. Điều kiện cân bằng chất điểm: Σ F = 0. Trên mặt nghiêng góc α: thành phần kéo xuống P_x = mg·sin α, thành phần ép vuông góc P_y = mg·cos α.',
        theory_sections: [
          {
            heading: '1. Quy tắc tổng hợp hai lực đồng quy',
            content:
              'Khi hai lực đồng quy F_1 và F_2 tác dụng đồng thời lên một vật, tác dụng tổng hợp của chúng tương đương với một lực duy nhất F gọi là hợp lực. Vectơ hợp lực được biểu diễn bằng đường chéo của hình bình hành mà hai cạnh là hai vectơ lực thành phần: F = F_1 + F_2. Độ lớn hợp lực phụ thuộc vào góc kẹp α giữa hai lực theo định lí hàm số cosin: F^2 = F_1^2 + F_2^2 + 2·F_1·F_2·cos(α). Khi hai lực cùng phương cùng chiều (α = 0°), hợp lực cực đại F_max = F_1 + F_2; khi hai lực ngược chiều (α = 180°), hợp lực cực tiểu F_min = |F_1 - F_2|.',
            keyPoints: [
              'Hợp lực của hai lực 10 N và 6 N chỉ có thể nằm trong khoảng từ 4 N đến 16 N.',
              'Nếu một chất điểm đứng cân bằng dưới tác dụng của 3 lực F_1, F_2, F_3 thì F_1 + F_2 + F_3 = 0, tức là hợp lực của hai lực bất kì phải trực đối với lực thứ ba.',
            ],
            realWorldApplication:
              'Dây cáp cẩu tháp công trường xây dựng: khi nâng khối bê tông nặng, góc giữa hai nhánh dây cáp càng nhỏ thì lực căng trên mỗi sợi dây cáp càng nhỏ, tránh đứt dây.',
          },
          {
            heading: '2. Phương pháp phân tích lực vuông góc',
            content:
              'Phân tích lực là quá trình ngược lại với tổng hợp lực. Để giải bài toán động lực học, người ta thường phân tích một lực xiên thành hai thành phần vuông góc theo hệ trục tọa độ Decartes Oxy phù hợp với hướng chuyển động. Ví dụ, đối với vật trượt trên mặt phẳng nghiêng góc α so với phương ngang, trọng lực P được phân tích thành: thành phần P_x = P·sin(α) song song với mặt nghiêng xuôi xuống dưới (gây ra chuyển động trượt), và thành phần P_y = P·cos(α) vuông góc với mặt nghiêng (ép vật vào mặt nghiêng, cân bằng với phản lực pháp tuyến N).',
            keyPoints: [
              'Việc chọn trục tọa độ khéo léo (trục Ox dọc theo phương chuyển động) giúp đơn giản hóa phương trình động lực học.',
              'P_x = mg · sin(α); P_y = mg · cos(α). Khi α = 0 (mặt phẳng ngang): P_x = 0, P_y = mg = N.',
            ],
            realWorldApplication:
              'Đoạn đường đèo dốc hiểm trở thường được thiết kế quanh co hình zíc-zắc uốn lượn để giảm góc nghiêng α, nhờ đó thành phần kéo P_x = mg·sin(α) nhỏ lại giúp xe leo dốc dễ dàng và an toàn hơn.',
          },
        ],
        quantities: [
          {
            name: 'Hợp lực',
            symbol: '\\vec{F}_{\\text{hl}}',
            si_unit: 'Newton (N)',
            other_units: 'kN, dyn',
            measuring_device: 'Lực kế lò xo, cảm biến đo lực điện tử đa kênh',
            description: 'Vectơ thay thế cho hệ nhiều lực tác dụng đồng thời có tác dụng cơ học tương đương.',
          },
          {
            name: 'Góc nghiêng',
            symbol: '\\alpha',
            si_unit: 'Radian (rad)',
            other_units: 'Độ (°)',
            measuring_device: 'Thước đo góc ê-ke, giác kế',
            description: 'Góc hợp bởi hai vectơ lực hoặc góc dốc mặt phẳng so với phương ngang.',
          },
        ],
        formulas: [
          {
            name: 'Độ lớn hợp lực của hai lực đồng quy',
            latex_expression: 'F = \\sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \\cos\\alpha}',
            plain_expression: 'F = sqrt(F1^2 + F2^2 + 2*F1*F2*cos(alpha))',
            variables: [
              { symbol: 'F', name: 'Độ lớn hợp lực', unit: 'N' },
              { symbol: 'F_1, F_2', name: 'Độ lớn hai lực thành phần', unit: 'N' },
              { symbol: '\\alpha', name: 'Góc giữa hai vectơ lực thành phần', unit: 'độ hoặc rad' },
            ],
            derived_formulas: [
              { expression: 'F = \\sqrt{F_1^2 + F_2^2}', description: 'Hợp lực khi hai lực vuông góc nhau (α = 90°)' },
              { expression: 'P_x = P \\sin\\alpha; \\quad P_y = P \\cos\\alpha', description: 'Phân tích trọng lực trên mặt phẳng nghiêng góc α' },
            ],
            usage_note: 'Bắt đẳng thức kiểm tra độ lớn: |F_1 - F_2| ≤ F ≤ F_1 + F_2.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Tính hợp lực của hai tàu kéo lai dắt tàu chở dầu',
            difficulty: 'thong_hieu',
            problem_statement:
              'Hai chiếc tàu kéo sử dụng hai sợi cáp kéo một chiếc tàu chở dầu khổng lồ vào cảng. Lực kéo của hai tàu có cùng độ lớn là F_1 = F_2 = 8000 N. Hai sợi dây cáp hợp với nhau một góc α = 60°. Hãy xác định độ lớn của hợp lực kéo tác dụng lên tàu chở dầu.',
            given_summary: 'F_1 = F_2 = 8000 N, alpha = 60°.',
            solution_steps: [
              'Bước 1: Áp dụng công thức tổng quát hình bình hành lực: F^2 = F_1^2 + F_2^2 + 2·F_1·F_2·cos(α).',
              'Bước 2: Thay số: F^2 = 8000^2 + 8000^2 + 2 · 8000 · 8000 · cos(60°).',
              'Bước 3: Vì cos(60°) = 0,5 nên: F^2 = 64·10^6 + 64·10^6 + 2 · 64·10^6 · 0,5 = 3 · 64·10^6 = 192·10^6 N^2.',
              'Bước 4: Suy ra độ lớn hợp lực: F = 8000 · \\sqrt{3} ≈ 8000 · 1,732 ≈ 13856 N ≈ 13,86 kN.',
              'Bước 5: Vì hai lực bằng nhau, hợp lực F nằm dọc theo đường phân giác của góc 60°, tức là hợp với mỗi dây cáp góc 30° kéo thẳng tàu về phía trước.',
            ],
            final_answer: 'Độ lớn hợp lực kéo là F ≈ 13,86 kN (hướng theo đường phân giác).',
          },
        ],
        simulation: {
          sim_key: 'g10_vector_forces_lab',
          title: 'Phòng thí nghiệm Bàn tròn Lực và Cân bằng Vectơ',
          description:
            'Mô phỏng bàn đồng quy lực tròn; treo các quả cân qua ròng rọc ở các góc độ khác nhau; kiểm chứng quy tắc hình bình hành và điều kiện cân bằng của vòng nhẫn trung tâm.',
          parameters: { force1: 10, angle1Deg: 0, force2: 10, angle2Deg: 120, force3: 10, angle3Deg: 240 },
          guide_steps: [
            'Đặt 3 lực có độ lớn bằng nhau 10 N lệch nhau các góc 120° để quan sát vòng nhẫn đứng yên cân bằng hoàn hảo.',
            'Kéo thanh trượt thay đổi góc giữa lực F_1 và F_2 từ 0° đến 180° và theo dõi độ dài hợp lực biến thiên từ F_max đến F_min.',
            'Bật hiển thị phân tích lực trên hệ trục Oxy để quan sát các hình chiếu cân bằng.',
          ],
          physics_insight:
            'Điều kiện cân bằng chất điểm tương đương với việc các vectơ lực ghép nối đuôi nhau tạo thành một đa giác vectơ lực khép kín.',
        },
      },
      {
        order_index: 2,
        code: 'G10-CH3-TP2',
        title: 'Chủ đề 3.2: Ba định luật Newton về chuyển động',
        textbook_tags: ['KNTT Bài 14-16', 'CTST Bài 11', 'CD Bài 6'],
        overview:
          'Khảo sát ba định luật nền tảng của Cơ học cổ điển Newton: Định luật I xác lập khái niệm quán tính và hệ quy chiếu quán tính; Định luật II thiết lập mối quan hệ định lượng giữa lực, khối lượng và gia tốc F = ma; Định luật III khẳng định tính chất tương tác hai chiều trong tự nhiên với cặp lực và phản lực trực đối.',
        summary_note:
          'Ghi nhớ: Định luật I: F_hợp = 0 ⇒ v = const (quán tính). Định luật II: a = F_hợp / m. Định luật III: F_AB = -F_BA (khác điểm đặt, không triệt tiêu nhau).',
        theory_sections: [
          {
            heading: '1. Định luật I và Định luật II Newton',
            content:
              'Định luật I Newton khẳng định: Lực không phải là nguyên nhân duy trì chuyển động, mà là nguyên nhân làm thay đổi trạng thái chuyển động (thay đổi vận tốc). Mọi vật đều có quán tính – xu hướng chống lại sự thay đổi vận tốc. Khi xe buýt phanh gấp, hành khách bị ngả người về phía trước theo quán tính; khi xe rẽ ngoặt sang trái, hành khách bị nghiêng sang phải. Định luật II đưa ra công thức định lượng: Vectơ gia tốc a tỉ lệ thuận với hợp lực F và tỉ lệ nghịch với khối lượng quán tính m của vật: F = m·a. Nếu có nhiều lực tác dụng đồng thời thì F là hợp lực vectơ của tất cả các lực đó.',
            keyPoints: [
              'Khối lượng m đo mức quán tính: vật càng nặng thì gia tốc thu được càng nhỏ khi chịu cùng một lực F.',
              '1 Newton là lực truyền cho vật khối lượng 1 kg gia tốc 1 m/s²: 1 N = 1 kg·m/s².',
            ],
            realWorldApplication:
              'Dây đai an toàn trên xe ô tô giữ người lái không bị văng đập vào kính chắn gió khi xe dừng đột ngột theo quán tính của Định luật I Newton.',
          },
          {
            heading: '2. Định luật III Newton và Cặp lực tương tác',
            content:
              'Định luật III Newton phát biểu rằng lực luôn xuất hiện theo từng cặp tương hỗ: khi vật A tác dụng một lực lên vật B thì vật B cũng đồng thời tác dụng trở lại vật A một lực có cùng độ lớn, cùng phương nhưng ngược chiều: F_AB = -F_BA. Hai lực này gọi là cặp lực và phản lực. Đặc điểm cốt lõi: chúng xuất hiện và mất đi đồng thời, có cùng bản chất vật lí (cùng là lực hấp dẫn, lực đàn hồi hoặc lực từ), nhưng đặt vào hai vật khác nhau nên tuyệt đối không bao giờ triệt tiêu lẫn nhau.',
            keyPoints: [
              'Trái Đất hút quả táo rơi xuống, đồng thời quả táo cũng hút Trái Đất đi lên với độ lớn lực đúng bằng trọng lượng quả táo; tuy nhiên vì khối lượng Trái Đất quá khổng lồ nên gia tốc của Trái Đất bằng 0.',
              'Người nhảy từ bờ xuồng lên bờ: chân đạp xuồng lùi ra xa, phản lực từ xuồng đẩy người bay lên bờ.',
            ],
            realWorldApplication:
              'Động cơ phản lực của máy bay và tên lửa vũ trụ: luồng khí nóng phụt ra phía sau với lực F_khí tạo ra phản lực F_đẩy hướng về phía trước đẩy máy bay tiến lên.',
          },
        ],
        quantities: [
          {
            name: 'Khối lượng quán tính',
            symbol: 'm',
            si_unit: 'Kilôgam (kg)',
            other_units: 'gam (g), tấn (t)',
            measuring_device: 'Cân đĩa, cân điện tử',
            description: 'Đại lượng vô hướng đặc trưng cho mức độ quán tính chống lại sự gia tốc của vật.',
          },
          {
            name: 'Lực tác dụng',
            symbol: '\\vec{F}',
            si_unit: 'Newton (N)',
            other_units: 'kN, kgf',
            measuring_device: 'Lực kế lò xo, đầu đo áp điện',
            description: 'Tác dụng cơ học giữa các vật làm biến đổi trạng thái chuyển động hoặc gây biến dạng.',
          },
        ],
        formulas: [
          {
            name: 'Phương trình Định luật II và III Newton',
            latex_expression: '\\sum \\vec{F} = m \\vec{a}; \\quad \\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}',
            plain_expression: 'sum_F = m * a; F_AB = -F_BA',
            variables: [
              { symbol: '\\sum \\vec{F}', name: 'Hợp lực của tất cả các ngoại lực tác dụng', unit: 'N' },
              { symbol: 'm', name: 'Khối lượng vật', unit: 'kg' },
              { symbol: '\\vec{a}', name: 'Gia tốc thu được của vật', unit: 'm/s²' },
              { symbol: '\\vec{F}_{A \\to B}', name: 'Lực vật A tác dụng lên vật B', unit: 'N' },
              { symbol: '\\vec{F}_{B \\to A}', name: 'Phản lực vật B tác dụng lên vật A', unit: 'N' },
            ],
            derived_formulas: [
              { expression: 'a = \\frac{F}{m}', description: 'Gia tốc tính theo hợp lực và khối lượng' },
              { expression: 'F = m \\frac{v - v_0}{t}', description: 'Biểu thức liên hệ giữa lực và độ biến thiên vận tốc' },
            ],
            usage_note: 'Trước khi áp dụng phương trình định luật II Newton, luôn vẽ hình và biểu diễn đầy đủ tất cả các lực tác dụng lên vật.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Kéo khối gỗ trên mặt sàn ngang không ma sát',
            difficulty: 'thong_hieu',
            problem_statement:
              'Một vật có khối lượng m = 5 kg đang nằm yên trên mặt sàn nằm ngang nhẵn bóng không có ma sát. Người ta tác dụng vào vật một lực kéo F = 20 N theo phương hợp với mặt sàn một góc α = 30° hướng chếch lên trên. Lấy g = 10 m/s^2. Hãy xác định: (a) Gia tốc chuyển động của vật; (b) Vận tốc của vật sau khi kéo được 4 giây.',
            given_summary: 'm = 5 kg, F = 20 N, alpha = 30°, ma sát = 0, v_0 = 0, t = 4 s.',
            solution_steps: [
              'Bước 1: Phân tích các lực tác dụng lên vật gồm: Trọng lực P = mg thẳng đứng hướng xuống, Phản lực pháp tuyến N thẳng đứng hướng lên, Lực kéo F nghiêng góc 30°.',
              'Bước 2: Chọn trục Ox nằm ngang theo chiều chuyển động, trục Oy thẳng đứng hướng lên.',
              'Bước 3: Chiếu phương trình định luật II Newton lên trục Ox: F_x = m·a ⇔ F·cos(α) = m·a ⇒ a = F·cos(α) / m.',
              'Bước 4: Thay số tính gia tốc: a = 20 · cos(30°) / 5 = 4 · (\\sqrt{3} / 2) = 2\\sqrt{3} ≈ 3,46 m/s².',
              'Bước 5: Vận tốc của vật sau thời gian t = 4 s: v = v_0 + a·t = 0 + 3,46 · 4 = 13,84 m/s.',
            ],
            final_answer: 'Gia tốc a ≈ 3,46 m/s²; Vận tốc sau 4 giây v ≈ 13,84 m/s.',
          },
        ],
        simulation: {
          sim_key: 'g10_newtons_laws_lab',
          title: 'Mô phỏng Ba Định luật Newton và Xe trượt đệm khí',
          description:
            'Thí nghiệm xe đẩy trên mặt sàn; thay đổi lực kéo F, khối lượng xe m và quan sát gia tốc a đo được; kiểm chứng tỉ lệ a ~ F và a ~ 1/m; mô phỏng tương tác va chạm giữa hai xe trượt kiểm chứng Định luật III.',
          parameters: { appliedForceN: 15, cartMassKg: 2.5, frictionForceN: 0, testDurationS: 5 },
          guide_steps: [
            'Giữ nguyên khối lượng m = 2 kg và tăng lực kéo F lần lượt 5 N, 10 N, 20 N; đối chiếu gia tốc a tăng gấp đôi.',
            'Giữ nguyên lực kéo F = 10 N và chất thêm các quả cân lên xe; nhận xét gia tốc a giảm tỉ lệ nghịch.',
            'Cho hai xe tương tác qua lò xo nén bung ra và ghi nhận tích m_1·a_1 = m_2·a_2 (Định luật III).',
          ],
          physics_insight:
            'Gia tốc của một vật chỉ phụ thuộc vào hợp lực tác dụng ở thời điểm hiện tại và khối lượng của nó, hoàn toàn không phụ thuộc vào việc trước đó vật đang chuyển động nhanh hay chậm.',
        },
      },
      {
        order_index: 3,
        code: 'G10-CH3-TP3',
        title: 'Chủ đề 3.3: Các lực trong tự nhiên: Trọng lực, Ma sát, Lực cản',
        textbook_tags: ['KNTT Bài 17-19', 'CTST Bài 12-13', 'CD Bài 7'],
        overview:
          'Khảo sát đặc tính của các lực cơ học cơ bản: Trọng lực P = mg và trọng lượng; Lực ma sát nghỉ, lực ma sát trượt F_mst = μ_t·N và vai trò hai mặt của ma sát trong đời sống; Lực cản của không khí và chất lưu, hiện tượng vận tốc giới hạn khi nhảy dù. Phương pháp giải bài toán chuyển động trên mặt phẳng nghiêng có ma sát.',
        summary_note:
          'Ghi nhớ: Ma sát trượt: F_mst = μ_t · N. Trên mặt phẳng nằm ngang có kéo xiên góc α: N = P - F·sin α. Trên dốc nghiêng: N = mg·cos α; gia tốc trượt xuống: a = g·(sin α - μ_t·cos α).',
        theory_sections: [
          {
            heading: '1. Phân biệt Trọng lực, Trọng lượng và Lực ma sát',
            content:
              'Trọng lực là lực hấp dẫn mà Trái Đất tác dụng lên vật: P = m·g. Trọng lượng là độ lớn của lực nén của vật lên sàn đỡ hoặc lực căng lên dây treo. Trong thang máy tăng tốc đi lên hoặc rơi tự do, trọng lượng của vật có thể tăng lên (quá tải) hoặc giảm về 0 (trạng thái không trọng lượng). Lực ma sát trượt xuất hiện ở mặt tiếp xúc khi một vật trượt trên bề mặt vật khác, có độ lớn tỉ lệ thuận với áp lực vuông góc: F_mst = μ_t·N. Hệ số ma sát trượt μ_t chỉ phụ thuộc vào vật liệu và tình trạng của hai bề mặt tiếp xúc (nhẵn, nhám, khô hay ướt), không phụ thuộc vào diện tích tiếp xúc hay tốc độ trượt.',
            keyPoints: [
              'Lực ma sát nghỉ cực đại lớn hơn lực ma sát trượt: F_msn,max > F_mst (đẩy vật bắt đầu chuyển động khó hơn duy trì nó trượt).',
              'Ma sát vừa có hại (làm mòn chi tiết máy, tiêu hao nhiên liệu) vừa có ích (giúp con người bước đi, xe phanh dừng lại).',
            ],
            realWorldApplication:
              'Hoa văn rãnh gai trên lốp xe ô tô và đế giày thể thao giúp thoát nước khi trời mưa, duy trì hệ số ma sát cao chống trơn trượt nguy hiểm.',
          },
          {
            heading: '2. Lực cản chất lưu và Chuyển động trên mặt phẳng nghiêng',
            content:
              'Khi vật chuyển động trong không khí hoặc nước, các phân tử chất lưu va chạm vào bề mặt vật cản trở chuyển động, tạo ra lực cản. Lực cản tăng rất nhanh theo vận tốc (tỉ lệ với v hoặc v²). Khi một vận động viên nhảy dù rơi xuống, ban đầu rơi nhanh dần đều; lực cản tăng dần đến khi cân bằng với trọng lực (F_cản = P), khi đó gia tốc triệt tiêu a = 0 và vận động viên rơi thẳng đều với vận tốc giới hạn an toàn (khoảng 5 m/s khi dù mở bung). Khi giải bài toán trượt trên dốc nghiêng góc α có ma sát: chiếu lên phương vuông góc N = mg·cos(α); chiếu lên phương dốc: mg·sin(α) - F_mst = m·a ⇒ a = g·[sin(α) - μ_t·cos(α)].',
            keyPoints: [
              'Điều kiện để vật tự trượt xuống dốc: tan(α) > μ_t.',
              'Hình dạng khí động học (thuôn nhọn hình giọt nước) giúp giảm lực cản không khí cho ô tô và tàu cao tốc shinkansen.',
            ],
            realWorldApplication:
              'Đoàn tàu hỏa cao tốc Shinkansen của Nhật Bản có phần đầu tàu dài thuôn mô phỏng mỏ chim bói cá để giảm lực cản và triệt tiêu tiếng nổ xung kích khi xuyên qua hầm núi.',
          },
        ],
        quantities: [
          {
            name: 'Hệ số ma sát trượt',
            symbol: '\\mu_t',
            si_unit: 'Không có đơn vị (Đại lượng vô thứ nguyên)',
            other_units: 'Số thập phân (thường từ 0,01 đến 0,8)',
            measuring_device: 'Xác định từ góc nghiêng trượt tới hạn (μ_t = tan α)',
            description: 'Đại lượng phản ánh tính chất bề mặt nhám tiếp xúc giữa hai vật.',
          },
          {
            name: 'Áp lực pháp tuyến',
            symbol: 'N',
            si_unit: 'Newton (N)',
            other_units: 'kN',
            measuring_device: 'Cảm biến nén (Load Cell)',
            description: 'Lực ép vuông góc của vật lên bề mặt đỡ.',
          },
        ],
        formulas: [
          {
            name: 'Công thức Lực ma sát trượt và Gia tốc dốc nghiêng',
            latex_expression: 'F_{\\text{mst}} = \\mu_t \\cdot N; \\quad a = g (\\sin\\alpha - \\mu_t \\cos\\alpha)',
            plain_expression: 'F_mst = mu_t * N; a = g * (sin(alpha) - mu_t * cos(alpha))',
            variables: [
              { symbol: 'F_{\\text{mst}}', name: 'Lực ma sát trượt', unit: 'N' },
              { symbol: '\\mu_t', name: 'Hệ số ma sát trượt', unit: 'Không có' },
              { symbol: 'N', name: 'Áp lực pháp tuyến', unit: 'N' },
              { symbol: '\\alpha', name: 'Góc nghiêng của mặt phẳng so với phương ngang', unit: 'độ' },
              { symbol: 'g', name: 'Gia tốc trọng trường', unit: 'm/s²' },
            ],
            derived_formulas: [
              { expression: 'N = m g \\cos\\alpha', description: 'Áp lực trên mặt phẳng nghiêng góc α khi không có lực phụ' },
              { expression: '\\alpha_{\\text{trượt}} = \\arctan(\\mu_n)', description: 'Góc nghiêng tới hạn để vật bắt đầu tự trượt' },
            ],
            usage_note: 'Nếu sin(α) ≤ μ_t·cos(α) thì vật không thể tự trượt xuống mà sẽ đứng yên cân bằng trên dốc.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ: Vật trượt xuống mặt phẳng nghiêng có ma sát',
            difficulty: 'van_dung',
            problem_statement:
              'Một khối gỗ khối lượng m = 2 kg được thả trượt không vận tốc đầu từ đỉnh một con dốc nghiêng dài l = 10 m, góc nghiêng của dốc là α = 30° so với phương ngang. Hệ số ma sát trượt giữa khối gỗ và mặt dốc là μ_t = 0,2. Lấy g = 9,8 m/s^2. Hãy tính: (a) Gia tốc trượt của khối gỗ trên dốc; (b) Vận tốc của khối gỗ khi trượt xuống đến chân dốc.',
            given_summary: 'm = 2 kg, l = 10 m, alpha = 30°, mu_t = 0,2, v_0 = 0, g = 9,8 m/s^2.',
            solution_steps: [
              'Bước 1: Phân tích lực tác dụng lên khối gỗ gồm: Trọng lực P, Phản lực pháp tuyến N và Lực ma sát trượt F_mst hướng ngược chiều chuyển động trượt.',
              'Bước 2: Chiếu lên phương vuông góc mặt nghiêng: N = P_y = mg · cos(30°) = 2 · 9,8 · (\\sqrt{3} / 2) ≈ 16,97 N.',
              'Bước 3: Độ lớn lực ma sát trượt: F_mst = μ_t · N = 0,2 · 16,97 ≈ 3,39 N.',
              'Bước 4: Chiếu phương trình định luật II Newton lên phương song song mặt dốc hướng xuống: P_x - F_mst = m·a ⇔ mg·sin(30°) - F_mst = m·a ⇒ a = g·sin(30°) - F_mst / m = 9,8 · 0,5 - 3,39 / 2 = 4,9 - 1,70 = 3,20 m/s².',
              'Bước 5: Vận tốc khi chạm chân dốc sau khi đi quãng đường s = l = 10 m: v^2 - v_0^2 = 2as ⇒ v = \\sqrt{2 · a · s} = \\sqrt{2 · 3,20 · 10} = \\sqrt{64} = 8 m/s.',
            ],
            final_answer: 'Gia tốc trượt a = 3,20 m/s²; Vận tốc tại chân dốc v = 8 m/s.',
          },
        ],
        simulation: {
          sim_key: 'g10_friction_inclined_lab',
          title: 'Phòng thí nghiệm Mặt phẳng nghiêng và Ma sát học',
          description:
            'Thả khối trượt trên máng nghiêng; điều chỉnh góc nghiêng α từ 0° đến 60° và hệ số ma sát μ từ 0 đến 0,8; theo dõi phân tích lực động N, P_x, P_y, F_mst và đồng hồ đo gia tốc a.',
          parameters: { blockMassKg: 1.5, slopeAngleDeg: 35, staticFriction: 0.35, kineticFriction: 0.25 },
          guide_steps: [
            'Tăng từ từ góc nghiêng α đến khi tan(α) = μ_s để quan sát khoảnh khắc vật bứt phá khỏi ma sát nghỉ và bắt đầu trượt.',
            'Quan sát phản lực N giảm dần khi dốc dựng đứng hơn (N = mg·cos α), dẫn đến lực ma sát giảm.',
            'Đổi vật liệu tiếp xúc (gỗ trên thép, cao su trên bê tông, teflon trên băng tuyết) và so sánh gia tốc trượt.',
          ],
          physics_insight:
            'Gia tốc trượt trên mặt nghiêng hoàn toàn không phụ thuộc vào khối lượng của vật (vì cả thành phần kéo mg·sin α và lực ma sát μ·mg·cos α đều tỉ lệ thuận với m và triệt tiêu m).',
        },
      },
    ],
  },
];

export const GRADE_10_CHAPTERS: SeedChapterData[] = [
  ...GRADE_10_CHAPTERS_PART1,
  ...GRADE_10_CHAPTERS_PART2,
];
