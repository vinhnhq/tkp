import { setRequestLocale } from "next-intl/server";
import { UnderConstruction } from "@/components/layout/UnderConstruction";

export default async function ProductsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <UnderConstruction title="Trang sản phẩm đang được hoàn thiện." />;
}
