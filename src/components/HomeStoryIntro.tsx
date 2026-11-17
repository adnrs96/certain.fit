import { Link } from "react-router-dom";
import TransformationPhotos from "@/components/TransformationPhotos";
import ConversationLink from "@/components/ConversationLink";
import "./HomeStoryIntro.css";

const HomeStoryIntro = () => (
  <section className="home-story" id="top" aria-labelledby="home-story-title">
    <div className="container home-story-grid">
      <div className="home-story-copy">
        <p className="home-story-intro">Hi, I&apos;m Akshat.</p>
        <h1 id="home-story-title">
          I help people in tech solve their weight management problems
          <span className="serif-italic">Using a simple, structured approach</span>
        </h1>
        <div className="home-story-summary">
          <p>
            My transformation journey made me <strong>re-think</strong>{" "}
            traditionally coached weight loss.
          </p>
          <p>
            Now with my own experience, paired with{" "}
            <strong>globally recognised</strong> expertise in nutrition, exercise
            and stress management, I help{" "}
            <strong>tech professionals</strong> lose weight, while managing a
            stressful career, through a <strong>simple system</strong> that fits
            real chaotic life.
          </p>
        </div>
        <div className="home-story-action">
          <Link className="btn-ocean-lg" to="/coach">Read my story →</Link>
          <ConversationLink className="btn-ghost-lg" label="Get in touch" />
        </div>
      </div>
      <div className="home-story-visual">
        <TransformationPhotos beforeCaption="Before" afterCaption="Now" />
        <p className="home-story-photo-note">
          <span>Also a Senior SWE at a FAANG company</span>
          <svg viewBox="0 0 64 48" aria-hidden="true">
            <path
              d="M4 38c24 8 49-6 46-32m-9 9 9-9 8 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>
    </div>
  </section>
);

export default HomeStoryIntro;
