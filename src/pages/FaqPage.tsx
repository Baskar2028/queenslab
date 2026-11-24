import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageMeta from "@/components/PageMeta";
import { faqQuestions, faqStructuredData } from "@/config/faq";

const FaqPage = () => (
  <>
    <PageMeta
      page="faq"
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

        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqQuestions.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index + 1}`}
              className="surface-card overflow-hidden rounded-2xl px-5 sm:px-6"
            >
              <AccordionTrigger className="gap-4 py-5 text-left font-heading text-sm font-semibold hover:no-underline sm:text-base [&>svg]:text-accent">
                <span className="flex items-start gap-4">
                  <span className="font-mono-tech text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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
