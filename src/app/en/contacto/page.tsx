import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { pagesMeta } from "@/i18n/pages-meta";
import { ContactoView } from "@/views/contacto-view";

const copy = pagesMeta.en.contact;

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/contacto",
  title: copy.title,
  description: copy.description,
});

export default function EnContactPage() {
  return <ContactoView locale="en" />;
}
