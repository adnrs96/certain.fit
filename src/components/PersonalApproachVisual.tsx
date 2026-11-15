import { Repeat2 } from "lucide-react";
import FloatingMotion from "@/components/FloatingMotion";
import "./PersonalApproachVisual.css";

const steps = [
  {
    title: "Start with your life",
    description: "Your food, routine, preferences and starting point.",
  },
  {
    title: "Find your habits",
    description: "Try small changes. Learn what you can repeat.",
  },
  {
    title: "Keep making it yours",
    description: "Use your progress and feedback to adjust.",
  },
];

const PersonalApproachVisual = () => (
  <figure className="personal-approach" aria-labelledby="personal-approach-title">
    <div className="personal-approach-heading">
      <span className="personal-approach-kicker">Built with you</span>
      <h3 id="personal-approach-title">
        Not a plan to copy.
        <span>A way to make your own.</span>
      </h3>
    </div>
    <FloatingMotion className="personal-approach-motion">
      <ol className="personal-approach-steps floating-item">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="personal-approach-number" aria-hidden="true">
              {index + 1}
            </span>
            <div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </FloatingMotion>
    <figcaption>
      <Repeat2 size={22} aria-hidden="true" />
      <span>As your life changes, your approach does too.</span>
    </figcaption>
  </figure>
);

export default PersonalApproachVisual;
