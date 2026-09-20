import type { Metadata } from "next";
import { ArrowUpRight, Building2, FileCheck2, Factory, Layers3, MapPin, UserRound } from "lucide-react";
import { notFound } from "next/navigation";
import { MonosFrame } from "../../components/monos-shell";

const profiles = {
  "cao-thi-mai-nguyen": {
    name: "Cao Thị Mai Nguyễn",
    id: "Designer Profile / 005",
    statement: "Một ngôn ngữ mô-đun bắt đầu từ những góc nhỏ của đời sống.",
    bio: "Hồ sơ cá nhân đang được mở từ dossier Ambie Shelf. Cao Thị Mai Nguyễn được ghi nhận là một trong hai designer cùng phát triển hệ kệ mô-đun này.",
    focus: "Furniture · Modular systems · Wood",
    anchor: "Cao Thị Mai Nguyễn",
  },
  "daniela-thach-thao": {
    name: "Daniela Thạch Thảo",
    id: "Designer Profile / 006",
    statement: "Chuyển động có thể trở thành một phần của đồ vật.",
    bio: "Hồ sơ cá nhân đang được mở từ dossier Ambie Shelf. Daniela Thạch Thảo được ghi nhận là một trong hai designer cùng phát triển hệ kệ mô-đun này.",
    focus: "Furniture · Movement · Product",
    anchor: "Daniela Thạch Thảo",
  },
  "db-studio": {
    name: "DB Studio",
    id: "Company Profile / 005",
    statement: "Một công ty thiết kế đọc furniture qua vật liệu, cấu tạo và khả năng làm thật.",
    bio: "DB Studio là một công ty thiết kế. Hồ sơ này được mở từ profile mẫu trong cộng đồng Monos để ghi nhận năng lực thiết kế, nghiên cứu vật liệu và các mối nối với đồ vật, xưởng sản xuất và không gian.",
    focus: "Design studio · Material research · Furniture",
    anchor: "DB Studio",
    logo: "/db-studio-logo.jpg",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(profiles).map((designerId) => ({ designerId }));
}

export async function generateMetadata({ params }: { params: Promise<{ designerId: string }> }): Promise<Metadata> {
  const { designerId } = await params;
  const profile = profiles[designerId as keyof typeof profiles];
  return profile ? { title: `${profile.name} — Designer Profile — Monos`, description: profile.bio } : { title: "Designer Profile — Monos" };
}

export default async function AmbieDesignerProfile({ params }: { params: Promise<{ designerId: string }> }) {
  const { designerId } = await params;
  const profile = profiles[designerId as keyof typeof profiles];
  if (!profile) notFound();
  const isCompany = "logo" in profile;

  return (
    <MonosFrame active="designers">
      <article className="real-designer-page">
        <section className="real-designer-hero section-pad">
          <figure className={`real-designer-photo ${isCompany ? "real-designer-logo-photo" : ""}`}>{isCompany ? <img src={profile.logo} alt="Logo DB Studio" /> : <img src="/ambie-designer-pair.jpg" alt={`${profile.name} — ảnh nhóm tạm`} />}<span>{isCompany ? "Logo studio · do studio cung cấp" : "Ảnh nhóm tạm · chờ profile riêng"}</span></figure>
          <div className="real-designer-copy"><div className="eyebrow muted">{isCompany ? <Building2 size={14} /> : <UserRound size={14} />} {profile.id}</div><span className="real-designer-status"><span /> {isCompany ? "Hồ sơ công ty · đang mở" : "Profile tạm · cần bổ sung"}</span><h1>{profile.name}<em>.</em></h1><p>{profile.bio}</p><div className="real-designer-meta"><span><Layers3 size={15} /> {profile.focus}</span><span><MapPin size={15} /> {isCompany ? "Hà Nội · Việt Nam" : "Việt Nam"}</span></div></div>
        </section>

        <section className="real-designer-statement section-pad"><div className="eyebrow light"><FileCheck2 size={14} /> {isCompany ? "Studio statement / đang mở" : "Designer statement / đang mở"}</div><blockquote>“{profile.statement}”</blockquote><p>{isCompany ? "Đây là hồ sơ công ty thiết kế đang được mở để DB Studio bổ sung đội ngũ, dự án, năng lực và nguồn tham chiếu trực tiếp." : "Đây là lớp biên tập tạm dựng từ hồ sơ Ambie Shelf. Monos chưa suy diễn tiểu sử, vai trò chi tiết hoặc phạm vi đóng góp ngoài những gì dossier đã ghi."}</p></section>

        <section className="real-designer-object section-pad"><figure><img src="/ambie-shelf-wide.jpg" alt="Ambie Shelf — hệ kệ mô-đun" /><figcaption>Ambie Shelf / hồ sơ sản phẩm cung cấp</figcaption></figure><div><div className="eyebrow muted"><Layers3 size={14} /> Connected object</div><h2>Ambie<br /><em>Shelf.</em></h2><p>{isCompany ? "DB Studio đang được nối vào hồ sơ Ambie Shelf như một profile công ty thiết kế để tiếp tục bổ sung vai trò, dự án và quan hệ hợp tác." : `${profile.anchor} được ghi nhận cùng Daniela Thạch Thảo trong hồ sơ Ambie Shelf. Trang sản phẩm ghi nhận hệ kệ mô-đun, khớp xoay, bánh xe và các lớp gỗ hoàn thiện.`}</p><a className="card-link" href="/objects/ambie-shelf">Mở hồ sơ Ambie Shelf <ArrowUpRight size={15} /></a></div></section>

        <section className="real-designer-network section-pad"><div className="eyebrow light"><Factory size={14} /> Network / đang xác minh</div><h2>{isCompany ? <>Một studio trong<br /><em>một chuỗi làm thật.</em></> : <>Một designer trong<br /><em>một chuỗi làm thật.</em></>}</h2><div className="real-network-grid"><div><strong>{isCompany ? "TEAM / PROFILE" : "CO-DESIGNER"}</strong><span>{isCompany ? "Đội ngũ đang bổ sung" : profile.name === "Cao Thị Mai Nguyễn" ? "Daniela Thạch Thảo" : "Cao Thị Mai Nguyễn"}</span><small>{isCompany ? "Hồ sơ công ty · đang mở" : "Hồ sơ riêng · ảnh tạm"}</small></div><div><strong>FACTORY</strong><span>{isCompany ? "Đang bổ sung" : "Tân Thành"}</span><small>{isCompany ? "Liên kết dự án cần xác minh" : "Nhà máy theo hồ sơ sản phẩm"}</small></div><div><strong>{isCompany ? "CAPABILITY" : "MATERIAL"}</strong><span>{isCompany ? "Design · Build" : "Sơn Protego"}</span><small>{isCompany ? "Năng lực cần studio bổ sung" : "Quy cách đang xác minh"}</small></div></div><div className="real-designer-links"><a className="light-button" href={isCompany ? "/objects/ambie-shelf" : "/factories/factory-05"}>{isCompany ? "Xem đồ vật liên quan" : "Mở hồ sơ Tân Thành"} <ArrowUpRight size={16} /></a><a className="light-button" href="/designers">Quay lại cộng đồng Designer <ArrowUpRight size={16} /></a></div></section>
      </article>
    </MonosFrame>
  );
}
