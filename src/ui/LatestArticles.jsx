import React from 'react';
import aboutImage from "../assets/img/about-me.jpg";

function LatestArticles(props) {
    return (
        <div className="w-full mt-50 mb-50">
            <div className="container flex justify-center flex-col gap-10">
                <div className="flex items-center flex-col ">
                    <h2 className="text-5xl font-bold relative inline-block mb-18  text-white">Articles
                        <span className="brush-bg left-[-16%] w-[141%] h-[3.3em]"></span></h2>
                    {/*<h2 className="text-5xl font-bold mb-8">I work with every day</h2>*/}
                    <p className="opacity-70 mb-4 text-center">
                        Here I share my thoughts, lessons, and discoveries from everyday work as a frontend developer.<br></br>
                        You’ll find practical tips, project insights, and stories from real-world experience.
                    </p>
                </div>
                <div className="w-full flex justify-center gap-12">

                </div>
            </div>
        </div>
    );
}

export default LatestArticles;