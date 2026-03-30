export type CVVariantSlug = "general" | "backend" | "fullstack";

export interface CVLabeledValue {
  label: string;
  value: string;
}

export interface CVContactLink {
  label: string;
  href?: string;
  value: string;
}

export interface CVTimelineEntry {
  title: string;
  subtitle: string;
  body?: string;
  bullets?: string[];
  tech?: string;
}

export interface CVProjectEntry {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
}

export interface CVSkillEntry {
  label: string;
  value: string;
}

export interface CVData {
  slug: CVVariantSlug;
  title: string;
  headline: string;
  personalInfo: CVLabeledValue[];
  contact: CVContactLink[];
  profile: string;
  experience: CVTimelineEntry[];
  education: CVTimelineEntry[];
  projects: CVProjectEntry[];
  skills: CVSkillEntry[];
}

const technicalFounderExperience: CVTimelineEntry = {
  title: "Technical Founder",
  subtitle: "Mar 2025 – Jan 2026 — nodes.garden (remote)",
  bullets: [
    "Founded and led the technical development of Web3/AI platform built with Ruby on Rails / PostgreSQL.",
    "Built APIs and internal tooling used for managing large-scale infrastructure. 25,000+ nodes deployed in a year.",
    "Scaled platform from 0 to 17,000+ users and six-figure revenue.",
    "Owned backend architecture, core domain modeling, background processing.",
    "Worked with browser automation, scraping, CAPTCHA bypassing and anti-detection techniques",
    "Assembled and managed a distributed team of 10 people including engineers, customer support, BD.",
    "Completed Techstars Web3 2025, XFounders Season 4 and Founder.University Cohort 9 programs.",
  ],
  tech: "Ruby on Rails, PostgreSQL, RSpec, GoodJob, Hotwire, TailwindCSS, Docker, fly.io",
};

const reinventedHospitalityExperience: CVTimelineEntry = {
  title: "Fullstack Ruby Engineer",
  subtitle: "Sep 2024 – Mar 2025 — reinvented-hospitality.com (remote)",
  bullets: [
    "Built and launched a full-cycle POS system (Rails + Hotwire) in under 3 months.",
    "Designed and delivered core domain features for restaurant and hotel operations.",
    "Delivered tax reports, data exports and operational tooling.",
  ],
  tech: "Ruby on Rails, PostgreSQL, Sidekiq, Hotwire, MiniTest, TailwindCSS, ViewComponent, AWS, Docker",
};

const xometryExperience: CVTimelineEntry = {
  title: "Backend Ruby Engineer",
  subtitle: "Oct 2022 – Sep 2024 — xometry.de (remote)",
  bullets: [
    "Worked on a large-scale manufacturing marketplace connecting hundreds of thousands of buyers & suppliers globally.",
    "Implemented & launched UK and TR regional apps under tight deadlines (1 month).",
    "Designed and implemented async intercompany communication systems with background processing and data consistency.",
    "Fully owned & managed Salesforce integrations/pipelines.",
    "Built foundational domain systems (HS codes, manufacturing attributes, pricing logic).",
    "Architected and executed migration of the multi-repo architecture into a unified platform.",
    "Built AI-powered HS codes search tool which cut down code search time for logistics team by 90%+",
  ],
  tech: "Ruby on Rails, ReactJS, RSpec, PostgreSQL, Sidekiq, GraphQL, RabbitMQ, Redis, Python, Airflow",
};

const earlierExperience: CVTimelineEntry = {
  title: "Backend Ruby Engineer",
  subtitle: "2019 – 2021 at sputnik8.com, igooods.ru, rubyroidlabs.com (remote)",
  body: "Backend development across e-commerce, travel, insurance, and internal tooling products. Both in-house and outsourcing projects from EU/US.",
  tech: "Ruby on Rails, ReactJS, VueJS, RSpec, PostgreSQL, Sidekiq, GraphQL, REST APIs, Heroku, AWS",
};

const earlyCareerExperience: CVTimelineEntry = {
  title: "Internships & Early Career",
  subtitle: "2017 – 2019",
  bullets: [
    "Yandex: Web Developer Intern. Python, ReactJS, GraphQL.",
    "Joint Institute for Nuclear Research: C++/CUDA Developer Intern.",
    "WorldQuant: Quantitative Research Consultant.",
  ],
};

