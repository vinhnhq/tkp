// V8 — Dark industrial
// Near-black + kraft accent. Heavy photo-forward. Drama over minimalism.
// Inverse of V1 — darker, more cinematic, more aggressive.

import { NumberCounter } from "@/components/ui/number-counter";
import { PreviewSwitcher } from "@/components/ui/preview-switcher";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
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

const bg = "#141412";
const bgSoft = "#1e1c19";
const paper = "#f0eadf";
const soft = "#9a9690";
const accent = "#d9532b";

export default function HomepagePreviewV8() {
	return (
		<div className="min-h-screen" style={{ background: bg, color: paper }}>
			<SmoothScroll />
			<TopNav />
			<main>
				<Hero />
				<StatsBar />
				<Manifesto />
				<ProductRange />
				<IndustriesShowcase />
				<Process />
				<Materials />
				<Customers />
				<Contact />
			</main>
			<Footer />
			<PreviewSwitcher current="V8" />
		</div>
	);
}

function TopNav() {
	return (
		<header
			className="fixed top-0 inset-x-0 z-40 backdrop-blur-md"
			style={{ background: `${bg}cc`, borderBottom: `1px solid ${soft}33` }}
		>
			<div className="mx-auto max-w-[1500px] flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4">
				<a href="#top" className="font-mono text-sm tracking-[0.2em] uppercase">
					TKP<span style={{ color: accent }}> · </span>1997
				</a>
				<nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="font-mono text-[11px] uppercase tracking-widest hover:text-white transition-colors"
							style={{ color: soft }}
						>
							{item.short}
						</a>
					))}
				</nav>
				<a
					href="tel:0909662808"
					className="font-mono text-xs uppercase tracking-widest px-4 py-2 transition-colors"
					style={{ background: accent, color: "#fff" }}
				>
					0909 66 2808
				</a>
			</div>
		</header>
	);
}

function Hero() {
	return (
		<section
			id="top"
			className="relative min-h-[100svh] overflow-hidden flex items-end"
		>
			{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
			<img
				src={unsplash.heroDark}
				alt=""
				className="absolute inset-0 w-full h-full object-cover"
				aria-hidden="true"
			/>
			<div
				className="absolute inset-0"
				style={{
					background: `linear-gradient(180deg, ${bg}99 0%, ${bg}cc 60%, ${bg} 100%)`,
				}}
			/>

			<div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 pb-14 lg:pb-24 pt-24 sm:pt-28 lg:pt-32">
				<div className="mx-auto max-w-[1500px]">
					<RevealOnScroll
						as="p"
						className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] mb-8"
						style={{ color: accent }}
					>
						▌ {heroCopy.kicker}
					</RevealOnScroll>
					<RevealOnScroll
						as="h1"
						delay={0.05}
						className="text-[clamp(3rem,12vw,13rem)] leading-[0.88] tracking-tight max-w-6xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						{heroCopy.titleLine1}{" "}
						<span className="italic" style={{ color: soft }}>
							{heroCopy.titleLine2Italic}
						</span>
					</RevealOnScroll>
					<RevealOnScroll
						as="p"
						delay={0.15}
						className="mt-10 max-w-xl text-base sm:text-lg leading-relaxed"
						style={{ color: soft }}
					>
						{heroCopy.body}
					</RevealOnScroll>
					<RevealOnScroll
						delay={0.25}
						className="mt-10 flex flex-wrap items-center gap-6"
					>
						<a
							href={heroCopy.primaryCta.href}
							className="inline-flex items-center gap-3 px-6 py-4 font-mono text-sm uppercase tracking-wider transition-colors"
							style={{ background: accent, color: "#fff" }}
						>
							<span>{heroCopy.primaryCta.label}</span>
							<span className="font-sans">{heroCopy.primaryCta.phone}</span>
						</a>
						<a
							href={heroCopy.secondaryCta.href}
							className="font-mono text-sm uppercase tracking-wider border-b pb-1"
							style={{ borderColor: paper }}
						>
							{heroCopy.secondaryCta.label} ↓
						</a>
					</RevealOnScroll>
				</div>
			</div>
		</section>
	);
}

