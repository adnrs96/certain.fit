import { Link } from "react-router-dom";
import TransformationPhotos from "@/components/TransformationPhotos";
import "./HomeStoryIntro.css";

const HomeStoryIntro = () => (
  <section className="home-story" id="top" aria-labelledby="home-story-title">
    <div className="container home-story-grid">
      <div className="home-story-copy">
        <p className="home-story-intro">Hi, I&apos;m Akshat.</p>
        <h1 id="home-story-title">
          I lost ~40 kgs{" "}
          <span className="serif-italic">While managing a hectic tech career</span>
        </h1>
        <p className="home-story-summary">
          With globally recognised training in nutrition, exercise and stress
          management, I help <strong>tech professionals</strong> lose weight,
          while managing a stressful career, through a{" "}
          <strong>simple system</strong> that fits real chaotic life.
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
