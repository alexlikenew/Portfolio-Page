import React from 'react';
import {facebookIcon, githubIcon, gitlabIcon, instagramIcon, linkedinIcon, telegramIcon} from "../assets/img/index.jsx";

function Follow({classes}) {
    return (
        <div className={`${classes} rounded-[10px] mt-4 sm:mt-6 md:mt-8 flex flex-col pt-2 pb-2 sm:pt-3 sm:pb-3 md:pt-4 md:pb-4 gap-2 sm:gap-3 md:gap-4 justify-center items-center`}>
            <span className="text-base sm:text-lg md:text-lg font-bold">Follow me</span>
            <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 flex-wrap">
                <a href="https://www.linkedin.com/in/oleksandr-petryshyn/" title="Linkedin profile page" target="_blank"
                   rel="noreferrer">
                    <img className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" src={linkedinIcon} alt="Linkedin profile page icon" title="Linkedin profile page"/>
                </a>

                <a href="https://gitlab.com/alexlikenew" title="Gitlab profile page" target="_blank" rel="noreferrer">
                    <img className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" src={gitlabIcon} alt="Gitlab profile page icon" title="Gitlab profile page"/>
                </a>

                <a href="https://github.com/alexlikenew" title="Github profile page" target="_blank" rel="noreferrer">
                    <img className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" src={githubIcon} alt="Github profile page icon" title="Github profile page"/>
                </a>

                <a href="https://www.facebook.com/alexlikenew" title="Facebook profile page" target="_blank"
                   rel="noreferrer">
                    <img className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" src={facebookIcon} alt="Facebook profile page icon" title="Facebook profile page"/>
                </a>

                <a href="https://t.me/alexlikenew" title="Telegram profile page" target="_blank" rel="noreferrer">
                    <img className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" src={telegramIcon} alt="Telegram profile page icon" title="Telegram profile page"/>
                </a>

                <a href="https://instagram.com/alex_petryshyn" title="Instagram profile page" target="_blank"
                   rel="noreferrer">
                    <img className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" src={instagramIcon} alt="Instagram profile page icon" title="Instagram profile page"/>
                </a>
            </div>
        </div>
    );
}

export default Follow;