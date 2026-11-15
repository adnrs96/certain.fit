import type { ReactNode } from "react";
import "./FloatingMotion.css";

interface FloatingMotionProps {
  children: ReactNode;
  className: string;
}

const FloatingMotion = ({ children, className }: FloatingMotionProps) => (
  <div className={`floating-motion ${className}`}>
    {children}
  </div>
);

export default FloatingMotion;
