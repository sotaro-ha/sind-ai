// app/(site)/company/components/CompanySection.tsx
"use client";

export default function CompanySection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 py-16 px-4 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold md:text-3xl">COMPANY</h2>
        <p className="text-sm text-gray-100">企業情報</p>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start">
          {/* テキスト */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-xl font-bold md:text-2xl">『SIND』(シンド)</h3>
            <p className="text-sm leading-relaxed">
              一人一人の人生はもっと冒険でいい。
              <br />
              ロマンがあっていい。
              <br />
              ワクワクしていていい。
              <br />
              <br />
              あなたの日常が少し“生きがい”に溢れるように、
              <br />
              必要なコトは残しながら、
              <br />
              毎日の業務のやりがいのある時間を増やしていきます。
            </p>
            <button className="mt-4 rounded bg-white px-4 py-2 text-teal-500 hover:bg-gray-200">
              さらに詳しく見る
            </button>
          </div>
          {/* 右側のイメージ部分 */}
          <div className="md:w-1/2 h-48 bg-white/30 rounded flex items-center justify-center text-white">
            {/* 会社イメージ等を配置 */}
            <span className="text-sm">会社イメージ等を配置</span>
          </div>
        </div>
      </div>
    </section>
  );
}
