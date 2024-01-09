import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItems = ({ title, bgImage, projectUrl }) => {
  return (
    <>
      <div className="relative flex items-center justify-center w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#004aad] to-[#4E78B1]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={bgImage}
          alt="netflixUI"
        />
        <div className="hidden group-hover:block absolute top[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-white text-2xl tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">React JS</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-800 font-semibold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectItems;
