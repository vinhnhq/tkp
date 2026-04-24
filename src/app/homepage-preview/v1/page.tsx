// V1 — Full-bleed editorial
// Magazine cover. Full-viewport photo hero, centered wordmark, anchored CTA.
// Photo-dependent — falls apart with weak imagery.

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

export default function HomepagePreviewV1() {
	return (
		<div className="min-h-screen bg-white text-[var(--color-ink)]">
			<SmoothScroll />
			<TopNav />
			<Hero />
			<Manifesto />
			<ProductRange />
			<StatsBand />
			<IndustriesEditorial />
			<Process />
			<Materials />
			<Customers />
			<Contact />
			<Footer />
			<PreviewSwitcher current="V1" />
		</div>
	);
}

function TopNav() {
	return (
		<header className="fixed top-0 inset-x-0 z-40 transition-colors">
			<div className="mx-auto max-w-[1400px] flex items-center justify-between px-5 sm:px-8 lg:px-12 py-5">
				<a
					href="#top"
					className="font-mono text-sm tracking-[0.2em] uppercase text-white mix-blend-difference"
				>
					TKP · 1997
				</a>
				<nav aria-label="Primary" className="hidden md:flex items-center gap-8">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="font-mono text-xs uppercase tracking-widest text-white mix-blend-difference hover:opacity-70"
						>
							{item.short}
						</a>
					))}
				</nav>
				<a
					href="tel:0909662808"
					className="font-mono text-xs uppercase tracking-widest text-white mix-blend-difference"
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
			className="relative min-h-[100svh] w-full overflow-hidden flex items-end"
		>
			{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
			<img
				src={unsplash.hero}
				alt="Dây chuyền sản xuất TKP"
				className="absolute inset-0 w-full h-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

			<div className="relative z-10 w-full text-white px-5 sm:px-8 lg:px-12 pb-16 lg:pb-20">
				<div className="mx-auto max-w-[1400px]">
					<RevealOnScroll
						as="p"
						className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 opacity-80"
					>
						{heroCopy.kicker}
					</RevealOnScroll>
					<RevealOnScroll
						as="h1"
						delay={0.05}
						className="text-[clamp(3rem,11vw,11rem)] leading-[0.88] tracking-tight max-w-5xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						{heroCopy.titleLine1}{" "}
						<span className="italic">{heroCopy.titleLine2Italic}</span>
					</RevealOnScroll>
					<RevealOnScroll
						as="p"
						delay={0.15}
						className="mt-6 max-w-xl text-base sm:text-lg opacity-90"
					>
						{heroCopy.body}
					</RevealOnScroll>
					<RevealOnScroll
						delay={0.25}
						className="mt-10 flex flex-wrap items-center gap-6"
					>
						<a
							href={heroCopy.primaryCta.href}
							className="inline-flex items-center gap-3 bg-white text-[var(--color-ink)] px-6 py-4 font-mono text-sm uppercase tracking-wider hover:bg-[var(--color-accent)] hover:text-white transition-colors"
						>
							<span>{heroCopy.primaryCta.label}</span>
							<span className="font-sans">{heroCopy.primaryCta.phone}</span>
						</a>
						<a
							href={heroCopy.secondaryCta.href}
							className="font-mono text-sm uppercase tracking-wider border-b border-white/70 pb-1 hover:border-white"
						>
							{heroCopy.secondaryCta.label} ↓
						</a>
					</RevealOnScroll>
				</div>
			</div>

			<div className="absolute bottom-4 right-5 sm:right-8 lg:right-12 z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
				N.º 001 / 2026 — TP.HCM
			</div>
		</section>
	);
}

