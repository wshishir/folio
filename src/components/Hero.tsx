"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import HeroImage from "/portfolio/public/heroImage.png";
export function Hero() {
  return (
    <div className="h-[50rem] bg-black-100 flex flex-col items-center justify-center relative w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl  md:text-7xl font-bold text-white ">
                        I'm a Full Stack <text className="bg-purple inline-block text-transparent bg-clip-text">Developer</text>
                    </h2>
                    <p className="text-gray-500  font-Roboto py-4 max-w-md">
                        I have experience of  building and desgining Web Applications.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Node Js and Next Js.
                    </p>
                </div>

                <div>
                    <Image
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl sm:w-auto w-3/4 mx-auto"
                    />
                </div>
            </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
