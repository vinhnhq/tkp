// V10 — Long scroll story
// Single narrative column. Film-credit pacing. One idea per screen.
// Slow-reading brand — user commits to scroll, skim is hostile.

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
	processSteps,
	products,
	stats,
} from "@/content/homepage-preview/shared";

const ink = "#0e0e0c";
const paper = "#f4f1ea";
const soft = "#6f6a63";

const chapterClass =
	"min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12 py-20";

export default function HomepagePreviewV10() {
	return (
		<div style={{ background: paper, color: ink }} className="min-h-screen">
			<SmoothScroll />
			<ProgressTracker />
			<main>
				<Chapter01Hero />
				<Chapter02Manifesto />
				<Chapter03Stats />
				<Chapter04Product3 />
				<Chapter05Product5 />
				<Chapter06Product7 />
				<Chapter07Industries />
				<Chapter08Process />
				<Chapter09Materials />
				<Chapter10Customers />
				<Chapter11Contact />
				<Footer />
			</main>
			<PreviewSwitcher current="V10" />
		</div>
	);
}

function ProgressTracker() {
	return (
		<header className="fixed top-0 inset-x-0 z-30 pointer-events-none">
			<div className="mx-auto max-w-5xl flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4 pointer-events-auto">
				<a href="#top" className="font-mono text-xs tracking-[0.3em] uppercase">
					TKP
				</a>
				<a
					href="tel:0909662808"
					className="font-mono text-[11px] uppercase tracking-widest"
					style={{ color: soft }}
				>
					0909 66 2808
				</a>
			</div>
		</header>
	);
}

function ChapterNumber({ n, total }: { n: string; total: string }) {
	return (
		<p
			className="font-mono text-[11px] uppercase tracking-[0.35em] mb-10"
			style={{ color: soft }}
		>
			Chương {n} / {total}
		</p>
	);
}

function Chapter01Hero() {
	return (
		<section id="top" className={chapterClass}>
			<div className="max-w-3xl text-center">
				<ChapterNumber n="01" total="11" />
				<RevealOnScroll
					as="h1"
					className="text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight mb-10"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{heroCopy.titleLine1}
					<br />
					<span className="italic" style={{ color: soft }}>
						{heroCopy.titleLine2Italic}
					</span>
				</RevealOnScroll>
				<RevealOnScroll
					as="p"
					delay={0.1}
					className="text-lg sm:text-xl leading-[1.6] max-w-xl mx-auto"
					style={{ color: soft }}
				>
					{heroCopy.body}
				</RevealOnScroll>
				<RevealOnScroll delay={0.2} className="mt-16">
					<a
						href="#chapter-02"
						className="inline-block font-mono text-[11px] uppercase tracking-[0.35em] pb-1 border-b"
						style={{ borderColor: ink }}
					>
						Cuộn xuống — câu chuyện bắt đầu ↓
					</a>
				</RevealOnScroll>
			</div>
		</section>
	);
}

function Chapter02Manifesto() {
	return (
		<section id="chapter-02" className={chapterClass}>
			<div className="max-w-4xl text-center">
				<ChapterNumber n="02" total="11" />
				<RevealOnScroll
					as="p"
					className="text-2xl sm:text-4xl lg:text-5xl leading-[1.3]"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{manifesto.body}
				</RevealOnScroll>
			</div>
		</section>
	);
}

function Chapter03Stats() {
	return (
		<section
			className={`${chapterClass}`}
			style={{ background: ink, color: paper }}
		>
			<div className="max-w-3xl text-center">
				<p
					className="font-mono text-[11px] uppercase tracking-[0.35em] mb-16"
					style={{ color: `${paper}99` }}
				>
					Chương 03 / 11 · Con số nói thay lời
				</p>
				<dl className="space-y-14">
					{stats.map((s, i) => (
						<RevealOnScroll key={s.label} delay={i * 0.1}>
							<dd
								className="text-7xl sm:text-8xl lg:text-9xl leading-none tracking-tight"
								style={{ fontFamily: "var(--font-display)" }}
							>
								<NumberCounter to={s.to} suffix={s.suffix} duration={0.8} />
							</dd>
							<dt
								className="mt-4 font-mono text-xs uppercase tracking-[0.35em]"
								style={{ color: `${paper}99` }}
							>
								{s.label}
							</dt>
						</RevealOnScroll>
					))}
				</dl>
			</div>
		</section>
	);
}

