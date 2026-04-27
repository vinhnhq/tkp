import { describe, expect, test } from "bun:test";
import { business } from "./business";

describe("business config", () => {
	test("exposes bilingual legal name (VN canonical Title Case)", () => {
		expect(business.legalName.vi).toBe(
			"Công ty TNHH Sản Xuất Bao Bì Và Thương Mại Tân Khánh Phong",
		);
		expect(business.legalName.en).toBe(
			"TAN KHANH PHONG PRODUCING PACKING AND TRADING COMPANY LIMITED",
		);
	});

	test("exposes brand names for all three locales", () => {
		expect(business.brandName.vi).toBe("Tân Khánh Phong");
		expect(business.brandName.en).toBe("TKP Carton");
		expect(business.brandName.zh).toBe("TKP 纸箱");
	});

	test("operational address points at Lê Minh Xuân (public-facing)", () => {
		const a = business.address.operational;
		expect(a.streetAddress).toContain("1249-1251 Trần Văn Giàu");
		expect(a.addressLocality).toContain("Lê Minh Xuân");
		expect(a.addressRegion).toBe("TP. Hồ Chí Minh");
		expect(a.addressCountry).toBe("VN");
		expect(a.display).toContain("Lê Minh Xuân");
	});

	test("legal address points at Bình Lợi (MST registry)", () => {
		const a = business.address.legal;
		expect(a.streetAddress).toContain("1251 Đường Trần Văn Giàu");
		expect(a.addressLocality).toContain("Bình Lợi");
		expect(a.addressCountry).toBe("VN");
	});

	test("phones expose E.164 and display formats", () => {
		expect(business.phones.hotline.e164).toBe("+84909662808");
		expect(business.phones.hotline.display).toBe("0909 662 808");
		expect(business.phones.landline.e164).toBe("+842837661614");
		expect(business.phones.landline.display).toBe("(028) 3766 1614");
	});

	test("E.164 numbers contain digits + leading plus only", () => {
		for (const phone of [business.phones.hotline, business.phones.landline]) {
			expect(phone.e164).toMatch(/^\+\d{8,15}$/);
		}
	});

	test("canonical email is on tkpcarton.com (single r)", () => {
		expect(business.email).toBe("tankhanhphong@tkpcarton.com");
		expect(business.email).not.toContain("tkpcarrton");
	});

	test("tax code is the confirmed MST", () => {
		expect(business.taxCode).toBe("0310508516");
	});

	test("experience phrasing avoids specific founding year", () => {
		expect(business.experience.phrasing.vi).toContain("20 năm");
		expect(business.experience.phrasing.en).toMatch(/20 years/);
		expect(business.experience.phrasing.zh).toContain("20");
		// Must not print "since 1997" or any year
		for (const p of Object.values(business.experience.phrasing)) {
			expect(p).not.toMatch(/1997|2010/);
		}
	});

	test("does NOT include foundingDate (per C17 — no year confirmed)", () => {
		// Intentional omission — re-add only when client confirms a founding year.
		expect((business as Record<string, unknown>).foundingDate).toBeUndefined();
	});
});
