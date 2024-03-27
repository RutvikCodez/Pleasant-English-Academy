import Cources from "@/components/homepage/Cources";
import HeroSection from "@/components/homepage/HeroSection";
import Testimonials from "@/components/homepage/Testimonials";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex flex-col max-md:gap-12 gap-24">
      <HeroSection />
      <WhyChooseUs />
      <Cources />
      <Testimonials />
    </main>
  );
}
