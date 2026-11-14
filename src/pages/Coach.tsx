import { Link } from "react-router-dom";
import akshatThen from "@/assets/akshat-then.jpg";
import akshatNow from "@/assets/akshat-now.jpg";
import akshatEarlierStanding from "@/assets/akshat-earlier-standing.webp";
import akshatEarlierSeated from "@/assets/akshat-earlier-seated.webp";
import akshatPortrait from "@/assets/akshat-now-portrait.webp";
import akshatMusic from "@/assets/akshat-now-music.webp";
import "./Coach.css";

const Coach = () => (
  <div className="founder-letter">
    <section className="founder-hero" id="coach">
      <div className="founder-letter-header">
        <span className="founder-kicker">A LETTER FROM THE FOUNDER</span>
        <span className="founder-margin-note">To anyone who’s started over.</span>
      </div>
      <div className="founder-hero-content">
        <div className="founder-intro" data-reveal="">
          <h1 className="founder-title">
            15 years of obesity made me think{" "}
            <span>that I was the problem</span>
          </h1>
          <p className="founder-lead">
            How years of self-blame became the reason I built CERTAIN.
          </p>
          <p className="founder-byline">By Akshat · Founder of CERTAIN</p>
        </div>
        <div className="founder-photo-pair" data-reveal="">
          <figure className="founder-photo">
            <img
              src={akshatThen}
              alt="Akshat on his 27th birthday, before his transformation"
              width="900"
              height="1200"
            />
            <figcaption>Me, on my 27th birthday.</figcaption>
          </figure>
          <figure className="founder-photo">
            <img
              src={akshatNow}
              alt="Akshat after his transformation, at a hillside café"
              width="1200"
              height="1600"
            />
            <figcaption>Me, a little further along.</figcaption>
          </figure>
        </div>
        <p className="founder-photo-note">
          Two photographs. Years of learning in between.
        </p>
      </div>
    </section>

    <section className="founder-story" aria-label="Akshat’s story">
      <div className="founder-reading-column">
        <article className="founder-chapter" data-reveal="">
          <h2>My Story</h2>
          <p className="founder-opening">
            For more than 15 years, I lived with obesity, believing I wasn’t
            trying hard enough. I avoided photographs and mirrors. Fit people
            seemed like deities who had solved an equation I couldn’t figure out.
          </p>
          <p>
            Nutritionists gave me diets I couldn’t sustain beyond two weeks.
            At the gym, I gained muscle and lost weight, only to regain it
            quickly. Every fresh start ended with the same feeling.
          </p>
          <blockquote className="founder-pullquote">
            I didn’t question the plan. I questioned myself.
          </blockquote>
          <p>
            Each time, I gave it the same name: a lack of discipline, and knowledge.
          </p>
          <figure className="founder-memory founder-memory--pair">
            <div className="founder-memory-photos">
              <img
                src={akshatEarlierStanding}
                alt="Akshat, on the left, in an earlier photograph"
                width="960"
                height="1280"
                loading="lazy"
                decoding="async"
              />
              <img
                src={akshatEarlierSeated}
                alt="Akshat seated in a blue T-shirt in an earlier photograph"
                width="768"
                height="1024"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>A few pages from the earlier years.</figcaption>
          </figure>
        </article>

        <article className="founder-chapter" data-reveal="">
          <span className="founder-chapter-date">JUNE 2021</span>
          <h2>When the answers conflicted</h2>
          <p>
            In June 2021, a friend recommended a keto coach who had helped him
            lose more than 40 kg. I promised myself: if this didn’t work,
            I would stop trying.
          </p>
          <p>
            His message was simple: no carbs, only fats and protein. I saw
            results, and believed him.
          </p>
          <p>
            Six months later, severe gastrointestinal problems led me to a
            doctor. He told me I had stage-2 NAFLD and was close to liver
            cirrhosis. He compared my liver to someone drinking scotch daily;
            my own bottle of whisky had sat untouched for months, a reminder
            of my resolve.
          </p>
          <p>
            The keto coach dismissed the findings and warned me against
            nutritionists. My gym coach and doctor warned me against him.
            I was caught between voices, with no clear answer.
          </p>
          <p className="founder-emphasis">
            Enough. I had to take accountability for my own transformation:
            understand the science, and learn to rely on myself.
          </p>
        </article>

        <article className="founder-chapter" data-reveal="">
          <h2>Why CERTAIN exists</h2>
          <p>
            Learning and experimenting with exercise science and nutrition
            science helped. But the real difference was a mindset around
            nutrition, science, and habits, shaped by hard-earned coping
            strategies and the scars of failures I learnt from.
          </p>
          <p>
            Food, movement, mindset, and habits aren’t separate answers.
            They form a continuously evolving loop: learn, adjust, keep going.
            I built CERTAIN to offer the support I had needed, not another
            rigid plan or another reason to blame yourself.
          </p>
          <div className="founder-later-photos">
            <figure className="founder-memory founder-memory--portrait">
              <img
                src={akshatPortrait}
                alt="Akshat wearing sunglasses and a cap in a car after his transformation"
                width="1050"
                height="1400"
                loading="lazy"
                decoding="async"
              />
              <figcaption>A little further along. Still learning.</figcaption>
            </figure>
            <figure className="founder-memory founder-memory--life">
              <img
                src={akshatMusic}
                alt="Akshat singing and playing an acoustic guitar after his transformation"
                width="788"
                height="1400"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Beyond the numbers.</figcaption>
            </figure>
          </div>
        </article>
      </div>
    </section>

    <section
      className="founder-mission"
      aria-labelledby="founder-mission-title"
    >
      <div className="founder-reading-column" data-reveal="">
        <h2 id="founder-mission-title">
          You don’t have to do this alone.
        </h2>
        <p>
          No snake oil. Scientifically grounded, evidence-based methods,
          with support that adapts to your life.
        </p>
        <p className="founder-mission-promise">
          Weight loss is hard. But we are here to make the journey easier for
          you.
        </p>
        <p className="founder-signoff">With understanding,</p>
        <p className="founder-signature">Akshat</p>
        <div className="founder-actions">
          <Link className="btn-ocean-lg" to="/start-journey">
            Start a conversation →
          </Link>
          <Link className="btn-ghost-lg" to="/programme">
            Explore the programme
          </Link>
        </div>
      </div>
    </section>

    <section className="founder-learning" aria-labelledby="founder-learning-title">
      <div className="founder-reading-column">
        <h2 id="founder-learning-title">The study behind the story</h2>
        <div className="founder-credentials">
          <article className="founder-credential">
            <h3>Diploma in Nutrition &amp; Dietetics</h3>
            <p>National Fitness &amp; Nutrition Academy</p>
          </article>
          <article className="founder-credential">
            <h3>Certified Nutrition Coach</h3>
            <p>Precision Nutrition, Canada</p>
          </article>
          <article className="founder-credential">
            <h3>Certified Sleep, Stress &amp; Recovery Coach</h3>
            <p>Precision Nutrition, Canada</p>
          </article>
        </div>
      </div>
    </section>
  </div>
);

export default Coach;
