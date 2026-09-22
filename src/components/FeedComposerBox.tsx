import React from 'react';
import { Tag, History, ShieldCheck, Image as ImageIcon, Sparkles, Plus, Award } from 'lucide-react';
import { CURRENT_USER } from '../data/mockData';

interface FeedComposerBoxProps {
  onOpenCreatePost: () => void;
}

export const FeedComposerBox: React.FC<FeedComposerBoxProps> = ({ onOpenCreatePost }) => {
  return (
    <div className="bg-white border border-[#e7e7e9] rounded-3xl p-4 sm:p-5 shadow-xs space-y-3.5">
      <div className="flex items-center justify-between pb-2 border-b border-[#f3f3f4]">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0d0c22]">
          <Award className="w-4 h-4 text-[#ea4c89]" />
          <span>Lưu bạ & Ghi chép Đồ vật</span>
        </div>
        <span className="text-[11px] text-[#6e6d7a]">
          Mỗi món đồ sở hữu căn cước riêng
        </span>
      </div>

      <div className="flex items-center gap-3">
        <img 
          src={CURRENT_USER.avatar} 
          alt={CURRENT_USER.name} 
          className="w-10 h-10 rounded-full object-cover border border-[#e7e7e9] shrink-0"
        />
        <button
          onClick={onOpenCreatePost}
          className="flex-1 h-11 px-4 sm:px-5 rounded-full bg-[#f8f8f8] hover:bg-[#f3f3f4] text-left text-xs sm:text-sm text-[#6e6d7a] transition-all cursor-pointer flex items-center justify-between border border-[#e7e7e9] group"
        >
          <span className="truncate">
            Đăng bạ hồ sơ đồ vật mới hoặc ghi chép ký ức dòng đời cho món đồ...
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#ea4c89] group-hover:translate-x-0.5 transition-transform shrink-0">
            <span>Tạo hồ sơ</span>
            <Plus className="w-3.5 h-3.5 stroke-[3]" />
          </span>
        </button>
      </div>

      <div className="pt-1 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
          <button
            onClick={onOpenCreatePost}
            className="h-8 sm:h-9 px-3 sm:px-3.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-[#0d0c22] bg-[#f3f3f4] hover:bg-[#e7e7e9] transition-colors cursor-pointer"
          >
            <Award className="w-3.5 h-3.5 text-[#ea4c89]" />
            <span>Đăng bạ CMND mới</span>
          </button>

          <button
            onClick={onOpenCreatePost}
            className="h-8 sm:h-9 px-3 sm:px-3.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f3f3f4] transition-colors cursor-pointer"
          >
            <History className="w-3.5 h-3.5 text-amber-600" />
            <span>Góp ký ức sở hữu</span>
          </button>

          <button
            onClick={onOpenCreatePost}
            className="h-8 sm:h-9 px-3 sm:px-3.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f3f3f4] transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Giám định Scan AI</span>
          </button>

          <button
            onClick={onOpenCreatePost}
            className="h-8 sm:h-9 px-3 sm:px-3.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f3f3f4] transition-colors cursor-pointer hidden md:flex"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#ea4c89]" />
            <span>Ảnh mộng & vân gỗ</span>
          </button>
        </div>

        <button
          onClick={onOpenCreatePost}
          className="px-4 py-1.5 rounded-full bg-[#0d0c22] hover:bg-[#ea4c89] text-white text-xs font-bold transition-all shadow-xs cursor-pointer ml-auto"
        >
          Đăng lưu bạ
        </button>
      </div>
    </div>
  );
};
