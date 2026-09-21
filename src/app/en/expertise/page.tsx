import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { pagesMeta } from "@/i18n/pages-meta";
import { ExpertiseView } from "@/views/expertise-view";

const copy = pagesMeta.en.expertise;

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/expertise",
  title: copy.title,
  description: copy.description,
});

export default function EnExpertisePage() {
  return <ExpertiseView locale="en" />;
}
