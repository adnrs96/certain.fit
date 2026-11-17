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

The homepage combines a personal transformation introduction, programme introduction,
Personally guided by Akshat offering, and closing invitation.
React Router handles navigation without reloading the application,
and the header highlights the current page.

| URL | Content | Page component |
|---|---|---|
| `/` | Story and transformation preview, floating programme preview, Personally guided by Akshat offering, and closing invitation | `src/pages/Index.tsx` |
| `/coach` | Akshat’s story and why he founded CERTAIN | `src/pages/Coach.tsx` |
| `/how-it-works` | Whole-person health philosophy and diagram, six coaching areas, and discovery call | `src/pages/HowItWorks.tsx` |
| `/journal` | The Growth Journal chapters and examples | `src/pages/Journal.tsx` |
| `/timeline` | Personal timeline estimator | `src/pages/Timeline.tsx` |
| `/programme` | Six coaching areas, included support, and learning as you progress | `src/pages/Programme.tsx` |
| `/start-journey` | Private starting-point form, welcome card, and booking link | `src/pages/Journey.tsx` |
| `/faq` | Frequently asked questions | `src/pages/FAQ.tsx` |

`src/components/SiteLayout.tsx` owns the shared header, footer, page scroll
behavior, and initialization/cleanup of interactive sections.
Desktop and mobile navigation include an explicit Home link. Its exact-match
active state applies only at `/`. Pages do not display a separate Home / page
breadcrumb row; browsing and return navigation belong in the top navigation.
`src/lib/site-pages.ts` defines navigation labels and redirects old homepage
section links such as `/#journal` to the corresponding page.

`src/components/ProgrammeSection.tsx` is shared by the homepage and the
standalone Programme page. Update the offering in this component so both
locations stay consistent. It uses an `h2` on the homepage and an `h1` on
the standalone page, preserving one primary heading per page.
`src/components/WorkAreasSection.tsx` owns the six coaching areas and the
learning promise. It appears after the feedback loop on How it works
and after the offer on the standalone Programme page, not on the homepage.
Old `/#work-on` links redirect to `/how-it-works#work-on` and scroll to the
moved section. Keep those six areas in
this shared component rather than duplicating them inside the offer card.
The old Honest by design section has been removed from both locations.
Diet and movement lead the coaching cards; cravings, stress/sleep, habits,
and blood markers follow in that order.

### How it works: whole-person philosophy

`src/components/CoachingLoop.tsx` owns the page's only `h1`, original philosophy
copy and large six-node diagram. `src/pages/HowItWorks.css` controls its centered
hero layout, animated connections, and existing three-pose transformation figure.
Keep this diagram full-width below the introduction, not a small side illustration.
The six practical areas are nutrition, sleep, stress, energy, movement and health
context; these are CERTAIN's coaching areas, not PN's six Deep Health dimensions.

Research informing the copy:
- PN Deep Health: https://www.precisionnutrition.com/deep-health
- PN public assessment article: https://www.precisionnutrition.com/deep-health-guide
- PN sleep/stress/recovery curriculum and coaching scope:
  https://www.precisionnutrition.com/precision-nutrition-sleep-stress-management-recovery-coaching-certification-faq
- Weight contributors:
  https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/factors-affecting-weight-health

The intent is to connect lifestyle, wider circumstances and self-awareness,
not claim obesity is caused only by a hidden issue, dismiss nutrition/activity,
or promise a cure. Blood markers and medical concerns remain clinician-led.
The page links to the public sources. Its practical coaching areas must not be
labelled as PN's six dimensions or imply a PN partnership or endorsement.
Preserve the six work-area cards and discovery call. The page ends after
discovery: the "Then we put it into practice" timeline, daily-support banner,
journal bridge and two-kinds-of-progress section have intentionally been removed.
Verify all six node labels/descriptions, no node/hub overlap at 320px and above,
visible content without scrolling to reveal it, one `h1`, working section links,
animated data/figure under normal motion, and a complete static final pose with
reduced motion. No pause buttons should be introduced.

The homepage passes `showDetailsLink` to show a **Know more** link to
`/programme`. The programme route remains available directly and in the footer,
but is intentionally excluded from both desktop and mobile header navigation.
Journal is also excluded from header navigation; its route, footer link,
and clickable Growth Journal programme preview remain available.
The estimator's navigation and entry actions are labelled **How long will it take?**;
keep the existing `/timeline` route so shared links continue working.

### Timeline calculation

