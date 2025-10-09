import React from 'react';
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router";
import Cookies from "./Cookies.jsx";

function AppLayout() {
    return (
        <>

            <Navigation/>
            <Outlet/>
            <Cookies/>
            <Footer/>

        </>
    );
}

export default AppLayout;