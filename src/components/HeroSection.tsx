import { Link } from "react-router-dom";
import ConversationLink from "@/components/ConversationLink";
import akshatHero from "@/assets/akshat-hero-editorial.webp";

const HeroSection = () => (
  <section className="hero" id="top">
    <div className="container hero-grid">
      <h1 className="hero-title">
        Weight loss.{" "}
        <span className="serif-italic">Built around your life.</span>
      </h1>
      <figure className="hero-founder">
        <img
          src={akshatHero}
          alt="Akshat, founder of CERTAIN"
          width="600"
          height="800"
          fetchPriority="high"
        />
        <figcaption>
          <strong>Akshat</strong>
          <span>Founder of CERTAIN</span>
        </figcaption>
      </figure>
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
