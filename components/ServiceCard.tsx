import type { Service } from "@/data/content";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article
      id={service.id}
      className="group relative flex scroll-mt-28 flex-col border border-line bg-white p-8 transition-shadow hover:shadow-[0_12px_40px_-16px_rgb(15_23_42/0.25)] xl:p-10"
    >
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-sm bg-navy text-white">
          <ServiceIcon name={service.icon} className="size-6" />
        </span>
        <span className="font-serif text-3xl text-slate-300" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h2 className="mt-8 text-xl leading-snug sm:text-2xl lg:text-xl">{service.title}</h2>
      <p className="mt-4 leading-relaxed text-ink">{service.description}</p>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-navy transition-transform duration-300 group-hover:scale-x-100"
      />
    </article>
  );
}
