"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
	to: number;
	from?: number;
	suffix?: string;
	duration?: number;
};

export function NumberCounter({
	to,
	from = 0,
	suffix = "",
	duration = 0.6,
}: Props) {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.5 });
	const reduce = useReducedMotion();
	const [value, setValue] = useState(from);

	useEffect(() => {
		if (reduce) {
			setValue(to);
			return;
		}
		if (!inView) return;
		const controls = animate(from, to, {
			duration,
			ease: [0.25, 1, 0.5, 1],
			onUpdate: (v) => setValue(Math.round(v)),
		});
		return () => controls.stop();
	}, [inView, from, to, duration, reduce]);

	return (
		<span ref={ref}>
			{value}
			{suffix}
		</span>
	);
}
