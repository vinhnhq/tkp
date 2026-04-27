import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";

type Locale = (typeof routing.locales)[number];

/**
 * Per-locale sitewide defaults. From `__project__/docs/seo/og-cards.md`
 * § Sitewide defaults. Used when a page does not override its own metadata.
 */
const SITEWIDE_DEFAULTS: Record<
	Locale,
	{ title: string; description: string; siteName: string }
> = {
	vi: {
		title: "Tân Khánh Phong — Bao bì carton, TP.HCM",
		description:
			"Sản xuất thùng carton 3, 5, 7 lớp cho nông sản, điện tử, thời trang, thực phẩm, mỹ phẩm. Giao tận HCMC và các tỉnh lân cận.",
		siteName: "Tân Khánh Phong Carton",
	},
	en: {
		title: "TKP Carton — Corrugated packaging, HCMC, Vietnam",
		description:
			"Manufacturer of 3, 5 and 7-layer corrugated carton boxes for agriculture, electronics, fashion, food and cosmetics. Based in Ho Chi Minh City, serving Vietnam and export.",
		siteName: "TKP Carton",
	},
	zh: {
		title: "TKP 纸箱 — 越南胡志明市瓦楞纸箱厂家",
		description:
			"生产 3 层、5 层、7 层瓦楞纸箱，适用于农产品、电子、服装、食品、化妆品。胡志明市工厂，支持越南本土及出口订单。",
		siteName: "TKP 纸箱",
	},
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) return {};
	const defaults = SITEWIDE_DEFAULTS[locale as Locale];
	return buildMetadata({
		locale: locale as Locale,
		pathname: "/",
		title: defaults.title,
		description: defaults.description,
		siteName: defaults.siteName,
	});
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) notFound();
	setRequestLocale(locale);
	const messages = await getMessages();
	return (
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
}
