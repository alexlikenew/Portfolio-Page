import React from 'react';
import aboutImage from "../assets/img/about-me.jpg";
import ArticleCard from "./ArticleCard.jsx";
import {useArticles} from "../features/articles/useArticles.jsx";
import {getArticles} from "../services/apiArticles.jsx";

function LatestArticles(props) {

    let {data: articles, isPending, error} = useArticles();

    return (
        <div className="w-full mt-40 mb-50">
            <div className="container flex justify-center flex-col gap-10">
                <div className="flex items-center flex-col ">
                    <h2 className="text-5xl font-bold relative inline-block mb-18  text-white">Articles
                        <span className="brush-bg left-[-16%] w-[141%] h-[3.3em]"></span></h2>
                    <p className="opacity-70 mb-4 text-center">
                        Here I share my thoughts, lessons, and discoveries from everyday work as a frontend
                        developer.<br></br>
                        You’ll find practical tips, project insights, and stories from real-world experience.
                    </p>
                </div>
                {isPending ? <div className="flex justify-center">Loading...</div> :
                    <div className="w-full grid-cols-3 grid gap-8">
                        {articles.slice(0, 3).map(article => <ArticleCard key={article.url} article={article}/>)}
                    </div>}
            </div>
        </div>
    );
}

export default LatestArticles;