import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["vi", "en", "zh"],
	defaultLocale: "vi",
	pathnames: {
		"/": "/",
		"/products": {
			vi: "/san-pham",
			en: "/products",
			zh: "/产品",
		},
		"/products/[slug]": {
			vi: "/san-pham/[slug]",
			en: "/products/[slug]",
			zh: "/产品/[slug]",
		},
		"/process": {
			vi: "/quy-trinh",
			en: "/process",
			zh: "/流程",
		},
		"/about": {
			vi: "/ve-chung-toi",
			en: "/about",
			zh: "/关于",
		},
		"/contact": {
			vi: "/lien-he",
			en: "/contact",
			zh: "/联系",
		},
	},
});
