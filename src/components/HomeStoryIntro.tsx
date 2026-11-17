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
          Your weight
          <br />
          shouldn&apos;t run your life.
          <span className="serif-italic">It&apos;s time to feel in control again.</span>
        </h1>
        <div className="home-story-summary">
          <p className="home-story-intro">Hi, I&apos;m Akshat.</p>
          <p>
            My transformation journey made me realise the gaps, and how broken
            fat-loss coaching has become. Most coaches don&apos;t treat weight
            loss as a behaviour problem, focusing instead on diets and workouts.
            No wonder the results don&apos;t last!
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
      <TransformationPhotos beforeCaption="Before" afterCaption="Now" />
    </div>
  </section>
);

export default HomeStoryIntro;
