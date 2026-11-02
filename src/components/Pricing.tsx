import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";
import PageMeta from "@/components/PageMeta";

const websitePlans = [
  {
    name: "Starter Website",
    price: "₹2,999",
    description:
      "A budget-friendly starting point for businesses looking to establish their online presence.",
    badge: null,
    features: [
      "2 pages",
      "WhatsApp connect (click & book)",
      "Contact form",
      "Mobile optimization",
    ],
  },
  {
    name: "Business Website",
    price: "₹5,999",
    description:
      "A professional website solution for businesses looking to strengthen their online presence and grow.",
    badge: "MOST POPULAR",
    features: [
      "4 pages",
      "Automatic mail system",
      "Contact form",
      "Secure payment gateway integration",
      "Mobile optimization",
    ],
  },
];

interface PricingProps {
  compact?: boolean;
}

const Pricing = ({ compact = false }: PricingProps) => (
  <>
    {!compact && (
      <PageMeta
        title="Pricing"
        description="Explore ATEXRA website package pricing. Pricing is available as simple starting plans for website development."
      />
    )}
    <div className={compact ? "" : "page-shell"}>
      <section id="pricing" className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-accent">
              Simple Pricing
            </p>
            <h1 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Clear plans for your next step.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Clear starting prices for websites designed to strengthen your online presence and help your business grow.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {websitePlans.map((plan) => (
              <article
                key={plan.name}
                className={`surface-card relative flex h-full flex-col rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_22px_46px_-32px_hsl(var(--accent)/0.7)] sm:p-8 ${
                  plan.badge ? "border-accent/40" : ""
                }`}
              >
                {plan.badge ? (
                  <div className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-foreground shadow-md">
                    {plan.badge}
                  </div>
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-accent">
                      Website development
                    </p>
                    <h2 className="mt-3 font-heading text-xl font-semibold text-foreground sm:text-2xl">
                      {plan.name}
                    </h2>
                  </div>
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-heading text-4xl font-bold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm text-muted-foreground">starting price</span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={siteConfig.bookCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Choose this plan
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          {compact && (
            <div className="mt-8 text-center">
              <Link
                to="/pricing"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-5 text-sm font-semibold transition-colors hover:border-accent/50 hover:bg-secondary"
              >
                View pricing <ArrowUpRight className="h-4 w-4 text-accent" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  </>
);

export default Pricing;