function Manifesto() {
	return (
		<section className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12">
			<div className="mx-auto max-w-4xl text-center">
				<RevealOnScroll
					as="p"
					className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-8"
				>
					{manifesto.kicker}
				</RevealOnScroll>
				<RevealOnScroll
					as="p"
					delay={0.1}
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
			className="py-16 sm:py-24 bg-[var(--color-kraft-50)]"
		>
			<div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
				<div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
					<div>
						<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-3">
							01 — Sản phẩm
						</p>
						<h2
							className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
							style={{ fontFamily: "var(--font-display)" }}
						>
							Ba cấu trúc, <span className="italic">ba nhịp vận chuyển.</span>
						</h2>
					</div>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					{products.map((p, i) => (
						<RevealOnScroll
							key={p.layer}
							as="article"
							delay={i * 0.08}
							className="group"
						>
							<div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-kraft-200)] mb-5">
								{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
								<img
									src={p.image}
									alt={p.name}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
									loading="lazy"
								/>
								<span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest bg-white/90 text-[var(--color-ink)] px-3 py-1">
									{p.layer}
								</span>
							</div>
							<h3
								className="text-3xl leading-tight"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{p.name}
							</h3>
							<p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-sm">
								{p.purpose}
							</p>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}

function StatsBand() {
	return (
		<section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
			{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
			<img
				src={unsplash.factoryFloor}
				alt=""
				className="absolute inset-0 w-full h-full object-cover"
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-[var(--color-ink)]/75" />

			<div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-white">
				<p className="font-mono text-xs uppercase tracking-widest mb-10 opacity-70">
					— Con số
				</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
					{stats.map((stat) => (
						<div key={stat.label}>
							<div
								className="text-6xl lg:text-7xl leading-none tracking-tight"
								style={{ fontFamily: "var(--font-display)" }}
							>
								<NumberCounter
									to={stat.to}
									suffix={stat.suffix}
									duration={0.6}
								/>
							</div>
							<div className="mt-3 font-mono text-xs uppercase tracking-widest opacity-70">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function IndustriesEditorial() {
	return (
		<section
			id="industries"
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12"
		>
			<div className="mx-auto max-w-[1400px]">
				<div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
					<div>
						<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-3">
							02 — Ngành hàng
						</p>
						<h2
							className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl"
							style={{ fontFamily: "var(--font-display)" }}
						>
							Năm lĩnh vực —{" "}
							<span className="italic">cùng một tiêu chuẩn.</span>
						</h2>
					</div>
				</div>

				<div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
					{industries.map((ind, i) => (
						<RevealOnScroll
							key={ind.key}
							delay={i * 0.05}
							className="relative aspect-[3/4] overflow-hidden bg-[var(--color-kraft-200)] group"
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={ind.image}
								alt={ind.label}
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
							<span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-white/80">
								{String(i + 1).padStart(2, "0")}
							</span>
							<span
								className="absolute bottom-4 left-4 right-4 text-white text-xl sm:text-2xl leading-tight"
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

function Process() {
	return (
		<section
			id="process"
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12 bg-[var(--color-kraft-50)]"
		>
			<div className="mx-auto max-w-[1400px]">
				<div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
					<div>
						<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-3">
							03 — Quy trình
						</p>
						<h2
							className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
							style={{ fontFamily: "var(--font-display)" }}
						>
							Bốn bước, <span className="italic">không tắt.</span>
						</h2>
					</div>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{processSteps.map((step, i) => (
						<RevealOnScroll key={step.no} delay={i * 0.08}>
							<div className="relative aspect-square overflow-hidden bg-[var(--color-kraft-200)] mb-5">
								{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
								<img
									src={step.image}
									alt={step.title}
									className="w-full h-full object-cover"
									loading="lazy"
								/>
								<span className="absolute top-3 left-3 font-mono text-[11px] uppercase tracking-widest bg-white text-[var(--color-ink)] px-2.5 py-1">
									{step.no}
								</span>
							</div>
							<h3
								className="text-2xl leading-tight mb-2"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{step.title}
							</h3>
							<p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
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
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12"
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
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12 bg-[var(--color-kraft-50)]"
		>
			<div className="mx-auto max-w-[1400px]">
				<div className="text-center mb-14">
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-4">
						{customers.kicker}
					</p>
					<h2
						className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
						style={{ fontFamily: "var(--font-display)" }}
					>
						{customers.heading}
					</h2>
					<p className="mt-4 text-base text-[var(--color-ink-soft)] max-w-xl mx-auto">
						{customers.subheading}
					</p>
				</div>

				<ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 items-center">
					{customers.logos.map((logo) => (
						<li
							key={logo.src}
							className="flex items-center justify-center h-20 sm:h-24"
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={logo.src}
								alt={logo.name}
								className="max-h-14 max-w-[70%] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
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
			className="relative py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden"
		>
			{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
			<img
				src={unsplash.factoryDetail}
				alt=""
				className="absolute inset-0 w-full h-full object-cover"
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-[var(--color-ink)]/85" />

			<div className="relative mx-auto max-w-[1400px] text-white">
				<p className="font-mono text-xs uppercase tracking-widest opacity-70 mb-8">
					05 — Liên hệ
				</p>
				<p
					className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-14 max-w-3xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{contact.headline}
				</p>
				<address className="not-italic grid gap-8 md:grid-cols-3 font-mono text-sm">
					<div>
						<div className="text-xs uppercase tracking-widest opacity-70 mb-2">
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
						<div className="text-xs uppercase tracking-widest opacity-70 mb-2">
							Email
						</div>
						<a
							href={`mailto:${contact.email}`}
							className="block text-xl break-all"
						>
							{contact.email}
						</a>
						<p className="text-xs opacity-60 mt-2">{contact.emailNote}</p>
					</div>
					<div>
						<div className="text-xs uppercase tracking-widest opacity-70 mb-2">
							Địa chỉ
						</div>
						<p className="text-base leading-relaxed">
							{contact.address}
							<br />
							<span className="opacity-70">{contact.addressNote}</span>
						</p>
					</div>
				</address>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="border-t border-[var(--color-kraft-400)]/40 px-5 sm:px-8 lg:px-12 py-10">
			<div className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-end md:justify-between gap-6 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
				<div>
					<div className="text-[var(--color-ink)]">TKP — Tân Khánh Phong</div>
					<div>Thành lập 1997 · TP.HCM</div>
				</div>
				<div className="space-y-1">
					<div>© 2026 TKP</div>
					<div>Bản xem thử · V1 Tạp chí</div>
				</div>
			</div>
		</footer>
	);
}
