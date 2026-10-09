import type { Metadata } from "next";
import { pageSeo, publicationsContent, siteConfig, type Article } from "@/data/content";

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

/**
 * Title, description, canonical address and link-preview tags for a page.
 * `path` is the page's address with a trailing slash ("/about/"), matching the sitemap.
 */
export function pageMetadata(page: keyof typeof pageSeo, path: string): Metadata {
  const { title, description } = pageSeo[page];
  // Setting openGraph on a page replaces app/opengraph-image.png, so name the image again here.
  const image = { url: "/opengraph-image.png", width: 1200, height: 630, alt: siteConfig.siteName };
  return {
    title: page === "home" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.siteName,
      locale: "en_GB",
      url: path,
      title: page === "home" ? title : `${title} | ${siteConfig.siteName}`,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
}
