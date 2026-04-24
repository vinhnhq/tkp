// V9 — Bento tiles
// Modular dashboard grid, blocks of varying sizes.
// Modern SaaS-adjacent. Each section is a tile.

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
} from "@/content/homepage-preview/shared";
import { unsplash } from "@/content/homepage-preview/unsplash";

const card =
	"rounded-2xl border border-[var(--color-kraft-400)]/30 bg-white overflow-hidden";
const darkCard =
	"rounded-2xl border border-[var(--color-ink)]/20 bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden";
const kraftCard =
	"rounded-2xl border border-[var(--color-kraft-400)]/40 bg-[var(--color-kraft-100)] overflow-hidden";

export default function HomepagePreviewV9() {
	return (
		<div className="min-h-screen bg-[var(--color-kraft-50)] text-[var(--color-ink)]">
			<SmoothScroll />
			<TopNav />
			<main className="pt-20 pb-16">
				<HeroBento />
				<ProductsBento />
				<IndustriesBento />
				<ProcessBento />
				<MaterialsCustomersBento />
				<ContactBento />
			</main>
			<Footer />
			<PreviewSwitcher current="V9" />
		</div>
	);
}

function TopNav() {
	return (
		<header className="fixed top-3 inset-x-3 sm:inset-x-6 lg:inset-x-10 z-40">
			<div className="rounded-full border border-[var(--color-kraft-400)]/30 bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-between pl-6 pr-2 py-2">
				<a href="#top" className="font-mono text-sm tracking-[0.2em] uppercase">
					TKP
				</a>
				<nav
					aria-label="Primary"
					className="hidden lg:flex items-center gap-2 mx-6"
				>
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider text-[var(--color-ink-soft)] hover:bg-[var(--color-kraft-100)] transition-colors"
						>
							{item.short}
						</a>
					))}
				</nav>
				<a
					href="tel:0909662808"
					className="rounded-full font-mono text-xs uppercase tracking-widest bg-[var(--color-ink)] text-[var(--color-paper)] px-4 py-2 hover:bg-[var(--color-accent)] transition-colors"
				>
					Gọi báo giá
				</a>
			</div>
		</header>
	);
}

function HeroBento() {
	return (
		<section id="top" className="px-3 sm:px-6 lg:px-10">
			<div className="mx-auto max-w-[1500px] grid grid-cols-12 gap-3 sm:gap-4">
				<div
					className={`${card} col-span-12 lg:col-span-8 lg:row-span-2 relative min-h-[480px] lg:min-h-[620px] p-8 lg:p-12 flex flex-col justify-between`}
				>
					<RevealOnScroll>
						<p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-ink-soft)] mb-6">
							{heroCopy.kicker}
						</p>
						<h1
							className="text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{heroCopy.titleLine1}{" "}
							<span className="italic">{heroCopy.titleLine2Italic}</span>
						</h1>
					</RevealOnScroll>
					<div>
						<p className="text-base sm:text-lg text-[var(--color-ink-soft)] max-w-xl mb-8 leading-relaxed">
							{heroCopy.body}
						</p>
						<div className="flex flex-wrap gap-3">
							<a
								href={heroCopy.primaryCta.href}
								className="rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-5 py-3 font-mono text-xs uppercase tracking-widest"
							>
								{heroCopy.primaryCta.label} · {heroCopy.primaryCta.phone}
							</a>
							<a
								href={heroCopy.secondaryCta.href}
								className="rounded-full border border-[var(--color-ink)] px-5 py-3 font-mono text-xs uppercase tracking-widest"
							>
								{heroCopy.secondaryCta.label} ↓
							</a>
						</div>
					</div>
				</div>

				<div
					className={`${darkCard} col-span-12 sm:col-span-6 lg:col-span-4 p-6 flex flex-col justify-between min-h-[200px]`}
				>
					<div className="font-mono text-[10px] uppercase tracking-widest opacity-60">
						— Thành lập 1997
					</div>
					<div>
						<div
							className="text-5xl lg:text-6xl leading-none"
							style={{ fontFamily: "var(--font-display)" }}
						>
							<NumberCounter to={27} suffix="+" duration={0.6} />
						</div>
						<div className="mt-2 font-mono text-[10px] uppercase tracking-widest opacity-70">
							Năm vận hành
						</div>
					</div>
				</div>

				<div
					className={`${kraftCard} col-span-6 sm:col-span-3 lg:col-span-2 p-5 flex flex-col justify-between aspect-square lg:aspect-auto lg:min-h-[200px]`}
				>
					<div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
						Sản phẩm
					</div>
					<div
						className="text-4xl lg:text-5xl leading-none"
						style={{ fontFamily: "var(--font-display)" }}
					>
						15<span style={{ color: "var(--color-accent)" }}>+</span>
					</div>
				</div>

				<div
					className={`${card} col-span-6 sm:col-span-3 lg:col-span-2 p-5 flex flex-col justify-between aspect-square lg:aspect-auto lg:min-h-[200px]`}
				>
					<div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
						Nhân sự
					</div>
					<div
						className="text-4xl lg:text-5xl leading-none"
						style={{ fontFamily: "var(--font-display)" }}
					>
						<NumberCounter to={100} suffix="+" duration={0.6} />
					</div>
				</div>
			</div>
		</section>
	);
}