The calculator is a **phased target-based planner**, not a metabolic or fat-loss
prediction. `src/lib/estimator-config.ts` defines an early `programWeeks: 12`
phase at up to `targetWeeklyKg: 1` kg/week in normal conditions, followed by
`laterPace: 0.75` times that adjusted early pace. `quickWinWeeks: 3` provides
a smaller early milestone. These are explicit planning assumptions, not a
validated biological curve or a claim that everyone slows at week 12.

The 100 kg to 70 kg example, age 34, 5'10", without profile/health reductions,
splits into **12 kg in the first 12 weeks, then 18 kg over the next 24 weeks**:
36 weeks, displayed as About 8 months. At 1 kg/week the three-week milestone
is 3 kg, never 10–15 kg. An unadjusted 100 kg to 96 kg goal takes 4 weeks and
has no later phase; an 80 kg to 70 kg goal takes 10 weeks.

Retain under-18, low-BMI, pregnancy and other health gates; health/profile
adjustments; preparation phases; and health-specific weekly caps. A selected
0.5 kg/week cap must still apply, and a preparation phase still uses half the
adjusted planning pace. No path may exceed 1 kg/week, including high-activity
profiles. Explain adjusted plans with the adjusted planning note, not the
unqualified normal-conditions 1 kg/week note.

The early headline, three-week milestone, phase totals, full duration, dates
and private form summary all use the same single path. Phase losses must sum to
the total requested loss and never exceed it. Round short durations up to whole weeks and longer
ones to approximate months or years; never round small goals to zero. A goal
not reached within the simulation horizon must be marked "More than", not given
a fabricated completion date.

General reference: the [NHS weight-loss guidance](https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/tips-to-help-you-lose-weight/)
lists 0.5–1 kg/week as a target range. Using its upper end is an explicit planning
assumption, not evidence that every client will achieve that pace or that this
model predicts their individual response.

