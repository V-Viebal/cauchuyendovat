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

export const factoryFilters = ["Tất cả", "Gỗ & bọc", "Kim loại", "Hoàn thiện"];

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
    id: "designer-02",
    name: "Studio 02 / Material",
    entityType: "Công ty",
    discipline: "Material Researcher",
    location: "Hà Nội · Việt Nam",
    bio: "Nghiên cứu bề mặt, vật liệu bản địa và cách kỹ thuật thủ công đi vào sản phẩm mới.",
    specialties: ["Vật liệu", "Bề mặt", "Craft"],
    filter: "Material",
    status: "Hồ sơ mẫu",
    icon: "material",
    tone: "terra",
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

export const spaceFilters = ["Tất cả", "Nhà ở", "Hospitality", "Public"];

export const spaceDirectory = [
  {
    id: "space-01",
    name: "Không gian 01 / Nhà ở",
    location: "Thảo Điền · Hồ Chí Minh",
    category: "Nhà ở",
    story: "Một chiếc lounge chair được nhìn thấy qua những buổi chiều ở nhà.",
    specialties: ["Living room", "Lounge chair", "Furniture in Use"],
    status: "Hồ sơ mẫu",
    icon: "home",
    tone: "lime",
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
  },
];

export const objectFilters = ["Tất cả", "Lounge chair", "Bàn", "Đèn"];

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
    href: "#cloudy-profile",
  },
  {
    id: "object-002",
    code: "Object Profile / 002",
    name: "Mẫu 02 / Bàn phụ",
    type: "Bàn",
    brand: "Đang xác minh",
    origin: "Hồ Chí Minh · Việt Nam",
    excerpt: "Một object profile đang chờ thêm dữ liệu về vật liệu, tỷ lệ và nơi sản xuất.",
    filter: "Bàn",
    status: "Đang xác minh",
    tone: "lime",
  },
  {
    id: "object-003",
    code: "Object Profile / 003",
    name: "Mẫu 03 / Đèn bàn",
    type: "Đèn",
    brand: "Hồ sơ mẫu",
    origin: "Hà Nội · Việt Nam",
    excerpt: "Một hồ sơ mẫu để nối thiết kế, ánh sáng, vật liệu và bối cảnh sử dụng.",
    filter: "Đèn",
    status: "Hồ sơ mẫu",
    tone: "blue",
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
