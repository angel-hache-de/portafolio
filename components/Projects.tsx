import React from "react";

import Project from "./Project";

import { projects } from "../database/projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-elevated-base pt-3 scroll-smooth">
      <h1 className="section-title">
        My projects
      </h1>
      <div className="grid grid-cols-2 gap-8 section-container">
        {
          projects.map(p => (
            <Project key={p.name} project={p} />
          ))
        }
      </div>
      {/*<Image src={TypescriptImage} alt="" height={50} width={50} />*/}
      {/*<a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a>*/}
    </section>
  );
};

export default Projects;
