// app/(site)/about-us/components/MembersSection.tsx
"use client";

export default function MembersSection() {
  // メンバーデータの例
  const members = [
    {
      nameJa: "渡邉 友哉",
      nameEn: "Yuya Watanabe",
      imgSrc: "/images/member1.png", // ダミー画像を適宜用意
    },
    {
      nameJa: "アネクワット・タナチャイ",
      nameEn: "Tanachai Anakewat",
      imgSrc: "/images/member2.png",
    },
    {
      nameJa: "遠藤 アンギロ",
      nameEn: "Sample Sample",
      imgSrc: "/images/member3.png",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-4">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-xl font-bold md:text-2xl">MEMBER</h2>
        <p className="text-sm text-gray-500">メンバー</p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {members.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center space-y-2"
            >
              {/* ダミー画像枠 */}
              <div className="h-40 w-40 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
                {/* 実際にはnext/imageで画像を表示するなど */}
                <p className="text-gray-500 text-sm">No Image</p>
              </div>
              <div>
                <p className="text-sm font-bold">{m.nameJa}</p>
                <p className="text-xs text-gray-500 italic">{m.nameEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
