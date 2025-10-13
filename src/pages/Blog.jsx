import React from 'react';
import LatestArticles from "../ui/LatestArticles.jsx";
import usePageMeta from "../hooks/usePageMeta.jsx";
import PageMeta from "../hooks/usePageMeta.jsx";

function Blog(props) {
 
    return (
        <>
            <PageMeta
                title="Blog – Frontend Tips & React Tutorials | Oleksandr Petryshyn"
                description="Articles about frontend development, React best practices and performance optimizations."
                canonical="https://alexlikenew.pl/blog"
            />
            <LatestArticles articlesCount="24"/>
        </>
    );
}

export default Blog;