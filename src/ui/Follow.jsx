import React from 'react';
import {facebookIcon, githubIcon, gitlabIcon, instagramIcon, linkedinIcon, telegramIcon} from "../assets/img/index.jsx";

function Follow({classes}) {
    return (
        <div className={`${classes} rounded-[10px] mt-14 flex flex-col pt-4 pb-4 gap-4 justify-center items-center`} >
            <span className="text-lg font-bold">Follow me</span>
            <div className="flex justify-center items-center gap-16">
                <a href="https://www.linkedin.com/in/oleksandr-petryshyn/" title="Linkedin profile page" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="Linkedin profile page icon" title="Linkedin profile page"/>
                </a>

                <a href="https://gitlab.com/alexlikenew" title="Gitlab profile page" target="_blank" rel="noreferrer">
                    <img src={gitlabIcon} alt="Gitlab profile page icon" title="Gitlab profile page"/>
                </a>

                <a href="https://github.com/alexlikenew" title="Github profile page" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Github profile page icon" title="Github profile page"/>
                </a>

                <a href="https://www.facebook.com/alexlikenew" title="Facebook profile page" target="_blank" rel="noreferrer">
                    <img src={facebookIcon} alt="Facebook profile page icon" title="Facebook profile page"/>
                </a>

                <a href="https://t.me/alexlikenew" title="Telegram profile page" target="_blank" rel="noreferrer">
                    <img src={telegramIcon} alt="Telegram profile page icon" title="Telegram profile page"/>
                </a>

                <a href="https://instagram.com/alex_petryshyn" title="Instagram profile page" target="_blank" rel="noreferrer">
                    <img src={instagramIcon} alt="Instagram profile page icon" title="Instagram profile page"/>
                </a>
            </div>
        </div>
    );
}

export default Follow;