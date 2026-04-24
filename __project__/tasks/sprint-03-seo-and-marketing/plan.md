# Plan: Sprint 03 — SEO & Marketing Foundation

## Context

Homepage theme selection is in flight with the client (Sprint 02 T003 awaiting sign-off). While we wait, we build the SEO + marketing foundation that does not depend on the chosen visual direction.

Current state:
- `src/lib/seo.ts` — empty stub (1 line).
- `src/app/layout.tsx` — still has default Next.js template metadata (`"Create Next App"`).
- No `sitemap.ts`, no `robots.ts`, no JSON-LD anywhere.
- No legacy-slug redirects for existing inbound SEO traffic.
- No Google Business Profile, Search Console, or analytics wired.

This sprint ships the technical SEO skeleton and sets up the content strategy decisions. No visual/theme changes.

Ordering principle: **technical foundation → off-site signals → content**. Technical SEO is cheap, reversible, and unblocks everything else. Content writing should wait until per-locale pages are final.

---

## Track A — Technical SEO skeleton

Everything in Track A can ship without theme sign-off. No visible UI changes, just head tags, structured data, and config.

### T301: `buildMetadata()` helper in `src/lib/seo.ts`

**Files:** `src/lib/seo.ts`
**Change:** Implement a single helper that every page uses for its metadata. Covers title template, description, canonical, `alternates.languages` (with `x-default → /vi`), OG and Twitter card tags, per-locale defaults.
**Acceptance:**
- `buildMetadata({ path, locale, titleKey, descriptionKey, ogImage? })` returns a valid `Metadata` object.
- Hreflang alternates correct for all three locales + `x-default`.
- Canonical URL absolute, environment-aware (`NEXT_PUBLIC_SITE_URL`).
- Unit-tested with sample inputs per locale.

### T302: Per-page metadata wiring

**Files:** `src/app/layout.tsx`, `src/app/[locale]/layout.tsx`, each `page.tsx` under `src/app/[locale]/`.
**Change:** Replace default `"Create Next App"` metadata. Each route calls `buildMetadata()` with its own title/description keys. Locale layout sets `<html lang={locale}>`.
**Acceptance:**
- No page ships default Next template strings.
- View-source on `/vi`, `/en`, `/zh` shows correct `<title>`, canonical, hreflang block.
- Homepage preview routes (`/homepage-preview/*`) excluded — they're temporary.

### T303: `sitemap.ts`

**Files:** `src/app/sitemap.ts`
**Change:** Emit all locale × route combinations. Each URL carries `<xhtml:link rel="alternate" hreflang>` for sibling locales. Product and industry pages enumerated explicitly (not dynamically fetched — content is static).
**Acceptance:**
- `/sitemap.xml` lists every locale × route pair.
- Each entry has `lastmod`, `changefreq`, `priority`.
- Validates against Google's Search Console sitemap tester.
- Excludes `/homepage-preview/*`.

### T304: `robots.ts`

**Files:** `src/app/robots.ts`
**Change:** Allow everything in production, disallow `/homepage-preview/*` always. Point to sitemap. Block all in preview deploys (guard via `VERCEL_ENV`).
**Acceptance:**
- `/robots.txt` resolves correctly on prod and preview.
- Preview deploys return `Disallow: /`.
- Sitemap URL present.

### T305a: JSON-LD type builders (scaffolding — ready to pick up)

**Files:** `src/lib/seo/schema.ts` (new).
**Change:** Typed TypeScript helpers for `Organization`, `LocalBusiness`, `BreadcrumbList`, `ContactPoint`, `Product`. Each builder takes typed input, returns a `Record<string, unknown>` ready for `JSON.stringify` → `<script type="application/ld+json">`. No data coupling yet — builders accept input, don't know company values.
**Acceptance:**
- All five builders exported with typed inputs.
- Unit tests with representative inputs confirm output shape matches Schema.org specs.
- Zero real company data in this module — test data only.

### T305b: JSON-LD data wiring + per-page injection

