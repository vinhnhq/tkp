// V2 — Split screen
// Left: large wordmark + tagline + CTA stack. Right: photo.
// Structured, European industrial catalog tone.
// Risk: can feel generic if not executed with strong type.

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

export default function HomepagePreviewV2() {
	return (
		<div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
			<SmoothScroll />
			<TopNav />
			<main className="pt-14">
				<Hero />
				<InfoBar />
				<Manifesto />
				<ProductRange />
				<IndustriesSplit />
				<Process />
				<Materials />
				<Customers />
				<Contact />
			</main>
			<Footer />
			<PreviewSwitcher current="V2" />
		</div>
	);
}

function TopNav() {
	return (
		<header className="fixed top-0 inset-x-0 z-40 bg-[var(--color-paper)]/95 backdrop-blur border-b border-[var(--color-kraft-400)]/30">
			<div className="mx-auto max-w-[1400px] grid grid-cols-[auto_1fr_auto] items-center gap-8 px-5 sm:px-8 lg:px-12 h-14">
				<a href="#top" className="font-mono text-sm tracking-[0.2em] uppercase">
					TKP
				</a>
				<nav
					aria-label="Primary"
					className="hidden md:flex items-center justify-center gap-8"
				>
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
						>
							{item.short}
						</a>
					))}
				</nav>
				<a
					href="tel:0909662808"
					className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]"
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
			className="grid lg:grid-cols-2 min-h-[calc(100svh-3.5rem)] border-b border-[var(--color-kraft-400)]/30"
		>
			<div className="flex flex-col justify-between px-5 sm:px-8 lg:px-12 py-10 lg:py-16">
				<p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-ink-soft)]">
					{heroCopy.kicker}
				</p>

				<div>
					<RevealOnScroll
						as="h1"
						className="text-[clamp(2.75rem,7vw,7rem)] leading-[0.92] tracking-tight"
						style={{ fontFamily: "var(--font-display)" }}
					>
						{heroCopy.titleLine1}
						<br />
						<span className="italic">{heroCopy.titleLine2Italic}</span>
					</RevealOnScroll>
					<RevealOnScroll
						as="p"
						delay={0.1}
						className="mt-8 max-w-md text-base sm:text-lg text-[var(--color-ink-soft)] leading-relaxed"
					>
						{heroCopy.body}
					</RevealOnScroll>
					<RevealOnScroll
						delay={0.2}
						className="mt-10 flex flex-wrap items-center gap-4"
					>
						<a
							href={heroCopy.primaryCta.href}
							className="inline-flex items-center gap-3 bg-[var(--color-ink)] text-[var(--color-paper)] px-6 py-4 font-mono text-sm uppercase tracking-wider hover:bg-[var(--color-accent)] transition-colors"
						>
							<span>{heroCopy.primaryCta.label}</span>
							<span className="font-sans">{heroCopy.primaryCta.phone}</span>
						</a>
						<a
							href={heroCopy.secondaryCta.href}
							className="font-mono text-sm uppercase tracking-wider border-b border-[var(--color-ink)] pb-1"
						>
							{heroCopy.secondaryCta.label} ↓
						</a>
					</RevealOnScroll>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-[var(--color-kraft-400)]/30 mt-12">
					{stats.map((s) => (
						<div key={s.label}>
							<div className="font-mono text-2xl sm:text-3xl tracking-tight">
								<NumberCounter to={s.to} suffix={s.suffix} duration={0.6} />
							</div>
							<div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)] mt-1">
								{s.label}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="relative overflow-hidden bg-[var(--color-kraft-200)] min-h-[50vh] lg:min-h-full">
				{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
				<img
					src={unsplash.heroAlt}
					alt="Dây chuyền sản xuất TKP"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 bg-black/40 px-3 py-1 backdrop-blur-sm">
					N.º 001 / 2026
				</div>
			</div>
		</section>
	);
}

function InfoBar() {
	return (
		<section className="border-b border-[var(--color-kraft-400)]/30 bg-[var(--color-kraft-50)]">
			<div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-kraft-400)]/30">
				{[
					{ k: "Xưởng", v: "TP.HCM" },
					{ k: "Thành lập", v: "1997" },
					{ k: "Mặt hàng", v: "3 · 5 · 7 lớp" },
					{ k: "Đơn hàng", v: "Gấp 24h" },
				].map((item) => (
					<div key={item.k} className="px-5 sm:px-8 py-5">
						<div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
							{item.k}
						</div>
						<div className="font-mono text-sm sm:text-base mt-1">{item.v}</div>
					</div>
				))}
			</div>
		</section>
	);
}

