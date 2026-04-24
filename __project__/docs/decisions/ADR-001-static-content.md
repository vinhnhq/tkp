# ADR-001 — Static TS Content over Headless CMS

**Context:** TKP's content changes rarely (company info, products, process). Client doesn't need real-time editing.
**Decision:** Store all page content as typed TypeScript objects in src/content/.
**Alternatives:** Contentful, Sanity — rejected as unnecessary infrastructure for largely static content.
**Consequences:** Type-safe content, zero runtime CMS latency, but content updates require a code deploy.
