import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  ExternalLink, 
  UserPlus, 
  Check, 
  QrCode, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { INITIAL_OBJECTS, INITIAL_DESIGNERS } from '../data/mockData';
import { ObjectProfile, Designer } from '../types';

interface RightSidebarProps {
  onOpenObjectProfile: (object: ObjectProfile) => void;
  onOpenScanPattern: () => void;
  onOpenChat: (contactName: string) => void;
  designers: Designer[];
  onToggleFollowDesigner: (id: string) => void;
  onOpenMagazine?: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  onOpenObjectProfile,
  onOpenScanPattern,
  onOpenChat,
  designers,
  onToggleFollowDesigner,
  onOpenMagazine
}) => {
  const spotlightObject = INITIAL_OBJECTS[0]; // Ghế Cloudy - B+

  const onlineContacts = [
    {
      id: 'c-hoang-vu',
      name: 'Hoàng Vũ (B+ Studio)',
      role: 'Designer Ghế Cloudy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      activeStatus: 'Đang hoạt động'
    },
    {
      id: 'c-mai-lan',
      name: 'KTS. Trần Mai Lan',
      role: 'Mộc mộng truyền thống',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      activeStatus: 'Hoạt động 12p trước'
    },
    {
      id: 'c-duc-phong',
      name: 'Vũ Đức Phong',
      role: 'Nghệ nhân Lam Phong Lab',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      activeStatus: 'Đang hoạt động'
    },
    {
      id: 'c-tho-luong',
      name: 'Bác Thợ Lượng',
      role: 'Quản đốc xưởng Đồng Nai',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
      activeStatus: 'Đang hoạt động'
    }
  ];

  return (
    <aside className="monos-right-sidebar w-[300px] xl:w-[340px] shrink-0 h-[calc(100vh-56px)] sticky top-14 overflow-y-auto px-3 py-4 space-y-4 select-none hidden xl:block border-l border-[#e7e7e9]/80">
      {/* Featured Object Spotlight (Case mở màn) - Dribbble Curated Shot */}
      <div className="bg-white rounded-3xl border border-[#e7e7e9] p-4 space-y-3 shadow-xs hover:shadow-md transition-all duration-300 group">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ea4c89]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tiêu điểm tuần này</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#0d0c22] text-white tracking-wide">
            SHOT ĐỀ XUẤT
          </span>
        </div>

        <div 
          onClick={() => onOpenObjectProfile(spotlightObject)}
          className="cursor-pointer block space-y-2.5"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#f3f3f4]">
            <img 
              src={spotlightObject.images[0]} 
              alt={spotlightObject.name} 
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
              <span className="text-[11px] font-mono bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-xs font-semibold">
                {spotlightObject.monosCode}
              </span>
              <span className="text-[10px] bg-[#ea4c89] px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 shadow-xs">
                <ShieldCheck className="w-3 h-3" />
                96% Nguyên bản
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0d0c22] group-hover:text-[#ea4c89] transition-colors line-clamp-1">
              {spotlightObject.name}
            </h4>
            <p className="text-xs text-[#6e6d7a] mt-1 line-clamp-2 leading-relaxed">
              {spotlightObject.shortDescription}
            </p>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs border-t border-[#f3f3f4]">
          <span className="text-[#6e6d7a] font-medium">Bởi <strong className="text-[#0d0c22]">{spotlightObject.designer.name}</strong></span>
          <button
            onClick={() => onOpenObjectProfile(spotlightObject)}
            className="text-[#ea4c89] hover:text-[#df3e7b] font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Chi tiết</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* B+ Furniture Official Sync Card */}
      <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/40 rounded-3xl border border-[#ea4c89]/20 p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#ea4c89] text-white">
            B+ FURNITURE
          </span>
          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            360 Sản phẩm
          </span>
        </div>
        <p className="text-xs text-[#4a4a58] leading-relaxed">
          Đồng bộ chính hãng từ <span className="font-semibold text-[#0d0c22]">bplusfurniture.com.vn</span> với ảnh chuẩn CDN, thông số kích thước & mã SKU.
        </p>
        <a
          href="https://bplusfurniture.com.vn/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#ea4c89] hover:underline"
        >
          <span>Khám phá bplusfurniture.com.vn</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Tạp chí Furniture Journal Spotlight Widget */}
      <div 
        onClick={onOpenMagazine}
        className="bg-white rounded-3xl border border-[#e7e7e9] p-4 space-y-3 shadow-xs hover:shadow-md transition-all cursor-pointer group"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#ea4c89] text-white">
            TẠP CHÍ MONOS • VOL. 04
          </span>
          <span className="text-xs text-[#ea4c89] font-bold group-hover:underline flex items-center gap-0.5">
            <span>Đọc báo</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
        <h4 className="font-display font-black text-sm text-[#0d0c22] group-hover:text-[#ea4c89] transition-colors leading-snug">
          Hành Trình Mộng Âm Dương: Khi Gỗ Chò Chỉ Vượt Qua Biên Giới Sao Chép
        </h4>
        <p className="text-xs text-[#6e6d7a] line-clamp-2 leading-relaxed">
          Phóng sự từ làng mộc Đồng Kỵ về kỹ thuật sấy tự nhiên 18 tháng và cấu trúc mộng mòi ba phương thế kỷ 18.
        </p>
      </div>

      {/* Scan Pattern Quick Check Card - Dribbble Dark Pro Card */}
      <div className="bg-[#0d0c22] text-white rounded-3xl p-4 space-y-3 shadow-md relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#ea4c89]/20 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea4c89]">
            <ShieldCheck className="w-4 h-4" />
            <span>Scan Pattern AI</span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-white/10 text-white/90">
            CÔNG CỤ
          </span>
        </div>

        <p className="text-xs text-white/80 leading-relaxed font-normal">
          Thẩm định hình học 3D, khớp mộng và kiểm tra tính nguyên bản trước khi đăng bạ Monos.
        </p>

        <button
          onClick={onOpenScanPattern}
          className="w-full h-10 rounded-full bg-[#ea4c89] hover:bg-[#df3e7b] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-[0_4px_16px_rgba(234,76,137,0.4)]"
        >
          <QrCode className="w-4 h-4" />
          <span>Quét kiểm tra thiết kế</span>
        </button>
      </div>

      {/* Suggested Designers & Studios - Dribbble Creators */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between text-xs font-bold text-[#6e6d7a] uppercase tracking-wider px-1">
          <span>Nhà thiết kế nổi bật</span>
          <span 
            onClick={() => onToggleFollowDesigner(designers[0]?.id || '')}
            className="text-[11px] text-[#ea4c89] hover:text-[#df3e7b] normal-case font-bold cursor-pointer transition-colors"
          >
            Khám phá
          </span>
        </div>

        <div className="space-y-2">
          {designers.slice(0, 3).map((designer) => (
            <div 
              key={designer.id} 
              className="p-3 rounded-2xl bg-white border border-[#e7e7e9] flex items-center justify-between gap-2.5 hover:shadow-xs transition-all"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <img 
                  src={designer.avatar} 
                  alt={designer.name} 
                  className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#e7e7e9]"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h5 className="font-bold text-xs text-[#0d0c22] truncate hover:text-[#ea4c89] transition-colors cursor-pointer">
                      {designer.name}
                    </h5>
                    <span className="px-1.5 py-0.2 rounded bg-[#0d0c22] text-white text-[8px] font-mono font-bold">
                      PRO
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6e6d7a] truncate">
                    {designer.studio}
                  </p>
                  <span className="text-[10px] text-amber-600 font-semibold">
                    {designer.objectsCount} đồ vật đã lưu trữ
                  </span>
                </div>
              </div>

              <button
                onClick={() => onToggleFollowDesigner(designer.id)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  designer.isFollowing
                    ? 'bg-[#f3f3f4] text-[#0d0c22] hover:bg-[#e7e7e9]'
                    : 'bg-[#0d0c22] text-white hover:bg-[#ea4c89]'
                }`}
              >
                {designer.isFollowing ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Đã theo</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-3 h-3" />
                    <span>Theo dõi</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Online Contacts (Active creators) */}
      <div className="space-y-2 pt-2 border-t border-[#e7e7e9]">
        <div className="flex items-center justify-between text-xs font-bold text-[#6e6d7a] uppercase tracking-wider px-1">
          <span>Xưởng & Nghệ nhân</span>
          <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            4 trực tuyến
          </span>
        </div>

        <div className="space-y-0.5">
          {onlineContacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => onOpenChat(contact.name)}
              className="flex items-center gap-3 p-2 rounded-2xl hover:bg-white hover:border-[#e7e7e9] border border-transparent transition-all cursor-pointer group"
              title={`Nhắn tin trao đổi với ${contact.name}`}
            >
              <div className="relative shrink-0">
                <img 
                  src={contact.avatar} 
                  alt={contact.name} 
                  className="w-8 h-8 rounded-full object-cover border border-[#e7e7e9]"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-[#0d0c22] group-hover:text-[#ea4c89] transition-colors truncate">
                  {contact.name}
                </div>
                <div className="text-[10px] text-[#6e6d7a] truncate">
                  {contact.role}
                </div>
              </div>
              <MessageCircle className="w-4 h-4 text-[#9e9ea7] opacity-0 group-hover:opacity-100 group-hover:text-[#ea4c89] transition-all" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
