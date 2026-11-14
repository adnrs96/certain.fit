import type { CSSProperties } from "react";

const HowItWorks = () => (
  <>
    <section className="how" id="how-it-works">
      <div className="container">
        <div className="section-head center" data-reveal="">
          <span className="eyebrow-pill">HOW IT WORKS</span>
          <h1 className="section-title">
            Not just a plan.{" "}
            <span className="serif-italic">A way of living that lasts.</span>
          </h1>
          <p className="section-lead">
            Most programmes only measure how well you follow the plan. CERTAIN
            helps you build four skills that stay with you long after coaching
            ends.
          </p>
        </div>
        <ol className="stage-track">
          <li className="stage" data-reveal="">
            <span className="stage-num">01</span>
            <span className="stage-when">Days 0–3</span>
            <h3>Understand yourself</h3>
            <p>
              I introduce your Journey Journal. Together we explore
              your WHY, your past attempts, your strengths and the moments that
              make healthy choices hard.
            </p>
          </li>
          <li
            className="stage"
            data-reveal=""
            style={{ "--d": " 1" } as CSSProperties}
          >
            <span className="stage-num">02</span>
            <span className="stage-when">Every week</span>
            <h3>Build your routines</h3>
            <p>
              Food and movement that fit your actual week. A short reflection
              before each weekly check-in, and a progress review every 4 weeks
              to celebrate wins and recalibrate.
            </p>
          </li>
          <li
            className="stage"
            data-reveal=""
            style={{ "--d": " 2" } as CSSProperties}
          >
            <span className="stage-num">03</span>
            <span className="stage-when">Whenever life happens</span>
            <h3>Learn to recover</h3>
            <p>
              Holidays, festivals, deadlines, illness. You practise getting back
              to your routine without guilt, with a plan for each situation.
            </p>
          </li>
          <li
            className="stage"
            data-reveal=""
            style={{ "--d": " 3" } as CSSProperties}
          >
            <span className="stage-num">04</span>
            <span className="stage-when">When you’re ready</span>
            <h3>Become independent</h3>
            <p>
              Spot your early warning signs, plan for busy seasons and write a
              letter to your Day 0 self. You leave knowing how to run your own
              journey.
            </p>
          </li>
        </ol>
        <div className="rhythm-strip" data-reveal="">
          <span className="rhythm-label">Your rhythm with Akshat</span>
          <ol>
            <li>
              <b>Day 0</b>My Story
            </li>
            <li>
              <b>Day 1</b>My WHY
            </li>
            <li>
              <b>Days 2–3</b>Understanding Myself
            </li>
            <li>
              <b>Week 1</b>First reflection
            </li>
            <li>
              <b>Every week</b>Reflection and check-in
            </li>
            <li>
              <b>Every 4 weeks</b>Progress review
            </li>
            <li>
              <b>When you’re ready</b>My Future
            </li>
          </ol>
        </div>
      </div>
    </section>
    <section className="progress" id="progress">
      <div className="container">
        <div className="section-head center" data-reveal="">
          <span className="eyebrow-pill">TWO KINDS OF PROGRESS</span>
          <h2 className="section-title">
            The scale tells part of the story.{" "}
            <span className="serif-italic">We measure the rest too.</span>
          </h2>
        </div>
        <div className="progress-grid">
          <article className="pg-card outcome" data-reveal="">
            <span className="pg-kicker">Outcome progress</span>
            <h3>What changes in your body</h3>
            <p>Weight, waist and the health markers that matter to you.</p>
            <figure className="trend">
              <svg
                viewBox="0 0 320 120"
                role="img"
                aria-label="Illustration: daily weight readings go up and down while the weekly trend line moves steadily down"
              >
                <defs>
                  <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="#1F69AD"
                      stopOpacity="0.16"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="#1F69AD"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  className="trend-grid"
                  d="M12 30H308M12 60H308M12 90H308"
                ></path>
                <g className="trend-dots">
                  <circle cx="12.0" cy="32.6" r="2.6"></circle>
                  <circle cx="20.7" cy="26.9" r="2.6"></circle>
                  <circle cx="29.4" cy="43.0" r="2.6"></circle>
                  <circle cx="38.1" cy="28.0" r="2.6"></circle>
                  <circle cx="46.8" cy="50.6" r="2.6"></circle>
                  <circle cx="55.5" cy="40.6" r="2.6"></circle>
                  <circle cx="64.2" cy="30.5" r="2.6"></circle>
                  <circle cx="72.9" cy="51.2" r="2.6"></circle>
                  <circle cx="81.6" cy="42.8" r="2.6"></circle>
                  <circle cx="90.4" cy="61.7" r="2.6"></circle>
                  <circle cx="99.1" cy="42.9" r="2.6"></circle>
                  <circle cx="107.8" cy="53.2" r="2.6"></circle>
                  <circle cx="116.5" cy="63.5" r="2.6"></circle>
                  <circle cx="125.2" cy="44.6" r="2.6"></circle>
                  <circle cx="133.9" cy="61.7" r="2.6"></circle>
                  <circle cx="142.6" cy="56.5" r="2.6"></circle>
                  <circle cx="151.3" cy="75.3" r="2.6"></circle>
                  <circle cx="160.0" cy="56.3" r="2.6"></circle>
                  <circle cx="168.7" cy="66.5" r="2.6"></circle>
                  <circle cx="177.4" cy="57.8" r="2.6"></circle>
                  <circle cx="186.1" cy="78.3" r="2.6"></circle>
                  <circle cx="194.8" cy="67.8" r="2.6"></circle>
                  <circle cx="203.5" cy="60.8" r="2.6"></circle>
                  <circle cx="212.2" cy="79.5" r="2.6"></circle>
                  <circle cx="220.9" cy="74.2" r="2.6"></circle>
                  <circle cx="229.6" cy="87.7" r="2.6"></circle>
                  <circle cx="238.4" cy="70.4" r="2.6"></circle>
                  <circle cx="247.1" cy="75.3" r="2.6"></circle>
                  <circle cx="255.8" cy="85.4" r="2.6"></circle>
                  <circle cx="264.5" cy="73.2" r="2.6"></circle>
                  <circle cx="273.2" cy="91.8" r="2.6"></circle>
                  <circle cx="281.9" cy="83.0" r="2.6"></circle>
                  <circle cx="290.6" cy="81.1" r="2.6"></circle>
                  <circle cx="299.3" cy="98.0" r="2.6"></circle>
                  <circle cx="308.0" cy="89.1" r="2.6"></circle>
                </g>
                <path
                  className="trend-area"
                  d="M12.0,32.6 C13.5,32.1 17.8,29.5 20.7,29.7 C23.6,30.0 26.5,33.7 29.4,34.1 C32.3,34.6 35.2,32.3 38.1,32.6 C41.0,32.9 43.9,35.5 46.8,36.2 C49.7,36.9 52.6,37.0 55.5,36.9 C58.4,36.9 61.3,35.7 64.2,36.0 C67.1,36.3 70.0,37.9 72.9,38.7 C75.8,39.5 78.7,40.1 81.6,40.9 C84.5,41.8 87.5,42.8 90.4,43.6 C93.3,44.4 96.2,45.3 99.1,45.7 C102.0,46.2 104.9,45.5 107.8,46.1 C110.7,46.7 113.6,48.5 116.5,49.4 C119.4,50.3 122.3,50.8 125.2,51.4 C128.1,52.0 131.0,52.3 133.9,52.9 C136.8,53.5 139.7,54.2 142.6,54.9 C145.5,55.5 148.4,56.2 151.3,56.8 C154.2,57.4 157.1,58.1 160.0,58.7 C162.9,59.4 165.8,60.4 168.7,60.6 C171.6,60.8 174.5,59.2 177.4,59.8 C180.3,60.5 183.2,63.7 186.1,64.6 C189.0,65.6 191.9,65.3 194.8,65.5 C197.7,65.8 200.6,65.9 203.5,66.1 C206.4,66.3 209.3,66.2 212.2,66.7 C215.1,67.3 218.0,68.4 220.9,69.3 C223.8,70.2 226.7,71.5 229.6,72.3 C232.5,73.1 235.5,73.9 238.4,74.1 C241.3,74.3 244.2,73.3 247.1,73.7 C250.0,74.0 252.9,75.5 255.8,76.2 C258.7,76.9 261.6,77.4 264.5,78.0 C267.4,78.6 270.3,79.2 273.2,79.7 C276.1,80.2 279.0,80.9 281.9,81.0 C284.8,81.0 287.7,79.5 290.6,80.0 C293.5,80.5 296.4,83.0 299.3,84.0 C302.2,85.0 306.5,85.6 308.0,86.0 L308,118 L12,118 Z"
                ></path>
                <path
                  className="trend-line"
                  pathLength="100"
                  d="M12.0,32.6 C13.5,32.1 17.8,29.5 20.7,29.7 C23.6,30.0 26.5,33.7 29.4,34.1 C32.3,34.6 35.2,32.3 38.1,32.6 C41.0,32.9 43.9,35.5 46.8,36.2 C49.7,36.9 52.6,37.0 55.5,36.9 C58.4,36.9 61.3,35.7 64.2,36.0 C67.1,36.3 70.0,37.9 72.9,38.7 C75.8,39.5 78.7,40.1 81.6,40.9 C84.5,41.8 87.5,42.8 90.4,43.6 C93.3,44.4 96.2,45.3 99.1,45.7 C102.0,46.2 104.9,45.5 107.8,46.1 C110.7,46.7 113.6,48.5 116.5,49.4 C119.4,50.3 122.3,50.8 125.2,51.4 C128.1,52.0 131.0,52.3 133.9,52.9 C136.8,53.5 139.7,54.2 142.6,54.9 C145.5,55.5 148.4,56.2 151.3,56.8 C154.2,57.4 157.1,58.1 160.0,58.7 C162.9,59.4 165.8,60.4 168.7,60.6 C171.6,60.8 174.5,59.2 177.4,59.8 C180.3,60.5 183.2,63.7 186.1,64.6 C189.0,65.6 191.9,65.3 194.8,65.5 C197.7,65.8 200.6,65.9 203.5,66.1 C206.4,66.3 209.3,66.2 212.2,66.7 C215.1,67.3 218.0,68.4 220.9,69.3 C223.8,70.2 226.7,71.5 229.6,72.3 C232.5,73.1 235.5,73.9 238.4,74.1 C241.3,74.3 244.2,73.3 247.1,73.7 C250.0,74.0 252.9,75.5 255.8,76.2 C258.7,76.9 261.6,77.4 264.5,78.0 C267.4,78.6 270.3,79.2 273.2,79.7 C276.1,80.2 279.0,80.9 281.9,81.0 C284.8,81.0 287.7,79.5 290.6,80.0 C293.5,80.5 296.4,83.0 299.3,84.0 C302.2,85.0 306.5,85.6 308.0,86.0"
                ></path>
                <circle className="trend-end" cx="308" cy="86" r="5"></circle>
              </svg>
              <figcaption>
                <span className="lg-dot"></span>Daily readings{" "}
                <span className="lg-line"></span>Weekly trend{" "}
                <em>Illustration</em>
              </figcaption>
            </figure>
            <p className="pg-foot">
              Single days bounce around. We read the calm weekly trend, not one
              morning’s number.
            </p>
          </article>
          <article
            className="pg-card personal"
            data-reveal=""
            style={{ "--d": " 1" } as CSSProperties}
          >
            <span className="pg-kicker">Personal progress</span>
            <h3>What changes in how you live</h3>
            <p>How much better you’ve become at navigating your own life.</p>
            <ul className="skill-list">
              <li>Planned ahead for a family wedding</li>
              <li>Back in rhythm after a busy week</li>
              <li>Spotted a trigger before it took over</li>
              <li>Kept a minimum routine through a deadline</li>
            </ul>
            <p className="pg-question">
              <b>Every month, you’ll ask yourself</b>“What can I do today that I
              couldn’t do when I started CERTAIN?”
            </p>
          </article>
        </div>
        <p className="progress-close" data-reveal="">
          The second kind of progress is what makes the first one{" "}
          <span className="serif-italic">last.</span>
        </p>
      </div>
    </section>
  </>
);

export default HowItWorks;
