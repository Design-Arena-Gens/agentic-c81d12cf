import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "地方中小企業向けAIコンサルティング実践ガイド",
  description:
    "人間心理と哲学的エビデンスを基盤にしたAIコンサルティング導入プロセスと提案手法をまとめた実践ガイド。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
