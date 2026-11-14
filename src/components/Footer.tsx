const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <Link className="brand light" to="/" aria-label="CERTAIN Fitness, home">
          <span className="brand-script">Certain</span>
          <span className="brand-sub">FITNESS</span>
        </Link>
        <p>Someone in your corner, throughout your transformation.</p>
      </div>
      <nav className="footer-links" aria-label="Footer">
        <div>
          <h2>Explore</h2>
          <Link to="/coach">Our story</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/journal">Journey Journal</Link>
        </div>
        <div>
          <h2>Get started</h2>
          <Link to="/timeline">Your timeline</Link>
          <Link to="/programme">Programme</Link>
          <Link to="/start-journey">Meet your coach</Link>
          <Link to="/faq">Questions</Link>
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
import { Link } from "react-router-dom";
