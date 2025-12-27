import { useEffect } from "react";

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function upsertLink(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function upsertScriptJsonLd(id, json) {
  let el = document.head.querySelector(`script#${id}`);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
}

export default function Head({
  lang = "es",
  title,
  description,
  keywords,
  canonical,
  ogImage,
  siteName = "Librería dígital",
  locale = "es_EC"
}) {
  useEffect(() => {
    document.documentElement.lang = lang;

    if (title) document.title = title;

    upsertMeta('meta[name="description"]', { name: "description", content: description || "" });
    upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords || "" });
    upsertMeta('meta[name="robots"]', { name: "robots", content: "index, follow" });
    upsertMeta('meta[http-equiv="X-UA-Compatible"]', { "http-equiv": "X-UA-Compatible", content: "IE=edge" });

    if (canonical) {
      upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonical });
    }

    upsertLink('link[rel="shortcut icon"]', {
      rel: "shortcut icon",
      href: "/assets/img/favicon.ico",
      type: "image/x-icon"
    });
    upsertLink('link[rel="apple-touch-icon"]', {
      rel: "apple-touch-icon",
      href: "/assets/img/favicon.ico",
      type: "image/x-icon"
    });

    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical || "" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title || "" });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description || "" });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage || "" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: siteName });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: locale });
    upsertMeta('meta[property="og:image:type"]', { property: "og:image:type", content: "image/jpeg" });
    upsertMeta('meta[property="og:image:width"]', { property: "og:image:width", content: "1200" });
    upsertMeta('meta[property="og:image:height"]', { property: "og:image:height", content: "630" });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:url"]', { name: "twitter:url", content: canonical || "" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title || "" });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description || "" });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage || "" });

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": canonical || "#",
          url: canonical || "#",
          name: siteName,
          description: "Librería online para descubrir, comprar y compartir reseñas de libros.",
          inLanguage: lang === "es" ? "es-EC" : "en-US",
          publisher: { "@id": canonical || "#" }
        },
        {
          "@type": "WebPage",
          "@id": canonical || "#",
          url: canonical || "#",
          name: title || "",
          isPartOf: { "@id": canonical || "#" },
          inLanguage: lang === "es" ? "es-EC" : "en-US",
          description: description || "",
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: ogImage || "#",
            width: 1200,
            height: 630
          }
        }
      ]
    };

    upsertScriptJsonLd("ld-landing", jsonLd);
  }, [lang, title, description, keywords, canonical, ogImage, siteName, locale]);

  return null;
}