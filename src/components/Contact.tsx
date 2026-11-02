import { Instagram, Linkedin, Mail, MapPin, MessageSquareText } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const socials = [
  { icon: Instagram, label: "Instagram", href: siteConfig.instagram },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.founderLinkedIn },
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.contactEmail}` },
];

const Contact = () => (
  <section id="contact" className="px-5 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-accent">Get in touch</p>
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Let&apos;s build something <span className="text-accent">premium.</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-accent/70" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-xl">
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Customers can reach Atexra through the available channels to discuss website development,
            automation services, and digital work that supports business growth online.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-accent shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/5"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="text-muted-foreground">Located in India | Tamil Nadu | Tirupattur</span>
          </div>
        </div>

        <aside className="surface-card rounded-[2rem] p-5 transition-shadow duration-300 hover:shadow-[0_24px_58px_-34px_hsl(var(--accent)/0.7)] sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Available now
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              v2.0
            </span>
          </div>

          <div className="mt-6 flex items-center gap-4 rounded-[1.25rem] border border-border bg-background p-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
              <img src="/atexra.svg" alt="ATEXRA logo" className="h-8 w-8" />
            </div>
            <div>
              <p className="font-heading text-xl font-semibold text-foreground">ATEXRA</p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Available for new projects. Let&apos;s build a website and automation that helps your business grow online.
          </p>

          <div className="mt-5 rounded-[1.25rem] border border-border bg-background p-4">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-accent">Our focus</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              Website development and business automation designed to turn attention into stronger online growth.
            </p>
          </div>

          <a
            href={siteConfig.bookCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            <MessageSquareText className="h-4 w-4" aria-hidden="true" />
            Book a Call
          </a>
          <p className="mt-5 text-center font-mono-tech text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Established 12 MAR 2026
          </p>
        </aside>
      </div>
    </div>
  </section>
);

export default Contact;
