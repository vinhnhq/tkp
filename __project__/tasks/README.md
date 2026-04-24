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
