import React from 'react';
import Hero from "../ui/Hero.jsx";
import About from "../ui/About.jsx";
import Collaborate from "../ui/Collaborate.jsx";
import Skills from "../ui/Skills.jsx";

function Index(props) {
    return (
        <>
        <Hero/>
            <About/>
            <Skills/>
            <Collaborate/>
        </>
    );
}

export default Index;