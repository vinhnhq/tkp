// V6 — Warm brutalist
// Kraft + accent orange. Chunky dividers, asymmetric type, unapologetic weight.
// Confident, factory-floor energy. Loud by design.

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

const bg = "#e2d5bf";
const ink = "#0e0e0c";
const accent = "#d9532b";

export default function HomepagePreviewV6() {
	return (
		<div className="min-h-screen" style={{ background: bg, color: ink }}>
			<SmoothScroll />
			<TopNav />
			<main>
				<Hero />
				<StatsBar />
				<Manifesto />
				<ProductRange />
				<IndustriesGrid />
				<Process />
				<Materials />
				<Customers />
				<Contact />
			</main>
			<Footer />
			<PreviewSwitcher current="V6" />
		</div>
	);
}

function TopNav() {
	return (
		<header
			className="sticky top-0 z-30 border-b-[3px]"
			style={{ borderColor: ink, background: bg }}
		>
			<div className="mx-auto max-w-[1600px] flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4">
				<a
					href="#top"
					className="text-2xl sm:text-3xl leading-none tracking-tight"
					style={{ fontFamily: "var(--font-display)" }}
				>
					TKP<span style={{ color: accent }}>.</span>
				</a>
				<nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="font-mono text-xs uppercase tracking-widest"
						>
							{item.short}
						</a>
					))}
				</nav>
				<a
					href="tel:0909662808"
					className="px-4 py-2 font-mono text-xs uppercase tracking-widest border-[3px] hover:text-white transition-colors"
					style={{ borderColor: ink, color: ink, background: "transparent" }}
				>
					0909 66 2808 ↗
				</a>
			</div>
		</header>
	);
}

