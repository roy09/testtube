import { publicationsContent, siteConfig, type Article } from "@/data/content";

export function mailtoHref(subject = "Consultation Request") {
  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}`;
}

/** 15 August 2026 */
/** "2023" → "2023", "2023-05" → "May 2023", "2023-05-14" → "14 May 2023". */
export function formatDate(iso: string) {
  const parts = iso.split("-");
  if (parts.length === 1) return iso;
  return new Date(`${parts.length === 2 ? `${iso}-01` : iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: parts.length === 3 ? "numeric" : undefined,
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Newest first. Replace the body with a CMS / markdown loader when ready. */
export function getArticles(): Article[] {
  return [...publicationsContent.articles].sort((a, b) => b.date.localeCompare(a.date));
}
