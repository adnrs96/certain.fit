import { Link } from "react-router-dom";
import ConversationLink from "@/components/ConversationLink";
import HeroProgrammeVisual from "@/components/HeroProgrammeVisual";

const HeroSection = () => (
  <section className="hero" id="top">
    <div className="container hero-grid">
      <h1 className="hero-title">
        Weight loss.{" "}
        <span className="serif-italic">Built around your life.</span>
      </h1>
      <HeroProgrammeVisual />
      <p className="hero-lead">
        A personalised <strong>weight-loss programme</strong>, guided by me,
        Akshat. Simple habits. No rigid food rules.
      </p>
      <div className="hero-ctas">
        <ConversationLink className="btn-ocean-lg" />
        <Link className="hero-secondary-link" to="/how-it-works">
          How it works →
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
