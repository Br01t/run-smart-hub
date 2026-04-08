import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: string;
  imageUrl?: string;
}

const SITE_NAME = "Runners Hub";
const BASE_URL = "https://www.runners-hub.org";
const DEFAULT_IMAGE = "https://www.runners-hub.org/og-image.png";

const SEOHead = ({ title, description, path = "", type = "website", imageUrl }: SEOHeadProps) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const fullUrl = `${BASE_URL}${cleanPath === "/" ? "" : cleanPath}`;
    const canonicalUrl = `${BASE_URL}${cleanPath === "/" ? "/" : cleanPath}`;
    const image = imageUrl || DEFAULT_IMAGE;

    document.title = fullTitle;

    const setMeta = (nameOrProp: string, content: string) => {
      let el = document.querySelector(`meta[name="${nameOrProp}"]`) || document.querySelector(`meta[property="${nameOrProp}"]`);
      if (!el) {
        el = document.createElement("meta");
        if (nameOrProp.startsWith("og:") || nameOrProp.startsWith("article:")) {
          el.setAttribute("property", nameOrProp);
        } else {
          el.setAttribute("name", nameOrProp);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Basic meta
    setMeta("description", description);

    // Canonical
    setLink("canonical", canonicalUrl);

    // Open Graph
    setMeta("og:title", fullTitle);
    setMeta("og:description", description);
    setMeta("og:type", type);
    setMeta("og:url", fullUrl);
    setMeta("og:site_name", SITE_NAME);
    setMeta("og:image", image);
    setMeta("og:locale", "en_US");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // AI Search optimization meta
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("googlebot", "index, follow, max-snippet:-1, max-image-preview:large");

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description, path, type, imageUrl]);

  return null;
};

export default SEOHead;
