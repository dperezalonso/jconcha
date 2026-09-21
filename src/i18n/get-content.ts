import type { Locale } from "@/i18n/config";
import * as ca from "@/i18n/content-ca";
import * as en from "@/i18n/content-en";
import * as es from "@/lib/content";

export function getContent(locale: Locale) {
  if (locale === "en") return en;
  if (locale === "ca") return ca;
  return es;
}
