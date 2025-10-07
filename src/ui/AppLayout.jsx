import React from 'react';
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router";

function AppLayout() {
    return (
        <>

        {/*<Navigation />*/}
       <Outlet />
            <Footer/>
        </>
    );
}

export default AppLayout;