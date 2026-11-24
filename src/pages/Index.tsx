import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import HomeFaq from "@/components/HomeFaq";
import Community from "@/components/Community";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        page="home"
      />
      <main>
        <Hero />
        <section className="px-5 py-6 sm:px-8 sm:py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-2xl border border-accent/20 bg-accent/[0.055] p-6 sm:flex-row sm:items-center sm:p-9">
            <div>
              <p className="font-mono-tech text-xs uppercase tracking-[0.16em] text-accent">
                Explore our work
              </p>
              <h2 className="mt-2 font-heading text-2xl font-semibold sm:text-3xl">
                See what thoughtful technology can do.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-accent px-5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              View projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        <Pricing compact />
        <HomeFaq />
        <Community />
        <Reviews />
        <Contact homeSection />
      </main>
    </div>
  );
};

export default Index;
