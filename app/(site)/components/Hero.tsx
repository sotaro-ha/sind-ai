// app/(site)/components/Hero.tsx

import Image from "next/image";

/**
 * LP冒頭のヒーローセクション
 */
export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 px-4 py-16 text-center">
      {/* タイトル部分 */}
      <h1 className="text-2xl font-bold md:text-4xl">
        話してるだけで毎日の記録が作れちゃう！？
      </h1>
      <p className="max-w-2xl text-sm md:text-base">
        「会話型」記録自動作成AIシステム <strong>Caretomo</strong>
      </p>
      <p className="mt-2 text-sm text-gray-500 md:text-base">
        2025年3月正式ローンチ予定！現在トライアル導入受付中
      </p>

      {/* PCとスマホのイメージ */}
      <div className="relative mt-8 w-full max-w-screen-md h-64 md:h-96 mx-auto">
        {/* デモ用のイメージを配置してください。public/images配下などに格納 */}
        <Image
          src="/images/caretaker.jpg"
          alt="Caretomo ヒーローイメージ"
          fill
          className="object-contain"
        />
      </div>

      {/* ボタン部分 */}
      <div className="mt-8 flex gap-4">
        <button className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
          詳細を見る
        </button>
        <button className="rounded border border-blue-500 px-6 py-2 text-blue-500 hover:bg-blue-50">
          相談してみる
        </button>
      </div>
    </section>
  );
}
