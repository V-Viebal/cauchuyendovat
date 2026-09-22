import { ObjectProfile, Post, Designer, CommunityGroup, StoryHighlight } from '../types';
import { ALL_BPLUS_PROFILES } from './bplusAdapter';

const BASE_OBJECTS: ObjectProfile[] = [
  {
    id: 'obj-nhong-nhong',
    monosCode: 'MNS-HMA-2026-NN01',
    name: 'Nhong Nhong',
    brand: 'HMA 2026',
    designer: {
      name: 'Nguyễn Ngọc Chung & Nguyễn Cẩm Châu',
      title: 'Furniture & Product Designers',
      avatar: '/chung-va-chau-duo-portrait.jpg',
      verified: true,
      studioUrl: '/designers/nguyen-ngoc-chung-nguyen-cam-chau'
    },
    manufacturer: 'Tân Thành Furniture',
    year: 2026,
    originCity: 'Việt Nam',
    category: 'multi_functional',
    categoryLabel: 'Ghế bập bênh / Stool / Bàn trà',
    materials: [
      'Gỗ tự nhiên nguyên khối tuyển chọn',
      'Sơn phủ an toàn sức khỏe tuyệt đối cho trẻ em',
      'Liên kết cơ khí lồng ghép module chuẩn xác'
    ],
    techniques: [
      'Gia công uốn lượn và tính toán dung sai lồng ghép khít khao',
      'Chuyển đổi công năng đa dụng qua từng giai đoạn lớn khôn',
      'Tối ưu hóa diện tích đóng gói và giảm phát thải vận chuyển'
    ],
    dimensions: 'Thiết kế lồng ghép hai phần đa năng',
    verificationStatus: 'verified_brand',
    verificationBadgeText: 'Đã xác minh bởi HMA 2026 & Tân Thành Furniture',
    shortDescription: 'Cây cầu xóa nhòa ranh giới giữa một món đồ chơi của con và một món nội thất của tổ ấm — chiếc ghế bập bênh đồng hành lớn khôn cùng con trẻ.',
    primaryImage: '/nhong-nhong-main.jpg',
    galleryImages: [
      '/nhong-nhong-main.jpg',
      '/nhong-nhong-nested.jpg',
      '/nhong-nhong-detail-rocking.jpg',
      '/nhong-nhong-detail-wood.jpg'
    ],
    stats: { views: 510, saves: 140, shares: 45 },
    tags: ['Nhong Nhong', 'Kids Furniture', 'Gỗ Tự Nhiên', 'HMA 2026', 'Tân Thành'],
    priceRange: 'Phiên bản tham dự HMA 2026',
    communityMemories: []
  },  {
    id: 'obj-ban-mangthit',
    monosCode: 'MNS-HMA-2026-MGT01',
    name: 'Bàn Console Mangthit',
    brand: 'F-Studio',
    designer: {
      name: 'Trần Thảo Nhiên',
      title: 'Furniture & Interior Designer',
      avatar: '/tran-thao-nhien-portrait.jpg',
      verified: true,
      studioUrl: '/designers/tran-thao-nhien'
    },
    manufacturer: 'F-Studio',
    year: 2026,
    originCity: 'Việt Nam',
    category: 'tables',
    categoryLabel: 'Bàn Console / Bàn trang trí',
    materials: [
      'Gỗ tạo hình cao cấp gia công theo phom dáng vòm',
      'Sơn hoàn thiện màu đỏ gạch nung Măng Thít',
      'Liên kết cơ khí và mộng âm giấu kín'
    ],
    techniques: [
      'Uốn cong đa chiều phỏng theo kiến trúc lò gạch cổ',
      'Hoàn thiện sắc đỏ ngọn lửa nung',
      'Bản vẽ kỹ thuật chi tiết mã 260901'
    ],
    dimensions: 'Theo bản vẽ kỹ thuật chi tiết mã 260901',
    verificationStatus: 'verified_brand',
    verificationBadgeText: 'Đã xác minh bởi F-Studio & Monos',
    shortDescription: 'Bàn Console Mangthit lấy cảm hứng từ hình thái kiến trúc lò gạch Măng Thít — nơi hình dáng được tạo dựng bằng sự đo đạc cơ thể và đôi tay người thợ.',
    primaryImage: '/ban-mangthit-main.jpg',
    galleryImages: [
      '/ban-mangthit-main.jpg',
      '/ban-mangthit-detail-1.jpg',
      '/ban-mangthit-detail-2.jpg',
      '/ban-mangthit-drawing-1.jpg'
    ],
    stats: { views: 380, saves: 95, shares: 28 },
    tags: ['Console Table', 'Măng Thít', 'Gỗ Tạo Hình', 'F-Studio', 'Đỏ Gạch'],
    priceRange: 'Bản vẽ kỹ thuật & Prototype F-Studio',
    communityMemories: []
  },  {
    id: 'obj-hoa-muoi-table',
    monosCode: 'MNS-HMA-2026-HMT01',
    name: 'Bàn Hoa Muối (Hoa Muối Table)',
    brand: 'HMA 2026 — Open Award',
    designer: {
      name: 'Huỳnh Lê Phương Uyên',
      title: 'Interior & Furniture Designer',
      avatar: '/huynh-le-phuong-uyen-portrait.jpg',
      verified: true,
      studioUrl: '/designers/huynh-le-phuong-uyen'
    },
    manufacturer: 'Công ty Cổ Phần Gỗ Tân Thành (Vật liệu tài trợ bởi TAVICO)',
    year: 2026,
    originCity: 'Việt Nam',
    category: 'tables',
    categoryLabel: 'Bàn ăn / Bàn làm việc module',
    materials: [
      'Gỗ tự nhiên cao cấp do TAVICO tài trợ',
      'Kính kiến trúc trong suốt gia công module',
      'Hệ liên kết âm mộng gỗ và ke chịu lực'
    ],
    techniques: [
      'Gia công module hóa cho phép luân phiên sắp đặt',
      'Xử lý độ bóng và chống ẩm chuyên sâu cho gỗ',
      'Ghép nối đa lớp giữa khối gỗ ấm và kính trong suốt'
    ],
    dimensions: 'W2600 x D1000 x H750 mm',
    verificationStatus: 'verified_brand',
    verificationBadgeText: 'HMA 2026 Open Award · Đã xác minh bởi Monos',
    shortDescription: 'Khởi nguồn từ hạt muối và sự cần mẫn của diêm dân — chuyển hóa giá trị ‘Dấu tay’ thành hệ bàn module gỗ tự nhiên và kính.',
    primaryImage: '/hoa-muoi-table-1.jpg',
    galleryImages: [
      '/hoa-muoi-table-1.jpg',
      '/hoa-muoi-table-2.jpg',
      '/hoa-muoi-table-3.jpg',
      '/hoa-muoi-table-4.jpg'
    ],
    stats: { views: 420, saves: 112, shares: 38 },
    tags: ['Table', 'Hoa Mai 2026', 'Module', 'Gỗ Tự Nhiên', 'Kính'],
    priceRange: 'Phiên bản trưng bày HMA 2026',
    communityMemories: []
  },
  {
    id: 'obj-cloudy-bplus',
    monosCode: 'MNS-VN-2024-CLD01',
    name: 'Ghế Cloudy (Cloudy Armchair)',
    brand: 'B+ Furniture Studio',
    designer: {
      name: 'Hoàng Vũ & B+ Team',
      title: 'Nhà sáng lập & Giám đốc thiết kế B+',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      verified: true,
      studioUrl: 'https://bplus-design.vn'
    },
    manufacturer: 'Xưởng Cơ khí & Mộc B+ (Long Thành, Đồng Nai)',
    year: 2024,
    originCity: 'TP. Hồ Chí Minh & Đồng Nai, Việt Nam',
    category: 'seating',
    categoryLabel: 'Ghế bành / Ghế thư giãn',
    materials: [
      'Khung cốt thép ống uốn định hình nguội',
      'Gỗ Tần Bì (Ash) tuyển chọn xử lý dầu lau tự nhiên',
      'Đệm Foam mật độ cao D40 chống lún 10 năm',
      'Vải nỉ xù Bouclé dệt sợi tự nhiên chống bám bẩn'
    ],
    techniques: [
      'Uốn nhiệt 3 chiều đa bán kính (Compound Bending)',
      'Ghép mộng cơ khí giấu vít liên kết âm',
      'May bọc thủ công 100% bằng thợ may da lão thành',
      'Xử lý bề mặt mộc nhám tay giữ trọn vân gỗ'
    ],
    dimensions: 'W820 x D860 x H720 mm (Chiều cao mặt ngồi 380 mm)',
    verificationStatus: 'verified_brand',
    verificationBadgeText: 'Đã xác minh bởi Brand B+ & Ban biên tập Monos',
    shortDescription: 'Chiếc ghế lấy cảm hứng từ cấu trúc bồng bềnh của những đám mây nhiệt đới, kết hợp giữa kết cấu chịu lực tối giản và tính công thái học êm ái.',
    story: `Ghế Cloudy không bắt đầu từ một bản vẽ 3D trên máy tính. Nó bắt đầu từ một câu hỏi tại xưởng mộc ở Đồng Nai vào mùa mưa năm 2023: "Làm sao để người ngồi có thể rũ bỏ hoàn toàn sức nặng cơ thể như đang lơ lửng trên một đám mây sau một ngày dài áp lực đô thị?"

Đội ngũ B+ đã mất 11 tháng và 7 phiên bản prototype thực tế để tìm ra độ dốc tựa lưng hoàn hảo 105 độ cùng đường cong bo tròn ôm sát phần thắt lưng. Thay vì giấu kết cấu, Cloudy để lộ phần chân gỗ tần bì vuốt thon như những cành cây nâng đỡ đám mây bên trên. Mỗi chiếc ghế được xuất xưởng đều gắn kèm tem nhôm dập chìm mã Monos ID định danh riêng biệt.`,
    designIntent: 'Tạo nên một ốc đảo thư giãn nhẹ nhõm về thị giác nhưng vững chãi về công năng chịu lực, cân bằng tính hiện đại quốc tế với sự ấm áp của vật liệu thủ công Việt.',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80'
    ],
    cadDrawingUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    provenanceTimeline: [
      {
        id: 'cl-1',
        stage: 'concept',
        title: 'Bản phác thảo ý tưởng đầu tiên (Sketches)',
        date: '04/2023',
        actor: 'Designer Hoàng Vũ (Studio B+ Thảo Điền)',
        location: 'Thảo Điền, TP. Thủ Đức',
        description: 'Phác họa hơn 40 phương án dáng uốn lưng và tỷ lệ nâng đỡ cơ thể con người Đông Á.',
        evidenceDocs: ['Bản scan sổ tay ý tưởng số #04/23', 'Moodboard vật liệu ban đầu'],
        verified: true
      },
      {
        id: 'cl-2',
        stage: 'prototype',
        title: 'Thử nghiệm Prototype v.1 & v.4 kết cấu',
        date: '09/2023',
        actor: 'Nghệ nhân mộc Trần Văn Lượng & B+ Team',
        location: 'Xưởng Đồng Nai',
        description: 'Điều chỉnh độ ngả từ 98 lên 105 độ sau bài test ngồi 300 giờ liên tục với 12 người có thể trạng khác nhau.',
        evidenceDocs: ['Video thử nghiệm tải trọng 180kg', 'Biên bản kiểm tra độ uốn chân ghế'],
        verified: true
      },
      {
        id: 'cl-3',
        stage: 'production',
        title: 'Gia công lô đầu tiên & Đăng bạ Monos',
        date: '03/2024',
        actor: 'B+ Production Workshop',
        location: 'Khu xưởng Long Thành, Đồng Nai',
        description: 'Khắc lazer mã QR truy xuất nguồn gốc vào khung gầm ghế trước khi xuất xưởng.',
        evidenceDocs: ['Chứng chỉ nguồn gốc gỗ FSC Tần Bì', 'Giấy kiểm định vải bọc OEKO-TEX'],
        verified: true
      },
      {
        id: 'cl-4',
        stage: 'living',
        title: 'Bàn giao & Sống cùng người sử dụng thực tế',
        date: '05/2024 - Hiện tại',
        actor: 'Hơn 45 gia đình & Không gian kiến trúc tại VN',
        location: 'Hà Nội, TP.HCM, Đà Nẵng',
        description: 'Được ghi nhận tại các căn hộ penthouse Thảo Điền, biệt thự ven hồ Tây và phòng đọc sách kiến trúc sư.',
        evidenceDocs: ['Ảnh thực tế sau 1 năm sử dụng', 'Nhật ký bảo dưỡng bề mặt vải'],
        verified: true
      }
    ],
    scanPatternReport: {
      score: 96,
      status: 'original',
      featuresAnalyzed: [
        'Biên dạng đường cong tựa lưng kép uốn đa bán kính',
        'Cấu trúc mộng âm giấu chốt nối chân gỗ và khung đệm',
        'Tỷ lệ chiều cao ngồi so với góc nghiêng tựa đầu',
        'Phần gối đệm phồng đúc nổi nguyên khối'
      ],
      similarReferences: [
        { name: 'Ghế Womb (Eero Saarinen 1948)', similarity: 22, maker: 'Knoll International', notes: 'Khác biệt hoàn toàn về chất liệu khung ngoài và góc mở tay vịn' },
        { name: 'Ghế Little Petra (Viggo Boesen 1938)', similarity: 18, maker: '&Tradition', notes: 'Điểm tương đồng về vải lông xù; Cloudy dài và thấp hơn nhiều' }
      ],
      summary: 'Thiết kế đạt tính nguyên bản cao (96%). Không phát hiện dấu hiệu trùng lặp cấu trúc kỹ thuật hoặc sao chép đăng ký kiểu dáng công nghiệp trong cơ sở dữ liệu nội thất VN và quốc tế.',
      certifiedDate: '15/03/2024'
    },
    communityMemories: [
      {
        id: 'mem-1',
        author: {
          name: 'KTS. Lê Trọng Nghĩa',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          role: 'Kiến trúc sư trưởng A-Studio'
        },
        ownershipDuration: 'Đã sở hữu 9 tháng',
        content: 'Tôi đặt chiếc Cloudy số hiệu MNS-VN-2024-CLD01-08 ở góc ban công nhìn ra sông Sài Gòn. Sau gần 1 năm, lớp vải Bouclé vẫn giữ form chuẩn xác, chân gỗ ash lên màu ánh mật ong rất đằm. Đây là chiếc ghế duy nhất trong nhà mà cả 2 đứa con tôi tranh nhau đọc sách mỗi cuối tuần.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        date: '3 ngày trước',
        likes: 34
      },
      {
        id: 'mem-2',
        author: {
          name: 'Thanh Nhàn Decor',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
          role: 'Stylist nội thất tự do'
        },
        ownershipDuration: 'Đã sử dụng trong 3 dự án',
        content: 'Chụp ảnh với ghế Cloudy cực kỳ ăn ánh sáng vì form dáng uốn cong tạo đổ bóng tự nhiên rất mượt. Điểm cộng lớn nhất là xưởng B+ hỗ trợ tháo áo nỉ vệ sinh định kỳ cực kỳ dễ dàng.',
        date: '1 tuần trước',
        likes: 19
      }
    ],
    tags: ['Ghế bành', 'B+ Studio', 'Nội thất Việt Nam', 'Gỗ Tần Bì', 'Truy xuất nguồn gốc'],
    ownerCount: 52,
    savesCount: 384
  },
  {
    id: 'obj-den-nam-tre',
    monosCode: 'MNS-VN-2023-LP09',
    name: 'Đèn Nấm Tre Mộc (Lam Phong Lamp)',
    brand: 'Lam Phong Artisan Lab',
    designer: {
      name: 'Vũ Đức Phong & Làng nghề Phú Vinh',
      title: 'Nhà thiết kế sản phẩm thủ công',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    manufacturer: 'Hợp tác xã đan lát thủ công Phú Vinh (Chương Mỹ, Hà Nội)',
    year: 2023,
    originCity: 'Hà Nội, Việt Nam',
    category: 'lighting',
    categoryLabel: 'Đèn sàn / Đèn bàn trang trí',
    materials: ['Tre gai bánh tẻ ngâm bùn tự nhiên 6 tháng', 'Đế đá bazan mài nhám nguyên khối', 'Bóng LED COB 2700K Warm'],
    techniques: ['Vót nan tre đều 1.2mm bằng tay', 'Kỹ thuật đan mắt cáo mở tán quang', 'Xử lý chống mối mọt bằng khói rơm khô không hóa chất'],
    dimensions: 'Dia 450 x H620 mm',
    verificationStatus: 'verified_brand',
    verificationBadgeText: 'Đã xác minh di sản làng nghề thủ công',
    shortDescription: 'Chiếc đèn tre lấy cảm hứng từ mũ nấm rừng sau cơn mưa, tán quang ánh sáng ấm áp qua hàng ngàn nan tre vót thủ công.',
    story: 'Nhà thiết kế Đức Phong đã cùng ăn ở với các nghệ nhân làng tre Phú Vinh trong 4 tháng để tìm ra độ mỏng của nan tre vừa đủ cho ánh sáng xuyên qua dịu mắt mà không làm vỡ cấu trúc cơ học khi mùa đông hanh khô tới.',
    designIntent: 'Hồi sinh kỹ thuật đan tre truyền thống vào một ngôn ngữ chiếu sáng đương đại, bền vững và không dùng nhựa.',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80'
    ],
    provenanceTimeline: [
      {
        id: 'lp-1',
        stage: 'material',
        title: 'Thu hoạch tre gai bánh tẻ tại rừng Phú Thọ',
        date: '11/2022',
        actor: 'Hợp tác xã mây tre Phú Vinh',
        location: 'Phú Thọ & Hà Tây cũ',
        description: 'Chỉ chọn thân tre từ 3 đến 4 năm tuổi để đạt độ dẻo uốn tự nhiên cao nhất.',
        verified: true
      },
      {
        id: 'lp-2',
        stage: 'production',
        title: 'Đan thủ công & Gắn đế đá bazan',
        date: '04/2023',
        actor: 'Nghệ nhân ưu tú Nguyễn Văn Tĩnh',
        location: 'Xưởng thủ công Phú Vinh',
        description: 'Mỗi chiếc chao đèn mất 28 giờ đan tay liên tục bởi thợ lành nghề trên 20 năm kinh nghiệm.',
        verified: true
      }
    ],
    scanPatternReport: {
      score: 94,
      status: 'original',
      featuresAnalyzed: ['Mô hình đan tán quang hình vòm nấm', 'Chân đế đá Bazan khoét âm giấu dây nguồn'],
      similarReferences: [],
      summary: 'Thiết kế nguyên bản mang bản sắc thủ công mộc mạc Việt Nam.',
      certifiedDate: '20/11/2023'
    },
    communityMemories: [],
    tags: ['Đèn tre', 'Lam Phong', 'Thủ công mỹ nghệ', 'Chương Mỹ'],
    ownerCount: 38,
    savesCount: 290
  },
  {
    id: 'obj-ban-tra-cho-chi',
    monosCode: 'MNS-VN-2023-CC04',
    name: 'Bàn Trà Khảm Trầm Chò Chỉ',
    brand: 'Mộc An Studio & KTS Mai Lan',
    designer: {
      name: 'KTS. Trần Mai Lan',
      title: 'Kiến trúc sư cảnh quan & Nhà nghiên cứu mộc',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    manufacturer: 'Xưởng gỗ Đồng Kỵ (Từ Sơn, Bắc Ninh)',
    year: 2023,
    originCity: 'Bắc Ninh & Hà Nội, Việt Nam',
    category: 'table',
    categoryLabel: 'Bàn trà đạo / Bàn thấp sofa',
    materials: ['Gỗ Chò Chỉ khai thác bền vững', 'Khảm rãnh gỗ mun sừng tự nhiên', 'Dầu thực vật Osmo bảo vệ thớ'],
    techniques: ['Mộng mòi thắt chốt nêm gỗ không đinh', 'Đục rãnh khảm thủ công tỉ mỉ', 'Bào lượn sống trâu truyền thống'],
    dimensions: 'L1400 x W650 x H360 mm',
    verificationStatus: 'verified_brand',
    verificationBadgeText: 'Đã xác minh nguồn gốc gỗ & hồ sơ xưởng',
    shortDescription: 'Mặt bàn nguyên khối bo cạnh mềm như dòng chảy của suối nguồn, tôn vinh nghệ thuật mộng gỗ thuần Việt.',
    story: 'Một nghiên cứu kéo dài 2 năm về kỹ thuật mộng cổ truyền Bắc Bộ, loại bỏ hoàn toàn đinh sắt và keo hóa chất độc hại.',
    designIntent: 'Gìn giữ tinh hoa nghề mộc truyền thống trong không gian phòng trà hiện đại.',
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1000&q=80'
    ],
    provenanceTimeline: [
      {
        id: 'cc-1',
        stage: 'prototype',
        title: 'Nghiên cứu mộng gỗ cổ truyền',
        date: '02/2023',
        actor: 'KTS Mai Lan & Bác Cả Sáu',
        location: 'Đồng Kỵ, Bắc Ninh',
        description: 'Tái tạo liên kết mộng mòi 3 hướng chịu tải lên tới 250kg mà không cần 1 cây đinh.',
        verified: true
      }
    ],
    scanPatternReport: {
      score: 98,
      status: 'original',
      featuresAnalyzed: ['Liên kết mộng mòi ba phương thế kỷ 18 cải biên', 'Vân gỗ tự nhiên uốn lượn cạnh'],
      similarReferences: [],
      summary: 'Tuyệt đối nguyên bản về kết cấu mộc truyền thống.',
      certifiedDate: '10/08/2023'
    },
    communityMemories: [],
    tags: ['Bàn trà', 'Mộc truyền thống', 'Gỗ Chò Chỉ', 'Bắc Ninh'],
    ownerCount: 19,
    savesCount: 215
  },
  {
    id: 'obj-ghe-thuyen-go-soi',
    monosCode: 'MNS-VN-2024-BT02',
    name: 'Ghế Thuyền Gỗ Sồi (Boat Lounge Chair)',
    brand: 'An Viet Design Lab',
    designer: {
      name: 'Vũ Quốc Toàn',
      title: 'Giảng viên Thiết kế Công nghiệp & Founder An Viet',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    manufacturer: 'Xưởng Gỗ Thủ Dầu Một (Bình Dương)',
    year: 2024,
    originCity: 'Bình Dương & TP.HCM',
    category: 'seating',
    categoryLabel: 'Ghế bập bênh / Thư giãn',
    materials: ['Gỗ Sồi trắng uốn cong hơi nước (Steam Bent Oak)', 'Dây thừng gai đan thủ công chống dão', 'Đệm gối lông vũ'],
    techniques: ['Uốn hơi nước truyền thống vỏ thuyền', 'Đan nan dây thừng hoa văn mắc lưới ghe', 'Hoàn thiện sáp ong tự nhiên'],
    dimensions: 'W740 x D910 x H820 mm',
    verificationStatus: 'verified_brand',
    verificationBadgeText: 'Đã xác minh bởi Brand An Viet Design',
    shortDescription: 'Cảm hứng từ những chiếc ghe bầu Nam Bộ lướt nhẹ trên sóng nước miền Tây.',
    story: 'Chiếc ghế tái hiện đường sống đáy thuyền ghe bầu, cho phép biên độ bập bênh êm ái như cảm giác ngồi câu cá bên mạn thuyền.',
    designIntent: 'Chuyển hóa văn hóa sông nước miền Tây thành một món nội thất thư thái đương đại.',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80'
    ],
    provenanceTimeline: [],
    scanPatternReport: {
      score: 95,
      status: 'original',
      featuresAnalyzed: ['Vát cung bập bênh kiểu vỏ ghe Nam Bộ', 'Cách liên kết đan nan lưới mạn thuyền'],
      similarReferences: [],
      summary: 'Thiết kế nguyên bản mang tính nhận diện di sản bản địa cao.',
      certifiedDate: '01/02/2024'
    },
    communityMemories: [],
    tags: ['Ghế thuyền', 'An Viet', 'Gỗ Sồi', 'Văn hóa sông nước'],
    ownerCount: 24,
    savesCount: 168
  }
];

