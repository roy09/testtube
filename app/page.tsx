import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Moon, Sunrise, Sunset, Users } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import { homeContent, servicesContent, siteConfig } from "@/data/content";
import { mailtoHref, splitCredential } from "@/lib/site";

const stepIcons = [Sunset, Moon, Sunrise];

export default function HomePage() {
  const { hero, problems, value_proposition, trust_badges } = homeContent;
  // "Sound Legal Counsel. Practical HR Solutions." → two lines, second one quieter.
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
                  <Users className="mt-0.5 size-4 shrink-0 text-slate-400" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Team</dt>
                    <dd className="text-slate-300">{siteConfig.teamSize}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Credentials */}
      <section aria-label="Credentials" className="border-b border-line bg-white">
        <ul className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {trust_badges.map((badge) => {
            const { title, detail } = splitCredential(badge);
            return (
              <li key={badge} className="flex gap-4 bg-white px-4 py-8 sm:px-6 lg:px-8">
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-navy" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="font-serif text-lg leading-snug text-navy">{title}</p>
                  {detail && <p className="mt-1 text-sm leading-snug text-ink">{detail}</p>}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Common problems */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">How we can help</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{problems.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink">{problems.subtitle}</p>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {problems.items.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line py-4 leading-relaxed text-navy">
                  <Check className="mt-1 size-4 shrink-0 text-ink" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-ink">
              {problems.footnote}{" "}
              <a href={mailtoHref("Enquiry")} className="font-semibold text-navy underline underline-offset-4">
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">How we work</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{value_proposition.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink">{value_proposition.description}</p>
          </div>

          <ol className="relative lg:col-span-6 lg:col-start-7">
            <span className="absolute bottom-8 left-6 top-8 w-px bg-slate-300" aria-hidden="true" />
            {value_proposition.steps.map((step, i) => {
              const Icon = stepIcons[i % stepIcons.length];
              return (
                <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
                  <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-slate-300 bg-white text-navy">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div className="pt-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">{step.time}</p>
                    <h3 className="mt-1.5 text-xl">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink">{step.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">Services</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{servicesContent.header}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink">{servicesContent.subtitle}</p>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-navy"
            >
              {hero.cta_secondary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {servicesContent.items.map((service) => (
              <li key={service.id} className="bg-white">
                <Link href={`/services#${service.id}`} className="group flex h-full gap-5 p-8 hover:bg-mist">
                  <ServiceIcon name={service.icon} className="size-7 shrink-0 text-navy" />
                  <div>
                    <h3 className="text-xl leading-snug">{service.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-navy">
                      Learn more
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
