'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Phone, Search, ShoppingCart, Menu, Sparkles, Truck, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HeaderClient() {
  const { totalItems } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ff7f5c] to-[#ff9e84] flex items-center justify-center text-white shadow-md shadow-orange-200 group-hover:scale-105 transition-transform">
            <span className="text-2xl">🐱</span>
          </div>
          <div>
            <span className="text-2xl font-black text-[#ff7f5c] tracking-tight block leading-none">
              Mèo Cưng
            </span>
            <span className="text-[11px] font-semibold text-gray-500 tracking-wide uppercase">
              Thức ăn & Cẩm nang mèo
            </span>
          </div>
        </Link>

        {/* Pill Search Bar with working submit */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-xl items-center rounded-full border border-gray-300 p-1 pl-4 hover:border-[#ff7f5c] transition focus-within:border-[#ff7f5c] focus-within:ring-2 focus-within:ring-[#ff7f5c]/20 bg-white"
        >
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 pr-3 border-r border-gray-200 cursor-pointer select-none">
            <span>Tất cả</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm thức ăn hạt, pate, cát vệ sinh..."
            className="flex-1 bg-transparent px-3 py-1.5 text-sm outline-none text-gray-800 placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-10 h-10 rounded-full bg-[#ff7f5c] hover:bg-[#f0643d] flex items-center justify-center text-white transition shadow-sm shrink-0 cursor-pointer"
            aria-label="Tìm kiếm"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>

        {/* Actions: Hotline & Cart with real count */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href="tel:0902751819"
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-orange-50 text-[#ff7f5c] hover:bg-orange-100 transition font-semibold text-xs border border-orange-200"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            <span>0902 751 819</span>
          </a>

          <Link
            href="/cart"
            className="flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 rounded-full hover:bg-orange-50 text-gray-700 transition relative"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-[#ff7f5c]" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-[#ff7f5c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="hidden lg:inline text-xs font-semibold">Giỏ hàng</span>
          </Link>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div className="bg-[#ff7f5c] text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm font-semibold">
          <div className="flex items-center overflow-x-auto scrollbar-none py-1">
            <Link
              href="/products"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-white/15 transition shrink-0 font-bold"
            >
              <Menu className="w-4 h-4" />
              <span>Danh mục sản phẩm</span>
            </Link>
            <Link href="/" className="px-3.5 py-2.5 rounded-lg hover:bg-white/15 transition shrink-0">
              Trang chủ
            </Link>
            <Link href="/collections/thuc-an-hat" className="px-3.5 py-2.5 rounded-lg hover:bg-white/15 transition shrink-0">
              Thức ăn hạt
            </Link>
            <Link href="/collections/pate-cho-meo" className="px-3.5 py-2.5 rounded-lg hover:bg-white/15 transition shrink-0">
              Pate cho mèo
            </Link>
            <Link href="/collections/cat-ve-sinh" className="px-3.5 py-2.5 rounded-lg hover:bg-white/15 transition shrink-0">
              Cát vệ sinh
            </Link>
            <Link href="/tin-tuc" className="px-3.5 py-2.5 rounded-lg hover:bg-white/15 transition shrink-0 flex items-center gap-1.5 text-yellow-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cẩm nang nuôi mèo</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-white/90">
            <Truck className="w-4 h-4" />
            <span>Giao nhanh 2h tại TP.HCM</span>
          </div>
        </div>
      </div>
    </header>
  );
}
