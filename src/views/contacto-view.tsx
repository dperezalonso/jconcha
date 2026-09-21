import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Portrait } from "@/components/Portrait";
import type { Locale } from "@/i18n/config";
import { getContent } from "@/i18n/get-content";
import { getUi } from "@/i18n/ui";
import { site } from "@/lib/site";

export function ContactoView({ locale }: { locale: Locale }) {
  const { contact } = getContent(locale);
  const t = getUi(locale);
  const channels = [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      detail: t.contact.channels.emailDetail,
      external: false,
    },
    {
      label: "LinkedIn",
      value: "javierconchalopez",
      href: site.social.linkedin,
      detail: t.contact.channels.linkedinDetail,
      external: true,
    },
    {
      label: "X · Twitter",
      value: "@efectoesponja",
      href: site.social.twitter,
      detail: t.contact.channels.xDetail,
      external: true,
    },
    {
      label: "Instagram",
      value: "@efectoesponja",
      href: site.social.instagram,
      detail: t.contact.channels.instagramDetail,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        label={t.contact.label}
        title={contact.title}
        lead={contact.text}
      />

      <section className="relative overflow-hidden bg-bone">
        <div aria-hidden className="mesh absolute inset-0 opacity-30" />
        <div className="shell relative z-10 py-16 md:py-24">
          <div className="mb-12 grid gap-8 md:grid-cols-[300px_1fr] md:items-center">
            <Portrait
              className="aspect-[4/5] w-full max-w-[300px]"
              src="/javier-contacto.jpg"
              sizes="(max-width: 768px) 90vw, 600px"
              objectPosition="50% 16%"
              imageClassName="scale-[1.2]"
              quality={95}
              priority
            />
            <div>
              <p className="mono text-ember">{t.contact.role}</p>
              <h2 className="display mt-3 text-[clamp(1.6rem,3vw,2.4rem)]">
                {site.fullName}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-fg-soft">
                {t.contact.bio}
              </p>
            </div>
          </div>

          <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
            {channels.map((channel, index) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="reveal group flex min-h-[11rem] flex-col justify-between gap-6 bg-bone p-6 no-underline transition-colors duration-500 hover:bg-panel md:p-8"
                style={
                  { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
                }
              >
                <p className="mono text-ember">{channel.label}</p>
                <div>
                  <p className="display break-all text-[clamp(1.15rem,2.2vw,1.55rem)] transition-colors duration-300 group-hover:text-ember">
                    {channel.value}
                    {channel.external ? (
                      <span aria-hidden className="ml-1 inline-block">
                        ↗
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-3 line-clamp-1 text-sm text-fg-soft">
                    {channel.detail}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="reveal mt-10 w-full border-t border-hairline pt-8 text-sm leading-relaxed text-fg-muted md:text-[0.95rem]">
            {t.contact.agencyNoteBefore}
            <Link
              href={site.social.agency}
              className="font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              SANTACONCHA
            </Link>
            {t.contact.agencyNoteAfter}
          </p>
        </div>
      </section>

      <section className="on-bone border-t border-hairline">
        <div className="shell grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="reveal">
            <p className="mono text-ember">41°36′ N · 2°17′ E</p>
            <h2 className="display mt-5 text-[clamp(2rem,4.6vw,3.4rem)]">
              Barcelona
            </h2>
            <p className="mt-4 leading-relaxed text-fg-soft">
              {t.contact.barcelona}
            </p>
          </div>
          <div
            className="reveal"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <p className="mono text-ember">25°45′ N · 80°11′ O</p>
            <h2 className="display mt-5 text-[clamp(2rem,4.6vw,3.4rem)]">
              Miami
            </h2>
            <p className="mt-4 leading-relaxed text-fg-soft">{t.contact.miami}</p>
          </div>
        </div>
      </section>
    </>
  );
}
