export type Project = {
  id: string;
  number: string;
  label: string;
  title: string;
  intent: string;
  role: string;
  tools: string[];
  process: string[];
  deliverables: string[];
  links: { label: string; href: string }[];
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: "mankuu",
    number: "01",
    label: "Client website · designed & built",
    title: "Mankuu Interiors",
    intent:
      "Lead-focused website for a Punjab interior design brand — hero atmosphere, clear hierarchy, consultation CTAs, and a full responsive build.",
    role: "Visual design, UI layout, frontend development",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    process: ["Brief", "Visual direction", "UI design", "Build", "Launch"],
    deliverables: [
      "Landing hero & section visuals",
      "Brand-aligned page layouts",
      "Lead / WhatsApp conversion flows",
      "Live production website",
    ],
    links: [{ label: "Open live site", href: "https://www.mankuuinteriors.in" }],
    images: [
      {
        src: "/work/mankuu-live.jpg",
        alt: "Live screenshot of Mankuu Interiors website homepage",
      },
    ],
  },
  {
    id: "elevator",
    number: "02",
    label: "Client website · designed & built",
    title: "Great India Elevator",
    intent:
      "Trust-led service website for lift installation, repair, and AMC — strong local SEO landing structure with clear quote CTAs.",
    role: "Visual design, UI layout, frontend development",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    process: ["Brief", "Visual direction", "UI design", "Build", "Launch"],
    deliverables: [
      "Service landing hero visuals",
      "Trust & AMC-focused sections",
      "Quote / call / WhatsApp CTAs",
      "Live production website",
    ],
    links: [
      {
        label: "Open live site",
        href: "https://www.greatindiaelevator.com",
      },
    ],
    images: [
      {
        src: "/work/elevator-live.jpg",
        alt: "Live screenshot of Great India Elevator website homepage",
      },
    ],
  },
  {
    id: "kanviraa",
    number: "03",
    label: "Client website · designed & built",
    title: "Kanviraa",
    intent:
      "Ecommerce storefront with clean product presentation, modern commerce UI, and a full Next.js shopping experience.",
    role: "Visual design, ecommerce UI, frontend development",
    tools: ["Figma", "Next.js", "React", "Tailwind CSS"],
    process: ["Brief", "Visual direction", "UI design", "Build", "Launch"],
    deliverables: [
      "Store homepage visuals",
      "Product grid / commerce UI",
      "Brand-consistent pages",
      "Live ecommerce website",
    ],
    links: [{ label: "Open live site", href: "https://www.kanviraa.com" }],
    images: [
      {
        src: "/work/kanviraa-live.png",
        alt: "Live screenshot of Kanviraa ecommerce homepage",
      },
    ],
  },
];

export const moreWork = [
  {
    title: "XD Build",
    blurb:
      "Construction services site — project showcase and consultation flows (ZoraDevs internship).",
    tag: "Internship",
  },
  {
    title: "Vision Home Finance",
    blurb:
      "Home-loan platform UI — EMI tools, lead forms, and partner branding.",
    tag: "Internship",
  },
  {
    title: "Hackathon@SGU",
    blurb: "Anime-themed event website with illustration-led visual direction.",
    tag: "Event",
    href: "https://hackathon-webpage-final.vercel.app",
  },
  {
    title: "AI Website Builder",
    blurb:
      "Prompt-to-website SaaS product UI and visual system (final year project).",
    tag: "Product",
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    org: "Abstriq",
    time: "Jul 2026 – Present",
    points: [
      "End-to-end testing and bug fixes on client web platforms",
      "Pre- and post-deploy stability for production sites",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "ZoraDevs",
    time: "2025 – 2026",
    points: [
      "Designed and built client websites in Next.js + TypeScript",
      "Shipped XD Build, Vision Home Finance, Aronix, and Billing SaaS UI",
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
      "Web & social formats",
    ],
  },
  {
    title: "AI design",
    items: [
      "Prompt systems",
      "Art direction",
      "Style consistency",
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
      "Motion (Framer / GSAP)",
      "Dev-ready handoff",
    ],
  },
  {
    title: "Collaboration",
    items: [
      "Client communication",
      "Feedback loops",
      "Fast shipping",
      "Clear documentation",
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
