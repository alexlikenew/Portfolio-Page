import React from 'react';
import {pageNotfound} from "../assets/img/index.jsx";
import Button from "../ui/Button.jsx";

function Page404(props) {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <img src={pageNotfound} alt="Page not found icon" title="Page not found icon"/>
            <Button classes="btn btn-secondary" link="/" title="Home">Let`s go Home</Button>
        </div>
    );
}

export default Page404;