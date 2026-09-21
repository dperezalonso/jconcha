import type { ReactNode } from "react";
import { Marquee } from "@/components/Marquee";
import { brands } from "@/lib/content";

type Props = {
  label: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  band?: string[];
};

/**
 * Hero interior: degradado más presente + banda oscura debajo.
 */
export function PageHero({
  label,
  title,
  lead,
  children,
  band = [...brands],
}: Props) {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-hairline">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(135deg,#fbf9f5_0%,#f8ecdf_38%,#f5d8bf_70%,#efbd94_100%)]"
        />
        <div
          aria-hidden
          className="absolute -right-24 -top-36 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(224,61,15,0.32),transparent_62%)] blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-28 left-[36%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(240,160,32,0.26),transparent_65%)] blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -left-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(26,107,116,0.2),transparent_65%)] blur-2xl"
        />
        <div aria-hidden className="grain absolute inset-0 opacity-40" />

        <div className="shell relative z-10 pb-12 pt-28 md:pb-16 md:pt-36">
          <p
            className="mono intro text-ember"
            style={{ "--intro-delay": "0.05s" } as React.CSSProperties}
          >
            {label}
          </p>
          <h1
            className="display intro mt-5 max-w-[16ch] text-[clamp(2.3rem,6.5vw,4.8rem)] text-balance"
            style={{ "--intro-delay": "0.12s" } as React.CSSProperties}
          >
            {title}
          </h1>
          {lead ? (
            <p
              className="intro mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-fg-soft"
              style={{ "--intro-delay": "0.2s" } as React.CSSProperties}
            >
              {lead}
            </p>
          ) : null}
          {children ? (
            <div
              className="intro mt-8"
              style={{ "--intro-delay": "0.28s" } as React.CSSProperties}
            >
              {children}
            </div>
          ) : null}
        </div>
      </section>

      <section
        aria-label="Marcas y oficios"
        className="on-ink relative border-b border-hairline py-5"
      >
        <Marquee
          duration={44}
          items={band.map((item) => (
            <span
              key={item}
              className="display flex items-center gap-8 px-4 text-[clamp(1rem,2vw,1.35rem)] uppercase tracking-[0.04em] text-fg-muted"
            >
              {item}
              <span className="text-ember/60">✦</span>
            </span>
          ))}
        />
      </section>
    </>
  );
}
