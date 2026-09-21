import { site } from "@/lib/site";
import type { Locale } from "@/i18n/config";

export const siteCopy: Record<
  Locale,
  { titleDefault: string; description: string; ogAlt: string; jobTitle: string }
> = {
  es: {
    titleDefault: site.titleDefault,
    description: site.description,
    ogAlt: "Javier Concha López, director de marketing digital",
    jobTitle: "Cofundador y Director de Marketing",
  },
  en: {
    titleDefault:
      "Javier Concha | Digital Marketing Director, SEO and Performance in Barcelona",
    description:
      "Javier Concha López, cofounder and Head of Marketing at SANTACONCHA. Specialist in SEO, Google Ads, Meta Ads and digital strategy from Barcelona, with presence in Miami.",
    ogAlt: "Javier Concha López, digital marketing director",
    jobTitle: "Cofounder and Head of Marketing",
  },
  ca: {
    titleDefault:
      "Javier Concha | Director de Màrqueting Digital, SEO i Performance a Barcelona",
    description:
      "Javier Concha López, cofundador i Director de Màrqueting de SANTACONCHA. Especialista en SEO, Google Ads, Meta Ads i estratègia digital des de Barcelona, amb presència a Miami.",
    ogAlt: "Javier Concha López, director de màrqueting digital",
    jobTitle: "Cofundador i Director de Màrqueting",
  },
};
