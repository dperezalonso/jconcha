import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { pagesMeta } from "@/i18n/pages-meta";
import { RecorridoView } from "@/views/recorrido-view";

const copy = pagesMeta.es.path;

export const metadata: Metadata = pageMetadata({
  locale: "es",
  path: "/recorrido",
  title: copy.title,
  description: copy.description,
  ogTitle: copy.ogTitle,
});

export default function RecorridoPage() {
  return <RecorridoView locale="es" />;
}
