import React from 'react';
import About from "../ui/About.jsx";
import PageMeta from "../ui/PageMeta.jsx";

function AboutPage(props) {
    return (
        <>
            <PageMeta
                title="About – React Frontend Developer | Rzeszów | Oleksandr Petryshyn"
                description="Learn more about Oleksandr Petryshyn — a Frontend Developer specializing in React. Passionate about building scalable, accessible, and modern web applications."
                keywords="about React developer, frontend developer Rzeszów, portfolio, Oleksandr Petryshyn, web development, modern frontend"
                canonical="https://alexlikenew.pl/about"
            />

            <About/>
        </>
    );
}

export default AboutPage;