import { Link } from "react-router-dom";
import { ArrowLeft, Phone, ArrowRight } from "lucide-react";
import { useEffect } from "react";

interface ProfilePageProps {
  name: string;
  role: string;
  image: string;
  intro: string;
  paraTwo: string;
  paraThree: string;
}

const ProfilePage = ({ name, role, image, intro, paraTwo, paraThree }: ProfilePageProps) => {
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
          {/* Image with badge */}
          <div className="relative animate-fade-up">
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-2xl border border-border shadow-[0_20px_60px_-32px_hsl(var(--foreground)/0.35)]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Rectangle badge in corner */}
            <div className="surface-card absolute -bottom-5 -right-3 rounded-lg px-5 py-3 shadow-md sm:right-4">
              <p className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-accent mb-0.5">{role}</p>
              <p className="font-heading font-bold text-sm md:text-base text-foreground whitespace-nowrap">
                of Atexra
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-7 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div>
              {/* <p className="font-mono-tech text-xs text-accent tracking-[0.3em] uppercase mb-3">// hello world</p> */}
              <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                This is  <span className="text-gradient accent-underline">{name}</span>
              </h1>
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">{intro}</p>

            <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <p className="text-muted-foreground text-base leading-relaxed text-justify">{paraTwo}</p>

            <div className="surface-card rounded-xl border-l-4 border-accent p-5">
              <p className="text-foreground/90 text-base leading-relaxed italic text-justify">"{paraThree}"</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://docs.google.com/forms/d/17YJBQXJHkfELS56bJmzXUW0pPLHzZm3K-cufoUu7-kE/edit"
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

        {/* Back home bottom right */}
        <div className="mt-16 flex justify-end">
          
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
