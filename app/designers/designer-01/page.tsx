import type { Metadata } from "next";
import {
  ArrowUpRight,
  BadgeCheck,
  Box,
  Building2,
  Factory,
  FileCheck2,
  Layers3,
  MapPin,
  PencilRuler,
  UserRound,
  Waypoints,
} from "lucide-react";
import { MonosFrame } from "../../components/monos-shell";

export const metadata: Metadata = {
  title: "Designer 01 — Furniture Designer — Monos",
  description: "Hồ sơ cá nhân của một furniture designer tại Hồ Chí Minh: chuyên môn, quy trình, đồ vật và mạng lưới cộng tác.",
};

const process = [
  ["01", "Quan sát", "Tìm nhu cầu từ tư thế ngồi, tỷ lệ cơ thể và bối cảnh sử dụng thật."],
  ["02", "Vẽ & thử", "Phát triển hình dáng qua sketch, mock-up và những phương án bị loại."],
  ["03", "Prototype", "Làm việc với xưởng để kiểm tra kết cấu, độ êm, vật liệu và khả năng sản xuất."],
  ["04", "Đi vào đời sống", "Theo dõi món đồ sau sản xuất: cách dùng, dấu vết và những lần điều chỉnh."],
];

export default function DesignerProfilePage() {
  return (
    <MonosFrame active="designers">
      <article className="designer-profile-page">
        <header className="designer-profile-hero section-pad">
          <div className="designer-profile-identity">
            <div className="designer-profile-photo" aria-label="Ảnh hồ sơ đang chờ xác minh">
              <UserRound size={54} strokeWidth={1.25} />
              <span>D01</span>
            </div>
            <div>
              <div className="eyebrow muted"><UserRound size={14} /> Community Profile / 001</div>
              <h1>Designer 01<span>.</span></h1>
              <p>Furniture designer tập trung vào seating, tỷ lệ cơ thể và những hình dáng có thể bước vào đời sống.</p>
            </div>
          </div>
          <a className="designer-profile-back card-link" href="/designers"><ArrowUpRight size={15} /> Về danh bạ Designer</a>

          <aside className="designer-profile-status">
            <span className="designer-status"><span /> Đang mở hợp tác</span>
            <dl>
              <div><dt>Loại hồ sơ</dt><dd>Cá nhân</dd></div>
              <div><dt>Chuyên môn</dt><dd>Furniture Designer</dd></div>
              <div><dt>Địa điểm</dt><dd>Hồ Chí Minh · Việt Nam</dd></div>
              <div><dt>Xác minh</dt><dd>Hồ sơ mẫu</dd></div>
            </dl>
          </aside>
        </header>

        <section className="designer-profile-snapshot" aria-label="Tóm tắt hồ sơ Designer">
          <div><span>Loại hồ sơ</span><strong>Cá nhân</strong><small>Community profile</small></div>
          <div><span>Chuyên môn</span><strong>Furniture</strong><small>Seating · Lounge chair</small></div>
          <div><span>Đồ vật liên quan</span><strong>01</strong><small>Cloudy · đang xác minh</small></div>
          <div><span>Mạng lưới</span><strong>04 điểm nối</strong><small>Brand · xưởng · vật liệu · không gian</small></div>
        </section>

        <section className="designer-profile-statement section-pad">
          <span>Góc nhìn thiết kế</span>
          <blockquote>“Một chiếc ghế tốt không chỉ trông đúng. Nó phải tìm được cách ở lại trong đời sống của người dùng.”</blockquote>
          <p>Trích dẫn định hướng đang chờ xác nhận trực tiếp từ designer.</p>
        </section>

        <section className="designer-profile-process section-pad">
          <div className="designer-profile-section-head">
            <div className="eyebrow muted"><PencilRuler size={14} /> Design Process</div>
            <h2>Từ quan sát đến<br /><em>một món đồ có thể sống.</em></h2>
          </div>
          <div className="designer-process-grid">
            {process.map(([number, title, body]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="designer-profile-work section-pad">
          <div className="designer-profile-section-head">
            <div className="eyebrow muted"><Box size={14} /> Object Connection</div>
            <h2>Đồ vật là nơi<br /><em>hồ sơ trở nên có nghĩa.</em></h2>
          </div>
          <div className="designer-related-object">
            <img src="https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-cloudy-thump2" alt="Ghế Cloudy của B+ Furniture" />
            <div>
              <span>Object Profile / 001</span>
              <h3>Cloudy</h3>
              <p>Mối liên hệ tác giả của Cloudy chưa được xác minh. Hồ sơ được đặt cạnh nhau để mở câu hỏi, không phải để gán quyền tác giả.</p>
              <div className="designer-object-meta"><strong>B+ Furniture</strong><span>Lounge chair</span><span>Đang xác minh</span></div>
              <a className="card-link" href="/objects#cloudy-profile">Mở Object Profile <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="designer-profile-network section-pad">
          <div className="designer-profile-section-head">
            <div className="eyebrow light"><Waypoints size={14} /> Working Network</div>
            <h2>Một designer không làm việc<br /><em>một mình.</em></h2>
          </div>
          <div className="designer-network-grid">
            <div><Building2 size={22} /><span>Brand</span><strong>B+ Furniture</strong><small>Kết nối qua Cloudy · đang xác minh</small></div>
            <div><Factory size={22} /><span>Nhà máy</span><strong>Chưa công bố</strong><small>Cần nguồn về prototype và sản xuất</small><a href="/factories">Mở danh bạ nhà máy <ArrowUpRight size={14} /></a></div>
            <div><Layers3 size={22} /><span>Vật liệu</span><strong>Upholstery</strong><small>Gỗ · mút · vải · thép</small><a href="/materials">Mở thư viện vật liệu <ArrowUpRight size={14} /></a></div>
            <div><MapPin size={22} /><span>Không gian</span><strong>Office lounge</strong><small>Furniture in Use · Hồ Chí Minh</small><a href="/spaces">Mở danh bạ không gian <ArrowUpRight size={14} /></a></div>
          </div>
        </section>

        <section className="designer-profile-evidence section-pad">
          <div>
            <div className="eyebrow muted"><BadgeCheck size={14} /> Verification</div>
            <h2>Hồ sơ mở,<br /><em>không phải kết luận.</em></h2>
          </div>
          <div className="designer-evidence-copy">
            <p>Mỗi thông tin trong hồ sơ designer được tách theo trạng thái: đã xác minh, do cá nhân cung cấp, cộng đồng đóng góp hoặc đang chờ nguồn.</p>
            <div><FileCheck2 size={16} /><span>Ảnh chân dung, tên thật, portfolio và vai trò trong từng sản phẩm vẫn đang chờ xác minh.</span></div>
            <a className="dark-button" href="/feed#feed-designer">Theo dõi hồ sơ <ArrowUpRight size={16} /></a>
          </div>
        </section>
      </article>
    </MonosFrame>
  );
}
