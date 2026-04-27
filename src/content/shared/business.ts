/**
 * Single source of truth for TKP business facts.
 *
 * Populated from `__project__/brief.md` §3 — values client-confirmed 2026-04-27.
 *
 * Consumed by:
 *   - `src/app/layout.tsx` (JSON-LD Organization + LocalBusiness)
 *   - `src/app/[locale]/layout.tsx` (sitewide metadata)
 *   - `src/app/[locale]/page.tsx` (homepage metadata)
 *   - `src/app/opengraph-image.tsx` (OG image render)
 *
 * NOTE — intentionally **omits `foundingDate`**. Per C17, no specific year is
 * confirmed for public-facing structured data. Use `experience.phrasing` instead
 * (neutral "more than 20 years" copy). Re-add `foundingDate` only when the
 * client confirms a year.
 */

export type PostalAddress = {
	streetAddress: string;
	addressLocality: string;
	addressRegion?: string;
	postalCode?: string;
	addressCountry: string;
	/** Human-facing single-line VN address — for `<address>` tag, contact card. */
	display: string;
};

export type Phone = {
	/** E.164 format, no spaces. Used in JSON-LD `telephone`, `tel:` links. */
	e164: string;
	/** Locale-friendly grouped form. Used in visible text. */
	display: string;
};

export type BusinessInfo = {
	legalName: {
		vi: string;
		en: string;
	};
	brandName: {
		vi: string;
		en: string;
		zh: string;
	};
	address: {
		operational: PostalAddress;
		legal: PostalAddress;
	};
	phones: {
		hotline: Phone;
		landline: Phone;
	};
	email: string;
	taxCode: string;
	experience: {
		phrasing: {
			vi: string;
			en: string;
			zh: string;
		};
	};
};

export const business: BusinessInfo = {
	legalName: {
		vi: "Công ty TNHH Sản Xuất Bao Bì Và Thương Mại Tân Khánh Phong",
		en: "TAN KHANH PHONG PRODUCING PACKING AND TRADING COMPANY LIMITED",
	},
	brandName: {
		vi: "Tân Khánh Phong",
		en: "TKP Carton",
		zh: "TKP 纸箱",
	},
	address: {
		operational: {
			streetAddress: "1249-1251 Trần Văn Giàu (G2/13 Tỉnh lộ 10 cũ), ấp 7",
			addressLocality: "Xã Lê Minh Xuân, Huyện Bình Chánh",
			addressRegion: "TP. Hồ Chí Minh",
			addressCountry: "VN",
			display:
				"1249-1251 Trần Văn Giàu (G2/13 Tỉnh lộ 10 cũ), ấp 7, Xã Lê Minh Xuân, Huyện Bình Chánh, TP. Hồ Chí Minh",
		},
		legal: {
			streetAddress: "1251 Đường Trần Văn Giàu, Ấp 28",
			addressLocality: "Xã Bình Lợi, Huyện Bình Chánh",
			addressRegion: "TP. Hồ Chí Minh",
			addressCountry: "VN",
			display:
				"1251 Đường Trần Văn Giàu, Ấp 28, Xã Bình Lợi, Huyện Bình Chánh, TP. Hồ Chí Minh",
		},
	},
	phones: {
		hotline: {
			e164: "+84909662808",
			display: "0909 662 808",
		},
		landline: {
			e164: "+842837661614",
			display: "(028) 3766 1614",
		},
	},
	email: "tankhanhphong@tkpcarton.com",
	taxCode: "0310508516",
	experience: {
		phrasing: {
			vi: "hơn 20 năm kinh nghiệm",
			en: "more than 20 years of experience",
			zh: "20 多年经验",
		},
	},
};
