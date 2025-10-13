// src/components/PageMeta.jsx
import React from "react";
import {Helmet} from "react-helmet-async";

export default function PageMeta(props) {
    const defaults = {
        title: "Frontend Developer React – Modern Web Development | Rzeszów | Oleksandr Petryshyn",
        description: "I build fast and modern websites using React and JavaScript. As a Frontend Developer from Rzeszów, I combine design, performance, and modern technologies.",
        keywords: "frontend developer Rzeszów, react developer, modern websites, JavaScript developer, React developer, Oleksandr Petryshyn, AlexLikeNew",
        author: "Oleksandr Petryshyn",
        robots: "index, follow",
        language: "en",
        googleVerification: "vGfWYV4LCBJ6jpJk7fSSHZAb3N6eWkJvWkjkk1e9Jzc",
        ogType: "website",
        ogImage: "https://alexlikenew.pl/alexlikenew-og-image.webp",
        ogLocale: "en_US",
        ogSiteName: "AlexLikeNew",
        twitterCard: "summary_large_image",
        twitterImage: "https://alexlikenew.pl/alexlikenew-og-image.webp",
        msTileColor: "#024BCC",
        themeColor: "#024BCC",
        canonical: "https://alexlikenew.pl/",
    };

    const meta = {...defaults, ...props};

    if (!meta.ogTitle) meta.ogTitle = meta.title;
    if (!meta.ogDescription) meta.ogDescription = meta.description;
    if (!meta.ogUrl && meta.canonical) meta.ogUrl = meta.canonical;

    return (
        <Helmet>
            <title>{meta.title}</title>
            <meta name="title" content={meta.title}/>
            <meta name="description" content={meta.description}/>
            <meta name="keywords" content={meta.keywords}/>
            <meta name="author" content={meta.author}/>
            <meta name="robots" content={meta.robots}/>
            <meta name="language" content={meta.language}/>
            <meta name="google-site-verification" content={meta.googleVerification}/>

            {/* Open Graph */}
            <meta property="og:type" content={meta.ogType}/>
            <meta property="og:url" content={meta.ogUrl}/>
            <meta property="og:title" content={meta.ogTitle}/>
            <meta property="og:description" content={meta.ogDescription}/>
            <meta property="og:image" content={meta.ogImage}/>
            <meta property="og:locale" content={meta.ogLocale}/>
            <meta property="og:site_name" content={meta.ogSiteName}/>

            {/* Twitter */}
            <meta name="twitter:card" content={meta.twitterCard}/>
            <meta name="twitter:url" content={meta.ogUrl}/>
            <meta name="twitter:title" content={meta.ogTitle}/>
            <meta name="twitter:description" content={meta.ogDescription}/>
            <meta name="twitter:image" content={meta.twitterImage}/>

            {/* Theme */}
            <meta name="msapplication-TileColor" content={meta.msTileColor}/>
            <meta name="theme-color" content={meta.themeColor}/>

            {meta.canonical && <link rel="canonical" href={meta.canonical}/>}
        </Helmet>
    );
}
