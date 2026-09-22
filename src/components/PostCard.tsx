import React, { useState } from 'react';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  History,
  Check,
  Eye,
  Sparkles,
  ArrowRight,
  Layers,
  Award
} from 'lucide-react';
import { Post, ObjectProfile } from '../types';
import { CURRENT_USER, INITIAL_OBJECTS } from '../data/mockData';

interface PostCardProps {
  post: Post;
  onLikePost: (postId: string) => void;
  onSavePost: (postId: string) => void;
  onAddComment: (postId: string, commentText: string) => void;
  onOpenObjectProfile: (object: ObjectProfile) => void;
  onContributeMemory?: (object: ObjectProfile) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onLikePost,
  onSavePost,
  onAddComment,
  onOpenObjectProfile,
  onContributeMemory
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Fallback to primary object if not tagged directly, ensuring object is ALWAYS priority #1
  const targetObject: ObjectProfile = post.taggedObject || INITIAL_OBJECTS[0];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    onAddComment(post.id, commentInput.trim());
    setCommentInput('');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <article className="monos-post-card bg-white border border-[#e7e7e9] rounded-3xl p-5 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 text-[#0d0c22] space-y-5">
      {/* 🌟 PRIORITY #1: HERO OBJECT PROFILE PASSPORT (CMND ĐỒ VẬT LÀ TRUNG TÂM) */}
      <div className="bg-[#f8f8f8] rounded-2xl p-4 sm:p-5 border border-[#e7e7e9] space-y-3.5 relative overflow-hidden group/obj">
        {/* Subtle accent line on top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ea4c89] via-[#0d0c22] to-[#ea4c89]/40" />

        {/* Object Badge & Monos Passport Code */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0d0c22] text-white shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#ea4c89]" />
              <span>CMND: {targetObject.monosCode}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>{targetObject.scanPatternReport?.score || 96}% Nguyên bản</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea4c89] bg-[#ea4c89]/10 px-2 py-0.5 rounded-full">
              HỒ SƠ ĐỒ VẬT #1
            </span>
          </div>
        </div>

        {/* Object Main Identity Row: Thumbnail, Name, Brand & Primary CTAs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div 
            onClick={() => onOpenObjectProfile(targetObject)}
            className="flex items-center gap-3.5 cursor-pointer group/title min-w-0"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white overflow-hidden shrink-0 border border-[#e7e7e9] shadow-xs relative">
              <img 
                src={targetObject.images[0]} 
                alt={targetObject.name} 
                className="w-full h-full object-cover group-hover/title:scale-110 transition-transform duration-500"
              />
              <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[9px] font-mono px-1 rounded backdrop-blur-xs font-bold">
                MNS
              </span>
            </div>

            <div className="min-w-0 space-y-0.5">
              <h3 className="font-display font-black text-base sm:text-lg text-[#0d0c22] group-hover/title:text-[#ea4c89] transition-colors truncate">
                {targetObject.name}
              </h3>
              <p className="text-xs text-[#6e6d7a] truncate font-medium">
                Thương hiệu: <strong className="text-[#0d0c22]">{targetObject.brand}</strong> • KTS: {targetObject.designer?.name}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#6e6d7a] flex-wrap pt-0.5">
                <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.2 rounded-md font-semibold">
                  🪵 {targetObject.materials[0]}
                </span>
                <span className="inline-flex items-center gap-1 text-slate-700 bg-slate-100 px-2 py-0.2 rounded-md font-medium">
                  📐 {targetObject.techniques[0] || 'Mộng thủ công'}
                </span>
              </div>
            </div>
          </div>

          {/* Direct CTA Buttons for Object Profile */}
          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
            {onContributeMemory && (
              <button
                onClick={() => onContributeMemory(targetObject)}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-full bg-white hover:bg-[#f3f3f4] text-xs font-bold text-[#0d0c22] border border-[#e7e7e9] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                title="Góp thêm ký ức hoặc nhật ký sử dụng cho món đồ này"
              >
                <History className="w-3.5 h-3.5 text-amber-600" />
                <span>Góp ký ức</span>
              </button>
            )}

            <button
              onClick={() => onOpenObjectProfile(targetObject)}
              className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-[#ea4c89] hover:bg-[#df3e7b] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer hover:shadow-md"
              title="Mở toàn bộ hồ sơ căn cước, quy cách mộng và chuỗi sở hữu của món đồ"
            >
              <span>Xem CMND Đồ vật</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Context: Ghi chép / Nhật ký từ người tạo tác hoặc chủ nhân sở hữu */}
      <div className="flex items-start justify-between gap-4 pt-1">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-10 h-10 rounded-full object-cover border border-[#e7e7e9]"
            />
            {post.author.verified && (
              <span className="absolute -bottom-1 -right-1 bg-[#0d0c22] text-white p-0.5 rounded-full ring-2 ring-white">
                <CheckCircle2 className="w-2.5 h-2.5 text-[#ea4c89]" />
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-[#6e6d7a]">
                {post.type === 'workshop_craft' 
                  ? 'Ghi chép từ Xưởng mộc:' 
                  : post.type === 'community_memory' 
                    ? 'Ký ức từ Người gìn giữ:' 
                    : 'Ghi chép lưu bạ:'}
              </span>
              <span className="font-bold text-xs sm:text-sm text-[#0d0c22]">
                {post.author.name}
              </span>
              <span className="px-1.5 py-0.2 rounded bg-[#f3f3f4] text-[#6e6d7a] text-[9px] font-mono font-bold">
                {post.author.role}
              </span>
            </div>
            <div className="text-[11px] text-[#9e9ea7] mt-0.5">
              {post.timestamp}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Save Bookmark button */}
          <button
            onClick={() => onSavePost(post.id)}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              post.isSaved
                ? 'bg-[#ea4c89]/10 border-[#ea4c89] text-[#ea4c89]'
                : 'bg-white border-[#e7e7e9] text-[#6e6d7a] hover:text-[#0d0c22] hover:border-[#0d0c22]'
            }`}
            title={post.isSaved ? 'Đã lưu đồ vật' : 'Lưu vào bộ sưu tập đồ vật'}
          >
            <Bookmark className={`w-4 h-4 ${post.isSaved ? 'fill-current' : ''}`} />
          </button>

          {/* Dribbble Like Heart button */}
          <button
            onClick={() => onLikePost(post.id)}
            className={`px-3 py-1.5 rounded-full border flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
              post.isLiked
                ? 'bg-[#ea4c89] border-[#ea4c89] text-white shadow-xs'
                : 'bg-white border-[#e7e7e9] text-[#6e6d7a] hover:border-[#ea4c89] hover:text-[#ea4c89]'
            }`}
            title="Yêu mến hồ sơ món đồ này"
          >
            <Heart className={`w-3.5 h-3.5 ${post.isLiked ? 'fill-current text-white' : ''}`} />
            <span>{post.likes}</span>
          </button>
        </div>
      </div>

      {/* Post Text Content: Câu chuyện & Nhật ký của Món đồ */}
      <div className="text-sm sm:text-base text-[#0d0c22] leading-relaxed whitespace-pre-line font-normal">
        {isExpanded || post.content.length < 320 ? (
          post.content
        ) : (
          <>
            {post.content.slice(0, 320)}...
            <button 
              onClick={() => setIsExpanded(true)}
              className="text-[#ea4c89] font-bold ml-1.5 hover:underline cursor-pointer"
            >
              Đọc tiếp
            </button>
          </>
        )}
      </div>

      {/* Provenance Badges Ribbon */}
      {post.provenanceBadges && post.provenanceBadges.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {post.provenanceBadges.map((badge, idx) => (
            <span 
              key={idx}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#f3f3f4] text-[#0d0c22] border border-[#e7e7e9]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>{badge}</span>
            </span>
          ))}
        </div>
      )}

      {/* Image Gallery Showcase - Chi tiết tạo tác của món đồ */}
      {post.images && post.images.length > 0 && (
        <div className="rounded-2xl overflow-hidden border border-[#e7e7e9] bg-[#f8f8f8]">
          {post.images.length === 1 ? (
            <div className="aspect-[16/10] overflow-hidden group">
              <img 
                src={post.images[0]} 
                alt="Chi tiết món đồ" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
              />
            </div>
          ) : post.images.length === 2 ? (
            <div className="grid grid-cols-2 gap-1.5">
              <img 
                src={post.images[0]} 
                alt="" 
                className="w-full h-64 sm:h-80 object-cover"
              />
              <img 
                src={post.images[1]} 
                alt="" 
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-1.5">
              <img 
                src={post.images[0]} 
                alt="" 
                className="w-full h-80 object-cover row-span-2"
              />
              <div className="grid grid-rows-2 gap-1.5">
                <img 
                  src={post.images[1]} 
                  alt="" 
                  className="w-full h-40 object-cover"
                />
                <img 
                  src={post.images[2]} 
                  alt="" 
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Dribbble Footer Stats & Action Links */}
      <div className="pt-3 border-t border-[#f3f3f4] flex items-center justify-between text-xs text-[#6e6d7a]">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#6e6d7a] hover:text-[#0d0c22] transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{post.commentsCount} thảo luận về món đồ</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#6e6d7a] hover:text-[#0d0c22] transition-colors cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-600 font-bold">Đã sao chép link CMND</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Chia sẻ CMND</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-1 text-[#9e9ea7]">
          <Eye className="w-3.5 h-3.5" />
          <span>{(post.likes * 28 + 140).toLocaleString()} lượt tra cứu hồ sơ</span>
        </div>
      </div>

      {/* Dribbble Style Comments Section */}
      {showComments && (
        <div className="pt-4 border-t border-[#f3f3f4] space-y-4">
          {/* Add Comment Input Bar */}
          <form onSubmit={handleCommentSubmit} className="flex items-center gap-3">
            <img 
              src={CURRENT_USER.avatar} 
              alt={CURRENT_USER.name} 
              className="w-9 h-9 rounded-full object-cover shrink-0 border border-[#e7e7e9]"
            />
            <div className="flex-1 relative">
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Góp ý chuyên môn về cấu trúc, vật liệu hoặc thảo luận về món đồ này..."
                className="w-full h-11 pl-4 pr-12 rounded-full bg-[#f8f8f8] border border-[#e7e7e9] text-xs sm:text-sm text-[#0d0c22] placeholder-[#9e9ea7] focus:bg-white focus:border-[#ea4c89] focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!commentInput.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-[#ea4c89] hover:bg-[#df3e7b] disabled:opacity-30 disabled:hover:bg-[#ea4c89] text-white text-xs font-bold transition-all cursor-pointer"
              >
                Gửi
              </button>
            </div>
          </form>

          {/* Comment List in Dribbble Shot style */}
          {post.comments && post.comments.length > 0 && (
            <div className="space-y-3 pt-2">
              {post.comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-3 p-3 rounded-2xl bg-[#f8f8f8]">
                  <img 
                    src={comment.author.avatar} 
                    alt={comment.author.name} 
                    className="w-8 h-8 rounded-full object-cover shrink-0 border border-[#e7e7e9]"
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-[#0d0c22]">{comment.author.name}</span>
                      <span className="text-[11px] text-[#9e9ea7]">{comment.timestamp}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4a4a4a] leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
};
