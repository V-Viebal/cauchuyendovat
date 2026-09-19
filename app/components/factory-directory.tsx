"use client";

import { ArrowUpRight, Factory as FactoryIcon, FileCheck2, MapPin, Ruler, Sparkles } from "lucide-react";
import { useState } from "react";
import { factoryDirectory, factoryFilters } from "../monos-data";

export default function FactoryDirectory() {
  const [factoryFilter, setFactoryFilter] = useState("Tất cả");
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
      </div>

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
              <a className="card-link" href="/network#factories">Mở hồ sơ <ArrowUpRight size={15} /></a>
            </article>
          );
        })}
      </div>

      <div className="directory-note">
        <FileCheck2 size={16} />
        <span>Hồ sơ hiển thị là dữ liệu mẫu cho cấu trúc danh bạ. Thông tin nhà máy cần được Monos xác minh trước khi công bố chính thức.</span>
      </div>
    </section>
  );
}
