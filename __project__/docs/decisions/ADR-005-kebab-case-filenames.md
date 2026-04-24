# ADR-005 — kebab-case filenames for all source files

**Context:** The codebase currently mixes two filename conventions. Route files, content modules, and library files use kebab-case (`legacy-url-audit.md`, `seo.ts`, `products.ts`). React component files under `src/components/` use PascalCase matching the exported symbol (`Header.tsx`, `MagneticLink.tsx`, `RevealOnScroll.tsx`). This split is a common React default but creates friction: grep and tab-completion behave differently per directory, tooling like Biome's `useFilenamingConvention` cannot be enabled globally, and it obscures the fact that a filename and its exported symbol are different things with different audiences.

**Decision:** All TypeScript and Markdown source files use kebab-case. Filenames are `xxx-yyy-zzz.tsx`. Exported symbols (components, types, interfaces, enums) keep their natural casing — React components stay PascalCase, hooks stay camelCase. Only the filename changes.

```
// before
src/components/ui/MagneticLink.tsx   →  export function MagneticLink()
src/components/sections/Hero.tsx     →  export function Hero()

// after
src/components/ui/magnetic-link.tsx  →  export function MagneticLink()
src/components/sections/hero.tsx     →  export function Hero()
```

**Exceptions:**
- Next.js App Router special files: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`, `template.tsx`, `default.tsx`, `middleware.ts`, `sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`. Next.js reserves these names.
- Dynamic route segments: `[slug]`, `[...slug]`, `[[...slug]]`. Next.js syntax.
- Private folder prefix: `_components/`, `_lib/`. Next.js syntax.
- Third-party configs that dictate their own names: `next.config.ts`, `tailwind.config.ts`, `playwright.config.ts`, `biome.json`, `tsconfig.json`, etc.
- ADRs under `__project__/docs/decisions/` keep the `ADR-NNN-kebab-subject.md` pattern — the `ADR-` prefix is an intentional archival convention.

**Alternatives:**
- *PascalCase for component files, kebab-case elsewhere* (the React default): rejected. The split cannot be mechanically enforced, encourages drift, and creates ambiguity for non-component TSX files (e.g. test files, story files, route-adjacent client wrappers).
- *camelCase everywhere* (`magneticLink.tsx`): rejected. Loses the visual word-break that kebab provides in narrow editor tabs and file tree panels, and collides less cleanly with URL paths and asset filenames already in kebab-case.
- *snake_case everywhere* (`magnetic_link.tsx`): rejected. Foreign to the JS/TS ecosystem; would fight Biome defaults and community tooling.

**Consequences:**
- A one-time rename pass across `src/components/` — ~19 files, ~46 import sites. Tracked as a standalone backlog chore, not bundled into a feature sprint. Git history stays traceable via `git log --follow`.
- `useFilenamingConvention` in Biome can be enabled with `"filenameCases": ["kebab-case"]` to prevent regression. CI catches future PascalCase filenames without relying on docs or reviewer memory.
- macOS's case-insensitive default filesystem requires a two-step `git mv` for each rename (`Header.tsx` → `header.tmp.tsx` → `header.tsx`). Documented in the rename chore.
- Component *identity* is unchanged — every `export function Header()` still reads as `<Header />` in JSX. Consumers see no API change, only import-path case changes.
- This decision applies to the current project. The convention is also written into `dev-workflow-nextjs.md` so future Next.js projects adopting that preset inherit it.
