import { useEffect, useRef, useState } from "react";
import { Check, Star, Crown, Rocket } from "lucide-react";

const pricingPlans = [
  {
    name: "Foundation",
    duration: "12 Weeks",
    tagline: "Best for first-timers",
    price: "₹25,000",
    icon: Rocket,
    features: [
      "Complete system setup",
      "Anchor meal planning",
      "Habit shift protocols",
      "Weekly check-ins",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Transformation",
    duration: "16-20 Weeks",
    tagline: "Best for busy pros with yo-yo history",
    price: "₹50,000",
    icon: Star,
    features: [
      "Everything in Foundation",
      "Stress-testing protocols",
      "Travel & social playbooks",
      "Autonomy training",
      "Priority support",
      "1-on-1 strategy calls",
    ],
    popular: true,
  },
  {
    name: "Performance",
    duration: "24+ Weeks",
    tagline: "For leaders & longevity",
    price: "₹1.2L",
    icon: Crown,
    features: [
      "Everything in Transformation",
      "Body recomposition focus",
      "Maintenance mastery",
      "Priority coach access",
      "Quarterly reviews",
      "Lifetime community access",
    ],
    popular: false,
  },
];

const PricingSection = () => {
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
      id="pricing"
      className="py-24 lg:py-32 relative"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Investment
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose the program that matches your goals and timeline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-700 ${
                plan.popular
                  ? "border-primary/50 bg-gradient-to-b from-primary/10 to-card/80"
                  : "border-border/50 bg-card/50"
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0)"
                  : "translateY(30px)",
                transitionDelay: `${index * 150}ms`,
                boxShadow: plan.popular
                  ? "0 0 60px hsl(var(--primary) / 0.15)"
                  : undefined,
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    plan.popular ? "bg-primary/20" : "bg-muted"
                  }`}
                >
                  <plan.icon
                    size={28}
                    className={plan.popular ? "text-primary" : "text-muted-foreground"}
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-primary text-sm font-medium">{plan.duration}</p>
                <p className="text-muted-foreground text-sm mt-1">
                  {plan.tagline}
                </p>
              </div>

              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-primary/20" : "bg-muted"
                      }`}
                    >
                      <Check
                        size={12}
                        className={plan.popular ? "text-primary" : "text-muted-foreground"}
                      />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#apply"
                className={`block w-full py-3.5 rounded-xl font-semibold text-center transition-all duration-300 ${
                  plan.popular
                    ? "cta-button"
                    : "border border-border hover:border-primary/50 text-foreground hover:bg-primary/5"
                }`}
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
