# Retro — Sprint 04: Team-mode workflow hardening

**Released:** v0.3.0 on 2026-04-26
**Duration:** ~half a day
**Released via:** PR #2 (the second exercise of the new release-via-PR flow)

## What we shipped

Three Committed tasks plus one Blocked:
- **T401** — `.github/workflows/ci.yml` (lint + build + unit tests on PRs to dev/main; Playwright on PRs to main only)
- **T402** — `release-check.sh` Gate 3: origin/dev sync check (existing gates renumbered to 4-6)
- **T403** — `dev-workflow.md` Phase 3 "Team mode (2+ contributors)" section + Phase 6 gate spec update + branch-protection setup checklist
- **T404** — branch protection on `dev` — ⏸ blocked (free private repo plan refuses)

## What worked

- **CI caught a real bug on its very first run.** The v0.3.0 release PR went red on whitespace formatting + Tailwind v4 vs Biome 2.4 CSS parser conflict. Pre-existing drift solo mode never noticed because no one ran `bun run lint` at PR-time before. Inaugural CI gate did its job.
- **Three-bucket model made the release gate trivial.** Sprint 04 entered Phase 6 with 0 `· backlog` rows because every non-committed task was honestly bucketed as `↷ stretch` or `⏸ blocked`. No bypass, no over-committing pretense.
- **Push-back-then-execute protocol worked end to end.** Wrote a backlog entry that said "wait until 2+ contributors", got asked to build it anyway, pushed back with the gate's own rationale, user overrode with full information, work landed. The protocol is exactly that — surface the tradeoff, accept the override. Both sides did their part.
- **Atomic commit discipline survived a 40+ commit session.** `git log --oneline main..` reads like a changelog. Every commit traceable to a task ID or doc/plan/chore scope.

## What didn't

- **Pre-existing biome violations sat dormant for 12+ commits.** Should have run `bun run lint` once at v0.2.0 release time to flush format drift before adding CI. Ate ~10 minutes of debugging on the v0.3.0 PR that could have been prevented.
- **Gate renumbering mid-script was fiddly.** Inserting Gate 3 (sync) shifted dirty/commits/list to 4/5/6 in both the script and `dev-workflow.md`. Worked, but the kind of change a one-line "all gates accounted for" assertion could have caught earlier.
- **Misfire: committed directly to `main` for the retro file** (recovered via cherry-pick → reset). The branch-model rule is in `dev-workflow.md` but not enforced locally. Worth a pre-commit hook in a future sprint.

## Conventions changed

- `*.css` excluded from Biome (Tailwind v4 owns its own CSS). Both in TKP's `biome.json` and in `@vinhnnn/dev-workflow`'s `templates/nextjs/biome.json`.
- `.claude/` excluded from Biome (gitignored, fails to parse, keeps local-vs-CI lint output consistent).
- Phase 6 release gate: Gate 3 = sync check (new); Gates 4-6 are the renumbered dirty / commits-ahead / commit-list.

## Conventions added

None new beyond the changes above. T403's "Team mode" section formalized the team-mode operational pattern but didn't change anything for solo mode (which stays the default).

## Carried over to next sprint

- **T404 — branch protection on `dev`.** Still ⏸ blocked. Activates the moment the repo gains GitHub Pro / public visibility / org-Team eligibility. Captured as a manual checklist in `dev-workflow.md` so it's one paste away.

## Meta

This sprint was built and shipped on the workflow being introduced in this same sprint — the new CI gate caught its first real bug on the release PR for itself. Validated the build → use → extract pattern: convention earned trust before being packaged into `@vinhnnn/dev-workflow` later in the same session.
