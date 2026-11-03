import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import founderImage from "@/assets/founder.jpeg";
import PageMeta from "@/components/PageMeta";
import { siteConfig } from "@/config/siteConfig";

const roles = ["AI-Integrated Web Developer", "Content Creator", "Freelancer"];

const AboutPage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setRoleIndex(0);
      setDeleting(false);
      setTypedRole(roles[0]);
      return;
    }

    const role = roles[roleIndex];
    const finishedTyping = !deleting && typedRole === role;
    const finishedDeleting = deleting && typedRole.length === 0;
    const delay = finishedTyping ? 1300 : finishedDeleting ? 220 : deleting ? 38 : 72;

    const timer = window.setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (finishedDeleting) {
        setDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      } else if (deleting) {
        setTypedRole((current) => current.slice(0, -1));
      } else {
        setTypedRole(role.slice(0, typedRole.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, reducedMotion, roleIndex, typedRole]);

  return (
    <>
      <PageMeta
        title="About"
        description="Meet Baskar and learn about ATEXRA's modern web development, AI-integrated digital solutions, and automation services."
      />
      <main className="page-shell px-5 sm:px-8">
        <section className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="order-2 max-w-2xl lg:order-1">
            <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-accent">
              
            </p>
            <h1             className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              This is Baskar
            </h1>
            <p
              className="mt-4 min-h-14 font-heading text-xl font-medium text-accent sm:min-h-8 sm:text-2xl"
              aria-label={roles[roleIndex]}
              aria-live="polite"
            >
              <span aria-hidden="true">{typedRole}</span>
              <span className="typing-cursor ml-0.5" aria-hidden="true">
                |
              </span>
            </p>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build digital experiences that help businesses communicate clearly online. My work
              brings together modern web development, useful AI integrations, and practical
              automation—guided by the needs of each project.
            </p>
            <a
              href="/founder"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-accent px-5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              More About Founder
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-[470px] lg:order-2">
            <div className="absolute -inset-4 -rotate-3 rounded-[2rem] border border-accent/25 bg-accent/[0.04]" />
            <div className="surface-card relative overflow-hidden rounded-[1.6rem] p-3">
              <img
                src={founderImage}
                alt="founder image"
                className="aspect-[4/5] w-full rounded-[1.1rem] object-cover object-center"
                width={768}
                height={960}
              />
              <div className="absolute bottom-7 left-7 rounded-xl border border-white/15 bg-background/85 px-4 py-3 shadow-lg backdrop-blur-md">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-accent">
                  Founder & CEO
                </p>
                <p className="mt-1 font-heading text-sm font-semibold">Baskar K</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-7xl border-t border-border pt-14 sm:mt-32">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-accent">
              What we do
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              About ATEXRA
            </h2>
            <article className="surface-card mt-7 rounded-2xl border border-accent/15 bg-accent/[0.035] p-6 shadow-[0_18px_50px_-36px_hsl(var(--accent)/0.55)] sm:p-9 lg:p-12">
              <p className="text-left text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
                <span className="font-semibold text-foreground">
                  Atexra builds clear, modern digital solutions
                </span>{" "}
                that help businesses establish, strengthen, and grow their online presence in an
                increasingly digital world. Our services include{" "}
                <span className="font-semibold text-accent">professional website development</span>,{" "}
                <span className="font-semibold text-accent">AI-powered chatbots</span>, and{" "}
                <span className="font-semibold text-accent">intelligent automation solutions</span>,
                designed to make businesses more accessible, efficient, and competitive. We combine
                creativity, modern technologies, and practical problem-solving to develop digital
                experiences that are not only visually appealing but also functional, user-friendly,
                and scalable. From building a strong digital identity to simplifying everyday
                business operations, improving customer engagement, and streamlining workflows, we
                focus on delivering solutions that create real value.{" "}
                <span className="font-semibold text-accent">
                  Our goal is to turn ideas into meaningful digital experiences
                </span>{" "}
                that empower businesses to work smarter, connect better with their customers, and
                achieve sustainable growth.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
