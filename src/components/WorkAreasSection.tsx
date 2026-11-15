import type { CSSProperties } from "react";
import { Cookie, Moon, Repeat2, HeartPulse, Utensils, Footprints } from "lucide-react";
import FloatingMotion from "@/components/FloatingMotion";
import "./WorkAreasSection.css";

const areas = [
  {
    title: "Working through cravings",
    description: "Understand your triggers and develop practical ways to respond, without guilt or banning every food you enjoy.",
    Icon: Cookie,
  },
  {
    title: "Stress and sleep strategies",
    description: "Build ways to manage stress and improve sleep that fit the demands of your real life.",
    Icon: Moon,
  },
  {
    title: "Habits that help you",
    description: "Develop helpful habits, recognise unhelpful patterns, and make the better choice easier.",
    Icon: Repeat2,
  },
  {
    title: "Blood markers and deficiencies",
    description: "Nutrition support to work towards healthier blood markers and address deficiencies, alongside your doctor.",
    Icon: HeartPulse,
  },
  {
    title: "A diet that works for you",
    description: "A food plan designed around your tastes, routine, preferences, and nutritional needs.",
    Icon: Utensils,
  },
  {
    title: "Movement for your setup",
    description: "A workout or movement plan matched to your space, equipment, and schedule, whether at home, in a gym, or outdoors.",
    Icon: Footprints,
  },
];

const WorkAreasSection = () => (
  <section className="work-areas" id="work-on" aria-labelledby="work-areas-title">
    <div className="container">
      <div className="section-head center" data-reveal="">
        <h2 className="section-title" id="work-areas-title">What we work on</h2>
        <p className="section-lead">Six areas. One plan, built around you.</p>
      </div>
      <FloatingMotion className="work-areas-grid" label="coaching areas">
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
