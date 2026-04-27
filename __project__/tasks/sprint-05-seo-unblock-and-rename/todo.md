# Todo: Sprint 05 — SEO unblock + filename rename

Status legend: ✓ done · → in progress · · backlog · ↷ stretch · ⏸ blocked

Uses the three-bucket planning model from `dev-workflow.md` Phase 2.
**Committed** rows block the release gate. **Stretch** and **Blocked** rows do not.

---

## Committed (must finish to release)

### Track A — Filename hygiene (~45 min · mechanical)

- [ ] · **T501** · `chore(rename): kebab-case layout components` — 4 files in `src/components/layout/` · ~10min
- [ ] · **T502** · `chore(rename): kebab-case section components` — 8 files in `src/components/sections/` · ~15min
- [ ] · **T503** · `chore(rename): kebab-case ui components + enable filenaming rule` — 7 files in `src/components/ui/` + `biome.json` · ~20min

### Track B — SEO unblock (~3h · sequential)

- [ ] · **T504** · Typed business config in `src/content/shared/business.ts` (sources from `brief.md` §3) · ~30min
- [ ] · **T505** · Sitewide + homepage metadata wiring (replace Create Next App defaults) · ~45min
- [ ] · **T506** · Static OG image fallback at `src/app/opengraph-image.tsx` + `twitter-image.tsx` · ~1h
- [ ] · **T507** · JSON-LD data wiring — `Organization` + `LocalBusiness` + `ContactPoint` injected sitewide · ~45min

---

## Stretch (pick up if capacity allows · otherwise rolls to Sprint 06)

Carryover from Sprint 03's stretch bucket — no client blocker, just out of committed scope.

- [ ] ↷ **T311** · VN keyword research doc → `__project__/docs/seo/keywords.md` · ~2h
- [ ] ↷ **T313** · Refine pillar topic plan → `__project__/docs/seo/content-plan.md` · ~1h
- [ ] ↷ **T314** · Blog architecture decision → `__project__/docs/seo/blog-architecture.md` · ~30min

---

## Blocked (waiting on external dependency)

Cross-cutting dependencies tracked in [`../backlog/client-waiting.md`](../backlog/client-waiting.md).

- [ ] ⏸ **T306 (wiring)** · Legacy 301 redirects in `next.config.ts` — depends on Sprint 06 product/industry pages
- [ ] ⏸ **T307** · Image alt text audit — depends on Sprint 02 T003 theme selection + final imagery
- [ ] ⏸ **T308** · Google Business Profile created + verified — depends on **C08**
- [ ] ⏸ **T309** · Search Console + sitemap submission + GA4 — depends on **C08**
- [ ] ⏸ **T310** · Social `sameAs` URLs — depends on **C09**
- [ ] ⏸ **T315** · Logo wall permission + alt-text audit — depends on **C07**
- [ ] ⏸ **T404 (carry)** · Branch protection on `dev` — depends on GitHub Pro / public repo (Sprint 04 carryover)
