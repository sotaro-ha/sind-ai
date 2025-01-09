// app/(site)/page.tsx
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import HowToUse from "./components/HowToUse";
import Features from "./components/Features";
import Flow from "./components/Flow";
import FAQ from "./components/FAQ";
import Story from "./components/Story";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <main>
      <Header />
      {/* ヒーローセクション */}
      <Hero />

      {/* 介護現場の課題紹介 */}
      <Challenges />

      {/* 使い方紹介 */}
      <HowToUse />

      {/* 主な機能一覧 */}
      <Features />

      {/* 導入の流れ */}
      <Flow />

      {/* よくあるご質問 */}
      <FAQ />

      {/* 名前「Caretomo」について */}
      <Story />

      {/* フッター */}
      <Footer />
    </main>
  );
}
