# Retro — Sprint 05: SEO unblock + filename rename

**Released:** v0.4.0 on 2026-04-27
**Duration:** ~half a day (most of it spent in two parallel agent worktrees, ~30 min wall-clock for the agent work itself)
**Released via:** PR #3 (the third exercise of the release-via-PR flow established in Sprint 04)

## What we shipped

Seven Committed tasks landed in two parallel-agent worktrees, then cherry-picked onto `dev` in linear order:

- **T501** — `refactor(sprint-05/T501): rename layout components to kebab-case`. 4 files: `Footer`, `Header`, `LocaleSwitch`, `UnderConstruction`.
- **T502** — `refactor(sprint-05/T502): rename section components to kebab-case`. 8 files: `ContactBlock`, `Hero`, `Industries`, `Manifesto`, `Materials`, `Process`, `ProductRange`, `Stats`.
- **T503** — `refactor(sprint-05/T503): rename ui components to kebab-case + enforce via Biome`. 7 files plus `lint/style/useFilenamingConvention` rule active for `src/**`. The rule fires on a deliberate `TestRule.tsx` probe — confirmed not a no-op.
- **T504** — `feat(sprint-05/T504): typed business config — single source of truth`. New `src/content/shared/business.ts` with legal name, operational + MST addresses, phones, email, taxCode, neutral 20+ years phrasing per locale. Tests confirm shape and absence of `foundingDate` (per C17).
- **T505** — `feat(sprint-05/T505): sitewide + homepage metadata wiring`. Replaces Create Next App defaults with per-locale strings from `og-cards.md`. Extends `buildMetadata()` with optional `siteName` and `title: { absolute }` wrap to prevent double-branding.
- **T506** — `feat(sprint-05/T506): static OG image fallback (1200×630 kraft card)`. `next/og` satori renderer at `app/opengraph-image.tsx`; `twitter-image.tsx` re-exports default. Be Vietnam Pro 700 via Google Fonts legacy CSS endpoint (forced WOFF — see "What didn't").
- **T507** — `feat(sprint-05/T507): inject Organization + LocalBusiness JSON-LD sitewide`. Pulls every value from `business.ts`. Two `<script type="application/ld+json">` blocks per page across all three locales. ContactPoint includes hotline + landline + canonical email.

Final verification on `dev`: `bun run build` ✓ · `bun run lint` ✓ (86 files clean) · `bun test src/` ✓ (37/37 pass).

## What worked

- **Parallel worktree agent dispatch.** Two agents in isolated `git worktree`s — Track A (rename) and Track B (SEO) — executed concurrently in roughly 30 minutes wall-clock combined. Doing the same work serially with verification gates would have been 3.5+ hours. The pattern: pre-flight commits → dispatch in background → cherry-pick the agent branches onto `dev`.
- **Track B self-merged `dev` mid-sprint.** Without explicit instruction, the SEO agent noticed its worktree didn't have the sprint-05 plan or the confirmed business facts in `__project__/brief.md`, and merged `dev` as its first action. The cherry-pick later naturally skipped that merge commit. Smart fallback that compensated for an unexpected base point (see "What didn't").
- **Cross-track conflict surface stayed tiny.** Both agents touched `src/app/[locale]/page.tsx` — A for an import path, B for a `generateMetadata` block — but on disjoint line ranges. Three-way merge auto-resolved most of it; the one residual conflict took ~30 seconds to fix manually.
- **Three-bucket model held up under feature pressure.** Seven Committed rows shipped, three Stretch rows carried into Sprint 06, six Blocked rows still cleanly attributed to client-waiting C-questions. Same release-gate cleanliness as Sprint 04.
- **Inlined task spec as belt-and-suspenders.** When Track A's worktree turned out not to have the Sprint 05 plan file, the agent fell back on the prompt's inlined task list + ADR-005, which were sufficient. Documenting tasks in two places (plan.md AND the dispatch prompt) cost almost nothing and saved the run.

## What didn't