function ProductsBento() {
	return (
		<section id="products" className="px-3 sm:px-6 lg:px-10 mt-4">
			<div className="mx-auto max-w-[1500px]">
				<div className="flex items-baseline justify-between flex-wrap gap-4 px-2 mb-5">
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
						01 — Sản phẩm
					</p>
					<h2
						className="text-3xl sm:text-4xl leading-tight"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Ba cấu trúc, ba nhu cầu.
					</h2>
				</div>
				<div className="grid grid-cols-12 gap-3 sm:gap-4">
					{products.map((p, i) => (
						<RevealOnScroll
							key={p.layer}
							delay={i * 0.05}
							className={`${card} col-span-12 md:col-span-4 overflow-hidden group`}
						>
							<div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-kraft-200)]">
								{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
								<img
									src={p.image}
									alt={p.name}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									loading="lazy"
								/>
								<span className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
									{p.layer}
								</span>
							</div>
							<div className="p-6">
								<h3
									className="text-2xl leading-tight mb-2"
									style={{ fontFamily: "var(--font-display)" }}
								>
									{p.name}
								</h3>
								<p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
									{p.purpose}
								</p>
							</div>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}

function IndustriesBento() {
	return (
		<section id="industries" className="px-3 sm:px-6 lg:px-10 mt-4">
			<div className="mx-auto max-w-[1500px]">
				<div className="flex items-baseline justify-between flex-wrap gap-4 px-2 mb-5">
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
						02 — Ngành hàng
					</p>
					<h2
						className="text-3xl sm:text-4xl leading-tight"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Năm lĩnh vực phục vụ.
					</h2>
				</div>

				<div className="grid grid-cols-12 gap-3 sm:gap-4 auto-rows-[9rem] lg:auto-rows-[11rem]">
					<RevealOnScroll
						className={`${kraftCard} col-span-12 md:col-span-6 lg:col-span-5 row-span-2 relative p-6 flex flex-col justify-between`}
					>
						{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
						<img
							src={industries[0].image}
							alt={industries[0].label}
							className="absolute inset-0 w-full h-full object-cover"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
						<span className="relative font-mono text-[10px] uppercase tracking-widest text-white/80 self-start bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
							01
						</span>
						<span
							className="relative text-3xl sm:text-4xl leading-tight text-white"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{industries[0].label}
						</span>
					</RevealOnScroll>

					{industries.slice(1).map((ind, i) => (
						<RevealOnScroll
							key={ind.key}
							delay={i * 0.04}
							className={`${card} col-span-6 md:col-span-3 lg:col-span-${i === 0 ? "7" : i === 1 ? "3" : i === 2 ? "4" : "7"} relative p-5 flex flex-col justify-between overflow-hidden`}
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={ind.image}
								alt={ind.label}
								className="absolute inset-0 w-full h-full object-cover"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							<span className="relative font-mono text-[10px] uppercase tracking-widest text-white/80 self-start bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
								{String(i + 2).padStart(2, "0")}
							</span>
							<span
								className="relative text-2xl text-white"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{ind.label}
							</span>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}

function ProcessBento() {
	return (
		<section id="process" className="px-3 sm:px-6 lg:px-10 mt-4">
			<div className="mx-auto max-w-[1500px]">
				<div className="flex items-baseline justify-between flex-wrap gap-4 px-2 mb-5">
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
						03 — Quy trình
					</p>
					<h2
						className="text-3xl sm:text-4xl leading-tight"
						style={{ fontFamily: "var(--font-display)" }}
					>
						{manifesto.body.split(" — ")[0]}.
					</h2>
				</div>

				<div className="grid grid-cols-12 gap-3 sm:gap-4">
					<div
						className={`${darkCard} col-span-12 lg:col-span-4 p-8 flex flex-col justify-between min-h-[220px]`}
					>
						<p className="font-mono text-xs uppercase tracking-widest opacity-60">
							— Manifesto
						</p>
						<p
							className="text-xl sm:text-2xl leading-[1.3]"
							style={{ fontFamily: "var(--font-display)" }}
						>
							Bốn bước — không tắt, không vội.
						</p>
					</div>
					{processSteps.map((step, i) => (
						<RevealOnScroll
							key={step.no}
							delay={i * 0.04}
							className={`${card} col-span-6 lg:col-span-2 p-5 flex flex-col justify-between min-h-[220px]`}
						>
							<span
								className="text-4xl leading-none"
								style={{
									fontFamily: "var(--font-display)",
									color: "var(--color-accent)",
								}}
							>
								{step.no}
							</span>
							<div>
								<h3
									className="text-xl leading-tight mb-2"
									style={{ fontFamily: "var(--font-display)" }}
								>
									{step.title}
								</h3>
								<p className="text-xs text-[var(--color-ink-soft)] leading-relaxed">
									{step.body}
								</p>
							</div>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}

function MaterialsCustomersBento() {
	return (
		<section id="materials" className="px-3 sm:px-6 lg:px-10 mt-4">
			<div className="mx-auto max-w-[1500px] grid grid-cols-12 gap-3 sm:gap-4">
				<div
					className={`${card} col-span-12 lg:col-span-4 p-6 lg:p-8 flex flex-col justify-between min-h-[300px]`}
				>
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
						04 — Vật liệu
					</p>
					<div>
						<h3
							className="text-2xl leading-tight mb-4"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{materials.paper.title}
						</h3>
						<p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
							{materials.paper.body}
						</p>
					</div>
				</div>

				<div
					className={`${kraftCard} col-span-12 lg:col-span-4 p-6 lg:p-8 flex flex-col justify-between min-h-[300px]`}
				>
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
						— Công nghệ in
					</p>
					<div>
						<h3
							className="text-xl leading-tight mb-5"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{materials.printing.title}
						</h3>
						<ul className="space-y-2">
							{materials.printing.items.map((it) => (
								<li
									key={it.label}
									className="flex justify-between font-mono text-xs uppercase tracking-wider pb-2 border-b border-[var(--color-kraft-400)]/40"
								>
									<span>{it.label}</span>
									<span className="text-[var(--color-ink-soft)]">
										{it.note}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div
					id="customers"
					className={`${card} col-span-12 lg:col-span-4 p-6 lg:p-8 flex flex-col min-h-[300px]`}
				>
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-5">
						{customers.kicker}
					</p>
					<h3
						className="text-2xl leading-tight mb-6"
						style={{ fontFamily: "var(--font-display)" }}
					>
						{customers.heading}
					</h3>
					<ul className="grid grid-cols-4 gap-3 mt-auto">
						{customers.logos.map((logo) => (
							<li
								key={logo.src}
								className="aspect-square rounded-lg bg-[var(--color-kraft-50)] flex items-center justify-center p-2"
							>
								{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
								<img
									src={logo.src}
									alt={logo.name}
									className="max-h-8 max-w-[80%] object-contain grayscale opacity-70"
									loading="lazy"
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

function ContactBento() {
	return (
		<section id="contact" className="px-3 sm:px-6 lg:px-10 mt-4">
			<div className="mx-auto max-w-[1500px] grid grid-cols-12 gap-3 sm:gap-4">
				<div
					className={`${darkCard} col-span-12 lg:col-span-8 p-8 lg:p-12 relative overflow-hidden min-h-[360px] flex flex-col justify-between`}
				>
					{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
					<img
						src={unsplash.heroDark}
						alt=""
						className="absolute inset-0 w-full h-full object-cover opacity-25"
						aria-hidden="true"
					/>
					<p className="relative font-mono text-xs uppercase tracking-widest opacity-60">
						05 — Liên hệ
					</p>
					<div className="relative">
						<p
							className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8 max-w-2xl"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{contact.headline}
						</p>
						<div className="flex flex-wrap gap-3">
							{contact.hotlines.map((tel) => (
								<a
									key={tel}
									href={`tel:${tel.replace(/\s/g, "")}`}
									className="rounded-full bg-white text-[var(--color-ink)] px-5 py-3 font-mono text-sm"
								>
									{tel}
								</a>
							))}
						</div>
					</div>
				</div>

				<div
					className={`${card} col-span-12 sm:col-span-6 lg:col-span-4 p-6 flex flex-col justify-between min-h-[180px]`}
				>
					<p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
						Email
					</p>
					<div>
						<a href={`mailto:${contact.email}`} className="text-lg break-all">
							{contact.email}
						</a>
						<p className="text-[10px] text-[var(--color-ink-soft)] mt-2">
							{contact.emailNote}
						</p>
					</div>
				</div>

				<div
					className={`${kraftCard} col-span-12 sm:col-span-6 lg:col-span-4 p-6 flex flex-col justify-between min-h-[180px]`}
				>
					<p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
						Địa chỉ
					</p>
					<p className="text-base">
						{contact.address}
						<br />
						<span className="text-[var(--color-ink-soft)] text-sm">
							{contact.addressNote}
						</span>
					</p>
				</div>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="px-3 sm:px-6 lg:px-10 pt-8 pb-10">
			<div
				className={`${card} mx-auto max-w-[1500px] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]`}
			>
				<span>TKP — Tân Khánh Phong · Thành lập 1997 · TP.HCM</span>
				<span>© 2026 · Bản xem thử · V9 Khối Bento</span>
			</div>
		</footer>
	);
}
