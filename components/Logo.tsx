import Link from "next/link";
import { siteConfig } from "@/data/content";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label={`${siteConfig.siteName} — home`}>
      <span
        aria-hidden="true"
        className={`grid size-9 place-items-center rounded-sm font-serif text-lg ${
          light ? "bg-white text-navy" : "bg-navy text-white"
        }`}
      >
        J
      </span>
      <span className={`font-serif text-xl tracking-tight ${light ? "text-white" : "text-navy"}`}>
        {siteConfig.siteName}
      </span>
    </Link>
  );
}
