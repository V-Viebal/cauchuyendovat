import React, { useState, useRef } from 'react';
import { 
  Plus, 
  Search, 
  X, 
  ArrowRight,
  Users,
  Compass,
  ShieldCheck
} from 'lucide-react';
import { RightSidebar } from './RightSidebar';
import { FeedComposerBox } from './FeedComposerBox';
import { PostCard } from './PostCard';
import { Post, ObjectProfile, Designer } from '../types';
import { INITIAL_OBJECTS } from '../data/mockData';

interface FacebookFeedViewProps {
  posts: Post[];
  objects: ObjectProfile[];
  designers: Designer[];
  setActiveTab: (tab: 'social' | 'magazine' | 'feed' | 'objects' | 'groups' | 'designers' | 'scan') => void;
  onOpenCreatePost: () => void;
  onOpenChat: (name?: string) => void;
  onOpenScanPattern: () => void;
  onToggleFollowDesigner: (id: string) => void;
  onLikePost: (id: string) => void;
  onSavePost: (id: string) => void;
  onAddComment: (id: string, text: string) => void;
  onOpenObjectProfile: (obj: ObjectProfile) => void;
  onContributeMemory: (obj: ObjectProfile) => void;
  onAddNewStreamedPost?: (newPost: Post) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

// Pre-curated pool of fresh incoming feeds ready to be streamed / delivered
const INCOMING_FEED_POOL: Post[] = [
  {
    id: 'stream-ghe-thuyen-01',
    author: {
      name: 'Vũ Quốc Toàn (An Viet Design)',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
      role: 'Founder & Designer Ghế Thuyền',
      verified: true
    },
    timestamp: 'Vừa xong • 🌐 Đã phát sóng',
    type: 'workshop_craft',
    taggedObject: INITIAL_OBJECTS[3] || INITIAL_OBJECTS[0],
    content: `[CẬP NHẬT TỪ XƯỞNG: UỐN HƠI NƯỚC NAN GỖ SỒI CHO GHẾ THUYỀN MNS-VN-2024-BT02]

Chiều nay tại xưởng Thủ Dầu Một, chúng tôi vừa hoàn thiện mẻ uốn hơi nước (steam bending) thứ 12 cho phần sống đáy ghế thuyền.

Gỗ sồi trắng sau khi hấp nhiệt 100°C trong 4 tiếng được các bác thợ cả uốn ép liền mạch trên khuôn thép định hình. Đường cong này lấy trọn vẹn cảm hứng từ vỏ ghe bầu miền Tây — không dùng bất kỳ ốc vít sắt nào để giữ form.

Cảm ơn Monos đã số hóa hồ sơ quy trình này lên lưu bạ số, giúp người mua biết chính xác từng thớ gỗ sồi được dưỡng ẩm và định hình thủ công như thế nào!`,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80'
    ],
    provenanceBadges: [
      'Mã Monos: MNS-VN-2024-BT02',
      'Gỗ Sồi trắng uốn hơi nước 100°C',
      'Xác thực mộng không đinh kim loại',
      'Xưởng Gỗ Thủ Dầu Một (Bình Dương)'
    ],
    likes: 42,
    isLiked: false,
    isSaved: false,
    commentsCount: 6,
    sharesCount: 14,
    comments: [
      {
        id: 'inc-c1',
        author: {
          name: 'KTS. Lê Trọng Nghĩa',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          role: 'Kiến trúc sư trưởng A-Studio'
        },
        content: 'Đường cong sống thuyền uốn rất căng và chuẩn. Bản này đặt vào hiên nhà nhìn ra vườn cây thì tuyệt vời!',
        timestamp: 'Vừa xong',
        likes: 5
      }
    ]
  },
  {
    id: 'stream-scan-pattern-02',
    author: {
      name: 'Ban Thẩm Định Scan Pattern AI',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80',
      role: 'Hệ thống thẩm định nguyên bản Monos',
      verified: true
    },
    timestamp: 'Vừa xong • 🌐 Thẩm định thời gian thực',
    type: 'provenance_update',
    taggedObject: INITIAL_OBJECTS[1] || INITIAL_OBJECTS[0],
    content: `[KẾT QUẢ SCAN PATTERN AI: CHỨNG NHẬN NGUYÊN BẢN 98.2% CHO ĐÈN GỐM ĐẤT NUNG SÔNG HỒNG]

Thuật toán Scan Pattern AI của Monos vừa hoàn tất phân tích đối chiếu vector 3D và dấu vân tay khoáng chất cho lô tác phẩm đèn gốm đợt 2 của Nghệ nhân Nguyễn Văn Bảy (Bát Tràng):

✓ Độ tương đồng cấu trúc hình học: 98.2% (Nguyên bản độc quyền)
✓ Cốt đất phù sa sông Hồng nung củi truyền thống 1200°C
✓ Dấu triện chìm thủ công đáy gốm được mã hóa thành Hash SHA-256
✓ Không phát hiện bất kỳ dấu hiệu làm nhái kiểu dáng trên thị trường.

Hồ sơ lưu bạ MNS-VN-2024-CLAY01 đã được cập nhật dấu bảo chứng xanh trên mạng lưới!`,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80'
    ],
    provenanceBadges: [
      'Mã Monos: MNS-VN-2024-CLAY01',
      'Điểm Scan Pattern: 98.2% Nguyên bản',
      'Đất nung Bát Tràng củi truyền thống',
      'Chứng thực chữ ký nghệ nhân Nguyễn Văn Bảy'
    ],
    likes: 89,
    isLiked: false,
    isSaved: false,
    commentsCount: 15,
    sharesCount: 33,
    comments: [
      {
        id: 'inc-c2',
        author: {
          name: 'Phạm Thuỳ Dương',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
          role: 'Sưu tầm gốm đương đại'
        },
        content: 'Minh bạch như thế này thì người mua yên tâm tuyệt đối, không sợ mua phải hàng đổ khuôn công nghiệp.',
        timestamp: 'Vừa xong',
        likes: 8
      }
    ]
  },
  {
    id: 'stream-ky-uc-03',
    author: {
      name: 'KTS. Trần Mai Phương',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      role: 'Chủ sở hữu & Thành viên Cộng đồng',
      verified: true
    },
    timestamp: 'Vừa xong • 🌐 Đóng góp ký ức',
    type: 'community_memory',
    taggedObject: INITIAL_OBJECTS[0],
    content: `[KÝ ỨC 1 NĂM CÙNG GHẾ CLOUDY TẠI CĂN HỘ TÂY HỒ]

Tròn 1 năm kể từ ngày chiếc ghế Cloudy số hiệu MNS-VN-2024-CLD01-14 về tới phòng khách nhà tôi.

Ban đầu bạn bè tới ai cũng hỏi: "Vải Bouclé màu kem này có dễ bẩn không?". Sau 1 năm trải nghiệm thực tế với 1 chú mèo và những buổi ngồi làm việc thâu đêm:
- Lớp nỉ cao cấp rất lì sợi, hút bụi bằng máy cầm tay là sạch bong
- Đệm mút D40 đúc nguyên khối không hề có hiện tượng võng lún
- Chân gỗ Tần Bì qua mùa nồm ẩm Hà Nội vẫn khít từng mối mộng âm dương

Đồ nội thất tốt là món đồ càng ở lâu càng thấy thân thuộc. Đã bổ sung nhật ký này vào hồ sơ lưu bạ trên Monos!`,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80'
    ],
    provenanceBadges: [
      'Đã xác thực chủ sở hữu thực tế',
      'Thời gian sở hữu: 12 tháng',
      'Hồ sơ gắn thẻ: Ghế Cloudy B+'
    ],
    likes: 67,
    isLiked: false,
    isSaved: false,
    commentsCount: 11,
    sharesCount: 19,
    comments: []
  },
  {
    id: 'stream-editorial-04',
    author: {
      name: 'Ban Biên Tập Monos (Editorial)',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80',
      role: 'Tạp chí & Giám tuyển Đồ vật',
      verified: true
    },
    timestamp: 'Vừa xong • 🌐 Chuyên mục Đồ vật & Con người',
    type: 'editorial_story',
    taggedObject: INITIAL_OBJECTS[2] || INITIAL_OBJECTS[0],
    content: `[TẠP CHÍ MONOS: NGHỆ THUẬT MỘNG ÂM DƯƠNG VÀ CÂU CHUYỆN GỖ CHÒ CHỈ BẮC NINH]

Không dùng keo dán công nghiệp, không đinh vít kim loại. Làm thế nào một chiếc bàn trà truyền thống có thể bền vững qua 3 thế hệ?

Số phát sóng hôm nay đưa chúng ta về xưởng mộc gia truyền tại làng mộc Đồng Kỵ (Bắc Ninh), nơi nghệ nhân lão thành Vũ Văn Hùng đang hoàn thiện chiếc Bàn Trà Trăng Tròn (MNS-VN-2024-TT01). Từng thớ gỗ chò chỉ được sấy tự nhiên hơn 18 tháng để triệt tiêu độ co ngót trước khi ráp mộng.

Khám phá toàn bộ hồ sơ kỹ thuật và video công đoạn đã được số hóa trên Monos!`,
    images: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80'
    ],
    provenanceBadges: [
      'Mã Monos: MNS-VN-2024-TT01',
      'Mộng âm dương truyền thống',
      'Gỗ Chò Chỉ sấy tự nhiên 18 tháng',
      'Làng nghề Đồng Kỵ (Bắc Ninh)'
    ],
    likes: 112,
    isLiked: false,
    isSaved: false,
    commentsCount: 24,
    sharesCount: 45,
    comments: []
  }
];