const xFoundersEducation: CVTimelineEntry = {
  title: "XFounders Season 4",
  subtitle: "2025 — x-founders.com",
  body: "1 month on-site program involving dozens of startups and mentors, organized with Starknet Foundation",
};

const techstarsEducation: CVTimelineEntry = {
  title: "Techstars Web3 '25",
  subtitle: "2025 — techstars.com",
  body: "Participated in a 3-month startup accelerator program with onsite events in Dublin, London and New York",
};

const master'sEducation: CVTimelineEntry = {
  title: "Master's Degree in Applied Mathematics and Computer Science",
  subtitle: "2017–2019 — Saint Petersburg State University",
};

const bachelor'sEducation: CVTimelineEntry = {
  title: "Bachelor's Degree in Applied Mathematics and Computer Science",
  subtitle: "2013–2017 — Saint Petersburg State University",
};

const nodesGardenProject: CVProjectEntry = {
  title: "nodes.garden",
  body: "Web3/AI NaaS platform built with Ruby on Rails. Finalist of Backdrop Build V4–V6:",
  href: "https://backdropbuild.com/builds/nodesgarden",
  linkLabel: "backdropbuild.com/builds/nodesgarden",
};

const customsCodesProject: CVProjectEntry = {
  title: "customs.codes",
  body: "RAG customs codes AI classification tool built with Ruby on Rails. Finalist of Backdrop Build V3:",
  href: "https://backdropbuild.com/builds/v3/customscodes",
  linkLabel: "backdropbuild.com/builds/v3/customscodes",
};

const general: CVData = {
  slug: "general",
  title: "Resume",
  headline: "Senior Backend Engineer (Ruby on Rails)",
  personalInfo: [
    { label: "Name", value: "Ilya Lebedev" },
    { label: "Location", value: "Remote (US/EU time zones), B2B contract" },
    { label: "Languages", value: "Russian (Native), English (C2), Spanish (A1)" },
  ],
  contact: [
    { label: "Website", value: "ilyalebe.dev", href: "https://ilyalebe.dev" },
    { label: "Email", value: "ilya0lebedev@gmail.com" },
    {
      label: "LinkedIn",
      value: "ilya-lebedev-554225102",
      href: "https://www.linkedin.com/in/ilya-lebedev-554225102/",
    },
    { label: "Telegram", value: "@rubyminer" },
    { label: "GitHub", value: "lebedevilya", href: "https://github.com/lebedevilya" },
  ],
  profile:
    "Senior backend/product engineer with 8+ years of experience building and operating high-load distributed systems. Ex-founder (Techstars ‘25), built and scaled infrastructure-heavy platform to 17,000+ users and 25,000+ deployed nodes, handling large-scale orchestration, background processing and integrations. Strong focus on system design, PostgreSQL performance and production reliability. Experienced in taking ownership of complex systems end-to-end, from architecture to deployment and scaling.",
  experience: [
    technicalFounderExperience,
    reinventedHospitalityExperience,
    xometryExperience,
    earlierExperience,
    earlyCareerExperience,
  ],
  education: [
    xFoundersEducation,
    techstarsEducation,
    master'sEducation,
    bachelor'sEducation,
  ],
  projects: [nodesGardenProject, customsCodesProject],
  skills: [
    { label: "Languages", value: "Ruby, Javascript, Python" },
    { label: "Backend", value: "Ruby on Rails, REST/GraphQL APIs, distributed systems, domain modeling" },
    { label: "Databases", value: "PostgreSQL, Redis" },
    { label: "Async", value: "Sidekiq, SolidQueue, RabbitMQ" },
    { label: "Infra", value: "Docker, CI/CD, AWS, GCP, fly.io, Heroku, Kamal" },
    { label: "Observability", value: "Datadog, Sentry, Appsignal" },
    { label: "Frontend", value: "Hotwire, ReactJS" },
    { label: "AI", value: "LLM integrations, RAG, vector DBs" },
    { label: "Payments", value: "Stripe, PayPal, CloudPayments, Copperx & others" },
  ],
};

