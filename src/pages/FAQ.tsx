import type { CSSProperties } from "react";

const FAQ = () => (
  <section className="faq" id="faq">
    <div className="container faq-grid">
      <div className="section-head" data-reveal="">
        <span className="eyebrow-pill">QUESTIONS</span>
        <h1 className="section-title left">
          Good questions <span className="serif-italic">to ask.</span>
        </h1>
        <p className="section-lead">
          Can’t find yours? Ask it in your first conversation.
        </p>
      </div>
      <div
        className="faq-list"
        data-reveal=""
        style={{ "--d": " 1" } as CSSProperties}
      >
        <details className="faq-item" open>
          <summary>Will I work directly with Akshat?</summary>
          <div className="faq-body">
            <p>
              Yes. I’m Akshat, the founder of CERTAIN, and I personally guide
              the programme. From understanding your story to building your
              food and movement plan, reviewing your progress, and helping you
              adapt, you work directly with me.
            </p>
          </div>
        </details>
        <details className="faq-item">
          <summary>Is this a diet?</summary>
          <div className="faq-body">
            <p>
              No crash diets and no foods you have to give up forever. Your plan
              is built around the food you already eat at home and adjusted a
              step at a time, so it still works on busy days, at family dinners
              and on holiday.
            </p>
          </div>
        </details>
        <details className="faq-item">
          <summary>
            What if I go on holiday, get busy or fall off track?
          </summary>
          <div className="faq-body">
            <p>
              Then you’re living a normal life, and CERTAIN is built for it.
              I help you plan ahead, adjust expectations while you’re away,
              and guide you back with the Return to Rhythm protocol.
              There’s no catching up and no starting over from zero.
            </p>
          </div>
        </details>
        <details className="faq-item">
          <summary>Do I have to fill in the journal every week?</summary>
          <div className="faq-body">
            <p>
              Just a few short prompts before each weekly check-in. Write a
              sentence, tick a box or record a voice note. The journal isn’t
              organised by week numbers, so if you miss a week, there’s nothing
              to catch up on.
            </p>
          </div>
        </details>
        <details className="faq-item">
          <summary>Do I have to weigh myself every day?</summary>
          <div className="faq-body">
            <p>
              No. We look at calm weekly trends rather than single readings, and
              progress also means your waist, energy, strength and how you’re
              handling real life. If the scale stresses you out, tell me
              and we’ll track progress in other ways.
            </p>
          </div>
        </details>
        <details className="faq-item">
          <summary>I have a health condition. Can I join?</summary>
          <div className="faq-body">
            <p>
              CERTAIN is a lifestyle and behaviour-change programme, not medical
              treatment. If you have a condition such as a thyroid issue, PCOS
              or type 2 diabetes, please check with your doctor before making
              changes, and I’ll plan around their advice. If you’re
              pregnant, have or have had an eating disorder, or are in cancer
              treatment, CERTAIN isn’t the right place to start. Please consult
              your physician before you enrol for a weight loss program.
            </p>
          </div>
        </details>
      </div>
    </div>
  </section>
);

export default FAQ;
