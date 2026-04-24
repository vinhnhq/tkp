import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{ source: "/", destination: "/vi", permanent: false },
		];
	},
	async rewrites() {
		return [
			// Vietnamese slugs → canonical filesystem paths under app/[locale]/
			{ source: "/vi/san-pham", destination: "/vi/products" },
			{ source: "/vi/san-pham/:slug", destination: "/vi/products/:slug" },
			{ source: "/vi/quy-trinh", destination: "/vi/process" },
			{ source: "/vi/ve-chung-toi", destination: "/vi/about" },
			{ source: "/vi/lien-he", destination: "/vi/contact" },
			// Chinese slugs → canonical filesystem paths
			{ source: "/zh/产品", destination: "/zh/products" },
			{ source: "/zh/产品/:slug", destination: "/zh/products/:slug" },
			{ source: "/zh/流程", destination: "/zh/process" },
			{ source: "/zh/关于", destination: "/zh/about" },
			{ source: "/zh/联系", destination: "/zh/contact" },
		];
	},
};

export default withNextIntl(nextConfig);
