import ConversationLink from "@/components/ConversationLink";

const MobileCTA = () => (
  <div className="sticky-cta-bar" id="sticky-cta">
    <Link className="sticky-ghost" to="/timeline">
      My timeline
    </Link>
    <ConversationLink className="sticky-primary" />
  </div>
);

export default MobileCTA;
import { Link } from "react-router-dom";
