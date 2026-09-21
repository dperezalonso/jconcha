import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { pagesMeta } from "@/i18n/pages-meta";
import { PrivacidadView } from "@/views/legal-view";

const copy = pagesMeta.es.privacy;

export const metadata: Metadata = {
  ...pageMetadata({
    locale: "es",
    path: "/privacidad",
    title: copy.title,
    description: copy.description,
  }),
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return <PrivacidadView locale="es" />;
}
