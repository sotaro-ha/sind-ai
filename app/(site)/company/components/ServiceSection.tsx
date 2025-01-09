// app/(site)/company/components/ServiceSection.tsx
"use client";
import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
          SERVICE
        </h2>
        <p className="text-sm text-gray-400">サービス</p>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center">
          {/* テキスト */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-xl font-bold text-teal-600 md:text-2xl">
              Caretomo AIを用いた記録自動作成システムの開発
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              SINDは、医療に携わる皆様の業務負担を軽減し患者様へ最適なケアを “AI
              + SaaS”
              で提供いたします。大規模病院の現場経験から得た知見を基に、記録業務の自動化を実現し、スタッフの皆様の業務を効率化します。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              さらに、作成した記録は即時に共有が可能なので、マルチ職種との連携もスムーズです。
              <br />
              現場が抱える課題をエンジニアリングで解消することを目指しています。
            </p>
            <div>
              <button className="inline-flex items-center gap-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L9 8.293l... (省略)" />
                </svg>
                サービスサイトを見る
              </button>
            </div>
          </div>
          {/* 画像 */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/service-lp.png" // 適宜変更
              alt="サービス説明イメージ"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