export const INITIAL_OBJECTS: ObjectProfile[] = [
  ...BASE_OBJECTS,
  ...ALL_BPLUS_PROFILES
];

export const INITIAL_POSTS: Post[] = [
  {
    id: 'post-1',
    author: {
      name: 'Ban Biên Tập Monos (Editorial)',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80',
      role: 'Tạp chí & Giám tuyển Đồ vật',
      verified: true
    },
    timestamp: '2 giờ trước • 🌐 Công khai',
    type: 'editorial_story',
    taggedObject: INITIAL_OBJECTS[0],
    content: `[CASE MỞ MÀN: GHẾ CLOUDY — KHI ĐỒ VẬT KHÔNG CHỈ ĐỂ NGỒI MÀ LÀ MỘT HỒ SƠ SỐNG]

Vì sao một chiếc ghế có thể khiến người ta muốn chạm vào nhiều lần trước khi ngồi xuống?

Hôm nay, Monos chính thức công bố hồ sơ định danh Monos Profile MNS-VN-2024-CLD01 cho chiếc ghế Cloudy của B+ Furniture Studio. Thay vì đăng tải các bức ảnh render lộng lẫy và bảng thông số kỹ thuật khô khan, chúng tôi cùng nhóm thiết kế B+ bóc tách từng chặng hành trình thực tế:

1. Thiết kế & Ý tưởng: 11 tháng nghiên cứu góc ngả 105 độ để rũ bỏ áp lực cột sống.
2. Nguồn gốc vật liệu: Gỗ Tần Bì có chứng chỉ khai thác bền vững và vải Bouclé đan sợi mộc.
3. Chặng hành trình xưởng: 7 phiên bản thử nghiệm tại xưởng Đồng Nai trước khi đạt kiểm định chịu tải 180kg.
4. Báo cáo Scan Pattern: Đạt 96% điểm nguyên bản độc lập, bảo vệ quyền tác giả cho designer Việt Nam.

Đồ vật là nhân vật chính. Chúng tôi mời các bạn cùng mở hồ sơ chi tiết và để lại câu chuyện nếu bạn đã hoặc đang sống cùng chiếc ghế này.`,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    provenanceBadges: [
      'Mã Monos: MNS-VN-2024-CLD01',
      'Đã xác minh bởi Brand & Ban biên tập',
      'Điểm Scan Pattern: 96% Nguyên bản',
      'Gỗ Tần Bì FSC • Vải Bouclé OEKO-TEX'
    ],
    likes: 184,
    isLiked: false,
    isSaved: false,
    commentsCount: 28,
    sharesCount: 46,
    comments: [
      {
        id: 'c1',
        author: {
          name: 'Hoàng Vũ (B+ Studio)',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
          role: 'Tác giả thiết kế Cloudy',
          badge: 'Tác giả đồ vật'
        },
        content: 'Cảm ơn Monos đã giúp Cloudy có một hồ sơ định danh minh bạch như vậy. Khi làm nghề ở Việt Nam, nỗi sợ lớn nhất là sản phẩm vừa ra mắt thì 2 tháng sau các xưởng chép tràn lan mà không ai biết nguồn cội. Việc lưu vết timeline từ khâu prototype đến scan pattern thực sự là điểm tựa rất lớn cho các studio thiết kế độc lập!',
        timestamp: '1 giờ trước',
        likes: 42,
        isLiked: false,
        replies: [
          {
            id: 'cr1',
            author: {
              name: 'KTS. Lê Trọng Nghĩa',
              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
              role: 'Kiến trúc sư'
            },
            content: 'Ủng hộ anh Vũ và B+! Tôi vừa bổ sung ký ức trải nghiệm chiếc ghế số series 08 vào mục Memory của đồ vật trên Monos rồi nhé.',
            timestamp: '45 phút trước',
            likes: 12
          }
        ]
      },
      {
        id: 'c2',
        author: {
          name: 'Bác Thợ Mộc Lượng',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
          role: 'Quản đốc xưởng Đồng Nai',
          badge: 'Thợ chế tác'
        },
        content: 'Nhớ nhất đợt uốn cong cái chân sau, gãy mất 3 khúc gỗ mới ra được cữ uốn chuẩn vừa chắc vừa thanh mảnh. Nhìn sản phẩm lên hồ sơ đàng hoàng thế này anh em thợ trong xưởng mừng lắm.',
        timestamp: '30 phút trước',
        likes: 29,
        isLiked: false
      }
    ]
  },
  {
    id: 'post-2',
    author: {
      name: 'KTS. Trần Mai Lan',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      role: 'Thành viên Nhóm Kỹ thuật Mộng & Gỗ Bản Địa',
      verified: true
    },
    timestamp: '5 giờ trước • Trong nhóm: Kỹ thuật Mộng & Gỗ Bản Địa',
    type: 'workshop_craft',
    taggedObject: INITIAL_OBJECTS[2],
    content: `Chia sẻ một chút về trải nghiệm phục dựng mộng mòi ba phương thế kỷ 18 trên Bàn Trà Chò Chỉ:

Nhiều người hỏi tại sao thời buổi máy CNC bấm nút một cái là xong mộng mà xưởng vẫn để thợ đục tay từng rãnh nêm? 
Câu trả lời nằm ở "độ thở" của gỗ tự nhiên Việt Nam. Khí hậu nồm ẩm miền Bắc thay đổi từ 40% đến 95% độ ẩm trong năm. Nếu dùng ốc vít kim loại cứng nhắc, chỉ sau 3 mùa nồm gỗ sẽ nứt toác theo phương thớ. Nhưng khi dùng mộng gỗ cùng chất liệu, thanh gỗ sẽ cùng co ngót, nêm càng nở thì liên kết càng siết chặt lại.

Mời các anh em thợ mộc và KTS xem ảnh chi tiết mặt cắt mộng mòi bên dưới!`,
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=800&q=80'
    ],
    provenanceBadges: [
      'Mộng âm dương thuần gỗ',
      'Không dùng đinh kim loại',
      'Đã đối chiếu với tư liệu mộc cổ Bắc Bộ'
    ],
    likes: 126,
    isLiked: false,
    isSaved: false,
    commentsCount: 19,
    sharesCount: 22,
    comments: [
      {
        id: 'c201',
        author: {
          name: 'Phạm Hữu Đạt',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
          role: 'Thợ chế tác gỗ mỹ nghệ'
        },
        content: 'Bài viết rất chuẩn xác cô Lan ơi! Cụ tổ làng mộc chúng tôi xưa dặn "người thở được thì gỗ cũng phải thở được". Đồ nội thất bây giờ nhiều hãng dùng keo ép mùn cưa qua 2 mùa nồm là mủn hết.',
        timestamp: '3 giờ trước',
        likes: 15
      }
    ]
  },
  {
    id: 'post-3',
    author: {
      name: 'Vũ Đức Phong',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      role: 'Nhà thiết kế sản phẩm thủ công • Lam Phong Lab',
      verified: true
    },
    timestamp: 'Hôm qua lúc 19:40 • 🌐 Công khai',
    type: 'scan_pattern',
    taggedObject: INITIAL_OBJECTS[1],
    content: `[KIỂM TRA SCAN PATTERN TRƯỚC KHI XUẤT XƯỞNG LÔ ĐÈN NẤM TRE MỚI]

Trước khi bàn giao lô đèn cho dự án resort tại Ninh Bình, Lam Phong đã chạy công cụ Scan Pattern trên Monos để đối chiếu bản quyền hình học nan tre. 

Kết quả trả về:
- Chỉ số nguyên bản: 94%
- Không phát hiện trùng lặp hình dáng vòm tán quang với các mẫu đèn mây tre thương mại đã đăng bạ.
- Hồ sơ chứng minh nhân dân đồ vật MNS-VN-2023-LP09 đã cập nhật danh sách nghệ nhân trực tiếp đan từng chiếc chao đèn.

Khi mỗi món đồ thủ công đều có "chứng minh nhân dân", giá trị công sức của bà con làng nghề được bảo chứng rõ ràng hơn bao giờ hết.`,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80'
    ],
    provenanceBadges: [
      'Scan Pattern: 94% Original',
      'Nghệ nhân đan: Làng Phú Vinh',
      'Mã Monos: MNS-VN-2023-LP09'
    ],
    likes: 89,
    isLiked: false,
    isSaved: false,
    commentsCount: 11,
    sharesCount: 15,
    comments: []
  },
  {
    id: 'post-4',
    author: {
      name: 'Nguyễn Đăng Quang',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      role: 'Nhà sưu tầm đồ nội thất Mid-century'
    },
    timestamp: '2 ngày trước • 🌐 Công khai',
    type: 'community_memory',
    content: `[KÝ ỨC 14 NĂM SỐNG CÙNG MỘT CHIẾC GHẾ GỖ DỔI BẮC BỘ]

Chiếc ghế bành gỗ Dổi này mẹ tôi mua từ năm 2010 từ một người thợ mộc già ở Chợ Bưởi. Trải qua 3 lần chuyển nhà, lớp sơn bóng ban đầu đã tróc hết, nhường chỗ cho lớp "patina" màu cánh gián trầm ấm do mồ hôi tay và thời gian tạo nên. 

Tôi vừa tạo hồ sơ cộng đồng trên Monos để lưu giữ lại hình ảnh chiếc ghế này. Đồ vật không đơn thuần là đồ dùng, nó là chứng nhân cho bao thăng trầm của một mái ấm gia đình.`,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80'
    ],
    provenanceBadges: [
      'Hồ sơ do người dùng khởi tạo',
      'Thời gian sống cùng: 14 năm (2010 - 2024)',
      'Gỗ Dổi Bắc Bộ tự nhiên'
    ],
    likes: 215,
    isLiked: false,
    isSaved: false,
    commentsCount: 34,
    sharesCount: 40,
    comments: []
  }
];

