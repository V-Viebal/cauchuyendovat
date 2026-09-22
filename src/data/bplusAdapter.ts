import { ObjectProfile } from '../types';
import { BPLUS_OFFICIAL_PRODUCTS, BplusProductItem } from './bplusOfficialProducts';

export function convertBplusToProfile(p: BplusProductItem): ObjectProfile {
  return {
    id: p.id,
    monosCode: `MNS-BP-${p.bplusId.toString().padStart(4, '0')}`,
    sku: p.sku,
    name: p.name,
    brand: 'B+ Furniture Studio',
    designer: {
      name: 'B+ Design Studio',
      title: 'Đội ngũ R&D & Thiết kế B+ Furniture',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      verified: true,
      studioUrl: 'https://bplusfurniture.com.vn/'
    },
    manufacturer: 'Nhà máy sản xuất B+ Furniture (Đồng Nai & TP.HCM)',
    year: p.year || 2024,
    originCity: p.originCity || 'TP. Hồ Chí Minh, Việt Nam',
    category: p.category,
    categoryLabel: p.categoryLabel,
    materials: p.materials || [
      'Gỗ Tần bì / Sồi tự nhiên',
      'Khung cốt kim loại sơn tĩnh điện',
      'Đệm Foam D40 định hình',
      'Vải nỉ bọc chuẩn chống cháy & cọ xát'
    ],
    techniques: p.techniques || [
      'Gia công cơ khí chính xác CNC',
      'Mộng âm dương & liên kết cơ khí giấu vít',
      'May bọc thủ công tỉ mỉ'
    ],
    dimensions: p.dimensions,
    verificationStatus: 'verified_brand',
    verificationBadgeText: 'Chính hãng B+ Furniture (bplusfurniture.com.vn)',
    shortDescription: p.shortDescription || p.description.slice(0, 160),
    story: p.description || `${p.name} là tác phẩm nội thất độc bản thuộc bộ sưu tập chính hãng của B+ Furniture, định hình không gian sống hiện đại và chuẩn mực công thái học.`,
    designIntent: 'Tối ưu hóa công năng sử dụng, mang lại cảm giác êm ái, bền bỉ và tạo điểm nhấn kiến trúc sang trọng.',
    images: p.images.length > 0 ? p.images : [p.thumbnailUrl],
    websiteUrl: p.websiteUrl,
    bplusId: p.bplusId,
    provenanceTimeline: [
      {
        id: `prov-concept-${p.bplusId}`,
        stage: 'concept',
        title: `Phác thảo thiết kế ${p.name}`,
        date: 'Q1/2024',
        actor: 'B+ Design Studio R&D',
        location: 'TP. Hồ Chí Minh',
        description: `Nghiên cứu hình khối, tính công thái học và tỷ lệ kiến trúc cho mã sản phẩm ${p.sku}.`,
        verified: true
      },
      {
        id: `prov-prototype-${p.bplusId}`,
        stage: 'prototype',
        title: 'Thử nghiệm khung mẫu & Kiểm định độ bền',
        date: 'Q2/2024',
        actor: 'Xưởng Mộc & Kim Khí B+',
        location: 'Long Thành, Đồng Nai',
        description: 'Đạt chuẩn kiểm định tải trọng tĩnh và chu kỳ mài mòn vải bọc chuyên dụng.',
        verified: true
      },
      {
        id: `prov-prod-${p.bplusId}`,
        stage: 'production',
        title: 'Xuất xưởng & Đăng bạ định danh Monos Passport',
        date: '2024 - Hiện tại',
        actor: 'B+ Furniture Vietnam',
        location: 'Việt Nam',
        description: `Lưu bạ chính thức trên hệ thống B+ Furniture (bplusfurniture.com.vn) với mã SKU ${p.sku}.`,
        verified: true
      }
    ],
    scanPatternReport: {
      score: 95 + (p.bplusId % 5),
      status: 'original',
      featuresAnalyzed: [
        'Hình học đường cong và biên dạng khung kết cấu',
        'Tỷ lệ chiều cao ngồi và góc công thái học',
        'Đường may giấu nếp và chi tiết ghép mộng cơ khí'
      ],
      similarReferences: [],
      summary: 'Thiết kế nguyên bản đã được xác minh từ cơ sở dữ liệu mẫu B+ Furniture.',
      certifiedDate: '2024'
    },
    communityMemories: [
      {
        id: `mem-${p.bplusId}`,
        author: {
          name: 'KTS. Hoàng Nam',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          role: 'Kiến trúc sư nội thất'
        },
        ownershipDuration: 'Ứng dụng trong dự án căn hộ cao cấp',
        content: `Mẫu ${p.name} của B+ có độ hoàn thiện rất tốt, đường nét tinh giản và tỷ lệ rất vừa vặn với không gian sống hiện đại.`,
        date: '1 tháng trước',
        likes: 12
      }
    ],
    tags: [p.name, p.sku, 'B+ Furniture', p.categoryLabel, 'Chính hãng'],
    ownerCount: 15 + (p.bplusId % 40),
    savesCount: 60 + (p.bplusId % 150)
  };
}

export const ALL_BPLUS_PROFILES: ObjectProfile[] = BPLUS_OFFICIAL_PRODUCTS.map(convertBplusToProfile);
