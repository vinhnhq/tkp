# Todo: Sprint 03 — SEO & Marketing Foundation

Status legend: ✓ done · → in progress · · backlog · ↷ stretch · ⏸ blocked

Uses the three-bucket planning model from `dev-workflow.md` Phase 2.
**Committed** rows block the release gate. **Stretch** and **Blocked** rows do not.

---

## Committed (must finish to release)

### Track A — Code (~half day focused work)

- [x] ✓ **T301** · `buildMetadata()` helper in `src/lib/seo.ts` · ~1h
- [x] ✓ **T303** · `src/app/sitemap.ts` skeleton (locale × route combos + hreflang) · ~30min
- [x] ✓ **T304** · `src/app/robots.ts` (prod allow, preview disallow via `VERCEL_ENV`) · ~15min
- [x] ✓ **T305a** · JSON-LD type builders in `src/lib/seo/schema.ts` · ~1h
- [x] ✓ **T306 (audit only)** · Legacy URL inventory → [`docs/seo/legacy-url-audit.md`](../../docs/seo/legacy-url-audit.md). Wiring deferred to Sprint 04 · ~1h

### Track C — Docs

- [x] ✓ **T312** · ADR-004 — original content over scraped blog

All committed rows done — release gate would PASS on sprint status.

---

## Stretch (pick up if capacity allows · otherwise rolls to Sprint 04)

These were originally listed under "Ready to pick up now" but were demoted to Stretch mid-sprint once Track A filled the cycle. No blockers — just not committed-to this release.

- [ ] ↷ **T311** · VN keyword research doc → `__project__/docs/seo/keywords.md` · ~2h
- [ ] ↷ **T313** · Refine pillar topic plan → `__project__/docs/seo/content-plan.md` · ~1h
- [ ] ↷ **T314** · Blog architecture decision → `__project__/docs/seo/blog-architecture.md` · ~30min
- [ ] ↷ **T316** · Product-page trust-signal copy — natural home is Sprint 04 when product pages exist

---

## Blocked (waiting on external dependency)

Cross-cutting dependencies tracked in [`../backlog/client-waiting.md`](../backlog/client-waiting.md).

- [ ] ⏸ **T302** · Per-page metadata wiring — depends on C17 (founding year) + Sprint 02 T003 theme lock
- [ ] ⏸ **T305b** · JSON-LD data wiring — depends on C01, C02, C03, C17, C18, C19
- [ ] ⏸ **T306 (wiring)** · 301 redirect rules in `next.config.ts` — depends on audit (✓) + Sprint 04 product pages
- [ ] ⏸ **T307** · Image alt text audit — depends on Sprint 02 T003 theme selection + final imagery
- [ ] ⏸ **T308** · Google Business Profile — depends on C08 (Google account ownership)
- [ ] ⏸ **T309** · Search Console + sitemap submission + GA4 — depends on C08
- [ ] ⏸ **T310** · Social `sameAs` URLs — depends on C09
- [ ] ⏸ **T315** · Logo wall permission audit — depends on C07
