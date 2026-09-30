import type { Metadata } from "next";
import { BadgeCheck, Users } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { aboutContent, homeContent, siteConfig } from "@/data/content";
import { mailtoHref, splitCredential } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.bio_paragraphs[0],
};

export default function AboutPage() {
  const [lead, ...rest] = aboutContent.bio_paragraphs;

  return (
    <>
      <PageHeader eyebrow="About" title={aboutContent.title} />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-7">
            <p className="font-serif text-xl leading-relaxed text-navy sm:text-2xl">{lead}</p>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink">
              {rest.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border border-line bg-mist p-8 lg:sticky lg:top-28">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink">Credentials</h2>
              <ul className="mt-5 space-y-5">
                {homeContent.trust_badges.map((badge) => {
                  const { title, detail } = splitCredential(badge);
                  return (
                    <li key={badge} className="flex gap-3">
                      <BadgeCheck className="mt-0.5 size-5 shrink-0 text-navy" strokeWidth={1.5} aria-hidden="true" />
                      <div>
                        <p className="font-medium leading-snug text-navy">{title}</p>
                        {detail && <p className="mt-0.5 text-sm leading-snug text-ink">{detail}</p>}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <h2 className="mt-8 border-t border-line pt-8 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                The practice
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-navy">
                <li className="flex gap-3">
                  <Users className="mt-0.5 size-4 shrink-0 text-ink" aria-hidden="true" />
                  {siteConfig.teamSize}
                </li>
              </ul>

              <ButtonLink href={mailtoHref()} className="mt-8 w-full">
                {homeContent.hero.cta_primary}
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
