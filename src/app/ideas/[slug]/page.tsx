import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Atmosphere } from "@/components/Atmosphere";
import { Cta } from "@/components/Cta";
import { getAllPosts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: "/" },
    robots: { index: false, follow: false },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [site.fullName],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: site.fullName,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/ideas/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <section className="relative isolate overflow-hidden border-b border-hairline bg-bone">
        <Atmosphere variant="soft" />
        <div className="shell relative z-10 max-w-3xl! pb-16 pt-36 md:pb-20 md:pt-48">
          <Link
            href="/ideas"
            className="mono link-underline text-fg-muted hover:text-fg"
          >
            ← Ideas
          </Link>
          <p className="mono intro mt-10 text-ember">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {" · "}
            {post.readingMinutes} min
          </p>
          <h1
            className="display intro mt-6 text-[clamp(2.2rem,6vw,4.2rem)] text-balance"
            style={{ "--intro-delay": "0.1s" } as React.CSSProperties}
          >
            {post.title}
          </h1>
          <p
            className="intro mt-7 text-[1.15rem] leading-relaxed text-fg-soft"
            style={{ "--intro-delay": "0.2s" } as React.CSSProperties}
          >
            {post.description}
          </p>
        </div>
      </section>

      <article className="relative bg-bone">
        <div className="shell max-w-3xl! py-16 md:py-24">
          <div className="space-y-7 text-[1.1rem] leading-[1.75] text-fg-soft">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="reveal">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-x-4 gap-y-2 border-t border-hairline pt-8">
            {post.tags.map((tag) => (
              <span key={tag} className="mono text-fg-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <section className="on-bone border-t border-hairline">
        <div className="shell py-16 md:py-24">
          <p className="mono text-ember">Seguir leyendo</p>
          <div className="mt-8 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/ideas/${other.slug}`}
                className="group bg-bone p-7 no-underline md:p-9"
              >
                <p className="mono text-fg-muted">
                  {other.readingMinutes} min
                </p>
                <h2 className="display mt-4 text-[1.6rem] transition-colors duration-300 group-hover:text-ember">
                  {other.title}
                </h2>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Cta href="/contacto">Hablemos de tu proyecto</Cta>
          </div>
          <p className="mt-8 text-sm text-fg-muted">
            Escrito por {site.fullName}, cofundador y Director de Marketing de
            SANTACONCHA.
          </p>
        </div>
      </section>
    </>
  );
}
