import AboutHeroSection from "@/components/about/AboutHeroSection";
import HistoryAndMilestone from "@/components/about/HistoryAndMilestone";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col gap-8 lg:gap-12">
      <AboutHeroSection />
      <HistoryAndMilestone />
    </main>
  );
};

export default page;
