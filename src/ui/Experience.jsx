import React from 'react';
import experienceBackground from '../assets/img/experience-background.png';

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
        </div>
    );
}

export default Experience;