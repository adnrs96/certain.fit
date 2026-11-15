import { Link } from "react-router-dom";
import TransformationPhotos from "@/components/TransformationPhotos";
import "./HomeStoryIntro.css";

const HomeStoryIntro = () => (
  <section className="home-story" id="top" aria-labelledby="home-story-title">
    <div className="container home-story-grid">
      <div className="home-story-copy">
        <p className="home-story-intro">Hi, I’m Akshat.</p>
        <h1 id="home-story-title">
          I lost ~40 kg.{" "}
          <span className="serif-italic">Not my love for biryani.</span>
        </h1>
        <p className="home-story-summary">
          After struggling with obesity for 15 years, I learnt sustainable
          weight loss is not determined by a diet chart, or an exercise plan.
          <span className="home-story-invitation">
            Now I want to help you achieve the same results by teaching you my
            system.
          </span>
        </p>
        <div className="home-story-action">
          <Link className="btn-ocean-lg" to="/coach">Read my story →</Link>
        </div>
      </div>
      <TransformationPhotos beforeCaption="Before" afterCaption="Now" />
    </div>
  </section>
);

export default HomeStoryIntro;
