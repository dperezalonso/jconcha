/** Capas de fondo: gradientes en deriva, retícula, viñeta y grano. */
export function Atmosphere({ variant = "full" }: { variant?: "full" | "soft" }) {
  return (
    <div aria-hidden className="field">
      {variant === "full" ? (
        <>
          <div className="mesh absolute inset-0" />
          <div className="solar-horizon" />
        </>
      ) : null}

      <div
        className="field-blob blob-ember drift-a"
        style={{
          width: "58vw",
          height: "58vw",
          top: variant === "full" ? "-18%" : "-40%",
          right: "-14%",
          opacity: variant === "full" ? 0.9 : 0.4,
        }}
      />
      <div
        className="field-blob blob-abyss drift-b"
        style={{
          width: "52vw",
          height: "52vw",
          bottom: "-22%",
          left: "-16%",
          opacity: variant === "full" ? 0.85 : 0.45,
        }}
      />
      {variant === "full" ? (
        <div
          className="field-blob blob-amber drift-b"
          style={{
            width: "34vw",
            height: "34vw",
            top: "26%",
            left: "24%",
            opacity: 0.55,
          }}
        />
      ) : null}

      <div className="vignette absolute inset-0" />
    </div>
  );
}
