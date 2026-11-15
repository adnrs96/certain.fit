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
          For 15 years, I thought getting fit meant becoming a completely
          different person. Turns out, I didn’t need to stop being me. I needed
          an approach I could actually live with.
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
