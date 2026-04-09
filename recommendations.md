# SoulSupport — Code Review & Recommendations

*Fresh review based on the rebuilt codebase as of April 2026. The previous recommendations.md described a project that no longer exists — everything it asked for has been built. This document reviews what is actually here now.*

---

## Section 1: What Has Been Done Well

### Architecture and structure
- The App Router layout is clean: `layout.js` handles only fonts and metadata, all pages assemble `<Header />`, `<main>`, and `<Footer />` directly. This is the correct pattern and avoids the global-nav-wrapper anti-pattern.
- The component split is sensible. `BenefitsPanel`, `Tab`, and `VideoPreview` are properly isolated and reusable across all five support sub-pages.
- `BenefitsPanel` is correctly marked `'use client'` while `Tab` and `VideoPreview` are server components — this is exactly the right client/server boundary.
- Custom Tailwind tokens (`cream`, `ink`, `ink-soft`, `sage`, `teal`, `rose`, `amber`, `sanctuary.*`) are all defined in `tailwind.config.js`, matched in `globals.css` as CSS custom properties, and used consistently. No magic values leaking into JSX — mostly (see issues below).
- The font stack is properly handled: Next.js `next/font/google` loads Cormorant Garamond and Nunito, CSS variables are injected on `<html>`, and Tailwind aliases (`font-display`, `font-body`) resolve to them. There is no conflicting system-font override in `globals.css`.

### Questionnaire
- PHQ-4 is implemented correctly with the right four questions and the validated 0–3 per-question scoring.
- Score band boundaries (0–2, 3–5, 6–8, 9–12) match the published instrument.
- The `Suspense` wrapper on `ResultsPage` is correct — `useSearchParams()` requires it for static rendering.
- The score is clamped with `Math.min(12, Math.max(0, …))` on the results page, defending against URL tampering.
- The "Your results stay on your device and are never stored or shared" disclosure on the intro screen is good practice for a health tool.
- Compassionate, non-alarmist copy throughout, with appropriate escalation for severe scores.

### Help page
- Eight real UK helplines with verified phone numbers, email addresses, opening hours, and clickable `tel:` / `mailto:` links.
- The Derbyshire NHS helpline is appropriate given the university context.
- `rel="noopener noreferrer"` is present on all external `target="_blank"` links. Good.
- Logo images use `next/image` with explicit width/height, avoiding layout shift.

### Design system
- Per-section gradient themes (teal for breathing, amber for meditation, navy for sleep, etc.) give each page a distinct identity without breaking overall cohesion.
- The breathing orb animation on the hero is atmospheric and appropriate for the subject matter — the `aria-hidden="true"` and `pointer-events-none` attributes are correctly applied.
- Staggered entrance animations (`anim-float-up` + `delay-*`) are tasteful and not overdone.
- The triage flow on the landing page is the right first impression for a mental health app and shows genuine user-centred thinking.
- The crisis card (`I'm in crisis — I need help right now`) is visually distinct without being alarming — rose border rather than red, prominent but not panic-inducing.
- Responsive video wrapper uses `aspect-ratio: 16/9` via the `.video-wrapper` CSS class and `loading="lazy"` on iframes. Both the old fixed-dimension bug and the lazy-loading gap from the previous codebase have been fixed.

### Footer and navigation
- Footer links cover About, Disclaimer, Wellbeing Check-in — good page discoverability.
- Header active-state logic correctly distinguishes the root (`pathname === '/'`) from prefix-matched routes.
- `aria-expanded` on `BenefitsPanel`'s toggle button is present.

---

## Section 2: Remaining Issues

Issues are grouped by severity: **Critical**, **Important**, and **Suggestion**.

---

### Critical

**C1 — `@fortawesome/fontawesome-svg-core` is not in `package.json`**
`app/components/Footer.js` imports from `@fortawesome/react-fontawesome` and `@fortawesome/free-brands-svg-icons`. The peer dependency `@fortawesome/fontawesome-svg-core` is absent from both `dependencies` and `devDependencies` in `package.json`. The app likely works in development because it is installed transitively, but this is fragile and will produce a peer-dependency warning or break in CI. Fix:
```bash
npm install @fortawesome/fontawesome-svg-core
```

