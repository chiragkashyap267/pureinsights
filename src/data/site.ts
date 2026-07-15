import {
  Home,
  Store,
  Building2,
  Briefcase,
  Cpu,
  ChefHat,
  Hammer,
  PaintRoller,
  Wrench,
  Zap,
  Boxes,
  Layers,
} from "lucide-react";

export const CONTACT = {
  phone: "7666201009",
  whatsapp: "8779621123",
  email: "pureinsights24@gmail.com",
  instagram: "@pure.insights",
  instagramUrl: "https://instagram.com/pure.insights",
  address:
    "Shreeji Arcade, Office no. 24, Opera House, Charni Road East, Mumbai 400004",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  { icon: Home, title: "Residential", desc: "Bespoke homes that feel like a natural reflection of their people." },
  { icon: Store, title: "Retail", desc: "Showrooms and stores engineered to move and to sell." },
  { icon: Briefcase, title: "Corporate", desc: "Inspiring corporate hubs that elevate how teams work." },
  { icon: Building2, title: "Commercial", desc: "Functional commercial spaces with an editorial finish." },
  { icon: Cpu, title: "Home Automation", desc: "Cutting-edge smart-home integration, seamlessly hidden." },
  { icon: ChefHat, title: "Modular Kitchen & Wardrobe", desc: "Precision modular systems tailored to your life." },
  { icon: Hammer, title: "Civil Work", desc: "Structural craftsmanship built to last generations." },
  { icon: PaintRoller, title: "Painting & Polish", desc: "Flawless surfaces, textures and hand-finished detail." },
  { icon: Boxes, title: "Carpentry", desc: "In-house joinery where craftsmanship meets creativity." },
  { icon: Zap, title: "Electrical", desc: "Meticulous electrical layouts and lighting design." },
  { icon: Layers, title: "Fabrication & POP", desc: "Custom fabrication and ceiling artistry." },
  { icon: Wrench, title: "Plumbing", desc: "Clean, reliable plumbing executed to perfection." },
];

export const PROCESS = [
  {
    step: "01",
    title: "Meticulous Planning",
    desc: "Exceptional design starts with a well-thought-out plan aligned to your vision. We begin with in-depth consultations, then a comprehensive design strategy where every detail is carefully considered.",
  },
  {
    step: "02",
    title: "Flawless Execution",
    desc: "This is where designs truly come to life. Our designers, artisans and project managers work in harmony to translate carefully laid plans into stunning, tangible results.",
  },
  {
    step: "03",
    title: "Perfect Handover",
    desc: "More than a final step — the moment your dream space becomes reality. Every project is delivered in perfect condition, with every detail meticulously checked and refined.",
  },
];

export const TEAM = [
  { name: "Dinesh Gije", role: "Head Interior Designer / CEO" },
  { name: "Dhruv D Gije", role: "Head Interior Designer" },
  { name: "Jitendra Hardikar", role: "Head of Sales & Marketing" },
  { name: "Reshmaa Survey", role: "Head of HR" },
  { name: "Baageshree", role: "Head of Creative Team" },
  { name: "Ronak", role: "Head of Architect Team" },
  { name: "D. Pariwar", role: "Head of Labour" },
];

export type Project = {
  title: string;
  location: string;
  category: string;
};

export const PROJECTS: Project[] = [
  { title: "Hospitals & Operation Theatres", location: "Mumbai", category: "Healthcare" },
  { title: "Ministers' Offices, Mantralaya", location: "Mumbai", category: "Government" },
  { title: "Blue Star — Official Vendor", location: "Pan India", category: "Corporate" },
  { title: "Aura Thai Spa", location: "India", category: "Hospitality" },
  { title: "Universe — The Spa", location: "India", category: "Hospitality" },
  { title: "Kotak Mahindra Offices", location: "India", category: "Banking" },
  { title: "Saraswat Bank Branches", location: "India", category: "Banking" },
  { title: "Coffee World", location: "India", category: "F&B" },
  { title: "Lee Showrooms", location: "India", category: "Retail" },
  { title: "Wrangler Showrooms", location: "India", category: "Retail" },
  { title: "Aditya Birla Retail — 'More'", location: "India", category: "Retail" },
  { title: "Monteria Resort", location: "India", category: "Hospitality" },
];

export const CLIENTS = [
  "Blue Star",
  "Kotak",
  "Baskin Robbins",
  "Crompton Greaves",
  "Aura Thai Spa",
  "Saraswat Bank",
  "Monteria Resort",
  "Aditya Birla Group",
  "Coffee World",
  "Bombay's Ice Cream",
  "Lee",
  "Crocs",
  "Anubhav",
  "HomeTown",
  "Future Group",
  "Wrangler",
  "Siemens",
  "ABB",
  "Schneider Electric",
  "Alstom",
  "Bombardier",
  "Sun Pharma",
  "Coromandel",
  "Universe The Spa",
];

export const TESTIMONIALS = [
  {
    name: "Pranav Sarpotdar",
    city: "Mumbai",
    quote:
      "Pure Insights turned our apartment into a stylish, functional space that feels much larger than it is. Their expertise in maximizing small spaces without sacrificing aesthetics is truly remarkable.",
  },
  {
    name: "Rohit & Anjali S.",
    city: "Mumbai",
    quote:
      "Transforming our home was a dream we didn't know how to bring to life — until we met Pure Insights. Their attention to detail exceeded our expectations. Every room now feels like a luxurious retreat.",
  },
  {
    name: "Vikram D.",
    city: "Bengaluru",
    quote:
      "Working with Pure Insights was seamless from start to finish. They delivered a commercial space that looks incredible and enhances productivity. Their passion for design shows in every detail.",
  },
  {
    name: "Arjun & Priya M.",
    city: "Goa",
    quote:
      "We wanted our boutique hotel to offer a unique, upscale experience, and Pure Insights brought that vision to life. The design blends local charm with modern luxury perfectly.",
  },
];

export const GOALS = [
  {
    period: "2024 — 2025",
    title: "Elevating Our Craft",
    desc: "Embracing innovative design techniques and the latest technologies, enhancing in-house production, and introducing new collections of bespoke furniture and décor across India.",
  },
  {
    period: "2026 — 2027",
    title: "Expanding Horizons",
    desc: "Bringing Pure Insights to a global audience with a strong presence in Australia — beginning with key residential and commercial projects in Sydney and Melbourne.",
  },
  {
    period: "2028 & Beyond",
    title: "A Global Legacy",
    desc: "Solidifying Pure Insights as a global leader in luxury interior design, with projects and partnerships spanning multiple continents and a deep commitment to sustainable practice.",
  },
];

export const STATS = [
  { value: "15+", label: "Years of Craft" },
  { value: "500+", label: "Spaces Transformed" },
  { value: "50+", label: "Marquee Clients" },
  { value: "4", label: "Cities & Growing" },
];
