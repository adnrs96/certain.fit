import { useEffect, useRef, useState } from "react";
import {
  Target,
  Home,
  RotateCcw,
  Utensils,
  Activity,
  HeartPulse,
  TrendingUp,
} from "lucide-react";

const frameworkItems = [
  {
    letter: "C",
    title: "Calorie Certainty",
    description: "Structure without restriction. Anchor meals that work.",
    icon: Target,
    colSpan: "md:col-span-2",
  },
  {
    letter: "E",
    title: "Environment Design",
    description: "Make the right choice the easy choice.",
    icon: Home,
    colSpan: "md:col-span-1",
  },
  {
    letter: "R",
    title: "Rituals",
    description: "Consistency beats motivation. Every time.",
    icon: RotateCcw,
    colSpan: "md:col-span-1",
  },
  {
    letter: "T",
    title: "Thoughtful Food Bias",
    description: "Healthier by default, protein-forward approach.",
    icon: Utensils,
    colSpan: "md:col-span-1",
  },
  {
    letter: "A",
    title: "Activity as Support",
    description: "Movement that fits your life, not dominates it.",
    icon: Activity,
    colSpan: "md:col-span-1",
  },
  {
    letter: "I",
    title: "Interventions",
    description: "Coach-led real-time correction when life gets messy.",
    icon: HeartPulse,
    colSpan: "md:col-span-1",
  },
  {
    letter: "N",
    title: "Net Weekly Outcome",
    description: "Trend-based decisions, not daily obsession.",
    icon: TrendingUp,
    colSpan: "md:col-span-2",
  },
];

const FrameworkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="framework"
      className="py-24 lg:py-32 relative"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            The Framework
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            The <span className="gradient-text">C.E.R.T.A.I.N.</span> System
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Seven pillars designed to create predictable, sustainable results
            for professionals who can't afford to fail.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {frameworkItems.map((item, index) => (
            <div
              key={item.letter}
              className={`bento-card group ${item.colSpan} transition-all duration-700`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0)"
                  : "translateY(30px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold gradient-text">
                      {item.letter}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon
                      size={18}
                      className="text-primary opacity-70"
                    />
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
