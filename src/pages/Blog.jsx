import React from 'react';
import LatestArticles from "../ui/LatestArticles.jsx";
import PageMeta from "../ui/PageMeta.jsx";

function Blog(props) {

    return (
        <>
            <PageMeta
                title="Blog – Frontend Development Insights, React Tutorials & Tips | Oleksandr Petryshyn"
                description="Read the latest articles by Oleksandr Petryshyn on React, frontend development, performance optimization, and modern web design trends."
                keywords="React blog, frontend tips, web development articles, React tutorials, performance optimization, Oleksandr Petryshyn"
                canonical="https://alexlikenew.pl/blog"
            />

            <LatestArticles articlesCount="24" classes="mt-30"/>
        </>
    );
}

export default Blog;