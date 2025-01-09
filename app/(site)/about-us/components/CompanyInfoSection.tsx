// app/(site)/about-us/components/CompanyInfoSection.tsx
"use client";

export default function CompanyInfoSection() {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-bold md:text-2xl">COMPANY</h2>
        <p className="text-sm text-gray-500">会社情報</p>

        <div className="mt-8 p-4 bg-gray-50 rounded shadow w-full sm:w-2/3">
          <table className="w-full text-sm text-left text-gray-700">
            <tbody>
              <tr className="border-b border-gray-200">
                <th className="py-2 pr-4 font-bold w-1/3">会社名</th>
                <td className="py-2">株式会社SIND</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-2 pr-4 font-bold">創業</th>
                <td className="py-2">2024年2月</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-2 pr-4 font-bold">代表者</th>
                <td className="py-2">渡邉 友哉</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-2 pr-4 font-bold">所在地</th>
                <td className="py-2">長野県長野市松岡1丁目6-17</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-2 pr-4 font-bold">資本金</th>
                <td className="py-2">2555万</td>
              </tr>
              <tr>
                <th className="py-2 pr-4 font-bold">事業内容</th>
                <td className="py-2">医療機関向けソフトウェア開発・販売</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
