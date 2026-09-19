import type { Metadata } from "next";
import { ArrowUpRight, UsersRound } from "lucide-react";
import DesignerDirectory from "../components/designer-directory";
import { MonosFrame } from "../components/monos-shell";

export const metadata: Metadata = {
  title: "Cộng đồng Designer — Monos",
  description: "Cộng đồng designer, material researcher và những người đưa furniture design từ ý tưởng vào đời sống.",
};

export default function DesignersPage() {
  return (
    <MonosFrame active="designers">
      <section className="route-hero route-hero-designers">
        <div>
          <div className="eyebrow muted"><UsersRound size={14} /> Furniture Designer Community</div>
          <h1>Những người đứng sau<br /><em>bản vẽ đầu tiên.</em></h1>
        </div>
        <p>
          Một cộng đồng được nối bằng đồ vật: designer, studio, material researcher và những người đang tìm partner để đưa ý tưởng thành sản phẩm thật.
        </p>
      </section>

      <section className="section-pad route-section route-designer-section">
        <div className="route-section-label">Find your people</div>
        <div className="designer-intro-grid">
          <h2>Không chỉ là danh bạ.<br /><em>Là điểm nối để làm việc.</em></h2>
          <p>Khám phá theo loại hồ sơ — cá nhân hoặc công ty — rồi đi sâu vào chuyên môn, vật liệu, không gian và năng lực prototype. Mỗi hồ sơ có thể nối với một câu chuyện, một nhà máy hoặc một brief đang mở.</p>
        </div>
        <DesignerDirectory />
      </section>

      <section className="section-pad designer-bridge">
        <div className="route-section-label">Keep the story moving</div>
        <div className="route-context-grid">
          <h2>Designer profile là điểm bắt đầu.<br /><em>Đồ vật là nơi gặp nhau.</em></h2>
          <div>
            <p>Monos ưu tiên những hồ sơ có liên hệ với đồ vật, vật liệu, quy trình và nguồn tham chiếu rõ ràng — để cộng đồng phát triển cùng chất lượng của archive.</p>
            <a className="dark-button" href="/feed#feed-designer">Theo dõi cập nhật Designer <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
    </MonosFrame>
  );
}
