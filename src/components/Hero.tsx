import { useEffect, useRef, useState } from "react";
import { SiGithub, SiOpenai, SiGoogle, SiFlask, SiMysql, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const codeLines = [
  "import { future } from 'queens-lab';",
  "",
  "const queensLab = {",
  "  mission: 'build premium web experiences',",
  "  stack: ['React', 'Node', 'AI', 'Tailwind'],",
  "  craft: () => render(<Premium />),",
  "};",
  "",
  "async function deploy(brand) {",
  "  const site = await design(brand);",
  "  const optimized = await optimize(site);",
  "  return launch(optimized);",
  "}",
  "",
  "// Helping businesses grow worldwide",
  "export default queensLab;",
  "",
  "function Hero() {",
  "  const [pixels, setPixels] = useState(0);",
  "  useEffect(() => {",
  "    const id = requestAnimationFrame(loop);",
  "    return () => cancelAnimationFrame(id);",
  "  }, []);",
  "  return <Canvas glow={true} />;",
  "}",
  "",
  "// premium • professional • crafted",
  "const palette = {",
  "  bg: '#0a0a0a',",
  "  accent: '#ffb3c6',",
  "  text: '#fafafa',",
  "};",
  "",
  "router.get('/api/launch', async (req, res) => {",
  "  const data = await db.projects.find();",
  "  return res.json({ ok: true, data });",
  "});",
];

// Tokenize a code line into colored spans (uses dark colors so they're visible on light bg)
const tokenize = (line: string, key: number) => {
  if (line.trim().startsWith("//")) {
    return <span key={key} className="text-emerald-700/80">{line}</span>;
  }
  const parts = line.split(/(\b(?:const|let|var|function|return|async|await|import|export|default|from|if|else|new|true|false|null)\b|'[^']*'|"[^"]*"|\/\/.*$|\b\d+\b)/g);
  return (
    <span key={key}>
      {parts.map((p, i) => {
        if (!p) return null;
        if (/^(const|let|var|function|return|async|await|import|export|default|from|if|else|new)$/.test(p))
          return <span key={i} className="text-fuchsia-700/85">{p}</span>;
        if (/^(true|false|null)$/.test(p))
          return <span key={i} className="text-orange-600/85">{p}</span>;
        if (/^['"]/.test(p))
          return <span key={i} className="text-emerald-700/85">{p}</span>;
        if (/^\d+$/.test(p))
          return <span key={i} className="text-amber-700/85">{p}</span>;
        if (/^\/\//.test(p))
          return <span key={i} className="text-emerald-700/80">{p}</span>;
        return <span key={i} className="text-slate-700/85">{p}</span>;
      })}
    </span>
  );
};

const techLogos = [
  { Icon: VscVscode, name: "VS Code", color: "#007ACC" },
  { Icon: SiGithub, name: "GitHub", color: "#181717" },
  { Icon: SiOpenai, name: "ChatGPT", color: "#10A37F" },
  { Icon: SiGoogle, name: "Gemini", color: "#4285F4" },
  { Icon: SiFlask, name: "Flask", color: "#000000" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
];

const Hero = () => {
  const [charCount, setCharCount] = useState(0);
  const fullText = codeLines.join("\n");
  const rafRef = useRef<number>();

  useEffect(() => {
    let last = performance.now();
    const tick = (now: number) => {
      if (now - last > 35) {
        setCharCount((c) => (c >= fullText.length ? 0 : c + 2));
        last = now;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [fullText.length]);

  const typedText = fullText.slice(0, charCount);
  const typedLines = typedText.split("\n");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Live coding background — full section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex">
          <div className="w-12 md:w-14 border-r border-accent/20 bg-foreground/[0.03] font-mono-tech text-[11px] md:text-xs text-muted-foreground/60 leading-7 pt-8 text-right pr-2 select-none">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <pre className="flex-1 p-8 pt-8 font-mono-tech text-[12px] md:text-sm leading-7 whitespace-pre-wrap select-none">
            {typedLines.map((l, i) => (
              <div key={i}>
                {tokenize(l, i)}
                {i === typedLines.length - 1 && (
                  <span className="inline-block w-2 h-4 bg-accent/80 ml-0.5 align-middle animate-pulse" />
                )}
              </div>
            ))}
          </pre>
        </div>

        <div className="absolute inset-x-0 h-px bg-accent/30 animate-float" style={{ top: "30%" }} />
      </div>

      {/* Soft readability overlay — keeps code visible behind */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="font-mono-tech text-xs md:text-sm text-accent mb-6 tracking-[0.3em] uppercase opacity-0 animate-fade-up">
          &lt;/&gt; Crafted with code
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-center opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
  We build websites that take your{" "}
  <span className="text-gradient">business</span>
  <br />
  to the next level
</h1>
        

        {/* Baby pinkish decorative line */}
        <div className="flex justify-center mb-8">
          <div className="h-1.5 w-24 bg-gradient-to-r from-pink-300 to-pink-200 rounded-full opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }} />
        </div>

        <p className="font-mono-tech text-sm sm:text-base md:text-lg text-foreground/90 mb-3 tracking-wider opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Discover <span className="text-accent">•</span> Solve <span className="text-accent">•</span> Innovate
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#delivers"
            className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-heading font-semibold glow-button hover:scale-105 transition-transform duration-200"
          >
            View Project
          </a>
          <a
            href="https://docs.google.com/forms/d/17YJBQXJHkfELS56bJmzXUW0pPLHzZm3K-cufoUu7-kE/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-accent/50 text-foreground font-heading font-semibold hover:bg-accent/10 hover:border-accent transition-all duration-200"
          >
            Start Project
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
