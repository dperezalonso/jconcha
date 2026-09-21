"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Proporción del desplazamiento respecto al tamaño del elemento. */
  strength?: number;
};

/** Envoltorio que atrae el contenido hacia el cursor (hover magnético). */
export function Magnetic({ children, className = "", strength = 0.32 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const move = (event: PointerEvent<HTMLSpanElement>) => {
    const node = ref.current;
    if (!node || event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (event.clientY - (rect.top + rect.height / 2)) * strength;
    node.classList.add("is-dragging");
    node.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
  };

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.classList.remove("is-dragging");
    node.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <span
      ref={ref}
      className={`magnetic inline-flex ${className}`}
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerUp={reset}
    >
      {children}
    </span>
  );
}
