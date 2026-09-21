import type { Metadata } from "next";
import { ExpertiseDetailView, expertiseMetadata } from "@/app/expertise/[slug]/page";
import { getExpertise } from "@/i18n/get-expertise";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getExpertise("en").getAllExpertiseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return expertiseMetadata("en", await params);
}

export default async function EnExpertiseDetailPage({ params }: Props) {
  return <ExpertiseDetailView locale="en" slug={(await params).slug} />;
}
