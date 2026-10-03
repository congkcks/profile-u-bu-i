# Bổ sung hệ thống Blog Markdown

## Mục tiêu
Thêm Blog giống ảnh tham chiếu nhất có thể nhưng tách biệt khỏi trang portfolio hiện tại. Trang chủ chỉ được bổ sung liên kết **Blog** trên thanh điều hướng; các section và phong cách hiện tại được giữ nguyên.

## Phạm vi triển khai
- Tạo `/blog` với ảnh bìa lớn, bài nổi bật, ô tìm kiếm, bộ lọc danh mục, lưới bài viết và phân trang theo phong cách dark/navy + electric blue hiện tại.
- Tạo `/blog/$slug` với breadcrumb, metadata riêng, ảnh cover, thông tin tác giả/ngày/thời gian đọc, mục lục tự động và nội dung dễ đọc.
- Tự động đọc toàn bộ `src/content/posts/*.md`; thêm file Markdown mới sẽ tự xuất hiện mà không cần import, sửa danh sách hay tạo route mới.
- Hỗ trợ frontmatter, GFM, H1–H6, ảnh, bảng, danh sách, trích dẫn, liên kết, code inline và code block có syntax highlighting.
- Dùng bài “Hành trình trở thành Wibu” đã cung cấp làm bài đầu tiên; tạo bộ ảnh minh họa nội bộ đúng các đường dẫn trong bài.
- Giữ thanh điều hướng portfolio hiện tại cho trang chủ; Blog dùng header riêng gọn như ảnh mẫu và có lối quay về portfolio.

## Chi tiết kỹ thuật
- Dùng `import.meta.glob(..., { query: '?raw', import: 'default', eager: true })` để phát hiện Markdown tại thời điểm build, phù hợp với TanStack Start/Vite và direct URL.
- Tách parser, kiểu dữ liệu, tính reading time, tạo heading ID và Table of Contents vào module dùng chung.
- Dùng route `src/routes/blog.index.tsx` và `src/routes/blog.$slug.tsx`; mỗi route có title, description, OpenGraph và Twitter metadata riêng.
- Đồng bộ search, category và page vào URL search params để có thể chia sẻ/refresh đúng trạng thái.
- Các ảnh Blog nằm tại `public/images/blog/{slug}/` và dùng đường dẫn `/images/blog/...` như nội dung Markdown.
- Bổ sung token/style Blog trong CSS toàn cục nhưng giới hạn bằng class riêng để không ảnh hưởng giao diện portfolio.

## Kiểm tra hoàn tất
- Production build và typecheck sạch.
- `/`, `/blog`, `/blog/hanh-trinh-tro-thanh-wibu` mở trực tiếp và refresh bình thường.
- Search, filter, pagination, mục lục và Markdown hoạt động.
- Không có ảnh hỏng, lỗi console hay tràn ngang trên desktop/mobile.
- Xác nhận thêm một file `.md` mới không cần chỉnh source code.
