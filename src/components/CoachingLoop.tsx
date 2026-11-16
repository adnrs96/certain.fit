import { Brain, Footprints, HeartPulse, Moon, Utensils, Zap } from "lucide-react";

const areas = [
  { id: "nutrition", label: "Nutrition", signal: "Food, hunger & fullness", Icon: Utensils },
  { id: "sleep", label: "Sleep", signal: "Rest & recovery", Icon: Moon },
  { id: "stress", label: "Stress", signal: "Workload, emotions & coping", Icon: Brain },
  { id: "energy", label: "Energy", signal: "How you feel day to day", Icon: Zap },
  { id: "movement", label: "Movement", signal: "Activity that fits your life", Icon: Footprints },
  { id: "markers", label: "Health context", signal: "Blood markers & medical advice", Icon: HeartPulse },
] as const;

const CoachingLoop = () => {
  return (
    <section className="coaching-system" id="how-it-works" aria-labelledby="coaching-system-title">
      <div className="container coaching-system-grid">
        <div className="section-head coaching-system-copy" data-reveal="">
          <span className="eyebrow-pill">THE CERTAIN PHILOSOPHY · 360° HEALTH</span>
          <h1 className="section-title" id="coaching-system-title">
            There’s more to your weight.{" "}
            <span className="serif-italic">Let’s see the whole picture.</span>
          </h1>
          <p className="section-lead">
            You deserve more than “eat less, move more.” Nutrition and exercise
            matter—but they don’t tell your whole story.
          </p>
          <p className="philosophy-detail">
            At CERTAIN, I connect the dots between your food, sleep, stress,
            energy, movement and health context. Your work, relationships and
            surroundings are part of the picture, too.
          </p>
          <p className="philosophy-detail">
            Together, we notice your patterns, understand what gets in the way,
            and practise changes that fit. Not just a plan to follow—awareness
            and skills to manage your weight beyond coaching.
          </p>
        </div>
        <figure className="loop-panel" aria-labelledby="whole-health-title">
          <div className="loop-toolbar">
            <span id="whole-health-title">YOUR HEALTH IS CONNECTED</span>
            <span className="loop-live-note">An approach that evolves with you</span>
          </div>
          <div className="loop-diagram">
            <svg className="loop-connections" viewBox="0 0 600 500" preserveAspectRatio="none" aria-hidden="true">
              <ellipse className="loop-track" cx="300" cy="250" rx="200" ry="180" />
              <path className="loop-track" d="M100 83L500 417M500 83L100 417M100 250H500" />
              <ellipse className="loop-data" cx="300" cy="250" rx="200" ry="180" />
              <path className="loop-data" d="M100 83L500 417M500 83L100 417" />
              <path className="loop-data loop-data--return" d="M100 250H500" />
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
            <strong>You at the centre. Your real life around you.</strong>
            Your feedback helps us choose the next small change, then learn and
            adjust—not repeat a rigid plan.
          </figcaption>
        </figure>
        <div className="philosophy-context">
          <p>
            Weight is influenced by biology, habits, health conditions,
            medications and environment—not simply willpower. Blood-test
            findings and medical concerns stay with your doctor; I help you
            put their advice into everyday practice.
          </p>
          <p className="philosophy-sources">
            Informed by{" "}
            <a href="https://www.precisionnutrition.com/deep-health">Precision Nutrition’s Deep Health approach</a>
            {" "}and{" "}
            <a href="https://www.precisionnutrition.com/precision-nutrition-sleep-stress-management-recovery-coaching-certification-faq">
              sleep, stress and recovery coaching
            </a>
            .{" "}
            <a href="https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/factors-affecting-weight-health">
              More on what influences weight.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoachingLoop;