function ProductChapter({
	n,
	product,
	reverse = false,
}: {
	n: string;
	product: (typeof products)[number];
	reverse?: boolean;
}) {
	return (
		<section id={`chapter-${n}`} className={chapterClass}>
			<div className="max-w-5xl w-full">
				<ChapterNumber n={n} total="11" />
				<div
					className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
						reverse ? "md:[&>*:first-child]:order-2" : ""
					}`}
				>
					<div className="aspect-[4/5] overflow-hidden">
						{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-full object-cover"
							loading="lazy"
						/>
					</div>
					<div>
						<p
							className="font-mono text-[11px] uppercase tracking-[0.35em] mb-4"
							style={{ color: soft }}
						>
							{product.layer}
						</p>
						<h2
							className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{product.name}
						</h2>
						<p
							className="text-base sm:text-lg leading-[1.7]"
							style={{ color: soft }}
						>
							{product.purpose}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function Chapter04Product3() {
	return <ProductChapter n="04" product={products[0]} />;
}

function Chapter05Product5() {
	return <ProductChapter n="05" product={products[1]} reverse />;
}

function Chapter06Product7() {
	return <ProductChapter n="06" product={products[2]} />;
}

function Chapter07Industries() {
	return (
		<section id="industries" className={chapterClass}>
			<div className="max-w-3xl text-center">
				<ChapterNumber n="07" total="11" />
				<h2
					className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-12"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Năm lĩnh vực <span className="italic">— cùng một tiêu chuẩn.</span>
				</h2>
				<ul className="space-y-4">
					{industries.map((ind, i) => (
						<RevealOnScroll
							as="li"
							key={ind.key}
							delay={i * 0.06}
							className="flex items-baseline justify-center gap-4"
						>
							<span
								className="font-mono text-[11px] uppercase tracking-[0.35em]"
								style={{ color: soft }}
							>
								{String(i + 1).padStart(2, "0")}
							</span>
							<span
								className="text-3xl sm:text-4xl leading-tight"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{ind.label}
							</span>
						</RevealOnScroll>
					))}
				</ul>
			</div>
		</section>
	);
}

function Chapter08Process() {
	return (
		<section id="process" className={chapterClass}>
			<div className="max-w-3xl w-full">
				<div className="text-center mb-16">
					<ChapterNumber n="08" total="11" />
					<h2
						className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Bốn bước — không tắt.
					</h2>
				</div>

				<ol
					className="relative border-l pl-8 space-y-14"
					style={{ borderColor: `${soft}55` }}
				>
					{processSteps.map((step, i) => (
						<RevealOnScroll
							as="li"
							key={step.no}
							delay={i * 0.06}
							className="relative"
						>
							<span
								className="absolute -left-[2.6rem] top-0 w-6 h-6 rounded-full text-[10px] font-mono flex items-center justify-center"
								style={{ background: ink, color: paper }}
							>
								{step.no}
							</span>
							<h3
								className="text-2xl sm:text-3xl leading-tight mb-3"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{step.title}
							</h3>
							<p className="text-base leading-[1.7]" style={{ color: soft }}>
								{step.body}
							</p>
						</RevealOnScroll>
					))}
				</ol>
			</div>
		</section>
	);
}

function Chapter09Materials() {
	return (
		<section id="materials" className={chapterClass}>
			<div className="max-w-3xl w-full">
				<ChapterNumber n="09" total="11" />
				<div className="space-y-12">
					<div>
						<h3
							className="text-3xl sm:text-4xl leading-tight mb-6"
							style={{ fontFamily: "var(--font-display)" }}
						>
							{materials.paper.title}
						</h3>
						<p
							className="text-base sm:text-lg leading-[1.7]"
							style={{ color: soft }}
						>
							{materials.paper.body}
						</p>
					</div>
					<div className="border-t pt-12" style={{ borderColor: `${soft}33` }}>
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
									className="flex justify-between pb-3 border-b"
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

function Chapter10Customers() {
	return (
		<section id="customers" className={chapterClass}>
			<div className="max-w-3xl w-full text-center">
				<ChapterNumber n="10" total="11" />
				<h2
					className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{customers.heading}
				</h2>
				<p className="text-base mb-14" style={{ color: soft }}>
					{customers.subheading}
				</p>
				<ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12 items-center">
					{customers.logos.map((logo) => (
						<li
							key={logo.src}
							className="flex items-center justify-center h-16"
						>
							{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
							<img
								src={logo.src}
								alt={logo.name}
								className="max-h-12 max-w-[75%] object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
								loading="lazy"
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

function Chapter11Contact() {
	return (
		<section
			id="contact"
			className={chapterClass}
			style={{ background: ink, color: paper }}
		>
			<div className="max-w-3xl w-full text-center">
				<p
					className="font-mono text-[11px] uppercase tracking-[0.35em] mb-10"
					style={{ color: `${paper}99` }}
				>
					Chương 11 / 11 · Khép lại
				</p>
				<h2
					className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-14"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{contact.headline}
				</h2>
				<address className="not-italic space-y-8 font-mono text-sm">
					<div>
						{contact.hotlines.map((tel) => (
							<a
								key={tel}
								href={`tel:${tel.replace(/\s/g, "")}`}
								className="block text-2xl mt-2 first:mt-0"
							>
								{tel}
							</a>
						))}
					</div>
					<a
						href={`mailto:${contact.email}`}
						className="block text-lg break-all"
						style={{ color: `${paper}99` }}
					>
						{contact.email}
					</a>
					<p style={{ color: `${paper}77` }}>
						{contact.address} · {contact.addressNote}
					</p>
				</address>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer
			className="py-16 px-5 sm:px-8 lg:px-12 text-center"
			style={{ background: ink, color: `${paper}99` }}
		>
			<div
				className="mx-auto max-w-3xl font-mono text-[10px] uppercase tracking-[0.35em]"
				style={{ color: `${paper}55` }}
			>
				<p>Tân Khánh Phong · Thành lập 1997 · TP.HCM</p>
				<p className="mt-2">© 2026 · Bản xem thử · V10 Cuộn dài</p>
			</div>
		</footer>
	);
}
