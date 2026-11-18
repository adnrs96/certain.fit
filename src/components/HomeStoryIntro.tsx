import { Link } from "react-router-dom";
import TransformationPhotos from "@/components/TransformationPhotos";
import ConversationLink from "@/components/ConversationLink";
import "./HomeStoryIntro.css";

const HomeStoryIntro = () => (
  <section className="home-story" id="top" aria-labelledby="home-story-title">
    <div className="container home-story-grid">
      <div className="home-story-copy">
        <p className="home-story-audience">For people in tech</p>
        <h1 id="home-story-title">
          Fat-loss is the most impactful project you will do
          <span className="serif-italic">It&apos;s time to feel in control again.</span>
        </h1>
        <div className="home-story-summary">
          <p className="home-story-intro">Hi, I&apos;m Akshat.</p>
          <p>
            Most coaches treat weight-loss as a diet or nutrition problem. But
            my own transformation journey, from being obese for{" "}
            <strong>15+ years</strong> to losing <strong>40+ kg</strong>, has taught
            me how broken that advice is.
          </p>
          <p>
            Now with my own experience, paired with{" "}
            <strong>globally recognised</strong> coaching expertise in nutrition,
            exercise and stress management, I help{" "}
            <strong>tech professionals</strong> lose weight and transform, while
            managing a stressful career, through a <strong>simple system</strong>{" "}
            that fits real chaotic life.
          </p>
        </div>
        <div className="home-story-action">
          <Link className="btn-ocean-lg" to="/coach">Read my story →</Link>
          <ConversationLink className="btn-ghost-lg" label="Get in touch" />
        </div>
      </div>
      <div className="home-story-visual">
        <p className="home-story-photo-note">
          <span>FAANG Senior SWE</span>
          <svg viewBox="0 0 64 48" aria-hidden="true">
            <path
              d="M4 10c24-8 49 6 46 32m-9-9 9 9 8-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
        <TransformationPhotos beforeCaption="Before" afterCaption="Now" />
      </div>
    </div>
  </section>
);

export default HomeStoryIntro;
