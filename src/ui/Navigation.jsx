import React from 'react';
import {NavLink} from "react-router";

function Navigation(props) {
    return (
        <div className="nav absolute top-0 left-0 w-full flex justify-center items-center">
            <div className="container">
            <div className="navbar w-full flex flex-col gap-0">
                <div className="navbar__top flex-row justify-between items-center pt-3 pb-3">
                    <div className="navbar__top--left"></div>
                    <div className="navbar__top--right"></div>
                </div>

                <div className="navbar-bottom flex flex-row justify-between items-center pt-3 pb-3">
                    <div className="navbar__bottom--left"></div>
                    <div className="navbar__bottom--right">
                        <ul className="flex flex-row list-none gap-2 ">
                            <li>
                                <NavLink to="/">
                                    <span>Home </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/kontakt">
                                    <span>Kontakt </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            </div>

        </div>

    );
}

export default Navigation;

