# Todo: Sprint 03 — SEO & Marketing Foundation

Status legend: `·` backlog · `→` in progress · `✓` done · `⏸` blocked

---

## Ready to pick up now (no blockers, no theme dependency)

### Track A — Code (~half day focused work)

- [ ] **T301** · `buildMetadata()` helper in `src/lib/seo.ts` · ~1h
- [ ] **T303** · `src/app/sitemap.ts` skeleton (locale × route combos + hreflang) · ~30min
- [ ] **T304** · `src/app/robots.ts` (prod allow, preview disallow via `VERCEL_ENV`) · ~15min
- [ ] **T305a** · JSON-LD type builders in `src/lib/seo/schema.ts` · ~1h
- [ ] **T306 (audit only)** · Crawl old sitemap, list every URL, map to new paths. Wiring into `next.config.ts` can wait · ~1h

### Track C — Docs (~2-3h)

- [ ] **T311** · VN keyword research doc → `__project__/docs/seo/keywords.md` · ~2h
- [ ] **T313** · Refine pillar topic plan → `__project__/docs/seo/content-plan.md` · ~1h
- [ ] **T314** · Blog architecture decision → `__project__/docs/seo/blog-architecture.md` · ~30min

---

## Blocked on client input

Tracked in [`../backlog/client-waiting.md`](../backlog/client-waiting.md).

- [ ] ⏸ **T302** · Per-page metadata wiring — final titles depend on C17 (founding year) + theme lock (Sprint 02 T003)
- [ ] ⏸ **T305b** · JSON-LD data wiring — needs C01, C02, C03, C17, C18, C19
- [ ] ⏸ **T306 (wiring)** · 301 redirect rules in `next.config.ts` — depends on audit (ready) + final page routes
- [ ] ⏸ **T307** · Image alt text audit — depends on Sprint 02 T003 theme selection and final imagery
- [ ] ⏸ **T308** · Google Business Profile — needs C08 (Google account ownership)
- [ ] ⏸ **T309** · Search Console + sitemap submission + GA4 — needs C08
- [ ] ⏸ **T310** · Social `sameAs` URLs — needs C09
- [ ] ⏸ **T315** · Logo wall permission audit — needs C07
- [ ] ⏸ **T316** · Product-page trust-signal copy — deferred to Sprint 04 (pages don't exist yet)

---

## Done

- [x] ✓ **T312** · ADR-004 — original content over scraped blog
