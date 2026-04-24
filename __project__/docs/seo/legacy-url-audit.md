# Legacy URL audit → new site mapping

**Task:** T306 (audit portion only — wiring into `next.config.ts` deferred until final page routes exist)
**Source:** `raw-assets/manifest.txt` (scrape of `http://www.tkpcarton.com` on 2026-04-24, 13 HTML pages + 4 post URLs)
**Scope:** every URL that Google is likely to have indexed from the old Ladipage-hosted site.

## Ground rules

- Every legacy URL must 301 to a live page on the new site, or to the closest relevant page.
- No redirect chains — one hop.
- Host canonicalization: the legacy site answered on `http://www.tkpcarton.com` (and likely the `http://tkpcarton.com` apex). Host-level redirect to `https://tkpcarton.com` is assumed separately; this doc covers path-level redirects only.

## Mapping

| # | Legacy path | Mapping status | New path | Notes |
|---|-------------|----------------|----------|-------|
| 1 | `/` | ready | `/vi` | Home. Currently redirects to `/homepage-preview`; swap to `/vi` at launch. |
| 2 | `/index.html` | ready | `/vi` | Same as above. |
| 3 | `/carton-3-lop.html` | wait | `/vi/san-pham/carton-3-lop` | Target page built in Sprint 04. |
| 4 | `/carton-5-lop.html` | wait | `/vi/san-pham/carton-5-lop` | Target page built in Sprint 04. |
| 5 | `/carton-7-lop.html` | wait | `/vi/san-pham/carton-7-lop` | Target page built in Sprint 04. |
| 6 | `/ve-chung-toi.html` | ready | `/vi/ve-chung-toi` | Route exists. |
| 7 | `/quy-trinh.html` | ready | `/vi/quy-trinh` | Route exists. |
| 8 | `/lien-he.html` | ready | `/vi/lien-he` | Route exists. |
| 9 | `/thung-carton-my-pham.html` | fallback | `/vi/san-pham` | Industry-specific page not in scope until industry routes exist. Falls back to products overview to preserve keyword signal. |
| 10 | `/thung-carton-dien-tu.html` | fallback | `/vi/san-pham` | Same as above. |
| 11 | `/thung-carton-nong-san.html` | fallback | `/vi/san-pham` | Same as above. |
| 12 | `/thung-carton-thoi-trang.html` | fallback | `/vi/san-pham` | Same as above. |
| 13 | `/thung-carton-thuc-pham.html` | fallback | `/vi/san-pham` | Same as above. |
| 14 | `/tin-tuc.html` | wait | `/vi/tin-tuc` | Blog list route — scope and path decided in T314. |
| 15 | `/p/bai-viet-1.html` | fallback | `/vi/tin-tuc` (or `/vi` if blog not built) | Original post content is generic/scraped; we are not rewriting them per ADR-004. Redirect to blog index preserves crawl equity. |
| 16 | `/p/bai-viet-2.html` | fallback | `/vi/tin-tuc` | Same. |
| 17 | `/p/bai-viet-3.html` | fallback | `/vi/tin-tuc` | Same. |
| 18 | `/p/thong-bao-quan-trong.html` | fallback | `/vi` | Dated announcement — no evergreen target. |

## Dependencies before wiring

The following must be true before enabling the redirects block in `next.config.ts`:

1. **Sprint 04 ships product detail pages** at `/vi/san-pham/[slug]` with the three layer slugs (`carton-3-lop`, `carton-5-lop`, `carton-7-lop`) populated. Without these, rows 3–5 would 301 into 404s.
2. **T314 decides** whether the blog ships at launch. If it does not, rows 14–17 redirect to `/vi` instead of `/vi/tin-tuc`.
3. **Industry-page decision** — accept the fallback to `/vi/san-pham` for rows 9–13, or postpone launch until dedicated industry pages exist. Recommended: ship with the fallback; industry pages can be added later without changing the redirect map.

## Wiring (deferred)

When the above conditions are met, add to `next.config.ts`:

```ts
async redirects() {
  return [
    { source: "/", destination: "/vi", permanent: true },
    { source: "/index.html", destination: "/vi", permanent: true },
    { source: "/ve-chung-toi.html", destination: "/vi/ve-chung-toi", permanent: true },
    { source: "/quy-trinh.html", destination: "/vi/quy-trinh", permanent: true },
    { source: "/lien-he.html", destination: "/vi/lien-he", permanent: true },
    { source: "/carton-3-lop.html", destination: "/vi/san-pham/carton-3-lop", permanent: true },
    { source: "/carton-5-lop.html", destination: "/vi/san-pham/carton-5-lop", permanent: true },
    { source: "/carton-7-lop.html", destination: "/vi/san-pham/carton-7-lop", permanent: true },
    { source: "/thung-carton-my-pham.html", destination: "/vi/san-pham", permanent: true },
    { source: "/thung-carton-dien-tu.html", destination: "/vi/san-pham", permanent: true },
    { source: "/thung-carton-nong-san.html", destination: "/vi/san-pham", permanent: true },
    { source: "/thung-carton-thoi-trang.html", destination: "/vi/san-pham", permanent: true },
    { source: "/thung-carton-thuc-pham.html", destination: "/vi/san-pham", permanent: true },
    { source: "/tin-tuc.html", destination: "/vi/tin-tuc", permanent: true }, // or /vi
    { source: "/p/:slug.html", destination: "/vi/tin-tuc", permanent: true }, // or /vi
  ];
}
```

Remove the current preview-phase `/` → `/homepage-preview` redirect when this wires up.

## Verification plan (post-wiring)

- Crawl every row above with `curl -I` and confirm `HTTP/2 301` with matching `Location` header.
- Re-crawl the old sitemap via Google Search Console "URL inspection" once the new site is verified.
- Watch GSC coverage report for ~2 weeks after launch: unexpected 404s for paths not in this list indicate indexed URLs we missed.
