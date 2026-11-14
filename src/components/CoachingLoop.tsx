import { useState } from "react";
import { Brain, Footprints, Pause, Play, Repeat2, Utensils } from "lucide-react";

const areas = [
  { id: "nutrition", label: "Nutrition", signal: "Hunger & energy", Icon: Utensils },
  { id: "movement", label: "Movement", signal: "Strength & recovery", Icon: Footprints },
  { id: "habits", label: "Habits", signal: "Routines & triggers", Icon: Repeat2 },
  { id: "mindset", label: "Mindset", signal: "Stress & self-talk", Icon: Brain },
] as const;

const CoachingLoop = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="coaching-system" id="how-it-works" aria-labelledby="coaching-system-title">
      <div className="container coaching-system-grid">
        <div className="section-head coaching-system-copy" data-reveal="">
          <span className="eyebrow-pill">ONE CONNECTED SYSTEM</span>
          <h1 className="section-title" id="coaching-system-title">
            Four connected areas.{" "}
            <span className="serif-italic">One evolving plan.</span>
          </h1>
          <p className="section-lead">
            Your meals, movement, routines, and thoughts all tell a story.
            I connect that feedback to choose where we focus next, then adjust
            the plan with you. Nothing works in isolation.
          </p>
        </div>
        <figure className="loop-panel">
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
              <div key={id} className={`loop-node loop-node--${id}`}>
                <Icon size={24} aria-hidden="true" />
                <strong>{label}</strong>
                <span>{signal}</span>
              </div>
            ))}
            <div className="loop-hub">
              <span>Your real week</span>
              <strong>Notice.<br />Learn.<br />Adjust.</strong>
            </div>
          </div>
          <figcaption className="loop-caption">
            Each area feeds back into the others.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default CoachingLoop;
