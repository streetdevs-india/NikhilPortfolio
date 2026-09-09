export type Project = {
  id: string;
  number: string;
  label: string;
  title: string;
  intent: string;
  role: string;
  tools: string[];
  process: string[];
  caption?: string;
  deliverables: string[];
  links?: { label: string; href: string }[];
  images: { src: string; alt: string; wide?: boolean }[];
};

/** Real shipped work only — from Nikhil's actual client / internship projects */
export const projects: Project[] = [
  {
    id: "mankuu",
    number: "01",
    label: "Client website · designed & built",
    title: "Mankuu Interiors",
    intent:
      "Responsive Next.js website for a Punjab-based interior design brand — visual hierarchy, calm hero atmosphere, and lead-focused CTAs.",
    role: "Visual design, layout, UI, frontend build",
    tools: ["Figma", "Next.js", "Tailwind", "Meta Ads"],
    process: ["Brief", "Visual direction", "UI design", "Build", "Launch"],
    deliverables: [
      "Landing hero & section visuals",
      "Brand-aligned page layouts",
      "Lead / consultation CTAs",
      "Responsive production site",
    ],
    links: [{ label: "Live site", href: "https://www.mankuuinteriors.in" }],
    images: [
      {
        src: "/work/mankuu-web.png",
        alt: "Mankuu Interiors website hero mockup",
        wide: true,
      },
    ],
  },
  {
    id: "elevator",
    number: "02",
    label: "Client website · designed & built",
    title: "Great India Elevator",
    intent:
      "Lead-generation website for an elevator servicing company — trust-led hierarchy, clear services, and conversion-focused CTAs.",
    role: "Visual design, layout, UI, frontend build",
    tools: ["Figma", "Next.js", "Tailwind"],
    process: ["Brief", "Visual direction", "UI design", "Build", "Launch"],
    deliverables: [
      "Service landing visuals",
      "Trust / AMC-focused sections",
      "Lead capture flows",
      "Production Next.js site",
    ],
    links: [
      { label: "Live site", href: "https://www.greatindiaelevator.com" },
    ],
    images: [
      {
        src: "/work/elevator-web.png",
        alt: "Great India Elevator website landing mockup",
        wide: true,
      },
    ],
  },
  {
    id: "kanviraa",
    number: "03",
    label: "Client website · designed & built",
    title: "Kanviraa",
    intent:
      "Full ecommerce storefront — product presentation, clean commerce UI patterns, and a modern shopping experience shipped in Next.js.",
    role: "Visual design, ecommerce UI, frontend build",
    tools: ["Figma", "Next.js", "React", "Tailwind"],
    process: ["Brief", "Visual direction", "UI design", "Build", "Launch"],
    deliverables: [
      "Store homepage visuals",
      "Product grid / commerce UI",
      "Brand-consistent pages",
      "Live ecommerce site",
    ],
    links: [{ label: "Live site", href: "https://www.kanviraa.com" }],
    images: [
      {
        src: "/work/kanviraa-web.png",
        alt: "Kanviraa ecommerce website homepage mockup",
        wide: true,
      },
    ],
  },
];

export const moreWork = [
  {
    title: "XD Build",
    blurb:
      "Construction services site — project showcase + consultation flows (ZoraDevs).",
    tag: "Internship",
  },
  {
    title: "Vision Home Finance",
    blurb: "Home-loan platform UI — EMI tools, lead forms, partner branding.",
    tag: "Internship",
  },
  {
    title: "Hackathon@SGU",
    blurb: "Anime-themed event website — illustration-led visual direction.",
    tag: "Event",
    href: "https://hackathon-webpage-final.vercel.app",
  },
  {
    title: "AI Website Builder",
    blurb: "Prompt-to-website SaaS visuals + product UI (final year project).",
    tag: "Product",
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    org: "Abstriq",
    time: "Jul 2026 – Present",
    points: [
      "Production testing & bug fixes on client web platforms",
      "Pre/post-deploy stability for live sites",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "ZoraDevs",
    time: "2025 – 2026",
    points: [
      "Designed & built client sites in Next.js + TypeScript",
      "XD Build, Vision Home Finance, Aronix, Billing SaaS",
    ],
  },
  {
    role: "Full-Stack Development Intern",
    org: "HCLTech",
    time: "Dec 2024 – Mar 2025",
    points: [
      "Pixel-perfect UI replication for tracking modules",
      "Instamart console capstone · HCLTech certified",
    ],
  },
];

export const skillGroups = [
  {
    title: "Visual",
    items: [
      "Layout & hierarchy",
      "Typography",
      "Color systems",
      "Brand-aligned UI",
      "Social / web formats",
    ],
  },
  {
    title: "AI design",
    items: [
      "Prompt systems",
      "Art direction",
      "Style lock",
      "Iteration & cleanup",
      "Variation control",
    ],
  },
  {
    title: "Product / web",
    items: [
      "Figma → Next.js",
      "Conversion CTAs",
      "Responsive UI",
      "Framer Motion",
      "Dev-ready handoff",
    ],
  },
  {
    title: "Soft",
    items: [
      "Feedback loops",
      "Fast shipping",
      "Clear docs",
      "Client communication",
    ],
  },
];

export const contact = {
  name: "Nikhil Dhuriya",
  role: "AI Graphic Designer",
  email: "nikhilkashyap09793000@gmail.com",
  phone: "+91 9871664636",
  linkedin: "https://www.linkedin.com/in/nikhil-dhuriya-5bb91627a",
  github: "https://github.com/Nikhil06052005",
  location: "Noida, India · IST",
};
