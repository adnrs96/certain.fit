import { useEffect, useRef, useState } from "react";
import { X, Check, AlertTriangle, Zap } from "lucide-react";

const ComparisonSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const traditionalItems = [
    { text: "Eat this / Don't eat that", icon: X },
    { text: "Miss once = Failure", icon: X },
    { text: "Requires constant discipline", icon: X },
    { text: "Generic meal plans", icon: X },
    { text: "All-or-nothing mindset", icon: X },
  ];

  const certainItems = [
    { text: "Lock certainty where possible", icon: Check },
    { text: "Miss once = Adjust, don't restart", icon: Check },
    { text: "System beats willpower", icon: Check },
    { text: "Personalized structure", icon: Check },
    { text: "Progress over perfection", icon: Check },
  ];

  return (
    <section
      ref={sectionRef}
      id="why"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            The Difference
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Why Traditional Diets <span className="gradient-text">Fail</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {/* Traditional Dieting Card */}
          <div
            className={`rounded-2xl border border-destructive/20 p-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{
              background:
                "linear-gradient(145deg, hsl(var(--destructive) / 0.05) 0%, hsl(var(--card) / 0.3) 100%)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="text-destructive" size={24} />
              </div>
              <h3 className="text-xl font-bold text-muted-foreground">
                Traditional Dieting
              </h3>
            </div>

            <ul className="space-y-4">
              {traditionalItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={14} className="text-destructive" />
                  </div>
                  <span className="line-through opacity-60">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CERTAIN Way Card */}
          <div
            className={`rounded-2xl border border-primary/30 p-8 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{
              background:
                "linear-gradient(145deg, hsl(var(--primary) / 0.08) 0%, hsl(var(--card) / 0.5) 100%)",
              boxShadow: "0 0 60px hsl(var(--primary) / 0.1)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                The CERTAIN™ Way
              </h3>
            </div>

            <ul className="space-y-4">
              {certainItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={14} className="text-primary" />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
