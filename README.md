# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

The GitHub repository's `main` branch is connected to Vercel. Pushing a commit
to `main` triggers a production deployment. Confirm that the Vercel commit
status is successful before checking the public website.

### Website pages

The homepage combines the introduction, programme offering, and closing
invitation. React Router handles navigation without reloading the application,
and the header highlights the current page.

| URL | Content | Page component |
|---|---|---|
| `/` | Introduction, programme offering, and closing invitation | `src/pages/Index.tsx` |
| `/coach` | Akshat’s story and why he founded CERTAIN | `src/pages/Coach.tsx` |
| `/how-it-works` | Coaching stages and both kinds of progress | `src/pages/HowItWorks.tsx` |
| `/journal` | Journey Journal chapters and examples | `src/pages/Journal.tsx` |
| `/timeline` | Personal timeline estimator | `src/pages/Timeline.tsx` |
| `/programme` | Six coaching areas, included support, and learning as you progress | `src/pages/Programme.tsx` |
| `/start-journey` | Private starting-point form, welcome card, and booking link | `src/pages/Journey.tsx` |
| `/faq` | Frequently asked questions | `src/pages/FAQ.tsx` |

`src/components/SiteLayout.tsx` owns the shared header, footer, page scroll
behavior, and initialization/cleanup of interactive sections.
`src/lib/site-pages.ts` defines navigation labels and redirects old homepage
section links such as `/#journal` to the corresponding page.

`src/components/ProgrammeSection.tsx` is shared by the homepage and the
standalone Programme page. Update the offering in this component so both
locations stay consistent. It uses an `h2` on the homepage and an `h1` on
the standalone page, preserving one primary heading per page.

The homepage passes `showDetailsLink` to show a **Know more** link to
`/programme`. The programme route remains available directly and in the footer,
but is intentionally excluded from both desktop and mobile header navigation.

All primary booking links use `src/components/ConversationLink.tsx`, labelled
**Start a free conversation**. Update `conversationUrl` in
`src/lib/site-pages.ts` to change the Calendly destination everywhere. These are
normal external links; they do not pass estimator answers or form entries to
Calendly. To verify a change, check the homepage's two programme actions, the
standalone programme's booking action, desktop/mobile navigation, and the story
page's booking link, then open the destination without submitting a booking.

The current offering is personally delivered by Akshat. Keep programme,
contact-form, FAQ, estimator, and navigation copy founder-led rather than
suggesting an assigned coach or a pool of coaches. The founder’s story still
refers to his previous coaches; those historical references are intentional.

### Homepage focus and booking-button animation

The homepage hero intentionally contains one headline, a short introduction,
one primary booking button, a quiet How it works link, and a single founder
portrait. Keep detailed service copy in the programme below; do not restore
the hero's example-card collage, trust list, or separate timeline promotion.
The timeline remains accessible through navigation and the closing section.
The portrait uses an unframed arch and a wider, natural cafe photograph,
not the tight headshot. At 880px and below, the headline leads, followed by
the portrait beside the introduction and then booking actions on their own row.
Keep both the face and primary booking action visible on initial mobile load.
The old founder-led eyebrow and “Skills for life” programme
subtitle have been removed.

The story's `founder-photo-pair` is a three-column grid: before photo, compact
~40 kg marker, after photo. Keep the marker inside the gap at all widths;
it must not add another row below the photographs or obscure either image.

`ConversationLink` supplies the shared `conversation-link` class. Styled booking
buttons get two gentle halo pulses on entry, finishing within 4.7 seconds.
Existing hover and keyboard-focus styling is retained. The animation uses a non-interactive
pseudo-element, does not move the label, and is disabled for reduced motion.
Plain footer links are not animated. Check the hero CTA above the fold at
320px/375px, portrait loading, hover/focus, reduced motion, and the unchanged
Calendly destination after edits.

### Coaching cadence and feedback-loop animation

`src/pages/HowItWorks.tsx` explains the discovery agenda and programme cadence;
its page-specific styles live in `src/pages/HowItWorks.css`.

The discovery agenda totals 45 minutes (5 + 15 + 10 + 10 + 5). It is presented
as the fuller discovery session after the free 30-minute Calendly introduction,
not as a 45-minute appointment booked into the existing 30-minute event.
The programme begins a couple of days after discovery, with daily check-ins
for 14 days, then weekly video calls informed by the weekly journal. WhatsApp
support is 9 AM–9 PM IST daily, including weekends. Keep the programme card,
FAQ, and estimator support copy consistent when these service details change.

`src/components/CoachingLoop.tsx` opens How it works with the page's primary
heading and a single nutrition/movement/habits/mindset diagram. The four areas
are informational, not buttons; do not restore the removed example panel or
selection controls. The programme cadence and journal follow the diagram.
SVG data-flow animation is decorative; all meaning remains available in text.
The keyboard-accessible pause control stops it, and reduced-motion preferences
disable it. When editing, check the section order, single `h1`, pause/play,
reduced motion, 320px mobile layout, and the Journey Journal and booking links.

The Life Happens page has been removed from navigation and the footer.
Existing `/life-happens` and `/#life-happens` links redirect to Programme,
so previously shared links remain usable without restoring the removed content.

The estimator passes its summary to the starting-point form through browser history
state, not a query string or persistent storage. Answers still remain in the
browser: this page split does not introduce a backend or submit the form.

### Direct links and reloads on Vercel

Keep the rewrite in `vercel.json`. This serves the Vite application's
`index.html` for page URLs so React Router can resolve them. Without the SPA
fallback, clicking an in-app link may work while opening or refreshing the
same page directly fails.

When adding a page:

1. Add its React component under `src/pages` and its route in `src/App.tsx`.
2. Add it to `src/lib/site-pages.ts` if it belongs in the main navigation.
3. Use React Router `Link` or `NavLink` for internal page links. Reserve hash
   links for elements on the current page.
4. Run `npm run build` and `npx tsc --noEmit -p tsconfig.app.json`.
5. Run `npm run preview`, open the new URL directly, reload it, and check
   navigation in both desktop and mobile layouts.
6. After pushing, wait for Vercel's successful deployment status. Open and
   reload the public page directly, and check that JS, CSS, and favicon assets
   still load rather than receiving the HTML fallback.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
