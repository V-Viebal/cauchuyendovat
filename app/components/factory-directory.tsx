"use client";

import { ArrowUpRight, Factory as FactoryIcon, FileCheck2, List, Map, MapPin, Ruler, Sparkles } from "lucide-react";
import { useState } from "react";
import { factoryDirectory, factoryFilters } from "../monos-data";

export default function FactoryDirectory() {
  const [factoryFilter, setFactoryFilter] = useState("Tất cả");
  const [view, setView] = useState<"list" | "map">("list");
  const visibleFactories =
    factoryFilter === "Tất cả"
      ? factoryDirectory
      : factoryDirectory.filter((factory) => factory.filter === factoryFilter);

  return (
    <section className="factory-directory route-directory" id="factory-directory">
      <div className="factory-directory-top">
        <div>
          <div className="eyebrow muted"><FactoryIcon size={14} /> Factory Directory</div>
          <h2 className="route-feature-title">Danh bạ<br /><em>nhà máy.</em></h2>
        </div>
        <p>
          Tìm những đơn vị có thể biến bản vẽ thành sản phẩm thật — theo năng lực, vật liệu và công đoạn sản xuất.
        </p>
      </div>

      <div className="factory-toolbar">
        <span className="factory-count">{visibleFactories.length} hồ sơ đang hiển thị</span>
        <div className="factory-toolbar-controls">
          <div className="factory-filters" role="tablist" aria-label="Lọc danh bạ nhà máy">
            {factoryFilters.map((filter) => (
              <button
                className={`factory-filter ${factoryFilter === filter ? "is-active" : ""}`}
                key={filter}
                type="button"
                role="tab"
                aria-selected={factoryFilter === filter}
                onClick={() => setFactoryFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="factory-view-switch" role="tablist" aria-label="Chế độ xem danh bạ nhà máy">
            <button type="button" className={view === "list" ? "is-active" : ""} aria-selected={view === "list"} onClick={() => setView("list")}><List size={14} /> Danh sách</button>
            <button type="button" className={view === "map" ? "is-active" : ""} aria-selected={view === "map"} onClick={() => setView("map")}><Map size={14} /> Bản đồ</button>
          </div>
        </div>
      </div>

      {view === "list" ? (
        <div className="factory-grid">
          {visibleFactories.map((factory) => {
            const Icon = factory.icon === "factory" ? FactoryIcon : factory.icon === "ruler" ? Ruler : Sparkles;
            return (
              <article className="factory-card" key={factory.id}>
                <div className="factory-card-head">
                  <div className="factory-icon"><Icon size={20} strokeWidth={1.7} /></div>
                  <span className="factory-status"><span /> {factory.status}</span>
                </div>
                <h4>{factory.name}</h4>
                <div className="factory-region"><MapPin size={14} /> {factory.region}</div>
                <p>{factory.capability}</p>
                <div className="factory-tags">
                  {factory.specialties.map((specialty) => <span key={specialty}>{specialty}</span>)}
                </div>
                <a className="card-link" href={`/factories/${factory.id}`}>Mở hồ sơ <ArrowUpRight size={15} /></a>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="factory-map-view">
          <div className="factory-map-canvas" aria-label="Bản đồ khu vực các nhà máy mẫu tại Việt Nam">
            <iframe
              className="factory-google-map"
              title="Google Maps — khu vực các nhà máy mẫu tại Việt Nam"
              src="https://www.google.com/maps?q=Vietnam&hl=vi&z=6&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="factory-map-markers" aria-label="Các khu vực có hồ sơ nhà máy">
              {visibleFactories.map((factory) => {
                const position = factory.id === "factory-03" ? "hanoi" : factory.id === "factory-02" ? "dong-nai" : factory.id === "factory-04" || factory.id === "factory-05" ? "hcmc" : "binh-duong";
                const query = factory.id === "factory-03" ? "Hanoi,Vietnam" : factory.id === "factory-02" ? "Dong Nai,Vietnam" : factory.id === "factory-04" ? "Ho Chi Minh City,Vietnam" : factory.id === "factory-05" ? "Vietnam" : "Binh Duong,Vietnam";
                return (
                  <a
                    className={`factory-map-marker factory-map-marker-${position}`}
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`}
                    target="_blank"
                    rel="noreferrer"
                    key={factory.id}
                    aria-label={`Mở Google Maps tại ${factory.region.split(" · ")[0]}`}
                  >
                    <span className="factory-map-marker-pin"><MapPin size={15} /></span>
                    <span className="factory-map-marker-label"><strong>{factory.id === "factory-05" ? "Tân Thành" : factory.region.split(" · ")[0]}</strong><small>{factory.status}</small></span>
                  </a>
                );
              })}
            </div>
            <div className="factory-google-map-note">Google Maps · vị trí đang hiển thị theo khu vực, chưa phải địa chỉ xưởng đã xác minh</div>
          </div>
          <aside className="factory-map-aside">
            <div className="eyebrow muted"><MapPin size={14} /> Regional view</div>
            <h3>Nhìn năng lực<br /><em>theo vùng.</em></h3>
            <p>Chọn một điểm để bắt đầu đọc năng lực, vật liệu và công đoạn. Bản đồ hiện hiển thị khu vực/tỉnh theo dữ liệu mẫu.</p>
            <div className="factory-map-list">
              {visibleFactories.map((factory) => <div key={factory.id}><strong>{factory.region.split(" · ")[0]}</strong><span>{factory.name.replace(/^.*\/ /, "")}</span></div>)}
            </div>
          </aside>
        </div>
      )}

      <div className="directory-note">
        <FileCheck2 size={16} />
        <span>Hồ sơ hiển thị là dữ liệu mẫu cho cấu trúc danh bạ. Thông tin nhà máy cần được Monos xác minh trước khi công bố chính thức.</span>
      </div>
    </section>
  );
}
