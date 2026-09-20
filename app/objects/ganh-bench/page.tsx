import type { Metadata } from "next";
import { ArrowUpRight, FileCheck2, Factory, Layers3, MapPin, Ruler, UserRound } from "lucide-react";
import { MonosFrame } from "../../components/monos-shell";

export const metadata: Metadata = {
  title: "Gánh Bench — Object Profile — Monos",
  description: "Hồ sơ Gánh Bench của Vi Văn Trường: thiết kế, vật liệu, thi công và các nguồn tham chiếu HMA 2026.",
};

const layers = [
  ["01", "Object Story", "Một chiếc ghế băng lấy hình ảnh đòn gánh làm điểm khởi đầu, nối vẻ thanh mảnh với một cấu trúc gỗ vững chãi."],
  ["02", "Designer", "Vi Văn Trường — một hồ sơ designer cá nhân được ghi trong dossier HMA 2026."],
  ["03", "How it’s made", "Mặt ghế, khung chân, chốt mộng và các chi tiết vát cong được mô tả trong hồ sơ thiết kế."],
  ["04", "Vật liệu", "Gỗ là ngôn ngữ chính; TAVICO được ghi nhận ở vai trò tài trợ vật liệu."],
  ["05", "Nguồn gốc", "Nguồn chính hiện có: dossier HMA 2026; trạng thái đang được Monos đối chiếu thêm."],
  ["06", "Đời sống thật", "Chưa có dữ liệu công khai về không gian sử dụng hoặc các dấu vết sau khi bàn giao."],
  ["07", "Kết nối ngành", "Designer ↔ First Maker ↔ TAVICO — một chuỗi liên hệ đã xuất hiện trong hồ sơ, cần tiếp tục xác minh."],
];

export default function GanhBenchPage() {
  return (
    <MonosFrame active="objects">
      <article className="ganh-profile-page">
        <section className="ganh-profile-hero">
          <div className="ganh-profile-copy">
            <div className="eyebrow muted"><FileCheck2 size={14} /> Object Profile / 002</div>
            <span className="ganh-profile-status"><span /> Theo dossier HMA 2026</span>
            <h1>Gánh<br /><em>Bench.</em></h1>
            <p>Một chiếc ghế băng bắt đầu từ dáng đòn gánh — nơi đường cong của một ký ức văn hoá được chuyển thành mặt ghế, khung chân và những điểm chạm bằng gỗ.</p>
            <div className="ganh-profile-meta"><span><UserRound size={15} /> Vi Văn Trường</span><span><Factory size={15} /> First Maker · thi công</span><span><Ruler size={15} /> 2200 × 400 × 450 mm</span></div>
          </div>
          <figure className="ganh-profile-hero-image"><img src="/ganh-bench-wide.jpg" alt="Gánh Bench — ảnh tổng thể" /><figcaption>Gánh Bench / HMA 2026</figcaption></figure>
        </section>

        <section className="ganh-profile-facts">
          <div><span>Designer</span><strong>Vi Văn Trường</strong><small>Hồ sơ cá nhân</small></div>
          <div><span>Tài trợ vật liệu</span><strong>TAVICO</strong><small>Theo dossier</small></div>
          <div><span>Thi công</span><strong>First Maker</strong><small>Đang xác minh</small></div>
          <div><span>Kích thước</span><strong>2200 × 400 × 450</strong><small>mm</small></div>
        </section>

        <section className="ganh-profile-designer section-pad">
          <img src="/vi-van-truong.jpg" alt="Vi Văn Trường" />
          <div><div className="eyebrow muted"><UserRound size={14} /> Designer connection</div><h2>Người đứng sau<br /><em>Gánh Bench.</em></h2><p>Vi Văn Trường được dossier HMA 2026 ghi nhận là designer của Gánh Bench. Đây là ảnh hồ sơ được cung cấp cùng bộ tư liệu; các thông tin mở rộng về quá trình thiết kế vẫn đang được Monos tiếp tục xác minh.</p><a className="card-link" href="/designers/vi-van-truong">Mở hồ sơ Vi Văn Trường <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="ganh-profile-story section-pad">
          <div className="ganh-story-image"><img src="/ganh-bench-detail.jpg" alt="Chi tiết kết cấu gỗ của Gánh Bench" /><span>Chi tiết kết cấu / gỗ</span></div>
          <div className="ganh-story-copy"><div className="eyebrow muted"><Layers3 size={14} /> Object Story</div><h2>Một dáng đòn gánh<br /><em>đi vào một chiếc ghế.</em></h2><p>Gánh Bench được mô tả như một khúc tri ân vẻ đẹp thanh mảnh của đôi vai gầy và nội lực bền bỉ của người phụ nữ. Từ đó, đòn gánh trở thành mặt ghế: một đường cong nhẹ, được giữ lại bởi hai thanh chắn nhỏ.</p><p>Ở phần khung, chốt mộng và hệ chân thanh mảnh tạo nên cảm giác mặt ghế đang lơ lửng. Những chi tiết vát cong gợi liên tưởng đến đường cong của mái đao trong kiến trúc đình chùa Việt Nam.</p></div>
        </section>

        <section className="ganh-profile-layers section-pad"><div className="eyebrow muted"><MapPin size={14} /> Seven connected layers</div><h2>Một món đồ<br /><em>không đứng một mình.</em></h2><div className="ganh-layer-grid">{layers.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

        <section className="ganh-profile-source section-pad"><div><div className="eyebrow light"><FileCheck2 size={14} /> Source status</div><h2>Hồ sơ mở,<br /><em>nguồn đã ghi rõ.</em></h2></div><div><p>Thông tin chính được lấy từ hồ sơ HMA 2026 do người dùng cung cấp. Monos giữ nhãn “theo dossier” cho tới khi có thêm bằng chứng trực tiếp từ designer, First Maker hoặc TAVICO.</p><div className="ganh-source-links"><a className="light-button" href="/refs/ganh-bench-hma-2026.pdf" target="_blank" rel="noreferrer">Mở dossier HMA <ArrowUpRight size={16} /></a><a className="light-button" href="/designers/vi-van-truong">Mở hồ sơ Designer <ArrowUpRight size={16} /></a><a className="light-button" href="/factories/factory-04">Mở hồ sơ First Maker <ArrowUpRight size={16} /></a></div></div></section>
      </article>
    </MonosFrame>
  );
}
