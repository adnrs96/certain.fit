import { useEffect, useRef, type CSSProperties } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { initializeWebsite } from "@/lib/website";
import { initializeEstimator } from "@/lib/estimator";
import "@/App.css";
import "@/components/estimator.css";

const Index = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const cleanupWebsite = initializeWebsite(root.current);
    const cleanupEstimator = initializeEstimator(root.current);
    return () => {
      cleanupWebsite();
      cleanupEstimator();
    };
  }, []);

  return (
    <div ref={root} className="certain-website">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <HeroSection />
        <section className="partner" id="coach">
          <div className="container partner-grid">
            <div className="partner-copy">
              <div className="section-head" data-reveal="">
                <span className="eyebrow-pill on-dark">YOUR CERTAIN COACH</span>
                <h2 className="section-title left">
                  Someone in your corner,{" "}
                  <span className="serif-italic">
                    throughout your transformation.
                  </span>
                </h2>
                <p className="section-lead">
                  Your CERTAIN coach is a real person who supports you
                  one-to-one. They bring the know-how on food, movement and
                  habits, build your plan around your real week, and help you
                  get back on track when life gets in the way.
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
                    Your story, your WHY, and what has made weight loss hard
                    before. It starts on Day 0.
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
                    Find Friday evenings hard? You’ll build a Friday-evening
                    plan together. Your journal shapes your plan.
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
                    Your check-in asks “What did we learn about you this week?”,
                    never “Did you follow your diet?”
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
                    Back from a trip or a tough week? You don’t have to restart
                    the conversation. Your coach does.
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
                  Thanks for telling me early! In your journal you wrote that
                  Fridays get hard when you go hours without eating. How about
                  something small at 6, before you head out?<time>5:45 pm</time>
                </p>
                <p className="msg you">
                  Good idea. A banana and a handful of peanuts it is.
                  <time>5:47 pm</time>
                </p>
                <p className="msg partner">
                  Perfect. Enjoy the evening, no guilt either way. Tell me how
                  it went at Monday’s check-in.<time>5:48 pm</time>
                </p>
              </div>
              <figcaption className="chat-foot">
                Your journal → your coach →{" "}
                <strong>a plan for Friday evenings</strong>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="how" id="how-it-works">
          <div className="container">
            <div className="section-head center" data-reveal="">
              <span className="eyebrow-pill">HOW IT WORKS</span>
              <h2 className="section-title">
                Not just a plan.{" "}
                <span className="serif-italic">
                  A way of living that lasts.
                </span>
              </h2>
              <p className="section-lead">
                Most programmes only measure how well you follow the plan.
                CERTAIN helps you build four skills that stay with you long
                after coaching ends.
              </p>
            </div>
            <ol className="stage-track">
              <li className="stage" data-reveal="">
                <span className="stage-num">01</span>
                <span className="stage-when">Days 0–3</span>
                <h3>Understand yourself</h3>
                <p>
                  Your coach introduces your Journey Journal. Together you
                  explore your WHY, your past attempts, your strengths and the
                  moments that make healthy choices hard.
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
                  Food and movement that fit your actual week. A short
                  reflection before each weekly check-in, and a progress review
                  every 4 weeks to celebrate wins and recalibrate.
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
                  Holidays, festivals, deadlines, illness. You practise getting
                  back to your routine without guilt, with a plan for each
                  situation.
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
                  Spot your early warning signs, plan for busy seasons and write
                  a letter to your Day 0 self. You leave knowing how to run your
                  own journey.
                </p>
              </li>
            </ol>
            <div className="rhythm-strip" data-reveal="">
              <span className="rhythm-label">Your rhythm with your coach</span>
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
        <section className="journal" id="journal">
          <div className="container">
            <div className="journal-intro">
              <div className="section-head" data-reveal="">
                <span className="eyebrow-pill">
                  THE CERTAIN JOURNEY JOURNAL
                </span>
                <h2 className="section-title left">
                  A journal, not a workbook.{" "}
                  <span className="serif-italic">It belongs to you.</span>
                </h2>
                <p className="section-lead">
                  A workbook is something you complete. Your Journey Journal is
                  a personal record of how you finally learned to move forward.
                  Your coach reads it and brings it into every conversation, so
                  it never feels like homework.
                </p>
              </div>
              <ul
                className="principles"
                data-reveal=""
                style={{ "--d": " 1" } as CSSProperties}
              >
                <li>
                  <strong>Self-discovery</strong>
                  <span>
                    Understand why you do what you do, without judgement.
                  </span>
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
                    Rely a little less on instructions each week, and a little
                    more on yourself.
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
                  No week numbers to fall behind on. Open the page you need,
                  when you need it.
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
                      Chapter 01 · Days 0–1, with your coach
                    </span>
                    <h3>My Story</h3>
                    <p>
                      What brought me here, what I want to change, and why it
                      matters.
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
                        Imagine you’ve reached your goal. What would be
                        different about your life?
                      </span>
                      <span className="hand">
                        I’d say yes to the Coorg trek with my friends.
                      </span>
                    </li>
                    <li>
                      <span className="jp-q">
                        How would you like to feel about yourself six months
                        from now?
                      </span>
                      <span className="hand">
                        Proud. In control, not on a diet.
                      </span>
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
                      My past attempts, my environment, my habits and my
                      strengths.
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
                      This question starts from what you’ve already done well,
                      not from what went wrong.
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
                      <span className="hand">
                        Packing lunch the night before.
                      </span>
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
                    <b>A reminder</b> You don’t need a perfect week to make
                    progress. You need to understand your week and keep moving
                    forward.
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
                    <p>
                      The progress that doesn’t always show up on the scale.
                    </p>
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
                    <li className="note n5">
                      I started enjoying strength training.
                    </li>
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
                    <span className="jp-meta">
                      Chapter 05 · Whenever you need it
                    </span>
                    <h3>When Life Happens</h3>
                    <p>
                      Navigating interruptions without losing sight of yourself.
                    </p>
                  </header>
                  <ol className="jp-exercises">
                    <li>
                      <b>Before I step away</b>
                      <span>
                        What’s changing in my routine? What would help me enjoy
                        this time and stay connected to my goals?
                      </span>
                    </li>
                    <li>
                      <b>My return</b>
                      <span>
                        What did I enjoy? What felt different? What’s making it
                        hard to get back to my routine?
                      </span>
                    </li>
                    <li>
                      <b>My first small steps</b>
                      <span>
                        What are three manageable things I can do this week to
                        rebuild my routine?
                      </span>
                    </li>
                  </ol>
                  <div className="jp-highlight">
                    <span className="jp-q">
                      My restart pattern: when I lose my routine, what usually
                      happens?
                    </span>
                    <span className="hand">
                      I tell myself I’ll start on Monday. A message from someone
                      helps me most.
                    </span>
                    <p className="jp-note">
                      Your coach remembers this, so the next time life happens
                      you already have a plan that fits you.
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
                    <span className="jp-meta">
                      Chapter 06 · When you’re ready
                    </span>
                    <h3>My Future</h3>
                    <p>
                      What I’ve learned, and my plan for keeping it going on my
                      own.
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
                      Dear Day 0 me, you thought you had to be perfect. You
                      didn’t. You just had to keep coming back.
                    </p>
                    <p className="hand jp-sign">Future me</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="journal-ways" data-reveal="">
              <p className="jw-lead">
                <strong>
                  Write a sentence, tick a box or record a voice note.
                </strong>{" "}
                The point is reflection, not perfect writing.
              </p>
              <ul>
                <li>
                  <b>Reflection</b>Short questions that help you understand
                  yourself.
                </li>
                <li>
                  <b>Celebration</b>Small wins, milestones and moments of
                  progress.
                </li>
                <li>
                  <b>Planning</b>The next small action or experiment.
                </li>
                <li>
                  <b>Conversation</b>Prompts that become talking points with
                  your coach.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="life" id="life-happens">
          <div className="container">
            <div className="section-head center" data-reveal="">
              <span className="eyebrow-pill">WHEN LIFE HAPPENS</span>
              <h2 className="section-title">
                We don’t expect life to stop{" "}
                <span className="serif-italic">so you can lose weight.</span>
              </h2>
              <p className="section-lead">
                We help you build a way of living that can accommodate life.
                Most programmes teach you how to stay consistent. CERTAIN also
                teaches you how to <strong>return</strong> to consistency.
              </p>
            </div>
            <div className="states-wrap" data-reveal="">
              <div className="states">
                <article className="state s-rhythm">
                  <span className="state-dot" aria-hidden="true"></span>
                  <h3>In Rhythm</h3>
                  <p>
                    Your regular routine: building habits and moving towards
                    your goals.
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
                    Rebuilding your routine first, before chasing any
                    weight-loss targets.
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
                      <span className="rr-when">
                        Before you go · 3–5 days ahead
                      </span>
                      <h4>Plan the pause</h4>
                      <p>
                        Your coach starts the conversation: what’s changing,
                        what you’re looking forward to, and when you’ll
                        realistically be back. Together you agree a minimum
                        viable routine.
                      </p>
                      <ul className="mvr">
                        <li>
                          <b>Nutrition</b>Mindful of portions where practical.
                          No tracking everything.
                        </li>
                        <li>
                          <b>Movement</b>Walk when the chance comes up.
                        </li>
                        <li>
                          <b>Awareness</b>Notice your eating patterns without
                          judging yourself.
                        </li>
                        <li>
                          <b>Enjoyment</b>Enjoy the trip. Food isn’t a moral
                          decision.
                        </li>
                      </ul>
                      <p className="rr-partner">
                        <b>Your coach</b> agrees these with you, plus a
                        realistic return date.
                      </p>
                    </li>
                    <li className="rr-phase away">
                      <span className="rr-when">
                        While you’re away · In Flex Mode
                      </span>
                      <h4>Enjoy it</h4>
                      <p>
                        No one checking up on your diet. Just one optional page
                        in your journal:
                      </p>
                      <p className="rr-note">
                        <span className="hand">
                          Three things I enjoyed this week
                        </span>
                        A new food, an activity, a moment I felt good about
                        myself.
                      </p>
                      <p className="rr-partner">
                        <b>Your coach</b> stays in the background. No
                        unnecessary check-ins.
                      </p>
                    </li>
                    <li className="rr-phase back">
                      <span className="rr-when">
                        Coming home · the first 72 hours
                      </span>
                      <h4>Find your rhythm again</h4>
                      <ol className="rr-days">
                        <li>
                          <b>Day 1 · Reconnect</b>A personal welcome-back
                          message. Reflect on the trip and choose one familiar
                          routine to restart.
                        </li>
                        <li>
                          <b>Day 2 · Re-establish</b>Normal meals, groceries,
                          comfortable movement, regular sleep. No crash dieting
                          or punishing workouts.
                        </li>
                        <li>
                          <b>Day 3 · Re-engage</b>Back to your plan, adjusted
                          where needed. One small commitment for the week, and
                          your next check-in booked.
                        </li>
                      </ol>
                      <p className="rr-partner">
                        <b>Your coach</b> reaches out first: a message on day
                        one, a short chat within 48 hours, and your usual
                        check-in back by the end of the week.
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
                        Hey! Welcome back! 😊 Hope you had a wonderful time.
                        Before we jump back into our usual routine, let’s take a
                        moment to see how you’re feeling. There’s absolutely no
                        catching up or making up for lost time. One step at a
                        time. We’re back together!
                      </p>
                    </figure>
                    <ul className="rr-truths">
                      <li>
                        <b>Three days is a framework, not a deadline.</b>Back
                        from a long, tiring trip? You take it gentler.
                      </li>
                      <li>
                        <b>Your first weigh-in back isn’t a verdict.</b>Water,
                        salt, digestion and a change of routine can all move
                        short-term readings.
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
                      Weddings and festivals are for enjoying. You and your
                      coach plan for the season instead of fighting it.
                    </p>
                  </header>
                  <ol className="sp-steps">
                    <li>
                      Decide together which meals and moments you’ll fully
                      enjoy.
                    </li>
                    <li>
                      Keep two or three easy anchors around them, like a morning
                      walk or a simple breakfast.
                    </li>
                    <li>
                      Celebrate without guilt. Food isn’t a moral decision.
                    </li>
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
                      When work takes over, the plan shrinks to fit, so a busy
                      month doesn’t become a lost one.
                    </p>
                  </header>
                  <ol className="sp-steps">
                    <li>
                      Agree the smallest routine worth keeping: a short walk, a
                      simple breakfast, regular sleep.
                    </li>
                    <li>Check-ins get shorter, not skipped.</li>
                    <li>
                      When the deadline passes, you build back up together.
                    </li>
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
                      You ease back in gradually, at a pace that suits your
                      recovery.
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
                    <p>
                      Some weeks, weight loss shouldn’t be on your mind at all.
                    </p>
                  </header>
                  <ol className="sp-steps">
                    <li>Everything pauses, no questions asked.</li>
                    <li>
                      Your coach checks in kindly, without asking about food or
                      the scale.
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
                    <li>
                      Look back at your Wins Wall to see how far you’ve come.
                    </li>
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
                      If check-ins start slipping, your coach reaches out
                      personally.
                    </li>
                    <li>
                      No guilt, just a conversation about what got in the way.
                    </li>
                    <li>Together you make the plan easier to keep.</li>
                  </ol>
                </div>
              </div>
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
                      <linearGradient
                        id="trendFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
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
                    <circle
                      className="trend-end"
                      cx="308"
                      cy="86"
                      r="5"
                    ></circle>
                  </svg>
                  <figcaption>
                    <span className="lg-dot"></span>Daily readings{" "}
                    <span className="lg-line"></span>Weekly trend{" "}
                    <em>Illustration</em>
                  </figcaption>
                </figure>
                <p className="pg-foot">
                  Single days bounce around. We read the calm weekly trend, not
                  one morning’s number.
                </p>
              </article>
              <article
                className="pg-card personal"
                data-reveal=""
                style={{ "--d": " 1" } as CSSProperties}
              >
                <span className="pg-kicker">Personal progress</span>
                <h3>What changes in how you live</h3>
                <p>
                  How much better you’ve become at navigating your own life.
                </p>
                <ul className="skill-list">
                  <li>Planned ahead for a family wedding</li>
                  <li>Back in rhythm after a busy week</li>
                  <li>Spotted a trigger before it took over</li>
                  <li>Kept a minimum routine through a deadline</li>
                </ul>
                <p className="pg-question">
                  <b>Every month, you’ll ask yourself</b>“What can I do today
                  that I couldn’t do when I started CERTAIN?”
                </p>
              </article>
            </div>
            <p className="progress-close" data-reveal="">
              The second kind of progress is what makes the first one{" "}
              <span className="serif-italic">last.</span>
            </p>
          </div>
        </section>
        <section id="timeline-estimator" className="estimator-section">
          <div className="container">
            <div id="est-shell" className="est-shell">
              <div className="est-intro">
                <div className="eyebrow-pill">60-SECOND CHECK</div>
                <h2 className="section-title left">
                  How long will it take{" "}
                  <span className="serif-italic">you?</span>
                </h2>
                <p className="est-intro-sub">
                  A realistic, no-crash-diet timeline to your goal weight, built
                  around your body, your health and your week.
                </p>
                <ul className="est-benefits">
                  <li>Personal to your health and lifestyle</li>
                  <li>Safe, steady pace with milestones to celebrate</li>
                  <li>Your coach’s support with your habits, built in</li>
                </ul>
                <p className="est-trust">
                  3 quick steps · No sign-up · Answers stay on this page
                </p>
              </div>
              <div id="certain-estimator" className="est-panel">
                <noscript>
                  Turn on JavaScript to see your personal timeline.
                </noscript>
              </div>
            </div>
          </div>
        </section>
        <section className="programme" id="programme">
          <div className="container">
            <div className="section-head center" data-reveal="">
              <span className="eyebrow-pill">THE PROGRAMME</span>
              <h2 className="section-title">
                One-to-one with your coach.{" "}
                <span className="serif-italic">Skills for life.</span>
              </h2>
            </div>
            <div className="programme-grid">
              <article className="offer-card" data-reveal="">
                <span className="offer-badge">FOUNDING COHORT</span>
                <h3>The CERTAIN programme</h3>
                <p className="offer-sub">
                  One-to-one, for a small founding group.
                </p>
                <ul className="offer-list">
                  <li>Your own CERTAIN coach, one-to-one from Day 0</li>
                  <li>Your Journey Journal, from My Story to My Future</li>
                  <li>A food and movement plan built around your real week</li>
                  <li>A weekly check-in, adjusted to how your week went</li>
                  <li>
                    WhatsApp support between check-ins, within agreed hours
                  </li>
                  <li>A progress review every 4 weeks</li>
                  <li>
                    Return to Rhythm, and a plan for every kind of interruption
                  </li>
                  <li>Your “making it last” plan for life on your own</li>
                </ul>
                <a className="btn-ocean-lg on-dark" href="#start-journey">
                  Meet your coach →
                </a>
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
                      <strong>Calibrated nutrition</strong>Meals that fit your
                      taste and your home kitchen.
                    </span>
                  </li>
                  <li>
                    <b>E</b>
                    <span>
                      <strong>Environment design</strong>Make the better choice
                      the easy one.
                    </span>
                  </li>
                  <li>
                    <b>R</b>
                    <span>
                      <strong>Routines and rituals</strong>Anchors that survive
                      busy days.
                    </span>
                  </li>
                  <li>
                    <b>T</b>
                    <span>
                      <strong>Thoughtful eating</strong>Listen to your hunger,
                      without guilt.
                    </span>
                  </li>
                  <li>
                    <b>A</b>
                    <span>
                      <strong>Adaptive behaviour</strong>Small experiments, not
                      rigid rules.
                    </span>
                  </li>
                  <li>
                    <b>I</b>
                    <span>
                      <strong>Individualised support</strong>A coach who knows
                      your story.
                    </span>
                  </li>
                  <li>
                    <b>N</b>
                    <span>
                      <strong>Nurturing autonomy</strong>The confidence to keep
                      going on your own.
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
                      Medical treatment. We work alongside your doctor, not
                      instead of them.
                    </li>
                    <li>Perfect weeks. You don’t need them.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="start" id="start-journey">
          <div className="container start-grid">
            <div className="start-copy" data-reveal="">
              <span className="eyebrow-pill">START HERE</span>
              <h2 className="section-title left">
                Meet your <span className="serif-italic">CERTAIN coach.</span>
              </h2>
              <p className="section-lead">
                Three short questions, about two minutes. Your first
                conversation starts from your story, not a sales script.
              </p>
              <ol className="expect">
                <li>
                  <b>Tell us a little about you</b>
                  <span>
                    Your WHY, your real week, and how you usually restart.
                  </span>
                </li>
                <li>
                  <b>Your first conversation</b>
                  <span>
                    Your story, what’s made it hard before, and whether CERTAIN
                    is right for you. No pressure.
                  </span>
                </li>
                <li>
                  <b>Day 0</b>
                  <span>
                    If it feels right, you meet your coach and open your Journey
                    Journal.
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
                          data-reply="Restarting quickly is a real strength. Your coach will help you build on it."
                        />
                        <span>I restart quickly</span>
                      </label>
                      <label className="jf-pill">
                        <input
                          type="radio"
                          name="restart"
                          defaultValue="It takes me a week or two"
                          data-reply="Together, you’ll make that gap shorter, one small step at a time."
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
                    defaultValue=""
                  />
                  <p className="jf-error" aria-live="polite" hidden></p>
                  <div className="jf-actions">
                    <button type="button" className="jf-back" data-back="">
                      ← Back
                    </button>
                    <button type="submit" className="btn-ocean-lg">
                      Meet my coach →
                    </button>
                  </div>
                </div>
              </form>
              <div
                className="welcome-card hidden"
                id="welcome-card"
                tabIndex={-1}
              >
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
                    <span className="wc-label">
                      Where your coach would start
                    </span>
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
                  <a
                    className="btn-ghost-lg"
                    id="wc-timeline"
                    href="#timeline-estimator"
                  >
                    See how long it might take →
                  </a>
                  <button type="button" className="jf-back" id="wc-edit">
                    Edit my answers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq" id="faq">
          <div className="container faq-grid">
            <div className="section-head" data-reveal="">
              <span className="eyebrow-pill">QUESTIONS</span>
              <h2 className="section-title left">
                Good questions <span className="serif-italic">to ask.</span>
              </h2>
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
                <summary>What does a CERTAIN coach do?</summary>
                <div className="faq-body">
                  <p>
                    Your coach is a real person, never a chatbot, who works
                    one-to-one with you. They get to know your story, shape your
                    food and movement plan around your week, review it with you
                    every week, and help you find your way back when life gets
                    in the way.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>Is this a diet?</summary>
                <div className="faq-body">
                  <p>
                    No crash diets and no foods you have to give up forever.
                    Your plan is built around the food you already eat at home
                    and adjusted a step at a time, so it still works on busy
                    days, at family dinners and on holiday.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  What if I go on holiday, get busy or fall off track?
                </summary>
                <div className="faq-body">
                  <p>
                    Then you’re living a normal life, and CERTAIN is built for
                    it. Your coach helps you plan ahead, adjusts expectations
                    while you’re away and guides you back with the Return to
                    Rhythm protocol. There’s no catching up and no starting over
                    from zero.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>Do I have to fill in the journal every week?</summary>
                <div className="faq-body">
                  <p>
                    Just a few short prompts before each weekly check-in. Write
                    a sentence, tick a box or record a voice note. The journal
                    isn’t organised by week numbers, so if you miss a week,
                    there’s nothing to catch up on.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>Do I have to weigh myself every day?</summary>
                <div className="faq-body">
                  <p>
                    No. We look at calm weekly trends rather than single
                    readings, and progress also means your waist, energy,
                    strength and how you’re handling real life. If the scale
                    stresses you out, tell your coach and you’ll track progress
                    in other ways.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>I have a health condition. Can I join?</summary>
                <div className="faq-body">
                  <p>
                    CERTAIN is a lifestyle and behaviour-change programme, not
                    medical treatment. If you have a condition such as a thyroid
                    issue, PCOS or type 2 diabetes, please check with your
                    doctor before making changes, and your coach will plan
                    around their advice. If you’re pregnant, have or have had an
                    eating disorder, or are in cancer treatment, CERTAIN isn’t
                    the right place to start. Please consult your physician
                    before you enrol for a weight loss program.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="closing" aria-labelledby="closing-title">
          <div className="container closing-inner" data-reveal="">
            <svg
              className="closing-signature"
              viewBox="0 0 360 95"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="closingInk"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FFFFFF"></stop>
                  <stop offset="60%" stopColor="#BFE3FD"></stop>
                  <stop offset="100%" stopColor="#8ED1FC"></stop>
                </linearGradient>
              </defs>
              <path
                className="sig-path"
                pathLength="100"
                d="M 52 24 C 24 14, 14 48, 22 68 C 30 85, 62 82, 82 58 C 92 45, 76 42, 72 56 C 68 70, 88 76, 104 58 C 110 46, 114 46, 114 68 C 114 52, 124 44, 134 50 C 144 58, 152 38, 156 22 C 153 46, 152 68, 164 68 C 174 68, 186 46, 198 48 C 208 50, 204 68, 192 68 C 180 68, 180 48, 196 48 C 206 48, 206 68, 218 68 C 228 68, 232 48, 232 68 C 232 68, 244 68, 252 50 C 256 44, 258 68, 258 68 C 262 50, 274 44, 282 58 C 288 68, 304 68, 326 52"
                fill="none"
                stroke="url(#closingInk)"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                className="sig-mark"
                d="M 140 38 L 176 35"
                fill="none"
                stroke="#8ED1FC"
                strokeWidth="3.2"
                strokeLinecap="round"
              ></path>
              <circle
                className="sig-mark"
                cx="232"
                cy="34"
                r="3.4"
                fill="#8ED1FC"
              ></circle>
            </svg>
            <h2 className="closing-title" id="closing-title">
              Make this the last time{" "}
              <span className="serif-italic">you start over.</span>
            </h2>
            <p>
              Supported, not supervised. Someone in your corner, throughout your
              transformation.
            </p>
            <div className="closing-ctas">
              <a className="btn-ocean-lg on-dark" href="#start-journey">
                Meet your coach →
              </a>
              <a className="btn-ghost-lg on-dark" href="#timeline-estimator">
                See my timeline
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
