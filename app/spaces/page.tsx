import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import SpaceDirectory from "../components/space-directory";
import { MonosFrame } from "../components/monos-shell";

export const metadata: Metadata = {
  title: "Không gian — Monos",
  description: "Những không gian nơi furniture rời catalogue và tiếp tục sống cùng con người.",
};

export default function SpacesPage() {
  return (
    <MonosFrame active="spaces">
      <section className="route-hero route-hero-spaces">
        <div>
          <div className="eyebrow muted"><MapPin size={14} /> Place / Space Profile</div>
          <h1>Đồ vật sống<br /><em>ở đâu?</em></h1>
        </div>
        <p>
          Không gian cho thấy furniture sau khi rời khỏi catalogue: nó được đặt ở đâu, được sử dụng thế nào và kết nối với đời sống ra sao.
        </p>
      </section>

      <section className="section-pad route-section route-space-section">
        <div className="route-section-label">Furniture in use</div>
        <div className="space-intro-grid">
          <h2>Place không chỉ là<br /><em>một địa chỉ.</em></h2>
          <p>Mỗi hồ sơ không gian nối đồ vật với bối cảnh thật — nhà ở, hospitality, public space — và mở thêm một lớp dữ liệu cho Object Profile.</p>
        </div>
        <SpaceDirectory />
      </section>

      <section className="section-pad space-bridge">
        <div className="route-section-label">The object in context</div>
        <div className="route-context-grid">
          <h2>Một món đồ được hiểu rõ hơn<br /><em>khi có nơi để sống.</em></h2>
          <div>
            <p>Không gian có thể đóng góp hình ảnh, câu chuyện sử dụng và những thay đổi xảy ra với đồ vật theo thời gian.</p>
            <a className="dark-button" href="/feed">Theo dõi Feed <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
    </MonosFrame>
  );
}
