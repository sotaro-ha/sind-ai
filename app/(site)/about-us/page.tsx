// app/(site)/about-us/page.tsx
"use client";
import HeroSection from "./components/HeroSection";
import MissionVisionSection from "./components/MissionVisionSection";
import MembersSection from "./components/MembersSection";
import CompanyInfoSection from "./components/CompanyInfoSection";
import AboutContactSection from "./components/AboutContactSection";

export default function AboutUsPage() {
  return (
    <main className="flex w-full flex-col">
      <HeroSection />
      <MissionVisionSection />
      <MembersSection />
      <CompanyInfoSection />
      <AboutContactSection />
    </main>
  );
}
