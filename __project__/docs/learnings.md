# Learnings — append on the fly

A continuous-improvement journal. Add entries the moment something surprises you (good or bad). Keep each entry tight — 1-3 sentences plus a **Promote?** verdict.

## Format

```
## YYYY-MM-DD · <short, specific title>

<1-3 sentences: what happened, what you learned. Concrete, not abstract.>

**Promote?** <yes / no / later> — <where it should go: ADR, dev-workflow.md, CLAUDE.md, code, or "drop">
```

## Promotion rules (review at start of every sprint)

| If an entry is | Action |
|----------------|--------|
| Marked **Promote? yes** + target exists | Apply it; mark entry **✓ promoted** with link |
| Marked **Promote? yes** but no target yet | Open ADR or doc draft; link from the entry |
| Marked **Promote? no** + >90 days old | Delete |
| Same lesson recurs 3+ times | Force promote — convention is missing |
| Marked **Promote? later** + no movement after 3 sprints | Delete by default |

The file is a buffer, not a destination. Without these rules it becomes a graveyard.

---

## Entries

## 2026-04-26 · CI catches drift solo mode tolerated

Sprint 04's first CI run on the v0.3.0 release PR failed on whitespace (4-space-vs-tab in `messages/*.json`, `package.json`, `tsconfig.json`) and on Tailwind v4's `@theme` directive being unparseable by Biome 2.4's CSS parser. Solo mode never ran lint at PR-time; CI does on every PR. Pre-existing drift sat dormant for ~12 commits before surfacing.

**Promote?** ✓ promoted — added `*.css` and `.claude/` excludes to `biome.json` in commit `e2efbea` and to `templates/nextjs/biome.json` in the @vinhnnn/dev-workflow package so future projects ship with them pre-set.

## 2026-04-25 · `git pull` on dev failed silently for lack of upstream tracking

Local `dev` branch was created without `-u` on first push, so `git pull` had no tracking ref to use and bailed with `"There is no tracking information for the current branch"`. Solved with `git branch --set-upstream-to=origin/dev dev`. Common trap on any branch you create yourself rather than via `git clone`.

**Promote?** later — worth a "common gotchas" entry in `dev-workflow-nextjs.md` (or core if recognised as universal). One paragraph max.

## 2026-04-25 · Three-bucket sprint model passes the gate cleanly

Sprint 04 went into the release gate with 0 `· backlog` rows because every non-committed task was honestly bucketed as `↷ stretch` or `⏸ blocked`. No bypass needed, no over-committing pretense. The model's value is forcing planning honesty up front so the gate stays meaningful.

**Promote?** no — model is already enshrined in `dev-workflow.md` Phase 2. This entry validates it; no change needed.

## 2026-04-26 · "Build → use → extract → distribute" earned the workflow's trust

The dev-workflow conventions were invented on TKP (Sprint 03), exercised across two real releases (v0.2.0, v0.3.0), then extracted as `@vinhnnn/dev-workflow` for distribution. The package didn't ship until the conventions had real production miles. Reverse order — packaging an unproven workflow — would have been theatre.

**Promote?** later — could be a small note in `@vinhnnn/dev-workflow`'s README under "Why this exists." Not urgent.

## 2026-04-27 · Parallel worktree agents collapsed a half-day sprint into ~30 min wall-clock

Sprint 05's seven tasks (rename chain T501-T503 + SEO chain T504-T507) ran as two background `isolation: "worktree"` agents in parallel. Track A: 19 file renames + 16 import sites. Track B: typed business config + sitewide metadata + OG image + JSON-LD. Cherry-pick merge produced exactly one conflict on `src/app/[locale]/page.tsx` (A's import path vs B's `generateMetadata` block, disjoint regions) — manual fix took ~30 seconds.

**Promote?** later — pattern worth a one-paragraph entry in `dev-workflow.md` Phase 4 ("when to dispatch parallel agents, what to do beforehand") if it gets used a second time. One data point isn't yet a convention.

## 2026-04-27 · Agent worktrees forked from `main`, not current `dev` HEAD

Both Sprint 05 agents' worktrees anchored to `f863865` (Merge PR #2 on `main`) instead of dev's tip. Track A worked because the dispatch prompt inlined the full task spec; Track B self-rescued with a `git merge dev` as its first action. Default-to-main is non-obvious — anyone repeating the pattern will hit it once and waste time wondering why the agent can't see recent commits.

**Promote?** yes — short note in `dev-workflow.md` under "dispatching parallel agents" (or in CLAUDE.md global guidance). Two reliable mitigations: (a) inline the task spec in the prompt as belt-and-suspenders, (b) tell the agent to `git merge dev` as its first action.

## 2026-04-27 · `satori` does not accept WOFF2

T506's first build of the `next/og` runtime renderer failed with `Unsupported OpenType signature wOF2`. Google Fonts serves WOFF2 by default to modern user agents. Workaround: hit the legacy CSS endpoint (`fonts.googleapis.com/css?...`) with an old `User-Agent` so Google serves WOFF instead. Falls back cleanly to satori's built-in sans-serif if any fetch fails (so the OG card always renders).

**Promote?** later — worth a comment block above the font-loading code in `src/app/opengraph-image.tsx` so the next person doesn't unwind the workaround. Not a project-wide convention yet.

## 2026-04-27 · Pre-defined retro template paid off at sprint close

Sprint 05's retro was filed as a placeholder template at sprint kickoff (sections + `_TBD_` markers, no content). Closing out the sprint became "replace placeholders with real outcomes" rather than "design retro structure from scratch under deadline pressure." Cost ~10 minutes at kickoff, saved at least that much at close.

**Promote?** yes — small change to `dev-workflow.md` Phase 2 (sprint-folder scaffold): the standard sprint folder should ship `plan.md` + `todo.md` + a templated `retro.md` from day one, not just the first two.
