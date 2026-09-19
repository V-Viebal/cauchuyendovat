import type { Metadata } from "next";
import { ArrowUpRight, Link2, ShieldCheck } from "lucide-react";
import { MonosFrame } from "../components/monos-shell";
import ScanPattern from "../components/scan-pattern";

export const metadata: Metadata = {
  title: "Nguồn gốc & Scan Pattern — Monos",
  description: "Theo dõi nguồn tham chiếu và đối chiếu một sản phẩm với archive thiết kế của Monos.",
};

export default function ProvenancePage() {
  return (
    <MonosFrame active="provenance">
      <section className="route-hero route-hero-provenance">
        <div>
          <div className="eyebrow muted"><Link2 size={14} /> Origin / Provenance</div>
          <h1>Biết một món đồ<br /><em>đến từ đâu.</em></h1>
        </div>
        <p>
          Nguồn gốc không phải một chiếc tem. Đó là chuỗi câu hỏi, nguồn tham chiếu và trạng thái xác minh được giữ lại cùng hồ sơ.
        </p>
      </section>

      <ScanPattern />

      <section className="section-pad route-context-section route-provenance-note">
        <div className="route-section-label"><ShieldCheck size={14} /> Evidence first</div>
        <div className="route-context-grid">
          <h2>Kết quả “chưa thấy”<br /><em>không phải là kết luận.</em></h2>
          <div>
            <p>Scan Pattern hiện đối chiếu với archive nội bộ Monos. Để kiểm tra rộng hơn, hồ sơ cần thêm ảnh, nguồn tham chiếu bên ngoài và thông tin thiết kế.</p>
            <a className="dark-button" href="/feed">Theo dõi cập nhật <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
    </MonosFrame>
  );
}
