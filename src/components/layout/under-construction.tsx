// Placeholder rendered by every [locale]/**/page.tsx stub until real content
// lands. Tracked as sprint-03 work — deep content per page.

export function UnderConstruction({
	kicker = "Đang cập nhật",
	title = "Trang này đang được hoàn thiện.",
	body = "Trong thời gian chờ, mời bạn xem các hướng thiết kế tại trang xem thử.",
}: {
	kicker?: string;
	title?: string;
	body?: string;
}) {
	return (
		<main className="min-h-[80vh] flex items-center justify-center p-8 bg-[var(--color-paper)] text-[var(--color-ink)]">
			<div className="text-center max-w-md">
				<p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mb-4">
					{kicker}
				</p>
				<h1
					className="text-4xl leading-tight mb-6"
					style={{ fontFamily: "var(--font-display)" }}
				>
					{title}
				</h1>
				<p className="text-base text-[var(--color-ink-soft)] mb-8 leading-relaxed">
					{body}
				</p>
				<a
					href="/homepage-preview"
					className="inline-block border-b border-current pb-1 font-mono text-xs uppercase tracking-widest hover:text-[var(--color-accent)]"
				>
					Xem thử các hướng thiết kế →
				</a>
			</div>
		</main>
	);
}
