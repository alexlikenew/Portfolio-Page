import React from 'react';
import arrowRight from '../assets/icons/arrow.svg';
import Button from "./Button.jsx";
import {aboutWide, contactPageMobile} from "../assets/img/index.jsx";

function Hero(props) {
    return (
        <div className="w-full min-h-screen flex justify-center items-start sm:items-center relative overflow-hidden">
            <div className="absolute sm:flex hidden w-full h-full top-0 left-0 -z-10">
                <img
                    src={aboutWide}
                    className="w-full h-full object-cover object-center sm:flex hidden"
                    alt=""
                    data-aos="fade-zoom-in"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                />
            </div>

            <div className="absolute flex sm:hidden w-full h-3/4 bottom-0 left-0 -z-10">
                <img
                    src={contactPageMobile}
                    loading="lazy"
                    className="w-full h-full object-contain object-bottom sm:hidden flex -z-2 relative"
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                />
            </div>

            <div
                className="container pt-24 sm:pt-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-5 sm:px-8 md:px-12 lg:px-16"
                data-aos="fade-up"
                data-aos-duration="800"
            >

                <div
                    className="flex flex-col text-center md:text-left items-center md:items-start"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <div
                        className="titles flex flex-col gap-4 sm:gap-6 max-w-xl"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="900"
                    >
                        <span
                            className="inline-flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <span className="dot"></span>
                            <span className="opacity-65">
                                Open to collaborative research and development
                            </span>
                        </span>

                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Your vision.<br/>My solutions.
                        </h1>

                        <span
                            className="text-base hidden sm:block sm:text-lg opacity-65 leading-relaxed px-2 sm:px-0"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            I build <span className="font-bold">beautiful</span> and{" "}
                            <span className="font-bold">high-performing</span> websites and web apps.<br/>
                            Helping teams deliver projects faster, smoother, and stress-free.
                        </span>
                    </div>

                    <div
                        className="hidden sm:flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-9 mb-10 sm:mb-14 w-full sm:w-auto"
                        data-aos="zoom-in-up"
                        data-aos-delay="600"
                        data-aos-duration="800"
                    >
                        <Button link="/linkedin" classes="btn btn-transparent w-full sm:w-auto">
                            LinkedIn
                        </Button>
                        <Button
                            link="/linkedin"
                            classes="btn btn-transparent w-full sm:w-auto flex items-center justify-center gap-2"
                        >
                            Contact
                            <img src={arrowRight} alt="" className="w-4 h-4"/>
                        </Button>
                    </div>
                </div>


                <div
                    className="flex justify-center items-center mt-10 md:mt-0"
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                ></div>
            </div>
        </div>
    );
}

export default Hero;
