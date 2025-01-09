// app/(site)/components/Challenges.tsx

/**
 * 介護現場の抱える課題を列挙するセクション
 */
export default function Challenges() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          あなたの看護現場にこんな課題ありませんか？？
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* 1 */}
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="font-bold">
              1. 毎日の記録を
              <br />
              書くのに多くの時間を費やしている
            </p>
            <p className="text-sm mt-2 text-gray-600">
              マルチ職種で共有すべき情報の入力が増え、作成負荷が大きい…
            </p>
          </div>
          {/* 2 */}
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="font-bold">2. 記録情報がどうしても抜けてしまう</p>
            <p className="text-sm mt-2 text-gray-600">
              その日何が起きたか振り返るのに精いっぱいで、うっかり書き忘れが出てしまう…
            </p>
          </div>
          {/* 3 */}
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="font-bold">3. 現場の情報共有に漏れが出てしまう</p>
            <p className="text-sm mt-2 text-gray-600">
              書き忘れがあると連携ミスが起こりがちで、チーム全体に影響が…
            </p>
          </div>
        </div>

        <p className="mt-6 font-bold">
          Caretomoがあなたの看護現場をまるっと支援します！！
        </p>
      </div>
    </section>
  );
}
