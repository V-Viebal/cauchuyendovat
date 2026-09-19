import type { Metadata } from "next";
import StoryArchive from "../components/story-archive";
import { MonosFrame } from "../components/monos-shell";

export const metadata: Metadata = {
  title: "Câu chuyện đồ vật — Monos",
  description: "Archive những câu chuyện phía sau các đồ vật chúng ta sống cùng.",
};

export default function StoriesPage() {
  return (
    <MonosFrame active="stories">
      <section className="route-hero route-hero-stories">
        <div>
          <div className="eyebrow muted">Object Story · Archive 01</div>
          <h1>Những câu chuyện<br /><em>đang mở.</em></h1>
        </div>
        <p>
          Tạp chí là cửa vào. Mỗi câu chuyện dẫn đến một Object Profile, một vật liệu, một người và một nơi chốn phía sau món đồ.
        </p>
      </section>

      <section className="section-pad route-section route-stories-section">
        <div className="route-section-label">Browse the archive</div>
        <StoryArchive />
      </section>
    </MonosFrame>
  );
}
