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
                    <div className="container flex flex-row justify-between items-center pt-3 pb-3">
                        <div className="navbar__bottom--left flex items-start">
                            <NavLink to="/">
                                <img src={logoWebp} className="max-h-6 opacity-0" alt=""/>

                            </NavLink>
                        </div>
                        <div className="navbar__bottom--right">
                            <ul className="flex flex-row list-none gap-2 ">
                                <li className="flex align-center items-center px-3">
                                    <NavLink to="/">
                                        <span>Home </span>
                                    </NavLink>
                                </li>
                                <li className="flex align-center items-center px-3">
                                    <NavLink to="/about">
                                        <span>About me </span>
                                    </NavLink>
                                </li>
                                <li className="flex align-center items-center px-3">
                                    <NavLink to="/blog">
                                        <span>Blog </span>
                                    </NavLink>
                                </li>
                                <li className="flex align-center items-center px-3">
                                    <NavLink to="/contact">
                                        <span>Kontakt</span>
                                    </NavLink>
                                </li>
                                <li className="flex align-center items-center px-2 top-[-3px]">
                                    <a href="https://www.linkedin.com/in/oleksandr-petryshyn/"
                                       title="Linkedin profile page" target="_blank"
                                       rel="noreferrer">
                                        <img src={linkedinIcon} alt="Linkedin profile page icon"
                                             title="Linkedin profile page"/>
                                    </a>
                                </li>
                                <li className="flex align-center items-center px-2"><a
                                    href="https://github.com/alexlikenew" title="Github profile page" target="_blank"
                                    rel="noreferrer">
                                    <img src={githubIcon} alt="Github profile page icon" title="Github profile page"/>
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