- **Worktree base forked from `main`, not `dev`.** Both `isolation: "worktree"` agents anchored to `f863865` (Merge PR #2 on main) instead of current dev HEAD `0b1667a`. Track A worked because the prompt inlined the spec; Track B saved itself with a `git merge dev`. Surprising default — worth investigating whether the harness picks main or last-merge-base, and whether to instruct agents to "merge dev first" as a routine prelude.
- **`satori` does not accept WOFF2.** T506's first build crashed with `Unsupported OpenType signature wOF2` because Google Fonts serves WOFF2 to modern UAs by default. Workaround: hit the legacy CSS endpoint with an old `User-Agent` to coerce WOFF. Falls back to satori's built-in sans-serif if any font fetch fails. Cosmetic-only on failure but worth a comment block in the file.
- **Agent commit prefixes drifted from convention.** Track A used `refactor(sprint-05/T50X)` while project convention leans toward `chore(rename)` for mechanical filename moves. Functional but inconsistent. Tighter commit-format instruction in the next dispatch prompt could prevent it.
- **Vercel preview unfurl smoke test deferred.** Local `bun run dev` confirmed metadata + OG image render correctly, but a real Telegram/Slack unfurl needs a public URL. Push to `origin/dev` is the test; planned for after the release-prep commits.
- **`<html lang="en">` is still hardcoded** in the root layout even though VI is the default locale. T505 left it untouched (out of surgical scope — fixing it requires moving `<html>` rendering into `[locale]/layout.tsx`, which is non-trivial App Router work). Carry to Sprint 06.

## Conventions changed

- `biome.json` now enforces `lint/style/useFilenamingConvention: kebab-case` for `src/**`. Adding any PascalCase or snake_case file in `src/components/` (or anywhere under `src/`) will fail CI.
- `buildMetadata()` API extended: optional `siteName` parameter, titles wrapped in `{ absolute }`. Pre-existing test updated to match. Prevents `<title>` double-branding when `title.template` is `"%s · TKP Carton"` and the page already includes the brand.
- Default `ogImage` URL in `src/lib/seo.ts` changed from `/og/default.jpg` (which never existed) to `/opengraph-image` (the runtime satori renderer). Strict improvement.
- `foundingDate` is **deliberately omitted** from JSON-LD until C17 confirms a specific year. Marketing copy and structured data both use neutral 20+ years phrasing only.

## Conventions added

- **`src/content/shared/business.ts` is the single source of truth for company facts.** Legal name, operational + MST addresses, phones, email, taxCode, per-locale experience phrasing. Never duplicate; metadata, JSON-LD, OG image, and any future contact-form recipient all import from this file.
- **Sprint 05 retro template was pre-defined at sprint start** (placeholders, not blank sections). Practical: the close-out becomes "fill placeholders" rather than "design retro structure under deadline pressure." Worth replicating going forward.

## Carried over to next sprint

- **Sprint 06 candidate: dynamic `<html lang>` per locale.** Move `<html>` rendering from root layout into `[locale]/layout.tsx`. Non-trivial App Router restructuring; flagged by T505.
- **Sprint 06 candidate: per-page metadata for product / about / contact pages.** Those routes don't exist yet; lands alongside the page implementations.
- **Sprint 06 candidate: per-locale dynamic OG image** at `app/[locale]/opengraph-image.tsx`. Static fallback resolves the screenshot pain for now.
- **Stretch carryovers from Sprint 03**: T311 (keyword research), T313 (content plan pillars), T314 (blog architecture decision). Not blocked, just out of committed scope twice running.
- **Still client-blocked, no movement**: T306 (legacy redirects — needs product pages), T307 (alt text — theme + imagery), T308 (GBP — C08), T309 (GSC + GA4 — C08), T310 (`sameAs` URLs — C09), T315 (logo wall permission — C07).
- **Backlog idea still parked**: pre-commit hook to block direct `main` commits (`backlog/ideas.md`). Picked up if a future sprint touches workflow tooling.

## Meta

First sprint to use parallel worktree agents. The cycle was: pre-flight commits → 2 background agents in isolation → cherry-pick onto dev → one tiny conflict resolution → ship. Wall-clock for the actual code-change work was ~30 min, not the 3.5+ hours a serial run with verification gates would have cost. The biggest *risk* turned out not to be merge conflicts (auto-resolved minus one file) but worktree base divergence — and that surfaced two reusable mitigations: inline the task spec in the dispatch prompt, and tell the agent to `git merge dev` as its first action. If parallel-worktree dispatch becomes a regular pattern, both belong in `dev-workflow.md` Phase 4.
