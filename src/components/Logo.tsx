type LogoProps = {
  className?: string;
  title?: string;
  inverse?: boolean;
};

/** Monograma geométrico: J y C son reflejos exactos de tres trazos. */
export function LogoMark({
  className = "h-10 w-12",
  title = "JC",
  inverse = false,
}: LogoProps) {
  return (
    <span
      className={`logo-mark inline-flex shrink-0 ${className}`}
      role="img"
      aria-label={title}
    >
      <svg
        viewBox="0 0 120 96"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="120" height="96" fill={inverse ? "#f7f5f0" : "#12151c"} />
        <g fill={inverse ? "#12151c" : "#f7f5f0"}>
          <rect x="12" y="23" width="44" height="12" />
          <rect x="44" y="23" width="12" height="50" />
          <rect x="12" y="61" width="44" height="12" />
        </g>
        <g fill="#e03d0f">
          <rect x="64" y="23" width="44" height="12" />
          <rect x="64" y="23" width="12" height="50" />
          <rect x="64" y="61" width="44" height="12" />
        </g>
      </svg>
    </span>
  );
}

export function LogoFull({ className = "", inverse = false }: LogoProps) {
  return (
    <span
      className={`logo-lockup ${inverse ? "logo-lockup--inverse" : ""} ${className}`}
    >
      <LogoMark inverse={inverse} />
      <span className="logo-stack" aria-hidden>
        <span className="logo-stack-javier">Javier</span>
        <span className="logo-stack-concha">Concha</span>
      </span>
    </span>
  );
}
