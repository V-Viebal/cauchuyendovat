import type { Metadata } from "next";
import { Activity, ArrowUpRight } from "lucide-react";
import FeedList from "../components/feed-list";
import { MonosFrame } from "../components/monos-shell";
import { feedItems } from "../monos-data";

export const metadata: Metadata = {
  title: "Feed — Monos",
  description: "Dòng hoạt động của Monos: hồ sơ mới, mốc xác minh, brief mở và những kết nối đang tiếp tục.",
};

export default function FeedPage() {
  return (
    <MonosFrame active="feed">
      <section className="route-hero route-hero-feed">
        <div>
          <div className="eyebrow muted"><Activity size={14} /> Monos Feed · Live archive</div>
          <h1>Câu chuyện<br /><em>tiếp tục sống.</em></h1>
        </div>
        <div>
          <p>
            Một dòng cập nhật ngắn cho những gì đang xảy ra quanh đồ vật: hồ sơ mới, mốc nguồn gốc, brief mở và lời mời đóng góp.
          </p>
          <a className="text-button" href="/#submit">Gửi một cập nhật <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="section-pad feed-page-section" id="feed-list">
        <div className="feed-page-heading">
          <div className="route-section-label">Following the object</div>
          <span>Vol. 01 / {feedItems.length} cập nhật mới</span>
        </div>
        <FeedList />
      </section>
    </MonosFrame>
  );
}
