import React from 'react';
import experienceBackground from '../assets/img/experience-background.png';
import {education} from "../assets/img/index.jsx";
import aboutImage from "../assets/img/about-me.jpg";

function Experience(props) {
    return (
        <div className="w-full justify-center pt-70 pb-40 relative">
            <div className="absolute w-full h-full top-0 left-0 -z-1  ">
                <img src={experienceBackground} className="w-full h-full object-cover object-top" alt=""/>
            </div>
            <div className="container flex flex-col">

                <div className="flex items-center flex-col ">
                    <h2 className="text-5xl font-bold relative inline-block mb-18  text-white">Experience
                        <span className="brush-bg left-[-16%] w-[141%] h-[3.3em]"></span></h2>
                    {/*<h2 className="text-5xl font-bold mb-8">I work with every day</h2>*/}
                    <p className="opacity-70 mb-4 text-center ">I build modern, high-performance websites using the latest frontend standards.<br></br>
                        I combine clean design with strong functionality, focusing on detail and user experience.</p>
                </div>
            </div>

            <div className="container container--1110 grid grid-cols-2 gap-36 mt-40">
                <div className="w-full flex flex-col">
                    <h2 className="text-5xl font-bold relative inline-block  text-white mb-18">
                        Education
                        <span className="brush-bg left-[-25%] w-full h-[3em]"></span>
                    </h2>
                    <p className="opacity-70 mb-4  ">
                        Bachelor’s Degree in Computer Science — Programming<br></br>
                        University of Information Technology and Management in Rzeszów (2013–2017)</p>

                    {/*<p className="opacity-70 mt-4 mb-12">Software Engineer , Rzeszów Polska</p>*/}
                    <div className="flex flex-col  gap-3 mb-8">
                        <span className="text-xl">Create Unlimited Teams</span>
                        <span className="text-base opacity-70">With lots of unique blocks, you can easily build a page without coding. </span>
                    </div>
                    <div className="flex flex-col gap-3 ">
                        <span className="text-xl">Create Unlimited Teams</span>
                        <span className="text-base opacity-70">With lots of unique blocks, you can easily build a page without coding. </span>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center ">
                    <img src={education} className="w-full h-full object-cover"  alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Experience;