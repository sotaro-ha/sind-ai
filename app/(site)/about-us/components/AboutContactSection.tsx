// app/(site)/about-us/components/AboutContactSection.tsx
"use client";

export default function AboutContactSection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-100 to-blue-200 py-12 px-4">
      <div className="mx-auto max-w-5xl flex flex-col items-center text-center text-gray-800">
        <h2 className="text-xl font-bold md:text-2xl">CONTACT</h2>
        <p className="text-sm text-gray-600">お問い合わせ</p>

        <p className="mt-6 text-sm max-w-3xl">
          弊社の技術で、貴社の課題を解決します。
          <br />
          SINDへのご質問、事業のご相談、お見積りの依頼などは下記のお問い合わせフォームよりお願いします。
        </p>

        <div className="mt-8">
          <button className="inline-flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            お問い合わせはこちら
          </button>
        </div>
      </div>
    </section>
  );
}
