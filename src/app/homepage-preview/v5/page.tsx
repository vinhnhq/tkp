// V5 — Swiss grid / data-forward
// 12-column grid exposed. Numbered sections, mono discipline, specimen labels.
// Teenage Engineering's quieter sibling.

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

export default function HomepagePreviewV5() {
	return (
		<div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] relative">
			<SmoothScroll />
			<GridOverlay />
			<TopNav />
			<main>
				<Hero />
				<Manifesto />
				<Stats />
				<ProductRange />
				<IndustriesGrid />
				<Process />
				<Materials />
				<Customers />
				<Contact />
			</main>
			<Footer />
			<PreviewSwitcher current="V5" />
		</div>
	);
}

function GridOverlay() {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-10 opacity-[0.04]"
			style={{
				backgroundImage:
					"repeating-linear-gradient(90deg, #0e0e0c 0 1px, transparent 1px 8.3333%)",
			}}
		/>
	);
}

function Row({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 grid grid-cols-12 gap-x-5 ${className}`}
		>
			{children}
		</div>
	);
}

function TopNav() {
	return (
		<header className="sticky top-0 z-30 bg-[var(--color-paper)]/95 backdrop-blur border-b border-[var(--color-ink)]/20">
			<Row className="py-4">
				<div className="col-span-3 font-mono text-[11px] uppercase tracking-[0.2em]">
					TKP / 001
				</div>
				<nav
					aria-label="Primary"
					className="col-span-6 hidden md:flex justify-between"
				>
					{nav.map((item, i) => (
						<a
							key={item.href}
							href={item.href}
							className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
						>
							<span className="opacity-60">
								{String(i + 1).padStart(2, "0")}
							</span>{" "}
							{item.short}
						</a>
					))}
				</nav>
				<a
					href="tel:0909662808"
					className="col-span-9 md:col-span-3 text-right font-mono text-[11px] uppercase tracking-widest"
				>
					0909 66 2808
				</a>
			</Row>
		</header>
	);
}

function Hero() {
	return (
		<section
			id="top"
			className="py-14 sm:py-20 lg:py-28 border-b border-[var(--color-ink)]/20"
		>
			<Row>
				<div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)] space-y-2 pt-2">
					<div>N.º 001 / 2026</div>
					<div>{heroCopy.kicker}</div>
					<div>HCMC · 10.776° N, 106.701° E</div>
				</div>
				<div className="col-span-12 md:col-span-9 mt-6 md:mt-0">
					<RevealOnScroll
						as="h1"
						className="text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] tracking-tight"
						style={{ fontFamily: "var(--font-display)" }}
					>
						{heroCopy.titleLine1}{" "}
						<span className="italic">{heroCopy.titleLine2Italic}</span>
					</RevealOnScroll>
				</div>
			</Row>

			<Row className="mt-16">
				<div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
					— Tóm tắt
				</div>
				<p className="col-span-12 md:col-span-6 text-base sm:text-lg leading-relaxed mt-2 md:mt-0">
					{heroCopy.body}
				</p>
				<div className="col-span-12 md:col-span-3 mt-6 md:mt-0 space-y-2">
					<a
						href={heroCopy.primaryCta.href}
						className="block bg-[var(--color-ink)] text-[var(--color-paper)] px-4 py-3 font-mono text-xs uppercase tracking-widest text-center hover:bg-[var(--color-accent)] transition-colors"
					>
						{heroCopy.primaryCta.label} · {heroCopy.primaryCta.phone}
					</a>
					<a
						href={heroCopy.secondaryCta.href}
						className="block border border-[var(--color-ink)] text-[var(--color-ink)] px-4 py-3 font-mono text-xs uppercase tracking-widest text-center hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
					>
						{heroCopy.secondaryCta.label} ↓
					</a>
				</div>
			</Row>

			<Row className="mt-12 sm:mt-20">
				<div className="col-span-12 h-[1px] bg-[var(--color-ink)]/20" />
			</Row>

			<Row className="mt-6">
				<div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
					— Ảnh bìa
				</div>
				<div className="col-span-12 md:col-span-9 relative aspect-[16/7] overflow-hidden bg-[var(--color-kraft-200)] mt-4 md:mt-0">
					{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
					<img
						src={unsplash.hero}
						alt="Toàn cảnh nhà máy"
						className="w-full h-full object-cover grayscale"
					/>
					<div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest bg-white px-2 py-1">
						Hình 001 — Dây chuyền sản xuất
					</div>
				</div>
			</Row>
		</section>
	);
}

function Manifesto() {
	return (
		<section className="py-14 sm:py-20 lg:py-28 border-b border-[var(--color-ink)]/20">
			<Row>
				<div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
					{manifesto.kicker}
				</div>
				<RevealOnScroll
					as="p"
					className="col-span-12 md:col-span-9 text-2xl sm:text-3xl lg:text-4xl leading-[1.3] mt-4 md:mt-0"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{manifesto.body}
				</RevealOnScroll>
			</Row>
		</section>
	);
}

function Stats() {
	return (
		<section className="py-16 border-b border-[var(--color-ink)]/20">
			<Row>
				<div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
					— Con số
				</div>
				<dl className="col-span-12 md:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4 md:mt-0">
					{stats.map((s) => (
						<div
							key={s.label}
							className="border-t border-[var(--color-ink)] pt-3"
						>
							<dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)] mb-2">
								{s.label}
							</dt>
							<dd className="font-mono text-5xl lg:text-6xl tracking-tight">
								<NumberCounter to={s.to} suffix={s.suffix} duration={0.6} />
							</dd>
						</div>
					))}
				</dl>
			</Row>
		</section>
	);
}

function ProductRange() {
	return (
		<section
			id="products"
			className="py-14 sm:py-20 lg:py-28 border-b border-[var(--color-ink)]/20"
		>
			<Row>
				<div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
					01 — Sản phẩm
				</div>
				<h2
					className="col-span-12 md:col-span-9 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mt-4 md:mt-0"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Ba cấu trúc — ba nhu cầu.
				</h2>
			</Row>

			<Row className="mt-12">
				{products.map((p, i) => (
					<RevealOnScroll
						key={p.layer}
						as="article"
						delay={i * 0.05}
						className="col-span-12 md:col-span-4"
					>
						<div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-kraft-200)] mb-4">
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={p.image}
								alt={p.name}
								className="w-full h-full object-cover grayscale"
								loading="lazy"
							/>
							<span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest bg-white px-2 py-1">
								Hình 01.0{i + 1}
							</span>
						</div>
						<dl className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)] grid grid-cols-2 gap-y-1 border-t border-[var(--color-ink)] pt-3 mb-3">
							<dt>Lớp</dt>
							<dd className="text-[var(--color-ink)] text-right">{p.layer}</dd>
							<dt>Mã</dt>
							<dd className="text-[var(--color-ink)] text-right">
								TKP-0{i + 1}
							</dd>
						</dl>
						<h3
							className="text-2xl sm:text-3xl leading-tight"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{p.name}
						</h3>
						<p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed">
							{p.purpose}
						</p>
					</RevealOnScroll>
				))}
			</Row>
		</section>
	);
}

function IndustriesGrid() {
	return (
		<section
			id="industries"
			className="py-14 sm:py-20 lg:py-28 border-b border-[var(--color-ink)]/20"
		>
			<Row>
				<div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
					02 — Ngành hàng
				</div>
				<h2
					className="col-span-12 md:col-span-9 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mt-4 md:mt-0"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Năm lĩnh vực — một tiêu chuẩn.
				</h2>
			</Row>

			<Row className="mt-12">
				<ul className="col-span-12 grid grid-cols-12 gap-x-5 gap-y-6">
					{industries.map((ind, i) => (
						<li
							key={ind.key}
							className="col-span-6 md:col-span-4 lg:col-span-[2.4] lg:[grid-column:span_2_/_span_2]"
						>
							<div className="relative aspect-square overflow-hidden bg-[var(--color-kraft-200)] mb-3">
								{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
								<img
									src={ind.image}
									alt={ind.label}
									className="w-full h-full object-cover grayscale"
									loading="lazy"
								/>
								<span className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-widest bg-white px-1.5 py-0.5">
									{String(i + 1).padStart(2, "0")}
								</span>
							</div>
							<div className="font-mono text-xs uppercase tracking-widest">
								{ind.label}
							</div>
						</li>
					))}
				</ul>
			</Row>
		</section>
	);
}

function Process() {
	return (
		<section
			id="process"
			className="py-14 sm:py-20 lg:py-28 border-b border-[var(--color-ink)]/20"
		>
			<Row>
				<div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
					03 — Quy trình
				</div>
				<h2
					className="col-span-12 md:col-span-9 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mt-4 md:mt-0"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Bốn bước — không tắt.
				</h2>
			</Row>

			<Row className="mt-12">
				{processSteps.map((step, i) => (
					<RevealOnScroll
						key={step.no}
						delay={i * 0.05}
						className="col-span-12 md:col-span-3 border-t-2 border-[var(--color-ink)] pt-4"
					>
						<div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)] mb-3">
							Bước {step.no} / 04
						</div>
						<h3
							className="text-2xl leading-tight mb-3"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{step.title}
						</h3>
						<p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
							{step.body}
						</p>
					</RevealOnScroll>
				))}
			</Row>
		</section>
	);
}

function Materials() {
	return (
		<section
			id="materials"
			className="py-14 sm:py-20 lg:py-28 border-b border-[var(--color-ink)]/20"
		>
			<Row>
				<div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
					04 — Vật liệu
				</div>
				<div className="col-span-12 md:col-span-9 grid md:grid-cols-2 gap-10 mt-4 md:mt-0">
					<div>
						<h3
							className="text-2xl sm:text-3xl leading-tight mb-4"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{materials.paper.title}
						</h3>
						<p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
							{materials.paper.body}
						</p>
					</div>
					<div>
						<h3
							className="text-2xl sm:text-3xl leading-tight mb-4"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{materials.printing.title}
						</h3>
						<table className="w-full font-mono text-xs uppercase tracking-wider">
							<tbody>
								{materials.printing.items.map((it) => (
									<tr
										key={it.label}
										className="border-b border-[var(--color-ink)]/20"
									>
										<td className="py-2">{it.label}</td>
										<td className="py-2 text-right text-[var(--color-ink-soft)]">
											{it.note}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</Row>
		</section>
	);
}

function Customers() {
	return (
		<section
			id="customers"
			className="py-14 sm:py-20 lg:py-28 border-b border-[var(--color-ink)]/20"
		>
			<Row>
				<div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
					{customers.kicker}
				</div>
				<h2
					className="col-span-12 md:col-span-9 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mt-4 md:mt-0"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{customers.heading}
				</h2>
			</Row>
			<Row className="mt-10">
				<ul className="col-span-12 grid grid-cols-4 md:grid-cols-8 border-t border-l border-[var(--color-ink)]/20">
					{customers.logos.map((logo) => (
						<li
							key={logo.src}
							className="aspect-[3/2] flex items-center justify-center border-b border-r border-[var(--color-ink)]/20 p-4"
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={logo.src}
								alt={logo.name}
								className="max-h-10 max-w-[75%] object-contain"
								loading="lazy"
							/>
						</li>
					))}
				</ul>
			</Row>
		</section>
	);
}

function Contact() {
	return (
		<section id="contact" className="py-14 sm:py-20 lg:py-28">
			<Row>
				<div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)]">
					05 — Liên hệ
				</div>
				<p
					className="col-span-12 md:col-span-9 text-3xl sm:text-4xl lg:text-5xl leading-tight mt-4 md:mt-0"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{contact.headline}
				</p>
			</Row>
			<Row className="mt-12">
				<address className="col-span-12 md:col-span-9 md:col-start-4 grid md:grid-cols-3 gap-8 not-italic font-mono text-sm">
					<div>
						<div className="text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)] mb-2">
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
						<div className="text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)] mb-2">
							Email
						</div>
						<a
							href={`mailto:${contact.email}`}
							className="block text-base break-all"
						>
							{contact.email}
						</a>
						<p className="text-[10px] text-[var(--color-ink-soft)] mt-2">
							{contact.emailNote}
						</p>
					</div>
					<div>
						<div className="text-[10px] uppercase tracking-widest text-[var(--color-ink-soft)] mb-2">
							Địa chỉ
						</div>
						<p className="text-base leading-relaxed">
							{contact.address}
							<br />
							<span className="text-[var(--color-ink-soft)]">
								{contact.addressNote}
							</span>
						</p>
					</div>
				</address>
			</Row>
		</section>
	);
}

function Footer() {
	return (
		<footer className="border-t-2 border-[var(--color-ink)] py-8">
			<Row>
				<div className="col-span-12 md:col-span-6 font-mono text-[10px] uppercase tracking-widest">
					TKP — Tân Khánh Phong · Thành lập 1997 · TP.HCM
				</div>
				<div className="col-span-12 md:col-span-6 mt-2 md:mt-0 font-mono text-[10px] uppercase tracking-widest md:text-right text-[var(--color-ink-soft)]">
					© 2026 · Bản xem thử · V5 Lưới Swiss
				</div>
			</Row>
		</footer>
	);
}
