import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import bannerLight from "../assets/banner-light.png";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const closeMenu = () => setMobileOpen(false);
  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setVisible(true);
  }, [location.key]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 24) {
        setVisible(true);
      } else if (mobileOpen || scrollDifference < -4) {
        setVisible(true);
      } else if (scrollDifference > 4 && currentScrollY > 80) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 px-3 pt-3 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none sm:px-5 sm:pt-5 ${
        visible || mobileOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <nav className="surface-nav mx-auto flex w-full max-w-7xl items-center justify-between gap-2 rounded-2xl border border-border/80 px-3 py-2.5 shadow-[0_12px_42px_-26px_hsl(var(--accent)/0.55)] backdrop-blur-xl sm:gap-4 sm:px-5">
        <Link
          to="/"
          className="group flex h-10 w-[160px] shrink-0 items-center justify-center overflow-hidden"
          aria-label="ATEXRA home"
          onClick={closeMenu}
        >
          <img
            src={bannerLight}
            alt="ATEXRA"
            className="h-auto w-[160px] max-w-none shrink-0 transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`rounded-xl px-3 py-2 text-[13px] font-medium transition-all ${
                  isActive(href)
                    ? "bg-accent/10 text-accent shadow-sm"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              aria-current={location.pathname === "/contact" ? "page" : undefined}
              className={`rounded-xl px-3 py-2 text-[13px] font-medium transition-all ${
                location.pathname === "/contact"
                  ? "bg-accent/10 text-accent shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex shrink-0 items-center gap-1.5">
          <a
            href={siteConfig.bookCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Book a Call
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary xl:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="surface-nav mx-auto mt-2 max-w-7xl rounded-2xl border border-border/80 p-3 shadow-lg backdrop-blur-xl xl:hidden"
        >
          <ul className="grid gap-1 sm:grid-cols-2">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive(href)
                      ? "bg-accent/10 text-accent"
                      : "text-foreground hover:bg-secondary"
                  }`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                aria-current={location.pathname === "/contact" ? "page" : undefined}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  location.pathname === "/contact"
                    ? "bg-accent/10 text-accent"
                    : "text-foreground hover:bg-secondary"
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="sm:col-span-2">
              <a
                href={siteConfig.bookCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
                onClick={closeMenu}
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
