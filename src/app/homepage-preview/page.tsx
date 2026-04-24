// Homepage preview gallery — lets the reviewer open each variant
// side-by-side before committing to a direction.

import { unsplash } from "@/content/homepage-preview/unsplash";

type Variant = {
	id: "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8" | "v9" | "v10";
	label: string;
	title: string;
	mood: string;
	nav: string;
	risk: string;
	cover: string;
	palette: { bg: string; fg: string; accent: string };
};

const variants: Variant[] = [
	{
		id: "v1",
		label: "V1 · Tạp chí",
		title: "Bìa tạp chí tràn khung",
		mood: "Cảm giác bìa tạp chí. Ảnh hero phủ toàn màn hình, wordmark chèn lên ảnh, CTA ghim ở đáy.",
		nav: "Thanh trên tối giản, trong suốt trên hero → đặc khi cuộn.",
		risk: "Phụ thuộc nhiều vào ảnh — ảnh yếu là hỏng.",
		cover: unsplash.hero,
		palette: { bg: "#fafaf7", fg: "#0e0e0c", accent: "#d9532b" },
	},
	{
		id: "v2",
		label: "V2 · Chia đôi",
		title: "Chia đôi màn hình",
		mood: "Nửa trái: wordmark lớn + tagline + CTA. Nửa phải: ảnh. Bố cục như catalog công nghiệp châu Âu.",
		nav: "Thanh ngang cố định, nhãn mục ở giữa.",
		risk: "Dễ bị chung chung nếu typography không mạnh.",
		cover: unsplash.heroAlt,
		palette: { bg: "#f0eadf", fg: "#0e0e0c", accent: "#d9532b" },
	},
	{
		id: "v3",
		label: "V3 · Ưu tiên chữ",
		title: "Ưu tiên chữ viết",
		mood: "Nền gần đen, chữ display cỡ lớn. Ảnh hiện dần khi cuộn. Cảm giác Aesop / Teenage Engineering.",
		nav: "Thanh ngang, đảo màu — trắng trên nền tối.",
		risk: "Khách có thể thấy chưa tôn được nhà máy.",
		cover: unsplash.heroDark,
		palette: { bg: "#0b0b0a", fg: "#f4f1ea", accent: "#d9532b" },
	},
	{
		id: "v4",
		label: "V4 · Chất liệu",
		title: "Giấy kraft là giao diện",
		mood: "Vân giấy kraft thô, họa tiết sóng giấy, đường gấp làm hoạ tiết. Vật liệu chính là giao diện.",
		nav: "Sidebar trái trên desktop, thanh trên ở mobile.",
		risk: "Phức tạp nhất khi triển khai — khác biệt nhất nếu làm tốt.",
		cover: unsplash.heroTexture,
		palette: { bg: "#f0eadf", fg: "#3d2d1a", accent: "#d9532b" },
	},
	{
		id: "v5",
		label: "V5 · Lưới Swiss",
		title: "Lưới Swiss · thiên về dữ liệu",
		mood: "Lưới 12 cột lộ rõ. Mục đánh số, kỷ luật font mono, nhãn mẫu vật. Phiên bản trầm hơn của Teenage Engineering.",
		nav: "Thanh ngang, số thứ tự mục lộ rõ, lưới overlay cố định.",
		risk: "Dễ cảm giác lạnh hoặc kỹ thuật nếu ảnh không ấm.",
		cover: unsplash.factoryDetail,
		palette: { bg: "#fafaf7", fg: "#0e0e0c", accent: "#d9532b" },
	},
	{
		id: "v6",
		label: "V6 · Mạnh mẽ",
		title: "Brutalist ấm",
		mood: "Nền kraft + cam điểm nhấn. Viền dày, typography bất cân đối, đậm chắc. Năng lượng xưởng sản xuất.",
		nav: "Thanh lớn với CTA điểm nhấn, không cần tinh tế.",
		risk: "Ồn ào — có thể quá mạnh nếu khách muốn tinh tế.",
		cover: unsplash.factoryWorker,
		palette: { bg: "#e2d5bf", fg: "#0e0e0c", accent: "#d9532b" },
	},
	{
		id: "v7",
		label: "V7 · Tối giản",
		title: "Tối giản kiểu Aesop / Muji",
		mood: "Nền trắng, cột đơn hẹp, sản phẩm như mẫu vật. Nhiều khoảng trắng, tiết chế.",
		nav: "Thanh trên nhỏ, gần như vô hình.",
		risk: "Có thể quá nhẹ với thương hiệu công nghiệp.",
		cover: unsplash.productAlt2,
		palette: { bg: "#ffffff", fg: "#1a1a18", accent: "#8c6a3f" },
	},
	{
		id: "v8",
		label: "V8 · Công nghiệp tối",
		title: "Công nghiệp tối",
		mood: "Nền gần đen + điểm nhấn kraft. Ảnh đậm, drama hơn là tối giản — đối nghịch V1.",
		nav: "Thanh trên tối với CTA điểm nhấn.",
		risk: "Tối liên tục có thể gây mỏi mắt khi cuộn dài.",
		cover: unsplash.heroDark,
		palette: { bg: "#141412", fg: "#f0eadf", accent: "#d9532b" },
	},
	{
		id: "v9",
		label: "V9 · Khối Bento",
		title: "Khối Bento",
		mood: "Lưới dashboard theo khối, kích thước đa dạng. Gần với SaaS hiện đại. Mỗi mục là một khối riêng.",
		nav: "Các khối trên cùng kiêm vai trò điều hướng.",
		risk: "Dễ cảm giác công nghệ / không công nghiệp nếu khối quá phẳng.",
		cover: unsplash.factoryTeam,
		palette: { bg: "#fafaf7", fg: "#0e0e0c", accent: "#d9532b" },
	},
	{
		id: "v10",
		label: "V10 · Cuộn dài",
		title: "Câu chuyện cuộn dài",
		mood: "Một cột kể chuyện duy nhất. Nhịp như credit phim, mỗi màn hình một ý. Thương hiệu đọc chậm.",
		nav: "Chỉ có chỉ báo tiến trình cố định.",
		risk: "Đọc dài — người dùng phải cam kết; lướt nhanh sẽ khó chịu.",
		cover: unsplash.factoryPortrait,
		palette: { bg: "#f4f1ea", fg: "#0e0e0c", accent: "#d9532b" },
	},
];

