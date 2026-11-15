# PhysicsCMS 6–12 (`D:\physics_cms_6_12`)

Hệ thống Web App CMS Tự học Vật lý cho học sinh từ **Lớp 6 đến Lớp 12** (Tổng hợp chuẩn 3 bộ sách giáo khoa: *Kết nối tri thức với cuộc sống*, *Chân trời sáng tạo*, *Cánh Diều*).

## Tính năng cốt lõi
1. **Board chọn Khối lớp từ 6–12 (`/`)**:
   - Chuyển đổi tự do giữa các khối lớp 6, 7, 8, 9, 10, 11, 12.
   - **Không khóa bài (Free Navigation)**: Học sinh tự do chọn bất kỳ chương, chủ đề hoặc bài kiểm tra nào để học ở nhà, hệ thống lưu lại điểm cao nhất (`?/25`).
2. **Dữ liệu Khối Lớp 6 đầy đủ 100% (Tổng hợp 3 bộ SGK)**:
   - **Chương 1: Các phép đo** (Đo chiều dài & thể tích, Đo khối lượng & thời gian, Đo nhiệt độ & 3 thang °C - K - °F).
   - **Chương 2: Lực và Chuyển động** (Lực & tác dụng, Biểu diễn lực & lực kế, Khối lượng & Trọng lực $P = 10m$, Lực tiếp xúc & không tiếp xúc, Biến dạng lò xo $\Delta l = l - l_0$, Lực ma sát & lực cản).
   - **Chương 3: Năng lượng và Cuộc sống** (Các dạng năng lượng, Bảo toàn & chuyển hóa năng lượng - Hiệu suất, Năng lượng tái tạo & tiết kiệm năng lượng).
   - **Chương 4: Trái Đất và Bầu trời** (Chuyển động nhìn thấy của Mặt Trời & Ngày đêm, Các pha Mặt Trăng, Hệ Mặt Trời & Ngân Hà).
3. **Trong mỗi Chủ đề (`/topic/[id]`)**:
   - Lý thuyết chi tiết chia theo từng mục + Liên hệ thực tế.
   - Bảng các Đại lượng Vật lý, đơn vị SI, quy đổi và dụng cụ đo.
   - Hệ thống Công thức hiển thị bằng **KaTeX** + Giải thích biến số & công thức suy ra.
   - Các Ví dụ minh họa có tóm tắt và lời giải từng bước.
   - **Phòng thí nghiệm mô phỏng tương tác (Interactive Physics Lab)** trực quan ngay trên trình duyệt.
   - **Bài kiểm tra cuối bài (25 câu Quiz)** có chấm điểm tức thì và giải thích chi tiết từng câu.
4. **Cuối mỗi Chương (`/chapter/[id]`)**:
   - Tóm tắt kiến thức trọng tâm toàn chương + Bảng Cheatsheet công thức & đại lượng.
   - **Bài kiểm tra tổng hợp chương (25 câu)** bao quát toàn bộ các chủ đề trong chương.
5. **Trang Quản trị Admin CMS có Đăng nhập (`/admin/login` & `/admin`)**:
   - Tài khoản mặc định: `admin` / `admin123`.
   - Thêm/sửa/xóa Chương, Chủ đề, Lý thuyết, Công thức (xem trước KaTeX), Đại lượng, Ví dụ và Ngân hàng câu hỏi (hỗ trợ Import JSON hàng loạt).

## Chạy dự án
```bash
npm run seed   # Khởi tạo SQLite (physics_cms.db) & nạp 475 câu hỏi + 15 chủ đề Lớp 6 + khung Lớp 7-12
npm run dev    # Chạy server tại http://localhost:3005
```
