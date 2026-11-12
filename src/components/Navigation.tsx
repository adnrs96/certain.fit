const Navigation = () => (
  <header className="site-header" id="site-header">
    <div className="container header-inner">
      <a
        className="brand"
        href="#top"
        aria-label="CERTAIN Fitness, back to top"
      >
        <span className="brand-script">Certain</span>
        <span className="brand-sub">FITNESS</span>
      </a>
      <nav className="main-nav" aria-label="Main">
        <ul>
          <li>
            <a href="#coach">Your coach</a>
          </li>
          <li>
            <a href="#how-it-works">How it works</a>
          </li>
          <li>
            <a href="#journal">Journal</a>
          </li>
          <li>
            <a href="#life-happens">When life happens</a>
          </li>
          <li>
            <a href="#timeline-estimator">Your timeline</a>
          </li>
          <li>
            <a href="#programme">Programme</a>
          </li>
        </ul>
      </nav>
      <a className="header-cta" href="#start-journey">
        Meet your coach
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="mobile-menu"
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
      </button>
    </div>
    <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile" hidden>
      <a href="#coach">Your coach</a>
      <a href="#how-it-works">How it works</a>
      <a href="#journal">Journey Journal</a>
      <a href="#life-happens">When life happens</a>
      <a href="#timeline-estimator">Your timeline</a>
      <a href="#programme">Programme</a>
      <a href="#faq">Questions</a>
      <a className="btn-ocean-lg" href="#start-journey">
        Meet your coach
      </a>
    </nav>
  </header>
);

export default Navigation;
