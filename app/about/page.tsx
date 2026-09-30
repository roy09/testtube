import type { Metadata } from "next";
import { BadgeCheck, Check, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { aboutContent, homeContent, siteConfig } from "@/data/content";
import { mailtoHref, splitCredential } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.summary,
};

const eyebrowClass = "text-xs font-semibold uppercase tracking-[0.2em] text-ink";

export default function AboutPage() {
  const { problem, comparison, track_record, praxis } = aboutContent;

  return (
    <>
      <PageHeader eyebrow="About" title={aboutContent.title} subtitle={aboutContent.summary} />

      {/* Intro + why we exist, with credentials alongside */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-7">
            <p className="font-serif text-xl leading-relaxed text-navy sm:text-2xl">{aboutContent.intro}</p>

            <div className="mt-14 border-t border-line pt-12">
              <p className={eyebrowClass}>{problem.eyebrow}</p>
              <h2 className="mt-4 text-3xl leading-tight">{problem.title}</h2>
              <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink">
                {problem.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
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
                  <Phone className="mt-0.5 size-4 shrink-0 text-ink" aria-hidden="true" />
                  {siteConfig.callsNote}
                </li>
              </ul>

              <ButtonLink href={mailtoHref()} className="mt-8 w-full">
                {homeContent.hero.cta_primary}
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      {/* Where we fit */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className={eyebrowClass}>{comparison.eyebrow}</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{comparison.title}</h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {comparison.items.map((item) => {
              const highlight = "highlight" in item;
              return (
                <li
                  key={item.who}
                  className={highlight ? "on-navy bg-navy p-8 text-white" : "border border-line bg-white p-8"}
                >
                  <h3 className="text-xl">{item.who}</h3>
                  <p className={`mt-3 leading-relaxed ${highlight ? "text-slate-300" : "text-ink"}`}>{item.what}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Track record */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className={eyebrowClass}>{track_record.eyebrow}</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{track_record.title}</h2>
          <ul className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
            {track_record.items.map((item) => (
              <li key={item} className="flex gap-4 bg-white p-8 leading-relaxed text-navy">
                <Check className="mt-1 size-5 shrink-0 text-navy" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Praxis idea */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-5">
            <p className={eyebrowClass}>{praxis.eyebrow}</p>
            <blockquote className="mt-6 border-l-2 border-navy pl-6 font-serif text-2xl italic leading-snug text-navy sm:text-3xl">
              {praxis.quote}
            </blockquote>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink lg:col-span-6 lg:col-start-7">
            {praxis.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
