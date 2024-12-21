import React from "react";
import {navigation} from "../data";
import {Link} from "react-scroll";

export const NavBar = () => {
    return ( 
        <nav>
            <ul className="flex space-x-8 capitalize text-[15px]">
                {navigation.map((item, index) => {
                    return (
                        <li className="text-white hover:text-fuchsia-500 cursor-pointer">

                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};