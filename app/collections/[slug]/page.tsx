import React from 'react';
import { notFound } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export default function CategoryPage({ params }: Props) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Link href="/" className="hover:text-[#ff7f5c] transition">Trang chủ</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[#ff7f5c] transition">Sản phẩm</Link>
        <span>/</span>
        <span className="text-gray-900 font-bold">{category.name}</span>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 p-6 sm:p-8 rounded-3xl border border-orange-100 flex items-center justify-between">
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#ff7f5c] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Danh mục chuyên biệt
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 flex items-center gap-3">
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
            {category.desc} • {categoryProducts.length} sản phẩm chính hãng
          </p>
        </div>

        <Link
          href="/products"
          className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#ff7f5c] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Xem tất cả danh mục</span>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