function Hero() {
	return (
		<section
			id="top"
			className="relative border-b-[6px] px-5 sm:px-8 lg:px-12 py-20 lg:py-28"
			style={{ borderColor: ink }}
		>
			<div className="mx-auto max-w-[1600px]">
				<p className="font-mono text-xs uppercase tracking-[0.3em] mb-8">
					{heroCopy.kicker}
				</p>
				<RevealOnScroll
					as="h1"
					className="text-[clamp(4rem,16vw,18rem)] leading-[0.82] tracking-[-0.03em] font-black"
					style={{
						fontFamily: "var(--font-display)",
						fontWeight: 900,
					}}
				>
					<span className="block">TỪ GIẤY</span>
					<span className="block italic" style={{ color: accent }}>
						ĐẾN THÙNG.
					</span>
				</RevealOnScroll>
				<div className="grid md:grid-cols-[2fr_1fr] gap-8 mt-12 items-end">
					<RevealOnScroll
						as="p"
						delay={0.1}
						className="text-xl sm:text-2xl lg:text-3xl leading-[1.25] max-w-2xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						{heroCopy.body}
					</RevealOnScroll>
					<RevealOnScroll delay={0.2} className="flex flex-col gap-3">
						<a
							href={heroCopy.primaryCta.href}
							className="block px-6 py-5 text-center font-mono text-sm uppercase tracking-widest border-[3px] hover:-translate-y-0.5 transition-transform"
							style={{ background: accent, borderColor: ink, color: "#fff" }}
						>
							<div>{heroCopy.primaryCta.label}</div>
							<div className="font-sans text-lg mt-1">
								{heroCopy.primaryCta.phone}
							</div>
						</a>
						<a
							href={heroCopy.secondaryCta.href}
							className="block px-6 py-3 text-center font-mono text-xs uppercase tracking-widest border-[3px] hover:-translate-y-0.5 transition-transform"
							style={{ borderColor: ink, color: ink }}
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
			className="border-b-[6px] overflow-hidden"
			style={{ borderColor: ink, background: ink }}
		>
			<div className="mx-auto max-w-[1600px] grid grid-cols-2 lg:grid-cols-4">
				{stats.map((s, i) => (
					<div
						key={s.label}
						className={`p-6 lg:p-10 text-[var(--color-paper)] ${
							i < 3 ? "lg:border-r" : ""
						} ${i < 2 ? "border-b lg:border-b-0" : ""} ${
							i % 2 === 0 ? "border-r lg:border-r" : ""
						}`}
						style={{ borderColor: bg }}
					>
						<div
							className="text-5xl lg:text-7xl leading-none"
							style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
						>
							<NumberCounter to={s.to} suffix={s.suffix} duration={0.6} />
						</div>
						<div className="mt-3 font-mono text-[10px] uppercase tracking-widest opacity-70">
							{s.label}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function Manifesto() {
	return (
		<section
			className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 border-b-[3px]"
			style={{ borderColor: ink }}
		>
			<div className="mx-auto max-w-[1400px]">
				<p className="font-mono text-xs uppercase tracking-widest mb-8">
					{manifesto.kicker}
				</p>
				<RevealOnScroll
					as="p"
					className="text-3xl sm:text-5xl lg:text-7xl leading-[1.05]"
					style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
				>
					<span>Một chiếc thùng carton tốt </span>
					<span style={{ color: accent }}>không cần phô trương.</span>{" "}
					<span>Chắc chắn. Đúng hẹn. Đúng chi phí. </span>
					<span className="italic">27 năm — một việc.</span>
				</RevealOnScroll>
			</div>
		</section>
	);
}

function ProductRange() {
	return (
		<section
			id="products"
			className="py-14 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12 border-b-[3px]"
			style={{ borderColor: ink }}
		>
			<div className="mx-auto max-w-[1600px]">
				<div className="flex items-end justify-between gap-4 flex-wrap mb-10">
					<h2
						className="text-5xl sm:text-7xl lg:text-8xl leading-[0.9]"
						style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
					>
						Sản phẩm<span style={{ color: accent }}>.</span>
					</h2>
					<p className="font-mono text-xs uppercase tracking-widest">01 / 05</p>
				</div>

				<div className="space-y-0 border-t-[3px]" style={{ borderColor: ink }}>
					{products.map((p, i) => (
						<RevealOnScroll
							key={p.layer}
							delay={i * 0.05}
							className="grid md:grid-cols-[auto_1fr_2fr_1fr] gap-6 md:gap-10 items-center py-8 border-b-[3px]"
							style={{ borderColor: ink }}
						>
							<div
								className="text-5xl md:text-6xl lg:text-7xl leading-none w-24"
								style={{
									fontFamily: "var(--font-display)",
									fontWeight: 900,
									color: accent,
								}}
							>
								0{i + 1}
							</div>
							<h3
								className="text-3xl md:text-4xl lg:text-5xl leading-tight"
								style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
							>
								{p.name}
							</h3>
							<p className="text-base md:text-lg leading-relaxed">
								{p.purpose}
							</p>
							<div
								className="relative aspect-[4/3] overflow-hidden border-[3px]"
								style={{ borderColor: ink }}
							>
								{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
								<img
									src={p.image}
									alt={p.name}
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}

function IndustriesGrid() {
	return (
		<section
			id="industries"
			className="py-14 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12 border-b-[3px]"
			style={{ borderColor: ink }}
		>
			<div className="mx-auto max-w-[1600px]">
				<div className="flex items-end justify-between gap-4 flex-wrap mb-10">
					<h2
						className="text-5xl sm:text-7xl lg:text-8xl leading-[0.9]"
						style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
					>
						Ngành hàng<span style={{ color: accent }}>.</span>
					</h2>
					<p className="font-mono text-xs uppercase tracking-widest">02 / 05</p>
				</div>

				<ul
					className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t-[3px] border-l-[3px]"
					style={{ borderColor: ink }}
				>
					{industries.map((ind, i) => (
						<li
							key={ind.key}
							className="relative aspect-square border-r-[3px] border-b-[3px] group overflow-hidden"
							style={{ borderColor: ink }}
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={ind.image}
								alt={ind.label}
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
							/>
							<div
								className="absolute inset-0 flex flex-col justify-between p-4 text-white"
								style={{
									background:
										"linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
								}}
							>
								<span className="font-mono text-[10px] uppercase tracking-widest self-end">
									{String(i + 1).padStart(2, "0")}
								</span>
								<span
									className="text-2xl md:text-3xl leading-tight"
									style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
								>
									{ind.label}
								</span>
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
			className="py-14 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12 border-b-[3px]"
			style={{ borderColor: ink, background: accent, color: "#fff" }}
		>
			<div className="mx-auto max-w-[1600px]">
				<div className="flex items-end justify-between gap-4 flex-wrap mb-10">
					<h2
						className="text-5xl sm:text-7xl lg:text-8xl leading-[0.9]"
						style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
					>
						Quy trình.
					</h2>
					<p className="font-mono text-xs uppercase tracking-widest">03 / 05</p>
				</div>

				<ol className="space-y-0 border-t-[3px] border-white/80">
					{processSteps.map((step, i) => (
						<RevealOnScroll
							as="li"
							key={step.no}
							delay={i * 0.05}
							className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_2fr] gap-6 md:gap-12 items-start py-8 border-b-[3px] border-white/80"
						>
							<span
								className="text-7xl md:text-8xl lg:text-9xl leading-none w-[6rem]"
								style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
							>
								{step.no}
							</span>
							<h3
								className="text-3xl md:text-4xl lg:text-5xl leading-tight"
								style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
							>
								{step.title}
							</h3>
							<p className="col-span-2 md:col-span-1 text-base md:text-lg leading-relaxed md:max-w-lg">
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
			className="py-14 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12 border-b-[3px]"
			style={{ borderColor: ink }}
		>
			<div className="mx-auto max-w-[1600px]">
				<div className="flex items-end justify-between gap-4 flex-wrap mb-10">
					<h2
						className="text-5xl sm:text-7xl lg:text-8xl leading-[0.9]"
						style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
					>
						Vật liệu<span style={{ color: accent }}>.</span>
					</h2>
					<p className="font-mono text-xs uppercase tracking-widest">04 / 05</p>
				</div>
				<div className="grid md:grid-cols-2 gap-10 md:gap-16">
					<div>
						<h3
							className="text-2xl sm:text-3xl leading-tight mb-4"
							style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
						>
							{materials.paper.title}
						</h3>
						<p className="text-base leading-relaxed">{materials.paper.body}</p>
					</div>
					<div>
						<h3
							className="text-2xl sm:text-3xl leading-tight mb-4"
							style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
						>
							{materials.printing.title}
						</h3>
						<ul className="border-t-[3px]" style={{ borderColor: ink }}>
							{materials.printing.items.map((it) => (
								<li
									key={it.label}
									className="flex justify-between py-3 border-b-[3px]"
									style={{ borderColor: ink }}
								>
									<span className="font-mono text-sm uppercase tracking-wider">
										{it.label}
									</span>
									<span className="font-mono text-sm uppercase tracking-wider opacity-70">
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
			className="py-14 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12 border-b-[3px]"
			style={{ borderColor: ink }}
		>
			<div className="mx-auto max-w-[1600px]">
				<h2
					className="text-5xl sm:text-7xl lg:text-8xl leading-[0.9] mb-4"
					style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
				>
					Khách hàng<span style={{ color: accent }}>.</span>
				</h2>
				<p className="text-base mb-10 max-w-xl">{customers.subheading}</p>

				<ul
					className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t-[3px] border-l-[3px]"
					style={{ borderColor: ink }}
				>
					{customers.logos.map((logo) => (
						<li
							key={logo.src}
							className="aspect-[3/2] flex items-center justify-center border-r-[3px] border-b-[3px] p-6 bg-white"
							style={{ borderColor: ink }}
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={logo.src}
								alt={logo.name}
								className="max-h-14 max-w-[75%] object-contain"
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
			className="py-14 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
			style={{ background: ink, color: "#fff" }}
		>
			<div className="mx-auto max-w-[1600px]">
				<p className="font-mono text-xs uppercase tracking-widest opacity-70 mb-6">
					05 — Liên hệ
				</p>
				<p
					className="text-5xl sm:text-7xl lg:text-8xl leading-[0.95] mb-12 max-w-4xl"
					style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
				>
					Gọi<span style={{ color: accent }}>.</span>{" "}
					<span className="italic">Báo giá trong 24h.</span>
				</p>

				<div className="grid md:grid-cols-3 gap-10 font-mono text-sm">
					<div>
						<div className="text-[10px] uppercase tracking-widest opacity-60 mb-2">
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
						<div className="text-[10px] uppercase tracking-widest opacity-60 mb-2">
							Email
						</div>
						<a
							href={`mailto:${contact.email}`}
							className="block text-xl break-all"
						>
							{contact.email}
						</a>
						<p className="text-[10px] opacity-50 mt-2">{contact.emailNote}</p>
					</div>
					<div>
						<div className="text-[10px] uppercase tracking-widest opacity-60 mb-2">
							Địa chỉ
						</div>
						<p className="text-base leading-relaxed">
							{contact.address}
							<br />
							<span className="opacity-60">{contact.addressNote}</span>
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
			className="px-5 sm:px-8 lg:px-12 py-8 border-t-[3px]"
			style={{ borderColor: bg, background: ink, color: bg }}
		>
			<div className="mx-auto max-w-[1600px] flex flex-col md:flex-row md:items-end md:justify-between gap-4 font-mono text-[10px] uppercase tracking-widest">
				<span>TKP · Tân Khánh Phong · Thành lập 1997 · TP.HCM</span>
				<span>© 2026 · Bản xem thử · V6 Brutalist</span>
			</div>
		</footer>
	);
}
