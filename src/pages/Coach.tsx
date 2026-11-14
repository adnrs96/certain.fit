import { Link } from "react-router-dom";
import ConversationLink from "@/components/ConversationLink";
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
          <aside className="founder-milestone" aria-label="My weight-loss transformation">
            <strong>~40 kg</strong>
            <span>lost</span>
            <svg
              className="founder-milestone-arrow"
              viewBox="0 0 40 14"
              aria-hidden="true"
            >
              <path
                d="M2 7h34m-6-5 6 5-6 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </aside>
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
            For 15 years, including most of my 20s, I lived with obesity.
            I avoided photographs and mirrors, felt uncomfortable in my own
            skin, and looked at fit people like deities who had solved an
            equation I couldn’t figure out.
          </p>
          <p>
            I went to nutritionists, who gave me diets I couldn’t sustain beyond
            two weeks. At the gym, coaches helped me gain muscle and lose fat,
            but the fat came back quickly. Every fresh start seemed to end with
            the same feeling. I was slowly losing confidence in myself.
          </p>
          <p>
            Each time I tried, each time I failed. I felt like a loser.
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
          <p>
            In June 2021, I enrolled with a keto coach after a conversation with
            a friend who had lost more than 40 kg with him. This time, I
            promised myself: <em>I’m going to make this work.</em>
          </p>
          <p>
            I lost 12 kgs. I was ecstatic seeing results, but I was ignoring the
            signals my body was sending. Six months later, severe gastrointestinal
            problems led me to a doctor, who told me I had stage-2 NAFLD and
            was close to liver cirrhosis. But I was following my keto coach's
            plan perfectly, so why was this happening?
          </p>
          <blockquote className="founder-pullquote">
            “Akshat, your liver looks like you have been drinking a bottle of
            scotch daily!”
            <span className="founder-quote-attribution">— My doctor</span>
          </blockquote>
          <p>
            The keto coach dismissed the findings and warned me against
            listening to the doctor. My gym coach and doctor warned me against
            the keto coach. The nutritionist was nowhere to be found. I was
            caught between voices, with no clear answer.
          </p>
          <p className="founder-emphasis">
            Defeated and confused, I decided I had to take accountability for
            my own transformation: understand the science, and learn to rely
            on myself.
          </p>
        </article>

        <article className="founder-chapter" data-reveal="">
          <h2>CERTAIN is born</h2>
          <p>
            CERTAIN is a result of years of falling down and getting up again.
          </p>
          <p>
            The programme is built around food, movement, mindset, and habits.
            I built CERTAIN to offer the support I had needed, not another
            rigid plan or someone telling me I can’t eat biryani and lose weight.
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
          We do not sell snake-oil methods of weight loss. Certain is based on
          scientifically grounded, evidence-based methods, with support that
          adapts to your life.
        </p>
        <p className="founder-mission-promise">
          Weight loss is hard. Our committment is to make the journey easier for you.
        </p>
        <p className="founder-signoff">With understanding,</p>
        <p className="founder-signature">Akshat</p>
        <div className="founder-actions">
          <ConversationLink className="btn-ocean-lg" />
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
