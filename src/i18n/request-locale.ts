import { headers } from "next/headers";
import { isLocale, type Locale } from "@/i18n/config";

export async function getRequestLocale(): Promise<Locale> {
  const header = (await headers()).get("x-locale");
  return header && isLocale(header) ? header : "es";
}