**C2 — `help/page.js` function name is lowercase `help()` and `support/page.js` is lowercase `support()`**
`/home/tower/soul/website/app/help/page.js` line 7: `export default function help()`. React treats lowercase function names as DOM elements, not components. This works at runtime only because Next.js's bundler exports the default regardless of name, but it is incorrect JavaScript and will cause ESLint warnings and potential edge-case rendering bugs. Both page functions should be PascalCase:
- `app/help/page.js` → `function HelpPage()`
- `app/support/page.js` → `function SupportPage()`

**C3 — `app/components/Disclaimer.js` is a dead, stale file that contradicts the live design**
`/home/tower/soul/website/app/components/Disclaimer.js` contains the original purple-gradient disclaimer with hardcoded inline Tailwind classes, no Header or Footer, and a raw email address in plain text. It is never imported anywhere in the current codebase (the live disclaimer is at `app/disclaimer/page.js`). Its continued presence is a risk: it could be accidentally re-linked, it contains a student email address in plaintext, and it clutters the component directory. Delete it.

---

### Important

**I1 — `Header.js` has no mobile menu — nav breaks on small screens**
`/home/tower/soul/website/app/components/Header.js`: the `<ul>` of nav links is always visible. On screens narrower than approximately 360px, four pill-shaped links (`Home`, `Support`, `Help`, `About`) will wrap or overflow the header. There is no hamburger menu or any responsive collapse. For a uni submission that will be demoed or assessed on various devices, this matters. At minimum, add `flex-wrap` and ensure wrapping is graceful; ideally implement a simple toggle menu for mobile.

**I2 — `tab` section heading "Guided Meditation" duplicates the page heading**
`/home/tower/soul/website/app/support/meditation/page.js` line 48: the second `Tab` has `title="Guided Meditation"` — identical to the `<h1>` of the page. The actual content of that tab (self-love, strength/grounding) suggests it should be titled something like "Emotional Wellbeing" or "Feel-Good Sessions". This is a copy error that looks careless in a submission.

**I3 — Progress bar percentage calculation is off-by-one**
`/home/tower/soul/website/app/questionnaire/page.js` line 46:
```js
const progress = step === 0 ? 0 : Math.round((step / totalQs) * 100);
```
When the user is on question 1 of 4, `step` is `1` and `totalQs` is `4`, giving 25%. When they are on question 4, it shows 100% — but they have not yet answered it, let alone submitted. The bar should reach 100% only after the final answer is submitted. Consider `Math.round(((step - 1) / totalQs) * 100)` to show progress so far, or `Math.round((step / (totalQs + 1)) * 100)` to reserve space for the submission step.

**I4 — Score is passed as a plain URL query parameter with no validation on the questionnaire page itself**
`/home/tower/soul/website/app/questionnaire/page.js`: scores are computed client-side and passed to `/questionnaire/results?score=N`. The results page does clamp the value (good), but any user can navigate directly to `/questionnaire/results?score=12` without taking the questionnaire. For a health tool this is a minor but real UX/ethical gap — a severely distressed person could be shown crisis resources without actually scoring severely. Consider using `sessionStorage` (the pattern already used in `page.js` for triage routing) to pass the score instead of the URL, with a fallback that redirects to the questionnaire if no session score is found.

**I5 — `VideoPreview.js` uses `key={index}` in `Tab.js`**
`/home/tower/soul/website/app/support/components/Tab.js` line 12: `key={index}` is used when mapping over videos. If video lists ever change order, React will not correctly reconcile the components. Use `key={video.id}` instead — the YouTube video ID is already available and is a stable, unique key.

**I6 — `support/page.js` comment says "Path: app/support/options/Options.js" — it is actually `app/support/page.js`**
`/home/tower/soul/website/app/support/page.js` line 1: the path comment is copied from the wrong file. Minor, but confusing for anyone reading the code.

**I7 — `BenefitsPanel` toggle icon is a Unicode character `⌄`, not a proper chevron**
`/home/tower/soul/website/app/support/components/BenefitsPanel.js` line 18: `⌄` is a mathematical angle character, not a standard UI chevron. It renders inconsistently across operating systems and fonts. Use an SVG chevron or a CSS border-based arrow. As-is it may look like a dash or not render at all on some platforms.

**I8 — No `<main>` element on the Help page**
`/home/tower/soul/website/app/help/page.js`: the page renders `<Header />`, `<Help />`, `<Footer />` inside a `div`. `Help.js` renders a `div` with gradient styling. Neither uses a `<main>` element. Every other page uses `<main>` for the content region. This breaks screen reader navigation (users cannot skip to main content) and is an inconsistency. The same issue applies to `support/page.js` — `Options.js` also has no `<main>`.

