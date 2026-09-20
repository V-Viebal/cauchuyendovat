"use client";

import { ArrowUpRight, Building2, Factory, FileCheck2, MapPin, Tag } from "lucide-react";
import { useState } from "react";
import { brandDirectory, brandFilters } from "../monos-data";

export default function BrandDirectory() {
  const [filter, setFilter] = useState("Tất cả");
  const visibleBrands = filter === "Tất cả" ? brandDirectory : brandDirectory.filter((brand) => brand.filter === filter);

  return (
    <section className="brand-directory route-directory" id="brand-directory">
      <div className="brand-directory-top">
        <div>
          <div className="eyebrow muted"><Tag size={14} /> Brand Directory</div>
          <h2 className="route-feature-title">Những thương hiệu<br /><em>đứng sau đồ vật.</em></h2>
        </div>
        <p>Brand là một lớp hồ sơ riêng: nơi sản phẩm được giới thiệu, designer được ghi nhận và thông tin sản xuất được công bố — hoặc chưa được công bố.</p>
      </div>
      <div className="brand-toolbar">
        <span>{visibleBrands.length} hồ sơ đang hiển thị</span>
        <div className="brand-filters" role="tablist" aria-label="Lọc danh bạ brand">
          {brandFilters.map((item) => <button key={item} type="button" className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
      </div>
      <div className="brand-grid">
        {visibleBrands.map((brand) => (
          <article className={`brand-card brand-card-${brand.tone}`} key={brand.id}>
            <div className="brand-thumbnail"><img src={brand.thumbnail} alt={brand.thumbnailAlt} loading="lazy" /><span>Brand / Product connection</span></div>
            <div className="brand-card-body">
              <div className="brand-card-head"><div className="brand-icon"><Building2 size={20} /></div><span className="brand-status"><span /> {brand.status}</span></div>
              <span className="brand-code">BRAND PROFILE / 001</span>
              <h3>{brand.name}</h3>
              <div className="brand-meta"><strong>{brand.entityType}</strong><span>·</span><MapPin size={14} /> {brand.location}</div>
              <p>{brand.description}</p>
              <div className="brand-tags">{brand.specialties.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="brand-disclosure"><Factory size={14} /> {brand.factoryDisclosure}</div>
              <a className="card-link" href={brand.href}>Mở hồ sơ brand <ArrowUpRight size={15} /></a>
            </div>
          </article>
        ))}
      </div>
      <div className="directory-note"><FileCheck2 size={16} /><span>Brand profile phân biệt rõ điều thương hiệu công bố với điều Monos chưa có bằng chứng để nối sang nhà máy hoặc designer.</span></div>
    </section>
  );
}
