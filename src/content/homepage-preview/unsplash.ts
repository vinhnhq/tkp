// Unsplash placeholder catalog for the /homepage-preview variants.
// All photo IDs below have been verified to resolve (HTTP 200) as of the
// session they were added. Direct photo-ID URLs are stable — no API key,
// no next.config remotePatterns needed (variants use <img>, not next/image).
// Swap to public/assets/ once the client signs off on photography.
//
// Source: Unsplash License (free commercial use, no attribution required).

const base = "https://images.unsplash.com/photo-";
const wide = "?auto=format&fit=crop&w=1600&q=70";
const square = "?auto=format&fit=crop&w=900&h=900&q=70";
const portrait = "?auto=format&fit=crop&w=900&h=1200&q=70";
const card = "?auto=format&fit=crop&w=1000&h=1250&q=70";
const heroBig = "?auto=format&fit=crop&w=2000&q=75";

const img = (photoId: string, params: string = wide) =>
	`${base}${photoId}${params}`;

export const unsplash = {
	// Hero — factory / production at scale
	hero: img("1734357310900-4b513a3a5ae0", heroBig), // factory floor w/ boxes & machinery
	heroAlt: img("1735494035457-b6e8f68b5248", heroBig), // large industrial machine
	heroDark: img("1684695749267-233af13276d0", heroBig), // warehouse full of boxes
	heroTexture: img("1700165644892-3dd6b67b25bc", heroBig), // open brown boxes — texture-y

	// Products — carton closeups
	product3: img("1624137527136-66e631bdaa0e", card), // single white+brown box — light duty
	product5: img("1587293852726-70cdb56c2866", card), // stacked brown boxes on rack — export std
	product7: img("1610963349673-3d94501d569a", card), // many brown boxes — heavy duty
	productAlt1: img("1609143739217-01b60dad1c67", card), // brown boxes on white floor
	productAlt2: img("1626253934161-08cfea22e968", card), // brown & white box clean

	// Industries — visual proxies for each sector
	industryAgriculture: img("1500382017468-9049fed747ef", square), // produce crates
	industryElectronics: img("1587825140708-dfaf72ae4b04", square), // electronics
	industryFashion: img("1556905055-8f358a7a47b2", square), // folded clothing
	industryFood: img("1542838132-92c53300491e", square), // food packaging
	industryCosmetics: img("1522337360788-8b13dee7a37e", square), // cosmetics

	// Process — 4 steps
	process1: img("1542744173-8e7e53415bb0", portrait), // intake / desk planning
	process2: img("1581094794329-c8112a89af12", portrait), // site survey
	process3: img("1741707041743-534a6d3307cb", portrait), // workers packaging
	process4: img("1645736315000-6f788915923b", portrait), // forklift / delivery

	// Factory / manifesto background
	factoryFloor: img("1672552226380-486fe900b322", wide), // warehouse + pallets
	factoryDetail: img("1644079446600-219068676743", wide), // warehouse shelves
	factoryWorker: img("1681726267019-ce6433fd7b49", wide), // worker w/ boxes
	factoryTeam: img("1639117722494-a309098ee3bf", wide), // team on machinery
	factoryPortrait: img("1742281694796-36a9ae24b59a", wide), // worker portrait

	// Delivery / logistics
	delivery: img("1706186101257-818a4bbfd8bb", wide), // green truck w/ boxes

	// Generic fallback
	fallback: img("1734357310900-4b513a3a5ae0", wide),
} as const;

export type UnsplashKey = keyof typeof unsplash;
