/**
 * Firma de marca del hero.
 * Javier = tinta sólida (máxima legibilidad). Concha = acento ember.
 */
export function Wordmark({ lines }: { lines: readonly string[] }) {
  const [first, ...rest] = lines;

  return (
    <h1 className="wordmark" aria-label={lines.join(" ")}>
      <span className="wordmark-line wordmark-solid">{first}</span>
      {rest.map((line) => (
        <span key={line} className="wordmark-line wordmark-accent">
          {line}
        </span>
      ))}
    </h1>
  );
}
