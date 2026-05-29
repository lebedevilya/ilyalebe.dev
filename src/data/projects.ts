export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  img: string;
  tagline: string;
  longDesc: string;
  stack?: string;
  role?: string;
  badge?: string;
  badgeClass?: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "SupportOS",
    img: "/supportos.webp",
    tagline: "Agentic support for startup portfolios",
    longDesc:
      "Agentic customer-support system for startup portfolios. Rails plus Hotwire, deployed with Kamal.",
    stack: "Ruby on Rails, Hotwire, SQLite, RubyLLM, OpenAI API, Kamal",
    role: "Creator",
    badge: "LIVE",
    badgeClass: "badge-success",
    links: [
      { label: "Visit site", url: "https://supportos.ilyalebe.dev" },
      { label: "GitHub", url: "https://github.com/lebedevilya/support_os" },
    ],
  },
  {
    title: "slack-llm-bot",
    img: "/slack-llm-bot.webp",
    tagline: "Production-shaped Slack bot on Vercel",
    longDesc:
      "Production-shaped Slack bot on Vercel. OpenAI tool-loop, threaded memory via the Slack API, optional pgvector recall, and an offline eval harness (deterministic oracle plus LLM judge) so the LLM behaviour is tested like real software.",
    stack: "TypeScript, Vercel, OpenAI, RAG, pgvector",
    role: "Creator",
    badge: "OSS",
    badgeClass: "badge-secondary",
    links: [{ label: "GitHub", url: "https://github.com/lebedevilya/slack-llm-bot" }],
  },
  {
    title: "nodes.garden",
    img: "/nodes.webp",
    tagline: "Multichain Node-as-a-Service platform",
    longDesc:
      "Web3/AI Node-as-a-Service platform. Scaled to 18,000+ users and 25,000+ deployed nodes; secured an Arbitrum ecosystem grant and shipped Node NFT smart contracts and a marketplace. Techstars Web3 '25 cohort; Backdrop Build V4 to V6 finalist.",
    stack: "Ruby on Rails, PostgreSQL, GoodJob, Solidity, Foundry, Docker, GCP, fly.io",
    role: "Co-Founder",
    badge: "LIVE",
    badgeClass: "badge-success",
    links: [
      { label: "Visit site", url: "https://nodes.garden" },
      { label: "Backdrop", url: "https://backdropbuild.com/builds/nodesgarden" },
      {
        label: "Techstars",
        url: "https://www.techstars.com/newsroom/announcing-the-techstars-web3-class-of-2025",
      },
      {
        label: "Arbitrum grant",
        url: "https://arbitrum.questbook.app/dashboard/?grantId=67d7ff7f46da2f90cc3205e9&role=community&chainId=10&proposalId=68d6c5b2306fa3a0a647b6bb&isRenderingProposalBody=true",
      },
    ],
  },
  {
    title: "customs.codes",
    img: "/codes1.webp",
    tagline: "AI-powered HS code search",
    longDesc:
      "RAG-based AI search tool for customs (HS) codes. Backdrop Build V3 finalist. Discontinued.",
    stack: "Ruby on Rails, PostgreSQL, RAG",
    role: "Creator",
    badge: "DISCONTINUED",
    badgeClass: "badge-error",
    links: [{ label: "Backdrop", url: "https://backdropbuild.com/builds/v3/customscodes" }],
  },
  {
    title: "souper.cafe",
    img: "/souper.webp",
    tagline: "Kitchen & Tiki bar in Tbilisi, Georgia",
    longDesc:
      "Kitchen and tiki bar in Tbilisi, Georgia. More than a website: a custom Rails admin panel with dynamic menus ran the operation. Discontinued.",
    stack: "Ruby on Rails, PostgreSQL",
    role: "Co-Founder",
    badge: "DISCONTINUED",
    badgeClass: "badge-error",
    links: [],
  },
];
