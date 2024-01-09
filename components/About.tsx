import React from "react";
import me from "@/public/assets/me.jpeg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen py-16 p-2 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-widest font-semibold text-[#004aad] text-lg">
            About
          </p>
          <h2 className="py-4">Welcome To My World</h2>
          <p className="py-2 text-gray-600">|| A world of possibilities</p>
          <p className="py-2 text-gray-900">
            How it started what programming languages i know
          </p>
          <p className="py-2 text-gray-900">
            My interests and why they interest me
          </p>
          <Link href="#projects">
            <p className="py-2 text-gray-900 cursor-pointer underline">
              Check out some of my projects
            </p>
          </Link>
        </div>
        <div className="w-full h-full m-auto shadow-gray-400 shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={me} alt="me" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
