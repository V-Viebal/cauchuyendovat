import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Layers, 
  Users, 
  Compass, 
  ShieldCheck, 
  Plus, 
  MessageSquare, 
  Bell, 
  Menu,
  X,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Bookmark,
  Heart,
  Grid,
  ChevronDown,
  BookOpen,
  Type,
  Check
} from 'lucide-react';
import { CURRENT_USER } from '../data/mockData';

interface NavbarProps {
  activeTab: 'social' | 'magazine' | 'feed' | 'objects' | 'groups' | 'designers' | 'scan';
  setActiveTab: (tab: 'social' | 'magazine' | 'feed' | 'objects' | 'groups' | 'designers' | 'scan') => void;
  onOpenCreatePost: () => void;
  onOpenChat: (designerName?: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  savedCount: number;
  onOpenSavedModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenCreatePost,
  onOpenChat,
  searchQuery,
  setSearchQuery,
  savedCount,
  onOpenSavedModal
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [unreadNotes, setUnreadNotes] = useState(3);
  const [currentFont, setCurrentFont] = useState<'jakarta' | 'vietnam' | 'lexend'>(() => {
    return (localStorage.getItem('monos_font_family') as 'jakarta' | 'vietnam' | 'lexend') || 'jakarta';
  });
  const [showFontMenu, setShowFontMenu] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem('monos_font_family') as 'jakarta' | 'vietnam' | 'lexend') || 'jakarta';
    document.documentElement.setAttribute('data-font', saved);
  }, []);

  const handleSelectFont = (fontKey: 'jakarta' | 'vietnam' | 'lexend') => {
    setCurrentFont(fontKey);
    localStorage.setItem('monos_font_family', fontKey);
    document.documentElement.setAttribute('data-font', fontKey);
    setShowFontMenu(false);
  };

  const fontOptions = [
    {
      key: 'jakarta' as const,
      name: 'Plus Jakarta Sans',
      category: 'Neo-Grotesque Hiện Đại',
      desc: 'Sắc nét, đậm chất Dribbble & Studio Quốc tế',
      preview: 'Monos — Thiết kế đương đại'
    },
    {
      key: 'vietnam' as const,
      name: 'Be Vietnam Pro',
      category: 'Neo-Tech Việt Hóa Tối Giản',
      desc: 'Cân đối, tối ưu hóa hiển thị tiếng Việt hoàn hảo',
      preview: 'Kiến trúc mộc & nghệ nhân'
    },
    {
      key: 'lexend' as const,
      name: 'Lexend Sans',
      category: 'Geometric Không Chân',
      desc: 'Thoáng đãng, thị giác mở rộng, hiện đại cao cấp',
      preview: 'Bảo chứng bản quyền Scan'
    }
  ];

  const notifications = [
    {
      id: 'n1',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      title: 'Hoàng Vũ (B+ Studio)',
      text: 'đã phản hồi bình luận của bạn về Ghế Cloudy.',
      time: '12 phút trước',
      unread: true
    },
    {
      id: 'n2',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&q=80',
      title: 'Ban Biên Tập Monos',
      text: 'vừa cấp chứng nhận Provenance cho Bàn Trà Chò Chỉ (MNS-VN-2023-CC04).',
      time: '1 giờ trước',
      unread: true
    },
    {
      id: 'n3',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80',
      title: 'KTS. Trần Mai Lan',
      text: 'đã đăng một thảo luận mới trong nhóm Kỹ thuật Mộng & Gỗ Bản Địa.',
      time: '3 giờ trước',
      unread: true
    }
  ];

  return (
    <header className="monos-navbar sticky top-0 z-50 h-16 sm:h-20 bg-white/95 backdrop-blur-md border-b border-[#f3f3f4] px-4 sm:px-8 flex items-center justify-between select-none transition-all shadow-xs">
      {/* Left Section: Dribbble-style Logo & Main Nav links */}
      <div className="monos-navbar-left flex items-center gap-6 lg:gap-8">
        {/* Monos signature logo with Dribbble aesthetic */}
        <button 
          id="monos-brand-logo"
          onClick={() => setActiveTab('feed')}
          className="flex items-center gap-1.5 group cursor-pointer focus:outline-none"
          title="Monos - Trang chủ"
        >
          <span className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#0d0c22] group-hover:opacity-85 transition-opacity">
            monos
          </span>
          <span className="w-2 h-2 rounded-full bg-[#ea4c89] mt-2 group-hover:scale-125 transition-transform" />
        </button>

        {/* Dribbble Main Navigation Links */}
        <nav className="monos-top-nav hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Trang chủ - Bảng tin Facebook Feed */}
          {/* Object social network */}
          <button
            id="nav-tab-social"
            onClick={() => setActiveTab('social')}
            className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'social'
                ? 'text-[#0d0c22] font-bold bg-[#f3f3f4]'
                : 'text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f8f8f8]'
            }`}
          >
            Mạng lưới Monos
          </button>

          {/* Tạp chí Furniture (Online Magazine) */}
          <button
            id="nav-tab-magazine"
            onClick={() => setActiveTab('magazine')}
            className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'magazine'
                ? 'text-[#0d0c22] font-bold bg-[#f3f3f4]'
                : 'text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f8f8f8]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#ea4c89]" />
            <span>Tạp chí Furniture</span>
            <span className="px-1.5 py-0.2 rounded-full bg-[#ea4c89]/15 text-[#ea4c89] text-[10px] font-mono font-bold">
              Vol 04
            </span>
          </button>

          {/* Inspiration (Feed / Shots) */}
          <button
            id="nav-tab-feed"
            onClick={() => setActiveTab('feed')}
            className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'feed'
                ? 'text-[#0d0c22] font-bold bg-[#f3f3f4]'
                : 'text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f8f8f8]'
            }`}
          >
            Khám phá Shots
          </button>

          {/* Find designers (dropdown style) */}
          <button
            id="nav-tab-designers"
            onClick={() => setActiveTab('designers')}
            className={`monos-nav-optional px-3.5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'designers'
                ? 'text-[#0d0c22] font-bold bg-[#f3f3f4]'
                : 'text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f8f8f8]'
            }`}
          >
            <span>Tìm nhà thiết kế</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#9e9ea7]" />
          </button>

          {/* Courses / Community */}
          <button
            id="nav-tab-courses"
            onClick={() => setActiveTab('groups')}
            className={`monos-nav-optional px-3.5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'groups'
                ? 'text-[#0d0c22] font-bold bg-[#f3f3f4]'
                : 'text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f8f8f8]'
            }`}
          >
            <span>Cộng đồng</span>
          </button>

          {/* Jobs / Object Archive */}
          <button
            id="nav-tab-objects"
            onClick={() => setActiveTab('objects')}
            className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'objects'
                ? 'text-[#0d0c22] font-bold bg-[#f3f3f4]'
                : 'text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f8f8f8]'
            }`}
          >
            <Layers className="w-4 h-4 text-[#ea4c89]" />
            <span>Lưu bạ đồ vật</span>
          </button>

          {/* Go Pro / Scan Pattern AI */}
          <button
            id="nav-tab-scan"
            onClick={() => setActiveTab('scan')}
            className={`monos-nav-optional px-3.5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'scan'
                ? 'text-[#0d0c22] font-bold bg-[#f3f3f4]'
                : 'text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f8f8f8]'
            }`}
          >
            <span>Scan AI</span>
          </button>
        </nav>
      </div>

      {/* Center/Right Section: Dribbble Pill Search & Actions */}
      <div className="monos-navbar-actions flex items-center gap-3 sm:gap-4">
        {/* Dribbble Pill Search Input */}
        <div className="monos-global-search relative hidden md:block w-48 lg:w-64 xl:w-72">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9e9ea7]">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="global-search-input"
            type="text"
            placeholder="Bạn đang tìm kiếm gì?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-9 pr-3 rounded-full bg-[#f3f3f4] hover:bg-[#e7e7e9] focus:bg-white text-xs text-[#0d0c22] placeholder-[#9e9ea7] border border-transparent focus:border-[#ea4c89]/40 focus:ring-2 focus:ring-[#ea4c89]/10 focus:outline-none transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#9e9ea7] hover:text-[#0d0c22]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Modern Typography Selector (Non-classic) */}
        <div className="monos-font-control relative">
          <button
            id="btn-font-selector-header"
            onClick={() => setShowFontMenu(!showFontMenu)}
            className="hidden sm:flex items-center gap-1.5 h-10 px-3 rounded-full bg-[#f3f3f4] hover:bg-[#e7e7e9] text-[#0d0c22] text-xs font-semibold transition-all cursor-pointer border border-transparent hover:border-[#e7e7e9]"
            title="Tùy chọn Font chữ hiện đại (Không chân / Modern Sans)"
          >
            <Type className="w-3.5 h-3.5 text-[#ea4c89]" />
            <span className="truncate max-w-[120px]">
              {fontOptions.find(f => f.key === currentFont)?.name.replace(' Sans', '').replace(' Pro', '') || 'Hiện đại'}
            </span>
            <ChevronDown className="w-3 h-3 text-[#9e9ea7]" />
          </button>

          {showFontMenu && (
            <div className="absolute right-0 mt-3 w-72 sm:w-84 bg-white border border-[#e7e7e9] rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150 text-[#0d0c22]">
              <div className="flex items-center justify-between border-b border-[#f3f3f4] pb-2.5 mb-2 px-1">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0d0c22] flex items-center gap-1.5">
                    <Type className="w-4 h-4 text-[#ea4c89]" />
                    <span>Bộ Font Chữ Hiện Đại</span>
                  </h4>
                  <p className="text-[11px] text-[#6e6d7a]">Chuẩn Modern Sans-Serif, không Classic</p>
                </div>
                <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-1.5">
                {fontOptions.map((f) => {
                  const isSelected = currentFont === f.key;
                  return (
                    <button
                      key={f.key}
                      onClick={() => handleSelectFont(f.key)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all cursor-pointer flex items-start justify-between gap-2 border ${
                        isSelected 
                          ? 'bg-[#0d0c22] text-white border-[#0d0c22] shadow-sm' 
                          : 'bg-white hover:bg-[#f8f8f8] text-[#0d0c22] border-transparent'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs sm:text-sm tracking-tight">{f.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-[#f3f3f4] text-[#6e6d7a]'
                          }`}>
                            {f.category}
                          </span>
                        </div>
                        <p className={`text-[11px] leading-snug ${isSelected ? 'text-white/80' : 'text-[#6e6d7a]'}`}>
                          {f.desc}
                        </p>
                        <p className={`text-xs font-semibold pt-1 ${isSelected ? 'text-[#ea4c89]' : 'text-[#0d0c22]'}`}>
                          "{f.preview}"
                        </p>
                      </div>
                      {isSelected && (
                        <Check className="w-4 h-4 text-[#ea4c89] shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-2.5 pt-2 border-t border-[#f3f3f4] px-1 text-[11px] text-[#9e9ea7] flex items-center justify-between">
                <span>100% tiếng Việt có dấu</span>
                <span className="font-mono text-[10px] text-emerald-600 font-semibold">Tự động lưu cấu hình</span>
              </div>
            </div>
          )}
        </div>

        {/* Saved Collections (Heart / Bookmark) */}
        <button
          id="btn-saved-collection-header"
          onClick={onOpenSavedModal}
          className="relative w-10 h-10 rounded-full hover:bg-[#f3f3f4] text-[#6e6d7a] hover:text-[#0d0c22] flex items-center justify-center transition-colors cursor-pointer"
          title="Bộ sưu tập đồ vật đã lưu"
        >
          <Bookmark className="w-5 h-5 text-[#6e6d7a]" />
          {savedCount > 0 && (
            <span className="absolute 1 top-1 right-1 text-[10px] font-bold px-1.5 py-0.2 bg-[#ea4c89] text-white rounded-full">
              {savedCount}
            </span>
          )}
        </button>

        {/* Messenger / Discussions */}
        <button
          id="btn-messenger-header"
          onClick={() => onOpenChat()}
          className="relative w-10 h-10 rounded-full hover:bg-[#f3f3f4] text-[#6e6d7a] hover:text-[#0d0c22] flex items-center justify-center transition-colors cursor-pointer"
          title="Trao đổi với Designer & Xưởng mộc"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute 1 top-1 right-1 text-[10px] font-bold px-1.5 py-0.2 bg-[#0d0c22] text-white rounded-full">
            2
          </span>
        </button>

        {/* Notifications Popover */}
        <div className="relative">
          <button
            id="btn-notifications-header"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setUnreadNotes(0);
            }}
            className="relative w-10 h-10 rounded-full hover:bg-[#f3f3f4] text-[#6e6d7a] hover:text-[#0d0c22] flex items-center justify-center transition-colors cursor-pointer"
            title="Thông báo"
          >
            <Bell className="w-5 h-5" />
            {unreadNotes > 0 && (
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#ea4c89]" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white border border-[#f3f3f4] rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150 text-[#0d0c22]">
              <div className="flex items-center justify-between border-b border-[#f3f3f4] pb-3 mb-2">
                <h4 className="font-bold text-sm text-[#0d0c22]">Thông báo từ Monos</h4>
                <span className="text-[11px] text-[#ea4c89] font-semibold cursor-pointer">
                  Đánh dấu đã đọc
                </span>
              </div>
              <div className="space-y-2.5 max-h-80 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#f8f8f8] transition-colors cursor-pointer">
                    <img src={n.avatar} alt="" className="w-9 h-9 rounded-full object-cover shrink-0" />
                    <div className="text-xs">
                      <p className="leading-snug text-[#3d3d4e]">
                        <strong className="text-[#0d0c22] font-semibold">{n.title}</strong> {n.text}
                      </p>
                      <span className="text-[11px] text-[#9e9ea7] mt-1 block">{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Current User Avatar with PRO badge */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <div className="relative">
              <img 
                src={CURRENT_USER.avatar} 
                alt={CURRENT_USER.name} 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#e7e7e9] hover:ring-2 hover:ring-[#ea4c89]/40 transition-all"
              />
              <span className="absolute -bottom-1 -right-1 bg-[#ea4c89] text-white text-[8px] font-bold px-1 rounded-full font-mono uppercase">
                PRO
              </span>
            </div>
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-3 w-64 bg-white border border-[#f3f3f4] rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150 text-[#0d0c22]">
              <div className="p-2 border-b border-[#f3f3f4] flex items-center gap-3">
                <img src={CURRENT_USER.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-sm text-[#0d0c22]">{CURRENT_USER.name}</h4>
                  <span className="text-xs text-[#6e6d7a] block">{CURRENT_USER.role}</span>
                </div>
              </div>
              <div className="pt-2 space-y-1 text-xs text-[#3d3d4e] font-medium">
                <button 
                  onClick={() => {
                    setActiveTab('objects');
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f8f8f8] flex items-center justify-between cursor-pointer"
                >
                  <span>Hồ sơ đồ vật đã đăng ký</span>
                  <span className="text-[10px] bg-[#f3f3f4] text-[#6e6d7a] px-2 py-0.5 rounded-full font-bold">1</span>
                </button>
                <button 
                  onClick={() => {
                    onOpenSavedModal();
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f8f8f8] flex items-center justify-between cursor-pointer"
                >
                  <span>Bộ sưu tập ưa thích</span>
                  <span className="text-[10px] bg-[#ea4c89]/10 text-[#ea4c89] px-2 py-0.5 rounded-full font-bold">{savedCount}</span>
                </button>
                <button 
                  onClick={() => {
                    setActiveTab('scan');
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f8f8f8] flex items-center justify-between cursor-pointer"
                >
                  <span>Kiểm tra Scan Pattern bản quyền</span>
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Dribbble Signature Pill Button: "+ Chia sẻ đồ vật / Upload Shot" */}
        <button
          id="btn-create-post-header"
          onClick={onOpenCreatePost}
          className="h-10 sm:h-11 px-4 sm:px-5 rounded-full bg-[#0d0c22] hover:bg-[#2e2d3d] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4 text-[#ea4c89]" />
          <span>Chia sẻ đồ vật</span>
        </button>

        {/* Mobile Nav Toggle */}
          <button
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="monos-mobile-toggle lg:hidden p-2 rounded-full hover:bg-[#f3f3f4] text-[#0d0c22] transition-colors"
        >
          {showMobileNav ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {showMobileNav && (
        <div className="lg:hidden fixed top-16 sm:top-20 inset-x-0 bg-white border-b border-[#f3f3f4] shadow-xl p-4 z-50 space-y-3">
          <div className="relative mb-3">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9e9ea7]" />
            <input
              type="text"
              placeholder="Tìm kiếm đồ vật, KTS, mã MNS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-3 rounded-full bg-[#f3f3f4] text-xs text-[#0d0c22]"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
            <button
              onClick={() => { setActiveTab('social'); setShowMobileNav(false); }}
              className={`p-3 rounded-xl text-left col-span-2 flex items-center gap-2 ${activeTab === 'social' ? 'bg-[#0d0c22] text-white' : 'bg-[#f8f8f8] text-[#0d0c22]'}`}
            >
              <span>💬 Mạng lưới Monos</span>
            </button>
            <button
              onClick={() => { setActiveTab('magazine'); setShowMobileNav(false); }}
              className={`p-3 rounded-xl text-left col-span-2 flex items-center gap-2 ${activeTab === 'magazine' ? 'bg-[#0d0c22] text-white' : 'bg-[#f8f8f8] text-[#0d0c22]'}`}
            >
              <span>📖 Tạp chí Furniture (Chuyên khảo Vol 04)</span>
            </button>
            <button
              onClick={() => { setActiveTab('feed'); setShowMobileNav(false); }}
              className={`p-3 rounded-xl text-left col-span-2 flex items-center gap-2 ${activeTab === 'feed' ? 'bg-[#0d0c22] text-white' : 'bg-[#f8f8f8] text-[#0d0c22]'}`}
            >
              <span>✨ Khám phá Shots</span>
            </button>
            <button
              onClick={() => { setActiveTab('objects'); setShowMobileNav(false); }}
              className={`p-3 rounded-xl text-left ${activeTab === 'objects' ? 'bg-[#0d0c22] text-white' : 'bg-[#f8f8f8] text-[#0d0c22]'}`}
            >
              Hồ sơ & Lưu bạ
            </button>
            <button
              onClick={() => { setActiveTab('designers'); setShowMobileNav(false); }}
              className={`p-3 rounded-xl text-left ${activeTab === 'designers' ? 'bg-[#0d0c22] text-white' : 'bg-[#f8f8f8] text-[#0d0c22]'}`}
            >
              Nhà thiết kế
            </button>
            <button
              onClick={() => { setActiveTab('scan'); setShowMobileNav(false); }}
              className={`p-3 rounded-xl text-left ${activeTab === 'scan' ? 'bg-[#0d0c22] text-white' : 'bg-[#f8f8f8] text-[#0d0c22]'}`}
            >
              Scan AI
            </button>
            <button
              onClick={() => { setActiveTab('groups'); setShowMobileNav(false); }}
              className={`p-3 rounded-xl text-left ${activeTab === 'groups' ? 'bg-[#0d0c22] text-white' : 'bg-[#f8f8f8] text-[#0d0c22]'}`}
            >
              Cộng đồng
            </button>
          </div>

          {/* Mobile Modern Font Switcher */}
          <div className="pt-2 border-t border-[#f3f3f4]">
            <div className="text-[11px] font-bold text-[#6e6d7a] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-[#ea4c89]" />
              <span>Font chữ hiện đại (Không chân)</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {fontOptions.map((f) => (
                <button
                  key={f.key}
                  onClick={() => handleSelectFont(f.key)}
                  className={`p-2 rounded-xl text-xs font-semibold text-center transition-all ${
                    currentFont === f.key
                      ? 'bg-[#0d0c22] text-white'
                      : 'bg-[#f3f3f4] text-[#0d0c22] hover:bg-[#e7e7e9]'
                  }`}
                >
                  {f.name.replace(' Sans', '').replace(' Pro', '')}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
