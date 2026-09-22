import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  Check, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  Share2, 
  Compass, 
  Info, 
  Calendar, 
  Layers, 
  Plus,
  Heart
} from 'lucide-react';
import { CommunityGroup, Post, ObjectProfile } from '../types';

interface CommunityGroupsViewProps {
  groups: CommunityGroup[];
  selectedGroup: CommunityGroup;
  onSelectGroup: (group: CommunityGroup) => void;
  onToggleJoinGroup: (groupId: string) => void;
  groupPosts: Post[];
  onLikePost: (postId: string) => void;
  onSavePost: (postId: string) => void;
  onAddComment: (postId: string, commentText: string) => void;
  onOpenObjectProfile: (object: ObjectProfile) => void;
  onOpenCreatePost: () => void;
}

export const CommunityGroupsView: React.FC<CommunityGroupsViewProps> = ({
  groups,
  selectedGroup,
  onSelectGroup,
  onToggleJoinGroup,
  groupPosts,
  onLikePost,
  onSavePost,
  onAddComment,
  onOpenObjectProfile,
  onOpenCreatePost
}) => {
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});

  const handleCommentSubmit = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    const text = commentInputs[postId];
    if (!text?.trim()) return;
    onAddComment(postId, text.trim());
    setCommentInputs(prev => ({ ...prev, [postId]: '' }));
  };

  return (
    <div className="monos-groups-page w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      {/* Group Navigation Pills Bar */}
      <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
        {groups.map((g) => (
          <button
            key={g.id}
            onClick={() => onSelectGroup(g)}
            className={`px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
              selectedGroup.id === g.id
                ? 'bg-[#0d0c22] text-white shadow-xs'
                : 'bg-white text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f3f3f4] border border-[#e7e7e9]'
            }`}
          >
            <span>{g.icon}</span>
            <span>{g.name}</span>
          </button>
        ))}
      </div>

      {/* Selected Group Hero Card */}
      <div className="bg-white border border-[#e7e7e9] rounded-3xl overflow-hidden shadow-xs">
        {/* Banner */}
        <div className="relative h-48 sm:h-64 bg-[#f3f3f4] overflow-hidden">
          <img 
            src={selectedGroup.banner} 
            alt={selectedGroup.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-6 text-white">
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30">
              {selectedGroup.category}
            </span>
          </div>
        </div>

        {/* Group Details */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black font-display text-[#0d0c22]">
                {selectedGroup.name}
              </h1>
              <p className="text-sm text-[#6e6d7a] mt-1 max-w-2xl leading-relaxed">
                {selectedGroup.description}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onToggleJoinGroup(selectedGroup.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedGroup.isJoined
                    ? 'bg-[#f3f3f4] text-[#6e6d7a]'
                    : 'bg-[#0d0c22] hover:bg-[#2e2d3d] text-white shadow-xs'
                }`}
              >
                {selectedGroup.isJoined ? '✓ Đã tham gia' : '+ Tham gia nhóm'}
              </button>

              <button
                onClick={onOpenCreatePost}
                className="px-4 py-2.5 rounded-full bg-[#ea4c89] hover:bg-[#d63d76] text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Đăng bài</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#9e9ea7] pt-2 border-t border-[#f3f3f4]">
            <span><strong>{selectedGroup.membersCount.toLocaleString()}</strong> thành viên chuyên môn</span>
            <span><strong>{selectedGroup.postsCount}</strong> chủ đề nghiên cứu & trao đổi</span>
          </div>
        </div>
      </div>

      {/* Discussion Stream */}
      <div className="space-y-6">
        <h3 className="font-bold text-lg font-display text-[#0d0c22]">
          Các Thảo Luận & Báo Cáo Chuyên Sâu Gần Đây
        </h3>

        <div className="space-y-4">
          {groupPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white border border-[#e7e7e9] rounded-3xl p-6 space-y-4 shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Post Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={post.author.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-[#0d0c22]">{post.author.name}</span>
                      <span className="bg-[#ea4c89]/15 text-[#ea4c89] text-[9px] font-bold px-1.5 py-0.2 rounded font-mono uppercase">
                        PRO
                      </span>
                    </div>
                    <span className="text-xs text-[#9e9ea7]">{post.author.role} • {post.timestamp}</span>
                  </div>
                </div>

                {post.taggedObject && (
                  <button
                    onClick={() => onOpenObjectProfile(post.taggedObject!)}
                    className="px-3 py-1 rounded-full bg-[#f3f3f4] text-[#0d0c22] text-xs font-semibold hover:bg-[#e7e7e9] transition-colors cursor-pointer"
                  >
                    Hồ sơ: {post.taggedObject.name}
                  </button>
                )}
              </div>

              {/* Content */}
              <p className="text-sm text-[#3d3d4e] leading-relaxed whitespace-pre-line">
                {post.content}
              </p>

              {/* Images */}
              {post.images && post.images.length > 0 && (
                <div className="rounded-2xl overflow-hidden max-h-96 bg-[#f3f3f4]">
                  <img src={post.images[0]} alt="" className="w-full h-full object-cover" />
                </div>
              )}

              {/* Actions & Comment Input */}
              <div className="pt-2 flex items-center justify-between border-t border-[#f3f3f4]">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => onLikePost(post.id)}
                    className={`flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer ${
                      post.isLiked ? 'text-[#ea4c89]' : 'text-[#6e6d7a] hover:text-[#ea4c89]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
                    <span>{post.likes} Yêu thích</span>
                  </button>

                  <div className="flex items-center gap-1 text-xs text-[#6e6d7a]">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.commentsCount} Phản hồi</span>
                  </div>
                </div>
              </div>

              {/* Quick comments preview */}
              {post.comments && post.comments.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#f3f3f4]/60">
                  {post.comments.slice(0, 2).map((c) => (
                    <div key={c.id} className="p-3 bg-[#f8f8f8] rounded-xl text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#0d0c22]">{c.author.name}</span>
                        <span className="text-[10px] text-[#9e9ea7]">{c.timestamp}</span>
                      </div>
                      <p className="text-[#6e6d7a]">{c.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Comment Input */}
              <form onSubmit={(e) => handleCommentSubmit(post.id, e)} className="flex gap-2 pt-1">
                <input
                  type="text"
                  placeholder="Gửi phản hồi hoặc trao đổi chuyên môn..."
                  value={commentInputs[post.id] || ''}
                  onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                  className="flex-1 h-9 px-4 rounded-full bg-[#f3f3f4] text-xs text-[#0d0c22] placeholder-[#9e9ea7] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#ea4c89]"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full bg-[#0d0c22] text-white text-xs font-bold cursor-pointer hover:bg-[#2e2d3d]"
                >
                  Gửi
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
