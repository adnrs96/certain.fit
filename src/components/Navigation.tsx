import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/certain-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "py-5 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="CERTAIN" className="h-10 w-auto" />
            <span className="text-xl font-semibold text-foreground tracking-tight">
              CERTAIN<span className="text-primary">™</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#why"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Why It Works
            </a>
            <a
              href="#framework"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Framework
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc_Mh4rYuBIgvH0tq7nRb2pvB5na6l7sjEHd1QuRAJQbXzJpQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button text-sm px-6 py-2.5"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-t-0 p-6 animate-fade-up">
            <div className="flex flex-col gap-4">
              <a
                href="#why"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground py-2"
              >
                Why It Works
              </a>
              <a
                href="#framework"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground py-2"
              >
                Framework
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground py-2"
              >
                Pricing
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc_Mh4rYuBIgvH0tq7nRb2pvB5na6l7sjEHd1QuRAJQbXzJpQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="cta-button text-center mt-2"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
