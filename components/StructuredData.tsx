import { businessProfile, homeContent, pageSeo, servicesContent, siteConfig } from "@/data/content";

/** Describes the business to search engines (schema.org JSON-LD). Not visible on the page. */
export function StructuredData() {
  const url = siteConfig.siteUrl;
  const { principal, areaServed } = businessProfile;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url: `${url}/`,
        name: siteConfig.siteName,
        inLanguage: "en-GB",
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#organization`,
        name: siteConfig.siteName,
        url: `${url}/`,
        email: siteConfig.contactEmail,
        description: pageSeo.home.description,
        slogan: homeContent.hero.headline,
        logo: `${url}/icon.png`,
        image: `${url}/opengraph-image.png`,
        areaServed: { "@type": "Country", name: areaServed },
        founder: { "@id": `${url}/#principal` },
        knowsAbout: servicesContent.items.map((service) => service.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Advisory Services",
          itemListElement: servicesContent.items.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: `${url}/services/#${service.id}`,
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${url}/#principal`,
        name: principal.name,
        jobTitle: principal.jobTitle,
        worksFor: { "@id": `${url}/#organization` },
        hasCredential: principal.credentials.map((name) => ({
          "@type": "EducationalOccupationalCredential",
          name,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so text can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}
