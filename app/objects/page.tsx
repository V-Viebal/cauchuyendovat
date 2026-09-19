import type { Metadata } from "next";
import { ArrowUpRight, FileCheck2, Link2, ShieldCheck, Users } from "lucide-react";
import { MonosFrame } from "../components/monos-shell";
import ObjectDirectory from "../components/object-directory";
import { timeline } from "../monos-data";

export const metadata: Metadata = {
  title: "Danh bạ đồ vật — Monos",
  description: "Danh bạ Object Profile của Monos, bắt đầu với hồ sơ mở của Cloudy.",
};

export default function ObjectsPage() {
  return (
    <MonosFrame active="objects">
      <section className="route-hero route-hero-objects">
        <div>
          <div className="eyebrow muted"><FileCheck2 size={14} /> Object Directory</div>
          <h1>Danh bạ<br /><em>đồ vật.</em></h1>
        </div>
        <p>Khám phá những món đồ đang có hồ sơ trong Monos — từ thiết kế, vật liệu, nhà máy đến nơi chúng bước vào đời sống.</p>
      </section>

      <ObjectDirectory />

      <section className="section-pad object-feature-section" id="cloudy-profile">
        <div className="object-feature-grid">
          <div className="object-feature-copy">
            <div className="eyebrow muted"><FileCheck2 size={14} /> Object Profile / 001</div>
            <h2>Cloudy<span className="route-title-dot">.</span></h2>
            <p>Một chiếc ghế có hình dáng như một đám mây. Nhưng để hiểu Cloudy, hình dáng chỉ là điểm bắt đầu.</p>
            <a className="dark-button" href="#cloudy-details">Mở hồ sơ Cloudy <ArrowUpRight size={16} /></a>
          </div>
          <div className="route-object-cover">
            <img src="/monos-chair-study.png" alt="Nghiên cứu hình khối của chiếc ghế Cloudy" />
            <span>Visual study / Không phải ảnh sản phẩm</span>
          </div>
        </div>
      </section>

      <section className="profile-section section-pad route-profile-section" id="cloudy-details">
        <div className="profile-topline">
          <div className="eyebrow light"><FileCheck2 size={14} /> Hồ sơ đang mở</div>
          <span className="verified-pill"><span /> Dữ liệu theo trạng thái xác minh</span>
        </div>
        <div className="profile-layout">
          <div className="profile-intro">
            <span className="profile-index">01 / 10</span>
            <h2>Cloudy<span className="dot-mark">.</span></h2>
            <div className="profile-credits">
              <div><span>Brand</span><strong>B+</strong></div>
              <div><span>Object type</span><strong>Lounge chair</strong></div>
              <div><span>Origin</span><strong>Vietnam</strong></div>
            </div>
            <a className="light-button" href="/provenance">Xem nguồn gốc <ArrowUpRight size={16} /></a>
          </div>

          <div className="profile-timeline" aria-label="Timeline Cloudy">
            <div className="timeline-line" />
            {timeline.map((item, index) => (
              <div className={`timeline-item ${index === 0 ? "is-current" : ""}`} key={item.index}>
                <div className="timeline-marker">{item.index}</div>
                <div className="timeline-content">
                  <div className="timeline-label"><span>{item.label}</span><span>{item.state}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="profile-bottomline">
          <span><ShieldCheck size={15} /> Mỗi dữ liệu có một trạng thái xác minh</span>
          <span><Link2 size={15} /> Nguồn tham chiếu được gắn vào hồ sơ</span>
          <span><Users size={15} /> Cộng đồng có thể tiếp tục đóng góp</span>
        </div>
      </section>

      <section className="section-pad route-context-section">
        <div className="route-section-label">What remains open</div>
        <div className="route-context-grid">
          <h2>Hồ sơ tốt không che đi<br /><em>những phần chưa biết.</em></h2>
          <p>Monos giữ lại những khoảng trống để designer, brand, nhà máy và người sử dụng có thể bổ sung dữ liệu bằng nguồn tham chiếu rõ ràng.</p>
        </div>
      </section>
    </MonosFrame>
  );
}
