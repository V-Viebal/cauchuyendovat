export type Story = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  tag: string;
  accent: string;
  number: string;
  image?: boolean;
};

export const storyFilters = [
  { label: "Tất cả", value: "Tất cả" },
  { label: "Câu chuyện đồ vật", value: "Object Story" },
  { label: "Hồ sơ designer", value: "Designer Profile" },
  { label: "Quy trình sản xuất", value: "How It’s Made" },
  { label: "Đồ vật trong đời sống", value: "Furniture in Use" },
];

export const stories: Story[] = [
  {
    id: "cloudy",
    category: "Object Story / 001",
    title: "Cloudy: khi một chiếc ghế trở thành một vùng ký ức",
    excerpt:
      "Một hồ sơ mở về hình dáng, vật liệu và những người đã đưa chiếc ghế Cloudy từ ý tưởng vào đời sống.",
    author: "Monos Editorial",
    readTime: "08 phút đọc",
    tag: "Object Story",
    accent: "terra",
    number: "01",
    image: true,
  },
  {
    id: "material-remembers",
    category: "Material Intelligence",
    title: "Vật liệu nhớ gì sau khi rời khỏi xưởng?",
    excerpt:
      "Từ bề mặt đến dấu vết sử dụng, vật liệu ghi lại một phần đời sống của đồ vật.",
    author: "Linh Trần",
    readTime: "05 phút đọc",
    tag: "How It’s Made",
    accent: "lime",
    number: "02",
  },
  {
    id: "living-with-things",
    category: "Furniture in Use",
    title: "Sống cùng một món đồ không có nghĩa là giữ nó nguyên vẹn",
    excerpt:
      "Một chiếc ghế thay đổi thế nào khi bước ra khỏi showroom và đi vào những ngày thường.",
    author: "Mina Phạm",
    readTime: "06 phút đọc",
    tag: "Furniture in Use",
    accent: "blue",
    number: "03",
  },
  {
    id: "designer-network",
    category: "Designer Profile",
    title: "Những người đứng sau bản vẽ đầu tiên",
    excerpt:
      "Gặp gỡ thế hệ furniture designer đang đưa ngôn ngữ địa phương vào những vật dụng mới.",
    author: "Khang Nguyễn",
    readTime: "07 phút đọc",
    tag: "Designer Profile",
    accent: "ink",
    number: "04",
  },
  {
    id: "origin-trail",
    category: "Origin / Provenance",
    title: "Một món đồ có thể kể lại hành trình của mình đến đâu?",
    excerpt:
      "Vì sao truy xuất nguồn gốc bắt đầu bằng câu hỏi đúng, không phải bằng một chiếc mã đẹp.",
    author: "Monos Research",
    readTime: "04 phút đọc",
    tag: "Object Story",
    accent: "sand",
    number: "05",
  },
];

export const timeline = [
  {
    index: "01",
    label: "Design",
    title: "Một ý tưởng có hình dáng",
    body: "Cloudy bắt đầu từ mong muốn tạo ra một chỗ ngồi có cảm giác như được ôm.",
    state: "Do designer cung cấp",
  },
  {
    index: "02",
    label: "Material",
    title: "Bề mặt tạo nên cảm giác",
    body: "Lớp vải, lớp đệm và kết cấu bên trong cùng tham gia vào trải nghiệm ngồi.",
    state: "Đang xác minh",
  },
  {
    index: "03",
    label: "Making",
    title: "Bản vẽ đi qua bàn tay",
    body: "Hồ sơ mở chờ thêm dữ liệu về xưởng, kỹ thuật bọc và các công đoạn hoàn thiện.",
    state: "Cộng đồng đóng góp",
  },
  {
    index: "04",
    label: "Living",
    title: "Đồ vật bước vào đời sống",
    body: "Một chiếc ghế được hiểu đầy đủ hơn qua những không gian và người từng sống cùng nó.",
    state: "Hồ sơ đang mở",
  },
];

