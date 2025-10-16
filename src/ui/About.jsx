import React from 'react';
import {aboutMe} from "../assets/img/index.jsx";

function About({classes}) {
    return (
        <div className={`w-full mt-20 sm:mt-28 md:mt-32 lg:mt-40 mb-20 sm:mb-28 md:mb-32 lg:mb-40 ${classes}`}>
            <div
                className="container container--1110 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-24 lg:gap-36">
                <div className="w-full flex flex-col">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold relative inline-block text-white text-center sm:text-left">
                        About me
                        <span className="brush-bg left-[-25%] w-full h-[3em]"></span>
                    </h2>
                    <div className="flex flex-col mt-8 sm:mt-12 md:mt-14 lg:mt-18 gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                        <span className="text-lg sm:text-xl">Who I Am</span>
                        <span className="text-sm sm:text-base opacity-70">I am a Front-End Developer passionate about creating intuitive and high-performing web applications. <span
                            className="font-bold">I focus on delivering clean, maintainable code</span> that provides seamless user experiences and solves real business challenges. </span>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                        <span className="text-lg sm:text-xl">What I Do</span>
                        <span className="text-sm sm:text-base opacity-70">I build <span className="font-bold">responsive and interactive interfaces,</span> optimize websites for performance and SEO, and implement best practices to ensure code quality across all projects.</span>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <span className="text-lg sm:text-xl">My Approach</span>
                        <span className="text-sm sm:text-base opacity-70">I enjoy collaborating closely with designers and back-end developers to turn concepts into functional, polished applications. I value efficient <span
                            className="font-bold">workflows, teamwork, and continuous learning,</span> always striving to improve both the user experience and technical implementation.</span>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img loading="lazy" src={aboutMe}
                         className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-cover"
                         alt="Image of Oleksandr Petryshyn sitting on a coach"/>
                </div>
            </div>
        </div>
    );
}

export default About;