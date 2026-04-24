// V7 — Aesop / Muji minimal
// Ultra-white canvas, narrow single column, product as specimen.
// Whitespace-forward, restrained. Reads like a brand book.

import { NumberCounter } from "@/components/ui/NumberCounter";
import { PreviewSwitcher } from "@/components/ui/PreviewSwitcher";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import {
	contact,
	customers,
	heroCopy,
	industries,
	manifesto,
	materials,
	nav,
	processSteps,
	products,
	stats,
} from "@/content/homepage-preview/shared";
import { unsplash } from "@/content/homepage-preview/unsplash";

const ink = "#1a1a18";
const soft = "#8a8580";
const accent = "#8c6a3f";

export default function HomepagePreviewV7() {
	return (
		<div className="min-h-screen bg-white" style={{ color: ink }}>
			<SmoothScroll />
			<TopNav />
			<main>
				<Hero />
				<Manifesto />
				<ProductRange />
				<Stats />
				<IndustriesList />
				<Process />
				<Materials />
				<Customers />
				<Contact />
			</main>
			<Footer />
			<PreviewSwitcher current="V7" />
		</div>
	);
}

function TopNav() {
	return (
		<header className="sticky top-0 z-30 bg-white/90 backdrop-blur">
			<div className="mx-auto max-w-[1100px] flex items-center justify-between px-6 sm:px-10 py-6">
				<a
					href="#top"
					className="font-mono text-[11px] tracking-[0.3em] uppercase"
				>
					Tân Khánh Phong
				</a>
				<nav aria-label="Primary" className="hidden md:flex items-center gap-8">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="font-mono text-[10px] uppercase tracking-[0.25em]"
							style={{ color: soft }}
						>
							{item.short}
						</a>
					))}
				</nav>
				<a
					href="tel:0909662808"
					className="font-mono text-[10px] uppercase tracking-[0.25em]"
				>
					Liên hệ
				</a>
			</div>
		</header>
	);
}

