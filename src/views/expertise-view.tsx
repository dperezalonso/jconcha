import Link from "next/link";
import { Cta } from "@/components/Cta";
import { PageHero } from "@/components/PageHero";
import type { Locale } from "@/i18n/config";
import { getContent } from "@/i18n/get-content";
import { hrefFor } from "@/i18n/path";
import { getUi } from "@/i18n/ui";
import { site } from "@/lib/site";

export function ExpertiseView({ locale }: { locale: Locale }) {
  const { expertise } = getContent(locale);
  const t = getUi(locale);

  return (
    <>
      <PageHero
        label={t.expertise.label}
        title={t.expertise.title}
        lead={expertise.intro}
      />

      <section className="relative overflow-hidden bg-bone">
        <div aria-hidden className="mesh absolute inset-0 opacity-30" />
        <div className="shell relative z-10 py-20 md:py-28">
          <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            {expertise.areas.map((area, index) => (
              <Link
                key={area.title}
                href={hrefFor(locale, area.href)}
                className="reveal group flex flex-col bg-bone p-7 no-underline transition-colors duration-500 hover:bg-panel md:p-10"
                style={
                  { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                }
              >
                <p className="mono text-ember">0{index + 1}</p>
                <h2 className="display mt-6 text-[clamp(1.5rem,3vw,2.2rem)] group-hover:text-ember">
                  {area.title}
                </h2>
                <ul className="mt-7 flex-1 space-y-3">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 border-t border-hairline pt-3 text-sm leading-relaxed text-fg-soft"
                    >
                      <span aria-hidden className="text-ember">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="mono mt-8 text-fg-muted group-hover:text-ember">
                  {area.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="on-bone relative overflow-hidden border-t border-hairline">
        <div className="shell py-20 md:py-28">
          <p className="mono reveal text-ember">{t.expertise.context}</p>
          <h2
            className="display reveal mt-6 max-w-[16ch] text-[clamp(2rem,4.6vw,3.6rem)]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {t.expertise.brandsTitle}
          </h2>
          <p
            className="reveal mt-7 max-w-3xl text-[1.05rem] leading-relaxed text-fg-soft"
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            {expertise.brands}
          </p>
          <div
            className="reveal mt-12 flex flex-wrap gap-3"
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            <Cta href={hrefFor(locale, "/contacto")}>
              {t.expertise.pitchProject}
            </Cta>
            <Cta href={site.social.agency} external variant="ghost">
              {t.expertise.seeCases}
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
