'use client';

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { PRODUCTS } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { ShoppingCart, Star, ShieldCheck, Truck, RotateCcw, Phone, Check, ArrowRight } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const product = PRODUCTS.find((p) => p.id === params.id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = PRODUCTS.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 3);

  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Link href="/" className="hover:text-[#ff7f5c]">Trang chủ</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[#ff7f5c]">Sản phẩm</Link>
        <span>/</span>
        <Link href={`/collections/${product.categorySlug}`} className="hover:text-[#ff7f5c]">{product.categoryName}</Link>
        <span>/</span>
        <span className="text-gray-900 font-bold truncate max-w-xs">{product.name}</span>
      </div>

      {/* Product Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white p-6 sm:p-10 rounded-3xl border border-gray-200">
        {/* Left: Image */}
        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 relative">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Right: Info */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-orange-50 text-[#ff7f5c] text-xs font-bold border border-orange-200">
              {product.categoryName}
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-snug">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-500" />
                <span>{product.rating}</span>
              </div>
              <span>•</span>
              <span>Đã bán {product.soldCount} lượt</span>
              <span>•</span>
              <span className="text-emerald-600 font-semibold">Còn hàng</span>
            </div>

            {/* Price */}
            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-baseline gap-3">
              <span className="text-3xl font-black text-[#ff7f5c]">
                {product.price.toLocaleString('vi-VN')}₫
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {product.originalPrice.toLocaleString('vi-VN')}₫
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {product.weight && (
              <div className="text-xs text-gray-500">
                <strong>Quy cách đóng gói:</strong> {product.weight}
              </div>
            )}
          </div>

          {/* Quantity & Buy Buttons */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-gray-700">Số lượng:</span>
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1.5 hover:bg-gray-200 font-bold text-gray-600"
                >
                  -
                </button>
                <span className="px-4 py-1.5 font-bold text-sm bg-white">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1.5 hover:bg-gray-200 font-bold text-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-6 rounded-full bg-[#ff7f5c] hover:bg-[#f0643d] text-white font-bold text-sm flex items-center justify-center gap-2 transition shadow-md shadow-orange-200 cursor-pointer"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Đã thêm vào giỏ hàng!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    <span>Thêm vào giỏ hàng</span>
                  </>
                )}
              </button>

              <Link
                href="/cart"
                onClick={() => addToCart(product, quantity)}
                className="py-3.5 px-6 rounded-full bg-gray-900 hover:bg-black text-white font-bold text-sm flex items-center justify-center gap-2 transition"
              >
                <span>Mua ngay</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Guarantee badges */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-gray-500 text-center">
              <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-gray-50">
                <Truck className="w-4 h-4 text-[#ff7f5c]" />
                <span>Giao 2H TP.HCM</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-gray-50">
                <ShieldCheck className="w-4 h-4 text-[#ff7f5c]" />
                <span>100% Chính hãng</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-gray-50">
                <RotateCcw className="w-4 h-4 text-[#ff7f5c]" />
                <span>Đổi trả 7 ngày</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
