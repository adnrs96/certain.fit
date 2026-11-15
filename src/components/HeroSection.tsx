import { Link } from "react-router-dom";
import ConversationLink from "@/components/ConversationLink";
import HeroProgrammeVisual from "@/components/HeroProgrammeVisual";
import ExpertiseSummary from "@/components/ExpertiseSummary";

const HeroSection = () => (
  <section className="hero" id="top">
    <div className="container hero-grid">
      <h1 className="hero-title">
        Weight loss.{" "}
        <span className="serif-italic">Built around your life.</span>
      </h1>
      <div className="hero-top-right">
        <ExpertiseSummary />
        <HeroProgrammeVisual />
      </div>
      <p className="hero-lead">
        A realistic <strong>weight-loss programme</strong>, backed by Nutrition,
        Exercise and Psychology.
      </p>
      <div className="hero-ctas">
        <ConversationLink className="btn-ocean-lg" />
        <Link className="hero-secondary-link" to="/coach">
          Before and after →
        </Link>
        <Link className="hero-secondary-link" to="/how-it-works">
          How it works →
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