export const INITIAL_DESIGNERS: Designer[] = [
    {
    id: 'designer-nguyen-ngoc-chung',
    name: 'Nguyễn Ngọc Chung',
    title: 'Furniture & Product Designer',
    avatar: '/nguyen-ngoc-chung-portrait.jpg',
    coverImage: '/nhong-nhong-main.jpg',
    bio: 'Đồng tác giả thiết kế Nhong Nhong — hướng tới các giải pháp nội thất nhân văn, tinh gọn và có khả năng biến hóa theo thời gian cùng sự lớn khôn của trẻ nhỏ.',
    location: 'Việt Nam',
    verified: true,
    followerCount: 180,
    isFollowing: false,
    specialties: ['Kids Furniture', 'Rocking Chair', 'Coffee Table', 'HMA 2026'],
    featuredObjectId: 'obj-nhong-nhong'
  },
  {
    id: 'designer-nguyen-cam-chau',
    name: 'Nguyễn Cẩm Châu',
    title: 'Furniture & Product Designer',
    avatar: '/nguyen-cam-chau-portrait.jpg',
    coverImage: '/nhong-nhong-main.jpg',
    bio: 'Đồng tác giả thiết kế Nhong Nhong — đề cao tính an lành cho sức khỏe, sự hòa nhịp thẩm mỹ và năng lực lưu giữ những kỷ niệm thiêng liêng của gia đình.',
    location: 'Việt Nam',
    verified: true,
    followerCount: 195,
    isFollowing: false,
    specialties: ['Sustainable Design', 'Human-centered', 'Wood', 'HMA 2026'],
    featuredObjectId: 'obj-nhong-nhong'
  },  {
    id: 'designer-tran-thao-nhien',
    name: 'Trần Thảo Nhiên',
    title: 'Furniture & Interior Designer',
    avatar: '/tran-thao-nhien-portrait.jpg',
    coverImage: '/ban-mangthit-main.jpg',
    bio: 'Tác giả Bàn Console Mangthit — chuyển dịch hình thái kiến trúc lò nung gạch Măng Thít thành thiết kế bàn console đương đại với sắc đỏ của ngọn lửa nung.',
    location: 'Việt Nam',
    verified: true,
    followerCount: 210,
    isFollowing: false,
    specialties: ['Console Table', 'Heritage Form', 'Gỗ Tạo Hình', 'F-Studio'],
    featuredObjectId: 'obj-ban-mangthit'
  },  {
    id: 'designer-huynh-le-phuong-uyen',
    name: 'Huỳnh Lê Phương Uyên',
    title: 'Interior & Furniture Designer',
    avatar: '/huynh-le-phuong-uyen-portrait.jpg',
    coverImage: '/hoa-muoi-table-1.jpg',
    bio: 'Là một người thiết kế nội thất trẻ, quan tâm đến sự giao thoa giữa con người, văn hóa và vật liệu. Uyên theo đuổi tư duy thiết kế tinh giản, giàu tính kể chuyện và đề cao giá trị của những điều bình dị trong cuộc sống.',
    location: 'Việt Nam',
    verified: true,
    followerCount: 280,
    isFollowing: false,
    specialties: ['Table', 'Module', 'Gỗ & Kính', 'HMA 2026'],
    featuredObjectId: 'obj-hoa-muoi-table'
  },
  {
    id: 'des-hoang-vu',
    name: 'Hoàng Vũ',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    studio: 'B+ Furniture Studio',
    specialty: 'Ghế bành, Công thái học, Uốn nhiệt gỗ & kim loại',
    location: 'TP. Hồ Chí Minh',
    objectsCount: 14,
    bio: 'Theo đuổi chủ nghĩa tối giản ấm áp (Warm Minimalism), tập trung chuyển hóa cấu trúc hình học hữu cơ vào sản phẩm đời sống.',
    isFollowing: true,
    featuredWork: 'Ghế Cloudy (Cloudy Armchair)',
    openForCommission: true
  },
  {
    id: 'des-mai-lan',
    name: 'KTS. Trần Mai Lan',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    studio: 'Mộc An Architecture & Design',
    specialty: 'Mộc mộng truyền thống, Gỗ bản địa bền vững',
    location: 'Hà Nội & Bắc Ninh',
    objectsCount: 9,
    bio: 'Dành hơn 10 năm điền dã khắp các làng nghề mộc cổ truyền Bắc Bộ, kết hợp triết lý phương Đông vào không gian sống.',
    isFollowing: false,
    featuredWork: 'Bàn Trà Khảm Trầm Chò Chỉ',
    openForCommission: false
  },
  {
    id: 'des-duc-phong',
    name: 'Vũ Đức Phong',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    studio: 'Lam Phong Artisan Lab',
    specialty: 'Nghệ thuật Mây tre đan, Thiết kế ánh sáng',
    location: 'Chương Mỹ, Hà Nội',
    objectsCount: 11,
    bio: 'Cộng tác với hơn 40 nghệ nhân làng nghề để hồi sinh các kỹ thuật đan lát cổ xưa dưới dạng đồ chiếu sáng cao cấp.',
    isFollowing: false,
    featuredWork: 'Đèn Nấm Tre Mộc',
    openForCommission: true
  },
  {
    id: 'des-quoc-toan',
    name: 'Vũ Quốc Toàn',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    studio: 'An Viet Design Lab',
    specialty: 'Thiết kế công nghiệp, Văn hóa sông nước Nam Bộ',
    location: 'Bình Dương',
    objectsCount: 8,
    bio: 'Chắt lọc tinh hoa từ các phương tiện giao thông sông nước truyền thống thành những sản phẩm nội thất đương đại.',
    isFollowing: false,
    featuredWork: 'Ghế Thuyền Gỗ Sồi',
    openForCommission: true
  }
];

