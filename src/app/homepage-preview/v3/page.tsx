// V3 — Text-first / type-led
// Near-black background, oversized display type. Confidence without imagery.
// Photos fade in late on scroll. Aesop / Teenage Engineering tone.
// Risk: may undersell the factory.

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

const ink = "#0b0b0a";
const paper = "#f4f1ea";
const softInk = "#9a9690";

export default function HomepagePreviewV3() {
	return (
		<div style={{ background: ink, color: paper }} className="min-h-screen">
			<SmoothScroll />
			<TopNav />
			<main>
				<Hero />
				<Ticker />
				<Manifesto />
				<StatsBand />
				<ProductRange />
				<IndustriesList />
				<Process />
				<Materials />
				<Customers />
				<Contact />
			</main>
			<Footer />
			<PreviewSwitcher current="V3" />
		</div>
	);
}

function TopNav() {
	return (
		<header className="fixed top-0 inset-x-0 z-40">
			<div
				className="mx-auto max-w-[1400px] flex items-center justify-between px-5 sm:px-8 lg:px-12 py-5"
				style={{ color: paper }}
			>
				<a href="#top" className="font-mono text-sm tracking-[0.2em] uppercase">
					TKP — 1997
				</a>
				<nav aria-label="Primary" className="hidden md:flex items-center gap-8">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="font-mono text-[11px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
						>
							{item.short}
						</a>
					))}
				</nav>
				<a
					href="tel:0909662808"
					className="font-mono text-xs uppercase tracking-widest"
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
			className="relative min-h-[90vh] lg:min-h-[100svh] flex flex-col justify-between px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-10"
		>
			<div className="mx-auto max-w-[1400px] w-full">
				<p
					className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] mb-10"
					style={{ color: softInk }}
				>
					{heroCopy.kicker}
				</p>
				<RevealOnScroll
					as="h1"
					className="text-[clamp(3.5rem,13vw,13rem)] leading-[0.88] tracking-tight max-w-6xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{heroCopy.titleLine1}
					<br />
					<span className="italic" style={{ color: softInk }}>
						{heroCopy.titleLine2Italic}
					</span>
				</RevealOnScroll>
				<RevealOnScroll
					as="p"
					delay={0.1}
					className="mt-10 max-w-xl text-base sm:text-lg leading-relaxed"
					style={{ color: softInk }}
				>
					{heroCopy.body}
				</RevealOnScroll>
				<RevealOnScroll
					delay={0.2}
					className="mt-12 flex flex-wrap items-center gap-6"
				>
					<a
						href={heroCopy.primaryCta.href}
						className="inline-flex items-center gap-3 border px-6 py-4 font-mono text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
						style={{ borderColor: paper }}
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

			<div
				className="mx-auto max-w-[1400px] w-full flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.3em] mt-12 sm:mt-20"
				style={{ color: softInk }}
			>
				<span>N.º 001 / 2026</span>
				<span className="hidden sm:inline">CARTON · BAO BÌ · TP.HCM</span>
				<span>↓ Cuộn</span>
			</div>
		</section>
	);
}

function Ticker() {
	const line =
		"3 LỚP · 5 LỚP · 7 LỚP · NÔNG SẢN · ĐIỆN TỬ · THỰC PHẨM · MỸ PHẨM · THỜI TRANG ·";
	return (
		<div
			className="border-y py-4 overflow-hidden whitespace-nowrap"
			style={{ borderColor: `${softInk}33` }}
		>
			<div
				className="inline-block font-mono text-xs sm:text-sm uppercase tracking-[0.3em] animate-[ticker_45s_linear_infinite]"
				style={{ color: softInk }}
			>
				{Array.from({ length: 6 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: decorative repeat
					<span key={i} className="mx-8">
						{line}
					</span>
				))}
			</div>
			<style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
		</div>
	);
}

function Manifesto() {
	return (
		<section className="py-32 sm:py-40 px-5 sm:px-8 lg:px-12">
			<div className="mx-auto max-w-5xl">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-10"
					style={{ color: softInk }}
				>
					{manifesto.kicker}
				</p>
				<RevealOnScroll
					as="p"
					className="text-3xl sm:text-5xl lg:text-6xl leading-[1.15]"
					style={{ fontFamily: "var(--font-display)" }}
				>
					<ManifestoBody />
				</RevealOnScroll>
			</div>
		</section>
	);
}

