import { useState } from "react";
import { ExternalLink } from "lucide-react";
import kvSkyTurfPreview from "@/assets/delivers-kvskyturf.png";
import PageMeta from "@/components/PageMeta";

type ProjectCategory = "Delivered" | "Also Offer" | "AI & Automation";
type FilterCategory = "All" | ProjectCategory;

interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  needsReview?: boolean;
}

const categories: FilterCategory[] = ["All", "Delivered", "Also Offer", "AI & Automation"];

const projects: Project[] = [
  {
    id: "kv-sky-turf",
    name: "KV Sky Turf",
    category: "Delivered",
    description:
      "A website created for KV Sky Turf, a sports turf business, with an online presence for its venue.",
    url: "https://kvskyturf.in/",
    image: kvSkyTurfPreview,
    imageAlt: "Existing KV Sky Turf website preview",
  },
  {
    id: "pixel-perfect-studio",
    name: "Pixel Perfect Studio",
    category: "Also Offer",
    description: "A sample website offering for a project named Pixel Perfect Studio.",
    url: "https://pixel-perfect-studio-w6t4.vercel.app/",
    needsReview: true,
    
  },
  {
    id: "fashion-website",
    name: "Fashion Website",
    category: "Also Offer",
    description: "A sample website offering for a fashion-focused project.",
    url: "https://fashionsite-one.vercel.app/",
    needsReview: true,
  },
  {
    id: "queens-gift-boutique",
    name: "Queens Gift Boutique",
    category: "Also Offer",
    description: "A sample website offering for a project named Queens Gift Boutique.",
    url: "https://queens-gift-boutique-main.vercel.app/",
    needsReview: true,
  },
  {
    id: "ms-code-gym",
    name: "MSCodeGym",
    category: "Also Offer",
    description: "The live page identifies this offering as Ms.Code Gym; details need review.",
    url: "https://mscodegym.netlify.app/",
    needsReview: true,
  },
  {
    id: "majestica",
    name: "Majestica",
    category: "AI & Automation",
    description:
      "An example digital project. Its purpose and available AI or automation functionality should be confirmed before publication.",
    url: "https://majestica-frontend.vercel.app/",
    needsReview: true,
  },
];

const ProjectVisual = ({ project }: { project: Project }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt ?? project.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="relative flex h-full min-h-52 items-end overflow-hidden bg-secondary p-6 sm:min-h-56"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--accent)/.13)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent)/.13)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute -right-10 -top-14 h-48 w-48 rounded-full border border-accent/20" />
        <div className="absolute -right-2 -top-6 h-32 w-32 rounded-full border border-accent/30" />
      </div>
      <div className="relative z-10">
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-accent">
          Sample offering
        </p>
        <p className="mt-2 max-w-[18rem] font-heading text-2xl font-semibold leading-tight text-foreground">
          {project.name}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">Preview image not available</p>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="surface-card group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
    <div className="relative overflow-hidden">
      <ProjectVisual project={project} />
      <span className="absolute left-4 top-4 rounded-full border border-border bg-card/90 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wide text-foreground backdrop-blur">
        {project.category}
      </span>
    </div>
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <h2 className="font-heading text-xl font-semibold">{project.name}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      {project.needsReview && (
        <p className="mt-3 text-xs text-muted-foreground">
          Description to review against the live project.
        </p>
      )}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex min-h-10 items-center gap-2 self-start text-sm font-semibold text-accent transition-colors hover:text-foreground"
      >
        Visit Website
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  </article>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <PageMeta
        title="Projects"
        description="Explore ATEXRA's delivered work and sample offerings in web development, AI, and automation."
      />
      <main className="page-shell px-5 sm:px-8">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-accent">
              Selected work & offerings
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Projects
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A delivered project alongside examples of the kinds of digital experiences ATEXRA
              can offer. Sample offerings are not presented as delivered client work.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`min-h-10 rounded-full border px-4 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div
            className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            aria-live="polite"
          >
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
