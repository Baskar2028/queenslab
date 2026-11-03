import { Bot, Code2, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Code2,
    title: "Modern web development",
    description: "Websites and applications designed around your goals and audience.",
  },
  {
    icon: Bot,
    title: "AI-integrated solutions",
    description: "AI bot considered where it can make an experience or workflow more useful.",
  },
  {
    icon: Workflow,
    title: "Business automation",
    description: "Practical automation explored around your existing tools and processes.",
  },
];

const About = () => (
  <section id="about" className="px-5 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-accent">
            About ATEXRA
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Technology, shaped around your business.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            ATEXRA builds modern digital experiences and helps businesses explore AI and
            automation where they serve a clear purpose. Each project starts with understanding
            what needs to work better.
          </p>
          <Link
            to="/founder"
            className="mt-6 inline-flex min-h-10 items-center text-sm font-semibold text-accent transition-colors hover:text-foreground"
          >
            Meet the founder <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article key={title} className="surface-card rounded-2xl p-5 sm:p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-base font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
