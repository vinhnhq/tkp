import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
