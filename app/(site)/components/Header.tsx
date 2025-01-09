// app/(site)/components/Header.tsx
"use client"; // イベントハンドラ利用のため、クライアントコンポーネント宣言

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューリスト（中央に配置）
  const menuItems = [
    { label: "Caretomoとは", href: "#" },
    { label: "主な機能とは", href: "#" },
    { label: "ユーザーの生の声", href: "#" },
    { label: "よくあるご質問", href: "#" },
  ];

  return (
    <header className="w-full">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png" // 適切に配置してください
            alt="Caretomo Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Center: Menu (PC表示) */}
        <nav className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-black hover:opacity-80 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600">
            端末レンタル
          </button>
          <button className="rounded bg-white px-4 py-2 text-teal-600 hover:bg-gray-200">
            資料請求
          </button>
        </div>

        {/* ハンバーガーボタン (モバイル) */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z"
            />
          </svg>
        </button>
      </div>

      {/* モバイルメニュー展開時 */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center gap-3 py-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:opacity-80 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center gap-2 pb-3">
            <button className="rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 w-40">
              端末レンタル
            </button>
            <button className="rounded bg-white px-4 py-2 text-teal-600 hover:bg-gray-200 w-40">
              資料請求
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
