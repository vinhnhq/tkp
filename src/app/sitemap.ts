import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];
type Pathname = keyof typeof routing.pathnames;

export const PRODUCT_SLUGS: string[] = [];

type RouteSpec = {
	pathname: Pathname;
	changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
	priority: number;
};

const STATIC_ROUTES: RouteSpec[] = [
	{ pathname: "/", changeFrequency: "weekly", priority: 1.0 },
	{ pathname: "/products", changeFrequency: "monthly", priority: 0.9 },
	{ pathname: "/process", changeFrequency: "monthly", priority: 0.7 },
	{ pathname: "/about", changeFrequency: "monthly", priority: 0.6 },
	{ pathname: "/contact", changeFrequency: "monthly", priority: 0.6 },
];

function siteUrl(): string {
	return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

function localizedSlug(pathname: Pathname, locale: Locale): string {
	const entry = routing.pathnames[pathname];
	if (typeof entry === "string") return entry;
	return entry[locale];
}

function substitute(
	template: string,
	params: Record<string, string> | undefined,
): string {
	if (!params) return template;
	return template.replace(/\[(\w+)\]/g, (_, k) => params[k] ?? `[${k}]`);
}

function absoluteUrl(
	locale: Locale,
	pathname: Pathname,
	params?: Record<string, string>,
): string {
	const slug = substitute(localizedSlug(pathname, locale), params);
	const tail = slug === "/" ? "" : slug;
	return `${siteUrl()}${`/${locale}`}${tail}`;
}

function entry(
	locale: Locale,
	spec: RouteSpec,
	params?: Record<string, string>,
): MetadataRoute.Sitemap[number] {
	const languages: Record<string, string> = {};
	for (const l of routing.locales) {
		languages[l] = absoluteUrl(l, spec.pathname, params);
	}
	return {
		url: absoluteUrl(locale, spec.pathname, params),
		lastModified: new Date(),
		changeFrequency: spec.changeFrequency,
		priority: spec.priority,
		alternates: { languages },
	};
}

export default function sitemap(): MetadataRoute.Sitemap {
	const out: MetadataRoute.Sitemap = [];

	for (const spec of STATIC_ROUTES) {
		for (const locale of routing.locales) {
			out.push(entry(locale, spec));
		}
	}

	const productSpec: RouteSpec = {
		pathname: "/products/[slug]",
		changeFrequency: "monthly",
		priority: 0.8,
	};
	for (const slug of PRODUCT_SLUGS) {
		for (const locale of routing.locales) {
			out.push(entry(locale, productSpec, { slug }));
		}
	}

	return out;
}
