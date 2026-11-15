import { Link } from "react-router-dom";
import TransformationPhotos from "@/components/TransformationPhotos";
import "./HomeStoryIntro.css";

const HomeStoryIntro = () => (
  <section className="home-story" id="top" aria-labelledby="home-story-title">
    <div className="container home-story-grid">
      <div className="home-story-copy">
        <p className="home-story-intro">Hi, I’m Akshat.</p>
        <h1 id="home-story-title">
          Yes, that’s me.{" "}
          <span className="serif-italic">In both photos.</span>
        </h1>
        <p className="home-story-summary">
          I wasn’t always sure I could change, either. And I know
          what it takes to be the guy on the right. And no - it&apos;s not
          quitting biryani or eating salad!
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
