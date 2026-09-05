import Link from 'next/link';
import { getPosts, getDirectusImageUrl } from '@/lib/directus';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { Sparkles, ArrowRight, BookOpen, Calendar, ChevronRight, ShoppingBag } from 'lucide-react';

export const revalidate = 30;

export default async function HomePage() {
  const posts = await getPosts();
  const featuredProducts = PRODUCTS.slice(0, 8);

  const policies = [
    { title: 'Sản phẩm an toàn', subtitle: '100% nguồn gốc rõ ràng', bgColor: '#FAF7CA', icon: '🛡️' },
    { title: 'Chất lượng chính hãng', subtitle: 'Hạt & pate dinh dưỡng cao', bgColor: '#E3FFD3', icon: '✨' },
    { title: 'Dịch vụ uy tín', subtitle: 'Tư vấn nuôi mèo 24/7', bgColor: '#FED5DC', icon: '🎖️' },
    { title: 'Giao hàng hoả tốc', subtitle: 'Nhanh chóng trong 2h tại HCM', bgColor: '#E4E7FF', icon: '🚀' },
  ];

  return (
    <div className="space-y-12">
      {/* 1. Hero Promotional Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#ff7f5c] via-[#ff9577] to-[#ffb19b] p-8 sm:p-12 text-white shadow-xl shadow-orange-100">
        <div className="max-w-2xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white border border-white/20">
            <span>🐾 Mèo Cưng Pet Shop TP.HCM</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight drop-shadow-sm">
            Thức Ăn & Cẩm Nang Chăm Sóc Mèo Cưng Hoàn Hảo
          </h1>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl">
            Cung cấp các dòng thức ăn hạt, pate thơm ngon, cát vệ sinh cao cấp và toàn bộ kiến thức nuôi dưỡng mèo chuẩn khoa học cho các "sen"!
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#ff7f5c] font-bold text-sm hover:bg-orange-50 transition shadow-md"
            >
              <span>Mua sắm ngay</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:0902751819"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/15 hover:bg-black/25 text-white font-semibold text-sm transition border border-white/20"
            >
              <span>Hotline: 0902 751 819</span>
            </a>
          </div>
        </div>

        <div className="absolute right-4 bottom-0 text-[160px] sm:text-[220px] select-none opacity-25 pointer-events-none transform translate-y-8">
          🐱
        </div>
      </section>

      {/* 2. 4 Policy Cards Pastel */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-black/5 p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer"
              style={{ backgroundColor: policy.bgColor }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center text-2xl shadow-sm shrink-0">
                {policy.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                  {policy.title}
                </h3>
                <p className="text-xs text-gray-600 mt-0.5 truncate">
                  {policy.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Popular Categories */}
      <section className="space-y-6">
        <div className="text-center max-w-lg mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-1 text-[#ff7f5c] text-xs font-bold uppercase tracking-wider">
            <span>✨ Khám phá nhanh</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Danh Mục Nổi Bật
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Mọi thứ bạn cần để chăm sóc boss mèo luôn vui tươi và khỏe mạnh
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className="group flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-200 hover:border-[#ff7f5c]/50 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-sm group-hover:text-[#ff7f5c] transition">
                {cat.name}
              </h3>
              <span className="text-[11px] text-gray-400 mt-1">
                {cat.desc}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured Products (Best Sellers) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#ff7f5c] text-xs font-bold uppercase tracking-wider mb-1">
              <ShoppingBag className="w-4 h-4" />
              <span>Sản Phẩm Bán Chạy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Thức Ăn & Cát Vệ Sinh Được Yêu Thích
            </h2>
          </div>

          <Link
            href="/products"
            className="text-xs font-bold text-[#ff7f5c] hover:underline flex items-center gap-1"
          >
            <span>Xem tất cả</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. Cẩm Nang Chăm Sóc Mèo (Directus API) */}
      <section id="cam-nang" className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-gray-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#ff7f5c] text-xs font-bold uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Directus Cloud API Data</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Cẩm Nang Nuôi Mèo & Tin Tức Mới
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Kiến thức dinh dưỡng, phòng bệnh và kinh nghiệm nuôi mèo thực tế
            </p>
          </div>

          <Link
            href="/tin-tuc"
            className="text-xs font-bold text-[#ff7f5c] hover:underline flex items-center gap-1"
          >
            <span>Xem tất cả bài viết</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => {
            const formattedDate = post.date_created
              ? new Date(post.date_created).toLocaleDateString('vi-VN', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })
              : null;

            const imageUrl = post.image ? getDirectusImageUrl(post.image, 600, 80) : null;
            const metaDesc = post.seo?.meta_description || 'Xem hướng dẫn chi tiết cách nuôi và chăm sóc mèo con...';

            return (
              <article
                key={post.id}
                className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#ff7f5c]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl bg-orange-50">
                      🐱
                    </div>
                  )}

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#ff7f5c] shadow-sm">
                      {post.category || 'Cẩm nang'}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    {formattedDate && (
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formattedDate}</span>
                      </div>
                    )}
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-[#ff7f5c] transition line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {metaDesc}
                    </p>
                  </div>

                  <Link
                    href={`/posts/${post.slug}`}
                    className="inline-flex items-center justify-between text-xs font-bold text-[#ff7f5c] group-hover:translate-x-0.5 transition pt-2 border-t border-gray-50"
                  >
                    <span>Xem chi tiết</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
