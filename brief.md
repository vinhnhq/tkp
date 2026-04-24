# TKP Carton — Rebuild Brief

> Handoff doc for Claude Code. Project brief + roadmap for rebuilding **tkpcarton.com** (Tân Khánh Phong — carton packaging manufacturer, est. 1997, HCMC).

---

## 1. Project overview

Re-implement the existing site at <https://www.tkpcarton.com> with:

1. **Asset reuse** — scrape current site, organize, swap photos later when the client sends new ones.
2. **Minimal factory concept** — editorial/industrial design language, smooth scroll animations and transitions.
3. **SEO-first** — semantic HTML, proper metadata, JSON-LD, multilingual hreflang.

**Scope**: full site (not just landing).
**Timeline**: flexible.
**Deploy target**: decide later (likely Vercel).

---

## 2. Key decisions (locked)

| Decision       | Value                                                                  |
| -------------- | ---------------------------------------------------------------------- |
| Scope          | Full site                                                              |
| Languages      | VN (default), EN, CN                                                   |
| CN variant     | **Simplified (zh-CN)** unless client confirms HK/TW focus              |
| Photography    | Reuse existing assets for v1, swap in new photos later                 |
| CMS            | Static (no headless CMS). Content in typed TS files.                   |
| News section   | Skip unless client confirms it's active content                        |
| Framework      | Next.js 15 App Router + TS + Tailwind v4                               |
| i18n library   | `next-intl` with localized pathnames                                   |
| Smooth scroll  | Lenis                                                                  |
| Animations     | Framer Motion (default) + GSAP ScrollTrigger (only for pinned scroll)  |

---

## 3. Source site — what to extract

### Company facts

- **Name**: Tân Khánh Phong (TKP)
- **Founded**: 1997
- **Location**: HCMC
- **Phones**: 028 3766 1614 (landline) · 0909 66 2808 (hotline)
- **Email on site**: `tankhanhphong@tkpcarrton.com` ⚠️ **typo — double `r`**. Real domain is `tkpcarton.com`. Flag this to the client and confirm correct email before launch.
- **Stats**: `1997` · `15+` products · `100+` staff · `100+` customers

### Content blocks to preserve

- **Products**
  - By construction: Carton 3 lớp, 5 lớp, 7 lớp
  - By industry: nông sản, điện tử, thời trang, thực phẩm, mỹ phẩm
- **Process (Quy trình)**: 4 steps — Tiếp nhận → Khảo sát → Sản xuất → Giao hàng
- **Materials story**: paper from Thailand/Japan/Taiwan + Vietnam; printing tech — Flexo, phun, lụa
- **Commitments**: flexibility on rush orders, strict process adherence, quality control

### Assets

Scrape the current site:

```bash
wget --mirror --no-parent --page-requisites --convert-links \
  --reject "*.html" -P ./tkp-assets https://www.tkpcarton.com
```

Also check `https://www.tkpcarton.com/sitemap.xml` for any missed pages.

Sort into `/public/assets/{hero,products,process,factory,logos}` with **semantic filenames** (e.g. `hero-production-line.jpg`, `product-5layer-01.jpg`) so photo swaps later are 1:1 replacements.

---

## 4. Design direction — "Minimal factory"

Not generic "modern clean" — push toward **industrial editorial**. The material (kraft, corrugation, folds, die-cuts) is the identity.

### Palette

- Kraft/beige warm base (the material itself)
- Off-white paper background
- Near-black type
- One restrained accent (factory signage red-orange or machine-yellow) — use once per viewport max

### Typography

- **VN**: `Be Vietnam Pro` (handles diacritics cleanly)
- **EN**: `Inter`
- **CN**: `Noto Sans SC` — **subset aggressively**, 400 + 600 only
- Optional display face for big moments: `Fraunces` or `PP Editorial New`

### Animation rules

- All animations < 600ms
- Ease-out dominant
- No bouncing
- Restraint > flash (this is a factory, not a startup)

