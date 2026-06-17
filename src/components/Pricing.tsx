import { useEffect, useRef, useState } from "react";
import { Check, ArrowRight, Sparkles, GraduationCap } from "lucide-react";

const FORM_URL = "https://docs.google.com/forms/d/17YJBQXJHkfELS56bJmzXUW0pPLHzZm3K-cufoUu7-kE/edit";

const mainPlans = [
  {
    name: "Starter",
    price: "2,999",
    tagline: "Perfect launchpad for new brands",
    features: [
      "2 Pages",
      "WhatsApp Connect (Click & Book)",
      "Contact Form",
      "Mobile Optimization",
      "Basic SEO Setup",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "4,999",
    tagline: "Most loved by growing businesses",
    features: [
      "4 Pages",
      "Automatic Mail System",
      "Contact Form",
      "Secure Payment Gateway Integration",
      "Mobile Optimization",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "14,999",
    tagline: "Full-scale e-commerce experience",
    features: [
      "Modern Responsive website",
      "Database integration",
      "SEO setup",
      "Admin Dashboard",
      "Deployment support",
      "AI chabot integrated"
    ],
    popular: false,
  },
];

const studentPlans = [
  {
    name: "Portfolio",
    price: "599",
    features: ["Complete Responsive Portfolio",  "Simple & Stylish"],
  },
  {
    name: "Rich & Premium",
    price: "999",
    features: ["Premium Portfolio", "Added Resume Section"],
  },
];

const Pricing = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-24 px-6 bg-muted/20" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <p className="font-mono-tech text-xs text-accent text-center tracking-[0.3em] uppercase mb-3">// pricing</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2">
          Simple <span className="text-gradient accent-underline">Pricing</span>
        </h2>
        <p className="font-mono-tech text-xs text-accent text-center tracking-[0.2em] uppercase mb-4">Limited Offer</p>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-14" />

        {/* Main 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {mainPlans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-2xl p-7 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "border-accent/60 shadow-[0_0_50px_hsl(var(--accent)/0.25)] md:scale-[1.04]"
                  : "hover:border-accent/40"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground font-mono-tech text-[11px] font-bold tracking-widest uppercase shadow-lg shadow-accent/40">
                  <Sparkles className="w-3.5 h-3.5" /> Most Popular
                </div>
              )}

              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mb-5">{plan.tagline}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-heading text-2xl font-bold text-accent">Rs.</span>
                <span className="font-heading text-5xl font-extrabold text-foreground tracking-tight">{plan.price}</span>
                <span className="text-muted-foreground text-base ml-1">/-</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-heading font-semibold transition-all ${
                  plan.popular
                    ? "bg-accent text-accent-foreground glow-button hover:scale-[1.02]"
                    : "border border-accent/40 text-foreground hover:bg-accent/10 hover:border-accent"
                }`}
              >
                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Students section */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <GraduationCap className="w-5 h-5 text-accent" />
            <p className="font-mono-tech text-xs text-accent tracking-[0.3em] uppercase">// specially for students</p>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-2">
            Student <span className="text-gradient">Specials</span>
          </h3>
          <p className="font-mono-tech text-xs text-accent text-center tracking-[0.2em] uppercase mb-10">Limited Offer</p>

          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {studentPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={`glass-card rounded-2xl p-7 flex flex-col hover:border-accent/40 hover:-translate-y-1 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 3) * 120}ms` }}
              >
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="font-heading text-xl font-bold text-accent">Rs.</span>
                  <span className="font-heading text-4xl font-extrabold text-foreground tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">/-</span>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-accent" strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl border border-accent/40 text-foreground font-heading font-semibold hover:bg-accent/10 hover:border-accent transition-all"
                >
                  Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
