import Link from "next/link";
import { Mail, MapPin, Users } from "lucide-react";
import { siteConfig } from "@/data/content";
import { mailtoHref } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-navy border-t border-white/10 bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-5">
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Navigate</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-slate-400" aria-hidden="true" />
              <a href={mailtoHref("Enquiry")} className="break-all hover:text-white">
                {siteConfig.contactEmail}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-slate-400" aria-hidden="true" />
              {siteConfig.locations}
            </li>
            <li className="flex items-start gap-3">
              <Users className="mt-0.5 size-4 shrink-0 text-slate-400" aria-hidden="true" />
              {siteConfig.teamSize}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-400 sm:px-6 lg:px-8">
          © {year} {siteConfig.siteName}. Information on this website is general in nature and does not constitute legal advice.
        </p>
      </div>
    </footer>
  );
}
