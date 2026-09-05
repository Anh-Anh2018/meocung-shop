import { createDirectus, rest, readItems } from '@directus/sdk';

export interface SeoModel {
  id?: number | string;
  title?: string;
  meta_description?: string;
  canonical_url?: string;
  no_index?: boolean;
  og_image?: string;
}

export interface PostModel {
  id: number | string;
  title: string;
  slug: string;
  content?: string;
  image?: string;
  category?: string;
  status?: string;
  date_created?: string;
  date_updated?: string;
  seo?: SeoModel | null;
}

export interface Schema {
  posts: PostModel[];
  seo: SeoModel[];
}

export const DIRECTUS_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://directus-production-851ff.up.railway.app';

export const directus = createDirectus<Schema>(DIRECTUS_URL).with(rest());

// Dữ liệu cẩm nang Mèo Cưng mẫu để giao diện luôn đầy đặn nếu Directus chưa có bài
export const SAMPLE_MEOCUNG_POSTS: PostModel[] = [
  {
    id: 'sample-1',
    title: 'Top 7 Loại Thức Ăn Hạt Cho Mèo Được Ưa Chuộng Nhất Hiện Nay',
    slug: 'top-7-thuc-an-hat-cho-meo-tot-nhat',
    category: 'Thức ăn hạt',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80',
    content: `<p>Thức ăn hạt là nguồn dinh dưỡng cơ bản và thiết yếu cho các bé mèo cưng. Để chọn được loại hạt vừa túi tiền mà vẫn đảm bảo dinh dưỡng và không gây sỏi thận cho mèo, bạn cần chú ý đến thành phần thịt đạm thực sự trong bao bì...</p>
    <h3>1. Thức ăn hạt Royal Canin</h3>
    <p>Dòng sản phẩm chuyên biệt cho từng giai đoạn và giống mèo, hỗ trợ búi lông và bảo vệ hệ tiêu hóa.</p>
    <h3>2. Hạt Reflex Plus & Minino</h3>
    <p>Lựa chọn kinh tế với hàm lượng dinh dưỡng cân bằng, hương vị cá hồi và thịt gà kích thích vị giác của các bé mèo kén ăn.</p>`,
    date_created: new Date().toISOString(),
    status: 'published',
    seo: {
      title: 'Top 7 Loại Thức Ăn Hạt Cho Mèo Được Ưa Chuộng Nhất | Mèo Cưng',
      meta_description: 'Tổng hợp đánh giá các loại hạt cho mèo dinh dưỡng cao, ngừa sỏi thận, mượt lông. Giao hàng hỏa tốc tại TP.HCM.',
    },
  },
  {
    id: 'sample-2',
    title: 'Pate Cho Mèo Con: Cách Chọn Và Lượng Ăn Hàng Ngày Chuẩn Khoa Học',
    slug: 'pate-cho-meo-con-huong-dan-chi-tiet',
    category: 'Pate cho mèo',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&auto=format&fit=crop&q=80',
    content: `<p>Mèo con từ 1 đến 6 tháng tuổi có hệ tiêu hóa non nớt nhưng lại cần hàm lượng nước và đạm rất cao. Pate là giải pháp hoàn hảo để bổ sung nước, phòng tránh các bệnh về tiết niệu...</p>
    <p>Nên cho mèo con ăn từ 1-2 gói pate chia làm các bữa nhỏ trong ngày kết hợp hạt ngâm mềm.</p>`,
    date_created: new Date(Date.now() - 86400000).toISOString(),
    status: 'published',
    seo: {
      title: 'Pate Cho Mèo Con: Cách Chọn Và Lượng Ăn Hàng Ngày | Mèo Cưng',
      meta_description: 'Hướng dẫn lựa chọn pate mềm, giàu canxi và taurine cho mèo con mau lớn, khỏe mạnh.',
    },
  },
  {
    id: 'sample-3',
    title: 'Cách Chọn Cát Vệ Sinh Cho Mèo Vừa Khử Mùi Tốt Vừa Tiết Kiệm',
    slug: 'cach-chon-cat-ve-sinh-cho-meo-khu-mui-tot',
    category: 'Cát vệ sinh',
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&auto=format&fit=crop&q=80',
    content: `<p>Mùi hôi từ khay cát luôn là nỗi đau đầu của các "sen". Trên thị trường có các dòng cát đất sét bentonite, cát đậu nành hữu cơ, và cát gỗ tofu...</p>
    <p>Cát đậu nành có ưu điểm xả được bồn cầu, thân thiện môi trường và không bụi, rất an toàn cho hệ hô hấp của mèo.</p>`,
    date_created: new Date(Date.now() - 172800000).toISOString(),
    status: 'published',
    seo: {
      title: 'Cách Chọn Cát Vệ Sinh Khử Mùi Cực Tốt Cho Mèo | Mèo Cưng',
      meta_description: 'So sánh cát đậu nành, cát bentonite và cát gỗ. Bí quyết giữ nhà luôn thơm tho khi nuôi mèo.',
    },
  },
  {
    id: 'sample-4',
    title: 'Mèo Anh Lông Ngắn (Aln): Đặc Điểm, Giá Bán Và Cách Chăm Sóc',
    slug: 'meo-anh-long-ngan-dac-diem-va-cham-soc',
    category: 'Giống mèo',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=80',
    content: `<p>Mèo Anh Lông Ngắn (British Shorthair) với khuôn mặt tròn xoe bánh bao và thân hình mũm mĩm là một trong những giống mèo được yêu thích nhất tại Việt Nam...</p>`,
    date_created: new Date(Date.now() - 259200000).toISOString(),
    status: 'published',
    seo: {
      title: 'Cẩm Nang Mèo Anh Lông Ngắn (Aln) Từ A-Z | Mèo Cưng',
      meta_description: 'Tìm hiểu nguồn gốc, màu lông phổ biến, chế độ dinh dưỡng và bảng giá mèo Anh lông ngắn tại Việt Nam.',
    },
  },
];

