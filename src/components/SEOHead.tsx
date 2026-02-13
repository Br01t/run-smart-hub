import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_NAME = "RunLab";
const BASE_URL = "https://runlab.app";

const SEOHead = ({ title, description, path = "" }: SEOHeadProps) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        if (name.startsWith("og:")) {
          el.setAttribute("property", name);
        } else {
          el.setAttribute("name", name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle);
    setMeta("og:description", description);
    setMeta("og:type", "website");
    setMeta("og:url", `${BASE_URL}${path}`);
    setMeta("og:site_name", SITE_NAME);

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description, path]);

  return null;
};

export default SEOHead;
