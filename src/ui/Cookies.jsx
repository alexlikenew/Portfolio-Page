import React, {useEffect, useState} from "react";
import Button from "./Button.jsx";
import {NavLink} from "react-router";
import {cookieImage} from "../assets/icons/index.jsx";

function Cookies() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // sprawdzamy czy cookie już istnieje
        if (document.cookie.includes("cookieBy=cookies")) return;
        setShow(true);
    }, []);

    const handleAccept = () => {
        document.cookie = "cookieBy=cookies; max-age=" + 60 * 60 * 24 * 30; // 30 dni
        setShow(false);
    };

    const handleDecline = () => {
        setShow(false);
    };


    return (
        <div className={`cookies flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-8 gap-4 md:gap-6 ${show ? "show" : ""}`}>
            <header className="flex items-center gap-2 md:gap-4">
                <img className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" src={cookieImage} alt="Cookies icon" title="Cookies icon"/>
                <h2 className="text-base sm:text-lg md:text-xl">Cookies Consent</h2>
            </header>

            <div className="data flex-1">
                <p className="text-sm sm:text-base md:text-base">
                    This website uses cookies to improve your browsing experience and
                    analyze traffic.{" "}
                    <NavLink to="/privacy-policy">
                        Read more...
                    </NavLink>
                </p>
            </div>

            <div className="buttons flex flex-col sm:flex-row gap-2 md:gap-4">
                <Button classes="btn btn-tertiary w-full sm:w-auto" id="acceptBtn" onClick={handleAccept}>
                    Accept
                </Button>
                <Button classes="btn btn-secondary w-full sm:w-auto" id="declineBtn" onClick={handleDecline}>
                    Decline
                </Button>


            </div>
        </div>
    );
}

export default Cookies;