# Todo: Sprint 04 — Team-mode workflow hardening

Status legend: ✓ done · → in progress · · backlog · ↷ stretch · ⏸ blocked

Three-bucket model from `dev-workflow.md` Phase 2. Committed rows block the release gate.

---

## Committed (must finish to release)

- [x] ✓ **T401** · `.github/workflows/ci.yml` — lint + build + unit tests on PRs to `dev` and `main`; Playwright on PRs to `main` only · ~25 min
- [x] ✓ **T402** · `scripts/release-check.sh` — Gate 3 sync check against `origin/dev` (existing gates renumbered) · ~15 min
- [x] ✓ **T403** · `dev-workflow.md` — added "Team mode (2+ contributors)" section + Phase 6 gate spec update + branch-protection setup checklist · ~30 min

All committed tasks done — release gate would PASS on sprint status.

## Blocked

- [ ] ⏸ **T404** · Branch protection rules on `dev` — needs GitHub Pro or public repo. Captured as a checklist in T403's docs; activates manually once eligible.

---

## Definition of done for this sprint

1. All three Committed tasks ✓
2. Draft PR confirms CI green (T401 verification)
3. Gate 3 fails on simulated behind-state, passes on current (T402 verification)
4. T403 doc section reads cleanly cold — no need to cross-reference
5. `release-check.sh` runs end-to-end without errors
6. PR opened to `main`, merged, v0.3.0 tagged