### Mood references

Teenage Engineering, Muji, Aesop, Kinfolk-style factory editorial.

---

## 5. Sitemap & i18n routing

All routes exist under `/vi`, `/en`, `/zh`. Slugs **localized per language**, not English-everywhere:

```
/vi/                          /en/                       /zh/
/vi/san-pham                  /en/products               /zh/产品
/vi/san-pham/carton-3-lop     /en/products/3-layer       /zh/产品/3-层
/vi/san-pham/carton-5-lop     /en/products/5-layer       /zh/产品/5-层
/vi/san-pham/carton-7-lop     /en/products/7-layer       /zh/产品/7-层
/vi/san-pham/nong-san         /en/products/agriculture   /zh/产品/农产品
/vi/san-pham/dien-tu          /en/products/electronics   /zh/产品/电子
/vi/san-pham/thoi-trang       /en/products/fashion       /zh/产品/时尚
/vi/san-pham/thuc-pham        /en/products/food          /zh/产品/食品
/vi/san-pham/my-pham          /en/products/cosmetics     /zh/产品/化妆品
/vi/quy-trinh                 /en/process                /zh/流程
/vi/ve-chung-toi              /en/about                  /zh/关于
/vi/lien-he                   /en/contact                /zh/联系
```

### Routing rules

- Root `/` → redirect to `/vi` (or detect, pick one default behavior and be consistent)
- Use `next-intl`'s `pathnames` config for per-locale slug mapping
- **Legacy 301 redirects**: old VN slugs (`/carton-5-lop`, `/quy-trinh`, etc.) → new `/vi/...` paths to preserve any existing SEO juice

---

## 6. Folder structure

```
src/
  app/
    [locale]/
      layout.tsx              # sets <html lang>, loads locale fonts, renders Header/Footer
      page.tsx                # landing
      products/
        page.tsx              # category overview
        [slug]/page.tsx       # dynamic, serves 3/5/7-layer + 5 industries
      process/page.tsx
      about/page.tsx
      contact/page.tsx
  components/
    layout/
      Header.tsx
      Footer.tsx
      LocaleSwitch.tsx
    sections/
      Hero.tsx
      Stats.tsx
      ProductRange.tsx
      Industries.tsx
      Process.tsx
      Materials.tsx
      ContactBlock.tsx
      Manifesto.tsx
    ui/
      Button.tsx
      NumberCounter.tsx
      MarqueeLogo.tsx
      RevealOnScroll.tsx
      MagneticLink.tsx
  content/
    vi/
      landing.ts
      products.ts
      process.ts
      about.ts
      contact.ts
    en/  # mirror shape
    zh/  # mirror shape
  i18n/
    routing.ts                # next-intl routing + pathnames config
    request.ts                # loads messages per locale
  lib/
    seo.ts                    # buildMetadata(), JSON-LD helpers
    fonts.ts
  styles/
    globals.css               # Tailwind v4 @theme tokens
public/
  assets/
    hero/
    products/
    process/
    factory/
    logos/
messages/
  vi.json                     # UI strings (nav, buttons, form labels)
  en.json
  zh.json
```

### Two content sources on purpose

- `messages/*.json` → small flat UI chrome (nav, CTAs, labels). Goes through `next-intl`.
- `src/content/*.ts` → rich page content as typed TS objects (sections, paragraphs, arrays).

Makes it obvious what a translator needs vs what the dev controls.

---

## 7. Landing page sections

Single long scroll, ~7-8 sections:

