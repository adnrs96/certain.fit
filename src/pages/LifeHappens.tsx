const LifeHappens = () => (
  <section className="life" id="life-happens">
    <div className="container">
      <div className="section-head center" data-reveal="">
        <span className="eyebrow-pill">WHEN LIFE HAPPENS</span>
        <h1 className="section-title">
          We don’t expect life to stop{" "}
          <span className="serif-italic">so you can lose weight.</span>
        </h1>
        <p className="section-lead">
          We help you build a way of living that can accommodate life. Most
          programmes teach you how to stay consistent. CERTAIN also teaches you
          how to <strong>return</strong> to consistency.
        </p>
      </div>
      <div className="states-wrap" data-reveal="">
        <div className="states">
          <article className="state s-rhythm">
            <span className="state-dot" aria-hidden="true"></span>
            <h3>In Rhythm</h3>
            <p>
              Your regular routine: building habits and moving towards your
              goals.
            </p>
          </article>
          <span className="state-arrow" aria-hidden="true">
            →
          </span>
          <article className="state s-flex">
            <span className="state-dot" aria-hidden="true"></span>
            <h3>In Flex Mode</h3>
            <p>
              Travel, events, a busy month. Expectations are adjusted, not
              abandoned.
            </p>
          </article>
          <span className="state-arrow" aria-hidden="true">
            →
          </span>
          <article className="state s-return">
            <span className="state-dot" aria-hidden="true"></span>
            <h3>Returning to Rhythm</h3>
            <p>
              Rebuilding your routine first, before chasing any weight-loss
              targets.
            </p>
          </article>
        </div>
        <div className="states-loop" aria-hidden="true">
          <span>and back to In Rhythm</span>
        </div>
        <p className="states-note">None of these means failure.</p>
      </div>
      <div className="situations" data-tabs="" data-reveal="">
        <p className="situations-label" id="situations-label">
          Pick a situation to see how CERTAIN handles it
        </p>
        <div
          className="situation-tabs"
          role="tablist"
          aria-labelledby="situations-label"
        >
          <button
            type="button"
            role="tab"
            id="st-holiday"
            aria-controls="sp-holiday"
            aria-selected="true"
          >
            Holiday
          </button>
          <button
            type="button"
            role="tab"
            id="st-festival"
            aria-controls="sp-festival"
            aria-selected="false"
            tabIndex={-1}
          >
            Wedding or festival
          </button>
          <button
            type="button"
            role="tab"
            id="st-work"
            aria-controls="sp-work"
            aria-selected="false"
            tabIndex={-1}
          >
            Heavy workload
          </button>
          <button
            type="button"
            role="tab"
            id="st-illness"
            aria-controls="sp-illness"
            aria-selected="false"
            tabIndex={-1}
          >
            Illness
          </button>
          <button
            type="button"
            role="tab"
            id="st-family"
            aria-controls="sp-family"
            aria-selected="false"
            tabIndex={-1}
          >
            Family emergency
          </button>
          <button
            type="button"
            role="tab"
            id="st-motivation"
            aria-controls="sp-motivation"
            aria-selected="false"
            tabIndex={-1}
          >
            Losing motivation
          </button>
          <button
            type="button"
            role="tab"
            id="st-missed"
            aria-controls="sp-missed"
            aria-selected="false"
            tabIndex={-1}
          >
            Missed check-ins
          </button>
        </div>
        <div className="situation-panels">
          <div
            className="sp"
            role="tabpanel"
            id="sp-holiday"
            aria-labelledby="st-holiday"
          >
            <header className="sp-head">
              <span className="sp-kicker">CERTAIN protocol</span>
              <h3>Return to Rhythm</h3>
              <p>
                A gentle return to familiar routines, not a punishment for
                enjoying life.
              </p>
            </header>
            <ol className="rr-phases">
              <li className="rr-phase before">
                <span className="rr-when">Before you go · 3–5 days ahead</span>
                <h4>Plan the pause</h4>
                <p>
                  Your coach starts the conversation: what’s changing, what
                  you’re looking forward to, and when you’ll realistically be
                  back. Together you agree a minimum viable routine.
                </p>
                <ul className="mvr">
                  <li>
                    <b>Nutrition</b>Mindful of portions where practical. No
                    tracking everything.
                  </li>
                  <li>
                    <b>Movement</b>Walk when the chance comes up.
                  </li>
                  <li>
                    <b>Awareness</b>Notice your eating patterns without judging
                    yourself.
                  </li>
                  <li>
                    <b>Enjoyment</b>Enjoy the trip. Food isn’t a moral decision.
                  </li>
                </ul>
                <p className="rr-partner">
                  <b>Your coach</b> agrees these with you, plus a realistic
                  return date.
                </p>
              </li>
              <li className="rr-phase away">
                <span className="rr-when">
                  While you’re away · In Flex Mode
                </span>
                <h4>Enjoy it</h4>
                <p>
                  No one checking up on your diet. Just one optional page in
                  your journal:
                </p>
                <p className="rr-note">
                  <span className="hand">Three things I enjoyed this week</span>
                  A new food, an activity, a moment I felt good about myself.
                </p>
                <p className="rr-partner">
                  <b>Your coach</b> stays in the background. No unnecessary
                  check-ins.
                </p>
              </li>
              <li className="rr-phase back">
                <span className="rr-when">
                  Coming home · the first 72 hours
                </span>
                <h4>Find your rhythm again</h4>
                <ol className="rr-days">
                  <li>
                    <b>Day 1 · Reconnect</b>A personal welcome-back message.
                    Reflect on the trip and choose one familiar routine to
                    restart.
                  </li>
                  <li>
                    <b>Day 2 · Re-establish</b>Normal meals, groceries,
                    comfortable movement, regular sleep. No crash dieting or
                    punishing workouts.
                  </li>
                  <li>
                    <b>Day 3 · Re-engage</b>Back to your plan, adjusted where
                    needed. One small commitment for the week, and your next
                    check-in booked.
                  </li>
                </ol>
                <p className="rr-partner">
                  <b>Your coach</b> reaches out first: a message on day one, a
                  short chat within 48 hours, and your usual check-in back by
                  the end of the week.
                </p>
              </li>
            </ol>
            <div className="rr-foot">
              <figure className="welcome-back">
                <figcaption>
                  Day 1 · a message from your coach{" "}
                  <span className="example-tag">Example</span>
                </figcaption>
                <p>
                  Hey! Welcome back! 😊 Hope you had a wonderful time. Before we
                  jump back into our usual routine, let’s take a moment to see
                  how you’re feeling. There’s absolutely no catching up or
                  making up for lost time. One step at a time. We’re back
                  together!
                </p>
              </figure>
              <ul className="rr-truths">
                <li>
                  <b>Three days is a framework, not a deadline.</b>Back from a
                  long, tiring trip? You take it gentler.
                </li>
                <li>
                  <b>Your first weigh-in back isn’t a verdict.</b>Water, salt,
                  digestion and a change of routine can all move short-term
                  readings.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="sp"
            role="tabpanel"
            id="sp-festival"
            aria-labelledby="st-festival"
            hidden
          >
            <header className="sp-head">
              <span className="sp-kicker">CERTAIN protocol</span>
              <h3>Flexible Eating Protocol</h3>
              <p>
                Weddings and festivals are for enjoying. You and your coach plan
                for the season instead of fighting it.
              </p>
            </header>
            <ol className="sp-steps">
              <li>
                Decide together which meals and moments you’ll fully enjoy.
              </li>
              <li>
                Keep two or three easy anchors around them, like a morning walk
                or a simple breakfast.
              </li>
              <li>Celebrate without guilt. Food isn’t a moral decision.</li>
            </ol>
          </div>
          <div
            className="sp"
            role="tabpanel"
            id="sp-work"
            aria-labelledby="st-work"
            hidden
          >
            <header className="sp-head">
              <span className="sp-kicker">CERTAIN protocol</span>
              <h3>Minimum Viable Routine</h3>
              <p>
                When work takes over, the plan shrinks to fit, so a busy month
                doesn’t become a lost one.
              </p>
            </header>
            <ol className="sp-steps">
              <li>
                Agree the smallest routine worth keeping: a short walk, a simple
                breakfast, regular sleep.
              </li>
              <li>Check-ins get shorter, not skipped.</li>
              <li>When the deadline passes, you build back up together.</li>
            </ol>
          </div>
          <div
            className="sp"
            role="tabpanel"
            id="sp-illness"
            aria-labelledby="st-illness"
            hidden
          >
            <header className="sp-head">
              <span className="sp-kicker">CERTAIN protocol</span>
              <h3>Recovery and Gradual Resumption</h3>
              <p>Getting well comes first. Weight loss can wait.</p>
            </header>
            <ol className="sp-steps">
              <li>Rest, and follow your doctor’s advice.</li>
              <li>Your plan pauses, with no pressure to keep up.</li>
              <li>
                You ease back in gradually, at a pace that suits your recovery.
              </li>
            </ol>
          </div>
          <div
            className="sp"
            role="tabpanel"
            id="sp-family"
            aria-labelledby="st-family"
            hidden
          >
            <header className="sp-head">
              <span className="sp-kicker">CERTAIN protocol</span>
              <h3>Compassionate Pause</h3>
              <p>Some weeks, weight loss shouldn’t be on your mind at all.</p>
            </header>
            <ol className="sp-steps">
              <li>Everything pauses, no questions asked.</li>
              <li>
                Your coach checks in kindly, without asking about food or the
                scale.
              </li>
              <li>You pick things up again when you’re ready.</li>
            </ol>
          </div>
          <div
            className="sp"
            role="tabpanel"
            id="sp-motivation"
            aria-labelledby="st-motivation"
            hidden
          >
            <header className="sp-head">
              <span className="sp-kicker">CERTAIN protocol</span>
              <h3>Reconnection with your WHY</h3>
              <p>Motivation always comes and goes. Your reasons don’t.</p>
            </header>
            <ol className="sp-steps">
              <li>Revisit what you wrote in My Story on Day 0.</li>
              <li>Look back at your Wins Wall to see how far you’ve come.</li>
              <li>Reset to one small, achievable goal for the week.</li>
            </ol>
          </div>
          <div
            className="sp"
            role="tabpanel"
            id="sp-missed"
            aria-labelledby="st-missed"
            hidden
          >
            <header className="sp-head">
              <span className="sp-kicker">CERTAIN protocol</span>
              <h3>Personal Re-engagement</h3>
              <p>You won’t be left to find your own way back.</p>
            </header>
            <ol className="sp-steps">
              <li>
                If check-ins start slipping, your coach reaches out personally.
              </li>
              <li>No guilt, just a conversation about what got in the way.</li>
              <li>Together you make the plan easier to keep.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LifeHappens;
