# ADR-003 — next.config.ts Rewrites over Next.js Middleware for i18n

**Context:** next-intl's default approach uses Edge middleware to rewrite localized slugs (e.g. `/vi/san-pham` → `/vi/products`) and detect locale from Accept-Language headers. Edge middleware adds latency budget and a separate runtime to reason about.

**Decision:** Replace `middleware.ts` with `rewrites` + `redirects` in `next.config.ts` via `createNextIntlPlugin`. All localized slug rewrites are declared explicitly as static rules.

**Alternatives:** Keep Edge middleware — rejected to reduce runtime complexity and avoid Edge-specific constraints.

**Consequences:** No automatic locale detection from browser headers (root `/` always redirects to `/vi`). All localized routes must be explicitly declared in `next.config.ts` rewrites when new pages are added.
