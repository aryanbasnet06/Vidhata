# Vidhata Website — PRD & Work Log

## Original Problem Statement
Make the entire Vidhata website (a single-page Vite + React + TypeScript non-profit landing site) fully responsive and production-ready across all devices, screen sizes, resolutions and orientations — WITHOUT changing branding, content, colors, links or functionality. Audit and systematically fix responsive behavior of every page/section/component, prevent horizontal overflow, use a mobile-first approach with fluid sizing (clamp/min/max), responsive nav, hero, typography, grids, cards, images, forms and footer.

## Architecture
- **Stack**: Vite 6 + React 18 + TypeScript, Tailwind CSS **v4** (JIT), lucide-react icons, Radix UI primitives, EmailJS (contact form). No backend / DB.
- **Structure**: Single page `src/App.tsx` composing sections: Navigation, Hero, About, Programs, Partners, WorkInAction, RecognitionSection, GetInvolved, ImpactMetrics (desktop-only bar), VolunteerTrajectory, Team, Contact, Footer.
- **Served**: `yarn dev` on port 3000 (preview). Production deploy via Netlify/Vercel (`yarn build` → `build/`).
- **Brand**: teal `#5B8A8D` / `#4a7174`, coral `#EA8166` / `#EB8F78`, sand `#F0C78A`.

## Key change — Tailwind pipeline
The repo shipped a **frozen precompiled Tailwind snapshot** (`src/index.css`) with no live build, which blocked adding responsive utilities cleanly. Set up the real Tailwind v4 pipeline:
- Added `@tailwindcss/vite` plugin in `vite.config.ts`.
- `src/main.tsx` now imports `src/styles/globals.css` which starts with `@import "tailwindcss";` + theme tokens + base layer (overflow guards, fluid media, anchor scroll-margin). The old `src/index.css` is no longer imported.
- Added a `3xl` (1920px) breakpoint token.

## What's been implemented (2026-06 / dated 2026-08-07 env)
- **Navigation**: full rewrite. Desktop menu now switches at `lg` (≥1024px) so 7 links + logo + Join Us no longer overflow at 768–1024px; responsive spacing/font. Mobile: accessible hamburger + overlay panel, body scroll-lock, Escape-to-close, large tap targets, aria attributes, closes on nav.
- **Hero**: fluid `clamp()` headings (no 320px overflow), responsive paddings and bottom margin (removes wasted mobile gap), stacked→inline buttons.
- **WorkInAction**: gallery captions now visible on touch (`opacity-100 lg:opacity-0 lg:group-hover:opacity-100`) — previously hover-only/invisible on mobile.
- **RecognitionSection**: fixed CSS bug (`hieght:600px` killed `max-width:100%`) that forced a 600px image overflow on phones; now fluid; clamp typography/padding.
- **Partners**: marquee padding `px-6 sm:px-16 lg:px-24` (was fixed 96px crushing mobile cards); responsive card sizes + arrow sizes.
- **About / Programs / GetInvolved / VolunteerTrajectory / Team / Contact / Footer**: consistent mobile-first section paddings (`py-16 sm:py-20…`), heading scale (`text-3xl sm:text-4xl lg:text-5xl`), responsive grids (mobile 1-col → sm 2-col → lg 3/4-col), responsive icons/cards/buttons, footer columns stack on tablet, contact submit `w-full sm:w-auto`.
- **Global**: root overflow guard + fixed actual overflow sources; fluid `img/svg`; `overflow-wrap:break-word`; anchor `scroll-margin-top` for fixed nav.

## Verification
Testing agent (frontend) — **100% pass**:
- No horizontal overflow at 320/360/375/390/414/430/540/640/768/820/912/1024/1280/1440/1536/1920/2560.
- Desktop nav fits at 1024 & 1280; mobile menu open/close/link/Escape/scroll-lock all work.
- Hero readable at 320; buttons stack on mobile.
- Gallery captions visible on mobile, hover on desktop; certificate image fits at 375; contact form fits at 375.
- Zero console errors. `yarn build` succeeds.

## Backlog / Next tasks (optional)
- Add `id="work"` to WorkInAction for anchor consistency (currently unlinked).
- Consider a dedicated class for gallery `.group` items to avoid future hover-selector collisions.
- Production process management (supervisor here targets a CRA-style `/app/frontend`; this repo deploys via Netlify/Vercel instead).