export const FacebookFeedView: React.FC<FacebookFeedViewProps> = ({
  posts,
  objects,
  designers,
  setActiveTab,
  onOpenCreatePost,
  onOpenChat,
  onOpenScanPattern,
  onToggleFollowDesigner,
  onLikePost,
  onSavePost,
  onAddComment,
  onOpenObjectProfile,
  onContributeMemory,
  onAddNewStreamedPost,
  searchQuery,
  setSearchQuery
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hasMorePosts, setHasMorePosts] = useState<boolean>(true);
  const [feedPoolIndex, setFeedPoolIndex] = useState<number>(0);
  const topFeedRef = useRef<HTMLDivElement>(null);

  // Simple clean handler to load more posts if user reaches the bottom and wants more
  const handleLoadMorePosts = () => {
    if (feedPoolIndex >= INCOMING_FEED_POOL.length) {
      setHasMorePosts(false);
      return;
    }
    const postToStream = INCOMING_FEED_POOL[feedPoolIndex];
    const freshPost: Post = {
      ...postToStream,
      id: `more-${Date.now()}-${feedPoolIndex}`,
      timestamp: 'Gần đây'
    };
    if (onAddNewStreamedPost) {
      onAddNewStreamedPost(freshPost);
    }
    setFeedPoolIndex((prev) => prev + 1);
  };

  // Filter posts based on category and search query
  const filteredPosts = posts.filter((post) => {
    // Category match
    if (activeCategory === 'editorial' && post.type !== 'editorial_story') return false;
    if (activeCategory === 'craft' && post.type !== 'workshop_craft') return false;
    if (activeCategory === 'memory' && post.type !== 'community_memory') return false;
    if (activeCategory === 'provenance' && post.type !== 'provenance_update' && post.type !== 'scan_pattern') return false;

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const contentMatch = post.content.toLowerCase().includes(q);
      const authorMatch = post.author.name.toLowerCase().includes(q);
      const objectMatch = post.taggedObject?.name.toLowerCase().includes(q) || 
                          post.taggedObject?.monosCode.toLowerCase().includes(q);
      return contentMatch || authorMatch || objectMatch;
    }

    return true;
  });

  const bplusObjects = objects
    .filter((object) => object.bplusId !== undefined)
    .slice(0, 8);
  const bplusObjectCount = objects.filter((object) => object.bplusId !== undefined).length;

  return (
    <div className="monos-facebook-view monos-social-page w-full bg-[#f8f8f8] min-h-screen text-[#0d0c22]">

      {/* Feed content uses the same centered canvas as Shots. */}
      <div className="monos-feed-layout monos-social-layout max-w-[1720px] mx-auto flex justify-between gap-4 sm:gap-6 px-2 sm:px-6">
        
        {/* Main Feed Stream */}
        <main className="monos-feed-main monos-social-main flex-1 max-w-[680px] mx-auto py-4 px-1 sm:px-2 space-y-4">
          <div ref={topFeedRef} />

          {/* Priority #1 Manifesto: Món đồ là ưu tiên số 1, mạng xã hội con người là thứ yếu */}
          <div className="monos-social-intro bg-[#0d0c22] text-white rounded-3xl p-5 sm:p-6 shadow-xs relative overflow-hidden">
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#ea4c89] text-[10px] font-mono font-bold tracking-wider uppercase text-white">
                  MONOS IDENTITY
                </span>
                <span className="text-xs text-white/70">
                  Profile món đồ là ưu tiên hàng đầu • Con người chỉ là người tạo tác & gìn giữ
                </span>
              </div>
              <h2 className="font-display font-black text-lg sm:text-xl text-white tracking-tight">
                Mạng Lưới Lưu Bạ & Căn Cước Đồ Vật (Monos Passport)
              </h2>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
                Mỗi món đồ sở hữu một mã CMND độc lập, hồ sơ quy cách mộng mộc, chứng thư Scan Pattern AI và chuỗi ký ức xuyên thế hệ.
              </p>
            </div>
            {/* Ambient decorative gradient */}
            <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-[#ea4c89]/20 blur-2xl pointer-events-none" />
          </div>

          {/* Featured Object Passports Showcase (CMND Đồ vật Tiêu biểu) */}
          <div className="monos-social-featured space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0d0c22] flex items-center gap-1.5">
                <span>🪪 Sản phẩm B+ nổi bật trong Lưu bạ</span>
              </span>
              <button
                onClick={() => setActiveTab('objects')}
                className="text-xs font-semibold text-[#ea4c89] hover:underline cursor-pointer"
              >
                Xem tất cả B+ ({bplusObjectCount})
              </button>
            </div>

            <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none snap-x">
              {/* Chỉ hiển thị dữ liệu sản phẩm chính hãng từ B+ Furniture. */}
              {bplusObjects.map((obj) => (
                <div
                  key={obj.id}
                  onClick={() => onOpenObjectProfile(obj)}
                  className="w-36 sm:w-40 aspect-square rounded-2xl overflow-hidden relative shrink-0 shadow-xs hover:shadow-md hover:border-[#0d0c22] transition-all cursor-pointer group border border-[#e7e7e9] bg-[#111]"
                >
                  <img
                    src={obj.images[0]}
                    alt={obj.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60" />
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-black/75 text-white backdrop-blur-xs border border-white/20">
                      {obj.sku || obj.monosCode}
                    </span>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-500 text-white shadow-2xs">
                      {obj.scanPatternReport?.score || 96}%
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white space-y-0.5">
                    <span className="text-[10px] font-medium text-white/70 block truncate">
                      B+ Furniture
                    </span>
                    <h4 className="text-xs font-display font-black block truncate drop-shadow-sm group-hover:text-[#ea4c89] transition-colors">
                      {obj.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Facebook Post Composer Box */}
          <FeedComposerBox onOpenCreatePost={onOpenCreatePost} />

          {/* Tạp chí Online Furniture - Banner chuyên đề (Chuyên san số phát hành Vol. 04) */}
          <div 
            onClick={() => setActiveTab('magazine')}
            className="monos-social-magazine-banner bg-gradient-to-r from-[#141324] via-[#1f1d38] to-[#0d0c22] text-white rounded-3xl p-5 border border-white/10 shadow-xs hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ea4c89] text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                    TẠP CHÍ NỘI THẤT ONLINE
                  </span>
                  <span className="text-xs text-white/70 font-mono">VOL. 04 • MÙA THU 2024</span>
                </div>
                <h3 className="font-display font-black text-base sm:text-lg text-white group-hover:text-[#ea4c89] transition-colors leading-snug">
                  Đọc Tạp Chí Furniture: Chuyên đề Mộng Âm Dương & Khoa học Gỗ Chò Chỉ
                </h3>
                <p className="text-xs text-white/80 line-clamp-1">
                  Bóc tách các bài nghiên cứu về liên kết mộng mộc ba phương, sấy tự nhiên 18 tháng và bảo chứng Scan AI.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="text-xs font-bold text-[#ea4c89] hidden sm:inline group-hover:underline">
                  Vào đọc tạp chí
                </span>
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#ea4c89] text-white flex items-center justify-center transition-all shadow-xs">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            {/* Ambient decorative glow */}
            <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-[#ea4c89]/15 blur-2xl pointer-events-none" />
          </div>

          {/* Category Filter Pills (Object Categories) */}
          <div className="monos-social-filter bg-white border border-[#e7e7e9] rounded-2xl p-2 shadow-xs flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'bg-[#f8f8f8] text-[#6e6d7a] hover:bg-[#f3f3f4] hover:text-[#0d0c22]'
              }`}
            >
              Tất cả Hồ sơ Đồ vật ({posts.length})
            </button>

            <button
              onClick={() => setActiveCategory('editorial')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeCategory === 'editorial'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'bg-[#f8f8f8] text-[#6e6d7a] hover:bg-[#f3f3f4] hover:text-[#0d0c22]'
              }`}
            >
              📖 Tạp chí & Giám tuyển Đồ vật
            </button>

            <button
              onClick={() => setActiveCategory('craft')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeCategory === 'craft'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'bg-[#f8f8f8] text-[#6e6d7a] hover:bg-[#f3f3f4] hover:text-[#0d0c22]'
              }`}
            >
              🪵 Kỹ thuật xưởng & Mộng mộc
            </button>

            <button
              onClick={() => setActiveCategory('memory')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeCategory === 'memory'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'bg-[#f8f8f8] text-[#6e6d7a] hover:bg-[#f3f3f4] hover:text-[#0d0c22]'
              }`}
            >
              ⏳ Ký ức sở hữu dòng đời
            </button>

            <button
              onClick={() => setActiveCategory('provenance')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeCategory === 'provenance'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'bg-[#f8f8f8] text-[#6e6d7a] hover:bg-[#f3f3f4] hover:text-[#0d0c22]'
              }`}
            >
              🛡️ Thẩm định Scan Pattern
            </button>
          </div>

          {/* Search Query Indicator if search is active */}
          {searchQuery.trim() && (
            <div className="monos-social-search-state bg-[#ea4c89]/10 border border-[#ea4c89]/20 rounded-xl p-3 flex items-center justify-between text-xs text-[#ea4c89]">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 shrink-0" />
                <span>
                  Đang lọc bài viết theo từ khóa: <strong>"{searchQuery}"</strong> ({filteredPosts.length} kết quả)
                </span>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="p-1 hover:bg-[#ea4c89]/20 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Facebook Post Cards Stream (Dòng bài viết mới) */}
          <div className="monos-social-posts space-y-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onLikePost={onLikePost}
                  onSavePost={onSavePost}
                  onAddComment={onAddComment}
                  onOpenObjectProfile={onOpenObjectProfile}
                  onContributeMemory={onContributeMemory}
                />
              ))
            ) : (
              <div className="bg-white border border-[#e7e7e9] rounded-3xl p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#f8f8f8] flex items-center justify-center mx-auto text-[#6e6d7a]">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-[#0d0c22]">
                  Không tìm thấy bài viết phù hợp
                </h3>
                <p className="text-xs text-[#6e6d7a] max-w-sm mx-auto">
                  Thử tìm kiếm với từ khóa khác hoặc chuyển danh mục bộ lọc ở thanh phía trên.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-4 py-2 rounded-full bg-[#0d0c22] text-white text-xs font-bold hover:bg-[#2e2d3d] transition-colors cursor-pointer"
                >
                  Xem tất cả bài viết
                </button>
              </div>
            )}
          </div>

          {/* End of Feed Card */}
          <div className="monos-social-endcard bg-white border border-[#e7e7e9] rounded-3xl p-6 text-center shadow-xs space-y-3">
            <h4 className="font-bold text-sm sm:text-base text-[#0d0c22]">
              Đã cập nhật toàn bộ bài viết
            </h4>
            <p className="text-xs text-[#6e6d7a] max-w-md mx-auto">
              Khám phá thêm các hồ sơ thiết kế lưu bạ hoặc chia sẻ tác phẩm của bạn với cộng đồng Monos.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              {hasMorePosts && (
                <button
                  onClick={handleLoadMorePosts}
                  className="px-5 py-2 rounded-full bg-[#ea4c89] hover:bg-[#df3e7b] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  Tải thêm bài viết
                </button>
              )}
              <button
                onClick={onOpenCreatePost}
                className="px-4 py-2 rounded-full bg-[#0d0c22] text-white text-xs font-bold hover:bg-[#2e2d3d] transition-colors cursor-pointer"
              >
                Đăng bài viết mới
              </button>
              <button
                onClick={() => setActiveTab('objects')}
                className="px-4 py-2 rounded-full bg-[#f3f3f4] text-[#0d0c22] text-xs font-bold hover:bg-[#e7e7e9] transition-colors cursor-pointer"
              >
                Hồ sơ Đồ vật
              </button>
              <button
                onClick={() => setActiveTab('magazine')}
                className="px-4 py-2 rounded-full bg-[#f3f3f4] text-[#0d0c22] text-xs font-bold hover:bg-[#e7e7e9] transition-colors cursor-pointer"
              >
                📖 Tạp chí Furniture
              </button>
            </div>
          </div>

        </main>

        {/* Column 3: Right Facebook Sidebar */}
        <RightSidebar
          onOpenObjectProfile={onOpenObjectProfile}
          onOpenScanPattern={onOpenScanPattern}
          onOpenChat={onOpenChat}
          designers={designers}
          onToggleFollowDesigner={onToggleFollowDesigner}
          onOpenMagazine={() => setActiveTab('magazine')}
        />

      </div>
    </div>
  );
};
