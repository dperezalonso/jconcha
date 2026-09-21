import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { pagesMeta } from "@/i18n/pages-meta";
import { ExpertiseView } from "@/views/expertise-view";

const copy = pagesMeta.ca.expertise;

export const metadata: Metadata = pageMetadata({
  locale: "ca",
  path: "/expertise",
  title: copy.title,
  description: copy.description,
});

export default function CaExpertisePage() {
  return <ExpertiseView locale="ca" />;
}
