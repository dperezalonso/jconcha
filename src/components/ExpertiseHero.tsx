"use client";

import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Marquee } from "@/components/Marquee";
import type { Locale } from "@/i18n/config";
import { hrefFor } from "@/i18n/path";
import { getUi } from "@/i18n/ui";
import { site } from "@/lib/site";
import type { ExpertisePage } from "@/lib/expertise-pages";

type Props = {
  page: ExpertisePage;
  index: number;
  locale: Locale;
};

export function ExpertiseHero({ page, index, locale }: Props) {
  const t = getUi(locale);
  const n = String(index + 1).padStart(2, "0");

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-hairline">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(135deg,#fbf9f5_0%,#f8ecdf_36%,#f5d5ba_68%,#eeb88b_100%)]"
        />
        <div
          aria-hidden
          className="absolute -right-24 -top-36 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(224,61,15,0.36),transparent_62%)] blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-28 left-[40%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(240,160,32,0.26),transparent_65%)] blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -left-32 top-1/3 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(26,107,116,0.2),transparent_65%)] blur-2xl"
        />
        <div aria-hidden className="grain absolute inset-0 opacity-40" />

        <span
          aria-hidden
          className="display pointer-events-none absolute -right-2 top-16 z-[1] select-none text-[clamp(8rem,22vw,18rem)] leading-none tracking-[-0.08em] text-fg/[0.05] md:top-12 md:right-6"
        >
          {n}
        </span>

        <div className="shell relative z-[2] pb-12 pt-28 md:pb-16 md:pt-32">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href={hrefFor(locale, "/expertise")}
              className="mono link-underline text-fg-muted hover:text-fg"
            >
              {t.expertise.back}
            </Link>
            <p className="mono text-ember">0{index + 1} / 04</p>
          </div>

          <div className="mt-10 max-w-3xl md:mt-12">
            <p
              className="mono intro text-ember"
              style={{ "--intro-delay": "0.05s" } as React.CSSProperties}
            >
              {page.eyebrow}
            </p>
            <h1
              className="display intro mt-4 text-[clamp(2.2rem,5.8vw,4.4rem)] leading-[0.94] tracking-[-0.04em] text-balance"
              style={{ "--intro-delay": "0.1s" } as React.CSSProperties}
            >
              {page.h1}
            </h1>
            <p
              className="intro mt-5 max-w-2xl text-[1.08rem] leading-relaxed text-fg-soft"
              style={{ "--intro-delay": "0.18s" } as React.CSSProperties}
            >
              {page.lead}
            </p>
            <div
              className="intro mt-8 flex flex-wrap gap-3"
              style={{ "--intro-delay": "0.26s" } as React.CSSProperties}
            >
              <Cta href={hrefFor(locale, "/contacto")}>
                {t.expertise.talkProject}
              </Cta>
              <Cta href={site.social.agency} external variant="ghost">
                {t.expertise.seeAgency}
              </Cta>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label={t.expertise.specializations}
        className="on-ink relative border-b border-hairline py-5"
      >
        <Marquee
          duration={42}
          items={page.heroTags.map((tag) => (
            <span
              key={tag}
              className="display flex items-center gap-6 px-4 text-[clamp(1.05rem,2.2vw,1.5rem)] uppercase tracking-[0.02em] text-fg-muted"
            >
              {tag}
              <span className="text-ember/60">✦</span>
            </span>
          ))}
        />
      </section>
    </>
  );
}
