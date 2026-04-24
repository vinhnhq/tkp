import { test } from "@playwright/test";

const variants = [
	"v1",
	"v2",
	"v3",
	"v4",
	"v5",
	"v6",
	"v7",
	"v8",
	"v9",
	"v10",
] as const;

test.describe("/homepage-preview visual snapshots", () => {
	test("gallery — reduced motion", async ({ browser }, testInfo) => {
		const context = await browser.newContext({ reducedMotion: "reduce" });
		const page = await context.newPage();
		await page.goto("/homepage-preview");
		await page.waitForLoadState("networkidle");
		await page.screenshot({
			path: `__tests__/test-results/preview-index-${testInfo.project.name}.png`,
			fullPage: true,
		});
		await context.close();
	});

	for (const v of variants) {
		test(`${v} — reduced motion`, async ({ browser }, testInfo) => {
			const context = await browser.newContext({ reducedMotion: "reduce" });
			const page = await context.newPage();
			await page.goto(`/homepage-preview/${v}`);
			await page.waitForLoadState("networkidle");
			await page.screenshot({
				path: `__tests__/test-results/preview-${v}-${testInfo.project.name}.png`,
				fullPage: true,
			});
			await context.close();
		});
	}
});
