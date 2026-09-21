import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { pagesMeta } from "@/i18n/pages-meta";
import { RecorridoView } from "@/views/recorrido-view";

const copy = pagesMeta.ca.path;

export const metadata: Metadata = pageMetadata({
  locale: "ca",
  path: "/recorrido",
  title: copy.title,
  description: copy.description,
});

export default function CaRecorridoPage() {
  return <RecorridoView locale="ca" />;
}
