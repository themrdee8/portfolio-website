import React from "react";
import me from "@/public/assets/me.jpeg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen py-16 p-2 flex items-center">
      <div className="max-w-[1200px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-widest font-semibold text-[#004aad] text-lg">
            About
          </p>
          <h2 className="py-4">Welcome To My World</h2>
          <p className="py-2 text-gray-600">|| A world of possibilities</p>
          <p className="py-2 text-gray-900">
            I&apos;ve always been fascinated by building and creating things,
            which led me to discover programming during my time at university.
            What started as curiosity has turned into a passion for developing
            projects that push the boundaries of what&apos;s possible in the
            ever-evolving world of software development.
          </p>
          <p className="py-4 text-gray-900">
            I&apos;m proficient in TypeScript, Python, HTML, React, and React
            Native, with additional experience in C++, C#, and other languages.
            My focus is primarily on front-end development, crafting intuitive
            and dynamic user experiences, while also enjoying the challenge of
            back-end development when needed.
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
