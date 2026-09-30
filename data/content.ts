/**
 * All site copy lives here so pages stay presentational.
 * Swap any of these exports for a CMS fetch later without touching components.
 */

export type IconName = "Shield" | "Scale" | "FileText" | "Users" | "Globe" | "Briefcase";

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  description: string;
};

export type Article = {
  title: string;
  publication: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  excerpt: string;
  link: string;
};

// ---------------------------------------------------------------------------
// 1. Global / meta
// ---------------------------------------------------------------------------

export const siteConfig = {
  siteName: "Joyee Praxis Advisory",
  siteUrl: "https://joyeepraxis.com",
  tagline: "Independent Legal, HR & Compliance Counsel",
  // Drives every "Book a Consultation" mailto link.
  contactEmail: "anupoma@joyeepraxis.com",
  locations: "United Kingdom | Australia",
  teamSize: "Lead Counsel + 3 Dedicated Specialists",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Publications", href: "/publications" },
  ],
  // Closing call-to-action band shown at the foot of each page.
  cta: {
    title: "Facing a legal, HR or compliance problem?",
    body: "Book a confidential consultation. Tell us what is happening and we will give you a clear view of your options and the next steps.",
  },
};

// ---------------------------------------------------------------------------
// 2. Homepage ( / )
// ---------------------------------------------------------------------------

export const homeContent = {
  hero: {
    headline: "Sound Legal Counsel. Practical HR Solutions.",
    subheadline:
      "Independent legal, HR and compliance advice for businesses and organisations in the UK and Australia. Whether it is a workplace dispute, a regulatory inspection or a decision you cannot afford to get wrong, we help you find the right way forward.",
    cta_primary: "Book a Consultation",
    cta_secondary: "Explore Services",
  },
  problems: {
    title: "Common problems we help with",
    subtitle: "Clients usually come to us with a specific issue. These are some of the most common.",
    items: [
      "A grievance, disciplinary or dismissal that needs handling carefully",
      "An Employment Tribunal claim, or the risk of one",
      "Restructures, redundancies and difficult people decisions",
      "An upcoming inspection, audit or regulator finding",
      "Policies, contracts or staff handbooks that are missing or out of date",
      "Data protection and GDPR questions",
      "Sponsoring overseas workers or a Home Office compliance visit",
      "Setting up a new service, or bidding for a contract or tender",
    ],
    footnote: "Don’t see your issue listed? Get in touch for an initial conversation.",
  },
  value_proposition: {
    title: "The Follow-the-Sun Advantage",
    description:
      "With Lead Counsel based in Australia and a dedicated three-person team, UK clients get overnight turnaround on drafting, reviews and advice. You send your requirements at close of business; the work is done while you sleep. Australian clients have the same team available in their own working hours.",
    steps: [
      {
        time: "UK close of business",
        title: "You brief us",
        detail: "Send the question, document or decision before you log off.",
      },
      {
        time: "Australian working day",
        title: "We draft and review",
        detail: "Lead Counsel and the team work the matter while the UK is offline.",
      },
      {
        time: "UK start of day",
        title: "Advice in your inbox",
        detail: "Reviewed drafts and clear recommendations, ready for your morning.",
      },
    ],
  },
  trust_badges: [
    "Called to the Bar - The Honourable Society of Lincoln’s Inn",
    "CIPD Level 7 (AHRI Recognised Pathway)",
    "Advocate - District and Sessions Judge Court",
    "7+ Years Combined Professional Expertise",
  ],
};

// ---------------------------------------------------------------------------
// 3. Services ( /services )
// ---------------------------------------------------------------------------

export const servicesContent: { header: string; subtitle: string; items: Service[] } = {
  header: "Advisory Services",
  subtitle:
    "Legal, HR and compliance support for organisations of every size, with particular depth in regulated sectors such as health and social care.",
  items: [
    {
      id: "employment-law",
      icon: "Scale",
      title: "Employment Law & Workplace Disputes",
      description:
        "Advice on grievances, disciplinaries, suspensions and dismissals, and on reducing Employment Tribunal risk. We help you make high-stakes people decisions fairly, lawfully and with a clear paper trail.",
    },
    {
      id: "hr-advisory",
      icon: "Users",
      title: "HR Advisory & Workforce Management",
      description:
        "Strategic HR support from recruitment and vetting through to restructures and exits. We design safer-recruitment frameworks, employment contracts and staff handbooks that hold up in practice.",
    },
    {
      id: "regulatory-compliance",
      icon: "Shield",
      title: "Regulatory Compliance & Governance",
      description:
        "Compliance audits, inspection readiness and governance advice for boards, directors and managers. We have deep experience of Ofsted-regulated services and apply the same rigour to other regulated environments.",
    },
    {
      id: "policies-contracts",
      icon: "FileText",
      title: "Policies, Contracts & Data Protection",
      description:
        "Drafting and review of policies, procedures and commercial documents, including safeguarding, data protection and GDPR frameworks, so your paperwork reflects how you actually operate.",
    },
    {
      id: "immigration",
      icon: "Globe",
      title: "Sponsor Licence & Immigration Compliance",
      description:
        "Sponsor-licence applications and audits, right-to-work checks, sponsorship cessation, and defining the worker-versus-contractor line to avoid Home Office enforcement.",
    },
    {
      id: "business-setup",
      icon: "Briefcase",
      title: "Business Setup, Tenders & Bids",
      description:
        "Support for new ventures and new services, from legal structure and registration to tender applications, quality narratives and Statements of Purpose.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 4. About ( /about )
// ---------------------------------------------------------------------------

export const aboutContent = {
  title: "Legal Expertise, Grounded in Practical Experience",
  bio_paragraphs: [
    "Anupoma Joyeeta Joyee is a dually qualified legal professional, called to the Bar at The Honourable Society of Lincoln’s Inn and practicing as an Advocate. With a CIPD Level 7 qualification (AHRI recognised pathway), she bridges the gap between employment law, day-to-day HR practice and regulatory compliance.",
    "Her background includes serving as Head of HR & Legal and Compliance Manager for regulated social-care providers across South Gloucestershire, Gloucestershire, Bristol and Wales. That front-line experience means she understands the pressures organisations face, whether it is a regulator’s finding, a sponsor-licence issue or a tribunal claim.",
  ],
};

// ---------------------------------------------------------------------------
// 5. Publications ( /publications )
// Shape mirrors a typical headless-CMS / markdown front-matter record.
// An empty list shows a "coming soon" message instead.
// ---------------------------------------------------------------------------

export const publicationsContent: { header: string; subtitle: string; articles: Article[] } = {
  header: "Publications & Legal Commentary",
  subtitle: "Commentary on employment law, HR practice, regulation and compliance.",
  articles: [
    // {
    //   title: "Article title",
    //   publication: "Newspaper / Journal Name",
    //   date: "2026-08-15",
    //   excerpt: "One or two sentences summarising the article.",
    //   link: "https://…",
    // },
  ],
};
