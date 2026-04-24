import { setRequestLocale } from "next-intl/server";
import { UnderConstruction } from "@/components/layout/UnderConstruction";

export default async function ProcessPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <UnderConstruction title="Trang quy trình đang được hoàn thiện." />;
}
