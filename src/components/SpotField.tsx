"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { HeroParticles } from "@/components/HeroParticles";

/**
 * Campo atmosférico reactivo al cursor + partículas.
 */
export function SpotField({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      className={`spot-field ${className}`}
      onPointerMove={move}
    >
      <HeroParticles />
      {children}
    </div>
  );
}
