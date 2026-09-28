import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { servicesContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description: servicesContent.subtitle,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title={servicesContent.header} subtitle={servicesContent.subtitle} />

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8 lg:py-24">
          {servicesContent.items.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