export const cloudyProduct = {
  name: "CLOUDY",
  productId: "76",
  sku: "LC060",
  category: "Lounge Chair · Lounge & Relax",
  description:
    "Cloudy có đường cong mềm và cấu trúc phân lớp, lấy cảm hứng từ nhịp trôi tĩnh lặng của những đám mây. Các múi chần ngang gợi chuyển động nhẹ của bầu trời, trong khi khung kim loại thanh mảnh giữ lại một dáng ngồi thoáng và cân bằng.",
  sourceUrl: "https://bplusfurniture.com.vn/products/cloudy?listingType=category&listing=seating&label=SEATING&categories=lounge-chair",
  price: "16.700.000 ₫",
  dimensions: "850 × 840 × 790 mm",
  seatHeight: "450 mm",
  origin: "Việt Nam",
  images: [
    { url: "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-cloudy-thump2", alt: "Cloudy — ảnh tổng thể" },
    { url: "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLOUDY 3.jpg", alt: "Cloudy — góc nhìn chính" },
    { url: "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLOUDY 1.jpg", alt: "Cloudy — chi tiết tay vịn" },
    { url: "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLOUDY 2.jpg", alt: "Cloudy — chi tiết thân ghế" },
  ],
  specifications: [
    { label: "Khung & kết cấu", value: "Gỗ tự nhiên (Pinewood / Ash / Beech theo chỉ định). Xử lý chống nấm, chống mối mọt và phủ bảo vệ chống ẩm." },
    { label: "Đệm", value: "Mút polyurethane tỷ trọng cao D35–50 kết hợp lớp fiber wrap." },
    { label: "Bọc", value: "Vải contract-grade; độ bền mài mòn trên 30.000 chu kỳ Martindale. Có thể chọn thêm xử lý chống UV và chống bám bẩn." },
    { label: "Chân / đế", value: "Thép sơn tĩnh điện mờ, đi cùng chân tăng chỉnh không để lại dấu trên sàn." },
    { label: "Tùy biến", value: "Có thể tùy biến vật liệu bọc và màu hoàn thiện theo yêu cầu dự án." },
  ],
  highlights: [
    { title: "Bề mặt bọc", body: "Các múi đệm được chia lớp tạo cảm giác bồng nhẹ như mây, đồng thời phân bổ lực đỡ tự nhiên khi ngồi lâu.", image: "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLOUDY 5.jpg" },
    { title: "Tay vịn gỗ", body: "Tay vịn gỗ mảnh được cân chỉnh theo dáng ghế, đủ nâng đỡ mà không làm nặng hình khối.", image: "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLOUDY 2.jpg" },
    { title: "Chân ghế", body: "Chân kim loại sơn tĩnh điện có tiết diện thanh, tạo vẻ nhẹ và tăng độ bền cho tổng thể.", image: "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLOUDY 4.jpg" },
  ],
  downloads: [
    { name: "Lounge chair - CLOUDY - VER 2020.max", type: "3D MAX", size: "19.64 MB", url: "https://bplusfurniture.sg.larksuite.com/file/WPGtbt4p8oRbqXxGDMgls1Rwg7c" },
    { name: "Lounge chair - CLOUDY - VER 2021.skp", type: "SketchUp", size: "2.10 MB", url: "https://bplusfurniture.sg.larksuite.com/file/VHJcbDcYeovrq5x9duKlbMtAg8f" },
    { name: "Loungechair - CLOUDY - ICON WEB - VER 2021.dwg", type: "CAD", size: "121.41 KB", url: "https://bplusfurniture.sg.larksuite.com/file/Wokubj1Ogo0EjmxZ0hll2a9ogLc" },
  ],
};

export const factoryFilters = ["Tất cả", "Gỗ & bọc", "Kim loại", "Hoàn thiện", "Custom furniture"];

