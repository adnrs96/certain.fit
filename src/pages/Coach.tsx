import type { CSSProperties } from "react";

const Coach = () => (
  <section className="partner" id="coach">
    <div className="container partner-grid">
      <div className="partner-copy">
        <div className="section-head" data-reveal="">
          <span className="eyebrow-pill on-dark">YOUR CERTAIN COACH</span>
          <h1 className="section-title left">
            Someone in your corner,{" "}
            <span className="serif-italic">
              throughout your transformation.
            </span>
          </h1>
          <p className="section-lead">
            Your CERTAIN coach is a real person who supports you one-to-one.
            They bring the know-how on food, movement and habits, build your
            plan around your real week, and help you get back on track when life
            gets in the way.
          </p>
        </div>
        <div className="role-grid">
          <article className="role-card" data-reveal="">
            <span className="role-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <h3>Gets to know you</h3>
            <p>
              Your story, your WHY, and what has made weight loss hard before.
              It starts on Day 0.
            </p>
          </article>
          <article
            className="role-card"
            data-reveal=""
            style={{ "--d": " 1" } as CSSProperties}
          >
            <span className="role-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V15h7v-1.1A6 6 0 0 0 12 3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <h3>Turns insight into action</h3>
            <p>
              Find Friday evenings hard? You’ll build a Friday-evening plan
              together. Your journal shapes your plan.
            </p>
          </article>
          <article
            className="role-card"
            data-reveal=""
            style={{ "--d": " 2" } as CSSProperties}
          >
            <span className="role-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  d="M4 20v-6M4 10V4M12 20v-8M12 8V4M20 20v-4M20 12V4M2 14h4M10 8h4M18 16h4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <h3>Adjusts every week</h3>
            <p>
              Your check-in asks “What did we learn about you this week?”, never
              “Did you follow your diet?”
            </p>
          </article>
          <article
            className="role-card"
            data-reveal=""
            style={{ "--d": " 3" } as CSSProperties}
          >
            <span className="role-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  d="M20 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <h3>Reaches out first</h3>
            <p>
              Back from a trip or a tough week? You don’t have to restart the
              conversation. Your coach does.
            </p>
          </article>
        </div>
      </div>
      <figure
        className="chat-card"
        data-reveal=""
        style={{ "--d": " 1" } as CSSProperties}
      >
        <div className="chat-head">
          <span
            className="chat-avatar avatar-photo"
            role="img"
            aria-label="Profile picture of Rhea Menon (sample)"
          ></span>
          <div className="chat-who">
            <strong>Rhea Menon</strong>
            <small>
              Your CERTAIN coach
              <span className="chat-channel"> · WhatsApp</span>
            </small>
          </div>
          <span className="example-tag">Example</span>
        </div>
        <div className="chat-body">
          <span className="chat-day">FRIDAY</span>
          <p className="msg you">
            Office dinner tonight. I always end up overeating at these.
            <time>5:42 pm</time>
          </p>
          <p className="msg partner">
            Thanks for telling me early! In your journal you wrote that Fridays
            get hard when you go hours without eating. How about something small
            at 6, before you head out?<time>5:45 pm</time>
          </p>
          <p className="msg you">
            Good idea. A banana and a handful of peanuts it is.
            <time>5:47 pm</time>
          </p>
          <p className="msg partner">
            Perfect. Enjoy the evening, no guilt either way. Tell me how it went
            at Monday’s check-in.<time>5:48 pm</time>
          </p>
        </div>
        <figcaption className="chat-foot">
          Your journal → your coach →{" "}
          <strong>a plan for Friday evenings</strong>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default Coach;
