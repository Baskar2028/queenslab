
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, ArrowRight, SearchCheck } from "lucide-react";
import { useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";

interface ProfilePageProps {
  name: string;
  role: string;
  image?: string;
  intro: string;
  paraTwo: string;
  paraThree: string;
}

const ProfilePage = ({
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative container mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-mono-tech text-muted-foreground hover:text-accent transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* Founder Image with Minimal Glowing Ring */}
          <div className="relative animate-fade-up">
            <div className="group relative mx-auto w-full max-w-sm">

              {/* Cyan glowing ring */}
              <div
                className="absolute -inset-[2px] rounded-[18px]
                border border-accent/40
                transition-all duration-500 ease-out
                group-hover:border-accent
                group-hover:shadow-[0_0_12px_hsl(var(--accent)/0.35),0_0_28px_hsl(var(--accent)/0.2)]"
              />

              {/* Image container */}
              <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-2xl border border-accent/20 bg-accent/5 p-1.5">

                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full rounded-[13px] object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.02]"
                  />
                ) : (
                  <SearchCheck
                    className="h-24 w-24 text-accent"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>

            {/* Founder badge */}
            <div className="surface-card absolute -bottom-5 -right-3 rounded-lg px-5 py-3 shadow-md sm:right-4">
              <p className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-accent mb-0.5">
                {role}
              </p>
              <p className="font-heading font-bold text-sm md:text-base text-foreground whitespace-nowrap">
                {name} of Atexra
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div
            className="space-y-7 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                This is{" "}
                <span className="text-gradient accent-underline">
                  {name}
                </span>
              </h1>
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
              {intro}
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <p className="text-muted-foreground text-base leading-relaxed text-justify">
              {paraTwo}
            </p>

            <div className="surface-card rounded-xl border-l-4 border-accent p-5">
              <p className="text-foreground/90 text-base leading-relaxed italic text-justify">
                "{paraThree}"
              </p>
            </div>

            {/* Book a Call */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={siteConfig.bookCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-accent-foreground font-heading font-semibold glow-button hover:scale-105 transition-transform"
              >
                <Phone className="w-4 h-4" />
                Book a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
