import { setRequestLocale } from "next-intl/server";
import { UnderConstruction } from "@/components/layout/under-construction";

export default async function ContactPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <UnderConstruction title="Trang liên hệ đang được hoàn thiện." />;
}