**I9 — `disclaimer/page.js` shows "Last updated 01/03/2024" — over two years stale**
`/home/tower/soul/website/app/disclaimer/page.js` line 15. Trivial to update; looks unprofessional in a live submission to show a date two years in the past.

---

### Suggestions

**S1 — No `<title>` metadata on several pages**
`layout.js` sets a global `title: 'SoulSupport'`. The `about/page.js` and `disclaimer/page.js` both export `metadata` with page-specific titles, which is correct. However, `questionnaire/page.js`, `questionnaire/results/page.js`, `help/page.js`, `support/page.js`, and all five support sub-pages do not. Since they are `'use client'` components, they cannot export `metadata` directly — but you can move the page-level shell to a server component wrapper that exports metadata, keeping only the interactive parts as client components. At minimum, the questionnaire and results pages should have distinct titles since users may navigate back to them via browser history.

**S2 — `sessionStorage` write in `handleCardClick` silently swallows all errors**
`/home/tower/soul/website/app/page.js` line 63–65: the empty catch `catch (_) {}` is appropriate for a non-critical feature, but a brief comment explaining why (`// sessionStorage may be unavailable in private browsing`) would make it clearer this is intentional rather than lazy error suppression.

**S3 — Violet/purple colours are defined inconsistently**
`tailwind.config.js` defines `sanctuary.sound` as `#9B82C8` (violet/purple). `globals.css` defines `--ss-violet: #9B82C8`. However, `page.js` line 54 hardcodes `bg-[#9B82C8]/15` rather than using `bg-sanctuary-sound/15`. The same applies to `#1E3142` (sleep colour) and `#8AAD6E` (exercises colour) appearing as arbitrary values in `page.js` lines 22–46. All of these have named tokens in the config — use them.

**S4 — Hero orbs may induce discomfort for users with vestibular disorders**
`globals.css` lines 30–41: the breathing animation is continuous and infinite. Users who have `prefers-reduced-motion` set will still see it because there is no `@media (prefers-reduced-motion: reduce)` guard. This is particularly worth addressing on a mental health app whose users may include people with anxiety disorders or vestibular sensitivity. Add:
```css
@media (prefers-reduced-motion: reduce) {
  .animate-breathe,
  .animate-breathe-slow,
  .anim-float-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

**S5 — `react-icons` is in `package.json` dependencies but is not used**
`package.json` line 8: `"react-icons": "^5.0.1"` appears in dependencies. No import of `react-icons` appears anywhere in the codebase. This adds ~1 MB to the bundle unnecessarily. Remove it.

**S6 — Tailwind `transition-all duration-250` is not a valid Tailwind class**
`app/support/options/Options.js` line 30 and `app/components/Header.js` line 60: `duration-250` is not in Tailwind's default duration scale (which goes 75, 100, 150, 200, 300, 500, 700, 1000). Tailwind will not generate this class and the transition duration will fall back to the browser default. Use `duration-200` or `duration-300`.

**S7 — `About` page has eight staggered `anim-float-up` sections — the last ones take 0.7+ seconds to appear**
`/home/tower/soul/website/app/about/page.js`: sections use `delay-100` through `delay-700`. The final section (tech stack, delay-600) and the CTA button (delay-700) take 1.4 seconds total before they become visible, since the animation itself is 0.7s. Users who scroll quickly will arrive at sections that are still invisible. Consider reducing maximum delay to 400ms or using an `IntersectionObserver`-based approach for below-the-fold content.

---

## Section 3: High-Value Additions Still to Make

These are ordered by impact-to-effort ratio for an academic submission.

### 1. `prefers-reduced-motion` support (30 minutes, high academic value)
See S4 above. This single CSS addition demonstrates accessibility awareness that markers in digital health projects specifically look for. Add the `@media (prefers-reduced-motion: reduce)` block to `globals.css`.

### 2. Skip-to-main-content link (15 minutes, a11y)
Add a visually-hidden but focusable "Skip to main content" anchor at the top of `Header.js` that links to `#main-content`, and add `id="main-content"` to the `<main>` element on each page. Standard accessibility pattern, simple to implement, demonstrates competence:
```jsx
// First child inside <header>
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-cream focus:text-ink focus:rounded"
>
  Skip to main content
</a>
```

### 3. Fix the Help and Support page `<main>` wrapper (10 minutes)
Wrap the content region in `Help.js` and `Options.js` with `<main id="main-content">` and remove the redundant outer `div` in their respective `page.js` wrappers. This resolves I8 and completes the skip-link implementation.

