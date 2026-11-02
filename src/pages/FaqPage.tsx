import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageMeta from "@/components/PageMeta";

const questions = [
  {
    question: "What services does ATEXRA provide?",
    answer:
      "ATEXRA focuses on website development, modern web applications, AI-integrated digital solutions, and business automation. The appropriate service depends on your goals and requirements.",
  },
  {
    question: "Can ATEXRA build a website for my business?",
    answer:
      "Yes. ATEXRA can help plan and develop a website suited to your business goals, audience, and required functionality.",
  },
  {
    question: "Does ATEXRA offer AI-integrated web development?",
    answer:
      "Yes. AI integration can be considered when it serves a clear purpose, such as assisting users, processing information, or improving a digital workflow. The exact implementation depends on the project requirements.",
  },
  {
    question: "What automation services does ATEXRA provide?",
    answer:
      "ATEXRA can help identify repetitive digital tasks and develop appropriate automation solutions. The available integrations and implementation approach depend on your existing tools and workflow.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the project's scope, design requirements, features, integrations, and complexity. Contact ATEXRA to discuss your needs and receive a suitable quotation.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "The goal is to build responsive experiences that adapt to desktop, tablet, and mobile screens. Specific requirements should be discussed during project planning.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the project's complexity, scope, content availability, integrations, and feedback process. A more accurate estimate can be provided after reviewing your requirements.",
  },
  {
    question: "Can I request changes after the website is delivered?",
    answer:
      "Changes and ongoing support can be discussed according to the agreed project scope and support arrangements. The available options should be confirmed before work begins.",
  },
  {
    question: "What information should I provide before starting a project?",
    answer:
      "Share your business goals, target audience, preferred design direction, required features, available content, reference websites, and budget expectations. This helps establish a clear project scope.",
  },
  {
    question: "How can I discuss my project with ATEXRA?",
    answer:
      "You can use the Book a Call button to access the configured Google Form or contact ATEXRA through the contact section to discuss your project requirements.",
  },
];

const FaqPage = () => (
  <>
    <PageMeta
      title="Frequently Asked Questions"
      description="Answers to common questions about ATEXRA's web development, AI integration, automation, pricing, and project process."
    />
    <main className="page-shell px-5 sm:px-8">
      <section className="mx-auto max-w-4xl">
        <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-accent">
          Clear answers
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A few helpful details about working with ATEXRA and planning a digital project.
        </p>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {questions.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index + 1}`}
              className="surface-card overflow-hidden rounded-2xl px-5 sm:px-6"
            >
              <AccordionTrigger className="gap-4 py-5 text-left font-heading text-sm font-semibold hover:no-underline sm:text-base [&>svg]:text-accent">
                <span className="flex items-start gap-4">
                  <span className="font-mono-tech text-xs text-accent">0{index + 1}</span>
                  {question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pl-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-accent/20 bg-accent/[0.055] p-5 sm:p-6">
          <p className="text-sm text-muted-foreground">Still have questions about your project?</p>
          <Link
            to="/contact"
            className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground"
          >
            Contact us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  </>
);

export default FaqPage;