export const INITIAL_GROUPS: CommunityGroup[] = [
  {
    id: 'grp-mong-go',
    name: 'Kỹ thuật Mộng & Gỗ Bản Địa Việt Nam',
    banner: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    icon: '🪵',
    membersCount: '14.2k',
    postsPerDay: '35 bài/ngày',
    description: 'Cộng đồng chuyên sâu dành cho thợ mộc, kiến trúc sư và người say mê kỹ thuật mộng giấu đinh, tính cơ lý các loại gỗ bản địa Việt Nam.',
    isJoined: true,
    category: 'Kỹ thuật & Nghề mộc'
  },
  {
    id: 'grp-furniture-designers',
    name: 'Furniture Designers Vietnam (FDVN)',
    banner: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    icon: '📐',
    membersCount: '8.9k',
    postsPerDay: '18 bài/ngày',
    description: 'Nơi kết nối các nhà thiết kế đồ rời, tìm xưởng sản xuất mẫu prototype, chia sẻ open brief và kiểm tra bản quyền Scan Pattern.',
    isJoined: true,
    category: 'Mạng lưới Thiết kế'
  },
  {
    id: 'grp-vintage-archive',
    name: 'Phục Chế & Sưu Tầm Đồ Gỗ Xưa',
    banner: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    icon: '🏺',
    membersCount: '6.3k',
    postsPerDay: '12 bài/ngày',
    description: 'Chia sẻ các hiện vật nội thất thời kỳ Đông Dương, đồ gỗ thập niên 60-80, kỹ thuật làm sạch patina và truy tìm xuất xứ.',
    isJoined: false,
    category: 'Sưu tầm & Lưu trữ'
  },
  {
    id: 'grp-circular-design',
    name: 'Circular Furniture & Thiết Kế Bền Vững',
    banner: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
    icon: '🌱',
    membersCount: '4.1k',
    postsPerDay: '8 bài/ngày',
    description: 'Nghiên cứu khả năng tháo rời, tái chế, sơn lau gốc nước sinh học và tính toán vòng đời đồ vật.',
    isJoined: false,
    category: 'Bền vững & Tương lai'
  }
];