export default function HomepagePreviewIndex() {
	return (
		<div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
			<header className="border-b border-[var(--color-kraft-400)]/30">
				<div className="mx-auto max-w-[1400px] flex items-center justify-between px-5 sm:px-8 lg:px-12 py-5">
					<div className="font-mono text-sm tracking-[0.2em] uppercase">
						TKP · Xem thử
					</div>
					<div className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
						Sprint 02 · T003 · Chọn hướng · {variants.length} phương án
					</div>
				</div>
			</header>

			<section className="px-5 sm:px-8 lg:px-12 pt-16 pb-10">
				<div className="mx-auto max-w-[1400px]">
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-6">
						— {variants.length} hướng thiết kế
					</p>
					<h1
						className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Mỗi trang là một <span className="italic">cách tiếp cận</span> khác
						— hãy chọn hướng phù hợp với thương hiệu.
					</h1>
					<p className="mt-6 text-base text-[var(--color-ink-soft)] max-w-2xl leading-relaxed">
						Nội dung trong {variants.length} phiên bản là giống nhau — chỉ khác
						ở bố cục, typography và cảm giác tổng thể. Hình ảnh hiện là ảnh minh
						hoạ từ Unsplash; sẽ thay bằng ảnh thực tế của TKP sau khi chọn
						hướng.
					</p>
				</div>
			</section>

			<section className="px-5 sm:px-8 lg:px-12 pb-24">
				<div className="mx-auto max-w-[1400px] grid gap-6 md:grid-cols-2 lg:gap-8">
					{variants.map((v, i) => (
						<VariantCard key={v.id} variant={v} index={i} />
					))}
				</div>
			</section>

			<footer className="border-t border-[var(--color-kraft-400)]/30 px-5 sm:px-8 lg:px-12 py-10">
				<div className="mx-auto max-w-[1400px] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
					<span>TKP — Tân Khánh Phong · Thành lập 1997 · TP.HCM</span>
					<span>Bản xem thử · Tổng quan</span>
				</div>
			</footer>
		</div>
	);
}

function VariantCard({ variant, index }: { variant: Variant; index: number }) {
	return (
		<a
			href={`/homepage-preview/${variant.id}`}
			className="group block border border-[var(--color-kraft-400)]/30 hover:border-[var(--color-ink)] transition-colors overflow-hidden"
			style={{ background: variant.palette.bg, color: variant.palette.fg }}
		>
			<div className="relative aspect-[16/9] overflow-hidden">
				{/* biome-ignore lint/performance/noImgElement: preview placeholder */}
				<img
					src={variant.cover}
					alt=""
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
					aria-hidden="true"
				/>
				<div
					className="absolute inset-0 opacity-30"
					style={{ background: variant.palette.bg }}
				/>
				<div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-black/70 text-white">
					{String(index + 1).padStart(2, "0")} — {variant.label}
				</div>
				<div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 bg-white text-black group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
					Mở xem thử →
				</div>
			</div>

			<div className="p-6 sm:p-8 border-t border-current/10">
				<h3
					className="text-2xl sm:text-3xl leading-tight mb-4"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{variant.title}
				</h3>
				<dl className="space-y-3 text-sm">
					<div className="grid grid-cols-[5rem_1fr] gap-4">
						<dt className="font-mono text-[10px] uppercase tracking-widest opacity-60 pt-0.5">
							Phong cách
						</dt>
						<dd className="leading-relaxed">{variant.mood}</dd>
					</div>
					<div className="grid grid-cols-[5rem_1fr] gap-4">
						<dt className="font-mono text-[10px] uppercase tracking-widest opacity-60 pt-0.5">
							Menu
						</dt>
						<dd className="leading-relaxed">{variant.nav}</dd>
					</div>
					<div className="grid grid-cols-[5rem_1fr] gap-4">
						<dt className="font-mono text-[10px] uppercase tracking-widest opacity-60 pt-0.5">
							Rủi ro
						</dt>
						<dd className="leading-relaxed opacity-80">{variant.risk}</dd>
					</div>
				</dl>
			</div>
		</a>
	);
}
