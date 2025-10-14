import React from 'react';
import arrowRight from '../assets/icons/arrow.svg';
import Button from "./Button.jsx";
import {aboutWide} from "../assets/img/index.jsx";
function Hero(props) {
    return (
        <div className="w-full min-h-screen flex justify-center items-center relative overflow-hidden">
            <div className="absolute w-full h-full top-0 left-0 -z-10">
                <img
                    src={aboutWide}
                    className="w-full h-full object-cover object-center"
                    alt=""
                />
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-5 sm:px-8 md:px-12 lg:px-16">
                {/* Left side */}
                <div className="flex flex-col text-center md:text-left items-center md:items-start">
                    <div className="titles flex flex-col gap-4 sm:gap-6 max-w-xl">
                        <span className="inline-flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base">
                            <span className="dot"></span>
                            <span className="opacity-65">
                                Open to collaborative research and development
                            </span>
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                            Your vision.<br />My solutions.
                        </h1>

                        <span className="text-base sm:text-lg opacity-65 leading-relaxed px-2 sm:px-0">
                            I build <span className="font-bold">beautiful</span> and{" "}
                            <span className="font-bold">high-performing</span> websites and web apps.<br />
                            Helping teams deliver projects faster, smoother, and stress-free.
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-9 mb-10 sm:mb-14">
                        <Button link="/linkedin" classes="btn btn-transparent w-full sm:w-auto">
                            LinkedIn
                        </Button>
                        <Button link="/linkedin" classes="btn btn-transparent w-full sm:w-auto flex items-center justify-center gap-2">
                            Contact
                            <img src={arrowRight} alt="" className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex justify-center items-center mt-10 md:mt-0"></div>
            </div>
        </div>
    );
}


export default Hero;