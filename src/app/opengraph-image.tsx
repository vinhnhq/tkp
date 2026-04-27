import { ImageResponse } from "next/og";

/**
 * Static OG image fallback.
 *
 * Layout per `__project__/docs/seo/og-cards.md` § Visual layout spec:
 *   - 1200 × 630, kraft `#faf7f2` background
 *   - TKP wordmark top-left
 *   - Default VI title (home row from § Per-page content matrix)
 *   - Default VI description below title
 *   - `tkpcarton.com` URL stamp + accent bar bottom-right
 *
 * Not per-locale yet — one branded card replaces the blue Vercel default.
 * Per-locale renderer waits until product pages need locale-specific cards.
 *
 * Twitter card re-exports this default via `src/app/twitter-image.tsx`.
 */

export const alt = "TKP Carton — Bao bì carton sản xuất tại TP.HCM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Tokens mirror `src/styles/globals.css` @theme.
const KRAFT_BG = "#faf7f2";
const INK = "#0e0e0c";
const INK_SOFT = "#2a2a26";
const ACCENT = "#d9532b";
const KRAFT_FAINT = "rgba(140, 106, 63, 0.05)";

// Default copy = VI home row from og-cards.md § Per-page content matrix.
const DEFAULT_TITLE = "Tân Khánh Phong — Bao bì carton sản xuất tại TP.HCM";
const DEFAULT_DESCRIPTION =
	"Xưởng sản xuất thùng carton 3, 5, 7 lớp cho hàng xuất khẩu, nông sản, điện tử, thực phẩm. Linh hoạt với đơn gấp, giao đúng hẹn.";

/**
 * Fetch Be Vietnam Pro at request time. Returns `undefined` on any failure
 * so satori falls back to its built-in fonts — the card still renders, just
 * with a less-tuned typeface.
 *
 * NOTE on format: satori (next/og) supports OTF/TTF/WOFF but not WOFF2.
 * Modern Google Fonts default UAs to WOFF2; using an older UA gets WOFF.
 */
async function loadBeVietnamPro(): Promise<ArrayBuffer | undefined> {
	try {
		const cssUrl = "https://fonts.googleapis.com/css?family=Be+Vietnam+Pro:700";
		const cssRes = await fetch(cssUrl, {
			// Older UA → Google serves WOFF rather than WOFF2.
			headers: {
				"User-Agent":
					"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41 Safari/537.36",
			},
		});
		if (!cssRes.ok) return undefined;
		const css = await cssRes.text();
		const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('woff'\)/);
		if (!match) return undefined;
		const fontRes = await fetch(match[1]);
		if (!fontRes.ok) return undefined;
		return await fontRes.arrayBuffer();
	} catch {
		return undefined;
	}
}

export default async function OpengraphImage() {
	const fontData = await loadBeVietnamPro();

	const fonts = fontData
		? [
				{
					name: "Be Vietnam Pro",
					data: fontData,
					weight: 700 as const,
					style: "normal" as const,
				},
			]
		: undefined;

	const fontFamily = fontData ? "Be Vietnam Pro" : "sans-serif";

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				background: KRAFT_BG,
				padding: 100,
				fontFamily,
				position: "relative",
			}}
		>
			{/* Faint corrugation block in bottom-right quadrant — kept simple
			    so it renders reliably in satori without external SVG. */}
			<div
				style={{
					position: "absolute",
					right: 0,
					bottom: 0,
					width: 600,
					height: 315,
					background: KRAFT_FAINT,
					display: "flex",
				}}
			/>

			{/* TKP wordmark, top-left */}
			<div
				style={{
					fontSize: 48,
					fontWeight: 700,
					letterSpacing: 4,
					color: INK,
					display: "flex",
				}}
			>
				TKP
			</div>

			{/* Title + description block, center-left */}
			<div
				style={{
					marginTop: 96,
					display: "flex",
					flexDirection: "column",
					maxWidth: 1000,
				}}
			>
				<div
					style={{
						fontSize: 72,
						fontWeight: 700,
						color: INK,
						lineHeight: 1.1,
						display: "flex",
					}}
				>
					{DEFAULT_TITLE}
				</div>
				<div
					style={{
						marginTop: 32,
						fontSize: 30,
						color: INK_SOFT,
						lineHeight: 1.35,
						display: "flex",
					}}
				>
					{DEFAULT_DESCRIPTION}
				</div>
			</div>

			{/* URL stamp + accent bar, bottom-right */}
			<div
				style={{
					position: "absolute",
					right: 100,
					bottom: 100,
					display: "flex",
					alignItems: "center",
					gap: 16,
				}}
			>
				<div
					style={{
						fontSize: 24,
						color: INK_SOFT,
						display: "flex",
					}}
				>
					tkpcarton.com
				</div>
				<div
					style={{
						width: 120,
						height: 4,
						background: ACCENT,
						display: "flex",
					}}
				/>
			</div>
		</div>,
		{
			...size,
			fonts,
		},
	);
}
