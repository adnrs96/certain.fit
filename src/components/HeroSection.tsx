import { Link } from "react-router-dom";
import HeroProgrammeVisual from "@/components/HeroProgrammeVisual";
import ExpertiseSummary from "@/components/ExpertiseSummary";

const HeroSection = () => (
  <section className="hero" id="programme-introduction">
    <div className="container hero-grid">
      <h2 className="hero-title">
        <span className="hero-system-description">
          Introducing,
        </span>
        The CERTAIN <span className="serif-italic">System</span>
      </h2>
      <div className="hero-top-right">
        <ExpertiseSummary />
        <HeroProgrammeVisual />
      </div>
      <p className="hero-lead">
        <strong>
          Because life is full of uncertainties. Managing your fitness goals
          shouldn&apos;t be.
        </strong>
        <span className="hero-programme-copy">
          CERTAIN is a structured, personalised programme that brings nutrition,
          movement, sleep and stress management together—built around your food
          preferences, your routine and your life.
        </span>
      </p>
      <div className="hero-ctas">
        <Link className="btn-ocean-lg" to="/how-it-works">
          How it works →
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
