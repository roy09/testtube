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
  callsNote: "All client calls are with the Principal Consultant",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Publications", href: "/publications" },
  ],
  // Closing call-to-action band shown at the foot of each page.
  cta: {
    title: "Not sure where your gaps are?",
    body: "That is usually the right time to call. A short conversation will tell you whether you need a full onboarding package, a single piece of work, or nothing at all yet.",
  },
};

// ---------------------------------------------------------------------------
// 2. Homepage ( / )
// ---------------------------------------------------------------------------

export const homeContent = {
  hero: {
    headline: "Sound Legal Counsel. Practical HR Solutions.",
    subheadline:
      "Independent legal, HR and compliance advice for businesses and organisations in the UK. Whether it is a workplace dispute, a regulatory inspection or a decision you cannot afford to get wrong, we help you find the right way forward.",
    cta_primary: "Book a Consultation",
    cta_secondary: "Explore Services",
  },
  what_we_do: {
    eyebrow: "What we do",
    title: "Three areas, one joined-up approach",
    description:
      "Regulatory compliance and employment practice are the same problem seen from two sides. We work across both, so your policies, your contracts and your evidence say the same thing.",
    areas: [
      {
        title: "Supported accommodation & children’s homes",
        items: [
          "Gap analysis against the Regulations and Quality Standards",
          "Statement of Purpose drafting and review",
          "Core safeguarding and operational policy suites",
          "Notifications process and quality-monitoring framework",
          "Mock inspection and evidence-folder structure",
        ],
      },
      {
        title: "HR & employment law",
        items: [
          "Contracts of employment and staff handbooks",
          "Safer recruitment and pre-employment checks",
          "Probation, supervision and appraisal frameworks",
          "Disciplinary, grievance and capability casework",
          "Day-to-day advice on the awkward cases",
        ],
      },
      {
        title: "Staffing & employment businesses",
        items: [
          "Conduct Regulations and Agency Worker Regulations compliance",
          "Worker status, contracts and terms with hirers",
          "Right to work, vetting and onboarding processes",
          "Policy and process build-out for new agencies",
          "Ongoing advisory as you scale",
        ],
      },
    ],
  },
  how_it_works: {
    eyebrow: "How it works",
    title: "Fixed-fee onboarding, then support that fits",
    description:
      "Most clients start with a one-off onboarding package so the foundations are in place, then move onto a monthly retainer for advice, updates and oversight.",
    steps: [
      {
        title: "Introductory call",
        detail:
          "Thirty minutes, no charge. You tell us where you are and what is coming: registration, inspection, growth or a problem that needs solving now.",
      },
      {
        title: "Proposal and fixed fee",
        detail:
          "A written proposal setting out deliverables, timeframe and a fixed price. You know the cost before anything starts.",
      },
      {
        title: "Onboarding package",
        detail:
          "Gap analysis, policies, HR pack and inspection readiness, delivered over an agreed number of weeks with revision rounds built in.",
      },
      {
        title: "Monthly retainer",
        detail:
          "Ongoing advisory hours, legislation alerts and scheduled check-ins. Three-month minimum, then rolling with 30 days’ notice.",
      },
    ],
  },
  fees: {
    eyebrow: "Fees",
    title: "Priced upfront, not by surprise",
    description:
      "Every engagement is quoted before it begins. The figures below are starting points. The right level depends on the size of your service and what you already have in place.",
    items: [
      {
        label: "Onboarding package",
        figure: "from £1,250",
        detail: "One-off fixed fee. Three levels, from essential foundations through to full inspection readiness.",
      },
      {
        label: "Monthly retainer",
        figure: "from £295",
        per: "/ month",
        detail: "Advisory hours, legislation alerts and annual policy review. Three-month minimum, then rolling.",
      },
      {
        label: "Project & ad hoc work",
        figure: "on enquiry",
        detail: "Single policies, investigations, restructures or one-off reviews, quoted before work starts.",
      },
    ],
  },
  trust_badges: [
    "Called to the Bar - The Honourable Society of Lincoln’s Inn",
    "CIPD Level 7 - Strategic HR advice",
    "7+ Years Combined Professional Expertise - HR support and legal practice across a vast range of matters and multiple jurisdictions",
  ],
};

// ---------------------------------------------------------------------------
// Footer (every page)
// ---------------------------------------------------------------------------

export const footerContent = {
  summary: "HR, employment law and regulatory compliance for UK providers.",
  abn: "ABN 43 383 972 915",
  disclaimers: [
    "Joyee Praxis Advisory operates from Australia.",
    "Joyee Praxis Advisory provides HR, employment and regulatory consultancy. It is not a firm of solicitors and does not carry out reserved legal activities or provide litigation or advocacy services in England and Wales.",
    "Advice is provided to support your compliance. Legal responsibility for meeting the applicable Regulations and Quality Standards remains with the registered provider.",
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
      title: "Sponsor Licence Readiness & Compliance Support",
      description:
        "A pre-licence compliance audit of your HR systems, right-to-work processes, record-keeping and reporting procedures. We put the required policies and procedures in place before you apply, gather and organise the supporting documents your company needs, and explain the process. Afterwards, we support you with ongoing sponsor duties, mock audits and compliance-visit preparation.",
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
  summary:
    "Joyee Praxis Advisory is a lawyer-led HR and employment law consultancy for UK employers, with a specialism in Ofsted-regulated care.",
  intro:
    "We give small UK employers the HR and employment law capability that larger organisations keep in-house — delivered by a lawyer with operational experience inside regulated care settings.",
  problem: {
    eyebrow: "Why we exist",
    title: "The problem with helpline HR",
    paragraphs: [
      "If you are tied up with a popular subscription-based HR service, chances are you have to pick up the phone every time and explain your problem to an advisor you have never spoken to before. They don’t know your company’s unique context, and they can’t give you a solution that is practical and tailored to your problem. You are sent a template letter to fill in yourself and then run past them again. The next time you call, chances are you will be speaking to a different advisor.",
      "This is the gap Joyee Praxis Advisory is here to close. You deal with one advisor, who sends you completed documents and, rather than generic, run-of-the-mill advice, tells you what suits your situation specifically.",
    ],
  },
  comparison: {
    eyebrow: "Where we fit",
    title: "Process and law, before a claim exists",
    items: [
      { who: "HR consultants", what: "Advise on process but stop short of the law." },
      {
        who: "Employment solicitors",
        what: "Advise on the law but are usually instructed once the problem has already happened.",
      },
      { who: "Joyee Praxis", what: "Does both, on retainer, before a claim exists.", highlight: true },
    ],
  },
  track_record: {
    eyebrow: "Our track record",
    title: "Results in regulated care",
    items: [
      "Led supported accommodation clients to a Grade 1 Ofsted outcome",
      "Holds ongoing HR and legal retainers with UK children’s home operators, covering policy review, probation and performance management, and staff supervision",
      "Built a full policy framework for a registered children’s home, written to current legislation and operational reality rather than templates",
      "Our Principal Consultant is a lawyer who has completed the Bar Professional Training Course in the UK and holds a postgraduate-level strategic diploma in HR management",
    ],
  },
  praxis: {
    eyebrow: "The Praxis idea",
    quote: "Knowledge carried into action, rather than held as theory.",
    paragraphs: [
      "Unlike a coinage, praxis arrives with a meaning already attached, and that meaning is the reason it was chosen. From the Greek praxis: practice, action, doing. In Aristotle it is the term for knowledge carried into action rather than held as theory.",
      "That is exactly what this practice sells. We don’t hand out vague opinions on the law. We translate the law into exactly what you have to do when you sit at your desk.",
    ],
  },
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
