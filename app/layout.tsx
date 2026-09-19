import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monos — Câu chuyện đồ vật",
  description: "Tạp chí, archive và network xoay quanh những câu chuyện phía sau đồ vật.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
