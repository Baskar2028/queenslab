export const faqQuestions = [
  {
    question: "What web development services does ATEXRA offer?",
    answer:
      "ATEXRA develops websites and web applications for businesses. Projects can also include website updates, maintenance, bug fixing, AI integrations or automation, depending on the requirements.",
  },
  {
    question: "Does ATEXRA work with businesses in Tirupattur and Vaniyambadi?",
    answer:
      "ATEXRA serves businesses in Tirupattur (also spelled Thirupattur), Vaniyambadi and elsewhere in Tamil Nadu and India. Contact us to discuss your project.",
  },
  {
    question: "Can ATEXRA build an AI-integrated website or chatbot?",
    answer:
      "AI features and chatbots can be included when they suit the project. We discuss the intended use, available information and integration requirements before recommending an approach.",
  },
  {
    question: "Can ATEXRA automate tasks for my business?",
    answer:
      "ATEXRA can discuss automation for repetitive digital tasks and workflows. The right solution depends on the tools you use and the process you want to improve.",
  },
  {
    question: "Can ATEXRA help fix an existing automation workflow?",
    answer:
      "ATEXRA can discuss troubleshooting an existing automation workflow. The options depend on the platforms involved, the current setup and the access available.",
  },
  {
    question: "Does ATEXRA update and maintain existing websites?",
    answer:
      "Website updates and maintenance can be discussed based on your site's technology, requested changes and support needs. Contact ATEXRA with details about your website.",
  },
  {
    question: "Can ATEXRA fix bugs on an existing website?",
    answer:
      "ATEXRA can review website bug-fixing requests and confirm the scope after learning about the issue, website platform and access requirements.",
  },
  {
    question: "How much does website development cost?",
    answer:
      "The cost depends on the number of pages, design, functionality and integrations. ATEXRA's pricing page lists starting plans, and the final scope can be discussed before work begins.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Project timing depends on the scope, content, integrations and review process. ATEXRA can discuss a project-specific timeline after understanding your requirements.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Responsive behavior can be included so the website adapts to mobile, tablet and desktop screens. Specific accessibility and device requirements should be shared during planning.",
  },
  {
    question: "How do I start a project with ATEXRA?",
    answer:
      "Use the contact page or Book a Call link to share your goals, audience, required features and any existing website details. ATEXRA can then discuss the project scope and next steps.",
  },
] as const;

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqQuestions.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};
