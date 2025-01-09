// app/(site)/components/FAQ.tsx

/**
 * よくあるご質問
 */
export default function FAQ() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
          よくあるご質問
        </h2>
        <div className="space-y-4">
          {/* Q1 */}
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="font-bold mb-2">
              Q. 聞き取りごとに会話を自動で振り分けてくれるのか？
            </p>
            <p className="text-sm text-gray-600">
              A.
              はい。AIによる自然言語処理で誰が何を話しているかを自動解析し、内容ごとに分類します。
            </p>
          </div>
          {/* Q2 */}
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="font-bold mb-2">
              Q. 事前勉強無しに使えるものでもあるのか？
            </p>
            <p className="text-sm text-gray-600">
              A.
              はい。必要最低限のチュートリアル程度で、15分ほどの導入研修で利用開始が可能です。
            </p>
          </div>
          {/* Q3 */}
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="font-bold mb-2">
              Q. 他の電子カルテと連携できますか？
            </p>
            <p className="text-sm text-gray-600">
              A.
              すでに電子カルテとAPI連携実績があり、オンライン連携を通じて簡単にCaretomoで出力できます。
            </p>
          </div>
          {/* Q4 */}
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="font-bold mb-2">
              Q. 今後はどのような新機能のリリースを予定していますか？
            </p>
            <p className="text-sm text-gray-600">
              A.
              バージョンアップ計画も多数あり、将来的には多言語対応や自動要約精度の更なる向上を検討しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
