// app/(site)/components/Footer.tsx

/**
 * フッター
 */
export default function Footer() {
  return (
    <footer className="mt-12 bg-blue-50 py-8 text-center text-sm text-gray-700">
      <div className="mx-auto max-w-4xl px-4">
        <p className="font-bold mb-2">トライアル受付中！</p>
        <p className="mb-2">
          まずは、トライアルで実際の便利さを実感してください。
          <br />
          カンファレンスや日報作成をラクにする、Caretomoを体験いただけます。
        </p>
        <button className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
          無料レンタルトライアルに申し込む
        </button>
        <button className="ml-4 rounded border border-blue-500 px-6 py-2 text-blue-500 hover:bg-blue-100">
          詳細資料
        </button>
        <div className="mt-4 text-xs text-gray-500">
          <p>Caretomo© 2025 介護記録自動作成システム</p>
          <p className="mt-1">CareReco株式会社 | ユーザーの声 | よくある質問</p>
        </div>
      </div>
    </footer>
  );
}
