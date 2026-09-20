import type { Metadata } from "next";
import { ArrowUpRight, Tag } from "lucide-react";
import BrandDirectory from "../components/brand-directory";
import { MonosFrame } from "../components/monos-shell";

export const metadata: Metadata = {
  title: "Brand — Monos",
  description: "Danh bạ thương hiệu furniture: sản phẩm, nguồn công bố và các mối liên hệ trong ngành.",
};

export default function BrandsPage() {
  return <MonosFrame active="brands">
    <section className="route-hero route-hero-brands">
      <div><div className="eyebrow muted"><Tag size={14} /> Brand Directory</div><h1>Những cái tên<br /><em>đứng sau sản phẩm.</em></h1></div>
      <div><p>Thương hiệu không phải là nhà máy. Đây là nơi Monos ghi nhận cách một sản phẩm được giới thiệu, ai đứng sau nó và phần nào của chuỗi sản xuất vẫn chưa được công bố.</p><div className="route-hero-actions"><a className="text-button" href="/objects/cloudy">Xem Cloudy <ArrowUpRight size={16} /></a><a className="text-button" href="/provenance">Đọc nguyên tắc nguồn <ArrowUpRight size={16} /></a></div></div>
    </section>
    <section className="section-pad route-section route-brand-section"><BrandDirectory /></section>
  </MonosFrame>;
}
