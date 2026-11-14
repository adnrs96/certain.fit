import { conversationUrl } from "@/lib/site-pages";

const ConversationLink = ({ className }: { className?: string }) => (
  <a className={["conversation-link", className].filter(Boolean).join(" ")} href={conversationUrl}>
    <svg className="conversation-link-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6a12 12 0 0 0 5.9 1.5c6.6 0 11.9-5.4 11.9-12a11.8 11.8 0 0 0-3.5-8.4ZM12.1 21.9a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.3-.4A9.9 9.9 0 0 1 2.1 12a10 10 0 0 1 20 0c0 5.5-4.5 9.9-10 9.9Zm5.5-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1a8.2 8.2 0 0 1-2.4-1.5 9.1 9.1 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.5L9 6.9c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.3.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
    </svg>
    Start a free conversation
  </a>
);

export default ConversationLink;
