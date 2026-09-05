import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import HeaderClient from "@/components/HeaderClient";
import { CartProvider } from "@/context/CartContext";
import { Sparkles, MapPin, Phone, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Mèo Cưng - Thức ăn chó mèo & Cẩm nang thú cưng TP.HCM",
  description: "Mèo Cưng - Chuyên bán thức ăn hạt, pate mèo, cát vệ sinh chất lượng cao. Cẩm nang chăm sóc và giống mèo chuẩn khoa học. Giao hàng hỏa tốc TP.HCM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased flex flex-col min-h-screen bg-[#fafafa]">
        <CartProvider>
          {/* Top Notice */}
          <div className="bg-[#fff2ee] border-b border-[#ffd9ce] text-xs py-1.5 px-4 text-center text-[#ff6b42] font-medium flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mèo Cưng - Hệ thống phân phối thức ăn & cẩm nang chăm sóc mèo hàng đầu TP.HCM • Giao hàng hỏa tốc 2H!</span>
          </div>

          {/* Header */}
          <HeaderClient />

          {/* Main Body */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 mt-16 pt-12 pb-8 text-gray-600 text-sm">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#ff7f5c] text-white flex items-center justify-center text-xl font-bold">
                    🐱
                  </div>
                  <span className="text-xl font-black text-[#ff7f5c]">Mèo Cưng</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Mèo Cưng - Địa chỉ tin cậy chuyên cung cấp thức ăn hạt, pate dinh dưỡng, cát vệ sinh và cẩm nang nuôi dưỡng thú cưng hàng đầu tại TP. Hồ Chí Minh.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#ff7f5c] shrink-0" />
                    <span>Quận 1, TP. Hồ Chí Minh, Việt Nam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#ff7f5c] shrink-0" />
                    <span className="font-bold text-gray-700">0382 542 737</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider border-b border-gray-100 pb-2">
                  Danh Mục Sản Phẩm
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link href="/collections/thuc-an-hat" className="hover:text-[#ff7f5c] transition">Thức ăn hạt cho mèo</Link></li>
                  <li><Link href="/collections/pate-cho-meo" className="hover:text-[#ff7f5c] transition">Pate & Súp thưởng</Link></li>
                  <li><Link href="/collections/cat-ve-sinh" className="hover:text-[#ff7f5c] transition">Cát vệ sinh khử mùi</Link></li>
                  <li><Link href="/products" className="hover:text-[#ff7f5c] transition">Phụ kiện & Đồ chơi</Link></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider border-b border-gray-100 pb-2">
                  Chính Sách & Hỗ Trợ
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link href="/cart" className="hover:text-[#ff7f5c] transition">Chính sách giao hàng hỏa tốc 2H</Link></li>
                  <li><Link href="/" className="hover:text-[#ff7f5c] transition">Chính sách đổi trả trong 7 ngày</Link></li>
                  <li><Link href="/" className="hover:text-[#ff7f5c] transition">Cam kết hàng chính hãng 100%</Link></li>
                </ul>
              </div>

              <div className="space-y-3 bg-[#fff7f5] p-5 rounded-2xl border border-[#ffded6]">
                <h4 className="font-bold text-[#ff7f5c] text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Quản Trị Nội Dung
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Kết nối trực tiếp với <strong>Directus CMS trên Railway</strong>, quản trị toàn bộ bài viết, cẩm nang và SEO.
                </p>
                <a
                  href="https://directus-production-851ff.up.railway.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff7f5c] hover:underline"
                >
                  <span>Mở Directus Dashboard</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
              <p>© {new Date().getFullYear()} Mèo Cưng (meocung.vn). All rights reserved.</p>
              <p className="flex items-center gap-1">
                <span>Hệ thống Pet Shop & Headless CMS</span>
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              </p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
