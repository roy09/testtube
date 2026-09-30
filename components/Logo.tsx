import Link from "next/link";
import { siteConfig } from "@/data/content";

// Stamp mark from the brand artwork (public/brand) with the name set in the site's own fonts.
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <Link href="/" className="inline-flex shrink-0 items-end gap-3" aria-label={`${siteConfig.siteName} — home`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimisation */}
      <img
        src={light ? "/brand/stamp-light.png" : "/brand/stamp.png"}
        alt=""
        width={151}
        height={160}
        className="h-12 w-auto"
      />
      <span className="flex flex-col items-center pb-0.5">
        <span className={`font-serif text-[1.6rem] font-semibold leading-none tracking-tight ${light ? "text-white" : "text-navy"}`}>
          Joyee Praxis
        </span>
        <span
          className={`mt-1.5 text-[0.6rem] font-semibold uppercase leading-none tracking-[0.4em] -mr-[0.4em] ${
            light ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Advisory
        </span>
      </span>
    </Link>
  );
}
