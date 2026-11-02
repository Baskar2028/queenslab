
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import logo from "@/assets/logo.png";
const socials = [
  { icon: Instagram, label: "Instagram", href: siteConfig.instagram },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.founderLinkedIn },
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.contactEmail}` },
];

const Contact = () => (
  <section id="contact" className="px-5 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-6xl">

      {/* Section Heading */}
      <div className="mb-14 text-center">
        <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-accent">
          // CONTACT
        </p>

        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get In <span className="text-accent">Touch</span>
        </h2>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
      </div>

      {/* Main Content */}
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-16">

        {/* Left Side */}
        <div className="flex flex-col justify-between">

          <div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Let&apos;s build something{" "}
              <span className="text-accent">premium.</span>
            </h3>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Reach out through any platform and our team will respond
              within hours. We craft modern websites, smart chatbots,
              and automation solutions that help your business grow worldwide.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-accent shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/5"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mt-12 inline-flex w-fit max-w-full flex-wrap items-center gap-3 rounded-full border border-border bg-card px-4 py-3 text-sm">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />

            <MapPin className="h-4 w-4 shrink-0 text-accent" />

            <span className="text-muted-foreground">
              Located in{" "}
              <span className="font-mono-tech font-semibold text-accent">
                India | Tamil Nadu | Tirupattur
              </span>
            </span>
          </div>
        </div>

        {/* Right Side - Agency Card */}
        <aside className="surface-card rounded-2xl border border-border p-6 shadow-sm transition-all duration-300 hover:shadow-[0_24px_58px_-34px_hsl(var(--accent)/0.7)] sm:p-9">

          {/* Status */}
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 font-mono-tech text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Online
            </span>

            <span className="font-mono-tech text-xs text-muted-foreground">
              v2.0
            </span>
          </div>

          {/* Agency Logo */}
          <div className="mt-6">
            <img
  src={logo}
  alt="ATEXRA Logo"
  className="h-14 w-14 object-contain"
/>
          </div>

          {/* Agency Details */}
          <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
            
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Available now for new projects. Reach out through any
            of the channels — we typically respond within a few hours.
          </p>

          {/* Established Information */}
          <div className="mt-6 rounded-xl border border-border bg-accent/5 p-5">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Agency
            </p>

            <p className="mt-3 font-semibold text-foreground">
              Established in
            </p>

            <p className="mt-2 text-lg font-bold text-foreground">
              12 <span className="text-accent">MAR</span> 2026
            </p>
          </div>

          {/* Book a Call */}
          <a
            href={siteConfig.bookCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-4 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <MessageSquareText className="h-4 w-4" aria-hidden="true" />
            Book a call
          </a>
        </aside>
      </div>
    </div>
  </section>
);

export default Contact;
