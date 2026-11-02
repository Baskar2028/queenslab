import { useEffect, useRef, useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import deliversKvskyturf from "@/assets/delivers-kvskyturf.png";

const Delivers = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="delivers" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <p className="font-mono-tech text-xs text-accent text-center tracking-[0.3em] uppercase mb-3">// what we delivered</p>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-center mb-4">
          Our <span className="text-gradient accent-underline">Delivers</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />

        <div
          className={`surface-card mx-auto max-w-4xl overflow-hidden rounded-2xl group transition-all duration-500 hover:border-accent/40 hover:shadow-[0_18px_50px_-32px_hsl(var(--accent)/0.55)] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative overflow-hidden">
            <img
              src={deliversKvskyturf}
              alt="KV Sky Turf — Premium Sports Turf booking website"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1.5 backdrop-blur">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="font-mono-tech text-[11px] tracking-widest uppercase text-accent">Live Project</span>
            </div>
          </div>

          <div className="p-6 md:p-7 text-center">
            <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">
              KV Sky Turf
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              A delivered website for a sports turf business, giving KV Sky Turf a dedicated
              presence online.
            </p>
            <a
              href="https://kvskyturf.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-accent-foreground font-heading font-semibold glow-button hover:scale-105 transition-transform"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivers;
