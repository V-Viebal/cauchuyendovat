import type { Metadata } from "next";
import { ArrowUpRight, Box, FileCheck2, Factory, Layers3, Link2, MapPin, Ruler, ShieldCheck, UserRound } from "lucide-react";
import { MonosFrame } from "../../components/monos-shell";
import { cloudyProduct } from "../../monos-data";

export const metadata: Metadata = {
  title: "Cloudy — Object Profile — Monos",
  description: "Hồ sơ Cloudy của B+ Furniture: thiết kế, vật liệu, sản xuất, đời sống và nguồn tham chiếu.",
};

const layers = [
  ["01", "Object Story", "Cloudy bắt đầu bằng một câu hỏi về cảm giác được ôm: một chiếc lounge chair có hình dáng như một đám mây nhưng cần được hiểu qua cả cấu trúc và đời sống."],
  ["02", "Designer", "Hồ sơ Cloudy hiện ghi nhận B+ Furniture là brand; thông tin designer cá nhân và quá trình phát triển bản vẽ vẫn đang được mở để bổ sung."],
  ["03", "How it’s made", "Các lớp khung, mút, fiber wrap, vải bọc và chân kim loại cùng tạo nên hình khối mềm. File 3D, SketchUp và CAD được nối từ nguồn B+ cung cấp."],
  ["04", "Vật liệu", "Gỗ tự nhiên, mút polyurethane, fiber wrap, vải contract-grade và thép sơn tĩnh điện là các nhóm vật liệu đang có trong hồ sơ."],
  ["05", "Nguồn gốc", "Nguồn chính là trang sản phẩm Cloudy của B+ Furniture và dữ liệu kỹ thuật do brand cung cấp. Một số chi tiết xưởng vẫn chờ xác minh."],
  ["06", "Đời sống thật", "Cloudy đã được ghi nhận trong một không gian văn phòng; hồ sơ tiếp tục mở để bổ sung người dùng, dấu vết sử dụng, sửa chữa và các bối cảnh khác."],
  ["07", "Kết nối ngành", "B+ Furniture ↔ designer ↔ xưởng bọc, gỗ và kim loại ↔ không gian sử dụng — một mạng lưới cần được nối bằng nguồn cụ thể hơn."],
];

export default function CloudyObjectProfile() {
  return (
    <MonosFrame active="objects">
      <article className="ganh-profile-page cloudy-profile-page">
        <section className="ganh-profile-hero">
          <div className="ganh-profile-copy">
            <div className="eyebrow muted"><FileCheck2 size={14} /> Object Profile / 001</div>
            <span className="ganh-profile-status"><span /> Hồ sơ đang mở · dữ liệu theo nguồn</span>
            <h1>Cloudy<span className="cloudy-title-dot">.</span></h1>
            <p>Một chiếc ghế có hình dáng như một đám mây. Nhưng để hiểu Cloudy, hình dáng chỉ là điểm bắt đầu.</p>
            <div className="ganh-profile-meta"><a href="/brands/b-plus"><UserRound size={15} /> B+ Furniture</a><span><Factory size={15} /> Xưởng sản xuất · chưa công bố</span><span><Ruler size={15} /> 850 × 840 × 790 mm</span></div>
          </div>
          <figure className="ganh-profile-hero-image"><img src="https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLOUDY%203.jpg" alt="Cloudy — lounge chair của B+ Furniture" /><figcaption>Cloudy / ảnh sản phẩm B+ Furniture</figcaption></figure>
        </section>

        <section className="ganh-profile-facts">
          <div><span>Brand</span><a href="/brands/b-plus"><strong>B+ Furniture</strong></a><small>Trang sản phẩm chính thức</small></div>
          <div><span>Mã sản phẩm</span><strong>LC060</strong><small>Product ID 76</small></div>
          <div><span>Danh mục</span><strong>Lounge chair</strong><small>Lounge & Relax</small></div>
          <div><span>Kích thước</span><strong>850 × 840 × 790</strong><small>mm · cao mặt ngồi 450 mm</small></div>
        </section>

        <section className="cloudy-profile-intro section-pad">
          <div className="cloudy-profile-intro-copy"><div className="eyebrow muted"><Box size={14} /> Product record / LC060</div><h2>Mềm ở hình,<br /><em>rõ ở cấu trúc.</em></h2><p>{cloudyProduct.description}</p><a className="card-link" href={cloudyProduct.sourceUrl} target="_blank" rel="noreferrer">Mở trang sản phẩm B+ <ArrowUpRight size={15} /></a></div>
          <div className="cloudy-profile-study"><img src="/monos-chair-study.png" alt="Visual study của Cloudy" /><span>Visual study / không phải ảnh sản phẩm</span></div>
        </section>

        <section className="cloudy-profile-gallery section-pad"><div className="eyebrow muted"><Layers3 size={14} /> Image archive</div><h2>Một chiếc ghế<br /><em>qua nhiều lớp nhìn.</em></h2><div className="cloudy-gallery-grid">{cloudyProduct.images.map((image, index) => <figure key={image.url}><img src={image.url} alt={image.alt} loading={index === 0 ? "eager" : "lazy"} /><figcaption>Cloudy / 0{index + 1}</figcaption></figure>)}</div></section>

        <section className="ganh-profile-layers section-pad"><div className="eyebrow muted"><MapPin size={14} /> Seven connected layers</div><h2>Một món đồ<br /><em>không đứng một mình.</em></h2><div className="ganh-layer-grid">{layers.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

        <section className="cloudy-profile-specs section-pad"><div><div className="eyebrow muted"><ShieldCheck size={14} /> Material & specification</div><h2>Dữ liệu kỹ thuật<br /><em>đã được nối.</em></h2></div><div className="cloudy-spec-list">{cloudyProduct.specifications.map((spec) => <div key={spec.label}><strong>{spec.label}</strong><p>{spec.value}</p></div>)}</div></section>

        <section className="ganh-profile-source section-pad"><div><div className="eyebrow light"><FileCheck2 size={14} /> Source status</div><h2>Hồ sơ mở,<br /><em>nguồn đã ghi rõ.</em></h2></div><div><p>Dữ liệu Cloudy được đối chiếu từ trang sản phẩm B+ Furniture và thông tin kỹ thuật do brand cung cấp. Monos giữ trạng thái “đang xác minh” cho những phần chưa có bằng chứng trực tiếp về xưởng, designer cá nhân và đời sống sau bàn giao.</p><div className="ganh-source-links"><a className="light-button" href={cloudyProduct.sourceUrl} target="_blank" rel="noreferrer">Mở nguồn B+ Furniture <ArrowUpRight size={16} /></a><a className="light-button" href="/provenance">Xem nguyên tắc nguồn gốc <ArrowUpRight size={16} /></a><a className="light-button" href="/objects">Quay lại danh bạ đồ vật <ArrowUpRight size={16} /></a></div></div></section>

        <div className="cloudy-profile-footnote section-pad"><Link2 size={15} /> Hồ sơ Cloudy dùng cùng cấu trúc 7 lớp với các object profile khác trong Monos.</div>
      </article>
    </MonosFrame>
  );
}
