import { useState, useEffect } from "react";
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
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Hide navbar when scrolled past home section (900px threshold)
      setHideNavbar(window.scrollY > 900);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none transition-all duration-500 ${hideNavbar ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"}`}>
      <div
        className={`pointer-events-auto w-full max-w-4xl flex items-center justify-between gap-4 px-8 py-4 rounded-full glass border border-accent/20 transition-all duration-500 ${
          scrolled
            ? "shadow-[0_20px_50px_-10px_hsl(var(--accent)/0.4),0_15px_40px_-12px_hsl(0_0%_0%/0.2)] backdrop-blur-2xl"
            : "shadow-[0_15px_40px_-12px_hsl(0_0%_0%/0.2)]"
        }`}
      >
        <a href="/#home" className="text-xl font-heading font-bold tracking-tight whitespace-nowrap">
          <span className="text-gradient">Queen's</span>{" "}
          <span className="text-foreground">Lab</span>
        </a>

        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-body text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-accent/10 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="pointer-events-auto absolute top-full mt-2 left-4 right-4 md:hidden glass rounded-2xl p-5 border border-accent/20 shadow-[0_20px_50px_-10px_hsl(0_0%_0%/0.2)]">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-2.5 rounded-lg text-foreground font-body hover:bg-accent/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
