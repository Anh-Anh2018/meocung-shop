export interface Product {
  id: string;
  name: string;
  slug: string;
  categorySlug: 'thuc-an-hat' | 'pate-cho-meo' | 'cat-ve-sinh' | 'phu-kien';
  categoryName: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  soldCount: number;
  description: string;
  weight?: string;
  inStock: boolean;
}

export const CATEGORIES = [
  { slug: 'thuc-an-hat', name: 'Thức ăn hạt', icon: '🥣', desc: 'Hạt dinh dưỡng cao cấp, ngừa sỏi thận' },
  { slug: 'pate-cho-meo', name: 'Pate cho mèo', icon: '🥫', desc: 'Bổ sung nước, kích thích ăn ngon' },
  { slug: 'cat-ve-sinh', name: 'Cát vệ sinh', icon: '📦', desc: 'Vón hút nhanh, khử mùi 100%' },
  { slug: 'phu-kien', name: 'Phụ kiện & Đồ chơi', icon: '🧶', desc: 'Đồ chơi xả stress, dụng cụ chăm sóc' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Thức Ăn Hạt Royal Canin Cho Mèo Trưởng Thành (Fit 32)',
    slug: 'thuc-an-hat-royal-canin-fit-32',
    categorySlug: 'thuc-an-hat',
    categoryName: 'Thức ăn hạt',
    price: 185000,
    originalPrice: 215000,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    soldCount: 1420,
    weight: '2kg',
    inStock: true,
    description: 'Thức ăn hạt Royal Canin Fit 32 cung cấp đầy đủ 52 dưỡng chất thiết yếu, kiểm soát búi lông và duy trì trọng lượng lý tưởng cho mèo trưởng thành.',
  },
  {
    id: 'p2',
    name: 'Hạt Cho Mèo Reflex Plus Vị Cá Hồi & Gạo (Salmon Adult)',
    slug: 'hat-meo-reflex-plus-ca-hoi',
    categorySlug: 'thuc-an-hat',
    categoryName: 'Thức ăn hạt',
    price: 155000,
    originalPrice: 175000,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&auto=format&fit=crop&q=80',
    rating: 4.8,
    soldCount: 980,
    weight: '1.5kg',
    inStock: true,
    description: 'Hạt Reflex Plus công thức Thổ Nhĩ Kỳ với Omega 3 & 6 từ cá hồi Na Uy giúp dưỡng lông bóng mượt, tăng cường hệ miễn dịch.',
  },
  {
    id: 'p3',
    name: 'Pate Mèo Ciao Churu Dạng Tuýp Súp Thưởng (Gói 4 thanh)',
    slug: 'pate-meo-ciao-churu-sup-thuong',
    categorySlug: 'pate-cho-meo',
    categoryName: 'Pate cho mèo',
    price: 35000,
    originalPrice: 42000,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop&q=80',
    rating: 5.0,
    soldCount: 3200,
    weight: '56g (4 x 14g)',
    inStock: true,
    description: 'Súp thưởng số 1 Nhật Bản, nguyên liệu 100% thịt ức gà và cá ngừ tươi, bổ sung trà xanh giảm mùi chất thải.',
  },
  {
    id: 'p4',
    name: 'Pate Whiskas Vị Cá Thu & Cá Hồi Dành Cho Mèo (Gói 85g)',
    slug: 'pate-whiskas-ca-thu-ca-hoi',
    categorySlug: 'pate-cho-meo',
    categoryName: 'Pate cho mèo',
    price: 18000,
    originalPrice: 22000,
    image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=800&auto=format&fit=crop&q=80',
    rating: 4.7,
    soldCount: 2150,
    weight: '85g',
    inStock: true,
    description: 'Pate Whiskas giàu độ ẩm, thơm ngon đậm đà, bổ sung kẽm và dầu cá giúp mắt sáng và lông mềm mượt.',
  },
  {
    id: 'p5',
    name: 'Cát Đậu Nành Tofu Cature Khử Mùi Hữu Cơ Xả Bồn Cầu',
    slug: 'cat-dau-nanh-tofu-cature-khu-mui',
    categorySlug: 'cat-ve-sinh',
    categoryName: 'Cát vệ sinh',
    price: 110000,
    originalPrice: 135000,
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    soldCount: 1850,
    weight: '6L (2.4kg)',
    inStock: true,
    description: '100% bã đậu nành tự nhiên, không bụi 99.9%, vón cục tức thì trong 3 giây và xả thẳng trực tiếp vào bồn cầu tiện lợi.',
  },
  {
    id: 'p6',
    name: 'Cát Vệ Sinh Mèo Đất Sét Thơm Bentonite Sanicat Active',
    slug: 'cat-ve-sinh-dat-set-bentonite-sanicat',
    categorySlug: 'cat-ve-sinh',
    categoryName: 'Cát vệ sinh',
    price: 85000,
    originalPrice: 95000,
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=800&auto=format&fit=crop&q=80',
    rating: 4.6,
    soldCount: 2600,
    weight: '10L',
    inStock: true,
    description: 'Cát bentonite trắng tự nhiên hương hoa oải hương (Lavender), hút ẩm siêu tốc, tiết kiệm chi phí tối đa.',
  },
  {
    id: 'p7',
    name: 'Trụ Cào Móng Cho Mèo Dây Thừng Sisal Tự Nhiên Kèm Chuông',
    slug: 'tru-cao-mong-cho-meo-sisal',
    categorySlug: 'phu-kien',
    categoryName: 'Phụ kiện & Đồ chơi',
    price: 135000,
    originalPrice: 160000,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800&auto=format&fit=crop&q=80',
    rating: 4.8,
    soldCount: 750,
    weight: '1.2kg',
    inStock: true,
    description: 'Trụ cào chắc chắn bọc sợi đay tự nhiên giúp mèo mài móng, không cào xước ghế sofa và đồ đạc trong nhà.',
  },
  {
    id: 'p8',
    name: 'Cần Câu Mèo Lông Vũ Co Giãn Tương Tác Giảm Stress',
    slug: 'can-cau-meo-long-vu-tuong-tac',
    categorySlug: 'phu-kien',
    categoryName: 'Phụ kiện & Đồ chơi',
    price: 25000,
    originalPrice: 35000,
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    soldCount: 3800,
    weight: '100g',
    inStock: true,
    description: 'Đồ chơi kích thích phản xạ săn mồi tự nhiên, giúp mèo vận động giảm béo phì và gắn kết tình cảm với sen.',
  },
];
