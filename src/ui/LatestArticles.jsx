import React from 'react';
import ArticleCard from "./ArticleCard.jsx";
import {useArticles} from "../features/articles/useArticles.jsx";
import {getArticles} from "../services/apiArticles.jsx";

function LatestArticles({articlesCount, classes}) {
    let {data: articles, isPending, error} = useArticles();
    let blogSchema = ''

    if (!isPending) {
        blogSchema = {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Frontend Development Blog – Aleksander | React Developer Rzeszów",
            "description": "Blog o frontendzie, React, JavaScript i projektowaniu stron internetowych. Praktyczne porady, insighty z pracy i doświadczenia z codziennego kodowania.",
            "url": "https://twojadomena.pl/blog",
            "publisher": {
                "@type": "Person",
                "name": "Aleksander",
                "url": "https://twojadomena.pl",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://twojadomena.pl/images/og-image.jpg"
                }
            },
            "blogPost": articles.slice(0, 3).map(article => ({
                "@type": "BlogPosting",
                "headline": article.title,
                "image": article.image_url,
                "url": `https://twojadomena.pl/blog/${article.url}`,
                "author": {
                    "@type": "Person",
                    "name": article.author || "Aleksander"
                },
                "publisher": {
                    "@type": "Person",
                    "name": article.author || "Aleksander"
                },
                "datePublished": article.createdDate,
                "articleSection": article.category,
                "description": article.content.slice(0, 150),
                "timeRequired": article.readingTime
            }))
        };
    }

    return (
        <div
            className={`w-full mt-20 sm:mt-28 md:mt-32 lg:mt-40 mb-20 sm:mb-28 md:mb-32 lg:mb-50 ${classes ? classes : ''}`}>
            <div className="container flex justify-center flex-col gap-6 sm:gap-8 md:gap-10">
                <div className="flex items-center flex-col" data-aos="fade-up" data-aos-delay="50">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold relative inline-block mb-8 sm:mb-12 md:mb-14 lg:mb-18 text-white">Articles
                        <span className="brush-bg left-[-44%] w-[190%] h-[4.3em]"></span></h2>
                    <p className="opacity-70 mb-2 sm:mb-3 md:mb-4 text-center text-sm sm:text-base">
                        Here I share my thoughts, lessons, and discoveries from everyday work as a frontend
                        developer.<br></br>
                        You’ll find practical tips, project insights, and stories from real-world experience.
                    </p>
                </div>
                {isPending ? <div className="flex justify-center">Loading...</div> :
                    <div
                        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-8">
                        {articles.slice(0, articlesCount).sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate)).map((article, index) =>
                            <ArticleCard delayTime={index * 200} key={article.url}
                                         article={article}/>)}
                    </div>}
                {!isPending &&
                    <script type="application/ld+json">
                        {JSON.stringify(blogSchema)}
                    </script>}
            </div>
        </div>
    );
}

export default LatestArticles;