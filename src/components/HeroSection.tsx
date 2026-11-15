import { Link } from "react-router-dom";
import ConversationLink from "@/components/ConversationLink";
import HeroProgrammeVisual from "@/components/HeroProgrammeVisual";
import ExpertiseSummary from "@/components/ExpertiseSummary";

const HeroSection = () => (
  <section className="hero" id="programme-introduction">
    <div className="container hero-grid">
      <h2 className="hero-title">
        <span className="hero-system-description">
          A hyper-personalised approach to sustainable weight management
        </span>
        The CERTAIN <span className="serif-italic">System</span>
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
        <strong>Built around your life.</strong> Nutrition, exercise and
        psychology come together in a plan that adapts to your food preferences,
        routine and progress.
      </p>
      <div className="hero-ctas">
        <ConversationLink className="btn-ocean-lg" />
      </div>
    </div>
  </section>
);

export default HeroSection;