export const factoryDirectory = [
  {
    id: "factory-01",
    name: "Nhà máy 01 / Gỗ & bọc",
    region: "Bình Dương · Miền Nam",
    capability: "Prototype · Small batch",
    specialties: ["Gỗ", "Bọc", "Lắp ráp"],
    filter: "Gỗ & bọc",
    status: "Hồ sơ mẫu",
    icon: "factory",
  },
  {
    id: "factory-02",
    name: "Xưởng 02 / Kim loại",
    region: "Đồng Nai · Miền Nam",
    capability: "Cơ khí · Sơn tĩnh điện",
    specialties: ["Kim loại", "Hàn", "Sơn"],
    filter: "Kim loại",
    status: "Đang xác minh",
    icon: "ruler",
  },
  {
    id: "factory-03",
    name: "Xưởng 03 / Hoàn thiện",
    region: "Hà Nội · Miền Bắc",
    capability: "Mẫu · Hoàn thiện bề mặt",
    specialties: ["Sơn", "Veneer", "Mẫu"],
    filter: "Hoàn thiện",
    status: "Hồ sơ mẫu",
    icon: "sparkles",
  },
  {
    id: "factory-04",
    name: "First Maker / Custom furniture",
    region: "Hồ Chí Minh · Miền Nam",
    capability: "Custom furniture · Bespoke interiors",
    specialties: ["Furniture", "Bespoke", "Renovate"],
    filter: "Custom furniture",
    status: "Thông tin công khai · đang xác minh",
    icon: "factory",
  },
  {
    id: "factory-05",
    name: "Nhà máy Tân Thành / Ambie Shelf",
    region: "Việt Nam · địa điểm đang xác minh",
    capability: "Đồ gỗ · Sơn hoàn thiện",
    specialties: ["Gỗ", "Sơn Protego", "Lắp ráp"],
    filter: "Hoàn thiện",
    status: "Theo hồ sơ sản phẩm · đang xác minh",
    icon: "factory",
  },
];

export const designerFilters = ["Tất cả", "Furniture", "Material", "Spatial", "Production"];
export const designerEntityFilters = ["Tất cả", "Cá nhân", "Công ty"];

export const designerProfiles = [
  {
    id: "designer-01",
    name: "Designer 01 / Furniture",
    entityType: "Cá nhân",
    discipline: "Furniture Designer",
    location: "Hồ Chí Minh · Việt Nam",
    bio: "Tập trung vào seating, tỷ lệ cơ thể và những hình dáng có thể bước vào đời sống.",
    specialties: ["Seating", "Lounge chair", "Prototype"],
    filter: "Furniture",
    status: "Đang mở hợp tác",
    icon: "furniture",
    tone: "lime",
  },
  {
    id: "vi-van-truong",
    name: "Vi Văn Trường",
    entityType: "Cá nhân",
    discipline: "Furniture & Interior Designer",
    location: "Việt Nam",
    bio: "Một ngôn ngữ tối giản đương đại được kéo gần về những ký ức, đường cong và cấu trúc của văn hoá Việt.",
    specialties: ["Furniture", "Wood", "Cultural reference"],
    filter: "Furniture",
    status: "Hồ sơ từ dossier HMA 2026",
    icon: "furniture",
    tone: "blue",
    photo: "/vi-van-truong.jpg",
  },
  {
    id: "cao-thi-mai-nguyen",
    name: "Cao Thị Mai Nguyễn",
    entityType: "Cá nhân",
    discipline: "Furniture & Product Designer",
    location: "Việt Nam · profile tạm",
    bio: "Đồng thiết kế Ambie Shelf — một hệ kệ mô-đun đi từ những góc tường bị bỏ quên đến khả năng làm mới không gian.",
    specialties: ["Furniture", "Modular", "Wood"],
    filter: "Furniture",
    status: "Profile tạm · chờ bổ sung",
    icon: "furniture",
    tone: "terra",
    photo: "/ambie-designer-pair.jpg",
    photoLabel: "Ảnh nhóm tạm · chờ profile riêng",
  },
  {
    id: "daniela-thach-thao",
    name: "Daniela Thạch Thảo",
    entityType: "Cá nhân",
    discipline: "Furniture & Product Designer",
    location: "Việt Nam · profile tạm",
    bio: "Đồng thiết kế Ambie Shelf — khai thác chuyển động, khớp xoay và sự thích nghi của đồ vật trong đời sống thật.",
    specialties: ["Furniture", "Movement", "Product"],
    filter: "Furniture",
    status: "Profile tạm · chờ bổ sung",
    icon: "furniture",
    tone: "blue",
    photo: "/ambie-designer-pair.jpg",
    photoLabel: "Ảnh nhóm tạm · chờ profile riêng",
  },
  {
    id: "designer-02",
    name: "Studio 02 / Material",
    entityType: "Công ty",
    discipline: "Công ty thiết kế · Material Research",
    location: "Hà Nội · Việt Nam",
    bio: "DB Studio là một công ty thiết kế, phát triển ngôn ngữ furniture qua vật liệu, cấu tạo và các chi tiết có thể làm thật.",
    specialties: ["Vật liệu", "Bề mặt", "Craft"],
    filter: "Material",
    status: "Hồ sơ công ty · đang mở",
    icon: "material",
    tone: "terra",
    logo: "/db-studio-logo.jpg",
  },
  {
    id: "designer-03",
    name: "Designer 03 / Spatial",
    entityType: "Cá nhân",
    discipline: "Interior & Spatial Designer",
    location: "Đà Nẵng · Việt Nam",
    bio: "Kết nối furniture với không gian sử dụng, hospitality và những bối cảnh thật.",
    specialties: ["Interior", "Hospitality", "Furniture in Use"],
    filter: "Spatial",
    status: "Đang tìm partner",
    icon: "spatial",
    tone: "blue",
  },
  {
    id: "designer-04",
    name: "Studio 04 / Production",
    entityType: "Công ty",
    discipline: "Design & Production",
    location: "Bình Dương · Việt Nam",
    bio: "Đi cùng bản vẽ qua prototype, small batch và các quyết định có thể sản xuất được.",
    specialties: ["Small batch", "Gỗ", "Bọc"],
    filter: "Production",
    status: "Đang xác minh",
    icon: "production",
    tone: "paper",
  },
];

