import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { publicationsContent } from "@/data/content";
import { formatDate, getArticles, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("publications", "/publications/");

export default function PublicationsPage() {
  const articles = getArticles();

  return (
    <>
      <PageHeader eyebrow="Publications" title={publicationsContent.header} subtitle={publicationsContent.subtitle} />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          {articles.length === 0 ? (
            <p className="text-lg text-ink">New commentary is on its way. Please check back soon.</p>
          ) : (
            <ol className="divide-y divide-line border-y border-line">
              {articles.map((article) => (
                <li key={`${article.date}-${article.title}`}>
                  <article className="group relative grid gap-4 py-10 md:grid-cols-12 md:gap-8">
                    <div className="text-sm md:col-span-3">
                      <time dateTime={article.date} className="font-medium text-navy">
                        {formatDate(article.date)}
                      </time>
                      <p className="mt-1 text-ink">{article.publication}</p>
                    </div>
                    <div className="md:col-span-8">
                      <h2 className="text-2xl leading-snug sm:text-3xl">
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="decoration-1 underline-offset-4 after:absolute after:inset-0 group-hover:underline"
                        >
                          {article.title}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </h2>
                      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">{article.excerpt}</p>
                      <span
                        aria-hidden="true"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy"
                      >
                        Read article
                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
    </>
  );
}
