import type { Metadata } from "next";
import { hreflangCode, localeOg, locales, type Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/path";
import { site } from "@/lib/site";

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {
    "x-default": absoluteUrl(localizedPath("es", path)),
  };
  for (const locale of locales) {
    languages[hreflangCode[locale]] = absoluteUrl(localizedPath(locale, path));
  }
  return languages;
}

export function pageMetadata(options: {
  locale: Locale;
  path: string;
  title?: string;
  description: string;
  ogTitle?: string;
}): Metadata {
  const canonical = absoluteUrl(localizedPath(options.locale, options.path));
  const metadata: Metadata = {
    description: options.description,
    alternates: {
      canonical,
      languages: languageAlternates(options.path),
    },
    openGraph: {
      locale: localeOg[options.locale],
      url: canonical,
      siteName: site.name,
      description: options.description,
    },
  };
  if (options.title) {
    metadata.title = options.title;
    metadata.openGraph = {
      ...metadata.openGraph,
      title: options.ogTitle ?? options.title,
    };
  }
  return metadata;
}
