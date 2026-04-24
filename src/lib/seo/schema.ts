export type PostalAddressInput = {
	streetAddress?: string;
	addressLocality: string;
	addressRegion?: string;
	postalCode?: string;
	addressCountry: string;
};

export type GeoInput = {
	latitude: number;
	longitude: number;
};

export type OpeningHoursInput = {
	days: string[];
	opens: string;
	closes: string;
};

export type ContactPointInput = {
	telephone: string;
	contactType: string;
	availableLanguage?: string[];
	areaServed?: string;
	email?: string;
};

export type OrganizationInput = {
	name: string;
	legalName?: string;
	url: string;
	logo?: string;
	description?: string;
	sameAs?: string[];
	foundingDate?: string;
	address?: PostalAddressInput;
	contactPoint?: ContactPointInput[];
	taxID?: string;
};

export type LocalBusinessInput = OrganizationInput & {
	address: PostalAddressInput;
	telephone?: string;
	priceRange?: string;
	openingHours?: OpeningHoursInput[];
	geo?: GeoInput;
};

export type BreadcrumbItem = {
	name: string;
	url: string;
};

export type ProductInput = {
	name: string;
	description: string;
	image: string[];
	brand: string;
	sku?: string;
	url?: string;
};

type Json = Record<string, unknown>;

function postalAddress(input: PostalAddressInput): Json {
	return stripUndefined({
		"@type": "PostalAddress",
		streetAddress: input.streetAddress,
		addressLocality: input.addressLocality,
		addressRegion: input.addressRegion,
		postalCode: input.postalCode,
		addressCountry: input.addressCountry,
	});
}

function stripUndefined(obj: Json): Json {
	const out: Json = {};
	for (const [k, v] of Object.entries(obj)) {
		if (v !== undefined) out[k] = v;
	}
	return out;
}

export function contactPointSchema(input: ContactPointInput): Json {
	return stripUndefined({
		"@type": "ContactPoint",
		telephone: input.telephone,
		contactType: input.contactType,
		availableLanguage: input.availableLanguage,
		areaServed: input.areaServed,
		email: input.email,
	});
}

export function organizationSchema(input: OrganizationInput): Json {
	return stripUndefined({
		"@context": "https://schema.org",
		"@type": "Organization",
		name: input.name,
		legalName: input.legalName,
		url: input.url,
		logo: input.logo,
		description: input.description,
		sameAs: input.sameAs,
		foundingDate: input.foundingDate,
		taxID: input.taxID,
		address: input.address ? postalAddress(input.address) : undefined,
		contactPoint: input.contactPoint?.map(contactPointSchema),
	});
}

export function localBusinessSchema(input: LocalBusinessInput): Json {
	const base = organizationSchema(input);
	return stripUndefined({
		...base,
		"@type": "LocalBusiness",
		address: postalAddress(input.address),
		telephone: input.telephone,
		priceRange: input.priceRange,
		geo: input.geo
			? {
					"@type": "GeoCoordinates",
					latitude: input.geo.latitude,
					longitude: input.geo.longitude,
				}
			: undefined,
		openingHoursSpecification: input.openingHours?.map((h) => ({
			"@type": "OpeningHoursSpecification",
			dayOfWeek: h.days,
			opens: h.opens,
			closes: h.closes,
		})),
	});
}

export function breadcrumbListSchema(items: BreadcrumbItem[]): Json {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

export function productSchema(input: ProductInput): Json {
	return stripUndefined({
		"@context": "https://schema.org",
		"@type": "Product",
		name: input.name,
		description: input.description,
		image: input.image,
		brand: { "@type": "Brand", name: input.brand },
		sku: input.sku,
		url: input.url,
	});
}
