import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Ideas de marketing digital",
  description:
    "Artículos de Javier Concha sobre SEO, Google Ads, agencias y estrategia digital. Criterio de negocio, sin postureo.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
};

export default function IdeasPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        label="Ideas"
        title="Lo que funciona, contado sin teatro."
        lead="Frameworks, errores útiles y criterios que aplicamos en proyectos reales. Para quien construye marca, equipo o producto digital."
      />

      <section className="relative overflow-hidden bg-bone">
        <div aria-hidden className="mesh absolute inset-0 opacity-30" />
        <div className="shell relative z-10 py-16 md:py-24">
          <ul className="border-t border-hairline">
            {posts.map((post, index) => (
              <li
                key={post.slug}
                className="reveal border-b border-hairline"
                style={
                  { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
                }
              >
                <Link
                  href={`/ideas/${post.slug}`}
                  className="index-row grid gap-5 px-2 py-9 no-underline md:grid-cols-[11rem_1fr_auto] md:items-center md:gap-10 md:px-4 md:py-12"
                >
                  <p className="index-num mono text-fg-muted">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </time>
                    <span className="mt-2 block">
                      {post.readingMinutes} min
                    </span>
                  </p>
                  <div>
                    <h2 className="display text-[clamp(1.6rem,3.6vw,2.6rem)]">
                      {post.title}
                    </h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-fg-soft">
                      {post.description}
                    </p>
                    <p className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="mono text-fg-muted">
                          {tag}
                        </span>
                      ))}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="index-arrow hidden text-2xl text-ember md:block"
                  >
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
