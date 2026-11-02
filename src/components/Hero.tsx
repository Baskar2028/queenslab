import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

const codeSnippets = [
  [
    'const website = await buildSite({',
    '  business: "local bakery",',
    '  pages: ["home", "about", "contact"],',
    '  responsive: true,',
    "});",
    "const preview = await website.publish();",
    'if (preview.ready) {',
    "  await notifyBusiness(preview.url);",
    "  await trackVisitorInsights(preview.id);",
    "}",
  ],
  [
    "const processInquiry = async (form) => {",
    '  const lead = await api.post("/leads", form);',
    "  const summary = await assistant.summarize(lead);",
    "  await crm.add({ ...lead, summary });",
    "  await email.sendWelcome(lead.email);",
    '  return { status: "complete" };',
    "};",
    "const workflow = automate(processInquiry);",
    "await workflow.connect(calendar);",
    "await workflow.run();",
  ],
];

const tokenPattern =
  /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:const|await|async|return|if|true|false|new)\b|\b[A-Z][A-Za-z0-9_]*\b|\b[A-Za-z_$][\w$]*(?=\s*\()|[{}()[\].,:;=])/g;

const getTokenClass = (token: string) => {
  if (/^["'`]/.test(token)) return "hero-code-string";
  if (/^(const|await|async|return|if|true|false|new)$/.test(token)) {
    return "hero-code-keyword";
  }
  if (/^[A-Z]/.test(token)) return "hero-code-type";
  if (/^[A-Za-z_$][\w$]*$/.test(token)) return "hero-code-method";
  if (/^[{}()[\].,:;=]+$/.test(token)) return "hero-code-punctuation";
  return "hero-code-plain";
};

const renderHighlightedLine = (line: string): ReactNode[] => {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of line.matchAll(tokenPattern)) {
    const token = match[0];
    const startIndex = match.index ?? 0;
    if (startIndex > lastIndex) {
      parts.push(line.slice(lastIndex, startIndex));
    }
    parts.push(
      <span className={getTokenClass(token)} key={`${startIndex}-${token}`}>
        {token}
      </span>,
    );
    lastIndex = startIndex + token.length;
  }

  if (lastIndex < line.length) parts.push(line.slice(lastIndex));
  return parts;
};

const HeroCodeBackground = () => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const timerRef = useRef<number | null>(null);
  const activeCode = codeSnippets[snippetIndex].join("\n");

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(preference.matches);

    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    setVisibleChars(0);

    if (prefersReducedMotion) {
      setVisibleChars(activeCode.length);
      return;
    }

    let characterIndex = 0;
    const typeNextCharacter = () => {
      characterIndex += 1;
      setVisibleChars(characterIndex);

      if (characterIndex < activeCode.length) {
        timerRef.current = window.setTimeout(typeNextCharacter, 32);
      } else {
        timerRef.current = window.setTimeout(
          () => setSnippetIndex((current) => (current + 1) % codeSnippets.length),
          1200,
        );
      }
    };

    timerRef.current = window.setTimeout(typeNextCharacter, 300);
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, [activeCode, prefersReducedMotion]);

  const visibleLines = activeCode.slice(0, visibleChars).split("\n").slice(0, 10);
  const renderSide = (lines: string[], lineOffset: number, side: "left" | "right") => (
    <pre className={`hero-code-side hero-code-side-${side}`}>
      <code>
        {lines.map((line, index) => (
          <span className="hero-code-line" key={`${snippetIndex}-${lineOffset + index}`}>
            <span className="hero-code-line-number">
              {String(lineOffset + index + 1).padStart(2, "0")}
            </span>
            <span className="hero-code-line-content">{renderHighlightedLine(line)}</span>
            {!prefersReducedMotion &&
              visibleChars < activeCode.length &&
              index === lines.length - 1 &&
              lineOffset + index === visibleLines.length - 1 && (
                <span className="hero-code-cursor" />
              )}
          </span>
        ))}
      </code>
    </pre>
  );

  return (
    <div className="hero-code-backdrop" aria-hidden="true">
      {renderSide(visibleLines.slice(0, 5), 0, "left")}
      {renderSide(visibleLines.slice(5, 10), 5, "right")}
    </div>
  );
};

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-[min(760px,100svh)] items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8"
  >
    <div className="hero-aurora" aria-hidden="true">
      <span className="hero-aurora-glow hero-aurora-cyan" />
      <span className="hero-aurora-glow hero-aurora-mint" />
    </div>
    <HeroCodeBackground />

    <div className="relative z-10 mx-auto w-full max-w-6xl">
      <div className="hero-content mx-auto max-w-4xl text-center">
        <p className="hero-content-item mb-5 inline-flex items-center gap-3 font-mono-tech text-xs font-medium uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Intelligent Digital solutions
        </p>
        <h1 className="hero-content-item text-[clamp(2.2rem,5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-foreground">
          We build <span className="text-glacier">websites</span> that help businesses{" "}
          <span className="text-glacier">grow.</span>
        </h1>
        <p className="hero-content-item mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Atexra creates modern websites for small businesses, with smart chatbots and automation
          to make everyday work easier.
        </p>

        <div className="hero-content-item mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={siteConfig.bookCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            to="/projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-secondary"
          >
            Explore Projects
            <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="hero-content-item mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Website Development
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            AI Chatbots
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Business Automation
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
