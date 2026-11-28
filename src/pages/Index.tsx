import HeroSection from "@/components/HeroSection";
import ClosingSection from "@/components/ClosingSection";
import ProgrammeSection from "@/components/ProgrammeSection";
import HomeStoryIntro from "@/components/HomeStoryIntro";
import HomeOfferingIntro from "@/components/HomeOfferingIntro";

const Index = () => (
  <>
    <HomeOfferingIntro />
    <HomeStoryIntro />
    <HeroSection />
    <ProgrammeSection showDetailsLink />
    <ClosingSection />
  </>
);

export default Index;
