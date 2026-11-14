import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

const Programme = () => (
  <section className="programme" id="programme">
    <div className="container">
      <div className="section-head center" data-reveal="">
        <span className="eyebrow-pill">THE PROGRAMME</span>
        <h1 className="section-title">
          One-to-one with your coach.{" "}
          <span className="serif-italic">Skills for life.</span>
        </h1>
      </div>
      <div className="programme-grid">
        <article className="offer-card" data-reveal="">
          <span className="offer-badge">FOUNDING COHORT</span>
          <h3>The CERTAIN programme</h3>
          <p className="offer-sub">One-to-one, for a small founding group.</p>
          <ul className="offer-list">
            <li>Your own CERTAIN coach, one-to-one from Day 0</li>
            <li>Your Journey Journal, from My Story to My Future</li>
            <li>A food and movement plan built around your real week</li>
            <li>A weekly check-in, adjusted to how your week went</li>
            <li>WhatsApp support between check-ins, within agreed hours</li>
            <li>A progress review every 4 weeks</li>
            <li>Return to Rhythm, and a plan for every kind of interruption</li>
            <li>Your “making it last” plan for life on your own</li>
          </ul>
          <Link className="btn-ocean-lg on-dark" to="/start-journey">
            Meet your coach →
          </Link>
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
            C·E·R·T·A·I·N <span>What you’ll work on together</span>
          </p>
          <ol className="method-list">
            <li>
              <b>C</b>
              <span>
                <strong>Calibrated nutrition</strong>Meals that fit your taste
                and your home kitchen.
              </span>
            </li>
            <li>
              <b>E</b>
              <span>
                <strong>Environment design</strong>Make the better choice the
                easy one.
              </span>
            </li>
            <li>
              <b>R</b>
              <span>
                <strong>Routines and rituals</strong>Anchors that survive busy
                days.
              </span>
            </li>
            <li>
              <b>T</b>
              <span>
                <strong>Thoughtful eating</strong>Listen to your hunger, without
                guilt.
              </span>
            </li>
            <li>
              <b>A</b>
              <span>
                <strong>Adaptive behaviour</strong>Small experiments, not rigid
                rules.
              </span>
            </li>
            <li>
              <b>I</b>
              <span>
                <strong>Individualised support</strong>A coach who knows your
                story.
              </span>
            </li>
            <li>
              <b>N</b>
              <span>
                <strong>Nurturing autonomy</strong>The confidence to keep going
                on your own.
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div className="honest" data-reveal="">
        <h3>Honest by design</h3>
        <div className="honest-cols">
          <div className="honest-col yes">
            <span className="honest-kicker">What we promise</span>
            <ul>
              <li>A real person who knows your story</li>
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

export default Programme;
