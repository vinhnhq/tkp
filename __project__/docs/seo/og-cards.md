# OG Card Content — i18n Text-Based

Reference doc for dynamic, text-based Open Graph (OG) cards rendered per-locale.

**No static image files per locale.** Cards are rendered at build/request time from text + layout spec, so VN/EN/ZH share one design and we update strings, not PNGs.

Implementation target: Next.js App Router `app/[locale]/opengraph-image.tsx` (edge runtime, satori-based). Same file emits Twitter cards.

---

## Why text-based OG

- **One design, three locales.** Swap strings, not assets.
- **Copy updates don't require Photoshop.** Product name changes, no PR waiting on design.
- **No binary churn in repo.** Repo stays clean.
- **Per-page titles** can interpolate dynamically (product layer number, industry, blog post title).

---

## Naming rules — recap

Before the content matrix, the guiding rule for which name goes where:

| Context | Name type | Value |
|---------|-----------|-------|
| OG `title` | Brand + page | Brand short form + page-specific noun |
| OG `site_name` | Brand short | `Tân Khánh Phong Carton` / `TKP Carton` / `TKP 纸箱` |
| OG `description` | Value prop | 1-2 sentences, plain language |
| JSON-LD `name` | Brand (native) | Per locale, common-use name |
| JSON-LD `legalName` | Legal entity | `TAN KHANH PHONG PRODUCING PACKING AND TRADING COMPANY LIMITED` (always this, any locale) |
| JSON-LD `alternateName` | Aliases | `["TKP", "TKP Carton", "Tan Khanh Phong Packing Co., Ltd"]` |
| Footer © | Legal (VN) | `Công ty TNHH Sản xuất Bao bì và Thương mại Tân Khánh Phong · MST 0310508516` |

**Founding-year caveat**: do not print "since 1997" anywhere until C17 is confirmed by the client (see `__project__/tasks/backlog/client-waiting.md`). For now, use **neutral phrasing** like "kinh nghiệm sản xuất carton tại TP.HCM" or leave the year out. Add the year back once verified.

---

## Brand strings per locale

| Locale | Brand long | Brand short | Wordmark |
|--------|-----------|-------------|----------|
| vi | Tân Khánh Phong | TKP Carton | TÂN KHÁNH PHONG |
| en | Tan Khanh Phong | TKP Carton | TAN KHANH PHONG |
| zh | 新庆丰 *(pending translator confirmation — phonetic rendering)* | TKP 纸箱 | TKP |

ZH brand rendering needs translator sign-off. Until then, use `TKP 纸箱` as the primary display — neutral, keeps recognition via the Latin abbreviation.

---

## Sitewide defaults

Used as fallback if a specific page doesn't override.

### vi (default)

- **og:site_name** → `Tân Khánh Phong Carton`
- **og:title (default)** → `Tân Khánh Phong — Bao bì carton, TP.HCM`
- **og:description (default)** → `Sản xuất thùng carton 3, 5, 7 lớp cho nông sản, điện tử, thời trang, thực phẩm, mỹ phẩm. Giao tận HCMC và các tỉnh lân cận.`
- **og:locale** → `vi_VN`

### en

- **og:site_name** → `TKP Carton`
- **og:title (default)** → `TKP Carton — Corrugated packaging, HCMC, Vietnam`
- **og:description (default)** → `Manufacturer of 3, 5 and 7-layer corrugated carton boxes for agriculture, electronics, fashion, food and cosmetics. Based in Ho Chi Minh City, serving Vietnam and export.`
- **og:locale** → `en_US`
- **og:locale:alternate** → `vi_VN`, `zh_CN`

### zh

- **og:site_name** → `TKP 纸箱`
- **og:title (default)** → `TKP 纸箱 — 越南胡志明市瓦楞纸箱厂家`
- **og:description (default)** → `生产 3 层、5 层、7 层瓦楞纸箱，适用于农产品、电子、服装、食品、化妆品。胡志明市工厂，支持越南本土及出口订单。`
- **og:locale** → `zh_CN`

---

## Per-page content matrix

One block per route, three locales each. Each entry feeds `buildMetadata()` and the `opengraph-image.tsx` renderer.

### `/` — Home

