import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../constants";
import { Navbar, Footer } from ".";

const ProjectPage = () => {
  const { projectId } = useParams();

  const projectDetails = projects.find((project) => project.id === projectId);

  console.log(projectDetails);

  return (
    <div className="relative z-0 bg-primary flex flex-col h-screen justify-between">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar isHome={false} />
      </div>
      <div className="flex flex-col md:flex-row px-2 md:px-12 mt-[86px]">
        <div className="md:hidden flex flex-col items-center gap-5 p-3 ">
          <img
            src={projectDetails.image}
            alt={projectDetails.name}
            className="w-full md:w-3/4"
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center gap-5 p-3">
          <h2 className="text-3xl font-bold text-white">
            {projectDetails.name}
          </h2>
          <p className="text-white text-center">{projectDetails.description}</p>
          <div className="flex gap-5">
            <a
              href={projectDetails.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-5 py-2 rounded-full"
            >
              Github
            </a>
            <a
              href={projectDetails.site_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-5 py-2 rounded-full"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-3">
          <img
            src={projectDetails.image}
            alt={projectDetails.name}
            className="w-full md:w-3/4"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectPage;
