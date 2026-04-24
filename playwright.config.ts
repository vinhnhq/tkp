import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "__tests__",
	projects: [
		{ name: "iPhone 14", use: { ...devices["iPhone 14"] } },
		{ name: "iPhone SE", use: { ...devices["iPhone SE"] } },
	],
	webServer: {
		command: "bun run dev",
		url: "http://localhost:3000",
		reuseExistingServer: !process.env.CI,
	},
});
