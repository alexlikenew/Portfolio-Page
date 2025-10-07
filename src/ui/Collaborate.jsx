import React from 'react';
// import aboutImage from "../assets/img/about.png";
import collaborateImage from "../assets/img/collaborate.png";
function Collaborate(props) {
    return (
        <div className="w-full mt-40 mb-40" >
            <div className="container container--1110 grid grid-cols-2 gap-36">
                <div className="w-full flex justify-center items-center">
                    <img src={collaborateImage} className="w-full h-full object-cover" alt=""/>
                </div>
                <div className="w-full flex flex-col">
                    <h2 className="text-5xl font-bold">Experience working in different environments</h2>
                    <p className="opacity-70 mt-4 mb-12">
                        Over the years, I’ve worked remotely, in hybrid teams, and on-site — adapting to various workflows and communication styles.
                        I value collaboration, clear communication, and a shared sense of ownership in every project.
                    </p>

                    <div className="flex flex-col gap-3 mb-8">
                        <span className="text-xl font-semibold">Remote Collaboration</span>
                        <span className="text-base opacity-70">
          I’m comfortable working fully remotely using tools like Slack, Jira, and GitHub to stay in sync and maintain productivity.
        </span>
                    </div>

                    <div className="flex flex-col gap-3 mb-8">
                        <span className="text-xl font-semibold">Hybrid Teams</span>
                        <span className="text-base opacity-70">
          I enjoy the balance of hybrid work — combining focused individual effort with regular in-person collaboration.
        </span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-xl font-semibold">Office Environment</span>
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