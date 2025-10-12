import React from 'react';
import arrowRight from "../assets/icons/arrow.svg";
import Button from "./Button.jsx";
import {NavLink} from "react-router";
import Follow from "./Follow.jsx";
import {useArticles} from "../features/articles/useArticles.jsx";
import {logoSvg, logoWebp} from "../assets/img/index.jsx";

function Footer(props) {
    let {data: articles, isPending, error} = useArticles();
    return (
        <div className="w-full pt-16 pb-8 bg-primary-200">
            <div className="container flex flex-col gap-16 justify-center items-center">
                <div
                    className="w-full flex justify-center items-center flex-col gap-4 max-w-1/2 text-center text-balance ">
                    <h2 className="text-3xl">Let’s create something <span
                        className="text-tertiary font-bold">amazing</span> together</h2>
                    <p className="opacity-70 mt-4 mb-4">
                        Let’s build something great together. Whether you need a modern, high-performance website
                        or a creative frontend solution, I’m here to turn your ideas into reality.
                        <br></br>Get in touch and let’s make your project stand out.
                    </p>
                    <Button link="/contact" classes="btn btn-transparent ">Contact <img className="" src={arrowRight}
                                                                                        alt=""/></Button>
                </div>
                <div className="w-full flex flex-col pt-12 border-t-1 border-secondary-300">
                    <div className=" grid grid-cols-5 ">
                        <div className="flex flex-col ">
                            <h3 className="text-lg font-bold mb-4">Home</h3>
                            <NavLink className="mb-2" to="/">
                                <span>Home</span>
                            </NavLink>
                            <NavLink className="mb-2" to="/about">

                                <span>About me</span>
                            </NavLink> <NavLink className="mb-2" to="/faq">

                            <span>FAQ</span>
                        </NavLink>
                            <NavLink className="mb-2" to="/blog"><span>Blog</span></NavLink>
                            <NavLink className="mb-2" to="/contact"><span>Contact</span></NavLink>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold mb-4">Blog</h3>

                            {isPending ?
                                <div className="flex justify-center items-center">
                                    <div className="loader"></div>
                                </div> : articles.slice(0, 5).map((article) => (
                                    <NavLink className="mb-2" to={`/blog/${article.url}`} title={article.title}>
                                        <span>  {article.title.length > 30
                                            ? article.title.slice(0, 26) + '...'
                                            : article.title}</span>
                                    </NavLink>
                                ))
                            }
                        </div>
                        <div className="flex flex-col ">
                            <h3 className="text-lg font-bold mb-4">Contact</h3>
                            <div className="flex gap-3 align-center mb-2">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_240_2562)">
                                        <path
                                            d="M21 10.5332C21 17.5332 12 23.5332 12 23.5332C12 23.5332 3 17.5332 3 10.5332C3 8.14625 3.94821 5.85707 5.63604 4.16924C7.32387 2.48141 9.61305 1.5332 12 1.5332C14.3869 1.5332 16.6761 2.48141 18.364 4.16924C20.0518 5.85707 21 8.14625 21 10.5332Z"
                                            stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path
                                            d="M12 13.5332C13.6569 13.5332 15 12.1901 15 10.5332C15 8.87635 13.6569 7.5332 12 7.5332C10.3431 7.5332 9 8.87635 9 10.5332C9 12.1901 10.3431 13.5332 12 13.5332Z"
                                            stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_240_2562">
                                            <rect width="24" height="24" fill="white"
                                                  transform="translate(0 0.533203)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>
                                    Rzeszów, Poland
                                </span>
                            </div>
                            <div className="flex gap-3 align-center mb-2">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4 4.5332H20C21.1 4.5332 22 5.4332 22 6.5332V18.5332C22 19.6332 21.1 20.5332 20 20.5332H4C2.9 20.5332 2 19.6332 2 18.5332V6.5332C2 5.4332 2.9 4.5332 4 4.5332Z"
                                        stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M22 6.5332L12 13.5332L2 6.5332" stroke="black" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>

                                <a href="mailto:alexlikenew.dev@gmail.com" title="alexlikenew.dev@gmail.com">
                                    alexlikenew.dev@gmail.com
                                </a>
                            </div>
                            <div>
                                <img className="max-w-36" src={logoWebp} alt=""/>
                            </div>
                        </div>
                    </div>
                    <Follow classes={"bg-secondary-100"}/>
                    <div className="flex justify-between mt-12 ">
                        <div>© {new Date().getFullYear()} All Rights Reserved</div>
                        <ul className="flex flex-row list-none gap-4 ">
                            <li>
                                <NavLink to="/privacy-policy">
                                    <span className="underline">Privacy policy</span>
                                </NavLink>
                            </li>
                            <li>
                               <span className="underline cursor-pointer">
                                   Cookies settings
                               </span>
                            </li>
                            <li>
                               <span>
                                   Realization: Oleksandr Petryshyn
                               </span>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;