function Manifesto() {
	return (
		<section className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12">
			<div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-20">
				<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
					{manifesto.kicker}
				</p>
				<RevealOnScroll
					as="p"
					className="text-2xl sm:text-3xl lg:text-4xl leading-[1.3]"
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
			className="border-t border-[var(--color-kraft-400)]/30"
		>
			<div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_2fr]">
				<div className="px-5 sm:px-8 lg:px-12 py-12 lg:py-16 lg:border-r border-[var(--color-kraft-400)]/30">
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-4">
						01 — Sản phẩm
					</p>
					<h2
						className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1]"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Ba cấu trúc cho ba nhu cầu vận chuyển.
					</h2>
				</div>
				<div>
					{products.map((p, i) => (
						<RevealOnScroll
							key={p.layer}
							delay={i * 0.05}
							className="grid md:grid-cols-[1fr_1.5fr] border-b last:border-b-0 border-[var(--color-kraft-400)]/30"
						>
							<div className="relative aspect-[4/3] md:aspect-auto md:min-h-[18rem] overflow-hidden bg-[var(--color-kraft-200)]">
								{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
								<img
									src={p.image}
									alt={p.name}
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>
							<div className="px-5 sm:px-8 lg:px-12 py-10 flex flex-col justify-between gap-8">
								<div>
									<div className="flex items-baseline justify-between mb-5">
										<span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
											{p.layer}
										</span>
										<span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
											N.º {String(i + 1).padStart(2, "0")}
										</span>
									</div>
									<h3
										className="text-3xl sm:text-4xl leading-tight"
										style={{ fontFamily: "var(--font-display)" }}
									>
										{p.name}
									</h3>
									<p className="mt-4 text-base text-[var(--color-ink-soft)] leading-relaxed max-w-md">
										{p.purpose}
									</p>
								</div>
								<a
									href="#contact"
									className="font-mono text-xs uppercase tracking-widest border-b border-[var(--color-ink)] w-fit pb-1"
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

function IndustriesSplit() {
	return (
		<section
			id="industries"
			className="border-t border-[var(--color-kraft-400)]/30 py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12"
		>
			<div className="mx-auto max-w-[1400px]">
				<div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mb-12">
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
						02 — Ngành hàng
					</p>
					<h2
						className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1]"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Năm lĩnh vực — cùng một tiêu chuẩn kỹ thuật.
					</h2>
				</div>

				<div className="grid gap-0 md:grid-cols-2 lg:grid-cols-5 border-t border-[var(--color-kraft-400)]/30">
					{industries.map((ind, i) => (
						<a
							key={ind.key}
							href={`#industry-${ind.key}`}
							className="group relative aspect-[4/5] lg:aspect-[3/5] overflow-hidden border-r border-b last:border-r-0 lg:border-b-0 border-[var(--color-kraft-400)]/30"
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={ind.image}
								alt={ind.label}
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
							<div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-white/80">
								{String(i + 1).padStart(2, "0")}
							</div>
							<div className="absolute bottom-4 left-4 right-4 text-white">
								<div
									className="text-lg sm:text-xl leading-tight"
									style={{ fontFamily: "var(--font-display)" }}
								>
									{ind.label}
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

function Process() {
	return (
		<section
			id="process"
			className="border-t border-[var(--color-kraft-400)]/30 bg-[var(--color-kraft-50)]"
		>
			<div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_2fr]">
				<div className="px-5 sm:px-8 lg:px-12 py-12 lg:py-16 lg:border-r border-[var(--color-kraft-400)]/30">
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-4">
						03 — Quy trình
					</p>
					<h2
						className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1]"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Bốn bước — không tắt, không vội.
					</h2>
				</div>
				<div>
					{processSteps.map((step, i) => (
						<RevealOnScroll
							key={step.no}
							delay={i * 0.06}
							className="grid grid-cols-[6rem_1fr] md:grid-cols-[8rem_1fr_2fr] gap-6 md:gap-10 items-baseline py-8 px-5 sm:px-8 lg:px-12 border-b last:border-b-0 border-[var(--color-kraft-400)]/30"
						>
							<span
								className="text-5xl md:text-6xl leading-none tracking-tight"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{step.no}
							</span>
							<h3
								className="text-xl md:text-2xl leading-tight"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{step.title}
							</h3>
							<p className="col-span-2 md:col-span-1 text-sm md:text-base text-[var(--color-ink-soft)] leading-relaxed md:max-w-md">
								{step.body}
							</p>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}

function Materials() {
	return (
		<section
			id="materials"
			className="border-t border-[var(--color-kraft-400)]/30 py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12"
		>
			<div className="mx-auto max-w-[1400px]">
				<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-10">
					04 — Vật liệu & công nghệ in
				</p>
				<div className="grid gap-12 md:grid-cols-2 md:gap-20">
					<div>
						<h3
							className="text-3xl sm:text-4xl leading-tight mb-6"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{materials.paper.title}
						</h3>
						<p className="text-base text-[var(--color-ink-soft)] leading-relaxed">
							{materials.paper.body}
						</p>
					</div>
					<div>
						<h3
							className="text-3xl sm:text-4xl leading-tight mb-6"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{materials.printing.title}
						</h3>
						<ul className="space-y-3 font-mono text-sm uppercase tracking-wider">
							{materials.printing.items.map((it) => (
								<li
									key={it.label}
									className="flex justify-between border-b border-[var(--color-kraft-400)]/40 pb-3"
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
			</div>
		</section>
	);
}

function Customers() {
	return (
		<section
			id="customers"
			className="border-t border-[var(--color-kraft-400)]/30 bg-[var(--color-kraft-50)]"
		>
			<div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_2fr]">
				<div className="px-5 sm:px-8 lg:px-12 py-12 lg:py-16 lg:border-r border-[var(--color-kraft-400)]/30">
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-4">
						{customers.kicker}
					</p>
					<h2
						className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1]"
						style={{ fontFamily: "var(--font-display)" }}
					>
						{customers.heading}
					</h2>
					<p className="mt-5 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-md">
						{customers.subheading}
					</p>
				</div>

				<ul className="grid grid-cols-2 sm:grid-cols-4 border-t lg:border-t-0 border-[var(--color-kraft-400)]/30">
					{customers.logos.map((logo, i) => (
						<li
							key={logo.src}
							className={`aspect-[4/3] flex items-center justify-center p-6 bg-[var(--color-paper)] border-[var(--color-kraft-400)]/30 ${
								(i + 1) % 4 !== 0 ? "border-r" : ""
							} ${i < customers.logos.length - 4 ? "border-b" : ""} ${i >= customers.logos.length - 4 && (i + 1) % 2 === 0 ? "sm:border-b-0" : ""}`}
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={logo.src}
								alt={logo.name}
								className="max-h-16 max-w-[75%] object-contain"
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
			className="border-t border-[var(--color-kraft-400)]/30 bg-[var(--color-ink)] text-[var(--color-paper)]"
		>
			<div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_2fr]">
				<div className="px-5 sm:px-8 lg:px-12 py-16 lg:border-r border-[var(--color-kraft-400)]/20">
					<p className="font-mono text-xs uppercase tracking-widest opacity-70 mb-4">
						05 — Liên hệ
					</p>
					<p
						className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
						style={{ fontFamily: "var(--font-display)" }}
					>
						{contact.headline}
					</p>
				</div>
				<address className="not-italic px-5 sm:px-8 lg:px-12 py-16 grid gap-10 md:grid-cols-3 font-mono text-sm">
					<div>
						<div className="text-xs uppercase tracking-widest opacity-60 mb-2">
							Hotline
						</div>
						{contact.hotlines.map((tel) => (
							<a
								key={tel}
								href={`tel:${tel.replace(/\s/g, "")}`}
								className="block text-lg mt-1 first:mt-0"
							>
								{tel}
							</a>
						))}
					</div>
					<div>
						<div className="text-xs uppercase tracking-widest opacity-60 mb-2">
							Email
						</div>
						<a
							href={`mailto:${contact.email}`}
							className="block text-lg break-all"
						>
							{contact.email}
						</a>
						<p className="text-xs opacity-50 mt-2">{contact.emailNote}</p>
					</div>
					<div>
						<div className="text-xs uppercase tracking-widest opacity-60 mb-2">
							Địa chỉ
						</div>
						<p className="text-base leading-relaxed">
							{contact.address}
							<br />
							<span className="opacity-60">{contact.addressNote}</span>
						</p>
					</div>
				</address>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="bg-[var(--color-ink)] text-[var(--color-paper)] border-t border-[var(--color-kraft-400)]/20 px-5 sm:px-8 lg:px-12 py-10">
			<div className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-end md:justify-between gap-6 font-mono text-xs uppercase tracking-widest opacity-70">
				<div>
					<div className="opacity-100">TKP — Tân Khánh Phong</div>
					<div>Thành lập 1997 · TP.HCM</div>
				</div>
				<div className="space-y-1">
					<div>© 2026 TKP</div>
					<div>Bản xem thử · V2 Chia đôi</div>
				</div>
			</div>
		</footer>
	);
}
