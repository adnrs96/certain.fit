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
            This isn’t a story about finding more willpower. It’s about years
            spent looking for answers, and slowly learning to ask different
            questions.
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
            For more than 15 years, I lived with obesity. And for much of that
            time, every attempt to change came with the same explanation:
            I wasn’t doing enough. Not consistent enough. Not eating the right
            foods. Not training hard enough. Not taking the right fat burners
            or supplements.
          </p>
          <p>
            I avoided being photographed and looked away from mirrors. Fit
            people seemed almost like deities, as though they had solved an
            equation I couldn’t figure out.
          </p>
          <p>
            A nutritionist would hand me a diet and the hope of a fresh start.
            Two weeks later, I couldn’t keep going. I didn’t question the plan.
            I questioned myself.
          </p>
          <p>
            At the gym, I worked hard. I gained some muscle and lost some weight.
            For a while, it felt like progress. But I couldn’t sustain it, and
            the weight returned quickly.
          </p>
          <blockquote className="founder-pullquote">
            The weight came back. And with it, the belief that I had failed.
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
          <h2>One last promise to myself</h2>
          <p>
            A friend told me about a keto coach who had helped him lose more than
            40 kg. His results gave me hope. I decided to try again, with a
            promise that felt final: if this didn’t work, I would stop trying
            to lose weight.
          </p>
          <p>
            The coach said humans weren’t optimised to eat carbohydrates and
            should eat only fats and protein. I believed in results, and there
            were results in front of me. So I trusted the explanation. Perhaps,
            I thought, this was the answer I had been missing.
          </p>
        </article>

        <article className="founder-chapter" data-reveal="">
          <h2>When the answers stopped making sense</h2>
          <p>
            Six months later, my gastrointestinal issues had become severe
            enough to send me to a doctor. He told me I had stage-2 NAFLD and
            warned that I was close to liver cirrhosis. My liver, he said,
            looked as though I had been drinking a bottle of scotch every day.
          </p>
          <p>
            There was a bottle of whisky on my table. I hadn’t touched it for
            months, not since I’d started the plan. I had left it there as a
            reminder of my resolve.
          </p>
          <p>
            When I shared the doctor’s findings, the coach dismissed them and
            told me to continue his plan. He wasn’t willing to believe what
            the doctor had found.
          </p>
          <p>
            The keto coach told me not to listen to the nutritionists. The gym
            coach told me not to listen to the keto coach. My doctor, too,
            told me not to listen to the keto coach.
          </p>
          <p>
            Every direction came with another warning about whom not to trust.
            I was caught in the middle, trying to make sense of advice that
            kept cancelling itself out.
          </p>
          <p className="founder-emphasis">
            Enough, I thought. I had to take accountability for my own
            transformation. I needed to be able to rely on myself: to learn
            the science, question what I was being told, and understand the
            path I was following.
          </p>
        </article>

        <article className="founder-chapter" data-reveal="">
          <h2>Learning, rather than starting over</h2>
          <p>
            In the years that followed, I spent time learning and experimenting
            with exercise science and nutrition science. They were helpful,
            enormously so. But the real difference came from something I
            hadn’t found in those lessons: a mindset around nutrition,
            science, and habits.
          </p>
          <p>
            I carry the scars of that learning: hard-earned coping strategies,
            failures I had to understand, and patterns I learnt to avoid.
            It wasn’t one perfect plan or one sudden breakthrough. It was a
            mindset that kept evolving as I learned to keep going.
          </p>
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
        </article>

        <article className="founder-chapter" data-reveal="">
          <h2>And that is where CERTAIN began</h2>
          <p>
            I came to believe that much of the health industry was looking at
            only part of the picture. Weight loss isn’t just nutrition. It
            isn’t just exercise, mindset, or habits. These things belong
            together, in a continuously evolving loop. What we learn in one
            area helps us adapt the others.
          </p>
          <p>
            I founded CERTAIN because I wanted to offer the kind of support
            I had needed: not another rigid plan, and not another reason to
            blame yourself, but a way to understand what isn’t working and
            find a way forward.
          </p>
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
          There is no snake oil here. CERTAIN uses scientifically grounded,
          evidence-based methods, bringing food, movement, mindset, and habits
          together. We keep learning with you, and adapting around your real life.
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
