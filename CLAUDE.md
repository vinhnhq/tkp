# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Rebuilding **tkpcarton.com** — Tân Khánh Phong (TKP), a carton/packaging manufacturer (est. 1997, HCMC). Full multilingual site (Vietnamese default, English, Simplified Chinese). See `brief.md` for the full project spec.

## Stack

- **Next.js 15** App Router + TypeScript
- **Tailwind CSS v4** (token-based theming via `@theme` in `globals.css`)
- **next-intl** with localized pathnames (not just locale prefix — slugs differ per language)
- **Framer Motion** for standard animations; **GSAP ScrollTrigger** only for pinned scroll sections
- **Lenis** for smooth scrolling
- Static content — no CMS; all page content in typed TS files under `src/content/`

## Commands

```bash
bun install
bun run dev       # local dev server
bun run build     # production build
bun run start     # run production server locally
bun run lint      # Biome check
bun run format    # Biome format --write
bun run test      # Playwright e2e tests
```

## Dev workflow

Follow `dev-workflow.md`: Spec → Plan → Implement → Test → Review → Release. All development on `dev` branch; `main` is release-only (via `scripts/release-check.sh`).

### Commit convention

Follow `dev-workflow.md` → "Commit message convention". Core rule: **one commit = one semantic type**. Never mix docs and code in the same commit.

- `plan(sprint-NN)` — sprint plan / todo updates
- `docs(<domain>)` — project docs (brief, backlog, ADRs, dev-workflow, seo)
- `feat(sprint-NN/TN)` / `fix(sprint-NN/TN)` — code implementing a task
- `chore` — tooling, deps, version bumps

When a task produces both a plan update and the code, split into at least two commits (plan first, then code).

### Project management files

- `__project__/tasks/README.md` — master task board (backlog / in-progress / done / blocked)
- `__project__/tasks/sprint-NN-name/` — sprint plan + todo
- `__project__/tasks/backlog/` — uncommitted work: marketing, client-waiting, ideas
- `__project__/docs/decisions/` — ADRs
- `__project__/docs/seo/` — SEO & marketing reference docs (playbook, og-cards, keywords, content-plan)
- `__project__/tasks/RELEASES.md` — append-only release log

## Architecture

### Two-layer content model

Content is split intentionally:
- `messages/{vi,en,zh}.json` — short UI strings (nav labels, CTAs, button text)
- `src/content/{vi,en,zh}/` — typed TS objects for rich page content (product details, process steps, company facts)

Never put long-form content in `messages/`; never put bare UI strings in `src/content/`.

### Routing

All routes are localized with different slugs per language:

```
/vi/san-pham/carton-5-lop
/en/products/5-layer
/zh/产品/5-层
```

i18n routing config lives in `src/i18n/routing.ts`. Route parameters use next-intl's `useLocale()` / `getTranslations()` — never hardcode locale strings in components.

### Key directories

```
src/app/[locale]/          # All routes scoped under locale segment
src/components/
  layout/                  # Header, Footer, LocaleSwitch
  sections/                # Page sections (Hero, Stats, ProductRange, Process, etc.)
  ui/                      # Reusable primitives (Button, RevealOnScroll, etc.)
src/content/               # Typed TS content objects per locale
src/i18n/                  # next-intl config (routing.ts, request.ts)
src/lib/                   # seo.ts (metadata + JSON-LD helpers), fonts.ts
public/assets/             # Organized by: hero/, products/, process/, factory/, logos/
```

### SEO

Every page needs: one `<h1>`, hreflang alternates (with `x-default → /vi`), OG/Twitter cards, and JSON-LD (Organization + LocalBusiness sitewide; Product schema per product page; BreadcrumbList). Helpers live in `src/lib/seo.ts`.

### Animation constraints

- All transitions < 600ms, ease-out dominant
- No bounce easing — this is an industrial brand, not a startup
- GSAP only where Framer Motion can't handle pinned scroll; otherwise use Framer Motion

### Asset naming

Public assets use semantic filenames so future photo swaps are 1:1 replacements:
`hero-production-line.jpg`, `product-5layer-01.jpg`, `process-step-delivery.jpg`

## Known issues to flag before launch

- Existing site has a typo in their email: `tankhanhphong@tkpcarrton.com` (double `r`). Confirm correct email with client before wiring up contact form.
