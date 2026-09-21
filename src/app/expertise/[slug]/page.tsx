import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { ExpertiseHero } from "@/components/ExpertiseHero";
import type { Locale } from "@/i18n/config";
import { getExpertise } from "@/i18n/get-expertise";
import { pageMetadata } from "@/i18n/metadata";
import { hrefFor, localizedPath } from "@/i18n/path";
import { siteCopy } from "@/i18n/site-copy";
import { getUi } from "@/i18n/ui";
import type { ExpertiseSlug } from "@/lib/expertise-pages";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getExpertise("es").getAllExpertiseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return expertiseMetadata("es", await params);
}

export async function expertiseMetadata(
  locale: Locale,
  params: { slug: string },
): Promise<Metadata> {
  const page = getExpertise(locale).getExpertisePage(params.slug);
  if (!page) return {};
  return pageMetadata({
    locale,
    path: `/expertise/${page.slug}`,
    title: page.title,
    description: page.description,
  });
}

export default async function ExpertiseDetailPage({ params }: Props) {
  return <ExpertiseDetailView locale="es" slug={(await params).slug} />;
}

export function ExpertiseDetailView({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const bundle = getExpertise(locale);
  const t = getUi(locale);
  const page = bundle.getExpertisePage(slug);
  if (!page) notFound();

  const expertisePages = bundle.expertisePages;
  const index = expertisePages.findIndex((p) => p.slug === page.slug);
  const related = page.related
    .map((s) => bundle.getExpertisePage(s))
    .filter(Boolean);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: page.h1,
    description: page.description,
      url: `${site.url}${localizedPath(locale, `/expertise/${page.slug}`)}`,
    provider: {
      "@type": "Person",
      name: site.fullName,
      url: site.url,
      jobTitle: siteCopy[locale].jobTitle,
      worksFor: {
        "@type": "Organization",
        name: "SANTACONCHA",
        url: site.social.agency,
      },
    },
    areaServed: site.locations.map((name) => ({
      "@type": "City",
      name,
    })),
    availableLanguage: ["Spanish", "English", "Catalan"],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.expertise.breadcrumbHome,
        item: `${site.url}${localizedPath(locale, "/")}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.expertise.label,
        item: `${site.url}${localizedPath(locale, "/expertise")}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.h1,
        item: `${site.url}${localizedPath(locale, `/expertise/${page.slug}`)}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <ExpertiseHero page={page} index={index} locale={locale} />

      <section className="relative border-b border-hairline bg-panel">
        <div className="shell py-16 md:py-24">
          <p className="mono reveal text-ember">{t.expertise.approach}</p>
          <div className="mt-8 space-y-6 md:max-w-3xl">
            {page.pitch.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 40)}
                className="reveal text-[1.08rem] leading-relaxed text-fg-soft"
                style={
                  {
                    "--reveal-delay": `${i * 80}ms`,
                  } as React.CSSProperties
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="on-ink relative overflow-hidden border-y border-hairline">
        <div className="shell relative z-10 py-16 md:py-24">
          <p className="mono reveal text-ember">{t.expertise.results}</p>
          <ul className="mt-10 grid gap-px border border-hairline bg-[rgba(255,255,255,0.08)] sm:grid-cols-3">
            {page.results.map((item, i) => (
              <li
                key={item.label}
                className="reveal flex min-h-64 flex-col bg-[rgba(20,24,33,0.88)] px-6 py-10"
                style={
                  { "--reveal-delay": `${i * 70}ms` } as React.CSSProperties
                }
              >
                <p className="display text-[clamp(1.7rem,3.4vw,2.4rem)]">
                  {item.value}
                </p>
                <p className="mono mt-4 text-fg-muted">{item.label}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono link-underline mt-auto pt-7 text-ember"
                >
                  {t.expertise.seeCase}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.social.agency}
            target="_blank"
            rel="noopener noreferrer"
            className="mono link-underline reveal mt-10 inline-block text-fg-soft hover:text-fg"
          >
            {t.expertise.allCases}
          </a>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone">
        <div aria-hidden className="mesh absolute inset-0 opacity-20" />
        <div className="shell relative z-10 py-16 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <p className="mono reveal text-ember">{t.expertise.cover}</p>
              <h2
                className="display reveal mt-5 text-[clamp(1.8rem,4vw,3rem)]"
                style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
              >
                {t.expertise.servicesTitle}
              </h2>
              <ul className="mt-8 space-y-0 border-t border-hairline">
                {page.services.map((service, i) => (
                  <li
                    key={service}
                    className="reveal flex gap-4 border-b border-hairline py-4 text-sm leading-relaxed text-fg-soft"
                    style={
                      {
                        "--reveal-delay": `${i * 50}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <span aria-hidden className="text-ember">
                      —
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mono reveal text-ember">{t.expertise.method}</p>
              <h2
                className="display reveal mt-5 text-[clamp(1.8rem,4vw,3rem)]"
                style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
              >
                {t.expertise.methodTitle}
              </h2>
              <ol className="mt-8 space-y-5">
                {page.method.map((step, i) => (
                  <li
                    key={step.title}
                    className="reveal border border-hairline bg-panel p-6 transition-colors duration-500 hover:border-ember/40 md:p-7"
                    style={
                      {
                        "--reveal-delay": `${i * 80}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <p className="mono text-ember">0{i + 1}</p>
                    <h3 className="display mt-3 text-xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-fg-soft">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="on-ink relative overflow-hidden border-t border-hairline !bg-[#153e44]">
        <div
          aria-hidden
          className="absolute -right-24 -top-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,40,0.22),transparent_66%)]"
        />
        <div aria-hidden className="grain absolute inset-0 opacity-25" />
        <div className="shell relative z-10 py-16 md:py-24">
          <p className="mono reveal text-ember">{t.expertise.faq}</p>
          <h2
            className="display reveal mt-5 max-w-[14ch] text-[clamp(1.8rem,4vw,3rem)]"
            style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
          >
            {t.expertise.faqTitle}
          </h2>
          <dl className="mt-10 max-w-3xl space-y-0 border-t border-hairline">
            {page.faq.map((item, i) => (
              <div
                key={item.q}
                className="reveal border-b border-hairline py-7"
                style={
                  { "--reveal-delay": `${i * 70}ms` } as React.CSSProperties
                }
              >
                <dt className="display text-lg md:text-xl">{item.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-fg-soft">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="relative border-t border-hairline bg-bone">
          <div className="shell py-16 md:py-24">
            <p className="mono reveal text-ember">{t.expertise.also}</p>
            <h2
              className="display reveal mt-5 text-[clamp(1.8rem,4vw,3rem)]"
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {t.expertise.otherAreas}
            </h2>
            <ul className="mt-10 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
              {related.map((item, i) =>
                item ? (
                  <li key={item.slug} className="bg-panel">
                    <Link
                      href={hrefFor(locale, `/expertise/${item.slug}`)}
                      className="reveal group flex h-full flex-col justify-between p-6 no-underline transition-colors duration-300 hover:bg-bone md:p-8"
                      style={
                        {
                          "--reveal-delay": `${i * 70}ms`,
                        } as React.CSSProperties
                      }
                    >
                      <div>
                        <p className="mono text-ember">{item.navLabel}</p>
                        <h3 className="display mt-4 text-xl group-hover:text-ember">
                          {item.h1}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-fg-soft">
                          {item.lead}
                        </p>
                      </div>
                      <span className="mono mt-8 text-fg-muted group-hover:text-ember">
                        {t.home.seeSheet}
                      </span>
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="on-bone relative overflow-hidden border-t border-hairline">
        <div aria-hidden className="mesh absolute inset-0 opacity-25" />
        <div className="shell relative z-10 py-16 text-center md:py-24">
          <h2 className="display reveal mx-auto max-w-[16ch] text-[clamp(2rem,5vw,3.6rem)] text-balance">
            {t.expertise.fitTitle}
          </h2>
          <div
            className="reveal mt-10 flex flex-wrap justify-center gap-3"
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <Cta href={hrefFor(locale, "/contacto")}>{t.expertise.startTalk}</Cta>
            <Cta href={hrefFor(locale, "/expertise")} variant="ghost">
              {t.expertise.allAreas}
            </Cta>
          </div>
        </div>
      </section>

      <nav aria-label={t.expertise.allAreas} className="sr-only">
        <ul>
          {expertisePages.map((p: { slug: ExpertiseSlug; h1: string }) => (
            <li key={p.slug}>
              <Link href={hrefFor(locale, `/expertise/${p.slug}`)}>{p.h1}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
