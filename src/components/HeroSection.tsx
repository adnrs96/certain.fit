import heroImage from "@/assets/hero-system.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="System visualization"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 opacity-0 animate-fade-up">
            Weight Management Coaching
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up animation-delay-200">
            Fat Loss for{" "}
            <span className="gradient-text">High-Cognitive-Load</span>{" "}
            Professionals.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up animation-delay-400">
            Don't diet. Build a structure you can run for life.{" "}
            <span className="text-foreground font-medium">CERTAIN™</span> is a
            fat-loss system designed for when work is busy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up animation-delay-600">
            <a href="#framework" className="cta-button">
              View the System
            </a>
            <a
              href="#apply"
              className="px-8 py-4 rounded-xl font-semibold text-lg border border-border hover:border-primary/50 text-foreground transition-all duration-300 hover:bg-primary/5"
            >
              Apply for Coaching
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
