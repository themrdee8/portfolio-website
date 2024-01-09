import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="flex justify-center items-center w-full h-full max-w-[1240px] mx-auto p-2">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500">
            Let's create great things together!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi I'm <span className="text-[#004aad]">Senyo</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            <TypeAnimation
              sequence={[
                "A Programmer...",
                2000,
                "A Software Engineer...",
                2000,
                "A Front-End Web Developer.",
                4000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h1>
          <p className="py-3 text-gray-600 max-w-[70%] m-auto">
            Introductory Description
          </p>
          <div className="flex items-center justify-between py-4 max-w-[330px] m-auto">
            <a href="https://www.linkedin.com/in/senyo-dedoo/">
              <div className="rounded-full text-[#004aad] shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-300 hover:scale-110">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/themrdee8">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-300 hover:scale-110">
                <FaGithub />
              </div>
            </a>
            <a href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-300 hover:scale-110">
                <AiOutlineMail />
              </div>
            </a>
            <a href="/#about">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-300 hover:scale-110">
                <BsPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
