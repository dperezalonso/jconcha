import type { Locale } from "@/i18n/config";
import { siteCopy } from "@/i18n/site-copy";
import { site } from "@/lib/site";

export function JsonLd({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const personId = `${site.url}/#person`;
  const websiteId = `${site.url}/#website`;
  const profileId = `${site.url}/#profile`;
  const inLanguage =
    locale === "en" ? "en" : locale === "ca" ? "ca" : "es";

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.fullName,
    alternateName: ["Javier Concha", "Efecto Esponja"],
    url: site.url,
    image: `${site.url}${site.ogImage}`,
    jobTitle: copy.jobTitle,
    description: copy.description,
    worksFor: {
      "@type": "Organization",
      name: "SANTACONCHA Digital Performance",
      url: site.social.agency,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Granollers",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
    homeLocation: site.locations.map((name) => ({
      "@type": "City",
      name,
    })),
    knowsLanguage: ["es", "en", "ca"],
    sameAs: [
      site.social.linkedin,
      site.social.twitter,
      site.social.instagram,
      site.social.agency,
      site.social.tradingPoint,
      site.social.podcast,
    ],
    knowsAbout: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Marketing digital",
      "Performance marketing",
      "Web Performance Optimization",
      "Conversion Rate Optimization",
      "Analítica web",
      "GEO",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: site.url,
    inLanguage,
    description: copy.description,
    publisher: { "@id": personId },
    about: { "@id": personId },
  };

  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": profileId,
    url: site.url,
    name: site.fullName,
    inLanguage,
    mainEntity: { "@id": personId },
    isPartOf: { "@id": websiteId },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profile) }}
      />
    </>
  );
}
