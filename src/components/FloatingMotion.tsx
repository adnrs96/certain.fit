import { useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";
import "./FloatingMotion.css";

interface FloatingMotionProps {
  children: ReactNode;
  className: string;
  label: string;
}

const FloatingMotion = ({ children, className, label }: FloatingMotionProps) => {
  const [paused, setPaused] = useState(false);
  const Icon = paused ? Play : Pause;

  return (
    <div className={`floating-motion ${className}${paused ? " is-paused" : ""}`}>
      <button
        className="float-motion-toggle"
        type="button"
        aria-label={`${paused ? "Resume" : "Pause"} ${label} animation`}
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
      >
        <Icon size={14} aria-hidden="true" />
        <span className="float-motion-label">{paused ? "Resume motion" : "Pause motion"}</span>
      </button>
      {children}
    </div>
  );
};

export default FloatingMotion;
