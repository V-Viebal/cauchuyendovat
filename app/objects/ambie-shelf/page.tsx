import type { Metadata } from "next";
import { ArrowUpRight, Box, FileCheck2, Factory, Layers3, MapPin, Ruler, UsersRound } from "lucide-react";
import { MonosFrame } from "../../components/monos-shell";

export const metadata: Metadata = {
  title: "Ambie Shelf — Object Profile — Monos",
  description: "Hồ sơ Ambie Shelf của Cao Thị Mai Nguyễn và Daniela Thạch Thảo: cấu tạo mô-đun, vật liệu, nhà máy và nguồn tham chiếu.",
};

const layers = [
  ["01", "Object Story", "Ambie Shelf bắt đầu từ những góc tường dễ bị bỏ qua: một hệ kệ có thể xoay, di chuyển và tự điều chỉnh theo đời sống thật."],
  ["02", "Designer", "Cao Thị Mai Nguyễn và Daniela Thạch Thảo cùng đứng tên trong dossier. Hai hồ sơ cá nhân riêng đang được mở ở trạng thái tạm."],
  ["03", "How it’s made", "Các mặt kệ, trụ đứng, khớp, vòng đỡ và bánh xe tạo thành một hệ mô-đun; bản vẽ kỹ thuật đã ghi rõ các chi tiết lắp ráp chính."],
  ["04", "Vật liệu", "Dossier ghi gỗ lau màu, sắt sơn tĩnh điện, bánh xe nhựa và Sơn Protego là những lớp vật liệu của Ambie Shelf."],
  ["05", "Nguồn gốc", "Nguồn chính hiện có là dossier Ambie Shelf do người dùng cung cấp. Tân Thành được ghi nhận là nhà máy; địa điểm cụ thể đang xác minh."],
  ["06", "Đời sống thật", "Ảnh có sự xuất hiện của hai designer bên cạnh sản phẩm. Không gian sử dụng dài hạn và dấu vết sau bàn giao chưa được ghi nhận."],
  ["07", "Kết nối ngành", "Cao Thị Mai Nguyễn ↔ Daniela Thạch Thảo ↔ Tân Thành ↔ Sơn Protego — chuỗi liên hệ của một sản phẩm đang được hoàn thiện dữ liệu."],
];

const gallery = [
  ["/ambie-shelf-hero.jpg", "Phối cảnh Ambie Shelf / ảnh hồ sơ"],
  ["/ambie-shelf-context.jpg", "Ambie Shelf cùng hai designer / ảnh nhóm"],
  ["/ambie-shelf-detail.jpg", "Chi tiết mặt kệ và khớp"],
  ["/ambie-shelf-wheel.jpg", "Chi tiết chân và bánh xe"],
];

