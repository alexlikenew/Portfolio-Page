import React from 'react';
import About from "../ui/About.jsx";
import PageMeta from "../hooks/usePageMeta.jsx";

function AboutPage(props) {
    return (
        <>
            <PageMeta
                title="About – React Frontend Developer | Rzeszów | Oleksandr Petryshyn"
                description="Learn more about Oleksandr Petryshyn — a Frontend Developer specializing in React, creating modern, fast and accessible web apps."
                canonical="https://alexlikenew.pl/about"
            />
            <About/>
        </>
    );
}

export default AboutPage;