import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { business } from "@/content/shared/business";
import { localBusinessSchema, organizationSchema } from "@/lib/seo/schema";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tkpcarton.com";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "TKP Carton — Bao bì carton sản xuất tại TP.HCM",
		template: "%s · TKP Carton",
	},
	description:
		"Tân Khánh Phong — xưởng sản xuất thùng carton 3, 5, 7 lớp tại TP.HCM. Phục vụ nông sản, điện tử, thời trang, thực phẩm, mỹ phẩm và hàng xuất khẩu.",
};

/**
 * Sitewide structured data. Injected at the root layout so every page
 * carries it. Values pulled from src/content/shared/business.ts (T504).
 *
 * Two blocks:
 *   - Organization: legal entity, MST registry address, taxID
 *   - LocalBusiness: operational (public-facing) address + ContactPoint
 *
 * Intentionally omits foundingDate per C17 — no specific year confirmed.
 */
const contactPoints = [
	{
		telephone: business.phones.hotline.e164,
		contactType: "customer service",
		availableLanguage: ["vi", "en"],
		areaServed: "VN",
		email: business.email,
	},
	{
		telephone: business.phones.landline.e164,
		contactType: "customer service",
		availableLanguage: ["vi"],
		areaServed: "VN",
	},
];

const organizationLd = organizationSchema({
	name: business.brandName.vi,
	legalName: business.legalName.vi,
	url: SITE_URL,
	description:
		"Xưởng sản xuất thùng carton 3, 5, 7 lớp tại TP. Hồ Chí Minh, Việt Nam.",
	taxID: business.taxCode,
	address: {
		streetAddress: business.address.legal.streetAddress,
		addressLocality: business.address.legal.addressLocality,
		addressRegion: business.address.legal.addressRegion,
		addressCountry: business.address.legal.addressCountry,
	},
	contactPoint: contactPoints,
});

const localBusinessLd = localBusinessSchema({
	name: business.brandName.vi,
	legalName: business.legalName.vi,
	url: SITE_URL,
	description:
		"Xưởng sản xuất thùng carton 3, 5, 7 lớp tại TP. Hồ Chí Minh, Việt Nam.",
	taxID: business.taxCode,
	telephone: business.phones.hotline.e164,
	address: {
		streetAddress: business.address.operational.streetAddress,
		addressLocality: business.address.operational.addressLocality,
		addressRegion: business.address.operational.addressRegion,
		addressCountry: business.address.operational.addressCountry,
	},
	contactPoint: contactPoints,
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<head>
				<script
					type="application/ld+json"
					// JSON.stringify of a typed builder result — safe.
					// biome-ignore lint/security/noDangerouslySetInnerHtml: structured-data injection
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationLd),
					}}
				/>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: structured-data injection
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(localBusinessLd),
					}}
				/>
			</head>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
