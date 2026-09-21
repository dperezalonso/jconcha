export const locales = ["es", "en", "ca"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeHtml: Record<Locale, string> = {
  es: "es",
  en: "en",
  ca: "ca",
};

export const localeOg: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
  ca: "ca_ES",
};

/** Codes used in hreflang. Neutral language tags, not a single country. */
export const hreflangCode: Record<Locale, string> = {
  es: "es",
  en: "en",
  ca: "ca",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
