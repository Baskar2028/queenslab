import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";
import logo from "@/assets/logo.png";
const Footer = () => (
  <footer className="border-t border-white/80 bg-[#26c0ce] px-5 py-12 text-white sm:px-8 sm:py-14">
    <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-start gap-8">
      <div>
        <Link to="/" className="inline-flex items-center gap-3" aria-label="ATEXRA home">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
            <img
              src={logo}
              alt=""
              className="h-8 w-8 object-contain"
            />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-white">
            ATEXRA
          </span>
        </Link>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white">
          Beyond the Obvious
        </p>
      </div>
      <div className="justify-self-end text-right">
        <h2 className="font-heading text-sm font-semibold text-white">Explore</h2>
        <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white">
          {[
            ["Home", "/"],
            ["Projects", "/projects"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link className="text-white transition-colors hover:text-white/70" to={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="mx-auto mt-8 max-w-7xl border-t border-white/70 pt-5 text-xs text-white">
      © {new Date().getFullYear()} ATEXRA. All rights reserved.
    </div>
  </footer>
);

export default Footer;
