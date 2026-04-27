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
