import HeroSection from "@/components/HeroSection";
import ClosingSection from "@/components/ClosingSection";
import ProgrammeSection from "@/components/ProgrammeSection";
import HomeStoryIntro from "@/components/HomeStoryIntro";

const Index = () => (
  <>
    <HomeStoryIntro />
    <HeroSection />
    <ProgrammeSection showDetailsLink />
    <ClosingSection />
  </>
);

export default Index;
