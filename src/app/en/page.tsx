import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { siteCopy } from "@/i18n/site-copy";
import { HomeView } from "@/views/home-view";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/",
  description: siteCopy.en.description,
});

export default function EnHomePage() {
  return <HomeView locale="en" />;
}
