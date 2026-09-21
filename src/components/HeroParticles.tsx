"use client";

import { useEffect, useRef } from "react";

/**
 * Partículas con deriva propia atraídas por el imán de la hero.
 * El cursor las captura al acercarse. Clic o toque: explosión y vuelta al origen.
 */
export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let frame = 0;
    let attractorX = -9999;
    let attractorY = -9999;
    let hasAttractor = false;
    let pointerX = -9999;
    let pointerY = -9999;
    let hasPointer = false;
    let recoverUntil = 0;
    let captureLockedUntil = 0;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    type Particle = {
      x: number;
      y: number;
      hx: number;
      hy: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      captured: boolean;
    };

    const particles: Particle[] = [];
    const COUNT = 96;
    const MAX_SPEED = 8;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          hx: x,
          hy: y,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: 1.2 + Math.random() * 2.6,
          a: 0.25 + Math.random() * 0.45,
          captured: false,
        });
      }
    };

    const updateAttractor = () => {
      const magnet = parent.querySelector<HTMLElement>("[data-hero-magnet]");
      if (!magnet) {
        hasAttractor = false;
        return;
      }

      const parentRect = parent.getBoundingClientRect();
      const magnetRect = magnet.getBoundingClientRect();
      attractorX = magnetRect.left + magnetRect.width * 0.53 - parentRect.left;
      attractorY = magnetRect.top + magnetRect.height * 0.5 - parentRect.top;
      hasAttractor = true;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = parent.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
      hasPointer = true;
    };

    const onLeave = () => {
      hasPointer = false;
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      const now = performance.now();
      recoverUntil = now + 1250;
      captureLockedUntil = now + 1850;
      updateAttractor();

      for (const p of particles) {
        if (!p.captured) continue;
        const dx = p.hx - p.x;
        const dy = p.hy - p.y;
        const dist = Math.hypot(dx, dy) || 1;
        const blast = 8 + Math.random() * 5;
        p.vx = (dx / dist) * blast;
        p.vy = (dy / dist) * blast;
        p.captured = false;
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      frame += 1;
      if (frame % 2 === 0) updateAttractor();

      const now = performance.now();
      const recovering = now < recoverUntil;
      const canCapture = now > captureLockedUntil;
      const attractRadius = Math.min(Math.max(width * 0.42, 210), 390);
      const cursorRadius = Math.min(Math.max(width * 0.12, 88), 132);

      for (const p of particles) {
        if (recovering) {
          p.vx += (p.hx - p.x) * 0.024;
          p.vy += (p.hy - p.y) * 0.024;
        } else if (hasAttractor) {
          const dx = attractorX - p.x;
          const dy = attractorY - p.y;
          const dist = Math.hypot(dx, dy) || 1;

          if (canCapture && !p.captured) {
            if (finePointer && hasPointer) {
              const pointerDistance = Math.hypot(
                pointerX - p.x,
                pointerY - p.y,
              );
              if (pointerDistance < cursorRadius) p.captured = true;
            } else if (!finePointer && dist < attractRadius) {
              p.captured = true;
            }
          }

          if (p.captured) {
            const force = (attractRadius - dist) / attractRadius;
            const pull = 0.11 * Math.max(force, 0.18);
            const orbit =
              (p.a > 0.48 ? 1 : -1) * Math.max(force, 0.1) * 0.014;
            p.vx += (dx / dist) * pull + (-dy / dist) * orbit;
            p.vy += (dy / dist) * pull + (dx / dist) * orbit;

            if (dist < 46) {
              p.vx -= (dx / dist) * 0.09;
              p.vy -= (dy / dist) * 0.09;
            }
          } else {
            p.vx += (p.hx - p.x) * 0.0005;
            p.vy += (p.hy - p.y) * 0.0005;
          }
        }

        p.vx += (Math.random() - 0.5) * 0.03;
        p.vy += (Math.random() - 0.5) * 0.03;

        const speed = Math.hypot(p.vx, p.vy);
        if (speed > MAX_SPEED) {
          p.vx = (p.vx / speed) * MAX_SPEED;
          p.vy = (p.vy / speed) * MAX_SPEED;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= recovering ? 0.9 : 0.965;
        p.vy *= recovering ? 0.9 : 0.965;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.fillStyle = `rgba(224, 61, 15, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    seed();
    updateAttractor();
    tick();

    const ro = new ResizeObserver(() => {
      resize();
      seed();
      updateAttractor();
    });
    ro.observe(parent);
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    parent.addEventListener("pointerdown", onDown);
    window.addEventListener("scroll", updateAttractor, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
      parent.removeEventListener("pointerdown", onDown);
      window.removeEventListener("scroll", updateAttractor);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1]"
    />
  );
}
