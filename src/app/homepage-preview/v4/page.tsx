// V4 — Horizontal tape / materiality-forward
// "The material IS the UI" — kraft textures, corrugation motifs, mono numerals.

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

export default function HomepagePreviewV4() {
	return (
		<div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
			<SmoothScroll />
			<SideNav />

			<main className="lg:ml-64">
				<Hero />
				<FoldDivider />
				<Manifesto />
				<StatsStrip />
				<FoldDivider />
				<ProductRange />
				<IndustriesGrid />
				<FoldDivider />
				<ProcessStepper />
				<FoldDivider />
				<Materials />
				<FoldDivider />
				<Customers />
				<FoldDivider />
				<Contact />
				<Footer />
			</main>

			<PreviewSwitcher current="V4" />
		</div>
	);
}

const kraftTexture: React.CSSProperties = {
	backgroundColor: "var(--color-kraft-100)",
	backgroundImage:
		"repeating-linear-gradient(90deg, rgba(140,106,63,0) 0, rgba(140,106,63,0) 2px, rgba(140,106,63,0.08) 2px, rgba(140,106,63,0.08) 3px), repeating-linear-gradient(90deg, rgba(140,106,63,0) 0, rgba(140,106,63,0) 10px, rgba(140,106,63,0.05) 10px, rgba(140,106,63,0.05) 11px)",
};

function FoldDivider() {
	return (
		<div
			aria-hidden="true"
			className="relative h-px w-full bg-[var(--color-kraft-400)]/40"
		>
			<div className="absolute inset-0 flex items-center gap-1 overflow-hidden opacity-60">
				{Array.from({ length: 120 }).map((_, i) => (
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: decorative perforation
						key={i}
						className="h-px w-4 bg-[var(--color-paper)]"
					/>
				))}
			</div>
		</div>
	);
}

function SideNav() {
	return (
		<>
			<aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 flex-col justify-between border-r border-[var(--color-kraft-400)]/30 bg-[var(--color-paper)] p-8 z-40">
				<div>
					<a
						href="#top"
						className="font-mono text-2xl tracking-tighter leading-none block"
					>
						<span className="block">TKP</span>
						<span className="block text-xs font-sans tracking-widest text-[var(--color-ink-soft)] mt-2">
							TÂN KHÁNH PHONG
						</span>
						<span className="block text-xs font-sans text-[var(--color-ink-soft)]/60">
							THÀNH LẬP 1997 · TP.HCM
						</span>
					</a>
				</div>

				<nav aria-label="Section navigation">
					<ul className="space-y-3">
						{nav.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									className="font-mono text-sm uppercase tracking-wider text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] transition-colors"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="font-mono text-xs text-[var(--color-ink-soft)]/80 space-y-1">
					<div>Đường dây nóng</div>
					<a
						href="tel:0909662808"
						className="block text-[var(--color-ink)] hover:text-[var(--color-accent)]"
					>
						0909 66 2808
					</a>
					<a href="tel:02837661614" className="block">
						028 3766 1614
					</a>
				</div>
			</aside>

			<header className="lg:hidden sticky top-0 z-40 flex items-center justify-between border-b border-[var(--color-kraft-400)]/30 bg-[var(--color-paper)] px-5 py-3">
				<a href="#top" className="font-mono text-lg tracking-tight">
					TKP
				</a>
				<a
					href="tel:0909662808"
					className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]"
				>
					0909 66 2808
				</a>
			</header>
		</>
	);
}

function Hero() {
	return (
		<section
			id="top"
			className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden"
			style={kraftTexture}
		>
			<div className="absolute top-0 left-0 right-0 flex justify-between p-5 lg:p-8">
				<span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
					N.º 001 / 2026
				</span>
				<span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
					CARTON · BAO BÌ · TP.HCM
				</span>
			</div>

			<div className="flex-1 flex items-center px-5 sm:px-8 lg:px-16">
				<div className="max-w-6xl">
					<RevealOnScroll
						as="p"
						className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--color-ink-soft)] mb-6"
					>
						{heroCopy.kicker}
					</RevealOnScroll>
					<RevealOnScroll
						as="h1"
						delay={0.05}
						className="text-[clamp(3.5rem,14vw,14rem)] leading-[0.88] tracking-tight text-[var(--color-ink)]"
						style={{ fontFamily: "var(--font-display)" }}
					>
						{heroCopy.titleLine1}
						<br />
						<span className="italic">{heroCopy.titleLine2Italic}</span>
					</RevealOnScroll>
					<RevealOnScroll
						as="p"
						delay={0.15}
						className="mt-8 max-w-xl text-base sm:text-lg text-[var(--color-ink-soft)]"
					>
						{heroCopy.body}
					</RevealOnScroll>

					<RevealOnScroll
						delay={0.25}
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
							className="inline-flex items-center font-mono text-sm uppercase tracking-wider text-[var(--color-ink)] border-b border-[var(--color-ink)] pb-1"
						>
							{heroCopy.secondaryCta.label} ↓
						</a>
					</RevealOnScroll>
				</div>
			</div>

			<div className="flex items-end justify-between px-5 sm:px-8 lg:px-16 pb-8">
				<span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
					↓ Cuộn
				</span>
				<span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] hidden sm:block">
					03 LỚP · 05 LỚP · 07 LỚP
				</span>
			</div>
		</section>
	);
}

