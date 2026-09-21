import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { pagesMeta } from "@/i18n/pages-meta";
import { RecorridoView } from "@/views/recorrido-view";

const copy = pagesMeta.en.path;

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/recorrido",
  title: copy.title,
  description: copy.description,
});

export default function EnRecorridoPage() {
  return <RecorridoView locale="en" />;
}
