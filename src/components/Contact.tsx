import { useEffect, useRef, useState } from "react";
import { MessageCircle, Instagram, Linkedin, MapPin, Mail } from "lucide-react";
import logoImg from "@/assets/logo.png";

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

        <div className="relative grid md:grid-cols-2 gap-10 items-stretch min-h-[420px]">
          {/* LEFT — Location bottom + intro */}
          <div className="relative flex flex-col justify-between">
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
                    className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-accent hover:border-accent/40 hover:bg-accent/10 hover:scale-110 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Location bottom-left — Desktop only */}
            <div className="mt-10 hidden md:inline-flex items-center gap-3 self-start glass-card rounded-full px-5 py-3 border-accent/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-mono-tech text-sm tracking-wider text-foreground">
                Located in <span className="text-accent font-semibold">India | Tamil Nadu | Thirupattur</span>
              </span>
            </div>
          </div>

          {/* RIGHT — Queen's Lab status card centered vertically */}
          <div className="flex flex-col items-center justify-center md:justify-end gap-6">
            <div className="glass-card rounded-3xl p-10 w-full max-w-md relative overflow-hidden hover:border-accent/40 transition-all duration-500">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-accent/15 blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center justify-between mb-6 relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono-tech text-[11px] tracking-widest uppercase text-emerald-300">Online</span>
                </div>
                <span className="font-mono-tech text-[11px] text-muted-foreground">v1.0</span>
              </div>

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-transparent mb-5 overflow-hidden">
                  <img src={logoImg} alt="Queen's Lab Logo" className="w-full h-full object-contain" />
                </div>

                <h3 className="font-heading text-2xl font-bold mb-1">
                  Queen's <span className="text-gradient">Lab</span>
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Available now for new projects. Reach out through any of the channels — we typically respond within a few hours.
                </p>

                {/* Established card inside */}
                <div className="bg-white rounded-2xl p-4 mb-6 border-2 border-pink-100">
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

            {/* Location Information Card — Mobile only (below Queen's Lab) */}
            <div className="glass-card rounded-2xl p-6 w-full max-w-sm border-accent/20 hover:border-accent/30 transition-all duration-300 md:hidden">
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
                  className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-accent hover:border-accent/40 hover:bg-accent/10 hover:scale-110 transition-all duration-300"
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
