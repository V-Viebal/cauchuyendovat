import type { Metadata } from "next";
import { ArrowUpRight, Beaker } from "lucide-react";
import MaterialLibrary from "../components/material-library";
import { MonosFrame } from "../components/monos-shell";

export const metadata: Metadata = {
  title: "Thư viện vật liệu — Monos",
  description: "Thư viện vật liệu cho furniture design: đặc tính, ứng dụng, nguồn tham chiếu và trạng thái xác minh.",
};

export default function MaterialsPage() {
  return (
    <MonosFrame active="materials">
      <section className="route-hero route-hero-materials">
        <div>
          <div className="eyebrow muted"><Beaker size={14} /> Material Library</div>
          <h1>Vật liệu<br /><em>có câu chuyện.</em></h1>
        </div>
        <div>
          <p>Không chỉ là bảng màu. Mỗi vật liệu được đọc qua cách nó được chọn, gia công, chạm vào và đi vào một món đồ thật.</p>
          <a className="text-button" href="/factories">Tìm xưởng theo năng lực <ArrowUpRight size={16} /></a>
        </div>
      </section>
      <section className="section-pad route-section">
        <MaterialLibrary />
      </section>
    </MonosFrame>
  );
}
