import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import type { Locale } from "@/i18n/config";
import { legalCopy } from "@/i18n/legal";
import { hrefFor } from "@/i18n/path";
import { pagesMeta } from "@/i18n/pages-meta";
import { getUi } from "@/i18n/ui";
import { site } from "@/lib/site";

function fill(text: string) {
  return text
    .replaceAll("{name}", site.fullName)
    .replaceAll("{short}", site.name)
    .replaceAll("{location}", site.location)
    .replaceAll("{email}", site.email)
    .replaceAll("{url}", site.url);
}

export function PrivacidadView({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  const legal = legalCopy[locale];
  const meta = pagesMeta[locale].privacy;

  return (
    <>
      <PageHero label={t.legal.label} title={meta.title} lead={legal.privacyLead} />
      <article className="relative bg-bone">
        <div className="shell max-w-3xl! space-y-10 py-16 text-[1.02rem] leading-relaxed text-fg-soft md:py-24">
          <p className="mono text-fg-muted">{t.legal.updated}</p>
          {legal.privacy.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="display text-2xl text-fg">{section.title}</h2>
              <p>
                {section.title.startsWith("7.") ? (
                  locale === "en" ? (
                    <>
                      Cookie use is described in the{" "}
                      <Link
                        href={hrefFor(locale, "/cookies")}
                        className="link-underline text-fg"
                      >
                        Cookie policy
                      </Link>
                      .
                    </>
                  ) : locale === "ca" ? (
                    <>
                      El detall de l’ús de cookies és a la{" "}
                      <Link
                        href={hrefFor(locale, "/cookies")}
                        className="link-underline text-fg"
                      >
                        Política de cookies
                      </Link>
                      .
                    </>
                  ) : (
                    <>
                      El detalle del uso de cookies está en la{" "}
                      <Link
                        href={hrefFor(locale, "/cookies")}
                        className="link-underline text-fg"
                      >
                        Política de cookies
                      </Link>
                      .
                    </>
                  )
                ) : section.title.startsWith("6.") ? (
                  <>
                    {fill(section.body.split("(aepd.es)")[0])}
                    (
                    <a
                      href="https://www.aepd.es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-fg"
                    >
                      aepd.es
                    </a>
                    ).
                  </>
                ) : (
                  fill(section.body)
                )}
              </p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}

export function CookiesView({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  const legal = legalCopy[locale];
  const meta = pagesMeta[locale].cookies;
  const privacyTitle = pagesMeta[locale].privacy.title;

  return (
    <>
      <PageHero label={t.legal.label} title={meta.title} lead={legal.cookiesLead} />
      <article className="relative bg-bone">
        <div className="shell max-w-3xl! space-y-10 py-16 text-[1.02rem] leading-relaxed text-fg-soft md:py-24">
          <p className="mono text-fg-muted">{t.legal.updated}</p>
          {legal.cookies.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="display text-2xl text-fg">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>
                  {section.title.startsWith("4.") ? (
                    <>
                      {locale === "en" ? (
                        <>
                          Personal data processing is described in the{" "}
                          <Link
                            href={hrefFor(locale, "/privacidad")}
                            className="link-underline text-fg"
                          >
                            {privacyTitle}
                          </Link>
                          . For any question:{" "}
                          <a
                            href={`mailto:${site.email}`}
                            className="link-underline text-fg"
                          >
                            {site.email}
                          </a>
                          .
                        </>
                      ) : locale === "ca" ? (
                        <>
                          El tractament de dades personals es descriu a la{" "}
                          <Link
                            href={hrefFor(locale, "/privacidad")}
                            className="link-underline text-fg"
                          >
                            {privacyTitle}
                          </Link>
                          . Per a qualsevol dubte:{" "}
                          <a
                            href={`mailto:${site.email}`}
                            className="link-underline text-fg"
                          >
                            {site.email}
                          </a>
                          .
                        </>
                      ) : (
                        <>
                          El tratamiento de datos personales se describe en la{" "}
                          <Link
                            href={hrefFor(locale, "/privacidad")}
                            className="link-underline text-fg"
                          >
                            {privacyTitle}
                          </Link>
                          . Para cualquier duda:{" "}
                          <a
                            href={`mailto:${site.email}`}
                            className="link-underline text-fg"
                          >
                            {site.email}
                          </a>
                          .
                        </>
                      )}
                    </>
                  ) : (
                    fill(paragraph)
                  )}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
