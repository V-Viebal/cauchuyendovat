import React, { useState } from 'react';
import { 
  Heart, 
  Bookmark, 
  Eye, 
  ShieldCheck, 
  MessageSquare, 
  Tag, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { ObjectProfile, Post } from '../types';

interface ShotCardProps {
  object: ObjectProfile;
  post?: Post;
  isLiked?: boolean;
  isSaved?: boolean;
  likesCount?: number;
  commentsCount?: number;
  onLike: (id: string) => void;
  onSave: (id: string) => void;
  onOpenProfile: (object: ObjectProfile) => void;
}

export const ShotCard: React.FC<ShotCardProps> = ({
  object,
  post,
  isLiked = false,
  isSaved = false,
  likesCount = 24,
  commentsCount = 6,
  onLike,
  onSave,
  onOpenProfile
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const primaryImage = post?.images?.[0] || object.images[0];
  const title = post ? (post.taggedObject ? post.taggedObject.name : object.name) : object.name;
  const author = post?.author || {
    name: object.designer.name,
    avatar: object.designer.avatar,
    role: object.brand
  };

  return (
    <div 
      className="flex flex-col group select-none transition-transform duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dribbble Shot Canvas */}
      <div 
        onClick={() => onOpenProfile(object)}
        className="relative aspect-square rounded-2xl overflow-hidden bg-[#f3f3f4] cursor-pointer shadow-xs group-hover:shadow-xl transition-all duration-300 border border-[#f3f3f4]"
      >
        <img 
          src={primaryImage} 
          alt={title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Top Badges (SKU or Monos ID & Originality Score) */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10 gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-mono font-bold text-[#0d0c22] shadow-xs border border-white/40 truncate max-w-[170px]">
            {object.sku || object.monosCode}
          </span>

          <span className="px-2.5 py-1 rounded-lg bg-[#0d0c22]/80 backdrop-blur-md text-[10px] font-medium text-white flex items-center gap-1 shadow-xs shrink-0">
            <ShieldCheck className="w-3 h-3 text-teal-300" />
            <span>{object.scanPatternReport?.score || 96}% Nguyên bản</span>
          </span>
        </div>

        {/* Hover Gradient Overlay (Signature Dribbble Shot Hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-white z-20">
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0 flex-1">
              <span className="text-[11px] uppercase tracking-wider text-pink-300 font-bold block truncate">
                {object.brand} • {object.categoryLabel}
              </span>
              <h3 className="font-bold text-base text-white truncate font-display leading-tight mt-0.5">
                {title}
              </h3>
              <span className="text-[11px] text-white/80 line-clamp-1 mt-1 font-sans">
                {object.shortDescription}
              </span>
            </div>

            {/* Quick Action Icons in Overlay */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSave(object.id);
                }}
                className={`p-2.5 rounded-full backdrop-blur-md transition-transform active:scale-90 cursor-pointer shadow-md ${
                  isSaved
                    ? 'bg-[#ea4c89] text-white'
                    : 'bg-white/90 hover:bg-white text-[#0d0c22]'
                }`}
                title="Lưu vào bộ sưu tập"
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onLike(object.id);
                }}
                className={`p-2.5 rounded-full backdrop-blur-md transition-transform active:scale-90 cursor-pointer shadow-md ${
                  isLiked
                    ? 'bg-[#ea4c89] text-white'
                    : 'bg-white/90 hover:bg-white text-[#0d0c22]'
                }`}
                title="Yêu thích shot này"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dribbble Shot Footer Bar */}
      <div className="pt-3 pb-1 flex items-center justify-between text-xs text-[#6e6d7a]">
        {/* Creator Info with PRO Badge */}
        <div 
          onClick={() => onOpenProfile(object)}
          className="flex items-center gap-2 min-w-0 cursor-pointer group/author"
        >
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-6 h-6 rounded-full object-cover border border-[#e7e7e9] group-hover/author:ring-1 group-hover/author:ring-[#ea4c89]"
          />
          <span className="font-semibold text-xs text-[#0d0c22] truncate group-hover/author:text-[#ea4c89] transition-colors">
            {author.name}
          </span>
          <span className="bg-[#ea4c89]/15 text-[#ea4c89] text-[9px] font-bold px-1.5 py-0.2 rounded font-mono uppercase tracking-wider shrink-0">
            PRO
          </span>
        </div>

        {/* Interaction Counters (Heart, Views & Comments) */}
        <div className="flex items-center gap-2.5 shrink-0 text-[#9e9ea7]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSave(object.id);
            }}
            className={`flex items-center gap-1 transition-colors cursor-pointer ${
              isSaved ? 'text-[#ea4c89] font-semibold' : 'hover:text-[#0d0c22]'
            }`}
            title="Lưu vào bộ sưu tập"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-[#ea4c89]' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onLike(object.id);
            }}
            className={`flex items-center gap-1 transition-colors cursor-pointer ${
              isLiked ? 'text-[#ea4c89] font-bold' : 'hover:text-[#ea4c89]'
            }`}
            title="Thích tác phẩm này"
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-[#ea4c89]' : ''}`} />
            <span className="text-[11px] font-medium">{likesCount}</span>
          </button>

          <div className="flex items-center gap-1 text-[11px] font-medium text-[#9e9ea7]" title="Lượt xem">
            <Eye className="w-3.5 h-3.5" />
            <span>{(likesCount * 32).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
