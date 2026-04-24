// Shared content for all homepage-preview variants.
// Data is identical across V1–V4 — only layout/styling differs per variant.

import { unsplash } from "./unsplash";

export const nav = [
	{ label: "01 — Sản phẩm", short: "Sản phẩm", href: "#products" },
	{ label: "02 — Ngành hàng", short: "Ngành hàng", href: "#industries" },
	{ label: "03 — Quy trình", short: "Quy trình", href: "#process" },
	{ label: "04 — Vật liệu", short: "Vật liệu", href: "#materials" },
	{ label: "05 — Liên hệ", short: "Liên hệ", href: "#contact" },
] as const;

export const stats: Array<{ to: number; suffix: string; label: string }> = [
	{ to: 1997, suffix: "", label: "Thành lập" },
	{ to: 15, suffix: "+", label: "Sản phẩm" },
	{ to: 100, suffix: "+", label: "Nhân sự" },
	{ to: 100, suffix: "+", label: "Khách hàng" },
];

export const products = [
	{
		layer: "3 lớp",
		name: "Carton 3 lớp",
		purpose:
			"Bao bì nhẹ — đóng gói trong nước, hàng tiêu dùng, vận chuyển ngắn.",
		image: unsplash.product3,
	},
	{
		layer: "5 lớp",
		name: "Carton 5 lớp",
		purpose:
			"Tiêu chuẩn xuất khẩu — chịu lực tốt, bảo vệ sản phẩm khi chồng cao.",
		image: unsplash.product5,
	},
	{
		layer: "7 lớp",
		name: "Carton 7 lớp",
		purpose: "Hạng nặng — hàng công nghiệp, linh kiện, vận chuyển quốc tế.",
		image: unsplash.product7,
	},
] as const;

export const industries = [
	{ key: "nong-san", label: "Nông sản", image: unsplash.industryAgriculture },
	{ key: "dien-tu", label: "Điện tử", image: unsplash.industryElectronics },
	{ key: "thoi-trang", label: "Thời trang", image: unsplash.industryFashion },
	{ key: "thuc-pham", label: "Thực phẩm", image: unsplash.industryFood },
	{ key: "my-pham", label: "Mỹ phẩm", image: unsplash.industryCosmetics },
] as const;

export const processSteps = [
	{
		no: "01",
		title: "Tiếp nhận",
		body: "Tiếp nhận thông tin đơn hàng, kích thước, số lượng, tiêu chuẩn in.",
		image: unsplash.process1,
	},
	{
		no: "02",
		title: "Khảo sát",
		body: "Khảo sát thực địa, tư vấn vật liệu và quy cách phù hợp từng mặt hàng.",
		image: unsplash.process2,
	},
	{
		no: "03",
		title: "Sản xuất",
		body: "Cán sóng, in flexo / phun / lụa, bế và dán — kiểm soát chất lượng từng công đoạn.",
		image: unsplash.process3,
	},
	{
		no: "04",
		title: "Giao hàng",
		body: "Đóng gói, giao tận kho đúng hẹn — linh hoạt với đơn gấp.",
		image: unsplash.process4,
	},
] as const;

export const heroCopy = {
	kicker: "Từ 1997 · Sản xuất tại TP.HCM",
	titleLine1: "Từ giấy đến thùng,",
	titleLine2Italic: "đúng quy cách.",
	body: "Tân Khánh Phong — nhà sản xuất thùng carton 3, 5, 7 lớp cho ngành nông sản, điện tử, thực phẩm, mỹ phẩm và thời trang.",
	primaryCta: {
		label: "Gọi báo giá",
		phone: "0909 66 2808",
		href: "tel:0909662808",
	},
	secondaryCta: { label: "Xem sản phẩm", href: "#products" },
} as const;

export const manifesto = {
	kicker: "— Manifesto",
	body: "Chúng tôi tin rằng một chiếc thùng carton tốt không cần phô trương. Nó cần chắc chắn, đúng hẹn, và đúng chi phí — đã 27 năm chúng tôi làm đúng một việc đó.",
} as const;

export const materials = {
	paper: {
		title:
			"Giấy nhập từ Thái Lan, Nhật, Đài Loan — kết hợp nguyên liệu trong nước.",
		body: "Nguồn giấy được chọn theo độ bền, độ ẩm, và tải trọng — phù hợp từng ngành hàng. Kiểm soát định lượng và cấu trúc sóng trước khi vào dây chuyền.",
	},
	printing: {
		title: "Ba công nghệ in — chọn theo yêu cầu thẩm mỹ và số lượng.",
		items: [
			{ label: "Flexo", note: "In số lượng lớn" },
			{ label: "In phun", note: "Linh hoạt, nhanh" },
			{ label: "In lụa", note: "Chi tiết, cao cấp" },
		],
	},
} as const;

// Customer logo wall. logos-01 is TKP's own logo — excluded from this list.
// Company names still need confirmation with the client before launch.
export const customers = {
	kicker: "06 — Khách hàng",
	heading: "Tự hào phục vụ.",
	subheading: "Những doanh nghiệp đã và đang đồng hành cùng TKP qua nhiều năm.",
	logos: [
		{ src: "/assets/logos/logos-02.png", name: "Khách hàng 02" },
		{ src: "/assets/logos/logos-03.png", name: "Khách hàng 03" },
		{ src: "/assets/logos/logos-04.png", name: "Khách hàng 04" },
		{ src: "/assets/logos/logos-05.png", name: "Khách hàng 05" },
		{ src: "/assets/logos/logos-06.png", name: "Khách hàng 06" },
		{ src: "/assets/logos/logos-07.png", name: "Khách hàng 07" },
		{ src: "/assets/logos/logos-08.png", name: "Khách hàng 08" },
		{ src: "/assets/logos/logos-09.png", name: "Khách hàng 09" },
	],
} as const;

export const contact = {
	headline: "Gọi một cuộc — chúng tôi báo giá trong 24h.",
	hotlines: ["0909 66 2808", "028 3766 1614"],
	email: "tankhanhphong@tkpcarton.com",
	emailNote: "※ Xác nhận lại email với khách hàng trước khi bật form.",
	address: "TP.HCM, Việt Nam",
	addressNote: "(địa chỉ chính thức sẽ cập nhật)",
} as const;
