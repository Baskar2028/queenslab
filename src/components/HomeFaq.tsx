import { Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "What services does Atexra offer?",
    answer:
      "Atexra provides professional website development, custom web applications, simple AI-powered chatbots, and business automation solutions. We help small businesses and startups establish and improve their digital presence.",
  },
  {
    question: "How much does it cost to build a website for a small business?",
    answer:
      "Website development costs depend on your requirements, design, features, and complexity. Atexra provides solutions based on your business needs and budget. Contact us to discuss your project and receive a customized quote.",
  },
  {
    question: "How long does it take to develop a business website?",
    answer:
      "Development time depends on the project's size and requirements. A standard business website may take a few days to a few weeks. We discuss the timeline before starting development.",
  },
  {
    question: "Can Atexra build a custom website for my business?",
    answer:
      "Yes! We develop customized, responsive websites for businesses such as gyms, retail shops, gift stores, educational institutions, and startups. Each website is designed around your business identity and requirements.",
  },
  {
    question: "Will my website work on mobile phones and tablets?",
    answer:
      "Yes. We build responsive websites that adapt to smartphones, tablets, laptops, and desktop screens to provide a consistent user experience.",
  },
  {
    question: "Can I add an AI chatbot to my business website?",
    answer:
      "Yes. Atexra can integrate simple AI-powered chatbots into your website to help answer common customer questions, provide basic information, and improve customer interaction.",
  },
  {
    question: "What is business automation, and how can it help my business?",
    answer:
      "Business automation uses software to reduce repetitive manual tasks. Depending on your requirements, Atexra can help automate processes such as customer enquiries, notifications, form submissions, and routine workflows, saving time and reducing manual effort.",
  },
  {
    question: "Can I update my website content after development?",
    answer:
      "Yes. Depending on your project requirements, we can implement content management or admin features that allow you to manage products, content, enquiries, and other website information.",
  },
  {
    question: "Does Atexra provide website maintenance and support?",
    answer:
      "Yes. We provide post-development support based on the agreed project scope. We can also discuss ongoing maintenance, updates, bug fixes, and improvements for your website.",
  },
  {
    question: "How can I start a website development project with Atexra?",
    answer:
      "Getting started is simple. Contact Atexra through the Start a Project option, share your business requirements, and discuss your preferred features and budget. We will review your requirements and provide the next steps.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const HomeFaq = () => (
  <section id="faq" className="bg-background px-5 py-20 sm:px-8 sm:py-24">
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    <div className="mx-auto max-w-4xl">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-accent">
          Atexra FAQ
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Everything you need to know about building your website, growing your online presence,
          and simplifying your business with Atexra.
        </p>
      </div>

      <Accordion type="single" collapsible className="border-t border-border">
        {questions.map(({ question, answer }, index) => (
          <AccordionItem
            key={question}
            value={`home-faq-${index + 1}`}
            className="border-b border-border"
          >
            <AccordionTrigger className="group gap-5 py-5 text-left font-heading text-sm font-semibold text-foreground hover:no-underline sm:text-base [&>svg]:hidden">
              <span className="flex items-start gap-4">
                <span className="pt-0.5 font-mono-tech text-[10px] text-accent sm:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{question}</span>
              </span>
              <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
                <Minus className="hidden h-4 w-4 group-data-[state=open]:block" />
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-0 pl-9 text-sm leading-relaxed text-muted-foreground sm:pl-10 sm:text-base">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default HomeFaq;
