# Portfolio Audit and 2026 Growth Blueprint

**Portfolio owner:** Muhammad Shahroze  
**Primary discipline:** Android engineering  
**Confirmed experience:** 3+ years in Android application development  
**Framework:** Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS 4, Framer Motion, Lenis  
**Audit date:** August 12, 2026  
**Audit scope:** Source code, production build, lint, rendered desktop and mobile experience, public assets, live project links, SEO, accessibility, performance architecture, positioning, content, and lead conversion

---

## 1. Executive verdict

The portfolio has a memorable visual opening and a coherent dark editorial style, but it currently behaves more like a cinematic introduction than a persuasive professional portfolio. It shows taste and technical ambition; it does not yet prove enough about the Android work, the decisions behind it, or the outcomes it created.

The largest opportunity is not another animation. It is replacing placeholders and generic claims with visible product evidence: real app screens, verified scale, clearly scoped contributions, architecture decisions, difficult trade-offs, and outcomes.

The site should be rebuilt around this visitor decision:

> “Can Muhammad solve the kind of Android problems I have, and is there enough evidence for me to contact him?”

### Current conversion-readiness score

These are expert heuristic scores, not laboratory or industry benchmark scores.

| Dimension | Score | Summary |
|---|---:|---|
| Positioning and message clarity | 52/100 | Profession is clear; specialization and buyer value are still generic. |
| Credibility and proof | 34/100 | Real shipped apps exist, but screenshots, outcomes, testimonials, and scoped contributions are missing. |
| Case-study quality | 30/100 | Current pages are attractive summaries, not case studies. |
| Visual identity | 74/100 | Strong typography and atmosphere, weakened by empty work cards and visible generation watermarks. |
| Navigation and usability | 64/100 | Simple route structure; long scroll sequence and cramped mobile header add friction. |
| Lead conversion | 43/100 | Contact routes exist, but no above-fold pitch, lead qualification, response expectation, or measurable funnel. |
| Accessibility | 47/100 | Semantic foundations are present, but motion, focus, duplicated content, and canvas behavior need work. |
| Technical SEO | 27/100 | Global title and description exist; most discoverability and sharing infrastructure is absent. |
| Performance readiness | 50/100 | Asset transfer size is reasonable, but 128 eager requests, client rendering, low-resolution frames, and continuous animation loops are concerns. |
| Code maintainability | 66/100 | Typed data and clean component boundaries coexist with duplicated content and unused code. |
| **Overall conversion readiness** | **49/100** | **Promising foundation; not yet a portfolio that consistently converts attention into trust and inquiries.** |

### What was verified

- `npm run lint` passes with no reported errors.
- `npm run build` passes and statically generates all 12 routes/pages, including four project pages.
- The desktop and 390 px mobile experiences were inspected in a real browser.
- The 128-frame hero sequence totals approximately **1.11 MB**, averaging **8.9 KB per frame**.
- Source hero frames are **800 × 450**, so they are enlarged on common desktop and high-density displays.
- The browser emitted Framer Motion scroll-container warnings during the review.
- Eighteen supplied Google Play listings were reviewed: 12 apps Muhammad says he engineered from scratch and 6 production apps he maintained or expanded.
- The supplied work covers products at several public install bands, including multiple 100K+ listings and one maintained product at 1M+ installs on the audit date. Install bands belong to the products and are not presented as individually attributable growth outcomes.

### What was not measured

No production URL, field analytics, Search Console, PageSpeed Insights, Lighthouse trace, or real-user Core Web Vitals dataset was supplied. Therefore, this report does **not** invent LCP, CLS, INP, bounce rate, conversion rate, ranking, or traffic numbers. Those require deployment and measurement.

---

## 2. The portfolio’s real job

Trying to make a site that “everyone admires” is too broad to guide design. The practical goal is to make the right people understand and trust Muhammad quickly.

### Confirmed opportunity strategy

Muhammad wants the portfolio to generate three kinds of opportunities:

1. employment;
2. freelance clients;
3. technical or product collaborations.

The homepage should primarily persuade employers because that is the main acquisition priority, while the contact experience should give all three inquiry types equal legitimacy. Employment targeting should cover remote roles with US and European teams, plus hybrid roles in Islamabad and opportunities across Pakistan.

Confirmed location and education context:

- currently based in Multan, Pakistan;
- planning to relocate to Islamabad;
- applied for the MS in AI and Autonomous Systems at NUST, with studies planned to begin in September 2026;
- 3+ years of Android development experience.

Do not add immigration-status copy. Until admission is formally confirmed, do not describe Muhammad as enrolled at NUST. A safe current line is:

> Based in Multan and relocating to Islamabad · MS AI and Autonomous Systems applicant at NUST · Open to remote roles with US and European teams, hybrid opportunities in Islamabad, freelance products, and collaborations.

### Priority audiences

| Audience | What they need in the first visit | Desired action |
|---|---|---|
| Recruiter | Role fit, 3+ years of experience, location/remote status, strongest products, résumé | Shortlist or schedule a screen |
| Android engineering lead | Architecture depth, ownership, debugging ability, trade-offs, collaboration | Open case studies, GitHub, or résumé |
| Founder/product owner | Evidence Muhammad can ship and maintain useful Android products | Start a qualified project conversation |
| Technical peer/collaborator | Interesting engineering decisions and credible code/process | Connect on LinkedIn or GitHub |

### The five-second questions

The top of the homepage should answer these without requiring a long scroll:

1. Who is this?
2. What exactly does he build?
3. What makes him credible?
4. What kind of opportunity does he want?
5. Where can I see proof or contact him?

The current hero clearly answers only the first two.

### Recommended positioning

Current positioning:

> Android Developer

Recommended direction:

> Android engineer with 3+ years of experience building reliable Kotlin and Jetpack Compose products—from maps and offline data to subscriptions, Firebase, and production performance.

Supporting availability line:

> Based in Multan and relocating to Islamabad · Open to remote roles with US and European teams, hybrid opportunities in Islamabad, freelance products, and collaborations.

This is more specific, keyword-relevant, and useful to both recruiters and clients. The final wording should match the exact opportunities Muhammad wants.

---

## 3. What already works

### Brand and visual strengths

- The black, white, and fluorescent green system is consistent and recognizable.
- Typography creates strong hierarchy and an editorial feel.
- The personal portrait gives the site a human identity instead of looking like a generic template.
- The navigation is small and understandable.
- The site is restrained in the number of top-level routes.
- Mobile content does not visibly overflow horizontally at the tested 390 px viewport.

### Product and engineering strengths

- The recent work spans navigation, productivity, AI-assisted identification, security, utilities, monetization, subscriptions, and production maintenance.
- The primary stack is Kotlin, Jetpack Compose, Clean Architecture, MVVM, Room, Ktor, Koin, and Firebase services including Analytics, Crashlytics, and Remote Config.
- Muhammad personally engineered the supplied from-scratch Android apps. Product direction, design, publishing, and supporting work involved other team members and must not be presented as solo product creation.
- He also worked on existing production apps through crash and ANR remediation, monetization updates, premium-screen improvements, and targeted feature fixes.
- Project data is strongly typed in `portfolio.ts`.
- Dynamic project routes are statically generated with `generateStaticParams()`.
- External links use `noopener noreferrer` where they open a new tab.
- The contact page includes email, phone, LinkedIn, GitHub, location, and remote availability.
- A print-oriented résumé experience already exists.

