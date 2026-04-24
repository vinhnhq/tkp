# Releases

(Appended by `scripts/release-check.sh`, or manually for notable milestones.)

---

## v0.1.1 · 2026-04-24 · main

Patch release. No user-facing changes — pipeline / build fixes only.

- `[locale]/**/page.tsx` stubs filled with a minimal `UnderConstruction`
  placeholder + `[locale]/layout.tsx` wires `NextIntlClientProvider`. `bun run
  build` now succeeds end-to-end (was previously blocked by empty stubs from
  the initial scaffold).
- RELEASES.md consolidated — dropped the pre-merge `0.1.0-preview.1` section
  and merged the script's auto-entry into the rich v0.1.0 block.

---

## v0.1.0 · 2026-04-24 · main

**Force-passed release gates** (backlog tasks T003/T007/T008 still open, pending
client variant selection). Published to GitHub at `github.com/vinhnhq/tkp`,
tagged `v0.1.0`.

### Homepage preview deck

- Gallery at `/homepage-preview` lists 10 design variants, each a full landing
  page with shared content and distinct layout / typography / palette.
- Variants: V1 Tạp chí (editorial), V2 Chia đôi (split), V3 Ưu tiên chữ
  (type-led), V4 Chất liệu (materiality), V5 Lưới Swiss (grid), V6 Mạnh mẽ
  (brutalist), V7 Tối giản (Aesop/Muji), V8 Công nghiệp tối (dark), V9 Khối
  Bento (dashboard tiles), V10 Cuộn dài (long scroll story).
- Floating switcher pill on every variant to jump between V1–V10 and the index.
- All copy in Vietnamese. Hero tagline: `Từ giấy đến thùng, đúng quy cách.`
- Customer logo wall ("Tự hào phục vụ") in all 10 variants, using the 8 scraped
  customer logos at `public/assets/logos/logos-02..09.png`.
- Images are Unsplash placeholders via stable photo-ID URLs
  (`src/content/homepage-preview/unsplash.ts`). Swap to TKP photography is
  tracked as T007.

### Infra / quality

- Mobile padding pass across all variants — removed ~4 screens of dead
  whitespace total, biggest wins on V3 (−832px), V7 (−1016px).
- Playwright suite: gallery test, per-variant smoke + visual snapshots across
  3 viewports. 72 tests, all passing.
- Biome clean on the new preview tree.
- `.gitignore` excludes `.claude/`, `.agents/`, `skills-lock.json`,
  `test-results/`.
- Localized route stubs (`[locale]/**/page.tsx`) filled with minimal
  `UnderConstruction` placeholders so `bun run build` passes. Real content
  tracked for Sprint 03.

### What's still open

- **T003** — client picks a variant.
- **T007** — swap Unsplash placeholders for real TKP photography.
- **T008** — delete the 9 losing variants + switcher + gallery after selection.
- Sprint 03 — replace `UnderConstruction` stubs with real content per locale.
