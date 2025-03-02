import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';
import { PiSmileySadLight } from 'react-icons/pi'; //Example, change to your icon library.

const NotFoundPage: React.FC = () => {
    const error = useRouteError();
    let errorMessage = "Oh no! Looks like the url is not available";

    if (error) {
        errorMessage = error.message || errorMessage;
    }

    return (
        <section className="section flex-col items-center justify-center h-screen">
            <PiSmileySadLight className="text-7xl m-5" />
            <div className="font-semibold text-2xl">{errorMessage}</div>
            <NavLink
                to="/"
                className="p-3 lg:p-2.5 text-white border-2 border-emerald-400 rounded hover:text-[#fea55f] hover:border-white m-5"
                aria-label="Back to home"
            >
                back to home
            </NavLink>
        </section>
    );
}

export default NotFoundPage;