**Files:** `src/content/shared/business.ts` (typed config), sitewide layout, relevant page files.
**Change:** Populate a typed config with client-confirmed values (name, legal name, address, phones, `sameAs`, etc). Inject the right schema builder output per route.
**Acceptance:**
- Every public page has at least one JSON-LD block.
- Passes Google's Rich Results Test with zero errors.
- Phone numbers in E.164, `legalName` field matches tax registry.
- **Blocked on**: client-waiting C01 (email), C02 (phones), C03 (address), C17 (founding year), C18 (address reconciliation), C19 (legal name).

### T306: Legacy slug 301 redirects

**Files:** `next.config.ts`
**Change:** Redirect all live VN slugs from the current site to their `/vi/...` equivalents. Source list comes from `raw-assets/` scrape + `tkpcarton.com/sitemap.xml`.
**Acceptance:**
- Every URL currently indexed by Google has a 301 to a live page on the new site (or to the closest relevant page).
- No redirect chains (one hop max).
- Audit: crawl old sitemap, confirm every entry resolves with one 301.

### T307: Image alt text audit

**Files:** All components under `src/components/sections/` (homepage variants) + future product/industry pages.
**Change:** Every `<img>` or `next/image` has meaningful alt text in the active locale, not a filename. Alt text lives in `src/content/{vi,en,zh}/` so translators can edit it.
**Acceptance:**
- Zero images with empty or filename-based alt.
- Alt text length reasonable (5–15 words, describes what the image shows for the query).

---

## Track B — Off-site signals (client coordination, not code)

Highest ROI for a local B2B manufacturer. Mostly information-gathering from the client.

### T308: Google Business Profile

**Files:** `__project__/docs/external-accounts.md` (to be created — tracks credentials/ownership, not committed with secrets).
**Change:** Create or claim the GBP listing. Categories: "Corrugated box manufacturer" + "Packaging supplier". Fill address, phone, hours, website, photos.
**Acceptance:**
- Listing verified (postcard or phone).
- Contact info matches the JSON-LD `LocalBusiness` from T305 exactly (NAP consistency).
- At least 5 photos uploaded (factory exterior, production line, product shots).

### T309: Google Search Console + GA4

