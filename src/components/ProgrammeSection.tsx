import { Link } from "react-router-dom";
import ConversationLink from "@/components/ConversationLink";

interface ProgrammeSectionProps {
  headingLevel?: "h1" | "h2";
  showDetailsLink?: boolean;
}

const ProgrammeSection = ({
  headingLevel: Heading = "h2",
  showDetailsLink = false,
}: ProgrammeSectionProps) => (
  <section className="programme" id="programme">
    <div className="container">
      <div className="section-head center" data-reveal="">
        <span className="eyebrow-pill">THE PROGRAMME</span>
        <Heading className="section-title">
          Personally guided by Akshat.
        </Heading>
      </div>
      <div className="programme-grid">
        <article className="offer-card" data-reveal="">
          <span className="offer-badge">FOUNDING COHORT</span>
          <h3>The CERTAIN programme</h3>
          <p className="offer-sub">Founder-led support, for a small founding group.</p>
          <ul className="offer-list">
            <li>Work directly with me, Akshat, from Day 0</li>
            <li>Your Growth Journal, from My Story to My Future</li>
            <li>A food and movement plan built around your real week</li>
            <li>Daily check-ins for your first 14 days</li>
            <li>Weekly video calls after that, guided by your journal</li>
            <li>WhatsApp support, 9 AM–9 PM IST every day, including weekends</li>
            <li>A progress review every 4 weeks</li>
            <li>Your “making it last” plan for life on your own</li>
          </ul>
          <div className="offer-actions">
            {showDetailsLink && (
              <Link className="btn-ghost-lg on-dark" to="/programme">
                Know more
              </Link>
            )}
            <ConversationLink className="btn-ocean-lg on-dark" />
          </div>
          <p className="offer-small">
            Starting a conversation is free, with no obligation.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default ProgrammeSection;
