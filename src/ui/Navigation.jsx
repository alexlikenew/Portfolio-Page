import React from 'react';
import {NavLink} from "react-router";

function Navigation(props) {
    return (
        <ul className="flex flex-row list-none gap-2 px-4">
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
    );
}

export default Navigation;