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
          After struggling with obesity for 15 years, I learnt sustainable
          weight loss is not determined by a diet chart, or an exercise plan.
          <span className="home-story-invitation">
            Now I help <strong>tech professionals</strong> achieve their dream transformation
            while juggling on-calls, review meetings and stressful workdays.{" "}
            <span className="home-story-system">All with a simple system.</span>
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
