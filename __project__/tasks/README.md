# Project Tasks

Status legend: ✓ done · → in progress · · backlog · ⏸ blocked

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
| T007 | Swap Unsplash placeholders → real TKP photography | · backlog (after T003 sign-off) |
| T008 | Delete unused variants after selection | · backlog (remove V1–V10 except winner, then remove PreviewSwitcher) |

## Sprint 03 — SEO & Marketing Foundation
See [plan.md](sprint-03-seo-and-marketing/plan.md) · [todo.md](sprint-03-seo-and-marketing/todo.md)

| # | Task | Status |
|---|------|--------|
| T301 | `buildMetadata()` helper in `src/lib/seo.ts` | · backlog |
| T302 | Per-page metadata wiring (replace default Next metadata) | · backlog |
| T303 | `sitemap.ts` with locale × route combos + hreflang | · backlog |
| T304 | `robots.ts` (prod allow, preview disallow) | · backlog |
| T305a | JSON-LD type builders in `src/lib/seo/schema.ts` (scaffolding — ready) | · backlog |
| T305b | JSON-LD data wiring + per-page injection | ⏸ blocked (client answers) |
| T306 | Legacy VN slug 301 redirects in `next.config.ts` | · backlog |
| T307 | Image alt text audit in active locale | · backlog |
| T308 | Google Business Profile created + verified | · backlog (client coord) |
| T309 | Search Console verified + sitemap submitted + GA4 installed | · backlog (client coord) |
| T310 | Collect social `sameAs` URLs from client | · backlog (client coord) |
| T311 | Keyword map doc — per page, primary + secondary + long-tail | · backlog |
| T312 | ADR-004 — original content over scraped blog | ✓ done |
| T313 | Content plan — 5–8 pillar topics with keyword + angle | · backlog |
| T314 | Blog architecture decision (routing, format, scope) | · backlog |
| T315 | Logo wall permission + alt-text audit | · backlog |
| T316 | Product-page trust-signal copy | · backlog (Sprint 04) |
