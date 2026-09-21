import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { siteCopy } from "@/i18n/site-copy";
import { HomeView } from "@/views/home-view";

export const metadata: Metadata = pageMetadata({
  locale: "es",
  path: "/",
  description: siteCopy.es.description,
});

export default function HomePage() {
  return <HomeView locale="es" />;
}
