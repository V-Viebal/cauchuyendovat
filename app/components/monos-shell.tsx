"use client";

import { Activity, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { feedItems } from "../monos-data";

type ActivePage = "stories" | "objects" | "journey" | "designers" | "factories" | "spaces" | "provenance" | "feed";

type NavItem = {
  href: string;
  label: string;
  id: ActivePage;
  children?: Array<{ href: string; label: string; id: ActivePage }>;
};

const navItems: NavItem[] = [
  { href: "/stories", label: "Câu chuyện đồ vật", id: "stories" },
  { href: "/feed", label: "Feed", id: "feed" },
  {
    href: "/network",
    label: "Hành trình",
    id: "journey",
    children: [
      { href: "/designers", label: "Designer", id: "designers" },
      { href: "/objects", label: "Đồ vật", id: "objects" },
      { href: "/factories", label: "Nhà máy", id: "factories" },
      { href: "/spaces", label: "Không gian", id: "spaces" },
    ],
  },
  { href: "/provenance", label: "Nguồn gốc", id: "provenance" },
];

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export function MonosHeader({ active }: { active?: ActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Monos, về trang chủ">
        <LogoMark />
        <span className="brand-word">MONOS</span>
      </Link>

      <nav className={`main-nav ${mobileMenuOpen ? "is-open" : ""}`} aria-label="Điều hướng chính">
        {navItems.map((item) => {
          const itemIsActive = active === item.id || item.children?.some((child) => active === child.id);

          if (!item.children) {
            return (
              <a
                className={`nav-link ${itemIsActive ? "active" : ""}`}
                href={item.href}
                key={item.id}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          }

          return (
            <div className={`nav-dropdown ${itemIsActive ? "is-active" : ""}`} key={item.id}>
              <a
                className={`nav-link nav-parent ${itemIsActive ? "active" : ""}`}
                href={item.href}
                aria-haspopup="true"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}<span className="nav-caret" aria-hidden="true">⌄</span>
              </a>
              <div className="nav-submenu" aria-label={`${item.label} — danh mục`}>
                {item.children.map((child) => (
                  <a
                    className={`nav-sublink ${active === child.id ? "active" : ""}`}
                    href={child.href}
                    key={child.id}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </nav>

      <div className="header-actions">
        <a className="icon-button search-trigger" href="/feed" aria-label="Mở Monos Feed">
          <Activity size={18} strokeWidth={1.8} />
        </a>
        <Link className="submit-button header-submit" href="/#submit">
          Gửi một đồ vật <ArrowUpRight size={16} strokeWidth={1.8} />
        </Link>
        <button
          className="icon-button menu-trigger"
          type="button"
          aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

export function FeedStrip({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`feed-strip ${compact ? "is-compact" : ""}`} aria-label="Dòng hoạt động Monos">
      <a className="feed-strip-lead" href="/feed">
        <span className="feed-live-dot" />
        <span>Monos Feed</span>
        <ArrowUpRight size={14} />
      </a>
      <div className="feed-strip-items">
        <div className="feed-strip-track">
          {[...feedItems, ...feedItems].map((item, index) => (
            <a className="feed-strip-item" href={`/feed#${item.id}`} key={`${item.id}-${index}`}>
              <span>{item.type}</span>
              <strong>{item.title}</strong>
              <small>{item.time}</small>
            </a>
          ))}
        </div>
      </div>
      <a className="feed-strip-open" href="/feed">
        Mở feed <ArrowUpRight size={14} />
      </a>
    </div>
  );
}

export function MonosFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" href="/">
        <LogoMark />
        <span>MONOS</span>
      </Link>
      <p>Stories of the things we live with.</p>
      <div className="footer-links">
        {navItems.flatMap((item) => [item, ...(item.children ?? [])]).map((item) => (
          <a href={item.href} key={item.id}>{item.label}</a>
        ))}
      </div>
      <span className="footer-credit">© 2026 Monos / Issue 01</span>
    </footer>
  );
}

export function MonosFrame({ active, children }: { active: ActivePage; children: ReactNode }) {
  return (
    <main className="site-shell">
      <MonosHeader active={active} />
      <FeedStrip compact />
      {children}
      <MonosFooter />
    </main>
  );
}
