# Plan: Sprint 02 — Assets & Homepage Design

## Context

Scaffold is done. Before writing any real UI code, we need two things:
1. The raw visual assets from the live site — so designs can reference real imagery rather than placeholders.
2. A set of homepage variants to validate the "minimal factory" aesthetic before committing to one direction.

This sprint produces a chosen homepage direction. No other pages are touched.

---

## Track A — Asset Harvesting

### Task 001: Scrape tkpcarton.com into raw-assets/

**File:** `raw-assets/` (gitignored)
**Change:** Run wget mirror into `raw-assets/`. List what came back for review.
**Acceptance:**
- `raw-assets/` directory exists with scraped files
- A manifest (`raw-assets/manifest.txt`) lists all files with type and rough category guess
- Nothing committed to git yet (raw-assets is gitignored)

---

### Task 002: Organize into public/assets/

**File:** `public/assets/{hero,products,process,factory,logos}/`
**Change:** Manually review the manifest, pick what's worth keeping, copy (not move) into the semantic folders with renamed filenames. Leave `raw-assets/` untouched as the source of truth.

Naming convention:
- `hero-production-line.jpg`, `hero-factory-floor.jpg`
- `product-3layer-01.jpg`, `product-5layer-01.jpg`, `product-7layer-01.jpg`
- `product-industry-agriculture.jpg`, `product-industry-electronics.jpg`, etc.
- `process-step-intake.jpg`, `process-step-survey.jpg`, `process-step-production.jpg`, `process-step-delivery.jpg`
- `factory-exterior.jpg`, `factory-interior-01.jpg`
- `logo-tkp.png` (or svg if available)

**Acceptance:**
- All copied files have semantic filenames
- Each subfolder has at least one file or a `_EMPTY` note if nothing usable was found
- No raw/scraped filenames in public/assets/

---

## Track B — Homepage Variants

### Task 003: Define 4 layout variants on paper

**File:** This plan.md (section below)
**Change:** Agree on 4 distinct visual directions before writing any code. Each variant must differ meaningfully in layout logic, not just color or font size.

**Acceptance:**
- 4 variants described with: layout structure, hero treatment, nav position, dominant mood
- User signs off on the 4 directions before T004 starts

#### Proposed variants

**V1 — Full-bleed editorial**
- Hero: full-viewport photo/video, wordmark centered, one-liner below, hotline CTA anchored bottom-left
- Nav: minimal top bar, transparent over hero, white on scroll
- Tone: magazine cover. Strong photo dependency.
- Risk: weak if photos aren't great

**V2 — Split screen**
- Hero: left half = large wordmark + tagline + CTA stack; right half = photo/video
- Nav: horizontal top, always visible
- Tone: structured, European industrial catalog
- Risk: can feel generic if not executed with strong type

**V3 — Text-first / type-led**
- Hero: 90vh of near-black background, oversized display type (Fraunces), no photo initially — photo fades in on scroll
- Nav: horizontal top, inverted (white on dark)
- Tone: Aesop / Teenage Engineering — confident enough to not need imagery
- Risk: client might feel it undersells the factory

**V4 — Horizontal tape / materiality-forward**
- Hero: full width, raw kraft-texture background (CSS or image), wordmark in large mono/display, vertical scroll reveals sections
- Nav: left sidebar on desktop, top on mobile
- Tone: the material IS the UI — corrugation patterns, fold lines as design elements
- Risk: most complex to implement; most distinctive if done right

**Acceptance:**
- All 4 described, none removed without justification
- User picks one (or hybrid) before T004

---

### Task 004: Implement chosen variant as /homepage-preview

**File:** `src/app/homepage-preview/page.tsx` (temporary, not localized)
**Change:** Build the full landing page scroll in the chosen direction — all 7-8 sections, but with placeholder content (real copy from brief.md, placeholder images). No animations yet — static HTML/CSS only.
**Acceptance:**
- Renders at `http://localhost:3000/homepage-preview`
- All 7-8 sections visible on scroll
- Looks correct on mobile (375px) and desktop (1280px)
- No layout breaks, no console errors

---

### Task 005: Animation + polish pass

**File:** sections components + `src/app/homepage-preview/page.tsx`
**Change:** Wire up Lenis, `RevealOnScroll`, counter animation on Stats, pinned scroll on Process. Enforce <600ms, ease-out, no bounce.
**Acceptance:**
- Lenis smooth scroll working
- Scroll-triggered entrance animations on at least: Hero text, Stats counters, one product card
- Process section has pinned or stepped scroll
- All animations ≤600ms
- No jank on iPhone 14 Safari (test in simulator or real device)

---

## Out of scope this sprint

- Localization (no next-intl wiring yet — single locale placeholder)
- Product detail pages
- Contact form
- SEO metadata / JSON-LD
- Image optimization (next/image, AVIF) — deferred to Phase 5
