import ConversationLink from "@/components/ConversationLink";
import CoachingLoop from "@/components/CoachingLoop";
import WorkAreasSection from "@/components/WorkAreasSection";
import "./HowItWorks.css";

const HowItWorks = () => (
  <>
    <CoachingLoop />
    <WorkAreasSection />
    <section className="how" id="coaching-cadence">
      <div className="container">
        <div className="section-head center" data-reveal="">
          <span className="eyebrow-pill">HOW IT WORKS</span>
          <h2 className="section-title">
            Your programme,{" "}
            <span className="serif-italic">step by step.</span>
          </h2>
        </div>
        <div className="discovery-card" data-reveal="">
          <div className="discovery-intro">
            <span className="discovery-kicker">BEFORE WE BEGIN · DISCOVERY CALL</span>
            <h2>Your story first.<br />The plan comes later.</h2>
            <p>
              A proper conversation about what brought you here, what you’ve
              tried, and what you need from me. We agree on expectations and
              accountability before your programme starts.
            </p>
            <p className="discovery-duration">About 45 minutes, all about you.</p>
            <ConversationLink className="btn-ocean-lg on-dark" />
            <p className="discovery-booking-note">
              Start with a free conversation on WhatsApp. We’ll arrange an
              introductory 30-minute call, then a deeper discovery session.
            </p>
          </div>
          <ol className="discovery-agenda" aria-label="45-minute discovery call agenda">
            <li><span>5 min</span><div><h3>A quick introduction</h3><p>Meet each other. Settle in.</p></div></li>
            <li><span>15 min</span><div><h3>Your weight-loss history &amp; lifestyle</h3><p>Past attempts, your real routine, and what matters to you.</p></div></li>
            <li><span>10 min</span><div><h3>Psychological &amp; behavioural barriers</h3><p>Stress, triggers, beliefs, and what tends to get in the way.</p></div></li>
            <li><span>10 min</span><div><h3>Expectations &amp; accountability</h3><p>What support looks like, and how we work together.</p></div></li>
            <li><span>5 min</span><div><h3>Your past medical history</h3><p>Health context and any advice from your doctor to plan around.</p></div></li>
          </ol>
        </div>
      </div>
    </section>
  </>
);

export default HowItWorks;
