"use client";

import { Bookmark, ChevronRight, Eye, Sparkles } from "lucide-react";
import { useState } from "react";
import { stories, storyFilters } from "../monos-data";

export default function StoryArchive() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [savedStories, setSavedStories] = useState<string[]>([]);

  const visibleStories =
    activeFilter === "Tất cả"
      ? stories
      : stories.filter((story) => story.tag === activeFilter);

  const toggleSaved = (id: string) => {
    setSavedStories((current) =>
      current.includes(id) ? current.filter((storyId) => storyId !== id) : [...current, id],
    );
  };

  return (
    <div className="route-archive-content">
      <div className="filter-bar" role="tablist" aria-label="Lọc archive câu chuyện">
        {storyFilters.map((filter) => (
          <button
            className={`filter-chip ${activeFilter === filter.value ? "is-active" : ""}`}
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="story-grid route-story-grid">
        {visibleStories.map((story, index) => {
          const saved = savedStories.includes(story.id);
          return (
            <article className={`story-card story-${index + 1} accent-${story.accent}`} id={story.id} key={story.id}>
              <div className="story-visual">
                {story.image ? (
                  <img src="/monos-chair-study.png" alt="Nghiên cứu hình khối Cloudy" />
                ) : (
                  <div className="abstract-visual" aria-hidden="true">
                    <span className="abstract-orb" />
                    <span className="abstract-line" />
                    <span className="abstract-word">MONOS</span>
                  </div>
                )}
                <span className="story-number">{story.number}</span>
                <span className="story-category">{story.category}</span>
                <a
                  className="story-eye"
                  href={story.id === "cloudy" ? "/objects" : "/feed"}
                  aria-label={`Mở ${story.title}`}
                >
                  <Eye size={17} strokeWidth={1.8} />
                </a>
              </div>
              <div className="story-body">
                <div className="story-meta"><span>{story.tag}</span><span>{story.readTime}</span></div>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <div className="story-footer">
                  <span className="story-author">{story.author}</span>
                  <button
                    className={`save-button ${saved ? "is-saved" : ""}`}
                    type="button"
                    aria-pressed={saved}
                    aria-label={saved ? "Bỏ lưu câu chuyện" : "Lưu câu chuyện"}
                    onClick={() => toggleSaved(story.id)}
                  >
                    <Bookmark size={16} strokeWidth={1.8} fill={saved ? "currentColor" : "none"} />
                    <span>{saved ? "Đã lưu" : "Lưu"}</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {visibleStories.length === 0 && (
        <div className="empty-state">
          <Sparkles size={18} />
          <span>Chưa có câu chuyện trong bộ lọc này. Archive đang được mở rộng.</span>
        </div>
      )}

      <a className="route-next-link" href="/objects">
        Đi tiếp tới Object Profile <ChevronRight size={16} />
      </a>
    </div>
  );
}
