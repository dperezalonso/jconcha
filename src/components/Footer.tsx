"use client";

import Link from "next/link";
import { LogoFull } from "@/components/Logo";
import type { Locale } from "@/i18n/config";
import { hrefFor } from "@/i18n/path";
import { getUi } from "@/i18n/ui";
import { site } from "@/lib/site";

const socialLinks = [
  { href: site.social.linkedin, label: "LinkedIn" },
  { href: site.social.twitter, label: "X · Twitter" },
  { href: site.social.instagram, label: "Instagram" },
  { href: site.social.agency, label: "SANTACONCHA" },
] as const;

export function Footer({ locale }: { locale: Locale }) {
  const t = getUi(locale);

  return (
    <footer className="on-ink relative isolate mt-auto overflow-hidden border-t border-hairline">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_70%_100%_at_50%_130%,rgba(255,74,23,0.22),transparent_70%)]"
      />

      <div className="shell relative z-10 grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
        <div>
          <LogoFull inverse />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-soft">
            {t.footerBlurb}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="link-underline mt-6 inline-block text-[1.05rem] text-fg"
          >
            {site.email}
          </a>
        </div>

        <nav aria-label={t.footerNav}>
          <p className="mono text-fg-muted">{t.footerNav}</p>
          <ul className="mt-5 space-y-3">
            {t.nav.map((item) => (
              <li key={item.path}>
                <Link
                  href={hrefFor(locale, item.path)}
                  className="link-underline text-sm text-fg-soft hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={hrefFor(locale, "/privacidad")}
                className="link-underline text-sm text-fg-soft hover:text-fg"
              >
                {t.privacy}
              </Link>
            </li>
            <li>
              <Link
                href={hrefFor(locale, "/cookies")}
                className="link-underline text-sm text-fg-soft hover:text-fg"
              >
                {t.cookies}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="mono text-fg-muted">{t.connect}</p>
          <ul className="mt-5 space-y-3 text-sm">
            {socialLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-fg-soft hover:text-fg"
                >
                  {item.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-hairline">
        <div className="shell flex flex-col gap-2 py-5 md:flex-row md:items-center md:justify-between">
          <p className="mono text-fg-muted">
            © 2026 {site.fullName}
          </p>
          <p className="mono text-fg-muted">
            <Link href={hrefFor(locale, "/privacidad")} className="hover:text-fg">
              {t.privacy}
            </Link>
            {" · "}
            <Link href={hrefFor(locale, "/cookies")} className="hover:text-fg">
              {t.cookies}
            </Link>
            {" · "}
            {t.miamiPresence}
          </p>
        </div>
      </div>
    </footer>
  );
}
