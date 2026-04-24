import { expect, test } from "@playwright/test";

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

test.describe("/homepage-preview gallery", () => {
	test("gallery lists all 10 variant cards", async ({ page }) => {
		const errors: string[] = [];
		page.on("pageerror", (err) => errors.push(err.message));

		await page.goto("/homepage-preview");

		await expect(page.locator("h1")).toHaveCount(1);
		for (const v of variants) {
			await expect(
				page.locator(`a[href="/homepage-preview/${v}"]`),
			).toBeVisible();
		}

		expect(errors, errors.join("\n")).toEqual([]);
	});
});

test.describe("variant smoke tests", () => {
	for (const v of variants) {
		test(`/${v} returns 200 with no runtime errors`, async ({ page }) => {
			const errors: string[] = [];
			page.on("pageerror", (err) => errors.push(err.message));
			page.on("console", (msg) => {
				if (msg.type() === "error") errors.push(msg.text());
			});

			const response = await page.goto(`/homepage-preview/${v}`);
			expect(response?.status()).toBe(200);
			await expect(page.locator("h1")).toHaveCount(1);
			expect(errors, errors.join("\n")).toEqual([]);
		});
	}
});

test.describe("/homepage-preview/v4 (materiality — reference variant)", () => {
	test("renders all sections with correct landmarks", async ({ page }) => {
		await page.goto("/homepage-preview/v4");

		for (const id of [
			"top",
			"products",
			"industries",
			"process",
			"materials",
			"customers",
			"contact",
		]) {
			await expect(page.locator(`section#${id}`)).toBeVisible();
		}

		await expect(
			page.getByRole("link", { name: /0909 66 2808/ }).first(),
		).toBeVisible();
	});

	test("hero content is present with new tagline", async ({ page }) => {
		await page.goto("/homepage-preview/v4");
		await expect(page.getByRole("heading", { level: 1 })).toContainText(
			"Từ giấy đến thùng",
		);
		await expect(page.getByText("Từ 1997").first()).toBeVisible();
	});
});
