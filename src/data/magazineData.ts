import { MagazineArticle } from '../types';
import { INITIAL_OBJECTS } from './mockData';

export const MAGAZINE_ISSUES = [
  {
    id: 'issue-04',
    code: 'VOL. 04',
    title: 'Bản Sắc Mộng Mộc & Khí Hậu Nhiệt Đới',
    period: 'Mùa Thu 2024',
    curator: 'Hội Đồng Chuyên Môn Monos & Các Xưởng Thủ Công Việt Nam',
    articlesCount: 8,
    themeColor: '#ea4c89'
  },
  {
    id: 'issue-03',
    code: 'VOL. 03',
    title: 'Gốm & Đất Nung: Ánh Sáng Từ Phù Sa Sông Hồng',
    period: 'Mùa Hè 2024',
    curator: 'Viện Mỹ Thuật Ứng Dụng & Làng Nghề Bát Tràng',
    articlesCount: 6,
    themeColor: '#d97706'
  },
  {
    id: 'issue-02',
    code: 'VOL. 02',
    title: 'Bản Quyền Độc Lập: Chống Nạn Sao Chép Kiểu Dáng 3D',
    period: 'Mùa Xuân 2024',
    curator: 'Ban Thẩm Định Scan Pattern AI',
    articlesCount: 5,
    themeColor: '#059669'
  }
];

