export const conversationUrl = "https://calendly.com/akshatpriyansh1769/30min";

export const sitePages = [
  { path: "/coach", label: "Our story", title: "The founder’s story" },
  { path: "/how-it-works", label: "How it works", title: "How CERTAIN works" },
  { path: "/journal", label: "Journal", title: "Your Journey Journal" },
  { path: "/timeline", label: "Timeline", title: "Your personal timeline" },
  { path: "/programme", label: "Programme", title: "The CERTAIN programme" },
  { path: "/faq", label: "FAQs", title: "Your questions answered" },
];

export const legacySectionRoutes: Record<string, string> = {
  "#coach": "/coach",
  "#how-it-works": "/how-it-works",
  "#journal": "/journal",
  "#life-happens": "/programme",
  "#progress": "/how-it-works",
  "#timeline-estimator": "/timeline",
  "#programme": "/programme",
  "#start-journey": "/start-journey",
  "#faq": "/faq",
};

export function getTimelineEstimate(state: unknown): string {
  return state !== null &&
    typeof state === "object" &&
    "timelineEstimate" in state &&
    typeof state.timelineEstimate === "string"
    ? state.timelineEstimate
    : "";
}
