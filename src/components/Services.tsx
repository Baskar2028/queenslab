import { useEffect, useRef, useState } from "react";
import { Code2, Layout, Server, ArrowRight } from "lucide-react";
import servicesIllustration from "@/assets/services-illustration.png";

const services = [
  {
    icon: <Layout className="w-7 h-7" />,
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive interfaces built with React, Tailwind, and modern animation systems.",
    tags: ["React", "Tailwind", "UI/UX"],
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: "Full Stack Development",
    desc: "End-to-end web apps with secure APIs, databases, authentication, and clean deploy pipelines.",
    tags: ["Node", "APIs", "Database"],
  },
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Web Development",
    desc: "From landing pages to complex platforms — fast, SEO-ready, and built to scale with your brand.",
    tags: ["Performance", "SEO", "Scalable"],
  },
];

const Services = () => {
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
    <section id="services" className="py-24 px-6 bg-muted/20" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <p className="font-mono-tech text-xs text-accent text-center tracking-[0.3em] uppercase mb-3">// services</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Our <span className="text-gradient accent-underline">Services</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-14" />

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Service cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-6 group hover:border-accent/40 hover:-translate-y-1 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${i === 2 ? "sm:col-span-2" : ""}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/25 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono-tech px-2.5 py-1 rounded-md bg-accent/10 text-accent">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`sm:col-span-2 group flex items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-accent text-accent-foreground font-heading font-semibold glow-button hover:scale-[1.01] transition-transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <span>Book Now — Let's build your premium website</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Illustration */}
          <div
            className={`hidden lg:flex lg:col-span-2 justify-center items-center transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/15 blur-[80px] rounded-full" />
              <img
                src={servicesIllustration}
                alt="Web development illustration"
                loading="lazy"
                width={1024}
                height={1024}
                className="relative w-full max-w-xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
