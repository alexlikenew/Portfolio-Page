import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router";
import {githubIcon, linkedinIcon, logoSvg, logoWebp} from "../assets/img/index.jsx";


function Navigation(props) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }

        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className={`nav  z-1 fixed top-0 left-0 w-full flex justify-center items-center ${isOpen ? 'open' : ''}`}>

            <div className="navbar w-full flex flex-col gap-0">


                <div className="navbar__bottom flex align-center justify-center items-center ">
                    <div
                        className="container flex flex-col md:flex-row justify-between items-center pt-2 pb-2 sm:pt-3 sm:pb-3 md:pt-3 md:pb-3">
                        <div className="navbar__bottom--left flex items-start">
                            <NavLink to="/" title="Home">
                                <img src={logoWebp} className="max-h-4 sm:max-h-5 md:max-h-6 opacity-0"
                                     alt="Alexlikenew logo" title="Alexlikenew logo"/>
                            </NavLink>
                        </div>
                        <div className="navbar__bottom--right">
                            <ul className="flex  md:flex-row list-none gap-1 md:gap-2 ">
                                <li className="flex align-center items-center px-2 md:px-3">
                                    <NavLink to="/">
                                        <span className="text-sm md:text-base">Home </span>
                                    </NavLink>
                                </li>
                                <li className="flex align-center items-center px-2 md:px-3">
                                    <NavLink to="/about">
                                        <span className="text-sm md:text-base">About me </span>
                                    </NavLink>
                                </li>
                                <li className="flex align-center items-center px-2 md:px-3">
                                    <NavLink to="/blog">
                                        <span className="text-sm md:text-base">Blog </span>
                                    </NavLink>
                                </li>
                                <li className="flex align-center items-center px-2 md:px-3">
                                    <NavLink to="/contact">
                                        <span className="text-sm md:text-base">Kontakt</span>
                                    </NavLink>
                                </li>
                                <li className="flex align-center items-center px-1 md:px-2 top-[-3px]">
                                    <a href="https://www.linkedin.com/in/oleksandr-petryshyn/"
                                       title="Linkedin profile page" target="_blank"
                                       rel="noreferrer">
                                        <img className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" src={linkedinIcon}
                                             alt="Linkedin profile page icon"
                                             title="Linkedin profile page"/>
                                    </a>
                                </li>
                                <li className="flex align-center items-center px-1 md:px-2"><a
                                    href="https://github.com/alexlikenew" title="Github profile page" target="_blank"
                                    rel="noreferrer">
                                    <img className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" src={githubIcon}
                                         alt="Github profile page icon" title="Github profile page"/>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default Navigation;
