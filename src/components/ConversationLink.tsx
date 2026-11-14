import { conversationUrl } from "@/lib/site-pages";

const ConversationLink = ({ className }: { className?: string }) => (
  <a className={className} href={conversationUrl}>
    Start a free conversation
  </a>
);

export default ConversationLink;
