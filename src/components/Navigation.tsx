import { Link, NavLink } from "react-router-dom";
import { sitePages } from "@/lib/site-pages";

const Navigation = () => (
  <header className="site-header" id="site-header">
    <div className="container header-inner">
      <Link className="brand" to="/" aria-label="CERTAIN Fitness, home">
        <span className="brand-script">Certain</span>
        <span className="brand-sub">FITNESS</span>
      </Link>
      <nav className="main-nav" aria-label="Main">
        <ul>
          {sitePages.map((page) => (
            <li key={page.path}>
              <NavLink
                to={page.path}
                className={({ isActive }) =>
                  isActive ? "is-current" : undefined
                }
              >
                {page.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Link className="header-cta" to="/start-journey">
        Work with Akshat
      </Link>
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
      <NavLink to="/" end>
        Home
      </NavLink>
      {sitePages.map((page) => (
        <NavLink key={page.path} to={page.path}>
          {page.label}
        </NavLink>
      ))}
      <Link className="btn-ocean-lg" to="/start-journey">
        Work with Akshat
      </Link>
    </nav>
  </header>
);

export default Navigation;
