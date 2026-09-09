export const contact = {
  name: "Nikhil Dhuriya",
  firstName: "Nikhil",
  role: "AI Graphic Designer",
  email: "nikhilkashyap09793000@gmail.com",
  phone: "+91 9871664636",
  linkedin: "https://www.linkedin.com/in/nikhil-dhuriya-5bb91627a",
  github: "https://github.com/Nikhil06052005",
  location: "Noida, India",
};

export const marqueeItems = [
  "Logo Design",
  "Website Design",
  "Brand Identity",
  "Campaign Banners",
  "UI Visuals",
  "Ecommerce Design",
  "AI Art Direction",
  "Social Creatives",
];

export const services = [
  {
    title: "Website Design",
    body: "Conversion-focused landing pages and full sites — hierarchy, CTAs, and production-ready UI.",
  },
  {
    title: "Logo & Branding",
    body: "Clean brand marks and lockups that stay consistent across web, print, and social.",
  },
  {
    title: "Campaign Banners",
    body: "Posters and creatives with strong typography, icons, and lifestyle composition.",
  },
  {
    title: "AI Visual Direction",
    body: "Art-directed AI workflows — prompt systems, curation, and brand-safe finals.",
  },
];

export const aboutTags = [
  "Logo Design",
  "Website UI",
  "Banner Design",
  "Brand Systems",
  "AI Graphics",
  "Next.js Build",
];

export const stats = [
  { value: "3+", label: "Live client websites" },
  { value: "3", label: "Internships completed" },
  { value: "10+", label: "Design deliverables shipped" },
];

export const tools = [
  { name: "Figma", level: 92 },
  { name: "Photoshop", level: 88 },
  { name: "Next.js", level: 90 },
  { name: "Tailwind", level: 93 },
  { name: "Framer Motion", level: 80 },
  { name: "AI Image Tools", level: 85 },
];

export type ProjectCard = {
  id: string;
  title: string;
  image: string;
  secondaryImage?: string;
  tags: string[];
  href: string;
  blurb: string;
  isLogoPair?: boolean;
};

export const projects: ProjectCard[] = [
  {
    id: "mankuu",
    title: "Mankuu Interiors",
    image: "/work/mankuu-live.jpg",
    tags: ["Website Design", "Logo Design", "Branding"],
    href: "https://www.mankuuinteriors.in",
    blurb: "Logo + lead-gen website for a Punjab interiors brand.",
  },
  {
    id: "elevator",
    title: "Great India Elevator",
    image: "/work/elevator-live.jpg",
    tags: ["Website Design", "Logo Design", "UI"],
    href: "https://www.greatindiaelevators.com",
    blurb: "GIE logo and trust-led lift services website.",
  },
  {
    id: "kanviraa",
    title: "Kanviraa Ecommerce",
    image: "/work/kanviraa-live.png",
    tags: ["Web Design", "Ecommerce", "UI"],
    href: "https://www.kanviraa.com",
    blurb: "Full ecommerce storefront designed and built in Next.js.",
  },
  {
    id: "dental-1",
    title: "Oral Health Campaign",
    image: "/work/dental-banner-1.jpg",
    tags: ["Poster Design", "Campaign", "Branding"],
    href: "#graphics",
    blurb: "Healthcare campaign banner with icon system and lifestyle layout.",
  },
  {
    id: "dental-2",
    title: "Healthy Smile 2-2-2",
    image: "/work/dental-banner-2.jpg",
    tags: ["Poster Design", "Infographic", "Social"],
    href: "#graphics",
    blurb: "Educational banner explaining the 2-2-2 oral care rule.",
  },
  {
    id: "logos",
    title: "Client Logo System",
    image: "/work/manku-logo.png",
    secondaryImage: "/work/gie-logo.png",
    tags: ["Logo Design", "Brand Mark"],
    href: "#projects",
    blurb: "Manku Interiors and Great India Elevator logo lockups.",
    isLogoPair: true,
  },
];

export const education = [
  {
    time: "2022 – 2026",
    title: "Sunderdeep Engineering College (AKTU)",
    detail: "B.Tech — CSE (AI & ML)",
  },
  {
    time: "2021 – 2022",
    title: "Karl Huber School, Noida",
    detail: "Intermediate (Class XII)",
  },
];

export const work = [
  {
    time: "Jul 2026 – Present",
    title: "Abstriq",
    detail: "Software Developer Intern — production testing & bug fixes",
  },
  {
    time: "2025 – 2026",
    title: "ZoraDevs",
    detail: "Software Developer Intern — client websites in Next.js",
  },
  {
    time: "Dec 2024 – Mar 2025",
    title: "HCLTech",
    detail: "Full-Stack Intern — pixel-perfect UI & certified capstone",
  },
];
