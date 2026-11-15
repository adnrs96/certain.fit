import { Link } from "react-router-dom";
import TransformationPhotos from "@/components/TransformationPhotos";
import "./HomeStoryIntro.css";

const HomeStoryIntro = () => (
  <section className="home-story" id="top" aria-labelledby="home-story-title">
    <div className="container home-story-grid">
      <div className="home-story-copy">
        <p className="home-story-intro">Hi, I&apos;m Akshat.</p>
        <h1 id="home-story-title">
          And yes, that&apos;s me.{" "}
          <span className="serif-italic">
            I wasn&apos;t sure I could do it either!
          </span>
        </h1>
        <p className="home-story-summary">
          I know how it feels. And that&apos;s precisely why I&apos;m your guy!
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