export const MAGAZINE_ARTICLES: MagazineArticle[] = [
  {
    id: 'art-mong-am-duong',
    issueNumber: 'VOL. 04 • MÙA THU 2024',
    title: 'Nghệ Thuật Mộng Âm Dương: Khi Gỗ Chò Chỉ Vượt Qua Biên Giới Sao Chép',
    subtitle: 'Phóng sự chuyên sâu từ làng mộc Đồng Kỵ (Bắc Ninh) về kỹ thuật sấy tự nhiên 18 tháng và phương pháp liên kết mộng mòi ba phương thế kỷ 18.',
    excerpt: 'Không dùng keo dán công nghiệp, không đinh vít sắt. Làm thế nào một chiếc bàn trà truyền thống Việt Nam có thể đứng vững trước biến thiên co giãn của thời tiết nồm ẩm miền Bắc suốt nhiều thế hệ?',
    category: 'cover_story',
    categoryLabel: 'Phóng Sự Bìa (Cover Story)',
    readTime: '9 phút đọc',
    author: {
      name: 'KTS. Vũ Văn Hưng',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Chuyên gia nghiên cứu Kiến trúc Gỗ Cổ truyền'
    },
    publishedDate: '10 Tháng 9, 2024',
    coverImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    taggedObject: INITIAL_OBJECTS[2], // Bàn trà chò chỉ
    pullQuote: {
      quote: 'Mộng gỗ không phải là một khớp nối cơ khí vô tri, mà là sự nhượng bộ có tính toán giữa thớ dọc và thớ ngang khi thời tiết thay đổi.',
      speaker: 'Nghệ nhân Vũ Văn Hùng — Thợ cả mộc Đồng Kỵ'
    },
    keyTakeaways: [
      'Sấy tự nhiên 18 tháng trong bóng râm giúp độ ẩm thớ gỗ đạt trạng thái cân bằng 12-14%.',
      'Kỹ thuật mộng mòi 3 phương (three-way miter joint) khóa chốt hoàn toàn không cần đinh ốc kim loại.',
      'Lưu bạ số Monos cấp mã CMND MNS-VN-2024-TT01 bảo hộ quyền tác giả hình dáng và mộng độc bản.'
    ],
    contentParagraphs: [
      'Giữa thế kỷ 21, khi các dây chuyền cắt CNC và máy dán cạnh tự động sản xuất hàng ngàn chiếc bàn mỗi ngày, tại một góc xưởng mộc ở Đồng Kỵ (Bắc Ninh), nghệ nhân Vũ Văn Hùng vẫn cầm chiếc đục tay 6mm để nắn từng mép mộng âm dương.',
      'Chiếc Bàn Trà Trăng Tròn (Monos Code: MNS-VN-2024-TT01) được chọn làm nhân vật trang bìa của số Tạp chí Monos kỳ này vì một lý do đặc biệt: nó đại diện cho tư duy thiết kế nội thất nguyên bản của người Việt — nơi giá trị nằm ở cốt lõi cấu trúc chứ không phải lớp sơn phủ bóng bên ngoài.',
      'Gỗ chò chỉ sau khi hạ thân cây được xẻ thành từng súc dày và để tự nhiên trong kho thoáng gió suốt 18 tháng ròng. Không ép sấy công nghiệp bằng lò nhiệt cưỡng bức, bởi nhiệt độ cao sẽ bẻ gãy các liên kết sợi xenlulo tự nhiên khiến gỗ giòn và nứt chân chim khi mùa nồm miền Bắc tràn về.',
      'Điểm mấu chốt của mộng âm dương truyền thống là độ khít quang học đạt 100%. Khi ghép vào nhau, không có khe hở nào cho bụi bẩn hay hơi ẩm lọt vào. Thay vì dùng keo hóa chất PVA giải phóng khí formaldehyde độc hại, xưởng sử dụng keo da trâu và sáp ong tự nhiên để dưỡng bóng bề mặt.',
      'Thông qua việc đăng ký hồ sơ lưu bạ trên Monos, toàn bộ bản vẽ chi tiết các góc mộng và hash mã hóa đã được lưu trữ vĩnh viễn, ngăn chặn hoàn toàn việc các xưởng hàng chợ sao chép kiểu dáng.'
    ],
    savesCount: 142,
    clapsCount: 389
  },
  {
    id: 'art-uon-hoi-nuoc-go-soi',
    issueNumber: 'VOL. 04 • MÙA THU 2024',
    title: 'Khoa Học Uốn Hơi Nước: Vì Sao Ghế Thuyền Phải Hấp Nhiệt 100°C Trong 4 Tiếng?',
    subtitle: 'Giải mã quy trình biến nan gỗ sồi thẳng tắp thành đường cong sống đáy thuyền ghe bầu miền Tây sông nước.',
    excerpt: 'Lignin trong tế bào gỗ hoạt động như thế nào khi được kích hoạt bởi hơi nước bão hòa? Nghiên cứu thực nghiệm từ xưởng An Viet Design tại Thủ Dầu Một (Bình Dương).',
    category: 'craft_forensics',
    categoryLabel: 'Giám Định Kỹ Thuật (Craft Forensics)',
    readTime: '7 phút đọc',
    author: {
      name: 'Vũ Quốc Toàn',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
      role: 'Giảng viên Thiết kế Công nghiệp & Founder An Viet'
    },
    publishedDate: '08 Tháng 9, 2024',
    coverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80'
    ],
    taggedObject: INITIAL_OBJECTS[3], // Ghế thuyền gỗ sồi
    pullQuote: {
      quote: 'Khi hơi nước nóng đi sâu vào từng thớ gỗ sồi, chất lignin mềm ra như kẹo cao su trong 2 phút ngắn ngủi. Đó là lúc người thợ phải ép khuôn chuẩn xác từng mi-li-mét.',
      speaker: 'Kỹ sư chế tác Vũ Quốc Toàn'
    },
    keyTakeaways: [
      'Quá trình uốn hơi nước 100°C bảo tồn toàn bộ tính dẻo dai nguyên bản của thớ gỗ sồi trắng.',
      'Thiết kế lấy trọn vẹn cảm hứng từ kết cấu vỏ ghe bầu Nam Bộ, phân bổ lực uốn theo cung parabolic.',
      'Sản phẩm được Scan Pattern AI chấm điểm nguyên bản 95% không trùng lặp thị trường.'
    ],
    contentParagraphs: [
      'Chiếc Ghế Thuyền (Boat Lounge Chair, MNS-VN-2024-BT02) là một bài tập thực nghiệm kỳ công về uốn hơi nước (Steam Bending) — một kỹ thuật tưởng chừng chỉ thấy trong ngành đóng tàu gỗ cổ xưa.',
      'Thay vì cắt ghép từ nhiều khúc gỗ nhỏ bằng ốc vít (vốn sẽ gãy theo mạch thớ gỗ khi ngồi ngả lưng), nan gỗ sồi trắng nguyên thanh dài 1.8 mét được đưa vào buồng hơi nước 100°C trong 240 phút liên tục.',
      'Ngay khi mở nắp buồng hấp, 3 người thợ phải phối hợp nhịp nhàng trong vòng 120 giây để đưa thanh gỗ vào khuôn uốn thép đa điểm, kẹp cố định và sấy nguội cưỡng bức trong 48 tiếng để lignin tái đông kết.',
      'Kết quả là một đường cong sống thuyền liên tục, chịu được tải trọng uốn lắc lên đến 220kg mà không cần bất kỳ thanh giằng sắt nào trợ lực.'
    ],
    savesCount: 98,
    clapsCount: 274
  },
  {
    id: 'art-doi-thoai-cloudy-105-do',
    issueNumber: 'VOL. 04 • MÙA THU 2024',
    title: 'Đối Thoại Nhà Thiết Kế: 11 Tháng & 7 Bản Mẫu Để Tìm Ra Góc Ngả 105 Độ Của Ghế Cloudy',
    subtitle: 'Cuộc trò chuyện giữa Tạp chí Monos và KTS. Hoàng Vũ (B+ Studio) về nỗi ám ảnh giải phẫu học cơ thể người Việt.',
    excerpt: 'Phần lớn ghế bành phương Tây có chiều sâu mặt ngồi từ 65cm trở lên, khiến người Việt bị cấn khoeo chân hoặc gập đốt sống lưng. Ghế Cloudy đã giải quyết bài toán nhân trắc học này như thế nào?',
    category: 'maker_dialogue',
    categoryLabel: 'Đối Thoại Nhà Thiết Kế (Maker Dialogue)',
    readTime: '11 phút đọc',
    author: {
      name: 'Ban Giám Tuyển Monos',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80',
      role: 'Tạp chí & Giám tuyển Đồ vật Monos'
    },
    publishedDate: '05 Tháng 9, 2024',
    coverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    taggedObject: INITIAL_OBJECTS[0], // Ghế Cloudy
    pullQuote: {
      quote: 'Nếu một chiếc ghế chỉ đẹp khi đứng một mình trong phòng chụp hình nhưng khiến bạn mỏi lưng sau 20 phút ngồi, thì đó là một thất bại thiết kế, không phải nghệ thuật.',
      speaker: 'KTS. Hoàng Vũ — B+ Furniture Studio'
    },
    keyTakeaways: [
      'Độ ngả tựa lưng 105° kết hợp mặt ghế dốc 7° về sau triệt tiêu hoàn toàn áp lực đè lên đốt sống L4-L5.',
      'Sử dụng mút D40 đúc đa tầng với lớp trên đàn hồi cao êm ái, lớp đáy cứng cáp chịu lực.',
      'Vải nỉ xù Bouclé OEKO-TEX thoáng khí, phù hợp hoàn hảo với nhiệt độ phòng điều hòa tại Việt Nam.'
    ],
    contentParagraphs: [
      'Khi bước vào xưởng nguyên mẫu của B+ Studio tại Đồng Nai, chúng tôi thấy 7 chiếc khung ghế Cloudy nằm xếp hàng dọc lối đi. Mỗi chiếc là một sai số nhỏ: chiếc thì góc tay vịn mở ra 12 độ, chiếc thì chiều cao đệm thấp hơn 3cm.',
      'KTS. Hoàng Vũ chia sẻ: "Người Việt có chiều cao trung bình và tỷ lệ xương ống chân khác biệt so với người Bắc Âu. Ghế armchair nhập khẩu từ Ý hay Đan Mạch thường quá sâu, khiến người ngồi bị chới với chân hoặc phải đệm thêm gối sau lưng."',
      'Bản mẫu thứ 7 hoàn thiện với góc mở tay vịn ôm nhẹ lấy vai, đệm mút đúc theo đường cong sinh học và chân gỗ Tần Bì FSC vát thuôn thanh thoát.',
      'Chiếc ghế đã vượt qua 100,000 chu kỳ thử nghiệm rơi tải tại phòng thí nghiệm kiểm định Quatest 3 trước khi được cấp mã Monos Profile MNS-VN-2024-CLD01.'
    ],
    savesCount: 188,
    clapsCount: 512
  },
  {
    id: 'art-gom-phu-sa-song-hong',
    issueNumber: 'VOL. 03 • MÙA HÈ 2024',
    title: 'Cốt Đất Phù Sa & Men Tro Rơm: Giữ Hồn Gốm Đất Nung Trước Làn Sóng Công Nghiệp',
    subtitle: 'Nghệ nhân Nguyễn Văn Bảy (Bát Tràng) và hành trình 30 năm lưu giữ ngọn lửa nung củi truyền thống 1200°C.',
    excerpt: 'Trong khi 95% xưởng gốm chuyển sang lò gas và đổ khuôn thạch cao hàng loạt, người nghệ nhân già vẫn trung thành với bàn xoay tay và đất bãi phù sa ngâm ủ 2 mùa trăng.',
    category: 'living_archive',
    categoryLabel: 'Lưu Bạ Ký Ức Di Sản (Heritage & Living Archive)',
    readTime: '8 phút đọc',
    author: {
      name: 'Trần Thuỳ Linh',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Nhà nghiên cứu Gốm Men Việt Nam'
    },
    publishedDate: '28 Tháng 8, 2024',
    coverImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'
    ],
    taggedObject: INITIAL_OBJECTS[1], // Đèn gốm đất nung
    pullQuote: {
      quote: 'Lửa củi có linh hồn riêng của nó. Tro củi bạch đàn bay lơ lửng trong lò đọng lại trên vai gốm tạo nên lớp men hỏa biến mà không lò điện nào làm giả được.',
      speaker: 'Nghệ nhân Nguyễn Văn Bảy'
    },
    keyTakeaways: [
      'Đất sét phù sa sông Hồng nung củi truyền thống có độ xốp mao dẫn quang học tạo ánh sáng ấm áp.',
      'Dấu triện chìm thủ công đáy bình được mã hóa Hash bảo chứng nguyên bản trên Monos.',
      'Sản phẩm đạt 98.2% điểm nguyên bản độc lập Scan Pattern AI.'
    ],
    contentParagraphs: [
      'Ghé thăm xưởng gốm của Nghệ nhân Bảy vào một buổi chiều mưa, mùi đất ẩm nồng và khói củi thông mang lại cảm giác tĩnh tại đối lập với nhịp sống hối hả ngoài phố thị.',
      'Tác phẩm Đèn Gốm Đất Nung Sông Hồng (MNS-VN-2024-CLAY01) là kết tinh của đất sét sông Hồng ngâm lọc qua bể chứa 60 ngày để loại bỏ hoàn toàn sạn thô. Người thợ dùng bàn xoay tay thuần túy, vỗ từng lớp đất để đạt độ dày thành gốm 8mm.',
      'Khi ánh đèn LED 2700K bên trong bật sáng, cốt đất nung ngậm ánh sáng và tỏa ra vầng hào quang ấm áp như bếp lửa quê nhà.'
    ],
    savesCount: 115,
    clapsCount: 340
  },
  {
    id: 'art-scan-pattern-bao-ve-ban-quyen',
    issueNumber: 'VOL. 02 • MÙA XUÂN 2024',
    title: 'Báo Cáo Scan Pattern 2024: 84% Thiết Kế Nội Thất Bị Sao Chép Sau 60 Ngày — Giải Pháp Nào?',
    subtitle: 'Phân tích dữ liệu từ 1,200 mẫu thiết kế nội thất tại Việt Nam và vai trò của căn cước số Monos Passport.',
    excerpt: 'Tại sao việc đăng ký kiểu dáng công nghiệp truyền thống mất 18-24 tháng không còn đủ sức bảo vệ các studio thiết kế độc lập? Công nghệ Vector Point Cloud mang lại bước ngoặt gì?',
    category: 'ip_scan',
    categoryLabel: 'Pháp Lý & Bản Quyền Kiểu Dáng (IP & Scan Pattern)',
    readTime: '10 phút đọc',
    author: {
      name: 'TS. Lê Mạnh Dũng',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      role: 'Trưởng ban Công nghệ Thẩm định Scan Pattern Monos'
    },
    publishedDate: '15 Tháng 8, 2024',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    ],
    taggedObject: INITIAL_OBJECTS[0],
    pullQuote: {
      quote: 'Khi một sản phẩm có hồ sơ lưu bạ ngày giờ ra đời với bằng chứng 3D không thể chối cãi, người tiêu dùng sẽ tự động quay lưng với hàng nhái.',
      speaker: 'TS. Lê Mạnh Dũng'
    },
    keyTakeaways: [
      'Thời gian trung bình một mẫu thiết kế nội thất bị làm nhái tại VN là 45-60 ngày sau hội chợ triển lãm.',
      'Scan Pattern AI trích xuất 64 điểm đặc trưng hình học và tỷ lệ góc nghiêng để đối chiếu.',
      'Cấp chứng thư số tức thì ngay khi xuất xưởng, tạo rào cản pháp lý vững chắc.'
    ],
    contentParagraphs: [
      'Ngành nội thất Việt Nam đứng thứ hai châu Á về kim ngạch xuất khẩu, nhưng giá trị gia tăng từ thiết kế bản địa vẫn còn khiêm tốn vì vấn nạn sao chép tràn lan.',
      'Nhiều studio trẻ sau khi đầu tư hàng trăm triệu đồng nghiên cứu sản phẩm mới chỉ sau 2 tháng đã thấy bản sao giá rẻ bằng gỗ công nghiệp dán decal bày bán công khai.',
      'Monos ra đời để giải quyết tận gốc bài toán này bằng cách cấp Căn cước CMND Đồ vật (Monos Passport) dựa trên Scan Pattern AI và blockchain timestamp.',
      'Giờ đây, mỗi chiếc ghế, chiếc bàn chân chính đều có tiếng nói và hồ sơ bảo chứng độc lập!'
    ],
    savesCount: 167,
    clapsCount: 420
  }
];
