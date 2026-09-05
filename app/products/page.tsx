'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { Sparkles } from 'lucide-react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    if (query) {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.categorySlug === selectedCategory);
    }

    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.price - a.price);
    } else {
      list = [...list].sort((a, b) => b.soldCount - a.soldCount);
    }

    return list;
  }, [query, selectedCategory, sortBy]);

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 p-6 sm:p-8 rounded-3xl border border-orange-100 space-y-2">
        <span className="text-xs font-bold text-[#ff7f5c] uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" />
          Cửa hàng Mèo Cưng
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-gray-900">
          {query ? `Kết quả tìm kiếm cho "${query}"` : 'Tất Cả Sản Phẩm Chó Mèo'}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Tìm thấy {filteredProducts.length} sản phẩm dinh dưỡng, cát vệ sinh và đồ chơi chính hãng
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
              selectedCategory === 'all'
                ? 'bg-[#ff7f5c] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Tất cả
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1 ${
                selectedCategory === cat.slug
                  ? 'bg-[#ff7f5c] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-semibold">
          <span className="text-gray-500">Sắp xếp:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 outline-none text-gray-800"
          >
            <option value="popular">Bán chạy nhất</option>
            <option value="price-asc">Giá: Thấp đến Cao</option>
            <option value="price-desc">Giá: Cao đến Thấp</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-300 space-y-3">
          <div className="text-4xl">😿</div>
          <h3 className="font-bold text-gray-800">Không tìm thấy sản phẩm nào</h3>
          <p className="text-xs text-gray-500">Hãy thử tìm với từ khóa khác như "hạt", "pate", "cát"...</p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="px-4 py-2 rounded-full bg-[#ff7f5c] text-white text-xs font-bold"
          >
            Xem tất cả sản phẩm
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">Đang tải danh mục sản phẩm...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
