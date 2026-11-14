import { conversationUrl } from "@/lib/site-pages";

const ConversationLink = ({ className }: { className?: string }) => (
  <a className={["conversation-link", className].filter(Boolean).join(" ")} href={conversationUrl}>
    Start a free conversation
  </a>
);

export default ConversationLink;
