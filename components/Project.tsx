import React, { FC, useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

import { Project } from "../interfaces";
import ProjectSlideshow from "./ProjectSlideshow";

interface Props {
  project: Project;
}

const Project: FC<Props> = ({project}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleShowDescription = () => {
    setShowDescription((sd) => !sd);
  };

  return (
    <div className="project-card">
      {/* CAROUSEL */}
      <ProjectSlideshow images={project.images} />

      {/* INFO SECTION */}
      <section
        className={`
          grid grid-rows-5
        bg-highlight h-60 z-10 px-2 pb-4 
          ${showDescription && "-my-48"} 
          transition-all duration-500
          `}
      >
        {/* TITLE AND SHOW MORE */}
        <div className="grid grid-cols-6 gap-1 my-1">
          <a href={project.linkToSite} target="_blank" rel="noreferrer">
            <EyeIcon className="w-6 mx-auto my-1 stroke-third stroke-2 cursor-pointer" />
          </a>
          <p className="
              text-white
              text-lg md:text-xl truncate
              col-span-4 font-extrabold text-center
              ">
            {project.name}
          </p>
          {showDescription ? (
            <ChevronDownIcon
              className="w-6 my-1 stroke-third cursor-pointer stroke-2"
              onClick={toggleShowDescription}
            />
          ) : (
            <ChevronUpIcon
              className="w-6 my-1 stroke-third cursor-pointer stroke-2"
              onClick={toggleShowDescription}
            />
          )}
        </div>

          <p className=" !text-white
                row-span-3 overflow-y-auto
                info-text
                text-center mx-2 mb-1
                ">
            {project.description}
          </p>

          {/* TECHS */}
          <section className="mx-2 flex gap-3 justify-center overflow-x-auto custom-scrollbar">
            {project.techs.map((tech) => (
              <figure key={tech} className="flex-[0_0_auto]">
                <Image
                  src={tech}
                  alt="Tech logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </figure>
            ))}
          </section>
        {/*<div className="
            h-4/5 overflow-y-auto max-w-full pb-2 my-2 flex 
            flex-col justify-between items-center
        ">
        </div>*/}
      </section>
    </div>
  );
};

export default Project;