export const spaceFilters = ["Tất cả", "Văn phòng", "Nhà ở", "Hospitality", "Public"];

export const spaceDirectory = [
  {
    id: "space-01",
    name: "Không gian 01 / Văn phòng",
    location: "Hồ Chí Minh · Việt Nam",
    category: "Văn phòng",
    story: "Cloudy được nhìn thấy trong một không gian làm việc mở, nơi ghế trở thành điểm nghỉ, gặp gỡ và sử dụng hằng ngày.",
    specialties: ["Office lounge", "Cloudy", "Furniture in Use"],
    status: "Hồ sơ mẫu",
    icon: "home",
    tone: "lime",
    thumbnail: "/cloudy-space-pvgas.jpg",
    thumbnailAlt: "Không gian văn phòng với các ghế Cloudy",
    relatedObjects: [{ name: "Cloudy", type: "Lounge chair", thumbnail: "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-cloudy-thump2" }],
  },
  {
    id: "space-02",
    name: "Không gian 02 / Hospitality",
    location: "Đà Nẵng · Miền Trung",
    category: "Hospitality",
    story: "Furniture được đặt trong nhịp điệu của một nơi đón tiếp và lưu trú.",
    specialties: ["Lobby", "Seating", "Place Profile"],
    status: "Đang xác minh",
    icon: "hospitality",
    tone: "terra",
    thumbnail: null,
    thumbnailAlt: "",
    relatedObjects: [{ name: "Đồ vật đang xác minh", type: "Furniture", thumbnail: null }],
  },
  {
    id: "space-03",
    name: "Không gian 03 / Public",
    location: "Hà Nội · Miền Bắc",
    category: "Public",
    story: "Một thiết kế được hiểu qua cách nhiều người cùng sử dụng một không gian.",
    specialties: ["Public", "Community", "Furniture in Use"],
    status: "Hồ sơ mẫu",
    icon: "public",
    tone: "blue",
    thumbnail: null,
    thumbnailAlt: "",
    relatedObjects: [{ name: "Đồ vật liên quan", type: "Object profile", thumbnail: null }],
  },
];

export const objectFilters = ["Tất cả", "Lounge chair", "Kệ", "Bench", "Bàn", "Đèn"];

export const brandFilters = ["Tất cả", "Furniture", "Lounge & Relax"];

