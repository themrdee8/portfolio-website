import Image from "next/legacy/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import noa from "@/public/assets/projects/noa-theta.jpg";

const noaTheta = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          src={noa}
          alt="/"
          objectFit="cover"
          layout="fill"
        />
        <div className="absolute text-white top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-y-[-50%] translate-x-[-50%] z-10 p-2">
          <h2 className="py-2">Noa Theta</h2>
          <h3>React JS / Tailwind / Mongo DB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase tracking-widest font-semibold text-[#004aad] text-lg">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p className="py-2">Project details</p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <Link href="https://github.com/themrdee8/noa-theta">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 p-4 rounded-xl">
          <div className="p-2">
            <p className="text-center font-semibold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center text-gray-700 py-2">
                <RiRadioButtonFill className="pr-1" />
                Next Js
              </p>
              <p className="flex items-center text-gray-700 py-2">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="flex items-center text-gray-700 py-2">
                <RiRadioButtonFill className="pr-1" />
                Clerk
              </p>
              <p className="flex items-center text-gray-700 py-2">
                <RiRadioButtonFill className="pr-1" />
                OpenAI API
              </p>
              <p className="flex items-center text-gray-700 py-2">
                <RiRadioButtonFill className="pr-1" />
                Replicate AI API
              </p>
              <p className="flex items-center text-gray-700 py-2">
                <RiRadioButtonFill className="pr-1" />
                Crisp
              </p>
              <p className="flex items-center text-gray-700 py-2">
                <RiRadioButtonFill className="pr-1" />
                Stripe
              </p>
              <p className="flex items-center text-gray-700 py-2">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default noaTheta;
