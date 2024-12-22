import React from "react";
import {Canvas} from "@react-three/fiber";

export const Hero = () => {
    /*console.log("Hero rendered");*/
    /*return <section className="section">Hero</section>*/
    return (
        <section id="home" className="h-[100vh] bg-primary flex items-center w-full flex-col">
            <div className="container mx-auto h-full flex justify-center">
                <div className="content-wrapper flex items-center">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="text-content">
                            <h1 className="text-4x1 lg:text-5x1 pb-4 font-bold">
                                Hey, I'm <span className="text-white-300">Sia</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};