### 4. Score-via-sessionStorage on questionnaire (45 minutes, ethical + technical)
Replace the `?score=N` URL parameter with a sessionStorage key (e.g. `ss_phq4_score`). Read it in `ResultsContent`, redirect to `/questionnaire` if absent. This prevents direct URL manipulation and aligns with the "results stay on your device" promise made to users. The triage storage pattern in `page.js` is already there — reuse it.

### 5. Mobile hamburger menu (1–2 hours, UX)
The existing nav is four items and will wrap on very small screens. A simple `useState` toggle with a slide-down menu resolves I1. You already have the `usePathname` client pattern in Header. Close the menu on route change by adding a `useEffect` that watches `pathname`.

### 6. PHQ-4 citation on results page (10 minutes, academic credibility)
The about page mentions PHQ-4 is a validated clinical instrument but the results page does not cite the source. Add a small footnote:
> PHQ-4: Kroenke K, Spitzer RL, Williams JBW, Löwe B. (2009). An ultra-brief patient health questionnaire for multicomponent mental health assessment. *Archives of Internal Medicine*, 169(10), 1057–1061.

This demonstrates research grounding, which is directly assessed in final year projects.

### 7. `<html lang="en">` is present — add `lang` on non-English content if any exists
Currently fine — confirming it is set correctly in `layout.js`. No action needed.

---

## Section 4: Academic Submission Checklist

Work through this before submitting. Tick each item off.

### Must-fix before submission
- [ ] Add `@fortawesome/fontawesome-svg-core` to `package.json` (C1)
- [ ] Rename `help()` to `HelpPage()` and `support()` to `SupportPage()` (C2)
- [ ] Delete `app/components/Disclaimer.js` — it is dead code containing your university email (C3)
- [ ] Fix `duration-250` to `duration-200` in `Header.js` and `Options.js` (S6)
- [ ] Remove `react-icons` from `package.json` (S5)
- [ ] Fix the duplicated tab title "Guided Meditation" in `meditation/page.js` (I2)
- [ ] Update the disclaimer "Last updated" date (I9)

### Should-fix before submission
- [ ] Add `prefers-reduced-motion` CSS guard to `globals.css` (S4 / Section 3 item 1)
- [ ] Add skip-to-main-content link in `Header.js` (Section 3 item 2)
- [ ] Add `<main>` to Help page and Support options page (I8)
- [ ] Use `key={video.id}` instead of `key={index}` in `Tab.js` (I5)
- [ ] Replace arbitrary colour values in `page.js` triage cards with named tokens (S3)
- [ ] Add PHQ-4 citation to results page (Section 3 item 6)

### Presentation and demonstration checks
- [ ] Run `npm run build` — confirm zero errors and zero warnings
- [ ] Run `npm run lint` — resolve any ESLint issues
- [ ] Test on a real mobile device (or DevTools at 375px width) — check header wrapping, video sizing, card layout
- [ ] Navigate through the full questionnaire flow start to finish
- [ ] Navigate directly to `/questionnaire/results?score=9` and verify the crisis box appears correctly
- [ ] Verify all eight `tel:` links on the Help page are callable (tap on mobile)
- [ ] Check all external links open in a new tab and have `rel="noopener noreferrer"`
- [ ] Confirm the disclaimer page is linked in the footer and loads correctly
- [ ] Confirm no console errors or React key warnings in the browser

### Academic markers specifically look for (mental health app context)
- [ ] Evidence of validated tool usage (PHQ-4 citation present)
- [ ] Ethical handling: no data stored server-side, clear disclaimer, crisis escalation visible
- [ ] Accessibility: `aria-expanded`, `aria-hidden`, skip link, `<main>` landmark, `alt` text on images
- [ ] Responsive design: tested and working on mobile
- [ ] Code quality: PascalCase components, no unused dependencies, consistent use of design tokens
- [ ] User-centred design rationale: the triage flow is your strongest evidence — be ready to explain the decision to lead with "what brings you here?" rather than a generic list of features

---

*The codebase has been substantially rebuilt since the original recommendations were written and the core asks — new landing page, questionnaire, about page, disclaimer relocation, responsive videos, active nav state, per-section colour themes — have all been delivered. The remaining issues are mostly small but some (dead Disclaimer component, missing `<main>` on Help page, `prefers-reduced-motion`, FontAwesome peer dep) are straightforward to fix and worth doing before submission.*
