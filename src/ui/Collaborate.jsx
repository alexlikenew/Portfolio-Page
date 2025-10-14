import React from 'react';
// import aboutImage from "../assets/img/about.png";
import collaborateImage from "../assets/img/collaborate.png";
import {hybridWorkImage, officeWork, remoteWorkImage} from "../assets/img/index.jsx";

function Collaborate(props) {
    return (
        <div className="w-full mt-20 sm:mt-28 md:mt-32 lg:mt-40 mb-20 sm:mb-28 md:mb-32 lg:mb-40">
            <div className="container container--1110 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-24 lg:gap-36">
                <div className="w-full flex justify-center items-center">
                    <img loading="lazy" src={collaborateImage} className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-cover"
                         alt="Team in which i working "/>
                </div>
                <div className="w-full flex flex-col">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">How I Work</h2>
                    <p className="opacity-70 mt-2 sm:mt-3 md:mt-4 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base">
                        Over the years, I’ve worked remotely, in hybrid teams, and on-site — adapting to various
                        workflows and communication styles.
                        I value collaboration, clear communication, and a shared sense of ownership in every project.
                    </p>

                    <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                        <div className="flex items-center gap-2">
                            <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" src={remoteWorkImage} alt="Remote Work Icon"
                                 title="Remote Work Icon"/>
                            <span className="text-lg sm:text-xl font-semibold">Remote Collaboration</span>
                        </div>
                        <span className="text-sm sm:text-base opacity-70">
          I’m comfortable working fully remotely using tools like Slack, Jira, and GitHub to stay in sync and maintain productivity.
        </span>
                    </div>

                    <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                        <div className="flex items-center gap-2">
                            <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" src={hybridWorkImage} alt="Hybrid Work Icon"
                                 title="Hybrid Work Icon"/>
                            <span className="text-lg sm:text-xl font-semibold">Hybrid Teams</span>
                        </div>
                        <span className="text-sm sm:text-base opacity-70">
          I enjoy the balance of hybrid work — combining focused individual effort with regular in-person collaboration.
        </span>
                    </div>

                    <div className="flex flex-col gap-2 sm:gap-3">
                        <div className="flex items-center gap-2">
                            <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" src={officeWork} alt="Office Work Icon"
                                 title="Office Work Icon"/>
                            <span className="text-lg sm:text-xl font-semibold">Office Environment</span>
                        </div>
                        <span className="text-sm sm:text-base opacity-70">
          Working on-site helps build stronger team bonds and supports faster decision-making in fast-paced projects.
        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collaborate;