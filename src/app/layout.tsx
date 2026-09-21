import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
  Russo_One,
} from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ScrollReveal } from "@/components/ScrollReveal";
import { localeHtml } from "@/i18n/config";
import { stripLocale } from "@/i18n/path";
import { getRequestLocale } from "@/i18n/request-locale";
import { siteCopy } from "@/i18n/site-copy";
import { getUi } from "@/i18n/ui";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const logo = Russo_One({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = siteCopy[locale];
  return {
    metadataBase: new URL(site.url),
    title: {
      default: copy.titleDefault,
      template: `%s · ${site.name}`,
    },
    description: copy.description,
    authors: [{ name: site.fullName, url: site.url }],
    creator: site.fullName,
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : locale === "ca" ? "ca_ES" : "es_ES",
      siteName: site.name,
      title: copy.titleDefault,
      description: copy.description,
      images: [
        {
          url: site.ogImage,
          width: 2492,
          height: 1662,
          alt: copy.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.titleDefault,
      description: copy.description,
      creator: "@efectoesponja",
      site: "@efectoesponja",
      images: [site.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
  colorScheme: "light",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getRequestLocale();
  const t = getUi(locale);
  const pathname = (await headers()).get("x-pathname") || "/";
  const path = stripLocale(pathname);

  return (
    <html
      lang={localeHtml[locale]}
      className={`${display.variable} ${logo.variable} ${sans.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <noscript>
          <style>{`.reveal,.intro{opacity:1!important;transform:none!important;filter:none!important;animation:none!important}`}</style>
        </noscript>
        <JsonLd locale={locale} />
        <ScrollReveal />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ember focus:px-4 focus:py-2 focus:text-white"
        >
          {t.skipToContent}
        </a>
        <Header locale={locale} path={path} />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
