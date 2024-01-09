import React from "react";
import html from "@/public/assets/skills/html.png";
import css from "@/public/assets/skills/css.png";
import csharp from "@/public/assets/skills/csharp.png";
import javascript from "@/public/assets/skills/javascript.png";
import react from "@/public/assets/skills/react.png";
import typescript from "@/public/assets/skills/typescript.png";
import tailwind from "@/public/assets/skills/tailwind.png";
import mongo from "@/public/assets/skills/mongo.png";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center">
        <p className="uppercase font-semibold tracking-widest text-[#004aad] text-lg">
          Skills
        </p>
        <h2 className="py-4">Fields Of Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl hover:scale-105 rounded-xl ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={html} alt="html" width="64" height="64" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl hover:scale-105 rounded-xl ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={css} alt="html" width="64" height="64" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl hover:scale-105 rounded-xl ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={csharp} alt="html" width="64" height="64" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>CSHARP</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl hover:scale-105 rounded-xl ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={javascript} alt="html" width="64" height="64" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl hover:scale-105 rounded-xl ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} alt="html" width="64" height="64" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl hover:scale-105 rounded-xl ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={typescript} alt="html" width="64" height="64" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>TYPESCRIPT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl hover:scale-105 rounded-xl ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwind} alt="html" width="64" height="64" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl hover:scale-105 rounded-xl ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mongo} alt="html" width="64" height="64" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>MONGO DB</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
