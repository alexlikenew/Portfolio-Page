import React from 'react';
import aboutImage from '../assets/img/about.jpg';
function About() {
    return (
        <div className="w-full mt-40 mb-40" >
            <div className="container container--1110 grid grid-cols-2 gap-36">
                <div className="w-full flex flex-col">
                    <h2 className="text-5xl font-bold relative inline-block  text-white">
                        About me
                        <span className="brush-bg left-[-25%] w-full"></span>
                    </h2>

                    {/*<p className="opacity-70 mt-4 mb-12">Software Engineer , Rzeszów Polska</p>*/}
                    <div className="flex flex-col mt-18 gap-3 mb-8">
                        <span className="text-xl">Create Unlimited Teams</span>
                        <span className="text-base opacity-70">With lots of unique blocks, you can easily build a page without coding. </span>
                    </div>
                    <div className="flex flex-col gap-3 ">
                        <span className="text-xl">Create Unlimited Teams</span>
                        <span className="text-base opacity-70">With lots of unique blocks, you can easily build a page without coding. </span>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center ">
                    <img src={aboutImage} className="w-full h-full object-cover rounded-[50px] object-cover shadow-lg shadow-gray-700" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default About;