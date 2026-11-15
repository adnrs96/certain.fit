import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import nfnaLogo from "@/assets/nfna-logo.png";
import precisionNutritionLogo from "@/assets/precision-nutrition-logo.png";
import "./ExpertiseSummary.css";

const ExpertiseSummary = () => (
  <aside className="hero-expertise" aria-labelledby="hero-expertise-title">
    <h2 id="hero-expertise-title">
      <Link to="/coach#qualifications">
        Globally Recognised Expertise
        <ArrowUpRight size={14} aria-hidden="true" />
      </Link>
    </h2>
    <ul>
      <li>
        <div className="expertise-logo">
          <img src={nfnaLogo} alt="National Fitness & Nutrition Academy" width="1080" height="455" />
        </div>
        <p>Diploma from National Fitness &amp; Nutrition Academy</p>
      </li>
      <li>
        <div className="expertise-logo">
          <img src={precisionNutritionLogo} alt="Precision Nutrition" width="615" height="93" />
        </div>
        <ul className="expertise-topics">
          <li>Nutrition coaching</li>
          <li>Sleep, stress &amp; recovery</li>
        </ul>
      </li>
    </ul>
  </aside>
);

export default ExpertiseSummary;
