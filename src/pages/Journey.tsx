import type { CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTimelineEstimate } from "@/lib/site-pages";

const Journey = () => {
  const location = useLocation();
  const timelineEstimate = getTimelineEstimate(location.state);
  return (
    <section className="start" id="start-journey">
      <div className="container start-grid">
        <div className="start-copy" data-reveal="">
          <span className="eyebrow-pill">START HERE</span>
          <h1 className="section-title left">
            Let’s start <span className="serif-italic">with your story.</span>
          </h1>
          <p className="section-lead">
            I’m Akshat. Three short questions, about two minutes, to start a
            conversation with me about your story, not a sales script.
          </p>
          <ol className="expect">
            <li>
              <b>Tell me a little about you</b>
              <span>
                Your WHY, your real week, and how you usually restart.
              </span>
            </li>
            <li>
              <b>Your first conversation</b>
              <span>
                We’ll talk about your story, what’s made it hard before, and
                whether CERTAIN is right for you. No pressure.
              </span>
            </li>
            <li>
              <b>Day 0</b>
              <span>
                If it feels right, we open your Journey Journal and build your
                starting plan together.
              </span>
            </li>
          </ol>
          <p
            className="estimate-attached hidden"
            id="estimate-attached"
            role="status"
          ></p>
        </div>
        <div
          className="start-card"
          data-reveal=""
          style={{ "--d": " 1" } as CSSProperties}
        >
          <form id="journey-form" className="journey-form" noValidate>
            <ol className="jf-progress" aria-hidden="true">
              <li className="is-active">Your WHY</li>
              <li>Your real life</li>
              <li>About you</li>
            </ol>
            <div className="jf-step" data-step="0">
              <fieldset>
                <legend>What made you decide that now is the time?</legend>
                <div className="jf-options">
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="why"
                      defaultValue="I want to feel confident in my body again"
                    />
                    <span>Feel confident in my body again</span>
                  </label>
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="why"
                      defaultValue="My health is telling me to"
                    />
                    <span>My health is telling me to</span>
                  </label>
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="why"
                      defaultValue="I want more energy for my family"
                    />
                    <span>More energy for my family</span>
                  </label>
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="why"
                      defaultValue="I’m tired of starting over"
                    />
                    <span>I’m tired of starting over</span>
                  </label>
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="why"
                      defaultValue="Something else"
                    />
                    <span>Something else</span>
                  </label>
                </div>
              </fieldset>
              <label className="jf-field">
                <span>
                  In your own words <small>(optional)</small>
                </span>
                <textarea
                  name="why_words"
                  rows={2}
                  maxLength={300}
                  placeholder="e.g. I want to keep up with my kids on holiday"
                ></textarea>
              </label>
              <p className="jf-error" aria-live="polite" hidden></p>
              <div className="jf-actions">
                <button type="button" className="btn-ocean-lg" data-next="">
                  Next →
                </button>
              </div>
            </div>
            <div className="jf-step" data-step="1" hidden>
              <fieldset>
                <legend>
                  What usually gets in the way? <small>Pick any</small>
                </legend>
                <div className="jf-options">
                  <label className="jf-pill check">
                    <input
                      type="checkbox"
                      name="barrier"
                      defaultValue="Long workdays"
                      data-focus="Minimum Viable Routine"
                      data-focus-text="The smallest version of your routine worth keeping, so busy weeks don’t undo good ones."
                    />
                    <span>Long workdays</span>
                  </label>
                  <label className="jf-pill check">
                    <input
                      type="checkbox"
                      name="barrier"
                      defaultValue="Social events and eating out"
                      data-focus="Flexible Eating Protocol"
                      data-focus-text="Enjoy the occasion fully, with a few easy anchors around it."
                    />
                    <span>Social events &amp; eating out</span>
                  </label>
                  <label className="jf-pill check">
                    <input
                      type="checkbox"
                      name="barrier"
                      defaultValue="Travel"
                      data-focus="Return to Rhythm"
                      data-focus-text="A planned, gentle way back after every trip, with no catching up."
                    />
                    <span>Travel</span>
                  </label>
                  <label className="jf-pill check">
                    <input
                      type="checkbox"
                      name="barrier"
                      defaultValue="Stress"
                      data-focus="Understanding Myself"
                      data-focus-text="Spotting what sets off stress eating, without judgement."
                    />
                    <span>Stress</span>
                  </label>
                  <label className="jf-pill check">
                    <input
                      type="checkbox"
                      name="barrier"
                      defaultValue="All-or-nothing weeks"
                      data-focus="Return to Rhythm"
                      data-focus-text="So one off day never turns into a lost month."
                    />
                    <span>All-or-nothing weeks</span>
                  </label>
                </div>
              </fieldset>
              <fieldset className="jf-second">
                <legend>
                  When you lose your routine, what usually happens?
                </legend>
                <div className="jf-options">
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="restart"
                      defaultValue="I restart quickly"
                      data-reply="Restarting quickly is a real strength. I’ll help you build on it."
                    />
                    <span>I restart quickly</span>
                  </label>
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="restart"
                      defaultValue="It takes me a week or two"
                      data-reply="Together, we’ll make that gap shorter, one small step at a time."
                    />
                    <span>It takes me a week or two</span>
                  </label>
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="restart"
                      defaultValue="I put it off until Monday"
                      data-reply="That’s the all-or-nothing pattern, and it’s exactly what Return to Rhythm is for."
                    />
                    <span>I put it off until “Monday”</span>
                  </label>
                </div>
              </fieldset>
              <p className="jf-error" aria-live="polite" hidden></p>
              <div className="jf-actions">
                <button type="button" className="jf-back" data-back="">
                  ← Back
                </button>
                <button type="button" className="btn-ocean-lg" data-next="">
                  Next →
                </button>
              </div>
            </div>
            <div className="jf-step" data-step="2" hidden>
              <fieldset>
                <legend>Last bit: a little about you</legend>
                <div className="jf-fields">
                  <label className="jf-field">
                    <span>First name</span>
                    <input
                      type="text"
                      name="first_name"
                      autoComplete="given-name"
                      maxLength={40}
                      required
                    />
                  </label>
                  <label className="jf-field">
                    <span>
                      City <small>(optional)</small>
                    </span>
                    <input
                      type="text"
                      name="city"
                      autoComplete="address-level2"
                      maxLength={40}
                    />
                  </label>
                </div>
              </fieldset>
              <fieldset className="jf-second">
                <legend>
                  Best time to talk <small>(optional)</small>
                </legend>
                <div className="jf-options">
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="talk_time"
                      defaultValue="Mornings"
                    />
                    <span>Mornings</span>
                  </label>
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="talk_time"
                      defaultValue="Afternoons"
                    />
                    <span>Afternoons</span>
                  </label>
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="talk_time"
                      defaultValue="Evenings"
                    />
                    <span>Evenings</span>
                  </label>
                  <label className="jf-pill">
                    <input
                      type="radio"
                      name="talk_time"
                      defaultValue="Weekends"
                    />
                    <span>Weekends</span>
                  </label>
                </div>
              </fieldset>
              <input
                type="hidden"
                name="timeline_estimate"
                defaultValue={timelineEstimate}
              />
              <p className="jf-error" aria-live="polite" hidden></p>
              <div className="jf-actions">
                <button type="button" className="jf-back" data-back="">
                  ← Back
                </button>
                <button type="submit" className="btn-ocean-lg">
                  Talk to Akshat →
                </button>
              </div>
            </div>
          </form>
          <div className="welcome-card hidden" id="welcome-card" tabIndex={-1}>
            <span className="wc-kicker">WELCOME TO CERTAIN</span>
            <h3 className="wc-title">
              You’re not doing this alone, <span data-fill="name"></span>.
            </h3>
            <p className="wc-promise">
              Your journey. Your pace. Someone in your corner.
            </p>
            <div className="wc-grid">
              <div className="wc-block">
                <span className="wc-label">Your WHY</span>
                <p data-fill="why"></p>
              </div>
              <div className="wc-block">
                <span className="wc-label">Where I’d start</span>
                <ul className="wc-focus" data-fill="focus"></ul>
                <p className="wc-restart" data-fill="restart"></p>
              </div>
              <div className="wc-block hidden" data-show="estimate">
                <span className="wc-label">Your timeline estimate</span>
                <p data-fill="estimate"></p>
              </div>
              <div className="wc-block wc-prompt">
                <span className="wc-label">Your first Journal prompt</span>
                <p className="hand">
                  Imagine you’ve reached your goal. What would be different
                  about your life?
                </p>
              </div>
            </div>
            <div className="wc-actions">
              <a
                className="btn-whatsapp hidden"
                id="wc-whatsapp"
                href="#"
                target="_blank"
                rel="noopener"
              >
                Say hello on WhatsApp
              </a>
              <Link className="btn-ghost-lg" id="wc-timeline" to="/timeline">
                See how long it might take →
              </Link>
              <button type="button" className="jf-back" id="wc-edit">
                Edit my answers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
