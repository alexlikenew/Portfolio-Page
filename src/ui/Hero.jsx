import React from 'react';
import heroBg from '../assets/img/hero-bg.png';
import heroVideo from '../assets/video/hero-bg.mp4';
import linkedInnSVG from '../assets/icons/linkedin-small-white.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import Button from "./Button.jsx";

function Hero(props) {
    return (
        <div className="w-full h-screen flex justify-center items-center relative ">
            <div className="absolute w-full h-full top-0 left-0 -z-1 py-7 px-7 ">
                {/*<img src={heroBg} className="w-full h-full rounded-t-[50px]" alt=""/>*/}
                <video  className="w-full h-full rounded-[50px] object-cover shadow-lg shadow-gray-700" autoPlay muted loop >
                    <source  type="video/mp4" src={heroVideo}  />
                </video>
            </div>

            <div className="container grid grid-cols-2 gap-20">
                <div className="flex flex-col">
                    <div className="titles flex flex-col gap-6">
                     <span className="inline-flex items-center gap-3">
                      <span className="dot"></span>
                      <span className="text-white opacity-65">Otwarty na współpracę i wspólny rozwój</span>
                    </span>


                        <h1 className="text-6xl font-bold text-white uppercase">Twoja wizja, moje rozwiązania</h1>
                        <span className="text-lg opacity-65 text-white"
                        >
                          Tworzę <span className="font-bold text-white">funkcjonalne</span> i <span className=" text-white font-bold">estetyczne</span> strony oraz aplikacje internetowe. Pomagam zespołom budować projekty szybko, sprawnie i bez zbędnego stresu.
                        </span>
                    </div>
                    <div className="flex gap-5">
                        <Button link="/linkedin" classes="btn btn-transparent mt-9 mb-14" >LinkedIn </Button>
                        <Button link="/linkedin" classes="btn btn-transparent mt-9 mb-14" >Skontaktuj się <img className="" src={arrowRight} alt=""/></Button>
                    </div>

                </div>

                <div className="flex justify-center items-center "></div>

            </div>
        </div>
    );
}

export default Hero;