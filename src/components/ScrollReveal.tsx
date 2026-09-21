"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * El contenido .reveal nace SIEMPRE visible.
 * Solo se oculta un nodo cuando este efecto lo ha marcado como `wait`
 * y ya hay un observer escuchándolo. Si el JS falla, se remonta la página
 * o hay un error de hidratación, los bloques no desaparecen.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const inView = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.98 && rect.bottom > 0;
    };

    const show = (el: HTMLElement) => {
      el.dataset.reveal = "in";
    };

    const observer = reduced
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              show(entry.target as HTMLElement);
              observer?.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -4% 0px", threshold: 0.05 },
        );

    const prepare = (el: HTMLElement) => {
      if (el.dataset.reveal === "in") return;
      if (reduced || inView(el)) {
        show(el);
        return;
      }
      el.dataset.reveal = "wait";
      observer?.observe(el);
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach(prepare);
    };

    scan();
    document.documentElement.classList.add("js");

    const root = document.getElementById("contenido") ?? document.body;
    const mutations = new MutationObserver(scan);
    mutations.observe(root, { childList: true, subtree: true });

    const fallback = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach(show);
    }, 2500);

    return () => {
      window.clearTimeout(fallback);
      observer?.disconnect();
      mutations.disconnect();
      document
        .querySelectorAll<HTMLElement>('.reveal[data-reveal="wait"]')
        .forEach(show);
    };
  }, [pathname]);

  return null;
}
