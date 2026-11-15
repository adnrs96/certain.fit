import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { coachCredentials } from "@/lib/coach-credentials";
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
      {coachCredentials.map((credential) => (
        <li key={credential.title} title={`${credential.title} · ${credential.provider}`}>
          <BadgeCheck size={18} aria-hidden="true" />
          <span>
            <strong>{credential.summary}</strong>
            <small>{credential.providerLabel}</small>
          </span>
        </li>
      ))}
    </ul>
  </aside>
);

export default ExpertiseSummary;
