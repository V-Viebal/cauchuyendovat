import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Tag, 
  Layers, 
  Bookmark, 
  Share2, 
  QrCode, 
  FileText, 
  History, 
  Camera, 
  Sparkles, 
  ExternalLink, 
  Check, 
  ChevronRight, 
  UserCheck, 
  Factory, 
  PenTool, 
  Clock,
  Heart,
  MessageSquare,
  Send,
  Sliders,
  Download,
  Award
} from 'lucide-react';
import { ObjectProfile, CommunityMemory } from '../types';
import { CURRENT_USER } from '../data/mockData';

interface ObjectProfileModalProps {
  object: ObjectProfile | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (objectId: string) => void;
  onAddMemory: (objectId: string, memory: Partial<CommunityMemory>) => void;
  onOpenScanWorkspaceWithObject?: (object: ObjectProfile) => void;
}

export const ObjectProfileModal: React.FC<ObjectProfileModalProps> = ({
  object,
  onClose,
  isSaved,
  onToggleSave,
  onAddMemory,
  onOpenScanWorkspaceWithObject
}) => {
  const [activeTab, setActiveTab] = useState<'story' | 'provenance' | 'memories' | 'scan' | 'specs'>('story');
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [showAddMemoryForm, setShowAddMemoryForm] = useState(false);
  const [memoryContent, setMemoryContent] = useState('');
  const [ownershipDuration, setOwnershipDuration] = useState('Đã sử dụng 6 tháng');
  const [copiedId, setCopiedId] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(68);
  const [isFollowing, setIsFollowing] = useState(false);
  const [commentInput, setCommentInput] = useState('');

  const [copiedLink, setCopiedLink] = useState(false);

  if (!object) return null;

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(object.monosCode);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleSubmitMemory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memoryContent.trim()) return;

    onAddMemory(object.id, {
      author: {
        name: CURRENT_USER.name,
        avatar: CURRENT_USER.avatar,
        role: CURRENT_USER.role
      },
      ownershipDuration: ownershipDuration,
      content: memoryContent.trim(),
      date: 'Vừa xong',
      likes: 1
    });

    setMemoryContent('');
    setShowAddMemoryForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white border border-[#e7e7e9] w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh] text-[#0d0c22] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dribbble-style Project Detail Header */}
        <div className="p-4 sm:p-6 border-b border-[#f3f3f4] bg-white flex items-center justify-between gap-4 shrink-0">
          {/* Creator Profile & Action */}
          <div className="flex items-center gap-3.5 min-w-0">
            <img 
              src={object.designer.avatar} 
              alt={object.designer.name} 
              className="w-12 h-12 rounded-full object-cover border border-[#e7e7e9] shrink-0"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-sm sm:text-base text-[#0d0c22] truncate">
                  {object.designer.name}
                </h4>
                <span className="bg-[#ea4c89]/15 text-[#ea4c89] text-[9px] font-bold px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">
                  PRO
                </span>
                <span className="hidden sm:inline-block text-xs text-[#9e9ea7]">•</span>
                <button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`hidden sm:inline-block text-xs font-bold transition-colors cursor-pointer ${
                    isFollowing ? 'text-[#6e6d7a]' : 'text-[#ea4c89] hover:underline'
                  }`}
                >
                  {isFollowing ? 'Đang theo dõi' : 'Theo dõi'}
                </button>
              </div>
              <span className="text-xs text-[#6e6d7a] block truncate">
                {object.brand} • {object.originCity}
              </span>
            </div>
          </div>

          {/* Dribbble Actions: Save, Like, Close */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onToggleSave(object.id)}
              className={`h-10 px-3.5 rounded-full border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isSaved
                  ? 'bg-[#ea4c89]/10 border-[#ea4c89] text-[#ea4c89]'
                  : 'bg-white border-[#e7e7e9] text-[#0d0c22] hover:bg-[#f8f8f8]'
              }`}
              title="Lưu vào bộ sưu tập"
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Đã lưu' : 'Lưu bộ sưu tập'}</span>
            </button>

            <button
              onClick={handleToggleLike}
              className={`h-10 px-4 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                isLiked
                  ? 'bg-[#ea4c89] text-white shadow-[#ea4c89]/30'
                  : 'bg-[#0d0c22] hover:bg-[#2e2d3d] text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>Thích ({likesCount})</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#f3f3f4] text-[#6e6d7a] hover:text-[#0d0c22] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-8 space-y-8 bg-white">
          {/* Title and Identification Meta */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f3f4] hover:bg-[#e7e7e9] text-[#0d0c22] font-mono text-xs font-bold transition-colors cursor-pointer"
                title="Nhấn để sao chép mã định danh Monos"
              >
                <QrCode className="w-3.5 h-3.5 text-[#ea4c89]" />
                <span>{object.monosCode}</span>
                {copiedId && <span className="text-[10px] text-emerald-600 font-sans">✓ Đã chép</span>}
              </button>

              {object.sku && (
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  SKU: {object.sku}
                </span>
              )}

              <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{object.verificationBadgeText}</span>
              </span>

              {object.websiteUrl && (
                <a
                  href={object.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-[#ea4c89] border border-[#ea4c89]/30 hover:bg-rose-100 transition-colors"
                >
                  <span>bplusfurniture.com.vn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#f8f8f8] text-[#6e6d7a] border border-[#e7e7e9]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Năm ra mắt: {object.year}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-display font-black text-[#0d0c22] tracking-tight">
              {object.name}
            </h1>

            <p className="text-base text-[#6e6d7a] leading-relaxed max-w-3xl">
              {object.shortDescription}
            </p>
          </div>

          {/* Dribbble Hero Image Showcase */}
          <div className="space-y-3">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-[#f3f3f4] shadow-sm border border-[#e7e7e9]">
              <img 
                src={object.images[selectedImgIndex] || object.images[0]} 
                alt={object.name} 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-mono">
                {selectedImgIndex + 1} / {object.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {object.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    selectedImgIndex === idx
                      ? 'border-[#ea4c89] scale-105 shadow-md'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Material & Technique Chips */}
          <div className="p-5 bg-[#f8f8f8] rounded-2xl border border-[#e7e7e9] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9e9ea7] block">
              Vật liệu & Kỹ thuật chế tác độc bản
            </span>
            <div className="flex flex-wrap gap-2">
              {object.materials.map((m, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-white text-[#0d0c22] border border-[#e7e7e9] text-xs font-medium shadow-2xs">
                  {m}
                </span>
              ))}
              {object.techniques.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-[#f3f3f4] text-[#0d0c22] border border-transparent text-xs font-medium">
                  🪵 {t}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Tabs (Dribbble style pill tabs) */}
          <div className="flex items-center gap-2 overflow-x-auto border-b border-[#f3f3f4] pb-3">
            {[
              { id: 'story', label: '📖 Câu chuyện sáng tạo' },
              { id: 'provenance', label: '🪵 Hành trình xưởng & Xuất xứ' },
              { id: 'scan', label: '🛡️ Scan Pattern bản quyền' },
              { id: 'memories', label: `⏳ Ký ức người dùng (${object.communityMemories.length})` },
              { id: 'specs', label: '📐 Thông số kỹ thuật' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0d0c22] text-white shadow-xs'
                    : 'bg-[#f3f3f4] text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#e7e7e9]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: STORY */}
          {activeTab === 'story' && (
            <div className="space-y-6 text-[#3d3d4e] leading-relaxed">
              <div className="prose max-w-none space-y-4">
                <h3 className="text-xl font-bold font-display text-[#0d0c22]">
                  Khởi nguồn thiết kế & Ý niệm tác giả
                </h3>
                <p className="text-sm whitespace-pre-line text-[#4a4a58] leading-relaxed bg-[#fbfbfb] p-5 rounded-2xl border border-[#f3f3f4]">
                  {object.story}
                </p>
              </div>

              <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/60 text-xs space-y-1">
                <span className="font-bold text-amber-900 block flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Mục đích thiết kế (Design Intent):</span>
                </span>
                <p className="text-amber-800 leading-relaxed">
                  {object.designIntent}
                </p>
              </div>

              {object.cadDrawingUrl && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#9e9ea7]">
                    Bản vẽ kỹ thuật & tỷ lệ công thái học:
                  </h4>
                  <div className="rounded-2xl overflow-hidden border border-[#e7e7e9] bg-[#f8f8f8]">
                    <img src={object.cadDrawingUrl} alt="CAD Drawing" className="w-full max-h-80 object-cover" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: PROVENANCE TIMELINE */}
          {activeTab === 'provenance' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg font-display text-[#0d0c22]">
                    Dòng thời gian truy xuất nguồn gốc (Provenance)
                  </h3>
                  <p className="text-xs text-[#6e6d7a] mt-0.5">
                    Mỗi dấu mốc được ký xác thực bởi xưởng, người thợ chế tác và hội đồng biên tập Monos.
                  </p>
                </div>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#e7e7e9] space-y-8 my-4">
                {object.provenanceTimeline.map((step, idx) => (
                  <div key={step.id} className="relative space-y-2">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#0d0c22] flex items-center justify-center font-bold text-xs text-[#0d0c22] shadow-xs">
                      {idx + 1}
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-[#ea4c89]">
                        {step.date}
                      </span>
                      <span className="text-xs text-[#9e9ea7]">•</span>
                      <h4 className="font-bold text-sm text-[#0d0c22]">
                        {step.title}
                      </h4>
                      {step.verified && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                          Đã xác minh
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#6e6d7a] leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-[#9e9ea7] pt-1">
                      <span className="flex items-center gap-1">
                        <UserCheck className="w-3.5 h-3.5 text-[#0d0c22]" />
                        <span>{step.actor}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-red-500" />
                        <span>{step.location}</span>
                      </span>
                    </div>

                    {step.evidenceDocs && step.evidenceDocs.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {step.evidenceDocs.map((doc, docIdx) => (
                          <span key={docIdx} className="px-2.5 py-1 rounded-lg bg-[#f3f3f4] text-[#0d0c22] text-[11px] font-mono flex items-center gap-1">
                            <FileText className="w-3 h-3 text-[#ea4c89]" />
                            <span>{doc}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SCAN PATTERN REPORT */}
          {activeTab === 'scan' && (
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-teal-50 to-blue-50/60 rounded-3xl border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-teal-500 flex flex-col items-center justify-center font-bold text-teal-700 shadow-sm shrink-0">
                    <span className="text-3xl leading-none font-mono">{object.scanPatternReport.score}%</span>
                    <span className="text-[9px] uppercase tracking-wider mt-1 font-bold text-teal-600">Nguyên bản</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0d0c22] font-display">
                      Chỉ số tính nguyên bản Monos Scan Pattern
                    </h4>
                    <p className="text-xs text-[#6e6d7a] mt-1 leading-relaxed">
                      {object.scanPatternReport.summary}
                    </p>
                  </div>
                </div>

                {onOpenScanWorkspaceWithObject && (
                  <button
                    onClick={() => onOpenScanWorkspaceWithObject(object)}
                    className="px-4 py-2.5 rounded-full bg-[#0d0c22] hover:bg-[#2e2d3d] text-white text-xs font-bold shrink-0 transition-colors cursor-pointer"
                  >
                    Mở studio đối chiếu 3D →
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-[#f8f8f8] rounded-2xl border border-[#e7e7e9] space-y-3">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#6e6d7a]">
                    Đặc tính cấu trúc đã kiểm tra vector
                  </h5>
                  <div className="space-y-2">
                    {object.scanPatternReport.featuresAnalyzed.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#0d0c22]">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-[#f8f8f8] rounded-2xl border border-[#e7e7e9] space-y-3">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#6e6d7a]">
                    Đối chiếu thiết kế tương đồng
                  </h5>
                  {object.scanPatternReport.similarReferences.map((ref, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-[#e7e7e9] text-xs">
                      <div className="flex justify-between font-semibold text-[#0d0c22]">
                        <span>{ref.name}</span>
                        <span className="font-mono text-[#ea4c89]">{ref.similarity}% tương đồng</span>
                      </div>
                      <span className="text-[11px] text-[#6e6d7a] mt-0.5 block">{ref.notes}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: LIVING MEMORIES */}
          {activeTab === 'memories' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg font-display text-[#0d0c22]">
                    Ký ức sống cùng đồ vật
                  </h3>
                  <p className="text-xs text-[#6e6d7a] mt-0.5">
                    Những câu chuyện thực tế từ người dùng sau thời gian đồng hành cùng món đồ.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddMemoryForm(!showAddMemoryForm)}
                  className="px-4 py-2 rounded-full bg-[#0d0c22] hover:bg-[#2e2d3d] text-white text-xs font-bold transition-all cursor-pointer"
                >
                  {showAddMemoryForm ? 'Hủy' : '+ Kể ký ức của bạn'}
                </button>
              </div>

              {showAddMemoryForm && (
                <form onSubmit={handleSubmitMemory} className="p-4 bg-[#f8f8f8] rounded-2xl border border-[#e7e7e9] space-y-3">
                  <h4 className="font-bold text-xs text-[#0d0c22]">
                    Đóng góp cảm nhận & hình ảnh sống cùng món đồ này:
                  </h4>
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      placeholder="Thời gian đã sở hữu (vd: Đã dùng 1 năm...)"
                      value={ownershipDuration}
                      onChange={(e) => setOwnershipDuration(e.target.value)}
                      className="h-9 px-3 rounded-xl bg-white border border-[#e7e7e9] text-xs text-[#0d0c22] flex-1"
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Chia sẻ trải nghiệm ngồi, lớp patina gỗ sau thời gian, hay câu chuyện đáng nhớ..."
                    value={memoryContent}
                    onChange={(e) => setMemoryContent(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-[#e7e7e9] text-xs text-[#0d0c22] focus:outline-none focus:ring-1 focus:ring-[#ea4c89]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-full bg-[#ea4c89] text-white text-xs font-bold cursor-pointer"
                  >
                    Gửi ký ức vào hồ sơ đồ vật
                  </button>
                </form>
              )}

              <div className="space-y-4">
                {object.communityMemories.map((mem) => (
                  <div key={mem.id} className="p-4 rounded-2xl bg-[#f8f8f8] border border-[#f3f3f4] space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img src={mem.author.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <span className="font-bold text-xs text-[#0d0c22] block">{mem.author.name}</span>
                          <span className="text-[11px] text-[#9e9ea7]">{mem.ownershipDuration} • {mem.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-[#4a4a58] leading-relaxed">
                      "{mem.content}"
                    </p>
                    {mem.photoUrl && (
                      <img src={mem.photoUrl} alt="" className="w-full max-h-60 rounded-xl object-cover" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SPECS */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg font-display text-[#0d0c22]">
                Thông số kỹ thuật & Tiêu chuẩn xuất xưởng
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#f8f8f8] rounded-2xl border border-[#e7e7e9] text-xs space-y-1">
                  <span className="font-bold text-[#9e9ea7] uppercase text-[10px]">Kích thước bao quát:</span>
                  <p className="font-semibold text-[#0d0c22]">{object.dimensions}</p>
                </div>
                <div className="p-4 bg-[#f8f8f8] rounded-2xl border border-[#e7e7e9] text-xs space-y-1">
                  <span className="font-bold text-[#9e9ea7] uppercase text-[10px]">Đơn vị chế tác:</span>
                  <p className="font-semibold text-[#0d0c22]">{object.manufacturer}</p>
                </div>
                <div className="p-4 bg-[#f8f8f8] rounded-2xl border border-[#e7e7e9] text-xs space-y-1">
                  <span className="font-bold text-[#9e9ea7] uppercase text-[10px]">Nơi sáng tác & sản xuất:</span>
                  <p className="font-semibold text-[#0d0c22]">{object.originCity}</p>
                </div>
                <div className="p-4 bg-[#f8f8f8] rounded-2xl border border-[#e7e7e9] text-xs space-y-1">
                  <span className="font-bold text-[#9e9ea7] uppercase text-[10px]">Mã lưu bạ vĩnh viễn:</span>
                  <p className="font-mono font-bold text-[#ea4c89]">{object.monosCode}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Designer Hire & Direct Inquiry */}
        <div className="p-4 sm:p-5 border-t border-[#f3f3f4] bg-[#fafafa] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 text-xs text-[#6e6d7a]">
            <img src={object.designer.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
            <span>Quan tâm đến <strong>{object.name}</strong> hay muốn đặt hàng kích thước riêng?</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                setCopiedLink(true);
                setTimeout(() => setCopiedLink(false), 2000);
              }}
              className="px-4 py-2 rounded-full bg-white hover:bg-[#f3f3f4] border border-[#e7e7e9] text-xs font-semibold text-[#0d0c22] transition-colors cursor-pointer"
            >
              {copiedLink ? '✓ Đã sao chép liên kết' : 'Chia sẻ liên kết'}
            </button>
            <button
              onClick={() => {
                onClose();
              }}
              className="flex-1 sm:flex-none px-5 py-2 rounded-full bg-[#0d0c22] hover:bg-[#2e2d3d] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              Liên hệ Nhà thiết kế / Xưởng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
