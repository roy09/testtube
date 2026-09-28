"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { homeContent, siteConfig } from "@/data/content";
import { mailtoHref } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

function normalise(path: string) {
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

export function Header() {
  const pathname = normalise(usePathname() ?? "/");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {siteConfig.navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-sm font-medium transition-colors ${
                      active ? "text-navy" : "text-ink hover:text-navy"
                    } after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-navy after:transition-transform ${
                      active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={mailtoHref()}>{homeContent.hero.cta_primary}</ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-sm text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {siteConfig.navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block border-b border-line py-3.5 text-base ${
                      active ? "font-semibold text-navy" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="py-4">
              <ButtonLink href={mailtoHref()} className="w-full" onClick={() => setOpen(false)}>
                {homeContent.hero.cta_primary}
              </ButtonLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
