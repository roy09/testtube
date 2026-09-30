import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { regulatoryContent, siteConfig } from "@/data/content";
import { mailtoHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regulatory information",
  description: regulatoryContent.intro,
};

/** Shows the contact email as a mail link wherever it appears in a paragraph. */
function WithEmailLink({ text }: { text: string }) {
  const email = siteConfig.contactEmail;
  const [before, ...after] = text.split(email);
  if (after.length === 0) return <>{text}</>;
  return (
    <>
      {before}
      <a href={mailtoHref("Complaint")} className="font-medium text-navy underline underline-offset-4">
        {email}
      </a>
      {after.join(email)}
    </>
  );
}

export default function RegulatoryPage() {
  const { eyebrow, title, intro, sections } = regulatoryContent;

  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} subtitle={intro} />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">On this page</p>
              <ul className="mt-5 space-y-3 border-l border-line text-sm">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="-ml-px block border-l border-transparent pl-4 text-ink hover:border-navy hover:text-navy">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="lg:col-span-8 lg:col-start-5">
            {sections.map((section, i) => (
              <article
                key={section.id}
                id={section.id}
                className={`scroll-mt-28 ${i > 0 ? "mt-12 border-t border-line pt-12" : ""}`}
              >
                <h2 className="text-2xl leading-tight sm:text-3xl">{section.title}</h2>
                <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>
                      <WithEmailLink text={p} />
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
