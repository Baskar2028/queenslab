import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const sections = navLinks
      .map((link) => document.getElementById(link.href.split("#")[1]))
      .filter((section): section is HTMLElement => section !== null);
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    sections.forEach((section) => sectionObserver.observe(section));
    return () => {
      window.removeEventListener("scroll", onScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMobileOpen(false);
  const isActiveLink = (href: string) => activeSection === href.split("#")[1];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`surface-nav mx-auto flex w-full max-w-7xl items-center justify-between gap-5 rounded-xl border px-4 py-3 transition-shadow duration-300 sm:px-6 ${
          scrolled ? "shadow-[0_8px_28px_-18px_hsl(var(--foreground)/0.38)]" : "shadow-sm"
        }`}
      >
        <a
          href="/#home"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Atexra home"
          onClick={closeMenu}
        >
          <img src="/atexra.svg" alt="" className="h-9 w-9" />
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            Atexra
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={isActiveLink(link.href) ? "location" : undefined}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors after:absolute after:bottom-1.5 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-accent after:transition-transform ${
                  isActiveLink(link.href)
                    ? "text-violet-deep after:scale-x-100"
                    : "text-muted-foreground after:scale-x-0 hover:bg-secondary hover:text-foreground hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className="hidden shrink-0 items-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-violet-deep md:inline-flex"
        >
          Start a project
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-foreground transition-colors hover:bg-secondary md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="surface-nav mx-4 mt-2 rounded-xl border p-3 shadow-lg md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActiveLink(link.href) ? "location" : undefined}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary ${
                    isActiveLink(link.href) ? "bg-secondary text-violet-deep" : "text-foreground"
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="border-t border-border pt-2">
              <a
                href="/#contact"
                className="block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
                onClick={closeMenu}
              >
                Start a project
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
