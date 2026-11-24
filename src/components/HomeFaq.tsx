import { Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqQuestions, faqStructuredData } from "@/config/faq";
import { Link } from "react-router-dom";

const HomeFaq = () => (
  <section id="faq" className="bg-background px-5 py-12 sm:px-8 sm:py-24">
    <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
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
        {faqQuestions.map(({ question, answer }, index) => (
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
      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Need details about a project, updates or maintenance?
        </p>
        <Link
          to="/faq"
          className="inline-flex min-h-10 items-center text-sm font-semibold text-accent transition-colors hover:text-foreground"
        >
          View all FAQs <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default HomeFaq;