### Commercial proof that is currently hidden

The public portfolio drastically understates the work. Muhammad supplied 12 live apps he engineered from scratch during the last 15 months, plus 6 existing production apps he maintained or expanded. Several listings have crossed 100K+ public installs, and one maintained app has crossed 1M+ installs.

Use wording such as:

> Engineered 12 Android apps from the ground up in the last 15 months, alongside production maintenance and growth work on established Play Store products.

> Shipped and maintained Android products across public install bands from early-stage releases to 1M+ installs.

The second statement describes the scale of the products worked on, not install growth caused solely by Muhammad. Preserve dated screenshots or source notes because store metrics change. Do not publish confidential revenue, conversion, ad show-rate, crash, or ANR figures.

---

## 4. Critical issues, ordered by business impact

## P0 — Fix before promoting the site heavily

### P0-01: Work is described but not shown

**Observed:** Homepage project cards reserve roughly 40% of each card for a dark text placeholder. Project pages contain no screenshots, app icons, video, before/after comparison, architecture diagram, UI flow, or code excerpt.

**Impact:** Visitors cannot visually verify product quality. The portfolio asks them to trust claims that could have been written by anyone.

**Fix:** Add real product media to every featured project:

- app icon;
- 3–5 carefully selected phone screenshots;
- one short muted demo clip only where motion explains behavior;
- Google Play or GitHub destination;
- a caption explaining what the image proves;
- accessible alt text;
- optimized responsive sizes using `next/image`.

### P0-02: Project pages are summaries, not case studies

**Observed:** Each project page contains title, summary, role, overview, stack, and four feature bullets.

**Missing:** problem, users, constraints, personal ownership, team context, timeline, architecture, difficult decision, rejected alternative, testing/reliability work, result, lessons, and visual evidence.

**Impact:** A technical hiring manager learns what the app does but almost nothing about how Muhammad thinks.

**Fix:** Use the case-study structure in section 9. Start with two deep case studies, then expand the project archive progressively.

### P0-03: The hero contains visible generation watermarks

**Observed:** The rendered sequence shows a visible **Veo** mark at the lower right and another circular mark at the lower left.

**Impact:** This immediately makes the site feel unfinished or assembled from an unlicensed preview. In a 2026 market increasingly sensitive to generic AI output, it weakens authenticity.

**Fix:** Replace the source with an owned, clean export. Prefer a short authentic portrait shoot or a clean still plus restrained motion. Do not crop a watermark out of media unless the license explicitly permits it; obtain a legitimate unwatermarked asset.

### P0-04: The homepage delays proof for four viewport heights

**Observed:** The hero container is `400vh`. Skills and actual work appear only after the long scroll narrative.

**Impact:** A recruiter or client scanning quickly can leave before seeing evidence. The effect is especially expensive on mobile.

**Fix:** Keep the cinematic idea but shorten it to roughly 160–220vh, or let the first screen contain:

- specific positioning;
- one verified proof line;
- `View selected work` primary CTA;
- `Download résumé` secondary CTA;
- a visible scroll cue;
- a “skip intro” route to featured work.

### P0-05: The strongest metrics and proof are absent

**Observed:** The homepage displays `2.5+`, `06`, and `01`. Four projects exist in the canonical data file, six exist in résumé data, and only four are available as case studies. The confirmed profile now includes 3+ years of experience, 12 recent from-scratch apps, 6 maintained products, and a reusable internal billing module.

**Impact:** The `06` statistic is internally inconsistent and is not persuasive proof. The site omits stronger verifiable evidence such as product download scale.

**Fix:** Replace vanity counters with verified proof, for example:

- 3+ years building Android products;
- 12 apps engineered from scratch in the last 15 months;
- experience across live products ranging up to 1M+ public installs;
- a reusable billing module adopted across numerous production apps;
- Kotlin + Compose + production Android specialization.

Use only a small subset above the fold. Every metric should have a source, date, and precise attribution. Do not publish an exact adoption count for the internal billing module or confidential monetization and reliability results.

### P0-06: Public employer and publisher attribution still needs verification

**Observed:** `Schedule Planner` is attributed to `Top Edge Technologies` in local portfolio data, while its current Google Play listing names `PIONEER SOCIAL MEDIA APPLICATIONS` as publisher. This may be legitimate client work, a transfer, or a publishing relationship, but the public evidence does not explain it.

**Impact:** Unexplained attribution can create doubt during reference checking.

**Fix:** The Android implementation ownership is now confirmed, but the employer/publisher relationship is not. Add a clear contribution statement such as “Engineered the Android application within my company team for its publishing partner,” only if accurate and approved. Never disclose confidential client details. Verify all employer and publisher wording before launch.

### P0-07: There is no strong above-fold conversion path

**Observed:** The hero overlay has `pointer-events-none` and contains no CTA. The only immediate action is the small header `Contact` link.

**Impact:** Interest is not converted at the highest-attention moment.

**Fix:** Put the core CTAs outside the non-interactive overlay or selectively enable pointer events:

- Primary: `View Android work`;
- Secondary: `Download résumé`;
- Tertiary text: availability and location.

### P0-08: The flagship project link can introduce reputational risk

**Observed:** The linked Route Planner listing showed 100K+ downloads but a 2.3 rating and prominent complaints about advertising on the audit date.

**Impact:** A visitor may associate store-wide product decisions with Muhammad even when monetization strategy was not his responsibility.

**Fix:** Keep the project if it demonstrates meaningful work, but state exact scope and constraints. Do not surface the rating as proof. Focus on engineering contribution, scale, stability, features, or a measurable improvement Muhammad can substantiate. If available, show before/after Crashlytics, ANR, startup, conversion, retention, or delivery metrics with employer permission.

---

## 5. Recommended 2026 site map

The site does not need many pages. It needs the right pages with enough evidence.

| Route | Status | Priority | Purpose |
|---|---|---:|---|
| `/` | Exists; restructure | P0 | Positioning, proof, featured work, trust, and conversion |
| `/projects` | Exists; enrich | P0 | Scannable work index with real product imagery and filters/tags only if useful |
| `/projects/[slug]` | Exists; rebuild | P0 | Evidence-based technical case study |
| `/about` | Exists; enrich | P1 | Personal story, working style, values, photo, and timeline |
| `/resume` | Exists; correct | P0 | Human-readable résumé plus a real downloadable PDF |
| `/contact` | Exists; improve | P0 | Low-friction inquiry with alternatives and expectations |
| `/services` or `/work-with-me` | Missing | P1 | Scope, ideal projects, engagement model, deliverables, and inquiry CTA |
| `/insights` | Missing | P2 | Searchable technical writing and long-term authority, only if sustainable |
| `/insights/[slug]` | Missing | P2 | Individual Android engineering article |
| `/privacy` | Missing | P1 if adding form/analytics | Explain analytics and form-data handling |
| `/thanks` | Missing | P1 if adding form | Confirm form submission and define next step |
| custom `not-found.tsx` | Missing | P2 | Recover lost visitors with Work and Contact links |

### Pages that are not currently necessary

- a separate Skills page;
- a testimonials-only page;
- a command palette;
- a gamified navigation experience;
- a standalone awards page without meaningful awards;
- a blog launched with empty or generic AI-written posts;
- an AI chatbot that answers questions already covered by the site.

