// app/(site)/company/components/NewsSection.tsx
"use client";

export default function NewsSection() {
  const newsList = [
    {
      date: "2024-11-11",
      label: "お知らせ",
      text: "すごいニュースが飛び込んできました。",
    },
    {
      date: "2024-11-11",
      label: "お知らせ",
      text: "すごいニュースが飛び込んできました。",
    },
    {
      date: "2024-11-11",
      label: "お知らせ",
      text: "すごいニュースが飛び込んできました。",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">NEWS</h2>
        <p className="text-sm text-gray-400">ニュース</p>

        <div className="mt-8 space-y-4">
          {newsList.map((news, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded shadow"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {news.label}
                </span>
                <span className="text-sm text-gray-500">{news.date}</span>
              </div>
              <p className="text-sm text-gray-700 mt-2 sm:mt-0">{news.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
