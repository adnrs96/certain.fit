import type { CSSProperties } from "react";
import { Cookie, Moon, Repeat2, HeartPulse, Utensils, Footprints } from "lucide-react";
import FloatingMotion from "@/components/FloatingMotion";
import "./WorkAreasSection.css";

const areas = [
  {
    title: "A diet that works for you",
    description: "Your coach has achieved his journey while eating Biryani. You are in good hands!",
    Icon: Utensils,
  },
  {
    title: "Movement for your setup",
    description: "A gym, your living room, or the space next to your desk. We build movement around your setup, not the other way round.",
    Icon: Footprints,
  },
  {
    title: "Working through cravings",
    description: "Cravings happen. The guilt trip doesn't have to. Build awareness and practical ways to respond, without banning every food you enjoy.",
    Icon: Cookie,
  },
  {
    title: "Stress and sleep strategies",
    description: "Your brain has enough tabs open. Let's build stress and sleep strategies that help you switch off, without adding another job to your day.",
    Icon: Moon,
  },
  {
    title: "Habits that help you",
    description: "Less heroic willpower. More helpful autopilot. Build good habits, spot the sneaky unhelpful ones, and make the better choice easier.",
    Icon: Repeat2,
  },
  {
    title: "Blood markers and deficiencies",
    description: "The bathroom scale doesn't get the whole story. We work towards healthier blood markers and address nutritional gaps, alongside your doctor.",
    Icon: HeartPulse,
  },
];

const WorkAreasSection = () => (
  <section className="work-areas" id="work-on" aria-labelledby="work-areas-title">
    <div className="container">
      <div className="section-head center" data-reveal="">
        <h2 className="section-title" id="work-areas-title">What we work on</h2>
        <p className="section-lead">Learn as you progress. Build the confidence to steer your own journey.</p>
      </div>
      <FloatingMotion className="work-areas-grid">
        {areas.map(({ title, description, Icon }, index) => (
          <article
            className="work-area floating-item"
            key={title}
            style={{ "--float-delay": `${index * -0.7}s` } as CSSProperties}
          >
            <div className="work-area-surface">
              <span className="work-area-icon"><Icon size={28} strokeWidth={1.6} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </FloatingMotion>
      <div className="programme-learning" data-reveal="">
        <h3>Learn while you progress.</h3>
        <p>
          Along the way, I teach you the basics of nutrition and exercise,
          so you understand your plan, make informed choices, and build the
          confidence to keep going on your own.
        </p>
      </div>
    </div>
  </section>
);

export default WorkAreasSection;