export const brandDirectory = [
  {
    id: "b-plus",
    name: "B+ Furniture",
    entityType: "Thương hiệu",
    location: "Việt Nam",
    description: "Thương hiệu furniture với các sản phẩm seating và lounge; Cloudy là một hồ sơ sản phẩm đang mở.",
    specialties: ["Furniture", "Lounge & Relax", "Product development"],
    filter: "Furniture",
    status: "Thông tin sản phẩm do brand cung cấp",
    tone: "terra",
    thumbnail: "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-cloudy-thump2",
    thumbnailAlt: "Cloudy — sản phẩm được B+ Furniture giới thiệu",
    relatedObjects: [{ name: "Cloudy", href: "/objects/cloudy" }],
    factoryDisclosure: "Nhà máy chưa công bố bởi thương hiệu",
    sourceUrl: cloudyProduct.sourceUrl,
    href: "/brands/b-plus",
  },
];

export const objectDirectory = [
  {
    id: "cloudy",
    code: "Object Profile / 001",
    name: "Cloudy",
    type: "Lounge chair",
    brand: "B+",
    origin: "Việt Nam",
    excerpt: "Một chiếc ghế có hình dáng như một đám mây — hồ sơ mở đầu của Monos.",
    filter: "Lounge chair",
    status: "Hồ sơ đang mở",
    tone: "terra",
    thumbnail: "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-cloudy-thump2",
    thumbnailAlt: "Cloudy — ghế lounge của B+ Furniture",
    thumbnailLabel: "Ảnh sản phẩm / B+",
    href: "/objects/cloudy",
  },
  {
    id: "ganh-bench",
    code: "Object Profile / 002",
    name: "Gánh Bench",
    type: "Bench",
    brand: "Vi Văn Trường",
    origin: "Việt Nam",
    excerpt: "Một chiếc ghế băng lấy dáng đòn gánh làm điểm khởi đầu — nơi đường cong, chốt mộng và gỗ mộc cùng kể một câu chuyện Việt.",
    filter: "Bench",
    status: "Theo dossier HMA 2026",
    tone: "terra",
    thumbnail: "/ganh-bench-wide.jpg",
    thumbnailAlt: "Gánh Bench — ghế băng gỗ của Vi Văn Trường",
    thumbnailLabel: "HMA 2026 / Object study",
    href: "/objects/ganh-bench",
  },
  {
    id: "ambie-shelf",
    code: "Object Profile / 003",
    name: "Ambie Shelf",
    type: "Kệ mô-đun",
    brand: "Cao Thị Mai Nguyễn · Daniela Thạch Thảo",
    origin: "Việt Nam",
    excerpt: "Một hệ kệ di động bắt đầu từ những góc tường khó bài trí, dùng khớp xoay, bánh xe và các tầng gỗ để thích nghi với không gian.",
    filter: "Kệ",
    status: "Theo hồ sơ cung cấp · đang xác minh",
    tone: "lime",
    thumbnail: "/ambie-shelf-wide.jpg",
    thumbnailAlt: "Ambie Shelf — hệ kệ mô-đun trên bánh xe",
    thumbnailLabel: "Ảnh sản phẩm / hồ sơ cung cấp",
    href: "/objects/ambie-shelf",
  },
  {
    id: "object-002",
    code: "Object Profile / 004",
    name: "Mẫu 02 / Bàn phụ",
    type: "Bàn",
    brand: "Đang xác minh",
    origin: "Hồ Chí Minh · Việt Nam",
    excerpt: "Một object profile đang chờ thêm dữ liệu về vật liệu, tỷ lệ và nơi sản xuất.",
    filter: "Bàn",
    status: "Đang xác minh",
    tone: "lime",
    thumbnail: null,
    thumbnailAlt: "",
    thumbnailLabel: "Ảnh sản phẩm đang chờ bổ sung",
  },
  {
    id: "object-003",
    code: "Object Profile / 005",
    name: "Mẫu 03 / Đèn bàn",
    type: "Đèn",
    brand: "Hồ sơ mẫu",
    origin: "Hà Nội · Việt Nam",
    excerpt: "Một hồ sơ mẫu để nối thiết kế, ánh sáng, vật liệu và bối cảnh sử dụng.",
    filter: "Đèn",
    status: "Hồ sơ mẫu",
    tone: "blue",
    thumbnail: null,
    thumbnailAlt: "",
    thumbnailLabel: "Ảnh sản phẩm đang chờ bổ sung",
  },
];