**Files:** `next.config.ts` (verification meta tag or DNS TXT) + `src/app/layout.tsx` (GA4 gtag).
**Change:** Verify domain ownership in GSC. Submit sitemap. Install GA4 with consent-aware loading (don't fire on preview deploys).
**Acceptance:**
- GSC shows "verified".
- Sitemap submitted and parsed with zero errors.
- GA4 realtime view shows traffic from a manual test visit.
- Preview deploys do not send GA events.

### T310: Social `sameAs` profiles

**Files:** `src/content/shared.ts` (or equivalent).
**Change:** Collect URLs for all TKP-controlled external profiles so they feed into JSON-LD `sameAs`: Facebook page, Zalo Official Account, any B2B directory listings, LinkedIn company page if any.
**Acceptance:**
- List collected and reviewed with client.
- URLs wired into `Organization` JSON-LD from T305.

---

## Track C — Content strategy

This track **does not write final copy yet**. It defines what we will write, in what order, and for what queries. Final copy waits until theme is locked so we write against real layout constraints.

### T311: Keyword research doc

**Files:** `__project__/docs/seo/keywords.md`
**Change:** VN primary (HCMC + export intents), EN secondary (export buyers), ZH tertiary (mainland buyers if confirmed in scope).
**Acceptance:**
- Per-page keyword map: home, product overview, each layer variant (3/5/7), each industry (5), process, about, contact.
- Each page has a primary query, 2-3 secondary queries, and one long-tail commercial query.
- Keywords validated against real search volume (Google Keyword Planner or Ahrefs free tools).

### T312: Content strategy decision (→ ADR-004)

**Files:** `__project__/docs/decisions/ADR-004-original-content-over-scraped-blog.md`
**Change:** Decision record for why we write original niche content rather than rewording scraped web articles. See ADR for full reasoning.
**Acceptance:** ADR accepted (this sprint ships it).

### T313: Blog pillar topics

**Files:** `__project__/docs/seo/content-plan.md`
**Change:** Define 5–8 original content pillars that only TKP can credibly write. Topics grounded in 29 years of real operating experience, not rewording generic packaging articles.

Proposed pillar topics (to validate with client):
1. Chọn carton 3 / 5 / 7 lớp cho từng loại hàng xuất khẩu
2. Bao bì carton cho thanh long / xoài / vú sữa xuất đi Nhật
3. Flexo vs in phun vs in lụa — chi phí và khi nào dùng cái nào
4. Tiêu chuẩn bao bì carton cho hàng điện tử (chống sốc, ESD)
5. Quy trình QC tại xưởng TKP — từ giấy Thái/Nhật/Đài đến thành phẩm
6. Bao bì carton cho mỹ phẩm — giữa thẩm mỹ và độ bền vận chuyển
7. Làm sao báo giá carton nhanh — checklist khách cần gửi gì
8. Tồn kho gấp và đơn lẻ nhỏ — khi nào TKP nhận, khi nào không

**Acceptance:**
- 5–8 topics written with: primary keyword, angle, word count target (800–1500), target audience (buyer persona).
- Publish order decided by: (a) commercial intent strength, (b) keyword difficulty, (c) uniqueness of TKP's angle.
- VN first. EN/ZH translations only if content performs (measure after 3 months in GSC).

### T314: Blog infrastructure decision

**Files:** `__project__/docs/seo/blog-architecture.md`
**Change:** Decide how blog routes under i18n: `/vi/tin-tuc/[slug]` + `/en/news/[slug]` + `/zh/新闻/[slug]`. MDX or TS objects? Tags? Author field? Publish date? Does the homepage surface latest posts or not?
**Acceptance:**
- Decision documented.
- Scope decided: MVP = list + detail, no tags/categories, no author page. Can expand later if the client actually writes volume.

---

## Track D — Trust signals (mostly overlaps with existing work)

### T315: Client logo marquee audit

**Files:** `src/components/sections/` (existing "Tự hào phục vụ" section from Sprint 02 T006).
**Change:** Confirm each logo on the wall is real, current, has written permission to display. Strongest B2B conversion signal — cannot be faked or stale.
**Acceptance:**
- Client confirms each logo is OK to use.
- Any logos without confirmation removed.
- Alt text on each logo is the real company name (helps brand-name searches).

### T316: Trust-signal copy on product pages

**Files:** deferred to Sprint 04 when product pages exist.
**Change:** On each product page: "since 1997", "ISO / FSC if applicable", factory size, monthly capacity, delivery radius. Real numbers.

---

## Out of scope this sprint

- Writing final blog post copy (wait until T311 + T313 locked, theme picked).
- Product detail page implementation (Sprint 04).
- Contact form backend (Sprint 04 — needs confirmed recipient email first; see `brief.md` §11 re: typo).
- Vietnamese diacritics SEO tests — do this in QA sprint.
- Paid ads / Google Ads strategy — separate conversation, different budget question.

---

## Dependencies

- **Client info needed**: correct contact email, confirmed phone numbers for schema markup, GBP category preference, social profile URLs, any certifications (ISO/FSC) to cite.
- **External accounts needed**: Google account for GBP + GSC + GA4 (ideally client-owned, we get collaborator access).
- **Does not block on**: theme selection from Sprint 02.

---

## Success metric (post-launch, not this sprint)

- Week 1: GSC shows all pages indexed across all three locales, zero hreflang errors.
- Month 1: Rich snippets appearing for product pages. Brand query ("tkp carton") returns the new site #1 with knowledge panel.
- Month 3: Non-brand queries ("thùng carton 5 lớp xuất khẩu TPHCM") ranking on page 1. Blog posts getting impressions (not necessarily clicks yet).
