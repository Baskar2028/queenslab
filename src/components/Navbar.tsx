import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import bannerDark from "../assets/banner-dark.png";
import bannerLight from "../assets/banner-light.png";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMobileOpen(false);
  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav className="surface-nav mx-auto flex w-full max-w-7xl items-center justify-between gap-2 rounded-2xl border border-border/80 px-3 py-2.5 shadow-[0_12px_42px_-26px_hsl(var(--accent)/0.55)] backdrop-blur-xl sm:gap-4 sm:px-5">
        <Link
          to="/"
          className="flex h-10 w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white"
          aria-label="ATEXRA home"
          onClick={closeMenu}
        >
          <img
            src={theme === "dark" ? banner-dark : banner-light}
            alt="ATEXRA"
            className="h-auto w-[160px] max-w-none shrink-0"
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
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
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
