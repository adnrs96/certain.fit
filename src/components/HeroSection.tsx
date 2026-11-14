import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="hero" id="top">
    <div className="container hero-grid">
      <div className="hero-copy">
        <span className="eyebrow-pill">
          HUMAN-LED WEIGHT LOSS
          <span className="eyebrow-more"> · SUPPORTED, NOT SUPERVISED</span>
        </span>
        <h1 className="hero-title">
          Make this the last time you{" "}
          <span className="serif-italic">start over.</span>
        </h1>
        <p className="hero-lead">
          CERTAIN gives you your own <strong>one-to-one coach</strong>: a real
          person who gets to know you, builds a plan around your actual week,
          and stays in your corner when life gets in the way.
        </p>
        <div className="hero-ctas">
          <Link className="btn-ocean-lg" to="/start-journey">
            Meet your coach
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
          <Link className="btn-ghost-lg" to="/how-it-works">
            See how it works
          </Link>
        </div>
        <Link className="hero-timeline-link" to="/timeline">
          <span className="htl-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              ></circle>
              <path
                d="M12 7v5l3 2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
          <span>
            <strong>How long will it take you?</strong> See your personal
            timeline in 60 seconds →
          </span>
        </Link>
        <ul className="hero-trust">
          <li>A real person, never a bot</li>
          <li>No crash diets</li>
          <li>Built for weeks that don’t go to plan</li>
        </ul>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hv-orbit"></div>
        <div className="hv-card hv-welcome">
          <div className="hv-row">
            <span className="hv-kicker">WELCOME TO CERTAIN</span>
            <span className="hv-day">DAY 0</span>
          </div>
          <p className="hv-title">You’re not doing this alone.</p>
          <p className="hv-text">Meet your own CERTAIN coach.</p>
          <div className="hv-partner">
            <span className="hv-avatar avatar-photo"></span>
            <span className="hv-partner-text">
              <strong>Rhea Menon</strong>
              <small>Your personal point of contact</small>
            </span>
          </div>
          <p className="hv-promise">
            Your journey. Your pace. Someone in your corner.
          </p>
        </div>
        <div className="hv-card hv-journal">
          <span className="hv-journal-kicker">MY WEEK · WEEK 03</span>
          <span className="hv-q">01 · My wins</span>
          <span className="hand">
            Walked after dinner 4 times, even on Thursday!
          </span>
          <span className="hv-q">05 · My intention for next week</span>
          <span className="hand">Pack lunch the night before.</span>
        </div>
        <div className="hv-card hv-rhythm">
          <span className="hv-rhythm-kicker">
            <i></i>RETURNING TO RHYTHM
          </span>
          <strong>Day 2 of 3 · Re-establish</strong>
          <span className="hv-bars">
            <i className="on"></i>
            <i className="on"></i>
            <i></i>
          </span>
          <small>Normal meals, groceries, an easy walk.</small>
        </div>
        <p className="hv-caption">Illustrative examples</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