function Manifesto() {
	return (
		<section
			aria-labelledby="manifesto-heading"
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-16 max-w-4xl"
		>
			<RevealOnScroll
				as="h2"
				id="manifesto-heading"
				className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-8"
			>
				{manifesto.kicker}
			</RevealOnScroll>
			<RevealOnScroll
				as="p"
				delay={0.1}
				className="text-2xl sm:text-3xl lg:text-4xl leading-[1.3] text-[var(--color-ink)]"
				style={{ fontFamily: "var(--font-display)" }}
			>
				{manifesto.body}
			</RevealOnScroll>
		</section>
	);
}

function StatsStrip() {
	return (
		<section
			aria-labelledby="stats-heading"
			className="border-y border-[var(--color-kraft-400)]/40"
			style={kraftTexture}
		>
			<h2 id="stats-heading" className="sr-only">
				Con số
			</h2>
			<div className="grid grid-cols-2 lg:grid-cols-4">
				{stats.map((stat, i) => (
					<div
						key={stat.label}
						className={`p-8 lg:p-12 ${i < stats.length - 1 ? "lg:border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} ${i % 2 === 0 ? "border-r lg:border-r" : ""} border-[var(--color-kraft-400)]/40`}
					>
						<div className="text-5xl sm:text-6xl lg:text-7xl font-mono tracking-tight text-[var(--color-ink)] leading-none">
							<NumberCounter to={stat.to} suffix={stat.suffix} duration={0.6} />
						</div>
						<div className="mt-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
							{stat.label}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function ProductRange() {
	return (
		<section
			id="products"
			aria-labelledby="products-heading"
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-16"
		>
			<div className="flex items-baseline justify-between mb-12 gap-4 flex-wrap">
				<h2
					id="products-heading"
					className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]"
				>
					01 — Sản phẩm
				</h2>
				<p
					className="text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-2xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Ba cấu trúc — cho ba nhu cầu vận chuyển khác nhau.
				</p>
			</div>

			<div className="grid gap-6 lg:gap-8 md:grid-cols-3">
				{products.map((p, i) => (
					<RevealOnScroll
						key={p.layer}
						as="article"
						delay={i * 0.08}
						className="group"
					>
						<div className="aspect-[4/5] overflow-hidden bg-[var(--color-kraft-100)] mb-4">
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={p.image}
								alt={p.name}
								className="w-full h-full object-cover"
								loading="lazy"
							/>
						</div>
						<div className="flex items-baseline justify-between border-t border-[var(--color-kraft-400)]/40 pt-4">
							<span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
								{p.layer}
							</span>
							<span className="font-mono text-xs text-[var(--color-ink-soft)]">
								→
							</span>
						</div>
						<h3
							className="mt-3 text-2xl sm:text-3xl leading-tight"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{p.name}
						</h3>
						<p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed">
							{p.purpose}
						</p>
					</RevealOnScroll>
				))}
			</div>
		</section>
	);
}

function IndustriesGrid() {
	return (
		<section
			id="industries"
			aria-labelledby="industries-heading"
			className="px-5 sm:px-8 lg:px-16 pb-24 sm:pb-32"
		>
			<div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
				<h2
					id="industries-heading"
					className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]"
				>
					02 — Ngành hàng
				</h2>
				<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
					05 lĩnh vực phục vụ
				</p>
			</div>

			<div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				{industries.map((ind, i) => (
					<a
						key={ind.key}
						href={`#industry-${ind.key}`}
						className="relative aspect-square overflow-hidden bg-[var(--color-kraft-200)] block group"
					>
						{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
						<img
							src={ind.image}
							alt={ind.label}
							className="w-full h-full object-cover"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
						<div className="absolute top-3 left-3 right-3 flex justify-between">
							<span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
								{String(i + 1).padStart(2, "0")}
							</span>
						</div>
						<div className="absolute bottom-3 left-3 right-3">
							<span className="font-mono text-sm uppercase tracking-wider text-white">
								{ind.label}
							</span>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}

function ProcessStepper() {
	return (
		<section
			id="process"
			aria-labelledby="process-heading"
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-16"
			style={kraftTexture}
		>
			<div className="flex items-baseline justify-between mb-12 gap-4 flex-wrap">
				<h2
					id="process-heading"
					className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]"
				>
					03 — Quy trình
				</h2>
				<p
					className="text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-2xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Bốn bước — không tắt, không vội.
				</p>
			</div>

			<ol className="space-y-0 border-t border-[var(--color-ink)]/20">
				{processSteps.map((step, i) => (
					<RevealOnScroll
						as="li"
						key={step.no}
						delay={i * 0.06}
						className="grid grid-cols-[auto_1fr] md:grid-cols-[8rem_1fr_2fr] gap-6 md:gap-12 py-8 border-b border-[var(--color-ink)]/20"
					>
						<span className="text-5xl md:text-7xl lg:text-8xl font-mono leading-none tracking-tight text-[var(--color-ink)]">
							{step.no}
						</span>
						<h3
							className="text-2xl md:text-3xl lg:text-4xl leading-tight col-span-1 md:col-span-1"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{step.title}
						</h3>
						<p className="col-span-2 md:col-span-1 text-base md:text-lg text-[var(--color-ink-soft)] leading-relaxed md:max-w-md">
							{step.body}
						</p>
					</RevealOnScroll>
				))}
			</ol>
		</section>
	);
}

function Materials() {
	return (
		<section
			id="materials"
			aria-labelledby="materials-heading"
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-16"
		>
			<h2
				id="materials-heading"
				className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-12"
			>
				04 — Vật liệu & công nghệ in
			</h2>

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
								<span className="text-[var(--color-ink-soft)]">{it.note}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

function Customers() {
	return (
		<section
			id="customers"
			aria-labelledby="customers-heading"
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-16"
		>
			<div className="flex items-baseline justify-between mb-12 gap-4 flex-wrap">
				<h2
					id="customers-heading"
					className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]"
				>
					{customers.kicker}
				</h2>
				<p
					className="text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-2xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{customers.heading}
				</p>
			</div>

			<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 border-t border-l border-[var(--color-kraft-400)]/40">
				{customers.logos.map((logo) => (
					<li
						key={logo.src}
						className="aspect-[3/2] flex items-center justify-center border-b border-r border-[var(--color-kraft-400)]/40 p-6 bg-[var(--color-paper)]"
					>
						{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
						<img
							src={logo.src}
							alt={logo.name}
							className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
							loading="lazy"
						/>
					</li>
				))}
			</ul>
		</section>
	);
}

function Contact() {
	return (
		<section
			id="contact"
			aria-labelledby="contact-heading"
			className="py-16 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-16"
			style={kraftTexture}
		>
			<h2
				id="contact-heading"
				className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-8"
			>
				05 — Liên hệ
			</h2>
			<p
				className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-12 max-w-3xl"
				style={{ fontFamily: "var(--font-display)" }}
			>
				{contact.headline}
			</p>

			<address className="not-italic grid gap-8 md:grid-cols-3 font-mono text-sm">
				<div>
					<div className="text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-2">
						Hotline
					</div>
					{contact.hotlines.map((tel) => (
						<a
							key={tel}
							href={`tel:${tel.replace(/\s/g, "")}`}
							className="block text-xl text-[var(--color-ink)] mt-1 first:mt-0"
						>
							{tel}
						</a>
					))}
				</div>
				<div>
					<div className="text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-2">
						Email
					</div>
					<a
						href={`mailto:${contact.email}`}
						className="block text-xl text-[var(--color-ink)] break-all"
					>
						{contact.email}
					</a>
					<p className="text-xs text-[var(--color-ink-soft)] mt-2">
						{contact.emailNote}
					</p>
				</div>
				<div>
					<div className="text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-2">
						Địa chỉ
					</div>
					<p className="text-base text-[var(--color-ink)] leading-relaxed">
						{contact.address}
						<br />
						<span className="text-[var(--color-ink-soft)]">
							{contact.addressNote}
						</span>
					</p>
				</div>
			</address>
		</section>
	);
}

function Footer() {
	return (
		<footer className="border-t border-[var(--color-kraft-400)]/40 px-5 sm:px-8 lg:px-16 py-10">
			<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
				<div>
					<div className="text-[var(--color-ink)]">TKP — Tân Khánh Phong</div>
					<div>Thành lập 1997 · TP.HCM</div>
				</div>
				<div className="space-y-1">
					<div>© 2026 TKP</div>
					<div>Bản xem thử · V4 Chất liệu</div>
				</div>
			</div>
		</footer>
	);
}
