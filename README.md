# Next.js + Directus Headless CMS (Sẵn sàng Deploy Vercel)

Dự án Next.js 14 kết nối trực tiếp với **Directus Cloud API trên Railway**, tuân thủ nghiêm ngặt các tiêu chuẩn **SEO Best Practices**.

## 1. Cài đặt và Chạy Thử trên Máy Cục Bộ

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy môi trường phát triển
npm run dev
```

Mở trình duyệt tại: `http://localhost:3000`

---

## 2. Hướng Dẫn Deploy Lên Vercel (2 Cách Đơn Giản)

### Cách 1: Deploy qua GitHub (Khuyên dùng - Tự động CI/CD)
1. Đẩy mã nguồn thư mục này lên một Repository trên **GitHub**.
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng GitHub.
3. Bấm **Add New...** $\rightarrow$ **Project** $\rightarrow$ Chọn repo vừa đẩy lên.
4. Ở mục **Environment Variables**, thêm biến sau:
   * **Key:** `NEXT_PUBLIC_DIRECTUS_URL`
   * **Value:** `https://directus-production-851ff.up.railway.app`
5. Bấm **Deploy**. Vercel sẽ tự động build và cấp domain `https://ten-app.vercel.app` cho bạn.

### Cách 2: Deploy trực tiếp bằng Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 3. Cấu Trúc SEO Tích Hợp
* Model `seo` được liên kết với `posts` qua quan hệ Many-to-One (M2O).
* Tự động sinh thẻ `generateMetadata` cho từng bài viết:
  * Title, Meta Description, Canonical URL.
  * Thẻ OpenGraph (Facebook/Zalo) và Twitter Card.
  * Kiểm soát robot index (`no_index`).
