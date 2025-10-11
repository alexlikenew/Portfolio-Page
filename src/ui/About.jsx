import React from 'react';
import {aboutMe} from "../assets/img/index.jsx";

function About() {
    return (
        <div className="w-full mt-40 mb-40">
            <div className="container container--1110 grid grid-cols-2 gap-36">
                <div className="w-full flex flex-col">
                    <h2 className="text-5xl font-bold relative inline-block  text-white">
                        About me
                        <span className="brush-bg left-[-25%] w-full h-[3em]"></span>
                    </h2>

                    {/*<p className="opacity-70 mt-4 mb-12">Software Engineer , Rzeszów Polska</p>*/}
                    <div className="flex flex-col mt-18 gap-3 mb-8">
                        <span className="text-xl">Who I Am</span>
                        <span className="text-base opacity-70">I am a Front-End Developer passionate about creating intuitive and high-performing web applications. <span
                            className="font-bold">I focus on delivering clean, maintainable code</span>  that provides seamless user experiences and solves real business challenges. </span>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <span className="text-xl">What I Do</span>
                        <span className="text-base opacity-70">I build <span className="font-bold">responsive and interactive interfaces,</span>  optimize websites for performance and SEO, and implement best practices to ensure code quality across all projects.</span>
                    </div>
                    <div className="flex flex-col gap-3 ">
                        <span className="text-xl">My Approach</span>
                        <span className="text-base opacity-70">I enjoy collaborating closely with designers and back-end developers to turn concepts into functional, polished applications. I value efficient <span
                            className="font-bold">workflows, teamwork, and continuous learning,</span>  always striving to improve both the user experience and technical implementation.</span>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center ">
                    <img src={aboutMe} className="w-full h-full object-cover" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default About;