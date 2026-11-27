import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { TrainingSessions } from "@/components/TrainingSessions";
import { siteConfig, trainingContent } from "@/data/content";
import { mailtoHref, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("training", "/training/");

export default function TrainingPage() {
  const { header, subtitle, emptyMessage, enquiry, sessions } = trainingContent;

  return (
    <>
      <PageHeader eyebrow="Training" title={header} subtitle={subtitle} />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <TrainingSessions sessions={sessions} emptyMessage={emptyMessage} />

          <p className="mt-12 text-ink">
            {enquiry}{" "}
            <a href={mailtoHref("Training enquiry")} className="font-semibold text-navy underline underline-offset-4">
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
