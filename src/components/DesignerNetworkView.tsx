import React, { useState } from 'react';
import { 
  Compass, 
  UserPlus, 
  Check, 
  MessageSquare, 
  MapPin, 
  Sparkles, 
  Briefcase, 
  Layers, 
  Search, 
  ExternalLink,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { Designer, ObjectProfile } from '../types';

interface DesignerNetworkViewProps {
  designers: Designer[];
  objects: ObjectProfile[];
  onToggleFollowDesigner: (id: string) => void;
  onOpenChatWithDesigner: (designerName: string) => void;
  onOpenObjectProfile: (object: ObjectProfile) => void;
}

export const DesignerNetworkView: React.FC<DesignerNetworkViewProps> = ({
  designers,
  objects,
  onToggleFollowDesigner,
  onOpenChatWithDesigner,
  onOpenObjectProfile
}) => {
  const [filterCity, setFilterCity] = useState<string>('all');
  const [searchWord, setSearchWord] = useState<string>('');

  const filteredDesigners = designers.filter((d) => {
    const matchesCity = filterCity === 'all' || d.location.toLowerCase().includes(filterCity.toLowerCase());
    const matchesSearch = d.name.toLowerCase().includes(searchWord.toLowerCase()) ||
                          d.studio.toLowerCase().includes(searchWord.toLowerCase()) ||
                          d.specialty.toLowerCase().includes(searchWord.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="monos-designers-page w-full max-w-[1700px] mx-auto px-4 sm:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      {/* Dribbble "Find Designers & Makers" Hero Banner */}
      <div className="bg-white border border-[#e7e7e9] rounded-3xl p-6 sm:p-10 text-[#0d0c22] shadow-xs space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f3f4] text-[#0d0c22] font-mono text-xs font-bold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-[#ea4c89]" />
          <span>Mạng lưới sáng tác • Nhà thiết kế & Xưởng chế tác đồ vật</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black font-display text-[#0d0c22] tracking-tight">
          Khám Phá & Kết Nối Với Các Nhà Thiết Kế & Xưởng Mộc Việt
        </h1>

        <p className="text-sm text-[#6e6d7a] max-w-2xl leading-relaxed">
          Nơi các KTS, Furniture Designers và Xưởng chế tác thủ công công bố hồ sơ năng lực thực tế, công trình mẫu và sẵn sàng hợp tác sản xuất độc bản.
        </p>

        {/* Search & City Filter Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 border-t border-[#f3f3f4]">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#9e9ea7] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm theo tên designer, xưởng mộc, chuyên môn uốn gỗ, mây tre, mộng cơ khí..."
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-full bg-[#f3f3f4] focus:bg-white text-xs text-[#0d0c22] placeholder-[#9e9ea7] border border-transparent focus:border-[#ea4c89]/40 focus:ring-2 focus:ring-[#ea4c89]/10 focus:outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {['all', 'Hà Nội', 'Hồ Chí Minh', 'Bình Dương & Đồng Nai'].map((city) => (
              <button
                key={city}
                onClick={() => setFilterCity(city)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  filterCity === city
                    ? 'bg-[#0d0c22] text-white shadow-xs'
                    : 'bg-[#f3f3f4] text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#e7e7e9]'
                }`}
              >
                {city === 'all' ? 'Toàn quốc' : city}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dribbble Designer Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDesigners.map((designer) => {
          const designerObject = objects.find((o) => o.designer.name.includes(designer.name) || designer.name.includes(o.designer.name)) || objects[0];
          const previewShots = designerObject ? designerObject.images.slice(0, 3) : [];

          return (
            <div 
              key={designer.id}
              className="bg-white border border-[#e7e7e9] rounded-3xl p-6 flex flex-col justify-between space-y-5 hover:shadow-xl transition-all duration-300 group shadow-xs"
            >
              {/* Profile Row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="relative shrink-0">
                    <img 
                      src={designer.avatar} 
                      alt={designer.name} 
                      className="w-14 h-14 rounded-full object-cover border border-[#e7e7e9]"
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" title="Sẵn sàng nhận dự án mới" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-base text-[#0d0c22] truncate font-display">
                        {designer.name}
                      </h3>
                      <span className="bg-[#ea4c89]/15 text-[#ea4c89] text-[9px] font-bold px-1.5 py-0.2 rounded font-mono uppercase">
                        PRO
                      </span>
                    </div>

                    <span className="text-xs text-[#6e6d7a] block truncate">
                      {designer.studio}
                    </span>

                    <span className="text-[11px] text-[#9e9ea7] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#ea4c89]" />
                      <span>{designer.location}</span>
                    </span>
                  </div>
                </div>

                {/* Follow Button */}
                <button
                  onClick={() => onToggleFollowDesigner(designer.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    designer.isFollowing
                      ? 'bg-[#f3f3f4] text-[#6e6d7a]'
                      : 'bg-white border border-[#e7e7e9] text-[#0d0c22] hover:bg-[#f8f8f8]'
                  }`}
                >
                  {designer.isFollowing ? 'Đang theo dõi' : '+ Theo dõi'}
                </button>
              </div>

              {/* Bio & Specialty Pill Tags */}
              <div className="space-y-3">
                <p className="text-xs text-[#6e6d7a] line-clamp-2 leading-relaxed">
                  {designer.bio}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-[#f3f3f4] text-[#0d0c22] text-[11px] font-medium">
                    ✨ {designer.specialty}
                  </span>
                  {designer.verified && (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Xưởng kiểm định</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Dribbble Portfolio 3-Shot Thumbnail Row */}
              <div className="space-y-2 pt-1 border-t border-[#f3f3f4]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9e9ea7] block">
                  Tác phẩm & Hồ sơ tiêu biểu:
                </span>

                <div className="grid grid-cols-3 gap-2">
                  {previewShots.map((shot, idx) => (
                    <div 
                      key={idx}
                      onClick={() => onOpenObjectProfile(designerObject)}
                      className="aspect-square rounded-xl overflow-hidden bg-[#f3f3f4] cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <img src={shot} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Message / Inquire Button */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#9e9ea7]">
                  {designer.objectsCount} đồ vật lưu bạ
                </span>

                <button
                  onClick={() => onOpenChatWithDesigner(designer.name)}
                  className="px-4 py-2 rounded-full bg-[#0d0c22] hover:bg-[#2e2d3d] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Liên hệ xưởng</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
