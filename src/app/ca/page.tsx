import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { siteCopy } from "@/i18n/site-copy";
import { HomeView } from "@/views/home-view";

export const metadata: Metadata = pageMetadata({
  locale: "ca",
  path: "/",
  description: siteCopy.ca.description,
});

export default function CaHomePage() {
  return <HomeView locale="ca" />;
}
