import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import FrameworkSection from "@/components/FrameworkSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ComparisonSection />
        <FrameworkSection />
        <PricingSection />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
