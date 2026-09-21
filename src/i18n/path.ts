import {
  defaultLocale,
  isLocale,
  type Locale,
} from "@/i18n/config";

export function stripLocale(pathname: string): string {
  const clean = pathname || "/";
  const parts = clean.split("/").filter(Boolean);
  if (parts[0] && isLocale(parts[0])) {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return clean.startsWith("/") ? clean : `/${clean}`;
}

export function localeFromPath(pathname: string): Locale {
  const first = (pathname || "/").split("/").filter(Boolean)[0];
  return first && isLocale(first) ? first : defaultLocale;
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function hrefFor(locale: Locale, path: string): string {
  if (/^(https?:|mailto:|#)/i.test(path)) return path;
  return localizedPath(locale, path);
}

export function switchLocalePath(pathname: string, next: Locale): string {
  return localizedPath(next, stripLocale(pathname));
}
