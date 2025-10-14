import React from 'react';
import Hero from "../ui/Hero.jsx";
import About from "../ui/About.jsx";
import Collaborate from "../ui/Collaborate.jsx";
import Skills from "../ui/Skills.jsx";
import Tools from "../ui/Tools.jsx";
import Experience from "../ui/Experience.jsx";
import LatestArticles from "../ui/LatestArticles.jsx";
import FAQ from "../ui/FAQ.jsx";
import PageMeta from "../ui/PageMeta.jsx";

function Index(props) {

    return (

        <>
            <PageMeta
                title="React Frontend Developer – Modern Websites and Web Apps | Rzeszów | Oleksandr Petryshyn"
                description="I'm Oleksandr Petryshyn, a React Frontend Developer from Rzeszów. I build fast, beautiful, and high-performing websites using React, JavaScript, and modern tools."
                keywords="React developer, frontend developer Rzeszów, modern web development, JavaScript developer, responsive websites, Oleksandr Petryshyn, AlexLikeNew"
                canonical="https://alexlikenew.pl/"
            />
            <Hero/>
            <About/>
            <Skills/>
            <Collaborate/>
            <Tools/>
            <Experience/>
            <LatestArticles articlesCount="3"/>
            <FAQ/>
        </>
    );
}

export default Index;