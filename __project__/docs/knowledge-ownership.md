# Knowledge Ownership

Who drove what decision and why — so returning after a long break, you can tell "this was my call" vs "Claude's best guess" and know which decisions to trust vs re-examine.

Owner: `me` · `Claude` · `collab`

---

## Sprint 01 — Scaffolding

| Decision | What was chosen | Owner | Reasoning |
|----------|----------------|-------|-----------|
| Package manager | bun | me | Specified in dev-workflow.md |
| Lint + format | Biome | me | Specified in dev-workflow.md |
| Test runner | Playwright, mobile-only (iPhone 14 + SE) | me | Specified in dev-workflow.md |
| i18n approach | next-intl v4 with localized pathnames | me | Specified in brief.md |
| Middleware → rewrites | Replaced Edge middleware with next.config.ts rewrites + redirects | me | Simpler runtime, no locale detection from headers (root always → /vi) |
| Content split | messages/*.json for UI strings, src/content/*.ts for page content | me | Specified in brief.md — keeps translator scope clear |
| Folder structure | src/app/[locale]/, components/{layout,sections,ui}, content/{vi,en,zh} | Claude | Standard next-intl + Next.js App Router convention |
| Tailwind tokens | @theme in globals.css (kraft palette, paper/ink/accent) | me | Specified in brief.md §9 |
| Git branch model | main (release only) + dev (all work) | me | Specified in dev-workflow.md |
| Release gate | scripts/release-check.sh, 5-gate sequential checks | me | Specified in dev-workflow.md |

---

<!-- Copy this block for each new sprint -->
<!--
## Sprint NN — Name

| Decision | What was chosen | Owner | Reasoning |
|----------|----------------|-------|-----------|
|  |  |  |  |
-->
