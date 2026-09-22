import React from 'react';
import { 
  BookOpen, 
  Layers, 
  Users, 
  Compass, 
  ShieldCheck, 
  Bookmark, 
  History, 
  Briefcase, 
  Sparkles,
  ChevronRight,
  Info
} from 'lucide-react';
import { CURRENT_USER, INITIAL_GROUPS } from '../data/mockData';
import { CommunityGroup } from '../types';

interface LeftSidebarProps {
  activeTab: 'social' | 'magazine' | 'feed' | 'objects' | 'groups' | 'designers' | 'scan';
  setActiveTab: (tab: 'social' | 'magazine' | 'feed' | 'objects' | 'groups' | 'designers' | 'scan') => void;
  selectedGroup: CommunityGroup | null;
  onSelectGroup: (group: CommunityGroup) => void;
  onOpenSavedModal: () => void;
  savedCount: number;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  activeTab,
  setActiveTab,
  selectedGroup,
  onSelectGroup,
  onOpenSavedModal,
  savedCount
}) => {
  return (
    <aside className="monos-left-sidebar w-[280px] xl:w-[320px] shrink-0 h-[calc(100vh-56px)] sticky top-14 overflow-y-auto px-2 py-4 space-y-2 select-none hidden lg:block border-r border-[#e7e7e9]/80">
      {/* Current User Row - Dribbble Creator Profile as Object Steward */}
      <div 
         onClick={() => setActiveTab('social')}
        className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white border border-transparent hover:border-[#e7e7e9] hover:shadow-xs transition-all cursor-pointer group"
      >
        <div className="relative">
          <img 
            src={CURRENT_USER.avatar} 
            alt={CURRENT_USER.name} 
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs"
          />
          <span className="absolute -bottom-1 -right-1 bg-[#ea4c89] text-white text-[8px] font-bold px-1 rounded-full font-mono uppercase tracking-wider">
            STEWARD
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-bold text-sm text-[#0d0c22] group-hover:text-[#ea4c89] transition-colors truncate">
            {CURRENT_USER.name}
          </div>
          <div className="text-[11px] text-[#6e6d7a] truncate flex items-center gap-1">
            <span>Người gìn giữ • 4 món đồ lưu bạ</span>
          </div>
        </div>
      </div>

      {/* Main Feature Navigation - Dribbble Pill/Tab System */}
      <div className="space-y-1 pt-1">
        <button
          id="sidebar-nav-feed"
          onClick={() => setActiveTab('social')}
          className={`w-full flex items-center gap-3 p-2.5 rounded-2xl text-left text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'social'
              ? 'bg-[#0d0c22] text-white shadow-xs'
              : 'text-[#0d0c22] hover:bg-white hover:border-[#e7e7e9] border border-transparent'
          }`}
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            activeTab === 'social' ? 'bg-white/20 text-white' : 'bg-[#f3f3f4] text-[#0d0c22]'
          }`}>
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="block font-bold truncate">Bản tin CMND Đồ vật</span>
            <span className={`text-[11px] block truncate ${activeTab === 'social' ? 'text-white/70' : 'text-[#6e6d7a]'}`}>
              Dòng sự kiện & CMND món đồ trực tiếp
            </span>
          </div>
        </button>

        <button
          id="sidebar-nav-magazine"
          onClick={() => setActiveTab('magazine')}
          className={`w-full flex items-center gap-3 p-2.5 rounded-2xl text-left text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'magazine'
              ? 'bg-[#0d0c22] text-white shadow-xs'
              : 'text-[#0d0c22] hover:bg-white hover:border-[#e7e7e9] border border-transparent'
          }`}
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            activeTab === 'magazine' ? 'bg-[#ea4c89] text-white' : 'bg-[#ea4c89]/10 text-[#ea4c89]'
          }`}>
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="block font-bold truncate">Tạp chí Furniture</span>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#ea4c89] text-white">
                VOL. 04
              </span>
            </div>
            <span className={`text-[11px] block truncate ${activeTab === 'magazine' ? 'text-white/70' : 'text-[#6e6d7a]'}`}>
              Chuyên khảo mộng & vật liệu
            </span>
          </div>
        </button>

        <button
          id="sidebar-nav-inspiration"
          onClick={() => setActiveTab('feed')}
          className={`w-full flex items-center gap-3 p-2.5 rounded-2xl text-left text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'feed'
              ? 'bg-[#0d0c22] text-white shadow-xs'
              : 'text-[#0d0c22] hover:bg-white hover:border-[#e7e7e9] border border-transparent'
          }`}
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            activeTab === 'feed' ? 'bg-[#ea4c89] text-white' : 'bg-[#f3f3f4] text-[#ea4c89]'
          }`}>
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="block font-bold truncate">Bộ sưu tập Tác phẩm</span>
            <span className={`text-[11px] block truncate ${activeTab === 'feed' ? 'text-white/70' : 'text-[#6e6d7a]'}`}>
              Thư viện hình ảnh & Chi tiết mộng
            </span>
          </div>
        </button>

        <button
          id="sidebar-nav-objects"
          onClick={() => setActiveTab('objects')}
          className={`w-full flex items-center gap-3 p-2.5 rounded-2xl text-left text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'objects'
              ? 'bg-[#0d0c22] text-white shadow-xs'
              : 'text-[#0d0c22] hover:bg-white hover:border-[#e7e7e9] border border-transparent'
          }`}
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            activeTab === 'objects' ? 'bg-white/20 text-white' : 'bg-[#f3f3f4] text-emerald-600'
          }`}>
            <Layers className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="block font-bold truncate">Lưu bạ Đồ vật (MNS)</span>
            <span className={`text-[11px] block truncate ${activeTab === 'objects' ? 'text-white/70' : 'text-[#6e6d7a]'}`}>
              Hồ sơ định danh & Giám định bản quyền
            </span>
          </div>
        </button>

        <button
          id="sidebar-nav-groups"
          onClick={() => setActiveTab('groups')}
          className={`w-full flex items-center gap-3 p-2.5 rounded-2xl text-left text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'groups'
              ? 'bg-[#0d0c22] text-white shadow-xs'
              : 'text-[#0d0c22] hover:bg-white hover:border-[#e7e7e9] border border-transparent'
          }`}
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            activeTab === 'groups' ? 'bg-white/20 text-white' : 'bg-[#f3f3f4] text-indigo-600'
          }`}>
            <Users className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="block font-bold truncate">Nhóm Cộng đồng Mộc</span>
            <span className={`text-[11px] block truncate ${activeTab === 'groups' ? 'text-white/70' : 'text-[#6e6d7a]'}`}>
              Mộng âm dương, Kiến trúc & Gốm
            </span>
          </div>
        </button>

        <button
          id="sidebar-nav-designers"
          onClick={() => setActiveTab('designers')}
          className={`w-full flex items-center gap-3 p-2.5 rounded-2xl text-left text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'designers'
              ? 'bg-[#0d0c22] text-white shadow-xs'
              : 'text-[#0d0c22] hover:bg-white hover:border-[#e7e7e9] border border-transparent'
          }`}
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            activeTab === 'designers' ? 'bg-white/20 text-white' : 'bg-[#f3f3f4] text-amber-600'
          }`}>
            <Compass className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="block font-bold truncate">Mạng lưới Designer VN</span>
            <span className={`text-[11px] block truncate ${activeTab === 'designers' ? 'text-white/70' : 'text-[#6e6d7a]'}`}>
              Hồ sơ KTS & Xưởng mộc thực chứng
            </span>
          </div>
        </button>

        <button
          id="sidebar-nav-scan"
          onClick={() => setActiveTab('scan')}
          className={`w-full flex items-center gap-3 p-2.5 rounded-2xl text-left text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'scan'
              ? 'bg-[#0d0c22] text-white shadow-xs'
              : 'text-[#0d0c22] hover:bg-white hover:border-[#e7e7e9] border border-transparent'
          }`}
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            activeTab === 'scan' ? 'bg-teal-600 text-white' : 'bg-[#f3f3f4] text-teal-600'
          }`}>
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="block font-bold truncate">Scan Pattern AI</span>
            <span className={`text-[11px] block truncate ${activeTab === 'scan' ? 'text-white/70' : 'text-[#6e6d7a]'}`}>
              Đối chiếu chi tiết & CAD 3D độc quyền
            </span>
          </div>
        </button>

        <button
          id="sidebar-nav-saved"
          onClick={onOpenSavedModal}
          className="w-full flex items-center gap-3 p-2.5 rounded-2xl text-left text-sm font-semibold text-[#0d0c22] hover:bg-white hover:border-[#e7e7e9] border border-transparent transition-all cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-[#ea4c89]/10 text-[#ea4c89] flex items-center justify-center">
            <Bookmark className="w-4 h-4" />
          </div>
          <div className="flex-1 flex items-center justify-between min-w-0">
            <div className="truncate">
              <span className="block font-bold truncate">Bộ sưu tập đã lưu</span>
              <span className="text-[11px] text-[#6e6d7a] block truncate">{savedCount} đồ vật & câu chuyện</span>
            </div>
            {savedCount > 0 && (
              <span className="px-2 py-0.5 text-[10px] font-bold bg-[#ea4c89]/15 text-[#ea4c89] rounded-full font-mono">
                {savedCount}
              </span>
            )}
          </div>
        </button>
      </div>

      {/* Horizontal Divider */}
      <div className="my-3 border-t border-[#e7e7e9]" />

      {/* Community Shortcuts Section */}
      <div className="pt-1">
        <div className="px-2.5 pb-2.5 flex items-center justify-between text-xs font-bold text-[#6e6d7a] uppercase tracking-wider">
          <span>Nhóm sáng tạo</span>
          <span 
            className="text-[#ea4c89] hover:text-[#df3e7b] text-xs normal-case font-bold cursor-pointer transition-colors" 
            onClick={() => setActiveTab('groups')}
          >
            Tất cả ({INITIAL_GROUPS.length})
          </span>
        </div>

        <div className="space-y-1">
          {INITIAL_GROUPS.map((group) => (
            <button
              key={group.id}
              onClick={() => {
                onSelectGroup(group);
                setActiveTab('groups');
              }}
              className={`w-full flex items-center gap-3 p-2.5 rounded-2xl text-left transition-all cursor-pointer ${
                selectedGroup?.id === group.id && activeTab === 'groups'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'text-[#0d0c22] hover:bg-white hover:border-[#e7e7e9] border border-transparent'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 border transition-colors ${
                selectedGroup?.id === group.id && activeTab === 'groups'
                  ? 'bg-white/20 border-white/30 text-white'
                  : 'bg-[#f3f3f4] border-[#e7e7e9] text-[#0d0c22]'
              }`}>
                {group.icon}
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold block truncate">
                  {group.name}
                </span>
                <span className={`text-[11px] block truncate ${
                  selectedGroup?.id === group.id && activeTab === 'groups' ? 'text-white/70' : 'text-[#6e6d7a]'
                }`}>
                  {group.membersCount} thành viên
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Concept Brand Statement Box - Dribbble Pro / Editorial Callout */}
      <div className="mt-4 p-4 rounded-2xl bg-white border border-[#e7e7e9] text-xs text-[#6e6d7a] space-y-2 shadow-xs">
        <div className="flex items-center gap-1.5 text-[#ea4c89] font-bold text-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Triết lý Monos</span>
        </div>
        <p className="leading-relaxed font-semibold text-[11px] text-[#0d0c22] font-display tracking-tight">
          "Đồ vật là trung tâm. Câu chuyện là nội dung. Con người là người kết nối."
        </p>
        <div className="pt-1 text-[11px] text-[#6e6d7a] leading-relaxed">
          Số hóa hồ sơ vật lý, lưu bạ nguyên bản và tôn vinh những đôi bàn tay chế tác mộc Việt Nam.
        </div>
      </div>

      {/* Legal & Privacy Footer */}
      <div className="pt-3 px-2 text-[11px] text-[#9e9ea7] leading-normal space-y-1">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <a href="#" className="hover:text-[#0d0c22] transition-colors">Về Monos</a> • 
          <a href="#" className="hover:text-[#0d0c22] transition-colors">Bản quyền Scan</a> • 
          <a href="#" className="hover:text-[#0d0c22] transition-colors">Tiêu chuẩn Xưởng</a> • 
          <a href="#" className="hover:text-[#0d0c22] transition-colors">Quy chế MNS</a>
        </div>
        <div>Monos Vietnam © 2024. Nền tảng đồ vật & sáng tạo.</div>
      </div>
    </aside>
  );
};
