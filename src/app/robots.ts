import type { MetadataRoute } from "next";

function siteUrl(): string {
	return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export default function robots(): MetadataRoute.Robots {
	const isProduction = process.env.VERCEL_ENV === "production";

	if (!isProduction) {
		return {
			rules: [{ userAgent: "*", disallow: "/" }],
			sitemap: `${siteUrl()}/sitemap.xml`,
		};
	}

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/homepage-preview/"],
			},
		],
		sitemap: `${siteUrl()}/sitemap.xml`,
		host: siteUrl(),
	};
}
