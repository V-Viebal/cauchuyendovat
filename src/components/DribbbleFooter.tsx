import React from 'react';
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Globe, 
  Heart,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const DribbbleFooter: React.FC<{
  onSelectCategory?: (cat: string) => void;
  onOpenCreate?: () => void;
}> = ({ onSelectCategory, onOpenCreate }) => {
  return (
    <footer className="w-full bg-white border-t border-[#f3f3f4] text-[#0d0c22] pt-16 pb-12 px-6 sm:px-10 mt-auto">
      {/* Top Dribbble CTA Bar */}
      <div className="max-w-[1720px] mx-auto mb-16 p-8 sm:p-12 rounded-3xl bg-[#f8f8f8] border border-[#e7e7e9] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e7e7e9] text-xs font-bold text-[#ea4c89]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tham gia cộng đồng thiết kế</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-[#0d0c22] tracking-tight">
            Tìm kiếm nhà thiết kế & tác phẩm tiếp theo cho bạn
          </h3>
          <p className="text-sm text-[#6e6d7a] max-w-xl">
            Khám phá hàng triệu tác phẩm độc bản, hồ sơ định danh chuẩn xác và kết nối trực tiếp với các xưởng mộc, nghệ nhân hàng đầu.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={onOpenCreate}
            className="px-6 py-3 rounded-full bg-[#0d0c22] hover:bg-[#565564] text-white text-sm font-bold transition-all shadow-xs cursor-pointer"
          >
            Đăng tải tác phẩm
          </button>
          <button 
            onClick={() => onSelectCategory && onSelectCategory('all')}
            className="px-6 py-3 rounded-full bg-white hover:bg-[#f3f3f4] border border-[#e7e7e9] text-[#0d0c22] text-sm font-bold transition-all cursor-pointer"
          >
            Khám phá tất cả
          </button>
        </div>
      </div>

      {/* Main 5-Column Directory (Monos in Dribbble Structure) */}
      <div className="max-w-[1720px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 pb-16 border-b border-[#f3f3f4]">
        {/* Brand Column */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-3xl font-black tracking-tight text-[#0d0c22]">
              monos
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ea4c89] mt-2" />
          </div>

          <p className="text-sm text-[#6e6d7a] leading-relaxed max-w-sm">
            Monos là cộng đồng tạp chí & mạng xã hội lưu bạ đồ vật hàng đầu dành cho các nhà thiết kế, xưởng mộc và nghệ nhân chia sẻ tác phẩm, xây dựng hồ sơ định danh và kết nối hợp tác.
          </p>

          <div className="flex items-center gap-3 text-[#0d0c22]">
            <a href="#monos" className="w-8 h-8 rounded-full bg-[#f8f8f8] hover:bg-[#f3f3f4] flex items-center justify-center transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#f8f8f8] hover:bg-[#f3f3f4] flex items-center justify-center transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#f8f8f8] hover:bg-[#f3f3f4] flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#f8f8f8] hover:bg-[#f3f3f4] flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 1: For designers */}
        <div className="space-y-3 text-sm">
          <h4 className="font-bold text-[#0d0c22] text-sm">Dành cho nhà thiết kế</h4>
          <ul className="space-y-2 text-[#6e6d7a] text-xs font-medium">
            <li><a href="#pro" className="hover:text-[#0d0c22] transition-colors">Nâng cấp Monos PRO</a></li>
            <li><a href="#explore" className="hover:text-[#0d0c22] transition-colors">Khám phá tác phẩm</a></li>
            <li><a href="#blog" className="hover:text-[#0d0c22] transition-colors">Tạp chí đồ vật</a></li>
            <li><a href="#scan" className="hover:text-[#0d0c22] transition-colors">Scan Pattern AI</a></li>
            <li><a href="#groups" className="hover:text-[#0d0c22] transition-colors">Cộng đồng mộng mộc</a></li>
            <li><a href="#code" className="hover:text-[#0d0c22] transition-colors">Quy tắc cộng đồng</a></li>
          </ul>
        </div>

        {/* Column 2: Hire designers */}
        <div className="space-y-3 text-sm">
          <h4 className="font-bold text-[#0d0c22] text-sm">Tuyển dụng & Hợp tác</h4>
          <ul className="space-y-2 text-[#6e6d7a] text-xs font-medium">
            <li><a href="#post-job" className="hover:text-[#0d0c22] transition-colors">Đặt hàng chế tác</a></li>
            <li><a href="#post-freelance" className="hover:text-[#0d0c22] transition-colors">Hợp tác xưởng mộc</a></li>
            <li><a href="#search-designers" className="hover:text-[#0d0c22] transition-colors">Tìm kiếm KTS & Nghệ nhân</a></li>
            <li className="pt-2 text-[11px] font-bold text-[#9e9ea7] uppercase tracking-wider">Thương hiệu đồng hành</li>
            <li className="text-[#6e6d7a]">B+ Furniture • KTS Hoàng Vũ • Mộng Mộc Studio</li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="space-y-3 text-sm">
          <h4 className="font-bold text-[#0d0c22] text-sm">Monos Platform</h4>
          <ul className="space-y-2 text-[#6e6d7a] text-xs font-medium">
            <li><a href="#about" className="hover:text-[#0d0c22] transition-colors">Về Monos</a></li>
            <li><a href="#careers" className="hover:text-[#0d0c22] transition-colors">Cơ hội nghề nghiệp</a></li>
            <li><a href="#support" className="hover:text-[#0d0c22] transition-colors">Hỗ trợ khách hàng</a></li>
            <li><a href="#media" className="hover:text-[#0d0c22] transition-colors">Media kit & Nhận diện</a></li>
            <li><a href="#testimonials" className="hover:text-[#0d0c22] transition-colors">Cảm nhận người dùng</a></li>
            <li><a href="#api" className="hover:text-[#0d0c22] transition-colors">Hạ tầng Monos API</a></li>
            <li><a href="#privacy" className="hover:text-[#0d0c22] transition-colors">Chính sách bảo mật</a></li>
          </ul>
        </div>

        {/* Column 4: Directories & Resources */}
        <div className="space-y-3 text-sm">
          <h4 className="font-bold text-[#0d0c22] text-sm">Tài nguyên & Lưu bạ</h4>
          <ul className="space-y-2 text-[#6e6d7a] text-xs font-medium">
            <li><a href="#freelance" className="hover:text-[#0d0c22] transition-colors">Cẩm nang xưởng chế tác</a></li>
            <li><a href="#portfolio" className="hover:text-[#0d0c22] transition-colors">Hồ sơ định danh MNS</a></li>
            <li><a href="#education" className="hover:text-[#0d0c22] transition-colors">Khóa học kỹ thuật mộc</a></li>
            <li><a href="#trends" className="hover:text-[#0d0c22] transition-colors">Xu hướng vật liệu 2026</a></li>
            <li><a href="#monos" className="hover:text-[#0d0c22] transition-colors font-semibold text-[#ea4c89]">Bảo hộ kiểu dáng đồ vật</a></li>
            <li><a href="#scan" className="hover:text-[#0d0c22] transition-colors">Scan Pattern Engine</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Shot Counter Bar */}
      <div className="max-w-[1720px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e6d7a]">
        <div>
          © 2026 Monos Platform. Bảo lưu mọi quyền. Hạ tầng lưu bạ & tạp chí đồ vật Việt Nam.
        </div>

        <div className="flex items-center gap-2 text-xs text-[#0d0c22]">
          <span className="font-bold text-sm">22,584,109</span>
          <span className="text-[#6e6d7a]">tác phẩm lưu bạ trên Monos</span>
          <span className="w-2 h-2 rounded-full bg-[#ea4c89]" />
        </div>
      </div>
    </footer>
  );
};
