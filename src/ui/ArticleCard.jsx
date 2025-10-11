import React, {useEffect} from 'react';
import {NavLink} from "react-router";
import Button from "./Button.jsx";
import {useTruncateText} from "../utils/Trancate.jsx";
import {aboutMe, authorImage} from '../assets/img/index.jsx';

function ArticleCard({article}) {
    const {title, category, readingTime, content, url, createdDate, author, image_url} = article;
    console.log(article)
    const shortTitle = useTruncateText(title, 50)
    const shortContent = useTruncateText(content, 150)


    useEffect(() => {
        const articleSchema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "alternativeHeadline": shortTitle,
            "image": [image_url],
            "author": {
                "@type": "Person",
                "name": author,
                "url": "https://alexlikenew.pl/"
            },
            "editor": author,
            "genre": category,
            "keywords": `${category}, frontend, react, javascript, blog, web development, programming`,
            "wordcount": content.split(' ').length,
            "publisher": {
                "@type": "Organization",
                "name": "AlexLikeNew",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://alexlikenew.pl/favicon-32x32.png"
                }
            },
            "url": `https://alexlikenew.pl/blog/${url}`,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://alexlikenew.pl/blog/${url}`
            },
            "datePublished": createdDate,
            "dateModified": createdDate,
            "description": shortContent,
            "articleBody": content,
            "inLanguage": "en",
        };


        const existingScript = document.getElementById(`article-json-ld-${url}`);
        if (existingScript) existingScript.remove();

    
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = `article-json-ld-${url}`;
        script.text = JSON.stringify(articleSchema);
        document.head.appendChild(script);

        return () => {
            const el = document.getElementById(`article-json-ld-${url}`);
            if (el) el.remove();
        };
    }, [article]);
    return (
        <NavLink className="flex w-full flex-col gap-4" to={`/blog/${url}`} title={title}>
            <div className="flex w-full">
                <img className="w-full h-auto max-h-80 object-cover" src={image_url} alt=""/>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                    <div className="text-sm bg-tertiary px-2 py-1 text-primary">{category}</div>
                    <div className="text-sm">{readingTime}</div>
                </div>
                <div className="text-lg ">{shortTitle}</div>
                <div className="">
                    <div className="opacity-70">{shortContent}
                    </div>

                </div>
                <div className="flex gap-4">
                    <img src={authorImage} className="w-12 h-12 rounded-full object-cover" alt=""/>
                    <div className="flex flex-col">
                        <span>{author}</span>
                        <span
                            className="text-sm opacity-50">Update on: {new Date(createdDate).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}</span>
                    </div>
                </div>

            </div>
        </NavLink>
    );
}

export default ArticleCard;