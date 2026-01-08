import logo from "@/assets/certain-logo.png";

const Footer = () => {
  return (
    <footer id="apply" className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={logo} alt="CERTAIN" className="h-12 w-auto" />
            <span className="text-2xl font-semibold text-foreground tracking-tight">
              CERTAIN<span className="text-primary">™</span>
            </span>
          </div>

          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Ready to build a system that works for your life?
          </p>

          <a
            href="mailto:akshat@certain.fit"
            className="cta-button inline-block mb-12"
          >
            Apply for Coaching
          </a>

          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CERTAIN™ by Akshat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
