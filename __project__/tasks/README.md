# Project Tasks

Status legend: ✓ done · → in progress · · backlog · ↷ stretch · ⏸ blocked

Backlog (not-yet-committed work): [`backlog/`](backlog/)
 - [`backlog/marketing.md`](backlog/marketing.md) — ongoing SEO & marketing tasks
 - [`backlog/client-waiting.md`](backlog/client-waiting.md) — cross-cutting checklist of items blocked on client input
 - [`backlog/ideas.md`](backlog/ideas.md) — ad-hoc ideas drop zone

---

## Sprint 01 — Scaffolding
| # | Task | Status |
|---|------|--------|
| 001 | [Next.js scaffold + tooling setup](sprint-01-scaffolding/001-nextjs-scaffold.md) | ✓ done |

## Sprint 02 — Assets & Homepage Design
| # | Task | Status |
|---|------|--------|
| T001 | Scrape tkpcarton.com into raw-assets/ + generate manifest | ✓ done |
| T002 | Organize + rename into public/assets/ subfolders | ✓ done |
| T003 | Review layout variants → pick one direction | → reopened · expanded to 10 previews at `/homepage-preview` (V1–V10) per client request |
| T004 | Implement chosen variant as static /homepage-preview | ✓ done (all 10 rendered at `/homepage-preview/v1..v10` with shared content) |
| T005 | Animation + polish pass | ✓ done (V4) · rerun on chosen variant after T003 sign-off |
| T006 | Add Customers / "Tự hào phục vụ" logo wall section | ✓ done (all 10 variants, logos-02..09) |
| T007 | Swap Unsplash placeholders → real TKP photography | ⏸ blocked (T003 sign-off) |
| T008 | Delete unused variants after selection | ⏸ blocked (T003 sign-off — remove V1–V10 except winner, then remove PreviewSwitcher) |

## Sprint 03 — SEO & Marketing Foundation
See [plan.md](sprint-03-seo-and-marketing/plan.md) · [todo.md](sprint-03-seo-and-marketing/todo.md)

| # | Task | Status |
|---|------|--------|
| T301 | `buildMetadata()` helper in `src/lib/seo.ts` | ✓ done |
| T302 | Per-page metadata wiring (replace default Next metadata) | ⏸ blocked (C17 + theme lock) |
| T303 | `sitemap.ts` with locale × route combos + hreflang | ✓ done |
| T304 | `robots.ts` (prod allow, preview disallow) | ✓ done |
| T305a | JSON-LD type builders in `src/lib/seo/schema.ts` (scaffolding — ready) | ✓ done |
| T305b | JSON-LD data wiring + per-page injection | ⏸ blocked (client answers C01–C03, C17–C19) |
| T306 | Legacy VN slug 301 redirects in `next.config.ts` | ⏸ blocked (audit ✓ · wiring waits on Sprint 05) |
| T307 | Image alt text audit in active locale | ⏸ blocked (theme lock + final imagery) |
| T308 | Google Business Profile created + verified | ⏸ blocked (C08 client coord) |
| T309 | Search Console verified + sitemap submitted + GA4 installed | ⏸ blocked (C08 client coord) |
| T310 | Collect social `sameAs` URLs from client | ⏸ blocked (C09 client coord) |
| T311 | Keyword map doc — per page, primary + secondary + long-tail | ↷ stretch |
| T312 | ADR-004 — original content over scraped blog | ✓ done |
| T313 | Content plan — 5–8 pillar topics with keyword + angle | ↷ stretch |
| T314 | Blog architecture decision (routing, format, scope) | ↷ stretch |
| T315 | Logo wall permission + alt-text audit | ⏸ blocked (C07 client coord) |
| T316 | Product-page trust-signal copy | ↷ stretch (Sprint 05) |

## Sprint 04 — Team-mode workflow hardening
See [plan.md](sprint-04-team-mode-hardening/plan.md) · [todo.md](sprint-04-team-mode-hardening/todo.md)

| # | Task | Status |
|---|------|--------|
| T401 | GitHub Actions CI workflow (lint + build + unit tests) | ✓ done |
| T402 | `release-check.sh` — origin/dev sync gate | ✓ done |
| T403 | `dev-workflow.md` — team-mode section + branch protection checklist | ✓ done |
| T404 | Branch protection rules on `dev` (manual UI step) | ⏸ blocked (GitHub Pro / public repo) |

## Sprint 05 — SEO unblock + filename rename
See [plan.md](sprint-05-seo-unblock-and-rename/plan.md) · [todo.md](sprint-05-seo-unblock-and-rename/todo.md) · [retro.md](sprint-05-seo-unblock-and-rename/retro.md)

| # | Task | Status |
|---|------|--------|
| T501 | `refactor(sprint-05/T501): rename layout components to kebab-case` | ✓ done |
| T502 | `refactor(sprint-05/T502): rename section components to kebab-case` | ✓ done |
| T503 | `refactor(sprint-05/T503): rename ui components to kebab-case + enforce via Biome` | ✓ done |
| T504 | `feat(sprint-05/T504): typed business config — single source of truth` | ✓ done |
| T505 | `feat(sprint-05/T505): sitewide + homepage metadata wiring` | ✓ done |
| T506 | `feat(sprint-05/T506): static OG image fallback (1200×630 kraft card)` | ✓ done |
| T507 | `feat(sprint-05/T507): inject Organization + LocalBusiness JSON-LD sitewide` | ✓ done |
