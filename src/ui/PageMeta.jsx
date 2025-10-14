import { useEffect } from "react";

export default function PageMeta(props) {
    const defaults = {
        title:
            "Frontend Developer React – Tworzenie Nowoczesnych Stron Internetowych | Rzeszów | Oleksandr Petryshyn",
        description:
            "Tworzę szybkie i nowoczesne strony internetowe oparte na React i JavaScript. Jako Frontend Developer z Rzeszowa łączę estetykę, wydajność i nowoczesne technologie. Skontaktuj się i stwórzmy coś wyjątkowego!",
        keywords:
            "frontend developer Rzeszów, react developer, tworzenie stron internetowych Rzeszów, programista JavaScript, developer React, nowoczesne strony, strony dla firm Rzeszów, Oleksandr Petryshyn, AlexLikeNew",
        author: "Oleksandr Petryshyn",
        robots: "index, follow",
        language: "pl",
        googleVerification: "vGfWYV4LCBJ6jpJk7fSSHZAb3N6eWkJvWkjkk1e9Jzc",
        ogType: "website",
        ogImage: "https://alexlikenew.pl/alexlikenew-og-image.webp",
        ogLocale: "pl_PL",
        ogSiteName: "AlexLikeNew",
        twitterCard: "summary_large_image",
        twitterImage: "https://alexlikenew.pl/alexlikenew-og-image.webp",
        msTileColor: "#024BCC",
        themeColor: "#024BCC",
        canonical: "https://alexlikenew.pl/",
    };

    const meta = { ...defaults, ...props };

    useEffect(() => {
        // 🔹 Tytuł strony
        document.title = meta.title;

        // 🔹 Pomocnicza funkcja do aktualizacji meta tagów
        const setMeta = (attr, name, content) => {
            if (!content) return;
            let tag = document.querySelector(`${attr}="${name}"`);
            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute(attr, name);
                document.head.appendChild(tag);
            }
            tag.setAttribute("content", content);
        };

        // 🔹 Standardowe meta tagi
        setMeta("name", "description", meta.description);
        setMeta("name", "keywords", meta.keywords);
        setMeta("name", "author", meta.author);
        setMeta("name", "robots", meta.robots);
        setMeta("name", "language", meta.language);
        setMeta("name", "google-site-verification", meta.googleVerification);

        // 🔹 Open Graph
        setMeta("property", "og:type", meta.ogType);
        setMeta("property", "og:url", meta.canonical);
        setMeta("property", "og:title", meta.title);
        setMeta("property", "og:description", meta.description);
        setMeta("property", "og:image", meta.ogImage);
        setMeta("property", "og:locale", meta.ogLocale);
        setMeta("property", "og:site_name", meta.ogSiteName);

        // 🔹 Twitter
        setMeta("name", "twitter:card", meta.twitterCard);
        setMeta("name", "twitter:url", meta.canonical);
        setMeta("name", "twitter:title", meta.title);
        setMeta("name", "twitter:description", meta.description);
        setMeta("name", "twitter:image", meta.twitterImage);

        // 🔹 Kolory
        setMeta("name", "msapplication-TileColor", meta.msTileColor);
        setMeta("name", "theme-color", meta.themeColor);

        // 🔹 Canonical link
        let canonicalTag = document.querySelector("link[rel='canonical']");
        if (!canonicalTag) {
            canonicalTag = document.createElement("link");
            canonicalTag.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalTag);
        }
        canonicalTag.setAttribute("href", meta.canonical);
    }, [meta]);

    return null;
}
