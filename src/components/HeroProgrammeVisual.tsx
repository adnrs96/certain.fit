import { Link } from "react-router-dom";
import { Check, MessageCircle } from "lucide-react";
import FloatingMotion from "@/components/FloatingMotion";
import "./HeroProgrammeVisual.css";

const HeroProgrammeVisual = () => (
  <figure
    className="hero-programme-visual"
    aria-label="A preview of your daily plan, The Growth Journal, and check-ins with Akshat"
  >
    <FloatingMotion className="hero-programme-stage">
      <div className="hero-programme-canvas">
        <div className="hero-float hero-float--app floating-item">
          <Link className="hero-app hero-product-link" to="/how-it-works" aria-label="Explore how your daily plan works">
            <span className="hero-app-camera" aria-hidden="true"></span>
            <span className="hero-app-brand">CERTAIN</span>
            <strong className="hero-app-title">Your day</strong>
            <span className="hero-app-progress" aria-hidden="true"><span></span></span>
            <ul className="hero-app-tasks">
              {["Food", "Movement", "Check-in"].map((task) => (
                <li key={task}>
                  <Check size={14} aria-hidden="true" />
                  <span>{task}<i aria-hidden="true"></i></span>
                </li>
              ))}
            </ul>
            <span className="hero-app-next">One next step.</span>
          </Link>
        </div>
        <div className="hero-float hero-float--journal floating-item">
          <Link className="hero-journal hero-product-link" to="/journal" aria-label="Explore The Growth Journal">
            <span className="hero-journal-spine" aria-hidden="true"></span>
            <span className="hero-journal-name">The<br /><strong>Growth<br />Journal</strong></span>
            <span className="hero-journal-lines" aria-hidden="true"></span>
            <span className="hero-journal-brand">CERTAIN</span>
          </Link>
        </div>
        <div className="hero-checkin floating-item">
          <MessageCircle size={20} aria-hidden="true" />
          <span>Check-ins with Akshat</span>
        </div>
      </div>
    </FloatingMotion>
  </figure>
);

export default HeroProgrammeVisual;
