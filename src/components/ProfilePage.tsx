import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone, SearchCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import PageMeta from "@/components/PageMeta";
import type { PageMetadataKey } from "@/config/seoConfig";

interface ProfilePageProps {
  page: PageMetadataKey;
  name: string;
  role: string;
  image?: string;
  intro: string;
  paraTwo: string;
  paraThree: string;
}

const ProfilePage = ({
  page,
  name,
  role,
  image,
  intro,
  paraTwo,
  paraThree,
}: ProfilePageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageMeta page={page} />
      <main className="relative min-h-screen overflow-hidden bg-background">
        <div className="relative container mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Link
            to="/"
            className="group mb-10 inline-flex items-center gap-2 text-sm font-mono-tech text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="relative animate-fade-up">
              <div className="group relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-[2px] rounded-[18px] border border-accent/40 transition-all duration-500 ease-out group-hover:border-accent group-hover:shadow-[0_0_12px_hsl(var(--accent)/0.35),0_0_28px_hsl(var(--accent)/0.2)]" />
                <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-2xl border border-accent/20 bg-accent/5 p-1.5">
                  {image ? (
                    <img
                      src={image}
                      alt={`${name}, ${role} at ATEXRA`}
                      className="h-full w-full rounded-[13px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      width={768}
                      height={1024}
                    />
                  ) : (
                    <SearchCheck className="h-24 w-24 text-accent" aria-hidden="true" />
                  )}
                </div>
              </div>

              <div className="surface-card absolute -bottom-5 -right-3 rounded-lg px-5 py-3 shadow-md sm:right-4">
                <p className="mb-0.5 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-accent">
                  {role}
                </p>
                <p className="whitespace-nowrap font-heading text-sm font-bold text-foreground md:text-base">
                  {name} of ATEXRA
                </p>
              </div>
            </div>

            <div className="space-y-7 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
                This is <span className="text-gradient accent-underline">{name}</span>
              </h1>

              <p className="text-justify text-base leading-relaxed text-muted-foreground md:text-lg">
                {intro}
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

              <p className="text-justify text-base leading-relaxed text-muted-foreground">
                {paraTwo}
              </p>

              <div className="surface-card rounded-xl border-l-4 border-accent p-5">
                <p className="text-justify text-base leading-relaxed italic text-foreground/90">
                  &quot;{paraThree}&quot;
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={siteConfig.bookCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 font-heading font-semibold text-accent-foreground transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" />
                  Book a Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
