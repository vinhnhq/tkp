"use client";

import { type HTMLMotionProps, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Element =
	| "div"
	| "section"
	| "article"
	| "h1"
	| "h2"
	| "h3"
	| "p"
	| "ol"
	| "ul"
	| "li";

type Props = {
	children: ReactNode;
	as?: Element;
	delay?: number;
	className?: string;
	id?: string;
} & Omit<
	HTMLMotionProps<"div">,
	"initial" | "whileInView" | "viewport" | "transition"
>;

export function RevealOnScroll({
	children,
	as = "div",
	delay = 0,
	...rest
}: Props) {
	const reduce = useReducedMotion();
	const MotionTag = motion[as] as typeof motion.div;

	if (reduce) {
		const Tag = as;
		// biome-ignore lint/suspicious/noExplicitAny: fallback path for reduced motion
		const El = Tag as any;
		return <El {...rest}>{children}</El>;
	}

	return (
		<MotionTag
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1], delay }}
			{...rest}
		>
			{children}
		</MotionTag>
	);
}
