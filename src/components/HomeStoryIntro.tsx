import { Link } from "react-router-dom";
import TransformationPhotos from "@/components/TransformationPhotos";
import "./HomeStoryIntro.css";

const HomeStoryIntro = () => (
  <section className="home-story" id="top" aria-labelledby="home-story-title">
    <div className="container home-story-grid">
      <div className="home-story-copy">
        <p className="home-story-intro">
          Hi, I&apos;m Akshat.
          <span className="home-story-role">
            I&apos;m a Senior Software Engineer at a FAANG company.
          </span>
        </p>
        <h1 id="home-story-title">
          I lost ~40 kgs{" "}
          <span className="serif-italic">While managing a hectic tech career</span>
        </h1>
        <p className="home-story-summary">
          On-calls. Back-to-back meetings. Family time. Another day with no
          time for yourself.
          <span className="home-story-invitation">
            I’ve been there. With globally recognised training in nutrition,
            exercise, stress and sleep management, I help{" "}
            <strong>tech professionals</strong> lose weight through a simple
            system that fits real life—even when plans change.
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
