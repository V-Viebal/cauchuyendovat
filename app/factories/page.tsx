import type { Metadata } from "next";
import { ArrowUpRight, Factory } from "lucide-react";
import FactoryDirectory from "../components/factory-directory";
import { MonosFrame } from "../components/monos-shell";

export const metadata: Metadata = {
  title: "Nhà máy — Monos",
  description: "Danh bạ năng lực sản xuất, vật liệu và công đoạn hoàn thiện cho furniture design tại Việt Nam.",
};

export default function FactoriesPage() {
  return (
    <MonosFrame active="factories">
      <section className="route-hero route-hero-factories">
        <div>
          <div className="eyebrow muted"><Factory size={14} /> Factory Directory</div>
          <h1>Từ bản vẽ<br /><em>đến sản phẩm thật.</em></h1>
        </div>
        <div>
          <p>
            Danh bạ giúp tìm đúng năng lực cho một prototype, một batch nhỏ hoặc một công đoạn hoàn thiện — theo dữ liệu có thể kiểm chứng.
          </p>
          <div className="route-hero-actions">
            <a className="text-button" href="/#submit">Đề xuất một nhà máy <ArrowUpRight size={16} /></a>
            <a className="text-button" href="/materials">Mở thư viện vật liệu <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="section-pad route-section route-factory-section">
        <FactoryDirectory />
      </section>
    </MonosFrame>
  );
}
