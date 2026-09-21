import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { pagesMeta } from "@/i18n/pages-meta";
import { CookiesView } from "@/views/legal-view";

const copy = pagesMeta.en.cookies;

export const metadata: Metadata = {
  ...pageMetadata({
    locale: "en",
    path: "/cookies",
    title: copy.title,
    description: copy.description,
  }),
  robots: { index: true, follow: true },
};

export default function EnCookiesPage() {
  return <CookiesView locale="en" />;
}
