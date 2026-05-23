import { useEffect, useRef, useState } from "react";
import { Target, Eye, Sparkles } from "lucide-react";

const About = () => {
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
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className={`container mx-auto max-w-6xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* <p className="font-mono-tech text-xs text-accent text-center tracking-[0.3em] uppercase mb-3">// about</p> */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          About <span className="text-gradient accent-underline">Queen's Lab</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: paragraph */}
          <div className="glass-card rounded-2xl p-8 md:p-10 text-muted-foreground text-base md:text-lg leading-relaxed space-y-5">
            <p>
              <span className="text-foreground font-medium">Queen's Lab</span> is a digital development studio focused on building impactful, modern and premium web solutions for ambitious brands and growing startups around the world.
            </p>
            <p>
              We specialize in <span className="text-accent font-medium">AI chatbots</span>, <span className="text-accent font-medium">smart applications</span>, and <span className="text-accent font-medium">cutting-edge web platforms</span> — combining clean design, scalable architecture and a sharp eye for detail in every pixel we ship.
            </p>
            <p>
              Driven by a deep interest in <span className="text-accent font-medium">artificial intelligence</span>, <span className="text-accent font-medium">cybersecurity</span> and <span className="text-accent font-medium">web development</span>, we craft secure, scalable digital experiences with a strong focus on continuous learning and innovation.
            </p>
          </div>

          {/* Right: vision/mission cards + founders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-colors">
              <Eye className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">To become a global studio known for premium, future-ready web apps and provide solutions for various real world problems.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-colors">
              <Target className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Help businesses grow in digital platforms by turning ideas into elegant digital products.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 sm:col-span-2 hover:border-accent/30 transition-colors">
              <Sparkles className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">What We Offer?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We offering Elagent style digital products using react.js. Real world Solutions . AI powered chatbots — all designed with a premium, professional finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
