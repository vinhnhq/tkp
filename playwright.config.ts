import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "__tests__",
	use: { baseURL: "http://localhost:3000" },
	projects: [
		{ name: "desktop", use: { viewport: { width: 1280, height: 800 } } },
		{ name: "iPhone 14", use: { ...devices["iPhone 14"] } },
		{ name: "iPhone SE", use: { ...devices["iPhone SE"] } },
	],
	webServer: {
		command: "bun run dev",
		url: "http://localhost:3000/homepage-preview",
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
});
