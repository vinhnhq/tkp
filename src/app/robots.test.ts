import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import robots from "./robots";

const originalEnv = { ...process.env };

beforeEach(() => {
	process.env.NEXT_PUBLIC_SITE_URL = "https://tkpcarton.com";
});

afterEach(() => {
	process.env = { ...originalEnv };
});

describe("robots.ts", () => {
	test("production allows everything except homepage-preview", () => {
		process.env.VERCEL_ENV = "production";
		const r = robots();
		const rule = Array.isArray(r.rules) ? r.rules[0] : r.rules;
		expect(rule?.userAgent).toBe("*");
		expect(rule?.allow).toBe("/");
		expect(rule?.disallow).toContain("/homepage-preview/");
		expect(r.sitemap).toBe("https://tkpcarton.com/sitemap.xml");
	});

	test("preview blocks all crawlers", () => {
		process.env.VERCEL_ENV = "preview";
		const r = robots();
		const rule = Array.isArray(r.rules) ? r.rules[0] : r.rules;
		expect(rule?.userAgent).toBe("*");
		expect(rule?.disallow).toBe("/");
	});

	test("local dev behaves like preview (safe default)", () => {
		delete process.env.VERCEL_ENV;
		const r = robots();
		const rule = Array.isArray(r.rules) ? r.rules[0] : r.rules;
		expect(rule?.disallow).toBe("/");
	});

	test("sitemap URL follows NEXT_PUBLIC_SITE_URL", () => {
		process.env.VERCEL_ENV = "production";
		process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";
		const r = robots();
		expect(r.sitemap).toBe("https://example.com/sitemap.xml");
	});
});
