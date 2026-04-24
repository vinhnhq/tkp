# Ideas Backlog

Drop zone for ad-hoc ideas that come up during discussions, client calls, or while working on something else. Most will never get picked up — that's fine. The purpose is to get them out of your head so you can focus on current work.

Entry format (keep each entry tight):

```
## <Short title>
**Source:** <when/where it came up>
**Idea:** <1-3 sentences — what and why>
**Effort guess:** <small / medium / large>
**Move to:** <which sprint or backlog if promoted, or "drop" if rejected>
```

Review cadence: scan this file at the start of every sprint. For each entry: promote, leave parked, or delete. If it's been parked for 3+ sprints untouched, delete by default — it will resurface if it still matters.

---

## Entries

## Rename PascalCase component files to kebab-case

**Source:** ADR-005 (2026-04-25) — decided kebab-case filenames are the project convention. This entry is the implementation chore.
**Idea:** Rename ~19 PascalCase files under `src/components/{layout,sections,ui}/` to kebab-case and fix the ~46 import sites. Turn on Biome's `useFilenamingConvention` rule in the same pass so regression is blocked by CI. Exported component symbols stay PascalCase — only filenames change.

Scope:
- Layout (4): `Footer.tsx`, `Header.tsx`, `LocaleSwitch.tsx`, `UnderConstruction.tsx`
- Sections (8): `ContactBlock.tsx`, `Hero.tsx`, `Industries.tsx`, `Manifesto.tsx`, `Materials.tsx`, `Process.tsx`, `ProductRange.tsx`, `Stats.tsx`
- UI (7): `Button.tsx`, `MagneticLink.tsx`, `MarqueeLogo.tsx`, `NumberCounter.tsx`, `PreviewSwitcher.tsx`, `RevealOnScroll.tsx`, `SmoothScroll.tsx`

Order (3 commits, clean blame):
1. `chore(rename): kebab-case layout components` — `git mv` + import fixup
2. `chore(rename): kebab-case section components`
3. `chore(rename): kebab-case ui components` + enable `useFilenamingConvention` in `biome.json`

macOS note: use two-step `git mv` (`Foo.tsx` → `foo.tmp.tsx` → `foo.tsx`) — the filesystem is case-insensitive by default.

Verify: `bun run build` + `bun test src/` + `bun run lint` green after each commit.

**Effort guess:** small (~45 min — mechanical)
**Move to:** pick up before Sprint 04 starts (so Sprint 04 component files land on the new convention from the start)

