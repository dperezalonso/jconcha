"use client";

import { useEffect, useRef } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/**
 * Imán geométrico inspirado en la C del monograma.
 * Sigue el ratón en escritorio y el dedo en táctil, orientándose hacia el contacto.
 */
export function HeroMagnet() {
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const magnet = magnetRef.current;
    const field = magnet?.closest<HTMLElement>(".spot-field");
    if (!magnet || !field) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    let raf = 0;
    let tracking = false;

    const paint = (
      x: number,
      y: number,
      rotateX: number,
      rotateY: number,
      rotateZ: number,
    ) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        magnet.style.setProperty("--magnet-x", `${x}px`);
        magnet.style.setProperty("--magnet-y", `${y}px`);
        magnet.style.setProperty("--magnet-rx", `${rotateX}deg`);
        magnet.style.setProperty("--magnet-ry", `${rotateY}deg`);
        magnet.style.setProperty("--magnet-rz", `${rotateZ}deg`);
      });
    };

    const rest = () => {
      field.classList.remove("magnet-is-active");
      paint(0, 0, -3, 7, -2);
    };

    const aim = (clientX: number, clientY: number, coarse: boolean) => {
      const rect = field.getBoundingClientRect();
      const magnetRect = magnet.getBoundingClientRect();
      const nx =
        clamp((clientX - rect.left) / Math.max(rect.width, 1), 0, 1) - 0.5;
      const ny =
        clamp((clientY - rect.top) / Math.max(rect.height, 1), 0, 1) - 0.5;
      const magnetX = magnetRect.left + magnetRect.width * 0.55;
      const magnetY = magnetRect.top + magnetRect.height * 0.48;
      const angle =
        (Math.atan2(clientY - magnetY, clientX - magnetX) * 180) / Math.PI;

      field.classList.add("magnet-is-active");
      paint(
        nx * (coarse ? 34 : 88),
        ny * (coarse ? 24 : 58),
        ny * (coarse ? -26 : -18),
        nx * (coarse ? 32 : 24),
        angle,
      );
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      tracking = true;
      aim(event.clientX, event.clientY, true);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "mouse") {
        aim(event.clientX, event.clientY, false);
        return;
      }

      if (!tracking) return;
      aim(event.clientX, event.clientY, true);
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      tracking = false;
      rest();
    };

    const onPointerLeave = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      rest();
    };

    const onScroll = () => {
      if (finePointer.matches || tracking) return;

      const rect = field.getBoundingClientRect();
      const progress = clamp(-rect.top / Math.max(rect.height * 0.72, 1), 0, 1);
      paint(
        progress * -12,
        progress * 42,
        -4 + progress * 7,
        8 - progress * 13,
        -5 + progress * 15,
      );
    };

    const onWindowMove = (event: PointerEvent) => {
      if (!tracking || event.pointerType === "mouse") return;
      aim(event.clientX, event.clientY, true);
    };

    field.addEventListener("pointerdown", onPointerDown, { passive: true });
    field.addEventListener("pointermove", onPointerMove, { passive: true });
    field.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointermove", onWindowMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      field.classList.remove("magnet-is-active");
      field.removeEventListener("pointerdown", onPointerDown);
      field.removeEventListener("pointermove", onPointerMove);
      field.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointermove", onWindowMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={magnetRef}
      data-hero-magnet
      aria-hidden
      className="hero-magnet"
    >
      <div className="hero-magnet-stage">
        <svg viewBox="0 0 310 292" className="h-full w-full">
          <defs>
            <linearGradient id="magnet-face" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ff6a34" />
              <stop offset="0.48" stopColor="#e03d0f" />
              <stop offset="1" stopColor="#9f2609" />
            </linearGradient>
            <linearGradient id="magnet-pole" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="0.52" stopColor="#e8e6df" />
              <stop offset="1" stopColor="#aaa9a4" />
            </linearGradient>
            <linearGradient id="magnet-edge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#5f1608" />
              <stop offset="1" stopColor="#12151c" />
            </linearGradient>
            <filter id="magnet-shadow" x="-30%" y="-30%" width="170%" height="180%">
              <feDropShadow
                dx="8"
                dy="14"
                stdDeviation="12"
                floodColor="#12151c"
                floodOpacity="0.32"
              />
            </filter>
          </defs>

          <g className="hero-magnet-field-lines">
            <path d="M225 76 C286 76 286 216 225 216" />
            <path d="M230 90 C272 90 272 202 230 202" />
            <path d="M235 105 C258 105 258 187 235 187" />
          </g>

          <g filter="url(#magnet-shadow)">
            <path
              d="M45 41H238V99H115V193H238V251H45Z"
              fill="url(#magnet-edge)"
              transform="translate(12 11)"
            />
            <path
              d="M45 41H238V99H115V193H238V251H45Z"
              fill="url(#magnet-face)"
            />
            <path
              d="M57 54H218V65H92V221H57Z"
              fill="rgba(255,255,255,0.2)"
            />

            <path d="M238 41L250 52V110L238 99Z" fill="#9c9b96" />
            <path d="M238 193L250 204V262L238 251Z" fill="#9c9b96" />
            <rect x="184" y="41" width="54" height="58" fill="url(#magnet-pole)" />
            <rect x="184" y="193" width="54" height="58" fill="url(#magnet-pole)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
