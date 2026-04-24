// Floating variant switcher for /homepage-preview/v1..v10.
// Temporary UI — removed once a variant is selected.

type Variant =
	| "V1"
	| "V2"
	| "V3"
	| "V4"
	| "V5"
	| "V6"
	| "V7"
	| "V8"
	| "V9"
	| "V10";

const variants: Variant[] = [
	"V1",
	"V2",
	"V3",
	"V4",
	"V5",
	"V6",
	"V7",
	"V8",
	"V9",
	"V10",
];

export function PreviewSwitcher({ current }: { current: Variant }) {
	return (
		<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full bg-black/85 backdrop-blur-md px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.25)] max-w-[calc(100vw-1rem)] overflow-x-auto">
			<span className="font-mono text-[10px] uppercase tracking-widest text-white/50 px-3 hidden sm:inline whitespace-nowrap">
				Xem thử
			</span>
			{variants.map((v) => {
				const active = v === current;
				return (
					<a
						key={v}
						href={`/homepage-preview/${v.toLowerCase()}`}
						className={`font-mono text-[11px] uppercase tracking-wider px-2.5 py-1.5 rounded-full transition-colors whitespace-nowrap ${
							active
								? "bg-white text-black"
								: "text-white/70 hover:text-white hover:bg-white/10"
						}`}
					>
						{v}
					</a>
				);
			})}
			<a
				href="/homepage-preview"
				className="font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-white px-2 whitespace-nowrap"
			>
				Tổng quan
			</a>
		</div>
	);
}
