import React, { useState } from 'react';
import { 
  BookOpen, 
  Bookmark, 
  Heart, 
  Share2, 
  Clock, 
  Calendar, 
  ChevronRight, 
  ExternalLink, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  X, 
  Search,
  Filter,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { MagazineArticle, ObjectProfile } from '../types';
import { MAGAZINE_ARTICLES, MAGAZINE_ISSUES } from '../data/magazineData';

interface FurnitureMagazineViewProps {
  onOpenObjectProfile: (obj: ObjectProfile) => void;
  onNavigateToFeed?: () => void;
}

export const FurnitureMagazineView: React.FC<FurnitureMagazineViewProps> = ({
  onOpenObjectProfile,
  onNavigateToFeed
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIssue, setSelectedIssue] = useState<string>('issue-04');
  const [selectedArticle, setSelectedArticle] = useState<MagazineArticle | null>(null);
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>([]);
  const [clappedArticleIds, setClappedArticleIds] = useState<{ [id: string]: number }>({});
  const [copiedLink, setCopiedLink] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const currentIssue = MAGAZINE_ISSUES.find(i => i.id === selectedIssue) || MAGAZINE_ISSUES[0];

  const handleToggleSave = (articleId: string) => {
    setSavedArticleIds(prev => 
      prev.includes(articleId) ? prev.filter(id => id !== articleId) : [...prev, articleId]
    );
  };

  const handleClap = (articleId: string) => {
    setClappedArticleIds(prev => ({
      ...prev,
      [articleId]: (prev[articleId] || 0) + 1
    }));
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const filteredArticles = MAGAZINE_ARTICLES.filter(art => {
    if (selectedCategory !== 'all' && art.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = art.title.toLowerCase().includes(q);
      const matchExcerpt = art.excerpt.toLowerCase().includes(q);
      const matchAuthor = art.author.name.toLowerCase().includes(q);
      const matchObject = art.taggedObject?.name.toLowerCase().includes(q);
      if (!matchTitle && !matchExcerpt && !matchAuthor && !matchObject) return false;
    }
    return true;
  });

  const featuredArticle = MAGAZINE_ARTICLES[0];

  return (
    <div className="monos-magazine-page w-full bg-[#f8f8f8] min-h-screen text-[#0d0c22] pb-20">
      {/* Magazine Masthead & Top Branding */}
      <section className="monos-magazine-hero bg-[#0d0c22] text-white pt-10 pb-12 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden">
        {/* Subtle background ambient graphic */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#ea4c89]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="monos-magazine-hero-inner max-w-7xl mx-auto space-y-6 relative z-10">
          {/* Magazine Header Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#ea4c89] text-white text-[11px] font-mono font-bold tracking-widest uppercase">
                MONOS JOURNAL
              </span>
              <span className="text-xs text-white/70 font-mono tracking-wider">
                ẤN PHẨM ĐỊNH KỲ • CHUYÊN KHẢO NỘI THẤT VIỆT NAM
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-white/60">Số kỳ phát hành:</span>
              <div className="flex items-center gap-1.5">
                {MAGAZINE_ISSUES.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => setSelectedIssue(issue.id)}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                      selectedIssue === issue.id
                        ? 'bg-white text-[#0d0c22] shadow-xs'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {issue.code}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Issue Title & Editorial Description */}
          <div className="space-y-3 max-w-4xl">
            <div className="text-xs text-[#ea4c89] font-mono font-bold uppercase tracking-widest">
              {currentIssue.period} • {currentIssue.code}
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Tạp Chí Chuyên Ngành Furniture & Đồ Vật Bản Địa
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl">
              Nơi bóc tách các nghiên cứu chuyên sâu về mộng mộc, vật liệu bản địa, hồ sơ nhân trắc học cơ thể người Việt và bảo chứng nguyên bản Scan Pattern AI cho ngành nội thất đương đại.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="monos-magazine-content max-w-7xl mx-auto px-4 sm:px-8 -mt-6 space-y-8">
        
        {/* Category Filters Bar */}
        <div className="monos-magazine-toolbar bg-white border border-[#e7e7e9] rounded-2xl p-2.5 shadow-xs flex items-center justify-between gap-3 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'bg-[#f8f8f8] text-[#6e6d7a] hover:bg-[#f3f3f4] hover:text-[#0d0c22]'
              }`}
            >
              Tất cả bài chuyên khảo ({MAGAZINE_ARTICLES.length})
            </button>

            <button
              onClick={() => setSelectedCategory('cover_story')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'cover_story'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'bg-[#f8f8f8] text-[#6e6d7a] hover:bg-[#f3f3f4] hover:text-[#0d0c22]'
              }`}
            >
              📖 Phóng sự bìa (Cover Story)
            </button>

            <button
              onClick={() => setSelectedCategory('craft_forensics')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'craft_forensics'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'bg-[#f8f8f8] text-[#6e6d7a] hover:bg-[#f3f3f4] hover:text-[#0d0c22]'
              }`}
            >
              🪵 Giám định kỹ thuật & mộng
            </button>

            <button
              onClick={() => setSelectedCategory('maker_dialogue')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'maker_dialogue'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'bg-[#f8f8f8] text-[#6e6d7a] hover:bg-[#f3f3f4] hover:text-[#0d0c22]'
              }`}
            >
              🎙️ Đối thoại nhà thiết kế
            </button>

            <button
              onClick={() => setSelectedCategory('living_archive')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'living_archive'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'bg-[#f8f8f8] text-[#6e6d7a] hover:bg-[#f3f3f4] hover:text-[#0d0c22]'
              }`}
            >
              🏺 Di sản & Gốm nung củi
            </button>

            <button
              onClick={() => setSelectedCategory('ip_scan')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'ip_scan'
                  ? 'bg-[#0d0c22] text-white shadow-xs'
                  : 'bg-[#f8f8f8] text-[#6e6d7a] hover:bg-[#f3f3f4] hover:text-[#0d0c22]'
              }`}
            >
              🛡️ Bản quyền & Scan Pattern
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[200px] hidden md:block">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#9e9ea7]" />
            <input
              type="text"
              placeholder="Tìm bài chuyên đề..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-8 pl-8 pr-3 text-xs bg-[#f8f8f8] border border-[#e7e7e9] rounded-full focus:outline-none focus:border-[#0d0c22]"
            />
          </div>
        </div>

        {/* FEATURED HERO ARTICLE: COVER STORY SPOTLIGHT */}
        {selectedCategory === 'all' && !searchQuery.trim() && (
          <article className="monos-magazine-featured bg-white border border-[#e7e7e9] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Showcase Cover Image */}
              <div 
                onClick={() => setSelectedArticle(featuredArticle)}
                className="lg:col-span-7 aspect-[16/11] lg:aspect-auto relative overflow-hidden bg-[#111] cursor-pointer group"
              >
                <img 
                  src={featuredArticle.coverImage} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#ea4c89] text-white text-xs font-bold font-mono uppercase tracking-wider shadow-xs">
                    ★ PHÓNG SỰ TRANG BÌA
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 text-white text-xs font-mono backdrop-blur-xs">
                    {featuredArticle.readTime}
                  </span>
                </div>

                {featuredArticle.taggedObject && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-white/40 flex items-center justify-between text-[#0d0c22]">
                    <div className="flex items-center gap-3">
                      <img 
                        src={featuredArticle.taggedObject.images[0]} 
                        alt="" 
                        className="w-10 h-10 rounded-xl object-cover border border-[#e7e7e9]"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold bg-[#0d0c22] text-white px-1.5 py-0.2 rounded">
                            CMND
                          </span>
                          <span className="text-xs font-bold text-[#0d0c22] truncate">
                            {featuredArticle.taggedObject.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#6e6d7a]">
                          Mã số: {featuredArticle.taggedObject.monosCode}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenObjectProfile(featuredArticle.taggedObject!);
                      }}
                      className="px-3 py-1.5 rounded-full bg-[#0d0c22] hover:bg-[#ea4c89] text-white text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Mở CMND</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>

              {/* Right Editorial Info */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#6e6d7a]">
                    <span className="font-bold text-[#ea4c89] uppercase tracking-wider">
                      {featuredArticle.issueNumber}
                    </span>
                    <span>•</span>
                    <span>{featuredArticle.publishedDate}</span>
                  </div>

                  <h2 
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="font-display font-black text-2xl sm:text-3xl text-[#0d0c22] hover:text-[#ea4c89] cursor-pointer transition-colors leading-tight"
                  >
                    {featuredArticle.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#6e6d7a] leading-relaxed">
                    {featuredArticle.subtitle}
                  </p>

                  {/* Pull Quote Box */}
                  {featuredArticle.pullQuote && (
                    <div className="p-4 rounded-2xl bg-[#f8f8f8] border-l-4 border-[#ea4c89] space-y-1.5 text-xs">
                      <p className="font-display font-semibold text-[#0d0c22] leading-relaxed text-xs sm:text-sm tracking-tight">
                        "{featuredArticle.pullQuote.quote}"
                      </p>
                      <span className="text-[11px] text-[#6e6d7a] block font-medium">
                        — {featuredArticle.pullQuote.speaker}
                      </span>
                    </div>
                  )}

                  {/* Key Takeaways */}
                  {featuredArticle.keyTakeaways && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0d0c22] block">
                        Đặc điểm kỹ thuật cốt lõi:
                      </span>
                      <ul className="space-y-1">
                        {featuredArticle.keyTakeaways.slice(0, 2).map((point, idx) => (
                          <li key={idx} className="text-xs text-[#6e6d7a] flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold shrink-0">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Author & Action Bar */}
                <div className="pt-4 border-t border-[#f3f3f4] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={featuredArticle.author.avatar} 
                      alt="" 
                      className="w-10 h-10 rounded-full object-cover border border-[#e7e7e9]"
                    />
                    <div>
                      <span className="text-xs font-bold text-[#0d0c22] block">
                        {featuredArticle.author.name}
                      </span>
                      <span className="text-[11px] text-[#6e6d7a] block">
                        {featuredArticle.author.role}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="px-5 py-2.5 rounded-full bg-[#0d0c22] hover:bg-[#ea4c89] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <span>Đọc toàn văn</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* ARTICLES GRID: EDITORIAL COLUMNS */}
        <div className="monos-magazine-list space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-display font-black text-[#0d0c22]">
              Tất Cả Bài Báo Chuyên Khảo ({filteredArticles.length})
            </h3>
            <span className="text-xs text-[#6e6d7a]">
              Được bảo chứng & lưu trữ bởi Ban Giám Tuyển Monos
            </span>
          </div>

          <div className="monos-magazine-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => {
              const isSaved = savedArticleIds.includes(article.id);
              const claps = (clappedArticleIds[article.id] || 0) + article.clapsCount;

              return (
                <article 
                  key={article.id}
                  className="monos-magazine-card bg-white border border-[#e7e7e9] rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Card Thumbnail */}
                    <div 
                      onClick={() => setSelectedArticle(article)}
                      className="aspect-square overflow-hidden relative cursor-pointer bg-[#111]"
                    >
                      <img 
                        src={article.coverImage} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-mono font-bold text-[#0d0c22]">
                          {article.categoryLabel}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                        <span>{article.readTime}</span>
                        <span>{article.publishedDate}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-5 pt-1 space-y-2">
                      <div className="text-[10px] font-mono font-bold text-[#ea4c89] tracking-wider uppercase">
                        {article.issueNumber}
                      </div>

                      <h4 
                        onClick={() => setSelectedArticle(article)}
                        className="font-display font-black text-base sm:text-lg text-[#0d0c22] group-hover:text-[#ea4c89] transition-colors leading-snug cursor-pointer line-clamp-2"
                      >
                        {article.title}
                      </h4>

                      <p className="text-xs text-[#6e6d7a] leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Tagged Object Badge */}
                      {article.taggedObject && (
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenObjectProfile(article.taggedObject!);
                          }}
                          className="pt-2 flex items-center justify-between p-2 rounded-xl bg-[#f8f8f8] hover:bg-[#f3f3f4] border border-[#e7e7e9] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-[10px] font-mono font-bold bg-[#0d0c22] text-white px-1.5 py-0.2 rounded">
                              CMND
                            </span>
                            <span className="text-xs font-bold text-[#0d0c22] truncate">
                              {article.taggedObject.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-[#ea4c89] flex items-center gap-0.5 shrink-0">
                            <span>Chi tiết</span>
                            <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Bar */}
                  <div className="px-5 py-4 mt-4 border-t border-[#f3f3f4] flex items-center justify-between text-xs text-[#6e6d7a]">
                    <div className="flex items-center gap-2">
                      <img 
                        src={article.author.avatar} 
                        alt="" 
                        className="w-7 h-7 rounded-full object-cover border border-[#e7e7e9]"
                      />
                      <span className="font-semibold text-xs text-[#0d0c22] truncate max-w-[120px]">
                        {article.author.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleClap(article.id)}
                        className="p-1.5 rounded-full hover:bg-[#f3f3f4] text-[#6e6d7a] hover:text-[#ea4c89] transition-colors cursor-pointer flex items-center gap-1"
                        title="Vỗ tay tán thưởng bài viết"
                      >
                        <Heart className="w-3.5 h-3.5 fill-[#ea4c89]/20 text-[#ea4c89]" />
                        <span className="text-[11px] font-bold">{claps}</span>
                      </button>

                      <button
                        onClick={() => handleToggleSave(article.id)}
                        className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                          isSaved ? 'text-[#ea4c89] bg-[#ea4c89]/10' : 'text-[#6e6d7a] hover:bg-[#f3f3f4]'
                        }`}
                        title="Lưu bài chuyên khảo"
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>

      {/* ARTICLE READER MODAL (ĐỌC TOÀN VĂN CHUYÊN KHẢO) */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl border border-[#e7e7e9] text-[#0d0c22] relative animate-in fade-in zoom-in-95 duration-200">
            {/* Top Modal Controls */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#f3f3f4] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#ea4c89] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                  MONOS JOURNAL
                </span>
                <span className="text-xs text-[#6e6d7a] font-mono">
                  {selectedArticle.issueNumber}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-[#f3f3f4] text-[#6e6d7a] transition-colors cursor-pointer"
                  title="Chia sẻ bài viết"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => handleToggleSave(selectedArticle.id)}
                  className={`p-2 rounded-full transition-colors cursor-pointer ${
                    savedArticleIds.includes(selectedArticle.id) ? 'text-[#ea4c89] bg-[#ea4c89]/10' : 'hover:bg-[#f3f3f4] text-[#6e6d7a]'
                  }`}
                  title="Lưu bài viết"
                >
                  <Bookmark className={`w-4 h-4 ${savedArticleIds.includes(selectedArticle.id) ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-full bg-[#f3f3f4] hover:bg-[#e7e7e9] text-[#0d0c22] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Article Long-Form Content Container */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Header Info */}
              <div className="space-y-4 max-w-2xl">
                <div className="inline-block px-3 py-1 rounded-full bg-[#f3f3f4] text-xs font-mono font-bold text-[#0d0c22]">
                  {selectedArticle.categoryLabel} • {selectedArticle.readTime}
                </div>

                <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#0d0c22] leading-[1.15]">
                  {selectedArticle.title}
                </h1>

                <p className="text-sm sm:text-base text-[#6e6d7a] leading-relaxed">
                  {selectedArticle.subtitle}
                </p>

                {/* Author Card */}
                <div className="flex items-center gap-3.5 pt-2">
                  <img 
                    src={selectedArticle.author.avatar} 
                    alt="" 
                    className="w-12 h-12 rounded-full object-cover border border-[#e7e7e9]"
                  />
                  <div>
                    <span className="font-bold text-sm text-[#0d0c22] block">
                      {selectedArticle.author.name}
                    </span>
                    <span className="text-xs text-[#6e6d7a] block">
                      {selectedArticle.author.role} • {selectedArticle.publishedDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tagged Object Passport Hero Callout */}
              {selectedArticle.taggedObject && (
                <div className="bg-[#0d0c22] text-white rounded-2xl p-5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={selectedArticle.taggedObject.images[0]} 
                      alt="" 
                      className="w-16 h-16 rounded-xl object-cover border border-white/20 shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#ea4c89] text-white">
                          CMND: {selectedArticle.taggedObject.monosCode}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-400">
                          {selectedArticle.taggedObject.scanPatternReport?.score || 96}% Nguyên bản
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-base text-white">
                        {selectedArticle.taggedObject.name}
                      </h4>
                      <p className="text-xs text-white/70">
                        {selectedArticle.taggedObject.brand} • Thiết kế bởi {selectedArticle.taggedObject.designer.name}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const obj = selectedArticle.taggedObject!;
                      setSelectedArticle(null);
                      onOpenObjectProfile(obj);
                    }}
                    className="px-5 py-2.5 rounded-full bg-white hover:bg-[#ea4c89] hover:text-white text-[#0d0c22] text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
                  >
                    <span>Mở Hồ sơ CMND</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Lead Image */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#f3f3f4] border border-[#e7e7e9]">
                <img 
                  src={selectedArticle.coverImage} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Key Takeaways Box */}
              {selectedArticle.keyTakeaways && (
                <div className="p-5 rounded-2xl bg-[#f8f8f8] border border-[#e7e7e9] space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d0c22] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#ea4c89]" />
                    <span>Tóm tắt kết luận kỹ thuật</span>
                  </span>
                  <div className="space-y-1.5">
                    {selectedArticle.keyTakeaways.map((point, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-[#4a4a4a] flex items-start gap-2">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modern Sans Paragraphs */}
              <div className="space-y-5 text-base sm:text-lg text-[#2e2d3d] leading-relaxed font-sans">
                {selectedArticle.contentParagraphs.map((para, idx) => (
                  <p key={idx} className={idx === 0 ? "text-lg sm:text-xl font-medium text-[#0d0c22] leading-relaxed border-l-2 border-[#ea4c89] pl-4 py-1" : "text-base sm:text-lg text-[#3e3d4e] leading-relaxed"}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Pull Quote - Modern Minimalist */}
              {selectedArticle.pullQuote && (
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0c22] text-white space-y-3 text-center my-6">
                  <p className="font-display font-bold text-lg sm:text-2xl text-white tracking-tight leading-relaxed">
                    "{selectedArticle.pullQuote.quote}"
                  </p>
                  <span className="text-xs font-mono text-[#ea4c89] block font-semibold tracking-wider uppercase">
                    — {selectedArticle.pullQuote.speaker}
                  </span>
                </div>
              )}

              {/* Gallery Images */}
              {selectedArticle.galleryImages && selectedArticle.galleryImages.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {selectedArticle.galleryImages.map((img, idx) => (
                    <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#e7e7e9]">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom Clap and Share */}
              <div className="pt-8 border-t border-[#f3f3f4] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleClap(selectedArticle.id)}
                    className="px-4 py-2 rounded-full bg-[#ea4c89] hover:bg-[#df3e7b] text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Tán thưởng ({(clappedArticleIds[selectedArticle.id] || 0) + selectedArticle.clapsCount})</span>
                  </button>
                  <span className="text-xs text-[#6e6d7a]">
                    {selectedArticle.savesCount} người đã lưu bài
                  </span>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 rounded-full bg-[#f3f3f4] hover:bg-[#e7e7e9] text-xs font-bold text-[#0d0c22] transition-colors cursor-pointer"
                >
                  Đóng bài viết
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
