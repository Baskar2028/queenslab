import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FaqPage from "./pages/FaqPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Projects from "./components/Projects.tsx";
import Pricing from "./components/Pricing.tsx";
import Founder from "./pages/Founder.tsx";
import CoFounder from "./pages/CoFounder.tsx";
import NotFound from "./pages/NotFound.tsx";
import Coo from "./pages/Coo.tsx";
import SeoSpecialist from "./pages/SeoSpecialist.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const RouteMotion = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousScrollBehavior;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const sections = Array.from(document.querySelectorAll("main section")).filter(
      (section) => section.id !== "home" && section.id !== "community"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    sections.forEach((section) => {
      section.classList.add("section-reveal");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        section.classList.remove("section-reveal", "is-visible");
      });
    };
  }, [location.key]);

  return null;
};

const SiteLayout = () => {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
    localStorage.removeItem("atexra-theme");
  }, []);

  return (
    <>
      <Navbar />
      <RouteMotion />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/leaddeveloper" element={<Navigate to="/founder" replace />} />
        <Route path="/tester" element={<CoFounder />} />
        <Route path="/developer" element={<Coo />} />
        <Route path="/seo-specialist" element={<SeoSpecialist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SiteLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