const backend: CVData = {
  ...general,
  slug: "backend",
  headline: "Senior Backend Engineer (Ruby on Rails, PostgreSQL, APIs)",
  profile:
    "Backend-focused Ruby engineer with 8+ years of experience building distributed systems, PostgreSQL-backed products, and production-critical infrastructure. Strong on system design, async processing, data consistency, and operational reliability. Comfortable owning the backend from architecture through deployment and scaling.",
  experience: [
    {
      ...technicalFounderExperience,
      bullets: [
        "Founded and led the technical development of a Web3/AI platform built with Ruby on Rails and PostgreSQL.",
        "Built APIs and internal tooling for large-scale infrastructure operations. 25,000+ nodes deployed in a year.",
        "Scaled platform from 0 to 17,000+ users and six-figure revenue.",
        "Owned backend architecture, core domain modeling, and background processing end to end.",
        "Worked with browser automation, scraping, CAPTCHA bypassing, and anti-detection techniques.",
        "Assembled and managed a distributed team of 10 people including engineers, customer support, and BD.",
        "Completed Techstars Web3 2025, XFounders Season 4 and Founder.University Cohort 9 programs.",
      ],
    },
    {
      ...reinventedHospitalityExperience,
      bullets: [
        "Built and launched a Rails + Hotwire POS system in under 3 months.",
        "Designed and delivered backend domain features for restaurant and hotel operations.",
        "Delivered tax reports, data exports, and operational tooling.",
      ],
    },
    {
      ...xometryExperience,
      bullets: [
        "Worked on a large-scale manufacturing marketplace connecting hundreds of thousands of buyers and suppliers globally.",
        "Implemented and launched UK and TR regional apps under tight deadlines (1 month).",
        "Designed and implemented async intercompany communication systems with background processing and data consistency.",
        "Fully owned and managed Salesforce integrations and pipelines.",
        "Built foundational backend domain systems (HS codes, manufacturing attributes, pricing logic).",
        "Architected and executed migration of the multi-repo architecture into a unified platform.",
        "Built an AI-powered HS codes search tool which cut code search time for the logistics team by 90%+.",
      ],
    },
    {
      ...earlierExperience,
      body: "Backend development across e-commerce, travel, insurance, and internal tooling products. Focused on Rails services, data flows, and integrations for EU/US clients.",
    },
    earlyCareerExperience,
  ],
  projects: [
    {
      title: "nodes.garden",
      body: "Rails-based Web3/AI infrastructure platform with heavy backend orchestration. Finalist of Backdrop Build V4–V6.",
      href: "https://backdropbuild.com/builds/nodesgarden",
      linkLabel: "backdropbuild.com/builds/nodesgarden",
    },
    {
      title: "customs.codes",
      body: "AI customs classification backend with Rails, RAG, and search workflows. Finalist of Backdrop Build V3.",
      href: "https://backdropbuild.com/builds/v3/customscodes",
      linkLabel: "backdropbuild.com/builds/v3/customscodes",
    },
  ],
  skills: [
    { label: "Backend", value: "Ruby on Rails, REST/GraphQL APIs, distributed systems, domain modeling" },
    { label: "Databases", value: "PostgreSQL, Redis, query optimization" },
    { label: "Async", value: "Sidekiq, SolidQueue, RabbitMQ" },
    { label: "Infra", value: "Docker, CI/CD, AWS, GCP, fly.io, Heroku, Kamal" },
    { label: "Observability", value: "Datadog, Sentry, Appsignal" },
    { label: "Languages", value: "Ruby, JavaScript, Python" },
    { label: "Frontend", value: "Hotwire, ReactJS" },
    { label: "AI", value: "LLM integrations, RAG, vector DBs" },
    { label: "Payments", value: "Stripe, PayPal, CloudPayments, Copperx & others" },
  ],
};

