import Link from "next/link";
import Image from "next/image";
import { Atmosphere } from "@/components/Atmosphere";
import { Cta } from "@/components/Cta";
import { HeroMagnet } from "@/components/HeroMagnet";
import { Marquee } from "@/components/Marquee";
import { Portrait } from "@/components/Portrait";
import { SpotField } from "@/components/SpotField";
import { Wordmark } from "@/components/Wordmark";
import type { Locale } from "@/i18n/config";
import { getContent } from "@/i18n/get-content";
import { hrefFor } from "@/i18n/path";
import { getUi } from "@/i18n/ui";
import { site } from "@/lib/site";

function ManifestoParagraph({ text }: { text: string }) {
  const chunks = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <p className="mt-4 text-[0.95rem] leading-relaxed text-fg-soft">
      {chunks.map((chunk, i) =>
        chunk.startsWith("**") && chunk.endsWith("**") ? (
          <strong key={i} className="font-semibold text-fg">
            {chunk.slice(2, -2)}
          </strong>
        ) : (
          chunk
        ),
      )}
    </p>
  );
}

export function HomeView({ locale }: { locale: Locale }) {
  const { brands, hero, home, ticker, timeline } = getContent(locale);
  const t = getUi(locale);
  const recent = timeline.slice(0, 4);
  const quoteRows = [
    home.quotes.slice(0, 7),
    home.quotes.slice(7, 14),
    home.quotes.slice(14),
  ];

  return (
    <>
      <SpotField className="relative isolate overflow-hidden bg-bone">
        <Atmosphere variant="full" />
        <div aria-hidden className="spot-light" />

        <div className="hero-home shell relative z-[5] flex min-h-[100svh] flex-col gap-4 pb-8 pt-24 md:min-h-[70svh] md:justify-between md:gap-8 md:pb-10 md:pt-32">
          <p
            className="mono intro text-ember"
            style={{ "--intro-delay": "0.05s" } as React.CSSProperties}
          >
            {hero.role}
          </p>

          <div className="hero-stage flex-1">
            <HeroMagnet />
          </div>

          <div className="hero-brand">
            <Wordmark lines={hero.brand} />
          </div>

          <div className="hero-copy relative z-[6] grid gap-4 md:grid-cols-[minmax(0,1.2fr)_auto] md:items-end md:gap-16">
            <div>
              <p
                className="display intro max-w-[22ch] text-[clamp(1.45rem,3.2vw,2.55rem)] text-balance"
                style={{ "--intro-delay": "0.12s" } as React.CSSProperties}
              >
                {hero.headline}
              </p>
              <p
                className="intro mt-3.5 max-w-lg text-[0.98rem] leading-relaxed text-fg-soft md:mt-5"
                style={{ "--intro-delay": "0.22s" } as React.CSSProperties}
              >
                {hero.support}
              </p>
            </div>

            <div
              className="hero-actions intro flex items-center justify-between gap-4 md:flex-col md:items-end md:gap-6"
              style={{ "--intro-delay": "0.32s" } as React.CSSProperties}
            >
              <div className="flex flex-col items-start gap-3 md:flex-row md:flex-wrap md:justify-end">
                {hero.ctas.map((cta) => (
                  <Cta
                    key={cta.href}
                    href={hrefFor(locale, cta.href)}
                    variant={cta.variant}
                    external={"external" in cta && cta.external}
                  >
                    {cta.label}
                  </Cta>
                ))}
              </div>
              <a
                href="#perspectiva"
                className="scroll-cue mono shrink-0 text-fg-muted no-underline hover:text-fg"
              >
                {hero.scroll}
                <span aria-hidden className="scroll-cue-line" />
              </a>
            </div>
          </div>
        </div>
      </SpotField>

      <section
        aria-label={t.home.keyFigures}
        className="on-ink relative border-y border-hairline py-5"
      >
        <Marquee
          duration={40}
          items={ticker.map((item) => (
            <span
              key={item.label}
              className="flex items-baseline gap-3 px-8 whitespace-nowrap"
            >
              <span className="display text-[1.35rem] text-fg md:text-[1.6rem]">
                {item.value}
              </span>
              <span className="mono text-fg-muted">{item.label}</span>
              <span className="text-ember/60">✦</span>
            </span>
          ))}
        />
      </section>

      <section
        aria-label={t.home.brands}
        className="relative border-b border-hairline bg-panel py-6"
      >
        <Marquee
          duration={52}
          reverse
          items={brands.map((brand) => (
            <span
              key={brand}
              className="display flex items-center gap-10 px-5 text-[1.05rem] uppercase tracking-[0.02em] text-fg-muted transition-colors duration-300 hover:text-fg md:text-[1.25rem]"
            >
              {brand}
            </span>
          ))}
        />
      </section>

      <section
        id="perspectiva"
        className="relative overflow-hidden scroll-mt-24 border-b border-hairline bg-bone"
      >
        <Atmosphere variant="soft" />
        <div className="shell relative z-10 py-20 md:py-28">
          <p className="mono reveal text-ember">{home.manifestoLabel}</p>
          <h2
            className="display reveal mt-6 max-w-[14ch] text-[clamp(2.5rem,6.3vw,5.4rem)]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {home.manifestoTitle}
          </h2>

          <div className="mt-10 grid gap-px border border-hairline bg-hairline lg:mt-14 lg:grid-cols-[minmax(17rem,0.72fr)_minmax(0,1.65fr)]">
            <div
              className="reveal flex flex-col bg-panel p-4 md:p-6"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <Portrait
                priority
                className="aspect-[4/5] w-full lg:aspect-auto lg:min-h-[34rem] lg:flex-1"
                sizes="(max-width: 1024px) 92vw, 720px"
                quality={100}
              />
              <p className="mono mt-5 flex items-center gap-3 text-fg-muted">
                <span aria-hidden className="h-px w-8 bg-ember" />
                {site.fullName} · Barcelona
              </p>
            </div>

            <div className="bg-bone p-6 md:p-10 lg:p-12">
              <p
                className="display reveal max-w-[32ch] border-l-4 border-ember pl-6 text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.28] text-fg md:pl-8"
                style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
              >
                {home.manifestoLead}
              </p>
              <div className="mt-10 grid gap-7 md:grid-cols-2">
                {home.manifestoBody.map((paragraph, i) => (
                  <article
                    key={paragraph.slice(0, 24)}
                    className="reveal border-t border-hairline pt-5"
                    style={
                      {
                        "--reveal-delay": `${200 + i * 90}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <p className="mono text-ember">0{i + 1}</p>
                    <ManifestoParagraph text={paragraph} />
                  </article>
                ))}
              </div>
              <div
                className="on-ink reveal mt-10 flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
              >
                <p className="mono text-ember">{t.home.myRule}</p>
                <p className="display text-lg sm:text-right">
                  {t.home.myRuleText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-hairline bg-panel">
        <div className="shell py-20 md:py-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mono reveal text-ember">{home.proofLabel}</p>
              <h2
                className="display reveal mt-5 text-[clamp(2rem,4.5vw,3.6rem)]"
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                {home.proofTitle}
              </h2>
            </div>
            <p
              className="reveal max-w-xs text-fg-soft"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {home.proofLead}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px border border-hairline bg-hairline md:grid-cols-4">
            {home.proof.map((item, i) => (
              <div
                key={item.label}
                className="reveal bg-bone px-5 py-9 md:px-7 md:py-12"
                style={
                  { "--reveal-delay": `${i * 90}ms` } as React.CSSProperties
                }
              >
                <p className="display text-[clamp(2.2rem,5vw,3.5rem)] text-fg">
                  {item.value}
                </p>
                <p className="mono mt-3 text-fg-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-ink relative overflow-hidden border-t border-hairline">
        <div aria-hidden className="mesh absolute inset-0 opacity-40" />
        <div className="shell relative z-10 py-24 md:py-36">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mono reveal text-ember">{home.focusLabel}</p>
              <h2
                className="display reveal mt-6 max-w-[16ch] text-[clamp(2.2rem,5.2vw,4.4rem)]"
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                {home.focusTitle}
              </h2>
            </div>
            <p
              className="reveal max-w-sm text-fg-soft"
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              {home.focusLead}
            </p>
          </div>

          <ul className="focus-cross mt-14 grid sm:grid-cols-2">
            {home.focus.map((item, i) => (
              <li
                key={item.title}
                className="reveal bg-[rgba(20,24,33,0.92)]"
                style={
                  { "--reveal-delay": `${i * 80}ms` } as React.CSSProperties
                }
              >
                <Link
                  href={hrefFor(locale, item.href)}
                  className="group flex h-full flex-col justify-between gap-8 p-7 no-underline transition-colors duration-500 hover:bg-[rgba(28,33,44,0.98)] md:p-9"
                >
                  <div>
                    <p className="mono text-ember">0{i + 1}</p>
                    <h3 className="display mt-4 text-[clamp(1.35rem,2.6vw,1.85rem)] group-hover:text-ember">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-fg-soft">
                      {item.text}
                    </p>
                  </div>
                  <div>
                    <span className="flex flex-wrap gap-x-4 gap-y-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="mono text-fg-muted">
                          {tag}
                        </span>
                      ))}
                    </span>
                    <span className="mono mt-6 inline-block text-fg-muted transition-colors group-hover:text-ember">
                      {t.home.seeSheet}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Cta href={hrefFor(locale, "/expertise")} variant="ghost">
              {t.home.seeAllExpertise}
            </Cta>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-hairline bg-panel">
        <div className="shell relative z-10 py-16 md:py-24">
          <p className="mono reveal text-ember">{home.hobbiesLabel}</p>
          <h2
            className="display reveal mt-5 max-w-[16ch] text-[clamp(2.2rem,5vw,4rem)]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {home.hobbiesTitle}
          </h2>
          <p
            className="reveal mt-5 max-w-xl text-fg-soft"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {home.hobbiesLead}
          </p>
          <ul className="mt-10 grid gap-px border border-hairline bg-hairline md:grid-cols-6">
            {home.hobbies.map((item, i) => (
              <li
                key={item.title}
                className={`reveal bg-bone p-6 md:p-8 ${i < 3 ? "md:col-span-2" : "md:col-span-3"}`}
                style={
                  { "--reveal-delay": `${i * 70}ms` } as React.CSSProperties
                }
              >
                <p className="mono text-ember">0{i + 1}</p>
                <h3 className="display mt-4 text-[clamp(1.2rem,2.2vw,1.55rem)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-soft">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-ink relative overflow-hidden border-y border-hairline">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_90%_at_85%_10%,rgba(224,61,15,0.28),transparent_55%),radial-gradient(ellipse_70%_80%_at_10%_90%,rgba(26,107,116,0.2),transparent_50%)]"
        />
        <div className="shell relative z-10 py-20 md:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="mono reveal text-ember">{home.agencyLabel}</p>
              <h2
                className="display reveal mt-5 text-[clamp(2.2rem,5.4vw,4.4rem)] text-balance"
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                {home.agencyTitle}
              </h2>
              <p
                className="reveal mt-6 max-w-xl text-[1.08rem] leading-relaxed text-fg-soft"
                style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
              >
                {home.agencyText}
              </p>
              <p
                className="reveal mt-4 max-w-xl text-fg-soft"
                style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
              >
                {home.agencyText2}
              </p>
              <div
                className="reveal mt-10 flex flex-wrap gap-3"
                style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
              >
                <Cta href={site.social.agency} external>
                  {t.home.exploreAgency}
                </Cta>
                <Cta href={hrefFor(locale, "/recorrido")} variant="ghost">
                  {t.home.myPath}
                </Cta>
              </div>
            </div>
            <div
              className="reveal relative aspect-[4/5] max-h-[28rem] overflow-hidden border border-hairline lg:justify-self-end lg:w-full lg:max-w-md"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <Image
                src="/santaconcha-oficina.jpg"
                alt={t.home.officeAlt}
                fill
                quality={95}
                sizes="(max-width: 1024px) 92vw, 720px"
                className="object-cover object-center"
              />
            </div>
          </div>

          <dl className="mt-14 grid gap-px border border-hairline bg-[rgba(255,255,255,0.08)] sm:grid-cols-2 lg:grid-cols-4">
            {home.agencyPoints.map((point, i) => (
              <div
                key={point.k}
                className="reveal bg-[rgba(20,24,33,0.88)] px-6 py-8"
                style={
                  { "--reveal-delay": `${i * 70}ms` } as React.CSSProperties
                }
              >
                <dt className="display text-xl">{point.k}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-fg-soft">
                  {point.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative border-t border-hairline py-5">
          <Marquee
            duration={38}
            reverse
            pace={0.544}
            items={Array.from({ length: 6 }, (_, i) => (
              <span
                key={i}
                className="display px-6 text-[clamp(2rem,5vw,4rem)] uppercase"
              >
                <span className="text-fg/15">SANTACONCHA®</span>{" "}
                <span className="text-ember/50">{t.home.converge}</span>
              </span>
            ))}
          />
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-hairline bg-panel py-16 md:py-24">
        <div className="shell relative z-10">
          <p className="mono reveal text-ember">{home.quotesLabel}</p>
          <h2
            className="display reveal mt-5 max-w-[14ch] text-[clamp(2.2rem,5.4vw,4.6rem)]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {home.quotesTitle}
          </h2>
          <p className="mono reveal mt-4 text-fg-muted">
            {t.home.drag}
          </p>
        </div>

        <div className="relative z-10 mt-10 space-y-3 md:mt-12">
          {quoteRows.map((group, groupIndex) => (
            <Marquee
              key={groupIndex}
              duration={64 + groupIndex * 8}
              reverse={groupIndex === 1}
              pace={0.9}
              itemClassName="flex"
              items={group.map((item) => (
                <figure
                  key={item.author}
                  className="mx-2 flex h-full min-h-[18rem] w-[86vw] flex-col justify-between border border-hairline bg-bone p-6 transition-colors duration-500 hover:border-ember/50 sm:w-[27rem] md:w-[30rem] md:p-7"
                >
                  <blockquote className="text-[0.92rem] leading-relaxed text-fg-soft">
                    «{item.quote}»
                  </blockquote>
                  <figcaption className="mt-5 border-t border-hairline pt-4">
                    <span className="display block text-base">{item.author}</span>
                    <span className="mono mt-1.5 block text-fg-muted">
                      {item.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            />
          ))}
        </div>
      </section>

      <section className="on-ink relative border-t border-hairline">
        <div className="shell py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mono reveal text-ember">{home.arcLabel}</p>
              <h2
                className="display reveal mt-5 max-w-[16ch] text-[clamp(2.2rem,5vw,4rem)]"
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                {home.arcTitle}
              </h2>
              <p
                className="reveal mt-4 max-w-md text-fg-soft"
                style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              >
                {home.arcLead}
              </p>
            </div>
            <Link
              href={hrefFor(locale, "/recorrido")}
              className="mono link-underline reveal text-fg-soft hover:text-fg"
            >
              {t.home.seeFullPath}
            </Link>
          </div>

          <ol className="mt-10 border-t border-hairline md:mt-12">
            {recent.map((item, i) => (
              <li
                key={item.title}
                className="reveal grid gap-3 border-b border-hairline py-7 md:grid-cols-[12rem_1fr] md:gap-10"
                style={
                  { "--reveal-delay": `${i * 90}ms` } as React.CSSProperties
                }
              >
                <p className="mono text-ember">{item.year}</p>
                <div>
                  <h3 className="display text-[clamp(1.25rem,2.4vw,1.9rem)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-soft">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-hairline bg-bone">
        <div className="shell relative z-10 py-16 md:py-24">
          <p className="mono reveal text-ember">{home.pressLabel}</p>
          <h2
            className="display reveal mt-5 max-w-[16ch] text-[clamp(2.2rem,5vw,4rem)]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {home.pressTitle}
          </h2>
          <p
            className="reveal mt-5 max-w-xl text-fg-soft"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {home.pressLead}
          </p>
          <ul className="mt-10 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {home.press.map((item) => (
              <li key={item.name} className="bg-panel">
                <div className="h-full p-6 md:p-7">
                  <p className="display text-xl">{item.name}</p>
                  <p className="mono mt-3 text-fg-muted">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-ink relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_120%_at_50%_120%,rgba(255,193,72,0.45),rgba(255,74,23,0.28)_38%,rgba(12,14,20,0)_72%)]"
        />
        <div aria-hidden className="grain absolute inset-0" />
        <div className="shell relative z-10 flex flex-col items-center py-28 text-center md:py-40">
          <div className="reveal mb-10 overflow-hidden rounded-full border border-hairline">
            <Portrait
              circle
              className="h-28 w-28"
              sizes="224px"
            />
          </div>
          <p className="mono reveal text-ember">{home.ctaLabel}</p>
          <h2
            className="display reveal mt-6 max-w-[18ch] text-[clamp(2.6rem,7.5vw,6.2rem)] text-balance"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {home.ctaTitle}
          </h2>
          <p
            className="reveal mt-7 max-w-xl text-fg-soft"
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            {home.ctaText}
          </p>
          <div
            className="reveal mt-10 flex flex-wrap justify-center gap-3"
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            <Cta href={hrefFor(locale, "/contacto")}>{t.home.writeMe}</Cta>
          </div>
          <p
            className="reveal mt-16 mono text-fg-muted"
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
          >
            {home.ctaSign}
          </p>
          <p
            className="display reveal mt-2 text-2xl md:text-3xl"
            style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
          >
            {home.ctaName}
          </p>
        </div>
      </section>
    </>
  );
}