1. **Hero** — wordmark + one-liner (e.g. *"Bao bì carton từ 1997 · Sản xuất tại TP.HCM"*). Looping muted production-line video OR single strong carton-stack photo. Minimal top nav. Anchored hotline CTA.
2. **Manifesto** — 2-3 sentence intro, why they exist since 1997.
3. **Stats strip** — `1997 / 15+ / 100+ / 100+` as thin horizontal band, counter animation on scroll-in.
4. **Product range** — 3/5/7-layer as editorial cards. Horizontal scroll or staggered grid.
5. **Industries served** — 5-tile grid (nông sản / điện tử / thời trang / thực phẩm / mỹ phẩm), cropped photo + 1 line each.
6. **Quy trình** — 01→04 as pinned horizontal scroll OR vertical stepper with large numerals. Where "minimal factory" shines most.
7. **Quality & materials** — 2-column editorial block, paper sourcing + printing tech story.
8. **Contact** — phone, email, form, embedded map, address. Use `<address>` tag, clickable `tel:` + `mailto:`.

Footer: minimal — nav + company info + ©.

---

## 8. SEO requirements

### Semantic skeleton

- One `<h1>` per page
- `<header>`, `<main>`, `<section aria-labelledby>`, `<article>` for news items, `<address>` for contact
- Landmark regions correctly used

### Metadata

- `<html lang={locale}>` per layout
- Next metadata API `alternates.languages` → correct hreflang + `x-default` → `/vi`
- Canonical per locale
- OG + Twitter cards per locale (ideally localized OG images; neutral image acceptable for v1)
- `sitemap.ts` generates all locale × route combos with `<xhtml:link rel="alternate" hreflang>`
- `robots.txt`

### JSON-LD

- `Organization` + `LocalBusiness` site-wide (with `sameAs`, `telephone`, `address`, `openingHours`, `geo`)
- `Product` schema per product page per locale
- `ContactPoint` on contact page
- `BreadcrumbList` on nested pages

### Content-side SEO

- Each product page: 200-400 words of real copy with right keywords (thùng carton, bao bì, industry-specific terms)
- Meaningful `alt` text on all images in the active locale
- Internal linking between related products/industries

### Performance

- `next/image` with AVIF/WebP, proper `width`/`height`
- `next/font` self-hosted, font subsetting (especially CN)
- Target: LCP < 2.5s, CLS ~ 0
- Prefer SSG where possible (content is static)

---

## 9. Tailwind v4 starting tokens

Drop into `src/styles/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* Colors — minimal factory */
  --color-kraft-50: #faf7f2;
  --color-kraft-100: #f0ead f;
  --color-kraft-200: #e2d5bf;
  --color-kraft-400: #c4a57a;
  --color-kraft-600: #8c6a3f;
  --color-kraft-900: #3d2d1a;

  --color-paper: #fafaf7;
  --color-ink: #0e0e0c;
  --color-ink-soft: #2a2a26;

  --color-accent: #d9532b;   /* factory signage red-orange — use sparingly */

  /* Type */
  --font-sans: "Be Vietnam Pro", "Inter", "Noto Sans SC", ui-sans-serif, system-ui;
  --font-display: "Fraunces", Georgia, serif;

  /* Motion */
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
}

html { scroll-behavior: auto; } /* Lenis handles this */
body { background: var(--color-paper); color: var(--color-ink); }
```

Refine colors after seeing first render against the photography.

---

## 10. Phased roadmap

Checkboxes so Claude Code can track progress.

### Phase 0 — Prep (~half day)

- [ ] Scrape <https://www.tkpcarton.com> with wget, organize into `/public/assets/*` with semantic filenames
- [ ] Check `/sitemap.xml` for any missed pages
- [ ] Copy-paste all VN source copy into a working doc
- [ ] Translate VN → EN (can do in-tool)
- [ ] Queue VN → CN translation (flag to user for human translator review before launch)
- [ ] Confirm Simplified vs Traditional CN with client (default Simplified)
- [ ] Confirm correct contact email (current site has typo `tkpcarrton.com`)

### Phase 1 — Scaffolding (~1 day)

