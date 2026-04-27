# Client-Waiting Checklist

Single place to collect everything blocked on client input. Use this as the agenda for the next client sync — each answer unblocks one or more downstream tasks.

Not a task list in the operational sense — tasks live in their home locations (sprint folders, `marketing.md`). This file is the **cross-cutting view** of "what do we need from the client to move forward".

Status: ⏸ waiting · ✓ answered · ✗ no longer needed

---

## Open questions for client

| # | Question | Status | Unblocks | Source |
|---|----------|--------|----------|--------|
| C01 | Canonical contact email — three candidates found in public sources: (a) `tankhanhphong@tkpcarrton.com` live site with typo, (b) `tankhanhphong@tkpcarton.com` corrected form, (c) `kp_carton@yahoo.com.vn` on Yellow Pages VN. Which is the active inbox? | ✓ answered (2026-04-27) — see `brief.md` §3 | JSON-LD schema, GBP, directory submissions, contact form recipient, OG contact card | `brief.md` §11; Sprint 03 T308; backlog M501 |
| C02 | Confirm landline + hotline phone numbers in E.164 format (currently `028 3766 1614` / `0909 66 2808`) | ✓ answered (2026-04-27) — see `brief.md` §3 | JSON-LD `telephone`, GBP, directory submissions | Sprint 03 T305; backlog M502 |
| C03 | Registered business address for schema + GBP (matching utility bill / business license) | ✓ answered (2026-04-27) — see `brief.md` §3 | JSON-LD `address`, GBP listing, NAP consistency | backlog M503 |
| C04 | Simplified (zh-CN) vs Traditional Chinese — default was Simplified | ⏸ waiting | ZH content direction, fonts, translation commissioning | `brief.md` §11 |
| C05 | Is "Tin tức" (news) section still active content on the current site? | ⏸ waiting | Scope — whether to build blog routes | `brief.md` §11 |
| C06 | Any brand assets (logo files, preferred colors, style guide)? | ⏸ waiting | Logo placement, theme variants | `brief.md` §11 |
| C07 | Client logos for the trust marquee — written permission for each of the 8 logos currently displayed? | ⏸ waiting | Logo wall in all 10 variants (already rendered, legal check pending) | Sprint 02 T006; Sprint 03 T315; backlog M305 |
| C08 | Google account for Google Business Profile, Search Console, Analytics ownership — client-owned preferred, dev team as collaborator | ⏸ waiting | Sprint 03 T308, T309; backlog M1, M6 | Sprint 03 plan |
| C09 | Social profile URLs — Facebook page, Zalo Official Account, LinkedIn if any | ⏸ waiting | JSON-LD `sameAs`, GBP links | Sprint 03 T310 |
| C10 | Certifications to display (ISO, FSC, others) — which are current and have scans available? | ⏸ waiting | Trust signals on product and about pages | backlog M505 |
| C11 | Vietnam Pulp and Paper Association membership status — active / lapsed / none? | ⏸ waiting | Backlink opportunity via directory listing | backlog M207 |
| C12 | HCMC Chamber of Commerce membership status? | ⏸ waiting | Same as above | backlog M208 |
| C13 | New photography — willing to commission a professional shoot? If yes, budget + timeline | ⏸ waiting | Hero imagery, product pages, OG images | `brief.md` §11; backlog M403 |
| C14 | Deploy target — Vercel (default assumption), Cloudflare Pages, other? | ⏸ waiting | Infra decisions, preview URL sharing | `brief.md` §11 |
| C15 | Paid ads during months 1-6 to fill organic-growth gap — yes/no + budget | ⏸ waiting | backlog M701–M703 | backlog M7 |
| C16 | Designated marketing point-of-contact on client side for the ongoing marketing backlog | ⏸ waiting | Unblocks the entire marketing backlog's review cadence | backlog M1-M7 |
| C17 | Founding year discrepancy — brief claims 1997, tax registry shows limited company incorporated **2010-12-10**. Was there a family workshop / hộ kinh doanh since 1997 before incorporation? What phrasing is honest + verifiable for marketing copy ("family tradition since 1997, incorporated 2010"? "since 2010"?) | ✓ answered (2026-04-27) — use **"hơn 20 năm kinh nghiệm" / "more than 20 years"**; do **not** print "since 1997"; omit JSON-LD `foundingDate` for now | Homepage tagline, About page, JSON-LD `foundingDate`, OG descriptions, all "29 years of experience" trust copy | `brief.md` §3; OG card doc |
| C18 | Address reconciliation — tax registry: `1251 Trần Văn Giàu, Ấp 28, Xã Bình Lợi, TP.HCM`. Yellow Pages: `G2/13 Hamlet 7, Provincial Road 10, Le Minh Xuan Ward, Binh Chanh District`. Same location under new admin naming? Or office vs factory? Which is public-facing? | ✓ answered (2026-04-27) — operational address (Lê Minh Xuân) is public-facing; MST address (Bình Lợi) is legal-only. See `brief.md` §3 | JSON-LD `address`, GBP listing, NAP consistency across directories, Google Maps embed | `brief.md` §3; backlog M503 |
| C19 | Legal name for structured data — confirm `Công ty TNHH Sản xuất Bao bì và Thương mại Tân Khánh Phong` (VN) and `TAN KHANH PHONG PRODUCING PACKING AND TRADING COMPANY LIMITED` (EN) from tax registry are current and preferred for `legalName` field | ✓ answered (2026-04-27) — VN canonical: `Công ty TNHH Sản Xuất Bao Bì Và Thương Mại Tân Khánh Phong` (Title Case). EN unchanged. See `brief.md` §3 | JSON-LD `Organization.legalName`, footer copyright line, invoices | Screenshots from tax registry + Yellow Pages |
| C20 | Legal representative name — use `DƯƠNG QUỚI TƯỜNG` publicly or keep behind-the-scenes? | ⏸ waiting | Contact page, GBP "owner" field | Tax registry |

---

## How to use this file

**Before a client sync:** scan for `⏸ waiting`, pull into the meeting agenda.
**During the sync:** mark answers inline — status flips to ✓, answer captured in the Notes column (add one if you need).
**After the sync:** propagate answers back into the operational home of each task (sprint todo, marketing.md row, schema config, etc.). This file stays lean — just the cross-cutting status board, not the answers themselves.

**When a question becomes irrelevant:** mark `✗ no longer needed` with a one-line reason, so the trail is preserved for future reference.
