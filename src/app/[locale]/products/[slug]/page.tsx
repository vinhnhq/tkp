import { setRequestLocale } from "next-intl/server";
import { UnderConstruction } from "@/components/layout/UnderConstruction";

export default async function ProductDetailPage({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return (
		<UnderConstruction title="Trang chi tiết sản phẩm đang được hoàn thiện." />
	);
}