These can add complexity without increasing trust.

---

## 6. Recommended homepage structure

This order supports both fast scanning and deeper exploration.

### 1. Compact signature hero

Include:

- name and specific Android positioning;
- authentic portrait or product-led visual;
- remote/location availability;
- one verified proof statement;
- `View selected work` and `Download résumé` CTAs;
- optional short, controlled signature animation.

Suggested copy direction:

> Android engineer building dependable Kotlin and Compose products used in the real world.

### 2. Proof strip

Use 3–4 concise, verifiable facts:

- product download scale;
- years of experience;
- production specializations;
- shipped categories or employers, subject to permission.

Recommended first version:

- `3+ years` — Android development;
- `12 apps` — engineered from scratch in the last 15 months;
- `Production scale` — experience on products with up to 1M+ public installs;
- `Kotlin + Compose` — primary product stack.

### 3. Featured work

Show two primary case studies with large real product visuals and two secondary cards. Each featured card needs:

- product image;
- problem or outcome headline;
- exact role;
- 1–2 proof points;
- platform link;
- case-study link.

Below the featured cases, divide the complete work record into three clearly labelled collections:

1. **Engineered from scratch** — end-to-end Android implementation ownership within a team environment;
2. **Production maintenance and growth** — inherited apps improved through reliability, monetization, redesign, and feature work;
3. **Platform engineering** — the reusable internal billing module.

### 4. Capabilities framed as outcomes

Replace the long repeating technology marquee as the primary skills story. Group skills around work clients/employers value:

- Build: Kotlin, Compose, XML, Material;
- Architecture: MVVM, Clean Architecture, modularization, DI;
- Data and integrations: Room, REST, Firebase, Maps, Calendar, Drive;
- Revenue and quality: Billing, subscriptions, AdMob, Analytics, Crashlytics;
- Delivery: testing, Git, CI/CD, Play release process.

### 5. Engineering approach

Keep the “Useful before flashy / Architecture that lasts / Details earn trust” idea, but attach one concrete example to each principle.

### 6. Trust layer

Add whatever can be truthfully supplied:

- short manager/client testimonials with name, role, and permission;
- employer or publisher logos with permission;
- product outcomes;
- GitHub contribution/code samples;
- certifications only when relevant;
- “What teammates can expect” statements.

The internal billing module is an especially strong trust signal because it demonstrates reusable API design and adoption by other engineers, not merely delivery of another app.

### 7. About preview

One authentic paragraph, one candid photo, a location/time-zone note, the planned Islamabad move and NUST application stated accurately, and a link to the full story.

### 8. Conversion section

State:

- what opportunities are welcome;
- current availability;
- expected response time;
- email/contact CTA;
- LinkedIn alternative;
- scheduling link only if Muhammad will keep it current.

Use three explicit inquiry choices—`Employment`, `Freelance project`, and `Collaboration`—then adapt the form fields to the selected intent. This makes the equal opportunity mix clear without forcing the homepage message to become vague.

---

## 7. 2026 portfolio trends: what to use and what to reject

The recurring 2026 direction is not “add more effects.” It is **clear hierarchy, authentic identity, visible proof, restrained motion, and performance-conscious polish**.

### Adopt

| 2026 pattern | How it should appear here | Why it helps |
|---|---|---|
| Editorial typography | Keep large type but pair it with sharper, more specific copy | Creates personality without hiding information |
| Modular/bento proof blocks | Use for metrics, capabilities, testimonials, and architecture snapshots | Makes dense evidence easy to scan |
| Purposeful scroll motion | One signature hero moment and subtle case-study reveals | Memorability without exhausting the visitor |
| Human authenticity | Clean owned portrait, real product screens, first-person engineering decisions | Counters generic AI/template sameness |
| Product micro-demos | Short clips showing a route, task flow, offline state, or transition | Demonstrates instead of describing |
| Rich case studies | Progressive disclosure: summary first, technical depth below | Serves recruiters and engineering leads together |
| Accessibility as polish | Reduced motion, strong focus, readable contrast, keyboard path | Signals professional quality |
| Performance-first media | Responsive images, lazy loading, poster frames, limited autoplay | Preserves the premium feel on ordinary devices |

### Use carefully

- Bento grids are useful for structured proof but already common; custom content must create identity.
- Kinetic typography should clarify emphasis, not make reading dependent on scrolling.
- Dark mode fits the identity, but muted gray copy must still meet contrast requirements.
- AI-generated visuals are acceptable only when licensed, clean, relevant, and clearly subordinate to real work.
- 3D/mobile mockups can help when they showcase the app; decorative 3D alone does not prove Android ability.

### Reject for this portfolio

- watermark-bearing generated media;
- scroll hijacking that delays work;
- an intro loader that makes visitors wait;
- custom cursors that reduce precision;
- music or autoplay audio;
- gamified navigation for ordinary content;
- generic AI chat widgets;
- fake live metrics or GitHub activity;
- endless marquees without reduced-motion handling;
- trend stacking that makes the portfolio look like a template demo.

### 2026 research references

