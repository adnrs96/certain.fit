import { Link } from "react-router-dom";
import ConversationLink from "@/components/ConversationLink";
import HeroProgrammeVisual from "@/components/HeroProgrammeVisual";
import ExpertiseSummary from "@/components/ExpertiseSummary";

const HeroSection = () => (
  <section className="hero" id="programme-introduction">
    <div className="container hero-grid">
      <h2 className="hero-title">
        Weight loss.{" "}
        <span className="serif-italic">Built around your life.</span>
      </h2>
      <div className="hero-top-right">
        <ExpertiseSummary />
        <HeroProgrammeVisual />
        <div className="hero-preview-action">
          <Link className="hero-secondary-link" to="/how-it-works">
            How it works →
          </Link>
        </div>
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
      </div>
    </div>
  </section>
);

export default HeroSection;
