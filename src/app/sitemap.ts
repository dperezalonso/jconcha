import type { MetadataRoute } from "next";
import { hreflangCode, locales } from "@/i18n/config";
import { languageAlternates } from "@/i18n/metadata";
import { getAllExpertiseSlugs } from "@/lib/expertise-pages";
import { site } from "@/lib/site";

const staticPaths = [
  "/",
  "/recorrido",
  "/expertise",
  "/contacto",
  "/privacidad",
  "/cookies",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllExpertiseSlugs();
  const now = new Date();

  const pages = locales.flatMap((locale) => {
    const staticEntries = staticPaths.map((path) => ({
      url: languageAlternates(path)[hreflangCode[locale]],
      lastModified: now,
      changeFrequency:
        path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority:
        path === "/"
          ? locale === "es"
            ? 1
            : 0.9
          : path === "/privacidad" || path === "/cookies"
            ? 0.3
            : 0.8,
      alternates: { languages: languageAlternates(path) },
    }));

    const expertiseEntries = slugs.map((slug) => {
      const path = `/expertise/${slug}`;
      return {
        url: languageAlternates(path)[hreflangCode[locale]],
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.85,
        alternates: { languages: languageAlternates(path) },
      };
    });

    return [...staticEntries, ...expertiseEntries];
  });

  return [
    ...pages,
    {
      url: `${site.url}/llms.txt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
