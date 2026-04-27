# Todo: Sprint 05 — SEO unblock + filename rename

Status legend: ✓ done · → in progress · · backlog · ↷ stretch · ⏸ blocked

Uses the three-bucket planning model from `dev-workflow.md` Phase 2.
**Committed** rows block the release gate. **Stretch** and **Blocked** rows do not.

---

## Committed (must finish to release)

### Track A — Filename hygiene (~45 min · mechanical)

- [x] ✓ **T501** · `refactor(sprint-05/T501): rename layout components to kebab-case` — 4 files renamed
- [x] ✓ **T502** · `refactor(sprint-05/T502): rename section components to kebab-case` — 8 files renamed
- [x] ✓ **T503** · `refactor(sprint-05/T503): rename ui components to kebab-case + enforce via Biome` — 7 files + `lint/style/useFilenamingConvention` rule active

### Track B — SEO unblock (~3h · sequential)

- [x] ✓ **T504** · `feat(sprint-05/T504): typed business config — single source of truth` at `src/content/shared/business.ts`
- [x] ✓ **T505** · `feat(sprint-05/T505): sitewide + homepage metadata wiring` — replaces Create Next App defaults; `buildMetadata()` extended with `siteName`
- [x] ✓ **T506** · `feat(sprint-05/T506): static OG image fallback (1200×630 kraft card)` at `src/app/opengraph-image.tsx` + `twitter-image.tsx`
- [x] ✓ **T507** · `feat(sprint-05/T507): inject Organization + LocalBusiness JSON-LD sitewide` — pulls from `business.ts`, no `foundingDate`

**All committed rows ✓ — release gate would PASS on sprint status.** Final verification: `bun run build` ✓ · `bun run lint` ✓ (86 files clean) · `bun test src/` ✓ (37/37 pass).

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
