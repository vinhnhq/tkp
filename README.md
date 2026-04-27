# tkpcarton.com

Multilingual marketing site for **Tân Khánh Phong (TKP)** — a corrugated carton manufacturer in Ho Chi Minh City. Built with Next.js 15, Tailwind v4, next-intl, Framer Motion + GSAP, and Lenis.

Locales: Vietnamese (default) · English · Simplified Chinese, with localized pathnames per language.

## Quick start

```bash
bun install
bun run dev      # http://localhost:3000
```

Other commands:

| Command | Purpose |
|---------|---------|
| `bun run build` | Production build |
| `bun run start` | Run the production server locally |
| `bun run lint` | Biome check |
| `bun run format` | Biome format --write |
| `bun run test` | Playwright e2e tests |

## Project structure

```
src/
  app/[locale]/      Localized routes (vi, en, zh)
  components/        layout · sections · ui
  content/{vi,en,zh} Typed page content per locale
  i18n/              next-intl routing + request config
  lib/               seo helpers, fonts
messages/{vi,en,zh}.json   Short UI strings
public/assets/             Semantically-named images
__project__/               Sprint tasks, ADRs, retros, marketing backlog
```

## Documentation

- [`__project__/brief.md`](__project__/brief.md) — full project spec: what we're building, business facts, page roadmap, launch checklist
- [`dev-workflow.md`](dev-workflow.md) — methodology: sprints, retros, three-bucket model, release gates
- [`dev-workflow-nextjs.md`](dev-workflow-nextjs.md) — Next.js layer of the workflow
- [`CLAUDE.md`](CLAUDE.md) — Claude Code conventions for this repo
- [`__project__/tasks/README.md`](__project__/tasks/README.md) — sprint task board

## License

Proprietary. © Tân Khánh Phong.
