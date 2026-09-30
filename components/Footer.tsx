import Link from "next/link";
import { Building2, Mail } from "lucide-react";
import { footerContent, siteConfig } from "@/data/content";
import { mailtoHref } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-navy border-t border-white/10 bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-5">
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{footerContent.summary}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Pages</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...siteConfig.navigation, ...siteConfig.legalLinks].map((item) => (
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
              <Building2 className="mt-0.5 size-4 shrink-0 text-slate-400" aria-hidden="true" />
              {footerContent.abn}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl space-y-3 px-4 py-8 text-xs leading-relaxed text-slate-400 sm:px-6 lg:px-8">
          {footerContent.disclaimers.map((text) => (
            <p key={text} className="max-w-4xl">
              {text}
            </p>
          ))}
          <p>
            © {year} {siteConfig.siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
