# Plan: Sprint 04 — Team-mode workflow hardening

## Context

Today's session evaluated whether the current solo-shaped workflow scales to a 4-5 person team. Verdict: bones are right, three gaps need filling. We logged the work as a backlog entry (`backlog/ideas.md`) explicitly gated on "pick up when a second contributor is genuinely joining — not earlier." The user has chosen to promote this work now, accepting the override of that gate.

This sprint converts the workflow from solo-mode to team-capable without losing solo-mode ergonomics. Solo mode remains the default path; team mode becomes the opt-in path.

Note: Sprint 04 was previously earmarked for product detail pages. Those move to **Sprint 05**.

---

## Out of scope

- **Branch protection rules on `dev`** — requires GitHub Pro plan or public repo. Captured as a manual checklist in T403's docs section so it activates the moment the repo becomes eligible. No script or workflow change needed.
- **Auto-merge / draft PR / merge queue setup** — premature for a not-yet-existing team.
- **Playwright in CI on every PR** — too slow (~90s) for the rapid PR cadence trunk-based teams need. Run lint/build/unit-tests on every PR; Playwright only on PRs targeting `main`.

---

## Tasks

### T401 — Add CI workflow to GitHub Actions

**Files:** `.github/workflows/ci.yml` (new)
**Change:** GitHub Actions workflow that runs lint + build + unit tests on every PR to `dev` and `main`. Uses `oven-sh/setup-bun@v2`. Job has a descriptive name visible in PR check status.

**Acceptance:**
- File exists, valid YAML, parsed cleanly by GitHub Actions.
- Triggers on `pull_request` targeting `dev` or `main`.
- Steps run in this order, fail-fast: `bun install --frozen-lockfile` → `bun run lint` → `bun run build` → `bun test src/`.
- Playwright (`bun run test`) runs only on PRs targeting `main`, gated behind a separate job `e2e:` to keep the fast path fast.
- Job appears as a check on the PR with a green/red status.

**Verification:**
- After commit: open a draft PR (`gh pr create --draft --base dev --head <test-branch>`) and observe the CI run land. Confirm green. Close the draft PR.

**Effort:** ~25 min

---

### T402 — Add origin/dev sync check to release-check.sh Gate 3

**Files:** `scripts/release-check.sh`
**Change:** Detect when local `dev` is behind `origin/dev` (the team has pushed work the local clone hasn't pulled). Fail Gate 3 with an actionable message before any push or PR creation.

**Acceptance:**
- Script runs `git fetch origin` once, near the top of the gates (or just before Gate 3).
- If `git rev-list HEAD..origin/dev --count` > 0 → Gate 3 fails with: `"FAIL: local dev is behind origin/dev by N commits — pull first."`
- The existing `git status --porcelain` dirty-check still runs and still works.
- `FORCE_PASS=1` bypasses the new check (consistent with other gates).

**Verification:**
- Simulate behind state: `git reset --hard HEAD~1` locally (after fetching), then run the gate, confirm fail message.
- `git pull origin dev` to recover, run gate, confirm pass.

**Effort:** ~15 min

---

### T403 — Add "Team mode (2+ contributors)" section to dev-workflow.md

**Files:** `dev-workflow.md`
**Change:** Document team-mode as opt-in. Solo mode (current) stays the default and the documented path. Team mode adds: feature-branch convention, PR-to-dev daily, CI gate, branch-protection setup checklist.

**Acceptance:**
- New section "Team mode (when 2+ contributors)" added under Phase 3 (Implement).
- Documents: feature-branch naming (`feat/T401-description`, `fix/...`, `chore/...`); daily flow (branch off `dev` → push → PR to `dev` → review + CI green → merge with merge-commit for clean releases or rebase for clean linear history); reference to T401 (CI) and T402 (sync gate).
- Phase 6 release section updated to call out the new Gate 3 sync check.
- "Branch protection setup checklist" appended — manual UI steps to enable when the repo gains eligibility (GitHub Pro plan or public). No automation, just a checklist someone can follow.
- Solo mode preserved verbatim as the default; team-mode is described as a switch you flip when team size > 1.

**Verification:**
- Read the section cold. A future-self with no context should be able to follow it without re-reading the rest of the doc.
- All cross-references (T401, T402, Gate 3) point at things that actually exist post-T401/T402.

**Effort:** ~30 min

---

### T404 (deferred) — Branch protection on dev

**Status:** ⏸ blocked
**Reason:** GitHub Pro plan or public repo required. Free private plan refuses the API call (verified earlier this session).
**Captured by:** the manual checklist in T403's docs section.
**Action when unblocked:** open repo settings → Branches → Add rule for `dev` → Require PR + 1 approval + CI status check + linear history.

No work this sprint.

---

## Dependency graph

```
T401 (CI workflow)        ─┐
                            ├─→  T403 (docs reference both)  ─→  release v0.3.0
T402 (sync gate in script) ─┘
```

T401 and T402 are independent — can be done in either order or in parallel.
T403 depends on both being done so docs reference real artifacts.
T404 is a deferred manual step, not in this sprint's scope.

## Phase checkpoints

- **After T401:** open a draft PR to confirm CI runs and status appears. Do NOT proceed if CI is red — fix before T402.
- **After T402:** test the gate in both states (behind / current). Do NOT proceed without verifying the failure path.
- **After T403:** read the new section cold. If you find yourself looking up T401/T402 elsewhere in the doc to understand it, the section is too thin — fix before release.
- **Sprint exit:** all three tasks `✓ done`, all green checks, run `release-check.sh` for v0.3.0.

## Three-bucket assignment

- **Committed:** T401, T402, T403 — promised this sprint, all gate the release.
- **Stretch:** none — this is a focused sprint.
- **Blocked:** T404 — no work this sprint, awaiting plan eligibility.
