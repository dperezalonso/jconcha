"use client";

import {
  useEffect,
  useRef,
  type PointerEvent,
  type ReactNode,
} from "react";

type Props = {
  items: ReactNode[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  /** Por defecto se puede arrastrar; el bucle no se acaba. */
  draggable?: boolean;
  /** Multiplicador de velocidad. 0.765 = 15% más lento sobre el ritmo base 0.9. */
  pace?: number;
};

/**
 * Marquesina infinita: avanza sola, se arrastra al ritmo del ratón
 * y al llegar al final reconecta con el primer ítem.
 */
export function Marquee({
  items,
  duration = 46,
  reverse = false,
  className = "",
  itemClassName = "",
  draggable = true,
  pace = 0.765,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const setWidth = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const raf = useRef(0);

  const copies = 3;
  const loop = Array.from({ length: copies }, () => items).flat();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      setWidth.current = track.scrollWidth / copies;
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const dir = reverse ? 1 : -1;
    const wrap = () => {
      const w = setWidth.current;
      if (w <= 0) return;
      while (offset.current <= -w) offset.current += w;
      while (offset.current > 0) offset.current -= w;
    };

    const tick = () => {
      if (!dragging.current && setWidth.current > 0) {
        const baseSpeed = Math.max(
          0.35,
          setWidth.current / (duration * 60),
        );
        offset.current += dir * baseSpeed * pace;
      }
      wrap();
      track.style.transform = `translate3d(${offset.current}px, 0, 0)`;
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
    };
  }, [copies, duration, reverse, items.length, pace]);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggable) return;
    dragging.current = true;
    lastX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    offset.current += e.clientX - lastX.current;
    lastX.current = e.clientX;
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      ref={hostRef}
      className={`marquee-host edge-fade overflow-hidden ${draggable ? "cursor-grab active:cursor-grabbing select-none" : ""} ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {loop.map((item, index) => (
          <div
            key={index}
            className={`shrink-0 ${itemClassName}`}
            aria-hidden={index >= items.length}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
