import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "@/components/Magnetic";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  external?: boolean;
  className?: string;
};

export function Cta({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: Props) {
  const classes = `btn ${variant === "solid" ? "btn-solid" : "btn-ghost"} ${className}`;

  return (
    <Magnetic strength={0.28}>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
          <span aria-hidden>↗</span>
        </a>
      ) : (
        <Link href={href} className={classes}>
          {children}
          <span aria-hidden>→</span>
        </Link>
      )}
    </Magnetic>
  );
}