| Locale | Title | Description |
|--------|-------|-------------|
| vi | `Tân Khánh Phong — Bao bì carton sản xuất tại TP.HCM` | `Xưởng sản xuất thùng carton 3/5/7 lớp cho hàng xuất khẩu, nông sản, điện tử, thực phẩm. Linh hoạt với đơn gấp, giao đúng hẹn.` |
| en | `TKP Carton — Corrugated packaging manufacturer in HCMC` | `A Ho Chi Minh City carton factory producing 3, 5 and 7-layer boxes for export, agriculture, electronics and food. Fast-turn, on-time delivery.` |
| zh | `TKP 纸箱 — 胡志明市瓦楞纸箱厂家` | `胡志明市瓦楞纸箱生产厂，提供 3/5/7 层纸箱，适用于出口、农产品、电子、食品。支持急单，准时交付。` |

### `/san-pham` · `/products` · `/产品` — Products overview

| Locale | Title | Description |
|--------|-------|-------------|
| vi | `Sản phẩm — Thùng carton 3, 5, 7 lớp · TKP` | `Đầy đủ các dòng sản phẩm: carton 3 lớp, 5 lớp, 7 lớp. Phân theo ngành hàng: nông sản, điện tử, thời trang, thực phẩm, mỹ phẩm.` |
| en | `Products — 3, 5 and 7-layer carton boxes · TKP` | `Full range of corrugated boxes: 3-, 5-, and 7-layer. Organized by industry: agriculture, electronics, fashion, food, cosmetics.` |
| zh | `产品 — 3 层 / 5 层 / 7 层瓦楞纸箱 · TKP` | `瓦楞纸箱全系列：3 层、5 层、7 层。按行业分类：农产品、电子、服装、食品、化妆品。` |

### `/san-pham/carton-[N]-lop` — Product detail (layer variants)

Templated. `{N}` = `3` | `5` | `7`.

| Locale | Title | Description |
|--------|-------|-------------|
| vi | `Thùng carton {N} lớp — TKP Carton` | `Thùng carton {N} lớp sản xuất tại xưởng TP.HCM. Giấy nhập Thái/Nhật/Đài kết hợp Việt Nam, in flexo/phun/lụa theo yêu cầu.` |
| en | `{N}-layer corrugated carton box — TKP Carton` | `{N}-layer carton boxes made in our HCMC facility. Paper sourced from Thailand, Japan, Taiwan and Vietnam. Flexo, inkjet and screen printing available.` |
| zh | `{N} 层瓦楞纸箱 — TKP 纸箱` | `{N} 层瓦楞纸箱，胡志明市工厂生产。纸张来自泰国、日本、台湾和越南。提供柔印、喷印、丝印工艺。` |

### `/san-pham/[industry]` — Industry pages

Matrix by industry slug. Description uses the same sentence skeleton, industry swaps.

**vi — industries**: nông sản · điện tử · thời trang · thực phẩm · mỹ phẩm
**en — industries**: agriculture · electronics · fashion · food · cosmetics
**zh — industries**: 农产品 · 电子 · 时尚 · 食品 · 化妆品

| Locale | Title template | Description template |
|--------|---------------|---------------------|
| vi | `Bao bì carton cho ngành {industry} · TKP` | `Thùng carton thiết kế riêng cho ngành {industry}. Chịu tải, chống sốc, đáp ứng tiêu chuẩn xuất khẩu.` |
| en | `Carton packaging for {industry} · TKP` | `Carton boxes engineered for the {industry} industry. Load-bearing, shock-resistant, export-grade.` |
| zh | `{industry}行业瓦楞纸箱 · TKP` | `针对{industry}行业定制的瓦楞纸箱。承重、抗震、符合出口标准。` |

### `/quy-trinh` · `/process` · `/流程` — Process

| Locale | Title | Description |
|--------|-------|-------------|
| vi | `Quy trình — Từ đơn hàng đến giao nhận · TKP` | `4 bước: Tiếp nhận · Khảo sát · Sản xuất · Giao hàng. QC nghiêm ngặt ở mỗi khâu.` |
| en | `Process — From order to delivery · TKP` | `Four steps: Intake · Survey · Production · Delivery. Strict QC at every stage.` |
| zh | `流程 — 从下单到交付 · TKP` | `四个步骤：接单 · 调研 · 生产 · 交付。每一环节严格质检。` |

### `/ve-chung-toi` · `/about` · `/关于` — About

| Locale | Title | Description |
|--------|-------|-------------|
| vi | `Về Tân Khánh Phong — Xưởng carton TP.HCM` | `Công ty TNHH Sản xuất Bao bì và Thương mại Tân Khánh Phong. Chuyên sản xuất thùng carton tại TP.HCM.` |
| en | `About TKP — A Ho Chi Minh City carton factory` | `Tan Khanh Phong Producing Packing and Trading Co., Ltd. Corrugated carton manufacturer based in Ho Chi Minh City.` |
| zh | `关于 TKP — 胡志明市瓦楞纸箱厂` | `新庆丰包装生产贸易有限公司，位于胡志明市的瓦楞纸箱制造商。` |

