import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppContent } from "./App";
import { pageMetadata, publicPages } from "@/config/seoConfig";

export { pageMetadata, publicPages };

export const renderPage = (path: string) =>
  renderToString(
    <QueryClientProvider client={new QueryClient()}>
      <TooltipProvider>
        <StaticRouter location={path}>
          <AppContent />
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>,
  );
