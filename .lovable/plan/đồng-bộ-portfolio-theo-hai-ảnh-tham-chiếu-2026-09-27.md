# Đồng bộ portfolio theo hai ảnh tham chiếu

## Phạm vi
- Giữ Hero, About, Experience, Beyond the Code và Contact hiện tại.
- Làm lại cụm nội dung kỹ thuật ở giữa trang để bám sát hai ảnh: nền lưới tối, viền electric blue, chữ mono kỹ thuật, bố cục dày và các panel dạng dashboard công nghiệp.
- Không nhúng hai ảnh mockup vào website; chỉ dùng làm chuẩn bố cục và phong cách.

## Giao diện sẽ triển khai
- **Technologies I work with**: phần giới thiệu bên trái và bốn panel kỹ năng bên phải, mỗi panel có visual riêng, icon công nghệ, mô tả ngắn và ô thống kê.
- **Industrial AI workflow**: pipeline sáu bước nằm ngang trên desktop, gồm ảnh/visual, đầu vào–xử lý–huấn luyện–ONNX–.NET–factory; chuyển thành luồng dọc dễ đọc trên điện thoại.
- **LLM, RAG & AI Agents**: sơ đồ kiến trúc RAG/Agent, khung live demo, hàng công nghệ và ba dự án LLM theo đúng cấu trúc ảnh mẫu.
- Tăng độ sáng, tương phản và kích thước nội dung so với giao diện hiện tại, nhưng giữ hệ màu Nolan.dev và toàn bộ nội dung thật đang có.

## Hình ảnh
- Tạo bộ visual kỹ thuật đồng nhất cho Python/deep learning, camera/computer vision, ONNX deployment, .NET application và AI agents.
- Lưu ảnh dưới `public/images/projects/` theo đúng cấu trúc nội bộ hiện tại; không phụ thuộc URL ngoài.

## Kiểm tra hoàn tất
- Kiểm tra desktop và mobile, chữ không chồng lấn, không tràn ngang, mọi ảnh đều tồn tại.
- Xác nhận metadata riêng của trang vẫn đầy đủ và bản preview không còn lỗi.

## Chi tiết kỹ thuật
- Tách các panel lớn thành component nhỏ, nhưng giữ trang một route và điều hướng anchor hiện tại.
- Mọi màu, viền, nền và hiệu ứng dùng token trong design system hiện có; bổ sung token mới chỉ khi cần.
- Giữ hiệu ứng reveal và hỗ trợ `prefers-reduced-motion`.
