import React, { useState } from 'react';
import { 
  X, 
  Image as ImageIcon, 
  Tag, 
  ShieldCheck, 
  FileCheck, 
  Sparkles, 
  Globe, 
  Users, 
  HelpCircle,
  Plus,
  UploadCloud,
  Check
} from 'lucide-react';
import { CURRENT_USER } from '../data/mockData';
import { ObjectProfile, Post, PostType } from '../types';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableObjects: ObjectProfile[];
  preSelectedObject?: ObjectProfile | null;
  onSubmitPost: (newPost: Partial<Post>) => void;
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
  availableObjects,
  preSelectedObject,
  onSubmitPost
}) => {
  const [postType, setPostType] = useState<PostType>('editorial_story');
  const [content, setContent] = useState('');
  const [selectedObjectId, setSelectedObjectId] = useState<string>(
    preSelectedObject?.id || (availableObjects[0]?.id ?? '')
  );
  const [selectedBadge, setSelectedBadge] = useState('Đã xác minh nguồn gốc');
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  if (!isOpen) return null;

  const sampleImages = [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const taggedObj = availableObjects.find((o) => o.id === selectedObjectId);

    onSubmitPost({
      type: postType,
      content: content.trim(),
      taggedObject: taggedObj,
      images: previewImage ? [previewImage] : taggedObj ? [taggedObj.images[0]] : [],
      provenanceBadges: [
        taggedObj ? `Mã Monos: ${taggedObj.monosCode}` : 'Góp ý cộng đồng',
        selectedBadge
      ]
    });

    setContent('');
    setPreviewImage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
      <div 
        className="bg-white border border-[#e7e7e9] w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-[#0d0c22] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#f3f3f4] flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg font-display text-[#0d0c22]">
              Đăng Tải Shot & Kể Câu Chuyện Đồ Vật
            </h3>
            <span className="text-xs text-[#6e6d7a]">
              Công bố nghiên cứu, hành trình chế tác hoặc ký ức sống cùng món đồ
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#f3f3f4] text-[#6e6d7a] hover:text-[#0d0c22] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-5">
          {/* Post Type Selector (Dribbble pill style) */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#9e9ea7] block">
              Thể loại bài đăng:
            </label>
            <div className="flex gap-2 flex-wrap">
              {[
                { id: 'editorial_story', label: '📖 Tạp chí đồ vật' },
                { id: 'workshop_craft', label: '🪵 Kỹ thuật xưởng mộc' },
                { id: 'community_memory', label: '⏳ Ký ức sở hữu' },
                { id: 'scan_pattern', label: '🛡️ Đối chiếu bản quyền' }
              ].map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setPostType(t.id as any)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    postType === t.id
                      ? 'bg-[#0d0c22] text-white shadow-xs'
                      : 'bg-[#f3f3f4] text-[#6e6d7a] hover:bg-[#e7e7e9]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tagged Object Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#9e9ea7] block">
              Gắn thẻ đồ vật (Object Profile):
            </label>
            <select
              value={selectedObjectId}
              onChange={(e) => setSelectedObjectId(e.target.value)}
              className="w-full h-11 px-4 rounded-xl bg-[#f3f3f4] text-xs text-[#0d0c22] font-semibold border border-transparent focus:border-[#ea4c89]/40 focus:bg-white focus:outline-none"
            >
              {availableObjects.map((obj) => (
                <option key={obj.id} value={obj.id}>
                  {obj.name} ({obj.monosCode} - {obj.brand})
                </option>
              ))}
            </select>
          </div>

          {/* Content Area */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#9e9ea7] block">
              Nội dung câu chuyện:
            </label>
            <textarea
              rows={4}
              placeholder="Chia sẻ lý do tạo ra món đồ, kỹ thuật mộng mộc, thách thức khi uốn gỗ, hoặc trải nghiệm đồng hành..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-4 rounded-2xl bg-[#f3f3f4] focus:bg-white text-xs text-[#0d0c22] placeholder-[#9e9ea7] border border-transparent focus:border-[#ea4c89]/40 focus:outline-none"
            />
          </div>

          {/* Image Sample Picker / Uploader */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#9e9ea7] block">
              Hình ảnh minh họa tác phẩm:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {sampleImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setPreviewImage(img)}
                  className={`aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                    previewImage === img ? 'border-[#ea4c89] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-3 flex justify-end gap-3 border-t border-[#f3f3f4]">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#f3f3f4] text-[#6e6d7a] hover:text-[#0d0c22] text-xs font-bold transition-colors cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={!content.trim()}
              className="px-6 py-2.5 rounded-full bg-[#0d0c22] hover:bg-[#2e2d3d] text-white text-xs font-bold transition-all shadow-xs cursor-pointer disabled:opacity-40"
            >
              Xuất bản lên Monos
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
