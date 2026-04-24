import { describe, expect, test } from "bun:test";
import {
	breadcrumbListSchema,
	contactPointSchema,
	localBusinessSchema,
	organizationSchema,
	productSchema,
} from "./schema";

describe("organizationSchema", () => {
	test("emits required schema.org fields", () => {
		const out = organizationSchema({
			name: "Test Co",
			legalName: "Test Co Ltd",
			url: "https://test.example",
			logo: "https://test.example/logo.png",
			sameAs: ["https://facebook.com/test"],
			foundingDate: "1997",
		});
		expect(out["@context"]).toBe("https://schema.org");
		expect(out["@type"]).toBe("Organization");
		expect(out.name).toBe("Test Co");
		expect(out.legalName).toBe("Test Co Ltd");
		expect(out.url).toBe("https://test.example");
		expect(out.logo).toBe("https://test.example/logo.png");
		expect(out.sameAs).toEqual(["https://facebook.com/test"]);
		expect(out.foundingDate).toBe("1997");
	});

	test("omits optional fields when not provided", () => {
		const out = organizationSchema({
			name: "Test",
			url: "https://x.example",
		});
		expect(out.legalName).toBeUndefined();
		expect(out.sameAs).toBeUndefined();
	});
});

describe("localBusinessSchema", () => {
	test("emits address and telephone", () => {
		const out = localBusinessSchema({
			name: "Test",
			url: "https://x.example",
			telephone: "+842812345678",
			address: {
				streetAddress: "123 Main",
				addressLocality: "Ho Chi Minh City",
				addressCountry: "VN",
			},
		});
		expect(out["@type"]).toBe("LocalBusiness");
		expect(out.telephone).toBe("+842812345678");
		const address = out.address as Record<string, unknown>;
		expect(address["@type"]).toBe("PostalAddress");
		expect(address.streetAddress).toBe("123 Main");
		expect(address.addressCountry).toBe("VN");
	});

	test("emits openingHoursSpecification when provided", () => {
		const out = localBusinessSchema({
			name: "Test",
			url: "https://x.example",
			address: { addressLocality: "x", addressCountry: "VN" },
			openingHours: [
				{ days: ["Monday", "Friday"], opens: "08:00", closes: "17:00" },
			],
		});
		const spec = out.openingHoursSpecification as Array<
			Record<string, unknown>
		>;
		expect(spec).toHaveLength(1);
		expect(spec[0]["@type"]).toBe("OpeningHoursSpecification");
		expect(spec[0].dayOfWeek).toEqual(["Monday", "Friday"]);
		expect(spec[0].opens).toBe("08:00");
	});

	test("emits geo when provided", () => {
		const out = localBusinessSchema({
			name: "Test",
			url: "https://x.example",
			address: { addressLocality: "x", addressCountry: "VN" },
			geo: { latitude: 10.77, longitude: 106.69 },
		});
		const geo = out.geo as Record<string, unknown>;
		expect(geo["@type"]).toBe("GeoCoordinates");
		expect(geo.latitude).toBe(10.77);
	});
});

describe("breadcrumbListSchema", () => {
	test("numbers items starting at 1", () => {
		const out = breadcrumbListSchema([
			{ name: "Home", url: "https://x.example/" },
			{ name: "Products", url: "https://x.example/products" },
			{ name: "5-layer", url: "https://x.example/products/5-layer" },
		]);
		expect(out["@type"]).toBe("BreadcrumbList");
		const items = out.itemListElement as Array<Record<string, unknown>>;
		expect(items).toHaveLength(3);
		expect(items[0].position).toBe(1);
		expect(items[0]["@type"]).toBe("ListItem");
		expect(items[0].name).toBe("Home");
		expect(items[0].item).toBe("https://x.example/");
		expect(items[2].position).toBe(3);
	});
});

describe("contactPointSchema", () => {
	test("includes required fields", () => {
		const out = contactPointSchema({
			telephone: "+842812345678",
			contactType: "customer service",
			availableLanguage: ["vi", "en"],
			areaServed: "VN",
		});
		expect(out["@type"]).toBe("ContactPoint");
		expect(out.telephone).toBe("+842812345678");
		expect(out.contactType).toBe("customer service");
		expect(out.availableLanguage).toEqual(["vi", "en"]);
		expect(out.areaServed).toBe("VN");
	});
});

describe("productSchema", () => {
	test("emits name, description, image, brand", () => {
		const out = productSchema({
			name: "Carton 5 lớp",
			description: "Thùng carton 5 lớp xuất khẩu",
			image: ["https://x.example/p1.jpg"],
			brand: "TKP",
			sku: "TKP-5L-001",
		});
		expect(out["@context"]).toBe("https://schema.org");
		expect(out["@type"]).toBe("Product");
		expect(out.name).toBe("Carton 5 lớp");
		expect(out.description).toBe("Thùng carton 5 lớp xuất khẩu");
		expect(out.image).toEqual(["https://x.example/p1.jpg"]);
		const brand = out.brand as Record<string, unknown>;
		expect(brand["@type"]).toBe("Brand");
		expect(brand.name).toBe("TKP");
		expect(out.sku).toBe("TKP-5L-001");
	});

	test("omits optional sku when not provided", () => {
		const out = productSchema({
			name: "x",
			description: "y",
			image: ["z"],
			brand: "b",
		});
		expect(out.sku).toBeUndefined();
	});
});
