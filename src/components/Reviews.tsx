import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
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
    <section id="reviews" className="py-24 px-6 bg-muted/20" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <p className="font-mono-tech text-xs text-accent text-center tracking-[0.3em] uppercase mb-3">// testimonials</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Customer <span className="text-gradient accent-underline">Review</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />

        <div
          className={`relative glass-card rounded-3xl p-10 md:p-16 max-w-4xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Quote className="absolute -top-5 left-8 w-10 h-10 text-accent/70 fill-accent/20" />

          <div className="flex items-center gap-1 mb-5 justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-accent fill-accent" />
            ))}
            <span className="ml-2 font-mono-tech text-sm text-muted-foreground">5 / 5</span>
          </div>

          <p className="text-foreground/90 text-lg md:text-xl leading-relaxed text-center font-body italic mb-7">
            “    Highly satisfied with the quality and creativity. The website helped improve my business presence online.Very happy with the website design and support. The website looks professional, smooth, and easy to use. Thank you for the great work!”
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center font-heading font-bold text-accent">
              KV
            </div>
            <div className="text-left">
              <p className="font-heading font-semibold text-foreground">KV Sky Turf</p>
              <p className="font-mono-tech text-xs text-muted-foreground tracking-wider uppercase">Verified Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
