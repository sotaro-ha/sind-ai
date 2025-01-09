// app/(site)/layout.tsx
import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Caretomo | 介護現場向け会話記録システム",
  description:
    "話すだけで毎日の記録が作れちゃう！？「会話型」記録自動作成AIシステム Caretomo",
};

/**
 * 全ページ共通のレイアウトコンポーネント
 * @param {ReactNode} children 子コンポーネント
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // htmlタグやheadタグはデフォルトで自動生成される設定になっています
    <html lang="ja">
      <body className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-700">
        {children}
      </body>
    </html>
  );
}
