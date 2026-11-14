const MobileCTA = () => (
  <div className="sticky-cta-bar" id="sticky-cta">
    <Link className="sticky-ghost" to="/timeline">
      My timeline
    </Link>
    <Link className="sticky-primary" to="/start-journey">
      Meet your coach
    </Link>
  </div>
);

export default MobileCTA;
import { Link } from "react-router-dom";
