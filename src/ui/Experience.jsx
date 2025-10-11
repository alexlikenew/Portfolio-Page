import React from 'react';
import {argoniumImage, education, experienceBg, netiImage, splentumImage} from "../assets/img/index.jsx";


function Experience(props) {
    return (
        <div className="w-full justify-center pt-60 pb-60 relative">
            <div className="absolute w-full h-full top-0 left-0 -z-1  ">
                <img src={experienceBg} className="w-full h-full " alt=""/>
            </div>
            <div className="container container--1110 flex flex-col">
                <div className="flex items-center flex-col ">
                    <h2 className="text-5xl font-bold relative inline-block mb-18  text-white">Experience
                        <span className="brush-bg left-[-16%] w-[141%] h-[3.3em]"></span></h2>
                    {/*<h2 className="text-5xl font-bold mb-8">I work with every day</h2>*/}
                    <p className="opacity-70 mb-4 text-center ">I build modern, high-performance websites using the
                        latest frontend standards.<br></br>
                        I combine clean design with strong functionality, focusing on detail and user experience.</p>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex gap-8 items-center">
                        <img className="w-[75px]" src={argoniumImage} alt="Splentum company icon" title="Splentum"/>
                        <div className="flex flex-col ">
                            <span className="text-lg">Argonium Sp. z o. o.</span>
                            <p className=" text-sm">Jan 2025 – Present |
                                Junior Front-End Developer </p>
                            <p className="text-sm mt-2">I work on the company’s proprietary CMS platform, contributing
                                to both its development and implementation for new client projects. I collaborate
                                closely with back-end developers and designers to create responsive, high-performing
                                websites. My role also includes SEO optimization and ensuring code quality across
                                multiple projects.</p>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center">
                        <img className="w-[75px]" src={splentumImage} alt="Splentum company icon" title="Splentum"/>
                        <div className="flex flex-col ">
                            <span className="text-lg">Splentum Sp. z o. o.</span>
                            <p className=" text-sm">Mar 2016 – Oct 2017 |
                                Junior Front-End Developer </p>
                            <p className="text-sm mt-2">I supported the design and development of a web application for
                                a financial data integration platform. My main focus was building the investment
                                calculator logic in JavaScript and improving the app’s performance and usability. I also
                                handled testing and implemented both visual and technical fixes to ensure a smooth user
                                experience.</p>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center">
                        <img className="w-[75px]" src={netiImage} alt="Neti company icon" title="Neti"/>
                        <div className="flex flex-col ">
                            <span className="text-lg">Neti Sp. z o. o.</span>
                            <p className=" text-sm">Dec 2015 – Feb 2016 |
                                Junior Front-End Developer (Internship)</p>
                            <p className="text-sm mt-2">During my internship at Neti, I worked on front-end features and
                                interactive scripts,
                                gaining hands-on experience with real production code. It was my first opportunity to
                                apply JavaScript and MongoDB in a professional environment and learn how to build
                                maintainable, user-focused interfaces.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container container--1110 grid grid-cols-2 gap-36 mt-50">
                <div className="w-full flex flex-col">
                    <h2 className="text-5xl font-bold relative inline-block  text-white mb-18">
                        Education
                        <span className="brush-bg left-[-25%] w-full h-[3em]"></span>
                    </h2>
                    <p className=" mb-4  ">
                        Bachelor’s Degree in Computer Science — Programming<br></br>
                        University of Information Technology and Management in Rzeszów (2013–2017)</p>

                    {/*<p className="opacity-70 mt-4 mb-12">Software Engineer , Rzeszów Polska</p>*/}
                    <div className="flex flex-col  gap-3 mb-8">
                        <span className="text-lg">Algorithms & Data Structures</span>
                        <span className="text-base opacity-70">Gained hands-on experience designing efficient algorithms and working with various data structures. Strengthened problem-solving and logical thinking skills applicable in software development. </span>
                    </div>
                    <div className="flex flex-col gap-3 ">
                        <span className="text-lg">Networking & Cisco Systems</span>
                        <span className="text-base opacity-70">Worked with Cisco networks, learning device configuration, protocols, and network management. Developed practical understanding of network architecture complementing programming skills. </span>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center ">
                    <img src={education} className="w-full h-full object-cover" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Experience;