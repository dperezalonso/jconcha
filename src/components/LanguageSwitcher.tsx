"use client";

import { hreflangCode, locales, type Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/path";
import { getUi } from "@/i18n/ui";

export function LanguageSwitcher({
  locale,
  path,
  compact = false,
}: {
  locale: Locale;
  path: string;
  compact?: boolean;
}) {
  const t = getUi(locale);

  return (
    <nav
      aria-label={t.languagesAria}
      className={`lang-switch mono flex shrink-0 items-center whitespace-nowrap border border-hairline-strong px-3 py-2 ${compact ? "gap-3" : "gap-2"}`}
    >
      {locales.map((next, index) => {
        const active = next === locale;
        return (
          <span key={next} className="flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden className="text-fg-muted/50">
                ·
              </span>
            ) : null}
            <a
              href={localizedPath(next, path)}
              hrefLang={hreflangCode[next]}
              lang={next}
              aria-current={active ? "page" : undefined}
              aria-label={t.langName[next]}
              onClick={(event) => {
                event.preventDefault();
                window.location.assign(localizedPath(next, path));
              }}
              className={`tracking-[0.16em] no-underline transition-colors duration-300 ${
                active ? "text-ember" : "text-fg-muted hover:text-fg"
              }`}
            >
              {next.toUpperCase()}
            </a>
          </span>
        );
      })}
    </nav>
  );
}