function StatsBand() {
	return (
		<section
			className="border-y py-20 sm:py-24 px-5 sm:px-8 lg:px-12"
			style={{ borderColor: `${softInk}33` }}
		>
			<div className="mx-auto max-w-[1400px] grid grid-cols-2 lg:grid-cols-4 gap-12">
				{stats.map((stat) => (
					<div key={stat.label}>
						<div
							className="text-6xl sm:text-7xl lg:text-8xl leading-none tracking-tight"
							style={{ fontFamily: "var(--font-display)" }}
						>
							<NumberCounter to={stat.to} suffix={stat.suffix} duration={0.6} />
						</div>
						<div
							className="mt-4 font-mono text-xs uppercase tracking-widest"
							style={{ color: softInk }}
						>
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
			className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12"
		>
			<div className="mx-auto max-w-[1400px]">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-6"
					style={{ color: softInk }}
				>
					01 — Sản phẩm
				</p>
				<h2
					className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-20 max-w-4xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Ba cấu trúc —{" "}
					<span className="italic" style={{ color: softInk }}>
						ba nhịp vận chuyển.
					</span>
				</h2>

				<div className="space-y-12">
					{products.map((p, i) => (
						<RevealOnScroll
							key={p.layer}
							delay={i * 0.05}
							className="grid md:grid-cols-[8rem_1fr_auto_20rem] gap-8 md:gap-12 items-center pb-12 border-b"
							style={{ borderColor: `${softInk}33` }}
						>
							<span
								className="text-5xl leading-none tracking-tight"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{String(i + 1).padStart(2, "0")}
							</span>
							<div>
								<h3
									className="text-3xl sm:text-4xl leading-tight mb-3"
									style={{ fontFamily: "var(--font-display)" }}
								>
									{p.name}
								</h3>
								<p
									className="font-mono text-xs uppercase tracking-widest"
									style={{ color: softInk }}
								>
									{p.layer}
								</p>
							</div>
							<p
								className="text-sm sm:text-base leading-relaxed max-w-sm"
								style={{ color: softInk }}
							>
								{p.purpose}
							</p>
							<div className="relative aspect-[4/3] overflow-hidden">
								{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
								<img
									src={p.image}
									alt={p.name}
									className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
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

function IndustriesList() {
	return (
		<section
			id="industries"
			className="border-t py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12"
			style={{ borderColor: `${softInk}33` }}
		>
			<div className="mx-auto max-w-[1400px]">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-6"
					style={{ color: softInk }}
				>
					02 — Ngành hàng
				</p>
				<h2
					className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-16 max-w-4xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Năm lĩnh vực —{" "}
					<span className="italic" style={{ color: softInk }}>
						một tiêu chuẩn.
					</span>
				</h2>

				<ul>
					{industries.map((ind, i) => (
						<li
							key={ind.key}
							className="group grid md:grid-cols-[6rem_1fr_auto] gap-6 md:gap-12 items-center py-8 border-t relative overflow-hidden"
							style={{ borderColor: `${softInk}33` }}
						>
							<span
								className="font-mono text-xs uppercase tracking-widest"
								style={{ color: softInk }}
							>
								{String(i + 1).padStart(2, "0")}
							</span>
							<span
								className="text-3xl sm:text-4xl lg:text-5xl leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-2"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{ind.label}
							</span>
							<div className="hidden md:block absolute right-8 top-2 bottom-2 w-60 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
								<img
									src={ind.image}
									alt=""
									className="w-full h-full object-cover grayscale"
									aria-hidden="true"
									loading="lazy"
								/>
							</div>
							<span
								className="font-mono text-xs uppercase tracking-widest md:justify-self-end"
								style={{ color: softInk }}
							>
								→
							</span>
						</li>
					))}
					<li className="border-t" style={{ borderColor: `${softInk}33` }} />
				</ul>
			</div>
		</section>
	);
}

function Process() {
	return (
		<section
			id="process"
			className="border-t py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12"
			style={{ borderColor: `${softInk}33` }}
		>
			<div className="mx-auto max-w-[1400px]">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-6"
					style={{ color: softInk }}
				>
					03 — Quy trình
				</p>
				<h2
					className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-16 max-w-4xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Bốn bước —{" "}
					<span className="italic" style={{ color: softInk }}>
						không tắt.
					</span>
				</h2>

				<ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
					{processSteps.map((step, i) => (
						<RevealOnScroll key={step.no} as="li" delay={i * 0.08}>
							<span
								className="text-7xl lg:text-8xl leading-none tracking-tight block mb-6"
								style={{ fontFamily: "var(--font-display)", color: softInk }}
							>
								{step.no}
							</span>
							<h3
								className="text-2xl leading-tight mb-4"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{step.title}
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: softInk }}>
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
			className="border-t py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12"
			style={{ borderColor: `${softInk}33` }}
		>
			<div className="mx-auto max-w-[1400px]">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-10"
					style={{ color: softInk }}
				>
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
						<p className="text-base leading-relaxed" style={{ color: softInk }}>
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
									className="flex justify-between border-b pb-3"
									style={{ borderColor: `${softInk}33` }}
								>
									<span>{it.label}</span>
									<span style={{ color: softInk }}>{it.note}</span>
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
			className="border-t py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12"
			style={{ borderColor: `${softInk}33` }}
		>
			<div className="mx-auto max-w-[1400px]">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-6"
					style={{ color: softInk }}
				>
					{customers.kicker}
				</p>
				<h2
					className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-8 max-w-4xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{customers.heading}
				</h2>
				<p
					className="text-base leading-relaxed max-w-xl mb-16"
					style={{ color: softInk }}
				>
					{customers.subheading}
				</p>

				<ul
					className="grid grid-cols-2 sm:grid-cols-4 gap-px border-l border-t"
					style={{ borderColor: `${softInk}33`, background: `${softInk}33` }}
				>
					{customers.logos.map((logo) => (
						<li
							key={logo.src}
							className="aspect-[3/2] flex items-center justify-center p-6"
							style={{ background: ink }}
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={logo.src}
								alt={logo.name}
								className="max-h-12 max-w-[75%] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 invert brightness-200"
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
			className="border-t py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12"
			style={{ borderColor: `${softInk}33` }}
		>
			<div className="mx-auto max-w-[1400px]">
				<p
					className="font-mono text-xs uppercase tracking-widest mb-8"
					style={{ color: softInk }}
				>
					05 — Liên hệ
				</p>
				<p
					className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-16 max-w-4xl"
					style={{ fontFamily: "var(--font-display)" }}
				>
					<ContactHeadline />
				</p>

				<address className="not-italic grid gap-12 md:grid-cols-3 font-mono text-sm">
					<div>
						<div
							className="text-xs uppercase tracking-widest mb-3"
							style={{ color: softInk }}
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
							className="text-xs uppercase tracking-widest mb-3"
							style={{ color: softInk }}
						>
							Email
						</div>
						<a
							href={`mailto:${contact.email}`}
							className="block text-xl break-all"
						>
							{contact.email}
						</a>
						<p className="text-xs mt-2" style={{ color: softInk }}>
							{contact.emailNote}
						</p>
					</div>
					<div>
						<div
							className="text-xs uppercase tracking-widest mb-3"
							style={{ color: softInk }}
						>
							Địa chỉ
						</div>
						<p className="text-base leading-relaxed">
							{contact.address}
							<br />
							<span style={{ color: softInk }}>{contact.addressNote}</span>
						</p>
					</div>
				</address>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer
			className="border-t px-5 sm:px-8 lg:px-12 py-10"
			style={{ borderColor: `${softInk}33` }}
		>
			<div
				className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-end md:justify-between gap-6 font-mono text-xs uppercase tracking-widest"
				style={{ color: softInk }}
			>
				<div>
					<div style={{ color: paper }}>TKP — Tân Khánh Phong</div>
					<div>Thành lập 1997 · TP.HCM</div>
				</div>
				<div className="space-y-1">
					<div>© 2026 TKP</div>
					<div>Bản xem thử · V3 Ưu tiên chữ</div>
				</div>
			</div>
		</footer>
	);
}

function ManifestoBody() {
	return (
		<>
			Chúng tôi tin rằng một chiếc thùng carton tốt không cần phô trương. Nó cần
			chắc chắn, đúng hẹn, và đúng chi phí
			<span style={{ color: softInk, fontStyle: "italic" }}>
				{" — đã 27 năm chúng tôi làm đúng một việc đó."}
			</span>
		</>
	);
}

function ContactHeadline() {
	return (
		<>
			Gọi một cuộc
			<span style={{ color: softInk, fontStyle: "italic" }}>
				{" — chúng tôi báo giá trong 24h."}
			</span>
		</>
	);
}
