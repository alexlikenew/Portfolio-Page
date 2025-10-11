import React from 'react';
import arrowRight from '../assets/icons/arrow.svg';
import Button from "./Button.jsx";
import {aboutWide} from "../assets/img/index.jsx";

function Hero(props) {
    return (
        <div className="w-full h-screen flex justify-center items-center relative ">
            <div className="absolute w-full h-full top-0 left-0 -z-1  ">
                <img src={aboutWide} className="w-full h-full object-cover " alt=""/>
            </div>

            <div className="container grid grid-cols-2 gap-20">
                <div className="flex flex-col">
                    <div className="titles flex flex-col gap-6">
                     <span className="inline-flex items-center gap-3">
                      <span className="dot"></span>
                      <span className=" opacity-65">Open to collaborative research and development</span>
                    </span>


                        <h1 className="text-6xl font-bold  uppercase">Your vision.<br></br>My solutions.</h1>
                        <span className="text-lg opacity-65 "
                        >
                        I build <span className="font-bold ">beautiful</span> and <span
                            className="font-bold ">high-performing</span> websites and web apps.<br></br>
                            Helping teams deliver projects faster, smoother, and stress-free.
                        </span>
                    </div>
                    <div className="flex gap-5">
                        <Button link="/linkedin" classes="btn btn-transparent mt-9 mb-14">LinkedIn </Button>
                        <Button link="/linkedin" classes="btn btn-transparent mt-9 mb-14">Contact <img className=""
                                                                                                       src={arrowRight}
                                                                                                       alt=""/></Button>
                    </div>

                </div>

                <div className="flex justify-center items-center "></div>

            </div>
        </div>
    );
}

export default Hero;