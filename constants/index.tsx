import { Icons } from "@/icons";

export const PROFILE = {
  name: "Saad Koraiban",
  wordmark: "SAAD.K",
  role: "Full-stack developer",
  city: "Casablanca, Morocco",
  timeZone: "Africa/Casablanca",
  email: "kouraybane809@gmail.com",
};

export const NavLists = [
  { label: "work", href: "#work" },
  { label: "stack", href: "#stack" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

/* Instagram is left out until it has a real URL (it was `#`). */
export const SocialsList = [
  {
    Icon: Icons.githubIcon,
    href: "https://github.com/MARISHHHALLL",
    label: "GitHub",
    handle: "marishhhalll",
  },
  {
    Icon: Icons.linkedinIcon,
    href: "https://www.linkedin.com/in/saadkouraiban/",
    label: "LinkedIn",
    handle: "saadkouraiban",
  },
];

export type ProjectStatus = "LIVE" | "BUILD" | "SHELVED";

export type Project = {
  id: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  /* When Saad's own commits start and stop in the repo. */
  period: string;
  stack: string[];
  /* What Saad built, two lines at most. Every claim was checked against
     git authorship (author kouraybane809@gmail.com): features he created
     and wrote most of are "built"; ones he only extended say so. */
  work: string;
  /* Public URL. Leave undefined until there is a real one; the row only
     shows a visit link when this is set. */
  url?: string;
};

export const ProjectsList: Project[] = [
  {
    id: "leeetr",
    title: "Leeetr",
    summary: "Digital business cards and pages for professionals.",
    status: "LIVE",
    period: "Dec 2024 – May 2026",
    stack: ["Next 16", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Zustand", "React Hook Form", "Zod", "i18next", "Stripe.js", "ffmpeg.wasm"],
    work:
      "Built the web app from the first commit: business card pages, the admin panel for users, categories, articles and featured content, and French and English routing. " +
      "Added vCard downloads, QR code sharing and in-browser video compression with ffmpeg.wasm.",
  },
  {
    id: "leeetr-mobile",
    title: "Leeetr Mobile",
    summary: "The iOS and Android app for Leeetr.",
    status: "BUILD",
    period: "May 2025 – Aug 2026",
    stack: ["Expo 55", "React Native 0.83", "Expo Router", "NativeWind", "Reanimated", "TanStack Query", "Zustand", "MMKV", "React Hook Form", "Zod", "Expo Notifications", "Stripe", "i18next", "EAS Build"],
    work:
      "Built the newsletter flow (rich-text compose, drafts, inbox, follow and unfollow) and push notifications on iOS and Android. " +
      "Added GIF messages, page blocking, private mode and promo-code credit purchases, and localised the app in French and English with RTL support.",
  },
  {
    id: "leeetr-api",
    title: "Leeetr API",
    summary: "The NestJS backend behind the Leeetr web and mobile apps.",
    status: "BUILD",
    period: "Feb – Jun 2026",
    stack: ["NestJS 10", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "BullMQ", "WebSockets", "Passport (Google, Apple, Microsoft, JWT)", "Stripe", "Azure Blob Storage", "Expo Push", "Swagger", "Jest", "Docker"],
    work:
      "Built real-time messaging over WebSockets with drafts, attachments and scheduled sends, plus a push notification queue on BullMQ and Redis. " +
      "Added page timelines and page blocking, extended connection requests, and moved Stripe payment methods from users to pages.",
  },
  {
    id: "mariages",
    title: "mariages.io Admin",
    summary: "The super-admin back office for a wedding marketplace.",
    status: "LIVE",
    period: "Sep 2025 – Jan 2026",
    stack: ["Next 15", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "MUI", "TanStack Query", "TanStack Table", "Zustand", "React Hook Form", "Zod", "Lexical", "Recharts", "next-intl", "Vitest", "Playwright"],
    work:
      "Built the help center, supplier tracking, promo codes, advertising management and the revenue and KPI dashboards, plus a Lexical editor for blog articles. " +
      "Added bulk status and category changes and business creation to vendor management.",
  },
  {
    id: "wedecine",
    title: "Wedecine",
    summary: "Landing page for an early-stage product. Shelved.",
    status: "SHELVED",
    period: "Oct 2023",
    stack: ["Next 13", "React 18", "TypeScript", "MUI", "Tailwind CSS", "React Query", "React Hook Form", "Yup"],
    work: "Reworked the landing page: new backgrounds, Poppins typography and a fixed footer.",
  },
];

/* The union of what the five projects actually ship, read from their
   package.json files, CI workflows, Dockerfile and EAS config. */
export const StackGroups = [
  {
    layer: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Radix UI", "MUI", "Motion"],
  },
  {
    layer: "Mobile",
    items: ["React Native", "Expo", "Expo Router", "NativeWind", "Reanimated", "MMKV", "Expo Notifications"],
  },
  {
    layer: "Backend",
    items: ["Node.js", "NestJS", "PostgreSQL", "TypeORM", "Redis", "BullMQ", "WebSockets", "Passport", "JWT", "Swagger"],
  },
  {
    layer: "Data & forms",
    items: ["TanStack Query", "TanStack Table", "Zustand", "Axios", "React Hook Form", "Zod", "Yup"],
  },
  {
    layer: "Integrations",
    items: ["Stripe", "Azure Blob Storage", "Expo Push", "Brevo", "Google Maps", "i18next", "next-intl", "Lexical", "Recharts", "Chart.js", "ffmpeg.wasm", "Socket.IO client"],
  },
  {
    layer: "Tooling & testing",
    items: ["Git", "GitHub Actions", "Docker", "EAS Build", "Jest", "Vitest", "Playwright", "ESLint", "Prettier", "Husky"],
  },
];
