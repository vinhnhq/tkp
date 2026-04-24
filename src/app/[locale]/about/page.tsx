import { setRequestLocale } from "next-intl/server";
import { UnderConstruction } from "@/components/layout/UnderConstruction";

export default async function AboutPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <UnderConstruction title="Trang giới thiệu đang được hoàn thiện." />;
}
