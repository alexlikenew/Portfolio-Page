import React from 'react';
import heroBg from '../assets/img/hero-bg.png';
import Button from "./Button.jsx";

function Hero(props) {
    return (
        <div className="w-full h-screen flex justify-center items-center relative">
            <img src={heroBg} className="absolute w-full h-full top-0 left-0 -z-1" alt=""/>
            <div className="container grid grid-cols-2 gap-20">
                <div className="flex flex-col">
                    <div className="titles flex flex-col gap-6">
                        <span className="text-lg text-white opacity-80">Cześć, nazywam się Oleksandr Petryshyn</span>
                        <h1 className="text-6xl font-bold text-white uppercase">Twoja wizja, moje rozwiązania</h1>
                        <span className="text-lg opacity-65 text-white"
                        >
                          Tworzę funkcjonalne i estetyczne strony oraz aplikacje internetowe. Pomagam zespołom budować projekty szybko, sprawnie i bez zbędnego stresu.
                        </span>
                    </div>
                    <Button link="/linkedin" classes="btn btn-secondary mt-9 mb-14" >LinkedIn</Button>
                </div>

                <div className="flex justify-center items-center "></div>

            </div>
        </div>
    );
}

export default Hero;