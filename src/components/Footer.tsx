
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-white/20 bg-[#109FBA] px-5 py-10 text-white sm:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1.3fr_1fr]">

      {/* Brand */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-3"
          aria-label="ATEXRA home"
        >
          <img
            src={logo}
            alt=""
            className="h-14 w-14 object-contain brightness-0 invert"
          />

          <span className="font-heading text-lg font-bold tracking-tight text-white">
            ATEXRA
          </span>
        </Link>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
          Build to build for you
        </p>
      </div>

      {/* Navigation */}
      <div>
        <h2 className="font-heading text-sm font-semibold text-white">
          Explore
        </h2>

        <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/80">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Projects", "/projects"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link
                className="transition-colors duration-200 hover:text-white hover:underline"
                to={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="mx-auto mt-8 max-w-7xl border-t border-white/25 pt-5 text-xs text-white/75">
      © {new Date().getFullYear()} ATEXRA. All rights reserved.
    </div>
  </footer>
);

export default Footer;
