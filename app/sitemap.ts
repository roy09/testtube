import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...siteConfig.navigation, ...siteConfig.legalLinks].map((item) => ({
    url: `${siteConfig.siteUrl}${item.href === "/" ? "/" : `${item.href}/`}`,
  }));
}