export const STORY_HIGHLIGHTS: StoryHighlight[] = [
  {
    id: 'story-cloudy',
    title: 'Case mở màn: Ghế Cloudy',
    subtitle: 'B+ Studio • Đồng Nai',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    author: 'Hoàng Vũ',
    objectId: 'obj-cloudy-bplus'
  },
  {
    id: 'story-den-tre',
    title: 'Đèn Nấm Tre Mộc',
    subtitle: 'Làng nghề Phú Vinh',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    author: 'Vũ Đức Phong',
    objectId: 'obj-den-nam-tre'
  },
  {
    id: 'story-ban-tra',
    title: 'Bàn Trà Khảm Trầm',
    subtitle: 'Mộng mòi Đồng Kỵ',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    author: 'KTS Mai Lan',
    objectId: 'obj-ban-tra-cho-chi'
  },
  {
    id: 'story-ghe-thuyen',
    title: 'Ghế Thuyền Gỗ Sồi',
    subtitle: 'An Viet • Sông nước',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
    author: 'Vũ Quốc Toàn',
    objectId: 'obj-ghe-thuyen-go-soi'
  }
];

export const CURRENT_USER = {
  name: 'Lê Minh Tuấn',
  role: 'Nhà sưu tầm & KTS Nội thất',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  city: 'Hà Nội & TP.HCM',
  monosId: 'MNS-USR-8821',
  savedCount: 18,
  ownedCount: 4
};
