import type { Metadata } from "next";
import { ArrowUpRight, FileCheck2, Factory, MapPin, Ruler, ShieldCheck, UserRound } from "lucide-react";
import { MonosFrame } from "../../components/monos-shell";

export const metadata: Metadata = {
  title: "Vi Văn Trường — Designer Profile — Monos",
  description: "Hồ sơ furniture designer Vi Văn Trường và kết nối tới Gánh Bench, First Maker và TAVICO.",
};

export default function ViVanTruongPage() {
  return (
    <MonosFrame active="designers">
      <article className="real-designer-page">
        <section className="real-designer-hero section-pad">
          <div className="real-designer-photo"><img src="/vi-van-truong.jpg" alt="Vi Văn Trường" /><span>Profile image / supplied</span></div>
          <div className="real-designer-copy"><div className="eyebrow muted"><UserRound size={14} /> Designer Profile / 002</div><span className="real-designer-status"><span /> Theo dossier HMA 2026</span><h1>Vi Văn<br /><em>Trường.</em></h1><p>Một furniture và interior designer với ngôn ngữ tối giản đương đại, tìm cách đưa ký ức, đường cong và cấu trúc văn hoá Việt vào đồ vật.</p><div className="real-designer-meta"><span><MapPin size={15} /> Việt Nam</span><span><Ruler size={15} /> Furniture design</span><span><FileCheck2 size={15} /> Open Award · HMA 2026</span></div></div>
        </section>
        <section className="real-designer-facts"><div><span>Hồ sơ</span><strong>Cá nhân</strong><small>Designer profile</small></div><div><span>Đồ vật liên quan</span><strong>Gánh Bench</strong><small>Object Profile / 002</small></div><div><span>Thi công</span><strong>First Maker</strong><small>Theo dossier HMA</small></div><div><span>Liên hệ</span><strong>vivantruong204@gmail.com</strong><small>Do dossier cung cấp</small></div></section>
        <section className="real-designer-statement section-pad"><div className="eyebrow light"><ShieldCheck size={14} /> Design position</div><blockquote>“Tối giản không làm mất đi ký ức. Nó chỉ giữ lại những đường nét cần thiết nhất.”</blockquote><p>Đây là diễn giải biên tập từ dossier HMA, không phải trích dẫn trực tiếp.</p></section>
        <section className="real-designer-object section-pad"><div><div className="eyebrow muted"><Ruler size={14} /> Connected object</div><h2>Gánh Bench<br /><em>một đường cong có gốc.</em></h2><p>Dossier HMA ghi nhận Vi Văn Trường là designer của Gánh Bench. Mặt ghế lấy cảm hứng từ chiếc đòn gánh; khung và chân dùng chốt mộng, các đường vát cong và gỗ mộc.</p><div className="real-designer-links"><a className="card-link" href="/objects/ganh-bench">Mở Object Profile <ArrowUpRight size={15} /></a><a className="card-link" href="/factories/factory-04">Xem First Maker <ArrowUpRight size={15} /></a></div></div><figure><img src="/ganh-bench-wide.jpg" alt="Gánh Bench" /><figcaption>Gánh Bench / HMA 2026</figcaption></figure></section>
        <section className="real-designer-network section-pad"><div className="eyebrow light"><Factory size={14} /> Working network</div><h2>Ba điểm nối<br /><em>đang mở.</em></h2><div className="real-network-grid"><div><strong>Designer</strong><span>Vi Văn Trường</span><small>Vai trò ghi trong dossier</small></div><div><strong>Factory</strong><span>First Maker</span><small>Thi công · đang xác minh</small></div><div><strong>Material</strong><span>TAVICO</span><small>Tài trợ vật liệu · theo dossier</small></div></div></section>
      </article>
    </MonosFrame>
  );
}
