export interface LandingContent {
	hero: {
		tagline: string;
		cta: string;
	};
	manifesto: string;
	stats: Array<{ value: string; label: string }>;
}

export interface ProductContent {
	slug: string;
	name: string;
	description: string;
	features: string[];
}

export interface ProcessStep {
	number: string;
	title: string;
	description: string;
}
