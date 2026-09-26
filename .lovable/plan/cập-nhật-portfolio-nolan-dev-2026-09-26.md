# Cập nhật portfolio Nolan.dev

## Phạm vi
- Giữ nguyên Hero, About, Tech Stack, AI/LLM, Industrial AI và hệ màu/typography hiện tại.
- Thay phần “Beyond the Code” đơn giản hiện tại bằng một section trực quan theo mockup: tiêu đề lớn, collage Nhật Bản, và ba nhóm Anime & Manga, FC Online, Baseball.
- Giữ toàn bộ ảnh profile hiện có, chuyển chúng thành file nội bộ đã tối ưu trong `public/images/profile/`; bổ sung thư mục hình cho projects và beyond-the-code.
- Không dùng ba mockup làm ảnh hiển thị; chúng chỉ là tài liệu tham khảo thiết kế.

## Hình ảnh và giao diện
- Tạo bộ visual đồng nhất cho không khí Nhật Bản/anime-inspired, gaming và baseball; không sử dụng nhân vật/logo có bản quyền làm trọng tâm.
- Dùng card hình ảnh, icon, nhãn ngắn và polaroid; bố cục desktop dạng cinematic collage, tự xếp thành luồng dễ đọc trên điện thoại.
- Thêm mục “Beyond” vào điều hướng và đặt section ngay trước Contact.

## Nhận diện Nolan.dev
- Tạo favicon monogram “N.” tối giản, nền tối và nét electric blue; thay favicon mặc định.
- Cập nhật title, description, tác giả, OpenGraph và Twitter theo nội dung Nolan.dev đã cung cấp.
- Gỡ các dấu hiệu Lovable khỏi phần người dùng nhìn thấy và tài liệu giới thiệu, nhưng giữ nguyên các gói/công cụ kỹ thuật cần cho website chạy và báo lỗi.

## Kiểm tra hoàn tất
- Xác nhận mọi đường dẫn ảnh đang dùng đều trỏ tới file thật trong repository.
- Kiểm tra desktop và mobile, favicon, metadata, ảnh lỗi và chữ chồng lấn.
- Tìm lại các tham chiếu Lovable để phân biệt phần kỹ thuật bắt buộc với branding có thể xóa.
- Xác nhận bản production build thành công và sửa mọi lỗi phát sinh.

## Chi tiết kỹ thuật
- Dự án dùng TanStack Start, nên ảnh dùng đường dẫn `/images/...`; không dùng Next.js Image.
- Ảnh profile hiện ở CDN sẽ được tải về, đổi tên mô tả, tối ưu WebP/JPEG và tham chiếu bằng đường dẫn local.
- Hình mới sẽ được lưu trực tiếp trong `public/images/beyond-the-code/` theo cấu trúc đã yêu cầu.
