import { Brain, Footprints, Repeat2, Utensils } from "lucide-react";

const areas = [
  { id: "nutrition", label: "Nutrition", signal: "Hunger & energy", Icon: Utensils },
  { id: "movement", label: "Movement", signal: "Strength & recovery", Icon: Footprints },
  { id: "habits", label: "Habits", signal: "Routines & triggers", Icon: Repeat2 },
  { id: "mindset", label: "Mindset", signal: "Stress & self-talk", Icon: Brain },
] as const;

const CoachingLoop = () => {
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
          </div>
          <div className="loop-diagram">
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
              <svg
                className="transformation-figure"
                viewBox="0 0 120 144"
                role="img"
                aria-label="A person progressing from a resting stance to a confident, active pose as the plan adapts"
              >
                <circle className="transformation-orbit" cx="60" cy="68" r="52" />
                <circle className="transformation-progress" cx="60" cy="68" r="52" />
                <g className="transformation-person transformation-person--starting">
                  <circle cx="60" cy="38" r="10" />
                  <path d="M47 54Q60 49 73 54L81 84Q82 90 77 91Q73 91 72 86L68 72V95L73 119Q74 125 69 126Q64 127 63 121L59 102L56 121Q55 127 50 126Q45 125 46 119L50 95V72L46 86Q45 91 41 90Q37 89 39 83Z" />
                </g>
                <g className="transformation-person transformation-person--building">
                  <circle cx="60" cy="33" r="10" />
                  <path d="M47 49Q60 45 73 49L84 75Q86 80 82 82Q78 84 76 79L69 65V91L77 118Q79 124 74 126Q69 127 67 121L60 100L53 121Q51 127 46 125Q42 124 44 118L51 91V65L43 79Q41 84 37 81Q34 79 36 75Z" />
                </g>
                <g className="transformation-person transformation-person--thriving">
                  <circle cx="60" cy="29" r="10" />
                  <path d="M47 45Q60 41 73 45L85 33L94 18Q97 13 101 16Q105 18 102 23L92 41L72 61L69 88L80 117Q82 123 77 125Q72 127 70 122L60 100L50 122Q48 127 43 125Q38 123 40 117L51 88L48 61L28 41L18 23Q15 18 19 16Q23 13 26 18L35 33Z" />
                </g>
                <path className="transformation-ground" d="M30 134H90" />
              </svg>
              <span className="transformation-label">You, evolving.</span>
            </div>
          </div>
          <figcaption className="loop-caption">
            Your feedback reshapes the plan. Each adjustment helps your transformation take shape.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default CoachingLoop;
