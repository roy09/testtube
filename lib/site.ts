import { publicationsContent, siteConfig, type Article } from "@/data/content";

export function mailtoHref(subject = "Consultation Request") {
  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}`;
}

/** 15 August 2026 */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Newest first. Replace the body with a CMS / markdown loader when ready. */
export function getArticles(): Article[] {
  return [...publicationsContent.articles].sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Splits a credential like "Advocate - District and Sessions Judge Court" or
 * "Title (Detail)" into a title and a qualifier line.
 */
export function splitCredential(text: string): { title: string; detail?: string } {
  const dash = text.split(" - ");
  if (dash.length > 1) return { title: dash[0], detail: dash.slice(1).join(" - ") };
  const paren = text.match(/^(.*?)\s*\((.+)\)$/);
  if (paren) return { title: paren[1], detail: paren[2] };
  return { title: text };
}
