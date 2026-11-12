const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <a
          className="brand light"
          href="#top"
          aria-label="CERTAIN Fitness, back to top"
        >
          <span className="brand-script">Certain</span>
          <span className="brand-sub">FITNESS</span>
        </a>
        <p>Someone in your corner, throughout your transformation.</p>
      </div>
      <nav className="footer-links" aria-label="Footer">
        <div>
          <h2>Explore</h2>
          <a href="#coach">Your coach</a>
          <a href="#how-it-works">How it works</a>
          <a href="#journal">Journey Journal</a>
          <a href="#life-happens">When life happens</a>
        </div>
        <div>
          <h2>Get started</h2>
          <a href="#timeline-estimator">Your timeline</a>
          <a href="#programme">Programme</a>
          <a href="#start-journey">Meet your coach</a>
          <a href="#faq">Questions</a>
        </div>
      </nav>
    </div>
    <div className="container footer-base">
      <p>
        CERTAIN is a lifestyle and behaviour-change programme. It isn’t medical
        advice, and individual results vary. If you have a health condition,
        please talk to your doctor before starting any weight-loss programme.
      </p>
      <p className="footer-meta">
        <span>
          © <span data-year="">2026</span> CERTAIN Fitness
        </span>
        <a className="team-login" href="/">
          Team login
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
