"use client";

import { ArrowUpRight, Building2, FileCheck2, Home, MapPin, UsersRound } from "lucide-react";
import { useState } from "react";
import { spaceDirectory, spaceFilters } from "../monos-data";

export default function SpaceDirectory() {
  const [spaceFilter, setSpaceFilter] = useState("Tất cả");
  const visibleSpaces =
    spaceFilter === "Tất cả"
      ? spaceDirectory
      : spaceDirectory.filter((space) => space.category === spaceFilter);

  return (
    <section className="space-directory" id="space-directory">
      <div className="space-toolbar">
        <span className="space-count">{visibleSpaces.length} hồ sơ không gian đang hiển thị</span>
        <div className="space-filters" role="tablist" aria-label="Lọc không gian">
          {spaceFilters.map((filter) => (
            <button
              className={`space-filter ${spaceFilter === filter ? "is-active" : ""}`}
              key={filter}
              type="button"
              role="tab"
              aria-selected={spaceFilter === filter}
              onClick={() => setSpaceFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-grid">
        {visibleSpaces.map((space, index) => {
          const Icon = space.icon === "home" ? Home : space.icon === "hospitality" ? Building2 : UsersRound;
          return (
            <article className={`space-card space-card-${space.tone}`} id={space.id} key={space.id}>
              <div className={`space-thumbnail ${space.thumbnail ? "has-image" : "is-pending"}`}>
                {space.thumbnail ? (
                  <img src={space.thumbnail} alt={space.thumbnailAlt} loading="lazy" />
                ) : (
                  <span>Ảnh không gian đang chờ bổ sung</span>
                )}
              </div>
              <div className="space-card-head">
                <div className="space-avatar"><Icon size={22} strokeWidth={1.6} /></div>
                <span className="space-status"><span /> {space.status}</span>
              </div>
              <div className="space-index">0{index + 1} / SPACE PROFILE</div>
              <h2>{space.name}</h2>
              <div className="space-location"><MapPin size={14} /> {space.location}</div>
              <p>{space.story}</p>
              <div className="space-tags">
                {space.specialties.map((specialty) => <span key={specialty}>{specialty}</span>)}
              </div>
              <div className="space-related">
                <span className="space-related-label">Đồ vật trong không gian</span>
                <div className="space-related-list">
                  {space.relatedObjects.map((object) => (
                    <div className={`space-object-thumb ${object.thumbnail ? "has-image" : "is-pending"}`} key={object.name}>
                      {object.thumbnail ? <img src={object.thumbnail} alt={object.name} loading="lazy" /> : <span />}
                      <div><strong>{object.name}</strong><small>{object.type}</small></div>
                    </div>
                  ))}
                </div>
              </div>
              <a className="card-link" href="/objects">Xem đồ vật liên quan <ArrowUpRight size={15} /></a>
            </article>
          );
        })}
      </div>

      <div className="space-note">
        <FileCheck2 size={16} />
        <span>Hồ sơ không gian là dữ liệu mẫu cho cấu trúc Place Profile. Monos sẽ xác minh địa điểm, hình ảnh và nguồn tham chiếu trước khi công bố chính thức.</span>
      </div>
    </section>
  );
}
