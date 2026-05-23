import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserCircle2, ArrowUpRight } from "lucide-react";
import founderImg from "@/assets/founder.jpeg";
import cofounderImg from "@/assets/cofounder.png";

const members = [
  {
    name: "Baskar",
    role: "Founder",
    image: founderImg,
    href: "/founder",
    desc: "Skilled in programming languages C, C++, Python, Java, JavaScript, React JS, MySQL, frameworks, Tailwind CSS, Flask, APIs, and Networking (Linux).",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "React", "MySQL", "Tailwind", "Flask", "APIs", "Linux"],
  },
  {
    name: "Rishikesh Ragav",
    role: "Co-Founder",
    image: cofounderImg,
    href: "/cofounder",
    desc: "Skilled in Wireshark, Nmap, HTTP/DNS traffic analysis, port scanning, network reconnaissance, and programming in JavaScript, C, and Python.",
    skills: ["Wireshark", "Nmap", "HTTP/DNS", "Port Scanning", "Recon", "JavaScript", "C", "Python"],
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
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Meet Our <span className="text-gradient accent-underline">Team</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-14" />

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {members.map((m, i) => (
            <Link
              to={m.href}
              key={m.name}
              className={`block cursor-pointer glass-card rounded-2xl p-7 group hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_hsl(var(--accent)/0.35)] transition-all duration-500 ${
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
                  <div className="absolute inset-0 bg-accent/30 blur-2xl rounded-full" />
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="relative w-32 h-32 rounded-full object-cover border-2 border-accent/40 group-hover:border-accent transition-colors"
                  />
                </div>

                <h3 className="font-heading font-bold text-2xl text-foreground">{m.name}</h3>
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
