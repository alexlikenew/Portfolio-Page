import React from 'react';
import Hero from "../ui/Hero.jsx";
import About from "../ui/About.jsx";
import Collaborate from "../ui/Collaborate.jsx";
import Skills from "../ui/Skills.jsx";
import Tools from "../ui/Tools.jsx";
import Experience from "../ui/Experience.jsx";
import LatestArticles from "../ui/LatestArticles.jsx";
import FAQ from "../ui/FAQ.jsx";

function Index(props) {
    return (
        <>
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