The [NIDDK discussion of dynamic weight change](https://www.niddk.nih.gov/health-information/professionals/diabetes-discoveries-practice/nih-body-weight-planner)
explains why weight loss can slow over time. It does not validate our fixed
12-week transition or 0.75 factor. Do not market these planning assumptions as
scientifically predicted fat loss or add an assumed rapid water-loss bonus.

The result leads with **planned early weight loss**, followed by two sequential
phases and a smaller full-goal timeframe. Short goals truncate the early phase
at the goal; do not show a zero-loss later phase. Tiny goals must not round to zero.
There are no graphs, starting-point-versus-CERTAIN comparisons, or numeric
"a week to start" stats. Keep the target-planning assumptions and health safeguards;
do not treat 1 kg/week as a guaranteed minimum. The estimate assumes the selected
lifestyle options with a configured `better.to` replacement are already in place.
List those planned habits beside the coaching support and keep the concise
estimate/assumptions note visible. The private form handoff uses the same full-goal
duration, explicitly marked as an estimate rather than a guaranteed deadline.
Keep unfinished plans open-ended and omit the milestones panel when no milestone
is reached within the simulation horizon.

Run `npm run test:estimator` for phase boundaries, phase-total consistency,
the exact 100-to-70 kg example, absence of comparisons, private summary
consistency, health safeguards and unfinished/small-goal cases.
For UI changes, build and preview, complete all three quiz steps at 320, 375, 768
and 1440 px, and check: a prominent early-loss milestone and sequential phase cards,
the full timeline shown secondarily, no graphs or comparison
labels, no horizontal overflow,
no starting-weekly-rate stat, editing preserves the answers, and the CTA passes
only the estimate summary via browser history state (no query parameters or
external health-data handoff).

All booking links use `src/components/ConversationLink.tsx`, normally labelled
**Start a free conversation**; the opening story uses its `label` prop for
**Get in touch** beside Read my story. Update `conversationUrl` in
`src/lib/site-pages.ts` to change the WhatsApp destination everywhere. The
current destination is a direct `wa.me` chat link to the same account verified
from the supplied WhatsApp Business short link. Keep one shared destination,
not separate hard-coded URLs in each button. Verify the landing page shows the
intended contact and the correct app/Web chat destination on desktop and mobile;
an HTTP 200 alone does not prove a chat link works. These are normal external links;
they do not append estimator answers, form entries, or prefilled health data.
Styled conversation buttons display a WhatsApp icon; text-only footer links
and the narrow sticky action remain compact. To verify a change, check the homepage's opening Get in touch and closing conversation actions, the
standalone programme's booking action, desktop/mobile navigation, and the story
page's conversation link, then open the destination without sending a message.

The current offering is personally delivered by Akshat. Keep programme,
contact-form, FAQ, estimator, and navigation copy founder-led rather than
suggesting an assigned coach or a pool of coaches. The founder’s story still
refers to his previous coaches; those historical references are intentional.

### Homepage focus and booking-button animation

`HomeStoryIntro.tsx` opens the homepage with Akshat's story and the actual before
and after photographs. Its title is the page's only `h1`. On mobile, the photos
come before the supporting paragraph so both photographs are visible on initial
load, including 320 by 568 screens. The Read my story action opens `/coach`;
Get in touch opens the shared WhatsApp destination. Keep both buttons side by
side on small screens with readable labels, adequate tap targets, and no overflow.
`TransformationPhotos.tsx` shares the photo pair, descriptive alt text, intrinsic
dimensions, and compact between-photo ~40 kg marker with the full story.
Its CSS preserves the story's existing framed-photo design. Do not duplicate the
photo markup or regenerate the images when changing either placement.

The existing programme hero follows this personal introduction, with an `h2`
reading "Introducing, The CERTAIN System". Its lead is "Because life is full of
uncertainties. Managing your fitness goals shouldn't be." The supporting copy
describes the structured, personalised programme across nutrition, movement,
sleep and stress, adapted to food preferences, routine and real life. The motto
belongs to this programme introduction. The founder story opens with "I help
people in tech solve their weight management problems", with the subtitle
"Using a simple, structured approach". An arrow annotation by the photos reads
"Also a Senior SWE at a FAANG company".
Keep this introduction short, with
one primary How it works button linking to `/how-it-works` and a compact
programme illustration. Keep detailed service copy below the hero; do not
add a trust list, more mockup panels, or a separate timeline promotion.
The timeline remains accessible through navigation and the closing section.
`src/components/HeroProgrammeVisual.tsx` renders a daily-plan app preview,
The Growth Journal, and a small check-in note using HTML/CSS rather than a
founder photo. The app is an illustrative programme preview, not a live
application, download, or new data-storage feature. Its link opens How it works;
the journal opens `/journal`. Keep the foreground objects sparse and their
labels unobscured. Founder photographs belong in the opening story preview and
full story, not among the floating programme objects.
The How it works button occupies the programme hero's main action slot,
replacing its conversation action. Do not duplicate it under the mockup or
expertise card. Get in touch is already available in the opening story section.
The programme hero intentionally has no secondary Before and after
button; the opening Read my story action and shared navigation still reach `/coach`.
The Personally guided by Akshat offering is the homepage's third section,
immediately after the story and programme introduction.
At 880px and below, the headline, introduction, preview, and conversation
actions stack in that order. The new story preview intentionally comes first;
do not force the entire programme introduction into the initial mobile viewport.
Keep its primary How it works action visible and unobstructed when scrolled into view.
The closing message is "Your weight-loss journey. Built on understanding you."
Its supporting copy connects food, movement, sleep, stress and everyday life
to the awareness and skills clients can use beyond coaching.
The old founder-led eyebrow and “Skills for life” programme
subtitle have been removed.

`src/components/FloatingMotion.tsx` wraps the hero preview and coaching-area cards.
There are no visible pause/play controls. `FloatingMotion.css` supplies gentle
vertical motion; the card styles add hover treatment without hiding content.
Reduced-motion preferences stop the animation.
When editing, check continuous motion in each section, keyboard focus on both
preview links, hover treatment, reduced motion, and non-overlapping cards at
mobile, tablet, and desktop widths.

The journal is consistently called The Growth Journal in its page title,
cover, hero preview, offering, footer, discovery flow, and starting-point copy.
Its chapters and keyboard-accessible tab navigation are unchanged.

`src/components/ExpertiseSummary.tsx` displays the compact Globally Recognised
Expertise section above the preview in the desktop hero's right column.
On mobile it follows the conversation actions, keeping the WhatsApp action
visible without scrolling. `src/lib/coach-credentials.ts` is the shared source
for its summary and the full qualifications on Our story. The summary links
to `/coach#qualifications`; preserve that anchor when changing the story layout.

The story's `founder-photo-pair` is a three-column grid: before photo, compact
~40 kg marker, after photo. Keep the marker inside the gap at all widths;
it must not add another row below the photographs or obscure either image.

The current story uses the selected IMG_9672 photograph for the transformation's
after image (`akshat-transformation-after.webp`, 1200 by 1600) and IMG_9669 for the
later coach portrait (`akshat-coach-portrait.webp`, 1050 by 1400). Both are
non-generative crops with modest colour/exposure correction and sharpening,
exported as sRGB WebP without source EXIF metadata. Preserve real facial detail,
skin texture, and body proportions; do not reshape the transformation images.
Keep the existing before photograph, other story memories, and the permanently
blurred face in `akshat-earlier-standing.webp` unchanged. Do not regenerate that
asset from its original. Verify the actual photographs, correct intrinsic image
dimensions, loaded assets, and the between-photo marker on desktop and mobile.

`ConversationLink` supplies the shared `conversation-link` class. Styled
conversation buttons have an always-visible blue halo with a continuous gentle
glow cycle. The glow never fades to zero, has no delayed start or finite run,
and remains visible in hover/focus states. Reduced motion retains the steady
halo without the cycle. Text-only conversation links use a static text glow.
The non-interactive pseudo-element does not move or obstruct the label.
Check the glow both on entry and after several cycles, then the programme CTA at
320px/375px, preview layout, hover/focus, reduced motion, and the unchanged
WhatsApp destination after edits. Check that the preview links work,
the Read my story button opens `/coach`, and the mobile menu still closes on
selection and Escape.

### Initial page visibility

Content is visible on initial render, including sections below the viewport.
`src/lib/website.ts` marks all `[data-reveal]` elements as visible immediately
for existing decorative hooks; no scroll observer or opacity rule hides them.
The hero has no text-entry fade, and journal handwriting and example messages
do not wait for reveal animations. Keep deliberate `[hidden]` states for inactive
tabs, form steps, and menus; those are interaction controls, not scroll reveals.
The homepage moves straight from the story preview to the programme introduction
and Personally guided by Akshat offering. The Read my story action leads to the
transformation photographs at `/coach`. Header, mobile-menu, and footer links
use the Before and after label;
the existing `/coach` route is preserved. Verify every page without scrolling first,
both transformation photos on initial desktop/mobile load, and the story link
and programme actions on a small 320px by 568px screen. Floating previews, coaching-card motion,
WhatsApp glow, and sticky-action scroll behaviour remain independent.

The compact Globally Recognised Expertise card uses two locally bundled official
provider logos, not three certificate titles. Its text explains Akshat's training
with each provider; it does not imply programme endorsement or partnership.
Full qualification titles remain at `/coach#qualifications`. Logo sources:
`https://www.nfna.in/wp-content/uploads/2026/01/cropped-final_logo_coloured.png`
and `https://assets.precisionnutrition.com/2020/09/pn-logo-mark-blue-text-gray-small.png`.
Keep each logo's proportions and colours, readable provider alt text, and the
qualifications link. Check both image loading and small-screen layout after edits.

### Coaching cadence and feedback-loop animation

`src/pages/HowItWorks.tsx` explains the philosophy, coaching areas and discovery agenda;
its page-specific styles live in `src/pages/HowItWorks.css`.

The discovery agenda totals 45 minutes (5 + 15 + 10 + 10 + 5). It is presented
as the fuller discovery session after a free 30-minute introductory call. The initial
conversation action now opens WhatsApp, where the introductory call is arranged;
it must not imply that clicking the button books a calendar appointment.
Service details elsewhere: the programme begins a couple of days after discovery, with daily check-ins
for 14 days, then weekly video calls informed by the weekly journal. WhatsApp
support is 9 AM–9 PM IST daily, including weekends. Keep the programme card,
FAQ, and estimator support copy consistent when these service details change.

`src/components/CoachingLoop.tsx` opens How it works with the page's primary
heading and a single nutrition/sleep/stress/energy/movement/health-context diagram. The six areas
are informational, not buttons; do not restore the removed example panel or
selection controls. The six work-area cards and discovery call follow the diagram;
no programme cadence, journal bridge or progress section follows discovery.
SVG data-flow animation is decorative; all meaning remains available in text.
The centre shows an SVG person moving through resting, building, and celebratory
poses on a nine-second loop, with a filling progress ring. This illustrates the
person's transformation as feedback adapts the plan, not a measured weight-loss
forecast. Keep the static accessible description and explanatory caption.
Reduced motion shows the final pose and complete ring without animation.
There is no pause/play control; reduced-motion preferences
disable it. When editing, check the section order, single `h1`, continuous motion,
reduced motion, 320px mobile layout, and the Growth Journal and conversation links.

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
