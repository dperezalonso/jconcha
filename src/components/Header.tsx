"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LogoFull, LogoMark } from "@/components/Logo";
import type { Locale } from "@/i18n/config";
import { hrefFor, localeFromPath, localizedPath, stripLocale } from "@/i18n/path";
import { getUi } from "@/i18n/ui";
import { site } from "@/lib/site";

export function Header({ locale, path }: { locale: Locale; path: string }) {
  const pathname = usePathname();
  const [live, setLive] = useState<{ locale: Locale; path: string } | null>(null);
  const currentLocale = live?.locale ?? locale;
  const currentPath = live?.path ?? path;
  const t = getUi(currentLocale);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setLive({
      locale: localeFromPath(pathname),
      path: stripLocale(pathname),
    });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white transition-shadow duration-500 ${
        scrolled || open
          ? "border-hairline shadow-[0_1px_18px_rgba(18,21,28,0.06)]"
          : "border-hairline"
      }`}
    >
      <div className="shell flex items-center justify-between gap-4 py-4 md:gap-6 md:py-5">
        <Link
          href={localizedPath(currentLocale, "/")}
          onClick={() => setOpen(false)}
          className="logo-link group flex items-center leading-none no-underline"
          aria-label={t.homeAria}
        >
          <span className="hidden items-center sm:flex">
            <LogoFull />
          </span>
          <span className="flex items-center sm:hidden">
            <LogoMark className="h-10 w-12 transition-colors duration-300 group-hover:text-ember" />
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex lg:gap-8"
          aria-label={t.navAria}
        >
          {t.nav.map((item) => {
            const href = hrefFor(currentLocale, item.path);
            const active =
              currentPath === item.path || currentPath.startsWith(`${item.path}/`);
            return (
              <Link
                key={item.path}
                href={href}
                className={`mono link-underline whitespace-nowrap ${
                  active ? "text-ember" : "text-fg-soft hover:text-fg"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.social.agency}
            target="_blank"
            rel="noopener noreferrer"
            className="mono shrink-0 whitespace-nowrap border border-hairline-strong px-4 py-2.5 !tracking-[0.16em] no-underline transition-colors duration-300 hover:border-ember hover:text-ember"
          >
            SANTACONCHA ↗
          </a>
          <LanguageSwitcher locale={currentLocale} path={currentPath} />
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher locale={currentLocale} path={currentPath} />
          <button
            type="button"
            className="mono flex items-center gap-2 border border-hairline-strong px-4 py-2.5"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.close : t.menu}
          </button>
        </div>
      </div>

      <div className="relative h-px w-full bg-hairline">
        <div className="scroll-progress absolute inset-0 bg-ember" />
      </div>

      {open ? (
        <div
          id="menu-movil"
          className="h-[calc(100svh-4.25rem)] overflow-y-auto bg-white px-5 pb-24 pt-8 lg:hidden"
        >
          <nav className="flex flex-col" aria-label={t.navMobileAria}>
            {t.nav.map((item, i) => (
              <Link
                key={item.path}
                href={hrefFor(currentLocale, item.path)}
                onClick={() => setOpen(false)}
                className="display intro border-b border-hairline py-5 text-[2.4rem] no-underline"
                style={{ "--intro-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.social.agency}
              target="_blank"
              rel="noopener noreferrer"
              className="display intro border-b border-hairline py-5 text-[2.4rem] text-ember no-underline"
              style={{ "--intro-delay": "240ms" } as React.CSSProperties}
            >
              SANTACONCHA ↗
            </a>
          </nav>
          <p className="mono mt-10 text-fg-muted">{site.email}</p>
          <p className="mono mt-2 text-fg-muted">{t.miamiPresence}</p>
        </div>
      ) : null}
    </header>
  );
}
