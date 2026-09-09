export type WorkImage = {
  src: string;
  alt: string;
  kind?: "site" | "logo" | "banner";
};

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
  images: WorkImage[];
};

export const projects: Project[] = [
  {
    id: "mankuu",
    number: "01",
    label: "Brand + website · designed & built",
    title: "Mankuu Interiors",
    intent:
      "End-to-end brand and web for a Punjab interior design client — logo, visual system, and a lead-focused live website.",
    role: "Logo design, visual design, UI, Next.js build",
    tools: ["Figma", "Photoshop", "Next.js", "Tailwind CSS"],
    process: ["Brief", "Brand direction", "Logo", "UI design", "Build", "Launch"],
    deliverables: [
      "Primary logo & brand mark",
      "Landing hero & section visuals",
      "Lead / WhatsApp conversion UI",
      "Live production website",
    ],
    links: [
      { label: "Open live site", href: "https://www.mankuuinteriors.in" },
    ],
    images: [
      {
        src: "/work/mankuu-live.jpg",
        alt: "Live Mankuu Interiors website homepage",
        kind: "site",
      },
      {
        src: "/work/manku-logo.png",
        alt: "Manku Interiors logo designed for the client",
        kind: "logo",
      },
    ],
  },
  {
    id: "elevator",
    number: "02",
    label: "Brand + website · designed & built",
    title: "Great India Elevator",
    intent:
      "Logo and trust-led service website for lift installation, repair, and AMC — designed and shipped for the client.",
    role: "Logo design, visual design, UI, Next.js build",
    tools: ["Figma", "Photoshop", "Next.js", "Tailwind CSS"],
    process: ["Brief", "Brand direction", "Logo", "UI design", "Build", "Launch"],
    deliverables: [
      "GIE logo lockup",
      "Service landing visuals",
      "Quote / call / WhatsApp CTAs",
      "Live production website",
    ],
    links: [
      {
        label: "Open live site",
        href: "https://www.greatindiaelevators.com",
      },
    ],
    images: [
      {
        src: "/work/elevator-live.jpg",
        alt: "Live Great India Elevator website homepage",
        kind: "site",
      },
      {
        src: "/work/gie-logo.png",
        alt: "Great India Elevator GIE logo designed for the client",
        kind: "logo",
      },
    ],
  },
  {
    id: "kanviraa",
    number: "03",
    label: "Ecommerce website · designed & built",
    title: "Kanviraa",
    intent:
      "Full ecommerce storefront — product presentation, commerce UI, and a complete Next.js shopping experience designed and built for the client.",
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
        alt: "Live Kanviraa ecommerce homepage",
        kind: "site",
      },
    ],
  },
];

export const graphicWork = [
  {
    id: "dental-primary",
    title: "Oral Health Campaign Banner",
    label: "Client graphic design",
    blurb:
      "Healthcare campaign creative — logo mark, icon system, lifestyle photography layout, and on-brand messaging.",
    src: "/work/dental-banner-1.jpg",
    alt: "Oral Health is Primary Health campaign banner",
  },
  {
    id: "dental-222",
    title: "Healthy Smile 2-2-2 Banner",
    label: "Client graphic design",
    blurb:
      "Educational social/print banner explaining the 2-2-2 brushing rule with clean typography and product still-life.",
    src: "/work/dental-banner-2.jpg",
    alt: "A simple rule for a healthy smile 2-2-2 banner",
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
      "Logo & brand marks",
      "Layout & hierarchy",
      "Typography",
      "Campaign banners",
      "Web UI visuals",
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