- [ ] `pnpm create next-app` (TS, Tailwind, App Router, src dir)
- [ ] Install: `next-intl`, `framer-motion`, `lenis`, `clsx`, `tailwind-merge`
- [ ] `next-intl` middleware + routing config with localized pathnames
- [ ] Tailwind v4 `@theme` with tokens above
- [ ] Self-host fonts via `next/font/local` or `next/font/google` (subset CN aggressively)
- [ ] Root layout per locale with `<html lang>`, font loading
- [ ] Base `Header`, `Footer`, `LocaleSwitch` components
- [ ] Set up `src/content/{vi,en,zh}/*.ts` skeleton with shared types

### Phase 2 — Landing (~2-3 days)

- [ ] `Hero` section
- [ ] `Manifesto` section
- [ ] `Stats` section with counter animation
- [ ] `ProductRange` section
- [ ] `Industries` grid
- [ ] `Process` section (pin test horizontal vs vertical stepper — pick the better feel)
- [ ] `Materials` editorial block
- [ ] `ContactBlock`
- [ ] Lenis smooth scroll wired up
- [ ] `RevealOnScroll` wrapper component used consistently
- [ ] Animation tuning pass — enforce <600ms, ease-out, no bouncing

### Phase 3 — Product templates (~1-2 days)

- [ ] `products/page.tsx` — category overview
- [ ] `products/[slug]/page.tsx` — dynamic template
- [ ] 3 layer-variant pages (3/5/7)
- [ ] 5 industry pages (agriculture, electronics, fashion, food, cosmetics)
- [ ] `generateStaticParams` for all product slugs × locales
- [ ] Per-product metadata + JSON-LD `Product`

### Phase 4 — Process / About / Contact (~1-2 days)

- [ ] `process/page.tsx` — expand the 4-step story beyond what's on landing
- [ ] `about/page.tsx` — company story, values, milestones since 1997
- [ ] `contact/page.tsx` — form (React Hook Form + Zod), embedded map, `<address>`
- [ ] Form submission handler (Resend or simple serverless route; confirm recipient email first)

### Phase 5 — SEO polish + perf (~1 day)

- [ ] `lib/seo.ts` — `buildMetadata()` helper used everywhere
- [ ] JSON-LD injection per route per locale
- [ ] `sitemap.ts` with all locale × route combos + hreflang alternates
- [ ] `robots.txt`
- [ ] 301 redirects from legacy VN slugs in `next.config.js`
- [ ] Lighthouse pass → target 95+ across the board
- [ ] Image optimization audit
- [ ] Font subset size audit (CN especially)

### Phase 6 — QA (~half day)

- [ ] Click-through all 3 locales
- [ ] Diacritic rendering (VN) + CJK rendering (CN)
- [ ] Form submission end-to-end
- [ ] Responsive: mobile / tablet / desktop
- [ ] Keyboard navigation + screen reader smoke test
- [ ] Cross-browser: Chrome, Safari (incl. iOS Safari), Firefox

**Total**: ~8-10 focused dev days.

---

## 11. Open items / to confirm with client

- [ ] Correct contact email (current site has typo)
- [ ] Simplified vs Traditional Chinese
- [ ] Is "Tin tức" (news) still active? Drop if not.
- [ ] New photography shoot — beneficial but not blocking v1
- [ ] Client logos for a trust marquee — does the friend have any?
- [ ] Google Maps location pin address
- [ ] Any brand assets (logo, existing colors they want preserved)?
- [ ] Deploy target (Vercel / Cloudflare Pages / other)

---

## 12. First actions for Claude Code

1. Run the wget scrape into a scratch dir, list what came back, and let V eyeball before committing to `/public/assets`.
2. Spin up the Next.js scaffold (Phase 1 checklist).
3. Wire `next-intl` with the localized `pathnames` table from §5.
4. Drop the Tailwind v4 tokens in place.
5. Build the `Hero` section first — it sets the animation/type/rhythm language for the rest of the site.

After Hero, pause and let V review the feel before pushing through the remaining sections.
