import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { pagesMeta } from "@/i18n/pages-meta";
import { ContactoView } from "@/views/contacto-view";

const copy = pagesMeta.ca.contact;

export const metadata: Metadata = pageMetadata({
  locale: "ca",
  path: "/contacto",
  title: copy.title,
  description: copy.description,
});

export default function CaContactPage() {
  return <ContactoView locale="ca" />;
}
