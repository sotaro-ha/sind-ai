// app/(site)/about-us/components/MissionVisionSection.tsx
"use client";
import Image from "next/image";

export default function MissionVisionSection() {
  return (
    <section className="w-full py-12 px-4">
      <div className="mx-auto max-w-5xl">
        {/* MISSION */}
        <div className="flex flex-col md:flex-row md:items-center mb-12">
          {/* 左側：テキスト */}
          <div className="md:w-1/2 pr-6 space-y-2">
            <h2 className="text-xl font-bold md:text-2xl">MISSION</h2>
            <p className="text-sm text-gray-500">使命</p>
            <p className="mt-2 text-base leading-relaxed">
              AIで医療従事者の能力を最大化し、
              <br />
              一人一人に最適な医療を届ける
            </p>
            <p className="text-sm text-gray-500 italic mt-3">
              Empower healthcare professionals through AI to deliver
              personalized, optimal care for every patient
            </p>
          </div>
          {/* 右側：画像 */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <Image
              src="/images/caretaker.jpg" // 画像は差し替えてください
              alt="介護イメージ"
              width={600}
              height={400}
              className="rounded object-cover w-full"
            />
          </div>
        </div>

        {/* VISION */}
        <div className="flex flex-col md:flex-row md:items-center">
          {/* 左側：画像 */}
          <div className="md:w-1/2 order-2 md:order-1 mt-6 md:mt-0 md:pr-6">
            <Image
              src="/images/caretaker2.jpg" // 画像は差し替えてください
              alt="介護イメージ2"
              width={600}
              height={400}
              className="rounded object-cover w-full"
            />
          </div>
          {/* 右側：テキスト */}
          <div className="md:w-1/2 order-1 md:order-2 mb-6 md:mb-0 space-y-2">
            <h2 className="text-xl font-bold md:text-2xl">VISION</h2>
            <p className="text-sm text-gray-500">理念</p>
            <p className="mt-2 text-base leading-relaxed">
              「ケアの『当たり前』を超えていく」
            </p>
            <p className="text-sm text-gray-500 italic mt-3">
              Redefining the future of care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
