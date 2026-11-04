import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserCircle2, ArrowUpRight, SearchCheck } from "lucide-react";
import founderImg from "@/assets/founder.jpeg";
import developerImg from "@/assets/Deepak.jpeg";
import cofounderImg from "@/assets/cofounder.png";

const members = [
  {
    name: "Baskar",
    role: "Founder",
    image: founderImg,
    href: "/about",
    desc: "Skilled in programming languages C, C++, Python, Java, JavaScript, React JS, APIs,Linux.",
    skills: ["Public Speaking","C", "C++", "Python", "Java", "JavaScript","React JS", "APIs", "Linux"],
  },
  {
    name: "Deepak",
    role: "Developer & Public Speaker",
    image: developerImg,
    href: "/developer",
    desc: "Skilled in programming languages C, C++, Python, Java, and JavaScript, as well as React, MySQL, Flask, APIs, and Linux.",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "React", "MySQL", "Flask", "APIs", "Linux"],
  },
  {
    name: "SEO Optimizer",
    role: "SEO Specialist",
    image: cofounderImg,
    href: "/seo-specialist",
    desc: "Focused on helping websites improve their search visibility through technical SEO, on-page improvements, and content optimization.",
    skills: ["Technical SEO", "On-page SEO", "Keyword Research", "Content"],
  },
];

const Community = () => {
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
    <section id="community" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <p className="font-mono-tech text-xs text-accent text-center tracking-[0.3em] uppercase mb-3">// community</p>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-center mb-4">
          Minds Behind<span className="text-gradient accent-underline"> Atexra</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {members.map((m, i) => (
            <Link
              to={m.href}
              key={m.name}
              className={`surface-card block cursor-pointer rounded-2xl p-7 group hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_20px_45px_-24px_hsl(var(--accent)/0.45)] transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center justify-between text-accent mb-5">
                <div className="flex items-center gap-2">
                  <UserCircle2 className="w-5 h-5" />
                  <span className="font-mono-tech text-xs uppercase tracking-widest">Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      width={768}
                      height={768}
                      className="relative h-32 w-32 rounded-full border-2 border-border object-cover transition-colors group-hover:border-accent"
                    />
                  ) : (
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-border bg-accent/10 text-accent transition-colors group-hover:border-accent">
                      <SearchCheck className="h-12 w-12" aria-hidden="true" />
                    </div>
                  )}
                </div>

                <h3 className="font-heading font-semibold text-xl text-foreground">{m.name}</h3>
                <p className="font-mono-tech text-sm text-accent mt-1 mb-4">{m.role}</p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{m.desc}</p>

                <div className="flex flex-wrap justify-center gap-2">
                  {m.skills.map((s) => (
                    <span key={s} className="text-[11px] font-mono-tech px-2.5 py-1 rounded-md bg-accent/10 text-accent">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
