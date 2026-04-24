# ADR-002 — Biome over ESLint + Prettier

**Context:** Dev workflow mandates Biome as the single lint+format tool.
**Decision:** Use @biomejs/biome for all linting and formatting.
**Alternatives:** ESLint + Prettier (create-next-app default) — rejected per project workflow spec.
**Consequences:** Single fast tool, no config conflicts between linter and formatter.
