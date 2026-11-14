import type { CSSProperties } from "react";

const Journal = () => (
  <section className="journal" id="journal">
    <div className="container">
      <div className="journal-intro">
        <div className="section-head" data-reveal="">
          <span className="eyebrow-pill">THE CERTAIN JOURNEY JOURNAL</span>
          <h1 className="section-title left">
            A journal, not a workbook.{" "}
            <span className="serif-italic">It belongs to you.</span>
          </h1>
          <p className="section-lead">
            A workbook is something you complete. Your Journey Journal is a
            personal record of how you finally learned to move forward. I
            read it and bring it into our conversations, so it never
            feels like homework.
          </p>
        </div>
        <ul
          className="principles"
          data-reveal=""
          style={{ "--d": " 1" } as CSSProperties}
        >
          <li>
            <strong>Self-discovery</strong>
            <span>Understand why you do what you do, without judgement.</span>
          </li>
          <li>
            <strong>Self-efficacy</strong>
            <span>
              See, in your own words, that you’re capable of real change.
            </span>
          </li>
          <li>
            <strong>Self-ownership</strong>
            <span>
              Rely a little less on instructions each week, and a little more on
              yourself.
            </span>
          </li>
        </ul>
      </div>
      <div className="journal-book" data-tabs="" data-reveal="">
        <div className="journal-cover">
          <p className="journal-cover-title">
            <span>My</span> Journey Journal
          </p>
          <div
            className="journal-tabs"
            role="tablist"
            aria-label="Journal chapters"
            aria-orientation="vertical"
          >
            <button
              type="button"
              role="tab"
              id="jt-story"
              aria-controls="jp-story"
              aria-selected="true"
            >
              <span className="jt-num">01</span>
              <span className="jt-text">
                <strong>My Story</strong>
                <small>Understanding my WHY</small>
              </span>
            </button>
            <button
              type="button"
              role="tab"
              id="jt-patterns"
              aria-controls="jp-patterns"
              aria-selected="false"
              tabIndex={-1}
            >
              <span className="jt-num">02</span>
              <span className="jt-text">
                <strong>Understanding Myself</strong>
                <small>My patterns</small>
              </span>
            </button>
            <button
              type="button"
              role="tab"
              id="jt-week"
              aria-controls="jp-week"
              aria-selected="false"
              tabIndex={-1}
            >
              <span className="jt-num">03</span>
              <span className="jt-text">
                <strong>My Week</strong>
                <small>Weekly reflection</small>
              </span>
            </button>
            <button
              type="button"
              role="tab"
              id="jt-wins"
              aria-controls="jp-wins"
              aria-selected="false"
              tabIndex={-1}
            >
              <span className="jt-num">04</span>
              <span className="jt-text">
                <strong>My Wins Wall</strong>
                <small>Celebrating progress</small>
              </span>
            </button>
            <button
              type="button"
              role="tab"
              id="jt-life"
              aria-controls="jp-life"
              aria-selected="false"
              tabIndex={-1}
            >
              <span className="jt-num">05</span>
              <span className="jt-text">
                <strong>When Life Happens</strong>
                <small>Navigating interruptions</small>
              </span>
            </button>
            <button
              type="button"
              role="tab"
              id="jt-future"
              aria-controls="jp-future"
              aria-selected="false"
              tabIndex={-1}
            >
              <span className="jt-num">06</span>
              <span className="jt-text">
                <strong>My Future</strong>
                <small>Making it last</small>
              </span>
            </button>
          </div>
          <p className="journal-nonlinear">
            No week numbers to fall behind on. Open the page you need, when you
            need it.
          </p>
        </div>
        <div className="journal-page">
          <span className="jp-stamp">Example entries</span>
          <div
            className="jp-panel"
            role="tabpanel"
            id="jp-story"
            aria-labelledby="jt-story"
          >
            <header className="jp-head">
              <span className="jp-meta">
                Chapter 01 · Days 0–1, with Akshat
              </span>
              <h3>My Story</h3>
              <p>
                What brought me here, what I want to change, and why it matters.
              </p>
            </header>
            <ol className="jp-prompts">
              <li>
                <span className="jp-q">
                  What made you decide that now was the time?
                </span>
                <span className="hand">
                  I hid at the back of every photo at my cousin’s wedding.
                </span>
              </li>
              <li>
                <span className="jp-q">
                  Imagine you’ve reached your goal. What would be different
                  about your life?
                </span>
                <span className="hand">
                  I’d say yes to the Coorg trek with my friends.
                </span>
              </li>
              <li>
                <span className="jp-q">
                  How would you like to feel about yourself six months from now?
                </span>
                <span className="hand">Proud. In control, not on a diet.</span>
              </li>
            </ol>
          </div>
          <div
            className="jp-panel"
            role="tabpanel"
            id="jp-patterns"
            aria-labelledby="jt-patterns"
            hidden
          >
            <header className="jp-head">
              <span className="jp-meta">
                Chapter 02 · Days 2–3, revisited when needed
              </span>
              <h3>Understanding Myself</h3>
              <p>
                My past attempts, my environment, my habits and my strengths.
              </p>
            </header>
            <div className="jp-areas">
              <div>
                <b>My previous attempts</b>
                <span>What worked? Why did I stop?</span>
              </div>
              <div>
                <b>My environment</b>
                <span>Which situations make healthy choices hard?</span>
              </div>
              <div>
                <b>My habits</b>
                <span>When do I tend to overeat? What triggers it?</span>
              </div>
              <div>
                <b>My strengths</b>
                <span>What have I changed successfully before?</span>
              </div>
            </div>
            <div className="jp-highlight">
              <span className="jp-q">
                Think about a time you successfully lost weight or kept a
                healthy habit. What were you doing differently?
              </span>
              <span className="hand">
                I walked to work and cooked on Sundays. I felt in control.
              </span>
              <p className="jp-note">
                This question starts from what you’ve already done well, not
                from what went wrong.
              </p>
            </div>
          </div>
          <div
            className="jp-panel"
            role="tabpanel"
            id="jp-week"
            aria-labelledby="jt-week"
            hidden
          >
            <header className="jp-head">
              <span className="jp-meta">
                Chapter 03 · Every week, before your check-in
              </span>
              <h3>My Week</h3>
              <p>One page, five short prompts.</p>
            </header>
            <ol className="jp-prompts numbered">
              <li>
                <span className="jp-q">
                  <i>01</i> My wins{" "}
                  <small>Three things I did well, however small</small>
                </span>
                <span className="hand">
                  Walked 4 evenings. Said no to seconds at Sunday lunch.
                </span>
              </li>
              <li>
                <span className="jp-q">
                  <i>02</i> What worked for me?
                </span>
                <span className="hand">Packing lunch the night before.</span>
              </li>
              <li>
                <span className="jp-q">
                  <i>03</i> Where did I struggle?
                </span>
                <span className="hand">
                  Thursday deadline. Skipped dinner, snacked at 11 pm.
                </span>
              </li>
              <li>
                <span className="jp-q">
                  <i>04</i> What did I learn about myself?
                </span>
                <span className="hand">
                  Long gaps without food are my trigger.
                </span>
              </li>
              <li>
                <span className="jp-q">
                  <i>05</i> My intention for next week
                </span>
                <span className="hand">
                  Keep a snack at my desk for late days.
                </span>
              </li>
            </ol>
            <p className="jp-reminder">
              <b>A reminder</b> You don’t need a perfect week to make progress.
              You need to understand your week and keep moving forward.
            </p>
          </div>
          <div
            className="jp-panel"
            role="tabpanel"
            id="jp-wins"
            aria-labelledby="jt-wins"
            hidden
          >
            <header className="jp-head">
              <span className="jp-meta">Chapter 04 · Anytime</span>
              <h3>My Wins Wall</h3>
              <p>The progress that doesn’t always show up on the scale.</p>
            </header>
            <ul className="wins-wall">
              <li className="note n1">
                I went for a walk even though I didn’t feel like it.
              </li>
              <li className="note n2">
                I enjoyed a restaurant meal without feeling guilty.
              </li>
              <li className="note n3">
                I stopped eating when I was comfortably full.
              </li>
              <li className="note n4">
                I got back to my routine after a difficult weekend.
              </li>
              <li className="note n5">I started enjoying strength training.</li>
              <li className="note n6">
                I stopped treating one bad meal as a failed week.
              </li>
            </ul>
          </div>
          <div
            className="jp-panel"
            role="tabpanel"
            id="jp-life"
            aria-labelledby="jt-life"
            hidden
          >
            <header className="jp-head">
              <span className="jp-meta">Chapter 05 · Whenever you need it</span>
              <h3>When Life Happens</h3>
              <p>Navigating interruptions without losing sight of yourself.</p>
            </header>
            <ol className="jp-exercises">
              <li>
                <b>Before I step away</b>
                <span>
                  What’s changing in my routine? What would help me enjoy this
                  time and stay connected to my goals?
                </span>
              </li>
              <li>
                <b>My return</b>
                <span>
                  What did I enjoy? What felt different? What’s making it hard
                  to get back to my routine?
                </span>
              </li>
              <li>
                <b>My first small steps</b>
                <span>
                  What are three manageable things I can do this week to rebuild
                  my routine?
                </span>
              </li>
            </ol>
            <div className="jp-highlight">
              <span className="jp-q">
                My restart pattern: when I lose my routine, what usually
                happens?
              </span>
              <span className="hand">
                I tell myself I’ll start on Monday. A message from someone helps
                me most.
              </span>
              <p className="jp-note">
                I keep this in mind, so the next time life happens you
                already have a plan that fits you.
              </p>
            </div>
          </div>
          <div
            className="jp-panel"
            role="tabpanel"
            id="jp-future"
            aria-labelledby="jt-future"
            hidden
          >
            <header className="jp-head">
              <span className="jp-meta">Chapter 06 · When you’re ready</span>
              <h3>My Future</h3>
              <p>
                What I’ve learned, and my plan for keeping it going on my own.
              </p>
            </header>
            <ul className="jp-list">
              <li>Which habits have become easier?</li>
              <li>
                What are my early warning signs that I’m slipping into old
                patterns?
              </li>
              <li>What will I do when life gets busy?</li>
            </ul>
            <div className="jp-letter">
              <span className="jp-q">A letter to my Day 0 self</span>
              <p className="hand">
                Dear Day 0 me, you thought you had to be perfect. You didn’t.
                You just had to keep coming back.
              </p>
              <p className="hand jp-sign">Future me</p>
            </div>
          </div>
        </div>
      </div>
      <div className="journal-ways" data-reveal="">
        <p className="jw-lead">
          <strong>Write a sentence, tick a box or record a voice note.</strong>{" "}
          The point is reflection, not perfect writing.
        </p>
        <ul>
          <li>
            <b>Reflection</b>Short questions that help you understand yourself.
          </li>
          <li>
            <b>Celebration</b>Small wins, milestones and moments of progress.
          </li>
          <li>
            <b>Planning</b>The next small action or experiment.
          </li>
          <li>
            <b>Conversation</b>Prompts that become talking points with me.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Journal;
