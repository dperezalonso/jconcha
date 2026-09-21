import type { Locale } from "@/i18n/config";
import * as ca from "@/i18n/expertise-ca";
import * as en from "@/i18n/expertise-en";
import * as es from "@/lib/expertise-pages";

export function getExpertise(locale: Locale) {
  if (locale === "en") return en;
  if (locale === "ca") return ca;
  return es;
}
