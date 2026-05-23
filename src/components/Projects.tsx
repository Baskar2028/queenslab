import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import projectPhotoStudio from "@/assets/project-photo-studio.png";
import projectGym from "@/assets/project-gym.png";
import projectFashion from "@/assets/project-fashion.png";
import projectMajestica from "@/assets/project-majestica.png";
import projectWhatsappBot from "@/assets/project-whatsapp-bot.jpg";

const projects = [
  {
    title: "Portfolio Website for Photo Studio",
    desc: "A cinematic photography portfolio with full-screen hero, gallery, and booking system.",
    image: projectPhotoStudio,
    tags: ["React", "Photography", "Portfolio"],
    link: "https://pixel-perfect-studio-w6t4.vercel.app/",
  },
  {
    title: "Gym & Fitness Website",
    desc: "High-energy fitness platform with class schedules, membership plans, and trainer profiles.",
    image: projectGym,
    tags: ["Fitness", "Full Stack", "Booking"],
    link: "https://mscodegym.netlify.app/",
  },
  {
    title: "Fashion Wear Website",
    desc: "Premium menswear brand site with lookbook, collection showcase, and e-commerce ready design.",
    image: projectFashion,
    tags: ["Fashion", "E-Commerce", "UI/UX"],
    link: "https://fashionsite-one.vercel.app/",
  },
  {
    title: 'Mental Health Chatbot – "Majestica"',
    desc: "AI-powered mental health companion with empathetic conversations and mood tracking features.",
    image: projectMajestica,
    tags: ["AI", "Chatbot", "Mental Health"],
    link: "https://majestica-frontend.vercel.app/",
  },
  {
    title: "WhatsApp Bot",
    desc: "Automated WhatsApp chatbot with smart message handling, scheduled replies, and rich media flows. Developed by Co-Founder.",
    image: projectWhatsappBot,
    tags: ["Bot", "Automation", "Developed by Co-Founder"],
    link: "#",
  },
];

const Projects = () => {
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
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Our <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`glass-card rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-[0_0_40px_hsl(276_90%_37%/0.2)] hover:border-primary/30 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="overflow-hidden h-56 sm:h-64">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-accent/15 text-accent font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
