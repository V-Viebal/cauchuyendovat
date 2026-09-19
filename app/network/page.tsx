import type { Metadata } from "next";
import { ArrowUpRight, ChevronRight, Layers3, MapPin, Sparkles, Users } from "lucide-react";
import { MonosFrame } from "../components/monos-shell";

export const metadata: Metadata = {
  title: "Hành trình — Monos",
  description: "Landing hành trình của đồ vật qua designer, vật liệu, nhà máy và những không gian nơi đồ vật tiếp tục sống.",
};

const networkCards = [
  {
    title: "Designer",
    count: "24 hồ sơ",
    copy: "Những người biến ý tưởng thành hình dáng có thể sống cùng.",
    icon: Sparkles,
    tone: "network-green",
    href: "/designers",
    link: "Xem hồ sơ",
  },
  {
    title: "Material",
    count: "18 nhóm",
    copy: "Vật liệu, kỹ thuật và những dấu vết tạo nên tính cách của đồ vật.",
    icon: Layers3,
    tone: "network-yellow",
    href: "/stories#material-remembers",
    link: "Mở archive",
  },
  {
    title: "Place",
    count: "12 không gian",
    copy: "Furniture trong những không gian thật, sau khi rời khỏi catalogue.",
    icon: MapPin,
    tone: "network-blue",
    href: "/spaces",
    link: "Xem không gian",
  },
];

export default function NetworkPage() {
  return (
    <MonosFrame active="journey">
      <section className="route-hero route-hero-network">
        <div>
          <div className="eyebrow muted"><Users size={14} /> Object Journey / Network</div>
          <h1>Một món đồ<br /><em>kết nối nhiều người.</em></h1>
        </div>
        <p>
          Mạng lưới được hình thành thông qua những đồ vật đã đi qua tay người — từ designer và vật liệu đến nhà máy và không gian sử dụng.
        </p>
      </section>

      <section className="section-pad route-section route-network-section">
        <div className="route-section-label">Hành trình không chỉ là một danh bạ</div>
        <div className="network-grid route-network-grid">
          {networkCards.map((card) => {
            const Icon = card.icon;
            return (
              <article className={`network-card ${card.tone}`} key={card.title}>
                <div className="network-icon"><Icon size={22} strokeWidth={1.7} /></div>
                <div className="network-card-top"><span>{card.count}</span><ArrowUpRight size={18} /></div>
                <h2>{card.title}</h2>
                <p>{card.copy}</p>
                <a className="card-link" href={card.href}>{card.link} <ChevronRight size={15} /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-pad route-network-bridge">
        <div className="route-section-label">Theo dõi hành trình</div>
        <div className="route-context-grid">
          <h2>Danh bạ là điểm bắt đầu.<br /><em>Feed là nơi nó tiếp tục sống.</em></h2>
          <div>
            <p>Những cập nhật mới, brief mở và mốc xác minh được đưa về cùng một dòng hoạt động để mạng lưới có thể theo dõi và tiếp tục đóng góp.</p>
            <a className="dark-button" href="/feed">Mở Monos Feed <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
    </MonosFrame>
  );
}
