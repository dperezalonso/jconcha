import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { pagesMeta } from "@/i18n/pages-meta";
import { PrivacidadView } from "@/views/legal-view";

const copy = pagesMeta.en.privacy;

export const metadata: Metadata = {
  ...pageMetadata({
    locale: "en",
    path: "/privacidad",
    title: copy.title,
    description: copy.description,
  }),
  robots: { index: true, follow: true },
};

export default function EnPrivacyPage() {
  return <PrivacidadView locale="en" />;
}
