import { useEffect, useLayoutEffect, useRef } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { initializeWebsite } from "@/lib/website";
import { initializeEstimator } from "@/lib/estimator";
import { legacySectionRoutes, sitePages } from "@/lib/site-pages";
import "@/App.css";
import "@/components/estimator.css";

const SiteLayout = () => {
  const root = useRef<HTMLDivElement>(null);
  const main = useRef<HTMLElement>(null);
  const previousPath = useRef<string>();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const pageTitle =
    location.pathname === "/start-journey"
      ? "Meet your CERTAIN coach"
      : sitePages.find((page) => page.path === location.pathname)?.title;

  useEffect(() => {
    const target = isHome && legacySectionRoutes[location.hash];
    if (target) navigate(target + location.hash, { replace: true });
  }, [isHome, location.hash, navigate]);

  useLayoutEffect(() => {
    const target =
      location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ block: "start" });
    else window.scrollTo({ top: 0, behavior: "instant" });
    if (previousPath.current && previousPath.current !== location.pathname) {
      main.current?.focus({ preventScroll: true });
    }
    previousPath.current = location.pathname;
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!root.current) return;
    const cleanupWebsite = initializeWebsite(root.current);
    const cleanupEstimator = initializeEstimator(root.current, (summary) => {
      navigate("/start-journey", { state: { timelineEstimate: summary } });
    });
    return () => {
      cleanupWebsite();
      cleanupEstimator();
    };
  }, [location.pathname, navigate]);

  useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} | CERTAIN`
      : "CERTAIN | Personalised weight-loss coaching";
  }, [pageTitle]);

  return (
    <div ref={root} className="certain-website">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main
        ref={main}
        id="main"
        tabIndex={-1}
        className={isHome ? undefined : "page-main"}
      >
        {!isHome && (
          <nav className="page-context container" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{pageTitle || "Page not found"}</span>
          </nav>
        )}
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default SiteLayout;
