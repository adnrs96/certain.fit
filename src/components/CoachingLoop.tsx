import { useState } from "react";
import { Brain, Footprints, Pause, Play, Repeat2, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

type Area = "nutrition" | "movement" | "habits" | "mindset";

const areas = [
  { id: "nutrition", label: "Nutrition", signal: "Hunger & energy", Icon: Utensils },
  { id: "movement", label: "Movement", signal: "Strength & recovery", Icon: Footprints },
  { id: "habits", label: "Habits", signal: "Routines & triggers", Icon: Repeat2 },
  { id: "mindset", label: "Mindset", signal: "Stress & self-talk", Icon: Brain },
] as const;

const examples: Record<Area, { observation: string; changes: Record<Area, string> }> = {
  nutrition: {
    observation: "Your journal shows rushed lunches followed by evening cravings.",
    changes: {
      nutrition: "Build a more satisfying lunch.",
      movement: "Choose an easy walk on a demanding day.",
      habits: "Prepare lunch before the workday takes over.",
      mindset: "Treat a difficult evening as feedback, not failure.",
    },
  },
  movement: {
    observation: "Long workouts keep getting squeezed out by busy workdays.",
    changes: {
      nutrition: "Plan easy meals for your busiest days.",
      movement: "Try a shorter session that fits your schedule.",
      habits: "Attach movement to an existing routine.",
      mindset: "Let consistency count more than perfection.",
    },
  },
  habits: {
    observation: "Late meetings keep knocking your evening routine off track.",
    changes: {
      nutrition: "Keep an easy dinner option ready.",
      movement: "Find a smaller window for movement.",
      habits: "Build a backup routine for late finishes.",
      mindset: "Practise flexibility, not all-or-nothing thinking.",
    },
  },
  mindset: {
    observation: "One missed workout makes you feel like abandoning the whole week.",
    changes: {
      nutrition: "Come back to your next normal meal.",
      movement: "Choose the next session you can manage.",
      habits: "Agree on a simple cue to restart.",
      mindset: "Separate one missed workout from your whole journey.",
    },
  },
};

const CoachingLoop = () => {
  const [selected, setSelected] = useState<Area>("nutrition");
  const [paused, setPaused] = useState(false);
  const example = examples[selected];

  return (
    <section className="coaching-system" aria-labelledby="coaching-system-title">
      <div className="container">
        <div className="section-head center" data-reveal="">
          <span className="eyebrow-pill">ONE CONNECTED SYSTEM</span>
          <h2 className="section-title" id="coaching-system-title">
            Four connected areas.{" "}
            <span className="serif-italic">One evolving plan.</span>
          </h2>
          <p className="section-lead">
            Your meals, movement, routines, and thoughts all tell a story.
            I connect that feedback to choose where we focus next, then adjust
            the plan with you. Nothing works in isolation.
          </p>
        </div>
        <div className="feedback-layout">
          <div className="loop-panel">
            <div className="loop-toolbar">
              <span>THE FEEDBACK LOOP</span>
              <button
                type="button"
                className="loop-motion-toggle"
                onClick={() => setPaused(!paused)}
                aria-label={paused ? "Play animation" : "Pause animation"}
              >
                {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
                {paused ? "Play" : "Pause"}
              </button>
            </div>
            <div className={`loop-diagram${paused ? " is-paused" : ""}`}>
              <svg className="loop-connections" viewBox="0 0 600 500" preserveAspectRatio="none" aria-hidden="true">
                <path className="loop-track" d="M300 83Q500 83 500 250T300 417T100 250T300 83" />
                <path className="loop-track" d="M300 83V417M100 250H500" />
                <path className="loop-data" d="M300 83Q500 83 500 250T300 417T100 250T300 83" />
                <path className="loop-data" d="M300 83V417M100 250H500" />
                <path className="loop-data loop-data--return" d="M300 83V417M100 250H500" />
              </svg>
              {areas.map(({ id, label, signal, Icon }) => (
                <button
                  type="button"
                  key={id}
                  className={`loop-node loop-node--${id}${selected === id ? " is-selected" : ""}`}
                  aria-pressed={selected === id}
                  aria-controls="feedback-example"
                  onClick={() => setSelected(id)}
                >
                  <Icon size={24} aria-hidden="true" />
                  <strong>{label}</strong>
                  <span>{signal}</span>
                </button>
              ))}
              <div className="loop-hub">
                <span>Your real week</span>
                <strong>Notice.<br />Learn.<br />Adjust.</strong>
              </div>
            </div>
            <p className="loop-caption">Choose an area to follow the feedback.</p>
          </div>
          <div className="feedback-example" id="feedback-example" aria-live="polite" aria-atomic="true">
            <span className="feedback-kicker">ONE EXAMPLE · NOT FOUR SEPARATE PLANS</span>
            <h3>One observation can change the whole approach.</h3>
            <p className="feedback-observation">{example.observation}</p>
            <ul className="feedback-changes">
              {areas.map(({ id, label, Icon }) => (
                <li key={id} className={selected === id ? "is-selected" : undefined}>
                  <Icon size={18} aria-hidden="true" />
                  <span><strong>{label}</strong>{example.changes[id]}</span>
                </li>
              ))}
            </ul>
            <p className="feedback-footnote">
              We try a change, notice what happens, and bring that learning into
              the next check-in. The plan evolves with you.
            </p>
          </div>
        </div>
        <div className="journal-bridge" data-reveal="">
          <div>
            <span className="eyebrow-pill">LEARNING FOR LIFE</span>
            <h3>The journal isn’t homework. It’s how you learn to steer.</h3>
            <p>
              Each week, you reflect before we check in. Over time, you recognise
              your own patterns, understand what helps, and practise making
              decisions without needing someone to tell you what to do.
            </p>
            <Link to="/journal">Explore your Journey Journal →</Link>
          </div>
          <ol className="journal-feedback-steps">
            <li><b>01 · Reflect</b>Journal your real week, not a perfect one.</li>
            <li><b>02 · Connect</b>We spot patterns and adjust together.</li>
            <li><b>03 · Practise</b>Try the next change. Build your own judgement.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default CoachingLoop;
