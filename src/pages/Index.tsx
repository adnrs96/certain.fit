import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ClosingSection from "@/components/ClosingSection";

const startingPoints = [
  {
    path: "/how-it-works",
    title: "How coaching works",
    text: "Understand yourself, build routines, and learn to recover.",
  },
  {
    path: "/programme",
    title: "Explore the programme",
    text: "See what is included in your one-to-one coaching.",
  },
  {
    path: "/timeline",
    title: "Find your timeline",
    text: "A personal estimate, with no sign-up needed.",
  },
];

const Index = () => (
  <>
    <HeroSection />
    <section className="home-explore" aria-labelledby="explore-title">
      <div className="container">
        <div className="section-head center" data-reveal="">
          <span className="eyebrow-pill">START WHERE YOU ARE</span>
          <h2 className="section-title" id="explore-title">
            A little clarity.{" "}
            <span className="serif-italic">One next step.</span>
          </h2>
          <p className="section-lead">
            Explore what matters to you, at your own pace.
          </p>
        </div>
        <div className="home-explore-grid">
          {startingPoints.map((point) => (
            <Link
              className="home-explore-card"
              key={point.path}
              to={point.path}
            >
              <h3>{point.title}</h3>
              <p>{point.text}</p>
              <span>
                Explore <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <ClosingSection />
  </>
);

export default Index;
