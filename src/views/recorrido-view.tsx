import { Cta } from "@/components/Cta";
import { Marquee } from "@/components/Marquee";
import { PageHero } from "@/components/PageHero";
import type { Locale } from "@/i18n/config";
import { getContent } from "@/i18n/get-content";
import { hrefFor } from "@/i18n/path";
import { getUi } from "@/i18n/ui";

export function RecorridoView({ locale }: { locale: Locale }) {
  const { marketsArc, stages, timelineDigital, timelineRoots } =
    getContent(locale);
  const t = getUi(locale);
  return (
    <>
      <PageHero
        label={t.path.label}
        title={t.path.title}
        lead={t.path.lead}
      />

      <section className="relative overflow-hidden bg-panel">
        <div className="shell relative z-10 py-20 md:py-28">
          <p className="mono reveal text-ember">{t.path.digitalAxis}</p>
          <h2
            className="display reveal mt-5 max-w-[18ch] text-[clamp(2rem,4.5vw,3.4rem)]"
            style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
          >
            {t.path.digitalTitle}
          </h2>
          <ol className="mt-12 border-t border-hairline">
            {timelineDigital.map((item, index) => (
              <li
                key={item.title}
                className="reveal group grid gap-4 border-b border-hairline py-9 transition-colors duration-500 hover:bg-bone/60 md:grid-cols-[4rem_11rem_1fr] md:gap-10 md:py-11"
                style={
                  { "--reveal-delay": `${index * 50}ms` } as React.CSSProperties
                }
              >
                <span className="mono text-fg-muted transition-colors duration-500 group-hover:text-ember">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mono text-ember">{item.year}</p>
                <div>
                  <h3 className="display text-[clamp(1.35rem,2.6vw,2.1rem)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-fg-soft">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-hairline bg-bone">
        <div aria-hidden className="mesh absolute inset-0 opacity-25" />
        <div className="shell relative z-10 py-20 md:py-28">
          <p className="mono reveal text-ember">{marketsArc.label}</p>
          <h2
            className="display reveal mt-5 max-w-[16ch] text-[clamp(2rem,4.8vw,3.8rem)]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {marketsArc.title}
          </h2>
          <p
            className="reveal mt-6 max-w-2xl leading-relaxed text-fg-soft"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {marketsArc.lead}
          </p>

          <ol className="mt-14 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {marketsArc.milestones.map((item, i) => (
              <li
                key={item.title}
                className="reveal bg-panel p-7 md:p-8"
                style={
                  { "--reveal-delay": `${i * 60}ms` } as React.CSSProperties
                }
              >
                <p className="mono text-ember">0{i + 1}</p>
                <h3 className="display mt-4 text-[clamp(1.25rem,2.2vw,1.7rem)]">
                  {item.title}
                </h3>
                <p className="mono mt-2 text-fg-muted">{item.detail}</p>
                <p className="mt-4 text-sm leading-relaxed text-fg-soft">
                  {item.text}
                </p>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono link-underline mt-5 inline-block text-ember"
                  >
                    {t.path.visitSite}
                  </a>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-ink relative overflow-hidden border-b border-hairline">
        <div className="shell py-20 md:py-28">
          <p className="mono reveal text-ember">{timelineRoots.label}</p>
          <h2
            className="display reveal mt-5 max-w-[18ch] text-[clamp(2rem,4.6vw,3.6rem)]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {timelineRoots.title}
          </h2>
          <p
            className="reveal mt-6 max-w-2xl leading-relaxed text-fg-soft"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {timelineRoots.lead}
          </p>

          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            {timelineRoots.items.map((item, i) => (
              <article
                key={item.title}
                className="reveal bg-[rgba(20,24,33,0.92)] p-7 md:p-9"
                style={
                  { "--reveal-delay": `${i * 70}ms` } as React.CSSProperties
                }
              >
                <h3 className="display text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-fg-soft">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone">
        <div className="shell py-20 md:py-28">
          <p className="mono reveal text-ember">{t.path.stagesLabel}</p>
          <h2
            className="display reveal mt-6 max-w-[18ch] text-[clamp(2rem,4.6vw,3.6rem)]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {t.path.stagesTitle}
          </h2>
          <p
            className="reveal mt-6 max-w-2xl leading-relaxed text-fg-soft"
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            {t.path.stagesLead}
          </p>

          <ul className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, i) => (
              <li
                key={stage.name}
                className="reveal bg-panel px-6 py-8"
                style={
                  { "--reveal-delay": `${i * 50}ms` } as React.CSSProperties
                }
              >
                <p className="display text-lg md:text-xl">{stage.name}</p>
                <p className="mono mt-3 text-fg-muted">{stage.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-hairline bg-panel py-4">
          <Marquee
            duration={34}
            pace={0.544}
            items={Array.from({ length: 8 }, (_, i) => (
              <span
                key={i}
                className="display px-6 text-[clamp(1.6rem,4vw,3rem)] uppercase text-fg/10"
              >
                {t.path.marquee}
              </span>
            ))}
          />
        </div>
      </section>

      <section className="on-bone relative overflow-hidden border-t border-hairline">
        <div className="shell grid gap-10 py-20 md:grid-cols-[1.2fr_1fr] md:items-end md:py-28">
          <h2 className="display reveal max-w-[14ch] text-[clamp(2rem,4.6vw,3.6rem)] text-balance">
            {t.path.nextChapter}
          </h2>
          <div className="reveal flex flex-wrap gap-3 md:justify-end">
            <Cta href={hrefFor(locale, "/contacto")}>{t.path.letsTalk}</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