const fullstack: CVData = {
  ...general,
  slug: "fullstack",
  headline: "Senior Fullstack Engineer (Ruby on Rails, Hotwire, React)",
  profile:
    "Fullstack Ruby engineer with 8+ years shipping products end to end across backend systems, UIs, and operational tooling. Strong at turning product requirements into working Rails apps, with a practical bias toward delivery, maintainability, and production reliability.",
  experience: [
    {
      ...technicalFounderExperience,
      bullets: [
        "Founded and led the technical development of a Web3/AI platform built with Ruby on Rails / PostgreSQL.",
        "Built APIs, internal tooling, and customer-facing workflows for large-scale infrastructure operations. 25,000+ nodes deployed in a year.",
        "Scaled platform from 0 to 17,000+ users and six-figure revenue.",
        "Owned backend architecture, core domain modeling, frontend-adjacent product flows, and background processing.",
        "Worked with browser automation, scraping, CAPTCHA bypassing, and anti-detection techniques.",
        "Assembled and managed a distributed team of 10 people including engineers, customer support, and BD.",
        "Completed Techstars Web3 2025, XFounders Season 4 and Founder.University Cohort 9 programs.",
      ],
    },
    {
      ...reinventedHospitalityExperience,
      bullets: [
        "Built and launched a full-cycle POS system with Rails + Hotwire in under 3 months.",
        "Designed and delivered core product features for restaurant and hotel operations.",
        "Delivered tax reports, data exports, and operational tooling.",
      ],
    },
    {
      ...xometryExperience,
      bullets: [
        "Worked on a large-scale manufacturing marketplace connecting hundreds of thousands of buyers and suppliers globally.",
        "Implemented and launched UK and TR regional apps under tight deadlines (1 month).",
        "Designed and implemented async intercompany communication systems with background processing and data consistency.",
        "Fully owned and managed Salesforce integrations and pipelines.",
        "Built foundational product systems (HS codes, manufacturing attributes, pricing logic).",
        "Architected and executed migration of the multi-repo architecture into a unified platform.",
        "Built an AI-powered HS codes search tool which cut code search time for the logistics team by 90%+.",
      ],
    },
    {
      ...earlierExperience,
      body: "Product and backend development across e-commerce, travel, insurance, and internal tooling products. Delivered both frontend and backend work for EU/US clients.",
    },
    earlyCareerExperience,
  ],
  projects: [
    {
      title: "nodes.garden",
      body: "Web3/AI platform built with Rails and Hotwire, spanning user flows, internal tooling, and infrastructure management. Finalist of Backdrop Build V4–V6.",
      href: "https://backdropbuild.com/builds/nodesgarden",
      linkLabel: "backdropbuild.com/builds/nodesgarden",
    },
    {
      title: "customs.codes",
      body: "Rails-based AI customs classification tool with product UI and search workflows. Finalist of Backdrop Build V3.",
      href: "https://backdropbuild.com/builds/v3/customscodes",
      linkLabel: "backdropbuild.com/builds/v3/customscodes",
    },
  ],
  skills: [
    { label: "Frontend", value: "Hotwire, ReactJS, VueJS" },
    { label: "Backend", value: "Ruby on Rails, REST/GraphQL APIs, product engineering, domain modeling" },
    { label: "Languages", value: "Ruby, JavaScript, Python" },
    { label: "Databases", value: "PostgreSQL, Redis" },
    { label: "Async", value: "Sidekiq, SolidQueue, RabbitMQ" },
    { label: "Infra", value: "Docker, CI/CD, AWS, GCP, fly.io, Heroku, Kamal" },
    { label: "Observability", value: "Datadog, Sentry, Appsignal" },
    { label: "AI", value: "LLM integrations, RAG, vector DBs" },
    { label: "Payments", value: "Stripe, PayPal, CloudPayments, Copperx & others" },
  ],
};

export const cvVariants = {
  general,
  backend,
  fullstack,
} satisfies Record<CVVariantSlug, CVData>;

export function getCVVariant(slug: string): CVData | undefined {
  if (!Object.prototype.hasOwnProperty.call(cvVariants, slug)) {
    return undefined;
  }

  return cvVariants[slug as CVVariantSlug];
}

export function isCVVariantSlug(slug: string): slug is CVVariantSlug {
  return Object.prototype.hasOwnProperty.call(cvVariants, slug);
}

export function getCVVariantSlugs(): CVVariantSlug[] {
  return Object.keys(cvVariants) as CVVariantSlug[];
}