export async function getPosts(): Promise<PostModel[]> {
  try {
    const posts = await directus.request(
      readItems('posts', {
        fields: ['id', 'title', 'slug', 'image', 'status', 'date_created', { seo: ['title', 'meta_description', 'og_image'] }],
        filter: {
          status: { _eq: 'published' },
        },
        sort: ['-date_created'],
      })
    );

    if (posts && posts.length > 0) {
      return posts as PostModel[];
    }
  } catch (error) {
    console.warn('Directus API chưa có bài hoặc quyền public chưa bật, đang dùng dữ liệu cẩm nang Mèo Cưng mẫu.');
  }

  return SAMPLE_MEOCUNG_POSTS;
}

export async function getPostBySlug(slug: string): Promise<PostModel | null> {
  try {
    const posts = await directus.request(
      readItems('posts', {
        fields: [
          'id',
          'title',
          'slug',
          'content',
          'image',
          'status',
          'date_created',
          'date_updated',
          { seo: ['title', 'meta_description', 'canonical_url', 'no_index', 'og_image'] },
        ],
        filter: {
          slug: { _eq: slug },
        },
        limit: 1,
      })
    );

    if (posts && posts.length > 0) {
      return posts[0] as PostModel;
    }
  } catch (error) {
    console.warn('Lỗi khi query Directus:', error);
  }

  const sample = SAMPLE_MEOCUNG_POSTS.find((p) => p.slug === slug);
  return sample || null;
}

export function getDirectusImageUrl(imageId?: string, width = 800, quality = 80): string {
  if (!imageId) return 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80';
  if (imageId.startsWith('http')) return imageId;
  return `${DIRECTUS_URL}/assets/${imageId}?width=${width}&quality=${quality}&format=webp`;
}
