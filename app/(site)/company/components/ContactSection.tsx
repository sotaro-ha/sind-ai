// app/(site)/company/components/ContactSection.tsx
"use client";
import { useState } from "react";

interface FormData {
  representative: string;
  medicalFacility: string;
  contactPerson: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    representative: "",
    medicalFacility: "",
    contactPerson: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 送信処理例: コンソール出力のみ
    console.log("送信データ:", formData);
    alert("送信が完了しました。");
    // フォームをリセット
    setFormData({
      representative: "",
      medicalFacility: "",
      contactPerson: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 py-16 px-4 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold md:text-3xl">CONTACT</h2>
        <p className="text-sm text-gray-100">お問い合わせ</p>

        <div className="mt-8 bg-white rounded p-6 text-gray-800 shadow">
          <p className="text-sm">
            SINDへのご質問、仕事のご相談、お見積りの依頼などは下記のお問い合わせフォームからお願いいたします。
            <br />
            いただいたお問い合わせにつきましては、迅速に対応・ご返答を心がけておりますが、
            <br />
            内容によっては数日かかる場合やご回答いたしかねる場合がございます。あらかじめご了承ください。
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid gap-4 md:grid-cols-2"
          >
            {/* ご担当者名 */}
            <div className="flex flex-col">
              <label
                htmlFor="representative"
                className="mb-1 text-sm font-bold text-gray-700"
              >
                ご担当者名 <span className="text-red-500">*</span>
              </label>
              <input
                id="representative"
                name="representative"
                type="text"
                required
                value={formData.representative}
                onChange={handleChange}
                className="rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="山田 太郎"
              />
            </div>

            {/* 医療機関名 */}
            <div className="flex flex-col">
              <label
                htmlFor="medicalFacility"
                className="mb-1 text-sm font-bold text-gray-700"
              >
                医療機関名 <span className="text-red-500">*</span>
              </label>
              <input
                id="medicalFacility"
                name="medicalFacility"
                type="text"
                required
                value={formData.medicalFacility}
                onChange={handleChange}
                className="rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="○○病院"
              />
            </div>

            {/* ご担当者(役職) */}
            <div className="flex flex-col">
              <label
                htmlFor="contactPerson"
                className="mb-1 text-sm font-bold text-gray-700"
              >
                ご担当者(役職) <span className="text-red-500">*</span>
              </label>
              <input
                id="contactPerson"
                name="contactPerson"
                type="text"
                required
                value={formData.contactPerson}
                onChange={handleChange}
                className="rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="看護師長 等"
              />
            </div>

            {/* メールアドレス */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 text-sm font-bold text-gray-700"
              >
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="example@example.com"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div className="md:col-span-2 flex flex-col">
              <label
                htmlFor="message"
                className="mb-1 text-sm font-bold text-gray-700"
              >
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="ご質問・ご相談内容をお書きください"
              />
            </div>

            {/* 送信ボタン */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="rounded bg-teal-500 px-6 py-2 text-white hover:bg-teal-600"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
