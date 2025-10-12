import React from 'react';
// import aboutImage from "../assets/img/about.png";
import collaborateImage from "../assets/img/collaborate.png";
import {hybridWorkImage, officeWork, remoteWorkImage} from "../assets/img/index.jsx";

function Collaborate(props) {
    return (
        <div className="w-full mt-40 mb-40">
            <div className="container container--1110 grid grid-cols-2 gap-36">
                <div className="w-full flex justify-center items-center">
                    <img loading="lazy" src={collaborateImage} className="w-full h-full object-cover"
                         alt="Team in which i working "/>
                </div>
                <div className="w-full flex flex-col">
                    <h2 className="text-5xl font-bold">How I Work</h2>
                    <p className="opacity-70 mt-4 mb-8">
                        Over the years, I’ve worked remotely, in hybrid teams, and on-site — adapting to various
                        workflows and communication styles.
                        I value collaboration, clear communication, and a shared sense of ownership in every project.
                    </p>

                    <div className="flex flex-col gap-3 mb-8">
                        <div className="flex items-center gap-2">
                            <img className="w-8 h-8" src={remoteWorkImage} alt="Remote Work Icon"
                                 title="Remote Work Icon"/>
                            <span className="text-xl font-semibold">Remote Collaboration</span>
                        </div>
                        <span className="text-base opacity-70">
          I’m comfortable working fully remotely using tools like Slack, Jira, and GitHub to stay in sync and maintain productivity.
        </span>
                    </div>

                    <div className="flex flex-col gap-3 mb-8">
                        <div className="flex items-center gap-2">
                            <img className="w-8 h-8" src={hybridWorkImage} alt="Hybrid Work Icon"
                                 title="Hybrid Work Icon"/>
                            <span className="text-xl font-semibold">Hybrid Teams</span>
                        </div>
                        <span className="text-base opacity-70">
          I enjoy the balance of hybrid work — combining focused individual effort with regular in-person collaboration.
        </span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <img className="w-8 h-8" src={officeWork} alt="Office Work Icon"
                                 title="Office Work Icon"/>
                            <span className="text-xl font-semibold">Office Environment</span>
                        </div>
                        <span className="text-base opacity-70">
          Working on-site helps build stronger team bonds and supports faster decision-making in fast-paced projects.
        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Collaborate;