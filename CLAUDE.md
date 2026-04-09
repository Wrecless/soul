# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

## Architecture

Next.js 14 App Router project. All pages live under `app/` using the file-system router.

**Shared components** (`app/components/`): `Header`, `Footer`, and `Disclaimer` are used across all pages. Header contains the main nav (Home, Support, Help).

**Support section** (`app/support/`): Each sub-page (breathing, meditation, sound-therapy, exercises, sleep) follows the same pattern — a `"use client"` page with a `useState` benefits toggle, plus `<Tab>` components. The `Tab` component (`app/support/components/Tab.js`) renders a section title and a grid of `VideoPreview` iframes. All videos are YouTube embeds.

**Help page** (`app/help/body/Help.js`): Lists UK mental health helplines (Samaritans, NHS, Mind, Anxiety UK, OCD Action, Derby City Council, CALM, SANE) with contact details and logos from `public/`.

**Routing pattern**: Pages import Header/Footer directly; the layout (`app/layout.js`) only wraps with the font and metadata — no global nav wrapper.

## Key Constraints

- This is a mental health support app — all copy must be compassionate, non-alarmist, and include appropriate disclaimers for clinical content
- The PHQ-4 questionnaire (planned at `/questionnaire`) uses a validated 4-question clinical tool; scoring: 0–2 minimal, 3–5 mild, 6–8 moderate, 9–12 severe
- Videos are YouTube embeds via `VideoPreview` — add `loading="lazy"` to new iframes; use a responsive wrapper (`padding-bottom: 56.25%` aspect ratio) rather than fixed width/height
- FontAwesome is used in Footer; requires `@fortawesome/fontawesome-svg-core` peer dep

## Planned Features

See `recommendations.md` for full analysis. Key additions:
- New landing page (`/`) with triage cards routing users to the right section
- Screening questionnaire (`/questionnaire`) using PHQ-4
- Move current disclaimer to `/disclaimer`
- About page (`/about`)
