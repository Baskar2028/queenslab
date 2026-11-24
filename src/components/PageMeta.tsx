import { useEffect } from "react";
import { canonicalUrl, pageMetadata, type PageMetadataKey, SITE_URL } from "@/config/seoConfig";

interface PageMetaProps {
  page: PageMetadataKey;
}

const setMeta = (selector: string, attribute: "name" | "property", value: string) => {
  let meta = document.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement("meta");
    const key = selector.match(/\[(?:name|property)="([^"]+)"\]/)?.[1];
    if (key) meta.setAttribute(attribute, key);
    document.head.append(meta);
  }
  meta.content = value;
};

const PageMeta = ({ page }: PageMetaProps) => {
  useEffect(() => {
    const metadata = pageMetadata[page];
    document.title = metadata.title;
    setMeta('meta[name="description"]', "name", metadata.description);
    setMeta('meta[name="robots"]', "name", metadata.robots ?? "index, follow");

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (metadata.path) {
      const link = canonical ?? document.createElement("link");
      link.rel = "canonical";
      link.href = canonicalUrl(metadata.path);
      if (!canonical) document.head.append(link);
    } else {
      canonical?.remove();
    }

    const url = metadata.path ? canonicalUrl(metadata.path) : `${SITE_URL}${window.location.pathname}`;
    setMeta('meta[property="og:title"]', "property", metadata.title);
    setMeta('meta[property="og:description"]', "property", metadata.description);
    setMeta('meta[property="og:url"]', "property", url);
    setMeta('meta[property="og:type"]', "property", "website");
    setMeta('meta[property="og:image"]', "property", `${SITE_URL}/atexra.svg`);
    setMeta('meta[name="twitter:title"]', "name", metadata.title);
    setMeta('meta[name="twitter:description"]', "name", metadata.description);
    setMeta('meta[name="twitter:image"]', "name", `${SITE_URL}/atexra.svg`);
  }, [page]);

  return null;
};

export default PageMeta;
