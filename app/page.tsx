import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CredentialDetail } from "@/components/CredentialDetail";
import { CtaBand } from "@/components/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import { homeContent, servicesContent, siteConfig } from "@/data/content";
import { mailtoHref } from "@/lib/site";

export default function HomePage() {
  const { hero, trust_badges, what_we_do, how_it_works, fees, flexible_terms } = homeContent;
  // A headline with two sentences splits into two lines, the second one quieter.
  const [headlineLead, ...headlineRest] = hero.headline.split(/(?<=\.)\s+/);

  return (
    <>
      {/* Hero */}
      <section className="on-navy relative overflow-hidden bg-navy text-white">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-32">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{siteConfig.tagline}</p>
            <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              {headlineLead}
              {headlineRest.length > 0 && (
                <span className="mt-2 block italic text-slate-300">{headlineRest.join(" ")}</span>
              )}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">{hero.subheadline}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={mailtoHref()} variant="light">
                {hero.cta_primary}
              </ButtonLink>
              <ButtonLink href="/services" variant="outline-light">
                {hero.cta_secondary}
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>

          <aside className="lg:col-span-5" aria-label="Practice overview">
            <div className="border border-white/15 bg-white/[0.03] p-8 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Practice areas</p>
              <ul className="mt-5 divide-y divide-white/10">
                {servicesContent.items.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services#${service.id}`}
                      className="group flex items-center gap-4 py-3.5 text-sm text-slate-200 hover:text-white"
                    >
                      <ServiceIcon name={service.icon} className="size-5 shrink-0 text-slate-400 group-hover:text-white" />
                      <span className="flex-1">{service.title}</span>
                      <ArrowRight
                        className="size-4 shrink-0 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <dl className="mt-6 grid gap-3 border-t border-white/10 pt-6 text-sm">
                <div className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-slate-400" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Client calls</dt>
                    <dd className="text-slate-300">{siteConfig.callsNote}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Credentials */}
      <section aria-label="Credentials" className="border-b border-line bg-white">
        <ul className="mx-auto grid max-w-6xl gap-px bg-line md:grid-cols-3">
          {trust_badges.map((badge) => (
            <li key={badge.title} className="flex gap-4 bg-white px-4 py-8 sm:px-6 lg:px-8">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-navy" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="font-serif text-lg leading-snug text-navy">{badge.title}</p>
                <CredentialDetail credential={badge} className="mt-1 text-sm leading-snug text-ink" />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* What we do */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHead eyebrow={what_we_do.eyebrow} title={what_we_do.title} description={what_we_do.description} />
          <ul className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-3">
            {what_we_do.areas.map((area) => (
              <li key={area.title} className="bg-white p-8">
                <h3 className="text-xl leading-snug">{area.title}</h3>
                <ul className="mt-5 space-y-3">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink">
                      <Check className="mt-1 size-4 shrink-0 text-navy" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHead eyebrow={how_it_works.eyebrow} title={how_it_works.title} description={how_it_works.description} />
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {how_it_works.steps.map((step, i) => (
              <li key={step.title} className="border-t border-slate-300 pt-6">
                <span className="font-serif text-3xl text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fees */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHead eyebrow={fees.eyebrow} title={fees.title} description={fees.description} />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {fees.items.map((fee) => (
              <li key={fee.label} className="border border-line p-8">
                <h3 className="text-2xl">{fee.label}</h3>
                <p className="mt-4 leading-relaxed text-ink">{fee.detail}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 border border-line bg-mist p-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <h3 className="text-2xl lg:col-span-3">{flexible_terms.title}</h3>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3 lg:col-span-9 lg:mt-0">
              {flexible_terms.points.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-navy" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy">{point.title}</p>
                    <p className="mt-1 leading-relaxed text-ink">{point.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function SectionHead({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-ink">{description}</p>
    </div>
  );
}
