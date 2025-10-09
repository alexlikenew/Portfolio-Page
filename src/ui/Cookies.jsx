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
        <div className={`cookies ${show ? "show" : ""}`}>
            <header>
                <img className="w-6 h-6" src={cookieImage} alt="Cookies icon" title="Cookies icon"/>
                <h2>Cookies Consent</h2>
            </header>

            <div className="data">
                <p>
                    This website uses cookies to improve your browsing experience and
                    analyze traffic.{" "}
                    <NavLink to="/privacy-policy">
                        Read more...
                    </NavLink>
                </p>
            </div>

            <div className="buttons">
                <Button classes="btn btn-tertiary " id="acceptBtn" onClick={handleAccept}>
                    Accept
                </Button>
                <Button classes="btn btn-secondary " id="declineBtn" onClick={handleDecline}>
                    Decline
                </Button>


            </div>
        </div>
    );
}

export default Cookies;
