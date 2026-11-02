import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";
import logo from "@/assets/logo.png";
const Footer = () => (
  <footer className="border-t border-border bg-card/60 px-5 py-10 sm:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1.3fr_1fr_1fr]">
      <div>
        <Link to="/" className="inline-flex items-center gap-2" aria-label="ATEXRA home">
                     <img
  src={logo}
  alt="ATEXRA Logo"
  className="h-14 w-14 object-contain"
/>
          <span className="font-heading text-lg font-bold tracking-tight"></span>
        </Link>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Intelligent digital solutions. Modern websites, web applications, and thoughtful automation.
        </p>
      </div>
      <div>
        <h2 className="font-heading text-sm font-semibold">Explore</h2>
        <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Projects", "/projects"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link className="transition-colors hover:text-accent" to={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-heading text-sm font-semibold">Get in touch</h2>
        <a
          className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-accent"
          href={`mailto:${siteConfig.contactEmail}`}
        >
          {siteConfig.contactEmail}
        </a>
      </div>
    </div>
    <div className="mx-auto mt-8 max-w-7xl border-t border-border pt-5 text-xs text-muted-foreground">
      © {new Date().getFullYear()} ATEXRA. All rights reserved.
    </div>
  </footer>
);

export default Footer;