*(Founding year phrasing deliberately omitted pending C17.)*

### `/lien-he` · `/contact` · `/联系` — Contact

| Locale | Title | Description |
|--------|-------|-------------|
| vi | `Liên hệ TKP — Báo giá carton nhanh` | `Gọi 0909 66 2808 hoặc 028 3766 1614. Hoặc gửi yêu cầu qua form — phản hồi trong ngày làm việc.` |
| en | `Contact TKP — Fast carton quotes` | `Call +84 909 66 2808 or +84 28 3766 1614. Or submit the contact form — we reply the same business day.` |
| zh | `联系 TKP — 快速报价` | `致电 +84 909 66 2808 或 +84 28 3766 1614。或填写联系表单 — 工作日内回复。` |

---

## Visual layout spec

All locales share this layout. The OG renderer receives `{ title, description, locale }` and emits a 1200×630 PNG.

### Canvas

- **Dimensions**: 1200 × 630 (OG standard)
- **Safe zone**: 100px inner padding on all sides — Facebook and Twitter crop edges on mobile
- **Background**: `--color-kraft-50` (`#faf7f2`) with a faint corrugation-line SVG pattern at ~5% opacity in the bottom-right quadrant
- **No photos** — keep it type-led for rendering speed + locale-agnostic design

### Composition

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  [TKP wordmark]                                      │  ← top-left, 48pt
│                                                      │
│  {TITLE}                                             │  ← center-left, large
│  {TITLE line 2 if wraps}                             │    80pt in vi/en, 72pt in zh
│                                                      │    near-black (--color-ink)
│                                                      │
│  {DESCRIPTION}                                       │  ← below title, 32pt
│  {DESCRIPTION line 2}                                │    (--color-ink-soft)
│                                                      │
│                                                      │
│                              tkpcarton.com  ━━━━━━   │  ← bottom-right, 24pt
│                                            [accent bar in red-orange]
└──────────────────────────────────────────────────────┘
```

### Typography

| Locale | Font family | Title weight | Title size | Description size |
|--------|------------|--------------|-----------|------------------|
| vi | Be Vietnam Pro | 700 | 80pt | 32pt |
| en | Inter | 700 | 80pt | 32pt |
| zh | Noto Sans SC | 700 | 72pt | 30pt |

Noto Sans SC title is slightly smaller because CJK glyphs are denser — prevents visual crowding.

### Colors

- Background: `#faf7f2` (kraft paper)
- Title text: `#0e0e0c` (near-black)
- Description text: `#2a2a26` (softer black)
- Accent bar: `#d9532b` (factory red-orange — 4px thick, 120px long, bottom-right)
- Corrugation pattern: `#8c6a3f` at 5% opacity

### Truncation rules

- Title max ~60 characters (VI/EN) / ~35 characters (ZH). Longer → truncate with `…`
- Description max ~130 characters (VI/EN) / ~80 characters (ZH). Longer → truncate with `…`

Per-locale strings in the matrix above already respect these limits.

---

## Implementation reference (Next.js App Router)

File: `app/[locale]/opengraph-image.tsx`

```tsx
import { ImageResponse } from "next/og";
// pseudocode — real impl pulls from src/content/<locale>/og.ts

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { locale: string } }) {
  const og = await loadOg(params.locale); // { title, description, siteName }

  return new ImageResponse(
    // JSX subset supported by next/og (satori)
    // Layout per spec above
  );
}
```

Twitter card reuses the same component via `app/[locale]/twitter-image.tsx` that re-exports default.

---

## What lives where after implementation

| Item | File |
|------|------|
| Per-page OG strings | `src/content/{vi,en,zh}/og.ts` (typed) |
| OG image renderer | `src/app/[locale]/opengraph-image.tsx` |
| Twitter image | `src/app/[locale]/twitter-image.tsx` (re-export) |
| Fonts for renderer | `src/app/[locale]/opengraph-image.tsx` fetches from `public/fonts/` or Google Fonts CDN |
| Metadata wiring | `src/lib/seo.ts` `buildMetadata()` — Sprint 03 T301 |

---

## Open items blocked on client answers

- **C17** founding year — affects About page description, any "since X" phrasing
- **C18** canonical address — affects contact card, structured data
- **C19** legal name confirmation — affects JSON-LD `legalName` and footer
- Chinese brand-name translation — affects all ZH OG strings

All tracked in `__project__/tasks/backlog/client-waiting.md`.
