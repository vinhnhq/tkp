# Ideas Backlog

Drop zone for ad-hoc ideas that come up during discussions, client calls, or while working on something else. Most will never get picked up — that's fine. The purpose is to get them out of your head so you can focus on current work.

Entry format (keep each entry tight):

```
## <Short title>
**Source:** <when/where it came up>
**Idea:** <1-3 sentences — what and why>
**Effort guess:** <small / medium / large>
**Move to:** <which sprint or backlog if promoted, or "drop" if rejected>
```

Review cadence: scan this file at the start of every sprint. For each entry: promote, leave parked, or delete. If it's been parked for 3+ sprints untouched, delete by default — it will resurface if it still matters.

---

## Entries

## Rename PascalCase component files to kebab-case

**Source:** ADR-005 (2026-04-25) — decided kebab-case filenames are the project convention. This entry is the implementation chore.
**Idea:** Rename ~19 PascalCase files under `src/components/{layout,sections,ui}/` to kebab-case and fix the ~46 import sites. Turn on Biome's `useFilenamingConvention` rule in the same pass so regression is blocked by CI. Exported component symbols stay PascalCase — only filenames change.

Scope:
- Layout (4): `Footer.tsx`, `Header.tsx`, `LocaleSwitch.tsx`, `UnderConstruction.tsx`
- Sections (8): `ContactBlock.tsx`, `Hero.tsx`, `Industries.tsx`, `Manifesto.tsx`, `Materials.tsx`, `Process.tsx`, `ProductRange.tsx`, `Stats.tsx`
- UI (7): `Button.tsx`, `MagneticLink.tsx`, `MarqueeLogo.tsx`, `NumberCounter.tsx`, `PreviewSwitcher.tsx`, `RevealOnScroll.tsx`, `SmoothScroll.tsx`

Order (3 commits, clean blame):
1. `chore(rename): kebab-case layout components` — `git mv` + import fixup
2. `chore(rename): kebab-case section components`
3. `chore(rename): kebab-case ui components` + enable `useFilenamingConvention` in `biome.json`

macOS note: use two-step `git mv` (`Foo.tsx` → `foo.tmp.tsx` → `foo.tsx`) — the filesystem is case-insensitive by default.

Verify: `bun run build` + `bun test src/` + `bun run lint` green after each commit.

**Effort guess:** small (~45 min — mechanical)
**Move to:** ✓ promoted to Sprint 05 on 2026-04-27 (T501-T503). See [`../sprint-05-seo-unblock-and-rename/plan.md`](../sprint-05-seo-unblock-and-rename/plan.md). Actual outcome: 19 files renamed, 16 import sites updated, `useFilenamingConvention` rule active. Confirmed enforcement via deliberate probe.

---

## Team-mode workflow hardening (when 2+ contributors join)

**Source:** 2026-04-25 conversation about whether the current solo-shaped workflow scales to a 4-5 person team. Verdict: bones are right, three gaps need filling — but only when a real teammate arrives, not before.
**Idea:** When the second contributor joins, harden `dev` to act as a proper team trunk: feature branches PR into `dev`, CI gates each PR, branch protection enforces it. `main` stays release-only via the existing PR flow. The three-bucket sprint model (Committed / Stretch / Blocked) carries over unchanged.

Four changes, in order of importance:

1. **`.github/workflows/ci.yml`** — runs `bun run lint && bun run build && bun test src/ && bun run test` on every PR to `dev` and `main`. Blocks merge if red. Cheapest win, biggest impact. ~20 min.
2. **`dev-workflow.md` — add a "Team mode (2+ contributors)" section.** Spells out: feature-branch + PR-to-dev for daily work; direct commits to `dev` only allowed in solo mode (the current setup). Naming convention: `feat/T401-description`, `fix/...`, `chore/...`. ~30 min.
3. **Branch protection on `dev`** — require PR + 1 approval + CI green before merge. Configured via GitHub UI (needs Pro plan or public repo for free). 5 min once eligible.
4. **Update `release-check.sh` Gate 3** — also check `dev` is up to date with `origin/dev` (your local may be behind the team's). Add `git fetch origin && git rev-list HEAD..origin/dev --count` before the dirty check. 10 min.

**Effort guess:** medium (~1.5h total across 4 commits)
**Move to:** ✓ promoted to Sprint 04 on 2026-04-25 (user override of the gate). See [`../sprint-04-team-mode-hardening/plan.md`](../sprint-04-team-mode-hardening/plan.md).

---

## Pre-commit hook to block direct commits to `main`

**Source:** Sprint 04 retro (2026-04-26) captured a misfire — a `docs(retro)` commit landed on local `main` instead of `dev` because the branch model is documented but not enforced locally. Caught before push, recovered via cherry-pick → reset, but the failure mode is real and easy to repeat.
**Idea:** Add a `core.hooksPath`-managed pre-commit hook (or a husky-style equivalent) that aborts any commit when `git rev-parse --abbrev-ref HEAD == "main"`. Provide an env-var bypass (`ALLOW_MAIN_COMMIT=1`) for the rare release-flow case where the script itself needs to write to main. Prevents the same misfire we just hit, without changing the branch model itself.

Single-line check:

```sh
if [ "$(git rev-parse --abbrev-ref HEAD)" = "main" ] && [ "${ALLOW_MAIN_COMMIT:-0}" != "1" ]; then
  echo "✗ direct commits to main are blocked — switch to dev or set ALLOW_MAIN_COMMIT=1" >&2
  exit 1
fi
```

Drop into `.git-hooks/pre-commit`, set `git config core.hooksPath .git-hooks` once at setup. Document in dev-workflow.md.

**Effort guess:** small (~20 min including dev-workflow.md doc + a one-liner backlog scaffold step)
**Move to:** Sprint 05 or whenever next sprint touches the workflow tooling. Not urgent — the misfire recovered cleanly.

