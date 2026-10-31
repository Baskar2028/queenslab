const Footer = () => (
  <footer className="border-t border-border px-6 py-8">
    <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
      <a href="/#home" className="flex items-center gap-2.5" aria-label="Atexra home">
        <img src="/atexra.svg" alt="" className="h-8 w-8" />
        <span className="font-heading text-base font-bold tracking-tight text-foreground">Atexra</span>
      </a>
      <p className="font-body text-center text-sm text-muted-foreground">
        Intelligent Digital Solutions. © 2026 Atexra. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
