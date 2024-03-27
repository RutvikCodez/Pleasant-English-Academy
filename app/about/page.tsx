import AboutHeroSection from "@/components/about/AboutHeroSection";
import AchievementAndVision from "@/components/about/AchievementAndVision";
import HistoryAndMilestone from "@/components/about/HistoryAndMilestone";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col gap-8 lg:gap-12">
      <AboutHeroSection />
      <HistoryAndMilestone />
      <AchievementAndVision />
    </main>
  );
};

export default page;