function StatsBar() {
	return (
		<section
			className="border-y"
			style={{ borderColor: `${soft}33`, background: bgSoft }}
		>
			<div
				className="mx-auto max-w-[1500px] grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x"
				style={{ borderColor: `${soft}33` }}
			>
				{stats.map((s, i) => (
					<div
						key={s.label}
						className={`p-8 lg:p-10 ${i === 0 ? "border-r lg:border-r" : ""} ${i === 1 ? "lg:border-r" : ""} ${i === 2 ? "border-r lg:border-r" : ""}`}
						style={{ borderColor: `${soft}33` }}
					>
						<div
							className="text-5xl lg:text-6xl leading-none tracking-tight"
							style={{ fontFamily: "var(--font-display)" }}
						>
							<NumberCounter to={s.to} suffix={s.suffix} duration={0.6} />
						</div>
						<div
							className="mt-3 font-mono text-[10px] uppercase tracking-widest"
							style={{ color: soft }}
						>
							▌ {s.label}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function Manifesto() {
	return (
		<section className="relative py-32 px-5 sm:px-8 lg:px-12 overflow-hidden">
			{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
			<img
				src={unsplash.factoryDetail}
				alt=""
				className="absolute inset-0 w-full h-full object-cover opacity-20"
				aria-hidden="true"
			/>
			<div
				className="absolute inset-0"
				style={{
					background: `linear-gradient(90deg, ${bg} 0%, ${bg}cc 50%, ${bg} 100%)`,
				}}
			/>
			<div className="relative mx-auto max-w-5xl">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-10"
					style={{ color: accent }}
				>
					▌ {manifesto.kicker}
				</p>
				<RevealOnScroll
					as="p"
					className="text-2xl sm:text-4xl lg:text-5xl leading-[1.2]"
					style={{ fontFamily: "var(--font-display)" }}
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
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div className="mx-auto max-w-[1500px]">
				<div className="mb-16">
					<p
						className="font-mono text-xs uppercase tracking-widest mb-4"
						style={{ color: accent }}
					>
						▌ 01 — Sản phẩm
					</p>
					<h2
						className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Ba cấu trúc —{" "}
						<span className="italic" style={{ color: soft }}>
							ba nhu cầu vận chuyển.
						</span>
					</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-4">
					{products.map((p, i) => (
						<RevealOnScroll
							key={p.layer}
							as="article"
							delay={i * 0.08}
							className="group relative overflow-hidden aspect-[3/4]"
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={p.image}
								alt={p.name}
								className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								loading="lazy"
							/>
							<div
								className="absolute inset-0"
								style={{
									background: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)`,
								}}
							/>
							<div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
								<div className="flex items-baseline justify-between">
									<span
										className="font-mono text-[10px] uppercase tracking-widest"
										style={{ color: accent }}
									>
										0{i + 1} / 03
									</span>
									<span
										className="font-mono text-[10px] uppercase tracking-widest"
										style={{ color: paper }}
									>
										{p.layer}
									</span>
								</div>
								<div>
									<h3
										className="text-3xl sm:text-4xl leading-tight mb-3"
										style={{ fontFamily: "var(--font-display)" }}
									>
										{p.name}
									</h3>
									<p
										className="text-sm leading-relaxed"
										style={{ color: `${paper}cc` }}
									>
										{p.purpose}
									</p>
								</div>
							</div>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}

function IndustriesShowcase() {
	return (
		<section
			id="industries"
			className="py-16 sm:py-20 lg:py-32 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div className="px-5 sm:px-8 lg:px-12 mb-12 mx-auto max-w-[1500px]">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-4"
					style={{ color: accent }}
				>
					▌ 02 — Ngành hàng
				</p>
				<h2
					className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Năm lĩnh vực phục vụ.
				</h2>
			</div>

			<div className="overflow-x-auto">
				<ul className="flex gap-0 px-5 sm:px-8 lg:px-12 min-w-max">
					{industries.map((ind, i) => (
						<li
							key={ind.key}
							className="relative w-[22rem] aspect-[3/4] flex-shrink-0 overflow-hidden group"
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={ind.image}
								alt={ind.label}
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								loading="lazy"
							/>
							<div
								className="absolute inset-0"
								style={{
									background:
										"linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)",
								}}
							/>
							<div className="absolute inset-0 flex flex-col justify-between p-6">
								<span
									className="font-mono text-[10px] uppercase tracking-widest"
									style={{ color: accent }}
								>
									{String(i + 1).padStart(2, "0")}
								</span>
								<div>
									<h3
										className="text-3xl leading-tight"
										style={{ fontFamily: "var(--font-display)", color: paper }}
									>
										{ind.label}
									</h3>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

function Process() {
	return (
		<section
			id="process"
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12 border-t"
			style={{ borderColor: `${soft}33`, background: bgSoft }}
		>
			<div className="mx-auto max-w-[1500px]">
				<div className="mb-16">
					<p
						className="font-mono text-xs uppercase tracking-widest mb-4"
						style={{ color: accent }}
					>
						▌ 03 — Quy trình
					</p>
					<h2
						className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Bốn bước — không tắt, không vội.
					</h2>
				</div>

				<ol className="relative">
					<div
						className="absolute left-[1.75rem] md:left-[4.5rem] top-6 bottom-6 w-px"
						style={{ background: accent }}
					/>
					{processSteps.map((step, i) => (
						<RevealOnScroll
							as="li"
							key={step.no}
							delay={i * 0.05}
							className="relative grid grid-cols-[3.5rem_1fr] md:grid-cols-[9rem_1fr_2fr] gap-6 md:gap-10 py-8"
						>
							<span
								className="relative z-10 text-4xl md:text-6xl leading-none tracking-tight w-12 md:w-32 rounded-full flex items-center justify-center aspect-square"
								style={{
									fontFamily: "var(--font-display)",
									background: accent,
									color: "#fff",
								}}
							>
								{step.no}
							</span>
							<h3
								className="text-2xl md:text-3xl lg:text-4xl leading-tight pt-4"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{step.title}
							</h3>
							<p
								className="col-span-2 md:col-span-1 text-base leading-relaxed pt-4 md:max-w-md"
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
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div className="mx-auto max-w-[1500px]">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-10"
					style={{ color: accent }}
				>
					▌ 04 — Vật liệu & công nghệ in
				</p>
				<div className="grid md:grid-cols-2 gap-12 md:gap-20">
					<div>
						<h3
							className="text-2xl sm:text-3xl leading-tight mb-6"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{materials.paper.title}
						</h3>
						<p className="text-base leading-relaxed" style={{ color: soft }}>
							{materials.paper.body}
						</p>
					</div>
					<div>
						<h3
							className="text-2xl sm:text-3xl leading-tight mb-6"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{materials.printing.title}
						</h3>
						<ul>
							{materials.printing.items.map((it) => (
								<li
									key={it.label}
									className="flex justify-between py-3 border-b font-mono text-sm uppercase tracking-wider"
									style={{ borderColor: `${soft}33` }}
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
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12 border-t"
			style={{ borderColor: `${soft}33`, background: bgSoft }}
		>
			<div className="mx-auto max-w-[1500px]">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-4"
					style={{ color: accent }}
				>
					▌ {customers.kicker}
				</p>
				<h2
					className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-4"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{customers.heading}
				</h2>
				<p
					className="text-base leading-relaxed mb-14 max-w-xl"
					style={{ color: soft }}
				>
					{customers.subheading}
				</p>

				<ul className="grid grid-cols-2 sm:grid-cols-4 gap-5">
					{customers.logos.map((logo) => (
						<li
							key={logo.src}
							className="aspect-[3/2] flex items-center justify-center p-6 border"
							style={{ borderColor: `${soft}33`, background: bg }}
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={logo.src}
								alt={logo.name}
								className="max-h-12 max-w-[75%] object-contain invert brightness-200 opacity-70 hover:opacity-100 transition-opacity"
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
			className="relative py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden border-t"
			style={{ borderColor: `${soft}33` }}
		>
			{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
			<img
				src={unsplash.heroAlt}
				alt=""
				className="absolute inset-0 w-full h-full object-cover opacity-20"
				aria-hidden="true"
			/>
			<div
				className="absolute inset-0"
				style={{
					background: `linear-gradient(180deg, ${bg}dd 0%, ${bg} 100%)`,
				}}
			/>
			<div className="relative mx-auto max-w-[1500px]">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-8"
					style={{ color: accent }}
				>
					▌ 05 — Liên hệ
				</p>
				<p
					className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-14 max-w-3xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{contact.headline}
				</p>

				<div className="grid md:grid-cols-3 gap-10 font-mono text-sm">
					<div>
						<div
							className="text-[10px] uppercase tracking-widest mb-2"
							style={{ color: accent }}
						>
							Hotline
						</div>
						{contact.hotlines.map((tel) => (
							<a
								key={tel}
								href={`tel:${tel.replace(/\s/g, "")}`}
								className="block text-xl mt-1 first:mt-0"
							>
								{tel}
							</a>
						))}
					</div>
					<div>
						<div
							className="text-[10px] uppercase tracking-widest mb-2"
							style={{ color: accent }}
						>
							Email
						</div>
						<a
							href={`mailto:${contact.email}`}
							className="block text-xl break-all"
						>
							{contact.email}
						</a>
						<p className="text-[10px] mt-2" style={{ color: soft }}>
							{contact.emailNote}
						</p>
					</div>
					<div>
						<div
							className="text-[10px] uppercase tracking-widest mb-2"
							style={{ color: accent }}
						>
							Địa chỉ
						</div>
						<p className="text-base leading-relaxed">
							{contact.address}
							<br />
							<span style={{ color: soft }}>{contact.addressNote}</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer
			className="px-5 sm:px-8 lg:px-12 py-10 border-t"
			style={{ borderColor: `${soft}33` }}
		>
			<div
				className="mx-auto max-w-[1500px] flex flex-col md:flex-row md:items-end md:justify-between gap-4 font-mono text-[10px] uppercase tracking-widest"
				style={{ color: soft }}
			>
				<span>TKP — Tân Khánh Phong · Thành lập 1997 · TP.HCM</span>
				<span>© 2026 · Bản xem thử · V8 Công nghiệp tối</span>
			</div>
		</footer>
	);
}
