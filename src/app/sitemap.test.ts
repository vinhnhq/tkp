import { describe, expect, test } from "bun:test";
import sitemap, { PRODUCT_SLUGS } from "./sitemap";

const originalEnv = process.env.NEXT_PUBLIC_SITE_URL;

function siteUrl() {
	return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

describe("sitemap", () => {
	test("emits one entry per locale × route combo", () => {
		process.env.NEXT_PUBLIC_SITE_URL = "https://tkpcarton.com";
		const entries = sitemap();
		const urls = entries.map((e) => e.url);
		expect(urls).toContain("https://tkpcarton.com/vi");
		expect(urls).toContain("https://tkpcarton.com/en");
		expect(urls).toContain("https://tkpcarton.com/zh");
		expect(urls).toContain("https://tkpcarton.com/vi/san-pham");
		expect(urls).toContain("https://tkpcarton.com/en/products");
		expect(urls).toContain("https://tkpcarton.com/zh/产品");
		expect(urls).toContain("https://tkpcarton.com/vi/quy-trinh");
		expect(urls).toContain("https://tkpcarton.com/vi/ve-chung-toi");
		expect(urls).toContain("https://tkpcarton.com/vi/lien-he");
		process.env.NEXT_PUBLIC_SITE_URL = originalEnv;
	});

	test("each entry has hreflang alternates for all locales", () => {
		const entries = sitemap();
		const products = entries.find((e) => e.url.endsWith("/vi/san-pham"));
		expect(products).toBeDefined();
		const langs = products?.alternates?.languages as
			| Record<string, string>
			| undefined;
		expect(langs?.vi).toBe(`${siteUrl()}/vi/san-pham`);
		expect(langs?.en).toBe(`${siteUrl()}/en/products`);
		expect(langs?.zh).toBe(`${siteUrl()}/zh/产品`);
	});

	test("every entry has lastModified, changeFrequency, priority", () => {
		const entries = sitemap();
		for (const entry of entries) {
			expect(entry.lastModified).toBeDefined();
			expect(entry.changeFrequency).toBeDefined();
			expect(entry.priority).toBeGreaterThan(0);
		}
	});

	test("excludes homepage-preview routes", () => {
		const entries = sitemap();
		const previewed = entries.find((e) => e.url.includes("homepage-preview"));
		expect(previewed).toBeUndefined();
	});

	test("includes product detail pages when slugs registered", () => {
		PRODUCT_SLUGS.push("carton-5-lop");
		try {
			const entries = sitemap();
			const urls = entries.map((e) => e.url);
			expect(urls).toContain(`${siteUrl()}/vi/san-pham/carton-5-lop`);
			expect(urls).toContain(`${siteUrl()}/en/products/carton-5-lop`);
			expect(urls).toContain(`${siteUrl()}/zh/产品/carton-5-lop`);
		} finally {
			PRODUCT_SLUGS.pop();
		}
	});

	test("homepage has highest priority", () => {
		const entries = sitemap();
		const home = entries.find((e) => e.url === `${siteUrl()}/vi`);
		const about = entries.find((e) => e.url === `${siteUrl()}/vi/ve-chung-toi`);
		expect(home?.priority).toBeGreaterThan(about?.priority ?? 0);
	});
});