export default function AmbieShelfPage() {
  return (
    <MonosFrame active="objects">
      <article className="ganh-profile-page ambie-profile-page">
        <section className="ganh-profile-hero">
          <div className="ganh-profile-copy">
            <div className="eyebrow muted"><FileCheck2 size={14} /> Object Profile / 003</div>
            <span className="ganh-profile-status"><span /> Theo hồ sơ cung cấp · đang xác minh</span>
            <h1>Ambie<br /><em>Shelf.</em></h1>
            <p>Một hệ kệ mô-đun bắt đầu từ câu hỏi rất đời thường: làm thế nào để một góc tường khó bài trí có thể thay đổi theo người sống trong đó?</p>
            <div className="ganh-profile-meta"><span><UsersRound size={15} /> Cao Thị Mai Nguyễn · Daniela Thạch Thảo</span><span><Factory size={15} /> Tân Thành · sản xuất</span><span><Ruler size={15} /> 2000 × 250 × 870 mm</span></div>
          </div>
          <figure className="ganh-profile-hero-image"><img src="/ambie-shelf-hero.jpg" alt="Ambie Shelf — hệ kệ mô-đun" /><figcaption>Ambie Shelf / ảnh hồ sơ cung cấp</figcaption></figure>
        </section>

        <section className="ganh-profile-facts">
          <div><span>Designer</span><strong>2 hồ sơ cá nhân</strong><small>Cao Thị Mai Nguyễn · Daniela Thạch Thảo</small></div>
          <div><span>Nhà máy</span><strong>Tân Thành</strong><small>Thông tin do người dùng cung cấp</small></div>
          <div><span>Vật liệu</span><strong>Sơn Protego</strong><small>Đang xác minh quy cách</small></div>
          <div><span>Kích thước</span><strong>2000 × 250 × 870</strong><small>mm · theo dossier</small></div>
        </section>

        <section className="ambie-designer-pair section-pad">
          <div className="ambie-pair-image"><img src="/ambie-designer-pair.jpg" alt="Cao Thị Mai Nguyễn và Daniela Thạch Thảo — ảnh nhóm tạm" /><span>Ảnh nhóm tạm · chờ profile riêng</span></div>
          <div className="ambie-pair-copy"><div className="eyebrow muted"><UsersRound size={14} /> Designer connection</div><h2>Hai người,<br /><em>một hệ kệ.</em></h2><p>Dossier Ambie Shelf ghi Cao Thị Mai Nguyễn và Daniela Thạch Thảo cùng là designer. Monos đã tách thành hai hồ sơ riêng để mỗi người có thể bổ sung ảnh, bio, quá trình làm việc và các liên kết nghề nghiệp của mình.</p><div className="ambie-designer-links"><a className="card-link" href="/designers/cao-thi-mai-nguyen">Mở hồ sơ Cao Thị Mai Nguyễn <ArrowUpRight size={15} /></a><a className="card-link" href="/designers/daniela-thach-thao">Mở hồ sơ Daniela Thạch Thảo <ArrowUpRight size={15} /></a></div></div>
        </section>

        <section className="ambie-gallery section-pad">
          <div className="eyebrow muted"><Box size={14} /> Object study / image archive</div>
          <h2>Một món đồ<br /><em>thay đổi theo góc nhìn.</em></h2>
          <div className="ambie-gallery-grid">{gallery.map(([src, alt], index) => <figure key={src} className={index === 0 ? "ambie-gallery-main" : ""}><img src={src} alt={alt} loading={index === 0 ? "eager" : "lazy"} /><figcaption>{alt}</figcaption></figure>)}</div>
        </section>

        <section className="ganh-profile-story section-pad">
          <div className="ganh-story-image"><img src="/ambie-shelf-detail.jpg" alt="Chi tiết mặt kệ gỗ, trụ xanh và vòng đỡ đỏ" /><span>Chi tiết kết cấu / khớp</span></div>
          <div className="ganh-story-copy"><div className="eyebrow muted"><Layers3 size={14} /> Object Story</div><h2>Khi chiếc kệ<br /><em>biết di chuyển.</em></h2><p>Ý tưởng của Ambie Shelf xuất phát từ những góc tường dễ bị bỏ qua hoặc khó bài trí. Thay vì coi kệ là một mặt phẳng cố định, thiết kế đưa vào đó khả năng xoay khớp và di chuyển.</p><p>Hồ sơ cũng nối cơ chế ấy với xích xe và ván trượt: những hình ảnh của chuyển động được chuyển thành các mô-đun, trụ đứng và bánh xe có thể làm mới bố cục trong không gian.</p></div>
        </section>

        <section className="ganh-profile-layers section-pad"><div className="eyebrow muted"><MapPin size={14} /> Seven connected layers</div><h2>Một món đồ<br /><em>không đứng một mình.</em></h2><div className="ganh-layer-grid">{layers.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

        <section className="ganh-profile-source section-pad"><div><div className="eyebrow light"><FileCheck2 size={14} /> Source status</div><h2>Hồ sơ mở,<br /><em>nguồn đã ghi rõ.</em></h2></div><div><p>Thông tin chính được lấy từ dossier Ambie Shelf do người dùng cung cấp. Monos giữ nhãn “theo hồ sơ cung cấp” cho tới khi có thêm xác nhận trực tiếp từ hai designer, Tân Thành và nhà cung cấp Sơn Protego.</p><div className="ganh-source-links"><a className="light-button" href="/refs/ambie-shelf.pdf" target="_blank" rel="noreferrer">Mở dossier Ambie Shelf <ArrowUpRight size={16} /></a><a className="light-button" href="/factories/factory-05">Mở hồ sơ Tân Thành <ArrowUpRight size={16} /></a><a className="light-button" href="/materials">Xem Sơn Protego trong thư viện <ArrowUpRight size={16} /></a></div></div></section>
      </article>
    </MonosFrame>
  );
}
