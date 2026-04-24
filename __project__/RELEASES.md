# Releases

(Appended by release-check.sh, or manually for pre-main milestones.)

---

## 0.1.0-preview.1 · 2026-04-24 · dev

**Milestone on `dev`. Not promoted to `main`** — waiting on client variant selection
(T003) before we can clear the release gate.

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
- `.gitignore` now excludes `.claude/`, `.agents/`, `skills-lock.json`,
  `test-results/`.

### What blocks `main`

- **T003 reopened** — client picks a variant.
- **T007** — swap Unsplash placeholders for real TKP photography.
- **T008** — delete the 9 losing variants + switcher + gallery after selection.
- Pre-existing empty `[locale]/**/page.tsx` stubs (from initial scaffold
  commit `b21796b`) still break the full `bun run build`. Not introduced by
  this milestone, but will need to be fleshed out before `main`.

## v0.1.0 — 2026-04-24

- Sprint pass rate: all done
- Tests: passed, 0 known failures
- Commits merged: de0660b930b4a8041cc2d1d80df3fd3fb2cfb54c
