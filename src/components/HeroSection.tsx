import { Link } from "react-router-dom";
import ConversationLink from "@/components/ConversationLink";
import PersonalApproachVisual from "@/components/PersonalApproachVisual";
import ExpertiseSummary from "@/components/ExpertiseSummary";

const HeroSection = () => (
  <section className="hero" id="programme-introduction">
    <div className="container hero-grid">
      <h2 className="hero-title">
        Lasting weight loss.{" "}
        <span className="serif-italic">Uniquely yours.</span>
      </h2>
      <div className="hero-top-right">
        <ExpertiseSummary />
        <PersonalApproachVisual />
        <div className="hero-preview-action">
          <Link className="hero-secondary-link" to="/how-it-works">
            How it works →
          </Link>
        </div>
      </div>
      <p className="hero-lead">
        <strong>Built around your life, not the other way round.</strong> We use
        the principles behind my transformation to discover what works for
        you, then keep adapting. You’ll learn the habits and skills to lose
        weight, maintain it, and make the approach your own.
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
