// app/(site)/components/Flow.tsx

/**
 * 導入の流れをステップ形式で表示
 */
export default function Flow() {
  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
          導入の流れ
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="font-bold">① お問い合わせ＆ヒアリング</p>
            <p className="text-sm text-gray-600 mt-2">
              チーム体制や現状をお伺いし、トライアルを準備します。
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="font-bold">② 具体的システム構想</p>
            <p className="text-sm text-gray-600 mt-2">
              要件をヒアリングし、環境や要望に合わせてご提案をいたします。
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="font-bold">③ ご契約・システム準備</p>
            <p className="text-sm text-gray-600 mt-2">
              契約の上、システムを構築し稼働準備を行います。
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="font-bold">④ アフターフォロー</p>
            <p className="text-sm text-gray-600 mt-2">
              運用後もサポートし、要望があれば随時機能追加をいたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
