import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-[min(880px,100svh)] items-center overflow-hidden px-6 pb-16 pt-32"
  >
    <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden="true" />

    <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div className="max-w-2xl">
        <p className="mb-6 inline-flex items-center gap-3 font-mono-tech text-xs font-medium uppercase tracking-[0.18em] text-violet-deep">
          <span className="h-px w-8 bg-accent" />
          Intelligent Digital Solutions
        </p>

        <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
          We build websites that take your{" "}
          <span className="text-violet-deep">business</span> to the next level.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Build Smarter. Automate Better.
        </p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          Discover <span className="text-violet-deep">·</span> Solve{" "}
          <span className="text-violet-deep">·</span> Innovate
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#delivers"
            className="glow-button inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            View Project
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="https://docs.google.com/forms/d/17YJBQXJHkfELS56bJmzXUW0pPLHzZm3K-cufoUu7-kE/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-secondary"
          >
            Start Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[540px]">
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-secondary/80" />
        <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-[0_24px_70px_-45px_hsl(var(--foreground)/0.28)] sm:p-8">
          <div className="flex items-center justify-between border-b border-border pb-5">
            <div className="flex items-center gap-3">
              <img src="/atexra.svg" alt="" className="h-9 w-9" />
              <div>
                <p className="font-heading text-sm font-semibold">Atexra</p>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Digital studio
                </p>
              </div>
            </div>
            <span className="font-mono-tech text-xs text-muted-foreground">01 — 03</span>
          </div>

          <div className="relative my-7 flex aspect-[1.28] items-center justify-center overflow-hidden rounded-xl bg-secondary">
            <svg
              viewBox="0 0 420 300"
              fill="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path d="M0 75H420M0 150H420M0 225H420M105 0V300M210 0V300M315 0V300" stroke="#EAE4F3" />
              <circle cx="210" cy="150" r="95" stroke="#DCCBFF" />
              <circle cx="210" cy="150" r="67" stroke="#C4A9FF" />
              <circle cx="210" cy="150" r="39" stroke="#8B5CF6" strokeOpacity=".65" />
              <path d="M210 48V252M108 150H312" stroke="#8B5CF6" strokeOpacity=".25" />
              <circle cx="210" cy="150" r="7" fill="#6D28D9" />
              <circle cx="210" cy="55" r="4" fill="#8B5CF6" />
              <circle cx="305" cy="150" r="4" fill="#8B5CF6" />
            </svg>
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white bg-white text-4xl font-bold text-violet-deep shadow-[0_12px_30px_-18px_hsl(var(--violet-deep)/0.7)]">
              A
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x divide-border">
            {["AI solutions", "Web platforms", "Automation"].map((item, index) => (
              <div key={item} className="px-2 first:pl-0 last:pr-0 sm:px-4">
                <p className="font-mono-tech text-[10px] text-violet-deep">0{index + 1}</p>
                <p className="mt-1 text-xs font-medium leading-snug text-foreground sm:text-sm">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-lg border border-border bg-white px-4 py-3 text-xs font-medium text-muted-foreground shadow-sm sm:flex">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Designed for what’s next
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
