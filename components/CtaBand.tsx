import { ArrowRight, Mail } from "lucide-react";
import { homeContent, siteConfig } from "@/data/content";
import { mailtoHref } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";

export function CtaBand() {
  return (
    <section className="on-navy bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight sm:text-4xl">{siteConfig.cta.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">{siteConfig.cta.body}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <ButtonLink href={mailtoHref()} variant="light">
            <Mail className="size-4" aria-hidden="true" />
            {homeContent.hero.cta_primary}
          </ButtonLink>
          <ButtonLink href="/services" variant="outline-light">
            {homeContent.hero.cta_secondary}
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
