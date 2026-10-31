import { useEffect, useRef, useState } from "react";
import { MessageCircle, Instagram, Linkedin, MapPin, Mail } from "lucide-react";

const socials = [
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/queenslabofficial/?utm_source=ig_web_button_share_sheet" },
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/baskar08/" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:queenslab67@gmail.com" },
];

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 px-6 bg-muted/20" ref={ref}>
      <div className={`container mx-auto max-w-6xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <p className="font-mono-tech text-xs text-accent text-center tracking-[0.3em] uppercase mb-3">// contact</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Get In <span className="text-gradient accent-underline">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-14" />

        <div className="relative grid min-h-[420px] min-w-0 items-stretch gap-10 md:grid-cols-2">
          {/* LEFT — Location bottom + intro */}
          <div className="relative flex min-w-0 flex-col justify-between">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Let's build something <span className="text-gradient">premium</span>.
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Reach out through any platform and our team will respond within hours. We craft websites that grow your business worldwide.
              </p>

              <div className="hidden md:flex flex-wrap gap-3 mt-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="surface-card flex h-12 w-12 items-center justify-center rounded-full text-accent transition-all duration-300 hover:scale-105 hover:border-accent/40 hover:bg-secondary"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Location bottom-left — Desktop only */}
            <div className="surface-card mt-10 hidden items-center gap-3 self-start rounded-full px-5 py-3 md:inline-flex">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-mono-tech text-sm tracking-wider text-foreground">
                Located in <span className="text-accent font-semibold">India | Tamil Nadu | Thirupattur</span>
              </span>
            </div>
          </div>

          {/* Atexra status card */}
          <div className="flex min-w-0 flex-col items-center justify-center gap-6 md:justify-end">
            <div className="surface-card relative w-full max-w-md overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:border-accent/40 sm:p-9">
              <div className="flex items-center justify-between mb-6 relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-secondary px-3 py-1">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  <span className="font-mono-tech text-[11px] tracking-widest uppercase text-violet-deep">Online</span>
                </div>
                <span className="font-mono-tech text-[11px] text-muted-foreground">v1.0</span>
              </div>

              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary">
                  <img src="/atexra.svg" alt="Atexra" className="h-full w-full object-contain" />
                </div>

                <h3 className="font-heading text-2xl font-bold mb-1">
                  Atexra
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Available now for new projects. Reach out through any of the channels — we typically respond within a few hours.
                </p>

                {/* Established card inside */}
                <div className="rounded-xl border border-border bg-secondary p-4 mb-6">
                  <p className="font-mono-tech text-xs tracking-widest uppercase text-muted-foreground mb-2">Agency</p>
                  <h4 className="font-heading text-lg font-bold mb-1">Established in </h4>
                  <p className="font-heading text-xl font-bold">
                    <span className="text-foreground">12 </span>
                    <span className="text-gradient">MAR</span>
                    <span className="text-foreground"> 2026</span>
                  </p>
                </div>

                <a
                  href="https://docs.google.com/forms/d/17YJBQXJHkfELS56bJmzXUW0pPLHzZm3K-cufoUu7-kE/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-accent text-accent-foreground font-heading font-semibold glow-button hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="w-4 h-4" /> Book a call 
                </a>
              </div>
            </div>

            {/* Location information card — mobile only */}
            <div className="surface-card w-full max-w-sm rounded-xl p-6 transition-all duration-300 hover:border-accent/30 md:hidden">
              <div className="relative flex items-start gap-3">
                <div className="flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono-tech text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Office Location
                  </p>
                  <h4 className="font-heading text-sm font-semibold text-foreground mb-2">
                    Thirupattur
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    India | Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Icons — Mobile only (below location card) */}
            <div className="flex flex-wrap gap-3 md:hidden justify-center">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="surface-card flex h-12 w-12 items-center justify-center rounded-full text-accent transition-all duration-300 hover:scale-105 hover:border-accent/40 hover:bg-secondary"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
