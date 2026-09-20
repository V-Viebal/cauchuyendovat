"use client";

import { Armchair, ArrowUpRight, BadgeCheck, BriefcaseBusiness, Building2, Factory, Layers3, MapPin, Ruler, UserRound } from "lucide-react";
import { useState } from "react";
import { designerEntityFilters, designerFilters, designerProfiles } from "../monos-data";

export default function DesignerDirectory() {
  const [designerFilter, setDesignerFilter] = useState("Tất cả");
  const [entityFilter, setEntityFilter] = useState("Tất cả");
  const visibleProfiles = designerProfiles.filter((designer) =>
    (entityFilter === "Tất cả" || designer.entityType === entityFilter) &&
    (designerFilter === "Tất cả" || designer.filter === designerFilter),
  );
  const individualCount = designerProfiles.filter((designer) => designer.entityType === "Cá nhân").length;
  const companyCount = designerProfiles.filter((designer) => designer.entityType === "Công ty").length;

  return (
    <section className="designer-directory" id="designer-directory">
      <div className="designer-toolbar">
        <div className="designer-count-block">
          <span className="designer-count">{visibleProfiles.length} hồ sơ đang hiển thị</span>
          <small>{individualCount} cá nhân · {companyCount} công ty</small>
        </div>
        <div className="designer-filter-groups">
          <div className="designer-filter-group">
            <span>Loại hồ sơ</span>
            <div className="designer-filters" role="tablist" aria-label="Lọc theo loại hồ sơ">
              {designerEntityFilters.map((filter) => (
                <button
                  className={`designer-filter ${entityFilter === filter ? "is-active" : ""}`}
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={entityFilter === filter}
                  onClick={() => setEntityFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="designer-filter-group">
            <span>Chuyên môn</span>
            <div className="designer-filters" role="tablist" aria-label="Lọc theo chuyên môn">
              {designerFilters.map((filter) => (
                <button
                  className={`designer-filter ${designerFilter === filter ? "is-active" : ""}`}
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={designerFilter === filter}
                  onClick={() => setDesignerFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="designer-grid">
        {visibleProfiles.map((designer, index) => {
          const Icon =
            designer.icon === "furniture"
              ? Armchair
              : designer.icon === "material"
                ? Layers3
                : designer.icon === "spatial"
                  ? Ruler
                  : Factory;
          const EntityIcon = designer.entityType === "Cá nhân" ? UserRound : Building2;

          return (
            <article className={`designer-card designer-card-${designer.tone}`} id={designer.id} key={designer.id}>
              <div className="designer-card-head">
                {designer.photo ? (
                  <div className="designer-avatar designer-avatar-photo">
                    <img src={designer.photo} alt={`Ảnh hồ sơ ${designer.name}`} />
                  </div>
                ) : designer.entityType === "Công ty" ? (
                  <div className="designer-logo-wrap">
                    <img className="designer-logo" src={"logo" in designer ? designer.logo : "/db-studio-logo.jpg"} alt={`Logo ${designer.name}`} />
                    <span>DB Studio · logo cung cấp</span>
                  </div>
                ) : (
                  <div className="designer-avatar"><Icon size={22} strokeWidth={1.6} /></div>
                )}
                {designer.photoLabel && <span className="designer-photo-note">{designer.photoLabel}</span>}
                <span className="designer-status"><span /> {designer.status}</span>
              </div>
              <div className="designer-index">0{index + 1} / COMMUNITY PROFILE</div>
              <h2>{designer.name}</h2>
              <div className="designer-entity"><EntityIcon size={14} /> {designer.entityType}</div>
              <div className="designer-role"><BadgeCheck size={14} /> {designer.discipline}</div>
              <div className="designer-location"><MapPin size={14} /> {designer.location}</div>
              <p>{designer.bio}</p>
              <div className="designer-tags">
                {designer.specialties.map((specialty) => <span key={specialty}>{specialty}</span>)}
              </div>
              <a className="card-link" href={designer.id === "designer-01" ? "/designers/designer-01" : designer.id === "vi-van-truong" ? "/designers/vi-van-truong" : designer.id === "cao-thi-mai-nguyen" ? "/designers/cao-thi-mai-nguyen" : designer.id === "daniela-thach-thao" ? "/designers/daniela-thach-thao" : designer.id === "designer-02" ? "/designers/db-studio" : "/feed#feed-designer"}>
                {designer.id === "designer-01" || designer.id === "vi-van-truong" || designer.id === "cao-thi-mai-nguyen" || designer.id === "daniela-thach-thao" || designer.id === "designer-02" ? "Mở hồ sơ" : "Theo dõi cộng đồng"} <ArrowUpRight size={15} />
              </a>
            </article>
          );
        })}
      </div>

      <div className="designer-note">
        <BriefcaseBusiness size={16} />
        <span>Hồ sơ hiển thị là cấu trúc mẫu. Monos sẽ xác minh chuyên môn, năng lực và thông tin hợp tác trước khi công bố chính thức.</span>
      </div>
    </section>
  );
}
