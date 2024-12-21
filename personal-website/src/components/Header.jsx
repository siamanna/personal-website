import React from "react";
import { NavBar } from "./NavBar";
import { Socials } from "./Socials";
import siamanna from "../assets/img/logos/siamanna.svg";
import laptop from "../assets/img/logos/laptop.svg";

export const Header = () => {
    return <header className="h-20 flex bg-black items-center fixed top-0 w-full text-white z-10">
        <div className="container mx-auto h-full flex items-center justify-center lg:justify-between">
            <img src={siamanna}/>
            <img src={laptop}/>
            <NavBar />
            <Socials />
        </div>
    </header>
}