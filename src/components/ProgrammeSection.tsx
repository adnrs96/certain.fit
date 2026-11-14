import type { CSSProperties } from "react";
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
          Personally guided by Akshat.{" "}
          <span className="serif-italic">Skills for life.</span>
        </Heading>
      </div>
      <div className="programme-grid">
        <article className="offer-card" data-reveal="">
          <span className="offer-badge">FOUNDING COHORT</span>
          <h3>The CERTAIN programme</h3>
          <p className="offer-sub">Founder-led support, for a small founding group.</p>
          <ul className="offer-list">
            <li>Work directly with me, Akshat, from Day 0</li>
            <li>Your Journey Journal, from My Story to My Future</li>
            <li>A food and movement plan built around your real week</li>
            <li>A weekly check-in with me, adjusted to how your week went</li>
            <li>WhatsApp support between check-ins, within agreed hours</li>
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
        <div
          className="method"
          data-reveal=""
          style={{ "--d": " 1" } as CSSProperties}
        >
          <p className="method-title">
            What we work on
            <span>Six areas. One plan, built around you.</span>
          </p>
          <ol className="method-list">
            <li>
              <b aria-hidden="true">01</b>
              <span>
                <strong>Working through cravings</strong>
                Understand your triggers and develop practical ways to respond,
                without guilt or banning every food you enjoy.
              </span>
            </li>
            <li>
              <b aria-hidden="true">02</b>
              <span>
                <strong>Stress and sleep strategies</strong>
                Build ways to manage stress and improve sleep that fit the
                demands of your real life.
              </span>
            </li>
            <li>
              <b aria-hidden="true">03</b>
              <span>
                <strong>Habits that help you</strong>
                Develop helpful habits, recognise unhelpful patterns, and make
                the better choice easier.
              </span>
            </li>
            <li>
              <b aria-hidden="true">04</b>
              <span>
                <strong>Blood markers and deficiencies</strong>
                Nutrition support to work towards healthier blood markers and
                address deficiencies, alongside your doctor.
              </span>
            </li>
            <li>
              <b aria-hidden="true">05</b>
              <span>
                <strong>A diet that works for you</strong>
                A food plan designed around your tastes, routine, preferences,
                and nutritional needs.
              </span>
            </li>
            <li>
              <b aria-hidden="true">06</b>
              <span>
                <strong>Movement for your setup</strong>
                A workout or movement plan matched to your space, equipment,
                and schedule, whether at home, in a gym, or outdoors.
              </span>
            </li>
          </ol>
          <div className="programme-learning">
            <h2>Learn while you progress.</h2>
            <p>
              Along the way, I teach you the basics of nutrition and exercise,
              so you understand your plan, make informed choices, and build the
              confidence to keep going on your own.
            </p>
          </div>
        </div>
      </div>
      <div className="honest" data-reveal="">
        <h3>Honest by design</h3>
        <div className="honest-cols">
          <div className="honest-col yes">
            <span className="honest-kicker">What we promise</span>
            <ul>
              <li>Direct support from Akshat, who knows your story</li>
              <li>A plan that fits your actual life</li>
              <li>Steady, sustainable progress. No crash diets.</li>
              <li>No guilt, and no starting over from zero</li>
            </ul>
          </div>
          <div className="honest-col no">
            <span className="honest-kicker">What we won’t promise</span>
            <ul>
              <li>A guaranteed number of kilos by a date</li>
              <li>Results without effort</li>
              <li>
                Medical treatment. We work alongside your doctor, not instead of
                them.
              </li>
              <li>Perfect weeks. You don’t need them.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProgrammeSection;
