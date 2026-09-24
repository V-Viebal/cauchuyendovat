with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

chung_mock = '''  {
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
  },'''

target = "id: 'designer-chung-chau'"
if target in text:
    idx = text.find(target)
    start_brace = text.rfind('{', 0, idx)
    end_brace = text.find('},', idx) + 2
    text = text[:start_brace] + chung_mock + text[end_brace:]
    with open('src/data/mockData.ts', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Updated src/data/mockData.ts successfully!")
