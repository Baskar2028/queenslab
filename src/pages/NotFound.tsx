import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary px-6">
      <div className="surface-card w-full max-w-md rounded-2xl p-8 text-center sm:p-10">
        <a href="/" className="mb-8 inline-flex items-center gap-2" aria-label="Atexra home">
          <img src="/atexra.svg" alt="" className="h-9 w-9" />
          <span className="font-heading text-lg font-bold">Atexra</span>
        </a>
        <h1 className="mb-3 text-5xl font-bold text-violet-deep">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-flex rounded-lg bg-accent px-5 py-3 font-semibold text-accent-foreground hover:bg-violet-deep">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