- [Creative Bloq: why a portfolio website still matters in 2026](https://www.creativebloq.com/professional-development/creative-careers/in-the-age-of-social-media-do-designers-still-need-a-website-in-2026)
- [Creative Bloq: 2026 personal branding in a post-AI landscape](https://www.creativebloq.com/professional-development/creative-careers/who-are-you-in-2026-how-to-update-your-personal-brand-in-a-post-ai-landscape)
- [Creative Bloq: portfolio examples and project-focused presentation](https://www.creativebloq.com/portfolios/examples-712368)
- [web.dev: Core Web Vitals](https://web.dev/articles/vitals)
- [web.dev: reduced motion](https://web.dev/articles/prefers-reduced-motion)
- [W3C: WCAG 2.2 animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions)

---

## 8. Confirmed work portfolio and content architecture

The project system should communicate different kinds of ownership instead of placing every app in one undifferentiated grid. All linked apps below were supplied by Muhammad and reviewed on Google Play on August 12, 2026. Public install bands and listing details are time-sensitive snapshots.

### A. Apps engineered from scratch

Muhammad states that he personally engineered these Android applications from the ground up during the last 15 months. This means Android implementation ownership, not sole ownership of the complete product: design, product direction, backend/API inputs, publishing, and other supporting work involved team members where applicable.

| Product | Public product signal | Portfolio angle | Link |
|---|---|---|---|
| Hidden Device Detector: Finder | 10K+ installs; network, magnetometer, and infrared-assisted detection tools | Sensor and network APIs, privacy utility UX, device capability handling | [Google Play](https://play.google.com/store/apps/details?id=com.tet.detectorhiddendevices.detector) |
| Recover Deleted Messages: RDM | 1K+ installs; notification history, recovered media, status saving, direct chat | Notification access, local processing, media workflows, privacy boundaries | [Google Play](https://play.google.com/store/apps/details?id=com.ibes.wa.recovered.app) |
| Notification Blocker & Cleaner | 500+ installs; notification blocking and cleanup | Notification management, background behavior, focus-oriented UX | [Google Play](https://play.google.com/store/apps/details?id=com.ibes.notificationblocker.cleaner) |
| Voice Recorder · Voice Memos | 50K+ installs; background recording, transcription, noise reduction, editing, and video-to-audio tools | Media capture and processing, background work, resilient long-running UX | [Google Play](https://play.google.com/store/apps/details?id=com.mks.voicerecorder.audiorecorder.voice) |
| Football Score - Live Scores | 10K+ installs; live scores, fixtures, standings, favorites, and alerts | Real-time API data, caching/state, favorites, and notification delivery | [Google Play](https://play.google.com/store/apps/details?id=com.mna.livescore.football) |
| Smart Printer: Scan & Print | 5K+ installs; wireless printing, document scanning, and PDF tools | Device/service integration, document workflows, file handling | [Google Play](https://play.google.com/store/apps/details?id=com.psma.smart.printer.smartprinter) |
| To do List - Schedule Planner | 100K+ installs; tasks, calendar, reminders, notes, and Google Calendar integration | Complex scheduling, persistence, reminders, calendar integration | [Google Play](https://play.google.com/store/apps/details?id=todolist.dailyplanner.scheduleplanner.reminders.notes) |
| Plant Identifier & Plant Care | 100K+ installs; AI identification, disease diagnosis, care guidance, reminders, and AI chat | AI-backed product flow, camera/media input, structured results, retention loops | [Google Play](https://play.google.com/store/apps/details?id=com.psma.plant.plantidentifier) |
| Antique Identifier & Scanner | 1K+ installs; AI recognition, valuation, and historical information | Image-to-result AI workflow, uncertainty communication, collection utility | [Google Play](https://play.google.com/store/apps/details?id=com.antiqueworth.identifier.psma.app) |
| Route Planner - GPS & Maps | 100K+ installs; navigation, voice guidance, places, compass, weather, parking, and route utilities | Maps/location architecture, permissions, lifecycle, multi-feature navigation product | [Google Play](https://play.google.com/store/apps/details?id=gpsnavigation.routeplanner.routefinder.tet.app) |
| App Blocker: Block Apps, Sites | 10K+ installs; app/site blocking, schedules, usage reporting, strict mode, and PIN controls | Accessibility Service, background enforcement, sensitive permissions, state reliability | [Google Play](https://play.google.com/store/apps/details?id=com.tet.appblocker.screenmonitor.appblock) |
| Fake GPS: Mock Location | 5K+ installs; address search, joystick, speed controls, bookmarks, and history | Location simulation, map interaction, developer settings, geofence/QA use cases | [Google Play](https://play.google.com/store/apps/details?id=com.bb.gps.location.map) |

Do not build 12 equally long case studies. Use a work archive for breadth and select four to six products for richer treatment. Based on public product complexity and visible scale, the strongest initial shortlist is:

1. Plant Identifier & Plant Care;
2. To do List - Schedule Planner;
3. Route Planner - GPS & Maps;
4. Voice Recorder · Voice Memos;
5. App Blocker: Block Apps, Sites;
6. the internal billing module described below.

Final flagship order should be based on the quality of screenshots, architecture story, challenges Muhammad can discuss publicly, and permitted evidence—not install count alone.

### B. Production maintenance and growth

These products should not be hidden. They demonstrate the ability to enter an existing codebase, diagnose production failures, preserve behavior, and improve commercial systems. Across this category, work commonly included crash and ANR fixes, feature corrections, advertising-plan and placement updates, improved ad show behavior, subscriptions, one-time purchases, and premium-screen redesigns. Confidential business figures must remain private.

| Product | Confirmed personal contribution | Public context | Link |
|---|---|---|---|
| Copy Data: Phone Transfer | Monetization updates | 1K+ installs; peer-to-peer transfer for contacts and media | [Google Play](https://play.google.com/store/apps/details?id=com.tet.copy.datacopy) |
| Stone Identifier: Rock Scanner | Monetization updates | 100+ installs; AI rock, mineral, crystal, and fossil identification | [Google Play](https://play.google.com/store/apps/details?id=com.tet.stone.identifier.identification) |
| Coin Identifier: Value Scanner | Monetization updates | 10K+ installs; AI coin recognition, valuation, grading, and collection tools | [Google Play](https://play.google.com/store/apps/details?id=com.psma.coindetector.coinfinder) |
| Voice Notepad - Speech to Text | Screen redesign, issue fixes, and monetization updates | 1M+ installs; speech-to-text notes and established production audience | [Google Play](https://play.google.com/store/apps/details?id=com.mobilenotepadapps.voice.notepad.speech.to.text.notes) |
| Status Downloader & Saver | Screen redesign, issue fixes, monetization updates, and features including reposting and direct messaging | 100K+ installs; status/media saving and sharing workflows | [Google Play](https://play.google.com/store/apps/details?id=com.mna.statussaver.savevideos.downloader) |
| Medication Reminder & Tracker | Monetization updates | 5K+ installs; medicine schedules, dose tracking, refills, and reports | [Google Play](https://play.google.com/store/apps/details?id=com.bb.medicine.reminder.pill.tracker) |

Use a compact `Production improvements` section on the work index and one combined case study showing the diagnostic and commercial patterns across inherited apps. Do not imply that the current public install totals, revenue, or complete product design were caused by Muhammad’s maintenance work.

Safe monetization wording:

> Improved monetization implementations across existing Android products through ad-plan and placement updates, subscriptions, one-time purchases, premium-screen refinements, analytics, and issue resolution. Commercial results are confidential.

Avoid unsupported phrases such as `increased revenue significantly`, `boosted conversions`, or `improved ANRs by X%` when the figure cannot be published.

### C. Internal billing platform case study

This should be treated as platform engineering and one of the strongest technical stories on the site.

Confirmed scope:

- designed and implemented by Muhammad under the supervision of a senior engineer;
- supports Google Play Billing and RevenueCat behind a low-code integration surface;
- handles subscriptions and one-time purchases;
- handles purchase acknowledgement and restoration;
- centralizes subscription-state handling;
- includes error and retry flows;
- integrates analytics and remote configuration;
- adopted across numerous production apps and continues to be used in new projects.

Confidentiality-safe portfolio copy:

> Designed and implemented a reusable Android billing module under senior engineering supervision. It provides a compact integration surface for Google Play Billing or RevenueCat while centralizing subscriptions, one-time purchases, acknowledgement, restoration, subscription state, retries, analytics, and remote configuration. The company-owned module has been adopted across numerous production apps and remains in active use for new projects.

Do not publish the company name, source code, exact adoption count, revenue figures, internal package names, proprietary interfaces, or implementation details that would enable reconstruction. A public case study can still show:

- the recurring integration problem;
- design goals and constraints;
- a conceptual component diagram with generic names;
- the caller experience using non-proprietary pseudocode;
- failure states considered;
- the review/supervision model;
- qualitative adoption and maintenance lessons.

### D. Earlier portfolio work

Keep the existing **AI Chatbot** and **Cryptographic Communication** projects unchanged. Present the latter accurately as university/BSCS final-year work if that is what the current content says. Earlier portfolio items not included in the supplied Play Store links belong to a previous employer or the BSCS final-year project and should not be blended into the `last 15 months` claim.

### E. AI-assisted engineering workflow

Add an `AI-assisted workflow` section to About or Engineering Approach. It should demonstrate modern tool fluency while keeping Muhammad’s engineering judgment, verification, and accountability at the center.

Confirmed tools and uses:

| Tool | How Muhammad uses it |
|---|---|
| Claude | Planning, design exploration, and development support |
| Codex | Implementation and development assistance |
| ChatGPT | App image-asset generation and supporting creative exploration |
| Antigravity | Development assistance and bug fixing |

Recommended public copy:

> I use AI agents as part of a supervised engineering workflow: Claude for planning and design exploration, Codex and Antigravity for implementation and debugging support, and ChatGPT for app image-asset generation. I remain responsible for architecture, code review, testing, privacy, Play policy compliance, and the shipped result.

Avoid logos as the entire section, inflated `AI expert` claims, or language suggesting that generated output is shipped without review. A stronger visual is a small workflow:

```text
Problem definition → plan/design exploration → implementation → review and testing → release monitoring
                          AI-assisted            AI-assisted        Human-owned
```

If supported by real examples later, add one short story showing where an agent accelerated work and what Muhammad manually verified or changed.

---

## 9. Required project case-study template

Every case study should support a 30-second scan and a 5-minute technical read.

### Above the fold

- Product name and one-sentence outcome
- Hero screenshot or short demo
- Platform: Android
- Role and exact ownership
- Team context
- Timeline
- Employer/client/publisher relationship
- Status: live, internal, archived, or concept
- Primary verified result
- Google Play, GitHub, or demo link

### 1. Context and problem

- Who was the user?
- What problem or business need existed?
- What condition made the problem hard?
- What did success mean?

### 2. My responsibility

- What did Muhammad own personally?
- What was inherited?
- Who designed, managed, or built other areas?
- Which decisions required collaboration?

This section is essential for team products.

### 3. Constraints

Examples:

- device/API support;
- unreliable network;
- location accuracy;
- battery usage;
- offline persistence;
- Play policy;
- ad/subscription constraints;
- legacy XML migration;
- delivery deadline;
- NDA limitations.

### 4. Architecture and decisions

Show one useful diagram and explain:

- UI/state flow;
- module or layer boundaries;
- data sources and caching;
- dependency injection;
- failure and retry handling;
- navigation;
- observability;
- why this approach fit the constraints.

### 5. Hardest engineering problem

Tell one specific story:

- symptom;
- investigation;
- alternatives considered;
- decision;
- implementation;
- verification;
- result.

This is far more persuasive than a technology list.

### 6. Product walkthrough

Use annotated screenshots with captions. Each image should prove a design or engineering decision, not merely decorate the page.

### 7. Quality and delivery

Cover relevant items:

- unit/UI testing;
- Crashlytics/ANR work;
- performance profiling;
- accessibility;
- analytics events;
- staged rollout;
- monitoring;
- code review and collaboration.

### 8. Results

Prefer before/after or independently visible evidence:

- installs/download band;
- rating improvement, if attributable and positive;
- crash-free users;
- ANR reduction;
- startup/render improvement;
- conversion or subscription result;
- support issue reduction;
- delivery speed;
- module/build-time improvement.

If confidential, use honest ranges or qualitative outcomes approved by the employer. Never fabricate numbers.

### 9. Reflection

- What would Muhammad change now?
- What did he learn?
- Which decision aged well?

### 10. Next case study and contact

End with a relevant next project and one direct CTA.

---

## 10. Route-by-route product and content audit

## `/` — Homepage

### Strengths

- Memorable portrait-led opening.
- Clear Android identity.
- Strong visual rhythm and typography.
- Featured projects, skills, introduction, proof block, and contact all exist.

### Issues

- Four-screen hero postpones the work.
- No primary CTA inside the hero.
- Positioning is too generic.
- First canvas frame appears nearly black before useful imagery appears.
- Watermarks remain visible.
- All three overlay narrative stages exist simultaneously in the accessibility tree even when visually transparent.
- The skill marquee repeats the same 12 skills three times in the accessibility tree.
- The project cards contain no product imagery.
- `06 selected products` conflicts with four canonical project entries.
- No testimonials, employer trust, or outcome evidence.
- Homepage is a client component, increasing the amount of client-side JavaScript and preventing direct route metadata export from this file.

### Recommendation

Preserve the portrait and graphic confidence, but move proof and actions into the first viewport and make featured work visually dominant.

## `/projects`

### Strengths

- Simple, scannable two-column layout.
- Categories and dates help orientation.
- Every card links to a case study.

### Issues

- Cards are entirely typographic.
- No outcome or ownership is visible at index level.
- No indication of live app, GitHub project, NDA, or concept status.
- Four cards feel like a data directory rather than a showcase, while the confirmed work corpus is much broader.

### Recommendation

Use two large featured projects and a compact secondary grid. Add icons/screens, outcome chips, role, and platform destinations. Follow these with the three work collections from section 8: `Engineered from scratch`, `Production maintenance and growth`, and `Platform engineering`.

## `/projects/[slug]`

### Strengths

- Strong title hierarchy.
- Stack and role are easy to find.
- Project pages are statically generated.
- Live destinations are available where supplied.

### Issues

- No project-specific metadata.
- No images or media.
- No technical decision-making.
- No results.
- No timeline/team/ownership boundaries.
- No next-project navigation.
- Generic repeated Contact block makes every case-study ending identical.

### Recommendation

Rebuild using section 9 and generate metadata/social imagery from canonical project data.

## `/about`

### Strengths

- Clear philosophy and calm writing.
- Good principle structure.
- Current employer and primary technologies are named.

### Issues

- No personal photo or timeline.
- The biography could belong to many Android developers.
- Principles have no examples.
- No current learning, product interests, collaboration style, or community signal.
- No route metadata.
- No accurate NUST application/planned-relocation context.
- No explanation of the AI-assisted engineering workflow.

### Recommendation

Add a short career timeline, one authentic image, a more personal origin story, concrete examples for principles, and what kind of work Muhammad wants next. Include the planned move from Multan to Islamabad, the NUST application with September 2026 planned start, and the AI-assisted workflow from section 8 without describing admission as confirmed.

## `/resume`

### Strengths

- Detailed experience and skills.

### Issues

- `Download PDF` calls `window.print()`; it does not download a PDF.
- The label is therefore misleading.
- The résumé is maintained through several hardcoded components rather than shared canonical data.
- Six résumé projects conflict with four canonical portfolio projects.
- Contact values are duplicated outside `portfolio.ts`.
- The route is a client component and has no metadata export.
- Print rules use broad utility-class selectors and should be tested page by page.
- No conventional pre-generated PDF exists for recruiters, applicant-tracking workflows, or offline forwarding.
- The displayed experience figure must be updated from `2.5+` to the confirmed `3+ years` everywhere it appears.

### Recommendation

Create a real, selectable-text `/Muhammad-Shahroze-Android-Engineer.pdf`, keep `Print résumé` as a separate action, and generate both page and PDF content from shared data.

## `/contact`

### Strengths

- It **does have an `<h1>`** through `PageIntro`; the previous audit was incorrect.
- Email, phone, LinkedIn, GitHub, location, and remote availability are clear.

### Issues

- Mail links rely on a configured local email client.
- No structured inquiry form.
- No reason to contact, ideal project type, response time, or availability detail.
- Phone number is public; confirm that this is intentional.
- No spam protection or privacy explanation would exist if a form were added.
- No route metadata.

### Recommendation

Keep direct email and LinkedIn. Add a short optional form with name, email, company, inquiry type, message, and consent/privacy note. The inquiry type must include employment, freelance project, and collaboration. State a realistic response expectation.

---

## 11. Visual design and brand audit

### What the current system communicates

- Black + white + electric green: technical, modern, performance-oriented.
- Heavy uppercase Inter: confident but increasingly common among developer/SaaS portfolios.
- Noise and glass styling: contemporary but generic unless tied to a more distinctive personal system.
- Portrait video: personal and memorable when clean.

### Improvements

1. Introduce a second typeface or a deliberate typographic contrast for personality, while keeping body copy highly readable.
2. Use product color selectively inside case studies so every project does not look like the same black template.
3. Replace empty decorative areas with app evidence.
4. Create a consistent Android device-frame system.
5. Define spacing, type, radius, border, shadow, and motion tokens rather than scattered literal values.
6. Add visible focus states that match the green accent.
7. Test gray text contrast on `#121212`; several `text-gray-500` and low-opacity treatments may be too faint.
8. Keep one signature motion language instead of combining Lenis, canvas scrubbing, sticky cards, marquee, blur, scale, and noise everywhere.

### Mobile-specific observations

- At 390 px, the brand wraps to two lines while Work, Resume, and Contact occupy the rest of the fixed header.
- About is hidden on small screens, making the navigation incomplete.
- The hero name sits over the face, reducing portrait and text clarity.
- The 800 × 450 landscape frames are aggressively cropped into a portrait viewport.
- Fixed header elements compete with content near section boundaries.
- The long hero consumes substantial mobile scroll distance before useful work appears.

### Mobile recommendation

Use a compact menu button or short brand mark, retain every destination, provide a purpose-built portrait asset/crop, and shorten the scrollytelling sequence.

---

## 12. Accessibility audit

### Corrected finding

The old audit claimed `/contact` had no `<h1>`. This is false: `PageIntro` renders the page heading.

### High-priority findings

| ID | Finding | Impact | Recommendation |
|---|---|---|---|
| A11Y-01 | No `prefers-reduced-motion` path for Lenis, canvas, marquee, or Framer Motion | Motion can cause discomfort and prevents user preference from being honored | Disable smooth scrolling and nonessential motion; render a static hero and static skills list when reduced motion is requested |
| A11Y-02 | Scroll-linked overlay stages remain in the accessibility tree while opacity is zero | Screen-reader order includes invisible narrative content | Mark inactive/decorative content appropriately or provide one semantic static equivalent |
| A11Y-03 | Skill marquee repeats content three times | Repetitive screen-reader output | Expose one semantic list; mark visual clones `aria-hidden="true"` |
| A11Y-04 | No skip link | Keyboard users must traverse the fixed navigation on every page | Add `Skip to main content` |
| A11Y-05 | No deliberate `:focus-visible` system | Keyboard focus may be inconsistent or visually weak | Add high-contrast, offset focus rings for all interactive elements |
| A11Y-06 | Canvas has no explicit semantic decision | Assistive technology receives an unlabeled canvas while meaningful text exists separately | If decorative, use `aria-hidden="true"`; otherwise provide fallback text |
| A11Y-07 | Header contrast relies on `mix-blend-difference` over changing media | Contrast can vary unpredictably | Add a stable translucent surface or contrast-tested adaptive mode |
| A11Y-08 | Auto-moving marquee has no stop mechanism | Continuous motion can distract | Remove it, pause it, or disable for reduced motion |
| A11Y-09 | Mobile hides the About navigation item | Functionality differs by viewport | Keep all destinations available through a menu |
| A11Y-10 | Arrow glyphs are inconsistently hidden from assistive technology | Link names can include decorative characters | Standardize `aria-hidden` on decorative icons and make labels explicit |

### Semantic findings

- Pages correctly use `<main>` and generally have one `<h1>`.
- `Contact.tsx` visually acts as the footer but is a `<section>`; pages therefore lack a footer landmark.
- `Footer.tsx` exists but is unused and contains stale content.
- Project feature items should be a semantic list rather than styled paragraphs when they are conceptually a list.
- Add `aria-current="page"` to the active navigation link.

### Required verification

- Keyboard-only traversal at 100%, 200%, and 400% zoom;
- VoiceOver/NVDA landmark and heading review;
- reduced-motion OS setting;
- forced colors/high contrast;
- automated axe/Lighthouse scan followed by manual testing;
- WCAG 2.2 AA color contrast and target-size checks.

---

## 13. Performance and Core Web Vitals audit

### Evidence

- 128 WebP hero frames total about 1.11 MB.
- All 128 `Image` objects receive a source immediately after mount, causing a burst of requests.
- Frames are only 800 × 450 and are upscaled/cropped to full viewport.
- Canvas dimensions are assigned inside every `renderCanvas()` call, resetting canvas state on every rendered frame.
- Canvas backing dimensions are not scaled for `devicePixelRatio`.
- The first meaningful canvas image waits for client-side JavaScript and frame load.
- The homepage is a client component.
- Google Fonts are loaded with a CSS `@import` rather than Next.js font optimization.
- Lenis runs a perpetual `requestAnimationFrame` loop; its RAF ID is not canceled during cleanup.
- Scroll callbacks create new animation-frame callbacks without coalescing/canceling pending work.
- There is no frame-load failure handling, progressive readiness state, or static fallback.
- The browser logged Framer Motion warnings about scroll targets requiring non-static positioning.

### Important correction to the old audit

Adding `devicePixelRatio` alone will not solve sharpness. The source frames are 800 × 450. A 2× canvas drawn from a low-resolution image still contains low-resolution detail. Supply appropriately sized source media and cap DPR to a sensible value such as 2 to avoid excessive memory.

### Recommended hero architecture

1. Render a server-visible poster image immediately.
2. Use `<picture>`/`next/image` sources suited to mobile and desktop.
3. Load only the first frame urgently.
4. Fetch remaining frames in prioritized batches or replace the sequence with a well-encoded video where appropriate.
5. Size the canvas only on initialization/resize.
6. Cap DPR.
7. Coalesce scroll rendering to one pending animation frame.
8. Show the nearest loaded frame rather than blank output.
9. Provide error fallback.
10. Disable the sequence for reduced motion, constrained data, and possibly low-memory mobile devices.

### Font recommendation

Use `next/font` with local/subsetted fonts to avoid render-blocking CSS imports and improve loading predictability. Define actual Tailwind tokens for every font utility used.

### Core Web Vitals plan

After deployment:

1. Run Lighthouse mobile as a diagnostic, not as the only truth.
2. Test PageSpeed Insights on home, work index, one case study, résumé, and contact.
3. Collect real-user LCP, INP, and CLS through Vercel Speed Insights or the `web-vitals` library.
4. Segment by mobile/desktop and geography.
5. Define launch targets at the 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.
6. Re-test after adding screenshots/video; media additions are the most likely regression source.

---

## 14. Technical SEO and discoverability

### Current state

Root metadata includes a title template and description. No route except the root layout defines metadata.

| Route | Unique title | Unique description | Canonical | Social image | Structured data |
|---|---:|---:|---:|---:|---:|
| `/` | Partial/global | Global | No | No | No |
| `/about` | No | No | No | No | No |
| `/projects` | No | No | No | No | No |
| `/projects/[slug]` | No | No | No | No | No |
| `/resume` | No | No | No | No | No |
| `/contact` | No | No | No | No | No |

### Missing infrastructure

- `metadataBase`;
- canonical URLs;
- route-specific titles and descriptions;
- `generateMetadata()` for project pages;
- Open Graph metadata;
- Twitter/X cards;
- 1200 × 630 social images;
- `sitemap.ts`;
- `robots.ts`;
- `manifest.ts` if install/app identity is desired;
- deliberate icon/favicon set;
- Person/WebSite/ProfilePage JSON-LD where representative of visible content;
- Breadcrumb structured data on case studies;
- Search Console registration and sitemap submission;
- Bing Webmaster Tools submission;
- production-domain redirect policy (`www` versus apex, HTTPS);
- custom 404 and useful recovery links.

### Content SEO opportunity

Project pages should target specific intent naturally, for example:

- Android route planner case study;
- Jetpack Compose maps architecture;
- offline-first Room data flow;
- Firebase Crashlytics Android reliability;
- Play Billing subscriptions implementation;
- migrating XML screens to Compose.

Do not keyword-stuff. The technical substance of a real case study is the SEO asset.

### Structured-data caution

Structured data must represent visible page content and does not guarantee a rich result. Follow Google’s current guidance and validate with the Rich Results Test:

- [Google Search Central: ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [Google Search Central: structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google Search Central: title links](https://developers.google.com/search/docs/appearance/title-link)

---

## 15. Code quality and architecture audit

### Data consistency

| Source | Current content | Problem |
|---|---|---|
| `data/portfolio.ts` | 4 projects and contact object | Intended canonical source but incomplete for résumé |
| `ResumeProjects.tsx` | Separate 6-project array | Titles, links, companies, and count can drift |
| `Skills.tsx` | Résumé skill groups | Separate from homepage skills |
| `HomeSkills.tsx` | 12-item marquee array | Duplicates skill knowledge |
| `Experience.tsx` | Hardcoded jobs | Cannot feed about timeline or metadata |
| `AboutMe.tsx` / `ResumeActions.tsx` | Hardcoded contact details | Duplicates `contact` object |
| Homepage | Hardcoded proof stats | Already contradict canonical project count |

### Recommendation: one content model

Create a typed content layer containing:

- `profile`;
- `availability`;
- `contact`;
- `experience`;
- `education`;
- `skills`;
- `projects`;
- `testimonials`;
- `metrics` with source and verified date;
- `site` metadata.

It must distinguish recent from-scratch work, inherited production work, internal platform work, previous-employer work, and university work. This prevents a public install metric or whole-product outcome from being attached to the wrong contribution type.

Each project should support:

```ts
type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  year: string;
  status: "live" | "internal" | "archived" | "concept";
  workType: "from-scratch" | "maintenance" | "platform" | "university";
  period: string;
  employer?: string;
  publisher?: string;
  contribution: string;
  ownershipBoundary: string;
  team?: string;
  timeline?: string;
  summary: string;
  challenge: string;
  constraints: string[];
  decisions: ProjectDecision[];
  stack: string[];
  outcomes: VerifiedOutcome[];
  confidentiality?: string[];
  verification?: {
    sourceUrl?: string;
    checkedAt?: string;
  };
  media: ProjectMedia[];
  links: ProjectLink[];
};
```

### Styling issues

- Components use `font-heading` and `font-body`, but `globals.css` only declares `--font-sans`.
- Generated CSS contained no matching `font-heading`/`font-body` utilities during the audit.
- Many colors and spacing values are literal and repeated.
- `Projects.tsx` uses a fixed `h-[520px]` and negative vertical placement, risking clipping on short viewports.

### Runtime issues

- `SmoothScroll.tsx` does not store/cancel the request-animation-frame ID.
- Smooth scrolling does not respect reduced motion.
- `ScrollyCanvas.tsx` has no loading/error state and eagerly loads every frame.
- Canvas sizing work occurs per frame.
- Browser warnings indicate one or more Framer Motion scroll targets need inspection.
- Index keys are used where stable identifiers exist in some mapped content.

### Unused and stale code

- `Footer.tsx` is unused.
- It contains a hardcoded 2025 copyright year.
- Default starter SVG files appear unused.

Delete unused assets/components only after confirming they are not part of planned redesign work.

---

## 16. Contact and conversion design

### Current funnel

```text
Landing → long visual intro → skills → intro → projects → generic contact links
```

### Recommended funnel

```text
Specific promise
  → verified proof
  → relevant project
  → evidence of thinking and outcomes
  → trust signal
  → qualified contact action
```

### Contact-page requirements

- Direct email that can be copied, not only opened through `mailto:`;
- optional form for visitors without a configured email client;
- inquiry type: employment, freelance project, collaboration, or other;
- realistic response-time statement;
- location/time zone and remote preference;
- LinkedIn alternative;
- privacy note;
- spam protection that does not create an accessibility barrier;
- success state and failure recovery;
- analytics event on successful submission, without recording message content.

### Services/work-with-me page requirements

Freelance/client work is a confirmed goal, so add this page after the employer-focused conversion foundation is complete. Include:

- ideal project types;
- services offered;
- what is not offered;
- engagement model;
- typical deliverables;
- process;
- FAQs;
- availability;
- qualified inquiry CTA.

Do not publish pricing unless it helps screen leads and Muhammad is comfortable maintaining it.

---

## 17. Analytics and growth plan

Vercel Analytics is installed, but page views alone cannot show whether the portfolio wins opportunities.

### Events to track

- `hero_view_work_click`;
- `hero_resume_download`;
- `project_card_open` with project slug;
- `project_play_store_click`;
- `project_github_click`;
- `case_study_complete` at meaningful depth;
- `contact_email_click`;
- `contact_linkedin_click`;
- `contact_form_start`;
- `contact_form_submit_success`;
- `contact_form_submit_error`;
- `resume_download`;
- `skip_intro`;
- reduced-motion usage only if collected in a privacy-respecting aggregate manner.

Never send phone numbers, email addresses, message content, or other personal data as analytics properties.

### Funnel KPIs

Measure after sufficient traffic exists:

- homepage → project open rate;
- case study → contact rate;
- résumé download rate;
- outbound Play/GitHub click rate;
- form completion rate;
- qualified inquiry count;
- recruiter screen/interview count attributed to the site;
- traffic and conversion by source.

### Distribution strategy

The website is the destination, not the entire acquisition strategy. Create useful entry points through:

- LinkedIn posts that explain one engineering decision and link to the case study;
- GitHub READMEs that link back to the relevant case study;
- concise Android articles derived from real work;
- résumé links using tracked campaign parameters;
- consistent title, bio, profile image, and positioning across platforms.

---

## 18. Prioritized implementation roadmap

### Phase 0 — Truth and assets

**Goal:** establish reliable source material before redesigning.

- [x] Confirm opportunity goals: employment first in the homepage narrative, with employment, freelance, and collaboration all supported as inquiry paths.
- [x] Confirm the high-level ownership model: 12 recent apps engineered from scratch within teams, 6 maintained products, and one internally adopted billing module.
- [ ] Verify employer/publisher relationship wording for each public product before launch.
- [ ] Capture Play Store metrics with dates and attribution.
- [ ] Collect app icons, screenshots, demo clips, architecture notes, and permitted metrics.
- [ ] Obtain 2–4 approved testimonials.
- [ ] Replace or remove watermarked hero media.
- [ ] Choose the two strongest flagship case studies from the section 8 shortlist after checking available evidence and confidentiality.
- [ ] Decide whether the public phone number should remain.

### Phase 1 — Conversion foundation

**Goal:** make the site useful before making it more elaborate.

- [ ] Rewrite hero positioning.
- [ ] Update experience copy to `3+ years` and add accurate Multan/Islamabad availability.
- [ ] Add hero CTAs and availability.
- [ ] Shorten or make the intro skippable.
- [ ] Replace vanity stats with verified proof.
- [ ] Add real media to project cards.
- [ ] Build two complete case studies.
- [ ] Correct project/resumé inconsistencies.
- [ ] Add the complete categorized project archive while preserving AI Chatbot and Cryptographic Communication.
- [ ] Generate a real downloadable résumé PDF.
- [ ] Improve contact flow and response expectations.

### Phase 2 — Navigation, content, and trust

- [ ] Add complete mobile navigation.
- [ ] Add testimonials or equivalent trust evidence.
- [ ] Add About timeline and personal story.
- [ ] Add the confirmed AI-assisted engineering workflow with human review/accountability language.
- [ ] Add services/work-with-me page.
- [ ] Add next/previous project navigation.
- [ ] Convert Contact into a semantic footer landmark where reused globally.

### Phase 3 — Technical quality

- [ ] Centralize typed portfolio content.
- [ ] Add route metadata and dynamic project metadata.
- [ ] Add OG images, canonical URLs, sitemap, robots, and JSON-LD.
- [ ] Replace Google Fonts CSS import with `next/font`.
- [ ] Fix font tokens.
- [ ] Add reduced-motion mode.
- [ ] Optimize or replace the canvas sequence.
- [ ] Fix Framer Motion scroll-target warnings.
- [ ] Cancel animation loops correctly.
- [ ] Add skip link, focus-visible system, active-nav state, and semantic lists.
- [ ] Remove confirmed unused components/assets.

### Phase 4 — Measurement and iteration

- [ ] Deploy to the final custom domain.
- [ ] Add Search Console and submit sitemap.
- [ ] Establish Core Web Vitals field monitoring.
- [ ] Instrument the conversion funnel.
- [ ] Test with 3 recruiters, 2 Android engineers, and 2 potential clients.
- [ ] Ask each tester what Muhammad does, what proof they remember, and what they would click next.
- [ ] Iterate based on recordings/feedback, not personal preference alone.

### Phase 5 — Sustainable authority

- [ ] Publish one strong technical article only after flagship case studies are complete.
- [ ] Turn case-study insights into LinkedIn/GitHub content.
- [ ] Refresh metrics and availability quarterly.
- [ ] Archive or update stale work annually.

---

## 19. File-level implementation backlog

| ID | File/area | Priority | Required change |
|---|---|---:|---|
| CONTENT-01 | `src/app/data/portfolio.ts` | P0 | Expand into canonical profile, experience, projects, metrics, media, and links |
| CONTENT-01A | `src/app/data/portfolio.ts` | P0 | Add 12 from-scratch apps, 6 maintenance records, internal billing case, work-type boundaries, verification dates, and confidentiality flags |
| CONTENT-02 | `ResumeProjects.tsx` | P0 | Remove duplicate project data |
| CONTENT-03 | `Experience.tsx`, `Skills.tsx`, `AboutMe.tsx` | P1 | Consume shared typed data |
| HOME-01 | `src/app/page.tsx` | P0 | Move proof/CTAs above fold and shorten intro |
| HOME-02 | `Overlay.tsx` | P0 | Add specific message; correct accessibility visibility and reduced-motion behavior |
| MEDIA-01 | `public/sequence/*` | P0 | Replace watermarked 800 × 450 media with owned, responsive assets |
| MEDIA-02 | `ScrollyCanvas.tsx` | P0 | Poster, DPR, batching, fallback, resize-only sizing, coalesced RAF, reduced motion |
| WORK-01 | `Projects.tsx` | P0 | Replace placeholder panel with real product media and outcomes |
| WORK-02 | `ProjectGrid.tsx` | P0 | Add icons/screens, role, result, and destination state |
| WORK-03 | projects index/data | P0 | Add From Scratch, Production Maintenance & Growth, and Platform Engineering collections; retain AI Chatbot and Cryptographic Communication |
| CASE-01 | `projects/[slug]/page.tsx` | P0 | Implement full technical case-study structure |
| CASE-02 | `projects/[slug]/page.tsx` | P0 | Add `generateMetadata()` and social images |
| RESUME-01 | `ResumeActions.tsx` | P0 | Separate real PDF download from print |
| NAV-01 | `Header.tsx` | P1 | Complete mobile menu, active route, reliable contrast, focus states |
| CONTACT-01 | `contact/page.tsx` | P1 | Add qualified form/response expectations if desired |
| ABOUT-01 | about page/components | P1 | Add 3+ year timeline, planned Islamabad move, accurate NUST application status, and AI-assisted workflow |
| SERVICES-01 | new work-with-me route | P1 | Explain freelance fit, engagement process, deliverables, boundaries, and inquiry CTA |
| FOOTER-01 | `Contact.tsx` / `Footer.tsx` | P1 | Consolidate into a semantic global footer and remove stale duplicate |
| A11Y-01 | `globals.css` and motion components | P0 | Add reduced motion, focus visible, skip link, and contrast fixes |
| PERF-01 | `SmoothScroll.tsx` | P1 | Honor reduced motion and cancel RAF cleanup |
| FONT-01 | `layout.tsx`, `globals.css` | P1 | Use `next/font`; define real heading/body tokens |
| SEO-01 | `layout.tsx` | P0 | Metadata base, OG, Twitter, canonical defaults, icons |
| SEO-02 | route pages | P0 | Unique route metadata |
| SEO-03 | new `sitemap.ts`, `robots.ts` | P0 | Crawl/discovery infrastructure |
| SEO-04 | layout/about/projects | P1 | Accurate visible JSON-LD and breadcrumbs |
| QUALITY-01 | project-wide | P1 | Add component/content tests and accessibility checks |
| QUALITY-02 | `Footer.tsx`, starter SVGs | P2 | Remove after confirming unused |

---

## 20. Definition of done

The redesign is ready to promote when:

- a visitor can identify role, specialization, proof, availability, and primary CTA in the first viewport;
- at least two projects have complete, evidence-based case studies;
- every featured project includes real visual media;
- every metric is verified and accurately attributed;
- no watermarks or placeholder visuals remain;
- mobile navigation exposes every primary destination;
- reduced-motion mode removes nonessential movement;
- keyboard navigation, focus, landmarks, headings, and contrast have been manually verified;
- a real selectable-text résumé PDF downloads directly;
- every route has unique metadata and a valid social preview;
- sitemap, robots, canonical URLs, and structured data validate;
- no browser console warnings remain in production;
- production Core Web Vitals are measured rather than guessed;
- the contact funnel is tracked without collecting sensitive message data;
- project attribution and employer permissions are confirmed.

---

## 21. Final recommendation

Do not redesign the entire visual identity from scratch. The current portfolio already has a recognizable point of view. Preserve the dark editorial system, the personal portrait, and one controlled scroll moment.

Redirect the majority of effort toward:

1. authentic product media;
2. two excellent technical case studies;
3. verified proof and precise contribution language;
4. a faster path from landing to work;
5. a clearer route from trust to contact;
6. accessibility, metadata, and performance polish.

That combination will make the site feel more impressive because it becomes more credible—not merely more animated.
