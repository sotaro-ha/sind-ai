"use client";
import MissionSection from "./components/MissionSection";
import ServiceSection from "./components/ServiceSection";
import CompanySection from "./components/CompanySection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";

export default function CompanyPage() {
  return (
    <main className="flex w-full flex-col">
      {/* MISSIONセクション */}
      <MissionSection />

      {/* SERVICEセクション */}
      <ServiceSection />

      {/* COMPANYセクション */}
      <CompanySection />

      {/* NEWSセクション */}
      <NewsSection />

      {/* CONTACTセクション */}
      <ContactSection />
    </main>
  );
}
