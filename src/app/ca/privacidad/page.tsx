import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { pagesMeta } from "@/i18n/pages-meta";
import { PrivacidadView } from "@/views/legal-view";

const copy = pagesMeta.ca.privacy;

export const metadata: Metadata = {
  ...pageMetadata({
    locale: "ca",
    path: "/privacidad",
    title: copy.title,
    description: copy.description,
  }),
  robots: { index: true, follow: true },
};

export default function CaPrivacyPage() {
  return <PrivacidadView locale="ca" />;
}
