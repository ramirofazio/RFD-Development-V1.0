import React from "react";
import { projectsData } from "./projectsData";
import Project from "./Project";

export default function Projects() {
  return (
    <div>
      {projectsData.map((p, index) => {
        return (
          <div key={index}>
            <Project name={p.name} description={p.description} link={p.link} />
          </div>
        );
      })}
    </div>
  );
}
