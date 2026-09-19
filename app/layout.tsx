import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monos — Câu chuyện đồ vật",
  description: "Câu chuyện đồ vật — tạp chí online về ngành Furniture, nơi những câu chuyện phía sau mỗi món đồ được lưu lại và kết nối.",
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
