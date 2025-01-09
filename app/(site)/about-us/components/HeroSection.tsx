// app/(site)/about-us/components/HeroSection.tsx
"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 py-12">
      <div className="mx-auto max-w-5xl text-center text-white px-4">
        <h1 className="text-2xl font-bold md:text-3xl">会社概要</h1>
        <p className="mt-2 text-sm md:text-base">ABOUT US</p>
      </div>
    </section>
  );
}
