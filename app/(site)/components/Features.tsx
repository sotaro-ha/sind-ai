// app/(site)/components/Features.tsx

/**
 * Caretomoの主な機能一覧
 */
export default function Features() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
          Caretomoの主な機能一覧
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded shadow">
            <h3 className="font-bold mb-2">
              1. (仮)カンファレンス記録作成機能
            </h3>
            <p className="text-sm text-gray-600">
              音声認識×AIにより、会議やカンファレンスの内容を自動記録し、要点をまとめてくれます。
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <h3 className="font-bold mb-2">
              2. 連携アサインの自動作成支援機能
            </h3>
            <p className="text-sm text-gray-600">
              記録の内容から他部署や他職種への連携タスクを自動抽出してくれるシステムも搭載。
            </p>
          </div>
          {/* 好きなだけ機能を足してください */}
        </div>
      </div>
    </section>
  );
}
