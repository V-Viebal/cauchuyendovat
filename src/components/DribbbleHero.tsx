import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  Filter, 
  ChevronDown, 
  Check, 
  SlidersHorizontal,
  X,
  Layers,
  Palette,
  Clock
} from 'lucide-react';

interface DribbbleHeroProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedSort: 'popular' | 'latest' | 'verified';
  onSelectSort: (sort: 'popular' | 'latest' | 'verified') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const DribbbleHero: React.FC<DribbbleHeroProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedSort,
  onSelectSort,
  searchQuery,
  onSearchChange
}) => {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFiltersDrawer, setShowFiltersDrawer] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [timeframe, setTimeframe] = useState<'all' | 'month' | 'year'>('all');

  const categories = [
    { id: 'all', label: 'Khám phá' },
    { id: 'seating', label: 'Ghế & Sofa' },
    { id: 'table', label: 'Bàn & Đồ thủ công' },
    { id: 'lighting', label: 'Đèn & Chiếu sáng' },
    { id: 'workshop', label: 'Xưởng mộc & Mộng ghép' },
    { id: 'memory', label: 'Câu chuyện & Ký ức' },
    { id: 'scan', label: 'Scan Pattern AI' }
  ];

  const sortLabels = {
    popular: 'Phổ biến nhất',
    latest: 'Mới & Nổi bật',
    verified: 'Đã xác thực nguồn gốc'
  };

  const popularSearches = [
    'Ghế Cloudy',
    'B+ Furniture',
    'Gỗ Tần Bì FSC',
    'Mộng giấu vít',
    'Nhận diện thương hiệu',
    'Minh họa đồ vật',
    'Nghệ thuật chữ',
    'Thiết kế sản phẩm'
  ];

  const colorSwatches = [
    { name: 'Đỏ', hex: '#ff4d4f' },
    { name: 'Cam', hex: '#fa8c16' },
    { name: 'Vàng', hex: '#faad14' },
    { name: 'Xanh lá', hex: '#52c41a' },
    { name: 'Xanh ngọc', hex: '#13c2c2' },
    { name: 'Xanh dương', hex: '#1890ff' },
    { name: 'Tím', hex: '#722ed1' },
    { name: 'Hồng', hex: '#ea4c89' },
    { name: 'Đen', hex: '#0d0c22' },
    { name: 'Xám', hex: '#8c8c8c' },
    { name: 'Trắng', hex: '#ffffff' }
  ];

  return (
    <div className="w-full bg-[#f8f8f8] pt-10 pb-6 sm:pt-16 sm:pb-8 px-4 sm:px-8 border-b border-[#f3f3f4]">
      {/* Centered Authentic Dribbble Editorial Headline */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e7e7e9] text-xs font-semibold text-[#0d0c22] shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#ea4c89]" />
          <span>Monos — Cộng đồng tạp chí & lưu bạ đồ vật sáng tạo</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-[#0d0c22] tracking-tight leading-[1.12]">
          Khám phá những nhà thiết kế & tác phẩm sáng tạo hàng đầu
        </h1>

        <p className="text-base sm:text-lg text-[#6e6d7a] max-w-2xl mx-auto font-normal leading-relaxed">
          Monos là cộng đồng hàng đầu kết nối các nhà thiết kế, xưởng chế tác & người yêu đồ vật. Nơi mỗi thiết kế đều có hồ sơ định danh, kỹ thuật mộc và hành trình minh bạch.
        </p>

        {/* Big Central Dribbble Pill Search */}
        <div className="pt-2 max-w-2xl mx-auto">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 absolute left-5 text-[#9e9ea7]" />
            <input
              type="text"
              placeholder="Bạn đang tìm kiếm gì?"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-14 pl-14 pr-28 rounded-full bg-white border border-[#e7e7e9] text-sm text-[#0d0c22] placeholder-[#9e9ea7] shadow-sm hover:shadow-md focus:shadow-md focus:border-[#ea4c89] focus:outline-none transition-all"
            />
            {searchQuery ? (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-4 p-2 text-[#9e9ea7] hover:text-[#0d0c22] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                className="absolute right-2 px-5 py-2.5 rounded-full bg-[#ea4c89] hover:bg-[#df3e7b] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                Tìm kiếm
              </button>
            )}
          </div>

          {/* Popular searches pills */}
          <div className="pt-3.5 flex items-center justify-center gap-1.5 flex-wrap text-xs">
            <span className="text-[#9e9ea7] font-medium mr-1">Phổ biến:</span>
            {popularSearches.map((tag) => (
              <button
                key={tag}
                onClick={() => onSearchChange(tag)}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-[#f3f3f4] text-[#6e6d7a] hover:text-[#0d0c22] border border-[#e7e7e9] transition-colors cursor-pointer text-xs"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dribbble Filter & Category Ribbon */}
      <div className="max-w-[1720px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
        {/* Sort Dropdown Button (Dribbble Popular / New) */}
        <div className="relative w-full md:w-auto shrink-0">
          <button
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="h-10 px-4 rounded-xl bg-white hover:bg-[#f3f3f4] border border-[#e7e7e9] text-xs font-bold text-[#0d0c22] flex items-center justify-between gap-2 transition-colors cursor-pointer w-full md:w-auto shadow-xs"
          >
            <span>{sortLabels[selectedSort]}</span>
            <ChevronDown className="w-4 h-4 text-[#6e6d7a]" />
          </button>

          {showSortDropdown && (
            <div className="absolute top-12 left-0 w-52 bg-white border border-[#e7e7e9] rounded-2xl shadow-xl p-1.5 z-40 text-xs font-semibold text-[#0d0c22] animate-in fade-in zoom-in-95 duration-150">
              {(['popular', 'latest', 'verified'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    onSelectSort(s);
                    setShowSortDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    selectedSort === s ? 'bg-[#f3f3f4] text-[#ea4c89] font-bold' : 'hover:bg-[#f8f8f8]'
                  }`}
                >
                  <span>{sortLabels[s]}</span>
                  {selectedSort === s && <Check className="w-3.5 h-3.5 text-[#ea4c89]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category Pills (Horizontal scrolling on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none justify-start md:justify-center">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0d0c22] text-white shadow-xs'
                    : 'bg-white text-[#6e6d7a] hover:text-[#0d0c22] hover:bg-[#f3f3f4] border border-[#e7e7e9]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Filter Toggle Button */}
        <div className="w-full md:w-auto shrink-0 flex justify-end">
          <button
            onClick={() => setShowFiltersDrawer(!showFiltersDrawer)}
            className={`h-10 px-4 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
              showFiltersDrawer || selectedColor
                ? 'bg-[#0d0c22] text-white border-[#0d0c22]'
                : 'bg-white hover:bg-[#f3f3f4] border-[#e7e7e9] text-[#0d0c22]'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Bộ lọc</span>
            {selectedColor && (
              <span className="w-2.5 h-2.5 rounded-full border border-white" style={{ backgroundColor: selectedColor }} />
            )}
          </button>
        </div>
      </div>

      {/* Dribbble Expandable Filter Panel (Color Picker & Timeframe) */}
      {showFiltersDrawer && (
        <div className="max-w-[1720px] mx-auto mt-4 p-5 rounded-2xl bg-white border border-[#e7e7e9] shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Color Swatch Selector */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0d0c22]">
                <Palette className="w-3.5 h-3.5 text-[#ea4c89]" />
                <span>Lọc theo màu sắc</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {colorSwatches.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(selectedColor === c.hex ? null : c.hex)}
                    className={`w-6 h-6 rounded-full border transition-transform cursor-pointer relative ${
                      selectedColor === c.hex ? 'scale-125 ring-2 ring-[#ea4c89]' : 'hover:scale-110'
                    } ${c.hex === '#ffffff' ? 'border-gray-300' : 'border-transparent'}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {selectedColor === c.hex && (
                      <Check className={`w-3 h-3 absolute inset-0 m-auto ${c.hex === '#ffffff' || c.hex === '#faad14' ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                ))}
                {selectedColor && (
                  <button
                    onClick={() => setSelectedColor(null)}
                    className="text-[11px] text-[#ea4c89] hover:underline font-semibold ml-2"
                  >
                    Bỏ chọn màu
                  </button>
                )}
              </div>
            </div>

            {/* Timeframe */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0d0c22]">
                <Clock className="w-3.5 h-3.5 text-[#6e6d7a]" />
                <span>Thời gian</span>
              </div>
              <div className="flex items-center gap-1.5">
                {(['all', 'month', 'year'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      timeframe === t ? 'bg-[#0d0c22] text-white' : 'bg-[#f3f3f4] text-[#6e6d7a] hover:bg-[#e7e7e9]'
                    }`}
                  >
                    {t === 'all' ? 'Tất cả' : t === 'month' ? 'Tháng này' : 'Năm nay'}
                  </button>
                ))}
              </div>
            </div>

            {/* Close / Reset */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <button
                onClick={() => {
                  setSelectedColor(null);
                  onSearchChange('');
                  setShowFiltersDrawer(false);
                }}
                className="text-xs text-[#6e6d7a] hover:text-[#0d0c22] font-semibold cursor-pointer"
              >
                Đặt lại
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

