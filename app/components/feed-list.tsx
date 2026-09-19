"use client";

import { ArrowUpRight, Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import { feedItems } from "../monos-data";

export default function FeedList() {
  const [liked, setLiked] = useState<string[]>([]);
  const [saved, setSaved] = useState<string[]>([]);
  const [shared, setShared] = useState<string[]>([]);

  return (
    <div className="feed-list">
      {feedItems.map((item) => {
        const isLiked = liked.includes(item.id);
        const isSaved = saved.includes(item.id);
        const isShared = shared.includes(item.id);
        return (
          <article className={`feed-card feed-card-${item.tone}`} id={item.id} key={item.id}>
            <div className="feed-card-topline">
              <span className="feed-card-type">{item.type}</span>
              <span className="feed-card-time">{item.time}</span>
            </div>
            <div className="feed-card-body">
              <div className="feed-avatar" aria-hidden="true">{item.author.slice(0, 1)}</div>
              <div>
                <div className="feed-author-line"><strong>{item.author}</strong><span>đã cập nhật hồ sơ</span></div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <div className="feed-card-meta">{item.meta}</div>
              </div>
            </div>
            <div className="feed-card-actions">
              <button
                className={`feed-action ${isLiked ? "is-active" : ""}`}
                type="button"
                aria-pressed={isLiked}
                onClick={() => setLiked((current) => current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id])}
              >
                <Heart size={16} fill={isLiked ? "currentColor" : "none"} /> {item.likes + (isLiked ? 1 : 0)}
              </button>
              <button className="feed-action" type="button"><MessageCircle size={16} /> {item.comments}</button>
              <button
                className={`feed-action ${isSaved ? "is-active" : ""}`}
                type="button"
                aria-pressed={isSaved}
                onClick={() => setSaved((current) => current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id])}
              >
                <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} /> {isSaved ? "Đã lưu" : "Lưu"}
              </button>
              <button
                className={`feed-action feed-share ${isShared ? "is-active" : ""}`}
                type="button"
                aria-label={isShared ? "Đã chia sẻ cập nhật" : "Chia sẻ cập nhật"}
                aria-pressed={isShared}
                onClick={() => setShared((current) => current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id])}
              >
                <Share2 size={16} /> {isShared ? "Đã chia sẻ" : "Chia sẻ"}
              </button>
              <a className="feed-open" href="/objects"><ArrowUpRight size={16} /> Mở hồ sơ</a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
