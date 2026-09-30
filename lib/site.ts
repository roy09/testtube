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
