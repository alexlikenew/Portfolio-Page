import React from 'react';
import aboutImage from "../assets/img/about-me.jpg";
import ArticleCard from "./ArticleCard.jsx";
import {useArticles} from "../features/articles/useArticles.jsx";
import {getArticles} from "../services/apiArticles.jsx";

// export const articles = [
//     {
//         title: "Boost Frontend Performance with Lazy Loading",
//         category: "Performance",
//         readingTime: "4 min read",
//         content: `Lazy loading is a simple but powerful technique to improve page speed by deferring loading of images or components until they’re needed. In modern web development, this helps reduce initial payload and speeds up Time to Interactive. You can implement it in React using ` + "`React.lazy`" + ` and ` + "`Suspense`" + `, or for images via the ` + "`loading='lazy'`" + ` attribute. Be mindful of SEO and accessibility when applying it, and always test on slow connections to see real gains.`,
//         url: "/blog/boost-frontend-performance-lazy-loading",
//         author: "Oleksandr Petryshyn",
//         createdDate: "2025-08-10",
//     },
//     {
//         title: "CSS Grid vs Flexbox: When to Use Each",
//         category: "CSS Layout",
//         readingTime: "5 min read",
//         content: `CSS Grid and Flexbox are two of the most powerful layout systems in modern CSS. Flexbox works great for one-dimensional layouts (row or column), while Grid excels at two-dimensional layouts (rows + columns). In practice, you can combine both: use Grid for overall page structure and Flexbox for alignment within components. Learn how to decide, and some real examples of hybrid usage in responsive design.`,
//         url: "/blog/css-grid-vs-flexbox",
//         author: "Oleksandr Petryshyn",
//         createdDate: "2025-07-22",
//     },
//     {
//         title: "Introduction to Micro Frontends Architecture",
//         category: "Architecture",
//         readingTime: "6 min read",
//         content: `Micro frontends is an approach where a larger frontend application is broken into smaller, semi-independent “micro apps” that can be developed and deployed separately. It’s inspired by microservices, but for UI code. Key benefits include team autonomy and scalability. Drawbacks include increased complexity and integration overhead. This article introduces the concept, common patterns (e.g. module federation), and trade-offs to consider. [Learn more on Wikipedia about Micro Frontend](/blog/introduction-to-micro-frontends)`,
//         url: "/blog/introduction-to-micro-frontends",
//         author: "Oleksandr Petryshyn",
//         createdDate: "2025-06-30",
//     },
// ];


function LatestArticles(props) {

    let {data: articles, isPending, error} = useArticles();


    return (
        <div className="w-full mt-50 mb-50">
            <div className="container flex justify-center flex-col gap-10">
                <div className="flex items-center flex-col ">
                    <h2 className="text-5xl font-bold relative inline-block mb-18  text-white">Articles
                        <span className="brush-bg left-[-16%] w-[141%] h-[3.3em]"></span></h2>
                    {/*<h2 className="text-5xl font-bold mb-8">I work with every day</h2>*/}
                    <p className="opacity-70 mb-4 text-center">
                        Here I share my thoughts, lessons, and discoveries from everyday work as a frontend
                        developer.<br></br>
                        You’ll find practical tips, project insights, and stories from real-world experience.
                    </p>
                </div>
                {isPending ? <div className="flex justify-center">Loading...</div> :
                    <div className="w-full grid-cols-3 grid gap-8">
                        {articles.map(article => <ArticleCard title={article.title} category={article.category}
                                                              readingTime={article.readingTime}
                                                              content={article.content}
                                                              url={article.url} author={article.author}
                                                              createdDate={article.createdDate}/>)}

                    </div>}

            </div>
        </div>
    );
}

export default LatestArticles;