import { Link } from "react-router-dom";
import { BadgeCheck, GraduationCap } from "lucide-react";
import akshatThen from "@/assets/akshat-then.jpg";
import akshatNow from "@/assets/akshat-now.jpg";
import "./Coach.css";

const Coach = () => (
  <>
    <section className="founder-hero" id="coach">
      <div className="container founder-hero-grid">
        <div className="founder-intro" data-reveal="">
          <span className="eyebrow-pill on-dark">MY STORY</span>
          <h1 className="founder-title">
            For 15 years, I thought{" "}
            <span className="serif-italic">the problem was me.</span>
          </h1>
          <p className="founder-lead">
            I’m Akshat, the founder of CERTAIN. Before I built this, I lived
            through the diets, the restarts, and the feeling that I was failing
            myself. This is the story of what changed, and why I want to make
            the journey easier for you.
          </p>
          <p className="founder-byline">Akshat · Founder &amp; your coach</p>
        </div>
        <div className="founder-photo-pair" data-reveal="">
          <figure className="founder-photo">
            <img
              src={akshatThen}
              alt="Akshat on his 27th birthday, before his transformation"
              width="900"
              height="1200"
            />
            <figcaption>Then · Age 27</figcaption>
          </figure>
          <figure className="founder-photo">
            <img
              src={akshatNow}
              alt="Akshat after his transformation, at a hillside café"
              width="1200"
              height="1600"
            />
            <figcaption>Now</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="founder-story" aria-label="Akshat’s story">
      <div className="founder-reading-column">
        <article className="founder-chapter" data-reveal="">
          <span className="founder-chapter-number">
            01 · THE SAME OLD CYCLE
          </span>
          <h2>I kept being told I wasn’t doing enough.</h2>
          <p>
            I lived with obesity for more than 15 years. For all those years, I
            was made to believe the problem was me: I wasn’t consistent enough,
            I didn’t eat the right foods, I didn’t work out enough, or I hadn’t
            found the right fat burners and supplements.
          </p>
          <p>
            Nutritionists told me my diet was bad and handed me a new one. I
            couldn’t sustain it beyond two weeks. At the gym, trainers pushed me
            hard. I gained some muscle and lost some weight in the beginning,
            but I couldn’t sustain that either. The weight came back quickly.
          </p>
          <blockquote className="founder-pullquote">
            I thought I was at fault. I thought I didn’t have the discipline.
          </blockquote>
        </article>

        <article className="founder-chapter" data-reveal="">
          <span className="founder-chapter-number">02 · JUNE 2021</span>
          <h2>One more attempt. One last promise to myself.</h2>
          <p>
            A friend recommended a keto coach who had helped him lose more than
            40 kg. I was convinced. This time, I promised myself that if it
            didn’t work, I would give up on losing weight.
          </p>
          <p>
            The coach’s philosophy was that humans weren’t optimised to eat
            carbohydrates and should only eat fats. I believed in results, and I
            could see results. So I believed him. Maybe he was right; after all,
            he was getting results for his clients.
          </p>
        </article>

        <article className="founder-chapter" data-reveal="">
          <span className="founder-chapter-number">03 · THE TURNING POINT</span>
          <h2>Then my health told a different story.</h2>
          <p>
            Six months later, my gastrointestinal issues had become so bad that
            I contacted a doctor. He told me I had stage-2 NAFLD and was close
            to liver cirrhosis. My liver, he said, looked as though I had been
            drinking a bottle of scotch every day.
          </p>
          <p>
            I hadn’t touched the bottle of whisky on my table for months, ever
            since I started. It had become a reminder of my resolve.
          </p>
          <p>
            When I shared the findings with the coach, he told me they were
            incorrect and that I should continue his plan. He wasn’t willing to
            believe them. I was confused, caught between what my doctor was
            telling me and the plan I had put so much faith in.
          </p>
          <p className="founder-emphasis">
            That was the moment I decided: enough is enough. I needed to
            understand the science for myself.
          </p>
        </article>

        <article className="founder-chapter" data-reveal="">
          <span className="founder-chapter-number">
            04 · LEARNING A DIFFERENT WAY
          </span>
          <h2>
            Knowledge helped. Learning how to keep going changed everything.
          </h2>
          <p>
            In the years that followed, I studied exercise science and nutrition
            science. They were immensely helpful. But the real difference was an
            evolving mindset, hard-earned coping strategies, understanding my
            failures, and learning how to avoid repeating them.
          </p>
          <p>
            It wasn’t one perfect plan. It was continuously learning, adjusting,
            and following the path.
          </p>
        </article>

        <article className="founder-chapter" data-reveal="">
          <span className="founder-chapter-number">
            05 · WHY I FOUNDED CERTAIN
          </span>
          <h2>The whole picture matters.</h2>
          <p>
            My experience made me realise that much of the health industry
            approaches this problem in a flawed way. Weight loss isn’t just
            nutrition. It isn’t just exercise, mindset, or habits in isolation.
            It’s a continuously evolving loop: what we learn in each area feeds
            the others, and the process keeps adapting.
          </p>
          <p>
            That is the motivation behind CERTAIN. Not another rigid plan that
            leaves you blaming yourself when life gets in the way, but support
            that helps you understand yourself, adapt, and keep going.
          </p>
        </article>
      </div>
    </section>

    <section
      className="founder-learning"
      aria-labelledby="founder-learning-title"
    >
      <div className="container">
        <div className="section-head center" data-reveal="">
          <span className="eyebrow-pill">THE LEARNING BEHIND THE MISSION</span>
          <h2 className="section-title" id="founder-learning-title">
            Lived experience.{" "}
            <span className="serif-italic">Grounded in learning.</span>
          </h2>
        </div>
        <div className="founder-credentials">
          <article className="founder-credential" data-reveal="">
            <GraduationCap aria-hidden="true" size={26} />
            <h3>Diploma in Nutrition &amp; Dietetics</h3>
            <p>National Fitness &amp; Nutrition Academy</p>
          </article>
          <article className="founder-credential" data-reveal="">
            <BadgeCheck aria-hidden="true" size={26} />
            <h3>Certified Nutrition Coach</h3>
            <p>Precision Nutrition, Canada</p>
          </article>
          <article className="founder-credential" data-reveal="">
            <BadgeCheck aria-hidden="true" size={26} />
            <h3>Certified Sleep, Stress &amp; Recovery Coach</h3>
            <p>Precision Nutrition, Canada</p>
          </article>
        </div>
      </div>
    </section>

    <section
      className="founder-mission"
      aria-labelledby="founder-mission-title"
    >
      <div className="founder-reading-column" data-reveal="">
        <span className="eyebrow-pill on-dark">WHAT YOU CAN EXPECT HERE</span>
        <h2 className="section-title" id="founder-mission-title">
          No snake oil. <span className="serif-italic">No blame.</span>
        </h2>
        <p>
          CERTAIN uses scientifically grounded, evidence-based methods. We work
          on food, movement, mindset, and habits together, and keep adapting the
          process around your real life.
        </p>
        <p className="founder-mission-promise">
          Weight loss is hard. But we are here to make the journey easier for
          you.
        </p>
        <p className="founder-signature">Akshat</p>
        <div className="founder-actions">
          <Link className="btn-ocean-lg on-dark" to="/start-journey">
            Start a conversation →
          </Link>
          <Link className="btn-ghost-lg on-dark" to="/programme">
            Explore the programme
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Coach;
