import { describe, expect, test } from "bun:test";
import { buildMetadata } from "./seo";

const SITE = "https://tkpcarton.com";

describe("buildMetadata", () => {
	test("builds canonical with localized slug for vi", () => {
		const meta = buildMetadata({
			locale: "vi",
			pathname: "/products",
			title: "Sản phẩm",
			description: "Thùng carton chất lượng cao",
			siteUrl: SITE,
		});
		expect(meta.alternates?.canonical).toBe(`${SITE}/vi/san-pham`);
		expect(meta.title).toBe("Sản phẩm");
		expect(meta.description).toBe("Thùng carton chất lượng cao");
	});

	test("builds canonical with localized slug for en", () => {
		const meta = buildMetadata({
			locale: "en",
			pathname: "/products",
			title: "Products",
			description: "High-quality corrugated boxes",
			siteUrl: SITE,
		});
		expect(meta.alternates?.canonical).toBe(`${SITE}/en/products`);
	});

	test("builds canonical with localized slug for zh", () => {
		const meta = buildMetadata({
			locale: "zh",
			pathname: "/products",
			title: "产品",
			description: "优质瓦楞纸箱",
			siteUrl: SITE,
		});
		expect(meta.alternates?.canonical).toBe(`${SITE}/zh/产品`);
	});

	test("emits hreflang alternates for all locales plus x-default", () => {
		const meta = buildMetadata({
			locale: "en",
			pathname: "/products",
			title: "Products",
			description: "x",
			siteUrl: SITE,
		});
		const langs = meta.alternates?.languages as Record<string, string>;
		expect(langs.vi).toBe(`${SITE}/vi/san-pham`);
		expect(langs.en).toBe(`${SITE}/en/products`);
		expect(langs.zh).toBe(`${SITE}/zh/产品`);
		expect(langs["x-default"]).toBe(`${SITE}/vi/san-pham`);
	});

	test("handles root pathname", () => {
		const meta = buildMetadata({
			locale: "vi",
			pathname: "/",
			title: "Trang chủ",
			description: "x",
			siteUrl: SITE,
		});
		expect(meta.alternates?.canonical).toBe(`${SITE}/vi`);
		const langs = meta.alternates?.languages as Record<string, string>;
		expect(langs["x-default"]).toBe(`${SITE}/vi`);
		expect(langs.en).toBe(`${SITE}/en`);
	});

	test("substitutes dynamic slug params", () => {
		const meta = buildMetadata({
			locale: "vi",
			pathname: "/products/[slug]",
			params: { slug: "carton-5-lop" },
			title: "Carton 5 lớp",
			description: "x",
			siteUrl: SITE,
		});
		expect(meta.alternates?.canonical).toBe(`${SITE}/vi/san-pham/carton-5-lop`);
		const langs = meta.alternates?.languages as Record<string, string>;
		expect(langs.en).toBe(`${SITE}/en/products/carton-5-lop`);
	});

	test("emits OpenGraph and Twitter cards with locale", () => {
		const meta = buildMetadata({
			locale: "vi",
			pathname: "/",
			title: "TKP",
			description: "Tân Khánh Phong",
			siteUrl: SITE,
		});
		expect(meta.openGraph?.title).toBe("TKP");
		expect(meta.openGraph?.description).toBe("Tân Khánh Phong");
		expect(meta.openGraph?.url).toBe(`${SITE}/vi`);
		expect(meta.openGraph?.locale).toBe("vi_VN");
		expect(meta.twitter?.card).toBe("summary_large_image");
		expect(meta.twitter?.title).toBe("TKP");
	});

	test("uses provided ogImage when supplied", () => {
		const meta = buildMetadata({
			locale: "vi",
			pathname: "/",
			title: "TKP",
			description: "x",
			ogImage: "/og/custom.jpg",
			siteUrl: SITE,
		});
		const images = meta.openGraph?.images;
		const url =
			Array.isArray(images) && images[0] && typeof images[0] === "object"
				? (images[0] as { url: string }).url
				: undefined;
		expect(url).toBe(`${SITE}/og/custom.jpg`);
	});
});
