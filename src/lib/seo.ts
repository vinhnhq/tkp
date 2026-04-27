import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];
type Pathname = keyof typeof routing.pathnames;

const OG_LOCALES: Record<Locale, string> = {
	vi: "vi_VN",
	en: "en_US",
	zh: "zh_CN",
};

const DEFAULT_SITE_URL =
	process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function localizedSlug(pathname: Pathname, locale: Locale): string {
	const entry = routing.pathnames[pathname];
	if (typeof entry === "string") return entry;
	return entry[locale];
}

function substituteParams(
	template: string,
	params: Record<string, string> | undefined,
): string {
	if (!params) return template;
	return template.replace(/\[(\w+)\]/g, (_, key) => {
		const value = params[key];
		if (!value)
			throw new Error(`Missing param "${key}" for pathname "${template}"`);
		return value;
	});
}

function absoluteUrl(
	siteUrl: string,
	locale: Locale,
	pathname: Pathname,
	params: Record<string, string> | undefined,
): string {
	const slug = substituteParams(localizedSlug(pathname, locale), params);
	const localePath = `/${locale}`;
	const tail = slug === "/" ? "" : slug;
	return `${siteUrl}${localePath}${tail}`;
}

export type BuildMetadataInput = {
	locale: Locale;
	pathname: Pathname;
	params?: Record<string, string>;
	title: string;
	description: string;
	ogImage?: string;
	siteUrl?: string;
	/**
	 * og:site_name. Per-locale value from `og-cards.md` § Brand strings
	 * (e.g. "Tân Khánh Phong Carton" / "TKP Carton" / "TKP 纸箱").
	 * Falls back to "Tân Khánh Phong" when not provided.
	 */
	siteName?: string;
};

export function buildMetadata(input: BuildMetadataInput): Metadata {
	const siteUrl = input.siteUrl ?? DEFAULT_SITE_URL;
	const canonical = absoluteUrl(
		siteUrl,
		input.locale,
		input.pathname,
		input.params,
	);

	const languages: Record<string, string> = {};
	for (const l of routing.locales) {
		languages[l] = absoluteUrl(siteUrl, l, input.pathname, input.params);
	}
	languages["x-default"] = absoluteUrl(
		siteUrl,
		routing.defaultLocale,
		input.pathname,
		input.params,
	);

	const ogImageUrl = input.ogImage
		? `${siteUrl}${input.ogImage.startsWith("/") ? "" : "/"}${input.ogImage}`
		: `${siteUrl}/opengraph-image`;

	return {
		// `absolute` opts out of the root layout's title.template so titles
		// authored from `og-cards.md` (which already include brand suffixes
		// like "· TKP" or "— TKP Carton") don't double-brand.
		title: { absolute: input.title },
		description: input.description,
		alternates: {
			canonical,
			languages,
		},
		openGraph: {
			type: "website",
			title: input.title,
			description: input.description,
			url: canonical,
			siteName: input.siteName ?? "Tân Khánh Phong",
			locale: OG_LOCALES[input.locale],
			images: [{ url: ogImageUrl, width: 1200, height: 630 }],
		},
		twitter: {
			card: "summary_large_image",
			title: input.title,
			description: input.description,
			images: [ogImageUrl],
		},
	};
}