export const scanArchive = [
  {
    terms: ["cloudy", "b+", "b plus", "lounge chair", "ghế cloudy"],
    title: "Cloudy",
    subtitle: "Object Profile / 001 · B+ · Lounge chair",
    status: "Đã có hồ sơ trong Monos",
    detail: "Bản ghi tương đồng cao trong archive hiện tại.",
  },
  {
    terms: ["cloud chair", "ghế đám mây", "upholstered cloud"],
    title: "Cloudy / hồ sơ liên quan",
    subtitle: "Material Intelligence · Upholstery",
    status: "Có hồ sơ liên quan",
    detail: "Tìm thấy từ khóa và nhóm vật liệu tương đồng.",
  },
];

export type FeedItem = {
  id: string;
  type: string;
  title: string;
  body: string;
  author: string;
  time: string;
  meta: string;
  tone: "lime" | "terra" | "blue" | "paper";
  likes: number;
  comments: number;
};

export const feedItems: FeedItem[] = [
  {
    id: "feed-ambie",
    type: "Object Profile / 003",
    title: "Ambie Shelf vừa mở một hồ sơ mới.",
    body: "Hai designer, một hệ kệ mô-đun, nhà máy Tân Thành và lớp hoàn thiện Sơn Protego đang được nối vào cùng một câu chuyện đồ vật.",
    author: "Monos Editorial",
    time: "vừa xong",
    meta: "Ambie Shelf · Cao Thị Mai Nguyễn · Daniela Thạch Thảo",
    tone: "lime",
    likes: 29,
    comments: 5,
  },
  {
    id: "feed-cloudy",
    type: "Object Profile / 001",
    title: "Cloudy vừa mở thêm một mốc provenance.",
    body: "Hồ sơ đang chờ xác minh kỹ thuật bọc và thông tin về xưởng hoàn thiện.",
    author: "Monos Editorial",
    time: "12 phút trước",
    meta: "Cloudy · B+ · Lounge chair",
    tone: "lime",
    likes: 24,
    comments: 6,
  },
  {
    id: "feed-factory",
    type: "Factory Directory",
    title: "Một hồ sơ nhà máy đang được xác minh.",
    body: "Xưởng 02 / Kim loại đã bổ sung năng lực cơ khí và sơn tĩnh điện vào danh bạ.",
    author: "Monos Network",
    time: "38 phút trước",
    meta: "Đồng Nai · Kim loại · Hàn · Sơn",
    tone: "terra",
    likes: 18,
    comments: 3,
  },
  {
    id: "feed-designer",
    type: "Designer Community",
    title: "Cộng đồng designer đã mở danh sách hồ sơ đầu tiên.",
    body: "Các hồ sơ cá nhân và công ty được nối với chuyên môn, vật liệu, năng lực prototype và nhu cầu hợp tác hiện tại.",
    author: "Monos Network",
    time: "vừa xong",
    meta: "Furniture · Material · Collaboration",
    tone: "blue",
    likes: 36,
    comments: 9,
  },
  {
    id: "feed-material",
    type: "Material Intelligence",
    title: "Vật liệu mới trong archive: upholstery.",
    body: "Một nhóm ghi chú đang được mở để nối bề mặt, cấu trúc đệm và cảm giác sử dụng.",
    author: "Linh Trần",
    time: "1 giờ trước",
    meta: "Material · Upholstery · How It’s Made",
    tone: "blue",
    likes: 31,
    comments: 8,
  },
  {
    id: "feed-brief",
    type: "Open Brief",
    title: "Đang tìm partner cho một prototype nhỏ.",
    body: "Brief mở cho studio hoặc xưởng có thể làm mẫu gỗ bọc trong thời gian ngắn.",
    author: "B+ Studio",
    time: "Hôm qua",
    meta: "Prototype · Small batch · Gỗ & bọc",
    tone: "paper",
    likes: 42,
    comments: 11,
  },
];
