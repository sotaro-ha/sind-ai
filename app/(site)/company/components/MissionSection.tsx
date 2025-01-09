// app/(site)/company/components/MissionSection.tsx
"use client";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="relative w-full min-h-[400px] overflow-hidden bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
      <div className="absolute inset-0 z-0 opacity-80">{/* 背景装飾等 */}</div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-16 text-white md:flex-row md:justify-between md:py-24">
        <div className="max-w-md space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl">MISSION</h2>
          <p className="text-sm font-semibold text-gray-100 md:text-base">
            使命
          </p>
          <p className="mt-4 text-base md:text-lg">
            AIで医療従事者の能力を最大化し、
            <br />
            一人一人に最適な医療を届ける
          </p>
        </div>
        <div className="mt-8 h-48 w-48 md:mt-0 md:h-64 md:w-64 lg:h-72 lg:w-72">
          <Image
            src="/images/caretaker.jpg" // 適宜変更
            alt="介護イメージ"
            width={600}
            height={600}
            className="h-full w-full object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
