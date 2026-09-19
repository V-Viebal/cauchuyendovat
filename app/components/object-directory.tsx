"use client";

import { ArrowUpRight, Box, FileCheck2, MapPin } from "lucide-react";
import { useState } from "react";
import { objectDirectory, objectFilters } from "../monos-data";

export default function ObjectDirectory() {
  const [objectFilter, setObjectFilter] = useState("Tất cả");
  const visibleObjects = objectFilter === "Tất cả"
    ? objectDirectory
    : objectDirectory.filter((object) => object.filter === objectFilter);

  return (
    <section className="object-directory section-pad" id="object-directory">
      <div className="object-directory-top">
        <div>
          <div className="eyebrow muted"><Box size={14} /> Object Profiles / Archive</div>
          <h2 className="route-feature-title">Những hồ sơ<br /><em>đang mở.</em></h2>
        </div>
        <p>
          Mỗi món đồ có một hồ sơ sống: designer, vật liệu, nơi ra đời, hành trình sử dụng và những nguồn tham chiếu còn đang mở.
        </p>
      </div>

      <div className="object-toolbar">
        <span className="object-count">{visibleObjects.length} hồ sơ đang hiển thị</span>
        <div className="object-filters" role="tablist" aria-label="Lọc danh bạ đồ vật">
          {objectFilters.map((filter) => (
            <button
              className={`object-filter ${objectFilter === filter ? "is-active" : ""}`}
              key={filter}
              type="button"
              role="tab"
              aria-selected={objectFilter === filter}
              onClick={() => setObjectFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="object-grid">
        {visibleObjects.map((object) => (
          <article className={`object-card object-card-${object.tone}`} key={object.id}>
            <div className="object-card-head">
              <div className="object-icon"><Box size={20} strokeWidth={1.7} /></div>
              <span className="object-status"><span /> {object.status}</span>
            </div>
            <span className="object-code">{object.code}</span>
            <h3>{object.name}</h3>
            <div className="object-meta"><strong>{object.type}</strong><span>·</span>{object.brand}</div>
            <div className="object-origin"><MapPin size={14} /> {object.origin}</div>
            <p>{object.excerpt}</p>
            {object.href ? (
              <a className="card-link" href={object.href}>Mở hồ sơ <ArrowUpRight size={15} /></a>
            ) : (
              <span className="object-card-link"><FileCheck2 size={15} /> Hồ sơ đang xây dựng</span>
            )}
          </article>
        ))}
      </div>

      <div className="directory-note">
        <FileCheck2 size={16} />
        <span>Danh bạ hiện gồm hồ sơ mẫu và hồ sơ đang xác minh. Monos sẽ bổ sung nguồn tham chiếu trước khi công bố chính thức.</span>
      </div>
    </section>
  );
}
