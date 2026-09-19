import type { Metadata } from "next";
import StoryArchive from "../components/story-archive";
import { MonosFrame } from "../components/monos-shell";

export const metadata: Metadata = {
  title: "Câu chuyện đồ vật — Cloudy — Monos",
  description: "Tạp chí online về ngành Furniture: một món đồ, bảy lớp đọc — câu chuyện, designer, cách làm, vật liệu, nguồn gốc, đời sống thật và kết nối ngành.",
};

export default function StoriesPage() {
  return (
    <MonosFrame active="stories">
      <section className="route-hero route-hero-stories">
        <div>
          <div className="eyebrow muted">Câu chuyện đồ vật · Issue 01 · Cloudy</div>
          <h1>Một món đồ.<br /><em>Bảy lớp đọc.</em></h1>
        </div>
        <p>
          Không mở bảy chuyên mục. Câu chuyện đồ vật đi xuyên qua cùng một chiếc ghế Cloudy — từ lý do ra đời đến những mối nối giữa designer, xưởng và brand.
        </p>
      </section>

      <section className="section-pad route-section route-stories-section">
        <div className="route-section-label">Issue 01 / Cloudy — B+ Furniture</div>
        <StoryArchive />
      </section>
    </MonosFrame>
  );
}
