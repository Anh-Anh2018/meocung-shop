import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getPostBySlug, getPosts, getDirectusImageUrl } from '@/lib/directus';
import { ArrowLeft, Calendar, ShieldCheck, Share2, Tag, BookOpen, ChevronRight, Phone } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Không tìm thấy bài viết | Mèo Cưng',
    };
  }

  const metaTitle = post.seo?.title || post.title;
  const metaDescription = post.seo?.meta_description || 'Cẩm nang nuôi dưỡng và chăm sóc mèo cưng chuẩn khoa học tại Mèo Cưng (meocung.vn).';
  const canonicalUrl = post.seo?.canonical_url || `https://meocung.vn/posts/${post.slug}`;
  const noIndex = Boolean(post.seo?.no_index);
  const ogImageUrl = post.seo?.og_image
    ? getDirectusImageUrl(post.seo.og_image, 1200, 85)
    : post.image
    ? getDirectusImageUrl(post.image, 1200, 85)
    : undefined;

  return {
    title: `${metaTitle} | Mèo Cưng`,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
      type: 'article',
      publishedTime: post.date_created,
      modifiedTime: post.date_updated,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  };
}

export default async function PostDetailPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  const allPosts = await getPosts();

  if (!post) {
    notFound();
  }

  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 4);

  const formattedDate = post.date_created
    ? new Date(post.date_created).toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : null;

  const coverImage = post.image ? getDirectusImageUrl(post.image, 1200, 85) : null;

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-500">
        <Link href="/" className="hover:text-[#ff7f5c] transition">Trang chủ</Link>
        <span>/</span>
        <Link href="/#cam-nang" className="hover:text-[#ff7f5c] transition">Cẩm nang nuôi mèo</Link>
        <span>/</span>
        <span className="text-gray-800 font-semibold truncate max-w-xs">{post.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Article Content */}
        <article className="lg:col-span-2 space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200">
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-orange-50 text-[#ff7f5c] text-xs font-bold border border-orange-200">
                {post.category || 'Cẩm nang nuôi mèo'}
              </span>
              {post.seo && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SEO Ready (Directus)</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            {formattedDate && (
              <div className="flex items-center gap-2 text-xs text-gray-400 border-b border-gray-100 pb-4">
                <Calendar className="w-4 h-4 text-[#ff7f5c]" />
                <span>Ngày đăng: {formattedDate}</span>
                <span>•</span>
                <span>Tác giả: Ban Biên Tập Mèo Cưng</span>
              </div>
            )}
          </header>

          {/* Cover Image */}
          {coverImage && (
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
              <img
                src={coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article HTML Body */}
          <div
            className="prose prose-slate max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content || '<p>Nội dung chi tiết đang được cập nhật...</p>' }}
          />

          {/* Hotline CTA Box */}
          <div className="mt-8 p-5 rounded-2xl bg-[#fff7f5] border border-[#ffded6] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Cần tư vấn dinh dưỡng cho mèo cưng?</h4>
              <p className="text-xs text-gray-500 mt-0.5">Gọi ngay đội ngũ Mèo Cưng để được hỗ trợ tốt nhất!</p>
            </div>
            <a
              href="tel:0902751819"
              className="px-5 py-2.5 rounded-full bg-[#ff7f5c] hover:bg-[#f0643d] text-white font-bold text-xs transition flex items-center gap-1.5 shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0902 751 819</span>
            </a>
          </div>
        </article>

        {/* Sidebar: Related Posts & Hotline */}
        <aside className="space-y-6">
          {/* Related Articles */}
          <div className="bg-white p-5 rounded-3xl border border-gray-200 space-y-4">
            <h3 className="font-bold text-gray-900 text-base border-b border-gray-100 pb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#ff7f5c]" />
              <span>Bài Viết Liên Quan</span>
            </h3>

            <div className="space-y-3">
              {relatedPosts.map((related) => {
                const img = related.image ? getDirectusImageUrl(related.image, 200, 75) : null;
                return (
                  <Link
                    key={related.id}
                    href={`/posts/${related.slug}`}
                    className="flex gap-3 group items-center"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                      {img ? (
                        <img src={img} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xl">🐱</div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-xs text-gray-800 group-hover:text-[#ff7f5c] transition line-clamp-2 leading-snug">
                        {related.title}
                      </h4>
                      <span className="text-[10px] text-gray-400 mt-1 block">
                        Đọc tiếp →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Contact Box */}
          <div className="bg-gradient-to-br from-[#ff7f5c] to-[#ff9e84] text-white p-6 rounded-3xl shadow-lg shadow-orange-100 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto text-2xl">
              📦
            </div>
            <h3 className="font-black text-lg">Giao Hàng Hoả Tốc 2H</h3>
            <p className="text-xs text-white/90 leading-relaxed">
              Áp dụng cho toàn bộ đơn thức ăn hạt, pate và phụ kiện tại khu vực nội thành TP. Hồ Chí Minh.
            </p>
            <a
              href="tel:0902751819"
              className="inline-block w-full py-2.5 bg-white text-[#ff7f5c] font-bold text-xs rounded-full hover:bg-orange-50 transition shadow"
            >
              Đặt hàng ngay: 0902 751 819
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
