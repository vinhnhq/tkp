import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { UnderConstruction } from "@/components/layout/under-construction";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";

type Locale = (typeof routing.locales)[number];

/**
 * Per-locale homepage metadata. From `__project__/docs/seo/og-cards.md`
 * § Per-page content matrix → `/` Home row.
 */
const HOME_METADATA: Record<
	Locale,
	{ title: string; description: string; siteName: string }
> = {
	vi: {
		title: "Tân Khánh Phong — Bao bì carton sản xuất tại TP.HCM",
		description:
			"Xưởng sản xuất thùng carton 3/5/7 lớp cho hàng xuất khẩu, nông sản, điện tử, thực phẩm. Linh hoạt với đơn gấp, giao đúng hẹn.",
		siteName: "Tân Khánh Phong Carton",
	},
	en: {
		title: "TKP Carton — Corrugated packaging manufacturer in HCMC",
		description:
			"A Ho Chi Minh City carton factory producing 3, 5 and 7-layer boxes for export, agriculture, electronics and food. Fast-turn, on-time delivery.",
		siteName: "TKP Carton",
	},
	zh: {
		title: "TKP 纸箱 — 胡志明市瓦楞纸箱厂家",
		description:
			"胡志明市瓦楞纸箱生产厂，提供 3/5/7 层纸箱，适用于出口、农产品、电子、食品。支持急单，准时交付。",
		siteName: "TKP 纸箱",
	},
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) return {};
	const meta = HOME_METADATA[locale as Locale];
	return buildMetadata({
		locale: locale as Locale,
		pathname: "/",
		title: meta.title,
		description: meta.description,
		siteName: meta.siteName,
	});
}

export default async function LocaleHome({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <UnderConstruction title="Trang chủ đang được hoàn thiện." />;
}
