export const SITE_URL = "https://atexra.vercel.app";

export const pageMetadata = {
  home: {
    path: "/",
    title: "ATEXRA | Web Development & AI in Tirupattur",
    description:
      "ATEXRA builds business websites, AI chatbots and automation solutions for Tirupattur (Thirupattur), Vaniyambadi, Tamil Nadu and India.",
  },
  about: {
    path: "/about",
    title: "About ATEXRA | Web Development in Tamil Nadu",
    description:
      "Learn about ATEXRA and its approach to web development, useful AI integrations and practical business automation for businesses in Tamil Nadu and India.",
  },
  projects: {
    path: "/projects",
    title: "Web Development Projects & Services | ATEXRA",
    description:
      "Explore ATEXRA's delivered website and examples of web development, AI chatbot and business automation services.",
  },
  pricing: {
    path: "/pricing",
    title: "Website Development Pricing | ATEXRA",
    description:
      "Compare ATEXRA's website development starting plans and find a suitable way to discuss your business website requirements.",
  },
  faq: {
    path: "/faq",
    title: "Web Development, AI & Automation FAQs | ATEXRA",
    description:
      "Answers about ATEXRA website development, AI chatbots, business automation, website updates, maintenance, bug fixing and project planning.",
  },
  contact: {
    path: "/contact",
    title: "Contact ATEXRA | Web Developer in Tirupattur",
    description:
      "Contact ATEXRA to discuss web development, website maintenance, AI integration or automation for your business in Tirupattur, Vaniyambadi or India.",
  },
  founder: {
    path: "/founder",
    title: "Baskar | Founder of ATEXRA",
    description:
      "Meet Baskar, founder of ATEXRA, and learn about his work in web development and AI-integrated digital experiences.",
  },
  tester: {
    path: "/tester",
    title: "Rishikesh Ragav | ATEXRA Tester",
    description:
      "Meet Rishikesh Ragav, tester at ATEXRA, with a focus on software testing and helping improve website quality.",
  },
  developer: {
    path: "/developer",
    title: "Deepak | ATEXRA Co-Founder",
    description:
      "Meet Deepak, co-founder of ATEXRA, and learn about his interests in development and building digital experiences.",
  },
  seoSpecialist: {
    path: "/seo-specialist",
    title: "SEO Specialist | ATEXRA",
    description:
      "Learn how ATEXRA considers technical SEO, on-page improvements and useful content as part of website development projects.",
  },
  notFound: {
    path: "",
    title: "Page Not Found | ATEXRA",
    description: "The page you requested could not be found.",
    robots: "noindex, nofollow",
  },
} as const;

export type PageMetadataKey = keyof typeof pageMetadata;

export const publicPages = Object.entries(pageMetadata)
  .filter(([key]) => key !== "notFound")
  .map(([, metadata]) => metadata);

export const canonicalUrl = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
