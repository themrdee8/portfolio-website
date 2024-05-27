import React from "react";
import netflixUI from "@/public/assets/projects/netflixUI2.png";
import quote from "@/public/assets/projects/quote2.png";
import ProjectItems from "./ProjectItems";
import noa from "@/public/assets/projects/noa-theta.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="mx-auto max-w-[1240px] px-2 py-16">
        <p className="uppercase font-semibold tracking-widest text-[#004aad] text-lg">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Netflix-UI"
            bgImage={netflixUI}
            projectUrl="/netflixUI"
          />
          <ProjectItems
            title="Quote Machine"
            bgImage={quote}
            projectUrl="/quoteMachine"
          />
          <ProjectItems
            title="Noa Theta"
            bgImage={noa}
            projectUrl="/noaTheta"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
