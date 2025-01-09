// app/(site)/components/HowToUse.tsx

/**
 * システムの使い方を3ステップ程度で紹介
 */
export default function HowToUse() {
  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
          使い方紹介
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-lg font-bold">1.</p>
            <p className="text-sm text-gray-700">
              音声入力をオンにしておくだけで、AIが会話を自動解析し、記録に必要な内容を抽出
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-bold">2.</p>
            <p className="text-sm text-gray-700">
              そのままシステム上にレポートが生成され、情報漏れを自動でチェックして通知
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-bold">3.</p>
            <p className="text-sm text-gray-700">
              書き出された記録を確認し、問題なければ確定ボタンを押すだけ。マルチ職種と即時共有！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