function Hero() {
	return (
		<section
			id="top"
			className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 px-6 sm:px-10"
		>
			<div className="mx-auto max-w-[900px] text-center">
				<p
					className="font-mono text-[10px] uppercase tracking-[0.35em] mb-12"
					style={{ color: soft }}
				>
					{heroCopy.kicker}
				</p>
				<RevealOnScroll
					as="h1"
					className="text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.08] tracking-tight"
					style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
				>
					{heroCopy.titleLine1}{" "}
					<span className="italic">{heroCopy.titleLine2Italic}</span>
				</RevealOnScroll>
				<RevealOnScroll
					as="p"
					delay={0.1}
					className="mt-10 text-base sm:text-lg max-w-2xl mx-auto leading-[1.65]"
					style={{ color: soft }}
				>
					{heroCopy.body}
				</RevealOnScroll>
				<RevealOnScroll delay={0.2} className="mt-12">
					<a
						href={heroCopy.primaryCta.href}
						className="inline-block font-mono text-[11px] uppercase tracking-[0.3em] border-b pb-2 hover:border-opacity-100"
						style={{ borderColor: ink, color: ink }}
					>
						{heroCopy.primaryCta.label} — {heroCopy.primaryCta.phone}
					</a>
				</RevealOnScroll>
			</div>

			<RevealOnScroll
				delay={0.3}
				className="mx-auto max-w-[1100px] mt-14 sm:mt-20 lg:mt-24 aspect-[16/9] overflow-hidden"
			>
				{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
				<img
					src={unsplash.hero}
					alt="Sản xuất tại TKP"
					className="w-full h-full object-cover"
				/>
			</RevealOnScroll>
		</section>
	);
}

function Manifesto() {
	return (
		<section
			className="py-16 sm:py-24 lg:py-32 px-6 sm:px-10 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div className="mx-auto max-w-[700px] text-center">
				<p
					className="font-mono text-[10px] uppercase tracking-[0.35em] mb-12"
					style={{ color: soft }}
				>
					{manifesto.kicker}
				</p>
				<RevealOnScroll
					as="p"
					className="text-xl sm:text-2xl lg:text-3xl leading-[1.5]"
					style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
				>
					{manifesto.body}
				</RevealOnScroll>
			</div>
		</section>
	);
}

function ProductRange() {
	return (
		<section
			id="products"
			className="py-16 sm:py-24 lg:py-32 px-6 sm:px-10 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div className="mx-auto max-w-[1100px]">
				<div className="text-center mb-20">
					<p
						className="font-mono text-[10px] uppercase tracking-[0.35em] mb-6"
						style={{ color: soft }}
					>
						01 — Sản phẩm
					</p>
					<h2
						className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
						style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
					>
						Ba cấu trúc — <span className="italic">ba nhịp vận chuyển.</span>
					</h2>
				</div>

				<div className="space-y-32">
					{products.map((p, i) => (
						<RevealOnScroll
							key={p.layer}
							delay={i * 0.05}
							className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
						>
							<div
								className={`${
									i % 2 === 0 ? "md:order-1" : "md:order-2"
								} aspect-[4/5] overflow-hidden`}
							>
								{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
								<img
									src={p.image}
									alt={p.name}
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>
							<div
								className={`${
									i % 2 === 0 ? "md:order-2" : "md:order-1"
								} max-w-md`}
							>
								<p
									className="font-mono text-[10px] uppercase tracking-[0.35em] mb-5"
									style={{ color: soft }}
								>
									N.º 0{i + 1} — {p.layer}
								</p>
								<h3
									className="text-3xl sm:text-4xl leading-tight mb-6"
									style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
								>
									{p.name}
								</h3>
								<p className="text-base leading-[1.7]" style={{ color: soft }}>
									{p.purpose}
								</p>
								<a
									href="#contact"
									className="inline-block mt-8 font-mono text-[10px] uppercase tracking-[0.3em] border-b pb-1"
									style={{ borderColor: ink, color: ink }}
								>
									Yêu cầu báo giá →
								</a>
							</div>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}

function Stats() {
	return (
		<section
			className="py-24 px-6 sm:px-10 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div className="mx-auto max-w-[1100px] grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
				{stats.map((s) => (
					<div key={s.label}>
						<div
							className="text-5xl lg:text-6xl leading-none"
							style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
						>
							<NumberCounter to={s.to} suffix={s.suffix} duration={0.6} />
						</div>
						<div
							className="mt-4 font-mono text-[10px] uppercase tracking-[0.35em]"
							style={{ color: soft }}
						>
							{s.label}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function IndustriesList() {
	return (
		<section
			id="industries"
			className="py-16 sm:py-24 lg:py-32 px-6 sm:px-10 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div className="mx-auto max-w-[700px] text-center mb-16">
				<p
					className="font-mono text-[10px] uppercase tracking-[0.35em] mb-6"
					style={{ color: soft }}
				>
					02 — Ngành hàng
				</p>
				<h2
					className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
					style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
				>
					Năm lĩnh vực, một tiêu chuẩn.
				</h2>
			</div>

			<ul
				className="mx-auto max-w-[900px] border-t"
				style={{ borderColor: `${soft}44` }}
			>
				{industries.map((ind) => (
					<li
						key={ind.key}
						className="flex items-center justify-between py-6 border-b"
						style={{ borderColor: `${soft}44` }}
					>
						<span
							className="text-xl sm:text-2xl"
							style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
						>
							{ind.label}
						</span>
						<span
							className="font-mono text-[10px] uppercase tracking-[0.3em]"
							style={{ color: soft }}
						>
							Bao bì chuyên dụng →
						</span>
					</li>
				))}
			</ul>
		</section>
	);
}

function Process() {
	return (
		<section
			id="process"
			className="py-16 sm:py-24 lg:py-32 px-6 sm:px-10 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div className="mx-auto max-w-[1100px]">
				<div className="text-center mb-20">
					<p
						className="font-mono text-[10px] uppercase tracking-[0.35em] mb-6"
						style={{ color: soft }}
					>
						03 — Quy trình
					</p>
					<h2
						className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
						style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
					>
						Bốn bước — không tắt.
					</h2>
				</div>

				<ol className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-[900px] mx-auto">
					{processSteps.map((step, i) => (
						<RevealOnScroll
							as="li"
							key={step.no}
							delay={i * 0.05}
							className="text-center"
						>
							<div
								className="text-5xl mb-6"
								style={{ fontFamily: "var(--font-display)", color: accent }}
							>
								{step.no}
							</div>
							<h3
								className="text-2xl leading-tight mb-3"
								style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
							>
								{step.title}
							</h3>
							<p
								className="text-sm leading-[1.7] max-w-sm mx-auto"
								style={{ color: soft }}
							>
								{step.body}
							</p>
						</RevealOnScroll>
					))}
				</ol>
			</div>
		</section>
	);
}

function Materials() {
	return (
		<section
			id="materials"
			className="py-16 sm:py-24 lg:py-32 px-6 sm:px-10 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div className="mx-auto max-w-[1100px]">
				<div className="text-center mb-16">
					<p
						className="font-mono text-[10px] uppercase tracking-[0.35em] mb-6"
						style={{ color: soft }}
					>
						04 — Vật liệu
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-16 md:gap-24">
					<div>
						<h3
							className="text-2xl sm:text-3xl leading-tight mb-6"
							style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
						>
							{materials.paper.title}
						</h3>
						<p className="text-base leading-[1.7]" style={{ color: soft }}>
							{materials.paper.body}
						</p>
					</div>
					<div>
						<h3
							className="text-2xl sm:text-3xl leading-tight mb-6"
							style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
						>
							{materials.printing.title}
						</h3>
						<ul className="space-y-3">
							{materials.printing.items.map((it) => (
								<li
									key={it.label}
									className="flex justify-between py-2 border-b font-mono text-xs uppercase tracking-wider"
									style={{ borderColor: `${soft}44` }}
								>
									<span>{it.label}</span>
									<span style={{ color: soft }}>{it.note}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

function Customers() {
	return (
		<section
			id="customers"
			className="py-16 sm:py-24 lg:py-32 px-6 sm:px-10 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div className="mx-auto max-w-[1100px]">
				<div className="text-center mb-16">
					<p
						className="font-mono text-[10px] uppercase tracking-[0.35em] mb-6"
						style={{ color: soft }}
					>
						{customers.kicker}
					</p>
					<h2
						className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
						style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
					>
						{customers.heading}
					</h2>
				</div>

				<ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-14 items-center">
					{customers.logos.map((logo) => (
						<li
							key={logo.src}
							className="flex items-center justify-center h-16"
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={logo.src}
								alt={logo.name}
								className="max-h-12 max-w-[70%] object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
								loading="lazy"
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

function Contact() {
	return (
		<section
			id="contact"
			className="py-16 sm:py-24 lg:py-32 px-6 sm:px-10 border-t text-center"
			style={{ borderColor: `${soft}33` }}
		>
			<div className="mx-auto max-w-[700px]">
				<p
					className="font-mono text-[10px] uppercase tracking-[0.35em] mb-8"
					style={{ color: soft }}
				>
					05 — Liên hệ
				</p>
				<p
					className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-12"
					style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
				>
					{contact.headline}
				</p>
				<div className="space-y-6 font-mono text-sm">
					{contact.hotlines.map((tel) => (
						<a
							key={tel}
							href={`tel:${tel.replace(/\s/g, "")}`}
							className="block text-lg"
						>
							{tel}
						</a>
					))}
					<a
						href={`mailto:${contact.email}`}
						className="block text-base break-all"
						style={{ color: soft }}
					>
						{contact.email}
					</a>
				</div>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer
			className="py-10 px-6 sm:px-10 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div
				className="mx-auto max-w-[1100px] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em]"
				style={{ color: soft }}
			>
				<span>TKP — Tân Khánh Phong · Thành lập 1997 · TP.HCM</span>
				<span>Bản xem thử · V7 Tối giản</span>
			</div>
		</footer>
	);
}
